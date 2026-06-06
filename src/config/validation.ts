import type { SidebarConfig } from '../types';
import type { ParsedSidebarYaml } from './types';

import YAML from 'yaml';

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

export const validateSidebarConfigShape = (config: unknown): string[] => {
  if (!isRecord(config)) {
    return ['YAML must parse to an object/dictionary.'];
  }

  const errors: string[] = [];

  if ('bottom_items' in config && !isStringArray(config.bottom_items)) {
    errors.push('bottom_items must be a list of strings.');
  }

  if ('default_collapsed' in config && !isStringArray(config.default_collapsed)) {
    errors.push('default_collapsed must be a list of strings.');
  }

  if ('custom_groups' in config) {
    if (!isRecord(config.custom_groups)) {
      errors.push('custom_groups must be an object mapping group names to lists of strings.');
    } else {
      for (const [groupName, items] of Object.entries(config.custom_groups)) {
        if (!isStringArray(items)) {
          errors.push(`custom_groups.${groupName} must be a list of strings.`);
        }
      }
    }
  }

  if ('color_config' in config && !isRecord(config.color_config)) {
    errors.push('color_config must be an object.');
  }

  return errors;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((item) => typeof item === 'string');

