import { readFileSync } from 'node:fs';

import { compareFrontendAssets, inspectFrontendLoading, readAssetManifest } from './frontend_assets.mjs';

compareFrontendAssets('build', 'custom_components/sidebar_organizer/frontend');
const packageVersion = JSON.parse(readFileSync('package.json', 'utf8')).version;
const manifestVersion = JSON.parse(readFileSync('custom_components/sidebar_organizer/manifest.json', 'utf8')).version;
const constants = readFileSync('custom_components/sidebar_organizer/const.py', 'utf8');
const frontendVersion = constants.match(/^FRONTEND_VERSION = "([^"]+)"$/m)?.[1];

if (packageVersion !== manifestVersion || packageVersion !== frontendVersion) {
  console.error(
    `Version mismatch: package=${packageVersion}, manifest=${manifestVersion}, frontend=${frontendVersion}`
  );
  process.exit(1);
}

console.log('Frontend bundle bytes:', inspectFrontendLoading(readAssetManifest('build')));
