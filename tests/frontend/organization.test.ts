import assert from 'node:assert/strict';
import test from 'node:test';

import type { SidebarConfig } from '../../src/types';
import { getItemPlacement, moveItemToPlacement } from '../../src/components/editor/workbench/organization';

test('placement reads direct assignments including same-named groups in distinct sections', () => {
  const config = {
    custom_groups: { Main: ['map'] },
    bottom_groups: { Main: ['energy'] },
    bottom_items: ['logbook'],
    bottom_grid_items: ['history'],
  };
  assert.deepEqual(getItemPlacement(config, 'map'), { section: 'custom_groups', group: 'Main' });
  assert.deepEqual(getItemPlacement(config, 'energy'), { section: 'bottom_groups', group: 'Main' });
  assert.deepEqual(getItemPlacement(config, 'logbook'), { section: 'bottom_items' });
  assert.deepEqual(getItemPlacement(config, 'history'), { section: 'bottom_grid_items' });
  assert.deepEqual(getItemPlacement(config, 'unknown'), { section: 'ungrouped' });
});

test('moving removes all previous assignments and appends only once to the exact destination', () => {
  const config = {
    custom_groups: { Main: ['map', 'map'], Empty: [] },
    bottom_groups: { Main: ['energy', 'map'] },
    bottom_items: ['map'],
    bottom_grid_items: ['map', 'history'],
  };
  const next = moveItemToPlacement(config, 'map', { section: 'bottom_groups', group: 'Main' });
  assert.deepEqual(next, {
    custom_groups: { Main: [], Empty: [] },
    bottom_groups: { Main: ['energy', 'map'] },
    bottom_items: [],
    bottom_grid_items: ['history'],
  });
});

test('moving is immutable and preserves visibility, unknown settings, empty groups, and absent keys', () => {
  const config = {
    custom_groups: { Main: ['map'], Empty: [] },
    hidden_items: ['map'],
    visibility_templates: { items: { map: '{{ true }}' } },
    plugin_setting: { keep: true },
  };
  const saved = structuredClone(config);
  Object.freeze(config.custom_groups.Main);
  Object.freeze(config.custom_groups);
  Object.freeze(config);
  const next = moveItemToPlacement(config, 'map', { section: 'ungrouped' });
  assert.deepEqual(config, saved);
  assert.deepEqual(next.custom_groups, { Main: [], Empty: [] });
  assert.equal(Object.hasOwn(next, 'bottom_items'), false);
  assert.equal(Object.hasOwn(next, 'bottom_groups'), false);
  assert.equal(next.hidden_items, config.hidden_items);
  assert.equal(next.visibility_templates, config.visibility_templates);
  assert.equal((next as typeof config).plugin_setting, config.plugin_setting);
});

test('invalid group targets return the original config without creating groups', () => {
  const config = { custom_groups: { Main: ['map'] } };
  assert.equal(moveItemToPlacement(config, 'map', { section: 'custom_groups', group: 'Missing' }), config);
  assert.equal(moveItemToPlacement(config, 'map', { section: 'bottom_groups', group: 'Main' }), config);
  assert.equal(moveItemToPlacement(config, 'map', { section: 'custom_groups' }), config);
  assert.equal(moveItemToPlacement(config, 'map', { section: 'custom_groups', group: 'constructor' }), config);
  const malformed = { custom_groups: { Broken: null } } as unknown as SidebarConfig;
  assert.equal(moveItemToPlacement(malformed, 'map', { section: 'custom_groups', group: 'Broken' }), malformed);
});

test('ungrouped moves preserve the explicit reserved group and append once', () => {
  const config = {
    custom_groups: { Main: ['map'], uncategorized_items: ['energy', 'map', 'map'] },
    bottom_items: ['map'],
    uncategorized_items: ['map', 'energy'],
  };
  assert.deepEqual(getItemPlacement({ custom_groups: { uncategorized_items: ['map'] } }, 'map'), {
    section: 'ungrouped',
  });
  const next = moveItemToPlacement(config, 'map', { section: 'ungrouped' });
  assert.deepEqual(next.custom_groups, { Main: [], uncategorized_items: ['energy', 'map'] });
  assert.deepEqual(next.bottom_items, []);
  assert.equal(next.uncategorized_items, config.uncategorized_items);
  assert.deepEqual(
    moveItemToPlacement({ custom_groups: { uncategorized_items: [] } }, 'map', { section: 'ungrouped' }).custom_groups,
    { uncategorized_items: ['map'] }
  );
});

test('bottom destinations can be added without materializing unrelated sections', () => {
  assert.deepEqual(moveItemToPlacement({}, 'map', { section: 'bottom_grid_items' }), { bottom_grid_items: ['map'] });
});
