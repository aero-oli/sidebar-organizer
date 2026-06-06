import { readFileSync } from 'node:fs';

const build = readFileSync('build/sidebar-organizer.js', 'utf8');
const integration = readFileSync('custom_components/sidebar_organizer/frontend/sidebar-organizer.js', 'utf8');

if (build !== integration) {
  console.error('Integration frontend bundle is stale. Run pnpm run build.');
  process.exit(1);
}
