"""Constants for Sidebar Organizer."""

DOMAIN = "sidebar_organizer"

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

PROFILE_LOCK = f"{DOMAIN}_profile_lock"
PROFILE_SUBSCRIBERS = f"{DOMAIN}_profile_subscribers"
CONFIG_SUBSCRIBERS = f"{DOMAIN}_config_subscribers"
CONFIG_WATCH_STATE = f"{DOMAIN}_config_watch_state"
CONFIG_WATCH_UNSUB = f"{DOMAIN}_config_watch_unsub"

SCHEMA_VERSION = 1
MAX_CONFIG_YAML_BYTES = 512 * 1024

FRONTEND_JS = "sidebar-organizer.js"
FRONTEND_VERSION = "4.6.2"
FRONTEND_URL_BASE = f"/{DOMAIN}/frontend"
FRONTEND_URL_KEY = f"{DOMAIN}_frontend_url"
