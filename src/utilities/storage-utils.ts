import type { ConfigSource } from '../config/types';

import { STORAGE } from '@constants';
import { SidebarConfig } from '@types';

let activeStorageUserId: string | undefined;

export const setActiveStorageUser = (userId?: string): void => {
  activeStorageUserId = userId || undefined;
  if (!activeStorageUserId || typeof window === 'undefined') return;

  for (const key of Object.values(STORAGE)) {
    const legacyValue = window.localStorage.getItem(key);
    const scopedKey = getScopedStorageKey(key);
    if (legacyValue === null) continue;
    if (window.localStorage.getItem(scopedKey) === null) {
      window.localStorage.setItem(scopedKey, legacyValue);
    }
    window.localStorage.removeItem(key);
  }
};

export const getScopedStorageKey = (key: string): string =>
  activeStorageUserId ? `${key}:${activeStorageUserId}` : key;

export const getStorage = (key: string): string | null => {
  const scopedKey = getScopedStorageKey(key);
  const scopedValue = window.localStorage.getItem(scopedKey);
  if (scopedValue !== null || scopedKey === key) return scopedValue;

  // Move old data once into the signed-in user's namespace. Removing the
  // unscoped key after the successful copy prevents a second account on the
  // same browser from inheriting the first user's legacy cache.
  const legacyValue = window.localStorage.getItem(key);
  if (legacyValue !== null) {
    window.localStorage.setItem(scopedKey, legacyValue);
    window.localStorage.removeItem(key);
  }
  return legacyValue;
};

export const setStorage = (key: string, value: any): void => {
  // console.log('%cSTORAGE-UTILS:', 'color: #4dabf7;', `Setting localStorage key "${key}" to:`, value);

  return window.localStorage.setItem(getScopedStorageKey(key), JSON.stringify(value));
};

export const removeStorage = (key: string): void => {
  return window.localStorage.removeItem(getScopedStorageKey(key));
};

export const getHiddenPanels = (): string[] => {
  return getStorageStringArray(STORAGE.HIDDEN_PANELS);
};

export const getStorageStringArray = (key: string): string[] => {
  const value = parseStorageValue(getStorage(key));
  return Array.isArray(value) && value.every((item) => typeof item === 'string') ? value : [];
};

export const sidebarUseConfigFile = (): boolean => {
  return getConfigSource() === 'static_yaml';
};

export const getConfigSource = (): ConfigSource => {
  const storedSource = parseStorageValue(getStorage(STORAGE.CONFIG_SOURCE));
  if (isConfigSource(storedSource)) return storedSource;

  const legacyUseConfigFile = parseStorageValue(getStorage(STORAGE.USE_CONFIG_FILE));
  return legacyUseConfigFile === true ? 'static_yaml' : 'browser_storage';
};

export const setConfigSource = (source: ConfigSource): void => {
  setStorage(STORAGE.CONFIG_SOURCE, source);
  setStorage(STORAGE.USE_CONFIG_FILE, source === 'static_yaml');
};

export const getStorageConfig = (): SidebarConfig | undefined => {
  const config = parseStorageValue(getStorage(STORAGE.UI_CONFIG));
  return typeof config === 'object' && config !== null && !Array.isArray(config)
    ? (config as SidebarConfig)
    : undefined;
};

export const isStoragePanelEmpty = (): boolean => {
  return getStorageStringArray(STORAGE.PANEL_ORDER).length === 0;
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
  value === 'browser_storage' ||
  value === 'static_yaml' ||
  value === 'home_assistant_config' ||
  value === 'home_assistant_profile';
