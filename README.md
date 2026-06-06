<a name="readme-top"></a>

[![hacs][hacs-default]][hacs-default-link] [![hacs][hacs-validate]][hacs-url] ![Github last commit][git-last-commit-badge] ![git-download-all][git-download-all-badge] ![git-download-latest][git-download-latest-badge] [![forum][forum-badge]][forum-url]

# 🗄️ Sidebar Organizer

> ⚠️ **Important Notice** ⚠️
>
> Sidebar Organizer **v4.0.0 and above** is compatible with **Home Assistant 2026.6.0 and newer**.
>
> For older Home Assistant versions, use **Sidebar Organizer up to v3.4.1**
>
> 🔒 If you rely on Sidebar Organizer, make sure you install the version that matches your Home Assistant release.

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
       <img src="https://raw.githubusercontent.com/ngocjohn/sidebar-organizer/refs/heads/main/assets/sidebar-default.png" />
      </td>
      <td>
       <img src="https://raw.githubusercontent.com/ngocjohn/sidebar-organizer/refs/heads/main/assets/sidebar-organizer-anim.gif" />
      </td>
      <td>
       <img src="https://raw.githubusercontent.com/ngocjohn/sidebar-organizer/refs/heads/main/assets/sidebar-light-theme.png" />
      </td>
			<td>
       <img src="https://raw.githubusercontent.com/ngocjohn/sidebar-organizer/refs/heads/main/assets/sidebar-items-expanded.png" />
      </td>
    </tr>
  </tbody>
</table>

## Introduction

**Sidebar Organizer** is a custom Home Assistant integration designed to give you full control over the layout and organization of the sidebar. It allows you to customize the appearance, group items, and reorder or collapse items for a cleaner, more intuitive navigation experience.

With Sidebar Organizer, managing the sidebar in Home Assistant becomes easy and flexible. Whether you want to declutter your sidebar or create a more streamlined view, Sidebar Organizer is here to help.

## Features

- **Customize Sidebar Appearance**: Personalize the look of your sidebar with custom styles, colors, and layouts.
- **Group Menu Items**: Organize sidebar items into specific groups for better clarity and separation of content.
- **Reorder Items**: Drag and drop to reorder items within groups or across the sidebar.
- **Expand/Collapse Groups**: Expand or collapse groups of items to save space and minimize clutter.
- **Manage Bottom Items**: Move specific items to the bottom of the sidebar for quick access.
- **Default Collapse Settings**: Choose which groups of items should be collapsed by default for a cleaner view.

# Installation

## [HACS](https://hacs.xyz) (Home Assistant Community Store)

If you have not disabled [My Home Assistant], click the button below to add this repository to HACS as an integration. Otherwise, add `aero-oli/sidebar-organizer` manually as a custom repository with category `Integration`.

[![open-hacs-repo-badge]][hacs-repo-custom-url]

### Install the integration

1. Go to HACS page on your Home Assistant instance
1. Search for `Sidebar Organizer`
1. Select Sidebar Organizer repo and install it as an `Integration`
1. Add the backend configuration to `configuration.yaml`
1. Restart Home Assistant
1. Open Sidebar Organizer and select `Home Assistant config folder` as the config source

Sidebar Organizer v4.0.4 and newer is packaged as a Home Assistant custom integration. The integration serves and loads the frontend module automatically, so you do not need a separate Dashboard resource or `frontend.extra_module_url` entry.

```yaml
sidebar_organizer:
  config_path: sidebar-organizer.yaml
  allow_write: true
  create_if_missing: true
```

> [!IMPORTANT]
> If you previously installed Sidebar Organizer as a HACS Dashboard/frontend plugin, remove the old Dashboard resource and remove any `frontend.extra_module_url` entry for `/hacsfiles/sidebar-organizer/sidebar-organizer.js` or `/local/sidebar-organizer.js`. Loading both the old plugin resource and the new integration module can register the same custom elements twice.

`config_path` is resolved under the Home Assistant config directory. You can also use a subdirectory such as `configs/sidebar-organizer.yaml`.

## Manual integration install

<details>
  <summary>Click to expand manual integration installation instructions</summary>

1. Download the release source archive.
2. Copy `custom_components/sidebar_organizer` to `/config/custom_components/sidebar_organizer`.
3. Add the `sidebar_organizer:` YAML block shown above to `configuration.yaml`.
4. Restart Home Assistant.

</details>

## Legacy manual frontend install

<details>
  <summary>Click to expand legacy frontend-only installation instructions</summary>

1. Download the [sidebar-organizer.js].
2. Place the downloaded file on your Home Assistant machine in the `config/www` folder (when there is no `www` folder in the folder where your `configuration.yaml` file is, create it and place the file there).
3. Add the url of the plugin as an extra_module_url in your configuration.yaml:
4. Restart Home Assistant

```yaml
frontend:
  extra_module_url:
    - /local/sidebar-organizer.js?v1.0.0
```

> [!TIP]
> It is recommended that you use a cache busting technique to assist with caching of old files on update (e.g. `.../sidebar-organizer.js?v2.0.0`).

The legacy frontend-only install supports browser storage and `/local/sidebar-organizer.yaml`, but it cannot read or write private Home Assistant config-folder YAML because it does not install the backend WebSocket API.

</details>

# Usage

## Configuration dialog

- Access the **Sidebar Organizer** Configuration menu by press and hold the Profile menu (the last item in the sidebar) or via the profile page.
  ![Configuration Section](assets/sidebar-config-section.png)
- The settings menu is divided into three categories: Appearance, Panels, and Raw Code. Below is a breakdown of what you can customize in each section.

  ![Configuration Dialog](assets/config-dialog.gif)

### Appearance

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

### Panels

In this section, you can organize the layout of the sidebar panels by customizing how items are displayed. The following options are available:

- **Bottom Items**: Select the items that will be fixed at the bottom of the sidebar, allowing you to easily access frequently used panels.

- **Custom Groups**: Organize your sidebar items into custom groups for better clarity and navigation. You can create, rename, and reorder these groups based on your preferences.

- **Default Collapsed**: Choose which groups will be collapsed by default when the sidebar loads, helping to reduce clutter and create a cleaner interface.

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
        <img src="https://raw.githubusercontent.com/ngocjohn/sidebar-organizer/refs/heads/main/assets/config-bottom-panel.png" />
        </td>
        <td>
        <img src="https://raw.githubusercontent.com/ngocjohn/sidebar-organizer/refs/heads/main/assets/config-groups-sort.gif" />
        </td>
      </tr>
      <tr>
        <td colspan="2">
        Group items setting
        </td>
      </tr>
        <tr>
        <td colspan="2">
        <img src="https://raw.githubusercontent.com/ngocjohn/sidebar-organizer/refs/heads/main/assets/config-group-items.gif" />
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
  default_collapsed:
    - system
    - dashboards
    - components
  ```

  </details>

### Code

- This section lets you edit the raw YAML configuration used by Sidebar Organizer. You can also download the current configuration as a YAML file.

- Sidebar Organizer supports three config sources:

  - `Browser storage`: the existing local browser storage behavior.
  - `Static YAML file from /local`: the existing `/config/www/sidebar-organizer.yaml` file, served as `/local/sidebar-organizer.yaml`.
  - `Home Assistant config folder`: the integration reads and writes a private config-folder YAML file through authenticated Home Assistant WebSocket commands.

- The static `/local` file is useful for sharing one file URL, but `/config/www` is a public/static frontend resource path. It is not the same as private config-folder storage.

- The Home Assistant config-folder mode uses the `sidebar_organizer` backend integration. The frontend does not send arbitrary file paths by default; the backend owns the configured path.

  ![Config RAW Code](assets/config-raw-code.png)

## Home Assistant config-folder mode

When `home_assistant_config` is selected in the config dialog, Sidebar Organizer calls the backend WebSocket API:

- `sidebar_organizer/config/info`
- `sidebar_organizer/config/read`
- `sidebar_organizer/config/validate`
- `sidebar_organizer/config/write`

The YAML file becomes the source of truth for all browsers, devices, and users because it is read from Home Assistant itself. Browser storage may keep a last-good fallback copy, but it is not treated as the source of truth in this mode.

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
- Write operations require `allow_write: true` and an admin Home Assistant user.
- `config_path` is validated server-side and must resolve inside the Home Assistant config directory.

Troubleshooting:

- Backend unavailable: make sure Sidebar Organizer is installed in HACS as an `Integration`, not as a `Dashboard` resource. For manual installs, copy `custom_components/sidebar_organizer` to `/config/custom_components/sidebar_organizer`, add `sidebar_organizer:` to `configuration.yaml`, then restart Home Assistant.
- Invalid YAML: use `Validate YAML` in the config dialog or check the Home Assistant log. Invalid YAML is reported and should not crash the sidebar.
- File missing: set `create_if_missing: true` or create the file manually.
- Write disabled: set `allow_write: true` and restart Home Assistant.
- Non-admin user cannot write: sign in with an admin user for save operations.
- Browser still showing stale sidebar: reload from HA config, then hard refresh the browser. If you upgraded from the old frontend plugin install, remove the old Dashboard resource and `frontend.extra_module_url` entry so the frontend is not loaded twice.

Manual test checklist:

1. Build frontend: `pnpm install` then `pnpm run build`.
2. Install the release through HACS as an `Integration`, or copy `custom_components/sidebar_organizer` to `/config/custom_components/sidebar_organizer`.
3. Add `sidebar_organizer:` config to `configuration.yaml`.
4. Remove any old Dashboard resource or `frontend.extra_module_url` entry for Sidebar Organizer.
5. Restart Home Assistant.
6. Open Sidebar Organizer config.
7. Select `Home Assistant config folder`.
8. Confirm `/config/sidebar-organizer.yaml` is created.
9. Change sidebar grouping/order.
10. Save to HA config.
11. Open a different browser/device and confirm the same sidebar config loads.
12. Change the YAML file manually and reload from the UI.
13. Confirm invalid YAML shows an error and does not break the sidebar.

---

&copy; 2025 Viet Ngoc

[https://github.com/ngocjohn/](https://github.com/ngocjohn/)

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
[sidebar-organizer.js]: https://github.com/aero-oli/sidebar-organizer/releases/latest
