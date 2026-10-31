import assert from 'node:assert/strict';
import test from 'node:test';
import { BOTTOM_SECTION, PANEL_AREA } from '../../src/constants/config-area';
import { loadClassMethod } from './helpers/source-method';

const dialogPath = 'src/components/sidebar-dialog.ts';
const panelsPath = 'src/components/editor/sidebar-dialog-panels.ts';

test('bottom-group sorting preserves its section and toggles sort direction', () => {
  const sort = loadClassMethod(panelsPath, '_sortItems', { BOTTOM_SECTION });
  const context: any = {
    hass: { localize: () => '', panels: { z: { title: 'Zulu' }, a: { title: 'Alpha' } } },
    _sidebarConfig: { bottom_groups: { System: ['z', 'a'] }, custom_groups: { Main: ['energy'] } },
    _dispatchConfig() {},
  };
  sort.call(context, 'System', BOTTOM_SECTION.BOTTOM_GROUPS);
  assert.deepEqual(context._sidebarConfig, { bottom_groups: { System: ['a', 'z'] }, custom_groups: { Main: ['energy'] } });
  sort.call(context, 'System', BOTTOM_SECTION.BOTTOM_GROUPS);
  assert.deepEqual(context._sidebarConfig.bottom_groups.System, ['z', 'a']);
});

test('preview item clicks select the bottom-group editor', () => {
  const clicked = loadClassMethod(panelsPath, 'clickedPanelInPreview', { BOTTOM_SECTION, PANEL_AREA });
  const context: any = { _sidebarConfig: { bottom_groups: { System: ['energy'] } } };
  clicked.call(context, 'energy', 'System');
  assert.equal(context._selectedGroup, null);
  assert.equal(context._selectedBottomGroup, 'System');
  assert.equal(context._selectedBottom, BOTTOM_SECTION.BOTTOM_GROUPS);
  assert.equal(context._selectedTab, PANEL_AREA.BOTTOM_PANELS);
});

test('renaming a group migrates its pin and visibility rule', async () => {
  const action = loadClassMethod(panelsPath, '_handleGroupAction', {
    showPromptDialog: async () => 'Renamed',
  });
  const context: any = {
    _sidebarConfig: {
      custom_groups: { Old: ['energy'] }, default_collapsed: ['Old'],
      pinned_groups: { Old: { icon: 'mdi:home' }, Other: true },
      visibility_templates: { groups: { Old: '{{ false }}' }, items: { energy: '{{ true }}' } },
    },
    _dispatchConfig() {}, requestUpdate() {},
  };
  await action.call(context, 'rename', 'Old');
  assert.deepEqual(context._sidebarConfig.custom_groups, { Renamed: ['energy'] });
  assert.deepEqual(context._sidebarConfig.default_collapsed, ['Renamed']);
  assert.deepEqual(context._sidebarConfig.pinned_groups, { Renamed: { icon: 'mdi:home' }, Other: true });
  assert.deepEqual(context._sidebarConfig.visibility_templates, { groups: { Renamed: '{{ false }}' }, items: { energy: '{{ true }}' } });
});

test('preview badges recover after empty values and switching between text and icons', () => {
  const children: any[] = [];
  const makeNode = (tag: string) => ({ tag, hidden: false, classList: { add() {} }, setAttribute(name: string, value: string) { this[name] = value; } });
  const subscribe = loadClassMethod('src/components/editor/sidebar-dialog-preview.ts', '_subscribeNotification', {
    document: { createElement: makeNode }, isIcon: (value: string) => value.startsWith('mdi:'),
  });
  let callback!: (value: string) => void;
  subscribe.call({ _subscribeTemplate(_: string, cb: typeof callback) { callback = cb; } }, {
    querySelector(selector: string) { return selector === 'div.icon-item' ? { appendChild(node: any) { children.push(node); } } : undefined; },
  }, '{{ value }}');
  const [badge, icon] = children;
  callback(''); assert.equal(badge.hidden, true); assert.equal(icon.hidden, true);
  callback('5'); assert.equal(badge.hidden, false); assert.equal(badge.textContent, '5'); assert.equal(icon.hidden, true);
  callback('mdi:home'); assert.equal(badge.hidden, true); assert.equal(icon.hidden, false); assert.equal(icon.icon, 'mdi:home');
  callback('8'); assert.equal(badge.hidden, false); assert.equal(badge.textContent, '8'); assert.equal(icon.hidden, true);
  assert.equal(children.length, 2);
});

test('closed preview drawer does not capture Tab or Escape', () => {
  const keydown = loadClassMethod(dialogPath, '_previewKeydown');
  for (const key of ['Tab', 'Escape']) {
    keydown.call({ _previewOpen: false }, { key, preventDefault() { assert.fail('closed preview must not intercept keys'); } });
  }
});
