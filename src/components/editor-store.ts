import { SidebarConfigDialog } from './sidebar-dialog';

/**
 * Compatibility context for the focused editor components. Editing state is
 * owned by EditorSessionController; this adapter only exposes the host.
 */
export class EditorStore {
  public constructor(public readonly editorDialog: SidebarConfigDialog) {}

  public get sidebarConfig() {
    return this.editorDialog._sidebarConfig;
  }
}
