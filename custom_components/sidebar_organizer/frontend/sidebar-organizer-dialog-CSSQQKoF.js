import{C as i,n as a,ae as o,an as e,E as t,D as n,_ as s,R as d,a2 as l,a6 as g}from"./sidebar-organizer-DJyQmX37.js";import{H as h,R as r,N as c,m,V as p}from"./index-DsB6EJBt.js";import{c as f,m as _,f as w,a as u,e as v}from"./sidebar-dialog-cMF5HsWs.js";let b=window.matchMedia("(min-width: 1000px) and (max-width: 1440px)"),x=class extends i{constructor(){super(...arguments),this.large=!1,this._open=!1,this._configValid=!0,this._saveDisabled=!0}connectedCallback(){super.connectedCallback(),window._sidebarOrganizerDialog=this}disconnectedCallback(){super.disconnectedCallback(),window._sidebarOrganizerDialog=void 0}async showDialog(i){this._open=!0,this._params=i,this._initConfig=f(i.config),b.matches&&(this.large=!0)}closeDialog(){return this._open=!1,this._params=void 0,a(this,"dialog-closed",{dialog:this.localName}),!0}_dialogClosed(){this._params=void 0,this._open=!1,a(this,"dialog-closed",{dialog:this.localName})}get _canSaveConfig(){return this._configDialog.canWriteCurrentSource&&(void 0===this._configDialog._invalidConfig||this._configValid&&0!==Object.keys(this._configDialog._sidebarConfig).length)}_showSuccessToast(){o(this,{message:"Sidebar Organizer config saved."})}async _handleSaveConfig(){const i=this._configDialog;if(!i)return;let e;if(!this._canSaveConfig){const a=i.saveBlockedReason||"This configuration cannot be saved yet.";return console.warn(a),void o(this,{message:a,duration:5e3})}if(i._useConfigFile&&this._configValid)await i._handleInvalidConfig("save"),this._showSuccessToast();else if("home_assistant_config"===i._configSource&&this._configValid){const a=await i._saveHomeAssistantConfig();if(!a)return;e=a}else if("home_assistant_profile"===i._configSource&&this._configValid){const a=await i._saveHomeAssistantProfile();if(!a)return;e=a}const t=i._sidebarConfig,n=i._useConfigFile,s=i._configSource,d=e||{config:t,configSource:s,profileUserId:i.selectedProfileUserId,useConfigFile:n};a(this.isConnected?this:window,h.SIDEBAR_CONFIG_SAVED,d),e||i._markSessionApplied(),this.isConnected&&this._configDialog===i&&(!e||i._isPublishedTargetCurrent(e)&&!i.hasUnsavedChanges)&&this._dialogClosed()}_renderContent(){return e`
      <sidebar-organizer-config-dialog
        .hass=${this.hass}
        ._mainDialog=${this}
        ._initConfig=${this._initConfig}
        @workbench-apply=${this._handleSaveConfig}
      ></sidebar-organizer-config-dialog>
    `}render(){if(!this._open)return t;const i=e`<div slot="actionItems">
      <ha-icon-button .label=${"Toggle large"} .path=${_} @click=${this._enlarge}> </ha-icon-button>
      <ha-icon-button
        .label=${"Documentation"}
        .path=${w}
        @click=${()=>window.open(r)}
      ></ha-icon-button>
    </div>`,a=e`<span slot="title" .title=${c} @click=${this._enlarge}> ${m} </span>
      <span slot="subtitle">(${p})</span> `;return e`
      <ha-dialog
        open
        scrimClickAction
        escapeKeyAction
        @keydown=${this._ignoreKeydown}
        @closed=${this._dialogClosed}
        .hideActions=${!0}
        .flexContent=${!0}
        .heading=${m}
      >
        <ha-dialog-header slot="heading">
          <ha-icon-button
            slot="navigationIcon"
            @click=${this.closeDialog}
            .label=${this.hass.localize("ui.common.close")}
            .path=${u}
          ></ha-icon-button>
          ${a} ${i}
        </ha-dialog-header>

        ${this._renderContent()}
      </ha-dialog>
    `}_enlarge(){this.large=!this.large}_ignoreKeydown(i){i.stopPropagation()}static get styles(){return n`
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
        height: min(790px, calc(92vh - 64px));
        min-height: 0;
        width: 100%;
        max-width: none;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
      }
      :host([large]) ha-dialog { --mdc-dialog-min-width: 100vw; --mdc-dialog-max-width: 100vw; --mdc-dialog-max-height: 100vh; }
      :host([large]) ha-dialog sidebar-organizer-config-dialog {
        height: calc(100vh - 64px);
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
          height: calc(100vh - 64px);
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
    `}};s([d({attribute:!1})],x.prototype,"hass",void 0),s([d({type:Boolean,reflect:!0})],x.prototype,"large",void 0),s([l()],x.prototype,"_params",void 0),s([l()],x.prototype,"_initConfig",void 0),s([l()],x.prototype,"_open",void 0),s([l()],x.prototype,"_configValid",void 0),s([l()],x.prototype,"_saveDisabled",void 0),s([v("ha-dialog")],x.prototype,"_dialog",void 0),s([v("sidebar-organizer-config-dialog")],x.prototype,"_configDialog",void 0),x=s([g("sidebar-organizer-dialog")],x);export{x as SidebarOrganizerDialog};
