import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';

export const MANIFEST_NAME = 'asset-manifest.json';
export const ENTRY_NAME = 'sidebar-organizer.js';

export const generatedFiles = (directory) =>
  existsSync(directory)
    ? readdirSync(directory)
        .filter((name) => name.endsWith('.js') || name.endsWith('.js.map') || name === MANIFEST_NAME)
        .sort()
    : [];

export const cleanGeneratedAssets = (directory) => {
  mkdirSync(directory, { recursive: true });
  for (const name of generatedFiles(directory)) unlinkSync(join(directory, name));
};

export const readAssetManifest = (directory) => {
  const manifest = JSON.parse(readFileSync(join(directory, MANIFEST_NAME), 'utf8'));
  if (manifest.entry !== ENTRY_NAME || !manifest.chunks?.[ENTRY_NAME]) {
    throw new Error('Frontend asset manifest is missing the sidebar entry.');
  }
  for (const [name, chunk] of Object.entries(manifest.chunks)) {
    if (!/^[\w-]+\.js$/.test(name)) throw new Error(`Invalid frontend asset name: ${name}`);
    if (!existsSync(join(directory, name))) throw new Error(`Missing frontend asset: ${name}`);
    for (const imported of [...chunk.imports, ...chunk.dynamicImports]) {
      if (!manifest.chunks[imported]) throw new Error(`Missing frontend dependency: ${name} -> ${imported}`);
    }
  }
  inspectFrontendLoading(manifest);
  const expected = [MANIFEST_NAME, ...Object.keys(manifest.chunks)].sort();
  if (JSON.stringify(generatedFiles(directory)) !== JSON.stringify(expected)) {
    throw new Error(`Frontend asset directory contains stale or unlisted generated files: ${directory}`);
  }
  return manifest;
};

export const copyFrontendAssets = (source, target) => {
  const manifest = readAssetManifest(source);
  cleanGeneratedAssets(target);
  for (const name of [MANIFEST_NAME, ...Object.keys(manifest.chunks)]) {
    copyFileSync(join(source, name), join(target, name));
  }
};

export const compareFrontendAssets = (source, target) => {
  readAssetManifest(source);
  readAssetManifest(target);
  const names = generatedFiles(source);
  if (JSON.stringify(names) !== JSON.stringify(generatedFiles(target))) {
    throw new Error('Integration frontend asset list is stale. Run pnpm run build.');
  }
  for (const name of names) {
    if (!readFileSync(join(source, name)).equals(readFileSync(join(target, name)))) {
      throw new Error(`Integration frontend asset is stale: ${name}. Run pnpm run build.`);
    }
  }
};

export const inspectFrontendLoading = (manifest) => {
  const chunks = Object.entries(manifest.chunks);
  for (const [name, chunk] of chunks) {
    if (name !== manifest.entry && [...chunk.imports, ...chunk.dynamicImports].includes(manifest.entry)) {
      throw new Error(`Frontend chunk depends on the unversioned stable entry: ${name}`);
    }
  }
  const startup = new Set();
  const visit = (name) => {
    if (startup.has(name)) return;
    startup.add(name);
    for (const imported of manifest.chunks[name].imports) visit(imported);
  };
  visit(manifest.entry);
  // A strict entry can be a facade over a hashed bootstrap chunk. The runtime
  // remains immediate even when its import lives in that bootstrap, while its
  // dialog imports stay deferred.
  for (const name of manifest.chunks[manifest.entry].dynamicImports) visit(name);
  const runtimeChunks = chunks.filter(([, chunk]) => chunk.runtime);
  if (!runtimeChunks.length) throw new Error('Missing startup runtime bundle.');
  for (const [name] of runtimeChunks) visit(name);
  if (!chunks.some(([, chunk]) => chunk.editor)) throw new Error('Missing lazy editor bundle.');
  if ([...startup].some((name) => manifest.chunks[name].editor)) {
    throw new Error('Editor modules are included in the startup dependency graph.');
  }
  return {
    entryBytes: manifest.chunks[manifest.entry].bytes,
    startupBytes: [...startup].reduce((sum, name) => sum + manifest.chunks[name].bytes, 0),
    lazyBytes: chunks.filter(([name]) => !startup.has(name)).reduce((sum, [, chunk]) => sum + chunk.bytes, 0),
  };
};
