import { cleanGeneratedAssets, ENTRY_NAME, MANIFEST_NAME } from './frontend_assets.mjs';

export const frontendBundlePlugin = (directory) => ({
  name: 'frontend-asset-manifest',
  buildStart() {
    cleanGeneratedAssets(directory);
  },
  generateBundle(_options, bundle) {
    const chunks = Object.fromEntries(
      Object.values(bundle)
        .filter((output) => output.type === 'chunk')
        .map((chunk) => [
          chunk.fileName,
          {
            imports: chunk.imports,
            dynamicImports: chunk.dynamicImports,
            bytes: Buffer.byteLength(chunk.code),
            editor: Object.keys(chunk.modules).some((id) =>
              /\/src\/components\/(editor\/|sidebar-dialog)|\/(@codemirror|codemirror)\//.test(id)
            ),
            runtime: Object.keys(chunk.modules).some((id) => id.endsWith('/src/sidebar-organizer.ts')),
          },
        ])
    );
    this.emitFile({
      type: 'asset',
      fileName: MANIFEST_NAME,
      source: `${JSON.stringify({ entry: ENTRY_NAME, chunks }, null, 2)}\n`,
    });
  },
});
