import type { SidebarConfig } from '../../../types';

export type ItemPlacement = {
  section: 'custom_groups' | 'bottom_groups' | 'bottom_items' | 'bottom_grid_items' | 'ungrouped';
  group?: string;
};

const GROUP_SECTIONS = ['custom_groups', 'bottom_groups'] as const;
const ITEM_SECTIONS = ['bottom_items', 'bottom_grid_items'] as const;
const UNGROUPED = 'uncategorized_items';

export const getItemPlacement = (config: SidebarConfig, id: string): ItemPlacement => {
  for (const section of GROUP_SECTIONS) {
    for (const [group, items] of Object.entries(config[section] || {})) {
      if (!Array.isArray(items) || !items.includes(id)) continue;
      return section === 'custom_groups' && group === UNGROUPED ? { section: 'ungrouped' } : { section, group };
    }
  }
  for (const section of ITEM_SECTIONS) {
    if (config[section]?.includes(id)) return { section };
  }
  return { section: 'ungrouped' };
};

export const moveItemToPlacement = (config: SidebarConfig, id: string, placement: ItemPlacement): SidebarConfig => {
  const { section, group } = placement;
  if (section === 'custom_groups' || section === 'bottom_groups') {
    if (
      group === undefined ||
      !Object.prototype.hasOwnProperty.call(config[section] || {}, group) ||
      !Array.isArray(config[section]?.[group])
    )
      return config;
  } else if (section !== 'ungrouped' && section !== 'bottom_items' && section !== 'bottom_grid_items') {
    return config;
  }

  const result = { ...config };
  for (const groupSection of GROUP_SECTIONS) {
    const groups = config[groupSection];
    if (!groups) continue;
    const nextGroups = { ...groups };
    let changed = false;
    for (const [name, items] of Object.entries(groups)) {
      if (!Array.isArray(items) || !items.includes(id)) continue;
      nextGroups[name] = items.filter((item) => item !== id);
      changed = true;
    }
    if (changed) result[groupSection] = nextGroups;
  }
  for (const itemSection of ITEM_SECTIONS) {
    const items = config[itemSection];
    if (Array.isArray(items) && items.includes(id)) result[itemSection] = items.filter((item) => item !== id);
  }

  if (section === 'custom_groups' || section === 'bottom_groups') {
    result[section] = { ...result[section], [group!]: [...result[section]![group!], id] };
  } else if (section === 'bottom_items' || section === 'bottom_grid_items') {
    result[section] = [...(result[section] || []), id];
  } else if (Array.isArray(result.custom_groups?.[UNGROUPED])) {
    result.custom_groups = { ...result.custom_groups, [UNGROUPED]: [...result.custom_groups[UNGROUPED], id] };
  }
  return result;
};
