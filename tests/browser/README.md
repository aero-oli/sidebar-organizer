Run the native Chrome fixture after installing the repository's Node dependencies:

```sh
node tests/browser/run.mjs
```

After `pnpm run build`, add `--production` to verify the shipped entry and chunks
in a fresh page. It checks that the runtime loads, editor code is absent from
startup, and importing the lazy dialog registers the editor and CodeMirror.
The versioned-entry fixture serves an incompatible old response at the bare
entry URL to catch accidental dependencies on an older cached entry.

On macOS the runner uses the installed Google Chrome application. Set `CHROME_BIN`
to a Chrome/Chromium executable on other systems. Browser launch may require the
execution environment's normal approval to run outside its filesystem sandbox.

The runner bundles current source into an isolated temporary directory, starts a
loopback HTTP server, and checks headless Chrome at 1100px and 1700px. It removes
the bundle and temporary browser profiles on completion and exits nonzero on a
failed assertion or browser error. It adds no browser automation dependency.

Coverage includes actual editor/preview rendering, single-preview identity,
closed drawer focus exclusion, opening/Escape focus management, background
inertness, and teardown. Native media queries establish each viewport; an explicit
production breakpoint callback checks component identity during state changes.
Runtime checks use actual prototype methods for header keyboard activation and
appearance apply/restore. The group-divider arrow initializer is extracted from
current source with TypeScript's parser and exercised with actual toggle logic.

This is a minimal Home Assistant fixture: HA button controls and network/setup
boundaries are stubbed, runtime auto-start is disabled, and animation is disabled
for deterministic group checks. It does not replace live Home Assistant testing,
full assistive-technology acceptance, or physical keyboard testing.
