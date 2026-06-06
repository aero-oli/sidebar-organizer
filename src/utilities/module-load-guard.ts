const MODULE_LOAD_KEY = '__sidebarOrganizerModuleLoaded';

type GuardedWindow = Window & {
  [MODULE_LOAD_KEY]?: boolean;
};

export const claimSidebarOrganizerModuleLoad = (targetWindow: Window = window): boolean => {
  const guardedWindow = targetWindow as GuardedWindow;
  if (guardedWindow[MODULE_LOAD_KEY]) return false;

  if (targetWindow.customElements?.get('so-group-divider')) {
    guardedWindow[MODULE_LOAD_KEY] = true;
    return false;
  }

  guardedWindow[MODULE_LOAD_KEY] = true;
  return true;
};

