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

The same schema is used by the shared file and every personal profile. With the default paths these are:

- `/config/sidebar-organizer.yaml`
- `/config/sidebar-organizer-profiles/<home-assistant-user-id>.yaml`

Profiles are complete configurations rather than partial overlays. A missing personal profile inherits the shared file in full. Unknown panel IDs are preserved because an administrator may author a profile containing panels unavailable to their own account; unavailable panels are ignored for the target user at runtime.
