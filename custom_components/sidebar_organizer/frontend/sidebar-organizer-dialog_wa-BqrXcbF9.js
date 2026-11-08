import{C as i,n as a,ae as o,an as e,E as t,V as n,D as l,_ as s,R as d,a2 as r,a6 as h}from"./sidebar-organizer-DRnf7OpX.js";import{H as g,m as c,R as m}from"./index-CcBcwWJi.js";import{c as p,a as f,f as b,d as _,b as w,e as u}from"./sidebar-dialog-BaiPOWBg.js";let v=class extends i{constructor(){super(...arguments),this.large=!1,this._open=!1,this._configValid=!0,this._saveDisabled=!0}connectedCallback(){super.connectedCallback(),window._sidebarOrganizerDialogWA=this}disconnectedCallback(){super.disconnectedCallback(),window._sidebarOrganizerDialogWA=void 0}async showDialog(i){this._open=!0,this._params=i,this.large=!1,this._initConfig=p(i.config),await this._watchDialogScroll()}closeDialog(){return this._open=!1,this._params=void 0,a(this,"dialog-closed",{dialog:this.localName}),!0}_dialogClosed(){this._params=void 0,this._open=!1,a(this,"dialog-closed",{dialog:this.localName})}get _canSaveConfig(){return this._configDialog.canWriteCurrentSource&&(void 0===this._configDialog._invalidConfig||this._configValid&&0!==Object.keys(this._configDialog._sidebarConfig).length)}async _handleSaveConfig(){const i=this._configDialog;if(!i)return;let e;if(!this._canSaveConfig){const a=i.saveBlockedReason||"This configuration cannot be saved yet.";return console.warn(a),void o(this,{message:a,duration:5e3})}if(i._useConfigFile&&this._configValid)await i._handleInvalidConfig("save");else if("home_assistant_config"===i._configSource&&this._configValid){const a=await i._saveHomeAssistantConfig();if(!a)return;e=a}else if("home_assistant_profile"===i._configSource&&this._configValid){const a=await i._saveHomeAssistantProfile();if(!a)return;e=a}const t=i._sidebarConfig,n=i._useConfigFile,l=i._configSource,s=e||{config:t,configSource:l,profileUserId:i.selectedProfileUserId,useConfigFile:n};a(this.isConnected?this:window,g.SIDEBAR_CONFIG_SAVED,s),e||i._markSessionApplied(),this.isConnected&&this._configDialog===i&&(!e||i._isPublishedTargetCurrent(e)&&!i.hasUnsavedChanges)&&this._dialogClosed()}_renderContent(){return e`
      <sidebar-organizer-config-dialog
        ?fullscreen=${this.large}
        .hass=${this.hass}
        ._mainDialog=${this}
        ._initConfig=${this._initConfig}
        @workbench-apply=${this._handleSaveConfig}
      ></sidebar-organizer-config-dialog>
    `}render(){if(!this._open)return t;const i=window.matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches,a=e`<span slot="headerTitle" @click=${this._enlarge}>${c}</span>
      <ha-icon-button
        slot="headerNavigationIcon"
        @click=${this.closeDialog}
        .label=${this.hass.localize("ui.common.close")}
        .path=${f}
      ></ha-icon-button>
      ${i?t:e`
            <ha-icon-button
              slot="headerActionItems"
              .label=${"Toggle large"}
              .path=${this.large?_:w}
              @click=${this._enlarge}
            ></ha-icon-button>
          `}
      <ha-icon-button
        slot="headerActionItems"
        .label=${"Documentation"}
        .path=${b}
        @click=${()=>window.open(m)}
      ></ha-icon-button>`;return e`
      <ha-dialog
        .hass=${this.hass}
        .open=${this._open}
        .width=${this.large?"full":"large"}
        prevent-scrim-close
        @keydown=${this._ignoreKeydown}
        @closed=${this._dialogClosed}
        .headerSubtitlePosition=${"below"}
      >
        ${a}
        <div class="content">${this._renderContent()}</div>
      </ha-dialog>
    `}_enlarge(){this.large=!this.large}_ignoreKeydown(i){i.stopPropagation()}async _watchDialogScroll(){await n();const i=this.shadowRoot?.querySelector("ha-dialog")?.shadowRoot?.querySelector("wa-dialog");if(i){const a=i.querySelector(".body");a&&(a.classList.remove("ha-scrollbar"),a.style.overflow="hidden")}}static get styles(){return[l`
        ha-dialog {
          --ha-dialog-width-full: 100vw;
          --ha-dialog-width-large: 96vw;
          --ha-dialog-scrim-backdrop-filter: blur(4px) brightness(30%);
          --mdc-dialog-max-width: 96vw;
          --mdc-dialog-min-height: min(900px, 92vh);
          --ha-dialog-min-height: min(900px, 92vh);
          --ha-dialog-surface-backdrop-filter: blur(2px);
          --dialog-backdrop-filter: blur(2px);
          --dialog-content-padding: 0 1rem;
        }
        ha-dialog[width='full'] {
          --width: var(--full-width);
          --mdc-dialog-min-height: 100vh;
          --mdc-dialog-max-height: 100vh;
          --ha-dialog-min-height: 100vh;
          --ha-dialog-max-height: 100vh;
          --ha-dialog-border-radius: 0;
        }

        @media all and (max-width: 767px), all and (max-height: 500px) {
          ha-dialog {
            --dialog-content-padding: 0;
            height: 100vh;
            --mdc-dialog-max-height: 100vh;
            --dialog-surface-top: 0px;
            --mdc-dialog-max-width: 100vw;
          }
          sidebar-organizer-config-dialog {
            width: 100%;
            max-width: 100%;
          }
        }

        @media all and (max-width: 600px), all and (max-height: 500px) {
          :host([large]) .content {
            max-width: none;
          }
          ha-dialog,
          ha-dialog[large] {
            --mdc-dialog-min-width: 100vw;
            --mdc-dialog-max-width: 100vw;
            --mdc-dialog-min-height: 100vh;
            --mdc-dialog-max-height: 100vh;
            --vertical-align-dialog: flex-end;
            --ha-dialog-border-radius: 0;
          }
          sidebar-organizer-config-dialog {
            width: 100%;
            max-width: none;
          }
        }
        .content {
          --so-dialog-content-height: calc(var(--mdc-dialog-min-height, 92vh) - 64px);
          box-sizing: border-box;
          height: var(--so-dialog-content-height);
          max-height: var(--so-dialog-content-height);
          min-height: 0;
          overflow: hidden;
          overscroll-behavior-y: contain;
          scrollbar-color: var(--scrollbar-thumb-color, rgba(127, 127, 127, 0.55)) transparent;
          scrollbar-gutter: stable;
          scrollbar-width: thin;
          touch-action: pan-y;
          width: 100%;
          max-width: 100%;
        }
        .content > sidebar-organizer-config-dialog {
          height: 100%;
          min-height: 0;
        }
        .content::-webkit-scrollbar {
          width: 10px;
        }
        .content::-webkit-scrollbar-thumb {
          background: var(--scrollbar-thumb-color, rgba(127, 127, 127, 0.55));
          border: 2px solid transparent;
          border-radius: 999px;
          background-clip: padding-box;
        }

        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the ha-style-dialog max-height on small screens */
          .content {
            width: 100%;
            max-width: 100%;
          }
        }

        @media all and (min-width: 451px) and (min-height: 501px) {
          :host([large]) .content {
            max-width: none;
          }
        }
        ha-dialog ha-icon-button[slot='headerActionItems'] {
          color: var(--secondary-text-color);
        }
      `]}};s([d({attribute:!1})],v.prototype,"hass",void 0),s([d({type:Boolean,reflect:!0})],v.prototype,"large",void 0),s([r()],v.prototype,"_params",void 0),s([r()],v.prototype,"_initConfig",void 0),s([r()],v.prototype,"_open",void 0),s([r()],v.prototype,"_configValid",void 0),s([r()],v.prototype,"_saveDisabled",void 0),s([u("sidebar-organizer-config-dialog")],v.prototype,"_configDialog",void 0),v=s([h("sidebar-organizer-dialog-wa")],v);export{v as SidebarOrganizerDialogWA};
