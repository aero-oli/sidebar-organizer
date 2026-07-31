# Sidebar Organizer YAML schema

The shared file and every personal profile use the same schema. The root must be a YAML object. Unknown keys are retained for forward compatibility, while every known key is validated in both TypeScript and Python against shared golden fixtures.

## Appearance

| Field | Type | Notes |
| --- | --- | --- |
| `header_title` | string | Sidebar heading |
| `hide_header_toggle` | boolean | Hide the expand/collapse control |
| `animation_off` | boolean | Disable group animation |
| `animation_delay` | non-negative number | Per-item delay in milliseconds |
| `accordion_mode` | boolean | Keep one group open |
| `text_transformation` | `none`, `capitalize`, `uppercase`, or `lowercase` | Group label transform |
| `move_settings_from_fixed` | boolean | Make Settings configurable |
| `force_transparent_background` | boolean | Force transparent background |
| `width` | positive number or non-empty CSS width | Numbers are pixels |
| `scroll_hide_header` | boolean | Experimental header behaviour |

## Panels and groups

`bottom_items`, `bottom_grid_items`, `default_collapsed`, and `hidden_items` are lists of panel IDs. `custom_groups` and `bottom_groups` map group names to lists of panel IDs. `uncategorized_items` is either a boolean or a list of panel IDs.

`pinned_groups` maps a group name to either `true` or an object with an optional string `icon`.

## Templates

`notification` maps panel IDs to template strings. `visibility_templates` is an object whose optional `groups` and `items` values each map names to template strings.

## New items

`new_items` is a list of objects. Every entry requires a non-empty string `title`. String fields include `icon`, `url_path`, `notification`, `target`, `entity`, `group`, and `icon_template`; `target` is `_self` or `_blank`. `tap_action`, `hold_action`, and `double_tap_action` must be objects. Boolean panel flags must be booleans.

## Colours

`color_config` may contain a non-negative numeric `border_radius`, `light` and `dark` colour objects, and `custom_theme`. Colour values and custom-style values are strings. The custom theme `mode` is `light` or `dark`.

## Storage contract

The default files are:

- `/config/sidebar-organizer.yaml`
- `/config/sidebar-organizer-profiles/<home-assistant-user-id>.yaml`
- `/config/sidebar-organizer-profiles/<home-assistant-user-id>.preferences.json`

Profiles are complete configurations. A missing profile inherits the shared file. Preferences contain only device-independent UI state: collapsed group names and the group names known when that choice was saved. Tracking known groups lets newly added groups inherit `default_collapsed` without reviving removed groups. Unknown panel IDs remain in YAML and are ignored for a user who cannot access them.

Writes are atomic, limited to 512 KiB, and use content revisions to reject stale editors. Replacing YAML retains the previous version as an adjacent `.bak` file. Invalid YAML never replaces the active file.
