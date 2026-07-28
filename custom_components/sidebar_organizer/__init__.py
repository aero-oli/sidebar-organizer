"""Sidebar Organizer backend integration."""

from __future__ import annotations

import asyncio
import logging
from pathlib import Path
from typing import Any

import voluptuous as vol
from homeassistant.components import frontend
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers import config_validation as cv

from .const import (
    CONF_ALLOW_WRITE,
    CONF_ALLOW_USER_WRITE,
    CONF_CONFIG_PATH,
    CONF_CREATE_IF_MISSING,
    CONF_PROFILES_PATH,
    DEFAULT_ALLOW_WRITE,
    DEFAULT_ALLOW_USER_WRITE,
    DEFAULT_CONFIG_PATH,
    DEFAULT_CREATE_IF_MISSING,
    DEFAULT_PROFILES_PATH,
    DOMAIN,
    FRONTEND_JS,
    FRONTEND_URL_BASE,
    FRONTEND_URL_KEY,
    FRONTEND_VERSION,
    PROFILE_LOCK,
    PROFILE_SUBSCRIBERS,
)
from .helpers import (
    DEFAULT_CONFIG_YAML,
    atomic_write_text,
    file_revision,
    frontend_module_url,
    normalize_options,
    resolve_config_path,
    resolve_profiles_path,
)
from .websocket_api import async_register_websocket_commands

_LOGGER = logging.getLogger(__name__)

FRONTEND_REGISTERED = f"{DOMAIN}_frontend_registered"

CONFIG_SCHEMA = vol.Schema(
    {
        DOMAIN: vol.Schema(
            {
                vol.Optional(CONF_CONFIG_PATH, default=DEFAULT_CONFIG_PATH): cv.string,
                vol.Optional(
                    CONF_PROFILES_PATH, default=DEFAULT_PROFILES_PATH
                ): cv.string,
                vol.Optional(CONF_ALLOW_WRITE, default=DEFAULT_ALLOW_WRITE): cv.boolean,
                vol.Optional(
                    CONF_ALLOW_USER_WRITE, default=DEFAULT_ALLOW_USER_WRITE
                ): cv.boolean,
                vol.Optional(
                    CONF_CREATE_IF_MISSING, default=DEFAULT_CREATE_IF_MISSING
                ): cv.boolean,
            }
        )
    },
    extra=vol.ALLOW_EXTRA,
)


async def async_setup(hass: HomeAssistant, config: dict[str, Any]) -> bool:
    """Set up YAML import for Sidebar Organizer."""
    if DOMAIN in config:
        hass.async_create_task(
            hass.config_entries.flow.async_init(
                DOMAIN,
                context={"source": "import"},
                data=config.get(DOMAIN, {}),
            )
        )
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Sidebar Organizer from a config entry."""
    entry.async_on_unload(entry.add_update_listener(_async_options_updated))
    return await _async_setup_from_options(hass, normalize_options(dict(entry.options)))


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload Sidebar Organizer config entry."""
    hass.data.pop(DOMAIN, None)
    return True


async def _async_options_updated(hass: HomeAssistant, entry: ConfigEntry) -> None:
    """Reload Sidebar Organizer when options change."""
    await hass.config_entries.async_reload(entry.entry_id)


async def _async_setup_from_options(
    hass: HomeAssistant, options: dict[str, Any]
) -> bool:
    """Set up Sidebar Organizer runtime from normalized options."""
    config_path = options[CONF_CONFIG_PATH]
    allow_write = options[CONF_ALLOW_WRITE]
    allow_user_write = options[CONF_ALLOW_USER_WRITE]
    create_if_missing = options[CONF_CREATE_IF_MISSING]
    profiles_path = options[CONF_PROFILES_PATH]

    try:
        resolved_path = resolve_config_path(hass.config.path(), config_path)
        resolved_profiles_path = resolve_profiles_path(
            hass.config.path(), profiles_path
        )
    except ValueError as err:
        _LOGGER.error("Invalid Sidebar Organizer storage path: %s", err)
        return False

    hass.data[DOMAIN] = {
        CONF_CONFIG_PATH: str(resolved_path),
        CONF_PROFILES_PATH: str(resolved_profiles_path),
        CONF_ALLOW_WRITE: allow_write,
        CONF_ALLOW_USER_WRITE: allow_user_write,
        CONF_CREATE_IF_MISSING: create_if_missing,
        PROFILE_LOCK: asyncio.Lock(),
        PROFILE_SUBSCRIBERS: {},
    }

    if not resolved_path.exists() and create_if_missing:
        await hass.async_add_executor_job(
            atomic_write_text, resolved_path, DEFAULT_CONFIG_YAML
        )

    await _async_register_frontend(hass)
    async_register_websocket_commands(hass)
    return True


async def _async_register_frontend(hass: HomeAssistant) -> None:
    """Serve and load the bundled Sidebar Organizer frontend module."""
    if hass.data.get(FRONTEND_REGISTERED):
        return

    frontend_dir = Path(__file__).parent / "frontend"
    frontend_file = frontend_dir / FRONTEND_JS
    if not frontend_file.exists():
        _LOGGER.error("Sidebar Organizer frontend file is missing: %s", frontend_file)
        return

    hass.data[FRONTEND_REGISTERED] = True
    await hass.http.async_register_static_paths(
        [StaticPathConfig(FRONTEND_URL_BASE, str(frontend_dir), True)]
    )
    frontend_revision = await hass.async_add_executor_job(file_revision, frontend_file)
    module_url = frontend_module_url(f"{FRONTEND_VERSION}-{frontend_revision[:12]}")
    hass.data[FRONTEND_URL_KEY] = module_url
    frontend.add_extra_js_url(hass, module_url)
