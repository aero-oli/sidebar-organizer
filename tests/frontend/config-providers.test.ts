import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

import { isHaConfigModified } from '../../src/config/ha-config-refresh';
import { HomeAssistantConfigProvider } from '../../src/config/providers/ha-config-provider';
import { HomeAssistantProfileProvider } from '../../src/config/providers/ha-profile-provider';
import { isHomeAssistantConfigSource, resolvePreferredConfigSource } from '../../src/config/source';
import { parseSidebarYamlConfig, validateSidebarConfigShape } from '../../src/config/validation';
import { configFingerprint, isConfigDraftDirty } from '../../src/config/fingerprint';
import { defineCustomElementSafely } from '../../src/utilities/safe-custom-element';
import { claimSidebarOrganizerModuleLoad } from '../../src/utilities/module-load-guard';
import { hasBlockingConfigErrors } from '../../src/utilities/configs/validators';
import {
  getHiddenPanels,
  getScopedStorageKey,
  getStorage,
  getStorageConfig,
  isStoragePanelEmpty,
  setActiveStorageUser,
  setStorage,
} from '../../src/utilities/storage-utils';
import { getHaConfigCache, getHaConfigCacheKey } from '../../src/utilities/configs/fetcher';
import { RuntimeLifecycle } from '../../src/runtime/lifecycle';
import { SerialTaskQueue } from '../../src/runtime/serial-task-queue';
import { SubscriptionGuard } from '../../src/runtime/subscription-guard';
import { areGroupsCollapsed, resolveCollapsedGroups, setGroupsCollapsed } from '../../src/config/preferences';
import { haveSamePanelPaths } from '../../src/utilities/dashboard';

describe('parseSidebarYamlConfig', () => {
  it('parses and normalizes valid sidebar YAML', () => {
    const result = parseSidebarYamlConfig(`
header_title: Test Home
bottom_items:
  - energy
custom_groups:
  Security:
    - alarm
default_collapsed:
  - Security
`);

    assert.equal(result.valid, true);
    assert.deepEqual(result.config?.bottom_items, ['energy']);
    assert.deepEqual(result.config?.custom_groups?.Security, ['alarm']);
    assert.deepEqual(result.config?.default_collapsed, ['Security']);
  });

  it('reports invalid YAML without throwing', () => {
    const result = parseSidebarYamlConfig('bottom_items: [');

    assert.equal(result.valid, false);
    assert.equal(result.config, undefined);
    assert.ok(result.errors[0].includes('YAML'));
  });

  it('validates additional known list fields', () => {
    const result = parseSidebarYamlConfig('bottom_grid_items: config\nhidden_items: {}\n');

    assert.equal(result.valid, false);
    assert.deepEqual(result.errors, [
      'bottom_grid_items must be a list of strings.',
      'hidden_items must be a list of strings.',
    ]);
  });
});

describe('shared configuration schema fixtures', () => {
  const fixtures = JSON.parse(
    readFileSync(new URL('../fixtures/config-validation.json', import.meta.url), 'utf8')
  ) as Array<{ config: unknown; error?: string; name: string; valid: boolean }>;

  for (const fixture of fixtures) {
    it(fixture.name, () => {
      const errors = validateSidebarConfigShape(fixture.config);
      assert.equal(errors.length === 0, fixture.valid, errors.join('\n'));
      if (fixture.error) assert.ok(errors.includes(fixture.error), errors.join('\n'));
    });
  }
});

describe('configFingerprint', () => {
  it('ignores object key order but preserves array order', () => {
    assert.equal(configFingerprint({ b: 2, a: { y: 2, x: 1 } }), configFingerprint({ a: { x: 1, y: 2 }, b: 2 }));
    assert.notEqual(configFingerprint({ items: ['a', 'b'] }), configFingerprint({ items: ['b', 'a'] }));
  });

  it('keeps comment-only raw YAML edits dirty for server profiles', () => {
    const config = { bottom_items: [] };
    assert.equal(isConfigDraftDirty(config, config, 'bottom_items: []\n', '# note\nbottom_items: []\n', true), true);
    assert.equal(isConfigDraftDirty(config, config, 'bottom_items: []\n', '# note\nbottom_items: []\n', false), false);
  });
});

describe('RuntimeLifecycle', () => {
  it('rejects transitions from superseded async runs', () => {
    const lifecycle = new RuntimeLifecycle();
    const first = lifecycle.begin();
    lifecycle.transition(first, 'loading');
    const second = lifecycle.begin();

    assert.equal(lifecycle.transition(first, 'ready'), false);
    assert.equal(lifecycle.state, 'discovering');
    assert.equal(lifecycle.transition(second, 'ready'), true);
    assert.equal(lifecycle.state, 'ready');
  });
});

describe('haveSamePanelPaths', () => {
  it('treats fresh panel objects for the same hidden dashboards as unchanged', () => {
    const previous = [{ url_path: 'energy', title: 'Energy' }, { url_path: 'history', title: 'History' }];
    const current = [{ url_path: 'history', title: 'History (translated)' }, { url_path: 'energy', title: 'Energy' }];

    assert.equal(haveSamePanelPaths(previous, current), true);
  });

  it('detects a real change in hidden dashboard membership', () => {
    const previous = [{ url_path: 'energy' }];
    const current = [{ url_path: 'history' }];

    assert.equal(haveSamePanelPaths(previous, current), false);
  });
});

describe('SerialTaskQueue', () => {
  it('does not overlap tasks and continues after a rejection', async () => {
    const queue = new SerialTaskQueue();
    const events: string[] = [];
    let releaseFirst!: () => void;
    const firstGate = new Promise<void>((resolve) => (releaseFirst = resolve));

    const first = queue.enqueue(async () => {
      events.push('first:start');
      await firstGate;
      events.push('first:end');
      throw new Error('expected');
    });
    const second = queue.enqueue(async () => {
      events.push('second');
    });

    await Promise.resolve();
    assert.deepEqual(events, ['first:start']);
    releaseFirst();
    await assert.rejects(first, /expected/);
    await second;
    assert.deepEqual(events, ['first:start', 'first:end', 'second']);
  });
});

describe('resolveCollapsedGroups', () => {
  it('drops removed groups and applies defaults only to newly introduced groups', () => {
    assert.deepEqual(
      [
        ...resolveCollapsedGroups(
          ['Rooms', 'Admin', 'New'],
          ['Rooms', 'New'],
          new Set(['Admin', 'Removed']),
          new Set(['Rooms', 'Admin'])
        ),
      ],
      ['Admin', 'New']
    );
  });

  it('toggles only the requested group subset and preserves bottom groups', () => {
    const collapsed = new Set(['Top one', 'Bottom tools']);
    assert.equal(areGroupsCollapsed(['Top one', 'Top two'], collapsed), false);

    const allTopCollapsed = setGroupsCollapsed(['Top one', 'Top two'], collapsed, true);
    assert.deepEqual([...allTopCollapsed], ['Top one', 'Bottom tools', 'Top two']);
    assert.equal(areGroupsCollapsed(['Top one', 'Top two'], allTopCollapsed), true);

    const expandedTop = setGroupsCollapsed(['Top one', 'Top two'], allTopCollapsed, false);
    assert.deepEqual([...expandedTop], ['Bottom tools']);
  });

  it('preserves legacy synced choices without reviving configured defaults', () => {
    assert.deepEqual(
      [...resolveCollapsedGroups(['Rooms', 'Admin'], ['Rooms'], new Set(['Admin', 'Removed']), undefined)],
      ['Admin']
    );
    assert.deepEqual([...resolveCollapsedGroups(['Rooms'], ['Rooms'], undefined, undefined)], ['Rooms']);
  });
});

describe('SubscriptionGuard', () => {
  it('disposes a stale async subscription and keeps only the latest one', () => {
    const guard = new SubscriptionGuard();
    const disposed: string[] = [];
    const first = guard.begin();
    const second = guard.begin();

    assert.equal(guard.accept(first, () => disposed.push('first')), false);
    assert.equal(guard.accept(second, () => disposed.push('second')), true);
    assert.deepEqual(disposed, ['first']);

    guard.dispose();
    assert.deepEqual(disposed, ['first', 'second']);
  });
});

describe('HomeAssistantConfigProvider', () => {
  it('calls the expected websocket commands', async () => {
    const calls: Array<Record<string, unknown>> = [];
    const hass = {
      callWS: async (message: Record<string, unknown>) => {
        calls.push(message);
        if (message.type === 'sidebar_organizer/config/info') {
          return { available: true, config_path: '/config/sidebar-organizer.yaml', allow_write: true };
        }
        if (message.type === 'sidebar_organizer/config/read') {
          return { yaml: 'bottom_items: []', last_modified: 1710000000 };
        }
        if (message.type === 'sidebar_organizer/config/validate') {
          return { valid: true, errors: [] };
        }
        if (message.type === 'sidebar_organizer/config/write') {
          return { exists: true, last_modified: 1710000001 };
        }
        if (message.type === 'sidebar_organizer/config/restore') {
          return { exists: true, last_modified: 1710000002, backup_exists: true };
        }
        throw new Error('unexpected command');
      },
    };

    const provider = new HomeAssistantConfigProvider(hass as never);

    assert.equal((await provider.info()).available, true);
    const readResult = await provider.read();
    assert.equal(readResult.config?.bottom_items?.length, 0);
    assert.equal(readResult.last_modified, 1710000000);
    assert.equal((await provider.validate('bottom_items: []')).valid, true);
    await provider.write('bottom_items: []', 'revision-one');
    await provider.restore('revision-two');

    assert.deepEqual(
      calls.map((call) => call.type),
      [
        'sidebar_organizer/config/info',
        'sidebar_organizer/config/read',
        'sidebar_organizer/config/validate',
        'sidebar_organizer/config/write',
        'sidebar_organizer/config/restore',
      ]
    );
    assert.equal(calls[3].expected_revision, 'revision-one');
    assert.equal(calls[4].expected_revision, 'revision-two');
  });

  it('returns unavailable info when the backend command is missing', async () => {
    const provider = new HomeAssistantConfigProvider({
      callWS: async () => {
        throw new Error('Unknown command.');
      },
    } as never);

    const info = await provider.info();

    assert.equal(info.available, false);
    assert.ok(info.error?.includes('sidebar_organizer'));
  });

  it('does not throw when the backend returns invalid YAML', async () => {
    const provider = new HomeAssistantConfigProvider({
      callWS: async () => ({ yaml: 'bottom_items: [' }),
    } as never);

    const result = await provider.read();

    assert.equal(result.valid, false);
    assert.equal(result.config, undefined);
    assert.ok(result.errors[0].includes('YAML'));
  });

  it('requests backend diagnostics', async () => {
    const calls: Array<Record<string, unknown>> = [];
    const provider = new HomeAssistantConfigProvider({
      callWS: async (message: Record<string, unknown>) => {
        calls.push(message);
        return {
          available: true,
          backend_loaded: true,
          frontend_url: '/sidebar_organizer/frontend/sidebar-organizer.js?v=4.1.1',
        };
      },
    } as never);

    const diagnostics = await provider.diagnostics();

    assert.equal(diagnostics.backend_loaded, true);
    assert.equal(calls[0].type, 'sidebar_organizer/config/diagnostics');
  });

  it('returns raw backend YAML for round-trip editing', async () => {
    const provider = new HomeAssistantConfigProvider({
      callWS: async () => ({ yaml: 'header_title: Test\n# comment\nbottom_items: []', last_modified: 1 }),
    } as never);

    const result = await provider.read();

    assert.equal(result.rawYaml?.includes('# comment'), true);
  });

  it('reads last modified metadata from backend info', async () => {
    const provider = new HomeAssistantConfigProvider({
      callWS: async () => ({ available: true, last_modified: 123 }),
    } as never);

    assert.equal(await provider.lastModified(), 123);
  });
});

describe('resolvePreferredConfigSource', () => {
  it('treats shared and personal profiles as raw server YAML sources', () => {
    assert.equal(isHomeAssistantConfigSource('home_assistant_config'), true);
    assert.equal(isHomeAssistantConfigSource('home_assistant_profile'), true);
    assert.equal(isHomeAssistantConfigSource('browser_storage'), false);
  });
  it('uses Home Assistant config folder automatically when the backend is available', async () => {
    const source = await resolvePreferredConfigSource(
      {
        callWS: async (message: Record<string, unknown>) => {
          if (message.type === 'sidebar_organizer/profile/info') {
            return { available: true, profile_exists: false };
          }
          assert.equal(message.type, 'sidebar_organizer/config/info');
          return { available: true, allow_write: true };
        },
      } as never,
      'browser_storage'
    );

    assert.equal(source, 'home_assistant_config');
  });

  it('keeps the existing legacy source when the backend is unavailable', async () => {
    const source = await resolvePreferredConfigSource(
      {
        callWS: async () => {
          throw new Error('Unknown command.');
        },
      } as never,
      'static_yaml'
    );

    assert.equal(source, 'static_yaml');
  });

  it('prefers a personal Home Assistant profile when one exists', async () => {
    const source = await resolvePreferredConfigSource(
      {
        callWS: async (message: Record<string, unknown>) => {
          assert.equal(message.type, 'sidebar_organizer/profile/info');
          return { available: true, profile_exists: true };
        },
      } as never,
      'home_assistant_config'
    );

    assert.equal(source, 'home_assistant_profile');
  });
});

describe('HomeAssistantProfileProvider', () => {
  it('scopes profile requests to the selected Home Assistant user', async () => {
    const calls: Array<Record<string, unknown>> = [];
    const provider = new HomeAssistantProfileProvider(
      {
        callWS: async (message: Record<string, unknown>) => {
          calls.push(message);
          if (message.type === 'sidebar_organizer/profile/read') {
            return {
              available: true,
              profile_exists: true,
              revision: 'one',
              yaml: 'bottom_items: []',
              valid: true,
            };
          }
          return { available: true, profile_exists: true, revision: 'two' };
        },
      },
      'target-user'
    );

    assert.equal((await provider.read()).config?.bottom_items?.length, 0);
    await provider.write('bottom_items: []', 'one');
    await provider.delete('two');
    await provider.restore('two');
    await provider.copy('shared', 'target-user', 'two');

    assert.deepEqual(
      calls.map((call) => [call.type, call.user_id]),
      [
        ['sidebar_organizer/profile/read', 'target-user'],
        ['sidebar_organizer/profile/write', 'target-user'],
        ['sidebar_organizer/profile/delete', 'target-user'],
        ['sidebar_organizer/profile/restore', 'target-user'],
        ['sidebar_organizer/profile/copy', undefined],
      ]
    );
    assert.equal(calls[1].expected_revision, 'one');
    assert.equal(calls[4].source, 'shared');
    assert.equal(calls[4].target_user_id, 'target-user');
  });

  it('reads and writes server-synced preferences with revisions', async () => {
    const calls: Array<Record<string, unknown>> = [];
    const provider = new HomeAssistantProfileProvider({
      callWS: async (message: Record<string, unknown>) => {
        calls.push(message);
        return {
          user_id: 'current',
          preferences: { collapsed_groups: ['Rooms'] },
          revision: 'next',
        };
      },
    });

    assert.deepEqual((await provider.readPreferences()).preferences.collapsed_groups, ['Rooms']);
    await provider.writePreferences(['Admin'], 'previous', ['Rooms', 'Admin'], false);
    assert.equal(calls[1].expected_revision, 'previous');
    assert.deepEqual(calls[1].preferences, {
      collapsed_groups: ['Admin'],
      known_groups: ['Rooms', 'Admin'],
      sync_collapsed_groups: false,
    });
  });
});

describe('user-scoped browser storage', () => {
  it('uses different last-good cache keys for shared and personal sources', () => {
    assert.notEqual(
      getHaConfigCacheKey('home_assistant_config', 'user-one'),
      getHaConfigCacheKey('home_assistant_profile', 'user-one')
    );
    assert.notEqual(
      getHaConfigCacheKey('home_assistant_profile', 'user-one'),
      getHaConfigCacheKey('home_assistant_profile', 'user-two')
    );
  });

  it('migrates the legacy last-good HA cache into the active source cache', () => {
    const values = new Map<string, string>([
      ['sidebarOrganizerHaConfigCache', JSON.stringify({ bottom_items: ['energy'] })],
    ]);
    const previousWindow = globalThis.window;
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

    try {
      setActiveStorageUser('cache-user');

      assert.deepEqual(getHaConfigCache('home_assistant_profile', 'cache-user'), {
        bottom_items: ['energy'],
      });
      assert.equal(getStorage('sidebarOrganizerHaConfigCache'), null);
      assert.notEqual(getStorage(getHaConfigCacheKey('home_assistant_profile', 'cache-user')), null);
    } finally {
      setActiveStorageUser(undefined);
      Object.defineProperty(globalThis, 'window', { configurable: true, value: previousWindow });
    }
  });
  it('isolates values and migrates an existing unscoped value once', () => {
    const values = new Map<string, string>([['sidebarOrganizerConfig', '{"legacy":true}']]);
    const previousWindow = globalThis.window;
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

    try {
      setActiveStorageUser('user-one');
      assert.equal(getStorage('sidebarOrganizerConfig'), '{"legacy":true}');
      assert.equal(values.get('sidebarOrganizerConfig:user-one'), '{"legacy":true}');
      setStorage('sidebarOrganizerConfig', { personal: 1 });

      setActiveStorageUser('user-two');
      assert.equal(getScopedStorageKey('sidebarOrganizerConfig'), 'sidebarOrganizerConfig:user-two');
      assert.equal(getStorage('sidebarOrganizerConfig'), null);
      setStorage('sidebarOrganizerConfig', { personal: 2 });

      assert.notEqual(values.get('sidebarOrganizerConfig:user-one'), values.get('sidebarOrganizerConfig:user-two'));
    } finally {
      setActiveStorageUser(undefined);
      Object.defineProperty(globalThis, 'window', { configurable: true, value: previousWindow });
    }
  });

  it('fails safely when browser storage is corrupted', () => {
    const values = new Map<string, string>();
    const previousWindow = globalThis.window;
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

    try {
      setActiveStorageUser('broken-user');
      values.set(getScopedStorageKey('sidebarOrganizerConfig'), '{broken');
      values.set(getScopedStorageKey('sidebarHiddenPanels'), '{broken');
      values.set(getScopedStorageKey('sidebarPanelOrder'), '{broken');

      assert.equal(getStorageConfig(), undefined);
      assert.deepEqual(getHiddenPanels(), []);
      assert.equal(isStoragePanelEmpty(), true);
    } finally {
      setActiveStorageUser(undefined);
      Object.defineProperty(globalThis, 'window', { configurable: true, value: previousWindow });
    }
  });
});

describe('isHaConfigModified', () => {
  it('detects newer backend config metadata', () => {
    assert.equal(isHaConfigModified(100, 101), true);
    assert.equal(isHaConfigModified(100, 100), false);
    assert.equal(isHaConfigModified(100, 99), false);
    assert.equal(isHaConfigModified(undefined, 100), false);
    assert.equal(isHaConfigModified(100, undefined), false);
    assert.equal(isHaConfigModified(null, 100), false);
    assert.equal(isHaConfigModified(100, null), false);
  });
});

describe('Home Assistant panel validation severity', () => {
  it('treats user-specific panel differences as warnings', () => {
    assert.equal(
      hasBlockingConfigErrors({
        config: {},
        hasDefaultInGroupsOrBottom: true,
        invalidItems: ['home-yaml', 'admin-only'],
        valid: false,
      }),
      false
    );
  });

  it('blocks ambiguous duplicate panel assignments', () => {
    assert.equal(hasBlockingConfigErrors({ config: {}, repeatedItems: ['energy'], valid: false }), true);
  });
});

describe('claimSidebarOrganizerModuleLoad', () => {
  it('allows the first module load and blocks later loads', () => {
    const fakeWindow = {} as Window;

    assert.equal(claimSidebarOrganizerModuleLoad(fakeWindow), true);
    assert.equal(claimSidebarOrganizerModuleLoad(fakeWindow), false);
  });

  it('blocks loading when the group divider is already registered by another copy', () => {
    const fakeWindow = {
      customElements: {
        get: (name: string) => (name === 'so-group-divider' ? class ExistingGroupDivider {} : undefined),
      },
    } as unknown as Window;

    assert.equal(claimSidebarOrganizerModuleLoad(fakeWindow), false);
  });
});

describe('defineCustomElementSafely', () => {
  it('does not throw when the registry reports an already-used element name', () => {
    const registry = {
      get: () => undefined,
      define: () => {
        throw new Error(
          'Failed to execute define on CustomElementRegistry: the name "so-group-divider" has already been used with this registry'
        );
      },
    } as unknown as CustomElementRegistry;

    assert.doesNotThrow(() => {
      defineCustomElementSafely('so-group-divider', class SoGroupDivider {}, registry);
    });
  });

  it('throws unrelated registry errors', () => {
    const registry = {
      get: () => undefined,
      define: () => {
        throw new Error('registry unavailable');
      },
    } as unknown as CustomElementRegistry;

    assert.throws(() => {
      defineCustomElementSafely('so-group-divider', class SoGroupDivider {}, registry);
    }, /registry unavailable/);
  });
});
