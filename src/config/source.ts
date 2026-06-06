import type { ConfigSource, HassWithCallWS } from './types';

import { HomeAssistantConfigProvider } from './providers/ha-config-provider';

export const resolvePreferredConfigSource = async (
  hass: HassWithCallWS | undefined,
  currentSource: ConfigSource
): Promise<ConfigSource> => {
  if (!hass) return currentSource;

  const info = await new HomeAssistantConfigProvider(hass).info();
  return info.available ? 'home_assistant_config' : currentSource;
};
