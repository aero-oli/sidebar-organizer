# Sidebar Organizer Robust Install And Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make Sidebar Organizer easier to install, harder to misconfigure, safer around backend YAML changes, and more polished for Home Assistant users.

**Architecture:** Convert the backend from YAML-only setup into a normal Home Assistant config-entry integration with a UI config flow and options flow, while preserving YAML import/backward compatibility. Add backend diagnostics and config-change subscription support, then surface those states in the frontend with clearer install/status UX. Harden release automation so HACS installability, backend tests, frontend build output, and generated integration bundle freshness are verified before releases.

**Tech Stack:** Home Assistant custom integration Python, Home Assistant WebSocket API, Lit/TypeScript frontend, HACS integration packaging, pnpm/Rollup, node:test, Python unittest, GitHub Actions.

---

## File Map

- `custom_components/sidebar_organizer/manifest.json`: add `config_flow: true`; keep `version`, `issue_tracker`, `dependencies`.
- `custom_components/sidebar_organizer/config_flow.py`: new UI setup, YAML import, and options flow.
- `custom_components/sidebar_organizer/__init__.py`: support config entries, unload/reload, YAML import fallback, frontend registration idempotency.
- `custom_components/sidebar_organizer/const.py`: add defaults, config-entry option constants, diagnostic event names, version source.
- `custom_components/sidebar_organizer/helpers.py`: keep safe path resolution and atomic writes; add config settings normalizer and file metadata helper.
- `custom_components/sidebar_organizer/websocket_api.py`: add diagnostics fields, subscribe command, safer error payloads, and consistent read/write metadata.
- `custom_components/sidebar_organizer/strings.json`: add config flow/options flow labels and error strings.
- `custom_components/sidebar_organizer/translations/en.json`: mirror strings.
- `tests/backend/test_helpers.py`: expand pure helper tests.
- `tests/backend/test_config_flow.py`: new lightweight tests if HA test harness is available; otherwise skip in initial phase and keep pure tests.
- `src/config/types.ts`: add diagnostic/read/raw YAML state types.
- `src/config/providers/ha-config-provider.ts`: add subscribe, diagnostics, typed errors, raw YAML preservation support.
- `src/config/validation.ts`: align frontend validation contract with backend.
- `src/components/sidebar-dialog.ts`: improve config source UI, diagnostic panel, live reload prompt, save conflict handling.
- `src/components/editor/sidebar-dialog-code-editor.ts`: preserve/edit raw YAML text in HA config mode.
- `src/constants/index.ts`: update user-facing copy.
- `src/utilities/configs/fetcher.ts`: use backend cache as fallback only and record source status.
- `tests/frontend/config-providers.test.ts`: add provider and validation tests.
- `.github/workflows/ci.yml`: broaden paths and run full test/build/backend checks.
- `.github/workflows/validate.yml`: keep HACS validation; allow manual branch validation.
- `.github/workflows/release.yml`: build/test/validate before release; upload JS asset; check generated bundle freshness.
- `package.json`: add backend verification and stale-bundle check scripts.
- `README.md`: rewrite install/upgrade/troubleshooting for config-flow-first installation.

---

## Phase 1: Backend Config Entries And Easier Install

### Task 1: Add Config Entry Data Model Helpers

**Files:**
- Modify: `custom_components/sidebar_organizer/const.py`
- Modify: `custom_components/sidebar_organizer/helpers.py`
- Test: `tests/backend/test_helpers.py`

- [ ] **Step 1: Write failing helper tests**

Add tests that prove default options are normalized and path validation still rejects traversal:

```python
def test_normalize_options_uses_defaults(self) -> None:
    options = helpers.normalize_options({})

    self.assertEqual(options["config_path"], "sidebar-organizer.yaml")
    self.assertEqual(options["allow_write"], True)
    self.assertEqual(options["create_if_missing"], True)


def test_normalize_options_preserves_explicit_values(self) -> None:
    options = helpers.normalize_options(
        {
            "config_path": "configs/sidebar-organizer.yaml",
            "allow_write": False,
            "create_if_missing": False,
        }
    )

    self.assertEqual(options["config_path"], "configs/sidebar-organizer.yaml")
    self.assertEqual(options["allow_write"], False)
    self.assertEqual(options["create_if_missing"], False)
```

- [ ] **Step 2: Run tests and verify failure**

Run:

```bash
python3 -m unittest tests/backend/test_helpers.py
```

Expected: fails with `AttributeError: module 'sidebar_organizer_helpers' has no attribute 'normalize_options'`.

- [ ] **Step 3: Implement constants and helper**

In `custom_components/sidebar_organizer/const.py`, ensure these constants exist:

```python
CONF_ALLOW_WRITE = "allow_write"
CONF_CONFIG_PATH = "config_path"
CONF_CREATE_IF_MISSING = "create_if_missing"

DEFAULT_ALLOW_WRITE = True
DEFAULT_CONFIG_PATH = "sidebar-organizer.yaml"
DEFAULT_CREATE_IF_MISSING = True
```

In `custom_components/sidebar_organizer/helpers.py`, add:

```python
def normalize_options(raw: dict[str, Any] | None) -> dict[str, Any]:
    """Return Sidebar Organizer options with defaults applied."""
    raw = raw or {}
    return {
        "config_path": raw.get("config_path", "sidebar-organizer.yaml"),
        "allow_write": raw.get("allow_write", True),
        "create_if_missing": raw.get("create_if_missing", True),
    }
```

- [ ] **Step 4: Run tests and verify pass**

Run:

```bash
python3 -m unittest tests/backend/test_helpers.py
```

Expected: all backend helper tests pass.

- [ ] **Step 5: Commit**

```bash
git add custom_components/sidebar_organizer/const.py custom_components/sidebar_organizer/helpers.py tests/backend/test_helpers.py
git commit -m "test: cover sidebar organizer option defaults"
```

### Task 2: Add Home Assistant Config Flow And Options Flow

**Files:**
- Create: `custom_components/sidebar_organizer/config_flow.py`
- Modify: `custom_components/sidebar_organizer/manifest.json`
- Modify: `custom_components/sidebar_organizer/strings.json`
- Modify: `custom_components/sidebar_organizer/translations/en.json`

- [ ] **Step 1: Add config flow manifest flag**

Modify `custom_components/sidebar_organizer/manifest.json`:

```json
{
  "config_flow": true
}
```

Keep all existing manifest keys.

- [ ] **Step 2: Create `config_flow.py`**

Create:

```python
"""Config flow for Sidebar Organizer."""

from __future__ import annotations

from typing import Any

import voluptuous as vol
from homeassistant import config_entries
from homeassistant.core import callback

from .const import (
    CONF_ALLOW_WRITE,
    CONF_CONFIG_PATH,
    CONF_CREATE_IF_MISSING,
    DEFAULT_ALLOW_WRITE,
    DEFAULT_CONFIG_PATH,
    DEFAULT_CREATE_IF_MISSING,
    DOMAIN,
)
from .helpers import normalize_options, resolve_config_path


def _options_schema(defaults: dict[str, Any]) -> vol.Schema:
    return vol.Schema(
        {
            vol.Required(CONF_CONFIG_PATH, default=defaults[CONF_CONFIG_PATH]): str,
            vol.Required(CONF_ALLOW_WRITE, default=defaults[CONF_ALLOW_WRITE]): bool,
            vol.Required(CONF_CREATE_IF_MISSING, default=defaults[CONF_CREATE_IF_MISSING]): bool,
        }
    )


class SidebarOrganizerConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Handle a config flow for Sidebar Organizer."""

    VERSION = 1

    async def async_step_user(self, user_input: dict[str, Any] | None = None):
        """Handle manual setup."""
        await self.async_set_unique_id(DOMAIN)
        self._abort_if_unique_id_configured()

        defaults = normalize_options(user_input)
        errors: dict[str, str] = {}

        if user_input is not None:
            try:
                resolve_config_path(self.hass.config.path(), user_input[CONF_CONFIG_PATH])
            except ValueError:
                errors["base"] = "invalid_path"
            else:
                return self.async_create_entry(title="Sidebar Organizer", data={}, options=normalize_options(user_input))

        return self.async_show_form(
            step_id="user",
            data_schema=_options_schema(defaults),
            errors=errors,
        )

    async def async_step_import(self, import_config: dict[str, Any]):
        """Import YAML configuration."""
        await self.async_set_unique_id(DOMAIN)
        self._abort_if_unique_id_configured()
        return self.async_create_entry(title="Sidebar Organizer", data={}, options=normalize_options(import_config))

    @staticmethod
    @callback
    def async_get_options_flow(config_entry: config_entries.ConfigEntry):
        """Return options flow."""
        return SidebarOrganizerOptionsFlow(config_entry)


class SidebarOrganizerOptionsFlow(config_entries.OptionsFlow):
    """Handle Sidebar Organizer options."""

    def __init__(self, config_entry: config_entries.ConfigEntry) -> None:
        self.config_entry = config_entry

    async def async_step_init(self, user_input: dict[str, Any] | None = None):
        """Manage options."""
        defaults = normalize_options(dict(self.config_entry.options))
        errors: dict[str, str] = {}

        if user_input is not None:
            try:
                resolve_config_path(self.hass.config.path(), user_input[CONF_CONFIG_PATH])
            except ValueError:
                errors["base"] = "invalid_path"
            else:
                return self.async_create_entry(title="", data=normalize_options(user_input))

        return self.async_show_form(
            step_id="init",
            data_schema=_options_schema(defaults),
            errors=errors,
        )
```

- [ ] **Step 3: Add strings**

Update `custom_components/sidebar_organizer/strings.json`:

```json
{
  "config": {
    "step": {
      "user": {
        "title": "Sidebar Organizer",
        "description": "Configure the private Home Assistant config-folder YAML file used by Sidebar Organizer.",
        "data": {
          "config_path": "Config path",
          "allow_write": "Allow writing from the UI",
          "create_if_missing": "Create the file if missing"
        }
      }
    },
    "error": {
      "invalid_path": "The config path must resolve inside the Home Assistant config directory."
    },
    "abort": {
      "already_configured": "Sidebar Organizer is already configured."
    }
  },
  "options": {
    "step": {
      "init": {
        "title": "Sidebar Organizer options",
        "description": "Update the private config-folder YAML settings.",
        "data": {
          "config_path": "Config path",
          "allow_write": "Allow writing from the UI",
          "create_if_missing": "Create the file if missing"
        }
      }
    },
    "error": {
      "invalid_path": "The config path must resolve inside the Home Assistant config directory."
    }
  }
}
```

Mirror the same content in `translations/en.json`.

- [ ] **Step 4: Run compile check**

Run:

```bash
python3 -m compileall custom_components/sidebar_organizer
```

Expected: no syntax errors.

- [ ] **Step 5: Commit**

```bash
git add custom_components/sidebar_organizer/config_flow.py custom_components/sidebar_organizer/manifest.json custom_components/sidebar_organizer/strings.json custom_components/sidebar_organizer/translations/en.json
git commit -m "feat: add UI config flow"
```

### Task 3: Support Config Entries In Integration Setup

**Files:**
- Modify: `custom_components/sidebar_organizer/__init__.py`
- Modify: `custom_components/sidebar_organizer/websocket_api.py`
- Test: `python3 -m compileall custom_components/sidebar_organizer`

- [ ] **Step 1: Add config entry setup skeleton**

In `__init__.py`, import:

```python
from homeassistant.config_entries import ConfigEntry
from .helpers import normalize_options
```

Add:

```python
async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Sidebar Organizer from a config entry."""
    options = normalize_options(dict(entry.options))
    return await _async_setup_from_options(hass, options)


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload Sidebar Organizer config entry."""
    return True
```

- [ ] **Step 2: Refactor YAML setup into reusable setup**

Replace the body of `async_setup` with:

```python
async def async_setup(hass: HomeAssistant, config: dict[str, Any]) -> bool:
    """Set up YAML import for Sidebar Organizer."""
    if DOMAIN in config:
        hass.async_create_task(
            hass.config_entries.flow.async_init(
                DOMAIN,
                context={"source": "import"},
                data=config.get(DOMAIN, {}),
            )
        )
    return True
```

Create:

```python
async def _async_setup_from_options(hass: HomeAssistant, options: dict[str, Any]) -> bool:
    """Set up Sidebar Organizer runtime from normalized options."""
    config_path = options[CONF_CONFIG_PATH]
    allow_write = options[CONF_ALLOW_WRITE]
    create_if_missing = options[CONF_CREATE_IF_MISSING]

    try:
        resolved_path = resolve_config_path(hass.config.path(), config_path)
    except ValueError as err:
        _LOGGER.error("Invalid Sidebar Organizer config_path %r: %s", config_path, err)
        return False

    hass.data[DOMAIN] = {
        CONF_CONFIG_PATH: str(resolved_path),
        CONF_ALLOW_WRITE: allow_write,
        CONF_CREATE_IF_MISSING: create_if_missing,
    }

    if not resolved_path.exists() and create_if_missing:
        await hass.async_add_executor_job(atomic_write_text, resolved_path, DEFAULT_CONFIG_YAML)

    await _async_register_frontend(hass)
    async_register_websocket_commands(hass)
    return True
```

- [ ] **Step 3: Make frontend and websocket registration idempotent**

In `__init__.py`, before registering frontend/static paths:

```python
FRONTEND_REGISTERED = f"{DOMAIN}_frontend_registered"
WEBSOCKET_REGISTERED = f"{DOMAIN}_websocket_registered"
```

Use `hass.data` guards:

```python
if hass.data.get(FRONTEND_REGISTERED):
    return
hass.data[FRONTEND_REGISTERED] = True
```

In `websocket_api.py`, guard command registration:

```python
REGISTERED_KEY = f"{DOMAIN}_websocket_registered"

if hass.data.get(REGISTERED_KEY):
    return
hass.data[REGISTERED_KEY] = True
```

- [ ] **Step 4: Run compile check**

Run:

```bash
python3 -m compileall custom_components/sidebar_organizer
```

Expected: no syntax errors.

- [ ] **Step 5: Commit**

```bash
git add custom_components/sidebar_organizer/__init__.py custom_components/sidebar_organizer/websocket_api.py
git commit -m "feat: support config entry setup"
```

---

## Phase 2: Backend Diagnostics And Live Reload Detection

### Task 4: Add File Metadata Helper

**Files:**
- Modify: `custom_components/sidebar_organizer/helpers.py`
- Test: `tests/backend/test_helpers.py`

- [ ] **Step 1: Add failing metadata test**

```python
def test_file_metadata_reports_missing_file(self) -> None:
    with tempfile.TemporaryDirectory() as tmpdir:
        path = Path(tmpdir) / "missing.yaml"

        metadata = helpers.file_metadata(path)

        self.assertEqual(metadata["exists"], False)
        self.assertIsNone(metadata["last_modified"])
        self.assertIsNone(metadata["size"])
```

- [ ] **Step 2: Run test and verify failure**

Run:

```bash
python3 -m unittest tests/backend/test_helpers.py
```

Expected: fails because `file_metadata` does not exist.

- [ ] **Step 3: Implement helper**

In `helpers.py`:

```python
def file_metadata(path: Path) -> dict[str, Any]:
    """Return basic metadata for a config file."""
    if not path.exists():
        return {"exists": False, "last_modified": None, "size": None}
    stat = path.stat()
    return {"exists": True, "last_modified": stat.st_mtime, "size": stat.st_size}
```

- [ ] **Step 4: Run tests**

Run:

```bash
python3 -m unittest tests/backend/test_helpers.py
```

Expected: pass.

- [ ] **Step 5: Commit**

```bash
git add custom_components/sidebar_organizer/helpers.py tests/backend/test_helpers.py
git commit -m "feat: add config file metadata helper"
```

### Task 5: Add Diagnostics WebSocket Command

**Files:**
- Modify: `custom_components/sidebar_organizer/websocket_api.py`
- Modify: `src/config/types.ts`
- Modify: `src/config/providers/ha-config-provider.ts`
- Test: `tests/frontend/config-providers.test.ts`

- [ ] **Step 1: Backend command**

Add:

```python
TYPE_DIAGNOSTICS = f"{DOMAIN}/config/diagnostics"
```

Register:

```python
websocket_api.async_register_command(hass, websocket_diagnostics)
```

Implement:

```python
@websocket_api.websocket_command({vol.Required("type"): TYPE_DIAGNOSTICS})
@callback
def websocket_diagnostics(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Return install and runtime diagnostics."""
    path = _path(hass)
    connection.send_result(
        msg["id"],
        {
            **_metadata(hass),
            "backend_loaded": True,
            "frontend_url": frontend_module_url(FRONTEND_VERSION),
            "legacy_resource_hint": "/hacsfiles/sidebar-organizer/sidebar-organizer.js",
        },
    )
```

Import `frontend_module_url` and `FRONTEND_VERSION`.

- [ ] **Step 2: Frontend provider test**

Add a test:

```ts
it('requests backend diagnostics', async () => {
  const calls: Array<Record<string, unknown>> = [];
  const provider = new HomeAssistantConfigProvider({
    callWS: async (message: Record<string, unknown>) => {
      calls.push(message);
      return { available: true, backend_loaded: true, frontend_url: '/sidebar_organizer/frontend/sidebar-organizer.js?v=4.0.5' };
    },
  } as never);

  const diagnostics = await provider.diagnostics();

  assert.equal(diagnostics.backend_loaded, true);
  assert.equal(calls[0].type, 'sidebar_organizer/config/diagnostics');
});
```

- [ ] **Step 3: Implement provider method**

In `ha-config-provider.ts`:

```ts
async diagnostics(): Promise<ConfigProviderInfo> {
  try {
    return await this.hass.callWS<ConfigProviderInfo>({ type: 'sidebar_organizer/config/diagnostics' });
  } catch (err) {
    return { available: false, error: this._errorMessage(err) };
  }
}
```

- [ ] **Step 4: Run tests**

```bash
pnpm test
```

Expected: pass.

- [ ] **Step 5: Commit**

```bash
git add custom_components/sidebar_organizer/websocket_api.py src/config/types.ts src/config/providers/ha-config-provider.ts tests/frontend/config-providers.test.ts
git commit -m "feat: expose backend diagnostics"
```

### Task 6: Add Config Change Subscription Or Polling

**Files:**
- Modify: `custom_components/sidebar_organizer/websocket_api.py`
- Modify: `src/config/providers/ha-config-provider.ts`
- Modify: `src/components/sidebar-dialog.ts`
- Test: `tests/frontend/config-providers.test.ts`

- [ ] **Step 1: Choose mechanism**

Use frontend polling first. It is simpler, robust, and does not require a long-lived backend file watcher:

```ts
private _haConfigPollTimer?: number;
```

Poll every 30 seconds only when `_configSource === 'home_assistant_config'` and dialog is open.

- [ ] **Step 2: Add provider method**

In `HomeAssistantConfigProvider`:

```ts
async lastModified(): Promise<number | undefined> {
  const info = await this.info();
  return typeof info.last_modified === 'number' ? info.last_modified : undefined;
}
```

- [ ] **Step 3: Add polling in dialog**

In `connectedCallback` or after `_validateHaConfig` success:

```ts
private _startHaConfigPolling(): void {
  window.clearInterval(this._haConfigPollTimer);
  if (this._configSource !== 'home_assistant_config') return;
  this._haConfigPollTimer = window.setInterval(() => this._checkHaConfigExternalChange(), 30000);
}
```

In `disconnectedCallback`:

```ts
window.clearInterval(this._haConfigPollTimer);
this._haConfigPollTimer = undefined;
```

Implement:

```ts
private async _checkHaConfigExternalChange(): Promise<void> {
  if (this._configSource !== 'home_assistant_config') return;
  const provider = new HomeAssistantConfigProvider(this.hass);
  const info = await provider.info();
  const current = this._haConfigInfo.last_modified;
  const next = info.last_modified;
  if (typeof current === 'number' && typeof next === 'number' && next > current) {
    this._haConfigInfo = info;
    const reload = await showConfirmDialog(
      this,
      'The Home Assistant config file changed on disk. Reload it now?',
      'Reload',
      'Later'
    );
    if (reload) {
      await this._reloadHomeAssistantConfig();
    }
  }
}
```

- [ ] **Step 4: Add frontend test for metadata comparison**

Extend existing `isHaConfigModified` tests with equal, older, newer, null cases if not already covered.

- [ ] **Step 5: Run tests**

```bash
pnpm test
```

Expected: pass.

- [ ] **Step 6: Commit**

```bash
git add src/config/providers/ha-config-provider.ts src/components/sidebar-dialog.ts tests/frontend/config-providers.test.ts
git commit -m "feat: detect external config file changes"
```

---

## Phase 3: Raw YAML Preservation And Safer Save Semantics

### Task 7: Preserve Raw YAML In HA Config Mode

**Files:**
- Modify: `src/config/types.ts`
- Modify: `src/config/providers/ha-config-provider.ts`
- Modify: `src/components/sidebar-dialog.ts`
- Modify: `src/components/editor/sidebar-dialog-code-editor.ts`
- Test: `tests/frontend/config-providers.test.ts`

- [ ] **Step 1: Add raw YAML state**

In `SidebarConfigDialog`, add:

```ts
@state() private _rawYaml = '';
```

When HA read succeeds:

```ts
this._rawYaml = result.rawYaml || '';
```

- [ ] **Step 2: Pass raw YAML to editor**

In `_renderCodeEditor()`:

```ts
<sidebar-dialog-code-editor
  ._rawYaml=${this._rawYaml}
  ._configSource=${this._configSource}
  @raw-yaml-changed=${this._handleRawYamlChanged}
></sidebar-dialog-code-editor>
```

- [ ] **Step 3: Update code editor API**

In `sidebar-dialog-code-editor.ts`:

```ts
@property() _configSource: string = 'browser_storage';
@property() _rawYaml = '';
```

Use raw YAML in HA mode:

```ts
const editorValue = this._configSource === 'home_assistant_config' && this._rawYaml
  ? this._rawYaml
  : this._sidebarConfig;
```

Dispatch:

```ts
this.dispatchEvent(new CustomEvent('raw-yaml-changed', { detail: { yaml: YAML.stringify(value) }, bubbles: true, composed: true }));
```

- [ ] **Step 4: Save raw YAML when available**

In `_saveHomeAssistantConfig`:

```ts
const yaml = this._rawYaml.trim() ? this._rawYaml : YAML.stringify(this._sidebarConfig);
```

- [ ] **Step 5: Test provider preserves raw**

Add:

```ts
it('returns raw backend YAML for round-trip editing', async () => {
  const provider = new HomeAssistantConfigProvider({
    callWS: async () => ({ yaml: 'header_title: Test\\n# comment\\nbottom_items: []', last_modified: 1 }),
  } as never);

  const result = await provider.read();

  assert.equal(result.rawYaml?.includes('# comment'), true);
});
```

- [ ] **Step 6: Run tests**

```bash
pnpm test
```

Expected: pass.

- [ ] **Step 7: Commit**

```bash
git add src/config src/components/sidebar-dialog.ts src/components/editor/sidebar-dialog-code-editor.ts tests/frontend/config-providers.test.ts
git commit -m "feat: preserve raw HA config YAML"
```

### Task 8: Add Save Conflict Guard

**Files:**
- Modify: `src/components/sidebar-dialog.ts`
- Test: `tests/frontend/config-providers.test.ts`

- [ ] **Step 1: Store last loaded mtime**

Add:

```ts
@state() private _lastLoadedHaConfigModified?: number;
```

Set it after successful read/reload/save:

```ts
this._lastLoadedHaConfigModified = result.last_modified ?? undefined;
```

- [ ] **Step 2: Check before write**

Before write:

```ts
const latestInfo = await provider.info();
if (
  typeof this._lastLoadedHaConfigModified === 'number' &&
  typeof latestInfo.last_modified === 'number' &&
  latestInfo.last_modified > this._lastLoadedHaConfigModified
) {
  const overwrite = await showConfirmDialog(
    this,
    'The Home Assistant config file changed after you loaded it. Overwrite it?',
    'Overwrite',
    'Cancel'
  );
  if (!overwrite) return;
}
```

- [ ] **Step 3: Run frontend tests**

```bash
node --import tsx --test tests/frontend/*.test.ts
```

Expected: pass.

- [ ] **Step 4: Commit**

```bash
git add src/components/sidebar-dialog.ts tests/frontend/config-providers.test.ts
git commit -m "feat: guard against overwriting newer HA config"
```

---

## Phase 4: Frontend Polish And Install Diagnostics

### Task 9: Replace Native Config Source Select With HA Controls

**Files:**
- Modify: `src/components/sidebar-dialog.ts`
- Modify: `src/components/dialog-css.ts` or component styles used by sidebar dialog

- [ ] **Step 1: Replace `<select>`**

Replace the current native select with three `ha-button`/segmented-style controls:

```ts
private _renderSourceButton(source: ConfigSource, label: string, icon: string): TemplateResult {
  const selected = this._configSource === source;
  return html`
    <ha-button
      appearance=${selected ? 'filled' : 'plain'}
      size="small"
      @click=${() => this._setConfigSource(source)}
    >
      <ha-icon .icon=${icon}></ha-icon>
      ${label}
    </ha-button>
  `;
}
```

Add:

```ts
private async _setConfigSource(source: ConfigSource): Promise<void> {
  this._configSource = source;
  this._useConfigFile = source === 'static_yaml';
  setConfigSource(source);
  await this._setupInitConfig();
  this.requestUpdate();
}
```

- [ ] **Step 2: Keep old handler until no select remains**

After verifying no `<select>` remains, remove `_handleConfigSourceChange`.

- [ ] **Step 3: Run build**

```bash
pnpm run build
```

Expected: pass.

- [ ] **Step 4: Commit**

```bash
git add src/components/sidebar-dialog.ts src/components/dialog-css.ts custom_components/sidebar_organizer/frontend/sidebar-organizer.js
git commit -m "feat: polish config source controls"
```

### Task 10: Add Install Diagnostics Panel

**Files:**
- Modify: `src/components/sidebar-dialog.ts`
- Modify: `src/constants/index.ts`

- [ ] **Step 1: Add diagnostic state**

```ts
@state() private _haDiagnostics?: ConfigProviderInfo;
```

Load diagnostics when HA mode is selected:

```ts
this._haDiagnostics = await provider.diagnostics();
```

- [ ] **Step 2: Render checklist**

Create:

```ts
private _renderHaDiagnostics(): TemplateResult | typeof nothing {
  if (this._configSource !== 'home_assistant_config') return nothing;
  const info = this._haDiagnostics || this._haConfigInfo;
  return html`
    <div class="ha-config-diagnostics">
      ${this._renderDiagnosticRow('Backend loaded', info.available)}
      ${this._renderDiagnosticRow('Config file exists', info.exists)}
      ${this._renderDiagnosticRow('Write enabled', info.allow_write)}
      <span>Path: ${info.config_path || 'not reported'}</span>
      <span>Last modified: ${this._formatLastModified(info.last_modified)}</span>
    </div>
  `;
}
```

- [ ] **Step 3: Add legacy resource warning**

Detect scripts:

```ts
private _legacyFrontendResourceLoaded(): boolean {
  return Array.from(document.scripts).some((script) =>
    script.src.includes('/hacsfiles/sidebar-organizer/sidebar-organizer.js')
  );
}
```

Render warning if true:

```ts
<ha-alert alert-type="warning">
  Old Dashboard resource is still loaded. Remove /hacsfiles/sidebar-organizer/sidebar-organizer.js from Dashboard resources.
</ha-alert>
```

- [ ] **Step 4: Build**

```bash
pnpm run build
```

Expected: pass.

- [ ] **Step 5: Commit**

```bash
git add src/components/sidebar-dialog.ts src/constants/index.ts custom_components/sidebar_organizer/frontend/sidebar-organizer.js
git commit -m "feat: show install diagnostics"
```

---

## Phase 5: Validation Contract And Test Coverage

### Task 11: Define A Shared Validation Contract Document

**Files:**
- Create: `docs/sidebar-organizer-config-schema.md`
- Modify: `README.md`

- [ ] **Step 1: Create schema doc**

Create:

```markdown
# Sidebar Organizer YAML Schema

The backend intentionally accepts unknown keys and preserves them.

Required top-level shape: object/dictionary.

Known fields:

- `header_title`: string
- `hide_header_toggle`: boolean
- `bottom_items`: list of strings
- `bottom_grid_items`: list of strings
- `default_collapsed`: list of strings
- `hidden_items`: list of strings
- `custom_groups`: object mapping group name to list of strings
- `color_config`: object
- `new_items`: list of objects
- `pinned_groups`: object

Invalid YAML must never crash Home Assistant or the frontend.
```

- [ ] **Step 2: Link README**

Add a link under the YAML mode documentation.

- [ ] **Step 3: Commit**

```bash
git add docs/sidebar-organizer-config-schema.md README.md
git commit -m "docs: document YAML schema contract"
```

### Task 12: Expand Frontend And Backend Validation

**Files:**
- Modify: `custom_components/sidebar_organizer/helpers.py`
- Modify: `src/config/validation.ts`
- Modify: `tests/backend/test_helpers.py`
- Modify: `tests/frontend/config-providers.test.ts`

- [ ] **Step 1: Add backend tests**

Add:

```python
def test_validate_known_lists(self) -> None:
    invalid = helpers.validate_yaml_config("bottom_grid_items: config\nhidden_items: {}\n")

    self.assertFalse(invalid["valid"])
    self.assertIn("bottom_grid_items must be a list of strings.", invalid["errors"])
    self.assertIn("hidden_items must be a list of strings.", invalid["errors"])
```

- [ ] **Step 2: Add frontend tests**

Add:

```ts
it('validates additional known list fields', () => {
  const result = parseSidebarYamlConfig('bottom_grid_items: config\nhidden_items: {}\n');

  assert.equal(result.valid, false);
  assert.deepEqual(result.errors, [
    'bottom_grid_items must be a list of strings.',
    'hidden_items must be a list of strings.',
  ]);
});
```

- [ ] **Step 3: Implement backend validation**

In `validate_config_object`:

```python
for key in ("bottom_items", "bottom_grid_items", "default_collapsed", "hidden_items"):
    if key in config and not _is_list_of_strings(config[key]):
        errors.append(f"{key} must be a list of strings.")
```

- [ ] **Step 4: Implement frontend validation**

In `validateSidebarConfigShape`:

```ts
for (const key of ['bottom_items', 'bottom_grid_items', 'default_collapsed', 'hidden_items'] as const) {
  if (key in config && !isStringArray(config[key])) {
    errors.push(`${key} must be a list of strings.`);
  }
}
```

- [ ] **Step 5: Run tests**

```bash
pnpm test
```

Expected: pass.

- [ ] **Step 6: Commit**

```bash
git add custom_components/sidebar_organizer/helpers.py src/config/validation.ts tests/backend/test_helpers.py tests/frontend/config-providers.test.ts
git commit -m "test: align frontend and backend config validation"
```

---

## Phase 6: CI, Release, And HACS Reliability

### Task 13: Add Verification Scripts

**Files:**
- Modify: `package.json`
- Create: `scripts/check_integration_bundle.mjs`

- [ ] **Step 1: Add stale bundle checker**

Create `scripts/check_integration_bundle.mjs`:

```js
import { readFileSync } from 'node:fs';

const build = readFileSync('build/sidebar-organizer.js', 'utf8');
const integration = readFileSync('custom_components/sidebar_organizer/frontend/sidebar-organizer.js', 'utf8');

if (build !== integration) {
  console.error('Integration frontend bundle is stale. Run pnpm run build.');
  process.exit(1);
}
```

- [ ] **Step 2: Add scripts**

In `package.json`:

```json
{
  "scripts": {
    "test:backend": "python3 -m unittest discover -s tests/backend",
    "test:frontend": "node --import tsx --test tests/frontend/*.test.ts",
    "test": "pnpm run test:frontend && pnpm run test:backend",
    "check:backend": "python3 -m compileall custom_components/sidebar_organizer",
    "check:bundle": "node scripts/check_integration_bundle.mjs",
    "verify": "pnpm test && pnpm run build && pnpm run check:backend && pnpm run check:bundle"
  }
}
```

- [ ] **Step 3: Run verify**

```bash
pnpm run verify
```

Expected: pass.

- [ ] **Step 4: Commit**

```bash
git add package.json scripts/check_integration_bundle.mjs
git commit -m "chore: add release verification scripts"
```

### Task 14: Broaden CI Workflow

**Files:**
- Modify: `.github/workflows/ci.yml`

- [ ] **Step 1: Update paths**

Replace paths with:

```yaml
paths:
  - 'src/**'
  - 'custom_components/**'
  - 'tests/**'
  - 'package.json'
  - 'pnpm-lock.yaml'
  - 'rollup.config.js'
  - 'hacs.json'
  - '.github/workflows/**'
```

- [ ] **Step 2: Run one verify job**

Simplify jobs to one:

```yaml
jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - uses: pnpm/action-setup@v4
        with:
          version: 10
          run_install: false
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm
      - run: pnpm install
      - run: pnpm run verify
```

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/ci.yml
git commit -m "ci: verify integration packaging"
```

### Task 15: Make Release Workflow Build And Upload Correct Assets

**Files:**
- Modify: `.github/workflows/release.yml`

- [ ] **Step 1: Add verify before release**

Before semantic-release:

```yaml
- name: Verify
  run: pnpm run verify
```

- [ ] **Step 2: Ensure generated bundle is committed or release is blocked**

Add:

```yaml
- name: Check clean generated bundle
  run: git diff --exit-code custom_components/sidebar_organizer/frontend/sidebar-organizer.js
```

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/release.yml
git commit -m "ci: validate bundle before release"
```

---

## Phase 7: Documentation And User Support Polish

### Task 16: Rewrite Installation Docs Around UI Setup

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Update HACS install section**

Replace the install sequence with:

```markdown
1. Add `aero-oli/sidebar-organizer` to HACS as category `Integration`.
2. Install Sidebar Organizer.
3. Restart Home Assistant.
4. Go to Settings -> Devices & services -> Add integration -> Sidebar Organizer.
5. Choose the private config path, normally `sidebar-organizer.yaml`.
6. Open the Sidebar Organizer dialog and select `Home Assistant config folder`.
```

- [ ] **Step 2: Keep YAML fallback**

Add:

```markdown
YAML setup is still supported for users who prefer `configuration.yaml`:

```yaml
sidebar_organizer:
  config_path: sidebar-organizer.yaml
  allow_write: true
  create_if_missing: true
```
```

- [ ] **Step 3: Add migration callout**

```markdown
If you previously installed Sidebar Organizer as a Dashboard/frontend plugin, remove the Dashboard resource `/hacsfiles/sidebar-organizer/sidebar-organizer.js` and any `frontend.extra_module_url` entry before restarting.
```

- [ ] **Step 4: Commit**

```bash
git add README.md
git commit -m "docs: document config-flow installation"
```

### Task 17: Add Troubleshooting Matrix

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Add matrix**

```markdown
| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Backend unavailable | Integration not configured or HA not restarted | Add integration in Devices & services and restart |
| Duplicate custom element log | Old Dashboard resource still loaded | Remove `/hacsfiles/sidebar-organizer/sidebar-organizer.js` resource |
| YAML edits do not show | Browser has not reloaded backend config | Use Reload from HA config or wait for change prompt |
| Cannot save | `allow_write` false or non-admin user | Enable write in options and sign in as admin |
| File missing | `create_if_missing` false | Create file manually or enable create option |
| Stale frontend after update | Browser cache | Hard refresh, clear HA frontend cache |
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "docs: add troubleshooting matrix"
```

---

## Phase 8: Final Verification And Release

### Task 18: Full Local Verification

**Files:**
- No source edits expected.

- [ ] **Step 1: Run full verification**

```bash
pnpm run verify
```

Expected:

```text
tests pass
rollup build succeeds
compileall succeeds
bundle check succeeds
```

- [ ] **Step 2: Inspect working tree**

```bash
git status --short --branch
```

Expected: clean or only intentional generated files staged.

### Task 19: Publish Release

**Files:**
- Modify version files only if release workflow does not handle versioning.

- [ ] **Step 1: Bump version if manual release**

Update:

- `package.json`
- `custom_components/sidebar_organizer/manifest.json`
- `custom_components/sidebar_organizer/const.py`
- `tests/backend/test_helpers.py`

- [ ] **Step 2: Build after bump**

```bash
pnpm run build
pnpm test
python3 -m compileall custom_components/sidebar_organizer
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: release v4.1.0"
git push origin main
```

- [ ] **Step 4: Create release**

```bash
gh release create v4.1.0 build/sidebar-organizer.js --title v4.1.0 --notes "Config-flow install, diagnostics, live reload detection, raw YAML preservation, and release hardening."
```

- [ ] **Step 5: Verify HACS validation**

```bash
gh run list --limit 5
gh run view <hacs-run-id> --json status,conclusion,url,jobs
```

Expected: HACS workflow conclusion is `success`.

---

## Acceptance Criteria

- HACS install no longer requires editing `configuration.yaml` for normal users.
- Existing YAML setup imports into a config entry without breaking current users.
- The frontend can clearly show whether backend mode is installed, configured, writable, and current.
- Direct edits to `/config/sidebar-organizer.yaml` are detected and offered for reload.
- Raw YAML comments/formatting are preserved when editing raw YAML in HA config mode.
- Save warns before overwriting a newer on-disk config.
- Backend path traversal remains impossible.
- Invalid YAML never crashes Home Assistant or the frontend.
- Old Dashboard resource duplication is detected and clearly explained.
- CI runs frontend tests, backend tests, build, Python compile, and stale bundle checks.
- HACS validation passes on release.

## Self-Review

- **Spec coverage:** The plan covers config-flow install, diagnostics, live reload detection, raw YAML preservation, validation alignment, CI/release hardening, and README/troubleshooting polish.
- **Placeholder scan:** No `TBD` or open-ended implementation steps remain; every task includes files, commands, and expected outcomes.
- **Type consistency:** `ConfigProviderInfo`, `HomeAssistantConfigProvider`, `normalize_options`, `file_metadata`, and config source values are used consistently with the current codebase naming.
