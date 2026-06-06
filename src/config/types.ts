import type { SidebarConfig } from '../types';

export const CONFIG_SOURCES = ['browser_storage', 'static_yaml', 'home_assistant_config'] as const;
export type ConfigSource = (typeof CONFIG_SOURCES)[number];

export interface ConfigProviderInfo {
  allow_write?: boolean;
  available: boolean;
  config_path?: string;
  create_if_missing?: boolean;
  error?: string;
  exists?: boolean;
  last_modified?: number | null;
}

export interface ParsedSidebarYaml {
  config?: SidebarConfig;
  errors: string[];
  rawYaml?: string;
  valid: boolean;
}

export interface SidebarConfigProvider {
  info(): Promise<ConfigProviderInfo>;
  read(): Promise<ParsedSidebarYaml>;
  validate(yaml: string): Promise<{ errors: string[]; valid: boolean }>;
  write(yaml: string): Promise<ConfigProviderInfo>;
}

export interface HassWithCallWS {
  callWS<T>(message: Record<string, unknown>): Promise<T>;
}

