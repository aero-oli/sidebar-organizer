import type { SidebarConfig } from '../../../types';

export const collectNotificationSettings = (config: SidebarConfig): Record<string, string> => {
  const customItemSettings = Object.fromEntries(
    (config.new_items || [])
      .filter((item) => item.title && item.notification)
      .map((item) => [item.title!, item.notification!])
  );
  return { ...(config.notification || {}), ...customItemSettings };
};

export const updateNotificationSetting = (
  config: SidebarConfig,
  panel: string,
  value: string | undefined
): SidebarConfig => {
  const customItemIndex = (config.new_items || []).findIndex((item) => item.title === panel);
  if (customItemIndex >= 0) {
    const newItems = [...(config.new_items || [])];
    const updatedItem = { ...newItems[customItemIndex] };
    if (value) updatedItem.notification = value;
    else delete updatedItem.notification;
    newItems[customItemIndex] = updatedItem;
    return { ...config, new_items: newItems };
  }

  const notification = { ...(config.notification || {}) };
  if (value) notification[panel] = value;
  else delete notification[panel];
  return { ...config, notification };
};
