import type { SidebarConfig } from '../../../types';
import type { ValidationIssue, WorkbenchRoute } from './types';

import { validateSidebarConfigShape } from '../../../config/validation';

const ROUTES: Record<string, WorkbenchRoute> = {
  color_config: 'appearance',
  notification: 'items',
  visibility_templates: 'items',
  new_items: 'items',
  custom_groups: 'organize',
  bottom_groups: 'organize',
  bottom_items: 'organize',
  bottom_grid_items: 'organize',
  hidden_items: 'items',
};

export const validateStructuredConfig = (config: SidebarConfig): ValidationIssue[] => {
  const issues: ValidationIssue[] = validateSidebarConfigShape(config).map((message) => {
    const rawPath = message.split(' must ')[0];
    const path = parsePath(rawPath);
    return {
      severity: 'error',
      code: 'schema.invalid_value',
      message,
      path,
      route: ROUTES[String(path[0])] || 'appearance',
    };
  });
  issues.push(...validateDuplicateAssignments(config));
  return issues;
};

export const adaptProviderErrors = (errors: string[]): ValidationIssue[] =>
  errors.map((message) => ({
    severity: 'error',
    code: 'provider.validation',
    message,
    path: [],
    route: 'review',
  }));

const parsePath = (value: string): Array<string | number> => {
  const result: Array<string | number> = [];
  for (const part of value.replace(/\[(\d+)\]/g, '.$1').split('.')) {
    if (!part) continue;
    result.push(/^\d+$/.test(part) ? Number(part) : part);
  }
  return result;
};

const validateDuplicateAssignments = (config: SidebarConfig): ValidationIssue[] => {
  const seen = new Map<string, Array<string | number>>();
  const issues: ValidationIssue[] = [];
  const visit = (items: string[] | undefined, path: Array<string | number>) => {
    items?.forEach((item, index) => {
      const itemPath = [...path, index];
      const previous = seen.get(item);
      if (previous) {
        issues.push({
          severity: 'error',
          code: 'config.duplicate_assignment',
          message: `${item} is assigned more than once (${previous.join('.')} and ${itemPath.join('.')}).`,
          path: itemPath,
          route: 'organize',
        });
      } else {
        seen.set(item, itemPath);
      }
    });
  };

  for (const [group, items] of Object.entries(config.custom_groups || {})) visit(items, ['custom_groups', group]);
  for (const [group, items] of Object.entries(config.bottom_groups || {})) visit(items, ['bottom_groups', group]);
  visit(config.bottom_items, ['bottom_items']);
  visit(config.bottom_grid_items, ['bottom_grid_items']);
  return issues;
};
