import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';

import {
  cleanGeneratedAssets,
  compareFrontendAssets,
  copyFrontendAssets,
  generatedFiles,
  inspectFrontendLoading,
  readAssetManifest,
} from '../../scripts/frontend_assets.mjs';

const manifest = () => ({
  entry: 'sidebar-organizer.js',
  chunks: {
    'sidebar-organizer.js': { imports: [], dynamicImports: ['runtime-123.js'], bytes: 10, editor: false },
    'runtime-123.js': { imports: ['shared-123.js'], dynamicImports: ['editor-123.js'], bytes: 20, editor: false },
    'shared-123.js': { imports: [], dynamicImports: [], bytes: 30, editor: false },
    'editor-123.js': { imports: ['shared-123.js'], dynamicImports: [], bytes: 100, editor: true },
  },
});

const withAssets = (run) => {
  const root = mkdtempSync(join(tmpdir(), 'sidebar-assets-'));
  const source = join(root, 'build');
  const target = join(root, 'integration');
  mkdirSync(source);
  mkdirSync(target);
  const assets = manifest();
  writeFileSync(join(source, 'asset-manifest.json'), JSON.stringify(assets));
  for (const name of Object.keys(assets.chunks)) writeFileSync(join(source, name), `// ${name}\n`);
  try {
    run({ source, target, assets });
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
};

test('copy publishes every required chunk and removes stale generated assets', () => {
  withAssets(({ source, target }) => {
    writeFileSync(join(target, 'old-editor.js'), 'old');
    writeFileSync(join(target, 'old-editor.js.map'), '{}');
    writeFileSync(join(target, 'README.txt'), 'keep');
    copyFrontendAssets(source, target);
    assert.deepEqual(generatedFiles(target), generatedFiles(source));
    assert.equal(readFileSync(join(target, 'README.txt'), 'utf8'), 'keep');
    assert.doesNotThrow(() => compareFrontendAssets(source, target));
    writeFileSync(join(target, 'editor-123.js'), 'stale contents');
    assert.throws(() => compareFrontendAssets(source, target), /stale.*editor-123/);
  });
});

test('missing dependency and stale unlisted files fail validation', () => {
  withAssets(({ source, assets }) => {
    rmSync(join(source, 'editor-123.js'));
    assert.throws(() => readAssetManifest(source), /Missing frontend asset/);
    writeFileSync(join(source, 'editor-123.js'), 'editor');
    writeFileSync(join(source, 'old.js'), 'stale');
    assert.throws(() => readAssetManifest(source), /stale or unlisted/);
    rmSync(join(source, 'old.js'));
    assets.chunks['runtime-123.js'].dynamicImports.push('absent.js');
    writeFileSync(join(source, 'asset-manifest.json'), JSON.stringify(assets));
    assert.throws(() => readAssetManifest(source), /Missing frontend dependency/);
  });
});

test('asset cleanup preserves non-generated files', () => {
  withAssets(({ source }) => {
    writeFileSync(join(source, 'README.txt'), 'keep');
    cleanGeneratedAssets(source);
    assert.deepEqual(generatedFiles(source), []);
    assert.equal(readFileSync(join(source, 'README.txt'), 'utf8'), 'keep');
  });
});

test('startup includes immediate runtime and shared dependencies but excludes editor imports', () => {
  assert.deepEqual(inspectFrontendLoading(manifest()), { entryBytes: 10, startupBytes: 60, lazyBytes: 100 });
  const eager = manifest();
  eager.chunks['runtime-123.js'].imports.push('editor-123.js');
  assert.throws(() => inspectFrontendLoading(eager), /startup dependency graph/);
});
