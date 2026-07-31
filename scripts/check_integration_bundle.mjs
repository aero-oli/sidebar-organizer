import { readFileSync } from 'node:fs';

const build = readFileSync('build/sidebar-organizer.js', 'utf8');
const integration = readFileSync('custom_components/sidebar_organizer/frontend/sidebar-organizer.js', 'utf8');
const packageVersion = JSON.parse(readFileSync('package.json', 'utf8')).version;
const manifestVersion = JSON.parse(
  readFileSync('custom_components/sidebar_organizer/manifest.json', 'utf8')
).version;
const constants = readFileSync('custom_components/sidebar_organizer/const.py', 'utf8');
const frontendVersion = constants.match(/^FRONTEND_VERSION = "([^"]+)"$/m)?.[1];

if (build !== integration) {
  console.error('Integration frontend bundle is stale. Run pnpm run build.');
  process.exit(1);
}

if (packageVersion !== manifestVersion || packageVersion !== frontendVersion) {
  console.error(
    `Version mismatch: package=${packageVersion}, manifest=${manifestVersion}, frontend=${frontendVersion}`
  );
  process.exit(1);
}
