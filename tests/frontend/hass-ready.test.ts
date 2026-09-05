import assert from 'node:assert/strict';
import { it } from 'node:test';

import type { HomeAssistant } from '../../src/types/ha';
import { waitForHass } from '../../src/runtime/hass-ready';

const ready = { user: { id: 'signed-in-user' }, connection: {}, config: {} } as HomeAssistant;

it('returns an already authenticated hass without scheduling a timer', async (t) => {
  t.mock.method(globalThis, 'setTimeout', () => assert.fail('Ready hass must not be delayed'));
  assert.equal(await waitForHass(() => ready), ready);
});

it('waits through an absent hass and incomplete authentication before exposing the user', async () => {
  const states = [undefined, { connection: {}, config: {} }, { user: ready.user }, ready];
  let reads = 0;
  const result = await waitForHass(() => states[reads++] as HomeAssistant | undefined);
  assert.equal(result, ready);
  assert.equal(reads, 4);
});

it('rejects unavailable authentication after bounded retries', async (t) => {
  t.mock.method(globalThis, 'setTimeout', (callback: () => void) => {
    queueMicrotask(callback);
    return 0 as never;
  });
  await assert.rejects(waitForHass(() => undefined));
});
