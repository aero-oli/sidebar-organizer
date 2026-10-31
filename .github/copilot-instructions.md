# Contributor instructions for `sidebar-organizer`

## Checks and development

CI uses Node 22 and pnpm 10. Install Node dependencies with
`pnpm install --frozen-lockfile`. Backend tests require the production YAML parser
and WebSocket schema dependency in `tests/backend/requirements.txt`; install them
in a Python virtual environment before running the checks.

| Task | Command |
| --- | --- |
| Frontend tests | `pnpm run test:frontend` |
| One frontend test file | `node --import tsx --test tests/frontend/workbench.test.ts` |
| Backend tests | `pnpm run test:backend` |
| Passive frontend lint | `pnpm run lint` |
| Explicit lint fixes | `pnpm run lint:fix` |
| Type checking | `pnpm exec tsc --noEmit` |
| Python lint | `ruff check custom_components/sidebar_organizer tests/backend` |
| Native browser fixture | `node tests/browser/run.mjs` |
| Development server on port 8235 | `pnpm start` |
| Build integration assets | `pnpm run build` |
| Build/installed asset consistency | `pnpm run check:bundle` |
| Full verification | `pnpm run verify` |

Tests under `tests/frontend` exercise configuration providers, editor sessions,
and actual runtime/editor methods. Backend command tests use lightweight Home
Assistant registration stubs and real storage/YAML helpers. Browser fixtures use
installed Chrome and minimal HA controls; passing them does not establish live
Home Assistant or physical-device compatibility.

## Architecture and invariants

- This integration requires Home Assistant 2026.6 or later. It serves its own
  frontend module; installations must remove duplicate legacy dashboard resources.
- The shared private YAML is the default. A personal profile completely overrides
  it. Per-user collapsed-group preferences have a separate endpoint and policy.
- Browser storage holds user-scoped caches, recoverable drafts, and legacy
  compatibility state. Static `/local` YAML remains a migration path.
- `SidebarOrganizer` owns runtime setup, sidebar DOM changes, and cleanup. Reruns
  restore owned DOM/styles and dispose obsolete template/profile handlers.
- `EditorSessionController` owns draft validation and recovery. Saves publish an
  immutable snapshot; edits made during the request remain unpublished and dirty.
- Backend revisions must describe the exact content returned or written. Preserve
  compare-and-swap checks, atomic replacement, backups, size limits, and profile
  directory ownership/path checks.
- Keep field validation aligned across frontend and backend schema fixtures.
  Include both `custom_groups` and `bottom_groups` in assignment operations and
  preserve unknown configuration fields.
- Use existing event, dialog, and storage helpers. Do not patch HA prototypes or
  treat its native sidebar preferences as the organizer's durable configuration.
- Production output is a stable `sidebar-organizer.js` entry plus hashed runtime
  and lazy editor chunks and an asset manifest. Copy and release the complete
  frontend directory; copying the entry alone is insufficient. Development output
  stays under `dist/`, release output under `build/`. Do not hand-edit generated
  assets in `custom_components/sidebar_organizer/frontend/`.
