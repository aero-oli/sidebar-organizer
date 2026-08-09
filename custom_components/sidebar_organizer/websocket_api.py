"""WebSocket API for Sidebar Organizer config-folder mode."""

from __future__ import annotations

from collections.abc import Callable
from datetime import timedelta
from pathlib import Path
from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.event import async_track_time_interval

from .const import (
    CONF_ALLOW_WRITE,
    CONF_ALLOW_USER_WRITE,
    CONF_ALLOW_PREFERENCE_WRITE,
    CONF_CONFIG_PATH,
    CONF_CREATE_IF_MISSING,
    CONF_PROFILES_PATH,
    CONFIG_SUBSCRIBERS,
    CONFIG_WATCH_STATE,
    DOMAIN,
    FRONTEND_URL_KEY,
    FRONTEND_VERSION,
    MAX_CONFIG_YAML_BYTES,
    PROFILE_LOCK,
    PROFILE_SUBSCRIBERS,
    SCHEMA_VERSION,
)
from .helpers import (
    DEFAULT_CONFIG_YAML,
    atomic_write_text,
    atomic_write_with_backup,
    file_metadata,
    file_metadata_with_backup,
    file_revision,
    frontend_module_url,
    has_revision_conflict,
    merge_watch_revisions,
    profile_directory_metadata,
    preferences_path,
    profile_path,
    read_preferences,
    validate_yaml_config,
    write_preferences,
)

TYPE_DIAGNOSTICS = f"{DOMAIN}/config/diagnostics"
TYPE_INFO = f"{DOMAIN}/config/info"
TYPE_READ = f"{DOMAIN}/config/read"
TYPE_VALIDATE = f"{DOMAIN}/config/validate"
TYPE_WRITE = f"{DOMAIN}/config/write"
TYPE_RESTORE = f"{DOMAIN}/config/restore"
TYPE_SUBSCRIBE = f"{DOMAIN}/config/subscribe"
TYPE_PROFILE_DELETE = f"{DOMAIN}/profile/delete"
TYPE_PROFILE_COPY = f"{DOMAIN}/profile/copy"
TYPE_PROFILE_INFO = f"{DOMAIN}/profile/info"
TYPE_PROFILE_LIST = f"{DOMAIN}/profile/list"
TYPE_PROFILE_READ = f"{DOMAIN}/profile/read"
TYPE_PROFILE_SUBSCRIBE = f"{DOMAIN}/profile/subscribe"
TYPE_PROFILE_WRITE = f"{DOMAIN}/profile/write"
TYPE_PROFILE_RESTORE = f"{DOMAIN}/profile/restore"
TYPE_PREFERENCES_READ = f"{DOMAIN}/preferences/read"
TYPE_PREFERENCES_WRITE = f"{DOMAIN}/preferences/write"
REGISTERED_KEY = f"{DOMAIN}_websocket_registered"


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
    websocket_api.async_register_command(hass, websocket_restore)
    websocket_api.async_register_command(hass, websocket_subscribe)
    websocket_api.async_register_command(hass, websocket_profile_delete)
    websocket_api.async_register_command(hass, websocket_profile_copy)
    websocket_api.async_register_command(hass, websocket_profile_info)
    websocket_api.async_register_command(hass, websocket_profile_list)
    websocket_api.async_register_command(hass, websocket_profile_read)
    websocket_api.async_register_command(hass, websocket_profile_subscribe)
    websocket_api.async_register_command(hass, websocket_profile_write)
    websocket_api.async_register_command(hass, websocket_profile_restore)
    websocket_api.async_register_command(hass, websocket_preferences_read)
    websocket_api.async_register_command(hass, websocket_preferences_write)


@websocket_api.websocket_command({vol.Required("type"): TYPE_DIAGNOSTICS})
@websocket_api.async_response
async def websocket_diagnostics(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Return install and runtime diagnostics."""
    directory = await hass.async_add_executor_job(
        profile_directory_metadata, _profiles_path(hass)
    )
    storage_health = {
        "profile_directory_owned": directory["owned"],
        "watcher_active": CONFIG_WATCH_STATE in hass.data[DOMAIN],
        **(
            {"profile_count": len(directory["profile_ids"])}
            if connection.user.is_admin
            else {}
        ),
    }
    connection.send_result(
        msg["id"],
        {
            **(await _async_metadata(hass)),
            "capabilities": _capabilities(connection),
            "backend_loaded": True,
            "frontend_url": hass.data.get(
                FRONTEND_URL_KEY, frontend_module_url(FRONTEND_VERSION)
            ),
            "legacy_resource_hint": "/hacsfiles/sidebar-organizer/sidebar-organizer.js",
            "storage_health": storage_health,
        },
    )


@websocket_api.websocket_command({vol.Required("type"): TYPE_INFO})
@websocket_api.async_response
async def websocket_info(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Return backend config mode metadata."""
    connection.send_result(
        msg["id"],
        {**(await _async_metadata(hass)), "capabilities": _capabilities(connection)},
    )


@websocket_api.websocket_command({vol.Required("type"): TYPE_READ})
@websocket_api.async_response
async def websocket_read(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Read the configured Sidebar Organizer YAML file."""
    path = _path(hass)
    settings = hass.data[DOMAIN]

    if not await hass.async_add_executor_job(path.exists):
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
    if len(yaml_text.encode("utf-8")) > MAX_CONFIG_YAML_BYTES:
        connection.send_result(
            msg["id"],
            {
                **(await _async_metadata(hass)),
                "yaml": yaml_text,
                "raw_yaml": yaml_text,
                "valid": False,
                "errors": ["Configuration exceeds the 512 KiB limit."],
            },
        )
        return
    validation = await hass.async_add_executor_job(validate_yaml_config, yaml_text)
    if not validation["valid"]:
        connection.send_result(
            msg["id"],
            {
                **(await _async_metadata(hass)),
                "yaml": yaml_text,
                "raw_yaml": yaml_text,
                "config": validation["parsed"],
                "parsed": validation["parsed"],
                "valid": False,
                "errors": validation["errors"],
            },
        )
        return

    connection.send_result(
        msg["id"],
        {
            **(await _async_metadata(hass)),
            "yaml": yaml_text,
            "raw_yaml": yaml_text,
            "config": validation["parsed"],
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
    if len(msg["yaml"].encode("utf-8")) > MAX_CONFIG_YAML_BYTES:
        connection.send_result(
            msg["id"],
            {"valid": False, "errors": ["Configuration exceeds the 512 KiB limit."]},
        )
        return
    validation = await hass.async_add_executor_job(validate_yaml_config, msg["yaml"])
    connection.send_result(
        msg["id"], {"valid": validation["valid"], "errors": validation["errors"]}
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): TYPE_WRITE,
        vol.Required("yaml"): str,
        vol.Optional("expected_revision"): vol.Any(str, None),
    }
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
    if len(msg["yaml"].encode("utf-8")) > MAX_CONFIG_YAML_BYTES:
        connection.send_error(
            msg["id"],
            "config_too_large",
            "Sidebar Organizer configurations are limited to 512 KiB.",
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
        current_revision = await hass.async_add_executor_job(
            lambda: file_metadata(_path(hass))["revision"]
        )
        if "expected_revision" in msg and has_revision_conflict(
            msg["expected_revision"], current_revision
        ):
            connection.send_error(
                msg["id"],
                "revision_conflict",
                "The shared Sidebar Organizer configuration changed after it was loaded.",
            )
            return
        await hass.async_add_executor_job(
            atomic_write_with_backup, _path(hass), msg["yaml"]
        )
        await _async_refresh_watch_state(hass, _path(hass))
    metadata = await _async_metadata(hass)
    connection.send_result(msg["id"], {**metadata, "valid": True, "errors": []})
    _notify_config_subscribers(hass, metadata, exclude_connection=connection)
    await _notify_shared_profile_subscribers(hass, connection)


@websocket_api.websocket_command(
    {
        vol.Required("type"): TYPE_RESTORE,
        vol.Optional("expected_revision"): vol.Any(str, None),
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_restore(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Restore the adjacent shared-config backup after validation."""
    if not hass.data[DOMAIN][CONF_ALLOW_WRITE]:
        connection.send_error(
            msg["id"], "write_disabled", "Writing Sidebar Organizer config is disabled."
        )
        return
    target = _path(hass)
    if not await _async_restore_backup(
        hass, connection, msg, target, "shared configuration"
    ):
        return
    metadata = await _async_metadata(hass)
    connection.send_result(msg["id"], {**metadata, "valid": True, "errors": []})
    _notify_config_subscribers(hass, metadata, exclude_connection=connection)
    await _notify_shared_profile_subscribers(hass, connection)


@websocket_api.websocket_command({vol.Required("type"): TYPE_SUBSCRIBE})
@callback
def websocket_subscribe(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Subscribe to shared configuration changes."""
    subscriber_key = (id(connection), msg["id"])
    hass.data[DOMAIN][CONFIG_SUBSCRIBERS][subscriber_key] = connection

    def unsubscribe() -> None:
        settings = hass.data.get(DOMAIN)
        if settings:
            settings[CONFIG_SUBSCRIBERS].pop(subscriber_key, None)

    connection.subscriptions[msg["id"]] = unsubscribe
    connection.send_result(msg["id"])


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
    connection.send_result(
        msg["id"], await _async_profile_metadata(hass, connection, user_id)
    )


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
    path, _source = await _async_effective_profile_path(hass, user_id)
    if not await hass.async_add_executor_job(path.exists):
        connection.send_error(
            msg["id"],
            "file_missing",
            f"Sidebar Organizer config file is missing: {path}",
        )
        return

    yaml_text = await hass.async_add_executor_job(path.read_text, "utf-8")
    if len(yaml_text.encode("utf-8")) > MAX_CONFIG_YAML_BYTES:
        connection.send_result(
            msg["id"],
            {
                **(await _async_profile_metadata(hass, connection, user_id)),
                "yaml": yaml_text,
                "raw_yaml": yaml_text,
                "valid": False,
                "errors": ["Configuration exceeds the 512 KiB limit."],
            },
        )
        return
    validation = await hass.async_add_executor_job(validate_yaml_config, yaml_text)
    connection.send_result(
        msg["id"],
        {
            **(await _async_profile_metadata(hass, connection, user_id)),
            "yaml": yaml_text,
            "raw_yaml": yaml_text,
            "config": validation["parsed"],
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
    if len(msg["yaml"].encode("utf-8")) > MAX_CONFIG_YAML_BYTES:
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
        effective_path, _source = await _async_effective_profile_path(hass, user_id)
        current_revision = await hass.async_add_executor_job(
            lambda: file_metadata(effective_path)["revision"]
        )
        if "expected_revision" in msg and has_revision_conflict(
            msg["expected_revision"], current_revision
        ):
            connection.send_error(
                msg["id"],
                "revision_conflict",
                "The Sidebar Organizer profile changed after it was loaded.",
            )
            return

        target = _personal_profile_path(hass, user_id)
        await hass.async_add_executor_job(atomic_write_with_backup, target, msg["yaml"])
        await _async_refresh_watch_state(hass, target)

    metadata = await _async_profile_metadata(hass, connection, user_id)
    connection.send_result(msg["id"], {**metadata, "valid": True, "errors": []})
    _notify_profile_subscribers(hass, user_id, metadata, exclude_connection=connection)


@websocket_api.websocket_command(
    {
        vol.Required("type"): TYPE_PROFILE_RESTORE,
        vol.Optional("user_id"): str,
        vol.Optional("expected_revision"): vol.Any(str, None),
    }
)
@websocket_api.async_response
async def websocket_profile_restore(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Restore the adjacent backup for an existing personal profile."""
    user_id = await _resolve_target_user(
        hass, connection, msg.get("user_id"), msg["id"], allow_orphan=True
    )
    if user_id is None or not _check_profile_write_permission(
        hass, connection, user_id, msg["id"]
    ):
        return
    target = _personal_profile_path(hass, user_id)
    if not await _async_restore_backup(
        hass, connection, msg, target, "personal profile"
    ):
        return
    metadata = await _async_profile_metadata(hass, connection, user_id)
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
        current_revision = await hass.async_add_executor_job(
            lambda: file_metadata(target)["revision"]
        )
        if "expected_revision" in msg and has_revision_conflict(
            msg["expected_revision"], current_revision
        ):
            connection.send_error(
                msg["id"],
                "revision_conflict",
                "The Sidebar Organizer profile changed after it was loaded.",
            )
            return
        if await hass.async_add_executor_job(target.exists):
            await hass.async_add_executor_job(target.unlink)
            await _async_refresh_watch_state(hass, target)

    metadata = await _async_profile_metadata(hass, connection, user_id)
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
        if not await hass.async_add_executor_job(source_path.exists):
            connection.send_error(
                msg["id"], "profile_missing", "The source profile does not exist."
            )
            return

    lock = hass.data[DOMAIN][PROFILE_LOCK]
    async with lock:
        await _ensure_default_config(hass)
        if not await hass.async_add_executor_job(source_path.exists):
            connection.send_error(
                msg["id"], "file_missing", "The source configuration file is missing."
            )
            return
        target_effective, _target_source = await _async_effective_profile_path(
            hass, target_user_id
        )
        current_revision = await hass.async_add_executor_job(
            lambda: file_metadata(target_effective)["revision"]
        )
        if "expected_revision" in msg and has_revision_conflict(
            msg["expected_revision"], current_revision
        ):
            connection.send_error(
                msg["id"],
                "revision_conflict",
                "The target profile changed after it was loaded.",
            )
            return
        yaml_text = await hass.async_add_executor_job(source_path.read_text, "utf-8")
        if len(yaml_text.encode("utf-8")) > MAX_CONFIG_YAML_BYTES:
            connection.send_error(
                msg["id"], "profile_too_large", "The source profile exceeds 512 KiB."
            )
            return
        validation = await hass.async_add_executor_job(validate_yaml_config, yaml_text)
        if not validation["valid"]:
            connection.send_error(
                msg["id"],
                "invalid_source",
                "The source profile is invalid and cannot be copied.",
            )
            return
        target = _personal_profile_path(hass, target_user_id)
        await hass.async_add_executor_job(atomic_write_with_backup, target, yaml_text)
        await _async_refresh_watch_state(hass, target)

    metadata = await _async_profile_metadata(hass, connection, target_user_id)
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
    active_ids = {user.id for user in users}
    directory = await hass.async_add_executor_job(
        profile_directory_metadata, _profiles_path(hass)
    )
    profile_ids = set(directory["profile_ids"])
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

    subscriber_key = (id(connection), msg["id"])
    hass.data[DOMAIN][PROFILE_SUBSCRIBERS].setdefault(user_id, {})[subscriber_key] = (
        connection
    )

    def unsubscribe() -> None:
        settings = hass.data.get(DOMAIN)
        if not settings:
            return
        subscribers = settings[PROFILE_SUBSCRIBERS]
        user_subscribers = subscribers.get(user_id, {})
        user_subscribers.pop(subscriber_key, None)
        if not user_subscribers:
            subscribers.pop(user_id, None)

    connection.subscriptions[msg["id"]] = unsubscribe
    connection.send_result(msg["id"])


@websocket_api.websocket_command(
    {vol.Required("type"): TYPE_PREFERENCES_READ, vol.Optional("user_id"): str}
)
@websocket_api.async_response
async def websocket_preferences_read(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Read small server-synced UI preferences for a user."""
    user_id = await _resolve_target_user(
        hass, connection, msg.get("user_id"), msg["id"]
    )
    if user_id is None:
        return
    path = preferences_path(_profiles_path(hass), user_id)
    try:
        preferences = await hass.async_add_executor_job(read_preferences, path)
        metadata = await hass.async_add_executor_job(file_metadata, path)
    except (OSError, ValueError) as err:
        connection.send_error(msg["id"], "invalid_preferences", str(err))
        return
    connection.send_result(
        msg["id"],
        {
            "user_id": user_id,
            "preferences": preferences,
            "revision": metadata["revision"],
            "schema_version": SCHEMA_VERSION,
        },
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): TYPE_PREFERENCES_WRITE,
        vol.Required("preferences"): dict,
        vol.Optional("user_id"): str,
        vol.Optional("expected_revision"): vol.Any(str, None),
    }
)
@websocket_api.async_response
async def websocket_preferences_write(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Persist per-user UI preferences with optimistic conflict detection."""
    if not hass.data[DOMAIN][CONF_ALLOW_PREFERENCE_WRITE]:
        connection.send_error(
            msg["id"],
            "write_disabled",
            "Writing Sidebar Organizer preferences is disabled.",
        )
        return
    user_id = await _resolve_target_user(
        hass, connection, msg.get("user_id"), msg["id"]
    )
    if user_id is None:
        return
    if user_id != connection.user.id and not connection.user.is_admin:
        connection.send_error(
            msg["id"], "unauthorized", "Only administrators can manage another user."
        )
        return

    path = preferences_path(_profiles_path(hass), user_id)
    lock = hass.data[DOMAIN][PROFILE_LOCK]
    async with lock:
        current = await hass.async_add_executor_job(file_metadata, path)
        if "expected_revision" in msg and has_revision_conflict(
            msg["expected_revision"], current["revision"]
        ):
            connection.send_error(
                msg["id"],
                "revision_conflict",
                "Sidebar preferences changed after they were loaded.",
            )
            return
        try:
            await hass.async_add_executor_job(
                write_preferences, path, msg["preferences"]
            )
            saved_preferences = await hass.async_add_executor_job(
                read_preferences, path
            )
        except (OSError, ValueError) as err:
            connection.send_error(msg["id"], "invalid_preferences", str(err))
            return
    metadata = await hass.async_add_executor_job(file_metadata, path)
    connection.send_result(
        msg["id"],
        {
            "user_id": user_id,
            "preferences": saved_preferences,
            "revision": metadata["revision"],
            "schema_version": SCHEMA_VERSION,
        },
    )
    profile_metadata = await _async_profile_metadata(hass, connection, user_id)
    profile_metadata["preferences_revision"] = metadata["revision"]
    _notify_profile_subscribers(
        hass, user_id, profile_metadata, exclude_connection=connection
    )


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
        orphan_profile_exists = await hass.async_add_executor_job(
            _personal_profile_path(hass, target_user_id).exists
        )
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
    if (
        not await hass.async_add_executor_job(path.exists)
        and hass.data[DOMAIN][CONF_CREATE_IF_MISSING]
    ):
        await hass.async_add_executor_job(atomic_write_text, path, DEFAULT_CONFIG_YAML)


def _profiles_path(hass: HomeAssistant) -> Path:
    return Path(hass.data[DOMAIN][CONF_PROFILES_PATH])


def _personal_profile_path(hass: HomeAssistant, user_id: str) -> Path:
    return profile_path(_profiles_path(hass), user_id)


async def _async_effective_profile_path(
    hass: HomeAssistant, user_id: str
) -> tuple[Path, str]:
    personal = _personal_profile_path(hass, user_id)
    personal_exists = await hass.async_add_executor_job(personal.exists)
    return (personal, "user") if personal_exists else (_path(hass), "shared")


def _profile_metadata(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    user_id: str,
    metadata: dict[str, Any],
    profile_exists: bool,
) -> dict[str, Any]:
    effective = Path(metadata.pop("effective_path"))
    source = "user" if profile_exists else "shared"
    can_write = hass.data[DOMAIN][CONF_ALLOW_WRITE] and (
        connection.user.is_admin or hass.data[DOMAIN][CONF_ALLOW_USER_WRITE]
    )
    return {
        "available": True,
        "allow_write": can_write,
        "allow_user_write": hass.data[DOMAIN][CONF_ALLOW_USER_WRITE],
        "allow_preference_write": hass.data[DOMAIN][CONF_ALLOW_PREFERENCE_WRITE],
        "user_id": user_id,
        "profile_exists": profile_exists,
        "profile_backup_exists": metadata.pop("profile_backup_exists"),
        "profile_backup_revision": metadata.pop("profile_backup_revision"),
        "source": source,
        "inherited": source == "shared",
        "schema_version": SCHEMA_VERSION,
        "warnings": [],
        "stale": False,
        "capabilities": _capabilities(connection),
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


async def _notify_shared_profile_subscribers(
    hass: HomeAssistant, exclude_connection: websocket_api.ActiveConnection
) -> None:
    """Notify subscribed users who currently inherit the shared configuration."""
    for user_id in list(hass.data[DOMAIN][PROFILE_SUBSCRIBERS]):
        if await hass.async_add_executor_job(
            _personal_profile_path(hass, user_id).exists
        ):
            continue
        metadata = await _async_profile_metadata(hass, exclude_connection, user_id)
        _notify_profile_subscribers(
            hass,
            user_id,
            metadata,
            exclude_connection=exclude_connection,
        )


def _notify_config_subscribers(
    hass: HomeAssistant,
    metadata: dict[str, Any],
    exclude_connection: websocket_api.ActiveConnection | None = None,
) -> None:
    """Notify connected shared-config editors."""
    subscribers = hass.data[DOMAIN][CONFIG_SUBSCRIBERS]
    for (_connection_id, subscription_id), connection in list(subscribers.items()):
        if connection is exclude_connection:
            continue
        connection.send_event(subscription_id, metadata)


def _path(hass: HomeAssistant) -> Path:
    return Path(hass.data[DOMAIN][CONF_CONFIG_PATH])


def _metadata(hass: HomeAssistant, metadata: dict[str, Any]) -> dict[str, Any]:
    settings = hass.data[DOMAIN]
    return {
        "available": True,
        "schema_version": SCHEMA_VERSION,
        "source": "shared",
        "inherited": False,
        "warnings": [],
        "stale": False,
        "config_path": settings[CONF_CONFIG_PATH],
        "profiles_path": settings[CONF_PROFILES_PATH],
        "allow_write": settings[CONF_ALLOW_WRITE],
        "allow_user_write": settings[CONF_ALLOW_USER_WRITE],
        "allow_preference_write": settings[CONF_ALLOW_PREFERENCE_WRITE],
        "create_if_missing": settings[CONF_CREATE_IF_MISSING],
        **metadata,
    }


async def _async_metadata(hass: HomeAssistant) -> dict[str, Any]:
    metadata = await hass.async_add_executor_job(file_metadata_with_backup, _path(hass))
    return _metadata(hass, metadata)


async def _async_profile_metadata(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    user_id: str,
) -> dict[str, Any]:
    personal = _personal_profile_path(hass, user_id)
    shared = _path(hass)

    def collect() -> tuple[dict[str, Any], bool]:
        profile_exists = personal.exists()
        effective = personal if profile_exists else shared
        metadata = file_metadata_with_backup(effective)
        personal_backup = personal.with_suffix(f"{personal.suffix}.bak")
        metadata["profile_backup_exists"] = personal_backup.is_file()
        metadata["profile_backup_revision"] = (
            file_revision(personal_backup) if personal_backup.is_file() else None
        )
        metadata["effective_path"] = str(effective)
        return metadata, profile_exists

    metadata, profile_exists = await hass.async_add_executor_job(collect)
    return _profile_metadata(hass, connection, user_id, metadata, profile_exists)


def _capabilities(connection: websocket_api.ActiveConnection) -> dict[str, bool]:
    return {
        "admin_manage_users": connection.user.is_admin,
        "optimistic_writes": True,
        "preferences_sync": True,
        "subscriptions": True,
        "backups": True,
    }


def _collect_watch_state(hass: HomeAssistant) -> dict[str, str | None]:
    """Collect revisions off the event loop for the shared file and profiles."""
    shared = _path(hass)
    profiles = _profiles_path(hass)
    paths = [shared]
    if profiles.exists():
        paths.extend(
            path
            for path in profiles.glob("*.yaml")
            if path.is_file() and not path.name.endswith(".yaml.bak")
        )
    return {str(path): file_metadata(path)["revision"] for path in paths}


async def async_start_config_watcher(hass: HomeAssistant) -> Callable[[], None]:
    """Start one backend watcher for manual YAML edits and return its disposer."""
    hass.data[DOMAIN][CONFIG_WATCH_STATE] = await hass.async_add_executor_job(
        _collect_watch_state, hass
    )

    checking = False

    async def check_for_changes(_now: Any) -> None:
        nonlocal checking
        if checking:
            return
        checking = True
        try:
            await _async_check_for_changes(hass)
        finally:
            checking = False

    return async_track_time_interval(hass, check_for_changes, timedelta(seconds=5))


async def _async_check_for_changes(hass: HomeAssistant) -> None:
    """Publish changes discovered by the central filesystem watcher."""
    settings = hass.data.get(DOMAIN)
    if not settings:
        return
    previous = settings.get(CONFIG_WATCH_STATE, {})
    current = await hass.async_add_executor_job(_collect_watch_state, hass)
    if current == previous:
        return
    settings[CONFIG_WATCH_STATE] = current

    shared_key = str(_path(hass))
    shared_changed = previous.get(shared_key) != current.get(shared_key)
    if shared_changed:
        _notify_config_subscribers(hass, await _async_metadata(hass))

    for user_id, subscribers in list(settings[PROFILE_SUBSCRIBERS].items()):
        personal_key = str(_personal_profile_path(hass, user_id))
        profile_changed = previous.get(personal_key) != current.get(personal_key)
        inherits_shared = personal_key not in current
        if not profile_changed and not (shared_changed and inherits_shared):
            continue
        for (_connection_id, subscription_id), connection in list(subscribers.items()):
            connection.send_event(
                subscription_id,
                await _async_profile_metadata(hass, connection, user_id),
            )


async def _async_refresh_watch_state(hass: HomeAssistant, changed_path: Path) -> None:
    """Record one published mutation without absorbing unrelated file changes."""
    settings = hass.data.get(DOMAIN)
    if settings is None:
        return
    changed = await hass.async_add_executor_job(
        lambda: {str(changed_path): file_metadata(changed_path)["revision"]}
    )
    settings[CONFIG_WATCH_STATE] = merge_watch_revisions(
        settings.get(CONFIG_WATCH_STATE, {}),
        changed,
        {str(_path(hass))},
    )


async def _async_restore_backup(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
    target: Path,
    label: str,
) -> bool:
    """Validate and restore one adjacent YAML backup under the write lock."""
    backup = target.with_suffix(f"{target.suffix}.bak")
    lock = hass.data[DOMAIN][PROFILE_LOCK]
    async with lock:
        current = await hass.async_add_executor_job(file_metadata, target)
        if "expected_revision" in msg and has_revision_conflict(
            msg["expected_revision"], current["revision"]
        ):
            connection.send_error(
                msg["id"],
                "revision_conflict",
                f"The {label} changed after it was loaded.",
            )
            return False
        if not await hass.async_add_executor_job(backup.is_file):
            connection.send_error(
                msg["id"], "backup_missing", f"No previous {label} is available."
            )
            return False
        yaml_text = await hass.async_add_executor_job(backup.read_text, "utf-8")
        if len(yaml_text.encode("utf-8")) > MAX_CONFIG_YAML_BYTES:
            connection.send_error(
                msg["id"], "backup_too_large", f"The previous {label} exceeds 512 KiB."
            )
            return False
        validation = await hass.async_add_executor_job(validate_yaml_config, yaml_text)
        if not validation["valid"]:
            connection.send_error(
                msg["id"], "invalid_backup", f"The previous {label} is invalid."
            )
            return False
        await hass.async_add_executor_job(atomic_write_with_backup, target, yaml_text)
        await _async_refresh_watch_state(hass, target)
    return True
