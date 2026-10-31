"""Exercise backend command bodies with real files, YAML and schema dependencies.

Only Home Assistant's registration/decorator surfaces are stubbed; production
handlers and storage helpers are imported without copying their implementation.
"""

import asyncio
import hashlib
import importlib.util
import sys
import tempfile
import types
import unittest
from pathlib import Path
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[2]
PACKAGE = "sidebar_organizer_command_tests"
package = types.ModuleType(PACKAGE)
package.__path__ = [str(ROOT / "custom_components" / "sidebar_organizer")]
ha = types.ModuleType("homeassistant")
components = types.ModuleType("homeassistant.components")
websocket = types.ModuleType("homeassistant.components.websocket_api")
websocket.websocket_command = lambda schema: lambda fn: fn
websocket.async_response = lambda fn: fn
websocket.require_admin = lambda fn: fn
components.websocket_api = websocket
core = types.ModuleType("homeassistant.core")
core.HomeAssistant = object
core.callback = lambda fn: fn
events = types.ModuleType("homeassistant.helpers.event")
events.async_track_time_interval = lambda *args: lambda: None
with patch.dict(
    sys.modules,
    {
        PACKAGE: package,
        "homeassistant": ha,
        "homeassistant.components": components,
        "homeassistant.components.websocket_api": websocket,
        "homeassistant.core": core,
        "homeassistant.helpers": types.ModuleType("homeassistant.helpers"),
        "homeassistant.helpers.event": events,
    },
):
    spec = importlib.util.spec_from_file_location(
        f"{PACKAGE}.websocket_api", Path(package.__path__[0]) / "websocket_api.py"
    )
    api = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(api)
    helpers = sys.modules[f"{PACKAGE}.helpers"]


def revision(text):
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


class Connection:
    def __init__(self, user_id="user", admin=False):
        self.user = types.SimpleNamespace(id=user_id, is_admin=admin)
        self.results = []
        self.errors = []
        self.events = []
        self.subscriptions = {}

    def send_result(self, msg_id, result=None):
        self.results.append(result)

    def send_error(self, msg_id, code, message):
        self.errors.append(code)

    def send_event(self, subscription_id, data):
        self.events.append(data)


class Hass:
    def __init__(self, config, profiles):
        self.data = {
            api.DOMAIN: {
                api.CONF_CONFIG_PATH: str(config),
                api.CONF_PROFILES_PATH: str(profiles),
                api.CONF_ALLOW_WRITE: True,
                api.CONF_ALLOW_USER_WRITE: False,
                api.CONF_ALLOW_PREFERENCE_WRITE: True,
                api.CONF_CREATE_IF_MISSING: False,
                api.PROFILE_LOCK: asyncio.Lock(),
                api.PROFILE_SUBSCRIBERS: {},
                api.CONFIG_SUBSCRIBERS: {},
            }
        }
        self.auth = types.SimpleNamespace(async_get_user=self.get_user)
        self.after_job = None

    async def get_user(self, user_id):
        return types.SimpleNamespace(id=user_id)

    async def async_add_executor_job(self, fn, *args):
        result = fn(*args)
        if self.after_job:
            self.after_job(fn, args)
        await asyncio.sleep(0)
        return result


class WebsocketSnapshotTests(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.config = Path(self.tmp.name) / "shared.yaml"
        self.profiles = Path(self.tmp.name) / "profiles"
        self.profiles.mkdir()
        self.old = "header_title: Old\n"
        self.new = "header_title: New\n"
        self.config.write_text(self.old)
        self.hass = Hass(self.config, self.profiles)
        self.admin = Connection(admin=True)

    def replace_after(self, job, target, replacement):
        def hook(fn, args):
            if fn is job:
                self.hass.after_job = None
                helpers.atomic_write_text(target, replacement)

        self.hass.after_job = hook

    async def test_shared_read_revision_matches_returned_yaml_and_rejects_stale_save(
        self,
    ):
        self.replace_after(helpers.read_text_with_metadata, self.config, self.new)
        await api.websocket_read(self.hass, self.admin, {"id": 1})
        result = self.admin.results[-1]
        self.assertEqual(result["yaml"], self.old)
        self.assertEqual(result["revision"], revision(self.old))
        await api.websocket_write(
            self.hass,
            self.admin,
            {
                "id": 2,
                "yaml": self.old,
                "expected_revision": result["revision"],
            },
        )
        self.assertEqual(self.admin.errors, ["revision_conflict"])
        self.assertEqual(self.config.read_text(), self.new)

    async def test_profile_reads_preserve_snapshot_and_source(self):
        for personal in [False, True]:
            with self.subTest(personal=personal):
                path = self.profiles / "user.yaml" if personal else self.config
                path.write_text(self.old)
                self.replace_after(helpers.read_text_with_metadata, path, self.new)
                await api.websocket_profile_read(self.hass, self.admin, {"id": 1})
                result = self.admin.results[-1]
                self.assertEqual(result["revision"], revision(result["yaml"]))
                self.assertEqual(result["source"], "user" if personal else "shared")
                await api.websocket_profile_write(
                    self.hass,
                    self.admin,
                    {
                        "id": 2,
                        "yaml": self.old,
                        "expected_revision": result["revision"],
                    },
                )
                self.assertEqual(self.admin.errors[-1], "revision_conflict")

    async def test_preferences_read_revision_matches_returned_contents(self):
        path = self.profiles / "user.preferences.json"
        old = '{"collapsed_groups": ["Old"]}\n'
        new = '{"collapsed_groups": ["New"]}\n'
        path.write_text(old)
        self.replace_after(helpers.read_preferences_with_metadata, path, new)
        await api.websocket_preferences_read(self.hass, self.admin, {"id": 1})
        result = self.admin.results[-1]
        self.assertEqual(result["preferences"]["collapsed_groups"], ["Old"])
        self.assertEqual(result["revision"], revision(old))
        await api.websocket_preferences_write(
            self.hass,
            self.admin,
            {
                "id": 2,
                "preferences": {"collapsed_groups": ["Old"]},
                "expected_revision": result["revision"],
            },
        )
        self.assertEqual(self.admin.errors, ["revision_conflict"])

    async def test_yaml_write_and_restore_responses_keep_written_revision(self):
        cases = [
            (api.websocket_write, self.config, False),
            (api.websocket_profile_write, self.profiles / "user.yaml", False),
            (api.websocket_restore, self.config, True),
            (api.websocket_profile_restore, self.profiles / "user.yaml", True),
            (api.websocket_profile_copy, self.profiles / "user.yaml", False),
        ]
        for command, target, restore in cases:
            with self.subTest(command=command.__name__):
                self.config.write_text(self.old)
                target.write_text(self.old)
                target.with_suffix(".yaml.bak").write_text(self.old)
                self.replace_after(helpers.atomic_write_with_backup, target, self.new)
                msg = {
                    "id": 1,
                    "yaml": self.old,
                    "source": "shared",
                    "target_user_id": "user",
                }
                await command(self.hass, self.admin, msg)
                self.assertEqual(self.admin.results[-1]["revision"], revision(self.old))
                self.assertEqual(target.read_text(), self.new)
                if restore:
                    self.assertEqual(
                        target.with_suffix(".yaml.bak").read_text(), self.old
                    )

    async def test_preferences_write_response_keeps_saved_contents_and_revision(self):
        path = self.profiles / "user.preferences.json"
        self.replace_after(
            helpers.write_preferences, path, '{"collapsed_groups": ["New"]}'
        )
        payload = {"collapsed_groups": ["Old"], "sync_collapsed_groups": True}
        await api.websocket_preferences_write(
            self.hass,
            self.admin,
            {
                "id": 1,
                "preferences": payload,
            },
        )
        result = self.admin.results[-1]
        self.assertEqual(result["preferences"], payload)
        import json

        self.assertEqual(
            result["revision"], revision(json.dumps(payload, indent=2) + "\n")
        )

    async def test_shared_notifications_use_receiving_users_permissions(self):
        user = Connection()
        self.hass.data[api.DOMAIN][api.PROFILE_SUBSCRIBERS]["user"] = {
            (id(user), 1): user
        }
        await api.websocket_write(self.hass, self.admin, {"id": 1, "yaml": self.new})
        self.assertFalse(user.events[-1]["allow_write"])
        self.assertFalse(user.events[-1]["capabilities"]["admin_manage_users"])

    async def test_personal_notifications_use_each_receivers_permissions(self):
        user = Connection()
        self.hass.data[api.DOMAIN][api.CONF_ALLOW_USER_WRITE] = True
        self.hass.data[api.DOMAIN][api.PROFILE_SUBSCRIBERS]["user"] = {
            (id(self.admin), 1): self.admin,
        }
        await api.websocket_profile_write(self.hass, user, {"id": 1, "yaml": self.new})
        self.assertTrue(self.admin.events[-1]["capabilities"]["admin_manage_users"])

    async def test_real_yaml_parser_handles_flow_collections_and_quoted_scalars(self):
        result = helpers.validate_yaml_config(
            'custom_groups: {"On": [energy]}\nheader_title: "yes"\n'
        )
        self.assertTrue(result["valid"], result["errors"])
        self.assertEqual(result["parsed"]["custom_groups"], {"On": ["energy"]})
