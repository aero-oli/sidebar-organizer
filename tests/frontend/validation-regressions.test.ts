import assert from 'node:assert/strict';
import test from 'node:test';

import { EditorDraftStorage } from '../../src/components/editor/workbench/draft-storage';
import { EditorSessionController } from '../../src/components/editor/workbench/editor-session-controller';
import { validateStructuredConfig } from '../../src/components/editor/workbench/validation';
import type { SidebarConfig } from '../../src/types';

for (const config of [
  { bottom_items: {} },
  { bottom_items: 'energy' },
  { bottom_grid_items: 1 },
  { custom_groups: { Main: 'energy' } },
  { bottom_groups: { Tools: {} } },
  { custom_groups: [null] },
  { new_items: {} },
]) {
  test(`schema errors are reported without throwing: ${JSON.stringify(config)}`, () => {
    const issues = validateStructuredConfig(config as unknown as SidebarConfig);
    assert.ok(issues.some((issue) => issue.code === 'schema.invalid_value'));
  });
}

test('invalid field YAML keeps the last safe visual config while reporting located issues', () => {
  const values = new Map<string, string>();
  const session = new EditorSessionController({
    userId: 'test-user',
    source: 'home_assistant_config',
    target: 'shared',
    config: { header_title: 'Safe', bottom_items: ['energy'] },
    rawYaml: 'header_title: Safe\nbottom_items: [energy]\n',
    draftStorage: new EditorDraftStorage({
      getItem: (key) => values.get(key) ?? null,
      setItem: (key, value) => {
        values.set(key, value);
      },
      removeItem: (key) => {
        values.delete(key);
      },
    }),
  });
  try {
    session.setRawYaml('header_title: Unsafe\nbottom_items: {}\n');
    assert.deepEqual(session.config, { header_title: 'Safe', bottom_items: ['energy'] });
    assert.equal(session.rawYaml, 'header_title: Unsafe\nbottom_items: {}\n');
    assert.ok(session.issues.some((issue) => issue.code === 'schema.invalid_value' && issue.line === 2));
    assert.equal(session.dirty, true);
    session.setRawYaml('header_title: Repaired\nbottom_items: [history]\n');
    assert.deepEqual(session.config, { header_title: 'Repaired', bottom_items: ['history'] });
    assert.deepEqual(session.issues, []);
  } finally {
    session.destroy();
  }
});
