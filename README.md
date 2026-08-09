<a name="readme-top"></a>

[![hacs][hacs-default]][hacs-default-link] [![hacs][hacs-validate]][hacs-url] ![Github last commit][git-last-commit-badge] ![git-download-all][git-download-all-badge] ![git-download-latest][git-download-latest-badge] [![forum][forum-badge]][forum-url]

# 🗄️ Sidebar Organizer

An independently maintained Home Assistant integration for organizing, styling, and synchronizing the sidebar.

> [!NOTE]
> This repository is a fork of [ngocjohn/sidebar-organizer](https://github.com/ngocjohn/sidebar-organizer). It preserves the original project's visual sidebar organizer and editor while developing its own integration backend, per-user profiles, cross-device synchronization, safer configuration storage, and release path. Installations, releases, and issue tracking for this fork live in the [`aero-oli/sidebar-organizer`](https://github.com/aero-oli/sidebar-organizer) repository.

> [!IMPORTANT]
> Sidebar Organizer **v4.x requires Home Assistant 2026.6.0 or newer** and should be installed as an **Integration**, not as a Dashboard resource. For older Home Assistant releases, use Sidebar Organizer v3.4.1 or earlier.

<table>
  <thead>
    <tr>
      <th width="25%">Sidebar Default</th>
      <th width="25%">Sidebar organized</th>
      <th width="25%">Collapsed groups</th>
      <th width="25%">Expanded </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">
      </td>
    </tr>
    <tr>
      <td>
       <img src="assets/sidebar-default.png" />
      </td>
      <td>
       <img src="assets/sidebar-organizer-anim.gif" />
      </td>
      <td>
       <img src="assets/sidebar-light-theme.png" />
      </td>
			<td>
       <img src="assets/sidebar-items-expanded.png" />
      </td>
    </tr>
  </tbody>
</table>

## What this project is now

Sidebar Organizer started as a fork of the original frontend plugin. Version 4 has grown into a full Home Assistant custom integration with an authenticated backend and a frontend editor. It still makes the sidebar easier to organize, but its configuration can now live safely in Home Assistant's private config directory and follow users across browsers and devices.

The original project remains the foundation of the sidebar UI and is credited below. This fork is maintained and released independently, so feature requests and bug reports for the behavior documented here should be opened on [this fork's issue tracker](https://github.com/aero-oli/sidebar-organizer/issues).

## Current features

- **Native Home Assistant integration**: Installs through HACS as an integration, uses config and options flows, and loads its frontend automatically.
- **Private YAML configuration**: Stores the shared configuration below `/config` instead of exposing it through `/config/www`.
- **Per-user profiles**: Gives individual Home Assistant users an optional personal sidebar with the shared configuration as a fallback.
- **Cross-device synchronization**: Broadcasts shared config, profile, and collapsed-group changes to connected browsers; manual YAML edits are detected without browser polling.
- **Safer editing**: Validates YAML and schema, rejects stale concurrent writes, writes atomically, keeps previous-version backups, and preserves a user-scoped last-good cache.
- **Visual and raw editors**: Supports drag-and-drop organization, YAML editing, validation, source diagnostics, and administrator profile management in one dialog.
- **Flexible organization**: Groups, reorders, hides, pins, collapses, and moves items into bottom sections or bottom groups.
- **Appearance controls**: Customizes sidebar colors, width, typography, dividers, header behavior, and light/dark presentation.
- **New and conditional items**: Adds sidebar entries and supports visibility configuration for more tailored navigation.

## How configuration works

With the integration installed, Sidebar Organizer resolves configuration in this order:

1. The signed-in user's personal profile, when one exists.
2. The shared YAML configuration managed by the integration.
3. A user-scoped last-good cache if the current server configuration cannot be loaded safely.

Browser storage and static `/local/sidebar-organizer.yaml` files remain available only as compatibility and migration paths for legacy frontend-only installations. See [Architecture](docs/architecture.md) for the design and trust boundaries.

## Installation

### Recommended: [HACS](https://hacs.xyz)

If you have not disabled [My Home Assistant], click the button below to add this repository to HACS as an integration. Otherwise, add `aero-oli/sidebar-organizer` manually as a custom repository with category `Integration`.

[![open-hacs-repo-badge]][hacs-repo-custom-url]

#### Install the integration

1. Add `aero-oli/sidebar-organizer` to HACS as category `Integration`.
1. Install Sidebar Organizer.
1. Restart Home Assistant.
1. Go to Settings -> Devices & services -> Add integration -> Sidebar Organizer.
1. Choose the private config path, normally `sidebar-organizer.yaml`.
1. Open the Sidebar Organizer dialog. If the backend integration is available, Sidebar Organizer uses the Home Assistant config file automatically.

Sidebar Organizer v4.0.4 and newer is packaged as a Home Assistant custom integration. The integration serves and loads the frontend module automatically, so you do not need a separate Dashboard resource or `frontend.extra_module_url` entry.

YAML setup is still supported for users who prefer `configuration.yaml`:

```yaml
sidebar_organizer:
  config_path: sidebar-organizer.yaml
  profiles_path: sidebar-organizer-profiles
  allow_write: true
  allow_user_write: false
  allow_preference_write: true
  create_if_missing: true
```

> [!IMPORTANT]
> If you previously installed Sidebar Organizer as a HACS Dashboard/frontend plugin, remove the old Dashboard resource and remove any `frontend.extra_module_url` entry for `/hacsfiles/sidebar-organizer/sidebar-organizer.js` or `/local/sidebar-organizer.js`. Loading both the old plugin resource and the new integration module can register the same custom elements twice.

`config_path` and `profiles_path` are resolved under the Home Assistant config directory. The profiles path must be a dedicated Sidebar Organizer directory; the config root, overlapping paths, non-directories, and non-empty unowned custom directories are rejected. Sidebar Organizer places a `.sidebar-organizer-profiles` ownership marker in the directory before it will enumerate or modify profile YAML. You can use subdirectories such as `configs/sidebar-organizer.yaml` and `configs/sidebar-organizer-profiles`.

When YAML setup is used, later changes to this block are reconciled into the existing config entry on restart. Changing a storage path does not move old files automatically; move them deliberately or restore the previous option before saving.

### Manual integration install

<details>
  <summary>Click to expand manual integration installation instructions</summary>

1. Download the release source archive.
2. Copy `custom_components/sidebar_organizer` to `/config/custom_components/sidebar_organizer`.
3. Restart Home Assistant.
4. Go to Settings -> Devices & services -> Add integration -> Sidebar Organizer.

</details>

### Migrating from a legacy frontend install

<details>
  <summary>Click to expand legacy frontend-only installation and migration notes</summary>

The v4 integration is the supported installation for current Home Assistant releases. After installing it, remove the old Dashboard resource or `frontend.extra_module_url` entry so Home Assistant does not load Sidebar Organizer twice. Your existing browser or `/local` configuration can then be migrated through the Sidebar Organizer dialog.

If you deliberately need the legacy frontend-only version for an older Home Assistant release:

1. Download `sidebar-organizer.js` from the [v3.4.1 release].
2. Place the downloaded file on your Home Assistant machine in the `config/www` folder (when there is no `www` folder in the folder where your `configuration.yaml` file is, create it and place the file there).
3. Add the URL of the plugin as an `extra_module_url` in `configuration.yaml`.
4. Restart Home Assistant.

```yaml
frontend:
  extra_module_url:
    - /local/sidebar-organizer.js?v1.0.0
```

> [!TIP]
> It is recommended that you use a cache busting technique to assist with caching of old files on update (e.g. `.../sidebar-organizer.js?v2.0.0`).

The legacy frontend-only install supports browser storage and `/local/sidebar-organizer.yaml`, but it cannot read or write private Home Assistant config-folder YAML because it does not install the backend WebSocket API.

</details>

## Usage

### Configuration dialog

- Open the **Sidebar Organizer** configuration dialog by pressing and holding the Profile menu (the last item in the sidebar), or from the profile page.
  ![Configuration Section](assets/sidebar-config-section.png)
- The settings overview links to Settings, Appearance, Panels, and New Items. The dialog also provides a raw YAML editor for the current shared or personal configuration.

  ![Configuration Dialog](assets/config-dialog.gif)

#### Appearance

- **Header Title**: Change the header title.
- **Hide Header Toggle**: A button that allows you to quickly toggle between expanding or collapsing the sidebar groups.

You can set different styles for **Light** and **Dark** modes by specifying the following settings:

- **Line Color**: The color of the divider line between sidebar items.
- **Background Color**: The background color of the divider area in the sidebar.
- **Border Top Color**: The color for the top border of the sidebar divider.
- **Scrollbar Thumb Color**: Customize the color of the scrollbar's thumb for the sidebar.
- **Sidebar Background Color**: The overall background color for the sidebar.
- **Border Radius**: Customize the corner rounding for the divider. You can specify a numeric value for how rounded the corners of each panel should appear.

  All stylization is visible in the preview.

  ![Appearance](assets/sidebar-color-config.gif)

  <details>
    <summary>Yaml example</summary>

  ```yaml
  header_title: 'My sidebar'
  hide_header_toggle: false
  color_config:
    border_radius: 8
    light:
      divider_color: '#dddddd'
      background_color: '#ffffff'
      border_top_color: '#e0e0e0'
      scrollbar_thumb_color: '#cccccc'
      custom_sidebar_background_color: '#f5f5f5'
    dark:
      divider_color: '#444444'
      background_color: '#333333'
      border_top_color: '#555555'
      scrollbar_thumb_color: '#666666'
      custom_sidebar_background_color: '#222222'
  ```

  </details>

#### Panels

In this section, you can organize the layout of the sidebar panels by customizing how items are displayed. The following options are available:

- **Bottom Items**: Select the items that will be fixed at the bottom of the sidebar, allowing you to easily access frequently used panels.

- **Custom Groups**: Organize your sidebar items into custom groups for better clarity and navigation. You can create, rename, and reorder these groups based on your preferences.

- **Bottom Groups**: Same idea as Custom Groups, but the groups appear in the bottom section of the sidebar (above the profile entry). Useful for separating utility/admin groups from your main navigation while keeping them grouped and collapsible.

- **Default Collapsed**: Choose which groups will be collapsed by default when the sidebar loads, helping to reduce clutter and create a cleaner interface. Both Custom Groups and Bottom Groups can be referenced here.

  <table>
    <thead>
      <tr>
        <th width="50%">Bottom Panel</th>
        <th width="50%">Group Sorting</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="2">
        </td>
      </tr>
      <tr>
        <td>
        <img src="assets/config-bottom-panel.png" />
        </td>
        <td>
        <img src="assets/config-groups-sort.gif" />
        </td>
      </tr>
      <tr>
        <td colspan="2">
        Group items setting
        </td>
      </tr>
        <tr>
        <td colspan="2">
        <img src="assets/config-group-items.gif" />
        </td>
      </tr>
    </tbody>
  </table>

  <details>
    <summary>Yaml example</summary>

  ```yaml
  bottom_items:
    - config/lovelace/resources
  custom_groups:
    dashboards:
      - extra-menu
      - ha-dash
      - dashboard-moon
      - test-cards
      - uni-vehicle
      - dashboard-vehicle
    lovelace_yaml:
      - lovelace-test-yaml
      - ytube-card
    components:
      - browser-mod
      - config/integrations
    media:
      - media-browser
    system:
      - calendar
      - energy
      - history
      - logbook
      - todo
  bottom_groups:
    admin:
      - config
      - developer-tools
    tools:
      - logbook
      - history
  default_collapsed:
    - system
    - dashboards
    - components
    - admin
  ```

  </details>

#### Raw YAML

- This section lets you edit the raw YAML configuration used by Sidebar Organizer. You can also download the current configuration as a YAML file.

- Sidebar Organizer supports a shared configuration and personal Home Assistant profiles:

  - Home Assistant config folder: preferred when the integration is installed. The integration reads and writes a private config-folder YAML file through authenticated Home Assistant WebSocket commands.
  - Home Assistant user profile: an optional private YAML profile that follows one Home Assistant user across browsers and devices.
  - Browser storage: fallback for legacy frontend-only installs or when the backend is unavailable.
  - Static YAML file from `/local`: legacy fallback for existing `/config/www/sidebar-organizer.yaml` setups.

- When a personal profile exists it takes precedence automatically. Otherwise the shared Home Assistant config is used. Browser storage remains only a legacy fallback.

- The static `/local` file is useful for sharing one file URL, but `/config/www` is a public/static frontend resource path. It is not the same as private config-folder storage.

- The Home Assistant config-folder mode uses the `sidebar_organizer` backend integration. The frontend does not send arbitrary file paths by default; the backend owns the configured path.

- See [Sidebar Organizer YAML Schema](docs/sidebar-organizer-config-schema.md) for the validation contract shared by the frontend and backend.

  ![Config RAW Code](assets/config-raw-code.png)

### Storage, profiles, and synchronization

The shared YAML file is the fallback source of truth. Personal profiles are stored under `/config/sidebar-organizer-profiles/<user-id>.yaml` and take precedence for that user on every browser and device. Browser storage may keep a user-scoped last-good cache, but it is not treated as the source of truth.

Administrators can select any active Home Assistant user in the Sidebar Organizer dialog, create a profile from the shared default, copy another profile, edit it, or reset it. Deleted-user profiles are retained as orphaned files until an administrator removes them. Set `allow_user_write: true` if non-admin users should be allowed to edit their own profile; it defaults to `false`.

`allow_write` controls shared and personal YAML changes. `allow_preference_write` separately controls per-user preference synchronization and defaults to `true`, so installations can keep configuration read-only while still syncing collapsed groups. Each user can also choose whether collapsed groups follow them across devices or remain local to each browser.

Profile and shared-config changes are broadcast to connected devices. A single backend watcher also detects manual YAML edits, so browsers do not poll the filesystem. Clean editors reload automatically, while an editor with unsaved changes asks before replacing them. Saved changes are reapplied through the serialized runtime pipeline without requiring a full browser reload.

The settings dialog reports whether a previous YAML version is available and can restore it after confirmation. Restoring swaps the current and previous versions, so the operation remains reversible.

<details>
  <summary>WebSocket API reference</summary>

When the Sidebar Organizer backend integration is available, the frontend uses these authenticated Home Assistant WebSocket commands:

- `sidebar_organizer/config/info`
- `sidebar_organizer/config/read`
- `sidebar_organizer/config/validate`
- `sidebar_organizer/config/write`
- `sidebar_organizer/config/restore`
- `sidebar_organizer/config/subscribe`
- `sidebar_organizer/profile/list`
- `sidebar_organizer/profile/info`
- `sidebar_organizer/profile/read`
- `sidebar_organizer/profile/write`
- `sidebar_organizer/profile/restore`
- `sidebar_organizer/profile/delete`
- `sidebar_organizer/profile/copy`
- `sidebar_organizer/profile/subscribe`
- `sidebar_organizer/preferences/read`
- `sidebar_organizer/preferences/write`

</details>

Example `/config/sidebar-organizer.yaml`:

```yaml
header_title: Home Assistant
hide_header_toggle: false
bottom_items: []
custom_groups: {}
default_collapsed: []
color_config:
  border_radius: 8
  light:
    divider_color: '#dddddd'
    background_color: '#ffffff'
    border_top_color: '#e0e0e0'
    scrollbar_thumb_color: '#cccccc'
    custom_sidebar_background_color: ''
  dark:
    divider_color: '#444444'
    background_color: '#333333'
    border_top_color: '#555555'
    scrollbar_thumb_color: '#666666'
    custom_sidebar_background_color: ''
```

Security notes:

- Do not put secrets in `sidebar-organizer.yaml`.
- Do not place the private config-folder file under `/config/www`.
- `/config/www` is served as `/local`; the backend mode deliberately does not register the YAML file as a static path.
- Shared and profile YAML operations require `allow_write: true`; shared-config writes are administrator-only.
- Preference synchronization requires `allow_preference_write: true` and is independently configurable.
- Non-admin users can write only their own profile, and only when `allow_user_write: true`.
- A non-admin user can access only their own profile; target users are resolved and authorized server-side.
- `config_path` and `profiles_path` are validated server-side, must resolve inside the Home Assistant config directory, may not overlap, and the profile directory must be integration-owned.
- Shared and profile writes use atomic replacement, previous-version backups, size limits, and content revisions to reject stale concurrent edits.

### Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Backend unavailable | Integration not configured or Home Assistant not restarted | Add Sidebar Organizer in Settings -> Devices & services and restart |
| Duplicate custom element log | Old Dashboard resource still loaded | Remove `/hacsfiles/sidebar-organizer/sidebar-organizer.js` and old `/local/sidebar-organizer.js` resources |
| YAML edits do not show | Backend watcher or subscription has not delivered yet | Wait a few seconds or use Reload from HA config in the dialog |
| Cannot save | `allow_write` is false or the user is not admin | Enable write in integration options and sign in as an admin user |
| User cannot edit their profile | Self-service profile editing is disabled | Enable `allow_user_write` in the integration options, or ask an administrator to manage the profile |
| Different account shows stale sidebar | Old browser cache predates user-scoped storage | Reload once while signed in; Sidebar Organizer moves legacy cache into the current user namespace |
| File missing | `create_if_missing` is false | Create the file manually or enable create option |
| Stale frontend after update | Browser or Home Assistant frontend cache | Hard refresh, clear HA frontend cache, and remove old Dashboard resources |
| Invalid YAML | YAML parses incorrectly or uses unsupported field shapes | Use Validate YAML and compare with the schema document |

<details>
  <summary>Manual test checklist for contributors</summary>

1. Build frontend: `pnpm install` then `pnpm run build`.
2. Install the release through HACS as an `Integration`, or copy `custom_components/sidebar_organizer` to `/config/custom_components/sidebar_organizer`.
3. Remove any old Dashboard resource or `frontend.extra_module_url` entry for Sidebar Organizer.
4. Restart Home Assistant.
5. Add Sidebar Organizer in Settings -> Devices & services.
6. Open Sidebar Organizer config.
7. Confirm the status panel shows the Home Assistant config file path.
8. Confirm `/config/sidebar-organizer.yaml` is created.
9. Change sidebar grouping/order.
10. Press the dialog footer `Save` button.
11. Open a different browser/device and confirm the same sidebar config loads.
12. Change the YAML file manually and reload from the UI or wait for the external-change prompt.
13. Confirm invalid YAML shows an error and does not break the sidebar.

</details>

---

Sidebar Organizer was originally created by [Viet Ngoc (`ngocjohn`)](https://github.com/ngocjohn). This independently maintained fork is developed by [Oliver Verity (`aero-oli`)](https://github.com/aero-oli) and continues under the [MIT License](LICENSE).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Badges-->

[hacs-default]: https://img.shields.io/badge/HACS-Default-blue?style=flat&logo=homeassistantcommunitystore&logoSize=auto
[hacs-default-link]: https://my.home-assistant.io/redirect/hacs_repository/?owner=aero-oli&repository=sidebar-organizer&category=integration
[forum-url]: https://community.home-assistant.io/t/sidebar-organizer
[forum-badge]: https://img.shields.io/badge/forum-community?style=flat&logo=homeassistant&label=community&color=blue
[hacs-validate]: https://github.com/aero-oli/sidebar-organizer/actions/workflows/validate.yml/badge.svg
[hacs-url]: https://github.com/aero-oli/sidebar-organizer/actions/workflows/validate.yml
[git-last-commit-badge]: https://img.shields.io/github/last-commit/aero-oli/sidebar-organizer
[git-download-all-badge]: https://img.shields.io/github/downloads/aero-oli/sidebar-organizer/total?style=flat&logo=homeassistantcommunitystore&logoSize=auto&label=Downloads&color=%2318BCF2
[git-download-latest-badge]: https://img.shields.io/github/downloads/aero-oli/sidebar-organizer/latest/total?style=flat&logo=homeassistantcommunitystore&logoSize=auto

<!--Urls-->

[My Home Assistant]: https://www.home-assistant.io/integrations/my/
[hacs-docs]: https://hacs.xyz/docs/faq/custom_repositories/
[Open-dashboard-resources]: https://my.home-assistant.io/badges/lovelace_resources.svg
[dashboard-resources-link]: https://my.home-assistant.io/redirect/lovelace_resources/
[open-hacs-repo-badge]: https://my.home-assistant.io/badges/hacs_repository.svg
[hacs-repo-custom-url]: https://my.home-assistant.io/redirect/hacs_repository/?owner=aero-oli&repository=sidebar-organizer&category=integration
[v3.4.1 release]: https://github.com/ngocjohn/sidebar-organizer/releases/tag/v3.4.1
