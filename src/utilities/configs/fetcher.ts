import { CONFIG_NAME, CONFIG_PATH, DEFAULT_CONFIG, STORAGE } from '@constants';
import { HaExtened, SidebarConfig } from '@types';
import YAML from 'yaml';

import { HomeAssistantConfigProvider } from '../../config/providers/ha-config-provider';
import { resolvePreferredConfigSource } from '../../config/source';
import { getConfigSource, getStorageConfig, setConfigSource, setStorage } from '../storage-utils';
import { _changeStorageConfig, isItemsValid, tryCorrectConfig, validateConfig } from './validators';

const randomId = (): string => Math.random().toString(16).slice(2);

export const fetchFileConfig = async (): Promise<SidebarConfig | undefined> => {
  const errorNotFound = `${CONFIG_NAME} not found. Make sure you have a valid ${CONFIG_NAME}.yaml file in your www folder.`;
  const randomUrl = `${CONFIG_PATH}?hash=${randomId()}`;
  try {
    const response = await fetch(randomUrl, { cache: 'no-store' });
    const yamlStr = await response.text();
    const data = YAML.parse(yamlStr);
    // console.log('data', data);
    return data;
  } catch (e) {
    console.error(`${errorNotFound}`, e);
    return undefined;
  }
};

export const fetchConfig = async (hass: HaExtened['hass']): Promise<SidebarConfig | undefined> => {
  const source = await resolvePreferredConfigSource(hass, getConfigSource());
  setConfigSource(source);
  let config =
    source === 'home_assistant_config'
      ? await fetchHaConfig(hass)
      : source === 'static_yaml'
        ? await fetchFileConfig()
        : getStorageConfig();
  if (config) {
    config = { ...config };
    // console.log('Added with init config defaults', config);
    const isValid = await isItemsValid(config, hass, true).then((result) =>
      typeof result === 'boolean' ? result : result.valid
    );

    if (!isValid && source === 'browser_storage') {
      console.log('Config is not valid. Trying to correct it.');
      // Try to correct the config
      config = await tryCorrectConfig(config, hass);
      setStorage(STORAGE.UI_CONFIG, config);
      return config;
    } else if (!isValid && source === 'static_yaml') {
      config = DEFAULT_CONFIG;
      return config;
    } else if (!isValid && source === 'home_assistant_config') {
      const cachedConfig = getHaConfigCache();
      if (cachedConfig) {
        console.warn(`${CONFIG_NAME}: backend config is invalid. Using last successful backend config cache.`);
        return cachedConfig;
      }
      config = DEFAULT_CONFIG;
      return config;
    } else {
      config = validateConfig(config);
      _changeStorageConfig(config);
      if (source === 'home_assistant_config') {
        setStorage(STORAGE.HA_CONFIG_CACHE, config);
      }
    }
  }
  if (!config) {
    console.log('No config found..');
    return undefined;
  }
  return config;
};

export const fetchHaConfig = async (hass: HaExtened['hass']): Promise<SidebarConfig | undefined> => {
  const provider = new HomeAssistantConfigProvider(hass);
  const result = await provider.read();
  if (result.valid && result.config) {
    setStorage(STORAGE.HA_CONFIG_CACHE, result.config);
    if (result.last_modified != null) {
      setStorage(STORAGE.HA_CONFIG_LAST_MODIFIED, result.last_modified);
    }
    return result.config;
  }

  console.warn(`${CONFIG_NAME}: failed to load Home Assistant config-folder config.`, result.errors);
  return getHaConfigCache();
};

const getHaConfigCache = (): SidebarConfig | undefined => {
  const cachedConfig = window.localStorage.getItem(STORAGE.HA_CONFIG_CACHE);
  if (!cachedConfig) return undefined;
  try {
    return JSON.parse(cachedConfig);
  } catch {
    return undefined;
  }
};
