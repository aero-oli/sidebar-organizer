import type { ConfigSource, HassWithCallWS } from './types';

import { HomeAssistantConfigProvider } from './providers/ha-config-provider';
import { HomeAssistantProfileProvider } from './providers/ha-profile-provider';

export const isHomeAssistantConfigSource = (source: ConfigSource): boolean =>
  source === 'home_assistant_config' || source === 'home_assistant_profile';

export const resolvePreferredConfigSource = async (
  hass: HassWithCallWS | undefined,
  currentSource: ConfigSource
): Promise<ConfigSource> => {
  if (!hass) return currentSource;

  const profileInfo = await new HomeAssistantProfileProvider(hass).info();
  if (profileInfo.available && profileInfo.profile_exists) return 'home_assistant_profile';

  const info = await new HomeAssistantConfigProvider(hass).info();
  return info.available ? 'home_assistant_config' : currentSource;
};
