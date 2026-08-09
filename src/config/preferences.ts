export const resolveCollapsedGroups = (
  groupNames: string[],
  defaultCollapsed: string[] | undefined,
  syncedCollapsed: Set<string> | undefined,
  syncedKnownGroups: Set<string> | undefined
): Set<string> => {
  const currentGroups = new Set(groupNames);
  const configuredDefaults = new Set((defaultCollapsed || []).filter((group) => currentGroups.has(group)));
  if (!syncedCollapsed) return configuredDefaults;

  const collapsed = new Set([...syncedCollapsed].filter((group) => currentGroups.has(group)));
  if (!syncedKnownGroups) return collapsed;

  for (const group of configuredDefaults) {
    if (!syncedKnownGroups.has(group)) collapsed.add(group);
  }
  return collapsed;
};

export const areGroupsCollapsed = (groupNames: string[], collapsed: Set<string>): boolean =>
  groupNames.every((group) => collapsed.has(group));

export const setGroupsCollapsed = (
  groupNames: string[],
  collapsed: Set<string>,
  shouldCollapse: boolean
): Set<string> => {
  const next = new Set(collapsed);
  for (const group of groupNames) {
    if (shouldCollapse) next.add(group);
    else next.delete(group);
  }
  return next;
};
