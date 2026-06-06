"""Pure helpers for the Sidebar Organizer backend integration."""

from __future__ import annotations

import os
import tempfile
from pathlib import Path
from typing import Any

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


def resolve_config_path(config_dir: str | Path, config_path: str) -> Path:
    """Resolve a Sidebar Organizer config path and require it to stay under config_dir."""
    if not config_path or not isinstance(config_path, str):
        raise ValueError("config_path must be a non-empty string")

    base_path = Path(config_dir).resolve()
    candidate = Path(config_path)
    resolved = candidate.resolve() if candidate.is_absolute() else (base_path / candidate).resolve()

    if resolved != base_path and base_path not in resolved.parents:
        raise ValueError("config_path must resolve inside the Home Assistant config directory")

    return resolved


def validate_config_object(config: Any) -> list[str]:
    """Return human-readable validation errors for a parsed Sidebar Organizer config."""
    errors: list[str] = []

    if not isinstance(config, dict):
        return ["YAML must parse to an object/dictionary."]

    if "bottom_items" in config and not _is_list_of_strings(config["bottom_items"]):
        errors.append("bottom_items must be a list of strings.")

    if "default_collapsed" in config and not _is_list_of_strings(config["default_collapsed"]):
        errors.append("default_collapsed must be a list of strings.")

    if "custom_groups" in config:
        custom_groups = config["custom_groups"]
        if not isinstance(custom_groups, dict):
            errors.append("custom_groups must be an object mapping group names to lists of strings.")
        else:
            for group_name, items in custom_groups.items():
                if not isinstance(group_name, str):
                    errors.append("custom_groups group names must be strings.")
                    continue
                if not _is_list_of_strings(items):
                    errors.append(f"custom_groups.{group_name} must be a list of strings.")

    if "color_config" in config and not isinstance(config["color_config"], dict):
        errors.append("color_config must be an object.")

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
    fd, temp_name = tempfile.mkstemp(prefix=f".{target.name}.", suffix=".tmp", dir=target.parent)
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


def _is_list_of_strings(value: Any) -> bool:
    return isinstance(value, list) and all(isinstance(item, str) for item in value)


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
