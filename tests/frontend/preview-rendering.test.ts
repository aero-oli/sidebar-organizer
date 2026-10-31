import assert from 'node:assert/strict';
import test from 'node:test';
import { loadClassMethod } from './helpers/source-method';

const path = 'src/components/editor/sidebar-dialog-preview.ts';
const compute = loadClassMethod(path, '_computePreviewPanels', { getDefaultPanelUrlPath: () => 'lovelace' });
const getInfo = loadClassMethod(path, '_getPreviewPanelInfo');
const context = (config: any) => {
  const ctx: any = {
    _sidebarConfig: config,
    hass: { panels: { lovelace: {}, energy: {}, map: {}, history: {}, config: {} } },
    _dialog: {
      _initCombiPanels: ['lovelace', 'energy', 'map', 'history', 'config', 'Old custom'],
      ungroupedItems: ['energy', 'config'],
    },
    _getPanelInfo: (id: string) => ({ title: id, url_path: id }),
  };
  ctx._getPreviewPanelInfo = getInfo.bind(ctx);
  return ctx;
};

test('preview uses current draft assignments and renders each default/fixed item once', () => {
  const result = compute.call(
    context({
      custom_groups: { Main: ['lovelace', 'energy', 'config'] },
      bottom_items: ['energy', 'map'],
    })
  );
  assert.deepEqual(
    result.custom_groups.Main.map((item: any) => item.previewId),
    ['energy']
  );
  assert.deepEqual(
    result.bottom_items.map((item: any) => item.previewId),
    ['map']
  );
  assert.deepEqual(
    result.ungrouped_items.map((item: any) => item.previewId),
    ['history']
  );
});

test('hidden custom and native items remain hidden in groups and bottom placements', () => {
  const result = compute.call(
    context({
      new_items: [
        { title: 'Hidden link', url_path: '/energy', show_in_sidebar: false },
        { title: 'Visible link', url_path: '/map' },
      ],
      hidden_items: ['energy', 'history'],
      custom_groups: { Main: ['energy', 'Hidden link'] },
      bottom_groups: { System: ['history', 'Visible link'] },
      bottom_grid_items: ['Hidden link', 'history'],
    })
  );
  assert.deepEqual(result.custom_groups.Main, []);
  assert.deepEqual(result.bottom_grid_items, []);
  assert.deepEqual(
    result.bottom_groups.System.map((item: any) => item.previewId),
    ['Visible link']
  );
  assert.deepEqual(
    result.ungrouped_items.map((item: any) => item.previewId),
    ['map']
  );
});

test('movable Settings is assigned once and unassigned custom items use current draft titles', () => {
  const result = compute.call(
    context({
      move_settings_from_fixed: true,
      bottom_items: ['config'],
      new_items: [{ title: 'New custom', url_path: '/energy' }],
    })
  );
  assert.deepEqual(
    result.bottom_items.map((item: any) => item.previewId),
    ['config']
  );
  assert.deepEqual(
    result.ungrouped_items.map((item: any) => item.previewId),
    ['energy', 'map', 'history', 'New custom']
  );
});

test('custom preview click and notification identity use title instead of navigation destination', () => {
  let selected: string | undefined;
  const render = loadClassMethod(path, '_renderPanel', {
    html: (strings: TemplateStringsArray, ...values: any[]) => ({ strings, values }),
  });
  const result = render.call(
    {
      _dispatchEvent: (_: string, id: string) => {
        selected = id;
      },
    },
    {
      title: 'Custom energy',
      url_path: '/energy',
      component_name: 'new-item',
      icon: 'mdi:link',
    }
  );
  assert.equal(result.values[0], 'Custom energy');
  const click = result.values.find((value: any) => typeof value === 'function');
  click();
  assert.equal(selected, 'Custom energy');
});

test('preview group and item keyboard actions activate on Enter and Space only', () => {
  const activate = loadClassMethod(path, '_activateOnKey');
  let count = 0;
  let prevented = 0;
  for (const key of ['Enter', ' ', 'Tab'])
    activate.call(
      {},
      {
        key,
        preventDefault() {
          prevented++;
        },
      },
      () => count++
    );
  assert.equal(count, 2);
  assert.equal(prevented, 2);
});

const element = (attributes: Record<string, string> = {}) => {
  const values = new Map(Object.entries(attributes));
  return {
    parentElement: null as any,
    scrolls: 0,
    classList: { add() {}, remove() {} },
    addEventListener() {},
    getAttribute: (name: string) => values.get(name) ?? null,
    hasAttribute: (name: string) => values.has(name),
    removeAttribute: (name: string) => values.delete(name),
    toggleAttribute(name: string, enabled: boolean) {
      enabled ? values.set(name, '') : values.delete(name);
    },
    scrollIntoView() {
      this.scrolls++;
    },
  };
};

test('preview group selection tolerates missing/null names and selects quoted bottom group names safely', async () => {
  const toggle = loadClassMethod(path, '_toggleGroup', { PANEL_TYPE: { UNCATEGORIZED_ITEMS: 'Ungrouped' } });
  const name = 'A "quoted" [group]';
  const header = element({ group: name });
  const selected = element({ group: name });
  const other = element({ group: 'Other', dimmed: '' });
  selected.parentElement = { children: [header, selected, other] };
  const nodes = [selected, other];
  const ctx: any = {
    _sidebarConfig: { custom_groups: { Other: [] }, bottom_groups: { [name]: [] } },
    requestUpdate() {},
    updateComplete: Promise.resolve(),
    shadowRoot: {
      querySelectorAll(selector: string) {
        if (selector === 'div.group-items') return nodes;
        if (selector === '[dimmed]') return [header, ...nodes].filter((node) => node.hasAttribute('dimmed'));
        assert.fail(`Unexpected selector: ${selector}`);
      },
    },
  };
  await toggle.call(ctx, null, 'show');
  await toggle.call(ctx, 'Missing', 'show');
  assert.equal(
    nodes.some((node) => node.hasAttribute('selected')),
    false
  );
  await toggle.call(ctx, name, 'show');
  assert.equal(selected.hasAttribute('selected'), true);
  assert.equal(selected.scrolls, 1);
  assert.equal(ctx._collapsedGroups.has(name), false);
  await toggle.call(ctx, name, 'show');
  assert.equal(selected.hasAttribute('selected'), true, 'show selection is persistent');
});

test('revealing canonical custom, bottom, and ungrouped items opens their group and scrolls safely', async () => {
  const reveal = loadClassMethod(path, 'revealItem');
  const ids = ['Custom "quoted" link', 'energy', 'map'];
  const anchors = ids.map((id) => element({ 'data-panel': id }));
  const dimmed = element({ dimmed: '' });
  const ctx: any = {
    _sidebarConfig: { custom_groups: { Main: ['energy'] }, bottom_groups: { 'Bottom "group"': [ids[0]] } },
    _collapsedGroups: new Set(['Main', 'Bottom "group"']),
    requestUpdate() {},
    updateComplete: Promise.resolve(),
    shadowRoot: {
      querySelectorAll(selector: string) {
        return selector === '[dimmed]' ? [dimmed] : anchors;
      },
    },
  };
  for (const id of ids) {
    await reveal.call(ctx, id);
    assert.equal(ctx._highlightedItem, id);
    assert.equal(anchors.filter((anchor) => anchor.hasAttribute('highlight')).length, 1);
    assert.equal(anchors.find((anchor) => anchor.getAttribute('data-panel') === id)?.scrolls, 1);
  }
  assert.equal(ctx._collapsedGroups.size, 0);
  assert.equal(dimmed.hasAttribute('dimmed'), false);
  await reveal.call(ctx, 'Missing');
  assert.equal(
    anchors.some((anchor) => anchor.hasAttribute('highlight')),
    false
  );
});

test('preview placement recomputes before rendering a changed draft', () => {
  const willUpdate = loadClassMethod(path, 'willUpdate');
  const before = { bottom_items: [] };
  const after = { bottom_items: ['energy'] };
  let computed = false;
  willUpdate.call(
    {
      _sidebarConfig: after,
      _updatePanelConfig(oldConfig: any, newConfig: any) {
        assert.equal(oldConfig, before);
        assert.equal(newConfig, after);
        computed = true;
      },
    },
    new Map([['_sidebarConfig', before]])
  );
  assert.equal(computed, true);
});


test('enabling movable Settings uses current config before parent panel metadata catches up', () => {
  const ctx = context({ move_settings_from_fixed: true });
  ctx._dialog._initCombiPanels = ['lovelace', 'energy'];
  const result = compute.call(ctx);
  assert.equal(result.ungrouped_items.filter((item: any) => item.previewId === 'config').length, 1);
});
