"""WebSocket API for Sidebar Organizer config-folder mode."""

from __future__ import annotations

from pathlib import Path
from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback

from .const import CONF_ALLOW_WRITE, CONF_CONFIG_PATH, CONF_CREATE_IF_MISSING, DOMAIN
from .helpers import DEFAULT_CONFIG_YAML, atomic_write_text, validate_yaml_config

TYPE_INFO = f"{DOMAIN}/config/info"
TYPE_READ = f"{DOMAIN}/config/read"
TYPE_VALIDATE = f"{DOMAIN}/config/validate"
TYPE_WRITE = f"{DOMAIN}/config/write"


@callback
def async_register_websocket_commands(hass: HomeAssistant) -> None:
    """Register Sidebar Organizer WebSocket commands."""
    websocket_api.async_register_command(hass, websocket_info)
    websocket_api.async_register_command(hass, websocket_read)
    websocket_api.async_register_command(hass, websocket_validate)
    websocket_api.async_register_command(hass, websocket_write)


@websocket_api.websocket_command({vol.Required("type"): TYPE_INFO})
@callback
def websocket_info(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Return backend config mode metadata."""
    connection.send_result(msg["id"], _metadata(hass))


@websocket_api.websocket_command({vol.Required("type"): TYPE_READ})
@websocket_api.async_response
async def websocket_read(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Read the configured Sidebar Organizer YAML file."""
    path = _path(hass)
    settings = hass.data[DOMAIN]

    if not path.exists():
        if settings[CONF_CREATE_IF_MISSING]:
            await hass.async_add_executor_job(atomic_write_text, path, DEFAULT_CONFIG_YAML)
        else:
            connection.send_error(msg["id"], "file_missing", f"Sidebar Organizer config file is missing: {path}")
            return

    yaml_text = await hass.async_add_executor_job(path.read_text, "utf-8")
    validation = validate_yaml_config(yaml_text)
    if not validation["valid"]:
        connection.send_result(
            msg["id"],
            {
                **_metadata(hass),
                "yaml": yaml_text,
                "parsed": validation["parsed"],
                "valid": False,
                "errors": validation["errors"],
            },
        )
        return

    connection.send_result(
        msg["id"],
        {
            **_metadata(hass),
            "yaml": yaml_text,
            "parsed": validation["parsed"],
            "valid": True,
            "errors": [],
        },
    )


@websocket_api.websocket_command({vol.Required("type"): TYPE_VALIDATE, vol.Required("yaml"): str})
@websocket_api.async_response
async def websocket_validate(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Validate supplied Sidebar Organizer YAML."""
    validation = await hass.async_add_executor_job(validate_yaml_config, msg["yaml"])
    connection.send_result(msg["id"], {"valid": validation["valid"], "errors": validation["errors"]})


@websocket_api.websocket_command({vol.Required("type"): TYPE_WRITE, vol.Required("yaml"): str})
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_write(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Write supplied Sidebar Organizer YAML after validating it."""
    if not hass.data[DOMAIN][CONF_ALLOW_WRITE]:
        connection.send_error(msg["id"], "write_disabled", "Writing Sidebar Organizer config is disabled.")
        return

    validation = await hass.async_add_executor_job(validate_yaml_config, msg["yaml"])
    if not validation["valid"]:
        connection.send_result(msg["id"], {"valid": False, "errors": validation["errors"]})
        return

    await hass.async_add_executor_job(atomic_write_text, _path(hass), msg["yaml"])
    connection.send_result(msg["id"], {**_metadata(hass), "valid": True, "errors": []})


def _path(hass: HomeAssistant) -> Path:
    return Path(hass.data[DOMAIN][CONF_CONFIG_PATH])


def _metadata(hass: HomeAssistant) -> dict[str, Any]:
    settings = hass.data[DOMAIN]
    path = _path(hass)
    exists = path.exists()
    return {
        "available": True,
        "config_path": settings[CONF_CONFIG_PATH],
        "allow_write": settings[CONF_ALLOW_WRITE],
        "create_if_missing": settings[CONF_CREATE_IF_MISSING],
        "exists": exists,
        "last_modified": path.stat().st_mtime if exists else None,
    }

