import type { ConfigProviderInfo, SidebarConfigProvider } from '../types';

import { fetchFileConfig } from '../../utilities/configs/fetcher';

export class StaticYamlProvider implements SidebarConfigProvider {
  async info(): Promise<ConfigProviderInfo> {
    return { allow_write: false, available: true, config_path: '/local/sidebar-organizer.yaml' };
  }

  async read() {
    const config = await fetchFileConfig();
    return { config, errors: config ? [] : ['Static YAML file is missing or invalid.'], valid: Boolean(config) };
  }

  async validate() {
    return { errors: [], valid: true };
  }

  async write(): Promise<ConfigProviderInfo> {
    throw new Error('Static YAML mode is read-only from the frontend.');
  }
}

