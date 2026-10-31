import assert from 'node:assert/strict';
import test from 'node:test';
import { moveItemToPlacement } from '../../src/components/editor/workbench/organization';
import { loadClassMethod } from './helpers/source-method';

const panels = 'src/components/editor/sidebar-dialog-panels.ts';
const dialog = 'src/components/sidebar-dialog.ts';

test('item order controls change only the selected section, with bounds and immutable input', () => {
  const move = loadClassMethod(panels, '_moveOrganizerItem');
  const config = { custom_groups: { Main: ['energy', 'map'] }, bottom_groups: { Main: ['history', 'custom'] } };
  const original = structuredClone(config);
  let dispatches = 0;
  const context: any = {
    _sidebarConfig: config,
    _placementItems: () => context._sidebarConfig.bottom_groups.Main,
    _dispatchConfig() { dispatches++; },
  };
  move.call(context, { section: 'bottom_groups', group: 'Main' }, 1, 0);
  assert.deepEqual(context._sidebarConfig.bottom_groups.Main, ['custom', 'history']);
  assert.deepEqual(context._sidebarConfig.custom_groups, original.custom_groups);
  assert.deepEqual(config, original);
  move.call(context, { section: 'bottom_groups', group: 'Main' }, 0, -1);
  assert.equal(dispatches, 1);
});

test('custom and native visibility edits preserve placement and unrelated metadata', () => {
  const visible = loadClassMethod(panels, '_setItemVisible');
  const config = { custom_groups: { Main: ['energy', 'Custom'] }, hidden_items: ['energy', 'Custom'], new_items: [{ title: 'Custom', url_path: '/custom', show_in_sidebar: false, notification: '{{ 3 }}' }] };
  const original = structuredClone(config);
  const context: any = { _sidebarConfig: config, _dispatchConfig() {} };
  visible.call(context, 'Custom', true);
  assert.deepEqual(context._sidebarConfig.hidden_items, ['energy']);
  assert.equal(context._sidebarConfig.new_items[0].show_in_sidebar, true);
  assert.equal(context._sidebarConfig.new_items[0].notification, '{{ 3 }}');
  visible.call(context, 'energy', true);
  assert.deepEqual(context._sidebarConfig.hidden_items, []);
  assert.deepEqual(context._sidebarConfig.custom_groups, config.custom_groups);
  assert.deepEqual(config, original);
});

test('creating an item assigns its destination and group in one draft edit', () => {
  const create = loadClassMethod(panels, '_createItem', { moveItemToPlacement });
  let selected: string | undefined;
  let edits = 0;
  const config = { custom_groups: { Main: ['energy'] }, unknown_future_setting: true };
  const context: any = {
    _sidebarConfig: config, hass: { panels: {} }, _newTitle: '  Weather  ', _newDestination: ' /weather ',
    _newPlacement: { section: 'custom_groups', group: 'Main' }, _creatingItem: true,
    _dispatchConfig() { edits++; }, selectItem(id: string) { selected = id; },
  };
  create.call(context);
  assert.deepEqual(context._sidebarConfig.custom_groups.Main, ['energy', 'Weather']);
  assert.deepEqual(context._sidebarConfig.new_items, [{ title: 'Weather', icon: 'mdi:link', url_path: '/weather' }]);
  assert.equal(context._sidebarConfig.unknown_future_setting, true);
  assert.equal(selected, 'Weather');
  assert.equal(edits, 1);
  create.call(context);
  assert.equal(edits, 1);
  assert.deepEqual(config.custom_groups.Main, ['energy']);
});

test('custom item rename carries its existing visibility, badge and conditional rule', () => {
  const remap = loadClassMethod('src/components/editor/sidebar-dialog-new-items.ts', '_updateItemAssignments');
  const original = {
    custom_groups: { Main: ['Old'] }, bottom_groups: { Utility: ['other'] }, hidden_items: ['Old'],
    notification: { Old: '{{ 2 }}', other: 'x' },
    visibility_templates: { items: { Old: '{{ false }}' }, groups: { Main: '{{ true }}' } },
  };
  const context: any = { _sidebarConfig: original };
  remap.call(context, 'Old', 'New');
  assert.deepEqual(context._sidebarConfig.custom_groups.Main, ['New']);
  assert.deepEqual(context._sidebarConfig.hidden_items, ['New']);
  assert.deepEqual(context._sidebarConfig.notification, { New: '{{ 2 }}', other: 'x' });
  assert.deepEqual(context._sidebarConfig.visibility_templates.items, { New: '{{ false }}' });
  assert.deepEqual(original.hidden_items, ['Old']);
  remap.call(context, 'New');
  assert.deepEqual(context._sidebarConfig.custom_groups.Main, []);
  assert.deepEqual(context._sidebarConfig.hidden_items, []);
  assert.deepEqual(context._sidebarConfig.visibility_templates.items, {});
});

test('changing section starts at its heading and returning restores the previous scroll', async () => {
  const go = loadClassMethod(dialog, '_goToRoute');
  const canvas = { scrollTop: 420 };
  const context: any = {
    _workbenchRoute: 'organize', _routeScroll: new Map(), updateComplete: Promise.resolve(),
    shadowRoot: { querySelector: (selector: string) => selector === '.editor-canvas' ? canvas : undefined },
    _session: { setRoute() {} },
  };
  go.call(context, 'appearance');
  await context.updateComplete;
  assert.equal(canvas.scrollTop, 0);
  canvas.scrollTop = 85;
  go.call(context, 'organize');
  await context.updateComplete;
  assert.equal(canvas.scrollTop, 420);
  assert.equal(context._routeScroll.get('appearance'), 85);
});

test('invalid schema issues open their YAML location without enabling visual editing', async () => {
  const open = loadClassMethod(dialog, '_openIssue');
  let route: string | undefined;
  let revealed: unknown;
  const issue = { route: 'appearance', path: ['width'], line: 2, column: 1 };
  const context: any = {
    _session: { yamlValid: false }, _goToRoute(value: string) { route = value; }, updateComplete: Promise.resolve(),
    shadowRoot: { querySelector: () => ({ revealIssue(value: unknown) { revealed = value; } }) },
  };
  open.call(context, issue);
  await context.updateComplete;
  assert.equal(route, 'yaml');
  assert.equal(revealed, issue);
});

test('placement and ungrouped lookup use the current draft even when an old map exists', () => {
  const picked = loadClassMethod(dialog, 'pickedItems');
  const group = loadClassMethod(dialog, '_getGroupOfPanel');
  const context: any = { _sidebarConfig: { custom_groups: { Current: ['energy'] }, bottom_items: ['map'] }, _panelConfigMap: new Map([['Old', ['history']]]) };
  assert.deepEqual(picked.call(context), ['energy', 'map']);
  assert.equal(group.call(context, 'energy'), 'Current');
  assert.equal(group.call(context, 'history'), null);
});


test('renaming custom items rejects blank names and native identity collisions', async () => {
  for (const name of ['   ', 'energy']) {
    let alerts = 0;
    const rename = loadClassMethod('src/components/editor/sidebar-dialog-new-items.ts', '_toggleRenameItem', {
      showPromptDialog: async () => name,
      showAlertDialog: async () => { alerts++; },
    });
    const config = { new_items: [{ title: 'Weather', url_path: '/weather' }] };
    const context: any = { _sidebarConfig: config, hass: { panels: { energy: {} } }, _updateItemAssignments() { assert.fail('invalid name must not change assignments'); } };
    await rename.call(context, 0);
    assert.equal(context._sidebarConfig, config);
    assert.equal(alerts, name === 'energy' ? 1 : 0);
  }
});
