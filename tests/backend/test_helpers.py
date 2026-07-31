import os
import sys
import tempfile
import unittest
import importlib.util
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT))

HELPERS_PATH = ROOT / "custom_components" / "sidebar_organizer" / "helpers.py"
SPEC = importlib.util.spec_from_file_location("sidebar_organizer_helpers", HELPERS_PATH)
assert SPEC and SPEC.loader
helpers = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(helpers)

atomic_write_text = helpers.atomic_write_text
atomic_write_with_backup = helpers.atomic_write_with_backup
resolve_config_path = helpers.resolve_config_path
validate_yaml_config = helpers.validate_yaml_config
frontend_module_url = helpers.frontend_module_url
file_revision = helpers.file_revision
file_metadata = getattr(helpers, "file_metadata", None)
normalize_options = getattr(helpers, "normalize_options", None)
profile_path = getattr(helpers, "profile_path", None)
resolve_profiles_path = getattr(helpers, "resolve_profiles_path", None)
preferences_path = getattr(helpers, "preferences_path", None)
read_preferences = getattr(helpers, "read_preferences", None)
write_preferences = getattr(helpers, "write_preferences", None)
validate_config_object = getattr(helpers, "validate_config_object", None)
has_revision_conflict = getattr(helpers, "has_revision_conflict", None)
merge_watch_revisions = getattr(helpers, "merge_watch_revisions", None)


class SidebarOrganizerBackendHelpersTest(unittest.TestCase):
    def test_merge_watch_revisions_preserves_unrelated_pending_changes(self) -> None:
        previous = {
            "/config/sidebar-organizer.yaml": "shared-old",
            "/config/profiles/one.yaml": "one-old",
            "/config/profiles/two.yaml": "two-old",
        }

        merged = merge_watch_revisions(
            previous,
            {"/config/profiles/one.yaml": "one-new"},
            {"/config/sidebar-organizer.yaml"},
        )

        self.assertEqual(merged["/config/profiles/one.yaml"], "one-new")
        self.assertEqual(merged["/config/profiles/two.yaml"], "two-old")

    def test_merge_watch_revisions_removes_deleted_optional_path(self) -> None:
        merged = merge_watch_revisions(
            {"/config/profiles/one.yaml": "one-old"},
            {"/config/profiles/one.yaml": None},
        )

        self.assertNotIn("/config/profiles/one.yaml", merged)

    def test_revision_conflict_detects_stale_and_first_writes(self) -> None:
        self.assertFalse(has_revision_conflict("same", "same"))
        self.assertFalse(has_revision_conflict(None, None))
        self.assertTrue(has_revision_conflict("old", "new"))
        self.assertTrue(has_revision_conflict(None, "existing"))
    def test_shared_schema_fixtures(self) -> None:
        fixtures_path = ROOT / "tests" / "fixtures" / "config-validation.json"
        fixtures = json.loads(fixtures_path.read_text("utf-8"))
        for fixture in fixtures:
            with self.subTest(fixture["name"]):
                errors = validate_config_object(fixture["config"])
                self.assertEqual(not errors, fixture["valid"], errors)
                if fixture.get("error"):
                    self.assertIn(fixture["error"], errors)

    def test_normalize_options_uses_defaults(self) -> None:
        options = normalize_options({})

        self.assertEqual(options["config_path"], "sidebar-organizer.yaml")
        self.assertEqual(options["profiles_path"], "sidebar-organizer-profiles")
        self.assertEqual(options["allow_write"], True)
        self.assertEqual(options["allow_user_write"], False)
        self.assertEqual(options["create_if_missing"], True)

    def test_normalize_options_preserves_explicit_values(self) -> None:
        options = normalize_options(
            {
                "config_path": "configs/sidebar-organizer.yaml",
                "profiles_path": "configs/sidebar-organizer-profiles",
                "allow_write": False,
                "allow_user_write": True,
                "create_if_missing": False,
            }
        )

        self.assertEqual(options["config_path"], "configs/sidebar-organizer.yaml")
        self.assertEqual(options["allow_write"], False)
        self.assertEqual(options["allow_user_write"], True)
        self.assertEqual(options["create_if_missing"], False)

    def test_resolve_config_path_accepts_relative_path_inside_config(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            resolved = resolve_config_path(tmpdir, "configs/sidebar-organizer.yaml")

        self.assertTrue(
            str(resolved).endswith(os.path.join("configs", "sidebar-organizer.yaml"))
        )

    def test_resolve_config_path_rejects_traversal(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            with self.assertRaises(ValueError):
                resolve_config_path(tmpdir, "../secrets.yaml")

    def test_resolve_config_path_rejects_absolute_path_outside_config(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            with self.assertRaises(ValueError):
                resolve_config_path(tmpdir, "/etc/passwd")

    def test_resolve_profiles_path_stays_inside_config(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            resolved = resolve_profiles_path(tmpdir, "sidebar-organizer-profiles")
            self.assertEqual(resolved.parent, Path(tmpdir).resolve())

            with self.assertRaises(ValueError):
                resolve_profiles_path(tmpdir, "../profiles")

    def test_profile_path_uses_safe_stable_user_id(self) -> None:
        profiles_dir = Path("/config/sidebar-organizer-profiles")
        self.assertEqual(
            profile_path(profiles_dir, "abc_123"), profiles_dir / "abc_123.yaml"
        )
        with self.assertRaises(ValueError):
            profile_path(profiles_dir, "../secrets")

    def test_validate_yaml_config_accepts_minimal_valid_config(self) -> None:
        result = validate_yaml_config(
            """
bottom_items:
  - energy
custom_groups:
  Security:
    - alarm
default_collapsed: []
"""
        )

        self.assertTrue(result["valid"])
        self.assertEqual(result["errors"], [])

    def test_validate_yaml_config_rejects_wrong_shapes(self) -> None:
        result = validate_yaml_config(
            """
bottom_items: energy
custom_groups:
  Security: alarm
default_collapsed: {}
"""
        )

        self.assertFalse(result["valid"])
        self.assertGreaterEqual(len(result["errors"]), 3)

    def test_validate_yaml_config_validates_additional_known_lists(self) -> None:
        result = validate_yaml_config("bottom_grid_items: config\nhidden_items: {}\n")

        self.assertFalse(result["valid"])
        self.assertIn("bottom_grid_items must be a list of strings.", result["errors"])
        self.assertIn("hidden_items must be a list of strings.", result["errors"])

    def test_atomic_write_text_replaces_target(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            target = Path(tmpdir) / "sidebar-organizer.yaml"

            atomic_write_text(target, "bottom_items: []\n")

            self.assertEqual(target.read_text(encoding="utf-8"), "bottom_items: []\n")

    def test_atomic_write_with_backup_keeps_previous_version(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            target = Path(tmpdir) / "sidebar-organizer.yaml"
            atomic_write_text(target, "header_title: First\n")
            atomic_write_with_backup(target, "header_title: Second\n")

            self.assertEqual(target.read_text("utf-8"), "header_title: Second\n")
            self.assertEqual(
                target.with_suffix(".yaml.bak").read_text("utf-8"),
                "header_title: First\n",
            )

    def test_preferences_round_trip_and_validation(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            path = preferences_path(Path(tmpdir), "user-one")
            self.assertEqual(read_preferences(path), {"collapsed_groups": []})
            write_preferences(
                path,
                {"collapsed_groups": ["Rooms"], "known_groups": ["Rooms", "Admin"]},
            )
            self.assertEqual(
                read_preferences(path),
                {"collapsed_groups": ["Rooms"], "known_groups": ["Rooms", "Admin"]},
            )
            with self.assertRaises(ValueError):
                write_preferences(path, {"collapsed_groups": "Rooms"})
            with self.assertRaises(ValueError):
                write_preferences(
                    path, {"collapsed_groups": ["Rooms"], "known_groups": "Rooms"}
                )

    def test_frontend_module_url_includes_version_cache_buster(self) -> None:
        self.assertEqual(
            frontend_module_url("4.1.1"),
            "/sidebar_organizer/frontend/sidebar-organizer.js?v=4.1.1",
        )

    def test_file_revision_changes_with_content(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            path = Path(tmpdir) / "sidebar-organizer.js"
            path.write_text("first", encoding="utf-8")
            first = file_revision(path)
            path.write_text("second", encoding="utf-8")

            self.assertNotEqual(first, file_revision(path))
            self.assertEqual(len(first), 64)

    def test_file_metadata_reports_missing_file(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            path = Path(tmpdir) / "missing.yaml"

            metadata = file_metadata(path)

        self.assertEqual(metadata["exists"], False)
        self.assertIsNone(metadata["last_modified"])
        self.assertIsNone(metadata["size"])
        self.assertIsNone(metadata["revision"])

    def test_file_metadata_revision_changes_with_content(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            path = Path(tmpdir) / "profile.yaml"
            path.write_text("bottom_items: []\n", encoding="utf-8")
            first = file_metadata(path)
            path.write_text("bottom_items:\n  - energy\n", encoding="utf-8")
            second = file_metadata(path)

        self.assertNotEqual(first["revision"], second["revision"])


if __name__ == "__main__":
    unittest.main()
