import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { isHaConfigModified } from '../../src/config/ha-config-refresh';
import { HomeAssistantConfigProvider } from '../../src/config/providers/ha-config-provider';
import { parseSidebarYamlConfig } from '../../src/config/validation';
import { defineCustomElementSafely } from '../../src/utilities/safe-custom-element';
import { claimSidebarOrganizerModuleLoad } from '../../src/utilities/module-load-guard';

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
