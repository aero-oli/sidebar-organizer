import type { SidebarConfig } from '../../../types';
import type { ChangeSummaryEntry } from './types';

const LABELS: Record<string, string> = {
  custom_groups: 'Groups',
  bottom_groups: 'Bottom groups',
  bottom_items: 'Bottom items',
  bottom_grid_items: 'Bottom grid',
  hidden_items: 'Visibility',
  new_items: 'Custom items',
  notification: 'Notifications',
  visibility_templates: 'Visibility rules',
  color_config: 'Colours and theme',
};

export const buildChangeSummary = (baseline: SidebarConfig, current: SidebarConfig): ChangeSummaryEntry[] => {
  const keys = new Set([...Object.keys(baseline), ...Object.keys(current)]);
  return [...keys]
    .filter((key) => JSON.stringify(baseline[key as keyof SidebarConfig]) !== JSON.stringify(current[key as keyof SidebarConfig]))
    .map((key) => ({
      kind: !(key in baseline) ? 'added' : !(key in current) ? 'removed' : 'changed',
      key,
      label: LABELS[key] || key.replaceAll('_', ' '),
    }));
};
