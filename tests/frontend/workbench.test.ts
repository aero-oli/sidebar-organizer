import assert from 'node:assert/strict';
import test from 'node:test';

import type { ConfigSource } from '../../src/config';
import { EditorDraftStorage } from '../../src/components/editor/workbench/draft-storage';
import { EditorSessionController } from '../../src/components/editor/workbench/editor-session-controller';
import { YamlConfigDocument } from '../../src/components/editor/workbench/yaml-config-document';

class MemoryStorage implements Pick<Storage, 'getItem' | 'setItem' | 'removeItem'> {
  public values = new Map<string, string>();
  getItem(key: string): string | null {
    return this.values.get(key) ?? null;
  }
  setItem(key: string, value: string): void {
    this.values.set(key, value);
  }
  removeItem(key: string): void {
    this.values.delete(key);
  }
}

const makeSession = (
  storage: EditorDraftStorage,
  overrides: Partial<{
    userId: string;
    source: ConfigSource;
    target: string;
    revision: string;
    rawYaml: string;
  }> = {}
) =>
  new EditorSessionController({
    userId: overrides.userId || 'user-a',
    source: overrides.source || 'home_assistant_profile',
    target: overrides.target || 'profile-a',
    baselineRevision: overrides.revision || 'rev-1',
    rawYaml: overrides.rawYaml || 'header_title: Home\ncustom_groups:\n  Main:\n    - lovelace\n',
    config: { header_title: 'Home', custom_groups: { Main: ['lovelace'] } },
    draftStorage: storage,
    draftDebounceMs: 0,
  });

test('visual patches preserve comments, unknown keys, and untouched ordering', () => {
  const source = `# file heading\nunknown_plugin_key: keep-me\nheader_title: Home # title comment\ncustom_groups:\n  Main: # group comment\n    - lovelace\n`;
  const document = YamlConfigDocument.parse(source);
  document.patchConfig({
    unknown_plugin_key: 'keep-me',
    header_title: 'House',
    custom_groups: { Main: ['lovelace'] },
    accordion_mode: true,
  } as never);
  const result = document.toString();
  assert.match(result, /# file heading/);
  assert.match(result, /unknown_plugin_key: keep-me/);
  assert.match(result, /header_title: House # title comment/);
  assert.match(result, /Main:\n\s+# group comment/);
  assert.ok(result.indexOf('header_title') < result.indexOf('accordion_mode'));
});

test('explicit formatting is stable, valid, and uses two-space indentation', () => {
  const document = YamlConfigDocument.parse('custom_groups:\n    Main:\n       - lovelace # keep\n');
  const first = document.format();
  const second = YamlConfigDocument.parse(first).format();
  assert.equal(first, second);
  assert.match(first, /  Main:\n    - lovelace # keep/);
  assert.equal(YamlConfigDocument.parse(first).valid, true);
});

test('syntax issues expose line and column while retaining last valid config', () => {
  const storage = new EditorDraftStorage(new MemoryStorage());
  const session = makeSession(storage);
  session.setRawYaml('header_title: Home\ncustom_groups: [broken\n');
  assert.equal(session.yamlValid, false);
  assert.equal(session.config.header_title, 'Home');
  assert.equal(session.rawYaml.includes('[broken'), true);
  assert.equal(session.issues[0].route, 'yaml');
  assert.ok(session.issues[0].line);
  assert.ok(session.issues[0].column);
});

test('duplicate assignments are structured, positioned, and routed to Organize', () => {
  const storage = new EditorDraftStorage(new MemoryStorage());
  const session = makeSession(storage, {
    rawYaml: 'custom_groups:\n  Main:\n    - lovelace\nbottom_items:\n  - lovelace\n',
  });
  const issue = session.issues.find(({ code }) => code === 'config.duplicate_assignment');
  assert.equal(issue?.route, 'organize');
  assert.deepEqual(issue?.path, ['bottom_items', 0]);
  assert.equal(issue?.line, 5);
  assert.ok(issue?.column);
});

test('drafts are isolated by user, source, and target', async () => {
  const memory = new MemoryStorage();
  const drafts = new EditorDraftStorage(memory);
  const session = makeSession(drafts);
  session.setRawYaml('header_title: Changed\n');
  await new Promise((resolve) => setTimeout(resolve, 5));
  assert.equal(drafts.read('user-a', 'home_assistant_profile', 'profile-a')?.rawYaml, 'header_title: Changed\n');
  assert.equal(drafts.read('user-b', 'home_assistant_profile', 'profile-a'), undefined);
  assert.equal(drafts.read('user-a', 'home_assistant_config', 'profile-a'), undefined);
  assert.equal(drafts.read('user-a', 'home_assistant_profile', 'profile-b'), undefined);
});

test('matching drafts resume and stale revisions enter recovery', () => {
  const memory = new MemoryStorage();
  const drafts = new EditorDraftStorage(memory);
  drafts.write({
    version: 1,
    userId: 'user-a',
    source: 'home_assistant_profile',
    target: 'profile-a',
    rawYaml: 'header_title: Draft\n',
    baselineRevision: 'rev-1',
    activeRoute: 'yaml',
    timestamp: 1,
  });
  const matching = makeSession(drafts, { revision: 'rev-1' });
  assert.equal(matching.draftState().state, 'matching');
  const stale = makeSession(drafts, { revision: 'rev-2' });
  assert.equal(stale.draftState().state, 'stale');
});

test('successful apply clears a draft while failed work remains recoverable', async () => {
  const memory = new MemoryStorage();
  const drafts = new EditorDraftStorage(memory);
  const session = makeSession(drafts);
  session.setRawYaml('header_title: Draft\n');
  await new Promise((resolve) => setTimeout(resolve, 5));
  assert.equal(session.draftState().state, 'matching');
  session.markApplied('header_title: Draft\n', { header_title: 'Draft' }, 'rev-2');
  assert.equal(drafts.read('user-a', 'home_assistant_profile', 'profile-a'), undefined);

  session.setRawYaml('header_title: [invalid\n');
  session.destroy();
  assert.equal(drafts.read('user-a', 'home_assistant_profile', 'profile-a')?.rawYaml, 'header_title: [invalid\n');
});
