"""Constants for Sidebar Organizer."""

DOMAIN = "sidebar_organizer"

CONF_ALLOW_WRITE = "allow_write"
CONF_ALLOW_USER_WRITE = "allow_user_write"
CONF_CONFIG_PATH = "config_path"
CONF_CREATE_IF_MISSING = "create_if_missing"
CONF_PROFILES_PATH = "profiles_path"

DEFAULT_ALLOW_WRITE = True
DEFAULT_ALLOW_USER_WRITE = False
DEFAULT_CONFIG_PATH = "sidebar-organizer.yaml"
DEFAULT_CREATE_IF_MISSING = True
DEFAULT_PROFILES_PATH = "sidebar-organizer-profiles"

PROFILE_LOCK = f"{DOMAIN}_profile_lock"
PROFILE_SUBSCRIBERS = f"{DOMAIN}_profile_subscribers"

FRONTEND_JS = "sidebar-organizer.js"
FRONTEND_VERSION = "4.3.2"
FRONTEND_URL_BASE = f"/{DOMAIN}/frontend"
FRONTEND_URL_KEY = f"{DOMAIN}_frontend_url"
