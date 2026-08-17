export const isPanelIdentityValid = (
  panelId: string | undefined,
  href: string | undefined,
  isCustomItem: boolean
): boolean => {
  if (isCustomItem) return true;

  const hrefPanelId = href?.replace(/^\//, '');
  return hrefPanelId === '#' || panelId === hrefPanelId;
};
