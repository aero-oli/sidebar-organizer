import type { SidebarConfig } from '../types';

export const CONFIG_SOURCES = ['browser_storage', 'static_yaml', 'home_assistant_config'] as const;
export type ConfigSource = (typeof CONFIG_SOURCES)[number];

export interface ConfigProviderInfo {
  allow_write?: boolean;
  available: boolean;
  backend_loaded?: boolean;
  config_path?: string;
  create_if_missing?: boolean;
  error?: string;
  exists?: boolean;
  frontend_url?: string;
  last_modified?: number | null;
  legacy_resource_hint?: string;
  size?: number | null;
}

export interface ParsedSidebarYaml {
  config?: SidebarConfig;
  errors: string[];
  last_modified?: number | null;
  rawYaml?: string;
  valid: boolean;
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
