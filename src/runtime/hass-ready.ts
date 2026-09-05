import type { HomeAssistant } from '../types/ha';

import { getPromisableResult } from 'get-promisable-result';

/** The root element can exist before authentication has populated hass. */
export const waitForHass = (read: () => HomeAssistant | undefined): Promise<HomeAssistant> =>
  getPromisableResult(
    read,
    (hass) => Boolean(hass?.user?.id && hass.connection && hass.config),
    { retries: 600, delay: 50, shouldReject: true }
  ) as Promise<HomeAssistant>;
