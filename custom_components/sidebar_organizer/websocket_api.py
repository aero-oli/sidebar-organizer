"""WebSocket API for Sidebar Organizer config-folder mode."""

from __future__ import annotations

from pathlib import Path
from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback

from .const import (
    CONF_ALLOW_WRITE,
    CONF_ALLOW_USER_WRITE,
    CONF_CONFIG_PATH,
    CONF_CREATE_IF_MISSING,
    CONF_PROFILES_PATH,
    DOMAIN,
    FRONTEND_URL_KEY,
    FRONTEND_VERSION,
    PROFILE_LOCK,
    PROFILE_SUBSCRIBERS,
)
from .helpers import (
    DEFAULT_CONFIG_YAML,
    atomic_write_text,
    file_metadata,
    frontend_module_url,
    profile_path,
    validate_yaml_config,
)

TYPE_DIAGNOSTICS = f"{DOMAIN}/config/diagnostics"
TYPE_INFO = f"{DOMAIN}/config/info"
TYPE_READ = f"{DOMAIN}/config/read"
TYPE_VALIDATE = f"{DOMAIN}/config/validate"
TYPE_WRITE = f"{DOMAIN}/config/write"
TYPE_PROFILE_DELETE = f"{DOMAIN}/profile/delete"
TYPE_PROFILE_COPY = f"{DOMAIN}/profile/copy"
TYPE_PROFILE_INFO = f"{DOMAIN}/profile/info"
TYPE_PROFILE_LIST = f"{DOMAIN}/profile/list"
TYPE_PROFILE_READ = f"{DOMAIN}/profile/read"
TYPE_PROFILE_SUBSCRIBE = f"{DOMAIN}/profile/subscribe"
TYPE_PROFILE_WRITE = f"{DOMAIN}/profile/write"
REGISTERED_KEY = f"{DOMAIN}_websocket_registered"
MAX_PROFILE_YAML_BYTES = 512 * 1024


@callback
def async_register_websocket_commands(hass: HomeAssistant) -> None:
    """Register Sidebar Organizer WebSocket commands."""
    if hass.data.get(REGISTERED_KEY):
        return
    hass.data[REGISTERED_KEY] = True
    websocket_api.async_register_command(hass, websocket_diagnostics)
    websocket_api.async_register_command(hass, websocket_info)
    websocket_api.async_register_command(hass, websocket_read)
    websocket_api.async_register_command(hass, websocket_validate)
    websocket_api.async_register_command(hass, websocket_write)
    websocket_api.async_register_command(hass, websocket_profile_delete)
    websocket_api.async_register_command(hass, websocket_profile_copy)
    websocket_api.async_register_command(hass, websocket_profile_info)
    websocket_api.async_register_command(hass, websocket_profile_list)
    websocket_api.async_register_command(hass, websocket_profile_read)
    websocket_api.async_register_command(hass, websocket_profile_subscribe)
    websocket_api.async_register_command(hass, websocket_profile_write)


@websocket_api.websocket_command({vol.Required("type"): TYPE_DIAGNOSTICS})
@callback
def websocket_diagnostics(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Return install and runtime diagnostics."""
    connection.send_result(
        msg["id"],
        {
            **_metadata(hass),
            "backend_loaded": True,
            "frontend_url": hass.data.get(
                FRONTEND_URL_KEY, frontend_module_url(FRONTEND_VERSION)
            ),
            "legacy_resource_hint": "/hacsfiles/sidebar-organizer/sidebar-organizer.js",
        },
    )


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
            await hass.async_add_executor_job(
                atomic_write_text, path, DEFAULT_CONFIG_YAML
            )
        else:
            connection.send_error(
                msg["id"],
                "file_missing",
                f"Sidebar Organizer config file is missing: {path}",
            )
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


@websocket_api.websocket_command(
    {vol.Required("type"): TYPE_VALIDATE, vol.Required("yaml"): str}
)
@websocket_api.async_response
async def websocket_validate(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Validate supplied Sidebar Organizer YAML."""
    validation = await hass.async_add_executor_job(validate_yaml_config, msg["yaml"])
    connection.send_result(
        msg["id"], {"valid": validation["valid"], "errors": validation["errors"]}
    )


@websocket_api.websocket_command(
    {vol.Required("type"): TYPE_WRITE, vol.Required("yaml"): str}
)
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_write(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Write supplied Sidebar Organizer YAML after validating it."""
    if not hass.data[DOMAIN][CONF_ALLOW_WRITE]:
        connection.send_error(
            msg["id"], "write_disabled", "Writing Sidebar Organizer config is disabled."
        )
        return

    validation = await hass.async_add_executor_job(validate_yaml_config, msg["yaml"])
    if not validation["valid"]:
        connection.send_result(
            msg["id"], {"valid": False, "errors": validation["errors"]}
        )
        return

    await hass.async_add_executor_job(atomic_write_text, _path(hass), msg["yaml"])
    connection.send_result(msg["id"], {**_metadata(hass), "valid": True, "errors": []})
    _notify_shared_profile_subscribers(hass, connection)


@websocket_api.websocket_command(
    {vol.Required("type"): TYPE_PROFILE_INFO, vol.Optional("user_id"): str}
)
@websocket_api.async_response
async def websocket_profile_info(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Return metadata for a user's effective Sidebar Organizer profile."""
    user_id = await _resolve_target_user(
        hass, connection, msg.get("user_id"), msg["id"], allow_orphan=True
    )
    if user_id is None:
        return
    connection.send_result(msg["id"], _profile_metadata(hass, connection, user_id))


@websocket_api.websocket_command(
    {vol.Required("type"): TYPE_PROFILE_READ, vol.Optional("user_id"): str}
)
@websocket_api.async_response
async def websocket_profile_read(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Read a user's personal profile, falling back to the shared YAML."""
    user_id = await _resolve_target_user(
        hass, connection, msg.get("user_id"), msg["id"], allow_orphan=True
    )
    if user_id is None:
        return

    await _ensure_default_config(hass)
    path, _source = _effective_profile_path(hass, user_id)
    if not path.exists():
        connection.send_error(
            msg["id"],
            "file_missing",
            f"Sidebar Organizer config file is missing: {path}",
        )
        return

    yaml_text = await hass.async_add_executor_job(path.read_text, "utf-8")
    validation = await hass.async_add_executor_job(validate_yaml_config, yaml_text)
    connection.send_result(
        msg["id"],
        {
            **_profile_metadata(hass, connection, user_id),
            "yaml": yaml_text,
            "parsed": validation["parsed"],
            "valid": validation["valid"],
            "errors": validation["errors"],
        },
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): TYPE_PROFILE_WRITE,
        vol.Required("yaml"): str,
        vol.Optional("user_id"): str,
        vol.Optional("expected_revision"): vol.Any(str, None),
    }
)
@websocket_api.async_response
async def websocket_profile_write(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Atomically write a personal profile with optimistic conflict detection."""
    user_id = await _resolve_target_user(
        hass, connection, msg.get("user_id"), msg["id"]
    )
    if user_id is None or not _check_profile_write_permission(
        hass, connection, user_id, msg["id"]
    ):
        return
    if len(msg["yaml"].encode("utf-8")) > MAX_PROFILE_YAML_BYTES:
        connection.send_error(
            msg["id"],
            "profile_too_large",
            "Sidebar Organizer profiles are limited to 512 KiB.",
        )
        return

    validation = await hass.async_add_executor_job(validate_yaml_config, msg["yaml"])
    if not validation["valid"]:
        connection.send_result(
            msg["id"], {"valid": False, "errors": validation["errors"]}
        )
        return

    lock = hass.data[DOMAIN][PROFILE_LOCK]
    async with lock:
        await _ensure_default_config(hass)
        effective_path, _source = _effective_profile_path(hass, user_id)
        current_revision = file_metadata(effective_path)["revision"]
        if "expected_revision" in msg and msg["expected_revision"] != current_revision:
            connection.send_error(
                msg["id"],
                "revision_conflict",
                "The Sidebar Organizer profile changed after it was loaded.",
            )
            return

        target = _personal_profile_path(hass, user_id)
        await hass.async_add_executor_job(atomic_write_text, target, msg["yaml"])

    metadata = _profile_metadata(hass, connection, user_id)
    connection.send_result(msg["id"], {**metadata, "valid": True, "errors": []})
    _notify_profile_subscribers(hass, user_id, metadata, exclude_connection=connection)


@websocket_api.websocket_command(
    {
        vol.Required("type"): TYPE_PROFILE_DELETE,
        vol.Optional("user_id"): str,
        vol.Optional("expected_revision"): vol.Any(str, None),
    }
)
@websocket_api.async_response
async def websocket_profile_delete(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Delete a personal profile so the user returns to the shared default."""
    user_id = await _resolve_target_user(
        hass, connection, msg.get("user_id"), msg["id"], allow_orphan=True
    )
    if user_id is None or not _check_profile_write_permission(
        hass, connection, user_id, msg["id"]
    ):
        return

    target = _personal_profile_path(hass, user_id)
    lock = hass.data[DOMAIN][PROFILE_LOCK]
    async with lock:
        current_revision = file_metadata(target)["revision"]
        if "expected_revision" in msg and msg["expected_revision"] != current_revision:
            connection.send_error(
                msg["id"],
                "revision_conflict",
                "The Sidebar Organizer profile changed after it was loaded.",
            )
            return
        if target.exists():
            await hass.async_add_executor_job(target.unlink)

    metadata = _profile_metadata(hass, connection, user_id)
    connection.send_result(msg["id"], metadata)
    _notify_profile_subscribers(hass, user_id, metadata, exclude_connection=connection)


@websocket_api.websocket_command(
    {
        vol.Required("type"): TYPE_PROFILE_COPY,
        vol.Required("source"): str,
        vol.Required("target_user_id"): str,
        vol.Optional("expected_revision"): vol.Any(str, None),
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_profile_copy(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Copy the shared config or another profile to an active user's profile."""
    target_user_id = msg["target_user_id"]
    if await hass.auth.async_get_user(target_user_id) is None:
        connection.send_error(
            msg["id"],
            "user_not_found",
            "The target Home Assistant user does not exist.",
        )
        return
    if not _check_profile_write_permission(hass, connection, target_user_id, msg["id"]):
        return

    source = msg["source"]
    if source == "shared":
        source_path = _path(hass)
    else:
        try:
            source_path = _personal_profile_path(hass, source)
        except ValueError:
            connection.send_error(
                msg["id"], "invalid_user_id", "The source profile id is invalid."
            )
            return
        if not source_path.exists():
            connection.send_error(
                msg["id"], "profile_missing", "The source profile does not exist."
            )
            return

    lock = hass.data[DOMAIN][PROFILE_LOCK]
    async with lock:
        await _ensure_default_config(hass)
        if not source_path.exists():
            connection.send_error(
                msg["id"], "file_missing", "The source configuration file is missing."
            )
            return
        target_effective, _target_source = _effective_profile_path(hass, target_user_id)
        current_revision = file_metadata(target_effective)["revision"]
        if "expected_revision" in msg and msg["expected_revision"] != current_revision:
            connection.send_error(
                msg["id"],
                "revision_conflict",
                "The target profile changed after it was loaded.",
            )
            return
        yaml_text = await hass.async_add_executor_job(source_path.read_text, "utf-8")
        validation = await hass.async_add_executor_job(validate_yaml_config, yaml_text)
        if not validation["valid"]:
            connection.send_error(
                msg["id"],
                "invalid_source",
                "The source profile is invalid and cannot be copied.",
            )
            return
        target = _personal_profile_path(hass, target_user_id)
        await hass.async_add_executor_job(atomic_write_text, target, yaml_text)

    metadata = _profile_metadata(hass, connection, target_user_id)
    connection.send_result(msg["id"], metadata)
    _notify_profile_subscribers(
        hass, target_user_id, metadata, exclude_connection=connection
    )


@websocket_api.websocket_command({vol.Required("type"): TYPE_PROFILE_LIST})
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_profile_list(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """List active users and orphaned Sidebar Organizer profiles for administrators."""
    users = await hass.auth.async_get_users()
    profiles_dir = _profiles_path(hass)
    active_ids = {user.id for user in users}
    profile_ids = (
        {path.stem for path in profiles_dir.glob("*.yaml") if path.is_file()}
        if profiles_dir.exists()
        else set()
    )
    connection.send_result(
        msg["id"],
        {
            "users": [
                {
                    "id": user.id,
                    "name": user.name,
                    "is_active": user.is_active,
                    "is_admin": user.is_admin,
                    "system_generated": user.system_generated,
                    "profile_exists": user.id in profile_ids,
                }
                for user in users
            ],
            "orphans": sorted(profile_ids - active_ids),
        },
    )


@websocket_api.websocket_command(
    {vol.Required("type"): TYPE_PROFILE_SUBSCRIBE, vol.Optional("user_id"): str}
)
@websocket_api.async_response
async def websocket_profile_subscribe(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Subscribe a connection to UI-originated changes for one profile."""
    user_id = await _resolve_target_user(
        hass, connection, msg.get("user_id"), msg["id"]
    )
    if user_id is None:
        return

    subscribers = hass.data[DOMAIN][PROFILE_SUBSCRIBERS]
    subscriber_key = (id(connection), msg["id"])
    subscribers.setdefault(user_id, {})[subscriber_key] = connection

    def unsubscribe() -> None:
        user_subscribers = subscribers.get(user_id, {})
        user_subscribers.pop(subscriber_key, None)
        if not user_subscribers:
            subscribers.pop(user_id, None)

    connection.subscriptions[msg["id"]] = unsubscribe
    connection.send_result(msg["id"])


async def _resolve_target_user(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    requested_user_id: str | None,
    msg_id: int,
    allow_orphan: bool = False,
) -> str | None:
    """Resolve a target user while preventing horizontal profile access."""
    current_user = connection.user
    target_user_id = requested_user_id or current_user.id
    if target_user_id != current_user.id and not current_user.is_admin:
        connection.send_error(
            msg_id,
            "unauthorized",
            "Only administrators can manage another user's profile.",
        )
        return None
    try:
        orphan_profile_exists = _personal_profile_path(hass, target_user_id).exists()
    except ValueError:
        connection.send_error(
            msg_id, "invalid_user_id", "The requested profile id is invalid."
        )
        return None
    if await hass.auth.async_get_user(target_user_id) is None and not (
        allow_orphan and current_user.is_admin and orphan_profile_exists
    ):
        connection.send_error(
            msg_id,
            "user_not_found",
            "The requested Home Assistant user does not exist.",
        )
        return None
    return target_user_id


def _check_profile_write_permission(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    user_id: str,
    msg_id: int,
) -> bool:
    """Check the shared write switch and self-service profile policy."""
    settings = hass.data[DOMAIN]
    if not settings[CONF_ALLOW_WRITE]:
        connection.send_error(
            msg_id, "write_disabled", "Writing Sidebar Organizer config is disabled."
        )
        return False
    if not connection.user.is_admin and not settings[CONF_ALLOW_USER_WRITE]:
        connection.send_error(
            msg_id,
            "user_write_disabled",
            "Users cannot edit their own Sidebar Organizer profile.",
        )
        return False
    if user_id != connection.user.id and not connection.user.is_admin:
        connection.send_error(
            msg_id,
            "unauthorized",
            "Only administrators can manage another user's profile.",
        )
        return False
    return True


async def _ensure_default_config(hass: HomeAssistant) -> None:
    """Create the shared default when configured to do so."""
    path = _path(hass)
    if not path.exists() and hass.data[DOMAIN][CONF_CREATE_IF_MISSING]:
        await hass.async_add_executor_job(atomic_write_text, path, DEFAULT_CONFIG_YAML)


def _profiles_path(hass: HomeAssistant) -> Path:
    return Path(hass.data[DOMAIN][CONF_PROFILES_PATH])


def _personal_profile_path(hass: HomeAssistant, user_id: str) -> Path:
    return profile_path(_profiles_path(hass), user_id)


def _effective_profile_path(hass: HomeAssistant, user_id: str) -> tuple[Path, str]:
    personal = _personal_profile_path(hass, user_id)
    return (personal, "user") if personal.exists() else (_path(hass), "shared")


def _profile_metadata(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, user_id: str
) -> dict[str, Any]:
    personal = _personal_profile_path(hass, user_id)
    effective, source = _effective_profile_path(hass, user_id)
    metadata = file_metadata(effective)
    can_write = hass.data[DOMAIN][CONF_ALLOW_WRITE] and (
        connection.user.is_admin or hass.data[DOMAIN][CONF_ALLOW_USER_WRITE]
    )
    return {
        "available": True,
        "allow_write": can_write,
        "allow_user_write": hass.data[DOMAIN][CONF_ALLOW_USER_WRITE],
        "user_id": user_id,
        "profile_exists": personal.exists(),
        "source": source,
        "config_path": str(effective),
        **metadata,
    }


def _notify_profile_subscribers(
    hass: HomeAssistant,
    user_id: str,
    metadata: dict[str, Any],
    exclude_connection: websocket_api.ActiveConnection | None = None,
) -> None:
    """Notify relevant connected devices after a UI-originated profile change."""
    subscribers = hass.data[DOMAIN][PROFILE_SUBSCRIBERS].get(user_id, {})
    for (_connection_id, subscription_id), connection in list(subscribers.items()):
        if connection is exclude_connection:
            continue
        connection.send_event(subscription_id, metadata)


def _notify_shared_profile_subscribers(
    hass: HomeAssistant, exclude_connection: websocket_api.ActiveConnection
) -> None:
    """Notify subscribed users who currently inherit the shared configuration."""
    for user_id in list(hass.data[DOMAIN][PROFILE_SUBSCRIBERS]):
        if _personal_profile_path(hass, user_id).exists():
            continue
        metadata = _profile_metadata(hass, exclude_connection, user_id)
        _notify_profile_subscribers(
            hass,
            user_id,
            metadata,
            exclude_connection=exclude_connection,
        )


def _path(hass: HomeAssistant) -> Path:
    return Path(hass.data[DOMAIN][CONF_CONFIG_PATH])


def _metadata(hass: HomeAssistant) -> dict[str, Any]:
    settings = hass.data[DOMAIN]
    path = _path(hass)
    metadata = file_metadata(path)
    return {
        "available": True,
        "config_path": settings[CONF_CONFIG_PATH],
        "profiles_path": settings[CONF_PROFILES_PATH],
        "allow_write": settings[CONF_ALLOW_WRITE],
        "allow_user_write": settings[CONF_ALLOW_USER_WRITE],
        "create_if_missing": settings[CONF_CREATE_IF_MISSING],
        **metadata,
    }
