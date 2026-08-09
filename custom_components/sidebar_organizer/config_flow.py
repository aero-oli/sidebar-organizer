"""Config flow for Sidebar Organizer."""

from __future__ import annotations

from typing import Any

import voluptuous as vol
from homeassistant import config_entries
from homeassistant.core import callback

from .const import (
    CONF_ALLOW_WRITE,
    CONF_ALLOW_USER_WRITE,
    CONF_ALLOW_PREFERENCE_WRITE,
    CONF_CONFIG_PATH,
    CONF_CREATE_IF_MISSING,
    CONF_PROFILES_PATH,
    DOMAIN,
)
from .helpers import normalize_options, prepare_storage_paths, validate_storage_paths


async def _async_validate_paths(hass, values: dict[str, Any]) -> None:
    """Validate path relationships and on-disk storage without blocking Core."""
    config_path, profiles_path = validate_storage_paths(
        hass.config.path(),
        values[CONF_CONFIG_PATH],
        values[CONF_PROFILES_PATH],
    )
    await hass.async_add_executor_job(prepare_storage_paths, config_path, profiles_path)


def _options_schema(defaults: dict[str, Any]) -> vol.Schema:
    return vol.Schema(
        {
            vol.Required(CONF_CONFIG_PATH, default=defaults[CONF_CONFIG_PATH]): str,
            vol.Required(CONF_PROFILES_PATH, default=defaults[CONF_PROFILES_PATH]): str,
            vol.Required(CONF_ALLOW_WRITE, default=defaults[CONF_ALLOW_WRITE]): bool,
            vol.Required(
                CONF_ALLOW_USER_WRITE, default=defaults[CONF_ALLOW_USER_WRITE]
            ): bool,
            vol.Required(
                CONF_ALLOW_PREFERENCE_WRITE,
                default=defaults[CONF_ALLOW_PREFERENCE_WRITE],
            ): bool,
            vol.Required(
                CONF_CREATE_IF_MISSING, default=defaults[CONF_CREATE_IF_MISSING]
            ): bool,
        }
    )


class SidebarOrganizerConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Handle a config flow for Sidebar Organizer."""

    VERSION = 1

    async def async_step_user(self, user_input: dict[str, Any] | None = None):
        """Handle manual setup."""
        await self.async_set_unique_id(DOMAIN)
        self._abort_if_unique_id_configured()

        defaults = normalize_options(user_input)
        errors: dict[str, str] = {}

        if user_input is not None:
            try:
                await _async_validate_paths(self.hass, user_input)
            except (OSError, ValueError):
                errors["base"] = "invalid_path"
            else:
                return self.async_create_entry(
                    title="Sidebar Organizer",
                    data={},
                    options=normalize_options(user_input),
                )

        return self.async_show_form(
            step_id="user",
            data_schema=_options_schema(defaults),
            errors=errors,
        )

    async def async_step_import(self, import_config: dict[str, Any]):
        """Import YAML configuration."""
        await self.async_set_unique_id(DOMAIN)
        options = normalize_options(import_config)
        try:
            await _async_validate_paths(self.hass, options)
        except (OSError, ValueError):
            return self.async_abort(reason="invalid_path")
        existing_entries = self._async_current_entries()
        if existing_entries:
            self.hass.config_entries.async_update_entry(
                existing_entries[0], options=options
            )
            return self.async_abort(reason="yaml_updated")
        return self.async_create_entry(
            title="Sidebar Organizer",
            data={},
            options=options,
        )

    @staticmethod
    @callback
    def async_get_options_flow(config_entry: config_entries.ConfigEntry):
        """Return the options flow."""
        return SidebarOrganizerOptionsFlow()


class SidebarOrganizerOptionsFlow(config_entries.OptionsFlow):
    """Handle Sidebar Organizer options."""

    async def async_step_init(self, user_input: dict[str, Any] | None = None):
        """Manage options."""
        defaults = normalize_options(dict(self.config_entry.options))
        errors: dict[str, str] = {}

        if user_input is not None:
            try:
                await _async_validate_paths(self.hass, user_input)
            except (OSError, ValueError):
                errors["base"] = "invalid_path"
            else:
                return self.async_create_entry(
                    title="", data=normalize_options(user_input)
                )

        return self.async_show_form(
            step_id="init",
            data_schema=_options_schema(defaults),
            errors=errors,
        )
