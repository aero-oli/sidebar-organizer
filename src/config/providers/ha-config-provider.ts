import type { ConfigProviderInfo, HassWithCallWS, ParsedSidebarYaml, SidebarConfigProvider } from '../types';

import YAML from 'yaml';

import { parseSidebarYamlConfig } from '../validation';

interface HaConfigReadResponse extends ConfigProviderInfo {
  errors?: string[];
  parsed?: unknown;
  valid?: boolean;
  yaml?: string;
}

export class HomeAssistantConfigProvider implements SidebarConfigProvider {
  constructor(private readonly hass: HassWithCallWS) {}

  async diagnostics(): Promise<ConfigProviderInfo> {
    try {
      return await this.hass.callWS<ConfigProviderInfo>({ type: 'sidebar_organizer/config/diagnostics' });
    } catch (err) {
      return {
        available: false,
        error: this._errorMessage(err),
      };
    }
  }

  async info(): Promise<ConfigProviderInfo> {
    try {
      return await this.hass.callWS<ConfigProviderInfo>({ type: 'sidebar_organizer/config/info' });
    } catch (err) {
      return {
        available: false,
        error: this._errorMessage(err),
      };
    }
  }

  async read(): Promise<ParsedSidebarYaml> {
    try {
      const response = await this.hass.callWS<HaConfigReadResponse>({ type: 'sidebar_organizer/config/read' });
      const rawYaml = response.yaml || '';
      const parsed = parseSidebarYamlConfig(rawYaml);

      if (response.valid === false && response.errors?.length) {
        return { ...parsed, errors: response.errors, last_modified: response.last_modified, rawYaml, valid: false };
      }

      return { ...parsed, last_modified: response.last_modified, rawYaml };
    } catch (err) {
      return {
        errors: [this._errorMessage(err)],
        valid: false,
      };
    }
  }

  async lastModified(): Promise<number | undefined> {
    const info = await this.info();
    return typeof info.last_modified === 'number' ? info.last_modified : undefined;
  }

  async validate(yaml: string): Promise<{ errors: string[]; valid: boolean }> {
    try {
      return await this.hass.callWS<{ errors: string[]; valid: boolean }>({
        type: 'sidebar_organizer/config/validate',
        yaml,
      });
    } catch (err) {
      return {
        errors: [this._errorMessage(err)],
        valid: false,
      };
    }
  }

  async write(yaml: string): Promise<ConfigProviderInfo> {
    return await this.hass.callWS<ConfigProviderInfo>({
      type: 'sidebar_organizer/config/write',
      yaml,
    });
  }

  stringify(config: unknown): string {
    return YAML.stringify(config);
  }

  private _errorMessage(err: unknown): string {
    const message = err instanceof Error ? err.message : String(err);
    return `sidebar_organizer backend unavailable or failed: ${message}`;
  }
}
