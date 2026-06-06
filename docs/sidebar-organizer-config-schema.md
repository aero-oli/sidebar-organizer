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
