"""Pure helpers for the Sidebar Organizer backend integration."""

from __future__ import annotations

import hashlib
import json
import math
import os
import re
import tempfile
from pathlib import Path
from typing import Any

try:
    from .const import (
        CONF_ALLOW_WRITE,
        CONF_ALLOW_USER_WRITE,
        CONF_ALLOW_PREFERENCE_WRITE,
        CONF_CONFIG_PATH,
        CONF_CREATE_IF_MISSING,
        CONF_PROFILES_PATH,
        DEFAULT_ALLOW_WRITE,
        DEFAULT_ALLOW_USER_WRITE,
        DEFAULT_ALLOW_PREFERENCE_WRITE,
        DEFAULT_CONFIG_PATH,
        DEFAULT_CREATE_IF_MISSING,
        DEFAULT_PROFILES_PATH,
        FRONTEND_JS,
        FRONTEND_URL_BASE,
        PROFILE_DIR_MARKER,
    )
except ImportError:  # pragma: no cover - used by lightweight direct module tests.
    CONF_ALLOW_WRITE = "allow_write"
    CONF_ALLOW_USER_WRITE = "allow_user_write"
    CONF_ALLOW_PREFERENCE_WRITE = "allow_preference_write"
    CONF_CONFIG_PATH = "config_path"
    CONF_CREATE_IF_MISSING = "create_if_missing"
    CONF_PROFILES_PATH = "profiles_path"
    DEFAULT_ALLOW_WRITE = True
    DEFAULT_ALLOW_USER_WRITE = False
    DEFAULT_ALLOW_PREFERENCE_WRITE = True
    DEFAULT_CONFIG_PATH = "sidebar-organizer.yaml"
    DEFAULT_CREATE_IF_MISSING = True
    DEFAULT_PROFILES_PATH = "sidebar-organizer-profiles"
    PROFILE_DIR_MARKER = ".sidebar-organizer-profiles"
    FRONTEND_JS = "sidebar-organizer.js"
    FRONTEND_URL_BASE = "/sidebar_organizer/frontend"

try:
    import yaml
except ModuleNotFoundError:  # pragma: no cover - Home Assistant provides PyYAML.
    yaml = None


DEFAULT_CONFIG_YAML = """header_title: Home Assistant
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
"""


def normalize_options(raw: dict[str, Any] | None) -> dict[str, Any]:
    """Return Sidebar Organizer options with defaults applied."""
    raw = raw or {}
    return {
        CONF_CONFIG_PATH: raw.get(CONF_CONFIG_PATH, DEFAULT_CONFIG_PATH),
        CONF_PROFILES_PATH: raw.get(CONF_PROFILES_PATH, DEFAULT_PROFILES_PATH),
        CONF_ALLOW_WRITE: raw.get(CONF_ALLOW_WRITE, DEFAULT_ALLOW_WRITE),
        CONF_ALLOW_USER_WRITE: raw.get(CONF_ALLOW_USER_WRITE, DEFAULT_ALLOW_USER_WRITE),
        CONF_ALLOW_PREFERENCE_WRITE: raw.get(
            CONF_ALLOW_PREFERENCE_WRITE, DEFAULT_ALLOW_PREFERENCE_WRITE
        ),
        CONF_CREATE_IF_MISSING: raw.get(
            CONF_CREATE_IF_MISSING, DEFAULT_CREATE_IF_MISSING
        ),
    }


def resolve_config_path(config_dir: str | Path, config_path: str) -> Path:
    """Resolve a Sidebar Organizer config path and require it to stay under config_dir."""
    if not config_path or not isinstance(config_path, str):
        raise ValueError("config_path must be a non-empty string")

    base_path = Path(config_dir).resolve()
    candidate = Path(config_path)
    resolved = (
        candidate.resolve()
        if candidate.is_absolute()
        else (base_path / candidate).resolve()
    )

    if resolved != base_path and base_path not in resolved.parents:
        raise ValueError(
            "config_path must resolve inside the Home Assistant config directory"
        )

    return resolved


def resolve_profiles_path(config_dir: str | Path, profiles_path: str) -> Path:
    """Resolve a profile directory and require it to stay under config_dir."""
    try:
        return resolve_config_path(config_dir, profiles_path)
    except ValueError as err:
        raise ValueError(str(err).replace("config_path", "profiles_path")) from err


def validate_storage_paths(
    config_dir: str | Path, config_path: str, profiles_path: str
) -> tuple[Path, Path]:
    """Resolve storage paths and reject dangerous or ambiguous layouts."""
    base_path = Path(config_dir).resolve()
    resolved_config = resolve_config_path(base_path, config_path)
    resolved_profiles = resolve_profiles_path(base_path, profiles_path)

    if resolved_config == base_path:
        raise ValueError("config_path must point to a file below the config directory")
    if resolved_profiles == base_path:
        raise ValueError("profiles_path must be a dedicated subdirectory")
    if resolved_config == resolved_profiles:
        raise ValueError("config_path and profiles_path must be different")
    if resolved_profiles in resolved_config.parents:
        raise ValueError("config_path must not be stored inside profiles_path")
    if resolved_config in resolved_profiles.parents:
        raise ValueError("profiles_path must not be stored below config_path")

    return resolved_config, resolved_profiles


def prepare_storage_paths(config_path: Path, profiles_path: Path) -> None:
    """Validate on-disk storage types and claim the dedicated profile directory."""
    if config_path.exists() and not config_path.is_file():
        raise ValueError("config_path must point to a file")
    if profiles_path.exists() and not profiles_path.is_dir():
        raise ValueError("profiles_path must point to a directory")

    profiles_path.mkdir(parents=True, exist_ok=True)
    marker = profiles_path / PROFILE_DIR_MARKER
    if marker.exists():
        if not marker.is_file():
            raise ValueError("profiles_path ownership marker is invalid")
        return

    existing_entries = [path for path in profiles_path.iterdir()]
    if existing_entries and profiles_path.name != DEFAULT_PROFILES_PATH:
        raise ValueError(
            "profiles_path is a non-empty unowned directory; choose an empty dedicated directory"
        )
    atomic_write_text(marker, "Sidebar Organizer profile storage.\n")


def profile_directory_metadata(profiles_dir: Path) -> dict[str, Any]:
    """Return profile ids from an integration-owned directory."""
    marker = profiles_dir / PROFILE_DIR_MARKER
    if not profiles_dir.is_dir() or not marker.is_file():
        return {"owned": False, "profile_ids": []}
    profile_ids = sorted(
        path.stem
        for path in profiles_dir.glob("*.yaml")
        if path.is_file()
        and not path.name.endswith(".yaml.bak")
        and re.fullmatch(r"[A-Za-z0-9_-]{1,128}", path.stem)
    )
    return {"owned": True, "profile_ids": profile_ids}


def profile_path(profiles_dir: Path, user_id: str) -> Path:
    """Return the YAML path for a stable Home Assistant user id."""
    if not re.fullmatch(r"[A-Za-z0-9_-]{1,128}", user_id):
        raise ValueError("user_id contains unsupported characters")
    return profiles_dir / f"{user_id}.yaml"


def validate_config_object(config: Any) -> list[str]:
    """Validate documented fields while preserving unknown keys for compatibility."""
    errors: list[str] = []

    if not isinstance(config, dict):
        return ["YAML must parse to an object/dictionary."]

    for key in ("header_title",):
        if key in config and not isinstance(config[key], str):
            errors.append(f"{key} must be a string.")

    for key in (
        "hide_header_toggle",
        "animation_off",
        "accordion_mode",
        "move_settings_from_fixed",
        "force_transparent_background",
        "scroll_hide_header",
    ):
        if key in config and not isinstance(config[key], bool):
            errors.append(f"{key} must be a boolean.")

    for key in (
        "bottom_items",
        "bottom_grid_items",
        "default_collapsed",
        "hidden_items",
    ):
        if key in config and not _is_list_of_strings(config[key]):
            errors.append(f"{key} must be a list of strings.")

    for key in ("custom_groups", "bottom_groups"):
        if key not in config:
            continue
        groups = config[key]
        if not isinstance(groups, dict):
            errors.append(
                f"{key} must be an object mapping group names to lists of strings."
            )
        else:
            for group_name, items in groups.items():
                if not isinstance(group_name, str):
                    errors.append(f"{key} group names must be strings.")
                    continue
                if not _is_list_of_strings(items):
                    errors.append(f"{key}.{group_name} must be a list of strings.")

    if "animation_delay" in config and not _is_non_negative_number(
        config["animation_delay"]
    ):
        errors.append("animation_delay must be a non-negative number.")

    if "width" in config and not _is_valid_width(config["width"]):
        errors.append(
            "width must be a positive number or a non-empty CSS width string."
        )

    if "text_transformation" in config and config["text_transformation"] not in (
        "none",
        "capitalize",
        "uppercase",
        "lowercase",
    ):
        errors.append(
            "text_transformation must be one of: none, capitalize, uppercase, lowercase."
        )

    if "color_config" in config:
        _validate_color_config(config["color_config"], errors)
    _validate_string_record(config, "notification", errors)
    if "new_items" in config:
        _validate_new_items(config["new_items"], errors)
    if "pinned_groups" in config:
        _validate_pinned_groups(config["pinned_groups"], errors)

    if (
        "uncategorized_items" in config
        and not isinstance(config["uncategorized_items"], bool)
        and not _is_list_of_strings(config["uncategorized_items"])
    ):
        errors.append("uncategorized_items must be a boolean or a list of strings.")

    if "visibility_templates" in config:
        visibility = config["visibility_templates"]
        if not isinstance(visibility, dict):
            errors.append("visibility_templates must be an object.")
        else:
            _validate_string_record(
                visibility, "groups", errors, "visibility_templates."
            )
            _validate_string_record(
                visibility, "items", errors, "visibility_templates."
            )

    return errors


def validate_yaml_config(yaml_text: str) -> dict[str, Any]:
    """Validate YAML text using the backend's minimal Sidebar Organizer schema."""
    try:
        parsed = _safe_load_yaml(yaml_text)
    except Exception as err:
        return {"valid": False, "errors": [f"YAML parse error: {err}"], "parsed": None}

    errors = validate_config_object(parsed)
    return {"valid": len(errors) == 0, "errors": errors, "parsed": parsed}


def atomic_write_text(target: Path, content: str) -> None:
    """Atomically write UTF-8 text to target."""
    target.parent.mkdir(parents=True, exist_ok=True)
    fd, temp_name = tempfile.mkstemp(
        prefix=f".{target.name}.", suffix=".tmp", dir=target.parent
    )
    temp_path = Path(temp_name)
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as temp_file:
            temp_file.write(content)
            temp_file.flush()
            os.fsync(temp_file.fileno())
        os.replace(temp_path, target)
    finally:
        if temp_path.exists():
            temp_path.unlink()


def atomic_write_with_backup(target: Path, content: str) -> None:
    """Atomically write text and retain the previous successful version."""
    if target.exists():
        atomic_write_text(
            target.with_suffix(f"{target.suffix}.bak"), target.read_text("utf-8")
        )
    atomic_write_text(target, content)


def preferences_path(profiles_dir: Path, user_id: str) -> Path:
    """Return the server-synced UI preferences path for a stable user id."""
    profile_path(profiles_dir, user_id)
    return profiles_dir / f"{user_id}.preferences.json"


def read_preferences(path: Path) -> dict[str, Any]:
    """Read and validate per-user preferences, tolerating a missing file."""
    if not path.exists():
        return {"collapsed_groups": [], "sync_collapsed_groups": True}
    parsed = json.loads(path.read_text("utf-8"))
    if not isinstance(parsed, dict) or not _is_list_of_strings(
        parsed.get("collapsed_groups", [])
    ):
        raise ValueError("preferences.collapsed_groups must be a list of strings")
    known_groups = parsed.get("known_groups")
    if known_groups is not None and not _is_list_of_strings(known_groups):
        raise ValueError("preferences.known_groups must be a list of strings")
    sync_collapsed_groups = parsed.get("sync_collapsed_groups", True)
    if not isinstance(sync_collapsed_groups, bool):
        raise ValueError("preferences.sync_collapsed_groups must be a boolean")
    return {
        "collapsed_groups": parsed.get("collapsed_groups", []),
        "sync_collapsed_groups": sync_collapsed_groups,
        **({"known_groups": known_groups} if known_groups is not None else {}),
    }


def write_preferences(path: Path, preferences: dict[str, Any]) -> None:
    """Validate and atomically persist per-user preferences."""
    collapsed = preferences.get("collapsed_groups")
    if not _is_list_of_strings(collapsed):
        raise ValueError("preferences.collapsed_groups must be a list of strings")
    known_groups = preferences.get("known_groups")
    if known_groups is not None and not _is_list_of_strings(known_groups):
        raise ValueError("preferences.known_groups must be a list of strings")
    sync_collapsed_groups = preferences.get("sync_collapsed_groups", True)
    if not isinstance(sync_collapsed_groups, bool):
        raise ValueError("preferences.sync_collapsed_groups must be a boolean")
    payload = {
        "collapsed_groups": collapsed,
        "sync_collapsed_groups": sync_collapsed_groups,
        **({"known_groups": known_groups} if known_groups is not None else {}),
    }
    atomic_write_text(path, json.dumps(payload, indent=2) + "\n")


def file_metadata(path: Path) -> dict[str, Any]:
    """Return basic metadata for a config file."""
    if not path.exists():
        return {"exists": False, "last_modified": None, "size": None, "revision": None}
    stat = path.stat()
    return {
        "exists": True,
        "last_modified": stat.st_mtime,
        "size": stat.st_size,
        "revision": file_revision(path),
    }


def file_metadata_with_backup(path: Path) -> dict[str, Any]:
    """Return active and adjacent backup metadata."""
    backup = path.with_suffix(f"{path.suffix}.bak")
    backup_exists = backup.is_file()
    return {
        **file_metadata(path),
        "backup_exists": backup_exists,
        "backup_revision": file_revision(backup) if backup_exists else None,
    }


def file_revision(path: Path) -> str:
    """Return a content digest suitable for revisions and cache keys."""
    return hashlib.sha256(path.read_bytes()).hexdigest()


def has_revision_conflict(expected: str | None, current: str | None) -> bool:
    """Return whether an optimistic write was based on a stale revision."""
    return expected != current


def merge_watch_revisions(
    previous: dict[str, str | None],
    changed: dict[str, str | None],
    required_paths: set[str] | None = None,
) -> dict[str, str | None]:
    """Update revisions for changed paths without baselining unrelated files."""
    merged = dict(previous)
    required_paths = required_paths or set()
    for path, revision in changed.items():
        if revision is None and path not in required_paths:
            merged.pop(path, None)
        else:
            merged[path] = revision
    return merged


def frontend_module_url(version: str) -> str:
    """Return the frontend module URL registered by the integration."""
    return f"{FRONTEND_URL_BASE}/{FRONTEND_JS}?v={version}"


def _is_list_of_strings(value: Any) -> bool:
    return isinstance(value, list) and all(isinstance(item, str) for item in value)


def _is_non_negative_number(value: Any) -> bool:
    return (
        isinstance(value, (int, float))
        and not isinstance(value, bool)
        and math.isfinite(value)
        and value >= 0
    )


def _is_valid_width(value: Any) -> bool:
    return (
        isinstance(value, (int, float))
        and not isinstance(value, bool)
        and math.isfinite(value)
        and value > 0
    ) or (isinstance(value, str) and bool(value.strip()))


def _validate_string_record(
    parent: dict[str, Any],
    key: str,
    errors: list[str],
    prefix: str = "",
) -> None:
    if key not in parent:
        return
    value = parent[key]
    if not isinstance(value, dict):
        errors.append(f"{prefix}{key} must be an object mapping names to strings.")
        return
    for name, item in value.items():
        if not isinstance(name, str) or not isinstance(item, str):
            errors.append(f"{prefix}{key}.{name} must be a string.")


def _validate_color_config(value: Any, errors: list[str]) -> None:
    if not isinstance(value, dict):
        errors.append("color_config must be an object.")
        return
    if "border_radius" in value and not _is_non_negative_number(value["border_radius"]):
        errors.append("color_config.border_radius must be a non-negative number.")

    color_fields = (
        "background_color",
        "border_top_color",
        "custom_sidebar_background_color",
        "divider_color",
        "divider_text_color",
        "scrollbar_thumb_color",
        "sidebar_icon_color",
    )
    for mode in ("light", "dark"):
        if mode not in value:
            continue
        colors = value[mode]
        if not isinstance(colors, dict):
            errors.append(f"color_config.{mode} must be an object.")
            continue
        for key in color_fields:
            if key in colors and not isinstance(colors[key], str):
                errors.append(f"color_config.{mode}.{key} must be a string.")
        _validate_string_record(
            colors, "custom_styles", errors, f"color_config.{mode}."
        )

    if "custom_theme" in value:
        theme = value["custom_theme"]
        if not isinstance(theme, dict):
            errors.append("color_config.custom_theme must be an object.")
        else:
            if "theme" in theme and not isinstance(theme["theme"], str):
                errors.append("color_config.custom_theme.theme must be a string.")
            if "mode" in theme and theme["mode"] not in ("light", "dark"):
                errors.append("color_config.custom_theme.mode must be light or dark.")


def _validate_new_items(value: Any, errors: list[str]) -> None:
    if not isinstance(value, list):
        errors.append("new_items must be a list of objects.")
        return
    string_fields = (
        "component_name",
        "icon",
        "title",
        "url_path",
        "config_panel_domain",
        "notification",
        "target",
        "entity",
        "group",
        "icon_template",
    )
    for index, item in enumerate(value):
        prefix = f"new_items[{index}]"
        if not isinstance(item, dict):
            errors.append(f"{prefix} must be an object.")
            continue
        if not isinstance(item.get("title"), str) or not item["title"].strip():
            errors.append(f"{prefix}.title must be a non-empty string.")
        for key in string_fields:
            if key in item and item[key] is not None and not isinstance(item[key], str):
                errors.append(f"{prefix}.{key} must be a string.")
        for key in ("default_visible", "require_admin", "show_in_sidebar"):
            if key in item and not isinstance(item[key], bool):
                errors.append(f"{prefix}.{key} must be a boolean.")
        for key in ("tap_action", "hold_action", "double_tap_action"):
            if key in item and not isinstance(item[key], dict):
                errors.append(f"{prefix}.{key} must be an object.")
        if "target" in item and item["target"] not in ("_blank", "_self"):
            errors.append(f"{prefix}.target must be _blank or _self.")


def _validate_pinned_groups(value: Any, errors: list[str]) -> None:
    if not isinstance(value, dict):
        errors.append("pinned_groups must be an object.")
        return
    for name, entry in value.items():
        if entry is True:
            continue
        if not isinstance(entry, dict):
            errors.append(f"pinned_groups.{name} must be true or an object.")
            continue
        if "icon" in entry and not isinstance(entry["icon"], str):
            errors.append(f"pinned_groups.{name}.icon must be a string.")


def _safe_load_yaml(yaml_text: str) -> Any:
    if not yaml_text.strip():
        return {}
    if yaml is not None:
        return yaml.safe_load(yaml_text)
    return _fallback_parse_simple_yaml(yaml_text)


def _fallback_parse_simple_yaml(yaml_text: str) -> dict[str, Any]:
    """Parse the small YAML subset used by local helper tests when PyYAML is unavailable."""
    result: dict[str, Any] = {}
    current_key: str | None = None
    current_group: str | None = None

    for raw_line in yaml_text.splitlines():
        if not raw_line.strip():
            continue

        indent = len(raw_line) - len(raw_line.lstrip(" "))
        line = raw_line.strip()

        if indent == 0 and ":" in line:
            key, raw_value = line.split(":", 1)
            current_key = key
            current_group = None
            value = raw_value.strip()
            if value == "":
                result[key] = {}
            elif value == "[]":
                result[key] = []
            else:
                result[key] = _parse_scalar(value)
            continue

        if current_key is None:
            raise ValueError(f"Unsupported YAML line: {raw_line}")

        if indent == 2 and line.startswith("- "):
            if not isinstance(result.get(current_key), list):
                result[current_key] = []
            result[current_key].append(line[2:].strip())
            continue

        if indent == 2 and line.endswith(":"):
            if not isinstance(result.get(current_key), dict):
                result[current_key] = {}
            current_group = line[:-1]
            result[current_key][current_group] = []
            continue

        if indent == 2 and ":" in line:
            group_name, raw_value = line.split(":", 1)
            if not isinstance(result.get(current_key), dict):
                result[current_key] = {}
            result[current_key][group_name] = _parse_scalar(raw_value.strip())
            current_group = group_name
            continue

        if indent == 4 and current_group and line.startswith("- "):
            result[current_key][current_group].append(line[2:].strip())
            continue

        raise ValueError(f"Unsupported YAML line: {raw_line}")

    return result


def _parse_scalar(value: str) -> Any:
    if value == "true":
        return True
    if value == "false":
        return False
    if value.startswith("'") and value.endswith("'"):
        return value[1:-1]
    return value
