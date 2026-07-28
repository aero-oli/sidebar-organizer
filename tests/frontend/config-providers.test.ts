import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { isHaConfigModified } from '../../src/config/ha-config-refresh';
import { HomeAssistantConfigProvider } from '../../src/config/providers/ha-config-provider';
import { HomeAssistantProfileProvider } from '../../src/config/providers/ha-profile-provider';
import { resolvePreferredConfigSource } from '../../src/config/source';
import { parseSidebarYamlConfig } from '../../src/config/validation';
import { defineCustomElementSafely } from '../../src/utilities/safe-custom-element';
import { claimSidebarOrganizerModuleLoad } from '../../src/utilities/module-load-guard';
import { hasBlockingConfigErrors } from '../../src/utilities/configs/validators';
import {
  getScopedStorageKey,
  getStorage,
  setActiveStorageUser,
  setStorage,
} from '../../src/utilities/storage-utils';

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
        throw new Error('unexpected command');
      },
    };

    const provider = new HomeAssistantConfigProvider(hass as never);

    assert.equal((await provider.info()).available, true);
    const readResult = await provider.read();
    assert.equal(readResult.config?.bottom_items?.length, 0);
    assert.equal(readResult.last_modified, 1710000000);
    assert.equal((await provider.validate('bottom_items: []')).valid, true);
    await provider.write('bottom_items: []');

    assert.deepEqual(
      calls.map((call) => call.type),
      [
        'sidebar_organizer/config/info',
        'sidebar_organizer/config/read',
        'sidebar_organizer/config/validate',
        'sidebar_organizer/config/write',
      ]
    );
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
    await provider.copy('shared', 'target-user', 'two');

    assert.deepEqual(
      calls.map((call) => [call.type, call.user_id]),
      [
        ['sidebar_organizer/profile/read', 'target-user'],
        ['sidebar_organizer/profile/write', 'target-user'],
        ['sidebar_organizer/profile/delete', 'target-user'],
        ['sidebar_organizer/profile/copy', undefined],
      ]
    );
    assert.equal(calls[1].expected_revision, 'one');
    assert.equal(calls[3].source, 'shared');
    assert.equal(calls[3].target_user_id, 'target-user');
  });
});

describe('user-scoped browser storage', () => {
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

      assert.notEqual(
        values.get('sidebarOrganizerConfig:user-one'),
        values.get('sidebarOrganizerConfig:user-two')
      );
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
    assert.equal(
      hasBlockingConfigErrors({ config: {}, repeatedItems: ['energy'], valid: false }),
      true
    );
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
