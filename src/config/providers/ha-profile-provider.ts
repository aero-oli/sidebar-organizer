import type {
  HassWithCallWS,
  ParsedSidebarYaml,
  ProfileConfigInfo,
  SidebarPreferencesEnvelope,
  SidebarProfileList,
} from '../types';

import YAML from 'yaml';

import { parseSidebarYamlConfig } from '../validation';

interface ProfileReadResponse extends ProfileConfigInfo {
  errors?: string[];
  parsed?: unknown;
  valid?: boolean;
  yaml?: string;
}

interface ProfileHass extends HassWithCallWS {
  connection?: {
    subscribeMessage<T>(callback: (message: T) => void, message: Record<string, unknown>): Promise<() => void>;
  };
}

export class HomeAssistantProfileProvider {
  constructor(
    private readonly hass: ProfileHass,
    private readonly userId?: string
  ) {}

  async info(): Promise<ProfileConfigInfo> {
    try {
      return await this.hass.callWS<ProfileConfigInfo>(this._message('sidebar_organizer/profile/info'));
    } catch (err) {
      return { available: false, error: this._errorMessage(err) };
    }
  }

  async read(): Promise<ParsedSidebarYaml & ProfileConfigInfo> {
    try {
      const response = await this.hass.callWS<ProfileReadResponse>(this._message('sidebar_organizer/profile/read'));
      const rawYaml = response.yaml || '';
      const parsed = parseSidebarYamlConfig(rawYaml);
      return {
        ...response,
        ...parsed,
        errors: response.valid === false && response.errors?.length ? response.errors : parsed.errors,
        rawYaml,
        valid: response.valid === false ? false : parsed.valid,
      };
    } catch (err) {
      return { available: false, errors: [this._errorMessage(err)], valid: false };
    }
  }

  async validate(yaml: string): Promise<{ errors: string[]; valid: boolean }> {
    try {
      return await this.hass.callWS<{ errors: string[]; valid: boolean }>({
        type: 'sidebar_organizer/config/validate',
        yaml,
      });
    } catch (err) {
      return { errors: [this._errorMessage(err)], valid: false };
    }
  }

  async write(yaml: string, expectedRevision?: string | null): Promise<ProfileConfigInfo> {
    return await this.hass.callWS<ProfileConfigInfo>(
      this._message('sidebar_organizer/profile/write', {
        yaml,
        expected_revision: expectedRevision ?? null,
      })
    );
  }

  async delete(expectedRevision?: string | null): Promise<ProfileConfigInfo> {
    return await this.hass.callWS<ProfileConfigInfo>(
      this._message('sidebar_organizer/profile/delete', {
        expected_revision: expectedRevision ?? null,
      })
    );
  }

  async list(): Promise<SidebarProfileList> {
    return await this.hass.callWS<SidebarProfileList>({ type: 'sidebar_organizer/profile/list' });
  }

  async copy(source: string, targetUserId: string, expectedRevision?: string | null): Promise<ProfileConfigInfo> {
    return await this.hass.callWS<ProfileConfigInfo>({
      type: 'sidebar_organizer/profile/copy',
      source,
      target_user_id: targetUserId,
      expected_revision: expectedRevision ?? null,
    });
  }

  async subscribe(callback: (info: ProfileConfigInfo) => void): Promise<() => void> {
    if (!this.hass.connection) return () => undefined;
    return await this.hass.connection.subscribeMessage<ProfileConfigInfo>(
      callback,
      this._message('sidebar_organizer/profile/subscribe')
    );
  }

  async readPreferences(): Promise<SidebarPreferencesEnvelope> {
    return await this.hass.callWS<SidebarPreferencesEnvelope>(this._message('sidebar_organizer/preferences/read'));
  }

  async writePreferences(
    collapsedGroups: string[],
    expectedRevision?: string | null,
    knownGroups?: string[]
  ): Promise<SidebarPreferencesEnvelope> {
    return await this.hass.callWS<SidebarPreferencesEnvelope>(
      this._message('sidebar_organizer/preferences/write', {
        preferences: {
          collapsed_groups: collapsedGroups,
          ...(knownGroups ? { known_groups: knownGroups } : {}),
        },
        expected_revision: expectedRevision ?? null,
      })
    );
  }

  stringify(config: unknown): string {
    return YAML.stringify(config);
  }

  private _message(type: string, extra: Record<string, unknown> = {}): Record<string, unknown> {
    return {
      type,
      ...(this.userId ? { user_id: this.userId } : {}),
      ...extra,
    };
  }

  private _errorMessage(err: unknown): string {
    const message = err instanceof Error ? err.message : String(err);
    return `sidebar_organizer profile backend unavailable or failed: ${message}`;
  }
}
