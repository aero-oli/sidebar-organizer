import type { SidebarWorkbenchYamlEditor } from './editor/workbench/yaml-editor';

import { ALERT_MSG, CONFIG_SECTION, DIALOG_TAG, STORAGE, VERSION } from '@constants';
import { SidebarConfig, NewItemConfig, SidebardPanelConfig, PANEL_TYPE } from '@types';
import {
  fetchFileConfig,
  getHaConfigCacheKey,
  hasBlockingConfigErrors,
  isItemsValid,
  normalizePinnedGroups,
  tryCorrectConfig,
  validateConfig,
} from '@utilities/configs';
import { INVALID_CONFIG } from '@utilities/configs';
import { cleanItemsFromConfig } from '@utilities/configs/clean-items';
import { comparePanelItems } from '@utilities/dashboard';
import { TRANSLATED_LABEL } from '@utilities/localize';
import { getDefaultPanelUrlPath } from '@utilities/panel';
import { safeCustomElement } from '@utilities/safe-custom-element';
import {
  DialogBoxParams,
  DialogType,
  showAlertDialog,
  showConfirmDialog,
  showDialogBox,
} from '@utilities/show-dialog-box';
import {
  getStorageStringArray,
  setStorage,
  getStorageConfig,
  getHiddenPanels,
  removeStorage,
  getConfigSource,
  setConfigSource,
  setActiveStorageUser,
} from '@utilities/storage-utils';
import { showToast } from '@utilities/toast-notify';
import { isEmpty, pick } from 'es-toolkit/compat';
import { html, css, TemplateResult, PropertyValues, CSSResultGroup, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import './editor';
import './editor/workbench/yaml-editor';
import YAML from 'yaml';

import {
  ConfigProviderInfo,
  ConfigSource,
  HomeAssistantConfigProvider,
  HomeAssistantProfileProvider,
  ProfileConfigInfo,
  SidebarProfileUser,
  isConfigDraftDirty,
  isHomeAssistantConfigSource,
  isHaConfigModified,
  parseSidebarYamlConfig,
  resolvePreferredConfigSource,
} from '../config';
import { SubscriptionGuard } from '../runtime/subscription-guard';
import { BaseEditor } from './base-editor';
import * as ELEMENT from './editor';
import { EditorStore } from './editor-store';
import {
  EditorSessionController,
  type EditorDraftEnvelope,
  type ValidationIssue,
  type WorkbenchRoute,
} from './editor/workbench';
import { SidebarOrganizerDialog } from './sidebar-organizer-dialog';
import { SidebarOrganizerDialogWA } from './sidebar-organizer-dialog_wa';

export interface ConfigChangedEvent {
  config: SidebarConfig;
}

@safeCustomElement('sidebar-organizer-config-dialog')
export class SidebarConfigDialog extends BaseEditor {
  @property({ type: Boolean, reflect: true, attribute: 'fullscreen' }) fullscreen: boolean = false;
  @property({ attribute: false }) _mainDialog!: SidebarOrganizerDialog | SidebarOrganizerDialogWA;
  @property({ attribute: false }) readonly _initConfig!: SidebarConfig;

  @state() _connected: boolean = false;
  @state() public _sidebarConfig = {} as SidebarConfig;
  @state() public _useConfigFile = false;
  @state() public _configSource: ConfigSource = 'browser_storage';

  @state() private _configLoaded = false;

  @state() public _initPanelOrder: string[] = [];
  @state() public _initCombiPanels: string[] = [];
  @state() public _newItemMap = new Map<string, NewItemConfig>();
  @state() public _newItems: string[] = [];
  @state() private _panelConfigMap = new Map<string, string[]>();
  @state() private _pinnedGroupsMap = new Map<string, { icon?: string }>();
  @state() public _settingItemMoved = false;
  @state() private _uncategorizedItemsGroup: string[] = [];
  @state() public _uncategorizedIsActive?: boolean;

  @state() private _uploading = false;
  @state() private _saving = false;
  @state() _invalidConfig?: INVALID_CONFIG;
  @state() private _haConfigErrors: string[] = [];
  @state() private _panelWarnings: string[] = [];
  @state() private _haConfigInfo: ConfigProviderInfo = { available: false };
  @state() private _profileInfo: ProfileConfigInfo = { available: false };
  @state() private _profileUsers: SidebarProfileUser[] = [];
  @state() private _selectedProfile = 'shared';
  @state() private _copySource = 'shared';
  @state() private _syncCollapsedGroups = true;
  @state() private _haDiagnostics?: ConfigProviderInfo;
  @state() private _lastLoadedHaConfigModified?: number;
  @state() private _rawYaml = '';
  @state() public _narrow = false;
  @state() private _workbenchRoute: WorkbenchRoute = 'sidebar';
  @state() private _previewOpen = false;
  @state() private _draftOffer?: { state: 'matching' | 'stale'; draft: EditorDraftEnvelope };

  private _configSubscription = new SubscriptionGuard();
  private _profileSubscription = new SubscriptionGuard();
  private _profileLoadGeneration = 0;
  private _resizeMeasureTimer?: number;
  private _resizeObserver?: ResizeObserver;
  private _baselineConfig: SidebarConfig = {};
  private _baselineRawYaml = '';
  private _baselineRevision?: string | null;
  private _preferencesRevision?: string | null;
  private _preferenceCollapsedGroups: string[] = [];
  private _preferenceKnownGroups?: string[];
  private _session?: EditorSessionController;
  private _sessionIdentity?: string;

  @query(DIALOG_TAG.COLORS) _dialogColors!: ELEMENT.SidebarDialogColors;
  @query(DIALOG_TAG.PANELS) _dialogPanels!: ELEMENT.SidebarDialogPanels;
  @query(DIALOG_TAG.PREVIEW) _dialogPreview!: ELEMENT.SidebarDialogPreview;
  @query(DIALOG_TAG.NEW_ITEMS) _dialogNewItems!: ELEMENT.SidebarDialogNewItems;

  @query('#sidebar-config') _configSection!: HTMLElement;

  constructor() {
    super(CONFIG_SECTION.GENERAL);
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._connected = true;
    setActiveStorageUser(this.hass.user?.id);
    this._configSource = getConfigSource();
    this._useConfigFile = this._configSource === 'static_yaml';
    this.addEventListener('sidebar-config-changed', this._sidebarConfigChanged as EventListener);
    this._refreshHaConfigInfo();
    this._startHaConfigSubscription();
    window.sidebarDialog = this;
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._connected = false;
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
      this._resizeObserver = undefined;
    }
    window.clearTimeout(this._resizeMeasureTimer);
    this._resizeMeasureTimer = undefined;
    this._profileLoadGeneration += 1;
    this._profileSubscription.dispose();
    this._configSubscription.dispose();
    this._session?.destroy();
  }

  public get hasUnsavedChanges(): boolean {
    return isConfigDraftDirty(
      this._baselineConfig,
      this._sidebarConfig,
      this._baselineRawYaml,
      this._rawYaml,
      isHomeAssistantConfigSource(this._configSource)
    );
  }

  public get canWriteCurrentSource(): boolean {
    if (this._saving) return false;
    if (this._configSource === 'home_assistant_profile') return Boolean(this._profileInfo.allow_write);
    if (this._configSource === 'home_assistant_config') {
      return Boolean(this.hass.user?.is_admin && this._haConfigInfo.allow_write);
    }
    return true;
  }

  public get selectedProfileUserId(): string | undefined {
    return this._configSource === 'home_assistant_profile' ? this._selectedProfile : undefined;
  }

  public get saveBlockedReason(): string | undefined {
    if (this._saving) return 'A configuration save is already in progress.';
    if (!this.canWriteCurrentSource) return 'This configuration is read-only for your account.';
    if (this._session?.issues.some((issue) => issue.severity === 'error')) {
      return this._session.yamlValid
        ? 'Resolve the validation errors before applying.'
        : 'Fix the YAML syntax errors before applying.';
    }
    if (this._invalidConfig && hasBlockingConfigErrors(this._invalidConfig)) {
      return 'A panel is assigned more than once. Remove the duplicate assignment before saving.';
    }
    if (!this.hasUnsavedChanges) return 'No unsaved changes.';
    return undefined;
  }

  private async _showDialogBox(type: DialogType, params: DialogBoxParams): Promise<any> {
    return await showDialogBox(this, type, params);
  }

  async _alert(message: string, confirmText?: string): Promise<void> {
    return await this._showDialogBox('alert', {
      text: message,
      confirmText,
    });
  }

  protected willUpdate(_changedProperties: PropertyValues): void {
    if (_changedProperties.has('_connected') && this._connected) {
      //info
      console.log(
        '%cSIDEBAR-DIALOG:%c ℹ️ Sidebar dialog connected, setting up initial config...',
        'color: #40c057;',
        'color: #228be6;'
      );

      this._setupInitConfig();
    }
    if (_changedProperties.has('_configSource')) {
      this._useConfigFile = this._configSource === 'static_yaml';
      this._startHaConfigSubscription();
    }

    if (_changedProperties.has('_useConfigFile')) {
      if (this._useConfigFile && this._configSource === 'static_yaml') {
        console.log('Use config file changed, validating config file');
        this._validateConfigFile();
      } else if (this._configSource === 'browser_storage' && this._invalidConfig !== undefined) {
        console.log('Use config file changed to false, resetting invalid config');
        this._invalidConfig = undefined;
        this._validateStoragePanels();
        this._mainDialog._configValid = this.isValidConfig;
        this.requestUpdate();
      }
    }

    if (_changedProperties.has('_invalidConfig') && this._invalidConfig) {
      const isValid = this.isValidConfig;
      this._mainDialog._configValid = isValid;
      this.requestUpdate();
    }

    if (_changedProperties.has('_settingItemMoved')) {
      if (this._settingItemMoved && !this._initCombiPanels.includes('config')) {
        this._initCombiPanels.push('config');
      } else if (!this._settingItemMoved) {
        this._initCombiPanels = this._initCombiPanels.filter((item) => item !== 'config');
        const configInPanel = this._getGroupOfPanel('config') as string | null;
        if (configInPanel !== null) {
          // Removing the config item from the panel it is currently in
          const panelToUpdate = [PANEL_TYPE.BOTTOM_ITEMS, PANEL_TYPE.BOTTOM_GRID_ITEMS].includes(
            configInPanel as PANEL_TYPE
          )
            ? configInPanel
            : PANEL_TYPE.CUSTOM_GROUPS;
          const updatedPanelConfig = this._cleanItemsFromGroups(panelToUpdate as PANEL_TYPE, ['config']);

          this._sidebarConfig = { ...this._sidebarConfig, ...updatedPanelConfig };
        }
      }
    }

    if (_changedProperties.has('_uncategorizedIsActive') && this._uncategorizedIsActive !== undefined) {
      if (this._uncategorizedIsActive) {
        const currentConfig = { ...(this._sidebarConfig || {}) } as SidebarConfig;
        const currentCustomGroups = { ...(currentConfig.custom_groups || {}) };
        const currentItemsInConfig = currentCustomGroups?.[PANEL_TYPE.UNCATEGORIZED_ITEMS] || [];
        const allUngroupedItems = this.uncategorizedItems;

        const isDifferent = JSON.stringify(currentItemsInConfig.sort()) !== JSON.stringify(allUngroupedItems.sort());

        if (isDifferent) {
          const updatedGroupConfigUncategorized = [...allUngroupedItems];
          currentCustomGroups[PANEL_TYPE.UNCATEGORIZED_ITEMS] = updatedGroupConfigUncategorized;
          const updatedConfig = { ...currentConfig, custom_groups: currentCustomGroups };
          console.log(
            'Updated uncategorized items from:',
            currentItemsInConfig,
            'to:',
            updatedGroupConfigUncategorized
          );
          this._sidebarConfig = { ...this._sidebarConfig, ...updatedConfig };
        }
      } else {
        console.log('Uncategorized is not active, removing uncategorized items from config');
      }
    }
    if (_changedProperties.has('_configLoaded') && this._configLoaded === true && !this._resizeObserver) {
      window.clearTimeout(this._resizeMeasureTimer);
      this._resizeMeasureTimer = window.setTimeout(() => {
        this._resizeMeasureTimer = undefined;
        if (!this.isConnected) return;
        this._measureConfigSection();
      }, 100);
    }
  }
  protected shouldUpdate(_changedProperties: PropertyValues): boolean {
    if (_changedProperties.has('_sidebarConfig') && this._sidebarConfig) {
      return true;
    }
    return true;
  }

  public get isValidConfig(): boolean {
    let isValid = !this._invalidConfig || Object.keys(this._invalidConfig).length === 0;
    if (this._useConfigFile) {
      isValid = this._invalidConfig?.valid !== false;
    }
    return isValid;
  }

  protected updated(_changedProperties: PropertyValues): void {
    if (!this._configLoaded) return;
    if (_changedProperties.has('_sidebarConfig') && this._sidebarConfig) {
      const oldConfig = _changedProperties.get('_sidebarConfig') as SidebarConfig | undefined;
      const newConfig = this._sidebarConfig;
      if (oldConfig !== undefined && newConfig) {
        const newItemsChanged = JSON.stringify(oldConfig.new_items) !== JSON.stringify(newConfig.new_items);

        if (newItemsChanged && newConfig.new_items) {
          this._newItemMap = new Map(newConfig.new_items.map((item: NewItemConfig) => [item.title!, item]));
          //info
          console.log(
            '%cSIDEBAR-DIALOG:%c ℹ️ New items updated:',
            'color: #40c057;',
            'color: #228be6;',
            this._newItemMap
          );
        }

        const pinnedGroupsChanged = JSON.stringify(oldConfig.pinned_groups) !== JSON.stringify(newConfig.pinned_groups);
        if (pinnedGroupsChanged && newConfig.pinned_groups) {
          this._pinnedGroupsMap = new Map(Object.entries(normalizePinnedGroups(newConfig.pinned_groups)));
        }

        this._settingItemMoved = newConfig.move_settings_from_fixed === true;
        // Resetting uncategorizedIsActive to ensure it gets recalculated based on the new config
        this._uncategorizedIsActive = undefined;

        this._uncategorizedIsActive =
          newConfig.uncategorized_items === true ||
          (newConfig.custom_groups &&
            Array.isArray(newConfig.custom_groups[PANEL_TYPE.UNCATEGORIZED_ITEMS]) &&
            newConfig.custom_groups[PANEL_TYPE.UNCATEGORIZED_ITEMS].length > 0)
            ? true
            : false;
        console.log('uncategorizedIsActive:', this._uncategorizedIsActive);
      }

      const curentNewItems = [...this._newItems];
      // console.log('Current new items:', curentNewItems);

      const _newConfigChanged =
        JSON.stringify(curentNewItems) !== JSON.stringify(newConfig.new_items?.map((item) => item.title!) || []);
      // console.log('New config changed:', _newConfigChanged);

      if (_newConfigChanged) {
        console.log('New config changed, updating new items and init combi panels', newConfig.new_items);
        this._newItems = newConfig.new_items?.map((item) => item.title!) || [];
        console.log('New items updated:', this._newItems);
        this._initCombiPanels = this._initCombiPanels.filter((item) => !curentNewItems.includes(item));
        console.log('Init combi panels:', this._initCombiPanels);
        this._initCombiPanels = [...this._initCombiPanels, ...Array.from(this._newItems)];
        console.log('Init combi panels updated:', this._initCombiPanels);
      }

      // Update panel config map
      const panelConfig = {
        ...(newConfig.custom_groups || {}),
        ...(newConfig.bottom_groups || {}),
        bottom_items: newConfig.bottom_items || [],
        bottom_grid_items: newConfig.bottom_grid_items || [],
      };
      this._panelConfigMap = new Map(Object.entries(panelConfig));
      // Check for config changes from initial config

      const hasConfigChanged = JSON.stringify(this._baselineConfig) !== JSON.stringify(newConfig);

      this._mainDialog._saveDisabled = !hasConfigChanged || !this.canWriteCurrentSource;
      if (this._store === undefined) {
        this._createStore();
      }
    }
  }

  public _setupInitConfig = async () => {
    this._configLoaded = false;
    this._baselineConfig = structuredClone(this._initConfig || {});
    await this._refreshProfileDirectory();
    const source = await resolvePreferredConfigSource(this.hass, getConfigSource());
    if (source !== this._configSource) {
      this._configSource = source;
      this._useConfigFile = source === 'static_yaml';
      setConfigSource(source);
    }
    if (this._configSource === 'browser_storage') {
      this._validateStoragePanels();
      return;
    }
    if (this._configSource === 'static_yaml') {
      this._validateConfigFile();
      return;
    }
    if (this._configSource === 'home_assistant_profile') {
      this._selectedProfile = this.hass.user?.id || 'shared';
      await this._validateHaProfile(this._selectedProfile);
      return;
    }
    this._selectedProfile = 'shared';
    this._validateHaConfig();
  };

  private _measureConfigSection() {
    if (!this.isConnected || this._resizeObserver) return;
    const configSection = this.shadowRoot?.getElementById('sidebar-config');
    if (!configSection) return;
    this._resizeObserver = new ResizeObserver((entries) => {
      if (!this.isConnected) return;
      const dialogPreview = this.shadowRoot?.querySelector<ELEMENT.SidebarDialogPreview>(DIALOG_TAG.PREVIEW);
      if (!dialogPreview) return;

      for (const entry of entries) {
        const { height, width } = entry.contentRect;
        this._narrow = width < 600;
        const minHeight = 800;
        if (height > minHeight && !this.fullscreen) {
          dialogPreview.style.setProperty('--config-section-height', `${Math.round(height)}px`);
        } else {
          dialogPreview.style.removeProperty('--config-section-height');
        }
      }
    });
    this._resizeObserver.observe(configSection);
  }

  protected render(): TemplateResult {
    if (!this._configLoaded) {
      return html`
        <div class="loading-content">
          <ha-fade-in .delay=${500}><ha-spinner size="large"></ha-spinner></ha-fade-in>
        </div>
      `;
    }

    this._createStore();
    this._ensureSession();
    return this._renderWorkbench();
  }

  private _ensureSession(): void {
    const target = this._configSource === 'home_assistant_profile' ? this._selectedProfile : 'shared';
    const identity = `${this.hass.user?.id || 'anonymous'}:${this._configSource}:${target}:${this._baselineRevision || ''}`;
    if (this._session && this._sessionIdentity === identity) return;
    this._session?.destroy();
    this._sessionIdentity = identity;
    this._session = new EditorSessionController({
      userId: this.hass.user?.id || 'anonymous',
      source: this._configSource,
      target,
      baselineRevision: this._baselineRevision,
      rawYaml: this._baselineRawYaml || this._rawYaml,
      config: this._sidebarConfig,
      activeRoute: this._workbenchRoute,
      onChange: (snapshot) => {
        this._workbenchRoute = snapshot.activeRoute;
        this._mainDialog._configValid = !snapshot.issues.some((issue) => issue.severity === 'error');
        this._mainDialog._saveDisabled = Boolean(this.saveBlockedReason);
        this.requestUpdate();
      },
    });
    const draft = this._session.draftState();
    this._draftOffer = draft.state === 'none' ? undefined : draft;
  }

  private _renderWorkbench(): TemplateResult {
    const session = this._session!;
    const issueCount = session.issues.filter((issue) => issue.severity === 'error').length;
    const targetName = this._activeTargetName();
    const routes: Array<{ route: WorkbenchRoute; label: string; description: string; icon: string }> = [
      { route: 'sidebar', label: 'Sidebar', description: 'Profile and sync', icon: 'mdi:account-cog-outline' },
      { route: 'organize', label: 'Organize', description: 'Groups and items', icon: 'mdi:format-list-group' },
      { route: 'appearance', label: 'Appearance', description: 'Look and behaviour', icon: 'mdi:palette-outline' },
      { route: 'rules', label: 'Rules', description: 'Visibility and alerts', icon: 'mdi:filter-cog-outline' },
      { route: 'yaml', label: 'YAML', description: 'Source editor', icon: 'mdi:code-braces' },
      { route: 'review', label: 'Review & Apply', description: 'Validate and publish', icon: 'mdi:check-decagram-outline' },
    ];

    return html`
      <div class="workbench">
        <header class="workbench-header">
          <button class="target-control" @click=${() => this._goToRoute('sidebar')}>
            <ha-icon icon="mdi:account-circle-outline"></ha-icon>
            <span><small>Editing sidebar for</small><strong>${targetName}</strong></span>
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </button>
          <div class="header-status" aria-live="polite">
            <span class="status-chip" data-state=${session.dirty ? 'draft' : 'saved'}>
              ${session.dirty ? 'Draft autosaves locally' : 'Up to date'}
            </span>
            <span class="status-chip" data-state=${issueCount ? 'error' : 'valid'}>
              ${issueCount ? `${issueCount} issue${issueCount === 1 ? '' : 's'}` : 'Valid'}
            </span>
          </div>
          <ha-button appearance="plain" class="preview-toggle" @click=${this._openPreview}>
            <ha-icon slot="start" icon="mdi:eye-outline"></ha-icon>Preview
          </ha-button>
        </header>

        ${this._draftOffer ? this._renderDraftRecovery(this._draftOffer) : nothing}

        <div class="workbench-body">
          <nav class="task-rail" aria-label="Settings stages">
            ${routes.map(
              ({ route, label, description, icon }, index) => html`
                <button
                  class="task-link"
                  data-active=${route === this._workbenchRoute}
                  @click=${() => this._goToRoute(route)}
                >
                  <span class="stage-number">${index + 1}</span>
                  <ha-icon icon=${icon}></ha-icon>
                  <span><strong>${label}</strong><small>${description}</small></span>
                  ${session.issues.some((issue) => issue.route === route && issue.severity === 'error')
                    ? html`<ha-icon class="stage-error" icon="mdi:alert-circle"></ha-icon>`
                    : nothing}
                </button>
              `
            )}
          </nav>

          <main class="editor-canvas" data-yaml-invalid=${!session.yamlValid && this._workbenchRoute !== 'yaml'}>
            <div class="mobile-stage-select">
              <ha-select
                .label=${'Settings stage'}
                .value=${this._workbenchRoute}
                @selected=${(event: Event) => this._goToRoute((event.target as HTMLSelectElement).value as WorkbenchRoute)}
              >
                ${routes.map(({ route, label }) => html`<ha-list-item .value=${route}>${label}</ha-list-item>`)}
              </ha-select>
            </div>
            ${!session.yamlValid && this._workbenchRoute !== 'yaml'
              ? html`<ha-alert alert-type="warning" class="stale-preview-alert">
                  YAML contains errors. Visual controls and preview show the last valid version.
                  <ha-button appearance="plain" size="s" @click=${() => this._goToRoute('yaml')}>Fix YAML</ha-button>
                </ha-alert>`
              : nothing}
            ${this._renderWorkbenchRoute()}
          </main>

          <aside class="desktop-preview" aria-label="Live sidebar preview">${this._renderSidebarPreview()}</aside>
        </div>

        <footer class="workbench-actions">
          <div class="apply-state">
            ${this.saveBlockedReason
              ? html`<ha-icon icon="mdi:information-outline"></ha-icon><span>${this.saveBlockedReason}</span>`
              : html`<ha-icon icon="mdi:check-circle-outline"></ha-icon><span>Ready to review and apply.</span>`}
          </div>
          <div class="action-buttons">
            ${session.dirty
              ? html`<ha-button appearance="plain" destructive @click=${this._discardDraft}>Discard draft</ha-button>`
              : nothing}
            <ha-button appearance="plain" @click=${() => this._mainDialog.closeDialog()}>Close</ha-button>
            <ha-button
              appearance="accent"
              .disabled=${Boolean(this.saveBlockedReason)}
              @click=${() =>
                this._workbenchRoute === 'review' ? this._requestApply() : this._goToRoute('review')}
            >
              ${this._workbenchRoute === 'review' ? 'Apply changes' : 'Review & Apply'}
            </ha-button>
          </div>
        </footer>

        <div class="preview-scrim" ?open=${this._previewOpen} @click=${this._closePreview}></div>
        <aside class="preview-drawer" ?open=${this._previewOpen} aria-hidden=${!this._previewOpen} role="dialog" aria-modal="true" @keydown=${this._previewKeydown}>
          <div class="drawer-header"><strong>Sidebar preview</strong>
            <ha-icon-button
              .label=${'Close preview'}
              .path=${'M19,6.41 17.59,5 12,10.59 6.41,5 5,6.41 10.59,12 5,17.59 6.41,19 12,13.41 17.59,19 19,17.59 13.41,12z'}
              @click=${this._closePreview}
            ></ha-icon-button>
          </div>
          ${this._renderSidebarPreview()}
        </aside>
      </div>
    `;
  }

  private _renderWorkbenchRoute(): TemplateResult {
    const route = this._workbenchRoute;
    if (route === 'sidebar') return this._renderStage('Sidebar', 'Choose who this configuration applies to and how it is synchronized.', this._renderSettingsOverview());
    if (route === 'appearance') return this._renderStage('Appearance', 'Tune the sidebar’s title, behaviour, dimensions, theme and colours.', this._renderBaseConfig());
    if (route === 'organize') {
      return this._renderStage(
        'Organize',
        'Arrange panels and groups, then add or edit custom items in the same workspace.',
        html`
          <section class="workbench-card structure-builder">
            <div class="card-heading"><div><h2>Structure builder</h2><p>Drag rows to reorder, or use each row’s menu for keyboard-friendly move actions.</p></div></div>
            ${this._renderPanelConfig('organize')}
          </section>
          <details class="workbench-card add-items" open>
            <summary><span><strong>Add or edit custom items</strong><small>Create links, panels and actions without leaving Organize.</small></span></summary>
            ${this._renderNewItemsConfig()}
          </details>
        `
      );
    }
    if (route === 'rules') return this._renderStage('Rules', 'Manage hidden items, visibility templates and notification badges.', this._renderPanelConfig('rules'));
    if (route === 'yaml') return this._renderYamlWorkbench();
    return this._renderReview();
  }

  private _renderStage(title: string, description: string, content: TemplateResult): TemplateResult {
    return html`<section class="stage"><div class="stage-heading"><h1>${title}</h1><p>${description}</p></div>${content}</section>`;
  }

  private _renderYamlWorkbench(): TemplateResult {
    const session = this._session!;
    return this._renderStage(
      'YAML',
      'Edit the same configuration directly. Formatting runs only when you ask for it.',
      html`
        <div class="yaml-toolbar">
          <ha-button appearance="plain" @click=${this._formatYaml}><ha-icon slot="start" icon="mdi:format-align-left"></ha-icon>Format YAML</ha-button>
          <span>Shortcut: Shift + Alt + F</span>
        </div>
        <sidebar-workbench-yaml-editor
          .value=${session.rawYaml}
          .issues=${session.issues.filter((issue) => issue.route === 'yaml')}
          @yaml-changed=${this._yamlChanged}
          @format-yaml=${this._formatYaml}
        ></sidebar-workbench-yaml-editor>
        ${this._renderProblems(session.issues)}
      `
    );
  }

  private _renderReview(): TemplateResult {
    const session = this._session!;
    const info = this._configSource === 'home_assistant_profile' ? this._profileInfo : this._haConfigInfo;
    return this._renderStage(
      'Review & Apply',
      'Nothing is published until you apply. Home Assistant validation and revision checks run again immediately before writing.',
      html`
        <div class="review-grid">
          <section class="workbench-card review-summary">
            <h2>Publication</h2>
            <dl><div><dt>Target</dt><dd>${this._activeTargetName()}</dd></div><div><dt>Source</dt><dd>${this._configSource.replaceAll('_', ' ')}</dd></div><div><dt>Backup</dt><dd>${info.backup_exists || ('profile_backup_exists' in info && info.profile_backup_exists) ? 'Available' : 'Created by Home Assistant on write'}</dd></div></dl>
            <div class="review-actions">
              <ha-button appearance="plain" @click=${this._downloadCurrentDraft}>Download draft</ha-button>
              ${isHomeAssistantConfigSource(this._configSource)
                ? html`<ha-button appearance="plain" @click=${this._reloadLatestForRecovery}>Reload latest</ha-button>`
                : nothing}
            </div>
          </section>
          <section class="workbench-card"><h2>Changes</h2>
            ${session.changes.length
              ? html`<ul class="change-list">${session.changes.map((change) => html`<li><span data-kind=${change.kind}>${change.kind}</span>${change.label}</li>`)}</ul>`
              : html`<p class="empty-state">No configuration changes yet.</p>`}
          </section>
        </div>
        ${this._renderProblems(session.issues)}
        <details class="workbench-card raw-diff"><summary><strong>Raw YAML comparison</strong><small>Baseline and current draft</small></summary>
          <div class="diff-columns"><div><h3>Published</h3><pre>${session.baselineRawYaml}</pre></div><div><h3>Draft</h3><pre>${session.rawYaml}</pre></div></div>
        </details>
      `
    );
  }

  private _renderProblems(issues: ValidationIssue[]): TemplateResult {
    return html`<section class="workbench-card problems"><h2>Problems <span>${issues.length}</span></h2>
      ${issues.length
        ? html`<ul>${issues.map((issue) => html`<li><button @click=${() => this._openIssue(issue)}><ha-icon icon=${issue.severity === 'error' ? 'mdi:alert-circle' : 'mdi:alert-outline'}></ha-icon><span><strong>${issue.message}</strong><small>${issue.line ? `Line ${issue.line}, column ${issue.column || 1}` : issue.path.join('.') || issue.route}</small></span></button></li>`)}</ul>`
        : html`<p class="empty-state"><ha-icon icon="mdi:check-circle-outline"></ha-icon>No validation problems found.</p>`}
    </section>`;
  }

  private _renderDraftRecovery(offer: { state: 'matching' | 'stale'; draft: EditorDraftEnvelope }): TemplateResult {
    const stale = offer.state === 'stale';
    return html`<ha-alert alert-type=${stale ? 'warning' : 'info'} class="draft-recovery">
      <div><strong>${stale ? 'A draft was created from an older published revision.' : 'A recoverable draft is available.'}</strong>
      <span>${stale ? 'Compare or download it before choosing whether to recover it.' : `Last edited ${new Date(offer.draft.timestamp).toLocaleString()}.`}</span></div>
      <div class="draft-actions">
        ${stale ? html`<ha-button appearance="plain" @click=${() => this._downloadDraft(offer.draft)}>Download</ha-button>` : nothing}
        <ha-button appearance="plain" @click=${this._discardOfferedDraft}>Discard</ha-button>
        <ha-button appearance="accent" @click=${() => this._resumeDraft(offer.draft)}>${stale ? 'Open recovery copy' : 'Resume'}</ha-button>
      </div>
    </ha-alert>`;
  }

  private _goToRoute(route: WorkbenchRoute): void {
    this._workbenchRoute = route;
    this._session?.setRoute(route);
    if (route !== 'organize' && this._dialogPreview) this._dialogPreview._hightlightItem(null);
  }

  public navigateWorkbench(route: WorkbenchRoute): void {
    this._goToRoute(route);
  }

  private _activeTargetName(): string {
    if (this._configSource === 'home_assistant_profile') {
      if (this._selectedProfile === 'shared') return 'Shared default';
      return this._profileUsers.find((user) => user.id === this._selectedProfile)?.name || 'Personal profile';
    }
    if (this._configSource === 'home_assistant_config') return 'Shared default';
    if (this._configSource === 'static_yaml') return 'Legacy YAML file';
    return 'This browser';
  }

  private _yamlChanged(event: CustomEvent<{ yaml: string }>): void {
    event.stopPropagation();
    this._session!.setRawYaml(event.detail.yaml);
    this._rawYaml = event.detail.yaml;
    if (this._session!.yamlValid) {
      this._sidebarConfig = structuredClone(this._session!.config);
      if (this._configSource === 'static_yaml' && this._invalidConfig) {
        this._invalidConfig = { ...this._invalidConfig, config: this._sidebarConfig, valid: true };
      }
    }
  }

  private _formatYaml(): void {
    try {
      this._session!.formatYaml();
      this._rawYaml = this._session!.rawYaml;
      this._sidebarConfig = structuredClone(this._session!.config);
    } catch {
      showToast(this, { message: 'Fix YAML errors before formatting.' });
    }
  }

  private _openIssue(issue: ValidationIssue): void {
    this._goToRoute(issue.route);
    if (issue.route === 'yaml') {
      void this.updateComplete.then(() =>
        this.shadowRoot?.querySelector<SidebarWorkbenchYamlEditor>('sidebar-workbench-yaml-editor')?.revealIssue(issue)
      );
    }
  }

  private _requestApply(): void {
    this.dispatchEvent(new CustomEvent('workbench-apply', { bubbles: true, composed: true }));
  }

  private _openPreview = (): void => {
    this._previewOpen = true;
    void this.updateComplete.then(() =>
      this.shadowRoot?.querySelector<HTMLElement>('.preview-drawer ha-icon-button')?.focus()
    );
  };

  private _closePreview = (): void => {
    this._previewOpen = false;
    void this.updateComplete.then(() => this.shadowRoot?.querySelector<HTMLElement>('.preview-toggle')?.focus());
  };

  private _previewKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      this._closePreview();
      return;
    }
    if (event.key === 'Tab') {
      const drawer = this.shadowRoot?.querySelector<HTMLElement>('.preview-drawer');
      const focusable = [...(drawer?.querySelectorAll<HTMLElement>('button, ha-button, ha-icon-button, [tabindex="0"]') || [])].filter(
        (element) => !element.hasAttribute('disabled')
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable.at(-1)!;
      if (event.shiftKey && this.shadowRoot?.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && this.shadowRoot?.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }

  private _resumeDraft(draft: EditorDraftEnvelope): void {
    this._session!.resumeDraft(draft);
    this._rawYaml = draft.rawYaml;
    if (this._session!.yamlValid) this._sidebarConfig = structuredClone(this._session!.config);
    this._draftOffer = undefined;
    this._workbenchRoute = draft.baselineRevision === this._baselineRevision ? draft.activeRoute : 'review';
  }

  private _discardOfferedDraft(): void {
    this._session!.discardDraft();
    this._draftOffer = undefined;
  }

  private _downloadDraft(draft: EditorDraftEnvelope): void {
    const url = URL.createObjectURL(new Blob([draft.rawYaml], { type: 'application/x-yaml' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'sidebar-organizer-recovered-draft.yaml';
    anchor.click();
    URL.revokeObjectURL(url);
  }

  private _downloadCurrentDraft = (): void => {
    this._downloadDraft({
      version: 1,
      userId: this.hass.user?.id || 'anonymous',
      source: this._configSource,
      target: this._configSource === 'home_assistant_profile' ? this._selectedProfile : 'shared',
      rawYaml: this._session!.rawYaml,
      baselineRevision: this._baselineRevision || null,
      activeRoute: this._workbenchRoute,
      timestamp: Date.now(),
    });
  };

  private _reloadLatestForRecovery = async (): Promise<void> => {
    const confirmed = await showConfirmDialog(
      this,
      'Reload the latest Home Assistant version? Your current draft will remain available as a recovery copy.',
      'Reload latest',
      'Keep editing'
    );
    if (!confirmed) return;
    this._session?.destroy();
    this._session = undefined;
    this._sessionIdentity = undefined;
    if (this._configSource === 'home_assistant_profile') await this._reloadHomeAssistantProfile();
    else await this._reloadHomeAssistantConfig(false);
    this._workbenchRoute = 'review';
    this.requestUpdate();
  };

  private _discardDraft = async (): Promise<void> => {
    const confirmed = await showConfirmDialog(this, 'Discard this local draft and restore the published configuration?', 'Discard', 'Keep editing');
    if (!confirmed) return;
    this._session!.discardDraft();
    this._rawYaml = this._baselineRawYaml;
    this._sidebarConfig = structuredClone(this._baselineConfig);
    this._sessionIdentity = undefined;
    this.requestUpdate();
  };

  public _markSessionApplied(): void {
    const rawYaml = this._rawYaml.trim() ? this._rawYaml : YAML.stringify(this._sidebarConfig);
    this._session?.markApplied(rawYaml, this._sidebarConfig, this._baselineRevision);
  }

  private _createStore(): void {
    if (this._store) return;
    this._store = new EditorStore(this);
    console.log('Store created ...', this._store);
  }
  private _renderSettingsOverview(): TemplateResult {
    const source = this._configSource;
    const usesHomeAssistant = source === 'home_assistant_config' || source === 'home_assistant_profile';
    const selectedUser = this._profileUsers.find((user) => user.id === this._selectedProfile);
    const activeConfiguration =
      source === 'home_assistant_profile'
        ? `Personal profile — ${selectedUser?.name || this.hass.user?.name || 'current user'}`
        : source === 'home_assistant_config'
          ? 'Shared default'
          : source === 'static_yaml'
            ? 'Legacy /local YAML file'
            : 'This browser only';
    const storageDescription = usesHomeAssistant
      ? 'Saved by Home Assistant and automatically used on every device where this user signs in.'
      : source === 'static_yaml'
        ? 'Loaded from a legacy public YAML file. Changes are not managed by Home Assistant.'
        : 'Saved only in this browser. It will not follow the user to another device.';
    const info = source === 'home_assistant_profile' ? this._profileInfo : this._haConfigInfo;

    return html`
      <section class="settings-overview">
        <div class="settings-card">
          <div class="settings-card-heading">
            <ha-icon icon=${usesHomeAssistant ? 'mdi:cloud-sync-outline' : 'mdi:database-outline'}></ha-icon>
            <div>
              <h2>Storage and user profiles</h2>
              <p>${storageDescription}</p>
            </div>
            <span class="status-badge" data-active=${usesHomeAssistant}>${usesHomeAssistant ? 'Synced' : 'Local'}</span>
          </div>

          <div class="source-summary">
            <span>Currently editing</span>
            <strong>${activeConfiguration}</strong>
          </div>

          ${this._panelWarnings.map(
            (warning) => html`<ha-alert alert-type="warning" class="panel-warning">${warning}</ha-alert>`
          )}
          ${this._invalidConfig && hasBlockingConfigErrors(this._invalidConfig)
            ? html`<ha-alert alert-type="error">
                A panel is assigned more than once. Open Panels and remove duplicate assignments before saving.
              </ha-alert>`
            : nothing}
          ${this._haConfigErrors.length
            ? html`<ha-alert alert-type="error">${this._haConfigErrors.join(' ')}</ha-alert>`
            : nothing}
          ${usesHomeAssistant
            ? this._renderProfileSelector()
            : html`<ha-alert alert-type="info">
                Install and configure the Sidebar Organizer integration to sync sidebars through Home Assistant.
              </ha-alert>`}
          ${usesHomeAssistant
            ? html`<details class="technical-details">
                <summary>Technical details and maintenance</summary>
                ${this._renderHaDiagnostics(info)}
              </details>`
            : nothing}
        </div>
      </section>
    `;
  }

  private _renderSidebarPreview(): TemplateResult {
    const previewStyles = {
      '--so-force-transparent-background':
        this._sidebarConfig.force_transparent_background === true ? 'transparent' : undefined,
    };
    return html`
      <div id="sidebar-preview" style=${styleMap(previewStyles)}>
        <sidebar-dialog-preview
          .hass=${this.hass}
          ._store=${this._store}
          ._sidebarConfig=${this._sidebarConfig}
          .invalidConfig=${!this.isValidConfig}
          @item-clicked=${this._handleItemClicked}
        ></sidebar-dialog-preview>
      </div>
    `;
  }

  private _renderBaseConfig(): TemplateResult {
    return html` <sidebar-dialog-colors
      .hass=${this.hass}
      ._store=${this._store}
      ._sidebarConfig=${this._sidebarConfig}
      @sidebar-changed=${this._handleSidebarChanged}
    ></sidebar-dialog-colors>`;
  }

  private _renderPanelConfig(workbenchMode?: 'organize' | 'rules'): TemplateResult {
    return html` <sidebar-dialog-panels
      .hass=${this.hass}
      ._store=${this._store}
      ._sidebarConfig=${this._sidebarConfig}
      .workbenchMode=${workbenchMode}
      @sidebar-changed=${this._handleSidebarChanged}
    ></sidebar-dialog-panels>`;
  }

  private _renderNewItemsConfig(): TemplateResult {
    return html`
      <sidebar-dialog-new-items
        .hass=${this.hass}
        ._store=${this._store}
        ._sidebarConfig=${this._sidebarConfig}
        @sidebar-changed=${this._handleSidebarChanged}
        @item-clicked=${this._handleItemClicked}
      ></sidebar-dialog-new-items>
    `;
  }

  private _renderProfileSelector(): TemplateResult {
    const currentUserId = this.hass.user?.id;
    const options = [
      { value: 'shared', label: 'Shared default' },
      ...this._profileUsers
        .filter(
          (user) =>
            (user.is_active && !user.system_generated) ||
            (this.hass.user?.is_admin && !user.is_active && user.profile_exists)
        )
        .map((user) => ({
          value: user.id,
          label: `${user.name}${user.id === currentUserId ? ' (you)' : ''}${!user.is_active ? ' — deleted user' : user.profile_exists ? '' : ' — inherited'}`,
        })),
    ];
    const selectedUser = this._profileUsers.find((user) => user.id === this._selectedProfile);
    const canManageSelected = Boolean(
      this._selectedProfile !== 'shared' &&
      (this.hass.user?.is_admin || this._selectedProfile === currentUserId) &&
      this._profileInfo.allow_write
    );

    return html`
      <div class="profile-selector">
        <div class="profile-selector-heading">
          <strong>Sidebar used by</strong>
          <span>Choose whose sidebar you want to view or manage.</span>
        </div>
        <ha-selector
          .hass=${this.hass}
          .selector=${{ select: { mode: 'dropdown', options } }}
          .value=${this._selectedProfile}
          @value-changed=${this._handleProfileSelected}
        ></ha-selector>
        <span>
          ${this._selectedProfile === 'shared'
            ? 'The shared default is used automatically by everyone without a personal profile.'
            : this._profileInfo.profile_exists
              ? `${selectedUser?.name || this._selectedProfile} has a personal sidebar that overrides the shared default.`
              : `${selectedUser?.name || this._selectedProfile} currently inherits the shared default.`}
        </span>
        ${this._selectedProfile !== 'shared' && !this._profileInfo.profile_exists && canManageSelected
          ? html`<ha-button appearance="plain" size="s" @click=${this._createSelectedProfile}
              >Create personal copy</ha-button
            >`
          : nothing}
        ${this._selectedProfile !== 'shared' && this._profileInfo.profile_exists && canManageSelected
          ? html`<ha-button appearance="plain" size="s" @click=${this._deleteSelectedProfile}
              >Reset to shared default</ha-button
            >`
          : nothing}
        ${this.hass.user?.is_admin && this._selectedProfile !== 'shared'
          ? html`<ha-alert alert-type="info">
              Preview uses your administrator panel access. Panels unavailable to the selected user are ignored at
              runtime.
            </ha-alert>`
          : nothing}
        ${this.hass.user?.is_admin && canManageSelected && this._selectedProfile !== 'shared' && selectedUser?.is_active
          ? this._renderCopyProfileControls()
          : nothing}
        ${(this._selectedProfile === 'shared' || this._selectedProfile === currentUserId) &&
        (this._configSource === 'home_assistant_config' || this._configSource === 'home_assistant_profile')
          ? html`<ha-formfield label="Sync collapsed groups across devices">
              <ha-switch
                .checked=${this._syncCollapsedGroups}
                ?disabled=${!(this._configSource === 'home_assistant_profile'
                  ? this._profileInfo.allow_preference_write
                  : this._haConfigInfo.allow_preference_write)}
                @change=${this._handlePreferenceSyncChanged}
              ></ha-switch>
            </ha-formfield>`
          : nothing}
      </div>
    `;
  }

  private _renderCopyProfileControls(): TemplateResult {
    const options = [
      { value: 'shared', label: 'Shared default' },
      ...this._profileUsers
        .filter((user) => user.profile_exists && user.id !== this._selectedProfile)
        .map((user) => ({ value: user.id, label: user.name })),
    ];
    return html`
      <div class="profile-copy-controls">
        <span>Copy configuration from</span>
        <ha-selector
          .hass=${this.hass}
          .selector=${{ select: { mode: 'dropdown', options } }}
          .value=${this._copySource}
          @value-changed=${(event: CustomEvent<{ value: string }>) => (this._copySource = event.detail.value)}
        ></ha-selector>
        <ha-button appearance="plain" size="s" @click=${this._copyIntoSelectedProfile}>Copy to selected user</ha-button>
      </div>
    `;
  }

  private _renderSyncStatus(info: ConfigProviderInfo, useHaConfig: boolean, useJsonFile: boolean): TemplateResult {
    const BTN_LABEL = TRANSLATED_LABEL.BTN_LABEL;
    const label = useHaConfig
      ? this._configSource === 'home_assistant_profile'
        ? info.allow_write
          ? 'Personal profile synced through Home Assistant'
          : 'Personal profile is read-only'
        : info.allow_write
          ? 'Synced to Home Assistant config'
          : 'Home Assistant config is read-only'
      : useJsonFile
        ? 'Using legacy /local YAML'
        : 'Using browser storage fallback';
    const icon = useHaConfig ? 'mdi:sync' : useJsonFile ? 'mdi:file-code-outline' : 'mdi:database';

    return html`
      <div class="header-row">
        <div class="sync-status">
          <ha-icon .icon=${icon}></ha-icon>
          <span>${label}</span>
        </div>
        <ha-button appearance="plain" size="s" .label=${BTN_LABEL.UPLOAD} @click=${() => this._uploadConfigFile()}
          >${BTN_LABEL.UPLOAD}</ha-button
        >
      </div>
    `;
  }

  private _renderHaDiagnostics(info: ConfigProviderInfo): TemplateResult {
    return html`
      <div class="ha-config-diagnostics">
        ${this._renderDiagnosticRow('Backend loaded', info.available || info.backend_loaded)}
        ${this._renderDiagnosticRow('Config file exists', info.exists)}
        ${this._renderDiagnosticRow('Write enabled', info.allow_write)}
        ${this._configSource === 'home_assistant_profile'
          ? this._renderDiagnosticRow('Personal profile exists', this._profileInfo.profile_exists)
          : nothing}
        <span>Path: ${info.config_path || 'not reported'}</span>
        ${this._configSource === 'home_assistant_config' && info.profiles_path
          ? html`<span>Profiles: ${info.profiles_path}</span>`
          : nothing}
        ${info.storage_health
          ? html`
              <span>Profile storage owned: ${info.storage_health.profile_directory_owned ? 'yes' : 'no'}</span>
              <span>Filesystem watcher active: ${info.storage_health.watcher_active ? 'yes' : 'no'}</span>
              ${info.storage_health.profile_count === undefined
                ? nothing
                : html`<span>Personal profiles: ${info.storage_health.profile_count}</span>`}
            `
          : nothing}
        <span>Last modified: ${this._formatLastModified(info.last_modified)}</span>
        <span>Schema: v${info.schema_version || 1}</span>
        <span>Revision: ${info.revision ? info.revision.slice(0, 12) : 'not created'}</span>
        <span>
          Previous version:
          ${this._configSource === 'home_assistant_profile'
            ? this._profileInfo.profile_backup_exists
              ? 'available'
              : 'not available'
            : info.backup_exists
              ? 'available'
              : 'not available'}
        </span>
      </div>
      <div class="ha-config-actions">
        <ha-button
          appearance="plain"
          size="s"
          @click=${this._configSource === 'home_assistant_profile'
            ? this._reloadHomeAssistantProfile
            : this._reloadHomeAssistantConfig}
          >Reload from HA config</ha-button
        >
        <ha-button appearance="plain" size="s" @click=${this._validateHomeAssistantYaml}>Validate YAML</ha-button>
        ${(this._configSource === 'home_assistant_profile'
          ? this._profileInfo.profile_backup_exists
          : info.backup_exists) && this.canWriteCurrentSource
          ? html`<ha-button appearance="plain" size="s" @click=${this._restorePreviousVersion}
              >Restore previous version</ha-button
            >`
          : nothing}
        <ha-button appearance="plain" size="s" @click=${this._downloadDiagnostics}>Download diagnostics</ha-button>
      </div>
    `;
  }

  private _renderDiagnosticRow(label: string, value?: boolean): TemplateResult {
    return html`<span>${label}: ${value ? 'yes' : 'no'}</span>`;
  }

  private _downloadDiagnostics = (): void => {
    const sanitizeInfo = (info: ConfigProviderInfo | ProfileConfigInfo | undefined) => {
      if (!info) return undefined;
      const safe = { ...info } as ConfigProviderInfo & { user_id?: string };
      delete safe.config_path;
      delete safe.profiles_path;
      delete safe.user_id;
      return safe;
    };
    const report = {
      generated_at: new Date().toISOString(),
      sidebar_organizer_version: VERSION,
      home_assistant_version: this.hass.config.version,
      user_is_admin: Boolean(this.hass.user?.is_admin),
      source: this._configSource,
      selected_profile: this._selectedProfile === 'shared' ? 'shared' : 'user',
      config_info: sanitizeInfo(
        this._configSource === 'home_assistant_profile' ? this._profileInfo : this._haConfigInfo
      ),
      diagnostics: sanitizeInfo(this._haDiagnostics),
      runtime: window.SidebarOrganizer?.diagnostics,
      validation_errors: this._haConfigErrors,
      panel_warnings: this._panelWarnings,
      dirty: this.hasUnsavedChanges,
    };
    const url = URL.createObjectURL(new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `sidebar-organizer-diagnostics-${new Date().toISOString().replaceAll(':', '-')}.json`;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 0);
  };

  private _uploadConfigFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.yaml';
    input.style.display = 'none';
    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) {
        return;
      }
      this._uploading = true;
      const reader = new FileReader();
      reader.onload = async (ev) => {
        try {
          const content = ev.target?.result as string;
          const parsed = parseSidebarYamlConfig(content);
          if (!parsed.valid || !parsed.config) {
            await showAlertDialog(this, `${ALERT_MSG.CONFIG_INVALID}\n${parsed.errors.join('\n')}`);
            return;
          }
          const newConfig = parsed.config;
          const checkedConfig = await isItemsValid(newConfig, this.hass, true);
          if (typeof checkedConfig !== 'object' || checkedConfig === null) {
            return;
          }

          if (!checkedConfig.valid) {
            this._invalidConfig = checkedConfig;
            await showAlertDialog(this, ALERT_MSG.INVALID_UPLOADED_CONFIG);
            this.requestUpdate();
          } else {
            this._invalidConfig = undefined;
            const saveConfirm = await showConfirmDialog(this, ALERT_MSG.UPLOAD_SUCCESS_VALID_RELOAD, 'OK');
            if (!saveConfirm) {
              return;
            }

            this._sidebarConfig = newConfig;
            if (this._configSource === 'home_assistant_config' || this._configSource === 'home_assistant_profile') {
              this._rawYaml = content;
            }
            if (this._configSource === 'home_assistant_config' || this._configSource === 'home_assistant_profile') {
              const saved =
                this._configSource === 'home_assistant_profile'
                  ? await this._saveHomeAssistantProfile()
                  : await this._saveHomeAssistantConfig();
              if (!saved) return;
              void window.SidebarOrganizer.run();
              return;
            }
            const resetConfigPromise = () =>
              new Promise<void>((resolve) => {
                this._configSource = 'browser_storage';
                this._useConfigFile = false;
                setConfigSource('browser_storage');
                setStorage(STORAGE.UI_CONFIG, this._sidebarConfig);
                removeStorage(STORAGE.PANEL_ORDER);
                removeStorage(STORAGE.HIDDEN_PANELS);
                resolve();
              });
            await resetConfigPromise();

            void window.SidebarOrganizer.run();
          }
        } catch (e) {
          console.error('Error parsing YAML file', e);
          await showAlertDialog(this, e instanceof Error ? e.message : String(e));
        } finally {
          this._uploading = false;
        }
      };
      reader.onerror = () => {
        this._uploading = false;
        showAlertDialog(this, 'Could not read the selected YAML file.');
      };
      reader.readAsText(file);
    };
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  }

  private _handleSidebarChanged(event: CustomEvent) {
    event.stopPropagation();

    const newConfig = event.detail;
    if (this._session && !this._session.yamlValid) return;
    this._sidebarConfig = newConfig;
    if (this._configSource === 'static_yaml' && this._invalidConfig) {
      this._invalidConfig = { ...this._invalidConfig, config: newConfig, valid: true };
    }
    if (this._session) {
      this._session.setConfig(newConfig);
      this._rawYaml = this._session.rawYaml;
    }
  }

  private _validateStoragePanels = async (): Promise<void> => {
    if (this._configSource !== 'browser_storage') return;
    const currentPanelOrder = getStorageStringArray(STORAGE.PANEL_ORDER);

    const hiddenItems = getHiddenPanels();

    const allPanels = this._utils.ARRAY.union(currentPanelOrder, hiddenItems);

    const { added, removed } = await comparePanelItems(this.hass, allPanels);
    if (Boolean(added.length || removed.length)) {
      // Silently merge panel changes into storage without requiring reload
      console.log('Storage panels have changes compared to current panels:', { added, removed });

      let updatedOrder = [...currentPanelOrder];
      let updatedHidden = [...hiddenItems];

      // Merge added panels into stored panel order
      if (added.length > 0) {
        updatedOrder = [...updatedOrder, ...added];
      }
      // Remove panels that are no longer shown in sidebar
      if (removed.length > 0) {
        const removedSet = new Set(removed);
        updatedOrder = updatedOrder.filter((item: string) => !removedSet.has(item));
        updatedHidden = [...new Set([...updatedHidden, ...removed])];
        setStorage(STORAGE.HIDDEN_PANELS, updatedHidden);
      }

      setStorage(STORAGE.PANEL_ORDER, updatedOrder);

      // Continue with updated data instead of reloading
      this._sidebarConfig = getStorageConfig() || {};
      removeStorage(STORAGE.HIDDEN_PANELS);
      this._updateSidebarItems(updatedOrder, updatedHidden);
      return;
    } else {
      //success
      console.log(
        '%cSIDEBAR-DIALOG:%c ✅ Panel order is up to date.. ',
        'color: #40c057;',
        'color: #40c057; font-weight: 600;'
      );
      this._sidebarConfig = getStorageConfig() || {};
      removeStorage(STORAGE.HIDDEN_PANELS);
      this._updateSidebarItems(currentPanelOrder, hiddenItems);
    }
  };

  private _validateConfigFile = async (): Promise<void> => {
    if (this._configSource !== 'static_yaml') return;
    const config = await fetchFileConfig();
    if (!config) return;

    const result = (await isItemsValid(config, this.hass, true)) as INVALID_CONFIG;
    console.log('Config file validation result', result);
    if (typeof result === 'object' && result !== null) {
      this._invalidConfig = result;
      this._sidebarConfig = structuredClone(result.config);
      this._baselineConfig = structuredClone(result.config);
      this._rawYaml = YAML.stringify(result.config);
      this._baselineRawYaml = this._rawYaml;
    }
    this._configLoaded = true;
  };

  private _validateHaConfig = async (): Promise<void> => {
    if (this._configSource !== 'home_assistant_config') return;
    await this._refreshHaConfigInfo();
    if (!this._haConfigInfo.available) {
      this._clearServerYamlDraft();
      this._haConfigErrors = [this._haConfigInfo.error || ALERT_MSG.HA_CONFIG_UNAVAILABLE];
      this._panelWarnings = [];
      this._sidebarConfig = {};
      this._baselineConfig = structuredClone(this._sidebarConfig);
      this._baselineRevision = undefined;
      this._configLoaded = true;
      this._mainDialog._configValid = false;
      return;
    }

    const provider = new HomeAssistantConfigProvider(this.hass);
    const result = await provider.read();
    if (!result.valid || !result.config) {
      this._rawYaml = result.rawYaml || '';
      this._baselineRawYaml = this._rawYaml;
      this._haConfigErrors = result.errors;
      this._panelWarnings = [];
      this._sidebarConfig = {};
      this._baselineConfig = structuredClone(this._sidebarConfig);
      this._baselineRevision = result.revision;
      this._lastLoadedHaConfigModified = undefined;
      this._configLoaded = true;
      this._mainDialog._configValid = false;
      return;
    }

    this._haConfigErrors = [];
    this._rawYaml = result.rawYaml || '';
    this._baselineRawYaml = this._rawYaml;
    this._baselineRevision = result.revision;
    this._lastLoadedHaConfigModified = result.last_modified ?? undefined;
    this._sidebarConfig = result.config;
    this._baselineConfig = structuredClone(result.config);
    const validationResult = (await isItemsValid(result.config, this.hass, true)) as INVALID_CONFIG;
    if (typeof validationResult === 'object' && validationResult !== null) {
      this._applyHomeAssistantPanelValidation(validationResult);
    }
    const currentPanelOrder = getStorageStringArray(STORAGE.PANEL_ORDER);
    this._updateSidebarItems(currentPanelOrder, getHiddenPanels());
    this._startHaConfigSubscription();
  };

  private _applyHomeAssistantPanelValidation(validation: INVALID_CONFIG): void {
    const defaultPanel = getDefaultPanelUrlPath(this.hass);
    const unavailablePanels = Array.from(
      new Set((validation.invalidItems || []).filter((panel) => panel !== defaultPanel))
    );
    const warnings: string[] = [];

    if (validation.hasDefaultInGroupsOrBottom && defaultPanel) {
      warnings.push(
        `Your default dashboard (${defaultPanel}) stays fixed in the sidebar for this account, so its grouped copy is ignored. The saved configuration is unchanged.`
      );
    }
    if (unavailablePanels.length) {
      warnings.push(
        `These panels are not available to the account currently previewing this sidebar, so they are preserved but skipped: ${unavailablePanels.join(', ')}.`
      );
    }

    this._panelWarnings = warnings;
    this._invalidConfig = hasBlockingConfigErrors(validation) ? validation : undefined;
  }

  private _refreshProfileDirectory = async (): Promise<void> => {
    const currentUser = this.hass.user;
    if (!currentUser) return;
    const currentInfo = await new HomeAssistantProfileProvider(this.hass).info();
    if (!currentInfo.available) {
      this._preferencesRevision = undefined;
      this._preferenceCollapsedGroups = [];
      this._preferenceKnownGroups = undefined;
      this._syncCollapsedGroups = false;
      return;
    }
    try {
      const preferences = await new HomeAssistantProfileProvider(this.hass).readPreferences();
      this._preferencesRevision = preferences.revision;
      this._preferenceCollapsedGroups = preferences.preferences.collapsed_groups;
      this._preferenceKnownGroups = preferences.preferences.known_groups;
      this._syncCollapsedGroups = preferences.preferences.sync_collapsed_groups !== false;
    } catch (err) {
      this._preferencesRevision = undefined;
      this._preferenceCollapsedGroups = [];
      this._preferenceKnownGroups = undefined;
      this._syncCollapsedGroups = false;
      console.warn('Unable to read Sidebar Organizer preference settings:', err);
    }

    if (currentUser.is_admin) {
      try {
        const result = await new HomeAssistantProfileProvider(this.hass).list();
        this._profileUsers = [
          ...result.users,
          ...result.orphans.map((id) => ({
            id,
            name: id,
            is_active: false,
            is_admin: false,
            system_generated: false,
            profile_exists: true,
          })),
        ];
        return;
      } catch (err) {
        console.warn('Unable to list Sidebar Organizer profiles:', err);
      }
    }

    this._profileUsers = [
      {
        id: currentUser.id,
        name: currentUser.name,
        is_active: true,
        is_admin: currentUser.is_admin,
        system_generated: false,
        profile_exists: Boolean(currentInfo.profile_exists),
      },
    ];
  };

  private _handlePreferenceSyncChanged = async (event: Event): Promise<void> => {
    const enabled = (event.target as HTMLInputElement).checked;
    try {
      const result = await new HomeAssistantProfileProvider(this.hass).writePreferences(
        this._preferenceCollapsedGroups,
        this._preferencesRevision,
        this._preferenceKnownGroups,
        enabled
      );
      this._preferencesRevision = result.revision;
      this._syncCollapsedGroups = result.preferences.sync_collapsed_groups !== false;
      showToast(this, {
        message: this._syncCollapsedGroups
          ? 'Collapsed groups will sync across devices.'
          : 'Collapsed groups will remain local to each device.',
      });
      void window.SidebarOrganizer.run();
    } catch (err) {
      await showAlertDialog(this, this._formatSaveError(err));
      this.requestUpdate();
    }
  };

  private _handleProfileSelected = async (event: CustomEvent<{ value: string }>): Promise<void> => {
    event.stopPropagation();
    const selected = event.detail.value;
    if (!selected || selected === this._selectedProfile) return;
    if (this.hasUnsavedChanges) {
      const discard = await showConfirmDialog(
        this,
        'Switch profiles? Your current draft will stay saved on this device.',
        'Switch profile',
        'Stay here'
      );
      if (!discard) {
        this.requestUpdate();
        return;
      }
    }

    this._selectedProfile = selected;
    this._clearServerYamlDraft();
    this._configLoaded = false;
    if (selected === 'shared') {
      this._profileLoadGeneration += 1;
      this._profileSubscription.dispose();
      this._configSource = 'home_assistant_config';
      await this._validateHaConfig();
    } else {
      this._configSource = 'home_assistant_profile';
      await this._validateHaProfile(selected);
    }
    this._mainDialog._saveDisabled = true;
  };

  private _validateHaProfile = async (userId: string): Promise<void> => {
    const loadGeneration = ++this._profileLoadGeneration;
    const subscriptionGeneration = this._profileSubscription.begin();
    const provider = new HomeAssistantProfileProvider(this.hass, userId);
    const result = await provider.read();
    if (
      !this._connected ||
      loadGeneration !== this._profileLoadGeneration ||
      this._selectedProfile !== userId ||
      this._configSource !== 'home_assistant_profile'
    ) {
      return;
    }
    if (!result.available || !result.valid || !result.config) {
      if (result.available) {
        this._rawYaml = result.rawYaml || '';
        this._baselineRawYaml = this._rawYaml;
      } else {
        this._clearServerYamlDraft();
      }
      this._profileInfo = result;
      this._haConfigErrors = result.errors;
      this._panelWarnings = [];
      this._sidebarConfig = {};
      this._baselineConfig = structuredClone(this._sidebarConfig);
      this._baselineRevision = result.revision;
      this._configLoaded = true;
      this._mainDialog._configValid = false;
      return;
    }

    this._profileInfo = result;
    this._haConfigErrors = [];
    this._rawYaml = result.rawYaml || '';
    this._baselineRawYaml = this._rawYaml;
    this._baselineRevision = result.revision;
    this._lastLoadedHaConfigModified = result.last_modified ?? undefined;
    this._sidebarConfig = result.config;
    this._baselineConfig = structuredClone(result.config);
    const validationResult = (await isItemsValid(result.config, this.hass, true)) as INVALID_CONFIG;
    if (typeof validationResult === 'object' && validationResult !== null) {
      this._applyHomeAssistantPanelValidation(validationResult);
    }
    const currentPanelOrder = getStorageStringArray(STORAGE.PANEL_ORDER);
    this._updateSidebarItems(currentPanelOrder, getHiddenPanels());
    if (userId !== this.hass.user?.id) {
      // Panel availability and native hidden state belong to the signed-in
      // administrator, not the target user. Never rewrite the target profile
      // merely because its panels are unavailable in the admin's session.
      this._sidebarConfig = structuredClone(result.config);
      this._baselineConfig = structuredClone(result.config);
    }
    this._mainDialog._configValid = this.isValidConfig;
    this._startHaConfigSubscription();
    await this._subscribeSelectedProfile(userId, loadGeneration, subscriptionGeneration);
  };

  public _saveHomeAssistantProfile = async (): Promise<boolean> =>
    await this._withSaveLock(this._saveHomeAssistantProfileUnlocked);

  private _saveHomeAssistantProfileUnlocked = async (): Promise<boolean> => {
    if (this._selectedProfile === 'shared') return this._saveHomeAssistantConfigUnlocked();
    const provider = new HomeAssistantProfileProvider(this.hass, this._selectedProfile);
    const latestInfo = await provider.info();
    const changedSinceLoad = Boolean(this._baselineRevision && latestInfo.revision !== this._baselineRevision);
    if (
      changedSinceLoad &&
      !(await showConfirmDialog(
        this,
        'This profile changed after you opened it. Review or download your draft before explicitly overwriting the latest version.',
        'Overwrite latest',
        'Cancel'
      ))
    ) {
      this._workbenchRoute = 'review';
      return false;
    }
    const yaml = this._rawYaml.trim() ? this._rawYaml : YAML.stringify(this._sidebarConfig);
    const validation = await provider.validate(yaml);
    if (!validation.valid) {
      this._haConfigErrors = validation.errors;
      await showAlertDialog(this, `${ALERT_MSG.CONFIG_INVALID}\n${validation.errors.join('\n')}`);
      return false;
    }

    try {
      this._profileInfo = await provider.write(yaml, changedSinceLoad ? latestInfo.revision : this._profileInfo.revision);
      this._rawYaml = yaml;
      this._baselineRawYaml = yaml;
      this._haConfigErrors = [];
      this._baselineConfig = structuredClone(this._sidebarConfig);
      this._baselineRevision = this._profileInfo.revision;
      const selectedUser = this._profileUsers.find((user) => user.id === this._selectedProfile);
      if (selectedUser) selectedUser.profile_exists = true;
      if (this._selectedProfile === this.hass.user?.id) {
        setStorage(getHaConfigCacheKey('home_assistant_profile', this._selectedProfile), this._sidebarConfig);
        if (this._profileInfo.revision) setStorage(STORAGE.HA_CONFIG_REVISION, this._profileInfo.revision);
      }
      showToast(this, { message: 'Saved Sidebar Organizer user profile.' });
      return true;
    } catch (err) {
      const message = this._formatSaveError(err);
      this._haConfigErrors = [message];
      await showAlertDialog(this, message);
      return false;
    }
  };

  private _createSelectedProfile = async (): Promise<void> => {
    const saved = await this._saveHomeAssistantProfile();
    if (!saved) return;
    if (this._selectedProfile === this.hass.user?.id) {
      void window.SidebarOrganizer.run();
      return;
    }
    this.requestUpdate();
  };

  private _deleteSelectedProfile = async (): Promise<void> => {
    if (this._selectedProfile === 'shared') return;
    const confirmed = await showConfirmDialog(
      this,
      'Delete this personal sidebar profile and return the user to the shared default?',
      'Reset profile',
      'Cancel'
    );
    if (!confirmed) return;
    try {
      const provider = new HomeAssistantProfileProvider(this.hass, this._selectedProfile);
      this._profileInfo = await provider.delete(this._profileInfo.revision);
      const selectedUser = this._profileUsers.find((user) => user.id === this._selectedProfile);
      if (selectedUser) selectedUser.profile_exists = false;
      if (selectedUser && !selectedUser.is_active) {
        this._profileUsers = this._profileUsers.filter((user) => user.id !== selectedUser.id);
        this._selectedProfile = 'shared';
        this._configSource = 'home_assistant_config';
        await this._validateHaConfig();
      } else {
        await this._reloadHomeAssistantProfile();
      }
      showToast(this, { message: 'Personal profile removed. Using the shared default.' });
      if (this._selectedProfile === this.hass.user?.id) void window.SidebarOrganizer.run();
    } catch (err) {
      await showAlertDialog(this, err instanceof Error ? err.message : String(err));
    }
  };

  private _copyIntoSelectedProfile = async (): Promise<void> => {
    if (this._selectedProfile === 'shared') return;
    const confirmed = await showConfirmDialog(
      this,
      this._profileInfo.profile_exists
        ? 'Replace the selected user profile with the chosen configuration?'
        : 'Create this user profile from the chosen configuration?',
      'Copy profile',
      'Cancel'
    );
    if (!confirmed) return;
    try {
      this._profileInfo = await new HomeAssistantProfileProvider(this.hass).copy(
        this._copySource,
        this._selectedProfile,
        this._profileInfo.revision
      );
      const selectedUser = this._profileUsers.find((user) => user.id === this._selectedProfile);
      if (selectedUser) selectedUser.profile_exists = true;
      await this._reloadHomeAssistantProfile();
      showToast(this, { message: 'Copied configuration to the selected user.' });
      if (this._selectedProfile === this.hass.user?.id) void window.SidebarOrganizer.run();
    } catch (err) {
      await showAlertDialog(this, err instanceof Error ? err.message : String(err));
    }
  };

  private _reloadHomeAssistantProfile = async (): Promise<void> => {
    if (this._selectedProfile === 'shared') return;
    await this._validateHaProfile(this._selectedProfile);
    this._mainDialog._saveDisabled = true;
  };

  private _subscribeSelectedProfile = async (
    userId: string,
    loadGeneration: number,
    subscriptionGeneration: number
  ): Promise<void> => {
    const selectedUser = this._profileUsers.find((user) => user.id === userId);
    if (!this._connected || selectedUser?.is_active === false) return;
    const unsubscribe = await new HomeAssistantProfileProvider(this.hass, userId).subscribe(async (info) => {
      if (!this._connected || loadGeneration !== this._profileLoadGeneration || this._selectedProfile !== userId) {
        return;
      }
      if (
        info.profile_exists === this._profileInfo.profile_exists &&
        (!info.revision || info.revision === this._profileInfo.revision)
      )
        return;
      if (!this.hasUnsavedChanges) {
        await this._reloadHomeAssistantProfile();
        return;
      }
      const reload = await showConfirmDialog(
        this,
        'This profile changed on another device while you have unsaved edits. Reload it now?',
        'Reload',
        'Later'
      );
      if (reload) await this._reloadHomeAssistantProfile();
    });
    if (!this._connected || loadGeneration !== this._profileLoadGeneration || this._selectedProfile !== userId) {
      unsubscribe();
      return;
    }
    this._profileSubscription.accept(subscriptionGeneration, unsubscribe);
  };

  private _sidebarConfigChanged(event: CustomEvent<ConfigChangedEvent>) {
    event.stopPropagation();
    const newConfig = event.detail.config as SidebarConfig;
    if (this._session && !this._session.yamlValid) return;
    this._sidebarConfig = newConfig;
    if (this._configSource === 'static_yaml' && this._invalidConfig) {
      this._invalidConfig = { ...this._invalidConfig, config: newConfig, valid: true };
    }
    if (this._session) {
      this._session.setConfig(newConfig);
      this._rawYaml = this._session.rawYaml;
    }
  }

  public _handleInvalidConfig = async (action: 'check' | 'auto-correct' | 'save') => {
    if (!this._invalidConfig || Object.keys(this._invalidConfig).length === 0) {
      console.warn('No invalid config to handle');
      return;
    }

    switch (action) {
      case 'check':
        const config = this._invalidConfig.config as SidebarConfig;
        const result = (await isItemsValid(config, this.hass, true)) as INVALID_CONFIG;
        console.log('Re-checking config validity', result.valid);
        if (typeof result === 'object' && result !== null) {
          this._invalidConfig = result;
          this.requestUpdate();
        }
        break;
      case 'auto-correct':
        console.log('Auto-correcting invalid config');
        const correctedConfig = await tryCorrectConfig(this._invalidConfig.config, this.hass);
        this._invalidConfig = { ...this._invalidConfig, config: correctedConfig };
        this._handleInvalidConfig('check');
        this.requestUpdate();
        break;
      case 'save':
        console.log('Saving config to storage');
        // check again if config is valid
        const isConfigurationValid = (await isItemsValid(this._invalidConfig.config, this.hass)) as boolean;
        if (!isConfigurationValid) {
          await showAlertDialog(this, ALERT_MSG.CONFIG_INVALID);
          return;
        } else {
          console.log('Config is valid, saving to storage');
          this._sidebarConfig = this._invalidConfig.config;
          this._invalidConfig = undefined;
          this._useConfigFile = false;
          this._configSource = 'browser_storage';
          this._mainDialog._configValid = true;
          setConfigSource('browser_storage');
          setStorage(STORAGE.UI_CONFIG, this._sidebarConfig);
          this.requestUpdate();
        }
        break;
    }
  };

  private _updateSidebarItems = (currentPanelOrder: string[], initHiddenItems: string[]): void => {
    const ARRAY_UTILS = this._utils.ARRAY;
    let configToValidate = { ...(this._sidebarConfig || {}) };
    const defaultPanel = getDefaultPanelUrlPath(this.hass);

    const hiddenItemsToRemove = ARRAY_UTILS.uniq([
      ...initHiddenItems,
      ...(configToValidate.hidden_items || []),
      defaultPanel,
    ]);
    // Clean items from config
    configToValidate = validateConfig(configToValidate, hiddenItemsToRemove);

    const hiddenItems = ARRAY_UTILS.without(configToValidate.hidden_items || [], defaultPanel);

    configToValidate.hidden_items = ARRAY_UTILS.uniq(hiddenItems);
    if (isEmpty(configToValidate.hidden_items)) {
      delete configToValidate.hidden_items;
    }

    const hasConfigChanged = JSON.stringify(this._sidebarConfig) !== JSON.stringify(configToValidate);
    const centrallyManaged =
      this._configSource === 'home_assistant_config' || this._configSource === 'home_assistant_profile';

    if (hasConfigChanged && !centrallyManaged) {
      //info
      console.log(
        '%cSIDEBAR-DIALOG:%c ℹ️ Config has changed:',
        'color: #40c057;',
        'color: #228be6;',
        { old: this._sidebarConfig },
        { new: configToValidate }
      );

      this._sidebarConfig = configToValidate;
      if (this._configSource === 'browser_storage') {
        setStorage(STORAGE.UI_CONFIG, this._sidebarConfig);
      }
    } else if (hasConfigChanged) {
      console.info(
        'Sidebar Organizer kept the Home Assistant configuration unchanged; user-specific hidden/default panels are applied only to this preview.'
      );
    }

    // Filter out defaultPanel and 'lovelace' from the current panel order
    const _sidebarItems = ARRAY_UTILS.uniq(currentPanelOrder);
    //info
    console.log('%cSIDEBAR-DIALOG:%c ℹ️ Initial ', 'color: #40c057;', 'color: #228be6;', { _sidebarItems });

    // Initialize new items
    const configNewItems = this._sidebarConfig?.new_items || [];
    this._newItems = configNewItems.map((item: NewItemConfig) => item.title!);
    // Initialize panel combinations
    this._initCombiPanels = ARRAY_UTILS.union(_sidebarItems, hiddenItems);
    // console.log('Init combi panels:', this._initCombiPanels);

    this._initPanelOrder = [..._sidebarItems];
    this._configLoaded = true;
  };

  public _saveHomeAssistantConfig = async (): Promise<boolean> =>
    await this._withSaveLock(this._saveHomeAssistantConfigUnlocked);

  private _saveHomeAssistantConfigUnlocked = async (): Promise<boolean> => {
    await this._refreshHaConfigInfo();
    if (!this._haConfigInfo.available) {
      await showAlertDialog(this, ALERT_MSG.HA_CONFIG_UNAVAILABLE);
      return false;
    }
    if (!this._haConfigInfo.allow_write) {
      await showAlertDialog(this, ALERT_MSG.HA_CONFIG_WRITE_DISABLED);
      return false;
    }

    const provider = new HomeAssistantConfigProvider(this.hass);
    const latestInfo = await provider.info();
    const changedSinceLoad = this._baselineRevision
      ? latestInfo.revision !== this._baselineRevision
      : isHaConfigModified(this._lastLoadedHaConfigModified, latestInfo.last_modified);
    if (
      changedSinceLoad &&
      !(await showConfirmDialog(
        this,
        'The Home Assistant config file changed after you loaded it. Overwrite it?',
        'Overwrite',
        'Cancel'
      ))
    ) {
      return false;
    }

    const yaml = this._rawYaml.trim() ? this._rawYaml : YAML.stringify(this._sidebarConfig);
    const validation = await provider.validate(yaml);
    if (!validation.valid) {
      this._haConfigErrors = validation.errors;
      await showAlertDialog(this, `${ALERT_MSG.CONFIG_INVALID}\n${validation.errors.join('\n')}`);
      return false;
    }

    try {
      const expectedRevision = changedSinceLoad ? latestInfo.revision : this._baselineRevision;
      this._haConfigInfo = await provider.write(yaml, expectedRevision);
      this._haDiagnostics = { ...this._haDiagnostics, ...this._haConfigInfo };
      this._lastLoadedHaConfigModified = this._haConfigInfo.last_modified ?? undefined;
      this._rawYaml = yaml;
      this._baselineRawYaml = yaml;
      this._haConfigErrors = [];
      this._baselineConfig = structuredClone(this._sidebarConfig);
      this._baselineRevision = this._haConfigInfo.revision;
      setStorage(getHaConfigCacheKey('home_assistant_config', this.hass.user?.id), this._sidebarConfig);
      if (this._haConfigInfo.last_modified != null) {
        setStorage(STORAGE.HA_CONFIG_LAST_MODIFIED, this._haConfigInfo.last_modified);
      }
      showToast(this, { message: ALERT_MSG.HA_CONFIG_SAVE_SUCCESS });
      return true;
    } catch (err) {
      const message = this._formatSaveError(err);
      this._haConfigErrors = [message];
      await showAlertDialog(this, message);
      return false;
    }
  };

  private async _withSaveLock(action: () => Promise<boolean>): Promise<boolean> {
    if (this._saving) return false;
    this._saving = true;
    this.requestUpdate();
    try {
      return await action();
    } finally {
      this._saving = false;
      this.requestUpdate();
    }
  }

  private _restorePreviousVersion = async (): Promise<void> => {
    const isProfile = this._configSource === 'home_assistant_profile';
    const confirmed = await showConfirmDialog(
      this,
      `Restore the previous ${isProfile ? 'personal profile' : 'shared configuration'}? The current version will remain available as the next backup.`,
      'Restore',
      'Cancel'
    );
    if (!confirmed) return;

    const restored = await this._withSaveLock(async () => {
      try {
        if (isProfile) {
          const provider = new HomeAssistantProfileProvider(this.hass, this._selectedProfile);
          const expectedRevision = this._profileInfo.profile_exists ? this._profileInfo.revision : null;
          this._profileInfo = await provider.restore(expectedRevision);
          await this._reloadHomeAssistantProfile();
        } else {
          const provider = new HomeAssistantConfigProvider(this.hass);
          this._haConfigInfo = await provider.restore(this._haConfigInfo.revision);
          await this._reloadHomeAssistantConfig(false);
        }
        return true;
      } catch (err) {
        await showAlertDialog(this, this._formatSaveError(err));
        return false;
      }
    });
    if (restored) showToast(this, { message: 'Restored the previous Sidebar Organizer configuration.' });
  };

  private _reloadHomeAssistantConfig = async (showMessage = true): Promise<void> => {
    const provider = new HomeAssistantConfigProvider(this.hass);
    const result = await provider.read();
    if (!result.valid || !result.config) {
      this._haConfigErrors = result.errors;
      await showAlertDialog(this, `${ALERT_MSG.CONFIG_INVALID}\n${result.errors.join('\n')}`);
      return;
    }
    this._sidebarConfig = result.config;
    this._baselineConfig = structuredClone(result.config);
    this._rawYaml = result.rawYaml || '';
    this._baselineRawYaml = this._rawYaml;
    this._baselineRevision = result.revision;
    this._lastLoadedHaConfigModified = result.last_modified ?? undefined;
    this._haConfigErrors = [];
    setStorage(getHaConfigCacheKey('home_assistant_config', this.hass.user?.id), result.config);
    if (result.last_modified != null) {
      setStorage(STORAGE.HA_CONFIG_LAST_MODIFIED, result.last_modified);
    }
    await this._refreshHaConfigInfo();
    if (showMessage) {
      showToast(this, { message: ALERT_MSG.HA_CONFIG_RELOAD_SUCCESS });
    }
  };

  private _clearServerYamlDraft(): void {
    this._rawYaml = '';
    this._baselineRawYaml = '';
  }

  private _validateHomeAssistantYaml = async (): Promise<void> => {
    const provider =
      this._configSource === 'home_assistant_profile'
        ? new HomeAssistantProfileProvider(this.hass, this._selectedProfile)
        : new HomeAssistantConfigProvider(this.hass);
    const result = await provider.validate(this._rawYaml.trim() ? this._rawYaml : YAML.stringify(this._sidebarConfig));
    this._haConfigErrors = result.errors;
    await showAlertDialog(
      this,
      result.valid ? ALERT_MSG.CONFIG_VALID : `${ALERT_MSG.CONFIG_INVALID}\n${result.errors.join('\n')}`
    );
  };

  private _refreshHaConfigInfo = async (): Promise<void> => {
    const provider = new HomeAssistantConfigProvider(this.hass);
    this._haConfigInfo = await provider.info();
    if (this._configSource === 'home_assistant_config') {
      this._haDiagnostics = await provider.diagnostics();
    }
  };

  private _startHaConfigSubscription(): void {
    const generation = this._configSubscription.begin();
    if (this._configSource !== 'home_assistant_config' || !this._connected) return;

    const provider = new HomeAssistantConfigProvider(this.hass);
    provider
      .subscribe(this._handleSharedConfigChanged)
      .then((unsubscribe) => {
        if (!this._connected || this._configSource !== 'home_assistant_config') {
          unsubscribe();
          return;
        }
        this._configSubscription.accept(generation, unsubscribe);
      })
      .catch((err) => console.warn('Could not subscribe to shared sidebar changes.', err));
  }

  private _handleSharedConfigChanged = async (info: ConfigProviderInfo): Promise<void> => {
    if (!info.revision || info.revision === this._haConfigInfo.revision) return;
    this._haConfigInfo = { ...this._haConfigInfo, ...info };
    if (!this.hasUnsavedChanges) {
      await this._reloadHomeAssistantConfig();
      return;
    }
    const reload = await showConfirmDialog(
      this,
      'The shared sidebar changed while you have unsaved edits. Reload it now?',
      'Reload',
      'Keep editing'
    );
    if (reload) await this._reloadHomeAssistantConfig();
  };

  private _legacyFrontendResourceLoaded(): boolean {
    return Array.from(document.scripts).some((script) =>
      script.src.includes('/hacsfiles/sidebar-organizer/sidebar-organizer.js')
    );
  }

  private _formatLastModified(lastModified?: number | null): string {
    if (!lastModified) return 'unknown';
    return new Date(lastModified * 1000).toLocaleString();
  }

  private _formatSaveError(err: unknown): string {
    const message = err instanceof Error ? err.message : String(err);
    return message.includes('revision_conflict') || message.toLowerCase().includes('changed after')
      ? 'This sidebar changed on another device after you opened it. Reload the latest version, then apply your changes again.'
      : message;
  }

  public get pickedItems(): string[] {
    return Array.from(this._panelConfigMap.values()).flat();
  }

  public get ungroupedItems(): string[] {
    const defaultPanel = getDefaultPanelUrlPath(this.hass);
    const assignedSet = new Set([...this.pickedItems, ...(this._sidebarConfig?.hidden_items || []), defaultPanel]);
    const ungroupedItems = this._initCombiPanels.filter((item) => !assignedSet.has(item));
    return ungroupedItems;
  }

  public get uncategorizedFromCustom(): string[] | undefined {
    if (
      !this._sidebarConfig[PANEL_TYPE.CUSTOM_GROUPS] ||
      this._sidebarConfig[PANEL_TYPE.CUSTOM_GROUPS].hasOwnProperty(PANEL_TYPE.UNCATEGORIZED_ITEMS)
    ) {
      return undefined;
    }

    return this._sidebarConfig[PANEL_TYPE.CUSTOM_GROUPS][PANEL_TYPE.UNCATEGORIZED_ITEMS];
  }

  public get pickedWithoutUncategorizedFromCustom(): string[] {
    const itemsFromCustom = this._sidebarConfig[PANEL_TYPE.CUSTOM_GROUPS]?.[PANEL_TYPE.UNCATEGORIZED_ITEMS] || [];
    const pickedWithoutUncategorizedFromCustom = Array.from(this._panelConfigMap.values())
      .flat()
      .filter((item) => !itemsFromCustom.includes(item));
    return pickedWithoutUncategorizedFromCustom;
  }

  public get uncategorizedItems(): string[] {
    const defaultPanel = getDefaultPanelUrlPath(this.hass);
    const fromCustom = this.uncategorizedFromCustom || [];
    const pickedWithoutUncategorizedFromCustom = this.pickedWithoutUncategorizedFromCustom;
    const remainingUncategorized = this._initCombiPanels.filter(
      (item) =>
        !pickedWithoutUncategorizedFromCustom.includes(item) &&
        !(this._sidebarConfig.hidden_items || []).includes(item) &&
        item !== defaultPanel
    );
    return Array.from(new Set([...fromCustom, ...remainingUncategorized]));
  }

  public _cleanItemsFromGroups = (groupType: PANEL_TYPE, itemToRemove: string[]): SidebardPanelConfig => {
    const configToClean = pick(this._sidebarConfig, [groupType]) as SidebardPanelConfig;
    return cleanItemsFromConfig(configToClean, itemToRemove);
  };

  public _getGroupOfPanel = (panel: string): string | null => {
    const group = [...this._panelConfigMap.entries()].find(([, items]) => items.includes(panel));
    return group ? group[0] : null;
  };

  private _handleItemClicked(event: CustomEvent) {
    event.stopPropagation();
    const panel = event.detail as string;
    const inGroup = this._getGroupOfPanel(panel);
    if (this._dialogPanels) {
      this._dialogPanels.clickedPanelInPreview(panel, inGroup);
    }
  }

  static get styles(): CSSResultGroup {
    return [
      css`
        :host {
          --side-dialog-gutter: 0.5rem;
          --side-dialog-padding: 1rem;
          --scrollbar-thumb-color: rgba(0, 0, 0, 0.2);
          max-width: none;
          display: flex;
          margin: 0 auto;
          min-width: 0;
          width: 100%;
        }
        button {
          font: inherit;
        }
        .workbench {
          box-sizing: border-box;
          display: grid;
          grid-template-rows: auto auto minmax(0, 1fr) auto;
          height: 100%;
          min-height: 0;
          overflow: hidden;
          width: 100%;
        }
        .workbench-header {
          align-items: center;
          border-block-end: 1px solid var(--divider-color);
          display: flex;
          gap: 12px;
          min-height: 64px;
          padding: 8px 12px;
        }
        .target-control,
        .task-link,
        .problems button {
          background: transparent;
          border: 0;
          color: var(--primary-text-color);
          cursor: pointer;
        }
        .target-control {
          align-items: center;
          border-radius: 10px;
          display: flex;
          gap: 10px;
          min-height: 48px;
          padding: 4px 10px;
          text-align: start;
        }
        .target-control:hover,
        .task-link:hover,
        .problems button:hover {
          background: var(--secondary-background-color);
        }
        .target-control span,
        .task-link span,
        .stage-heading,
        .card-heading > div {
          display: grid;
          min-width: 0;
        }
        .target-control small,
        .task-link small,
        summary small {
          color: var(--secondary-text-color);
          font-size: 0.78rem;
        }
        .header-status {
          display: flex;
          flex: 1;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: flex-end;
        }
        .status-chip {
          background: var(--secondary-background-color);
          border-radius: 999px;
          color: var(--secondary-text-color);
          font-size: 0.78rem;
          padding: 5px 9px;
        }
        .status-chip[data-state='draft'] { color: var(--warning-color, #f9a825); }
        .status-chip[data-state='error'] { color: var(--error-color); }
        .status-chip[data-state='valid'] { color: var(--success-color, #43a047); }
        .preview-toggle { display: none; min-height: 44px; }
        .workbench-body {
          display: grid;
          grid-template-columns: 220px minmax(0, 1fr) minmax(300px, 360px);
          min-height: 0;
          overflow: hidden;
        }
        .task-rail {
          border-inline-end: 1px solid var(--divider-color);
          display: flex;
          flex-direction: column;
          gap: 4px;
          overflow-y: auto;
          padding: 12px 8px;
        }
        .task-link {
          align-items: center;
          border-radius: 10px;
          display: grid;
          gap: 8px;
          grid-template-columns: 24px 24px minmax(0, 1fr) auto;
          min-height: 56px;
          padding: 7px 8px;
          text-align: start;
          width: 100%;
        }
        .task-link[data-active='true'] {
          background: color-mix(in srgb, var(--primary-color) 14%, transparent);
          color: var(--primary-color);
        }
        .stage-number {
          align-items: center;
          background: var(--secondary-background-color);
          border-radius: 50%;
          display: flex !important;
          font-size: 0.75rem;
          height: 24px;
          justify-content: center;
          width: 24px;
        }
        .stage-error { color: var(--error-color); }
        .editor-canvas {
          min-width: 0;
          overflow: auto;
          padding: 20px clamp(14px, 2vw, 28px) 32px;
        }
        .desktop-preview {
          background: var(--primary-background-color);
          border-inline-start: 1px solid var(--divider-color);
          min-width: 0;
          overflow: auto;
          padding: 14px;
        }
        .desktop-preview #sidebar-preview {
          margin-inline: auto;
          max-width: 340px;
          position: sticky;
          top: 0;
        }
        .stage { display: grid; gap: 18px; }
        .stage-heading h1 { font-size: 1.55rem; margin: 0; }
        .stage-heading p { color: var(--secondary-text-color); line-height: 1.45; margin: 5px 0 0; }
        .workbench-card {
          background: var(--card-background-color, var(--mdc-theme-surface));
          border: 1px solid var(--divider-color);
          border-radius: 12px;
          box-sizing: border-box;
          display: grid;
          gap: 14px;
          min-width: 0;
          padding: 16px;
        }
        .workbench-card h2, .workbench-card p { margin: 0; }
        .card-heading { display: flex; justify-content: space-between; }
        .card-heading p { color: var(--secondary-text-color); font-size: .9rem; margin-top: 4px; }
        .add-items summary, .raw-diff summary {
          align-items: center;
          cursor: pointer;
          display: flex;
          min-height: 44px;
        }
        summary span { display: grid; }
        .yaml-toolbar { align-items: center; display: flex; gap: 12px; justify-content: space-between; }
        .yaml-toolbar span { color: var(--secondary-text-color); font-size: .8rem; }
        .problems h2 { align-items: center; display: flex; gap: 8px; }
        .problems h2 span { background: var(--secondary-background-color); border-radius: 999px; font-size: .75rem; padding: 3px 7px; }
        .problems ul, .change-list { list-style: none; margin: 0; padding: 0; }
        .problems button { align-items: flex-start; border-radius: 8px; display: flex; gap: 10px; min-height: 44px; padding: 8px; text-align: start; width: 100%; }
        .problems button > span { display: grid; gap: 2px; }
        .problems button small { color: var(--secondary-text-color); }
        .problems ha-icon { color: var(--error-color); }
        .empty-state { align-items: center; color: var(--secondary-text-color); display: flex; gap: 8px; padding: 12px 0; }
        .review-grid { display: grid; gap: 14px; grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .review-summary dl { display: grid; gap: 8px; margin: 0; }
        .review-summary dl div { border-block-end: 1px solid var(--divider-color); display: flex; gap: 12px; justify-content: space-between; padding-block-end: 8px; }
        .review-summary dt { color: var(--secondary-text-color); }
        .review-summary dd { font-weight: 600; margin: 0; text-align: end; }
        .review-actions { display: flex; flex-wrap: wrap; gap: 6px; justify-content: flex-end; }
        .change-list { display: grid; gap: 8px; }
        .change-list li { align-items: center; display: flex; gap: 10px; min-height: 30px; }
        .change-list span { border-radius: 999px; font-size: .72rem; padding: 3px 7px; text-transform: uppercase; }
        .change-list span[data-kind='added'] { background: color-mix(in srgb, var(--success-color, #43a047) 18%, transparent); color: var(--success-color, #43a047); }
        .change-list span[data-kind='changed'] { background: color-mix(in srgb, var(--warning-color, #f9a825) 18%, transparent); color: var(--warning-color, #f9a825); }
        .change-list span[data-kind='removed'] { background: color-mix(in srgb, var(--error-color) 18%, transparent); color: var(--error-color); }
        .diff-columns { display: grid; gap: 12px; grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .diff-columns h3 { font-size: .85rem; margin: 0 0 6px; }
        .diff-columns pre { background: var(--code-editor-background-color, var(--secondary-background-color)); border-radius: 8px; box-sizing: border-box; font: .78rem/1.45 var(--ha-font-family-code, monospace); margin: 0; max-height: 360px; overflow: auto; padding: 12px; white-space: pre; }
        .workbench-actions {
          align-items: center;
          background: var(--mdc-theme-surface, var(--card-background-color));
          border-block-start: 1px solid var(--divider-color);
          display: flex;
          gap: 14px;
          justify-content: space-between;
          min-height: 64px;
          padding: 8px 14px;
          position: sticky;
          bottom: 0;
          z-index: 20;
        }
        .apply-state { align-items: center; color: var(--secondary-text-color); display: flex; font-size: .85rem; gap: 8px; min-width: 0; }
        .action-buttons { display: flex; flex-shrink: 0; gap: 6px; }
        .draft-recovery { margin: 10px 12px 0; }
        .draft-recovery > div { display: flex; flex-wrap: wrap; gap: 8px; justify-content: space-between; }
        .draft-recovery div > div:first-child { display: grid; gap: 3px; }
        .draft-recovery span { color: var(--secondary-text-color); }
        .draft-actions { display: flex; gap: 6px; }
        .preview-drawer, .preview-scrim { display: none; }
        .mobile-stage-select { display: none; }
        .stale-preview-alert { margin-bottom: 16px; }
        .editor-canvas[data-yaml-invalid='true'] .stage > :not(.stage-heading) {
          opacity: .68;
          pointer-events: none;
        }

        @media (max-width: 1199px) {
          .preview-toggle { display: inline-flex; }
          .workbench-body { grid-template-columns: 210px minmax(0, 1fr); }
          .desktop-preview { display: none; }
          .preview-scrim {
            background: rgba(0, 0, 0, .45);
            display: block;
            inset: 0;
            opacity: 0;
            pointer-events: none;
            position: fixed;
            transition: opacity .2s ease;
            z-index: 98;
          }
          .preview-scrim[open] { opacity: 1; pointer-events: auto; }
          .preview-drawer {
            background: var(--mdc-theme-surface, var(--card-background-color));
            box-shadow: -8px 0 28px rgba(0,0,0,.25);
            display: block;
            height: 100%;
            max-width: 380px;
            overflow: auto;
            padding: 12px;
            position: fixed;
            right: 0;
            top: 0;
            transform: translateX(105%);
            transition: transform .2s ease;
            width: min(380px, 92vw);
            z-index: 99;
          }
          .preview-drawer[open] { transform: translateX(0); }
          .drawer-header { align-items: center; display: flex; justify-content: space-between; min-height: 52px; }
          .preview-drawer #sidebar-preview { margin: auto; max-width: 340px; }
        }

        @media (max-width: 767px) {
          .workbench-header { padding-inline: 6px; }
          .header-status { display: none; }
          .target-control { flex: 1; overflow: hidden; }
          .target-control strong { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
          .preview-toggle { font-size: 0; min-width: 44px; }
          .preview-toggle ha-icon { font-size: initial; }
          .workbench-body { display: block; overflow: auto; }
          .task-rail { display: none; }
          .mobile-stage-select { display: block; margin-bottom: 16px; }
          .editor-canvas { overflow: visible; padding: 12px 12px 110px; }
          .review-grid, .diff-columns { grid-template-columns: 1fr; }
          .diff-columns pre { max-width: calc(100vw - 58px); }
          .workbench-actions { align-items: stretch; flex-direction: column; gap: 6px; padding: 8px; }
          .apply-state { padding-inline: 6px; }
          .action-buttons { display: flex; width: 100%; }
          .action-buttons ha-button:last-child { flex: 1; }
          .preview-drawer { max-width: none; padding: 8px; width: 100vw; }
          .yaml-toolbar span { display: none; }
        }
        .loading-content {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
        }
        #sidebar-dialog-wrapper {
          display: flex;
          flex-direction: row;
          gap: var(--side-dialog-padding);
          justify-content: center;
          position: relative;
          width: 100%;
        }
        @media all and (max-width: 800px), all and (max-height: 500px) {
          #sidebar-dialog-wrapper {
            flex-direction: column;
          }
          #sidebar-preview {
            max-width: none !important;
            width: 100%;
            min-height: 600px;
          }
        }

        .dialog-content > * {
          flex-basis: 0;
          flex-grow: 1;
          flex-shrink: 1;
          min-width: 0;
        }

        #sidebar-config {
          display: block;
          height: max-content;
          position: relative;
          width: 100%;
        }
        #sidebar-config *::-webkit-scrollbar {
          width: 0.2em;
          height: 0.2em;
        }
        #sidebar-config *::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
        }
        #sidebar-config * {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
        }
        .dialog-menu {
          position: sticky;
          top: 0;
          z-index: 10;
          background-color: var(--mdc-theme-surface);
        }
        sidebar-dialog-panels {
          display: block;
          position: relative;
          max-height: calc(var(--mdc-dialog-min-height) - 50px);
          width: inherit;
          overflow-y: auto;
        }

        :host([fullscreen]) sidebar-dialog-panels {
          --so-content-fullscreen-max-height: calc(var(--mdc-dialog-min-height) - 128px - 50px);
          max-height: var(--so-content-fullscreen-max-height);
        }

        #tabbar {
          display: flex;
          font-size: 1rem;
          overflow: hidden;
          text-transform: uppercase;
          margin-bottom: var(--side-dialog-padding);
          align-content: stretch;
          justify-content: space-around;
          align-items: stretch;
          font-weight: 500;
        }
        .tab-item {
          width: 100%;
          flex: 1 1 0%;
        }
        .tab-item[active] {
          background-color: #9b9b9b10;
        }
        :host([fullscreen]) #sidebar-preview {
          height: calc(var(--mdc-dialog-min-height) - 128px - 7px);
        }

        #sidebar-preview {
          position: sticky;
          top: 0px;
          padding: 0px;
          justify-items: center;
          max-width: 300px;
          max-height: fit-content;
          overflow: hidden;
          align-content: center;
          /* background-color: rgba(0, 0, 0, 0.2); */
          background-color: var(--primary-background-color, var(--clear-background-color, rgba(0, 0, 0, 0.2)));
          --theme-border-color: var(--divider-color, rgba(0, 0, 0, 0.12));
          --drawer-background-color: var(--so-force-transparent-background, var(--mdc-theme-surface));
        }

        .config-content {
          display: flex;
          flex-direction: column;
          gap: var(--side-dialog-gutter);
          min-height: 250px;
          justify-content: space-between;
          flex: 1;
        }

        .header-row {
          display: inline-flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          --mdc-icon-button-size: 42px;
          gap: var(--side-dialog-gutter);
        }
        .sync-status {
          align-items: center;
          color: var(--secondary-text-color);
          display: inline-flex;
          font-size: 0.9rem;
          gap: 6px;
          min-width: 0;
        }
        .header-row.center {
          justify-content: center;
        }
        .flex {
          flex: 1;
        }

        .overlay {
          display: flex;
          align-items: stretch;
          justify-content: flex-end;
          flex-direction: column;
          /* padding-inline: 0.5rem; */
        }

        .overlay[expanded] {
          display: flex;
          position: absolute;
          width: -webkit-fill-available;
          height: -webkit-fill-available;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 2rem;
          background: var(--card-background-color);
          z-index: 100;
          padding: 1rem;
          top: 0;
          left: 0;
        }

        .invalid-config {
          display: flex;
          width: inherit;
          /* background: var(--clear-background-color); */
          place-items: center;
          flex-direction: column;
          align-items: stretch;
          gap: 1em;
          padding: 0.5em;
        }
        .invalid-config-content {
          display: flex;
          flex-direction: row;
          gap: var(--side-dialog-gutter);
          width: 100%;
          justify-content: space-around;
          background: var(--disabled-color);
        }
        .ha-config-diagnostics,
        .ha-config-actions {
          display: flex;
          flex-wrap: wrap;
          gap: var(--side-dialog-gutter);
          align-items: center;
          margin-block-start: var(--side-dialog-gutter);
        }
        .ha-config-diagnostics {
          color: var(--secondary-text-color);
          font-size: 0.9rem;
        }
        .settings-overview {
          display: grid;
          gap: 12px;
          padding: 4px;
        }
        .settings-card {
          background: var(--card-background-color, var(--mdc-theme-surface));
          border: 1px solid var(--divider-color);
          border-radius: 12px;
          display: grid;
          gap: 14px;
          padding: 16px;
        }
        .settings-card-heading {
          align-items: flex-start;
          display: grid;
          gap: 12px;
          grid-template-columns: auto minmax(0, 1fr) auto;
        }
        .settings-card-heading ha-icon {
          color: var(--primary-color);
          margin-block-start: 2px;
        }
        .settings-card h2,
        .settings-card p {
          margin: 0;
        }
        .settings-card h2 {
          font-size: 1rem;
        }
        .settings-card p,
        .profile-selector-heading span {
          color: var(--secondary-text-color);
          font-size: 0.9rem;
          line-height: 1.4;
          margin-block-start: 4px;
        }
        .status-badge {
          background: var(--secondary-background-color);
          border-radius: 999px;
          color: var(--secondary-text-color);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 8px;
        }
        .status-badge[data-active='true'] {
          background: color-mix(in srgb, var(--success-color, #43a047) 18%, transparent);
          color: var(--success-color, #43a047);
        }
        .source-summary {
          background: var(--secondary-background-color);
          border-radius: 8px;
          display: grid;
          gap: 2px;
          padding: 10px 12px;
        }
        .source-summary span {
          color: var(--secondary-text-color);
          font-size: 0.8rem;
        }
        .technical-details {
          border-block-start: 1px solid var(--divider-color);
          padding-block-start: 12px;
        }
        .technical-details summary {
          color: var(--primary-color);
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .profile-selector,
        .profile-copy-controls {
          display: grid;
          gap: 8px;
        }
        .profile-selector {
          border-block-start: 1px solid var(--divider-color);
          padding-block-start: 12px;
        }
        .profile-selector-heading {
          display: grid;
        }
        .profile-selector > span,
        .profile-copy-controls > span {
          color: var(--secondary-text-color);
          font-size: 0.9rem;
        }
        .profile-copy-controls {
          border-block-start: 1px solid var(--divider-color);
          padding-block-start: var(--side-dialog-gutter);
        }
        @media all and (max-width: 520px) {
          .settings-card-heading {
            grid-template-columns: auto minmax(0, 1fr);
          }
          .status-badge {
            grid-column: 2;
            justify-self: start;
          }
        }
      `,
    ];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sidebar-organizer-config-dialog': SidebarConfigDialog;
  }

  interface Window {
    sidebarDialog: SidebarConfigDialog;
  }
  interface HASSDomEvents {
    'sidebar-config-changed': ConfigChangedEvent;
    'config-has-changed': boolean;
  }
  interface HTMLElementEventMap {
    'sidebar-config-changed': ConfigChangedEvent;
  }
}
