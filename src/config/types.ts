import type { SidebarConfig } from '../types';

export const CONFIG_SOURCES = [
  'browser_storage',
  'static_yaml',
  'home_assistant_config',
  'home_assistant_profile',
] as const;
export type ConfigSource = (typeof CONFIG_SOURCES)[number];

export interface ConfigProviderInfo {
  allow_write?: boolean;
  allow_user_write?: boolean;
  available: boolean;
  backend_loaded?: boolean;
  config_path?: string;
  create_if_missing?: boolean;
  error?: string;
  exists?: boolean;
  frontend_url?: string;
  last_modified?: number | null;
  legacy_resource_hint?: string;
  profiles_path?: string;
  size?: number | null;
  revision?: string | null;
  schema_version?: number;
  source?: 'shared' | 'user';
  stale?: boolean;
  warnings?: string[];
  capabilities?: {
    admin_manage_users: boolean;
    optimistic_writes: boolean;
    preferences_sync: boolean;
    subscriptions: boolean;
  };
}

export interface ConfigEnvelope extends ConfigProviderInfo {
  available: boolean;
  config?: SidebarConfig;
  errors: string[];
  inherited?: boolean;
  profile_exists?: boolean;
  raw_yaml?: string;
  user_id?: string;
  valid: boolean;
}

export interface SidebarPreferences {
  collapsed_groups: string[];
  known_groups?: string[];
}

export interface SidebarPreferencesEnvelope {
  preferences: SidebarPreferences;
  revision: string | null;
  user_id: string;
}

export interface ProfileConfigInfo extends ConfigProviderInfo {
  preferences_revision?: string | null;
  profile_exists?: boolean;
  source?: 'shared' | 'user';
  user_id?: string;
}

export interface SidebarProfileUser {
  id: string;
  is_active: boolean;
  is_admin: boolean;
  name: string;
  profile_exists: boolean;
  system_generated: boolean;
}

export interface SidebarProfileList {
  orphans: string[];
  users: SidebarProfileUser[];
}

export interface ParsedSidebarYaml {
  config?: SidebarConfig;
  errors: string[];
  last_modified?: number | null;
  rawYaml?: string;
  valid: boolean;
  revision?: string | null;
  schema_version?: number;
  source?: 'shared' | 'user';
  stale?: boolean;
  warnings?: string[];
}

export interface SidebarConfigProvider {
  diagnostics?(): Promise<ConfigProviderInfo>;
  info(): Promise<ConfigProviderInfo>;
  lastModified?(): Promise<number | undefined>;
  read(): Promise<ParsedSidebarYaml>;
  validate(yaml: string): Promise<{ errors: string[]; valid: boolean }>;
  write(yaml: string): Promise<ConfigProviderInfo>;
}

export interface HassWithCallWS {
  callWS<T>(message: Record<string, unknown>): Promise<T>;
}
