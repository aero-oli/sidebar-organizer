import assert from 'node:assert/strict';
import { afterEach, beforeEach, test } from 'node:test';

import { DEFAULT_CONFIG } from '../../src/constants';
import type { HaExtened, SidebarConfig } from '../../src/types';
import { cleanItemsFromAllPanels } from '../../src/utilities/configs/clean-items';
import {
  fetchConfig,
  fetchFileConfig,
  getHaConfigCache,
  getHaConfigCacheKey,
  getLastConfigLoadStatus,
} from '../../src/utilities/configs/fetcher';
import {
  hasBlockingConfigErrors,
  isItemsValid,
  tryCorrectConfig,
  validateConfig,
} from '../../src/utilities/configs/validators';
import { setActiveStorageUser, setConfigSource, setStorage } from '../../src/utilities/storage-utils';

const previousWindow = globalThis.window;
const previousFetch = globalThis.fetch;
const previousDebug = (globalThis as Record<string, unknown>).__DEBUG__;

beforeEach(() => {
  const values = new Map<string, string>();
  Object.defineProperty(globalThis, 'window', {
    configurable: true,
    value: {
      localStorage: {
        getItem: (key: string) => values.get(key) ?? null,
        setItem: (key: string, value: string) => values.set(key, value),
        removeItem: (key: string) => values.delete(key),
      },
    },
  });
  (globalThis as Record<string, unknown>).__DEBUG__ = false;
  setActiveStorageUser('test-user');
});

afterEach(() => {
  setActiveStorageUser(undefined);
  Object.defineProperty(globalThis, 'window', { configurable: true, value: previousWindow });
  globalThis.fetch = previousFetch;
  (globalThis as Record<string, unknown>).__DEBUG__ = previousDebug;
});

const hassFor = (yaml = '', available = true): HaExtened['hass'] =>
  ({
    user: { id: 'test-user' },
    userData: { default_panel: 'home' },
    panels: {
      energy: { url_path: 'energy', title: 'Energy', show_in_sidebar: true },
      history: { url_path: 'history', title: 'History', show_in_sidebar: true },
    },
    locale: { language: 'en' },
    localize: () => '',
    callWS: async ({ type }: { type: string }) => {
      if (type === 'lovelace/dashboards/list') return [];
      if (type.endsWith('/info')) return { available };
      if (type.endsWith('/read')) return { yaml, valid: true };
      throw new Error(`Unexpected command: ${type}`);
    },
  }) as unknown as HaExtened['hass'];

for (const source of ['home_assistant_config', 'home_assistant_profile'] as const) {
  test(`${source} rejects duplicate assignments without replacing its last-good cache`, async () => {
    const good = { header_title: 'Last good', custom_groups: { Main: ['history'] } };
    setStorage(getHaConfigCacheKey(source, 'test-user'), good);
    const badYaml = 'custom_groups:\n  One: [energy]\n  Two: [energy]\n';
    const config = await fetchConfig(hassFor(badYaml), {
      available: true,
      profile_exists: source === 'home_assistant_profile',
    });
    assert.deepEqual(config, good);
    assert.deepEqual(getHaConfigCache(source, 'test-user'), good);
    assert.equal(getLastConfigLoadStatus().stale, true);
  });

  test(`${source} uses defaults on duplicate assignments without a cache`, async () => {
    const config = await fetchConfig(hassFor('bottom_groups:\n  One: [energy]\n  Two: [energy]\n'), {
      available: true,
      profile_exists: source === 'home_assistant_profile',
    });
    assert.deepEqual(config, DEFAULT_CONFIG);
    assert.equal(getHaConfigCache(source, 'test-user'), undefined);
  });

  test(`${source} caches a contextually valid configuration and preserves unknown fields`, async () => {
    const good = { bottom_groups: { Tools: ['energy'] }, future_setting: { keep: true } };
    const config = await fetchConfig(hassFor('bottom_groups:\n  Tools: [energy]\nfuture_setting:\n  keep: true\n'), {
      available: true,
      profile_exists: source === 'home_assistant_profile',
    });
    assert.deepEqual(config, good);
    assert.deepEqual(getHaConfigCache(source, 'test-user'), good);
  });
}

for (const config of [
  { bottom_groups: { One: ['energy'], Two: ['energy'] } },
  { custom_groups: { One: ['energy'] }, bottom_groups: { Two: ['energy'] } },
  { bottom_groups: { One: ['Link'], Two: ['Link'] }, new_items: [{ title: 'Link', url_path: '/local' }] },
]) {
  test(`contextual validation detects bottom and custom-link duplicates: ${JSON.stringify(config)}`, async () => {
    const result = await isItemsValid(config, hassFor(), true);
    assert.equal(typeof result, 'object');
    assert.equal(hasBlockingConfigErrors(result as never), true);
    const corrected = await tryCorrectConfig(config, hassFor());
    const checked = await isItemsValid(corrected, hassFor(), true);
    assert.equal(hasBlockingConfigErrors(checked as never), false);
    const assignments = [
      ...Object.values(corrected.custom_groups || {}).flat(),
      ...Object.values(corrected.bottom_groups || {}).flat(),
    ];
    assert.equal(assignments.length, 1);
  });
}

test('bottom groups participate in item cleanup and hidden-panel collapse cleanup', () => {
  const config: SidebarConfig = {
    custom_groups: { Main: ['history'] },
    bottom_groups: { Tools: ['energy'] },
    default_collapsed: ['Main', 'Tools'],
    future_setting: true,
  };
  assert.deepEqual(cleanItemsFromAllPanels(config, ['energy']).bottom_groups, { Tools: [] });
  const hidden = validateConfig(config, ['energy']);
  assert.equal(hidden.bottom_groups, undefined);
  assert.deepEqual(hidden.default_collapsed, ['Main']);
  assert.equal(hidden.future_setting, true);
  assert.deepEqual(validateConfig(config, ['energy', 'history']).default_collapsed, undefined);
});

for (const [label, response] of [
  ['HTTP error with parseable body', { ok: false, status: 404, text: async () => 'header_title: Missing' }],
  ['invalid field shape', { ok: true, text: async () => 'bottom_items: {}' }],
  ['scalar root', { ok: true, text: async () => 'not a config' }],
  ['invalid YAML', { ok: true, text: async () => 'bottom_items: [' }],
] as const) {
  test(`static YAML rejects ${label} and safely uses defaults`, async () => {
    globalThis.fetch = (async () => response) as unknown as typeof fetch;
    assert.equal(await fetchFileConfig(), undefined);
    setConfigSource('static_yaml');
    assert.deepEqual(await fetchConfig(hassFor('', false), { available: false }), DEFAULT_CONFIG);
  });
}

test('valid static YAML preserves unknown fields and remains the selected source', async () => {
  globalThis.fetch = (async () => ({
    ok: true,
    text: async () => 'header_title: Static\nfuture_setting: yes\n',
  })) as unknown as typeof fetch;
  setConfigSource('static_yaml');
  const config = await fetchConfig(hassFor('', false), { available: false });
  assert.deepEqual(config, { header_title: 'Static', future_setting: 'yes' });
  assert.equal(getLastConfigLoadStatus().source, 'static_yaml');
});
