import { CONFIG_NAME, CONFIG_PATH, DEFAULT_CONFIG, STORAGE } from '@constants';
import { HaExtened, SidebarConfig } from '@types';
import YAML from 'yaml';

import { HomeAssistantConfigProvider } from '../../config/providers/ha-config-provider';
import { HomeAssistantProfileProvider } from '../../config/providers/ha-profile-provider';
import { resolvePreferredConfigSource } from '../../config/source';
import { getConfigSource, getStorage, getStorageConfig, setConfigSource, setStorage } from '../storage-utils';
import {
  _changeStorageConfig,
  hasBlockingConfigErrors,
  INVALID_CONFIG,
  isItemsValid,
  tryCorrectConfig,
  validateConfig,
} from './validators';

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
    source === 'home_assistant_profile'
      ? await fetchHaProfileConfig(hass)
      : source === 'home_assistant_config'
      ? await fetchHaConfig(hass)
      : source === 'static_yaml'
        ? await fetchFileConfig()
        : getStorageConfig();
  if (config) {
    config = { ...config };
    // console.log('Added with init config defaults', config);
    const validation = await isItemsValid(config, hass, true);
    const isValid = typeof validation === 'boolean' ? validation : validation.valid;
    const hasBlockingErrors =
      typeof validation === 'object' && hasBlockingConfigErrors(validation as INVALID_CONFIG);

    if (source === 'home_assistant_config' || source === 'home_assistant_profile') {
      if (hasBlockingErrors) {
        const cachedConfig = getHaConfigCache();
        if (cachedConfig) {
          console.warn(`${CONFIG_NAME}: duplicate panel assignments found. Using the last successful cache.`);
          return cachedConfig;
        }
        console.warn(`${CONFIG_NAME}: duplicate panel assignments found. Using the default configuration.`);
        return DEFAULT_CONFIG;
      }

      if (!isValid) {
        console.warn(
          `${CONFIG_NAME}: some panels differ for this user; the Home Assistant configuration is still being used.`
        );
      }
      const effectiveConfig = validateConfig(config, []);
      setStorage(STORAGE.HA_CONFIG_CACHE, effectiveConfig);
      return effectiveConfig;
    }

    if (!isValid && source === 'browser_storage') {
      console.log('Config is not valid. Trying to correct it.');
      // Try to correct the config
      config = await tryCorrectConfig(config, hass);
      setStorage(STORAGE.UI_CONFIG, config);
      return config;
    } else if (!isValid && source === 'static_yaml') {
      config = DEFAULT_CONFIG;
      return config;
    } else {
      config = validateConfig(config);
      _changeStorageConfig(config);
    }
  }
  if (!config) {
    console.log('No config found..');
    return undefined;
  }
  return config;
};

export const fetchHaProfileConfig = async (hass: HaExtened['hass']): Promise<SidebarConfig | undefined> => {
  const result = await new HomeAssistantProfileProvider(hass).read();
  if (result.valid && result.config) {
    setStorage(STORAGE.HA_CONFIG_CACHE, result.config);
    if (result.revision) setStorage(STORAGE.HA_CONFIG_REVISION, result.revision);
    if (result.last_modified != null) {
      setStorage(STORAGE.HA_CONFIG_LAST_MODIFIED, result.last_modified);
    }
    return result.config;
  }

  console.warn(`${CONFIG_NAME}: failed to load Home Assistant user profile.`, result.errors);
  return getHaConfigCache();
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
  const cachedConfig = getStorage(STORAGE.HA_CONFIG_CACHE);
  if (!cachedConfig) return undefined;
  try {
    return JSON.parse(cachedConfig);
  } catch {
    return undefined;
  }
};
