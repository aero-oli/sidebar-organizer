import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassMethod } from './helpers/source-method';

const storePath = 'src/utilities/model/store.ts';
const subscribe = loadClassMethod(storePath, '_subscribePanels');
const dispose = loadClassMethod(storePath, 'dispose');

test('repeated dashboard visits keep one subscriber and dispose it before reuse', async () => {
  let created = 0;
  let disposed = 0;
  let fetches = 0;
  const callbacks: Array<(panels: object) => Promise<void>> = [];
  const store = {
    _organizer: { _pluginConfigured: true },
    _subscriptionGeneration: 0,
    _panelSubscriptionPending: false,
    _dashboardPanels: { initialPanels: [] },
    hass: { userData: {}, panels: {} },
    _getPanelItems: async () => { fetches += 1; return []; },
    _utils: { PANEL: { subscribePanels: (_: unknown, callback: typeof callbacks[number]) => {
      created += 1;
      callbacks.push(callback);
      return () => { disposed += 1; };
    } } },
  };
  await Promise.all([subscribe.call(store), subscribe.call(store)]);
  assert.equal(created, 1);
  dispose.call(store);
  await callbacks[0]({});
  assert.equal(fetches, 0, 'disposed callbacks must not query a departed dashboard');
  assert.equal(disposed, 1);
  await subscribe.call(store);
  assert.equal(created, 2);
  dispose.call(store);
  assert.equal(disposed, 2);
});

test('a pending dashboard discovery cannot subscribe after disposal', async () => {
  let resolve!: (items: unknown[]) => void;
  let created = 0;
  const store = {
    _organizer: { _pluginConfigured: true },
    _subscriptionGeneration: 0,
    _panelSubscriptionPending: false,
    hass: { userData: {}, panels: {} },
    _getPanelItems: () => new Promise((done) => { resolve = done; }),
    _utils: { PANEL: { subscribePanels: () => { created += 1; return () => {}; } } },
  };
  const pending = subscribe.call(store);
  await subscribe.call(store);
  dispose.call(store);
  resolve([]);
  await pending;
  assert.equal(created, 0);
});

test('rerunning profile setup replaces its existing long-press action', async () => {
  let active = 0;
  let installed = 0;
  const action = loadClassMethod('src/sidebar-organizer.ts', '_setupConfigBtn', {
    SELECTOR: {},
    addAction: () => { active += 1; installed += 1; return () => { active -= 1; }; },
  });
  const organizer = {
    _sidebar: { selector: { $: { element: { querySelector: () => ({}) } } } },
    _userHasSidebarSettings: false,
    _dialogManager: { _showConfigDialogEditor() {} },
  };
  await action.call(organizer);
  await action.call(organizer);
  await action.call(organizer);
  assert.equal(installed, 3);
  assert.equal(active, 1);
});
