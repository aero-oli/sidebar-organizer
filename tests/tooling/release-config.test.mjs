import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import test from 'node:test';
import { pathToFileURL } from 'node:url';

import config from '../../release.config.mjs';

const require = createRequire(import.meta.url);
const plugin = async (name) => import(pathToFileURL(require.resolve(name, { paths: [require.resolve('semantic-release')] })));
const { analyzeCommits } = await plugin('@semantic-release/commit-analyzer');
const { generateNotes } = await plugin('@semantic-release/release-notes-generator');
const optionsFor = (name) => config.plugins.find((entry) => Array.isArray(entry) && entry[0] === name)?.[1] || {};
const context = (messages) => ({
  cwd: process.cwd(),
  commits: messages.map((message, index) => ({ hash: String(index + 1).padStart(40, '0'), message })),
  logger: { log() {} },
});

for (const [message, expected] of [
  ['Fix: Preserve unpublished edits', 'patch'],
  ['Improve: Defer editor modules', 'patch'],
  ['fix: Keep existing commit compatibility', 'patch'],
  ['feat: Add a capability', 'minor'],
  ['Fix!: Require a new format\n\nBREAKING CHANGE: The old format is unsupported.', 'major'],
]) {
  test(`release classification preserves ${expected} for ${message.split('\n')[0]}`, async () => {
    assert.equal(await analyzeCommits(optionsFor('@semantic-release/commit-analyzer'), context([message])), expected);
  });
}

test('documentation and tests alone do not create releases', async () => {
  assert.equal(await analyzeCommits(optionsFor('@semantic-release/commit-analyzer'), context([
    'Docs: Explain installation',
    'Test: Cover the editor',
  ])), null);
});

test('release notes include fixes, improvements, and installation documentation', async () => {
  const notes = await generateNotes(optionsFor('@semantic-release/release-notes-generator'), {
    ...context(['Fix: Preserve unpublished edits', 'Improve: Defer editor modules', 'Docs: Explain installation']),
    options: { repositoryUrl: 'https://github.com/aero-oli/sidebar-organizer' },
    lastRelease: { gitTag: 'v4.8.4' },
    nextRelease: { version: '4.8.5', gitTag: 'v4.8.5' },
  });
  for (const text of ['Bug Fixes', 'Preserve unpublished edits', 'Improvements', 'Defer editor modules', 'Documentation', 'Explain installation']) {
    assert.ok(notes.includes(text), `Missing release note: ${text}`);
  }
});
