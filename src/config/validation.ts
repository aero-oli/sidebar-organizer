import type { SidebarConfig } from '../types';
import type { ParsedSidebarYaml } from './types';

import YAML from 'yaml';

type UnknownRecord = Record<string, unknown>;

const STRING_FIELDS = ['header_title'] as const;
const BOOLEAN_FIELDS = [
  'hide_header_toggle',
  'animation_off',
  'accordion_mode',
  'move_settings_from_fixed',
  'force_transparent_background',
  'scroll_hide_header',
] as const;
const STRING_LIST_FIELDS = ['bottom_items', 'bottom_grid_items', 'default_collapsed', 'hidden_items'] as const;
const GROUP_FIELDS = ['custom_groups', 'bottom_groups'] as const;
const COLOR_STRING_FIELDS = [
  'background_color',
  'border_top_color',
  'custom_sidebar_background_color',
  'divider_color',
  'divider_text_color',
  'scrollbar_thumb_color',
  'sidebar_icon_color',
] as const;
const NEW_ITEM_STRING_FIELDS = [
  'component_name',
  'icon',
  'title',
  'url_path',
  'config_panel_domain',
  'notification',
  'target',
  'entity',
  'group',
  'icon_template',
] as const;
const NEW_ITEM_BOOLEAN_FIELDS = ['default_visible', 'require_admin', 'show_in_sidebar'] as const;
const ACTION_FIELDS = ['tap_action', 'hold_action', 'double_tap_action'] as const;

export const parseSidebarYamlConfig = (yaml: string): ParsedSidebarYaml => {
  try {
    const parsed = (YAML.parse(yaml) || {}) as unknown;
    const errors = validateSidebarConfigShape(parsed);
    return {
      config: errors.length === 0 ? (parsed as SidebarConfig) : undefined,
      errors,
      rawYaml: yaml,
      valid: errors.length === 0,
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return {
      errors: [`YAML parse error: ${message}`],
      rawYaml: yaml,
      valid: false,
    };
  }
};

/**
 * Validate every documented field while preserving forward compatibility by
 * allowing unknown keys. Keep this in lockstep with helpers.validate_config_object.
 */
export const validateSidebarConfigShape = (config: unknown): string[] => {
  if (!isRecord(config)) return ['YAML must parse to an object/dictionary.'];

  const errors: string[] = [];

  for (const key of STRING_FIELDS) {
    if (key in config && typeof config[key] !== 'string') errors.push(`${key} must be a string.`);
  }
  for (const key of BOOLEAN_FIELDS) {
    if (key in config && typeof config[key] !== 'boolean') errors.push(`${key} must be a boolean.`);
  }
  for (const key of STRING_LIST_FIELDS) {
    if (key in config && !isStringArray(config[key])) errors.push(`${key} must be a list of strings.`);
  }
  for (const key of GROUP_FIELDS) validateStringMap(config, key, errors, 'lists of strings');

  if ('animation_delay' in config && !isNonNegativeNumber(config.animation_delay)) {
    errors.push('animation_delay must be a non-negative number.');
  }
  if ('width' in config && !isValidWidth(config.width)) {
    errors.push('width must be a positive number or a non-empty CSS width string.');
  }
  if (
    'text_transformation' in config &&
    !['none', 'capitalize', 'uppercase', 'lowercase'].includes(String(config.text_transformation))
  ) {
    errors.push('text_transformation must be one of: none, capitalize, uppercase, lowercase.');
  }

  validateColorConfig(config.color_config, errors);
  validateStringRecord(config, 'notification', errors);
  validateNewItems(config.new_items, errors);
  validatePinnedGroups(config.pinned_groups, errors);

  if (
    'uncategorized_items' in config &&
    typeof config.uncategorized_items !== 'boolean' &&
    !isStringArray(config.uncategorized_items)
  ) {
    errors.push('uncategorized_items must be a boolean or a list of strings.');
  }

  if ('visibility_templates' in config) {
    if (!isRecord(config.visibility_templates)) {
      errors.push('visibility_templates must be an object.');
    } else {
      validateStringRecord(config.visibility_templates, 'groups', errors, 'visibility_templates.');
      validateStringRecord(config.visibility_templates, 'items', errors, 'visibility_templates.');
    }
  }

  return errors;
};

const validateStringMap = (parent: UnknownRecord, key: string, errors: string[], valueDescription: string): void => {
  if (!(key in parent)) return;
  const value = parent[key];
  if (!isRecord(value)) {
    errors.push(`${key} must be an object mapping group names to ${valueDescription}.`);
    return;
  }
  for (const [name, items] of Object.entries(value)) {
    if (!isStringArray(items)) errors.push(`${key}.${name} must be a list of strings.`);
  }
};

const validateStringRecord = (parent: UnknownRecord, key: string, errors: string[], prefix = ''): void => {
  if (!(key in parent)) return;
  const value = parent[key];
  if (!isRecord(value)) {
    errors.push(`${prefix}${key} must be an object mapping names to strings.`);
    return;
  }
  for (const [name, item] of Object.entries(value)) {
    if (typeof item !== 'string') errors.push(`${prefix}${key}.${name} must be a string.`);
  }
};

const validateColorConfig = (value: unknown, errors: string[]): void => {
  if (value === undefined) return;
  if (!isRecord(value)) {
    errors.push('color_config must be an object.');
    return;
  }
  if ('border_radius' in value && !isNonNegativeNumber(value.border_radius)) {
    errors.push('color_config.border_radius must be a non-negative number.');
  }
  for (const mode of ['light', 'dark'] as const) {
    if (!(mode in value)) continue;
    const colors = value[mode];
    if (!isRecord(colors)) {
      errors.push(`color_config.${mode} must be an object.`);
      continue;
    }
    for (const key of COLOR_STRING_FIELDS) {
      if (key in colors && typeof colors[key] !== 'string') {
        errors.push(`color_config.${mode}.${key} must be a string.`);
      }
    }
    if ('custom_styles' in colors) validateStringRecord(colors, 'custom_styles', errors, `color_config.${mode}.`);
  }
  if ('custom_theme' in value) {
    const theme = value.custom_theme;
    if (!isRecord(theme)) {
      errors.push('color_config.custom_theme must be an object.');
    } else {
      if ('theme' in theme && typeof theme.theme !== 'string') {
        errors.push('color_config.custom_theme.theme must be a string.');
      }
      if ('mode' in theme && theme.mode !== 'light' && theme.mode !== 'dark') {
        errors.push('color_config.custom_theme.mode must be light or dark.');
      }
    }
  }
};

const validateNewItems = (value: unknown, errors: string[]): void => {
  if (value === undefined) return;
  if (!Array.isArray(value)) {
    errors.push('new_items must be a list of objects.');
    return;
  }
  value.forEach((item, index) => {
    const prefix = `new_items[${index}]`;
    if (!isRecord(item)) {
      errors.push(`${prefix} must be an object.`);
      return;
    }
    if (typeof item.title !== 'string' || item.title.trim() === '') {
      errors.push(`${prefix}.title must be a non-empty string.`);
    }
    for (const key of NEW_ITEM_STRING_FIELDS) {
      if (key in item && item[key] !== null && typeof item[key] !== 'string') {
        errors.push(`${prefix}.${key} must be a string.`);
      }
    }
    for (const key of NEW_ITEM_BOOLEAN_FIELDS) {
      if (key in item && typeof item[key] !== 'boolean') errors.push(`${prefix}.${key} must be a boolean.`);
    }
    for (const key of ACTION_FIELDS) {
      if (key in item && !isRecord(item[key])) errors.push(`${prefix}.${key} must be an object.`);
    }
    if ('target' in item && item.target !== '_blank' && item.target !== '_self') {
      errors.push(`${prefix}.target must be _blank or _self.`);
    }
  });
};

const validatePinnedGroups = (value: unknown, errors: string[]): void => {
  if (value === undefined) return;
  if (!isRecord(value)) {
    errors.push('pinned_groups must be an object.');
    return;
  }
  for (const [name, entry] of Object.entries(value)) {
    if (entry === true) continue;
    if (!isRecord(entry)) {
      errors.push(`pinned_groups.${name} must be true or an object.`);
      continue;
    }
    if ('icon' in entry && typeof entry.icon !== 'string') {
      errors.push(`pinned_groups.${name}.icon must be a string.`);
    }
  }
};

const isRecord = (value: unknown): value is UnknownRecord =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((item) => typeof item === 'string');

const isNonNegativeNumber = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value) && value >= 0;

const isValidWidth = (value: unknown): value is number | string =>
  (typeof value === 'number' && Number.isFinite(value) && value > 0) ||
  (typeof value === 'string' && value.trim().length > 0);
