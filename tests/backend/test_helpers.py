import os
import sys
import tempfile
import unittest
import importlib.util
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT))

HELPERS_PATH = ROOT / "custom_components" / "sidebar_organizer" / "helpers.py"
SPEC = importlib.util.spec_from_file_location("sidebar_organizer_helpers", HELPERS_PATH)
assert SPEC and SPEC.loader
helpers = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(helpers)

atomic_write_text = helpers.atomic_write_text
resolve_config_path = helpers.resolve_config_path
validate_yaml_config = helpers.validate_yaml_config
frontend_module_url = helpers.frontend_module_url
file_metadata = getattr(helpers, "file_metadata", None)
normalize_options = getattr(helpers, "normalize_options", None)


class SidebarOrganizerBackendHelpersTest(unittest.TestCase):
    def test_normalize_options_uses_defaults(self) -> None:
        options = normalize_options({})

        self.assertEqual(options["config_path"], "sidebar-organizer.yaml")
        self.assertEqual(options["allow_write"], True)
        self.assertEqual(options["create_if_missing"], True)

    def test_normalize_options_preserves_explicit_values(self) -> None:
        options = normalize_options(
            {
                "config_path": "configs/sidebar-organizer.yaml",
                "allow_write": False,
                "create_if_missing": False,
            }
        )

        self.assertEqual(options["config_path"], "configs/sidebar-organizer.yaml")
        self.assertEqual(options["allow_write"], False)
        self.assertEqual(options["create_if_missing"], False)

    def test_resolve_config_path_accepts_relative_path_inside_config(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            resolved = resolve_config_path(tmpdir, "configs/sidebar-organizer.yaml")

        self.assertTrue(str(resolved).endswith(os.path.join("configs", "sidebar-organizer.yaml")))

    def test_resolve_config_path_rejects_traversal(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            with self.assertRaises(ValueError):
                resolve_config_path(tmpdir, "../secrets.yaml")

    def test_resolve_config_path_rejects_absolute_path_outside_config(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            with self.assertRaises(ValueError):
                resolve_config_path(tmpdir, "/etc/passwd")

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

    def test_frontend_module_url_includes_version_cache_buster(self) -> None:
        self.assertEqual(
            frontend_module_url("4.1.0"),
            "/sidebar_organizer/frontend/sidebar-organizer.js?v=4.1.0",
        )

    def test_file_metadata_reports_missing_file(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            path = Path(tmpdir) / "missing.yaml"

            metadata = file_metadata(path)

        self.assertEqual(metadata["exists"], False)
        self.assertIsNone(metadata["last_modified"])
        self.assertIsNone(metadata["size"])


if __name__ == "__main__":
    unittest.main()
