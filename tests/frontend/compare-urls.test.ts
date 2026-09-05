import assert from 'node:assert/strict';
import { it } from 'node:test';
import 'lit';

it('skips integration imports immediately and still checks legacy scripts added later', async (t) => {
  const previousDocument = Object.getOwnPropertyDescriptor(globalThis, 'document');
  const previousWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
  t.after(() => {
    for (const [name, descriptor] of [['document', previousDocument], ['window', previousWindow]] as const) {
      if (descriptor) Object.defineProperty(globalThis, name, descriptor);
      else Reflect.deleteProperty(globalThis, name);
    }
  });

  const scripts = [{ src: '', innerText: 'import("/sidebar_organizer/frontend/sidebar-organizer.js?v=4.8.2")' }];
  Object.defineProperty(globalThis, 'document', { configurable: true, value: { scripts } });
  Object.defineProperty(globalThis, 'window', {
    configurable: true,
    value: { matchMedia: () => ({ matches: false }) },
  });
  t.mock.method(globalThis, 'setTimeout', () => assert.fail('The URL diagnostic must not schedule retries'));
  for (const method of ['log', 'info', 'groupCollapsed', 'groupEnd'] as const) {
    t.mock.method(console, method, () => undefined);
  }
  const calls: unknown[][] = [];
  const hass = { user: { id: 'test' }, callService: (...args: unknown[]) => calls.push(args) } as never;
  const { compareHacsTagDiff } = await import('../../src/utilities/compare-urls');

  assert.equal(compareHacsTagDiff(hass), undefined);
  assert.equal(calls.length, 0);

  scripts.push({ src: '/hacsfiles/sidebar-organizer/sidebar-organizer.js?hacstag=123', innerText: '' });
  scripts[0].innerText = 'import("/hacsfiles/sidebar-organizer/sidebar-organizer.js?hacstag=123")';
  compareHacsTagDiff(hass);
  assert.equal(calls.length, 0, 'Matching legacy tags should not warn');

  scripts[0].innerText = 'import("/hacsfiles/sidebar-organizer/sidebar-organizer.js?hacstag=456")';
  compareHacsTagDiff(hass);
  assert.equal(calls.length, 1, 'Mismatched legacy tags should still warn');
  assert.deepEqual(calls[0].slice(0, 2), ['persistent_notification', 'create']);
  compareHacsTagDiff(hass);
  assert.equal(calls.length, 1, 'The warning should only be sent once');
});
