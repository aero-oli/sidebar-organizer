import assert from 'node:assert/strict';
import test from 'node:test';

import type { SidebarConfig } from '../../src/types';
import { buildChangeSummary } from '../../src/components/editor/workbench/change-summary';

const labels = (before: SidebarConfig, after: SidebarConfig) =>
  buildChangeSummary(before, after).map((entry) => entry.label);

test('summaries identify visibility and bottom placement changes', () => {
  assert.deepEqual(
    labels(
      { hidden_items: ['energy'], bottom_items: ['map'] },
      { hidden_items: ['map'], bottom_items: [], bottom_grid_items: ['energy'] }
    ),
    ['Hide “map”', 'Show “energy”', 'Remove “map” from the bottom', 'Place “energy” at the bottom grid']
  );
});

test('group changes identify membership, item order, and group order without duplicate broad entries', () => {
  assert.deepEqual(
    labels(
      { custom_groups: { Main: ['a', 'b', 'c'], Tools: [] } },
      { custom_groups: { Tools: [], Main: ['b', 'a', 'd'] } }
    ),
    [
      'Add “d” to group “Main”',
      'Remove “c” from group “Main”',
      'Reorder items in group “Main”',
      'Reorder groups: “Tools” → “Main”',
    ]
  );
  assert.deepEqual(labels({ bottom_groups: { Old: ['map'] } }, { bottom_groups: { New: ['energy'] } }), [
    'Remove group “Old” at the bottom',
    'Add group “New” at the bottom with “energy”',
  ]);
});

test('custom item changes identify additions, removals, renames, and edits', () => {
  const item = (title: string, url_path: string) => ({ title, url_path, icon: 'mdi:link' });
  assert.deepEqual(
    labels(
      { new_items: [item('Old', '/same'), item('Removed', '/removed'), item('Weather', '/weather')] },
      {
        new_items: [
          item('New', '/same'),
          item('Added', '/added'),
          { ...item('Weather', '/weather'), icon: 'mdi:cloud' },
        ],
      }
    ),
    [
      'Rename custom item “Old” to “New”',
      'Remove custom item “Removed”',
      'Update custom item “Weather”',
      'Add custom item “Added”',
    ]
  );
});

test('scalar changes show before and after while complex settings use readable fallbacks', () => {
  assert.deepEqual(
    labels(
      { header_title: 'Home', accordion_mode: false, width: 240 },
      {
        header_title: 'House',
        accordion_mode: true,
        color_config: { dark: { sidebar_icon_color: 'red' } },
        visibility_templates: { items: { energy: '{{ true }}' } },
      }
    ),
    [
      'Sidebar title: “Home” → “House”',
      'Accordion mode: Off → On',
      'Sidebar width: “240” → default',
      'Colours and theme added',
      'Visibility rules added',
    ]
  );
  assert.deepEqual(
    labels({ plugin_setting: { value: 1 } } as SidebarConfig, { plugin_setting: { value: 2 } } as SidebarConfig),
    ['Plugin setting changed']
  );
});

test('unchanged values and ordinary mapping order produce no changes; group order remains meaningful', () => {
  assert.deepEqual(
    labels(
      { notification: { a: '1', b: '2' }, hidden_items: ['a', 'b'] },
      { notification: { b: '2', a: '1' }, hidden_items: ['b', 'a'] }
    ),
    []
  );
  assert.deepEqual(labels({}, {}), []);
});

test('summary generation does not mutate either configuration', () => {
  const before = { custom_groups: { Main: ['a', 'b'] }, new_items: [{ title: 'Test', icon: 'mdi:link' }] };
  const after = { custom_groups: { Main: ['b', 'a'] }, hidden_items: ['a'] };
  const saved = structuredClone({ before, after });
  Object.freeze(before.custom_groups.Main);
  Object.freeze(before.new_items);
  Object.freeze(after.custom_groups.Main);
  buildChangeSummary(before, after);
  assert.deepEqual({ before, after }, saved);
});
