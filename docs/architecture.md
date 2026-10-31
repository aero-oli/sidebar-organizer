# Architecture

## Sources of truth

Home Assistant owns durable state. The shared YAML is the default layout; an optional user YAML completely overrides it. Small per-user preferences are stored separately. Browser storage is limited to namespaced last-good caches, migration data, and device-local compatibility state.

```text
shared YAML ─┐
user YAML ───┼─> effective profile ─> versioned WebSocket envelope ─> frontend runtime/editor
preferences ─┘
```

Every response carries schema and content revision metadata. Shared and profile writes use compare-and-swap revisions, atomic replacement, validation, size limits, and a previous-version backup.

The profile directory is a dedicated integration-owned trust boundary. It must not be the Home Assistant config root or overlap the shared config, and an ownership marker is required before profile files are enumerated. Filesystem discovery and metadata collection run outside Home Assistant's event loop.

## Synchronisation

One backend watcher observes the shared file and profile directory, including manual YAML edits. WebSocket subscriptions notify shared editors and every user whose effective profile changed. Browsers do not poll the filesystem. Personal collapsed-group state is debounced to a dedicated preferences endpoint when synchronization is enabled; preference writes have an independent backend policy and users can retain device-local state instead.

## Runtime lifecycle

Runtime setup is a single awaited pipeline:

```text
idle -> discovering -> loading -> planning -> applying -> ready
                                      `-----------> degraded
```

A generation token prevents an older asynchronous run from committing after a newer run. Template subscriptions are disposed before reruns. DOM parents are snapshotted before application and restored if setup fails. Home Assistant history and component prototypes are not patched by the setup pipeline.

## Editor lifecycle

The editor tracks a published baseline, raw YAML, source revision, validation result, and the selected target. Raw YAML changes, including comments, remain saveable. Malformed field types retain the previous safe visual configuration while the exact YAML draft remains recoverable. Server YAML is handled identically for shared and personal profiles. External changes auto-reload a clean editor and require a decision when local edits exist. Profile selection and subscriptions are generation-owned, and saves are single-flight. Each save publishes an immutable snapshot; edits made during the request stay dirty and recoverable against the returned revision. Imports preserve the exact YAML payload, and adjacent backups can be restored from the dialog. One preview instance moves between the desktop column and the modal drawer; closed drawers are hidden and inert.

## Compatibility and migration

The UI presents the shared default, the signed-in user's sidebar, and—only for administrators—other users. Browser storage and public `/local` YAML remain supported as migration paths, not preferred sync mechanisms. Unknown configuration keys are preserved to allow forward-compatible releases.

## Release invariants

- Frontend and backend schema fixtures must agree.
- The package, integration manifest, backend frontend version, built bundle, and checked-in integration bundle must match.
- The stable frontend entry and every referenced chunk are copied, checked, and released together. The runtime loads at startup; editor and CodeMirror code loads when the dialog is opened.
- CI installs the frozen lockfile and runs frontend tests, backend tests, lint, bundle generation, Python compilation, and bundle/version checks.
- Production bundles retain warnings and errors needed for support diagnostics.
