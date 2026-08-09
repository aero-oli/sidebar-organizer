import { HA_EVENT, NAMESPACE, NAMESPACE_TITLE, REPO_URL, VERSION } from '@constants';
import { mdiArrowExpand, mdiClose, mdiInformation } from '@mdi/js';

import './sidebar-dialog';

import { safeCustomElement } from '@utilities/safe-custom-element';
import { SidebarConfigDialogParams } from '@utilities/show-dialog-sidebar-organizer';
import { showToast } from '@utilities/toast-notify';
import { cloneDeep } from 'es-toolkit/compat';
import { LitElement, TemplateResult, css, html, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';

import { ConfigSource } from '../config';
import { HA, SidebarConfig } from '../types';
import { HassDialog } from '../types/dialog-manager';
import { fireEvent } from '../utilities/fire_event';
import { SidebarConfigDialog } from './sidebar-dialog';

let mql = window.matchMedia('(min-width: 1000px) and (max-width: 1440px)');

@safeCustomElement('sidebar-organizer-dialog')
export class SidebarOrganizerDialog extends LitElement implements HassDialog<SidebarConfigDialogParams> {
  @property({ attribute: false }) public hass!: HA;
  @property({ type: Boolean, reflect: true }) public large = false;
  @state() private _params?: SidebarConfigDialogParams;
  @state() private _initConfig?: SidebarConfig;
  @state() private _open = false;

  @state() _configValid = true;
  @state() _saveDisabled = true;

  @query('ha-dialog') private _dialog?: HTMLDialogElement;
  @query('sidebar-organizer-config-dialog') private _configDialog!: SidebarConfigDialog;

  connectedCallback(): void {
    super.connectedCallback();
    window._sidebarOrganizerDialog = this;
  }
  disconnectedCallback(): void {
    super.disconnectedCallback();
    window._sidebarOrganizerDialog = undefined;
  }

  public async showDialog(param: SidebarConfigDialogParams): Promise<void> {
    this._open = true;
    this._params = param;
    this._initConfig = cloneDeep(param.config);
    if (mql.matches) {
      this.large = true; // Default to large dialog
    }
  }

  public closeDialog(): boolean {
    this._open = false;
    this._params = undefined;
    fireEvent(this, 'dialog-closed', { dialog: this.localName });
    return true;
  }

  private _dialogClosed(): void {
    this._params = undefined;
    this._open = false;
    fireEvent(this, 'dialog-closed', { dialog: this.localName });
  }

  private get _canSaveConfig(): boolean {
    return this._configDialog.canWriteCurrentSource && (
      this._configDialog._invalidConfig === undefined ||
      (this._configValid && Object.keys(this._configDialog._sidebarConfig).length !== 0)
    );
  }

  private _showSuccessToast(): void {
    showToast(this, {
      message: 'Sidebar Organizer config saved.',
    });
  }

  private async _handleSaveConfig(): Promise<void> {
    if (!this._canSaveConfig) {
      const message = this._configDialog.saveBlockedReason || 'This configuration cannot be saved yet.';
      console.warn(message);
      showToast(this, {
        message,
        duration: 5000,
      });
      return;
    } else if (this._configDialog._useConfigFile && this._configValid) {
      // If using config file, we save the config to the file
      await this._configDialog._handleInvalidConfig('save');
      this._showSuccessToast();
      // After saving to storage, _useConfigFile will be set to false by _handleInvalidConfig
      // Continue with the rest of the save logic below
    } else if (this._configDialog._configSource === 'home_assistant_config' && this._configValid) {
      const saved = await this._configDialog._saveHomeAssistantConfig();
      if (!saved) return;
    } else if (this._configDialog._configSource === 'home_assistant_profile' && this._configValid) {
      const saved = await this._configDialog._saveHomeAssistantProfile();
      if (!saved) return;
    }
    const config = this._configDialog!._sidebarConfig;
    const useConfigFile = this._configDialog!._useConfigFile;
    const configSource = this._configDialog!._configSource;
    const detail = {
      config,
      configSource,
      profileUserId: this._configDialog.selectedProfileUserId,
      useConfigFile: useConfigFile,
    };
    fireEvent(this, HA_EVENT.SIDEBAR_CONFIG_SAVED, detail);
    this._configDialog._markSessionApplied();
    this._dialogClosed();
  }

  private _renderContent(): TemplateResult {
    return html`
      <sidebar-organizer-config-dialog
        .hass=${this.hass}
        ._mainDialog=${this}
        ._initConfig=${this._initConfig}
        @workbench-apply=${this._handleSaveConfig}
      ></sidebar-organizer-config-dialog>
    `;
  }

  protected render() {
    if (!this._open) {
      return nothing;
    }
    const rightHeaderBtns = html`<div slot="actionItems">
      <ha-icon-button .label=${'Toggle large'} .path=${mdiArrowExpand} @click=${this._enlarge}> </ha-icon-button>
      <ha-icon-button
        .label=${'Documentation'}
        .path=${mdiInformation}
        @click=${() => window.open(REPO_URL)}
      ></ha-icon-button>
    </div>`;

    const dialogTitle = html`<span slot="title" .title=${NAMESPACE} @click=${this._enlarge}> ${NAMESPACE_TITLE} </span>
      <span slot="subtitle">(${VERSION})</span> `;
    return html`
      <ha-dialog
        open
        scrimClickAction
        escapeKeyAction
        @keydown=${this._ignoreKeydown}
        @closed=${this._dialogClosed}
        .hideActions=${true}
        .flexContent=${true}
        .heading=${NAMESPACE_TITLE}
      >
        <ha-dialog-header slot="heading">
          <ha-icon-button
            slot="navigationIcon"
            @click=${this.closeDialog}
            .label=${this.hass.localize('ui.common.close')}
            .path=${mdiClose}
          ></ha-icon-button>
          ${dialogTitle} ${rightHeaderBtns}
        </ha-dialog-header>

        ${this._renderContent()}
      </ha-dialog>
    `;
  }

  private _enlarge() {
    this.large = !this.large;
  }

  private _ignoreKeydown(ev: KeyboardEvent) {
    ev.stopPropagation();
  }

  static get styles() {
    return css`
      ha-dialog {
        --mdc-dialog-min-width: 96vw;
        --mdc-dialog-max-width: 96vw;
        --mdc-dialog-min-height: min(900px, 92vh);
        --mdc-dialog-max-height: 96vh;
        --dialog-backdrop-filter: blur(2px);
        --justify-action-buttons: space-between;
        --dialog-content-padding: 0 1rem;
      }
      sidebar-organizer-config-dialog {
        width: 100%;
        max-width: none;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
      }
      :host([large]) ha-dialog { --mdc-dialog-min-width: 100vw; --mdc-dialog-max-width: 100vw; --mdc-dialog-max-height: 100vh; }
      :host([large]) ha-dialog sidebar-organizer-config-dialog {
        max-width: none;
        width: 100%;
      }

      @media all and (max-width: 767px), all and (max-height: 500px) {
        ha-dialog {
          --dialog-content-padding: 0;
          height: 100%;
          --mdc-dialog-max-height: 100%;
          --dialog-surface-top: 0px;
          --mdc-dialog-max-width: 100vw;
        }
        sidebar-organizer-config-dialog {
          width: 100%;
          max-width: 100%;
        }
      }
      @media all and (min-width: 451px) and (min-height: 501px) {
        :host([large]) ha-dialog sidebar-organizer-config-dialog {
          max-width: none;
          width: 100%;
        }
      }
      @media all and (max-width: 600px), all and (max-height: 500px) {
        ha-dialog,
        ha-dialog[large] {
          --mdc-dialog-min-width: 100vw;
          --mdc-dialog-max-width: 100vw;
          --mdc-dialog-min-height: 100%;
          --mdc-dialog-max-height: 100%;
          --vertical-align-dialog: flex-end;
          --ha-dialog-border-radius: 0;
        }
        sidebar-organizer-config-dialog {
          width: 100%;
          max-width: none;
        }
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sidebar-organizer-dialog': SidebarOrganizerDialog;
  }
  interface HASSDomEvents {
    'save-sidebar-organizer-config': {
      config: SidebarConfig;
      configSource?: ConfigSource;
      profileUserId?: string;
      useConfigFile: boolean;
    };
  }
  interface Window {
    _sidebarOrganizerDialog?: SidebarOrganizerDialog;
  }
}
