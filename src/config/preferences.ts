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
