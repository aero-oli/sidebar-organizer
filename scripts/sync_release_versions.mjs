import { readFileSync, writeFileSync } from 'node:fs';

const packageVersion = JSON.parse(readFileSync('package.json', 'utf8')).version;

const manifestPath = 'custom_components/sidebar_organizer/manifest.json';
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
manifest.version = packageVersion;
writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

const constantsPath = 'custom_components/sidebar_organizer/const.py';
const constants = readFileSync(constantsPath, 'utf8');
const updatedConstants = constants.replace(
  /^FRONTEND_VERSION = "[^"]+"$/m,
  `FRONTEND_VERSION = "${packageVersion}"`
);
if (updatedConstants === constants && !constants.includes(`FRONTEND_VERSION = "${packageVersion}"`)) {
  throw new Error('Could not update FRONTEND_VERSION in const.py');
}
writeFileSync(constantsPath, updatedConstants);
