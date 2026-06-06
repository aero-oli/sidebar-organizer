import type { SidebarConfig } from '../../types';
import type { ConfigProviderInfo, SidebarConfigProvider } from '../types';

import { STORAGE } from '../../constants';
import { getStorageConfig, setStorage } from '../../utilities/storage-utils';

export class BrowserStorageProvider implements SidebarConfigProvider {
  async info(): Promise<ConfigProviderInfo> {
    return { available: true, config_path: 'browser localStorage' };
  }

  async read() {
    return { config: getStorageConfig(), errors: [], valid: true };
  }

  async validate() {
    return { errors: [], valid: true };
  }

  async write(config: SidebarConfig | string): Promise<ConfigProviderInfo> {
    setStorage(STORAGE.UI_CONFIG, config);
    return { available: true };
  }
}

