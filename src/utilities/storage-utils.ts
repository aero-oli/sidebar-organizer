import type { ConfigSource } from '../config/types';

import { STORAGE } from '@constants';
import { SidebarConfig } from '@types';

export const getStorage = (key: string): string | null => {
  return window.localStorage.getItem(key);
};

export const setStorage = (key: string, value: any): void => {
  // console.log('%cSTORAGE-UTILS:', 'color: #4dabf7;', `Setting localStorage key "${key}" to:`, value);

  return window.localStorage.setItem(key, JSON.stringify(value));
};

export const removeStorage = (key: string): void => {
  return window.localStorage.removeItem(key);
};

export const getHiddenPanels = (): string[] => {
  const hiddenPanels = window.localStorage.getItem(STORAGE.HIDDEN_PANELS);
  if (!hiddenPanels || hiddenPanels === 'null' || hiddenPanels === 'undefined') return [];
  return JSON.parse(hiddenPanels);
};

export const sidebarUseConfigFile = (): boolean => {
  return getConfigSource() === 'static_yaml';
};

export const getConfigSource = (): ConfigSource => {
  const storedSource = parseStorageValue(window.localStorage.getItem(STORAGE.CONFIG_SOURCE));
  if (isConfigSource(storedSource)) return storedSource;

  const legacyUseConfigFile = parseStorageValue(window.localStorage.getItem(STORAGE.USE_CONFIG_FILE));
  return legacyUseConfigFile === true ? 'static_yaml' : 'browser_storage';
};

export const setConfigSource = (source: ConfigSource): void => {
  setStorage(STORAGE.CONFIG_SOURCE, source);
  setStorage(STORAGE.USE_CONFIG_FILE, source === 'static_yaml');
};

export const getStorageConfig = (): SidebarConfig | undefined => {
  const config = window.localStorage.getItem(STORAGE.UI_CONFIG);
  if (!config || JSON.parse(config).length === 0) return undefined;
  return JSON.parse(config);
};

export const isStoragePanelEmpty = (): boolean => {
  const storagePanel = window.localStorage.getItem(STORAGE.PANEL_ORDER);
  return !storagePanel || JSON.parse(storagePanel).length === 0;
};

const parseStorageValue = (value: string | null): unknown => {
  if (!value) return undefined;
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};

const isConfigSource = (value: unknown): value is ConfigSource =>
  value === 'browser_storage' || value === 'static_yaml' || value === 'home_assistant_config';
