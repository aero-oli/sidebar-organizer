import assert from 'node:assert/strict';
import test from 'node:test';

import { ATTRIBUTE, CLASS, ELEMENT, SELECTOR } from '../../src/constants/dom';
import { loadClassMethod } from './helpers/source-method';

const path = 'src/sidebar-organizer.ts';

const classList = () => {
  const classes = new Set<string>();
  return {
    add: (name: string) => classes.add(name),
    contains: (name: string) => classes.has(name),
    toggle(name: string, enabled: boolean) {
      if (enabled) classes.add(name);
      else classes.delete(name);
    },
  };
};

test('notification nodes survive empty, numeric, and icon template transitions', () => {
  const makeNode = () => ({
    classList: classList(),
    textContent: '',
    setAttribute() {},
    removeAttribute() {},
    remove() { throw new Error('A reusable notification node must stay attached'); },
  });
  const badge = makeNode();
  const icon = makeNode();
  const text = {};
  const children: unknown[] = [];
  let callback!: (result: unknown) => void;
  const panel = {
    querySelector: (selector: string) => selector === SELECTOR.ITEM_TEXT ? text : null,
    insertBefore: (node: unknown) => children.push(node),
    setAttribute() {},
  };
  loadClassMethod(path, '_subscribeNotification', {
    ATTRIBUTE, CLASS, SELECTOR,
    computeBadge: () => badge,
    computeNotifyIcon: () => icon,
    isIcon: (value: string) => value.startsWith('mdi:'),
  }).call({ _subscribeTemplate: (_template: string, handler: typeof callback) => callback = handler }, panel, '{{ value }}');

  callback('1');
  assert.equal(badge.textContent, '1');
  assert.equal(icon.classList.contains(CLASS.NO_VISIBLE), true);
  callback('mdi:bell');
  assert.equal(icon.classList.contains(CLASS.NO_VISIBLE), false);
  assert.equal(badge.classList.contains(CLASS.NO_VISIBLE), true);
  callback('');
  assert.equal(icon.classList.contains(CLASS.NO_VISIBLE), true);
  callback(123);
  assert.equal(badge.textContent, '123');
  assert.equal(badge.classList.contains(CLASS.LARGE_BADGE), true);
  assert.equal(badge.classList.contains(CLASS.NO_VISIBLE), false);
  assert.deepEqual(children, [badge, icon]);
});

test('item visibility is subscribed even when no layout groups or bottom sections exist', async () => {
  class Container {}
  const container = new Container();
  const item = {
    href: '/energy',
    style: {},
    hasAttribute: () => false,
    setAttribute() {},
    getAttribute: () => 'energy',
  };
  const subscriptions: unknown[][] = [];
  const context = {
    _sidebar: { selector: { $: { element: {}, query: () => ({ element: container }) } } },
    _config: { visibility_templates: { items: { energy: '{{ false }}' } } },
    _getContainerItems: async () => [item],
    _reorderPanelItemsByConfig: (items: string[]) => items,
    _getGroupOfPanel: () => null,
    _configPanelMap: new Map(),
    _subscribeVisibility: (...args: unknown[]) => subscriptions.push(args),
  };
  await loadClassMethod(path, '_setupPanelOrder', { ATTRIBUTE, SELECTOR, HTMLElement: Container }).call(context);
  assert.deepEqual(subscriptions, [[item, '{{ false }}']]);
});

for (const location of ['custom_groups', 'bottom_groups']) {
  test(`${location} gets an expand control before its first available panel`, async () => {
    const inserted: Array<[string, unknown]> = [];
    const item = {
      getAttribute: () => 'energy',
      classList: classList(),
      insertAdjacentElement: (position: string, element: unknown) => inserted.push([position, element]),
    };
    const divider = {};
    const isBottom = location === 'bottom_groups';
    const context = {
      _config: { [location]: { Shared: ['admin-only', 'energy'] } },
      collapsedItems: new Set(['Shared']),
      _getElements: async () => ({
        topItemsContainer: { querySelector: () => null },
        topItems: isBottom ? [] : [item],
        bottomItemsContainer: isBottom ? { children: [] } : null,
        bottomItems: isBottom ? [item] : null,
      }),
      _createDividerWithGroup: () => divider,
      _checkDiffs() {},
      _handleSidebarHeader() {},
      _panelLoaded: async () => {},
    };
    await loadClassMethod(path, '_processSections', {
      ATTRIBUTE, CLASS, ELEMENT, SELECTOR,
      PANEL_TYPE: { UNCATEGORIZED_ITEMS: 'uncategorized_items' },
      nextRender: async () => {},
    }).call(context);
    assert.deepEqual(inserted, [['beforebegin', divider]]);
    assert.equal(item.classList.contains(CLASS.COLLAPSED), true);
  });
}
