import type { SidebarConfig } from '../../../types';
import type { ChangeSummaryEntry } from './types';

const LABELS: Record<string, string> = {
  header_title: 'Sidebar title',
  hide_header_toggle: 'Hide header toggle',
  animation_off: 'Disable animations',
  animation_delay: 'Animation delay',
  accordion_mode: 'Accordion mode',
  text_transformation: 'Text style',
  move_settings_from_fixed: 'Move Settings into the sidebar',
  force_transparent_background: 'Transparent background',
  width: 'Sidebar width',
  default_collapsed: 'Initially collapsed groups',
  pinned_groups: 'Pinned groups',
  uncategorized_items: 'Ungrouped items',
  scroll_hide_header: 'Hide header on scroll',
  notification: 'Notification badges',
  visibility_templates: 'Visibility rules',
  color_config: 'Colours and theme',
};

const owns = (value: object, key: string): boolean => Object.prototype.hasOwnProperty.call(value, key);
const equal = (before: unknown, after: unknown): boolean => {
  if (Object.is(before, after)) return true;
  if (Array.isArray(before) && Array.isArray(after)) {
    return before.length === after.length && before.every((value, index) => equal(value, after[index]));
  }
  if (isRecord(before) && isRecord(after)) {
    const keys = Object.keys(before);
    return (
      keys.length === Object.keys(after).length &&
      keys.every((key) => owns(after, key) && equal(before[key], after[key]))
    );
  }
  return false;
};
const isRecord = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === 'object' && !Array.isArray(value);
const strings = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((item) => typeof item === 'string');
const quote = (value: string): string => `“${value}”`;
const display = (value: unknown): string =>
  value === undefined ? 'default' : typeof value === 'boolean' ? (value ? 'On' : 'Off') : quote(String(value));
const scalar = (value: unknown): boolean => value == null || ['string', 'number', 'boolean'].includes(typeof value);

export const buildChangeSummary = (baseline: SidebarConfig, current: SidebarConfig): ChangeSummaryEntry[] => {
  const entries: ChangeSummaryEntry[] = [];
  const handled = new Set<string>();
  const add = (key: string, label: string, kind: ChangeSummaryEntry['kind'] = 'changed') =>
    entries.push({ key, label, kind });
  const listChanges = (
    key: string,
    before: string[],
    after: string[],
    added: (item: string) => string,
    removed: (item: string) => string,
    orderLabel?: string
  ) => {
    for (const item of new Set(after)) if (!before.includes(item)) add(key, added(item), 'added');
    for (const item of new Set(before)) if (!after.includes(item)) add(key, removed(item), 'removed');
    if (
      orderLabel &&
      !equal(
        before.filter((item) => after.includes(item)),
        after.filter((item) => before.includes(item))
      )
    ) {
      add(key, orderLabel);
    }
  };

  for (const key of ['hidden_items', 'bottom_items', 'bottom_grid_items'] as const) {
    const before = baseline[key] ?? [];
    const after = current[key] ?? [];
    if (!strings(before) || !strings(after)) continue;
    handled.add(key);
    if (key === 'hidden_items') {
      listChanges(
        key,
        before,
        after,
        (item) => `Hide ${quote(item)}`,
        (item) => `Show ${quote(item)}`
      );
    } else {
      const place = key === 'bottom_items' ? 'the bottom' : 'the bottom grid';
      listChanges(
        key,
        before,
        after,
        (item) => `Place ${quote(item)} at ${place}`,
        (item) => `Remove ${quote(item)} from ${place}`,
        `Reorder items at ${place}`
      );
    }
  }

  const groupKeys = ['custom_groups', 'bottom_groups'] as const;
  const validGroups = (value: unknown): value is Record<string, string[]> =>
    isRecord(value) && Object.values(value).every(strings);
  for (const key of groupKeys) {
    const before = baseline[key] ?? {};
    const after = current[key] ?? {};
    if (!validGroups(before) || !validGroups(after)) continue;
    handled.add(key);
    const suffix = key === 'bottom_groups' ? ' at the bottom' : '';
    for (const name of new Set([...Object.keys(before), ...Object.keys(after)])) {
      if (!owns(before, name)) {
        add(
          key,
          `Add group ${quote(name)}${suffix}${after[name].length ? ` with ${after[name].map(quote).join(', ')}` : ''}`,
          'added'
        );
      } else if (!owns(after, name)) {
        add(key, `Remove group ${quote(name)}${suffix}`, 'removed');
      } else {
        listChanges(
          key,
          before[name],
          after[name],
          (item) => `Add ${quote(item)} to group ${quote(name)}`,
          (item) => `Remove ${quote(item)} from group ${quote(name)}`,
          `Reorder items in group ${quote(name)}`
        );
      }
    }
    const retainedBefore = Object.keys(before).filter((name) => owns(after, name));
    const retainedAfter = Object.keys(after).filter((name) => owns(before, name));
    if (!equal(retainedBefore, retainedAfter))
      add(
        key,
        `Reorder ${key === 'bottom_groups' ? 'bottom groups' : 'groups'}: ${retainedAfter.map(quote).join(' → ')}`
      );
  }

  const beforeItems = baseline.new_items ?? [];
  const afterItems = current.new_items ?? [];
  if (Array.isArray(beforeItems) && Array.isArray(afterItems) && [...beforeItems, ...afterItems].every(isRecord)) {
    const identity = (item: { url_path?: unknown; title?: unknown }) => item.url_path || item.title;
    const beforeIds = beforeItems.map(identity);
    const afterIds = afterItems.map(identity);
    if (
      [...beforeIds, ...afterIds].every((id) => typeof id === 'string') &&
      new Set(beforeIds).size === beforeIds.length &&
      new Set(afterIds).size === afterIds.length
    ) {
      handled.add('new_items');
      for (const [index, item] of beforeItems.entries()) {
        const next = afterItems.find((candidate) => identity(candidate) === beforeIds[index]);
        const name = quote(item.title || String(beforeIds[index]));
        if (!next) add('new_items', `Remove custom item ${name}`, 'removed');
        else if (!equal(item, next))
          add(
            'new_items',
            item.title !== next.title
              ? `Rename custom item ${name} to ${quote(next.title || '')}`
              : `Update custom item ${name}`
          );
      }
      for (const [index, item] of afterItems.entries()) {
        if (!beforeIds.includes(afterIds[index]))
          add('new_items', `Add custom item ${quote(item.title || String(afterIds[index]))}`, 'added');
      }
      if (
        !equal(
          beforeIds.filter((id) => afterIds.includes(id)),
          afterIds.filter((id) => beforeIds.includes(id))
        )
      )
        add('new_items', 'Reorder custom items');
    }
  }

  for (const key of new Set([...Object.keys(baseline), ...Object.keys(current)])) {
    if (handled.has(key)) continue;
    const before = baseline[key as keyof SidebarConfig];
    const after = current[key as keyof SidebarConfig];
    if (equal(before, after)) continue;
    const label = LABELS[key] || key.replaceAll('_', ' ').replace(/^./, (letter) => letter.toUpperCase());
    const kind = !owns(baseline, key) ? 'added' : !owns(current, key) ? 'removed' : 'changed';
    add(
      key,
      scalar(before) && scalar(after) ? `${label}: ${display(before)} → ${display(after)}` : `${label} ${kind}`,
      kind
    );
  }
  return entries;
};
