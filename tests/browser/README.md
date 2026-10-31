Run the native Chrome fixture after installing the repository's Node dependencies:

```sh
node tests/browser/run.mjs
```

The runner bundles current source in an isolated temporary directory, serves it
on loopback, and checks native Chrome at 390, 1000, 1440, and 1700 pixels. The
production desktop-preview breakpoint is 1100 pixels. Temporary bundles and
browser profiles are removed when the runner stops. A failed assertion or browser
error produces a nonzero exit code; no browser automation dependency is added.

For an interactive visual review without running mutation assertions:

```sh
node tests/browser/run.mjs --serve
```

Open the printed `?review` URL in a browser. The page shows a representative
organizer with grouped system and custom items. The same URL without `?review`
runs the assertion journeys and exposes JSON results. Stop with Ctrl+C to remove
the isolated temporary files. This fixture uses minimal synthetic HA-like styles
and native-input control stubs, not Home Assistant's real controls or icon set.

After `pnpm run build`, add `--production` to verify the shipped entry and chunks
in a fresh page. It checks that the runtime loads, editor code is absent from
startup, and importing the lazy dialog registers the editor and CodeMirror.
The versioned-entry fixture serves an incompatible old response at the bare
entry URL to catch accidental dependencies on an older cached entry.

On macOS the runner uses installed Google Chrome. Set `CHROME_BIN` to a
Chrome/Chromium executable on other systems. Browser launch may require the
execution environment's normal approval to run outside its filesystem sandbox.
A browser launch timeout with no fixture results is an unverified run, not a
component assertion failure.

Source coverage includes the two primary task tabs and Advanced routes; grouped
preview uniqueness and canonical custom-item selection; one group-edit list;
placement and visibility updates to the shared draft; creation with destination
and group; full-data appearance switch changes; retained selection; route scroll reset/restore; invalid YAML retaining
visual configuration and a local draft; and reachable Review with disabled Apply.
Drawer checks cover opening/Escape focus, closed-drawer focus exclusion,
background inertness, and one preview instance across responsive transitions and
teardown. Native media queries establish each viewport; explicit production
breakpoint callbacks exercise a responsive round trip without replacing preview.

Existing runtime checks exercise actual prototype methods for header keyboard
activation and appearance apply/restore. The group-divider arrow initializer is
extracted from current source using TypeScript's parser and exercised with actual
toggle logic.

HA controls and network/setup boundaries are stubbed, runtime auto-start is
disabled, and animation is disabled for deterministic group checks. This does not
replace live Home Assistant testing, assistive-technology acceptance, or physical
keyboard testing.
