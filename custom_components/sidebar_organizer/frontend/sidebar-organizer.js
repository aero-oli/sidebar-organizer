console.groupCollapsed("%c    🗄️  SIDEBAR-ORGANIZER  🗄️    %c    · v4.3.2 ·    ","background: linear-gradient(90deg, #02343F,#02343F 80%,#F0EDCC 100%);color: #F0EDCC;padding: 2px 0px; border: 0.5px solid; text-shadow: 0 2px 2px rgba(1, 1, 1, 0.2); font-family: Roboto,Verdana,Geneva,sans-serif; border-color: #F0EDCC;border-right: none; border-radius: 6px 0 0 6px;","background: linear-gradient(90deg, #F0EDCC 100%,#02343F 80%,#02343F);color: #02343F;padding: 2px 0px; border: 0.5px solid; text-shadow: 0 2px 2px rgba(1, 1, 1, 0.2); font-family: Roboto,Verdana,Geneva,sans-serif; border-color: #F0EDCC;border-left: none; border-radius: 0 6px 6px 0;"),console.info("Customize the sidebar in Home Assistant"),console.info("Github: https://github.com/aero-oli/sidebar-organizer"),console.info("If you like the plugin, consider supporting the developer: https://github.com/sponsors/ngocjohn"),console.groupEnd();var e,t,i,n,o,s,r,a,l,c,d,h,u="4.3.2",f={url:"https://github.com/aero-oli/sidebar-organizer"},p={version:u,repository:f};!function(e){e.SIDEBAR_SCROLLBAR="ha-list-nav.ha-scrollbar",e.SIDEBAR_BEFORE_SPACER_CONTAINER="ha-list-nav.before-spacer",e.SIDEBAR_BOTTOM_LIST_CONTAINER="ha-list-nav.bottom-list",e.SIDEBAR_AFTER_SPACER_CONTAINER="ha-list-nav.after-spacer",e.SPACER=".spacer",e.USER=".user",e.MENU=".menu",e.MENU_TITLE=".title",e.DIVIDER=".divider",e.DIVIDER_ADDED="div.divider[added]",e.SIDEBAR_CONFIG_DIALOG="#sidebar-organizer-config-dialog",e.SELECTED=".selected",e.HEADER_TOGGLE_ICON="ha-icon.collapse-toggle",e.ADDED_CONTENT=".added-content",e.BADGE=".badge",e.NOTIFY_ICON="ha-icon.badge",e.HA_SVG_ICON="ha-svg-icon",e.ITEM_TEXT=".item-text",e.ITEM_PROFILE='ha-list-item-button[href="/profile"]',e.USER_ITEM="ha-list-item-button.user",e.ACTION_SLOT='div[slot="actions"]',e.HA_DIALOG_FOOTER="ha-dialog-footer",e.FOOTER="footer",e.PANELS_LIST=".panels-list",e.BEFORE_SPACER=".before-spacer",e.AFTER_SPACER="ha-list-nav.after-spacer",e.GRID_CONTAINER=".grid-container",e.BOTTOM_CONTAINER=".bottom-container",e.SETTINGS_ITEM='ha-list-item-button[href="/config"]',e.CONTENT=".content",e.SIDEBAR_LOADER="ha-fade-in",e.HUI_ROOT="hui-root",e.HA_TOOLTIP="ha-tooltip"}(e||(e={})),function(e){e.ITEM="ha-list-item-button",e.HA_SVG_ICON="ha-svg-icon",e.HA_ICON="ha-icon",e.HA_ICON_BUTTON="ha-icon-button",e.ANCHOR="a",e.BUTTON="button",e.MD_RIPPLE="md-ripple",e.USER_BADGE="ha-user-badge",e.SIDEBAR_CONFIG_DIALOG="sidebar-organizer-config-dialog",e.SIDEBAR_CONFIG_DIALOG_WRAPPER="sidebar-organizer-dialog",e.SIDEBAR_CONFIG_DIALOG_WA="sidebar-organizer-dialog-wa",e.HA_BUTTON="ha-button",e.ADDED_DIVIDER="div.divider[added]",e.DIVIDER="div.divider",e.CONFIG_DASHBOARDS="ha-config-lovelace-dashboards",e.DIALOG_EDIT_SIDEBAR="dialog-edit-sidebar",e.ITEMS_DISPLAY_EDITOR="ha-items-display-editor",e.HA_LIST_NAV="ha-list-nav",e.HA_SIDEBAR="ha-sidebar",e.PROFILE_GENERAL="ha-profile-section-general",e.SO_PROFILE_SECTION="so-profile-section",e.CONFIG_LOVELACE_DASHBOARDS="ha-config-lovelace-dashboards",e.HA_PANEL_LOVELACE="ha-panel-lovelace",e.SO_GROUP_DIVIDER="so-group-divider"}(t||(t={})),function(e){e.COLLAPSED="collapsed",e.SELECTED="selected",e.SPACER="spacer",e.BADGE="badge",e.LARGE_BADGE="large-badge",e.NO_VISIBLE="no-visible",e.BADGE_NUMBER="badge-number",e.COLLAPSE_TOGGLE="collapse-toggle",e.ACTIVE="active",e.ADDED_CONTENT="added-content",e.USER="user",e.NOTIFICATIONS="notifications",e.BOTTOM_LIST="bottom-list",e.BOTTOM_GRID_CONTAINER="grid-container",e.BOTTOM_CONTAINER="bottom-container"}(i||(i={})),function(e){e.ROLE="role",e.PROCESSED="data-processed",e.TAB_INDEX="tabindex",e.DISABLED="disabled",e.HREF="href",e.SLOT="slot",e.TYPE="type",e.DATA_NOTIFICATION="data-notification",e.DATA_PANEL="data-panel",e.NEW_ITEM="new-item",e.GRID_ITEM="grid-item",e.BOTTOM="bottom",e.MOVED="moved",e.UNGROUPED="ungrouped",e.GROUP="group",e.ADDED="added",e.EXPANDED="expanded",e.DEFAULT_PANEL="default-panel"}(n||(n={})),function(e){e.PRIMARY_ACTION="primaryAction",e.SECONDARY_ACTION="secondaryAction"}(o||(o={})),function(e){e.CONFIG_DIFF="config-diff",e.UI_EDITOR="ui-editor",e.HASS_KIOSK_MODE="hass-kiosk-mode"}(s||(s={})),function(e){e.MOUSEENTER="mouseenter",e.MOUSELEAVE="mouseleave",e.TOUCHSTART="touchstart",e.MOUSEDOWN="mousedown"}(r||(r={})),function(e){e.PLUS="mdi:plus",e.MINUS="mdi:minus"}(a||(a={})),function(e){e.NOT_RUNNING="NOT_RUNNING",e.STARTING="STARTING",e.RUNNING="RUNNING",e.STOPPING="STOPPING",e.FINAL_WRITE="FINAL_WRITE"}(l||(l={})),function(e){e.NEW_ITEMS="sidebar-dialog-new-items",e.COLORS="sidebar-dialog-colors",e.PANELS="sidebar-dialog-panels",e.PREVIEW="sidebar-dialog-preview",e.CODE_EDITOR="sidebar-dialog-code-editor",e.MENU="sidebar-dialog-menu"}(c||(c={})),function(e){e.GENERAL="general",e.APPEARANCE="appearance",e.PANELS="panels",e.NEW_ITEMS="new_items",e.PREVIEW="preview"}(d||(d={})),function(e){e.ALL_ITEMS="all_items",e.BOTTOM_PANELS="bottom_panels",e.CUSTOM_GROUPS="custom_groups",e.VISIBILITY="visibility",e.NOTIFICATIONS="notifications"}(h||(h={}));const g=["all_items","bottom_panels","custom_groups","visibility","notifications"];var _;!function(e){e.BOTTOM_ITEMS="bottom_items",e.BOTTOM_GRID_ITEMS="bottom_grid_items",e.BOTTOM_GROUPS="bottom_groups"}(_||(_={}));const m=["bottom_items","bottom_grid_items","bottom_groups"];var b;!function(e){e.HIDDEN_ITEMS="hidden_items",e.VISIBILITY_TEMPLATES="visibility_templates"}(b||(b={}));const y=["hidden_items","visibility_templates"],v={[d.GENERAL]:"Settings",[d.APPEARANCE]:"Appearance",[d.PANELS]:"Panels",[d.NEW_ITEMS]:"New Items",[h.ALL_ITEMS]:"All Items",[h.BOTTOM_PANELS]:"Bottom Panels",[h.CUSTOM_GROUPS]:"Custom Groups",[h.VISIBILITY]:"Visibility Settings",[h.NOTIFICATIONS]:"Notifications",[b.HIDDEN_ITEMS]:"Hidden Items",[b.VISIBILITY_TEMPLATES]:"Visibility Templates",[_.BOTTOM_ITEMS]:"Bottom Items",[_.BOTTOM_GRID_ITEMS]:"Bottom Grid Items",[_.BOTTOM_GROUPS]:"Bottom Groups",uncategorized_items:"Uncategorized Items"},w={[d.GENERAL]:{label:v[d.GENERAL],description:"Choose what to customize and see where each user’s sidebar is saved."},[d.APPEARANCE]:{label:v[d.APPEARANCE],description:"Customize the look and feel of your sidebar."},[d.PANELS]:{label:v[d.PANELS],description:"Organize your sidebar panels and their order."},[d.NEW_ITEMS]:{label:v[d.NEW_ITEMS],description:"Add new items to your sidebar."}},A=[...g.map(e=>({value:e,label:v[e]||e}))];var C,E;!function(e){e.DIVIDER_COLOR="--divider-color",e.DIVIDER_BG_COLOR="--divider-bg-color",e.DIVIDER_BORDER_TOP_COLOR="--divider-border-top-color",e.DIVIDER_BORDER_RADIUS="--divider-border-radius",e.DIVIDER_MARGIN_RADIUS="--divider-margin-radius",e.SCROLLBAR_THUMB_COLOR="--scrollbar-thumb-color",e.SIDEBAR_BACKGROUND_COLOR="--sidebar-background-color",e.SIDEBAR_TEXT_COLOR="--sidebar-text-color",e.SIDEBAR_TEXT_TRANSFORM="--sidebar-text-transform",e.SO_TOOLTIP_BACKGROUND_COLOR="--so-tooltip-background-color",e.SO_TOOLTIP_TEXT_COLOR="--so-tooltip-text-color",e.SO_BACKDROP_FILTER="--so-backdrop-filter",e.CUSTOM_SIDEBAR_WIDTH="--custom-sidebar-width"}(C||(C={})),function(e){e.PRIMARY_BACKGROUND_COLOR="var(--primary-background-color)",e.PRIMARY_TEXT_COLOR="var(--primary-text-color)",e.BLUR_10PX="blur(10px)",e.TRANSPARENT="transparent"}(E||(E={}));const S="sidebar-organizer",O="Sidebar Organizer",I=`v${u}`,x=`${f.url}`,T="sidebar-organizer",k="/local/sidebar-organizer.yaml",N=/\/profile(\/general)?$/;var $,L,D,P;!function(e){e.LOVELACE_DASHBOARD="/config/lovelace/dashboards",e.PROFILE_GENERAL="/profile/general",e.PROFILE="/profile"}($||($={})),function(e){e.BASE="base",e.CODE="codeEditor"}(L||(L={})),function(e){e.UI_CONFIG="sidebarOrganizerConfig",e.USE_CONFIG_FILE="sidebarOrganizerUseConfigFile",e.CONFIG_SOURCE="sidebarOrganizerConfigSource",e.HA_CONFIG_CACHE="sidebarOrganizerHaConfigCache",e.HA_CONFIG_LAST_MODIFIED="sidebarOrganizerHaConfigLastModified",e.HA_CONFIG_REVISION="sidebarOrganizerHaConfigRevision",e.PANEL_ORDER="sidebarPanelOrder",e.COLLAPSE="sidebarCollapsedGroups",e.HIDDEN_PANELS="sidebarHiddenPanels",e.HA_VERSION="ha-version",e.BLOCK_SIDEBAR_EDIT="blockSidebarEdit",e.SHOW_BY_GROUP="so-show-by-group"}(D||(D={})),function(e){e.SETTHEME="settheme",e.DEFAULT_PANEL="hass-default-panel",e.DIALOG_CLOSED="dialog-closed",e.LOCATION_CHANGED="location-changed",e.SHOW_DIALOG="show-dialog",e.SIDEBAR_CONFIG_SAVED="save-sidebar-organizer-config",e.HASS_EDIT_SIDEBAR="hass-edit-sidebar"}(P||(P={}));const R=[{value:"background_color",label:"Background Color"},{value:"border_top_color",label:"Border Top Color"},{value:"divider_color",label:"Divider line color"},{value:"scrollbar_thumb_color",label:"Scrollbar thumb color"},{value:"custom_sidebar_background_color",label:"Sidebar background color"}],M={bottom_items:[],custom_groups:{},hide_header_toggle:!1,default_collapsed:[],hidden_items:[],new_items:[]},H={ITEMS_DIFFERENT:"The items in config file do not match the items in the sidebar. Check console for more details.",CONFIG_VALID:"The configuration is valid.",CONFIG_INVALID:"The configuration is invalid. Below are the errors found in the configuration.",INFO_EDIT_UPLOAD_CONFIG:"You can edit invalid items in the editor and validate the configuration again. You can also upload a new config file.",CONFIG_EMPTY:"You dont have any configuration yet.",USE_CONFIG_FILE:"Currently Sidebar Organizer uses the config file. If config is valid, you can save and migrate it to the browser's local storage.",HA_CONFIG_MODE:"Home Assistant config-folder mode reads and writes the shared YAML file through the Sidebar Organizer integration.",HA_CONFIG_UNAVAILABLE:"Home Assistant config-folder mode requires Sidebar Organizer to be installed as a HACS integration, restarted, and added in Settings > Devices & services.",HA_CONFIG_WRITE_DISABLED:"Writing to the Home Assistant config file is disabled by the backend integration.",HA_CONFIG_RELOAD_SUCCESS:"Reloaded Sidebar Organizer config from Home Assistant config folder.",HA_CONFIG_SAVE_SUCCESS:"Saved Sidebar Organizer config to Home Assistant config folder.",NAME_EXISTS:"The name already exists. Choose another name.",CONFIRM_DELETE:"Are you sure you want to delete the current configuration?",NOT_COMPATIBLE:"Sidebar Organizer is not compatible with this version of Home Assistant",VERSION_INFO:`More info: ${x}/issues/16`,HAS_SIDEBAR_CONFIG_WARNING:"You have a saved sidebar configuration in your browser's local storage. Modifying the sidebar using the built-in Home Assistant dialog will disable Sidebar Organizer configuration and reset the sidebar to its default state. Do you want to edit the sidebar using Sidebar Organizer instead?",INVALID_UPLOADED_CONFIG:"The uploaded config is invalid with some errors. Fix them in the editor or upload a new config file.",CONFIG_CHANGED:"The configuration has been changed. Do you want to save it?",CLEAN_USER_DATA:"For using sidebar organizer you need to clear your synced settings in this user's Home Assistant profile.",CLEAN_SUCCESS_RELOAD:"Your synced settings have been cleared successfully.  Click 'OK' reload the page to apply the changes.",LEGACY_EDIT_WARNING:"You have Sidebar Organizer installed. It is recommended to use Sidebar Organizer Dialog to edit the sidebar. Do you want to open Sidebar Organizer Dialog instead?",FRONTEND_MODULE:"You may experience issues when plugin is not loaded as a module.",INSTALLATION_LINK:`See: ${x}#installation`,UPLOAD_SUCCESS_VALID_RELOAD:"Config uploaded successfully and is valid. Click OK to reload the page and apply the new configuration.",UNCATEGORIZED_GROUP_INFO:"This group automatically includes any items that are not assigned to any other custom groups or bottom list. These items will be displayed without group header separation in the sidebar. Reordering items in group, or group order in general is available."},G={warn:["color: #ff9800","font-weight: bold"].join(";"),info:["color: #8bc34a","font-weight: bold"].join(";")};function B(e,...t){U(e,G.info,console.info,...t)}function j(e,...t){U(e,G.warn,console.warn,...t)}function U(e,t,i,...n){const[o,s]=F(e,t);n.length>0?i(o,s,...n):i(o,s)}const F=(e,t)=>[`%c${e}`,t],V=e=>{B("sidebar-organizer:",[H.FRONTEND_MODULE,e?`hacs path: ${e}`:"",H.INSTALLATION_LINK].filter(e=>e).join("\n"))},z="__sidebarOrganizerModuleLoaded",q=(e=window)=>{const t=e;return!t[z]&&(e.customElements?.get("so-group-divider")?(t[z]=!0,!1):(t[z]=!0,!0))},W=/sidebar-organizer.js/i;if(q()){Promise.resolve().then(function(){return Np});const e=Array.from(document.scripts),t=[];for(const i of e)if(i?.innerText?.trim()?.startsWith("import(")){const e=i.innerText.split(";")?.map(e=>e.trim());for(const i of e)t.push(i.replace(/^import\(\"/,"").replace(/\"\)/,""))}if(t.some(e=>W.test(e)));else{const t=e.find(e=>W.test(e.src))?.src,i=t?.match(/\/hacsfiles.*$/)?.[0];V(i)}}else console.warn("Sidebar Organizer is already loaded. Skipping duplicate module startup.");const K=["none","capitalize","uppercase","lowercase"],Y=["header_title","hide_header_toggle","animation_off","animation_delay","accordion_mode","text_transformation","move_settings_from_fixed","force_transparent_background","width"];var J;!function(e){e.CUSTOM_GROUPS="custom_groups",e.BOTTOM_GROUPS="bottom_groups",e.BOTTOM_ITEMS="bottom_items",e.BOTTOM_GRID_ITEMS="bottom_grid_items",e.HIDDEN_ITEMS="hidden_items",e.UNCATEGORIZED_ITEMS="uncategorized_items"}(J||(J={}));const X=(e,t)=>{const i={...Object.keys(e).filter(e=>"modes"!==e).reduce((t,i)=>(t[i]=e[i],t),{}),...e.modes&&"object"==typeof e.modes?e.modes[t]:{}};return"sidebar-text-color"in i||(i["sidebar-text-color"]="var(--primary-text-color)"),"sidebar-icon-color"in i||(i["sidebar-icon-color"]=" rgba(var(--rgb-primary-text-color), 0.6)"),i},Z=(e,t,i,n)=>{if(!e)return;const o=t.themes.themes[i];if(o){n||(n=t.themes.darkMode?"dark":"light");const s=X(o,n),r={default_theme:t.themes.default_theme,themes:{[i]:s}};Q(e,r,i,!1)}},Q=(e,t,i,n=!1)=>{e._themes||(e._themes={});let o=t.default_theme;("default"===i||i&&t.themes[i])&&(o=i);const s={...e._themes};if("default"!==o){const i=t.themes[o];Object.keys(i).forEach(t=>{const n="--"+t;e._themes[n]="",s[n]=i[t]})}if(window.ShadyCSS)window.ShadyCSS.styleSubtree(e,s);else for(const t in s)null===t?e.style.removeProperty(t):e.style.setProperty(t,s[t]);if(!n)return;const r=document.querySelector("meta[name=theme-color]");if(r){r.hasAttribute("default-content")||r.setAttribute("default-content",r.getAttribute("content"));const e=s["--primary-color"]||r.getAttribute("default-content");r.setAttribute("content",e)}},ee=(e,t)=>{const i=t.themes.themes;if(!(e in i))return!1;const n=i[e];return!(!n.modes||!n.modes.light&&!n.modes.dark)},te=(e,t)=>ee(e,t)?Object.keys(t.themes.themes[e].modes):[],ie=(e,t)=>{const i=e?.custom_theme,n=i?.theme||t.themes.theme,o=i?.mode,s=te(n,t);let r=t.themes.darkMode;return r=s.length?!("dark"!==o||!s.includes("dark"))||("light"!==o||!s.includes("light"))&&(!!s.includes("dark")&&t.themes.darkMode):t.themes.darkMode,r},ne=10,oe=10,se=(e,t,i={})=>{var n;const{retries:o=ne,delay:s=oe,shouldReject:r=!0}=i,a=null!==(n=i.rejectMessage)&&void 0!==n?n:"Could not get the result after {{ retries }} retries";return new Promise((i,n)=>{let l=0;const c=()=>{const d=e();t(d)?i(d):(l++,l<o?setTimeout(c,s):r?n(new Error(a.replace(/\{\{\s*retries\s*\}\}/g,`${o}`))):i(d))};c()})},re=globalThis,ae=re.ShadowRoot&&(void 0===re.ShadyCSS||re.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,le=Symbol(),ce=new WeakMap;let de=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==le)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ae&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=ce.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ce.set(t,e))}return e}toString(){return this.cssText}};const he=e=>new de("string"==typeof e?e:e+"",void 0,le),ue=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new de(i,e,le)},fe=(e,t)=>{if(ae)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of t){const t=document.createElement("style"),n=re.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=i.cssText,e.appendChild(t)}},pe=ae?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return he(t)})(e):e,{is:ge,defineProperty:_e,getOwnPropertyDescriptor:me,getOwnPropertyNames:be,getOwnPropertySymbols:ye,getPrototypeOf:ve}=Object,we=globalThis,Ae=we.trustedTypes,Ce=Ae?Ae.emptyScript:"",Ee=we.reactiveElementPolyfillSupport,Se=(e,t)=>e,Oe={toAttribute(e,t){switch(t){case Boolean:e=e?Ce:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},Ie=(e,t)=>!ge(e,t),xe={attribute:!0,type:String,converter:Oe,reflect:!1,useDefault:!1,hasChanged:Ie};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),we.litPropertyMetadata??=new WeakMap;let Te=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=xe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);void 0!==n&&_e(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:o}=me(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:n,set(t){const s=n?.call(this);o?.call(this,t),this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??xe}static _$Ei(){if(this.hasOwnProperty(Se("elementProperties")))return;const e=ve(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Se("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Se("properties"))){const e=this.properties,t=[...be(e),...ye(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(pe(e))}else void 0!==e&&t.push(pe(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:Oe).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){const i=this.constructor,n=i._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=i.getPropertyOptions(n),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Oe;this._$Em=n;const s=o.fromAttribute(t,e.type);this[n]=s??this._$Ej?.get(n)??s,this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){const n=this.constructor,o=this[e];if(i??=n.getPropertyOptions(e),!((i.hasChanged??Ie)(o,t)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:o},s){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==o||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===n&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,n=this[t];!0!==e||this._$AL.has(t)||void 0===n||this.C(t,void 0,i,n)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Te.elementStyles=[],Te.shadowRootOptions={mode:"open"},Te[Se("elementProperties")]=new Map,Te[Se("finalized")]=new Map,Ee?.({ReactiveElement:Te}),(we.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ke=globalThis,Ne=ke.trustedTypes,$e=Ne?Ne.createPolicy("lit-html",{createHTML:e=>e}):void 0,Le="$lit$",De=`lit$${Math.random().toFixed(9).slice(2)}$`,Pe="?"+De,Re=`<${Pe}>`,Me=document,He=()=>Me.createComment(""),Ge=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Be=Array.isArray,je=e=>Be(e)||"function"==typeof e?.[Symbol.iterator],Ue="[ \t\n\f\r]",Fe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ve=/-->/g,ze=/>/g,qe=RegExp(`>|${Ue}(?:([^\\s"'>=/]+)(${Ue}*=${Ue}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),We=/'/g,Ke=/"/g,Ye=/^(?:script|style|textarea|title)$/i,Je=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),Xe=Je(1),Ze=Symbol.for("lit-noChange"),Qe=Symbol.for("lit-nothing"),et=new WeakMap,tt=Me.createTreeWalker(Me,129);function it(e,t){if(!Be(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$e?$e.createHTML(t):t}const nt=(e,t)=>{const i=e.length-1,n=[];let o,s=2===t?"<svg>":3===t?"<math>":"",r=Fe;for(let t=0;t<i;t++){const i=e[t];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===Fe?"!--"===l[1]?r=Ve:void 0!==l[1]?r=ze:void 0!==l[2]?(Ye.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=qe):void 0!==l[3]&&(r=qe):r===qe?">"===l[0]?(r=o??Fe,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?qe:'"'===l[3]?Ke:We):r===Ke||r===We?r=qe:r===Ve||r===ze?r=Fe:(r=qe,o=void 0);const h=r===qe&&e[t+1].startsWith("/>")?" ":"";s+=r===Fe?i+Re:c>=0?(n.push(a),i.slice(0,c)+Le+i.slice(c)+De+h):i+De+(-2===c?t:h)}return[it(e,s+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]};let ot=class e{constructor({strings:t,_$litType$:i},n){let o;this.parts=[];let s=0,r=0;const a=t.length-1,l=this.parts,[c,d]=nt(t,i);if(this.el=e.createElement(c,n),tt.currentNode=this.el.content,2===i||3===i){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=tt.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(Le)){const t=d[r++],i=o.getAttribute(e).split(De),n=/([.?@])?(.*)/.exec(t);l.push({type:1,index:s,name:n[2],strings:i,ctor:"."===n[1]?ct:"?"===n[1]?dt:"@"===n[1]?ht:lt}),o.removeAttribute(e)}else e.startsWith(De)&&(l.push({type:6,index:s}),o.removeAttribute(e));if(Ye.test(o.tagName)){const e=o.textContent.split(De),t=e.length-1;if(t>0){o.textContent=Ne?Ne.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],He()),tt.nextNode(),l.push({type:2,index:++s});o.append(e[t],He())}}}else if(8===o.nodeType)if(o.data===Pe)l.push({type:2,index:s});else{let e=-1;for(;-1!==(e=o.data.indexOf(De,e+1));)l.push({type:7,index:s}),e+=De.length-1}s++}}static createElement(e,t){const i=Me.createElement("template");return i.innerHTML=e,i}};function st(e,t,i=e,n){if(t===Ze)return t;let o=void 0!==n?i._$Co?.[n]:i._$Cl;const s=Ge(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(e),o._$AT(e,i,n)),void 0!==n?(i._$Co??=[])[n]=o:i._$Cl=o),void 0!==o&&(t=st(e,o._$AS(e,t.values),o,n)),t}let rt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??Me).importNode(t,!0);tt.currentNode=n;let o=tt.nextNode(),s=0,r=0,a=i[0];for(;void 0!==a;){if(s===a.index){let t;2===a.type?t=new at(o,o.nextSibling,this,e):1===a.type?t=new a.ctor(o,a.name,a.strings,this,e):6===a.type&&(t=new ut(o,this,e)),this._$AV.push(t),a=i[++r]}s!==a?.index&&(o=tt.nextNode(),s++)}return tt.currentNode=Me,n}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},at=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=Qe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=st(this,e,t),Ge(e)?e===Qe||null==e||""===e?(this._$AH!==Qe&&this._$AR(),this._$AH=Qe):e!==this._$AH&&e!==Ze&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):je(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Qe&&Ge(this._$AH)?this._$AA.nextSibling.data=e:this.T(Me.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=ot.createElement(it(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new rt(n,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=et.get(e.strings);return void 0===t&&et.set(e.strings,t=new ot(e)),t}k(t){Be(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,o=0;for(const s of t)o===i.length?i.push(n=new e(this.O(He()),this.O(He()),this,this.options)):n=i[o],n._$AI(s),o++;o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}},lt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,o){this.type=1,this._$AH=Qe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Qe}_$AI(e,t=this,i,n){const o=this.strings;let s=!1;if(void 0===o)e=st(this,e,t,0),s=!Ge(e)||e!==this._$AH&&e!==Ze,s&&(this._$AH=e);else{const n=e;let r,a;for(e=o[0],r=0;r<o.length-1;r++)a=st(this,n[i+r],t,r),a===Ze&&(a=this._$AH[r]),s||=!Ge(a)||a!==this._$AH[r],a===Qe?e=Qe:e!==Qe&&(e+=(a??"")+o[r+1]),this._$AH[r]=a}s&&!n&&this.j(e)}j(e){e===Qe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ct=class extends lt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Qe?void 0:e}},dt=class extends lt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Qe)}},ht=class extends lt{constructor(e,t,i,n,o){super(e,t,i,n,o),this.type=5}_$AI(e,t=this){if((e=st(this,e,t,0)??Qe)===Ze)return;const i=this._$AH,n=e===Qe&&i!==Qe||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==Qe&&(i===Qe||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ut=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){st(this,e)}};const ft={I:at},pt=ke.litHtmlPolyfillSupport;pt?.(ot,at),(ke.litHtmlVersions??=[]).push("3.3.1");const gt=(e,t,i)=>{const n=i?.renderBefore??t;let o=n._$litPart$;if(void 0===o){const e=i?.renderBefore??null;n._$litPart$=o=new at(t.insertBefore(He(),e),e,void 0,i??{})}return o._$AI(e),o
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */},_t=globalThis;let mt=class extends Te{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=gt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ze}};mt._$litElement$=!0,mt.finalized=!0,_t.litElementHydrateSupport?.({LitElement:mt});const bt=_t.litElementPolyfillSupport;bt?.({LitElement:mt}),(_t.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const yt=e=>e??Qe,vt=300,wt=/sidebar-organizer.js/i,At=({content:e,options:t})=>{const i=t.noStyle?"":"margin-bottom: var(--side-dialog-padding); --expansion-panel-content-padding: 0;",n=t.darkBg?"background-color: rgba(0, 0, 0, 0.2);":"";return Xe`
    <ha-expansion-panel
      id=${yt(t.id?t.id:void 0)}
      class=${yt(t.class?t.class:void 0)}
      style=${i}
      .outlined=${t?.outlined??!0}
      .expanded=${t?.expanded??!1}
      .header=${t.header}
      .secondary=${t?.secondary||""}
      .leftChevron=${null!=t?.iconSlot}
    >
      ${yt(t.iconSlot?t.iconSlot:void 0)}
      ${t.icon?Xe`<ha-icon icon=${t.icon} slot="leading-icon" style="color: var(--secondary-text-color)"></ha-icon>`:""}
      <div style="${n} ${t.noStyle?"":"padding: 1em;"}">${e}</div>
    </ha-expansion-panel>
  `};function Ct(e,t,i){let n,o=!1,s=!1;const r=e=>{e.stopPropagation(),e instanceof MouseEvent&&0!==e.button||(o=!0,s=!1,n=setTimeout(()=>{o&&t&&(s=!0,t())},vt))},a=e=>{e.stopPropagation(),n&&clearTimeout(n),o=!1,s&&(e.preventDefault(),s=!1)};["touchstart","mousedown"].forEach(t=>{e.addEventListener(t,r,{passive:!0})}),["touchend","mouseup"].forEach(t=>{e.addEventListener(t,a)})}const Et=(e,n)=>{const o=Array.from(n?.querySelectorAll(t.ITEM)),s=o.find(t=>e===t.href),r=s?null:o.reduce((t,i)=>(e.startsWith(i.href)&&(!t||i.href.length>t.href.length)&&(t=i),t),null);o.forEach(e=>{const t=s&&s===e||!s&&r===e;e.classList.toggle(i.SELECTED,t),e.tabIndex=t?0:-1});const a=n?.querySelectorAll("div.divider");0!==a.length&&a.forEach(e=>{const o=e.getAttribute("group"),s=n?.querySelectorAll(`${t.ITEM}[group="${o}"]`),r=Object.values(s).some(e=>e.classList.contains(i.SELECTED));e.classList.toggle("child-selected",r),e.setAttribute("aria-selected",r.toString())})},St=async e=>await se(()=>e.shadowRoot?.querySelector("dialog-edit-sidebar"),e=>void 0!==e,{retries:100,delay:50,shouldReject:!1}),Ot=e=>{const t=[];for(const i of Array.from(e))if(i?.innerText?.trim()?.startsWith("import(")){const e=i.innerText.split(";")?.map(e=>e.trim());for(const i of e)t.push(i.replace(/^import\(\"/,"").replace(/\"\)/,""))}const i=t.find(e=>wt.test(e))||null;return i},It=(e,t="")=>{const i=document.createElement("a");i.target="_blank",i.href=e,i.download=t,i.style.display="none",document.body.appendChild(i),i.dispatchEvent(new MouseEvent("click")),document.body.removeChild(i)},xt=async()=>{if(window.caches)try{const e=(await window.caches.keys()).map(e=>window.caches.delete(e));await Promise.all(e),window.location.reload()}catch(e){window.location.reload()}else window.location.reload()},Tt=e=>{requestAnimationFrame(()=>setTimeout(e,0))},kt=()=>new Promise(e=>{Tt(e)}),Nt=e=>{const t=e.dataset.panel,i=e.href?.replace("/","");return"#"===i||t===i},$t=t=>({panelId:t.getAttribute(n.DATA_PANEL)||"",hrefPanelId:t.href.replace("/",""),title:t.querySelector(e.ITEM_TEXT)?.textContent?.trim()||"",group:t.getAttribute(n.GROUP)||void 0}),Lt=(e,t=!1,i=!1)=>Array.from(e).map(e=>{const{panelId:n,hrefPanelId:o,title:s,group:r}=$t(e);return{title:s,panelId:n,hrefPanelId:o,isValid:t?Nt(e):void 0,group:r,element:i?e:void 0}}),Dt=window.matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches,Pt=e=>e.stopPropagation(),Rt=(e,t="info",i)=>Xe`
    <ha-alert
      alert-type="${t}"
      title=${yt(i)}
      .dismissable=${!0}
      @alert-dismissed-clicked=${e=>{e.currentTarget.style.display="none"}}
    >
      ${e}
    </ha-alert>
  `,Mt=e=>{let t=0;for(const i of e)t=(t<<5)-t+i.charCodeAt(0),t|=0;return t},Ht=/sidebar-organizer.js/i,Gt=/\/hacsfiles.*$/,Bt=/[?&]hacstag=(\d+)/,jt=document.scripts,Ut=await se(()=>{const e=Array.from(jt).find(e=>Ht.test(e.src));return e?.src||""},e=>e.length>0,{retries:100,delay:50,shouldReject:!1});function Ft(e){const t=Ot(jt);if(!Ut||!t)return;const i=Ut?.match(Gt)?.[0];if(!i)return;const n=Ut.match(Bt)?.[1],o=t.match(Bt)?.[1];n&&o&&(n===o||Vt(n,o,e))}function Vt(e,t,i){if(window.so_hacstag_warning)return;window.so_hacstag_warning=!0;const n=`${S.toUpperCase()} (${p.version}) WARNING`,o=["Plugin is being loaded twice with different resource URLs.","Update resource URLs including hacstag to match exactly."],s=[`Dashboard resource URL: ?hacstag=${e}`,`Config resource URL: ?hacstag=${t}`];console.groupCollapsed(`%c${n}Plugin already loaded from frontend module!`,"color: red; font-weight: bold;"),[...o,...s].forEach(e=>console.info(e)),console.groupEnd();const r=`${o.join(" ")}\n\n${s.map(e=>"**"+e+"**").join("\n\n")}\n\nSee [documentation](${p.repository.url}#installation) for more info.`,a="so_hacstag_warning_"+Mt(i.user?.id||"unknown");i.callService("persistent_notification","create",{notification_id:a,title:n,message:r})}function zt(e){return"symbol"==typeof e||e instanceof Symbol}function qt(e){return zt(e)?NaN:Number(e)}function Wt(e){return e?(e=qt(e))===1/0||e===-1/0?(e<0?-1:1)*Number.MAX_VALUE:e==e?e:0:0===e?e:0}function Kt(e){const t=Wt(e),i=t%1;return i?t-i:t}function Yt(e){if("object"!=typeof e)return!1;if(null==e)return!1;if(null===Object.getPrototypeOf(e))return!0;if("[object Object]"!==Object.prototype.toString.call(e)){const t=e[Symbol.toStringTag];return null!=t&&(!!Object.getOwnPropertyDescriptor(e,Symbol.toStringTag)?.writable&&e.toString()===`[object ${t}]`)}let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Jt(e,t){return e===t||Number.isNaN(e)&&Number.isNaN(t)}function Xt(e){return Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))}function Zt(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const Qt="[object RegExp]",ei="[object String]",ti="[object Number]",ii="[object Boolean]",ni="[object Arguments]",oi="[object Symbol]",si="[object Date]",ri="[object Map]",ai="[object Set]",li="[object Array]",ci="[object ArrayBuffer]",di="[object Object]",hi="[object DataView]",ui="[object Uint8Array]",fi="[object Uint8ClampedArray]",pi="[object Uint16Array]",gi="[object Uint32Array]",_i="[object Int8Array]",mi="[object Int16Array]",bi="[object Int32Array]",yi="[object Float32Array]",vi="[object Float64Array]",wi="object"==typeof globalThis&&globalThis||"object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||function(){return this}()||Function("return this")();function Ai(e){return void 0!==wi.Buffer&&wi.Buffer.isBuffer(e)}function Ci(e){return Number.isSafeInteger(e)&&e>=0}function Ei(e){return null!=e&&"function"!=typeof e&&Ci(e.length)}function Si(e,t){if(!Number.isInteger(t)||t<=0)throw new Error("Size must be an integer greater than zero.");const i=Math.ceil(e.length/t),n=Array(i);for(let o=0;o<i;o++){const i=o*t,s=i+t;n[o]=e.slice(i,s)}return n}function Oi(e){const t=[];for(let i=0;i<e.length;i++){const n=e[i];n&&t.push(n)}return t}function Ii(e,t=1){const i=[],n=Math.floor(t),o=(e,t)=>{for(let s=0;s<e.length;s++){const r=e[s];Array.isArray(r)&&t<n?o(r,t+1):i.push(r)}};return o(e,0),i}function xi(e){if(null==e)return"";if("string"==typeof e)return e;if(Array.isArray(e))return e.map(xi).join(",");const t=String(e);return"0"===t&&Object.is(Number(e),-0)?"-0":t}function Ti(e){return"string"==typeof e||"symbol"==typeof e?e:Object.is(e?.valueOf?.(),-0)?"-0":String(e)}function ki(e){if(Array.isArray(e))return e.map(Ti);if("symbol"==typeof e)return[e];const t=[],i=(e=xi(e)).length;if(0===i)return t;let n=0,o="",s="",r=!1;for(46===e.charCodeAt(0)&&(t.push(""),n++);n<i;){const a=e[n];s?"\\"===a&&n+1<i?(n++,o+=e[n]):a===s?s="":o+=a:r?'"'===a||"'"===a?s=a:"]"===a?(r=!1,t.push(o),o=""):o+=a:"["===a?(r=!0,o&&(t.push(o),o="")):"."===a?o&&(t.push(o),o=""):o+=a,n++}return o&&t.push(o),t}function Ni(e){return"__proto__"===e}function $i(e){switch(typeof e){case"number":case"symbol":return!1;case"string":return e.includes(".")||e.includes("[")||e.includes("]")}}function Li(e,t,i){if(null==e)return i;switch(typeof t){case"string":{if(Ni(t))return i;const n=e[t];return void 0===n?$i(t)?Li(e,ki(t),i):i:n}case"number":case"symbol":{"number"==typeof t&&(t=Ti(t));const n=e[t];return void 0===n?i:n}default:{if(Array.isArray(t))return Di(e,t,i);if(Ni(t=Object.is(t?.valueOf(),-0)?"-0":String(t)))return i;const n=e[t];return void 0===n?i:n}}}function Di(e,t,i){if(0===t.length)return i;let n=e;for(let e=0;e<t.length;e++){if(null==n)return i;if(Ni(t[e]))return i;n=n[t[e]]}return void 0===n?i:n}function Pi(e){return function(t){return Li(t,e)}}function Ri(e){return null!==e&&("object"==typeof e||"function"==typeof e)}function Mi(e){return null==e||"object"!=typeof e&&"function"!=typeof e}function Hi(e,t,i){return"function"!=typeof i?Hi(e,t,()=>{}):Gi(e,t,function e(t,n,o,s,r,a){const l=i(t,n,o,s,r,a);return void 0!==l?Boolean(l):Gi(t,n,e,a)},new Map)}function Gi(e,t,i,n){if(t===e)return!0;switch(typeof t){case"object":return Bi(e,t,i,n);case"function":return Object.keys(t).length>0?Gi(e,{...t},i,n):Jt(e,t);default:return Ri(e)?"string"!=typeof t||""===t:Jt(e,t)}}function Bi(e,t,i,n){if(null==t)return!0;if(Array.isArray(t))return Ui(e,t,i,n);if(t instanceof Map)return ji(e,t,i,n);if(t instanceof Set)return Fi(e,t,i,n);const o=Object.keys(t);if(null==e||Mi(e))return 0===o.length;if(0===o.length)return!0;if(n?.has(t))return n.get(t)===e;n?.set(t,e);try{for(let s=0;s<o.length;s++){const r=o[s];if(!Mi(e)&&!(r in e))return!1;if(void 0===t[r]&&void 0!==e[r])return!1;if(null===t[r]&&null!==e[r])return!1;if(!i(e[r],t[r],r,e,t,n))return!1}return!0}finally{n?.delete(t)}}function ji(e,t,i,n){if(0===t.size)return!0;if(!(e instanceof Map))return!1;for(const[o,s]of t.entries())if(!1===i(e.get(o),s,o,e,t,n))return!1;return!0}function Ui(e,t,i,n){if(0===t.length)return!0;if(!Array.isArray(e))return!1;const o=new Set;for(let s=0;s<t.length;s++){const r=t[s];let a=!1;for(let l=0;l<e.length;l++){if(o.has(l))continue;let c=!1;if(i(e[l],r,s,e,t,n)&&(c=!0),c){o.add(l),a=!0;break}}if(!a)return!1}return!0}function Fi(e,t,i,n){return 0===t.size||e instanceof Set&&Ui([...e],[...t],i,n)}function Vi(e,t){return Hi(e,t,()=>{})}function zi(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function qi(e,t){return Wi(e,void 0,e,new Map,t)}function Wi(e,t,i,n=new Map,o=void 0){const s=o?.(e,t,i,n);if(void 0!==s)return s;if(Mi(e))return e;if(n.has(e))return n.get(e);if(Array.isArray(e)){const t=new Array(e.length);n.set(e,t);for(let s=0;s<e.length;s++)t[s]=Wi(e[s],s,i,n,o);return Object.hasOwn(e,"index")&&(t.index=e.index),Object.hasOwn(e,"input")&&(t.input=e.input),t}if(e instanceof Date)return new Date(e.getTime());if(e instanceof RegExp){const t=new RegExp(e.source,e.flags);return t.lastIndex=e.lastIndex,t}if(e instanceof Map){const t=new Map;n.set(e,t);for(const[s,r]of e)t.set(s,Wi(r,s,i,n,o));return t}if(e instanceof Set){const t=new Set;n.set(e,t);for(const s of e)t.add(Wi(s,void 0,i,n,o));return t}if(Ai(e))return e.subarray();if(zi(e)){const t=new(Object.getPrototypeOf(e).constructor)(e.length);n.set(e,t);for(let s=0;s<e.length;s++)t[s]=Wi(e[s],s,i,n,o);return t}if(e instanceof ArrayBuffer||"undefined"!=typeof SharedArrayBuffer&&e instanceof SharedArrayBuffer)return e.slice(0);if(e instanceof DataView){const t=new DataView(e.buffer.slice(0),e.byteOffset,e.byteLength);return n.set(e,t),Ki(t,e,i,n,o),t}if("undefined"!=typeof File&&e instanceof File){const t=new File([e],e.name,{type:e.type});return n.set(e,t),Ki(t,e,i,n,o),t}if("undefined"!=typeof Blob&&e instanceof Blob){const t=new Blob([e],{type:e.type});return n.set(e,t),Ki(t,e,i,n,o),t}if(e instanceof Error){const t=structuredClone(e);return n.set(e,t),t.message=e.message,t.name=e.name,t.stack=e.stack,t.cause=e.cause,t.constructor=e.constructor,Ki(t,e,i,n,o),t}if(e instanceof Boolean){const t=new Boolean(e.valueOf());return n.set(e,t),Ki(t,e,i,n,o),t}if(e instanceof Number){const t=new Number(e.valueOf());return n.set(e,t),Ki(t,e,i,n,o),t}if(e instanceof String){const t=new String(e.valueOf());return n.set(e,t),Ki(t,e,i,n,o),t}if("object"==typeof e&&Yi(e)){const t=Object.create(Object.getPrototypeOf(e));return n.set(e,t),Ki(t,e,i,n,o),t}return e}function Ki(e,t,i=e,n,o){const s=[...Object.keys(t),...Xt(t)];for(let r=0;r<s.length;r++){const a=s[r],l=Object.getOwnPropertyDescriptor(e,a);(null==l||l.writable)&&(e[a]=Wi(t[a],a,i,n,o))}}function Yi(e){switch(Zt(e)){case ni:case li:case ci:case hi:case ii:case si:case yi:case vi:case _i:case mi:case bi:case ri:case ti:case di:case Qt:case ai:case ei:case oi:case ui:case fi:case pi:case gi:return!0;default:return!1}}function Ji(e){return Wi(e,void 0,e,new Map,void 0)}function Xi(e){return e=Ji(e),t=>Vi(t,e)}function Zi(e,t){return qi(e,(i,n,o,s)=>{const r=t?.(i,n,o,s);if(void 0!==r)return r;if("object"==typeof e){if("[object Object]"===Zt(e)&&"function"!=typeof e.constructor){const t={};return s.set(e,t),Ki(t,e,o,s),t}switch(Object.prototype.toString.call(e)){case ti:case ei:case ii:{const t=new e.constructor(e?.valueOf());return Ki(t,e),t}case ni:{const t={};return Ki(t,e),t.length=e.length,t[Symbol.iterator]=e[Symbol.iterator],t}default:return}}})}function Qi(e){return Zi(e)}function en(e){return null!==e&&"object"==typeof e&&"[object Arguments]"===Zt(e)}const tn=/^(?:0|[1-9]\d*)$/;function nn(e,t=Number.MAX_SAFE_INTEGER){switch(typeof e){case"number":return Number.isInteger(e)&&e>=0&&e<t;case"symbol":return!1;case"string":return tn.test(e)}}function on(e,t){let i;if(i=Array.isArray(t)?t:"string"==typeof t&&$i(t)&&null==e?.[t]?ki(t):[t],0===i.length)return!1;let n=e;for(let e=0;e<i.length;e++){const t=i[e];if(!(null!=n&&Object.hasOwn(n,t)||(Array.isArray(n)||en(n))&&nn(t)&&t<n.length))return!1;n=n[t]}return!0}function sn(e,t){switch(typeof e){case"object":Object.is(e?.valueOf(),-0)&&(e="-0");break;case"number":e=Ti(e)}return t=Qi(t),function(i){const n=Li(i,e);return void 0===n?on(i,e):void 0===t?void 0===n:Vi(n,t)}}function rn(e){return e}function an(e){if(null==e)return rn;switch(typeof e){case"function":return e;case"object":return Array.isArray(e)&&2===e.length?sn(e[0],e[1]):Xi(e);case"string":case"symbol":case"number":return Pi(e)}}function ln(e,t){const i=new Set(t);return e.filter(e=>!i.has(e))}function cn(e){return e[e.length-1]}function dn(e,t,i){const n=new Set(t.map(e=>i(e)));return e.filter(e=>!n.has(i(e)))}function hn(e,t,i){return e.filter(e=>t.every(t=>!i(e,t)))}function un(e,t){return t=Math.max(t,0),e.slice(t)}function fn(e,t){return 0===(t=Math.min(-t,0))?e.slice():e.slice(0,t)}function pn(e,t){for(let i=e.length-1;i>=0;i--)if(!t(e[i],i,e))return e.slice(0,i+1);return[]}function gn(e,t){const i=e.findIndex((e,i,n)=>!t(e,i,n));return-1===i?[]:e.slice(i)}function _n(e,t,i=1){if(null==t&&(t=e,e=0),!Number.isInteger(i)||0===i)throw new Error("The step value must be a non-zero integer.");const n=Math.max(Math.ceil((t-e)/i),0),o=new Array(n);for(let t=0;t<n;t++)o[t]=e+t*i;return o}function mn(e,t=rn){if(!e)return e;const i=Ei(e)||Array.isArray(e)?_n(0,e.length):Object.keys(e);for(let n=0;n<i.length;n++){const o=i[n];if(!1===t(e[o],o,e))break}return e}function bn(e,t,i=0,n=e.length){const o=e.length,s=Math.max(i>=0?i:o+i,0),r=Math.min(n>=0?n:o+n,o);for(let i=s;i<r;i++)e[i]=t;return e}function yn(e){return e}function vn(e){return e[0]}function wn(e,t=1){const i=[],n=Math.floor(t);if(!Ei(e))return i;const o=(e,t)=>{for(let s=0;s<e.length;s++){const r=e[s];t<n&&(Array.isArray(r)||Boolean(r?.[Symbol.isConcatSpreadable])||null!==r&&"object"==typeof r&&"[object Arguments]"===Object.prototype.toString.call(r))?Array.isArray(r)?o(r,t+1):o(Array.from(r),t+1):i.push(r)}};return o(Array.from(e),0),i}function An(e,t){const i={};for(let n=0;n<e.length;n++){const o=e[n],s=t(o,n,e);Object.hasOwn(i,s)||(i[s]=[]),i[s].push(o)}return i}function Cn(e){return e.slice(0,-1)}function En(e,t){const i=new Set(t);return e.filter(e=>i.has(e))}function Sn(e){return[...new Set(e)]}function On(e,t,i){const n=[],o=new Set(t.map(i));for(let t=0;t<e.length;t++){const s=e[t],r=i(s);o.has(r)&&(n.push(s),o.delete(r))}return n}function In(e,t,i){return e.filter(e=>t.some(t=>i(e,t)))}const xn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Tn=/^\w*$/;function kn(e,t){return!Array.isArray(e)&&(!("number"!=typeof e&&"boolean"!=typeof e&&null!=e&&!zt(e))||("string"==typeof e&&(Tn.test(e)||!xn.test(e))||null!=t&&Object.hasOwn(t,e)))}function Nn(e,t){const i=new Set(t);let n=0;for(let t=0;t<e.length;t++)i.has(e[t])||(Object.hasOwn(e,t)?e[n++]=e[t]:delete e[n++]);return e.length=n,e}function $n(e,t){if(null==e)return!0;switch(typeof t){case"symbol":case"number":case"object":if(Array.isArray(t))return Ln(e,t);if("number"==typeof t?t=Ti(t):"object"==typeof t&&(t=Object.is(t?.valueOf(),-0)?"-0":String(t)),Ni(t))return!1;if(void 0===e?.[t])return!0;try{return delete e[t],!0}catch{return!1}case"string":if(void 0===e?.[t]&&$i(t))return Ln(e,ki(t));if(Ni(t))return!1;try{return delete e[t],!0}catch{return!1}}}function Ln(e,t){const i=1===t.length?e:Li(e,t.slice(0,-1)),n=t[t.length-1];if(void 0===i?.[n])return!0;if(Ni(n))return!1;try{return delete i[n],!0}catch{return!1}}function Dn(e,t){const i=e.slice(),n=[];let o=0;for(let s=0;s<e.length;s++)t(e[s],s,i)?n.push(e[s]):Object.hasOwn(e,s)?e[o++]=e[s]:delete e[o++];return e.length=o,n}function Pn(e){return e[Math.floor(Math.random()*e.length)]}function Rn(e,t){if(null==t&&(t=e,e=0),e>=t)throw new Error("Invalid input: The maximum value must be greater than the minimum value.");return Math.random()*(t-e)+e}function Mn(e,t){return Math.floor(Rn(e,t))}function Hn(e,t){if(t>e.length)throw new Error("Size must be less than or equal to the length of array.");const i=new Array(t),n=new Set;for(let o=e.length-t,s=0;o<e.length;o++,s++){let t=Mn(0,o+1);n.has(t)&&(t=o),n.add(t),i[s]=e[t]}return i}function Gn(e){return null==e}function Bn(e){const t=e.slice();for(let e=t.length-1;e>=1;e--){const i=Math.floor(Math.random()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t}function jn(e){return e.slice(1)}function Un(e,t,i){return t=i||void 0===t?1:Kt(t),e.slice(0,t)}function Fn(e,t,i){return(t=i||void 0===t?1:Kt(t))<=0||0===e.length?[]:e.slice(-t)}function Vn(e,t){const i=new Map;for(let n=0;n<e.length;n++){const o=e[n],s=t(o,n,e);i.has(s)||i.set(s,o)}return Array.from(i.values())}function zn(e,t){const i=[];for(let n=0;n<e.length;n++){const o=e[n];i.every(e=>!t(e,o))&&i.push(o)}return i}function qn(e){let t=0;for(let i=0;i<e.length;i++)e[i].length>t&&(t=e[i].length);const i=new Array(t);for(let n=0;n<t;n++){i[n]=new Array(e.length);for(let t=0;t<e.length;t++)i[n][t]=e[t][n]}return i}function Wn(e,...t){return ln(e,t)}function Kn(e,t,i=1,{partialWindows:n=!1}={}){if(t<=0||!Number.isInteger(t))throw new Error("Size must be a positive integer.");if(i<=0||!Number.isInteger(i))throw new Error("Step must be a positive integer.");const o=[],s=n?e.length:e.length-t+1;for(let n=0;n<s;n+=i)o.push(e.slice(n,n+t));return o}function Yn(...e){let t=0;for(let i=0;i<e.length;i++)e[i].length>t&&(t=e[i].length);const i=e.length,n=Array(t);for(let o=0;o<t;++o){const t=Array(i);for(let n=0;n<i;++n)t[n]=e[n][o];n[o]=t}return n}const Jn=(e,t,i)=>{const n=e[t];Object.hasOwn(e,t)&&Jt(n,i)&&(void 0!==i||t in e)||(e[t]=i)};function Xn(e,t,i,n){if(null==e&&!Ri(e))return e;let o;o=kn(t,e)?[t]:Array.isArray(t)?t:ki(t);const s=i(Li(e,o));let r=e;for(let t=0;t<o.length&&null!=r;t++){const i=Ti(o[t]);if(Ni(i))continue;let a;if(t===o.length-1)a=s;else{const s=r[i],l=n?.(s,i,e);a=void 0!==l?l:Ri(s)?s:nn(o[t+1])?[]:{}}Jn(r,i,a),r=r[i]}return e}function Zn(e,t,i){return Xn(e,t,()=>i,()=>{})}function Qn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");const i=function(...n){const o=t?t.apply(this,n):n[0],s=i.cache;if(s.has(o))return s.get(o);const r=e.apply(this,n);return i.cache=s.set(o,r)||s,r};return i.cache=new(Qn.Cache||Map),i}function eo(e,t){if(0===e.length)return;let i=e[0],n=t(i,0,e);for(let o=1;o<e.length;o++){const s=e[o],r=t(s,o,e);r>n&&(n=r,i=s)}return i}function to(e,t){if(0===e.length)return;let i=e[0],n=t(i,0,e);for(let o=1;o<e.length;o++){const s=e[o],r=t(s,o,e);r<n&&(n=r,i=s)}return i}function io(e){return zi(e)}function no(e,t){if((e=Kt(e))<1||!Number.isSafeInteger(e))return[];const i=new Array(e);for(let n=0;n<e;n++)i[n]="function"==typeof t?t(n):n;return i}function oo(e){const t=e?.constructor;return e===("function"==typeof t?t.prototype:Object.prototype)}function so(e){if(null==e)return[];switch(typeof e){case"object":case"function":return Ei(e)?lo(e):oo(e)?ao(e):ro(e);default:return ro(Object(e))}}function ro(e){const t=[];for(const i in e)t.push(i);return t}function ao(e){return ro(e).filter(e=>"constructor"!==e)}function lo(e){const t=no(e.length,e=>`${e}`),i=new Set(t);Ai(e)&&(i.add("offset"),i.add("parent")),io(e)&&(i.add("buffer"),i.add("byteLength"),i.add("byteOffset"));const n=ro(e).filter(e=>!i.has(e));return Array.isArray(e)?[...t,...n]:[...t.filter(t=>Object.hasOwn(e,t)),...n]}function co(e,t){return Object.keys(e).find(i=>t(e[i],i,e))}function ho(e,t){if(Ri(e))return co(e,an(t??yn))}function uo(e){const t=[];for(;e;)t.push(...Xt(e)),e=Object.getPrototypeOf(e);return t}function fo(e,...t){if(null==e)return{};const i=po(e,t=wn(t));for(let e=0;e<t.length;e++){let n=t[e];switch(typeof n){case"object":Array.isArray(n)||(n=Array.from(n));for(let e=0;e<n.length;e++){$n(i,n[e])}break;case"string":case"symbol":case"number":$n(i,n)}}return i}function po(e,t){return t.some(e=>Array.isArray(e)||$i(e))?_o(e):go(e)}function go(e){const t={},i=[...so(e),...uo(e)];for(let n=0;n<i.length;n++){const o=i[n];t[o]=e[o]}return t}function _o(e){const t={},i=[...so(e),...uo(e)];for(let n=0;n<i.length;n++){const o=i[n];t[o]=Zi(e[o],e=>{if(!Yt(e))return e})}return t}function mo(e,...t){if(Gn(e))return{};const i={};for(let n=0;n<t.length;n++){let o=t[n];switch(typeof o){case"object":Array.isArray(o)||(o=Ei(o)?Array.from(o):[o]);break;case"string":case"symbol":case"number":o=[o]}for(const t of o){const n=Li(e,t);(void 0!==n||on(e,t))&&("string"==typeof t&&Object.hasOwn(e,t)?i[t]=n:Zn(i,t,n))}}return i}function bo(e){if(null==e)return!0;if(Ei(e))return!!("function"==typeof e.splice||"string"==typeof e||Ai(e)||io(e)||en(e))&&0===e.length;if("object"==typeof e){if(e instanceof Map||e instanceof Set)return 0===e.size;const t=Object.keys(e);return oo(e)?0===t.filter(e=>"constructor"!==e).length:0===t.length}return!0}function yo(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function vo(e){return yo(xi(e))}Qn.Cache=Map;const wo=(e,t)=>e.filter(e=>!t.has(e));function Ao(e,t){const i=t instanceof Set?t:new Set(t),n={};return mn(e,(e,t)=>{Array.isArray(e)?n[t]=wo(e,i):(n[t]={},mn(e,(e,o)=>{n[t][o]=wo(e,i)}))}),n}const Co=(e,t)=>Ao(mo(e,[J.CUSTOM_GROUPS,J.BOTTOM_ITEMS,J.HIDDEN_ITEMS,J.BOTTOM_GRID_ITEMS]),t),Eo=e=>{if("object"!=typeof e||null===e)return e;const t=JSON.parse(JSON.stringify(e));for(const[i,n]of Object.entries(e)){"object"==typeof n&&bo(n)&&delete t[i]}return t},So=e=>{const t=JSON.parse(JSON.stringify(e)),i=Object.entries(t);for(const[e,n]of i)if("object"==typeof n&&null!==n){const i=Eo(n);bo(i)?delete t[e]:t[e]=i}else void 0!==n&&""!==n||delete t[e];return t};var Oo=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function Io(e,t){return e===t||!(!Oo(e)||!Oo(t))}function xo(e,t){if(e.length!==t.length)return!1;for(var i=0;i<e.length;i++)if(!Io(e[i],t[i]))return!1;return!0}function To(e,t){void 0===t&&(t=xo);var i=null;function n(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(i&&i.lastThis===this&&t(n,i.lastArgs))return i.lastResult;var s=e.apply(this,n);return i={lastResult:s,lastArgs:n,lastThis:this},s}return n.clear=function(){i=null},n}const ko=To(e=>new Intl.Collator(e));To(e=>new Intl.Collator(e,{sensitivity:"accent"}));const No=(e,t)=>e<t?-1:e>t?1:0,$o=(e,t,i=void 0)=>Intl?.Collator?ko(i).compare(e,t):No(e,t),Lo=async(e,t)=>(await e.sendMessagePromise({type:"frontend/get_user_data",key:t})).value,Do=async(e,t,i)=>e.sendMessagePromise({type:"frontend/set_user_data",key:t,value:i}),Po=async e=>await Do(e,"sidebar",{}),Ro=(e,t,i)=>e.subscribeMessage(i,{type:"frontend/subscribe_user_data",key:t}),Mo=e=>{let t=[];function i(i,n){e=n?i:Object.assign(Object.assign({},e),i);let o=t;for(let t=0;t<o.length;t++)o[t](e)}return{get state(){return e},action(t){function n(e){i(e,!1)}return function(){let i=[e];for(let e=0;e<arguments.length;e++)i.push(arguments[e]);let o=t.apply(this,i);if(null!=o)return o instanceof Promise?o.then(n):n(o)}},setState:i,clearState(){e=void 0},subscribe:e=>(t.push(e),()=>{!function(e){let i=[];for(let n=0;n<t.length;n++)t[n]===e?e=null:i.push(t[n]);t=i}(e)})}},Ho=5e3,Go=(e,t,i,n,o={unsubGrace:!0})=>{if(e[t])return e[t];let s,r,a=0,l=Mo();const c=()=>{if(!i)throw new Error("Collection does not support refresh");return i(e).then(e=>l.setState(e,!0))},d=()=>c().catch(t=>{if(e.connected)throw t}),h=()=>{r=void 0,s&&s.then(e=>{e()}),l.clearState(),e.removeEventListener("ready",c),e.removeEventListener("disconnected",u)},u=()=>{r&&(clearTimeout(r),h())};return e[t]={get state(){return l.state},refresh:c,subscribe(t){a++,1===a&&(()=>{if(void 0!==r)return clearTimeout(r),void(r=void 0);n&&(s=n(e,l)),i&&(e.addEventListener("ready",d),d()),e.addEventListener("disconnected",u)})();const c=l.subscribe(t);return void 0!==l.state&&setTimeout(()=>t(l.state),0),()=>{c(),a--,a||(o.unsubGrace?r=setTimeout(h,Ho):h())}}},e[t]},Bo=(e,t,i,n,o)=>Go(n,e,t,i).subscribe(o);function jo(e){return void 0!==e&&"none"!==e.action}function Uo(e){return void 0!==e&&Object.keys(e).filter(e=>"entity"!==e).some(t=>jo(e[t]))}const Fo=["tap_action","hold_action","double_tap_action"],Vo=e=>mo(e,["entity",...Fo]);function zo(e,t){const i=new Wo(e,t,qo);e.addEventListener("pointerdown",i.handleStart.bind(i)),e.addEventListener("pointerup",i.handleEnd.bind(i)),e.addEventListener("contextmenu",e=>e.preventDefault()),e.addEventListener("click",e=>{e.preventDefault(),e.stopImmediatePropagation()}),e.addEventListener("keydown",e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),i.handleStart(e),i.handleEnd(e))}),e.style.cursor="pointer"}function qo(e,t,i){setTimeout(()=>{const n=new CustomEvent("hass-action",{detail:{action:i,config:t},bubbles:!0,composed:!0});e.dispatchEvent(n)},1)}class Wo{constructor(e,t,i){this.startX=null,this.startY=null,this.element=e,this.config=t,this.sendAction=i,this.tapTimeout=null,this.lastTap=0,this.startTime=null,this.isSwiping=!1}handleEnd(e){if(null===this.startTime)return;const t=Date.now(),i=t-this.startTime,n=Math.abs((e.clientX||0)-(this.startX||0)),o=Math.abs((e.clientY||0)-(this.startY||0));if(n>20||o>20)return this.isSwiping=!0,void(this.startTime=null);const s=t-this.lastTap;this.lastTap=t,this.startTime=null,i>500?this.sendAction(this.element,this.config,"hold"):s<300?this.sendAction(this.element,this.config,"double_tap"):this.tapTimeout=window.setTimeout(()=>{this.sendAction(this.element,this.config,"tap")},300)}handleStart(e){e.preventDefault(),this.startTime=Date.now(),this.startX=e.clientX,this.startY=e.clientY,this.isSwiping=!1,clearTimeout(this.tapTimeout)}}const Ko="home",Yo="notfound",Jo="profile",Xo="lovelace",Zo=Ko,Qo=["home","light","security","climate","energy"],es=e=>Boolean(e.panels.lovelace?.config),ts=()=>{const e=window.localStorage.getItem("defaultPanel");return e?JSON.parse(e):null},is=e=>{const t=e.userData?.default_panel||e.systemData?.default_panel||ts()||Zo;return t!==Xo||es(e)?t:Zo},ns=e=>{const t=is(e);return(t?e.panels[t]:void 0)??e.panels[Zo]??e.panels[Yo]},os=e=>[Jo,Yo].includes(e.url_path)?`panel.${e.url_path}`:`panel.${e.title}`,ss=(e,t)=>{const i=os(t);return e.localize(i)||t.title||void 0},rs=(e,t)=>{if(!e.panels)return;const i=Object.values(e.panels).find(e=>e.url_path===t);return i?ss(e,i):void 0},as=e=>e.icon||"profile"!==e.component_name?e.icon||void 0:"mdi:account",ls=e=>e.sendMessagePromise({type:"get_panels"}),cs=(e,t)=>e.subscribeEvents(()=>ls(e).then(e=>t.setState(e,!0)),"panels_updated"),ds=(e,t)=>Bo("_pnl",ls,cs,e,t),hs=[Jo,Yo],us=["developer-tools"],fs=["home","light","climate","security"],ps=e=>fs.includes(e),gs=e=>e.startsWith("/"),_s=e=>({action:"navigate",navigation_path:e.url_path}),ms=e=>e.trim().replace(/[^a-zA-Z0-9-_\u00A0-\uFFEF\s-]/g,"-").replace(/[\s-]+/g,"-"),bs=(e,t)=>{const i=ms(e);return t?`${ms(t)}_${i}`:i},ys=(e,i,o=!1)=>{let s=i.title,r=i.icon,a=i.url_path;const l=Vo(i),c=Uo(l),d=Fo.find(e=>"url"===l[e]?.action&&gs(l[e].url_path??""));c&&d&&(l[d]=_s(l[d])),o&&(s=ss(e,i)||s,r=i.icon,a=`/${i.url_path}`);const h=document.createElement(t.ITEM);h.setAttribute(n.TYPE,"link"),h.href=c?"#":a??"#",h.target=i.target??"",h.setAttribute(n.DATA_PANEL,o?i.url_path:s),h.setAttribute(n.NEW_ITEM,""),h.setAttribute("has-action",c.toString()),h.tabIndex=-1;const u=document.createElement("span");u.classList.add("item-text"),u.setAttribute("slot","headline"),u.innerText=s??"unknown",h.appendChild(u);const f=document.createElement(t.HA_ICON);return f.setAttribute(n.SLOT,"start"),f.icon=r??"mdi:bookmark-outline",h.prepend(f),c&&zo(h,l),h},vs=()=>{const e=document.createElement("span");return e.classList.add(i.BADGE),e.classList.add(i.NO_VISIBLE),e.setAttribute(n.SLOT,"end"),e},ws=()=>{const e=document.createElement("ha-icon");return e.classList.add(i.BADGE),e.classList.add(i.NO_VISIBLE),e.setAttribute(n.SLOT,"end"),e},As=(e,t)=>{const i=document.createElement("ha-tooltip");return i.for=e,i.innerText=t,i.placement="right",i},Cs=(t,i)=>{const o=t.getAttribute(n.DATA_PANEL),s=t.querySelector(e.ITEM_TEXT)?.textContent?.trim()||o||"unknown",r=bs(o,i??"sidebar-panel");t.id=r;return As(r,s)};var Es=Object.freeze({__proto__:null,BUILT_IN_PANELS:fs,DEFAULT_PANEL:Zo,FIXED_PANELS:hs,HOME_PANEL:Ko,LOVELACE_PANEL:Xo,NOT_FOUND_PANEL:Yo,PANEL_DASHBOARDS:Qo,PROFILE_PANEL:Jo,SHOW_AFTER_SPACER_PANELS:us,computeBadge:vs,computeNewItem:ys,computeNotifyIcon:ws,createHaTooltip:As,createHaTooltipForItem:Cs,createId:bs,fetchPanels:ls,getDefaultPanel:ns,getDefaultPanelUrlPath:is,getLegacyDefaultPanelUrlPath:ts,getPanelIcon:as,getPanelNameTranslationKey:os,getPanelTitle:ss,getPanelTitleFromUrlPath:rs,hasLegacyOverviewPanel:es,isBuiltInPanel:ps,subscribePanels:ds,subscribeUpdates:cs});let Ss;const Os=e=>{if(Ss=e||void 0,Ss&&"undefined"!=typeof window)for(const e of Object.values(D)){const t=window.localStorage.getItem(e),i=Is(e);null!==t&&(null===window.localStorage.getItem(i)&&window.localStorage.setItem(i,t),window.localStorage.removeItem(e))}},Is=e=>Ss?`${e}:${Ss}`:e,xs=e=>{const t=Is(e),i=window.localStorage.getItem(t);if(null!==i||t===e)return i;const n=window.localStorage.getItem(e);return null!==n&&(window.localStorage.setItem(t,n),window.localStorage.removeItem(e)),n},Ts=(e,t)=>window.localStorage.setItem(Is(e),JSON.stringify(t)),ks=e=>window.localStorage.removeItem(Is(e)),Ns=()=>{const e=xs(D.HIDDEN_PANELS);return e&&"null"!==e&&"undefined"!==e?JSON.parse(e):[]},$s=()=>{const e=Rs(xs(D.CONFIG_SOURCE));if(Ms(e))return e;return!0===Rs(xs(D.USE_CONFIG_FILE))?"static_yaml":"browser_storage"},Ls=e=>{Ts(D.CONFIG_SOURCE,e),Ts(D.USE_CONFIG_FILE,"static_yaml"===e)},Ds=()=>{const e=xs(D.UI_CONFIG);if(e&&0!==JSON.parse(e).length)return JSON.parse(e)},Ps=()=>{const e=xs(D.PANEL_ORDER);return!e||0===JSON.parse(e).length},Rs=e=>{if(e)try{return JSON.parse(e)}catch{return e}},Ms=e=>"browser_storage"===e||"static_yaml"===e||"home_assistant_config"===e||"home_assistant_profile"===e,Hs={energy:1,map:2,logbook:3,history:4,"developer-tools":9,config:11},Gs=(e,t,i,n,o)=>{const s=e.indexOf(i.url_path),r=e.indexOf(n.url_path);return s!==r?s<r?1:-1:Bs(t,i,n,o)},Bs=(e,t,i,n)=>{const o="lovelace"===t.component_name,s="lovelace"===i.component_name;if(t.url_path===e)return-1;if(i.url_path===e)return 1;if(o&&s)return $o(t.title,i.title,n);if(o&&!s)return-1;if(s)return 1;const r=t.url_path in Hs,a=i.url_path in Hs;return r&&a?Hs[t.url_path]-Hs[i.url_path]:r?-1:a?1:$o(t.title,i.title,n)},js=To((e,t,i,n,o)=>{if(!e)return[[],[]];const s=[],r=[];Object.values(e).filter(e=>!hs.includes(e.url_path)&&e.title&&(!("show_in_sidebar"in e)||e.show_in_sidebar)).forEach(e=>{(e.url_path===t||e.title&&!n.includes(e.url_path)&&(!1!==e.default_visible||i.includes(e.url_path)))&&(us.includes(e.url_path)?r:s).push(e)});const a=[...i].reverse();return s.sort((e,i)=>Gs(a,t,e,i,o.language)),r.sort((e,i)=>Gs(a,t,e,i,o.language)),[s,r]}),Us=(e,t,i)=>{if(!e)return{beforeSpacer:[],builtInDefaultNotVisible:[]};const n=[],o=[];Object.values(e).filter(e=>![...hs].includes(e.url_path)).forEach(e=>{(e.url_path===t||e.title&&(!1!==e.default_visible||fs.includes(e.url_path)))&&(fs.includes(e.url_path)?o:n).push(e)});const s=[...Object.keys(e)].reverse();return n.sort((e,n)=>Gs(s,t,e,n,i.language)),{beforeSpacer:n,builtInDefaultNotVisible:o}},Fs=async(e,t)=>e?Object.values(e).filter(e=>fs.includes(e.url_path)&&e.url_path!==t):[],Vs=async e=>{let t,i;try{const n=await Lo(e.connection,"sidebar");if(t=n?.panelOrder,i=n?.hiddenPanels,!t){const e=xs(D.PANEL_ORDER);t=JSON.parse(e||"null")||[]}if(!i){const e=xs(D.HIDDEN_PANELS);i=JSON.parse(e||"null")||[]}}catch(e){}return{panelOrder:t,hiddenPanels:i}},zs=async e=>{const{panelOrder:t,hiddenPanels:i}=await Vs(e),n=is(e),[o]=js(e.panels,n,t||[],i||[],e.locale),s=e.panels?Object.values(e.panels):[],r=new Set(t||[]),a=new Set(i||[]);for(const e of s)!1!==e.default_visible||r.has(e.url_path)||a.has(e.url_path)||a.add(e.url_path);a.has(n)&&a.delete(n);const l=Array.from(a),c=[...o,...s.filter(e=>l.includes(e.url_path))].map(e=>e.url_path);return{order:c,hidden:l}},qs=e=>{const t=is(e);return js(e.panels,t,[],[],e.locale)},Ws=e=>{const t=e.panels;if(!t)return[];const i=is(e),n=Object.values(t).filter(e=>!(hs.includes(e.url_path)||e.title&&!1!==e.show_in_sidebar||e.url_path===i)).map(e=>e.url_path);return n},Ks=(e,t)=>{if(!e)return[];const i=Object.values(e).filter(e=>!(hs.includes(e.url_path)||e.title&&!1!==e.show_in_sidebar||e.url_path===t)).map(e=>e.url_path);return i};var Ys=Object.freeze({__proto__:null,computeInitialPanelOrder:Us,computePanels:js,getBasePanelData:Vs,getBuiltInPanels:Fs,getHiddenBuiltInPanels:Ws,getPanelItems:zs,getPanelsFromHass:qs,getPanelsNotShownInSidebar:Ks});const Js=e=>e.callWS({type:"lovelace/dashboards/list"}),Xs=(e,t)=>e.callWS({type:"lovelace/dashboards/create",...t}),Zs=(e,t,i)=>e.callWS({type:"lovelace/dashboards/update",dashboard_id:t,...i}),Qs=(e,t)=>e.callWS({type:"lovelace/dashboards/delete",dashboard_id:t});async function er(e){return await Js(e).then(e=>{const t=[],i=[];return e.forEach(e=>{e.show_in_sidebar?t.push(e.url_path):i.push(e.url_path)}),{inSidebar:t,notInSidebar:i}})}const tr=async(e,t)=>{const i=await er(e),n=Ws(e),o=i.inSidebar.filter(e=>!t.includes(e)),s=[i.notInSidebar,n].flat().filter(e=>t.includes(e));return{currentItems:i,added:o,removed:s}},ir=async e=>{const t=await Js(e),i=is(e),n=e.panels||{},o=[];return Qo.forEach(t=>{const s=n[t];if(!s)return;const r={icon:as(s),title:ss(e,s)||s.url_path,show_in_sidebar:s.show_in_sidebar||!1,mode:"storage",url_path:s.url_path,filename:"",default:i===s.url_path,require_admin:s.require_admin||!1,type:"built_in",localized_type:"built_in"};o.push(r)}),o.push(...t.sort((t,i)=>$o(t.title,i.title,e.locale.language)).map(e=>({filename:"",...e,default:i===e.url_path,type:"user_created",localized_type:"user_created"}))),o},nr=async(e,t)=>{const i=await ir(e).then(e=>{const t=e.filter(e=>!e.show_in_sidebar&&!e.default).map(e=>e.url_path);return{inSidebar:e.filter(e=>e.show_in_sidebar).map(e=>e.url_path),notInSidebar:t}}),n=i.inSidebar.filter(e=>!t.includes(e)),o=i.notInSidebar.filter(e=>t.includes(e));return{currentItems:i,added:n,removed:o}};var or=Object.freeze({__proto__:null,_getCurrentDashboardItems:er,compareDashboardItems:tr,comparePanelItems:nr,createDashboard:Xs,deleteDashboard:Qs,fetchDashboards:Js,getPanelItems:ir,updateDashboard:Zs});const sr=["repeatedItems","invalidItems","noTitleItems","hasDefaultInGroupsOrBottom"],rr={repeatedItems:"Duplicated items",invalidItems:"Invalid items",noTitleItems:"Items not showing in sidebar",hasDefaultInGroupsOrBottom:"Default panel included"},ar=e=>Boolean(e.repeatedItems?.length),lr=(e,t)=>{const i=t||Ns();if(!i.length)return So(e);const n=Ao(mo(e,[J.CUSTOM_GROUPS,J.BOTTOM_ITEMS,J.BOTTOM_GRID_ITEMS]),i);let o=[...e.default_collapsed||[]];o=o.filter(e=>n.custom_groups?.[e]);const s={...e,...n,...o.length>0&&{default_collapsed:o},...i.length>0&&{hidden_items:i}};return So(s)},cr=e=>{const t=Array.from(e.new_items||[]).map(e=>e.title);return[...Object.values(e.custom_groups||{}).flat(),...e.bottom_items||[],...e.bottom_grid_items||[],...e.hidden_items||[]].filter(e=>!t.includes(e))},dr=e=>{let t=[];const i={};return e.forEach(e=>{i[e]=(i[e]||0)+1}),t=Object.keys(i).filter(e=>i[e]>1),t},hr=(e,t)=>Boolean(e&&t.includes(e)),ur=async(e,t,i=!1)=>{if(0===cr(e).length)return!i||{valid:!0,config:e};const n=await pr(e,t);if(!n.valid){const e=`${T}: Config has panel warnings.`;if(console.groupCollapsed(`%c${e}`,"color: #ff9800;"),sr.forEach(e=>{const t=n[e];t&&t.length}),n.hasDefaultInGroupsOrBottom){is(t)}console.groupEnd()}return i?n:n.valid},fr=async(e,t)=>{const i=Object.keys(t.panels),n=is(t);let o=cr(e);const s=[...Object.values(e.custom_groups||{}).flat(),...e.bottom_items||[],...e.bottom_grid_items||[]],r=dr(s),a=hr(n,s),l=o.filter(e=>!i.includes(e)),c=await nr(t,o).then(({removed:e})=>e||[]),d=new Set([...l,...c]);return a&&n&&d.add(n),{repeatedItems:r,invalidItems:Array.from(d),noTitleItems:c,hasDefaultInGroupsOrBottom:a}},pr=async(e,t)=>{const i=await fr(e,t);return{valid:Object.values(i).every(e=>Array.isArray(e)?0===e.length:!e),config:e,...i}},gr=async(e,t)=>{const i=await fr(e,t),{repeatedItems:n=[],invalidItems:o=[]}=i;if(0===n.length&&0===o.length)return So(e);const s=Co(e,o);let r=s.custom_groups||{};n.length>0&&(r=Ao({custom_groups:r},n).custom_groups||{});const a=So({...e,...s,custom_groups:r});return console.groupCollapsed("%cVALIDATORS:%c Config correction result","color: #4caf50;","color: #388e3c;"),console.groupEnd(),a},_r=e=>{if("browser_storage"!==$s())return;const t=Ds();JSON.stringify(t)!==JSON.stringify(e)&&Ts(D.UI_CONFIG,e)},mr=["%","em","ex","px","rem","vh","vmax","vmin","vw"],br=new RegExp(`^\\s*(\\d+(\\.\\d+)?)(\\s*(${mr.join("|")})?)\\s*$`),yr=e=>{if(null==e)return;const t="string"==typeof e?e.trim():String(e),i=br.exec(t);if(!i)return void console.warn(`%cVALIDATORS:%c Invalid width value "${e}". Please provide a valid CSS size (e.g. "250px", "20%", "15em").`,"color: #ff9800;","color: #ff5722;");return`${i[1]}${i[4]||"px"}`},vr=Symbol.for("yaml.alias"),wr=Symbol.for("yaml.document"),Ar=Symbol.for("yaml.map"),Cr=Symbol.for("yaml.pair"),Er=Symbol.for("yaml.scalar"),Sr=Symbol.for("yaml.seq"),Or=Symbol.for("yaml.node.type"),Ir=e=>!!e&&"object"==typeof e&&e[Or]===vr,xr=e=>!!e&&"object"==typeof e&&e[Or]===wr,Tr=e=>!!e&&"object"==typeof e&&e[Or]===Ar,kr=e=>!!e&&"object"==typeof e&&e[Or]===Cr,Nr=e=>!!e&&"object"==typeof e&&e[Or]===Er,$r=e=>!!e&&"object"==typeof e&&e[Or]===Sr;function Lr(e){if(e&&"object"==typeof e)switch(e[Or]){case Ar:case Sr:return!0}return!1}function Dr(e){if(e&&"object"==typeof e)switch(e[Or]){case vr:case Ar:case Er:case Sr:return!0}return!1}const Pr=e=>(Nr(e)||Lr(e))&&!!e.anchor,Rr=Symbol("break visit"),Mr=Symbol("skip children"),Hr=Symbol("remove node");function Gr(e,t){const i=Fr(t);if(xr(e)){Br(null,e.contents,i,Object.freeze([e]))===Hr&&(e.contents=null)}else Br(null,e,i,Object.freeze([]))}function Br(e,t,i,n){const o=Vr(e,t,i,n);if(Dr(o)||kr(o))return zr(e,n,o),Br(e,o,i,n);if("symbol"!=typeof o)if(Lr(t)){n=Object.freeze(n.concat(t));for(let e=0;e<t.items.length;++e){const o=Br(e,t.items[e],i,n);if("number"==typeof o)e=o-1;else{if(o===Rr)return Rr;o===Hr&&(t.items.splice(e,1),e-=1)}}}else if(kr(t)){n=Object.freeze(n.concat(t));const e=Br("key",t.key,i,n);if(e===Rr)return Rr;e===Hr&&(t.key=null);const o=Br("value",t.value,i,n);if(o===Rr)return Rr;o===Hr&&(t.value=null)}return o}async function jr(e,t){const i=Fr(t);if(xr(e)){await Ur(null,e.contents,i,Object.freeze([e]))===Hr&&(e.contents=null)}else await Ur(null,e,i,Object.freeze([]))}async function Ur(e,t,i,n){const o=await Vr(e,t,i,n);if(Dr(o)||kr(o))return zr(e,n,o),Ur(e,o,i,n);if("symbol"!=typeof o)if(Lr(t)){n=Object.freeze(n.concat(t));for(let e=0;e<t.items.length;++e){const o=await Ur(e,t.items[e],i,n);if("number"==typeof o)e=o-1;else{if(o===Rr)return Rr;o===Hr&&(t.items.splice(e,1),e-=1)}}}else if(kr(t)){n=Object.freeze(n.concat(t));const e=await Ur("key",t.key,i,n);if(e===Rr)return Rr;e===Hr&&(t.key=null);const o=await Ur("value",t.value,i,n);if(o===Rr)return Rr;o===Hr&&(t.value=null)}return o}function Fr(e){return"object"==typeof e&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function Vr(e,t,i,n){return"function"==typeof i?i(e,t,n):Tr(t)?i.Map?.(e,t,n):$r(t)?i.Seq?.(e,t,n):kr(t)?i.Pair?.(e,t,n):Nr(t)?i.Scalar?.(e,t,n):Ir(t)?i.Alias?.(e,t,n):void 0}function zr(e,t,i){const n=t[t.length-1];if(Lr(n))n.items[e]=i;else if(kr(n))"key"===e?n.key=i:n.value=i;else{if(!xr(n)){const e=Ir(n)?"alias":"scalar";throw new Error(`Cannot replace node with ${e} parent`)}n.contents=i}}Gr.BREAK=Rr,Gr.SKIP=Mr,Gr.REMOVE=Hr,jr.BREAK=Rr,jr.SKIP=Mr,jr.REMOVE=Hr;const qr={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},Wr=e=>e.replace(/[!,[\]{}]/g,e=>qr[e]);class Kr{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},Kr.defaultYaml,e),this.tags=Object.assign({},Kr.defaultTags,t)}clone(){const e=new Kr(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new Kr(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:Kr.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},Kr.defaultTags)}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:Kr.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},Kr.defaultTags),this.atNextDocument=!1);const i=e.trim().split(/[ \t]+/),n=i.shift();switch(n){case"%TAG":{if(2!==i.length&&(t(0,"%TAG directive should contain exactly two parts"),i.length<2))return!1;const[e,n]=i;return this.tags[e]=n,!0}case"%YAML":{if(this.yaml.explicit=!0,1!==i.length)return t(0,"%YAML directive should contain exactly one part"),!1;const[e]=i;if("1.1"===e||"1.2"===e)return this.yaml.version=e,!0;return t(6,`Unsupported YAML version ${e}`,/^\d+\.\d+$/.test(e)),!1}default:return t(0,`Unknown directive ${n}`,!0),!1}}tagName(e,t){if("!"===e)return"!";if("!"!==e[0])return t(`Not a valid tag: ${e}`),null;if("<"===e[1]){const i=e.slice(2,-1);return"!"===i||"!!"===i?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(">"!==e[e.length-1]&&t("Verbatim tags must end with a >"),i)}const[,i,n]=e.match(/^(.*!)([^!]*)$/s);n||t(`The ${e} tag has no suffix`);const o=this.tags[i];if(o)try{return o+decodeURIComponent(n)}catch(e){return t(String(e)),null}return"!"===i?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,i]of Object.entries(this.tags))if(e.startsWith(i))return t+Wr(e.substring(i.length));return"!"===e[0]?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],i=Object.entries(this.tags);let n;if(e&&i.length>0&&Dr(e.contents)){const t={};Gr(e.contents,(e,i)=>{Dr(i)&&i.tag&&(t[i.tag]=!0)}),n=Object.keys(t)}else n=[];for(const[o,s]of i)"!!"===o&&"tag:yaml.org,2002:"===s||e&&!n.some(e=>e.startsWith(s))||t.push(`%TAG ${o} ${s}`);return t.join("\n")}}function Yr(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){const t=JSON.stringify(e);throw new Error(`Anchor must not contain whitespace or control characters: ${t}`)}return!0}function Jr(e){const t=new Set;return Gr(e,{Value(e,i){i.anchor&&t.add(i.anchor)}}),t}function Xr(e,t){for(let i=1;;++i){const n=`${e}${i}`;if(!t.has(n))return n}}function Zr(e,t){const i=[],n=new Map;let o=null;return{onAnchor:n=>{i.push(n),o??(o=Jr(e));const s=Xr(t,o);return o.add(s),s},setAnchors:()=>{for(const e of i){const t=n.get(e);if("object"!=typeof t||!t.anchor||!Nr(t.node)&&!Lr(t.node)){const t=new Error("Failed to resolve repeated object (this should not happen)");throw t.source=e,t}t.node.anchor=t.anchor}},sourceObjects:n}}function Qr(e,t,i,n){if(n&&"object"==typeof n)if(Array.isArray(n))for(let t=0,i=n.length;t<i;++t){const i=n[t],o=Qr(e,n,String(t),i);void 0===o?delete n[t]:o!==i&&(n[t]=o)}else if(n instanceof Map)for(const t of Array.from(n.keys())){const i=n.get(t),o=Qr(e,n,t,i);void 0===o?n.delete(t):o!==i&&n.set(t,o)}else if(n instanceof Set)for(const t of Array.from(n)){const i=Qr(e,n,t,t);void 0===i?n.delete(t):i!==t&&(n.delete(t),n.add(i))}else for(const[t,i]of Object.entries(n)){const o=Qr(e,n,t,i);void 0===o?delete n[t]:o!==i&&(n[t]=o)}return e.call(t,i,n)}function ea(e,t,i){if(Array.isArray(e))return e.map((e,t)=>ea(e,String(t),i));if(e&&"function"==typeof e.toJSON){if(!i||!Pr(e))return e.toJSON(t,i);const n={aliasCount:0,count:1,res:void 0};i.anchors.set(e,n),i.onCreate=e=>{n.res=e,delete i.onCreate};const o=e.toJSON(t,i);return i.onCreate&&i.onCreate(o),o}return"bigint"!=typeof e||i?.keep?e:Number(e)}Kr.defaultYaml={explicit:!1,version:"1.2"},Kr.defaultTags={"!!":"tag:yaml.org,2002:"};class ta{constructor(e){Object.defineProperty(this,Or,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:i,onAnchor:n,reviver:o}={}){if(!xr(e))throw new TypeError("A document argument is required");const s={anchors:new Map,doc:e,keep:!0,mapAsMap:!0===t,mapKeyWarned:!1,maxAliasCount:"number"==typeof i?i:100},r=ea(this,"",s);if("function"==typeof n)for(const{count:e,res:t}of s.anchors.values())n(t,e);return"function"==typeof o?Qr(o,{"":r},"",r):r}}class ia extends ta{constructor(e){super(vr),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){if(0===t?.maxAliasCount)throw new ReferenceError("Alias resolution is disabled");let i,n;t?.aliasResolveCache?i=t.aliasResolveCache:(i=[],Gr(e,{Node:(e,t)=>{(Ir(t)||Pr(t))&&i.push(t)}}),t&&(t.aliasResolveCache=i));for(const e of i){if(e===this)break;e.anchor===this.source&&(n=e)}return n}toJSON(e,t){if(!t)return{source:this.source};const{anchors:i,doc:n,maxAliasCount:o}=t,s=this.resolve(n,t);if(!s){const e=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(e)}let r=i.get(s);if(r||(ea(s,null,t),r=i.get(s)),void 0===r?.res){throw new ReferenceError("This should not happen: Alias anchor was not resolved?")}if(o>=0&&(r.count+=1,0===r.aliasCount&&(r.aliasCount=na(n,s,i)),r.count*r.aliasCount>o)){throw new ReferenceError("Excessive alias count indicates a resource exhaustion attack")}return r.res}toString(e,t,i){const n=`*${this.source}`;if(e){if(Yr(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const e=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(e)}if(e.implicitKey)return`${n} `}return n}}function na(e,t,i){if(Ir(t)){const n=t.resolve(e),o=i&&n&&i.get(n);return o?o.count*o.aliasCount:0}if(Lr(t)){let n=0;for(const o of t.items){const t=na(e,o,i);t>n&&(n=t)}return n}if(kr(t)){const n=na(e,t.key,i),o=na(e,t.value,i);return Math.max(n,o)}return 1}const oa=e=>!e||"function"!=typeof e&&"object"!=typeof e;class sa extends ta{constructor(e){super(Er),this.value=e}toJSON(e,t){return t?.keep?this.value:ea(this.value,e,t)}toString(){return String(this.value)}}sa.BLOCK_FOLDED="BLOCK_FOLDED",sa.BLOCK_LITERAL="BLOCK_LITERAL",sa.PLAIN="PLAIN",sa.QUOTE_DOUBLE="QUOTE_DOUBLE",sa.QUOTE_SINGLE="QUOTE_SINGLE";const ra="tag:yaml.org,2002:";function aa(e,t,i){if(t){const e=i.filter(e=>e.tag===t),n=e.find(e=>!e.format)??e[0];if(!n)throw new Error(`Tag ${t} not found`);return n}return i.find(t=>t.identify?.(e)&&!t.format)}function la(e,t,i){if(xr(e)&&(e=e.contents),Dr(e))return e;if(kr(e)){const t=i.schema[Ar].createNode?.(i.schema,null,i);return t.items.push(e),t}(e instanceof String||e instanceof Number||e instanceof Boolean||"undefined"!=typeof BigInt&&e instanceof BigInt)&&(e=e.valueOf());const{aliasDuplicateObjects:n,onAnchor:o,onTagObj:s,schema:r,sourceObjects:a}=i;let l;if(n&&e&&"object"==typeof e){if(l=a.get(e),l)return l.anchor??(l.anchor=o(e)),new ia(l.anchor);l={anchor:null,node:null},a.set(e,l)}t?.startsWith("!!")&&(t=ra+t.slice(2));let c=aa(e,t,r.tags);if(!c){if(e&&"function"==typeof e.toJSON&&(e=e.toJSON()),!e||"object"!=typeof e){const t=new sa(e);return l&&(l.node=t),t}c=e instanceof Map?r[Ar]:Symbol.iterator in Object(e)?r[Sr]:r[Ar]}s&&(s(c),delete i.onTagObj);const d=c?.createNode?c.createNode(i.schema,e,i):"function"==typeof c?.nodeClass?.from?c.nodeClass.from(i.schema,e,i):new sa(e);return t?d.tag=t:c.default||(d.tag=c.tag),l&&(l.node=d),d}function ca(e,t,i){let n=i;for(let e=t.length-1;e>=0;--e){const i=t[e];if("number"==typeof i&&Number.isInteger(i)&&i>=0){const e=[];e[i]=n,n=e}else n=new Map([[i,n]])}return la(n,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:e,sourceObjects:new Map})}const da=e=>null==e||"object"==typeof e&&!!e[Symbol.iterator]().next().done;class ha extends ta{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(t=>Dr(t)||kr(t)?t.clone(e):t),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(da(e))this.add(t);else{const[i,...n]=e,o=this.get(i,!0);if(Lr(o))o.addIn(n,t);else{if(void 0!==o||!this.schema)throw new Error(`Expected YAML collection at ${i}. Remaining path: ${n}`);this.set(i,ca(this.schema,n,t))}}}deleteIn(e){const[t,...i]=e;if(0===i.length)return this.delete(t);const n=this.get(t,!0);if(Lr(n))return n.deleteIn(i);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${i}`)}getIn(e,t){const[i,...n]=e,o=this.get(i,!0);return 0===n.length?!t&&Nr(o)?o.value:o:Lr(o)?o.getIn(n,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!kr(t))return!1;const i=t.value;return null==i||e&&Nr(i)&&null==i.value&&!i.commentBefore&&!i.comment&&!i.tag})}hasIn(e){const[t,...i]=e;if(0===i.length)return this.has(t);const n=this.get(t,!0);return!!Lr(n)&&n.hasIn(i)}setIn(e,t){const[i,...n]=e;if(0===n.length)this.set(i,t);else{const e=this.get(i,!0);if(Lr(e))e.setIn(n,t);else{if(void 0!==e||!this.schema)throw new Error(`Expected YAML collection at ${i}. Remaining path: ${n}`);this.set(i,ca(this.schema,n,t))}}}}const ua=e=>e.replace(/^(?!$)(?: $)?/gm,"#");function fa(e,t){return/^\n+$/.test(e)?e.substring(1):t?e.replace(/^(?! *$)/gm,t):e}const pa=(e,t,i)=>e.endsWith("\n")?fa(i,t):i.includes("\n")?"\n"+fa(i,t):(e.endsWith(" ")?"":" ")+i,ga="flow",_a="block",ma="quoted";function ba(e,t,i="flow",{indentAtStart:n,lineWidth:o=80,minContentWidth:s=20,onFold:r,onOverflow:a}={}){if(!o||o<0)return e;o<s&&(s=0);const l=Math.max(1+s,1+o-t.length);if(e.length<=l)return e;const c=[],d={};let h,u,f=o-t.length;"number"==typeof n&&(n>o-Math.max(2,s)?c.push(0):f=o-n);let p=!1,g=-1,_=-1,m=-1;i===_a&&(g=ya(e,g,t.length),-1!==g&&(f=g+l));for(let n;n=e[g+=1];){if(i===ma&&"\\"===n){switch(_=g,e[g+1]){case"x":g+=3;break;case"u":g+=5;break;case"U":g+=9;break;default:g+=1}m=g}if("\n"===n)i===_a&&(g=ya(e,g,t.length)),f=g+t.length+l,h=void 0;else{if(" "===n&&u&&" "!==u&&"\n"!==u&&"\t"!==u){const t=e[g+1];t&&" "!==t&&"\n"!==t&&"\t"!==t&&(h=g)}if(g>=f)if(h)c.push(h),f=h+l,h=void 0;else if(i===ma){for(;" "===u||"\t"===u;)u=n,n=e[g+=1],p=!0;const t=g>m+1?g-2:_-1;if(d[t])return e;c.push(t),d[t]=!0,f=t+l,h=void 0}else p=!0}u=n}if(p&&a&&a(),0===c.length)return e;r&&r();let b=e.slice(0,c[0]);for(let n=0;n<c.length;++n){const o=c[n],s=c[n+1]||e.length;0===o?b=`\n${t}${e.slice(0,s)}`:(i===ma&&d[o]&&(b+=`${e[o]}\\`),b+=`\n${t}${e.slice(o+1,s)}`)}return b}function ya(e,t,i){let n=t,o=t+1,s=e[o];for(;" "===s||"\t"===s;)if(t<o+i)s=e[++t];else{do{s=e[++t]}while(s&&"\n"!==s);n=t,o=t+1,s=e[o]}return n}const va=(e,t)=>({indentAtStart:t?e.indent.length:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),wa=e=>/^(%|---|\.\.\.)/m.test(e);function Aa(e,t,i){if(!t||t<0)return!1;const n=t-i,o=e.length;if(o<=n)return!1;for(let t=0,i=0;t<o;++t)if("\n"===e[t]){if(t-i>n)return!0;if(i=t+1,o-i<=n)return!1}return!0}function Ca(e,t){const i=JSON.stringify(e);if(t.options.doubleQuotedAsJSON)return i;const{implicitKey:n}=t,o=t.options.doubleQuotedMinMultiLineLength,s=t.indent||(wa(e)?"  ":"");let r="",a=0;for(let e=0,t=i[e];t;t=i[++e])if(" "===t&&"\\"===i[e+1]&&"n"===i[e+2]&&(r+=i.slice(a,e)+"\\ ",e+=1,a=e,t="\\"),"\\"===t)switch(i[e+1]){case"u":{r+=i.slice(a,e);const t=i.substr(e+2,4);switch(t){case"0000":r+="\\0";break;case"0007":r+="\\a";break;case"000b":r+="\\v";break;case"001b":r+="\\e";break;case"0085":r+="\\N";break;case"00a0":r+="\\_";break;case"2028":r+="\\L";break;case"2029":r+="\\P";break;default:"00"===t.substr(0,2)?r+="\\x"+t.substr(2):r+=i.substr(e,6)}e+=5,a=e+1}break;case"n":if(n||'"'===i[e+2]||i.length<o)e+=1;else{for(r+=i.slice(a,e)+"\n\n";"\\"===i[e+2]&&"n"===i[e+3]&&'"'!==i[e+4];)r+="\n",e+=2;r+=s," "===i[e+2]&&(r+="\\"),e+=1,a=e+1}break;default:e+=1}return r=a?r+i.slice(a):i,n?r:ba(r,s,ma,va(t,!1))}function Ea(e,t){if(!1===t.options.singleQuote||t.implicitKey&&e.includes("\n")||/[ \t]\n|\n[ \t]/.test(e))return Ca(e,t);const i=t.indent||(wa(e)?"  ":""),n="'"+e.replace(/'/g,"''").replace(/\n+/g,`$&\n${i}`)+"'";return t.implicitKey?n:ba(n,i,ga,va(t,!1))}function Sa(e,t){const{singleQuote:i}=t.options;let n;if(!1===i)n=Ca;else{const t=e.includes('"'),o=e.includes("'");n=t&&!o?Ea:o&&!t?Ca:i?Ea:Ca}return n(e,t)}let Oa;try{Oa=new RegExp("(^|(?<!\n))\n+(?!\n|$)","g")}catch{Oa=/\n+(?!\n|$)/g}function Ia({comment:e,type:t,value:i},n,o,s){const{blockQuote:r,commentString:a,lineWidth:l}=n.options;if(!r||/\n[\t ]+$/.test(i))return Sa(i,n);const c=n.indent||(n.forceBlockIndent||wa(i)?"  ":""),d="literal"===r||"folded"!==r&&t!==sa.BLOCK_FOLDED&&(t===sa.BLOCK_LITERAL||!Aa(i,l,c.length));if(!i)return d?"|\n":">\n";let h,u;for(u=i.length;u>0;--u){const e=i[u-1];if("\n"!==e&&"\t"!==e&&" "!==e)break}let f=i.substring(u);const p=f.indexOf("\n");-1===p?h="-":i===f||p!==f.length-1?(h="+",s&&s()):h="",f&&(i=i.slice(0,-f.length),"\n"===f[f.length-1]&&(f=f.slice(0,-1)),f=f.replace(Oa,`$&${c}`));let g,_=!1,m=-1;for(g=0;g<i.length;++g){const e=i[g];if(" "===e)_=!0;else{if("\n"!==e)break;m=g}}let b=i.substring(0,m<g?m+1:g);b&&(i=i.substring(b.length),b=b.replace(/\n+/g,`$&${c}`));let y=(_?c?"2":"1":"")+h;if(e&&(y+=" "+a(e.replace(/ ?[\r\n]+/g," ")),o&&o()),!d){const e=i.replace(/\n+/g,"\n$&").replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);let o=!1;const s=va(n,!0);"folded"!==r&&t!==sa.BLOCK_FOLDED&&(s.onOverflow=()=>{o=!0});const a=ba(`${b}${e}${f}`,c,_a,s);if(!o)return`>${y}\n${c}${a}`}return`|${y}\n${c}${b}${i=i.replace(/\n+/g,`$&${c}`)}${f}`}function xa(e,t,i,n){const{type:o,value:s}=e,{actualString:r,implicitKey:a,indent:l,indentStep:c,inFlow:d}=t;if(a&&s.includes("\n")||d&&/[[\]{},]/.test(s))return Sa(s,t);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(s))return a||d||!s.includes("\n")?Sa(s,t):Ia(e,t,i,n);if(!a&&!d&&o!==sa.PLAIN&&s.includes("\n"))return Ia(e,t,i,n);if(wa(s)){if(""===l)return t.forceBlockIndent=!0,Ia(e,t,i,n);if(a&&l===c)return Sa(s,t)}const h=s.replace(/\n+/g,`$&\n${l}`);if(r){const e=e=>e.default&&"tag:yaml.org,2002:str"!==e.tag&&e.test?.test(h),{compat:i,tags:n}=t.doc.schema;if(n.some(e)||i?.some(e))return Sa(s,t)}return a?h:ba(h,l,ga,va(t,!1))}function Ta(e,t,i,n){const{implicitKey:o,inFlow:s}=t,r="string"==typeof e.value?e:Object.assign({},e,{value:String(e.value)});let{type:a}=e;a!==sa.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(r.value)&&(a=sa.QUOTE_DOUBLE);const l=e=>{switch(e){case sa.BLOCK_FOLDED:case sa.BLOCK_LITERAL:return o||s?Sa(r.value,t):Ia(r,t,i,n);case sa.QUOTE_DOUBLE:return Ca(r.value,t);case sa.QUOTE_SINGLE:return Ea(r.value,t);case sa.PLAIN:return xa(r,t,i,n);default:return null}};let c=l(a);if(null===c){const{defaultKeyType:e,defaultStringType:i}=t.options,n=o&&e||i;if(c=l(n),null===c)throw new Error(`Unsupported default string type ${n}`)}return c}function ka(e,t){const i=Object.assign({blockQuote:!0,commentString:ua,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},e.schema.toStringOptions,t);let n;switch(i.collectionStyle){case"block":n=!1;break;case"flow":n=!0;break;default:n=null}return{anchors:new Set,doc:e,flowCollectionPadding:i.flowCollectionPadding?" ":"",indent:"",indentStep:"number"==typeof i.indent?" ".repeat(i.indent):"  ",inFlow:n,options:i}}function Na(e,t){if(t.tag){const i=e.filter(e=>e.tag===t.tag);if(i.length>0)return i.find(e=>e.format===t.format)??i[0]}let i,n;if(Nr(t)){n=t.value;let o=e.filter(e=>e.identify?.(n));if(o.length>1){const e=o.filter(e=>e.test);e.length>0&&(o=e)}i=o.find(e=>e.format===t.format)??o.find(e=>!e.format)}else n=t,i=e.find(e=>e.nodeClass&&n instanceof e.nodeClass);if(!i){throw new Error(`Tag not resolved for ${n?.constructor?.name??(null===n?"null":typeof n)} value`)}return i}function $a(e,t,{anchors:i,doc:n}){if(!n.directives)return"";const o=[],s=(Nr(e)||Lr(e))&&e.anchor;s&&Yr(s)&&(i.add(s),o.push(`&${s}`));const r=e.tag??(t.default?null:t.tag);return r&&o.push(n.directives.tagString(r)),o.join(" ")}function La(e,t,i,n){if(kr(e))return e.toString(t,i,n);if(Ir(e)){if(t.doc.directives)return e.toString(t);if(t.resolvedAliases?.has(e))throw new TypeError("Cannot stringify circular structure without alias nodes");t.resolvedAliases?t.resolvedAliases.add(e):t.resolvedAliases=new Set([e]),e=e.resolve(t.doc)}let o;const s=Dr(e)?e:t.doc.createNode(e,{onTagObj:e=>o=e});o??(o=Na(t.doc.schema.tags,s));const r=$a(s,o,t);r.length>0&&(t.indentAtStart=(t.indentAtStart??0)+r.length+1);const a="function"==typeof o.stringify?o.stringify(s,t,i,n):Nr(s)?Ta(s,t,i,n):s.toString(t,i,n);return r?Nr(s)||"{"===a[0]||"["===a[0]?`${r} ${a}`:`${r}\n${t.indent}${a}`:a}function Da({key:e,value:t},i,n,o){const{allNullValues:s,doc:r,indent:a,indentStep:l,options:{commentString:c,indentSeq:d,simpleKeys:h}}=i;let u=Dr(e)&&e.comment||null;if(h){if(u)throw new Error("With simple keys, key nodes cannot have comments");if(Lr(e)||!Dr(e)&&"object"==typeof e){throw new Error("With simple keys, collection cannot be used as a key value")}}let f=!h&&(!e||u&&null==t&&!i.inFlow||Lr(e)||(Nr(e)?e.type===sa.BLOCK_FOLDED||e.type===sa.BLOCK_LITERAL:"object"==typeof e));i=Object.assign({},i,{allNullValues:!1,implicitKey:!f&&(h||!s),indent:a+l});let p,g,_,m=!1,b=!1,y=La(e,i,()=>m=!0,()=>b=!0);if(!f&&!i.inFlow&&y.length>1024){if(h)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");f=!0}if(i.inFlow){if(s||null==t)return m&&n&&n(),""===y?"?":f?`? ${y}`:y}else if(s&&!h||null==t&&f)return y=`? ${y}`,u&&!m?y+=pa(y,i.indent,c(u)):b&&o&&o(),y;m&&(u=null),f?(u&&(y+=pa(y,i.indent,c(u))),y=`? ${y}\n${a}:`):(y=`${y}:`,u&&(y+=pa(y,i.indent,c(u)))),Dr(t)?(p=!!t.spaceBefore,g=t.commentBefore,_=t.comment):(p=!1,g=null,_=null,t&&"object"==typeof t&&(t=r.createNode(t))),i.implicitKey=!1,f||u||!Nr(t)||(i.indentAtStart=y.length+1),b=!1,d||!(l.length>=2)||i.inFlow||f||!$r(t)||t.flow||t.tag||t.anchor||(i.indent=i.indent.substring(2));let v=!1;const w=La(t,i,()=>v=!0,()=>b=!0);let A=" ";if(u||p||g){if(A=p?"\n":"",g){A+=`\n${fa(c(g),i.indent)}`}""!==w||i.inFlow?A+=`\n${i.indent}`:"\n"===A&&_&&(A="\n\n")}else if(!f&&Lr(t)){const e=w[0],n=w.indexOf("\n"),o=-1!==n,s=i.inFlow??t.flow??0===t.items.length;if(o||!s){let t=!1;if(o&&("&"===e||"!"===e)){let i=w.indexOf(" ");"&"===e&&-1!==i&&i<n&&"!"===w[i+1]&&(i=w.indexOf(" ",i+1)),(-1===i||n<i)&&(t=!0)}t||(A=`\n${i.indent}`)}}else""!==w&&"\n"!==w[0]||(A="");return y+=A+w,i.inFlow?v&&n&&n():_&&!v?y+=pa(y,i.indent,c(_)):b&&o&&o(),y}function Pa(e,t){"debug"!==e&&"warn"!==e||console.warn(t)}const Ra="<<",Ma={identify:e=>e===Ra||"symbol"==typeof e&&e.description===Ra,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new sa(Symbol(Ra)),{addToJSMap:Ga}),stringify:()=>Ra},Ha=(e,t)=>(Ma.identify(t)||Nr(t)&&(!t.type||t.type===sa.PLAIN)&&Ma.identify(t.value))&&e?.doc.schema.tags.some(e=>e.tag===Ma.tag&&e.default);function Ga(e,t,i){const n=ja(e,i);if($r(n))for(const i of n.items)Ba(e,t,i);else if(Array.isArray(n))for(const i of n)Ba(e,t,i);else Ba(e,t,n)}function Ba(e,t,i){const n=ja(e,i);if(!Tr(n))throw new Error("Merge sources must be maps or map aliases");const o=n.toJSON(null,e,Map);for(const[e,i]of o)t instanceof Map?t.has(e)||t.set(e,i):t instanceof Set?t.add(e):Object.prototype.hasOwnProperty.call(t,e)||Object.defineProperty(t,e,{value:i,writable:!0,enumerable:!0,configurable:!0});return t}function ja(e,t){return e&&Ir(t)?t.resolve(e.doc,e):t}function Ua(e,t,{key:i,value:n}){if(Dr(i)&&i.addToJSMap)i.addToJSMap(e,t,n);else if(Ha(e,i))Ga(e,t,n);else{const o=ea(i,"",e);if(t instanceof Map)t.set(o,ea(n,o,e));else if(t instanceof Set)t.add(o);else{const s=Fa(i,o,e),r=ea(n,s,e);s in t?Object.defineProperty(t,s,{value:r,writable:!0,enumerable:!0,configurable:!0}):t[s]=r}}return t}function Fa(e,t,i){if(null===t)return"";if("object"!=typeof t)return String(t);if(Dr(e)&&i?.doc){const t=ka(i.doc,{});t.anchors=new Set;for(const e of i.anchors.keys())t.anchors.add(e.anchor);t.inFlow=!0,t.inStringifyKey=!0;const n=e.toString(t);if(!i.mapKeyWarned){let e=JSON.stringify(n);e.length>40&&(e=e.substring(0,36)+'..."'),Pa(i.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${e}. Set mapAsMap: true to use object keys.`),i.mapKeyWarned=!0}return n}return JSON.stringify(t)}function Va(e,t,i){const n=la(e,void 0,i),o=la(t,void 0,i);return new za(n,o)}class za{constructor(e,t=null){Object.defineProperty(this,Or,{value:Cr}),this.key=e,this.value=t}clone(e){let{key:t,value:i}=this;return Dr(t)&&(t=t.clone(e)),Dr(i)&&(i=i.clone(e)),new za(t,i)}toJSON(e,t){return Ua(t,t?.mapAsMap?new Map:{},this)}toString(e,t,i){return e?.doc?Da(this,e,t,i):JSON.stringify(this)}}function qa(e,t,i){return(t.inFlow??e.flow?Ka:Wa)(e,t,i)}function Wa({comment:e,items:t},i,{blockItemPrefix:n,flowChars:o,itemIndent:s,onChompKeep:r,onComment:a}){const{indent:l,options:{commentString:c}}=i,d=Object.assign({},i,{indent:s,type:null});let h=!1;const u=[];for(let e=0;e<t.length;++e){const o=t[e];let r=null;if(Dr(o))!h&&o.spaceBefore&&u.push(""),Ya(i,u,o.commentBefore,h),o.comment&&(r=o.comment);else if(kr(o)){const e=Dr(o.key)?o.key:null;e&&(!h&&e.spaceBefore&&u.push(""),Ya(i,u,e.commentBefore,h))}h=!1;let a=La(o,d,()=>r=null,()=>h=!0);r&&(a+=pa(a,s,c(r))),h&&r&&(h=!1),u.push(n+a)}let f;if(0===u.length)f=o.start+o.end;else{f=u[0];for(let e=1;e<u.length;++e){const t=u[e];f+=t?`\n${l}${t}`:"\n"}}return e?(f+="\n"+fa(c(e),l),a&&a()):h&&r&&r(),f}function Ka({items:e},t,{flowChars:i,itemIndent:n}){const{indent:o,indentStep:s,flowCollectionPadding:r,options:{commentString:a}}=t;n+=s;const l=Object.assign({},t,{indent:n,inFlow:!0,type:null});let c=!1,d=0;const h=[];for(let i=0;i<e.length;++i){const o=e[i];let s=null;if(Dr(o))o.spaceBefore&&h.push(""),Ya(t,h,o.commentBefore,!1),o.comment&&(s=o.comment);else if(kr(o)){const e=Dr(o.key)?o.key:null;e&&(e.spaceBefore&&h.push(""),Ya(t,h,e.commentBefore,!1),e.comment&&(c=!0));const i=Dr(o.value)?o.value:null;i?(i.comment&&(s=i.comment),i.commentBefore&&(c=!0)):null==o.value&&e?.comment&&(s=e.comment)}s&&(c=!0);let r=La(o,l,()=>s=null);c||(c=h.length>d||r.includes("\n")),i<e.length-1?r+=",":t.options.trailingComma&&(t.options.lineWidth>0&&(c||(c=h.reduce((e,t)=>e+t.length+2,2)+(r.length+2)>t.options.lineWidth)),c&&(r+=",")),s&&(r+=pa(r,n,a(s))),h.push(r),d=h.length}const{start:u,end:f}=i;if(0===h.length)return u+f;if(!c){const e=h.reduce((e,t)=>e+t.length+2,2);c=t.options.lineWidth>0&&e>t.options.lineWidth}if(c){let e=u;for(const t of h)e+=t?`\n${s}${o}${t}`:"\n";return`${e}\n${o}${f}`}return`${u}${r}${h.join(" ")}${r}${f}`}function Ya({indent:e,options:{commentString:t}},i,n,o){if(n&&o&&(n=n.replace(/^\n+/,"")),n){const o=fa(t(n),e);i.push(o.trimStart())}}function Ja(e,t){const i=Nr(t)?t.value:t;for(const n of e)if(kr(n)){if(n.key===t||n.key===i)return n;if(Nr(n.key)&&n.key.value===i)return n}}class Xa extends ha{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(Ar,e),this.items=[]}static from(e,t,i){const{keepUndefined:n,replacer:o}=i,s=new this(e),r=(e,r)=>{if("function"==typeof o)r=o.call(t,e,r);else if(Array.isArray(o)&&!o.includes(e))return;(void 0!==r||n)&&s.items.push(Va(e,r,i))};if(t instanceof Map)for(const[e,i]of t)r(e,i);else if(t&&"object"==typeof t)for(const e of Object.keys(t))r(e,t[e]);return"function"==typeof e.sortMapEntries&&s.items.sort(e.sortMapEntries),s}add(e,t){let i;i=kr(e)?e:e&&"object"==typeof e&&"key"in e?new za(e.key,e.value):new za(e,e?.value);const n=Ja(this.items,i.key),o=this.schema?.sortMapEntries;if(n){if(!t)throw new Error(`Key ${i.key} already set`);Nr(n.value)&&oa(i.value)?n.value.value=i.value:n.value=i.value}else if(o){const e=this.items.findIndex(e=>o(i,e)<0);-1===e?this.items.push(i):this.items.splice(e,0,i)}else this.items.push(i)}delete(e){const t=Ja(this.items,e);if(!t)return!1;return this.items.splice(this.items.indexOf(t),1).length>0}get(e,t){const i=Ja(this.items,e),n=i?.value;return(!t&&Nr(n)?n.value:n)??void 0}has(e){return!!Ja(this.items,e)}set(e,t){this.add(new za(e,t),!0)}toJSON(e,t,i){const n=i?new i:t?.mapAsMap?new Map:{};t?.onCreate&&t.onCreate(n);for(const e of this.items)Ua(t,n,e);return n}toString(e,t,i){if(!e)return JSON.stringify(this);for(const e of this.items)if(!kr(e))throw new Error(`Map items must all be pairs; found ${JSON.stringify(e)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),qa(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:i,onComment:t})}}const Za={collection:"map",default:!0,nodeClass:Xa,tag:"tag:yaml.org,2002:map",resolve:(e,t)=>(Tr(e)||t("Expected a mapping for this tag"),e),createNode:(e,t,i)=>Xa.from(e,t,i)};class Qa extends ha{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(Sr,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=el(e);if("number"!=typeof t)return!1;return this.items.splice(t,1).length>0}get(e,t){const i=el(e);if("number"!=typeof i)return;const n=this.items[i];return!t&&Nr(n)?n.value:n}has(e){const t=el(e);return"number"==typeof t&&t<this.items.length}set(e,t){const i=el(e);if("number"!=typeof i)throw new Error(`Expected a valid index, not ${e}.`);const n=this.items[i];Nr(n)&&oa(t)?n.value=t:this.items[i]=t}toJSON(e,t){const i=[];t?.onCreate&&t.onCreate(i);let n=0;for(const e of this.items)i.push(ea(e,String(n++),t));return i}toString(e,t,i){return e?qa(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:i,onComment:t}):JSON.stringify(this)}static from(e,t,i){const{replacer:n}=i,o=new this(e);if(t&&Symbol.iterator in Object(t)){let e=0;for(let s of t){if("function"==typeof n){const i=t instanceof Set?s:String(e++);s=n.call(t,i,s)}o.items.push(la(s,void 0,i))}}return o}}function el(e){let t=Nr(e)?e.value:e;return t&&"string"==typeof t&&(t=Number(t)),"number"==typeof t&&Number.isInteger(t)&&t>=0?t:null}const tl={collection:"seq",default:!0,nodeClass:Qa,tag:"tag:yaml.org,2002:seq",resolve:(e,t)=>($r(e)||t("Expected a sequence for this tag"),e),createNode:(e,t,i)=>Qa.from(e,t,i)},il={identify:e=>"string"==typeof e,default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify:(e,t,i,n)=>Ta(e,t=Object.assign({actualString:!0},t),i,n)},nl={identify:e=>null==e,createNode:()=>new sa(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new sa(null),stringify:({source:e},t)=>"string"==typeof e&&nl.test.test(e)?e:t.options.nullStr},ol={identify:e=>"boolean"==typeof e,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new sa("t"===e[0]||"T"===e[0]),stringify({source:e,value:t},i){if(e&&ol.test.test(e)){if(t===("t"===e[0]||"T"===e[0]))return e}return t?i.options.trueStr:i.options.falseStr}};function sl({format:e,minFractionDigits:t,tag:i,value:n}){if("bigint"==typeof n)return String(n);const o="number"==typeof n?n:Number(n);if(!isFinite(o))return isNaN(o)?".nan":o<0?"-.inf":".inf";let s=Object.is(n,-0)?"-0":JSON.stringify(n);if(!e&&t&&(!i||"tag:yaml.org,2002:float"===i)&&/^-?\d/.test(s)&&!s.includes("e")){let e=s.indexOf(".");e<0&&(e=s.length,s+=".");let i=t-(s.length-e-1);for(;i-- >0;)s+="0"}return s}const rl={identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>"nan"===e.slice(-3).toLowerCase()?NaN:"-"===e[0]?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:sl},al={identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():sl(e)}},ll={identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){const t=new sa(parseFloat(e)),i=e.indexOf(".");return-1!==i&&"0"===e[e.length-1]&&(t.minFractionDigits=e.length-i-1),t},stringify:sl},cl=e=>"bigint"==typeof e||Number.isInteger(e),dl=(e,t,i,{intAsBigInt:n})=>n?BigInt(e):parseInt(e.substring(t),i);function hl(e,t,i){const{value:n}=e;return cl(n)&&n>=0?i+n.toString(t):sl(e)}const ul={identify:e=>cl(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(e,t,i)=>dl(e,2,8,i),stringify:e=>hl(e,8,"0o")},fl={identify:cl,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(e,t,i)=>dl(e,0,10,i),stringify:sl},pl={identify:e=>cl(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(e,t,i)=>dl(e,2,16,i),stringify:e=>hl(e,16,"0x")},gl=[Za,tl,il,nl,ol,ul,fl,pl,rl,al,ll];function _l(e){return"bigint"==typeof e||Number.isInteger(e)}const ml=({value:e})=>JSON.stringify(e),bl=[{identify:e=>"string"==typeof e,default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify:ml},{identify:e=>null==e,createNode:()=>new sa(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:ml},{identify:e=>"boolean"==typeof e,default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:e=>"true"===e,stringify:ml},{identify:_l,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,t,{intAsBigInt:i})=>i?BigInt(e):parseInt(e,10),stringify:({value:e})=>_l(e)?e.toString():JSON.stringify(e)},{identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:ml}],yl={default:!0,tag:"",test:/^/,resolve:(e,t)=>(t(`Unresolved plain scalar ${JSON.stringify(e)}`),e)},vl=[Za,tl].concat(bl,yl),wl={identify:e=>e instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(e,t){if("function"==typeof atob){const t=atob(e.replace(/[\n\r]/g,"")),i=new Uint8Array(t.length);for(let e=0;e<t.length;++e)i[e]=t.charCodeAt(e);return i}return t("This environment does not support reading binary tags; either Buffer or atob is required"),e},stringify({comment:e,type:t,value:i},n,o,s){if(!i)return"";const r=i;let a;if("function"!=typeof btoa)throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");{let e="";for(let t=0;t<r.length;++t)e+=String.fromCharCode(r[t]);a=btoa(e)}if(t??(t=sa.BLOCK_LITERAL),t!==sa.QUOTE_DOUBLE){const e=Math.max(n.options.lineWidth-n.indent.length,n.options.minContentWidth),i=Math.ceil(a.length/e),o=new Array(i);for(let t=0,n=0;t<i;++t,n+=e)o[t]=a.substr(n,e);a=o.join(t===sa.BLOCK_LITERAL?"\n":" ")}return Ta({comment:e,type:t,value:a},n,o,s)}};function Al(e,t){if($r(e))for(let i=0;i<e.items.length;++i){let n=e.items[i];if(!kr(n)){if(Tr(n)){n.items.length>1&&t("Each pair must have its own sequence indicator");const e=n.items[0]||new za(new sa(null));if(n.commentBefore&&(e.key.commentBefore=e.key.commentBefore?`${n.commentBefore}\n${e.key.commentBefore}`:n.commentBefore),n.comment){const t=e.value??e.key;t.comment=t.comment?`${n.comment}\n${t.comment}`:n.comment}n=e}e.items[i]=kr(n)?n:new za(n)}}else t("Expected a sequence for this tag");return e}function Cl(e,t,i){const{replacer:n}=i,o=new Qa(e);o.tag="tag:yaml.org,2002:pairs";let s=0;if(t&&Symbol.iterator in Object(t))for(let e of t){let r,a;if("function"==typeof n&&(e=n.call(t,String(s++),e)),Array.isArray(e)){if(2!==e.length)throw new TypeError(`Expected [key, value] tuple: ${e}`);r=e[0],a=e[1]}else if(e&&e instanceof Object){const t=Object.keys(e);if(1!==t.length)throw new TypeError(`Expected tuple with one key, not ${t.length} keys`);r=t[0],a=e[r]}else r=e;o.items.push(Va(r,a,i))}return o}const El={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Al,createNode:Cl};class Sl extends Qa{constructor(){super(),this.add=Xa.prototype.add.bind(this),this.delete=Xa.prototype.delete.bind(this),this.get=Xa.prototype.get.bind(this),this.has=Xa.prototype.has.bind(this),this.set=Xa.prototype.set.bind(this),this.tag=Sl.tag}toJSON(e,t){if(!t)return super.toJSON(e);const i=new Map;t?.onCreate&&t.onCreate(i);for(const e of this.items){let n,o;if(kr(e)?(n=ea(e.key,"",t),o=ea(e.value,n,t)):n=ea(e,"",t),i.has(n))throw new Error("Ordered maps must not include duplicate keys");i.set(n,o)}return i}static from(e,t,i){const n=Cl(e,t,i),o=new this;return o.items=n.items,o}}Sl.tag="tag:yaml.org,2002:omap";const Ol={collection:"seq",identify:e=>e instanceof Map,nodeClass:Sl,default:!1,tag:"tag:yaml.org,2002:omap",resolve(e,t){const i=Al(e,t),n=[];for(const{key:e}of i.items)Nr(e)&&(n.includes(e.value)?t(`Ordered maps must not include duplicate keys: ${e.value}`):n.push(e.value));return Object.assign(new Sl,i)},createNode:(e,t,i)=>Sl.from(e,t,i)};function Il({value:e,source:t},i){return t&&(e?xl:Tl).test.test(t)?t:e?i.options.trueStr:i.options.falseStr}const xl={identify:e=>!0===e,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new sa(!0),stringify:Il},Tl={identify:e=>!1===e,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new sa(!1),stringify:Il},kl={identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>"nan"===e.slice(-3).toLowerCase()?NaN:"-"===e[0]?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:sl},Nl={identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,"")),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():sl(e)}},$l={identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){const t=new sa(parseFloat(e.replace(/_/g,""))),i=e.indexOf(".");if(-1!==i){const n=e.substring(i+1).replace(/_/g,"");"0"===n[n.length-1]&&(t.minFractionDigits=n.length)}return t},stringify:sl},Ll=e=>"bigint"==typeof e||Number.isInteger(e);function Dl(e,t,i,{intAsBigInt:n}){const o=e[0];if("-"!==o&&"+"!==o||(t+=1),e=e.substring(t).replace(/_/g,""),n){switch(i){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`}const t=BigInt(e);return"-"===o?BigInt(-1)*t:t}const s=parseInt(e,i);return"-"===o?-1*s:s}function Pl(e,t,i){const{value:n}=e;if(Ll(n)){const e=n.toString(t);return n<0?"-"+i+e.substr(1):i+e}return sl(e)}const Rl={identify:Ll,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(e,t,i)=>Dl(e,2,2,i),stringify:e=>Pl(e,2,"0b")},Ml={identify:Ll,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(e,t,i)=>Dl(e,1,8,i),stringify:e=>Pl(e,8,"0")},Hl={identify:Ll,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,t,i)=>Dl(e,0,10,i),stringify:sl},Gl={identify:Ll,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,t,i)=>Dl(e,2,16,i),stringify:e=>Pl(e,16,"0x")};class Bl extends Xa{constructor(e){super(e),this.tag=Bl.tag}add(e){let t;t=kr(e)?e:e&&"object"==typeof e&&"key"in e&&"value"in e&&null===e.value?new za(e.key,null):new za(e,null);Ja(this.items,t.key)||this.items.push(t)}get(e,t){const i=Ja(this.items,e);return!t&&kr(i)?Nr(i.key)?i.key.value:i.key:i}set(e,t){if("boolean"!=typeof t)throw new Error("Expected boolean value for set(key, value) in a YAML set, not "+typeof t);const i=Ja(this.items,e);i&&!t?this.items.splice(this.items.indexOf(i),1):!i&&t&&this.items.push(new za(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,i){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,i);throw new Error("Set items must all have null values")}static from(e,t,i){const{replacer:n}=i,o=new this(e);if(t&&Symbol.iterator in Object(t))for(let e of t)"function"==typeof n&&(e=n.call(t,e,e)),o.items.push(Va(e,null,i));return o}}Bl.tag="tag:yaml.org,2002:set";const jl={collection:"map",identify:e=>e instanceof Set,nodeClass:Bl,default:!1,tag:"tag:yaml.org,2002:set",createNode:(e,t,i)=>Bl.from(e,t,i),resolve(e,t){if(Tr(e)){if(e.hasAllNullValues(!0))return Object.assign(new Bl,e);t("Set items must all have null values")}else t("Expected a mapping for this tag");return e}};function Ul(e,t){const i=e[0],n="-"===i||"+"===i?e.substring(1):e,o=e=>t?BigInt(e):Number(e),s=n.replace(/_/g,"").split(":").reduce((e,t)=>e*o(60)+o(t),o(0));return"-"===i?o(-1)*s:s}function Fl(e){let{value:t}=e,i=e=>e;if("bigint"==typeof t)i=e=>BigInt(e);else if(isNaN(t)||!isFinite(t))return sl(e);let n="";t<0&&(n="-",t*=i(-1));const o=i(60),s=[t%o];return t<60?s.unshift(0):(t=(t-s[0])/o,s.unshift(t%o),t>=60&&(t=(t-s[0])/o,s.unshift(t))),n+s.map(e=>String(e).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const Vl={identify:e=>"bigint"==typeof e||Number.isInteger(e),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,t,{intAsBigInt:i})=>Ul(e,i),stringify:Fl},zl={identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>Ul(e,!1),stringify:Fl},ql={identify:e=>e instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(e){const t=e.match(ql.test);if(!t)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,i,n,o,s,r,a]=t.map(Number),l=t[7]?Number((t[7]+"00").substr(1,3)):0;let c=Date.UTC(i,n-1,o,s||0,r||0,a||0,l);const d=t[8];if(d&&"Z"!==d){let e=Ul(d,!1);Math.abs(e)<30&&(e*=60),c-=6e4*e}return new Date(c)},stringify:({value:e})=>e?.toISOString().replace(/(T00:00:00)?\.000Z$/,"")??""},Wl=[Za,tl,il,nl,xl,Tl,Rl,Ml,Hl,Gl,kl,Nl,$l,wl,Ma,Ol,El,jl,Vl,zl,ql],Kl=new Map([["core",gl],["failsafe",[Za,tl,il]],["json",vl],["yaml11",Wl],["yaml-1.1",Wl]]),Yl={binary:wl,bool:ol,float:ll,floatExp:al,floatNaN:rl,floatTime:zl,int:fl,intHex:pl,intOct:ul,intTime:Vl,map:Za,merge:Ma,null:nl,omap:Ol,pairs:El,seq:tl,set:jl,timestamp:ql},Jl={"tag:yaml.org,2002:binary":wl,"tag:yaml.org,2002:merge":Ma,"tag:yaml.org,2002:omap":Ol,"tag:yaml.org,2002:pairs":El,"tag:yaml.org,2002:set":jl,"tag:yaml.org,2002:timestamp":ql};function Xl(e,t,i){const n=Kl.get(t);if(n&&!e)return i&&!n.includes(Ma)?n.concat(Ma):n.slice();let o=n;if(!o){if(!Array.isArray(e)){const e=Array.from(Kl.keys()).filter(e=>"yaml11"!==e).map(e=>JSON.stringify(e)).join(", ");throw new Error(`Unknown schema "${t}"; use one of ${e} or define customTags array`)}o=[]}if(Array.isArray(e))for(const t of e)o=o.concat(t);else"function"==typeof e&&(o=e(o.slice()));return i&&(o=o.concat(Ma)),o.reduce((e,t)=>{const i="string"==typeof t?Yl[t]:t;if(!i){const e=JSON.stringify(t),i=Object.keys(Yl).map(e=>JSON.stringify(e)).join(", ");throw new Error(`Unknown custom tag ${e}; use one of ${i}`)}return e.includes(i)||e.push(i),e},[])}const Zl=(e,t)=>e.key<t.key?-1:e.key>t.key?1:0;class Ql{constructor({compat:e,customTags:t,merge:i,resolveKnownTags:n,schema:o,sortMapEntries:s,toStringDefaults:r}){this.compat=Array.isArray(e)?Xl(e,"compat"):e?Xl(null,e):null,this.name="string"==typeof o&&o||"core",this.knownTags=n?Jl:{},this.tags=Xl(t,this.name,i),this.toStringOptions=r??null,Object.defineProperty(this,Ar,{value:Za}),Object.defineProperty(this,Er,{value:il}),Object.defineProperty(this,Sr,{value:tl}),this.sortMapEntries="function"==typeof s?s:!0===s?Zl:null}clone(){const e=Object.create(Ql.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function ec(e,t){const i=[];let n=!0===t.directives;if(!1!==t.directives&&e.directives){const t=e.directives.toString(e);t?(i.push(t),n=!0):e.directives.docStart&&(n=!0)}n&&i.push("---");const o=ka(e,t),{commentString:s}=o.options;if(e.commentBefore){1!==i.length&&i.unshift("");const t=s(e.commentBefore);i.unshift(fa(t,""))}let r=!1,a=null;if(e.contents){if(Dr(e.contents)){if(e.contents.spaceBefore&&n&&i.push(""),e.contents.commentBefore){const t=s(e.contents.commentBefore);i.push(fa(t,""))}o.forceBlockIndent=!!e.comment,a=e.contents.comment}const t=a?void 0:()=>r=!0;let l=La(e.contents,o,()=>a=null,t);a&&(l+=pa(l,"",s(a))),"|"!==l[0]&&">"!==l[0]||"---"!==i[i.length-1]?i.push(l):i[i.length-1]=`--- ${l}`}else i.push(La(e.contents,o));if(e.directives?.docEnd)if(e.comment){const t=s(e.comment);t.includes("\n")?(i.push("..."),i.push(fa(t,""))):i.push(`... ${t}`)}else i.push("...");else{let t=e.comment;t&&r&&(t=t.replace(/^\n+/,"")),t&&(r&&!a||""===i[i.length-1]||i.push(""),i.push(fa(s(t),"")))}return i.join("\n")+"\n"}let tc=class e{constructor(e,t,i){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Or,{value:wr});let n=null;"function"==typeof t||Array.isArray(t)?n=t:void 0===i&&t&&(i=t,t=void 0);const o=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},i);this.options=o;let{version:s}=o;i?._directives?(this.directives=i._directives.atDocument(),this.directives.yaml.explicit&&(s=this.directives.yaml.version)):this.directives=new Kr({version:s}),this.setSchema(s,i),this.contents=void 0===e?null:this.createNode(e,n,i)}clone(){const t=Object.create(e.prototype,{[Or]:{value:wr}});return t.commentBefore=this.commentBefore,t.comment=this.comment,t.errors=this.errors.slice(),t.warnings=this.warnings.slice(),t.options=Object.assign({},this.options),this.directives&&(t.directives=this.directives.clone()),t.schema=this.schema.clone(),t.contents=Dr(this.contents)?this.contents.clone(t.schema):this.contents,this.range&&(t.range=this.range.slice()),t}add(e){ic(this.contents)&&this.contents.add(e)}addIn(e,t){ic(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const i=Jr(this);e.anchor=!t||i.has(t)?Xr(t||"a",i):t}return new ia(e.anchor)}createNode(e,t,i){let n;if("function"==typeof t)e=t.call({"":e},"",e),n=t;else if(Array.isArray(t)){const e=e=>"number"==typeof e||e instanceof String||e instanceof Number,i=t.filter(e).map(String);i.length>0&&(t=t.concat(i)),n=t}else void 0===i&&t&&(i=t,t=void 0);const{aliasDuplicateObjects:o,anchorPrefix:s,flow:r,keepUndefined:a,onTagObj:l,tag:c}=i??{},{onAnchor:d,setAnchors:h,sourceObjects:u}=Zr(this,s||"a"),f=la(e,c,{aliasDuplicateObjects:o??!0,keepUndefined:a??!1,onAnchor:d,onTagObj:l,replacer:n,schema:this.schema,sourceObjects:u});return r&&Lr(f)&&(f.flow=!0),h(),f}createPair(e,t,i={}){const n=this.createNode(e,null,i),o=this.createNode(t,null,i);return new za(n,o)}delete(e){return!!ic(this.contents)&&this.contents.delete(e)}deleteIn(e){return da(e)?null!=this.contents&&(this.contents=null,!0):!!ic(this.contents)&&this.contents.deleteIn(e)}get(e,t){return Lr(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return da(e)?!t&&Nr(this.contents)?this.contents.value:this.contents:Lr(this.contents)?this.contents.getIn(e,t):void 0}has(e){return!!Lr(this.contents)&&this.contents.has(e)}hasIn(e){return da(e)?void 0!==this.contents:!!Lr(this.contents)&&this.contents.hasIn(e)}set(e,t){null==this.contents?this.contents=ca(this.schema,[e],t):ic(this.contents)&&this.contents.set(e,t)}setIn(e,t){da(e)?this.contents=t:null==this.contents?this.contents=ca(this.schema,Array.from(e),t):ic(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){let i;switch("number"==typeof e&&(e=String(e)),e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new Kr({version:"1.1"}),i={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new Kr({version:e}),i={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,i=null;break;default:{const t=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${t}`)}}if(t.schema instanceof Object)this.schema=t.schema;else{if(!i)throw new Error("With a null YAML version, the { schema: Schema } option is required");this.schema=new Ql(Object.assign(i,t))}}toJS({json:e,jsonArg:t,mapAsMap:i,maxAliasCount:n,onAnchor:o,reviver:s}={}){const r={anchors:new Map,doc:this,keep:!e,mapAsMap:!0===i,mapKeyWarned:!1,maxAliasCount:"number"==typeof n?n:100},a=ea(this.contents,t??"",r);if("function"==typeof o)for(const{count:e,res:t}of r.anchors.values())o(t,e);return"function"==typeof s?Qr(s,{"":a},"",a):a}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return ec(this,e)}};function ic(e){if(Lr(e))return!0;throw new Error("Expected a YAML collection as document contents")}class nc extends Error{constructor(e,t,i,n){super(),this.name=e,this.code=i,this.message=n,this.pos=t}}class oc extends nc{constructor(e,t,i){super("YAMLParseError",e,t,i)}}class sc extends nc{constructor(e,t,i){super("YAMLWarning",e,t,i)}}const rc=(e,t)=>i=>{if(-1===i.pos[0])return;i.linePos=i.pos.map(e=>t.linePos(e));const{line:n,col:o}=i.linePos[0];i.message+=` at line ${n}, column ${o}`;let s=o-1,r=e.substring(t.lineStarts[n-1],t.lineStarts[n]).replace(/[\n\r]+$/,"");if(s>=60&&r.length>80){const e=Math.min(s-39,r.length-79);r="…"+r.substring(e),s-=e-1}if(r.length>80&&(r=r.substring(0,79)+"…"),n>1&&/^ *$/.test(r.substring(0,s))){let i=e.substring(t.lineStarts[n-2],t.lineStarts[n-1]);i.length>80&&(i=i.substring(0,79)+"…\n"),r=i+r}if(/[^ ]/.test(r)){let e=1;const t=i.linePos[1];t?.line===n&&t.col>o&&(e=Math.max(1,Math.min(t.col-o,80-s)));const a=" ".repeat(s)+"^".repeat(e);i.message+=`:\n\n${r}\n${a}\n`}};function ac(e,{flow:t,indicator:i,next:n,offset:o,onError:s,parentIndent:r,startOnNewline:a}){let l=!1,c=a,d=a,h="",u="",f=!1,p=!1,g=null,_=null,m=null,b=null,y=null,v=null,w=null;for(const o of e)switch(p&&("space"!==o.type&&"newline"!==o.type&&"comma"!==o.type&&s(o.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),p=!1),g&&(c&&"comment"!==o.type&&"newline"!==o.type&&s(g,"TAB_AS_INDENT","Tabs are not allowed as indentation"),g=null),o.type){case"space":t||"doc-start"===i&&"flow-collection"===n?.type||!o.source.includes("\t")||(g=o),d=!0;break;case"comment":{d||s(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const e=o.source.substring(1)||" ";h?h+=u+e:h=e,u="",c=!1;break}case"newline":c?h?h+=o.source:v&&"seq-item-ind"===i||(l=!0):u+=o.source,c=!0,f=!0,(_||m)&&(b=o),d=!0;break;case"anchor":_&&s(o,"MULTIPLE_ANCHORS","A node can have at most one anchor"),o.source.endsWith(":")&&s(o.offset+o.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),_=o,w??(w=o.offset),c=!1,d=!1,p=!0;break;case"tag":m&&s(o,"MULTIPLE_TAGS","A node can have at most one tag"),m=o,w??(w=o.offset),c=!1,d=!1,p=!0;break;case i:(_||m)&&s(o,"BAD_PROP_ORDER",`Anchors and tags must be after the ${o.source} indicator`),v&&s(o,"UNEXPECTED_TOKEN",`Unexpected ${o.source} in ${t??"collection"}`),v=o,c="seq-item-ind"===i||"explicit-key-ind"===i,d=!1;break;case"comma":if(t){y&&s(o,"UNEXPECTED_TOKEN",`Unexpected , in ${t}`),y=o,c=!1,d=!1;break}default:s(o,"UNEXPECTED_TOKEN",`Unexpected ${o.type} token`),c=!1,d=!1}const A=e[e.length-1],C=A?A.offset+A.source.length:o;return p&&n&&"space"!==n.type&&"newline"!==n.type&&"comma"!==n.type&&("scalar"!==n.type||""!==n.source)&&s(n.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),g&&(c&&g.indent<=r||"block-map"===n?.type||"block-seq"===n?.type)&&s(g,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:y,found:v,spaceBefore:l,comment:h,hasNewline:f,anchor:_,tag:m,newlineAfterProp:b,end:C,start:w??C}}function lc(e){if(!e)return null;switch(e.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(e.source.includes("\n"))return!0;if(e.end)for(const t of e.end)if("newline"===t.type)return!0;return!1;case"flow-collection":for(const t of e.items){for(const e of t.start)if("newline"===e.type)return!0;if(t.sep)for(const e of t.sep)if("newline"===e.type)return!0;if(lc(t.key)||lc(t.value))return!0}return!1;default:return!0}}function cc(e,t,i){if("flow-collection"===t?.type){const n=t.end[0];if(n.indent===e&&("]"===n.source||"}"===n.source)&&lc(t)){i(n,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}}function dc(e,t,i){const{uniqueKeys:n}=e.options;if(!1===n)return!1;const o="function"==typeof n?n:(e,t)=>e===t||Nr(e)&&Nr(t)&&e.value===t.value;return t.some(e=>o(e.key,i))}const hc="All mapping items must start at the same column";function uc({composeNode:e,composeEmptyNode:t},i,n,o,s){const r=new(s?.nodeClass??Xa)(i.schema);i.atRoot&&(i.atRoot=!1);let a=n.offset,l=null;for(const s of n.items){const{start:c,key:d,sep:h,value:u}=s,f=ac(c,{indicator:"explicit-key-ind",next:d??h?.[0],offset:a,onError:o,parentIndent:n.indent,startOnNewline:!0}),p=!f.found;if(p){if(d&&("block-seq"===d.type?o(a,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in d&&d.indent!==n.indent&&o(a,"BAD_INDENT",hc)),!f.anchor&&!f.tag&&!h){l=f.end,f.comment&&(r.comment?r.comment+="\n"+f.comment:r.comment=f.comment);continue}(f.newlineAfterProp||lc(d))&&o(d??c[c.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else f.found?.indent!==n.indent&&o(a,"BAD_INDENT",hc);i.atKey=!0;const g=f.end,_=d?e(i,d,f,o):t(i,g,c,null,f,o);i.schema.compat&&cc(n.indent,d,o),i.atKey=!1,dc(i,r.items,_)&&o(g,"DUPLICATE_KEY","Map keys must be unique");const m=ac(h??[],{indicator:"map-value-ind",next:u,offset:_.range[2],onError:o,parentIndent:n.indent,startOnNewline:!d||"block-scalar"===d.type});if(a=m.end,m.found){p&&("block-map"!==u?.type||m.hasNewline||o(a,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),i.options.strict&&f.start<m.found.offset-1024&&o(_.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const l=u?e(i,u,m,o):t(i,a,h,null,m,o);i.schema.compat&&cc(n.indent,u,o),a=l.range[2];const c=new za(_,l);i.options.keepSourceTokens&&(c.srcToken=s),r.items.push(c)}else{p&&o(_.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),m.comment&&(_.comment?_.comment+="\n"+m.comment:_.comment=m.comment);const e=new za(_);i.options.keepSourceTokens&&(e.srcToken=s),r.items.push(e)}}return l&&l<a&&o(l,"IMPOSSIBLE","Map comment with trailing content"),r.range=[n.offset,a,l??a],r}function fc({composeNode:e,composeEmptyNode:t},i,n,o,s){const r=new(s?.nodeClass??Qa)(i.schema);i.atRoot&&(i.atRoot=!1),i.atKey&&(i.atKey=!1);let a=n.offset,l=null;for(const{start:s,value:c}of n.items){const d=ac(s,{indicator:"seq-item-ind",next:c,offset:a,onError:o,parentIndent:n.indent,startOnNewline:!0});if(!d.found){if(!(d.anchor||d.tag||c)){l=d.end,d.comment&&(r.comment=d.comment);continue}"block-seq"===c?.type?o(d.end,"BAD_INDENT","All sequence items must start at the same column"):o(a,"MISSING_CHAR","Sequence item without - indicator")}const h=c?e(i,c,d,o):t(i,d.end,s,null,d,o);i.schema.compat&&cc(n.indent,c,o),a=h.range[2],r.items.push(h)}return r.range=[n.offset,a,l??a],r}function pc(e,t,i,n){let o="";if(e){let s=!1,r="";for(const a of e){const{source:e,type:l}=a;switch(l){case"space":s=!0;break;case"comment":{i&&!s&&n(a,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const t=e.substring(1)||" ";o?o+=r+t:o=t,r="";break}case"newline":o&&(r+=e),s=!0;break;default:n(a,"UNEXPECTED_TOKEN",`Unexpected ${l} at node end`)}t+=e.length}}return{comment:o,offset:t}}const gc="Block collections are not allowed within flow collections",_c=e=>e&&("block-map"===e.type||"block-seq"===e.type);function mc({composeNode:e,composeEmptyNode:t},i,n,o,s){const r="{"===n.start.source,a=r?"flow map":"flow sequence",l=new(s?.nodeClass??(r?Xa:Qa))(i.schema);l.flow=!0;const c=i.atRoot;c&&(i.atRoot=!1),i.atKey&&(i.atKey=!1);let d=n.offset+n.start.source.length;for(let s=0;s<n.items.length;++s){const c=n.items[s],{start:h,key:u,sep:f,value:p}=c,g=ac(h,{flow:a,indicator:"explicit-key-ind",next:u??f?.[0],offset:d,onError:o,parentIndent:n.indent,startOnNewline:!1});if(!g.found){if(!(g.anchor||g.tag||f||p)){0===s&&g.comma?o(g.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):s<n.items.length-1&&o(g.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),g.comment&&(l.comment?l.comment+="\n"+g.comment:l.comment=g.comment),d=g.end;continue}!r&&i.options.strict&&lc(u)&&o(u,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(0===s)g.comma&&o(g.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(g.comma||o(g.start,"MISSING_CHAR",`Missing , between ${a} items`),g.comment){let e="";e:for(const t of h)switch(t.type){case"comma":case"space":break;case"comment":e=t.source.substring(1);break e;default:break e}if(e){let t=l.items[l.items.length-1];kr(t)&&(t=t.value??t.key),t.comment?t.comment+="\n"+e:t.comment=e,g.comment=g.comment.substring(e.length+1)}}if(r||f||g.found){i.atKey=!0;const s=g.end,_=u?e(i,u,g,o):t(i,s,h,null,g,o);_c(u)&&o(_.range,"BLOCK_IN_FLOW",gc),i.atKey=!1;const m=ac(f??[],{flow:a,indicator:"map-value-ind",next:p,offset:_.range[2],onError:o,parentIndent:n.indent,startOnNewline:!1});if(m.found){if(!r&&!g.found&&i.options.strict){if(f)for(const e of f){if(e===m.found)break;if("newline"===e.type){o(e,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}g.start<m.found.offset-1024&&o(m.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else p&&("source"in p&&":"===p.source?.[0]?o(p,"MISSING_CHAR",`Missing space after : in ${a}`):o(m.start,"MISSING_CHAR",`Missing , or : between ${a} items`));const b=p?e(i,p,m,o):m.found?t(i,m.end,f,null,m,o):null;b?_c(p)&&o(b.range,"BLOCK_IN_FLOW",gc):m.comment&&(_.comment?_.comment+="\n"+m.comment:_.comment=m.comment);const y=new za(_,b);if(i.options.keepSourceTokens&&(y.srcToken=c),r){const e=l;dc(i,e.items,_)&&o(s,"DUPLICATE_KEY","Map keys must be unique"),e.items.push(y)}else{const e=new Xa(i.schema);e.flow=!0,e.items.push(y);const t=(b??_).range;e.range=[_.range[0],t[1],t[2]],l.items.push(e)}d=b?b.range[2]:m.end}else{const n=p?e(i,p,g,o):t(i,g.end,f,null,g,o);l.items.push(n),d=n.range[2],_c(p)&&o(n.range,"BLOCK_IN_FLOW",gc)}}const h=r?"}":"]",[u,...f]=n.end;let p=d;if(u?.source===h)p=u.offset+u.source.length;else{const e=a[0].toUpperCase()+a.substring(1);o(d,c?"MISSING_CHAR":"BAD_INDENT",c?`${e} must end with a ${h}`:`${e} in block collection must be sufficiently indented and end with a ${h}`),u&&1!==u.source.length&&f.unshift(u)}if(f.length>0){const e=pc(f,p,i.options.strict,o);e.comment&&(l.comment?l.comment+="\n"+e.comment:l.comment=e.comment),l.range=[n.offset,p,e.offset]}else l.range=[n.offset,p,p];return l}function bc(e,t,i,n,o,s){const r="block-map"===i.type?uc(e,t,i,n,s):"block-seq"===i.type?fc(e,t,i,n,s):mc(e,t,i,n,s),a=r.constructor;return"!"===o||o===a.tagName?(r.tag=a.tagName,r):(o&&(r.tag=o),r)}function yc(e,t,i,n,o){const s=n.tag,r=s?t.directives.tagName(s.source,e=>o(s,"TAG_RESOLVE_FAILED",e)):null;if("block-seq"===i.type){const{anchor:e,newlineAfterProp:t}=n,i=e&&s?e.offset>s.offset?e:s:e??s;if(i&&(!t||t.offset<i.offset)){o(i,"MISSING_CHAR","Missing newline after block sequence props")}}const a="block-map"===i.type?"map":"block-seq"===i.type?"seq":"{"===i.start.source?"map":"seq";if(!s||!r||"!"===r||r===Xa.tagName&&"map"===a||r===Qa.tagName&&"seq"===a)return bc(e,t,i,o,r);let l=t.schema.tags.find(e=>e.tag===r&&e.collection===a);if(!l){const n=t.schema.knownTags[r];if(n?.collection!==a)return n?o(s,"BAD_COLLECTION_TYPE",`${n.tag} used for ${a} collection, but expects ${n.collection??"scalar"}`,!0):o(s,"TAG_RESOLVE_FAILED",`Unresolved tag: ${r}`,!0),bc(e,t,i,o,r);t.schema.tags.push(Object.assign({},n,{default:!1})),l=n}const c=bc(e,t,i,o,r,l),d=l.resolve?.(c,e=>o(s,"TAG_RESOLVE_FAILED",e),t.options)??c,h=Dr(d)?d:new sa(d);return h.range=c.range,h.tag=r,l?.format&&(h.format=l.format),h}function vc(e,t,i){const n=t.offset,o=wc(t,e.options.strict,i);if(!o)return{value:"",type:null,comment:"",range:[n,n,n]};const s=">"===o.mode?sa.BLOCK_FOLDED:sa.BLOCK_LITERAL,r=t.source?Ac(t.source):[];let a=r.length;for(let e=r.length-1;e>=0;--e){const t=r[e][1];if(""!==t&&"\r"!==t)break;a=e}if(0===a){const e="+"===o.chomp&&r.length>0?"\n".repeat(Math.max(1,r.length-1)):"";let i=n+o.length;return t.source&&(i+=t.source.length),{value:e,type:s,comment:o.comment,range:[n,i,i]}}let l=t.indent+o.indent,c=t.offset+o.length,d=0;for(let t=0;t<a;++t){const[n,s]=r[t];if(""!==s&&"\r"!==s){if(n.length<l){const e="Block scalars with more-indented leading empty lines must use an explicit indentation indicator";i(c+n.length,"MISSING_CHAR",e)}if(0===o.indent&&(l=n.length),d=t,0===l&&!e.atRoot){i(c,"BAD_INDENT","Block scalar values in collections must be indented")}break}0===o.indent&&n.length>l&&(l=n.length),c+=n.length+s.length+1}for(let e=r.length-1;e>=a;--e)r[e][0].length>l&&(a=e+1);let h="",u="",f=!1;for(let e=0;e<d;++e)h+=r[e][0].slice(l)+"\n";for(let e=d;e<a;++e){let[t,n]=r[e];c+=t.length+n.length+1;const a="\r"===n[n.length-1];if(a&&(n=n.slice(0,-1)),n&&t.length<l){const e=`Block scalar lines must not be less indented than their ${o.indent?"explicit indentation indicator":"first line"}`;i(c-n.length-(a?2:1),"BAD_INDENT",e),t=""}s===sa.BLOCK_LITERAL?(h+=u+t.slice(l)+n,u="\n"):t.length>l||"\t"===n[0]?(" "===u?u="\n":f||"\n"!==u||(u="\n\n"),h+=u+t.slice(l)+n,u="\n",f=!0):""===n?"\n"===u?h+="\n":u="\n":(h+=u+n,u=" ",f=!1)}switch(o.chomp){case"-":break;case"+":for(let e=a;e<r.length;++e)h+="\n"+r[e][0].slice(l);"\n"!==h[h.length-1]&&(h+="\n");break;default:h+="\n"}const p=n+o.length+t.source.length;return{value:h,type:s,comment:o.comment,range:[n,p,p]}}function wc({offset:e,props:t},i,n){if("block-scalar-header"!==t[0].type)return n(t[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:o}=t[0],s=o[0];let r=0,a="",l=-1;for(let t=1;t<o.length;++t){const i=o[t];if(a||"-"!==i&&"+"!==i){const n=Number(i);!r&&n?r=n:-1===l&&(l=e+t)}else a=i}-1!==l&&n(l,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${o}`);let c=!1,d="",h=o.length;for(let e=1;e<t.length;++e){const o=t[e];switch(o.type){case"space":c=!0;case"newline":h+=o.source.length;break;case"comment":if(i&&!c){n(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters")}h+=o.source.length,d=o.source.substring(1);break;case"error":n(o,"UNEXPECTED_TOKEN",o.message),h+=o.source.length;break;default:{n(o,"UNEXPECTED_TOKEN",`Unexpected token in block scalar header: ${o.type}`);const e=o.source;e&&"string"==typeof e&&(h+=e.length)}}}return{mode:s,indent:r,chomp:a,comment:d,length:h}}function Ac(e){const t=e.split(/\n( *)/),i=t[0],n=i.match(/^( *)/),o=[n?.[1]?[n[1],i.slice(n[1].length)]:["",i]];for(let e=1;e<t.length;e+=2)o.push([t[e],t[e+1]]);return o}function Cc(e,t,i){const{offset:n,type:o,source:s,end:r}=e;let a,l;const c=(e,t,o)=>i(n+e,t,o);switch(o){case"scalar":a=sa.PLAIN,l=Ec(s,c);break;case"single-quoted-scalar":a=sa.QUOTE_SINGLE,l=Sc(s,c);break;case"double-quoted-scalar":a=sa.QUOTE_DOUBLE,l=Ic(s,c);break;default:return i(e,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${o}`),{value:"",type:null,comment:"",range:[n,n+s.length,n+s.length]}}const d=n+s.length,h=pc(r,d,t,i);return{value:l,type:a,comment:h.comment,range:[n,d,h.offset]}}function Ec(e,t){let i="";switch(e[0]){case"\t":i="a tab character";break;case",":i="flow indicator character ,";break;case"%":i="directive indicator character %";break;case"|":case">":i=`block scalar indicator ${e[0]}`;break;case"@":case"`":i=`reserved character ${e[0]}`}return i&&t(0,"BAD_SCALAR_START",`Plain value cannot start with ${i}`),Oc(e)}function Sc(e,t){return"'"===e[e.length-1]&&1!==e.length||t(e.length,"MISSING_CHAR","Missing closing 'quote"),Oc(e.slice(1,-1)).replace(/''/g,"'")}function Oc(e){let t,i;try{t=new RegExp("(.*?)(?<![ \t])[ \t]*\r?\n","sy"),i=new RegExp("[ \t]*(.*?)(?:(?<![ \t])[ \t]*)?\r?\n","sy")}catch{t=/(.*?)[ \t]*\r?\n/sy,i=/[ \t]*(.*?)[ \t]*\r?\n/sy}let n=t.exec(e);if(!n)return e;let o=n[1],s=" ",r=t.lastIndex;for(i.lastIndex=r;n=i.exec(e);)""===n[1]?"\n"===s?o+=s:s="\n":(o+=s+n[1],s=" "),r=i.lastIndex;const a=/[ \t]*(.*)/sy;return a.lastIndex=r,n=a.exec(e),o+s+(n?.[1]??"")}function Ic(e,t){let i="";for(let n=1;n<e.length-1;++n){const o=e[n];if("\r"!==o||"\n"!==e[n+1])if("\n"===o){const{fold:t,offset:o}=xc(e,n);i+=t,n=o}else if("\\"===o){let o=e[++n];const s=Tc[o];if(s)i+=s;else if("\n"===o)for(o=e[n+1];" "===o||"\t"===o;)o=e[1+ ++n];else if("\r"===o&&"\n"===e[n+1])for(o=e[1+ ++n];" "===o||"\t"===o;)o=e[1+ ++n];else if("x"===o||"u"===o||"U"===o){const s="x"===o?2:"u"===o?4:8;i+=kc(e,n+1,s,t),n+=s}else{const o=e.substr(n-1,2);t(n-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),i+=o}}else if(" "===o||"\t"===o){const t=n;let s=e[n+1];for(;" "===s||"\t"===s;)s=e[1+ ++n];"\n"===s||"\r"===s&&"\n"===e[n+2]||(i+=n>t?e.slice(t,n+1):o)}else i+=o}return'"'===e[e.length-1]&&1!==e.length||t(e.length,"MISSING_CHAR",'Missing closing "quote'),i}function xc(e,t){let i="",n=e[t+1];for(;!(" "!==n&&"\t"!==n&&"\n"!==n&&"\r"!==n||"\r"===n&&"\n"!==e[t+2]);)"\n"===n&&(i+="\n"),n=e[(t+=1)+1];return i||(i=" "),{fold:i,offset:t}}const Tc={0:"\0",a:"",b:"\b",e:"",f:"\f",n:"\n",r:"\r",t:"\t",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","\t":"\t"};function kc(e,t,i,n){const o=e.substr(t,i),s=o.length===i&&/^[0-9a-fA-F]+$/.test(o)?parseInt(o,16):NaN;try{return String.fromCodePoint(s)}catch{const o=e.substr(t-2,i+2);return n(t-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}}function Nc(e,t,i,n){const{value:o,type:s,comment:r,range:a}="block-scalar"===t.type?vc(e,t,n):Cc(t,e.options.strict,n),l=i?e.directives.tagName(i.source,e=>n(i,"TAG_RESOLVE_FAILED",e)):null;let c,d;c=e.options.stringKeys&&e.atKey?e.schema[Er]:l?$c(e.schema,o,l,i,n):"scalar"===t.type?Lc(e,o,t,n):e.schema[Er];try{const s=c.resolve(o,e=>n(i??t,"TAG_RESOLVE_FAILED",e),e.options);d=Nr(s)?s:new sa(s)}catch(e){const s=e instanceof Error?e.message:String(e);n(i??t,"TAG_RESOLVE_FAILED",s),d=new sa(o)}return d.range=a,d.source=o,s&&(d.type=s),l&&(d.tag=l),c.format&&(d.format=c.format),r&&(d.comment=r),d}function $c(e,t,i,n,o){if("!"===i)return e[Er];const s=[];for(const t of e.tags)if(!t.collection&&t.tag===i){if(!t.default||!t.test)return t;s.push(t)}for(const e of s)if(e.test?.test(t))return e;const r=e.knownTags[i];return r&&!r.collection?(e.tags.push(Object.assign({},r,{default:!1,test:void 0})),r):(o(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${i}`,"tag:yaml.org,2002:str"!==i),e[Er])}function Lc({atKey:e,directives:t,schema:i},n,o,s){const r=i.tags.find(t=>(!0===t.default||e&&"key"===t.default)&&t.test?.test(n))||i[Er];if(i.compat){const e=i.compat.find(e=>e.default&&e.test?.test(n))??i[Er];if(r.tag!==e.tag){s(o,"TAG_RESOLVE_FAILED",`Value may be parsed as either ${t.tagString(r.tag)} or ${t.tagString(e.tag)}`,!0)}}return r}function Dc(e,t,i){if(t){i??(i=t.length);for(let n=i-1;n>=0;--n){let i=t[n];switch(i.type){case"space":case"comment":case"newline":e-=i.source.length;continue}for(i=t[++n];"space"===i?.type;)e+=i.source.length,i=t[++n];break}}return e}const Pc={composeNode:Rc,composeEmptyNode:Mc};function Rc(e,t,i,n){const o=e.atKey,{spaceBefore:s,comment:r,anchor:a,tag:l}=i;let c,d=!0;switch(t.type){case"alias":c=Hc(e,t,n),(a||l)&&n(t,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=Nc(e,t,l,n),a&&(c.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{c=yc(Pc,e,t,i,n),a&&(c.anchor=a.source.substring(1))}catch(e){n(t,"RESOURCE_EXHAUSTION",e instanceof Error?e.message:String(e))}break;default:n(t,"UNEXPECTED_TOKEN","error"===t.type?t.message:`Unsupported token (type: ${t.type})`),d=!1}if(c??(c=Mc(e,t.offset,void 0,null,i,n)),a&&""===c.anchor&&n(a,"BAD_ALIAS","Anchor cannot be an empty string"),o&&e.options.stringKeys&&(!Nr(c)||"string"!=typeof c.value||c.tag&&"tag:yaml.org,2002:str"!==c.tag)){n(l??t,"NON_STRING_KEY","With stringKeys, all keys must be strings")}return s&&(c.spaceBefore=!0),r&&("scalar"===t.type&&""===t.source?c.comment=r:c.commentBefore=r),e.options.keepSourceTokens&&d&&(c.srcToken=t),c}function Mc(e,t,i,n,{spaceBefore:o,comment:s,anchor:r,tag:a,end:l},c){const d=Nc(e,{type:"scalar",offset:Dc(t,i,n),indent:-1,source:""},a,c);return r&&(d.anchor=r.source.substring(1),""===d.anchor&&c(r,"BAD_ALIAS","Anchor cannot be an empty string")),o&&(d.spaceBefore=!0),s&&(d.comment=s,d.range[2]=l),d}function Hc({options:e},{offset:t,source:i,end:n},o){const s=new ia(i.substring(1));""===s.source&&o(t,"BAD_ALIAS","Alias cannot be an empty string"),s.source.endsWith(":")&&o(t+i.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const r=t+i.length,a=pc(n,r,e.strict,o);return s.range=[t,r,a.offset],a.comment&&(s.comment=a.comment),s}function Gc(e,t,{offset:i,start:n,value:o,end:s},r){const a=Object.assign({_directives:t},e),l=new tc(void 0,a),c={atKey:!1,atRoot:!0,directives:l.directives,options:l.options,schema:l.schema},d=ac(n,{indicator:"doc-start",next:o??s?.[0],offset:i,onError:r,parentIndent:0,startOnNewline:!0});d.found&&(l.directives.docStart=!0,!o||"block-map"!==o.type&&"block-seq"!==o.type||d.hasNewline||r(d.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),l.contents=o?Rc(c,o,d,r):Mc(c,d.end,n,null,d,r);const h=l.contents.range[2],u=pc(s,h,!1,r);return u.comment&&(l.comment=u.comment),l.range=[i,h,u.offset],l}function Bc(e){if("number"==typeof e)return[e,e+1];if(Array.isArray(e))return 2===e.length?e:[e[0],e[1]];const{offset:t,source:i}=e;return[t,t+("string"==typeof i?i.length:1)]}function jc(e){let t="",i=!1,n=!1;for(let o=0;o<e.length;++o){const s=e[o];switch(s[0]){case"#":t+=(""===t?"":n?"\n\n":"\n")+(s.substring(1)||" "),i=!0,n=!1;break;case"%":"#"!==e[o+1]?.[0]&&(o+=1),i=!1;break;default:i||(n=!0),i=!1}}return{comment:t,afterEmptyLine:n}}class Uc{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(e,t,i,n)=>{const o=Bc(e);n?this.warnings.push(new sc(o,t,i)):this.errors.push(new oc(o,t,i))},this.directives=new Kr({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:i,afterEmptyLine:n}=jc(this.prelude);if(i){const o=e.contents;if(t)e.comment=e.comment?`${e.comment}\n${i}`:i;else if(n||e.directives.docStart||!o)e.commentBefore=i;else if(Lr(o)&&!o.flow&&o.items.length>0){let e=o.items[0];kr(e)&&(e=e.key);const t=e.commentBefore;e.commentBefore=t?`${i}\n${t}`:i}else{const e=o.commentBefore;o.commentBefore=e?`${i}\n${e}`:i}}if(t){for(let t=0;t<this.errors.length;++t)e.errors.push(this.errors[t]);for(let t=0;t<this.warnings.length;++t)e.warnings.push(this.warnings[t])}else e.errors=this.errors,e.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:jc(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,i=-1){for(const t of e)yield*this.next(t);yield*this.end(t,i)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,i,n)=>{const o=Bc(e);o[0]+=t,this.onError(o,"BAD_DIRECTIVE",i,n)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=Gc(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,i=new oc(Bc(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(i):this.doc.errors.push(i);break}case"doc-end":{if(!this.doc){const t="Unexpected doc-end without preceding document";this.errors.push(new oc(Bc(e),"UNEXPECTED_TOKEN",t));break}this.doc.directives.docEnd=!0;const t=pc(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const e=this.doc.comment;this.doc.comment=e?`${e}\n${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new oc(Bc(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const e=Object.assign({_directives:this.directives},this.options),i=new tc(void 0,e);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),i.range=[0,t,t],this.decorate(i,!1),yield i}}}function Fc(e,t=!0,i){if(e){const n=(e,t,n)=>{const o="number"==typeof e?e:Array.isArray(e)?e[0]:e.offset;if(!i)throw new oc([o,o+1],t,n);i(o,t,n)};switch(e.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return Cc(e,t,n);case"block-scalar":return vc({options:{strict:t}},e,n)}}return null}function Vc(e,t){const{implicitKey:i=!1,indent:n,inFlow:o=!1,offset:s=-1,type:r="PLAIN"}=t,a=Ta({type:r,value:e},{implicitKey:i,indent:n>0?" ".repeat(n):"",inFlow:o,options:{blockQuote:!0,lineWidth:-1}}),l=t.end??[{type:"newline",offset:-1,indent:n,source:"\n"}];switch(a[0]){case"|":case">":{const e=a.indexOf("\n"),t=a.substring(0,e),i=a.substring(e+1)+"\n",o=[{type:"block-scalar-header",offset:s,indent:n,source:t}];return Wc(o,l)||o.push({type:"newline",offset:-1,indent:n,source:"\n"}),{type:"block-scalar",offset:s,indent:n,props:o,source:i}}case'"':return{type:"double-quoted-scalar",offset:s,indent:n,source:a,end:l};case"'":return{type:"single-quoted-scalar",offset:s,indent:n,source:a,end:l};default:return{type:"scalar",offset:s,indent:n,source:a,end:l}}}function zc(e,t,i={}){let{afterKey:n=!1,implicitKey:o=!1,inFlow:s=!1,type:r}=i,a="indent"in e?e.indent:null;if(n&&"number"==typeof a&&(a+=2),!r)switch(e.type){case"single-quoted-scalar":r="QUOTE_SINGLE";break;case"double-quoted-scalar":r="QUOTE_DOUBLE";break;case"block-scalar":{const t=e.props[0];if("block-scalar-header"!==t.type)throw new Error("Invalid block scalar header");r=">"===t.source[0]?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:r="PLAIN"}const l=Ta({type:r,value:t},{implicitKey:o||null===a,indent:null!==a&&a>0?" ".repeat(a):"",inFlow:s,options:{blockQuote:!0,lineWidth:-1}});switch(l[0]){case"|":case">":qc(e,l);break;case'"':Kc(e,l,"double-quoted-scalar");break;case"'":Kc(e,l,"single-quoted-scalar");break;default:Kc(e,l,"scalar")}}function qc(e,t){const i=t.indexOf("\n"),n=t.substring(0,i),o=t.substring(i+1)+"\n";if("block-scalar"===e.type){const t=e.props[0];if("block-scalar-header"!==t.type)throw new Error("Invalid block scalar header");t.source=n,e.source=o}else{const{offset:t}=e,i="indent"in e?e.indent:-1,s=[{type:"block-scalar-header",offset:t,indent:i,source:n}];Wc(s,"end"in e?e.end:void 0)||s.push({type:"newline",offset:-1,indent:i,source:"\n"});for(const t of Object.keys(e))"type"!==t&&"offset"!==t&&delete e[t];Object.assign(e,{type:"block-scalar",indent:i,props:s,source:o})}}function Wc(e,t){if(t)for(const i of t)switch(i.type){case"space":case"comment":e.push(i);break;case"newline":return e.push(i),!0}return!1}function Kc(e,t,i){switch(e.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":e.type=i,e.source=t;break;case"block-scalar":{const n=e.props.slice(1);let o=t.length;"block-scalar-header"===e.props[0].type&&(o-=e.props[0].source.length);for(const e of n)e.offset+=o;delete e.props,Object.assign(e,{type:i,source:t,end:n});break}case"block-map":case"block-seq":{const n={type:"newline",offset:e.offset+t.length,indent:e.indent,source:"\n"};delete e.items,Object.assign(e,{type:i,source:t,end:[n]});break}default:{const n="indent"in e?e.indent:-1,o="end"in e&&Array.isArray(e.end)?e.end.filter(e=>"space"===e.type||"comment"===e.type||"newline"===e.type):[];for(const t of Object.keys(e))"type"!==t&&"offset"!==t&&delete e[t];Object.assign(e,{type:i,indent:n,source:t,end:o})}}}const Yc=e=>"type"in e?Jc(e):Xc(e);function Jc(e){switch(e.type){case"block-scalar":{let t="";for(const i of e.props)t+=Jc(i);return t+e.source}case"block-map":case"block-seq":{let t="";for(const i of e.items)t+=Xc(i);return t}case"flow-collection":{let t=e.start.source;for(const i of e.items)t+=Xc(i);for(const i of e.end)t+=i.source;return t}case"document":{let t=Xc(e);if(e.end)for(const i of e.end)t+=i.source;return t}default:{let t=e.source;if("end"in e&&e.end)for(const i of e.end)t+=i.source;return t}}}function Xc({start:e,key:t,sep:i,value:n}){let o="";for(const t of e)o+=t.source;if(t&&(o+=Jc(t)),i)for(const e of i)o+=e.source;return n&&(o+=Jc(n)),o}const Zc=Symbol("break visit"),Qc=Symbol("skip children"),ed=Symbol("remove item");function td(e,t){"type"in e&&"document"===e.type&&(e={start:e.start,value:e.value}),id(Object.freeze([]),e,t)}function id(e,t,i){let n=i(t,e);if("symbol"==typeof n)return n;for(const o of["key","value"]){const s=t[o];if(s&&"items"in s){for(let t=0;t<s.items.length;++t){const n=id(Object.freeze(e.concat([[o,t]])),s.items[t],i);if("number"==typeof n)t=n-1;else{if(n===Zc)return Zc;n===ed&&(s.items.splice(t,1),t-=1)}}"function"==typeof n&&"key"===o&&(n=n(t,e))}}return"function"==typeof n?n(t,e):n}td.BREAK=Zc,td.SKIP=Qc,td.REMOVE=ed,td.itemAtPath=(e,t)=>{let i=e;for(const[e,n]of t){const t=i?.[e];if(!t||!("items"in t))return;i=t.items[n]}return i},td.parentCollection=(e,t)=>{const i=td.itemAtPath(e,t.slice(0,-1)),n=t[t.length-1][0],o=i?.[n];if(o&&"items"in o)return o;throw new Error("Parent collection not found")};const nd="\ufeff",od="",sd="",rd="",ad=e=>!!e&&"items"in e,ld=e=>!!e&&("scalar"===e.type||"single-quoted-scalar"===e.type||"double-quoted-scalar"===e.type||"block-scalar"===e.type);function cd(e){switch(e){case nd:return"<BOM>";case od:return"<DOC>";case sd:return"<FLOW_END>";case rd:return"<SCALAR>";default:return JSON.stringify(e)}}function dd(e){switch(e){case nd:return"byte-order-mark";case od:return"doc-mode";case sd:return"flow-error-end";case rd:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case"\n":case"\r\n":return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(e[0]){case" ":case"\t":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}var hd=Object.freeze({__proto__:null,BOM:nd,DOCUMENT:od,FLOW_END:sd,SCALAR:rd,createScalarToken:Vc,isCollection:ad,isScalar:ld,prettyToken:cd,resolveAsScalar:Fc,setScalarValue:zc,stringify:Yc,tokenType:dd,visit:td});function ud(e){switch(e){case void 0:case" ":case"\n":case"\r":case"\t":return!0;default:return!1}}const fd=new Set("0123456789ABCDEFabcdef"),pd=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),gd=new Set(",[]{}"),_d=new Set(" ,[]{}\n\r\t"),md=e=>!e||_d.has(e);class bd{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if("string"!=typeof e)throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let i=this.next??"stream";for(;i&&(t||this.hasChars(1));)i=yield*this.parseNext(i)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;" "===t||"\t"===t;)t=this.buffer[++e];return!t||"#"===t||"\n"===t||"\r"===t&&"\n"===this.buffer[e+1]}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let i=0;for(;" "===t;)t=this.buffer[++i+e];if("\r"===t){const t=this.buffer[i+e+1];if("\n"===t||!t&&!this.atEnd)return e+i+1}return"\n"===t||i>=this.indentNext||!t&&!this.atEnd?e+i:-1}if("-"===t||"."===t){const t=this.buffer.substr(e,3);if(("---"===t||"..."===t)&&ud(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return("number"!=typeof e||-1!==e&&e<this.pos)&&(e=this.buffer.indexOf("\n",this.pos),this.lineEndPos=e),-1===e?this.atEnd?this.buffer.substring(this.pos):null:("\r"===this.buffer[e-1]&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(null===e)return this.setNext("stream");if(e[0]===nd&&(yield*this.pushCount(1),e=e.substring(1)),"%"===e[0]){let t=e.length,i=e.indexOf("#");for(;-1!==i;){const n=e[i-1];if(" "===n||"\t"===n){t=i-1;break}i=e.indexOf("#",i+1)}for(;;){const i=e[t-1];if(" "!==i&&"\t"!==i)break;t-=1}const n=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-n),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield od,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if("-"===e||"."===e){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const e=this.peek(3);if(("---"===e||"..."===e)&&ud(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,"---"===e?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!ud(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if(("-"===e||"?"===e||":"===e)&&ud(t)){const e=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=e,"block-start"}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(null===e)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(md),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=(yield*this.parseBlockScalarHeader()),t+=(yield*this.pushSpaces(!0)),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,i=-1;do{e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=i=t):t=0,t+=(yield*this.pushSpaces(!0))}while(e+t>0);const n=this.getLine();if(null===n)return this.setNext("flow");if(-1!==i&&i<this.indentNext&&"#"!==n[0]||0===i&&(n.startsWith("---")||n.startsWith("..."))&&ud(n[3])){if(!(i===this.indentNext-1&&1===this.flowLevel&&("]"===n[0]||"}"===n[0])))return this.flowLevel=0,yield sd,yield*this.parseLineStart()}let o=0;for(;","===n[o];)o+=(yield*this.pushCount(1)),o+=(yield*this.pushSpaces(!0)),this.flowKey=!1;switch(o+=(yield*this.pushIndicators()),n[o]){case void 0:return"flow";case"#":return yield*this.pushCount(n.length-o),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(md),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const e=this.charAt(1);if(this.flowKey||ud(e)||","===e)return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if("'"===e)for(;-1!==t&&"'"===this.buffer[t+1];)t=this.buffer.indexOf("'",t+2);else for(;-1!==t;){let e=0;for(;"\\"===this.buffer[t-1-e];)e+=1;if(e%2==0)break;t=this.buffer.indexOf('"',t+1)}const i=this.buffer.substring(0,t);let n=i.indexOf("\n",this.pos);if(-1!==n){for(;-1!==n;){const e=this.continueScalar(n+1);if(-1===e)break;n=i.indexOf("\n",e)}-1!==n&&(t=n-("\r"===i[n-1]?2:1))}if(-1===t){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if("+"===t)this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if("-"!==t)break}return yield*this.pushUntil(e=>ud(e)||"#"===e)}*parseBlockScalar(){let e,t=this.pos-1,i=0;e:for(let n=this.pos;e=this.buffer[n];++n)switch(e){case" ":i+=1;break;case"\n":t=n,i=0;break;case"\r":{const e=this.buffer[n+1];if(!e&&!this.atEnd)return this.setNext("block-scalar");if("\n"===e)break}default:break e}if(!e&&!this.atEnd)return this.setNext("block-scalar");if(i>=this.indentNext){-1===this.blockScalarIndent?this.indentNext=i:this.indentNext=this.blockScalarIndent+(0===this.indentNext?1:this.indentNext);do{const e=this.continueScalar(t+1);if(-1===e)break;t=this.buffer.indexOf("\n",e)}while(-1!==t);if(-1===t){if(!this.atEnd)return this.setNext("block-scalar");t=this.buffer.length}}let n=t+1;for(e=this.buffer[n];" "===e;)e=this.buffer[++n];if("\t"===e){for(;"\t"===e||" "===e||"\r"===e||"\n"===e;)e=this.buffer[++n];t=n-1}else if(!this.blockScalarKeep)for(;;){let e=t-1,n=this.buffer[e];"\r"===n&&(n=this.buffer[--e]);const o=e;for(;" "===n;)n=this.buffer[--e];if(!("\n"===n&&e>=this.pos&&e+1+i>o))break;t=e}return yield rd,yield*this.pushToIndex(t+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t,i=this.pos-1,n=this.pos-1;for(;t=this.buffer[++n];)if(":"===t){const t=this.buffer[n+1];if(ud(t)||e&&gd.has(t))break;i=n}else if(ud(t)){let o=this.buffer[n+1];if("\r"===t&&("\n"===o?(n+=1,t="\n",o=this.buffer[n+1]):i=n),"#"===o||e&&gd.has(o))break;if("\n"===t){const e=this.continueScalar(n+1);if(-1===e)break;n=Math.max(n,e-2)}}else{if(e&&gd.has(t))break;i=n}return t||this.atEnd?(yield rd,yield*this.pushToIndex(i+1,!0),e?"flow":"doc"):this.setNext("plain-scalar")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const i=this.buffer.slice(this.pos,e);return i?(yield i,this.pos+=i.length,i.length):(t&&(yield""),0)}*pushIndicators(){let e=0;e:for(;;){switch(this.charAt(0)){case"!":e+=(yield*this.pushTag()),e+=(yield*this.pushSpaces(!0));continue e;case"&":e+=(yield*this.pushUntil(md)),e+=(yield*this.pushSpaces(!0));continue e;case"-":case"?":case":":{const t=this.flowLevel>0,i=this.charAt(1);if(ud(i)||t&&gd.has(i)){t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,e+=(yield*this.pushCount(1)),e+=(yield*this.pushSpaces(!0));continue e}}}break e}return e}*pushTag(){if("<"===this.charAt(1)){let e=this.pos+2,t=this.buffer[e];for(;!ud(t)&&">"!==t;)t=this.buffer[++e];return yield*this.pushToIndex(">"===t?e+1:e,!1)}{let e=this.pos+1,t=this.buffer[e];for(;t;)if(pd.has(t))t=this.buffer[++e];else{if("%"!==t||!fd.has(this.buffer[e+1])||!fd.has(this.buffer[e+2]))break;t=this.buffer[e+=3]}return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return"\n"===e?yield*this.pushCount(1):"\r"===e&&"\n"===this.charAt(1)?yield*this.pushCount(2):0}*pushSpaces(e){let t,i=this.pos-1;do{t=this.buffer[++i]}while(" "===t||e&&"\t"===t);const n=i-this.pos;return n>0&&(yield this.buffer.substr(this.pos,n),this.pos=i),n}*pushUntil(e){let t=this.pos,i=this.buffer[t];for(;!e(i);)i=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class yd{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,i=this.lineStarts.length;for(;t<i;){const n=t+i>>1;this.lineStarts[n]<e?t=n+1:i=n}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(0===t)return{line:0,col:e};return{line:t,col:e-this.lineStarts[t-1]+1}}}}function vd(e,t){for(let i=0;i<e.length;++i)if(e[i].type===t)return!0;return!1}function wd(e){for(let t=0;t<e.length;++t)switch(e[t].type){case"space":case"comment":case"newline":break;default:return t}return-1}function Ad(e){switch(e?.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Cd(e){switch(e.type){case"document":return e.start;case"block-map":{const t=e.items[e.items.length-1];return t.sep??t.start}case"block-seq":return e.items[e.items.length-1].start;default:return[]}}function Ed(e){if(0===e.length)return[];let t=e.length;e:for(;--t>=0;)switch(e[t].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;"space"===e[++t]?.type;);return e.splice(t,e.length)}function Sd(e,t){if(t.length<1e5)Array.prototype.push.apply(e,t);else for(let i=0;i<t.length;++i)e.push(t[i])}function Od(e){if("flow-seq-start"===e.start.type)for(const t of e.items)!t.sep||t.value||vd(t.start,"explicit-key-ind")||vd(t.sep,"map-value-ind")||(t.key&&(t.value=t.key),delete t.key,Ad(t.value)?t.value.end?Sd(t.value.end,t.sep):t.value.end=t.sep:Sd(t.start,t.sep),delete t.sep)}class Id{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new bd,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&0===this.offset&&this.onNewLine(0);for(const i of this.lexer.lex(e,t))yield*this.next(i);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar)return this.atScalar=!1,yield*this.step(),void(this.offset+=e.length);const t=dd(e);if(t)if("scalar"===t)this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&" "===e[0]&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const t=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:t,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if("doc-end"!==this.type||"doc-end"===e?.type){if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}else{for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source})}}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(t)if(0===this.stack.length)yield t;else{const e=this.peek(1);switch("block-scalar"===t.type?t.indent="indent"in e?e.indent:0:"flow-collection"===t.type&&"document"===e.type&&(t.indent=0),"flow-collection"===t.type&&Od(t),e.type){case"document":e.value=t;break;case"block-scalar":e.props.push(t);break;case"block-map":{const i=e.items[e.items.length-1];if(i.value)return e.items.push({start:[],key:t,sep:[]}),void(this.onKeyLine=!0);if(!i.sep)return Object.assign(i,{key:t,sep:[]}),void(this.onKeyLine=!i.explicitKey);i.value=t;break}case"block-seq":{const i=e.items[e.items.length-1];i.value?e.items.push({start:[],value:t}):i.value=t;break}case"flow-collection":{const i=e.items[e.items.length-1];return void(!i||i.value?e.items.push({start:[],key:t,sep:[]}):i.sep?i.value=t:Object.assign(i,{key:t,sep:[]}))}default:yield*this.pop(),yield*this.pop(t)}if(!("document"!==e.type&&"block-map"!==e.type&&"block-seq"!==e.type||"block-map"!==t.type&&"block-seq"!==t.type)){const i=t.items[t.items.length-1];i&&!i.sep&&!i.value&&i.start.length>0&&-1===wd(i.start)&&(0===t.indent||i.start.every(e=>"comment"!==e.type||e.indent<t.indent))&&("document"===e.type?e.end=i.start:e.items.push({start:i.start}),t.items.splice(-1,1))}}else{const e="Tried to pop an empty stack";yield{type:"error",offset:this.offset,source:"",message:e}}}*stream(){switch(this.type){case"directive-line":return void(yield{type:"directive",offset:this.offset,source:this.source});case"byte-order-mark":case"space":case"comment":case"newline":return void(yield this.sourceToken);case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};return"doc-start"===this.type&&e.start.push(this.sourceToken),void this.stack.push(e)}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":return void(-1!==wd(e.start)?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken));case"anchor":case"tag":case"space":case"comment":case"newline":return void e.start.push(this.sourceToken)}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if("map-value-ind"===this.type){const t=Ed(Cd(this.peek(2)));let i;e.end?(i=e.end,i.push(this.sourceToken),delete e.end):i=[this.sourceToken];const n={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:t,key:e,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=n}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":return void e.props.push(this.sourceToken);case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let e=this.source.indexOf("\n")+1;for(;0!==e;)this.onNewLine(this.offset+e),e=this.source.indexOf("\n",e)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const i="end"in t.value?t.value.end:void 0,n=Array.isArray(i)?i[i.length-1]:void 0;"comment"===n?.type?i?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const i=e.items[e.items.length-2],n=i?.value?.end;if(Array.isArray(n))return Sd(n,t.start),n.push(this.sourceToken),void e.items.pop()}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const i=!this.onKeyLine&&this.indent===e.indent,n=i&&(t.sep||t.explicitKey)&&"seq-item-ind"!==this.type;let o=[];if(n&&t.sep&&!t.value){const i=[];for(let n=0;n<t.sep.length;++n){const o=t.sep[n];switch(o.type){case"newline":i.push(n);break;case"space":break;case"comment":o.indent>e.indent&&(i.length=0);break;default:i.length=0}}i.length>=2&&(o=t.sep.splice(i[1]))}switch(this.type){case"anchor":case"tag":return void(n||t.value?(o.push(this.sourceToken),e.items.push({start:o}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken));case"explicit-key-ind":return t.sep||t.explicitKey?n||t.value?(o.push(this.sourceToken),e.items.push({start:o,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}):(t.start.push(this.sourceToken),t.explicitKey=!0),void(this.onKeyLine=!0);case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(vd(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]});else if(Ad(t.key)&&!vd(t.sep,"newline")){const e=Ed(t.start),i=t.key,n=t.sep;n.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:e,key:i,sep:n}]})}else o.length>0?t.sep=t.sep.concat(o,this.sourceToken):t.sep.push(this.sourceToken);else if(vd(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const e=Ed(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:e,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||n?e.items.push({start:o,key:null,sep:[this.sourceToken]}):vd(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return void(this.onKeyLine=!0);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);return void(n||t.value?(e.items.push({start:o,key:i,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(i):(Object.assign(t,{key:i,sep:[]}),this.onKeyLine=!0))}default:{const n=this.startBlockValue(e);if(n){if("block-seq"===n.type){if(!t.explicitKey&&t.sep&&!vd(t.sep,"newline"))return void(yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source}))}else i&&e.items.push({start:o});return void this.stack.push(n)}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const i="end"in t.value?t.value.end:void 0,n=Array.isArray(i)?i[i.length-1]:void 0;"comment"===n?.type?i?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const i=e.items[e.items.length-2],n=i?.value?.end;if(Array.isArray(n))return Sd(n,t.start),n.push(this.sourceToken),void e.items.pop()}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;return void t.start.push(this.sourceToken);case"seq-item-ind":if(this.indent!==e.indent)break;return void(t.value||vd(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken))}if(this.indent>e.indent){const t=this.startBlockValue(e);if(t)return void this.stack.push(t)}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if("flow-error-end"===this.type){let e;do{yield*this.pop(),e=this.peek(1)}while("flow-collection"===e?.type)}else if(0===e.end.length){switch(this.type){case"comma":case"explicit-key-ind":return void(!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken));case"map-value-ind":return void(!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]}));case"space":case"comment":case"newline":case"anchor":case"tag":return void(!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken));case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);return void(!t||t.value?e.items.push({start:[],key:i,sep:[]}):t.sep?this.stack.push(i):Object.assign(t,{key:i,sep:[]}))}case"flow-map-end":case"flow-seq-end":return void e.end.push(this.sourceToken)}const i=this.startBlockValue(e);i?this.stack.push(i):(yield*this.pop(),yield*this.step())}else{const t=this.peek(2);if("block-map"===t.type&&("map-value-ind"===this.type&&t.indent===e.indent||"newline"===this.type&&!t.items[t.items.length-1].sep))yield*this.pop(),yield*this.step();else if("map-value-ind"===this.type&&"flow-collection"!==t.type){const i=Ed(Cd(t));Od(e);const n=e.end.splice(1,e.end.length);n.push(this.sourceToken);const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:i,key:e,sep:n}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let e=this.source.indexOf("\n")+1;for(;0!==e;)this.onNewLine(this.offset+e),e=this.source.indexOf("\n",e)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=Ed(Cd(e));return t.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:t,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=Ed(Cd(e));return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:t,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return"comment"===this.type&&(!(this.indent<=t)&&e.every(e=>"newline"===e.type||"space"===e.type))}*documentEnd(e){"doc-mode"!==this.type&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],"newline"===this.type&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],"newline"===this.type&&(yield*this.pop())}}}function xd(e){const t=!1!==e.prettyErrors;return{lineCounter:e.lineCounter||t&&new yd||null,prettyErrors:t}}function Td(e,t={}){const{lineCounter:i,prettyErrors:n}=xd(t),o=new Id(i?.addNewLine),s=new Uc(t),r=Array.from(s.compose(o.parse(e)));if(n&&i)for(const t of r)t.errors.forEach(rc(e,i)),t.warnings.forEach(rc(e,i));return r.length>0?r:Object.assign([],{empty:!0},s.streamInfo())}function kd(e,t={}){const{lineCounter:i,prettyErrors:n}=xd(t),o=new Id(i?.addNewLine),s=new Uc(t);let r=null;for(const t of s.compose(o.parse(e),!0,e.length))if(r){if("silent"!==r.options.logLevel){r.errors.push(new oc(t.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}}else r=t;return n&&i&&(r.errors.forEach(rc(e,i)),r.warnings.forEach(rc(e,i))),r}function Nd(e,t,i){let n;"function"==typeof t?n=t:void 0===i&&t&&"object"==typeof t&&(i=t);const o=kd(e,i);if(!o)return null;if(o.warnings.forEach(e=>Pa(o.options.logLevel,e)),o.errors.length>0){if("silent"!==o.options.logLevel)throw o.errors[0];o.errors=[]}return o.toJS(Object.assign({reviver:n},i))}function $d(e,t,i){let n=null;if("function"==typeof t||Array.isArray(t)?n=t:void 0===i&&t&&(i=t),"string"==typeof i&&(i=i.length),"number"==typeof i){const e=Math.round(i);i=e<1?void 0:e>8?{indent:8}:{indent:e}}if(void 0===e){const{keepUndefined:e}=i??t??{};if(!e)return}return xr(e)&&!n?e.toString(i):new tc(e,n,i).toString(i)}var Ld=Object.freeze({__proto__:null,Alias:ia,CST:hd,Composer:Uc,Document:tc,Lexer:bd,LineCounter:yd,Pair:za,Parser:Id,Scalar:sa,Schema:Ql,YAMLError:nc,YAMLMap:Xa,YAMLParseError:oc,YAMLSeq:Qa,YAMLWarning:sc,isAlias:Ir,isCollection:Lr,isDocument:xr,isMap:Tr,isNode:Dr,isPair:kr,isScalar:Nr,isSeq:$r,parse:Nd,parseAllDocuments:Td,parseDocument:kd,stringify:$d,visit:Gr,visitAsync:jr});const Dd=e=>{try{const t=Ld.parse(e)||{},i=Pd(t);return{config:0===i.length?t:void 0,errors:i,rawYaml:e,valid:0===i.length}}catch(t){return{errors:[`YAML parse error: ${t instanceof Error?t.message:String(t)}`],rawYaml:e,valid:!1}}},Pd=e=>{if(!Rd(e))return["YAML must parse to an object/dictionary."];const t=[];for(const i of["bottom_items","bottom_grid_items","default_collapsed","hidden_items"])i in e&&!Md(e[i])&&t.push(`${i} must be a list of strings.`);if("custom_groups"in e)if(Rd(e.custom_groups))for(const[i,n]of Object.entries(e.custom_groups))Md(n)||t.push(`custom_groups.${i} must be a list of strings.`);else t.push("custom_groups must be an object mapping group names to lists of strings.");return"color_config"in e&&!Rd(e.color_config)&&t.push("color_config must be an object."),t},Rd=e=>"object"==typeof e&&null!==e&&!Array.isArray(e),Md=e=>Array.isArray(e)&&e.every(e=>"string"==typeof e);class Hd{constructor(e){this.hass=e}async diagnostics(){try{return await this.hass.callWS({type:"sidebar_organizer/config/diagnostics"})}catch(e){return{available:!1,error:this._errorMessage(e)}}}async info(){try{return await this.hass.callWS({type:"sidebar_organizer/config/info"})}catch(e){return{available:!1,error:this._errorMessage(e)}}}async read(){try{const e=await this.hass.callWS({type:"sidebar_organizer/config/read"}),t=e.yaml||"",i=Dd(t);return!1===e.valid&&e.errors?.length?{...i,errors:e.errors,last_modified:e.last_modified,rawYaml:t,valid:!1}:{...i,last_modified:e.last_modified,rawYaml:t}}catch(e){return{errors:[this._errorMessage(e)],valid:!1}}}async lastModified(){const e=await this.info();return"number"==typeof e.last_modified?e.last_modified:void 0}async validate(e){try{return await this.hass.callWS({type:"sidebar_organizer/config/validate",yaml:e})}catch(e){return{errors:[this._errorMessage(e)],valid:!1}}}async write(e){return await this.hass.callWS({type:"sidebar_organizer/config/write",yaml:e})}stringify(e){return Ld.stringify(e)}_errorMessage(e){return`sidebar_organizer backend unavailable or failed: ${e instanceof Error?e.message:String(e)}`}}class Gd{constructor(e,t){this.hass=e,this.userId=t}async info(){try{return await this.hass.callWS(this._message("sidebar_organizer/profile/info"))}catch(e){return{available:!1,error:this._errorMessage(e)}}}async read(){try{const e=await this.hass.callWS(this._message("sidebar_organizer/profile/read")),t=e.yaml||"",i=Dd(t);return{...e,...i,errors:!1===e.valid&&e.errors?.length?e.errors:i.errors,rawYaml:t,valid:!1!==e.valid&&i.valid}}catch(e){return{available:!1,errors:[this._errorMessage(e)],valid:!1}}}async validate(e){try{return await this.hass.callWS({type:"sidebar_organizer/config/validate",yaml:e})}catch(e){return{errors:[this._errorMessage(e)],valid:!1}}}async write(e,t){return await this.hass.callWS(this._message("sidebar_organizer/profile/write",{yaml:e,expected_revision:t??null}))}async delete(e){return await this.hass.callWS(this._message("sidebar_organizer/profile/delete",{expected_revision:e??null}))}async list(){return await this.hass.callWS({type:"sidebar_organizer/profile/list"})}async copy(e,t,i){return await this.hass.callWS({type:"sidebar_organizer/profile/copy",source:e,target_user_id:t,expected_revision:i??null})}async subscribe(e){return this.hass.connection?await this.hass.connection.subscribeMessage(e,this._message("sidebar_organizer/profile/subscribe")):()=>{}}stringify(e){return Ld.stringify(e)}_message(e,t={}){return{type:e,...this.userId?{user_id:this.userId}:{},...t}}_errorMessage(e){return`sidebar_organizer profile backend unavailable or failed: ${e instanceof Error?e.message:String(e)}`}}const Bd=async(e,t)=>{if(!e)return t;const i=await new Gd(e).info();if(i.available&&i.profile_exists)return"home_assistant_profile";return(await new Hd(e).info()).available?"home_assistant_config":t},jd=()=>Math.random().toString(16).slice(2),Ud=async()=>{const e=`${k}?hash=${jd()}`;try{const t=await fetch(e,{cache:"no-store"}),i=await t.text();return Ld.parse(i)}catch(e){return}},Fd=async e=>{const t=await Bd(e,$s());Ls(t);let i="home_assistant_profile"===t?await Vd(e):"home_assistant_config"===t?await zd(e):"static_yaml"===t?await Ud():Ds();if(i){i={...i};const n=await ur(i,e,!0),o="boolean"==typeof n?n:n.valid,s="object"==typeof n&&ar(n);if("home_assistant_config"===t||"home_assistant_profile"===t){if(s){const e=qd();return e?(console.warn(`${T}: duplicate panel assignments found. Using the last successful cache.`),e):(console.warn(`${T}: duplicate panel assignments found. Using the default configuration.`),M)}o||console.warn(`${T}: some panels differ for this user; the Home Assistant configuration is still being used.`);const e=lr(i,[]);return Ts(D.HA_CONFIG_CACHE,e),e}if(!o&&"browser_storage"===t)return i=await gr(i,e),Ts(D.UI_CONFIG,i),i;if(!o&&"static_yaml"===t)return i=M,i;i=lr(i),_r(i)}if(i)return i},Vd=async e=>{const t=await new Gd(e).read();return t.valid&&t.config?(Ts(D.HA_CONFIG_CACHE,t.config),t.revision&&Ts(D.HA_CONFIG_REVISION,t.revision),null!=t.last_modified&&Ts(D.HA_CONFIG_LAST_MODIFIED,t.last_modified),t.config):(console.warn(`${T}: failed to load Home Assistant user profile.`,t.errors),qd())},zd=async e=>{const t=new Hd(e),i=await t.read();return i.valid&&i.config?(Ts(D.HA_CONFIG_CACHE,i.config),null!=i.last_modified&&Ts(D.HA_CONFIG_LAST_MODIFIED,i.last_modified),i.config):(console.warn(`${T}: failed to load Home Assistant config-folder config.`,i.errors),qd())},qd=()=>{const e=xs(D.HA_CONFIG_CACHE);if(e)try{return JSON.parse(e)}catch{return}},Wd=/^[a-z0-9]+:[a-z0-9\-]+$/,Kd=e=>Wd.test(e),Yd=e=>e&&0!==e.length?`mdi:alpha-${e[0].toLowerCase()}-box`:"mdi:alpha-a-box",Jd=(e={},t=[])=>{const i=JSON.parse(xs(D.COLLAPSE)||"[]"),n=Object.keys(e),o=i.filter(e=>n.includes(e));o.length!==i.length&&Ts(D.COLLAPSE,o);return new Set([...o,...t])},Xd=()=>{const e=xs(D.HA_VERSION)||"",[t,i,n]=e.split(".").map(Number);let o=!1;return t>2025&&(o=!1),(t<2025||2025===t&&i<5)&&(o=!0),o&&console.warn(H.NOT_COMPATIBLE,"\n",H.VERSION_INFO),o},Zd=(e,t,i,n)=>{const[o,s,r]=e.split(".",3);return Number(o)>t||Number(o)===t&&(void 0===n?Number(s)>=i:Number(s)>i)||void 0!==n&&Number(o)===t&&Number(s)===i&&Number(r)>=n};function Qd(){(async()=>{new Promise(e=>{[D.UI_CONFIG,D.PANEL_ORDER,D.COLLAPSE,D.HIDDEN_PANELS].forEach(e=>{ks(e)}),e()})})().then(()=>{})}const eh=e=>{if(!e)return{};const t={};for(const[i,n]of Object.entries(e))t[i]=!0===n?{icon:Yd(i)}:{icon:n.icon};return t};var th=Object.freeze({__proto__:null,INVALID_ITEM_KEYS:sr,InvalidItemLabels:rr,_changeStorageConfig:_r,_computeWidth:yr,atLeastVersion:Zd,cleanConfig:So,cleanItems:wo,cleanItemsFromAllPanels:Co,cleanItemsFromConfig:Ao,clearSidebarOrganizerStorage:Qd,fetchConfig:Fd,fetchFileConfig:Ud,fetchHaConfig:zd,fetchHaProfileConfig:Vd,findDuplicateItems:dr,getAllConfigItems:cr,getCollapsedItems:Jd,getValidDetails:fr,hasBlockingConfigErrors:ar,isBeforeChange:Xd,isConfigValid:pr,isDefaultIncluded:hr,isItemsValid:ur,normalizePinnedGroups:eh,removeEmptyValues:Eo,tryCorrectConfig:gr,validateConfig:lr});function ih(e,t,i,n){var o,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,i,r):o(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const nh=(e,t)=>e instanceof Error&&(e.message.includes(t)&&e.message.includes("already been used")&&("NotSupportedError"===e.name||e.message.includes("CustomElementRegistry"))),oh=(e,t,i=customElements)=>{if(!i.get(e))try{i.define(e,t)}catch(t){if(!nh(t,e))throw t}},sh=e=>t=>(oh(e,t),t),rh={attribute:!0,type:String,converter:Oe,reflect:!1,hasChanged:Ie},ah=(e=rh,t,i)=>{const{kind:n,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),"setter"===n&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),"accessor"===n){const{name:n}=i;return{set(i){const o=t.get.call(this);t.set.call(this,i),this.requestUpdate(n,o,e)},init(t){return void 0!==t&&this.C(n,void 0,e,t),t}}}if("setter"===n){const{name:n}=i;return function(i){const o=this[n];t.call(this,i),this.requestUpdate(n,o,e)}}throw Error("Unsupported decorator location: "+n)};function lh(e){return(t,i)=>"object"==typeof i?ah(e,t,i):((e,t,i)=>{const n=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),n?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ch(e){return lh({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dh=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function hh(e,t){return(t,i,n)=>dh(t,i,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let uh;function fh(e){return(t,i)=>dh(t,i,{get(){return(this.renderRoot??(uh??=document.createDocumentFragment())).querySelectorAll(e)}})}class ph extends mt{constructor(){super(...arguments),this.group="",this.expanded=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}disconnectedCallback(){this._observer.disconnect(),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),this.expanded=this.haSidebar.alwaysExpand,this._observer=new MutationObserver(e=>{e.forEach(({attributeName:e})=>{e===n.EXPANDED&&(this.expanded=this.haSidebar.alwaysExpand)})}),this._observer.observe(this.haSidebar,{attributes:!0})}render(){return Xe`
      ${this.expanded?Xe`<ha-icon icon="mdi:chevron-down"></ha-icon><span>${this.group.trim()}</span>`:Xe`<ha-icon custom .icon=${this.customIcon}></ha-icon>`}
    `}}function gh(e){return gh="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gh(e)}ih([lh({attribute:!1})],ph.prototype,"haSidebar",void 0),ih([lh({attribute:"group"})],ph.prototype,"group",void 0),ih([lh({attribute:"custom-icon"})],ph.prototype,"customIcon",void 0),ih([ch()],ph.prototype,"expanded",void 0),ih([ch()],ph.prototype,"_observer",void 0),oh("so-group-divider",ph);var _h=/^\s+/,mh=/\s+$/;function bh(e,t){if(t=t||{},(e=e||"")instanceof bh)return e;if(!(this instanceof bh))return new bh(e,t);var i=yh(e);this._originalInput=e,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||i.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function yh(e){var t={r:0,g:0,b:0},i=1,n=null,o=null,s=null,r=!1,a=!1;return"string"==typeof e&&(e=tu(e)),"object"==gh(e)&&(eu(e.r)&&eu(e.g)&&eu(e.b)?(t=vh(e.r,e.g,e.b),r=!0,a="%"===String(e.r).substr(-1)?"prgb":"rgb"):eu(e.h)&&eu(e.s)&&eu(e.v)?(n=Jh(e.s),o=Jh(e.v),t=Eh(e.h,n,o),r=!0,a="hsv"):eu(e.h)&&eu(e.s)&&eu(e.l)&&(n=Jh(e.s),s=Jh(e.l),t=Ah(e.h,n,s),r=!0,a="hsl"),e.hasOwnProperty("a")&&(i=e.a)),i=Fh(i),{ok:r,format:e.format||a,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:i}}function vh(e,t,i){return{r:255*Vh(e,255),g:255*Vh(t,255),b:255*Vh(i,255)}}function wh(e,t,i){e=Vh(e,255),t=Vh(t,255),i=Vh(i,255);var n,o,s=Math.max(e,t,i),r=Math.min(e,t,i),a=(s+r)/2;if(s==r)n=o=0;else{var l=s-r;switch(o=a>.5?l/(2-s-r):l/(s+r),s){case e:n=(t-i)/l+(t<i?6:0);break;case t:n=(i-e)/l+2;break;case i:n=(e-t)/l+4}n/=6}return{h:n,s:o,l:a}}function Ah(e,t,i){var n,o,s;function r(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}if(e=Vh(e,360),t=Vh(t,100),i=Vh(i,100),0===t)n=o=s=i;else{var a=i<.5?i*(1+t):i+t-i*t,l=2*i-a;n=r(l,a,e+1/3),o=r(l,a,e),s=r(l,a,e-1/3)}return{r:255*n,g:255*o,b:255*s}}function Ch(e,t,i){e=Vh(e,255),t=Vh(t,255),i=Vh(i,255);var n,o,s=Math.max(e,t,i),r=Math.min(e,t,i),a=s,l=s-r;if(o=0===s?0:l/s,s==r)n=0;else{switch(s){case e:n=(t-i)/l+(t<i?6:0);break;case t:n=(i-e)/l+2;break;case i:n=(e-t)/l+4}n/=6}return{h:n,s:o,v:a}}function Eh(e,t,i){e=6*Vh(e,360),t=Vh(t,100),i=Vh(i,100);var n=Math.floor(e),o=e-n,s=i*(1-t),r=i*(1-o*t),a=i*(1-(1-o)*t),l=n%6;return{r:255*[i,r,s,s,a,i][l],g:255*[a,i,i,r,s,s][l],b:255*[s,s,a,i,i,r][l]}}function Sh(e,t,i,n){var o=[Yh(Math.round(e).toString(16)),Yh(Math.round(t).toString(16)),Yh(Math.round(i).toString(16))];return n&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Oh(e,t,i,n,o){var s=[Yh(Math.round(e).toString(16)),Yh(Math.round(t).toString(16)),Yh(Math.round(i).toString(16)),Yh(Xh(n))];return o&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)&&s[3].charAt(0)==s[3].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function Ih(e,t,i,n){return[Yh(Xh(n)),Yh(Math.round(e).toString(16)),Yh(Math.round(t).toString(16)),Yh(Math.round(i).toString(16))].join("")}function xh(e,t){t=0===t?0:t||10;var i=bh(e).toHsl();return i.s-=t/100,i.s=zh(i.s),bh(i)}function Th(e,t){t=0===t?0:t||10;var i=bh(e).toHsl();return i.s+=t/100,i.s=zh(i.s),bh(i)}function kh(e){return bh(e).desaturate(100)}function Nh(e,t){t=0===t?0:t||10;var i=bh(e).toHsl();return i.l+=t/100,i.l=zh(i.l),bh(i)}function $h(e,t){t=0===t?0:t||10;var i=bh(e).toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-t/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-t/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-t/100*255))),bh(i)}function Lh(e,t){t=0===t?0:t||10;var i=bh(e).toHsl();return i.l-=t/100,i.l=zh(i.l),bh(i)}function Dh(e,t){var i=bh(e).toHsl(),n=(i.h+t)%360;return i.h=n<0?360+n:n,bh(i)}function Ph(e){var t=bh(e).toHsl();return t.h=(t.h+180)%360,bh(t)}function Rh(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var i=bh(e).toHsl(),n=[bh(e)],o=360/t,s=1;s<t;s++)n.push(bh({h:(i.h+s*o)%360,s:i.s,l:i.l}));return n}function Mh(e){var t=bh(e).toHsl(),i=t.h;return[bh(e),bh({h:(i+72)%360,s:t.s,l:t.l}),bh({h:(i+216)%360,s:t.s,l:t.l})]}function Hh(e,t,i){t=t||6,i=i||30;var n=bh(e).toHsl(),o=360/i,s=[bh(e)];for(n.h=(n.h-(o*t>>1)+720)%360;--t;)n.h=(n.h+o)%360,s.push(bh(n));return s}function Gh(e,t){t=t||6;for(var i=bh(e).toHsv(),n=i.h,o=i.s,s=i.v,r=[],a=1/t;t--;)r.push(bh({h:n,s:o,v:s})),s=(s+a)%1;return r}bh.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,i,n=this.toRgb();return e=n.r/255,t=n.g/255,i=n.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))},setAlpha:function(e){return this._a=Fh(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Ch(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Ch(this._r,this._g,this._b),t=Math.round(360*e.h),i=Math.round(100*e.s),n=Math.round(100*e.v);return 1==this._a?"hsv("+t+", "+i+"%, "+n+"%)":"hsva("+t+", "+i+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=wh(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=wh(this._r,this._g,this._b),t=Math.round(360*e.h),i=Math.round(100*e.s),n=Math.round(100*e.l);return 1==this._a?"hsl("+t+", "+i+"%, "+n+"%)":"hsla("+t+", "+i+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return Sh(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return Oh(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Vh(this._r,255))+"%",g:Math.round(100*Vh(this._g,255))+"%",b:Math.round(100*Vh(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*Vh(this._r,255))+"%, "+Math.round(100*Vh(this._g,255))+"%, "+Math.round(100*Vh(this._b,255))+"%)":"rgba("+Math.round(100*Vh(this._r,255))+"%, "+Math.round(100*Vh(this._g,255))+"%, "+Math.round(100*Vh(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(jh[Sh(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+Ih(this._r,this._g,this._b,this._a),i=t,n=this._gradientType?"GradientType = 1, ":"";if(e){var o=bh(e);i="#"+Ih(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+i+")"},toString:function(e){var t=!!e;e=e||this._format;var i=!1,n=this._a<1&&this._a>=0;return t||!n||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(i=this.toRgbString()),"prgb"===e&&(i=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(i=this.toHexString()),"hex3"===e&&(i=this.toHexString(!0)),"hex4"===e&&(i=this.toHex8String(!0)),"hex8"===e&&(i=this.toHex8String()),"name"===e&&(i=this.toName()),"hsl"===e&&(i=this.toHslString()),"hsv"===e&&(i=this.toHsvString()),i||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return bh(this.toString())},_applyModification:function(e,t){var i=e.apply(null,[this].concat([].slice.call(t)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(Nh,arguments)},brighten:function(){return this._applyModification($h,arguments)},darken:function(){return this._applyModification(Lh,arguments)},desaturate:function(){return this._applyModification(xh,arguments)},saturate:function(){return this._applyModification(Th,arguments)},greyscale:function(){return this._applyModification(kh,arguments)},spin:function(){return this._applyModification(Dh,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(Hh,arguments)},complement:function(){return this._applyCombination(Ph,arguments)},monochromatic:function(){return this._applyCombination(Gh,arguments)},splitcomplement:function(){return this._applyCombination(Mh,arguments)},triad:function(){return this._applyCombination(Rh,[3])},tetrad:function(){return this._applyCombination(Rh,[4])}},bh.fromRatio=function(e,t){if("object"==gh(e)){var i={};for(var n in e)e.hasOwnProperty(n)&&(i[n]="a"===n?e[n]:Jh(e[n]));e=i}return bh(e,t)},bh.equals=function(e,t){return!(!e||!t)&&bh(e).toRgbString()==bh(t).toRgbString()},bh.random=function(){return bh.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},bh.mix=function(e,t,i){i=0===i?0:i||50;var n=bh(e).toRgb(),o=bh(t).toRgb(),s=i/100;return bh({r:(o.r-n.r)*s+n.r,g:(o.g-n.g)*s+n.g,b:(o.b-n.b)*s+n.b,a:(o.a-n.a)*s+n.a})},bh.readability=function(e,t){var i=bh(e),n=bh(t);return(Math.max(i.getLuminance(),n.getLuminance())+.05)/(Math.min(i.getLuminance(),n.getLuminance())+.05)},bh.isReadable=function(e,t,i){var n,o,s=bh.readability(e,t);switch(o=!1,(n=iu(i)).level+n.size){case"AAsmall":case"AAAlarge":o=s>=4.5;break;case"AAlarge":o=s>=3;break;case"AAAsmall":o=s>=7}return o},bh.mostReadable=function(e,t,i){var n,o,s,r,a=null,l=0;o=(i=i||{}).includeFallbackColors,s=i.level,r=i.size;for(var c=0;c<t.length;c++)(n=bh.readability(e,t[c]))>l&&(l=n,a=bh(t[c]));return bh.isReadable(e,a,{level:s,size:r})||!o?a:(i.includeFallbackColors=!1,bh.mostReadable(e,["#fff","#000"],i))};var Bh=bh.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},jh=bh.hexNames=Uh(Bh);function Uh(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function Fh(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Vh(e,t){Wh(e)&&(e="100%");var i=Kh(e);return e=Math.min(t,Math.max(0,parseFloat(e))),i&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function zh(e){return Math.min(1,Math.max(0,e))}function qh(e){return parseInt(e,16)}function Wh(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)}function Kh(e){return"string"==typeof e&&-1!=e.indexOf("%")}function Yh(e){return 1==e.length?"0"+e:""+e}function Jh(e){return e<=1&&(e=100*e+"%"),e}function Xh(e){return Math.round(255*parseFloat(e)).toString(16)}function Zh(e){return qh(e)/255}var Qh=function(){var e="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",t="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?",i="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?";return{CSS_UNIT:new RegExp(e),rgb:new RegExp("rgb"+t),rgba:new RegExp("rgba"+i),hsl:new RegExp("hsl"+t),hsla:new RegExp("hsla"+i),hsv:new RegExp("hsv"+t),hsva:new RegExp("hsva"+i),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function eu(e){return!!Qh.CSS_UNIT.exec(e)}function tu(e){e=e.replace(_h,"").replace(mh,"").toLowerCase();var t,i=!1;if(Bh[e])e=Bh[e],i=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(t=Qh.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=Qh.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Qh.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=Qh.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Qh.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=Qh.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Qh.hex8.exec(e))?{r:qh(t[1]),g:qh(t[2]),b:qh(t[3]),a:Zh(t[4]),format:i?"name":"hex8"}:(t=Qh.hex6.exec(e))?{r:qh(t[1]),g:qh(t[2]),b:qh(t[3]),format:i?"name":"hex"}:(t=Qh.hex4.exec(e))?{r:qh(t[1]+""+t[1]),g:qh(t[2]+""+t[2]),b:qh(t[3]+""+t[3]),a:Zh(t[4]+""+t[4]),format:i?"name":"hex8"}:!!(t=Qh.hex3.exec(e))&&{r:qh(t[1]+""+t[1]),g:qh(t[2]+""+t[2]),b:qh(t[3]+""+t[3]),format:i?"name":"hex"}}function iu(e){var t,i;return"AA"!==(t=((e=e||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==t&&(t="AA"),"small"!==(i=(e.size||"small").toLowerCase())&&"large"!==i&&(i="small"),{level:t,size:i}}const nu=(e,t=1)=>{const i=bh(e);if(!i.isValid())return;return i.setAlpha(i.getAlpha()/t).toRgbString()},ou=e=>{if(!e)return;return e.replace(/\s*!important/g,"").replace(/;/g,"").replace(/:/g,"")},su=e=>{if(!e||0===Object.keys(e).length)return null;let t=":host {";return Object.entries(e).forEach(([e,i])=>{null!=i&&(t+=`${e}: ${ou(i)} !important;`)}),t+="}",t},ru=e=>{if(!e||0===Object.keys(e).length)return null;const t={};return Object.entries(e).forEach(([e,i])=>{null!=i&&(t[e]=`${ou(i)} !important`)}),t},au=e=>{const t=window.getComputedStyle(e??document.documentElement),i=t.getPropertyValue("--divider-color"),n=t.getPropertyValue("--scrollbar-thumb-color"),o=nu(i,3)||i,s=i,r=nu(i,3)||n,a=t.getPropertyValue("--sidebar-text-color"),l=t.getPropertyValue("--primary-text-color");return{divider_color:i,background_color:o,border_top_color:s,scrollbar_thumb_color:r,custom_sidebar_background_color:t.getPropertyValue("--sidebar-background-color"),divider_text_color:a||l,sidebar_icon_color:t.getPropertyValue("--sidebar-icon-color")}},lu=(e,t,i,n)=>{n=n||{},i=null==i?{}:i;const o=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,e.dispatchEvent(o),o};var cu;!function(e){e.CONFIRM="confirm",e.PROMPT="prompt",e.ALERT="alert"}(cu||(cu={}));const du=async(e,t,i,n)=>{if("function"==typeof window.loadCardHelpers){const o=await window.loadCardHelpers();return await o.showConfirmationDialog(e,{title:O,text:t,confirmText:i,dismissText:n||"Cancel"})}return new Promise(e=>{e(window.confirm(`${O}\n\n${t}`))})},hu=async(e,t,i,n,o)=>{if("function"==typeof window.loadCardHelpers){const s=await window.loadCardHelpers();return await s.showPromptDialog(e,{title:O,text:t,placeholder:i,confirmText:n,inputType:"string",defaultValue:"",cancelText:o||"Cancel",confirmation:!0})}return new Promise(e=>{e(window.prompt(`${O}\n\n${t}`,i))})},uu=async(e,t,i)=>{if("function"==typeof window.loadCardHelpers){const n=await window.loadCardHelpers();return void await n.showAlertDialog(e,{title:O,text:t,confirmText:i})}return new Promise(e=>{window.alert(`${O}\n\n${t}`),e()})},fu=(e,t)=>({...t,title:t.title??O,confirmation:"confirm"===e,prompt:"prompt"===e}),pu=async(e,t,i)=>{if("function"==typeof window.loadCardHelpers){const n=await window.loadCardHelpers();switch(t){case"confirm":return await n.showConfirmationDialog(e,fu(t,i));case"prompt":return await n.showPromptDialog(e,fu(t,i));case"alert":return await n.showAlertDialog(e,fu(t,i))}}const n=fu(t,i);switch(t){case"confirm":return window.confirm(`${n.title}\n\n${n.text}`);case"prompt":const e=i;return window.prompt(`${n.title}\n\n${n.text}`,e.placeholder||e.defaultValue||"");case"alert":return void window.alert(`${n.title}\n\n${n.text}`)}},gu=(e,t,i)=>e.subscribeMessage(e=>t(e),{type:"render_template",...i}),_u=/{%|{{/,mu=e=>_u.test(e),bu=e=>{if(!e)return!1;if("string"==typeof e)return mu(e);if("object"==typeof e){return(Array.isArray(e)?e:Object.values(e)).some(e=>e&&bu(e))}return!1};var yu;!function(e){e.UI_COMMON="ui.common.",e.UI_LOVELACE="ui.panel.lovelace."}(yu||(yu={}));const vu={BTN_LABEL:{CANCEL:"Cancel",DELETE:"Delete",SAVE:"Save",DOWNLOAD:"Download",SHOW_CODE_EDITOR:"Show code editor",SHOW_VISUAL_EDITOR:"Show visual editor",UPLOAD:"Upload Config File",COPY_TO_CLIPBOARD:"Copy to Clipboard",CHECK_VALIDITY:"Check validity",AUTO_CORRECT:"Auto-correct",SAVE_MIGRATE:"Save & Migrate to storage"}},wu=(e,t,i,n)=>{const o=i??{...e._sidebarConfig},s=e.hass||e._hass;return Xe` <ha-form
    .hass="${s}"
    .data="${o}"
    .schema="${t}"
    .configKey="${n?.configKey}"
    .computeLabel="${Au}"
    .computeHelper="${Cu}"
    @value-changed="${t=>e._valueChanged(t)}"
  ></ha-form>`};function Au(e){if("entity"===e.name&&!e.context?.group_entity)return;return vo((e.label||e.name||e.title||"").replace(/_/g," "))}function Cu(e){return e.helper||void 0}function Eu(e,t){if("object"!=typeof e||"object"!=typeof t)return e!==t?[e,t]:void 0;const i=Object.keys(e),n=Object.keys(t),o=new Set([...i,...n]),s={};for(const i of o){const n=e[i],o=t[i];if(null!=n||null==o)if(null!=o||null==n)if("object"==typeof n&&"object"==typeof o){const e=Eu(n,o);e&&(s[i]=e)}else n!==o&&(s[i]=[n,o]);else s[i]=[n,o];else s[i]=[n,o]}return Object.keys(s).length>0?s:void 0}function Su(e,t){return Boolean(Eu(e,t))}function Ou(e,t=!1){const i=[];Object.entries(e).forEach(([e,n])=>{if(!Array.isArray(n)&&"object"==typeof n&&null!==n)return void Object.keys(n).forEach(o=>{const s=n[o];Array.isArray(s)?i.push([`${e}.${o}`,{oldValue:s[0],newValue:s[1]}]):Ou({[o]:s},t)});const[o,s]=n;i.push([e,{oldValue:o,newValue:s}])}),t?console.table(i.map(([e,{oldValue:t,newValue:i}])=>({Property:e,"Old Value":t,"New Value":i}))):i.forEach(([e,{oldValue:t,newValue:i}])=>{})}var Iu=Object.freeze({__proto__:null,getObjectDifferences:Eu,hasObjectDifferences:Su,logChangedValues:Ou});const xu=["edit-items","preview-item","delete","divider","uncategorized-as-group"],Tu=[{title:"Edit items",action:"edit-items",icon:"mdi:pencil"},{title:"Show in preview",action:"preview-item",icon:"mdi:information-outline"},{title:"Delete",action:"delete",icon:"mdi:trash-can-outline"},{title:"Rename",action:"rename",icon:"mdi:rename-box"},{title:"Collapse by default",action:"collapsed-group",icon:"mdi:eye-minus-outline"},{title:"Add to pinned groups",action:"pinned-group",icon:"mdi:pin-outline"},{title:"Include in group orders",action:"uncategorized-as-group"},{divider:!0,title:"",action:"divider"}],ku=e=>{if(!e)return Tu;const t=Tu.map(t=>{const i=e.find(e=>e.action===t.action);return i?{...t,...i}:t});return e.forEach(e=>{t.find(t=>t.action===e.action)||t.push(e)}),t},Nu=e=>ku().filter(t=>e.includes(t.action)).sort((t,i)=>e.indexOf(t.action)-e.indexOf(i.action)),$u=({item:e,onClick:t,option:i})=>{if(e.divider)return Xe`<wa-divider></wa-divider>`;if("uncategorized-as-group"===e.action)return Xe`
      <ha-dropdown-item
        .value=${e.action}
        .data=${i}
        @click=${e.clickCallback?e.clickCallback:t}
        ?disabled=${i?.disabled}
        type="checkbox"
        .checked=${i?.checked}
      >
        <ha-icon slot="icon" .icon=${e.icon}></ha-icon>
        ${e.title}
      </ha-dropdown-item>
    `;const n=e.warning||/(delete|remove|clear)/i.test(e.action);return Xe`
    <ha-dropdown-item
      .value=${e.action}
      .data=${i}
      @click=${e.clickCallback?e.clickCallback:t}
      ?disabled=${i?.disabled}
      .variant=${n?"danger":void 0}
    >
      <ha-icon slot="icon" .icon=${e.icon}></ha-icon>
      ${e.title}
    </ha-dropdown-item>
  `};var Lu=Object.freeze({__proto__:null,ActionTypes:xu,DefaultActionMenu:Tu,_renderActionItem:$u,computeActionList:Nu,createActionsMenu:ku});function Du(e,t){const i=new Array(t.length),n=e.length;for(let o=0;o<t.length;o++){let s=t[o];s=Number.isInteger(s)?s:Math.trunc(s)||0,s<0&&(s+=n),i[o]=e[s]}return i}function Pu(...e){if(0===e.length)return[[]];let t=1;for(let i=0;i<e.length;i++)t*=e[i].length;if(0===t)return[];const i=e.length,n=Array(t);for(let o=0;o<t;o++){const t=Array(i);let s=o;for(let n=i-1;n>=0;n--){const i=e[n],o=i.length;t[n]=i[s%o],s=Math.floor(s/o)}n[o]=t}return n}function Ru(e,t){if(!Number.isInteger(t)||t<0)throw new Error("r must be a non-negative integer.");const i=e.length;if(t>i)return[];if(0===t)return[[]];const n=Array(t);for(let e=0;e<t;e++)n[e]=e;const o=[];for(;;){const s=Array(t);for(let i=0;i<t;i++)s[i]=e[n[i]];o.push(s);let r=t-1;for(;r>=0&&n[r]===r+i-t;)r--;if(r<0)return o;n[r]++;for(let e=r+1;e<t;e++)n[e]=n[e-1]+1}}function Mu(e,t){const i={};for(let n=0;n<e.length;n++){const o=t(e[n],n,e);i[o]=(i[o]??0)+1}return i}var Hu=class{capacity;available;deferredTasks=[];constructor(e){this.capacity=e,this.available=e}async acquire(){if(!(this.available>0))return new Promise(e=>{this.deferredTasks.push(e)});this.available--}release(){const e=this.deferredTasks.shift();null==e?this.available<this.capacity&&this.available++:e()}};function Gu(e,t){const i=new Hu(t);return async function(...t){try{return await i.acquire(),await e.apply(this,t)}finally{i.release()}}}async function Bu(e,t,i){null!=i?.concurrency&&(t=Gu(t,i.concurrency));const n=await Promise.all(e.map(t));return e.filter((e,t)=>n[t])}function ju(e,t,i=1){return Ii(e.map((i,n)=>t(i,n,e)),i)}async function Uu(e,t,i){return null!=i?.concurrency&&(t=Gu(t,i.concurrency)),Ii(await Promise.all(e.map(t)))}function Fu(e){return Ii(e,1/0)}function Vu(e,t){return Fu(e.map((i,n)=>t(i,n,e)))}async function zu(e,t,i){null!=i?.concurrency&&(t=Gu(t,i.concurrency)),await Promise.all(e.map(t))}function qu(e,t){for(let i=e.length-1;i>=0;i--){t(e[i],i,e)}}function Wu(e,t){return 0===ln(t,e).length}function Ku(e,t,i){return 0===hn(t,e,i).length}function Yu(e,t){const i={};for(let n=0;n<e.length;n++){const o=e[n];i[t(o,n,e)]=o}return i}function Ju(e,t,i){return null!=i?.concurrency&&(t=Gu(t,i.concurrency)),Promise.all(e.map(t))}function Xu(e,t,i){return e<t?"asc"===i?-1:1:e>t?"asc"===i?1:-1:0}function Zu(e,t,i){return e.slice().sort((e,n)=>{const o=i.length;for(let s=0;s<t.length;s++){const r=o>s?i[s]:i[o-1],a=t[s],l="function"==typeof a,c=Xu(l?a(e):e[a],l?a(n):n[a],r);if(0!==c)return c}return 0})}function Qu(e,t){const i=[],n=[];for(let o=0;o<e.length;o++){const s=e[o];t(s,o,e)?i.push(s):n.push(s)}return[i,n]}function ef(e,t){const i=Du(e,t),n=new Set(t.slice().sort((e,t)=>t-e));for(const t of n)e.splice(t,1);return i}async function tf(e,t,i){let n=0;null==i&&(i=e[0],n=1);let o=i;for(let i=n;i<e.length;i++)o=await t(o,e[i],i,e);return o}function nf(e,t){return Zu(e,t,["asc"])}function of(e,t){for(let i=e.length-1;i>=0;i--)if(!t(e[i],i,e))return e.slice(i+1);return e.slice()}function sf(e,t){const i=[];for(let n=0;n<e.length;n++){const o=e[n];if(!t(o,n,e))break;i.push(o)}return i}function rf(e,t,i=0,n=e.length){const o=e.length,s=Math.max(i>=0?i:o+i,0),r=Math.min(n>=0?n:o+n,o),a=e.slice();for(let e=s;e<r;e++)a[e]=t;return a}function af(e,t){return Sn(e.concat(t))}function lf(e,t,i){return Vn(e.concat(t),i)}function cf(e,t,i){return zn(e.concat(t),i)}function df(e,t){const i=Math.max(...e.map(e=>e.length)),n=new Array(i);for(let o=0;o<i;o++){const i=new Array(e.length);for(let t=0;t<e.length;t++)i[t]=e[t][o];n[o]=t(...i)}return n}function hf(e,t){return ln(af(e,t),En(e,t))}function uf(e,t,i){return dn(lf(e,t,i),On(e,t,i),i)}function ff(e,t,i){return hn(cf(e,t,i),In(e,t,i),i)}function pf(e,t){const i={};for(let n=0;n<e.length;n++)i[e[n]]=t[n];return i}function gf(e,...t){const i=[e,...t.slice(0,-1)],n=t[t.length-1],o=Math.max(...i.map(e=>e.length)),s=Array(o);for(let e=0;e<o;e++)s[e]=n(...i.map(t=>t[e]),e);return s}var _f=Object.freeze({__proto__:null,at:Du,cartesianProduct:Pu,chunk:Si,combinations:Ru,compact:Oi,countBy:Mu,difference:ln,differenceBy:dn,differenceWith:hn,drop:un,dropRight:fn,dropRightWhile:pn,dropWhile:gn,fill:bn,filterAsync:Bu,flatMap:ju,flatMapAsync:Uu,flatMapDeep:Vu,flatten:Ii,flattenDeep:Fu,forEachAsync:zu,forEachRight:qu,groupBy:An,head:vn,initial:Cn,intersection:En,intersectionBy:On,intersectionWith:In,isSubset:Wu,isSubsetWith:Ku,keyBy:Yu,last:cn,limitAsync:Gu,mapAsync:Ju,maxBy:eo,minBy:to,orderBy:Zu,partition:Qu,pull:Nn,pullAt:ef,reduceAsync:tf,remove:Dn,sample:Pn,sampleSize:Hn,shuffle:Bn,sortBy:nf,tail:jn,take:Un,takeRight:Fn,takeRightWhile:of,takeWhile:sf,toFilled:rf,union:af,unionBy:lf,unionWith:cf,uniq:Sn,uniqBy:Vn,uniqWith:zn,unzip:qn,unzipWith:df,windowed:Kn,without:Wn,xor:hf,xorBy:uf,xorWith:ff,zip:Yn,zipObject:pf,zipWith:gf});const mf={PANEL:Es,COMPUTE_PANELS:Ys,DASHBOARD:or,OBJECT:Iu,CONFIG:th,DOM:{mapItemsForDebug:Lt,actionHelper:Lu},ARRAY:_f},bf=[{headline:"Settings dialog",supportingText:"Open the settings dialog to customize your sidebar.",action:"open_dialog",btnText:"Open",canDisable:!1},{headline:"Clear frontend cache",supportingText:"Clear the frontend cache to fix potential issues.",action:"clear_cache",btnText:"Clear",canDisable:!1},{headline:"Download configuration",supportingText:"Download the current configuration as a yaml file.",action:"download_config",btnText:"Download",canDisable:!0},{headline:"Delete saved configuration",supportingText:"Delete the saved configuration in the browser's local storage.",action:"delete_config",btnText:"Delete",variant:"danger",canDisable:!0}];let yf=class extends mt{constructor(){super(...arguments),this._handleAction=async e=>{switch(e){case"open_dialog":this.organizer._dialogManager._showConfigDialogEditor();break;case"delete_config":await this.organizer._dialogManager._confirm("Are you sure you want to delete the saved configuration? This action cannot be undone.","Delete","Cancel")&&(Qd(),this.organizer._hasSidebarConfig||this.organizer._reloadWindow(3e3));break;case"clear_cache":xt();break;case"download_config":const e=Ld.stringify(this.organizer._config),t=new Blob([e],{type:"application/x-yaml"}),i=URL.createObjectURL(t),n=""+(T+"_"+(new Date).toISOString().replace(/:/g,"-").split(".",1).join());It(i,`${n}.yaml`),setTimeout(()=>{URL.revokeObjectURL(i)},0)}}}connectedCallback(){super.connectedCallback(),this.organizer.hass&&this._getCoreData()}disconnectedCallback(){super.disconnectedCallback(),this._unsubCoreData&&(this._unsubCoreData.then(e=>e()),this._unsubCoreData=void 0)}firstUpdated(e){super.firstUpdated(e),this._unsubCoreData||this._getCoreData()}_getCoreData(){if(!this.organizer._pluginConfigured)return;const e=is(this.organizer.hass);this._unsubCoreData=Ro(this.organizer.hass.connection,"core",async({value:t})=>{this._coreUserData=t;const i=t?.default_panel;Boolean(i&&e!==i)?this.organizer._store._needReloadToast():(await kt(),this.organizer._checkDiffs())})}render(){return Xe`
      <ha-card>
        <div class="card-header">
          ${O}
          <ha-icon icon="mdi:github" @click=${()=>window.open(`${x}`,"_blank")}></ha-icon>
        </div>
        <div class="card-content">
          The following settings are used to control the behavior of the Sidebar Organizer plugin.
        </div>
        <ha-md-list>
          ${bf.map(e=>{const t=e.canDisable&&!this.organizer._hasSidebarConfig;return Xe`
              ${"delete_config"===e.action?Xe`<wa-divider style="--spacing: 0;"></wa-divider>`:""}
              <ha-md-list-item>
                <span slot="headline">${e.headline}</span>
                ${e.supportingText?Xe`<span slot="supporting-text">${e.supportingText}</span>`:""}
                <ha-button
                  slot="end"
                  appearance="plain"
                  size="s"
                  variant=${e.variant||"brand"}
                  .disabled=${t}
                  @click=${()=>this._handleAction(e.action)}
                >
                  ${e.btnText}
                </ha-button>
              </ha-md-list-item>
            `})}
        </ha-md-list>
      </ha-card>
    `}};yf.styles=ue`
    ha-card .card-header {
      display: flex;
      justify-content: space-between;
    }
    ha-card .card-header ha-icon {
      color: var(--secondary-text-color);
      cursor: pointer;
      &:hover {
        color: var(--primary-color);
      }
    }
    ha-md-list {
      background: 0 0;
      padding-top: 0;
      padding-bottom: 0;
    }
    /* .card-content {
    } */
  `,ih([lh({attribute:!1})],yf.prototype,"organizer",void 0),yf=ih([sh("so-profile-section")],yf);const vf=()=>Promise.resolve().then(function(){return Hm}),wf=()=>Promise.resolve().then(function(){return Bm}),Af=(e,i,n=!1)=>{lu(e,"show-dialog",{dialogTag:n?t.SIDEBAR_CONFIG_DIALOG_WA:t.SIDEBAR_CONFIG_DIALOG_WRAPPER,dialogImport:n?wf:vf,dialogParams:i})};class Cf{constructor(e,i){this._checkStorageOrder=async()=>{if(!Ps())return;if(this._organizer._baseOrder.length>0)return void Ts(D.PANEL_ORDER,[...this._organizer._baseOrder]);const{order:e,hidden:t}=await zs(this.hass);Ts(D.PANEL_ORDER,[...e]),Ts(D.HIDDEN_PANELS,[...t])},this._showConfigDialogEditor=async()=>{const e=Zd(this.hass.config.version,2026,3);this._organizer.HaSidebar.editMode=!1,await this._checkStorageOrder(),Af(this.haElement,{config:this._organizer._config},e)},this._createProfileSectionComponent=async()=>{const e=document.createElement(t.SO_PROFILE_SECTION);return e.organizer=this._organizer,e},this.haElement=e,this._organizer=i,this._haDrawer=this._organizer._haDrawer,this.hass=e.hass}async _showDialogBox(e,t){return await pu(this._haDrawer,e,t)}async _alert(e,t){return await this._showDialogBox("alert",{text:e,confirmText:t})}async _confirm(e,t="OK",i){return await this._showDialogBox("confirm",{text:e,confirmText:t,dismissText:i})}async _prompt(e,t,i="OK",n="Cancel"){return await this._showDialogBox("prompt",{text:e,placeholder:t,confirmText:i,dismissText:n,inputType:"string",defaultValue:""})}async _addDialogUserDataClear(){if(await this._confirm(H.CLEAN_USER_DATA,"Clear Data","Cancel"))try{const e=await zs(this.hass);await Po(this.hass.connection).then(()=>{Ts(D.PANEL_ORDER,[...e.order]),Ts(D.HIDDEN_PANELS,[...e.hidden])}),await this._alert("Sidebar user data cleared successfully","Show Organizer Dialog"),this._showConfigDialogEditor()}catch(e){await this._alert("Error clearing sidebar user data. See console for details.","OK")}}async _addLegacyEditWarning(){if(await this._confirm(H.LEGACY_EDIT_WARNING,"Edit with Organizer","System Dialog"))return this._showConfigDialogEditor()}async _handleEditModeAttempt(){const e=await this._waitForSidebarDialog();if(!e)return;e._open=!1;if(Boolean(!this._organizer._userHasSidebarSettings&&this._organizer._hasSidebarConfig)){if(await this._confirm(H.HAS_SIDEBAR_CONFIG_WARNING,"Edit with Organizer","Continue"))return e.remove(),this._showConfigDialogEditor()}e._open=!0,this._injectOrganizerButton(e)}_injectOrganizerButton(t){setTimeout(()=>{const i=this._createButtonToOpenOrganizer(t),n=t.shadowRoot?.querySelector(e.ACTION_SLOT)??t.shadowRoot?.querySelector(e.HA_DIALOG_FOOTER).shadowRoot?.querySelector(e.FOOTER);n&&!n.querySelector("ha-button")&&n.prepend(i)},100)}_createButtonToOpenOrganizer(e){const t=document.createElement("ha-button");return t.slot="actions",t.innerText="Switch to Sidebar Organizer",t.addEventListener("click",async()=>{e.closeDialog(),e.remove(),this._organizer._userHasSidebarSettings?this._addDialogUserDataClear():this._showConfigDialogEditor()}),t}async _waitForSidebarDialog(){let e=null;for(let t=0;t<10&&!e;t++)e=await St(this.haElement),e||await new Promise(e=>setTimeout(e,100));return e}async _injectSidebarOrganizerElement(i){const n=i.querySelector(t.PROFILE_GENERAL)?.shadowRoot?.querySelector(e.CONTENT);if(n&&!n.querySelector(t.SO_PROFILE_SECTION)){const e=await this._createProfileSectionComponent();n.appendChild(e),n.querySelector(t.SO_PROFILE_SECTION)}}sidebarDispatchEvent(e,t){lu(this.haElement,e,t)}}const Ef=(e,t)=>{if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;let i,n;if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(i=n;0!==i--;)if(e[i]!==t[i])return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i of e.entries())if(!t.has(i[0]))return!1;for(i of e.entries())if(i[1]!==t.get(i[0]))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i of e.entries())if(!t.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!==t.length)return!1;for(i=n;0!==i--;)if(e[i]!==t[i])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const o=Object.keys(e);if(n=o.length,n!==Object.keys(t).length)return!1;for(i=n;0!==i--;)if(!Object.prototype.hasOwnProperty.call(t,o[i]))return!1;for(i=n;0!==i--;){const n=o[i];if(e[n]!==t[n])return!1}return!0}return e!=e&&t!=t},Sf=(e,t)=>lu(e,"hass-notification",t);class Of{constructor(e,i){this._dashboardPanels={},this._panelHasChanged=!1,this._utils=mf,this._getPanelItems=async(e=!1)=>{const i=await this._organizer._panelResolver.selector.query(t.CONFIG_LOVELACE_DASHBOARDS).element,n=e?this._utils.PANEL.getDefaultPanelUrlPath(this.hass):this.hass.systemData?.default_panel||"home";return i._getItems(i._dashboards,n,this.hass.panels)},this._shouldUpdateConfig=async()=>{let e=!1;if(!this._panelHasChanged||!this._dashboardPanels)return e;const{notShowInSidebar:t,removed:i,added:n}=this._dashboardPanels,o=this._utils.CONFIG,s=new Set([...i||[],...t?.map(e=>e.url_path)||[]]);if(0!==s.size){const t={...this._organizer._config};if(o.getAllConfigItems(t).some(e=>s.has(e))){console.debug("%cSTORE:","color: #4dabf7;","Panel changes affect current config. Updating config to remove deleted panels...");const i=o.cleanItemsFromAllPanels(t,s),n={...t,...i};Ts(D.UI_CONFIG,n),e=!0}}if(n&&n.length>0){const t=JSON.parse(xs(D.PANEL_ORDER)||"[]"),i=n.map(e=>e.url_path).filter(e=>!t.includes(e));if(i.length>0){const n=[...t,...i];Ts(D.PANEL_ORDER,n),console.debug("%cSTORE:","color: #4dabf7;","Added new panels to stored panel order:",i),e=!0}}return e},this._needReloadToast=()=>{const e={id:"sidebar-organizer-panels-changed-reload",message:`${S.toUpperCase()}: Changes detected in sidebar panels. Reload page to apply changes.`,action:{text:"Reload",action:async()=>{await this._shouldUpdateConfig(),this._organizer._reloadWindow()}},duration:-1,dismissable:!1};Sf(this.haElement,e)},this._showToast=(e,t=1e3)=>{Sf(this.haElement,{message:`${S.toUpperCase()}: ${e}`,duration:t})},this._haNotRunningToast=()=>{const e={id:"sidebar-organizer-ha-not-running",message:`${S.toUpperCase()}: Home Assistant is still starting up. Reload page after Home Assistant has fully started.`,duration:-1,dismissable:!1,action:{text:"Reload",action:()=>this._organizer._reloadWindow()}};Sf(this.haElement,e)},this.haElement=e,this.hass=e.hass,this._organizer=i}async _subscribePanels(){if(!this._organizer._pluginConfigured)return;const e=Boolean(this.hass.userData?.default_panel);this._dashboardPanels?.initialPanels||(await this._getPanelItems(e).then(e=>{this._dashboardPanels={initialPanels:[...e],notShowInSidebar:e.filter(e=>!e.show_in_sidebar).map(e=>this.hass.panels[e.url_path])||[]}}),console.debug("%cSTORE:","color: #4dabf7;","Initial dashboard panels state set to",this._dashboardPanels)),this._utils.PANEL.subscribePanels(this.hass.connection,async t=>{const i=this._dashboardPanels??{initialPanels:[],notShowInSidebar:[]},n=i.initialPanels||[],o=await this._getPanelItems(e),s=n.filter(e=>Object.values(o).every(t=>t.url_path!==e.url_path)).map(e=>e.url_path),r=o.filter(e=>!n.some(t=>t.url_path===e.url_path)),a=o.filter(e=>!e.show_in_sidebar).map(e=>t[e.url_path])||[];r.length>0||s.length>0||!Ef(a,i.notShowInSidebar||[])?(this._dashboardPanels={...i,...!bo(r)&&{added:r.map(e=>t[e.url_path])},...!bo(s)&&{removed:s},...!bo(a)&&{notShowInSidebar:a}},console.debug("%cSTORE:","color: #4dabf7;","Detected changes in sidebar panels",{added:r,removed:s,notShowInSidebar:a},"Updated dashboard panels state:",this._dashboardPanels),this._panelHasChanged=!0,await kt(),this._needReloadToast()):this._panelHasChanged=!1})}resetDashboardState(){this._dashboardPanels=void 0,this._panelHasChanged=!1}}var If=function(e,t,i){var n;void 0===i&&(i={});var o=i.retries,s=void 0===o?10:o,r=i.delay,a=void 0===r?10:r,l=i.shouldReject,c=void 0===l||l,d=null!==(n=i.rejectMessage)&&void 0!==n?n:"Could not get the result after {{ retries }} retries";return new Promise(function(i,n){var o=0,r=function(){var l=e();t(l)?i(l):++o<s?setTimeout(r,a):c?n(new Error(d.replace(/\{\{\s*retries\s*\}\}/g,"".concat(s)))):i(l)};r()})},xf=function(){return xf=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},xf.apply(this,arguments)};function Tf(e,t,i,n){return new(i||(i=Promise))(function(t,o){function s(e){try{a(n.next(e))}catch(e){o(e)}}function r(e){try{a(n.throw(e))}catch(e){o(e)}}function a(e){var n;e.done?t(e.value):(n=e.value,n instanceof i?n:new i(function(e){e(n)})).then(s,r)}a((n=n.apply(e,[])).next())})}function kf(e,t){var i,n,o,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},r=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return r.next=a(0),r.throw=a(1),r.return=a(2),"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(a){return function(l){return function(a){if(i)throw new TypeError("Generator is already executing.");for(;r&&(r=0,a[0]&&(s=0)),s;)try{if(i=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],n=0}finally{i=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}"function"==typeof SuppressedError&&SuppressedError;var Nf="$",$f=":host",Lf="invalid selector",Df=10,Pf=10,Rf=function(e){var t,i=e[0],n=e[1];return(t=i)&&(t instanceof Document||t instanceof Element||t instanceof ShadowRoot)&&"string"==typeof n};function Mf(e,t){return function(e){return e.split(",").map(function(e){return e.trim()})}(e).map(function(e){var i=function(e){return e.split(Nf).map(function(e){return e.trim()})}(e);return t(i)})}function Hf(e,t){var i=t?" If you want to select a shadowRoot, use ".concat(t," instead."):"";return"".concat(e," cannot be used with a selector ending in a shadowRoot (").concat(Nf,").").concat(i)}function Gf(e){return e instanceof Promise?e:Promise.resolve(e)}function Bf(){return"You can not select a shadowRoot (".concat(Nf,") of the document.")}function jf(){return"You can not select a shadowRoot (".concat(Nf,") of a shadowRoot.")}function Uf(e,t){for(var i,n,o=null,s=e.length,r=0;r<s;r++){if(0===r)if(e[r].length)o=t.querySelector(e[r]);else{if(t instanceof Document)throw new SyntaxError(Bf());if(t instanceof ShadowRoot)throw new SyntaxError(jf());o=(null===(i=t.shadowRoot)||void 0===i?void 0:i.querySelector(e[++r]))||null}else o=(null===(n=o.shadowRoot)||void 0===n?void 0:n.querySelector("".concat($f," ").concat(e[r])))||null;if(null===o)return null}return o}function Ff(e,t){var i,n=function(e,t){for(var i,n=0,o=t.length;n<o;n++)!i&&n in t||(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return[].concat(i||Array.prototype.slice.call(t))}(0,e),o=n.pop();if(!n.length)return t.querySelectorAll(o);var s=Uf(n,t);return(null===(i=null==s?void 0:s.shadowRoot)||void 0===i?void 0:i.querySelectorAll("".concat($f," ").concat(o)))||null}function Vf(e,t){if(1===e.length&&!e[0].length){if(t instanceof Document)throw new SyntaxError(Bf());if(t instanceof ShadowRoot)throw new SyntaxError(jf());return t.shadowRoot}var i=Uf(e,t);return(null==i?void 0:i.shadowRoot)||null}function zf(e,t,i,n){for(var o=Mf(e,function(e){if(!e[e.length-1].length)throw new SyntaxError(Hf(i,n));return e}),s=o.length,r=0;r<s;r++){var a=Uf(o[r],t);if(a)return a}return null}function qf(e,t,i){for(var n=Mf(e,function(e){if(!e[e.length-1].length)throw new SyntaxError(Hf(i));return e}),o=n.length,s=0;s<o;s++){var r=Ff(n[s],t);if(null==r?void 0:r.length)return r}return document.querySelectorAll(Lf)}function Wf(e,t,i,n){for(var o=Mf(e,function(e){if(e.pop().length)throw new SyntaxError(function(e,t){return"".concat(e," must be used with a selector ending in a shadowRoot (").concat(Nf,"). If you don't want to select a shadowRoot, use ").concat(t," instead.")}(i,n));return e}),s=o.length,r=0;r<s;r++){var a=Vf(o[r],t);if(a)return a}return null}function Kf(e,t,i,n){return Tf(this,void 0,void 0,function(){return kf(this,function(o){return[2,If(function(){return zf(e,t,"asyncQuerySelector","asyncShadowRootQuerySelector")},function(e){return!!e},{retries:i,delay:n,shouldReject:!1})]})})}function Yf(e,t,i,n){return Tf(this,void 0,void 0,function(){return kf(this,function(o){return[2,If(function(){return qf(e,t,"asyncQuerySelectorAll")},function(e){return!!e.length},{retries:i,delay:n,shouldReject:!1})]})})}function Jf(e,t,i,n){return Tf(this,void 0,void 0,function(){return kf(this,function(o){return[2,If(function(){return Wf(e,t,"asyncShadowRootQuerySelector","asyncQuerySelector")},function(e){return!!e},{retries:i,delay:n,shouldReject:!1})]})})}var Xf=function(e,t){var i=e.querySelectorAll(t);if(i.length)return i;if(e instanceof Element&&e.shadowRoot){var n=Xf(e.shadowRoot,t);if(n.length)return n}for(var o=0,s=Array.from(e.querySelectorAll("*"));o<s.length;o++){var r=s[o],a=Xf(r,t);if(a.length)return a}return document.querySelectorAll(Lf)},Zf=function(e,t,i,n){return If(function(){return Xf(e,t)},function(e){return!!e.length},{retries:i,delay:n,shouldReject:!1})};function Qf(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Tf(this,void 0,void 0,function(){var t,i,n,o,s;return kf(this,function(r){switch(r.label){case 0:return Rf(e)?(t=e[0],i=e[1],n=e[2],[4,Kf(i,t,(null==n?void 0:n.retries)||Df,(null==n?void 0:n.delay)||Pf)]):[3,2];case 1:case 3:return[2,r.sent()];case 2:return o=e[0],s=e[1],[4,Kf(o,document,(null==s?void 0:s.retries)||Df,(null==s?void 0:s.delay)||Pf)]}})})}function ep(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Tf(this,void 0,void 0,function(){var t,i,n,o,s;return kf(this,function(r){switch(r.label){case 0:return Rf(e)?(t=e[0],i=e[1],n=e[2],[4,Yf(i,t,(null==n?void 0:n.retries)||Df,(null==n?void 0:n.delay)||Pf)]):[3,2];case 1:return[2,r.sent()];case 2:return o=e[0],s=e[1],[2,Yf(o,document,(null==s?void 0:s.retries)||Df,(null==s?void 0:s.delay)||Pf)]}})})}function tp(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Tf(this,void 0,void 0,function(){var t,i,n,o,s;return kf(this,function(r){switch(r.label){case 0:return Rf(e)?(t=e[0],i=e[1],n=e[2],[4,Jf(i,t,(null==n?void 0:n.retries)||Df,(null==n?void 0:n.delay)||Pf)]):[3,2];case 1:return[2,r.sent()];case 2:return o=e[0],s=e[1],[2,Jf(o,document,(null==s?void 0:s.retries)||Df,(null==s?void 0:s.delay)||Pf)]}})})}var ip=function(){function e(e,t){e instanceof Node||e instanceof Promise?(this._element=e,this._asyncParams=xf({retries:Df,delay:Pf},t||{})):(this._element=document,this._asyncParams=xf({retries:Df,delay:Pf},e||{}))}return Object.defineProperty(e.prototype,"element",{get:function(){return Gf(this._element).then(function(e){return e instanceof NodeList?e[0]||null:e})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"$",{get:function(){var t=this;return new e(Gf(this._element).then(function(e){return e instanceof Document||e instanceof ShadowRoot||null===e||e instanceof NodeList&&0===e.length?null:e instanceof NodeList?tp(e[0],Nf,t._asyncParams):tp(e,Nf,t._asyncParams)}),this._asyncParams)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"all",{get:function(){return Gf(this._element).then(function(e){return e instanceof NodeList?e:document.querySelectorAll(Lf)})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"asyncParams",{get:function(){return this._asyncParams},enumerable:!1,configurable:!0}),e.prototype.eq=function(e){return Tf(this,void 0,void 0,function(){return kf(this,function(t){return[2,Gf(this._element).then(function(t){return t instanceof NodeList&&t[e]||null})]})})},e.prototype.query=function(t){var i=this;return new e(Gf(this._element).then(function(e){return null===e||e instanceof NodeList&&0===e.length?null:e instanceof NodeList?ep(e[0],t,i._asyncParams):ep(e,t,i._asyncParams)}),this._asyncParams)},e.prototype.deepQuery=function(t){var i=this;return new e(Gf(this._element).then(function(e){return null===e||e instanceof NodeList&&0===e.length?null:e instanceof NodeList?Promise.race(Array.from(e).map(function(e){return Zf(e,t,i._asyncParams.retries,i._asyncParams.delay)})):Zf(e,t,i._asyncParams.retries,i._asyncParams.delay)}),this._asyncParams)},e}();const np="$",op={retries:100,delay:50,shouldReject:!1,eventThreshold:450};var sp,rp,ap,lp,cp;!function(e){e.HOME_ASSISTANT="HOME_ASSISTANT",e.HOME_ASSISTANT_MAIN="HOME_ASSISTANT_MAIN",e.HA_DRAWER="HA_DRAWER",e.HA_SIDEBAR="HA_SIDEBAR",e.PARTIAL_PANEL_RESOLVER="PARTIAL_PANEL_RESOLVER"}(sp||(sp={})),function(e){e.HA_PANEL_LOVELACE="HA_PANEL_LOVELACE",e.HUI_ROOT="HUI_ROOT",e.HEADER="HEADER",e.HUI_VIEW="HUI_VIEW"}(rp||(rp={})),function(e){e.HA_MORE_INFO_DIALOG="HA_MORE_INFO_DIALOG",e.HA_DIALOG="HA_DIALOG",e.HA_DIALOG_CONTENT="HA_DIALOG_CONTENT",e.HA_MORE_INFO_DIALOG_INFO="HA_MORE_INFO_DIALOG_INFO",e.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK="HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK",e.HA_DIALOG_MORE_INFO_SETTINGS="HA_DIALOG_MORE_INFO_SETTINGS"}(ap||(ap={})),function(e){e.ON_LISTEN="onListen",e.ON_PANEL_LOAD="onPanelLoad",e.ON_LOVELACE_PANEL_LOAD="onLovelacePanelLoad",e.ON_MORE_INFO_DIALOG_OPEN="onMoreInfoDialogOpen",e.ON_HISTORY_AND_LOGBOOK_DIALOG_OPEN="onHistoryAndLogBookDialogOpen",e.ON_SETTINGS_DIALOG_OPEN="onSettingsDialogOpen"}(lp||(lp={})),function(e){e.HOME_ASSISTANT="home-assistant",e.HOME_ASSISTANT_MAIN="home-assistant-main",e.HA_DRAWER="ha-drawer",e.HA_SIDEBAR="ha-sidebar",e.PARTIAL_PANEL_RESOLVER="partial-panel-resolver",e.HA_PANEL_LOVELACE="ha-panel-lovelace",e.HUI_ROOT="hui-root",e.HEADER=".header",e.HUI_VIEW="hui-view",e.HA_MORE_INFO_DIALOG="ha-more-info-dialog",e.HA_DIALOG="ha-dialog",e.HA_ADAPTATIVE_DIALOG="ha-adaptive-dialog",e.HA_DIALOG_CONTENT=".content",e.HA_MORE_INFO_DIALOG_INFO="ha-more-info-info",e.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK="ha-more-info-history-and-logbook",e.HA_DIALOG_MORE_INFO_SETTINGS="ha-more-info-settings"}(cp||(cp={}));const dp={[sp.HOME_ASSISTANT]:{selector:cp.HOME_ASSISTANT,children:{shadowRoot:{selector:np,children:{[sp.HOME_ASSISTANT_MAIN]:{selector:cp.HOME_ASSISTANT_MAIN,children:{shadowRoot:{selector:np,children:{[sp.HA_DRAWER]:{selector:cp.HA_DRAWER,children:{[sp.HA_SIDEBAR]:{selector:cp.HA_SIDEBAR,children:{shadowRoot:{selector:np}}},[sp.PARTIAL_PANEL_RESOLVER]:{selector:cp.PARTIAL_PANEL_RESOLVER}}}}}}}}}}}},hp={[rp.HA_PANEL_LOVELACE]:{selector:cp.HA_PANEL_LOVELACE,children:{shadowRoot:{selector:np,children:{[rp.HUI_ROOT]:{selector:cp.HUI_ROOT,children:{shadowRoot:{selector:np,children:{[rp.HEADER]:{selector:cp.HEADER},[rp.HUI_VIEW]:{selector:cp.HUI_VIEW}}}}}}}}}},up={shadowRoot:{selector:np,children:{[ap.HA_MORE_INFO_DIALOG]:{selector:cp.HA_MORE_INFO_DIALOG,children:{shadowRoot:{selector:np,children:{[ap.HA_DIALOG]:{selector:`${cp.HA_ADAPTATIVE_DIALOG}, ${cp.HA_DIALOG}`,children:{[ap.HA_DIALOG_CONTENT]:{selector:cp.HA_DIALOG_CONTENT,children:{[ap.HA_MORE_INFO_DIALOG_INFO]:{selector:cp.HA_MORE_INFO_DIALOG_INFO},[ap.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK]:{selector:cp.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK},[ap.HA_DIALOG_MORE_INFO_SETTINGS]:{selector:cp.HA_DIALOG_MORE_INFO_SETTINGS}}}}}}}}}}}};"function"==typeof SuppressedError&&SuppressedError;const fp=(e,t,i,n=!1)=>Object.entries(t||{}).reduce((t,o)=>{const[s,r]=o;if(r.selector===np&&i)return r.children?Object.assign(Object.assign({},t),fp(e,r.children,i,!0)):t;const a=i?i.then(t=>{return t?Qf(t,(i=r.selector,n?"$ "+i:i),e):null;var i}):Qf(r.selector,e);return t[s]={element:a,children:fp(e,r.children,a),selector:new ip(a,e)},t},{}),pp=(e,t)=>{const i=Object.entries(t);for(const t of i){if(t[0]===e)return t[1];{const i=pp(e,t[1].children);if(i)return i}}},gp=(e,t)=>Object.keys(e).reduce((e,i)=>{const n=pp(i,t);if(n){const{children:t}=n,o=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i}(n,["children"]);e[i]=Object.assign({},o)}return e},{});let _p=class{constructor(){this.delegate=document.createDocumentFragment()}addEventListener(...e){this.delegate.addEventListener(...e)}dispatchEvent(...e){return this.delegate.dispatchEvent(...e)}removeEventListener(...e){return this.delegate.removeEventListener(...e)}},mp=class extends _p{constructor(e={}){super(),this._config=Object.assign(Object.assign({},op),e),this._timestaps={}}_dispatchEvent(e,t){const i=Date.now();this._timestaps[e]&&i-this._timestaps[e]<this._config.eventThreshold||(this._timestaps[e]=i,this.dispatchEvent(new CustomEvent(e,{detail:t})))}_updateDialogElements(e=ap.HA_MORE_INFO_DIALOG_INFO){this._dialogTree=fp(this._config,up,this._haRootElements.HOME_ASSISTANT.element);const t=gp(ap,this._dialogTree);t.HA_DIALOG_CONTENT.element.then(e=>{this._dialogsContentObserver.disconnect(),this._dialogsContentObserver.observe(e,{childList:!0})}),this._haDialogElements=((e,t)=>[ap.HA_MORE_INFO_DIALOG,ap.HA_DIALOG,ap.HA_DIALOG_CONTENT,t].reduce((t,i)=>(t[i]=e[i],t),{}))(t,e);const i={[ap.HA_MORE_INFO_DIALOG_INFO]:lp.ON_MORE_INFO_DIALOG_OPEN,[ap.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK]:lp.ON_HISTORY_AND_LOGBOOK_DIALOG_OPEN,[ap.HA_DIALOG_MORE_INFO_SETTINGS]:lp.ON_SETTINGS_DIALOG_OPEN};this._dispatchEvent(i[e],this._haDialogElements)}_updateRootElements(){this._homeAssistantRootTree=fp(this._config,dp),this._haRootElements=gp(sp,this._homeAssistantRootTree),this._haRootElements[sp.HOME_ASSISTANT].selector.$.element.then(e=>{this._dialogsObserver.disconnect(),this._dialogsObserver.observe(e,{childList:!0})}),this._haRootElements[sp.PARTIAL_PANEL_RESOLVER].element.then(e=>{this._panelResolverObserver.disconnect(),e&&this._panelResolverObserver.observe(e,{subtree:!0,childList:!0})}),this._dispatchEvent(lp.ON_LISTEN,this._haRootElements),this._dispatchEvent(lp.ON_PANEL_LOAD,this._haRootElements)}_updateLovelaceElements(){this._homeAssistantResolverTree=fp(this._config,hp,this._haRootElements[sp.HA_DRAWER].element),this._haResolverElements=gp(rp,this._homeAssistantResolverTree),this._haResolverElements[rp.HA_PANEL_LOVELACE].element.then(e=>{this._lovelaceObserver.disconnect(),e&&(this._lovelaceObserver.observe(e.shadowRoot,{childList:!0}),this._dispatchEvent(lp.ON_LOVELACE_PANEL_LOAD,Object.assign(Object.assign({},this._haRootElements),this._haResolverElements)))})}_watchDialogs(e){e.forEach(({addedNodes:e})=>{e.forEach(e=>{e instanceof Element&&e.localName===cp.HA_MORE_INFO_DIALOG&&(this._dialogsChildrenObserver.disconnect(),this._dialogsChildrenObserver.observe(e.shadowRoot,{childList:!0}),this._updateDialogElements())})})}_watchDialogsChildren(e){e.forEach(({addedNodes:e})=>{e.forEach(e=>{const t=[`${cp.HA_DIALOG}`,`${cp.HA_ADAPTATIVE_DIALOG}`];e instanceof Element&&t.includes(e.localName)&&this._updateDialogElements()})})}_watchDialogsContent(e){e.forEach(({addedNodes:e})=>{e.forEach(e=>{const t={[cp.HA_MORE_INFO_DIALOG_INFO]:ap.HA_MORE_INFO_DIALOG_INFO,[cp.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK]:ap.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK,[cp.HA_DIALOG_MORE_INFO_SETTINGS]:ap.HA_DIALOG_MORE_INFO_SETTINGS};if(e instanceof Element&&e.localName&&e.localName in t){const i=e.localName;this._updateDialogElements(t[i])}})})}_watchDashboards(e){e.forEach(({addedNodes:e})=>{e.forEach(e=>{this._dispatchEvent(lp.ON_PANEL_LOAD,this._haRootElements),e instanceof Element&&e.localName===cp.HA_PANEL_LOVELACE&&this._updateLovelaceElements()})})}_watchLovelace(e){e.forEach(({addedNodes:e})=>{e.forEach(e=>{e instanceof Element&&e.localName===cp.HUI_ROOT&&this._updateLovelaceElements()})})}listen(){this._watchDialogsBinded=this._watchDialogs.bind(this),this._watchDialogsChildrenBinded=this._watchDialogsChildren.bind(this),this._watchDialogsContentBinded=this._watchDialogsContent.bind(this),this._watchDashboardsBinded=this._watchDashboards.bind(this),this._watchLovelaceBinded=this._watchLovelace.bind(this),this._dialogsObserver=new MutationObserver(this._watchDialogsBinded),this._dialogsChildrenObserver=new MutationObserver(this._watchDialogsChildrenBinded),this._dialogsContentObserver=new MutationObserver(this._watchDialogsContentBinded),this._panelResolverObserver=new MutationObserver(this._watchDashboardsBinded),this._lovelaceObserver=new MutationObserver(this._watchLovelaceBinded),this._updateRootElements(),this._updateLovelaceElements()}addEventListener(e,t,i){super.addEventListener(e,t,i)}};const bp=/([A-Z])([a-z0-9_-]+)/g,yp=e=>(Array.isArray(e)?e:[e]).map(e=>{if("string"==typeof e)return e;const t=Object.entries(e),i=[],n=[];return t.forEach(e=>{const[t,o]=e;"object"==typeof o?i.push(`${t}{${yp(o)}}`):!1===o?i.push(`${t}{display: none !important}`):n.push(`${(e=>e.replace(bp,(e,t,i,n)=>{const o=t.toLocaleLowerCase();return n?`-${o}${i}`:`--${o}${i}`}))(t)}:${o}`)}),`${i.join("")}${n.join(";")}`}).join(""),vp=(e,t)=>`${t}_${e}`,wp=e=>e instanceof ShadowRoot?e.host.localName:e.localName,Ap=(e,t)=>{const i=vp(wp(e),t);return e.querySelector(`#${i}`)};let Cp=class{constructor(e={}){var t,i,n;this._prefix=null!==(t=e.prefix)&&void 0!==t?t:"ha-styles-manager",this._namespace=null!==(i=e.namespace)&&void 0!==i?i:"home-assistant-styles-manager",this._throwWarnings=null===(n=e.throwWarnings)||void 0===n||n}getStyleElement(e){return Ap(e,this._prefix)}addStyle(e,t){((e,t,i,n,o)=>{if(t){let n=Ap(t,i);if(!n){const e=vp(wp(t),i);n=document.createElement("style"),n.setAttribute("id",e),t.appendChild(n)}n.innerHTML="string"==typeof e?e:yp(e)}else o&&console.warn(`${n}: no element has been provided calling "addStyle"`)})(e,t,this._prefix,this._namespace,this._throwWarnings)}removeStyle(e){((e,t,i,n)=>{if(e){const o=Ap(e,t);o?o.remove():n&&console.warn(`${i}: no style to remove calling "removeStyle"`)}else n&&console.warn(`${i}: no element has been provided calling "removeStyle"`)})(e,this._prefix,this._namespace,this._throwWarnings)}};const Ep=(e,t)=>null!=e&&null!=t&&t>e,Sp=e=>{if(e)try{const t=JSON.parse(e);return"number"==typeof t?t:void 0}catch{const t=Number(e);return Number.isFinite(t)?t:void 0}},Op=ue`
  :host .divider[added] ha-tooltip {
    text-transform: var(--sidebar-text-transform, 'capitalize');
    --ha-tooltip-font-size: var(--ha-font-size-m);
    --ha-tooltip-line-height: var(--ha-line-height-normal);
    --ha-tooltip-font-weight: var(--ha-font-weight-medium, 500);
    --ha-tooltip-padding: var(--ha-space-1, 4px);
    --ha-tooltip-background-color: var(--so-tooltip-background-color, inherit);
    --ha-tooltip-text-color: var(--so-tooltip-text-color, inherit);
  }
  :host .tooltip {
    color: var(--so-tooltip-text-color, inherit);
    background-color: var(--so-tooltip-background-color, inherit);
  }
  :host .ha-scrollbar {
    padding: 0;
  }
  :host([expanded]) .divider {
    padding: 10px 0;
  }
  :host .divider[ungrouped] {
    padding: 0;
  }

  :host .divider::before {
    content: ' ';
    display: block;
    height: 1px;
    background-color: var(--divider-color);
  }
  :host .divider[bottom] {
    padding: 0;
  }

  :host .collapse-toggle {
    color: var(--primary-color);
    transition: transform 0.3s ease;
    cursor: pointer;
    opacity: 0.5;
    margin-right: 4px;
  }
  :host .collapse-toggle.active {
    color: var(--sidebar-icon-color);
    transform: rotate(90deg);
    transition: transform 0.3s ease;
  }
  :host .collapse-toggle:hover {
    color: var(--primary-color);
    opacity: 1;
  }

  :host([expanded]) .title.toggle {
    display: flex !important;
    justify-content: space-between;
    margin: 0;
  }

  :host([expanded]) .divider[added] {
    padding: 0;
    box-sizing: border-box;
    margin: var(--divider-margin-radius);
    width: calc(100% - var(--ha-space-2));
  }
  :host(:not([expanded])) .divider[added] {
    margin: 0 !important;
  }

  :host .ha-scrollbar .divider[ungrouped] {
    padding-top: 1px;
    opacity: 0.5;
  }

  :host ha-list-item-button > ha-icon.badge {
    --mdc-icon-size: 20px !important;
  }

  :host([expanded]) .menu {
    width: 100% !important;
  }

  /* :host([expanded]) ha-list-item-button {
    width: calc(100% - var(--ha-space-2)) !important;
  } */

  :host([expanded]) .grid-container > ha-list-item-button[grid-item] > ha-icon.badge,
  :host([expanded]) .grid-container > ha-list-item-button[grid-item] > span.badge {
    position: absolute;
    top: 4px;
    left: 26px;
    border-radius: var(--ha-border-radius-md);
    font-size: 0.75em;
    line-height: var(--ha-line-height-expanded);
    padding: 0 var(--ha-space-1);
  }
  :host(:not([expanded])) ha-list-item-button[data-notification='true'] > ha-icon.badge,
  :host(:not([expanded])) ha-list-item-button[data-notification='true'] > span.badge {
    position: absolute;
    inset-inline-start: 20px;
    inset-inline-end: initial;
    left: auto;
    max-width: 30px;
    top: 0px;
  }

  :host(:not([expanded])) ha-list-item-button[data-notification='true'] > ha-icon.badge,
  :host(:not([expanded])) ha-list-item-button[data-notification='true'] > span.badge.badge-number {
    inset-inline-end: 4px !important;
  }
  :host(:not([expanded])) ha-list-item-button[data-notification='true'] > span.badge.large-badge {
    transform: translateX(50%);
    right: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ha-list-item-button[data-notification='true'] span.badge.no-visible {
    visibility: hidden !important;
    opacity: 0 !important;
  }
  ha-list-item-button[data-notification='true'] > ha-icon.badge {
    padding: 0 !important;
    color: var(--accent-color);
    background-color: transparent;
  }

  ha-list-item-button[data-notification='true'] > span.badge {
    /* padding: 0 5px !important; */
    border-radius: 20px;
    font-size: 0.85em;
  }
  :host([expanded]) .grid-container {
    display: grid;
    /* Use flexible minmax columns so grid items reflow with the available drawer width,
     * which keeps the layout responsive when --custom-sidebar-width is changed. */
    grid-template-columns: repeat(auto-fill, minmax(48px, 1fr));
    grid-gap: 4px 4px;
    width: calc(100% - var(--ha-space-2));
    padding: 0;
    margin: 0;
    overflow: clip;
    /* max-height: fit-content; */
    /* justify-content: flex-start; */
  }

  :host([expanded]) ha-list-item-button[grid-item] {
    width: 48px !important;
    margin: 4px;
    /* justify-content: center;
    align-items: center; */
    /* margin: auto auto; */
  }

  :host([expanded]) ha-list-item-button:not([grid-item]) {
    width: calc(100% - var(--ha-space-2)) !important;
  }

  :host .divider[added] .added-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: var(--side-divider-text-color, var(--sidebar-text-color));
    background-color: var(--divider-bg-color);
    letter-spacing: 1px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
    border-top: 1px solid var(--divider-border-top-color);
    border-radius: var(--divider-border-radius, none);
    box-sizing: border-box;
    padding-left: 12px;
    padding-inline-end: initial;
    min-height: 40px;
    text-transform: var(--sidebar-text-transform, 'capitalize');
    &:hover {
      color: var(--primary-color);
      background-color: rgb(from var(--primary-color) r g b / 0.1);
    }
  }

  :host .divider.collapsed[added][aria-selected='true'] {
    background-color: rgb(from var(--sidebar-selected-icon-color) r g b / 0.12);
  }

  :host .divider[added] .added-content span,
  :host .divider[added] .added-content ha-icon {
    pointer-events: none;
    transition: all 150ms ease;
  }

  :host .divider[added] .added-content.collapsed ha-icon:not([custom]) {
    transform: rotate(-90deg);
  }

  :host .divider[added] .added-content span {
    transform: translateX(var(--so-group-header-expanded-shift, 30px));
  }
  :host .divider[added]:hover .added-content.collapsed > span {
    transform: translateX(var(--so-group-header-hover-shift, 10px));
  }
  :host .divider[added] .added-content.collapsed > span {
    transform: translateX(var(--so-group-header-collapsed-shift, 10px));
  }

  :host([expanded]) .ha-scrollbar .divider[added]::before {
    display: none !important;
  }
  :host([expanded]) .divider[added] > ha-tooltip {
    display: none !important;
  }

  :host(:not([expanded])) .divider.collapsed[added]::before {
    content: '';
    display: none;
  }
  :host(:not([expanded])) .divider[added]::before {
    content: '';
    opacity: 0;
  }

  :host(:not([expanded])) .divider .added-content.default {
    display: none;
  }

  :host(:not([expanded])) .divider[added] .added-content {
    padding-inline-start: 2px;
    align-items: center;
    justify-content: center;
    border-left: 2px groove rgb(from var(--sidebar-selected-icon-color) r g b / 0.5);
    box-sizing: content-box;
    &.collapsed {
      border-left: hidden;
    }
  }

  :host(:not([expanded])) .divider[added] .added-content > ha-icon[custom] {
    margin: 0;
    padding: 0;
    color: var(--sidebar-icon-color);
  }

  a:not(.iron-selected):hover > paper-icon-item {
    background-color: rgb(from var(--sidebar-selected-icon-color) r g b / 0.2);
  }

  :host([expanded]) ha-list-item-button[group] {
    padding-left: var(--so-group-item-indent, 0px) !important;
    padding-inline-start: var(--so-group-item-indent, 0px) !important;
  }
  :host ha-list-item-button:has([group]) {
    transition: all;
  }
  :host ha-list-item-button.selected[grid-item]::before {
    margin-block: 2px;
  }
  :host ha-list-item-button.collapsed {
    max-height: 0px !important;
    overflow: hidden;
    opacity: 0;
    padding: 0;
    margin: 0;
    border: none;
  }

  :host a[aria-selected='false']::before,
  :host a.configuration-container[aria-selected='false']::before {
    display: none;
  }

  :host(:not([expanded])) a.collapsed.iron-selected {
    max-height: 1000px;
  }

  :host ha-list-item-button.slideIn {
    animation-name: slideIn;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  @keyframes slideIn {
    from {
      max-height: 0px;
      opacity: 0.3;
    }
    to {
      max-height: 40px;
      opacity: 1;
    }
  }

  :host ha-list-item-button.slideOut {
    animation-name: slideOut;
    animation-duration: 0.3s;
  }
  @keyframes slideOut {
    from {
      max-height: 40px;
      opacity: 1;
    }
    to {
      max-height: 0px;
      opacity: 0;
    }
  }
  :host([expanded]) ha-tooltip:not([grid-item]) {
    display: none !important;
  }
  :host([narrow][expanded]) {
    -webkit-backdrop-filter: var(--so-backdrop-filter, none);
    backdrop-filter: var(--so-backdrop-filter, none);
  }
`,Ip=ue`
  :host aside.mdc-drawer {
    background-color: transparent;
  }
`,xp=ue`
  :host([expanded]:not([modal])) {
    --mdc-drawer-width: var(--custom-sidebar-width, calc(256px + var(--safe-area-inset-left, 0px)));
    --ha-sidebar-width: var(--custom-sidebar-width, calc(256px + var(--safe-area-inset-left, 0px)));
  }
`,Tp=ue`
  :host .header::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: var(--header-hide-progress, 0);
    background: linear-gradient(180deg, var(--primary-background-color, rgba(0, 0, 0, 0.5)) 0%, transparent 100%);
    transition: opacity 0.3s ease;
  }

  :host .header .toolbar {
    will-change: transform, opacity;

    transition:
      transform 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045),
      opacity 0.25s linear;
  }

  :host .header.scroll-hide,
  :host([scrolled]) .header.scroll-hide {
    box-shadow: none !important;
    background: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }
`;class kp{constructor(){this._notCompatible=!1,this._config={},this._delayTimeout=null,this._configPanelMap=new Map,this._pinnedGroups={},this._prevPath=null,this._userHasSidebarSettings=!1,this.collapsedItems=new Set,this.firstSetUpDone=!1,this._diffCheck=!1,this.setupConfigDone=!1,this._baseOrder=[],this._hiddenPanels=[],this._activePersonalProfile=!1,this._handleProfileChanged=e=>{if(Boolean(e.profile_exists)!==this._activePersonalProfile)return void this._reloadWindow();if(!e.revision)return;const t=xs(D.HA_CONFIG_REVISION);(t?JSON.parse(t):void 0)!==e.revision&&(Ts(D.HA_CONFIG_REVISION,e.revision),this._reloadWindow())},this._handleVisibilityHaConfigRefresh=()=>{"visible"===document.visibilityState&&this._checkHaConfigRefresh()},this._checkHaConfigRefresh=async()=>{const e=$s();if("home_assistant_config"!==e&&"home_assistant_profile"!==e||!this.hass)return;if("home_assistant_profile"===e){const e=await new Gd(this.hass).info();if(!e.available||!e.revision)return;const t=xs(D.HA_CONFIG_REVISION),i=t?JSON.parse(t):void 0;return void 0===i?void Ts(D.HA_CONFIG_REVISION,e.revision):void(i!==e.revision&&(Ts(D.HA_CONFIG_REVISION,e.revision),this._reloadWindow()))}const t=new Hd(this.hass),i=await t.info();if(!i.available||null==i.last_modified)return;const n=Sp(xs(D.HA_CONFIG_LAST_MODIFIED));void 0!==n?Ep(n,i.last_modified)&&(Ts(D.HA_CONFIG_LAST_MODIFIED,i.last_modified),this._reloadWindow()):Ts(D.HA_CONFIG_LAST_MODIFIED,i.last_modified)},this._checkProfileSection=async()=>{const e=await this._panelResolver.element,t=e?.route?.path??window.location.pathname;t&&N.test(t)&&this._dialogManager&&await this._dialogManager._injectSidebarOrganizerElement(e)},this._createDivider=e=>{const t=document.createElement("div");return t.classList.add("divider"),e&&t.setAttribute(e,""),t},this._createDividerWithGroup=(t,o=!1)=>{const s=this._createDivider();s.setAttribute(n.GROUP,t),s.setAttribute(n.ADDED,""),s.classList.toggle(i.COLLAPSED,o);const r=this._createAddedGroupContent(t,o);if(s.appendChild(r),this._pinnedGroups[t]){r.id=`pinned-${t}`;const i=document.createElement(e.HA_TOOLTIP);i.for=`pinned-${t}`,i.innerText=`${t.trim()}`,i.placement="right",s.appendChild(i)}return s.addEventListener("click",this._toggleGroup.bind(this)),s},this._createAddedGroupContent=(e,o=!1)=>{if(this._pinnedGroups[e]){const s=document.createElement(t.SO_GROUP_DIVIDER);return s.classList.add(i.ADDED_CONTENT),s.setAttribute(n.GROUP,e),s.classList.toggle(i.COLLAPSED,o),s.customIcon=this._pinnedGroups[e].icon,s.haSidebar=this.HaSidebar,s}const s=document.createElement("div");return s.classList.add(i.ADDED_CONTENT),s.classList.add("default"),s.setAttribute(n.GROUP,e),s.innerHTML=`<ha-icon icon="mdi:chevron-down"></ha-icon><span>${e.trim()}</span>`,s.classList.toggle(i.COLLAPSED,o),s},this._checkDiffs=()=>{const e=this._baseOrder,t=Array.from(this._sidebarItems),i=Lt(t,!0);if(i.some(e=>!1===e.isValid)){j("Changes detected:",{baseOrder:e,notValidItems:i.filter(e=>!1===e.isValid).map(e=>e.panelId)}),this._diffCheck=!1,this._store._needReloadToast()}else this._diffCheck=!0},this._getGroupOfPanel=e=>{const t=[...this._configPanelMap.entries()].find(([,t])=>t.includes(e));return t?t[0]:null},this._removeSidebarConfigFromStorage=()=>Qd(),this._removeUserSidebarData=()=>Po(this.hass.connection),this._toogleKioskMode=e=>{const t=void 0!==e?e:!this.hass.kioskMode;window.dispatchEvent(new CustomEvent(s.HASS_KIOSK_MODE,{detail:{enable:t}}))};const o=new mp;o.addEventListener(lp.ON_LISTEN,async e=>{const{HOME_ASSISTANT:t,HA_DRAWER:i,HA_SIDEBAR:n}=e.detail;this._ha=await t.element,Os(this.hass.user?.id),this._haDrawer=await i.element,this.HaSidebar=await n.element,this.sideBarRoot=await n.selector.$.element,this._store=new Of(this._ha,this),this._dialogManager=new Cf(this._ha,this),this.run()}),o.addEventListener(lp.ON_LISTEN,e=>{this._panelResolver=e.detail.PARTIAL_PANEL_RESOLVER,this._sidebar=e.detail.HA_SIDEBAR,this._haMain=e.detail.HOME_ASSISTANT_MAIN,this._homeAssistant=e.detail.HOME_ASSISTANT},{once:!0}),o.addEventListener(lp.ON_PANEL_LOAD,()=>{this._panelLoaded()}),o.addEventListener(lp.ON_LOVELACE_PANEL_LOAD,async e=>{const{HA_PANEL_LOVELACE:t}=e.detail;this._panelLovelace=t,await kt(),this._watchScrollHideHeader()}),this._styleManager=new Cp({prefix:S,throwWarnings:!1}),[P.SETTHEME,P.DEFAULT_PANEL,P.DIALOG_CLOSED,P.LOCATION_CHANGED,P.SHOW_DIALOG,P.SIDEBAR_CONFIG_SAVED,P.HASS_EDIT_SIDEBAR].forEach(e=>{window.addEventListener(e,this._handleHaEvents.bind(this))}),this._sidebarItems=[],this._currentPath=window.location.pathname,this._watchPathChanges(),o.listen(),window.addEventListener("storage",this._storageListener.bind(this)),this._sidebarObserver=new MutationObserver(this._watchSidebarExpansion.bind(this))}get hass(){return this._ha.hass}get darkMode(){return ie(this._config.color_config,this.hass)}get _panelsList(){return this.sideBarRoot?.querySelector(e.PANELS_LIST)}get _scrollbar(){return this.sideBarRoot?.querySelector(e.SIDEBAR_SCROLLBAR)}get _scrollbarItems(){return this._panelsList.querySelectorAll(t.ITEM)}get _hasSidebarConfig(){const e=xs(D.UI_CONFIG);return"browser_storage"!==$s()||null!=e}get _pluginConfigured(){return Boolean(this._hasSidebarConfig&&!this._userHasSidebarSettings)}async run(){if(!this.hass||this.hass.config?.state!==l.RUNNING)return void this._store._haNotRunningToast();if(!Zd(this.hass.config.version,2026,6)){this._notCompatible=!0;const e=`${H.NOT_COMPATIBLE}: ${this.hass.config.version}.\nPlease upgrade Home Assistant to 2026.6 or later.`;return this._store._showToast(e,1e4),void j(e)}Ft(this._ha.hass);const e=new Gd(this.hass),t=await e.info();this._activePersonalProfile=Boolean(t.available&&t.profile_exists),t.available&&!this._profileUnsubscribe&&(this._profileUnsubscribe=await e.subscribe(this._handleProfileChanged)),await this._checkUserSidebarSettings(),this._activePersonalProfile&&(this._userHasSidebarSettings=!1),await this._watchEditLegacySidebar(),this._setupConfigBtn(),this._userHasSidebarSettings||(await this._getConfig().then(()=>{this._watchScrollHideHeader(),this._watchHaConfigRefresh(),this._setupInitialConfig()}),this._processSections())}async _watchScrollHideHeader(){if(!this._config.scroll_hide_header)return;if(!this._panelLovelace)return;const t=await this._panelLovelace.selector.$.query(e.HUI_ROOT).element;if(!t)return;this._styleManager.addStyle([Tp.toString()],t.shadowRoot);const i=t.shadowRoot.querySelector(".header"),n=i?.querySelector(".toolbar");if(!i||!n)return;console.debug("Scroll hide header enabled, setting up scroll listener");const o=n.offsetHeight||i.offsetHeight||56;let s=!1,r=window.scrollY,a=0,l=0;const c=o,d=()=>{s=!1;const e=window.scrollY,t=e-r;r=e,l+=t;if(!(Math.abs(l)>=c))return;a+=l,l=0,a=Math.max(0,Math.min(a,o)),e<=0&&(a=0);const d=a/o;n.style.transform=`translateY(-${a}px)`,n.style.opacity=""+(1-d),i.classList.toggle("scroll-hide",a>0),i.style.setProperty("--header-hide-progress",`${d}`)},h=()=>{s||(s=!0,requestAnimationFrame(d))};window.addEventListener("scroll",h,{passive:!0}),d(),this._onWindowScrollHideHeader?.(),this._onWindowScrollHideHeader=()=>{window.removeEventListener("scroll",h)}}async _watchEditLegacySidebar(){if(!this._hasSidebarConfig)return;const e=customElements.get("home-assistant-main");e?Object.defineProperty(e.prototype,"_sidebarEditMode",{get:()=>!1,set(){},configurable:!0}):console.warn("home-assistant-main is not yet defined")}_watchSidebarExpansion(e){e.forEach(e=>{if(e.attributeName===n.EXPANDED){const e=this.HaSidebar.hasAttribute("expanded");console.debug("Sidebar expansion changed, current expanded state:",e),this._changeGridItemTooltipPlacement(e)}})}_watchPathChanges(){const e=()=>{this._delayTimeout&&clearTimeout(this._delayTimeout),this._delayTimeout=window.setTimeout(()=>{const e=window.location.pathname;this._checkProfileSection(),e!==this._currentPath&&(this._prevPath=this._currentPath,this._currentPath=e,null!==this._prevPath&&this._prevPath===$.LOVELACE_DASHBOARD&&this._currentPath!==$.LOVELACE_DASHBOARD&&this._checkDashboardChange())},200)},t=history.pushState,i=history.replaceState;history.pushState=function(...i){t.apply(this,i),e()},history.replaceState=function(...t){i.apply(this,t),e()},window.addEventListener("popstate",e)}_watchHaConfigRefresh(){const e=$s();void 0!==this._haConfigRefreshInterval||"home_assistant_config"!==e&&"home_assistant_profile"!==e||(window.addEventListener("focus",this._checkHaConfigRefresh),document.addEventListener("visibilitychange",this._handleVisibilityHaConfigRefresh),this._haConfigRefreshInterval=window.setInterval(this._checkHaConfigRefresh,3e4),"home_assistant_profile"!==e||this._profileUnsubscribe||new Gd(this.hass).subscribe(this._handleProfileChanged).then(e=>{this._profileUnsubscribe=e}))}async _checkDashboardChange(){if(this._userHasSidebarSettings||!this._baseOrder.length)return;await this._store._shouldUpdateConfig()?this._reloadWindow():(this._checkDiffs(),this._store.resetDashboardState())}async _panelLoaded(){if(this._notCompatible)return;const e=await this._panelResolver.element;if(!e.route)return;const t=e.route?.path??window.location.pathname;if(!t)return;const i=this._panelsList;t&&i&&setTimeout(()=>{this._diffCheck&&this.firstSetUpDone&&this.setupConfigDone&&(Et(t,i),t===$.LOVELACE_DASHBOARD&&this._store._subscribePanels())},100)}async _checkUserSidebarSettings(){const e=await Lo(this.hass.connection,"sidebar");this._userHasSidebarSettings=e?.panelOrder&&e.panelOrder.length>0||!1}async _setupConfigBtn(){const t=await this._sidebar.selector.$.element,i=t?.querySelector(e.ITEM_PROFILE)||t?.querySelector(e.USER_ITEM);i&&(this._userHasSidebarSettings?Ct(i,this._dialogManager._addDialogUserDataClear.bind(this._dialogManager)):Ct(i,this._dialogManager._showConfigDialogEditor.bind(this._dialogManager)))}async _getContainerItems(i,n){n||(n={retries:100,delay:50,shouldReject:!1});return await se(()=>i.querySelectorAll(`${t.ITEM}`),t=>Array.from(t).every(t=>t.querySelector(e.ITEM_TEXT).innerText.trim().length>0),n)}_storageListener(e){if(e.key===Is(D.COLLAPSE)){const t=JSON.parse(e.newValue);this.collapsedItems=new Set(t),this._handleCollapsed(this.collapsedItems)}}async _handleHaEvents(e){if(this._notCompatible)return;e.stopPropagation();const{type:i,detail:n}=e;if(i&&n)switch(i){case P.HASS_EDIT_SIDEBAR:!0!==n.editMode||this._hasSidebarConfig||this._dialogManager._addLegacyEditWarning();break;case P.SETTHEME:this._styleManager.removeStyle(this.sideBarRoot),setTimeout(()=>{this._addAdditionalStyles(this._config.color_config)},100);break;case P.DEFAULT_PANEL:break;case P.SHOW_DIALOG:n.dialogTag===t.DIALOG_EDIT_SIDEBAR&&this._dialogManager._handleEditModeAttempt();break;case P.SIDEBAR_CONFIG_SAVED:this._handleNewConfig(n.config,n.useConfigFile,n.configSource,n.profileUserId)}}async _getConfig(){const e=await Fd(this.hass);e&&(this._config=e)}_setupInitialConfig(){console.groupCollapsed("%cSIDEBAR-ORGANIZER:%c ℹ️ Setting from config...","color: #bada55;","color: #228be6; ");const{default_collapsed:e,custom_groups:t,bottom_groups:i,color_config:n,bottom_items:o,bottom_grid_items:s,pinned_groups:r}=this._config;this._configPanelMap=new Map(Object.entries({...t||{},...i||{},...o?{[J.BOTTOM_ITEMS]:o}:{},...s?{[J.BOTTOM_GRID_ITEMS]:s}:{}})),this._pinnedGroups=eh(r||{});const a={...t||{},...i||{}};this.collapsedItems=Jd(a,e),this._addCustomWidthStyle(),this._addAdditionalStyles(n),this._setupPanelOrder()}_setupPanelOrder(){Promise.all([this._sidebar.selector.$.element,this._sidebar.selector.$.query(e.SIDEBAR_BEFORE_SPACER_CONTAINER).element]).then(o=>{const[s,r]=o;if(!(s&&r instanceof HTMLElement))return;const{new_items:a,move_settings_from_fixed:l,notification:c,hidden_items:d,visibility_templates:h}=this._config,u=new Map(Object.entries(c||{})),f=new Map(Object.entries(h?.groups||{})),p=new Map(Object.entries(h?.items||{}));if(a&&a.length>0&&(Array.from(a).map(e=>{const t=this._createNewItem(e);t&&r.appendChild(t)}),console.debug("New items added to sidebar:",a)),!0===l){const t=s.querySelector(e.SETTINGS_ITEM);t&&(r.appendChild(t),console.debug("Settings item moved from fixed:",l))}this._getContainerItems(r).then(o=>{Array.from(o).forEach(e=>{if(e.hasAttribute(n.NEW_ITEM))return;const t=e.href.replace("/","");e.setAttribute(n.DATA_PANEL,t),d?.includes(t)&&(e.style.display="none");const i=u.get(t);void 0!==i&&this._subscribeNotification(e,i)});const s=Array.from(o).map(e=>e.getAttribute(n.DATA_PANEL)||e.href.replace("/",""));if(this._baseOrder=this._reorderPanelItemsByConfig(s),0===this._configPanelMap.size)return;const a=document.createDocumentFragment(),l=document.createDocumentFragment(),c=document.createDocumentFragment(),h=document.createDocumentFragment(),g=e=>this._getGroupOfPanel(e),_=is(this.hass),m=[],b=[];if(this._baseOrder.forEach(e=>{const t=Array.from(o).find(t=>t.getAttribute(n.DATA_PANEL)===e);if(t){const o=g(e),s=t.hasAttribute(n.NEW_ITEM),r=o&&(e=>f.has(e))(o)?f.get(o):null,d=(i=e,p.has(i)?p.get(e):null),u=r||d;if(u&&(b.push({panelId:e,source:r?"group":"item",template:u}),this._subscribeVisibility(t,u)),s||o===J.BOTTOM_GRID_ITEMS){const e=Cs(t);o===J.BOTTOM_GRID_ITEMS&&e.setAttribute(n.GRID_ITEM,""),t.insertAdjacentElement("afterend",e)}const y=o&&this._config.bottom_groups&&o in this._config.bottom_groups;o===J.BOTTOM_ITEMS||o===J.BOTTOM_GRID_ITEMS?o===J.BOTTOM_ITEMS?(t.setAttribute(n.BOTTOM,""),c.appendChild(t)):o===J.BOTTOM_GRID_ITEMS&&(t.setAttribute(n.GRID_ITEM,""),h.appendChild(t)):y?(t.setAttribute(n.GROUP,o),t.setAttribute(n.BOTTOM,""),c.appendChild(t)):o?(o!==J.UNCATEGORIZED_ITEMS&&t.setAttribute(n.GROUP,o),a.appendChild(t)):e===_?(t.setAttribute(n.DEFAULT_PANEL,""),a.prepend(t)):l.appendChild(t),m.push({...$t(t),group:o||"uncategorized"})}else;var i}),b.length>0&&console.groupCollapsed("Panels with visibility templates:",b.length),console.table(b),console.groupEnd(),console.groupCollapsed("Ordering panels based on config:",this._baseOrder.length,"panels"),console.table(m),console.groupEnd(),(l.children.length>0||a.children.length>0)&&(r.appendChild(a),r.appendChild(l)),c.children.length>0||h.children.length>0){const n=(e,t)=>{if(0===t.children.length)return null;const n=e===J.BOTTOM_ITEMS?i.BOTTOM_CONTAINER:i.BOTTOM_GRID_CONTAINER,o=document.createElement("div");return o.classList.add(n),o.appendChild(t),o},o=n(J.BOTTOM_ITEMS,c),s=n(J.BOTTOM_GRID_ITEMS,h);if(o||s){const n=document.createElement(t.HA_LIST_NAV);n.classList.add(i.BOTTOM_LIST),o&&n.appendChild(o),s&&(n.appendChild(s),this._sidebarObserver.disconnect(),this._sidebarObserver.observe(this.HaSidebar,{attributes:!0,childList:!1,attributeOldValue:this.HaSidebar.hasAttribute("expanded"),subtree:!1}),this._changeGridItemTooltipPlacement(this.HaSidebar.hasAttribute("expanded")));const r=this._panelsList.querySelector(e.SPACER);this._panelsList.insertBefore(n,r.nextElementSibling)}console.debug("%cSIDEBAR-ORGANIZER:%c ✅ Bottom items added to sidebar","color: #bada55;","color: #40c057;")}console.groupEnd()})})}_processSections(){this._getElements().then(async e=>{const{custom_groups:o,bottom_groups:s,visibility_templates:r}=this._config,{topItemsContainer:a,topItems:l,bottomItemsContainer:c,bottomItems:d}=e,h=new Map(Object.entries(r?.groups||{}));this._sidebarItems=[...Array.from(l),...d?Array.from(d):[]],Object.entries(o||{}).forEach(([e,t])=>{if(e===J.UNCATEGORIZED_ITEMS)return;const o=h.has(e)?h.get(e):null,s=this.collapsedItems.has(e);t.forEach((t,r)=>{const a=Array.from(l).find(e=>e.getAttribute(n.DATA_PANEL)===t);if(a){if(0===r){const t=this._createDividerWithGroup(e,s);o&&this._subscribeVisibility(t,o),a.insertAdjacentElement("beforebegin",t)}a.classList.toggle(i.COLLAPSED,s)}})});const u=a.querySelector(`${t.ITEM}:not([${n.GROUP}]):not([${n.DEFAULT_PANEL}])`);if(u){const e=this._createDivider(n.UNGROUPED);u.insertAdjacentElement("beforebegin",e)}c&&s&&Object.entries(s).forEach(([e,t])=>{const o=this.collapsedItems.has(e),s=h.has(e)?h.get(e):null;t.forEach((t,r)=>{const a=d?Array.from(d).find(e=>e.getAttribute(n.DATA_PANEL)===t):null;if(a){if(0===r){const t=this._createDividerWithGroup(e,o);s&&this._subscribeVisibility(t,s),a.insertAdjacentElement("beforebegin",t)}a.classList.toggle(i.COLLAPSED,o)}})}),c&&c.children.length>0&&Array.from(c.children).forEach(e=>{if(e instanceof HTMLElement&&!e.getAttribute(n.GROUP)&&!e.classList.contains("divider")){const t=this._createDivider(n.BOTTOM);e.insertAdjacentElement("afterend",t)}}),await kt(),this._checkDiffs(),this._handleSidebarHeader(),this.setupConfigDone=!0,this._watchHaSidebarShouldUpdate(),this._panelLoaded()})}async _getElements(){const t={retries:100,delay:50,shouldReject:!1},i=await this._sidebar.selector.$.element;i&&await se(()=>i.querySelector(e.SIDEBAR_LOADER),e=>null===e,t);const n=await this._sidebar.selector.$.query(e.SIDEBAR_BEFORE_SPACER_CONTAINER).element,o=await this._sidebar.selector.$.query(e.SIDEBAR_BOTTOM_LIST_CONTAINER).element;return{topItemsContainer:n,topItems:await this._getContainerItems(n,t),bottomItemsContainer:o,bottomItems:o?await this._getContainerItems(o,t):null}}_handleSidebarHeader(){const n=this.sideBarRoot?.querySelector(e.MENU),o=n?.querySelector(e.MENU_TITLE);if(!o)return;const s=this._config.header_title;if(s&&(o.innerText=s),o.classList.add("toggle"),this._config.hide_header_toggle)return;const r=Object.keys(this._config?.custom_groups||{}),l=Object.values(this._config.custom_groups||{}).flat().length>0;if(0===r.length||!l)return;const c=this.collapsedItems.size===r.length,d=document.createElement(t.HA_ICON);d.icon=c?a.PLUS:a.MINUS,d.classList.add(i.COLLAPSE_TOGGLE),d.classList.toggle(i.ACTIVE,c),d.style.touchAction="manipulation";d.addEventListener("pointerup",e=>{e.stopPropagation(),e.cancelable&&e.preventDefault(),this.collapsedItems.size===r.length?this.collapsedItems.clear():this.collapsedItems=new Set(r),this._handleCollapsed(this.collapsedItems)},{passive:!1}),o.querySelector(`.${i.COLLAPSE_TOGGLE}`)?.remove(),o.appendChild(d)}_handleCollapsedChange(){const t=this.sideBarRoot?.querySelector(e.HEADER_TOGGLE_ICON);if(!t)return;const n=this.collapsedItems.size===Object.keys(this._config?.custom_groups||{}).length;t.classList.toggle(i.ACTIVE,n),t.setAttribute("icon",n?a.PLUS:a.MINUS)}_subscribeTemplate(e,t){this.hass&&bu(e)&&gu(this.hass.connection,e=>{t(e.result)},{template:e,variables:{config:e,user:this.hass.user.name},strict:!0})}_handleNewConfig(e,t,i,n){if("home_assistant_profile"===i&&void 0!==n&&n!==this.hass.user?.id)return;if(t||"home_assistant_config"===i||"home_assistant_profile"===i)return void this._reloadWindow();if(JSON.stringify(e)!==JSON.stringify(this._config)){this._config=e;(()=>new Promise(e=>{Ts(D.UI_CONFIG,this._config),ks(D.PANEL_ORDER),ks(D.HIDDEN_PANELS),e()}))().then(()=>{this._reloadWindow()})}}async _handleCollapsed(t){Ts(D.COLLAPSE,[...t]),await kt(),this._handleCollapsedChange(),Array.from(this._sidebarItems).filter(e=>e.hasAttribute(n.GROUP)).forEach(e=>{const o=e.getAttribute(n.GROUP),s=t.has(o);e.classList.toggle(i.COLLAPSED,s)}),this._panelsList.querySelectorAll(e.DIVIDER_ADDED).forEach(o=>{const s=o.getAttribute(n.GROUP),r=t.has(s);o.classList.toggle(i.COLLAPSED,r),o.querySelector(e.ADDED_CONTENT)?.classList.toggle(i.COLLAPSED,r)})}_addCustomWidthStyle(){this._config.width&&Promise.all([this._haMain.element]).then(e=>{const[t]=e,{width:i}=this._config,n=this._store._utils.CONFIG._computeWidth(i);n?(t.style.setProperty(C.CUSTOM_SIDEBAR_WIDTH,n),console.debug("Custom sidebar width applied:",n),this._styleManager.addStyle([xp.toString()],t.shadowRoot)):console.debug("❌ Invalid custom width, skipping applying custom width style:",i)})}_addAdditionalStyles(e,t){t=t||(this.darkMode?"dark":"light");const i=e?.custom_theme?.theme||void 0;i&&Z(this.HaSidebar,this.hass,i,t);const n=e?.[t]||{},o=e?.border_radius?`${e.border_radius}px`:void 0,s=o?"4px 4px":"1px 4px 0px",r=this._config?.text_transformation||"capitalize",a=n.custom_styles||[],l=su(a)||"",c=au(void 0!==i?this.HaSidebar:void 0),d=e=>n?.[e]?`${n[e]} !important`:c[e],h=!0===this._config?.force_transparent_background,u={[C.DIVIDER_COLOR]:d("divider_color"),[C.DIVIDER_BG_COLOR]:d("background_color"),[C.DIVIDER_BORDER_TOP_COLOR]:d("border_top_color"),[C.SCROLLBAR_THUMB_COLOR]:d("scrollbar_thumb_color"),[C.SIDEBAR_BACKGROUND_COLOR]:d("custom_sidebar_background_color"),[C.DIVIDER_BORDER_RADIUS]:o,[C.DIVIDER_MARGIN_RADIUS]:s,[C.SIDEBAR_TEXT_COLOR]:d("divider_text_color"),[C.SIDEBAR_TEXT_TRANSFORM]:r};h&&(u[C.SIDEBAR_BACKGROUND_COLOR]=E.TRANSPARENT,u[C.SO_TOOLTIP_BACKGROUND_COLOR]=E.PRIMARY_BACKGROUND_COLOR,u[C.SO_TOOLTIP_TEXT_COLOR]=E.PRIMARY_TEXT_COLOR,u[C.SO_BACKDROP_FILTER]=E.BLUR_10PX,this._styleManager.addStyle([Ip.toString()],this._haDrawer.shadowRoot));const f=`:host {${Object.entries(u).map(([e,t])=>`${e}: ${t};`).join("")}}`;this._styleManager.addStyle([f,l,Op.toString()],this.sideBarRoot)}_reorderPanelItemsByConfig(e){const t=is(this.hass),i=this._config.custom_groups||{},n=this._config.bottom_groups||{},o=this._config.bottom_items||[],s=this._config.bottom_grid_items||[],r=Object.values(n).flat(),a=Object.values(i).flat().filter(t=>e.includes(t)),l=e.filter(e=>!(a.includes(e)||o.includes(e)||s.includes(e)||r.includes(e))),c=l.find(e=>e===t);c&&(l.splice(l.indexOf(c),1),a.unshift(c));return[...a,...l,...o,...s,...r]}_watchHaSidebarShouldUpdate(){this.hass&&customElements.get(t.HA_SIDEBAR)&&customElements.whenDefined(t.HA_SIDEBAR).then(e=>{const t=e.prototype.shouldUpdate;e.prototype.shouldUpdate=function(e){return this.hass.config.state===l.RUNNING&&t.call(this,e)}})}_changeGridItemTooltipPlacement(t){this._scrollbar.querySelectorAll(`${e.HA_TOOLTIP}[${n.GRID_ITEM}]`).forEach(e=>{e.placement=t?"top":"right"})}_createNewItem(e,t=!1){const i=ys(this.hass,e,t);return void 0!==e.notification&&this._subscribeNotification(i,e.notification),void 0!==e.icon_template&&this._subscribeIconTemplate(i,e.icon_template),i}_subscribeNotification(t,o){let s=t.querySelector(e.BADGE)??vs(),r=t.querySelector(e.NOTIFY_ICON)??ws();const a=t.querySelector(e.ITEM_TEXT);t.insertBefore(s,a.nextElementSibling),t.insertBefore(r,a),t.setAttribute(n.DATA_NOTIFICATION,"true");this._subscribeTemplate(o,e=>{null!=e&&""!==String(e).trim()?"string"==typeof e&&Kd(e)?(r.classList.toggle(i.NO_VISIBLE,!1),r.setAttribute("icon",e),s.classList.toggle(i.NO_VISIBLE,!0),s.remove()):(s.innerHTML=e,s.classList.toggle(i.NO_VISIBLE,!1),s.classList.toggle(i.BADGE_NUMBER,!isNaN(e)),s.classList.toggle(i.LARGE_BADGE,e.length>=3),r.classList.toggle(i.NO_VISIBLE,!0),r.removeAttribute("icon"),r.remove()):(r.classList.toggle(i.NO_VISIBLE,!0),r.removeAttribute("icon"),s.innerHTML="",s.classList.toggle(i.NO_VISIBLE,!0))})}_subscribeVisibility(e,t){this._subscribeTemplate(t,t=>{if(null!=t){("string"==typeof t?"true"===t.toLowerCase():Boolean(t))??!0?e.style.removeProperty("display"):e.style.display="none"}})}_subscribeIconTemplate(e,i){this._subscribeTemplate(i,i=>{if(null!=i&&Kd(i)){e.querySelector(t.HA_ICON).setAttribute("icon",i)}})}_toggleGroup(t){t.stopPropagation();const o=this._config?.animation_off||!1,s=this._config?.animation_delay||50,r=t.target,a=r.getAttribute("group"),l=Array.from(this._scrollbarItems).filter(e=>e.getAttribute("group")===a&&!e.hasAttribute("moved"));if(!l.length)return;const c=l[0].classList.contains(i.COLLAPSED);if(this._config?.accordion_mode&&c&&this.setupConfigDone){[...Object.keys(this._config?.custom_groups||{}),...Object.keys(this._config?.bottom_groups||{})].forEach(t=>{if(t!==a&&!this.collapsedItems.has(t)){const o=Array.from(this._scrollbarItems).filter(e=>e.getAttribute("group")===t&&!e.hasAttribute("moved"));if(!o.length)return;this.collapsedItems.add(t);const s=this._panelsList.querySelector(`${e.DIVIDER_ADDED}[${n.GROUP}="${t}"]`);s&&(s.classList.add(i.COLLAPSED),s.querySelector(e.ADDED_CONTENT)?.classList.add(i.COLLAPSED)),o.forEach(e=>e.classList.add(i.COLLAPSED))}})}this._setItemToLocalStorage(a,!c),r.classList.toggle(i.COLLAPSED,!c),r.parentElement?.classList.toggle(i.COLLAPSED,!c),o?l.forEach(e=>{e.classList.toggle(i.COLLAPSED,!c)}):l.forEach((e,t)=>{const n=c?"slideIn":"slideOut";e.style.animationDelay=t*s+"ms",e.classList.add(n),e.addEventListener("animationend",()=>{e.classList.toggle(i.COLLAPSED,!c),e.classList.remove(n)},{once:!0})})}_setItemToLocalStorage(e,t){t?this.collapsedItems.add(e):this.collapsedItems.delete(e),Ts(D.COLLAPSE,[...this.collapsedItems]),this._handleCollapsedChange()}_reloadWindow(e=1e3){this._store._showToast("Reloading window to apply changes..."),setTimeout(()=>{window.location.reload()},e)}}window.SidebarOrganizer||(window.SidebarOrganizer=new kp);var Np=Object.freeze({__proto__:null,SidebarOrganizer:kp}),$p="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z",Lp="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",Dp="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",Pp="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",Rp="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z",Mp="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M8.88,7.82L11,9.94L9.94,11L8.88,9.94L7.82,11L6.76,9.94L8.88,7.82M12,17.5C9.67,17.5 7.69,16.04 6.89,14H17.11C16.31,16.04 14.33,17.5 12,17.5M16.18,11L15.12,9.94L14.06,11L13,9.94L15.12,7.82L17.24,9.94L16.18,11Z",Hp="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z",Gp="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z",Bp="M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z",jp="M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M11,5A4,4 0 0,1 15,9C15,10.5 14.2,11.77 13,12.46V11.24C13.61,10.69 14,9.89 14,9A3,3 0 0,0 11,6A3,3 0 0,0 8,9C8,9.89 8.39,10.69 9,11.24V12.46C7.8,11.77 7,10.5 7,9A4,4 0 0,1 11,5Z",Up="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z",Fp="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",Vp="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",zp="M22 7V16C22 17.1 21.1 18 20 18H6L2 22V4C2 2.9 2.9 2 4 2H14.1C14 2.3 14 2.7 14 3S14 3.7 14.1 4H4V16H20V7.9C20.7 7.8 21.4 7.4 22 7M16 3C16 4.7 17.3 6 19 6S22 4.7 22 3 20.7 0 19 0 16 1.3 16 3Z",qp="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z",Wp="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z",Kp="M9.25,5L12.5,1.75L15.75,5H9.25M15.75,19L12.5,22.25L9.25,19H15.75M8.89,14.3H6L5.28,17H2.91L6,7H9L12.13,17H9.67L8.89,14.3M6.33,12.68H8.56L7.93,10.56L7.67,9.59L7.42,8.63H7.39L7.17,9.6L6.93,10.58L6.33,12.68M13.05,17V15.74L17.8,8.97V8.91H13.5V7H20.73V8.34L16.09,15V15.08H20.8V17H13.05Z";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Yp={ATTRIBUTE:1,CHILD:2},Jp=e=>(...t)=>({_$litDirective$:e,values:t});let Xp=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zp="important",Qp=" !"+Zp,eg=Jp(class extends Xp{constructor(e){if(super(e),e.type!==Yp.ATTRIBUTE||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const n=e[i];return null==n?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const n=t[e];if(null!=n){this.ft.add(e);const t="string"==typeof n&&n.endsWith(Qp);e.includes("-")||t?i.setProperty(e,t?n.slice(0,-11):n,t?Zp:""):i[e]=n}}return Ze}}),tg=ue`
  :host *[hidden] {
    display: none;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  *::-webkit-scrollbar {
    width: 0.2em;
    height: 0.2em;
  }
  *::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
  }

  :host ha-expansion-panel .container.expanded {
    background-color: var(--primary-background-color) !important;
  }

  .config-content {
    display: flex;
    flex-direction: column;
    gap: var(--side-dialog-gutter);
    margin-top: 1rem;
    min-height: 250px;
  }

  .group-list {
    /* border-block: solid 1px var(--divider-color); */
    border-block: 0.5px solid var(--divider-color);
    --mdc-icon-button-size: 42px;
  }
  .group-header {
    height: var(--data-table-row-height, 52px);
    padding-left: 12px;
    padding-inline-start: 12px;
    padding-inline-end: initial;
    width: 100%;
    font-weight: var(--ha-font-weight-medium);
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: var(--primary-background-color);
  }
  .group-header[uncategorized] {
    background-color: var(--disabled-color);
  }
  .group-item-row {
    position: relative;
    /* width: 100%; */
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin-block: var(--side-dialog-gutter);
  }

  .group-item-row .handle {
    cursor: grab;
    color: var(--secondary-text-color);
    margin-inline-end: var(--side-dialog-padding);
    flex: 0 0 42px;
  }
  .group-name {
    flex: 1 1 auto;
    gap: var(--side-dialog-padding);
    display: flex;
    align-items: center;
  }
  .group-name:hover * {
    cursor: pointer;
    color: var(--primary-color) !important;
  }
  .group-name > ha-icon {
    color: var(--secondary-text-color);
  }
  .group-name-items {
    display: flex;
    flex-direction: column;
  }

  .group-name-items span {
    font-size: 0.8rem;
    color: var(--secondary-text-color);
    line-height: 0.8rem;
  }

  .group-actions {
    display: flex;
    /* gap: 8px; */
    align-items: center;
    /* opacity: 1 !important; */
    margin-inline: var(--side-dialog-gutter);
    color: var(--secondary-text-color);
  }

  /* .group-actions > ha-icon-button {
    color: var(--secondary-text-color);
    --mdc-icon-button-size: 36px;
  } */
  .header-row {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    --mdc-icon-button-size: 42px;
    height: auto;
  }
  .header-row.center {
    justify-content: center;
  }
  .header-row.flex-end {
    justify-content: flex-end;
  }

  .header-row.flex-icon {
    justify-content: flex-end;
    background-color: var(--divider-color);
    min-height: 42px;
  }
  .header-row.flex-icon > span {
    margin-inline-start: 0.5rem;
    flex: 1;
  }
  .header-row.flex-icon > ha-icon {
    margin-inline-end: 0.5rem;
    flex: 0;
  }

  .sortable-ghost {
    opacity: 0.5;
    background-color: var(--primary-color);
  }

  #items-preview-wrapper {
    display: flex;
    flex-direction: row;
    gap: var(--side-dialog-gutter);
    justify-content: center;
  }
  @media all and (max-width: 700px), all and (max-height: 500px) {
    #items-preview-wrapper {
      flex-wrap: wrap;
    }
  }
  .items-container {
    display: block;
    border: 1px solid var(--divider-color);
    flex: 1 1 100%;
    height: 100%;
  }
  .selector-container {
    display: block;
    max-height: 300px;
    overflow: auto;
    padding: 6px 4px;
  }
  .preview-container {
    min-width: 230px;
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid var(--divider-color);
    /* display: block; */
  }
  ul.selected-items {
    list-style-type: none;
    padding-inline-start: 0px;
    font-family: monospace;
    color: var(--codemirror-atom);
    text-align: center;
    line-height: 150%;
    margin: 0;
  }
  ul.selected-items li {
    padding: 0.5rem;
    border-bottom: 0.5px solid var(--divider-color);
    display: flex;
    align-items: anchor-center;
  }
  ul.selected-items li:last-child {
    border-bottom: none;
  }

  ul.selected-items li .handle {
    cursor: grab;
    flex: 0 0 42px;
    color: var(--secondary-text-color);
    margin-inline-end: var(--side-dialog-padding);
  }
  ul.selected-items li .handle:hover {
    cursor: grabbing;
  }

  code {
    font-family: monospace;
    background-color: var(--code-editor-background-color);
    color: var(--codemirror-atom);
    border: 0.5px solid var(--divider-color);
    padding: 2px 4px;
    font-size: inherit;
    text-align: center;
    line-height: 150%;
  }

  pre.rendered {
    clear: both;
    white-space: pre-wrap;
    background-color: var(--secondary-background-color);
    padding: 8px;
    margin-top: 0px;
    margin-bottom: 0px;
    direction: ltr;
    overflow: auto;
    max-height: calc(var(--code-mirror-max-height) - 30px);
  }

  .data-table {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .item-row {
    display: flex;
    height: 42px;
    width: 100%;
    align-items: center;
    border-top: 0.5px solid var(--divider-color);
    &:hover {
      background-color: var(--secondary-background-color);
      color: var(--primary-text-color);
    }
  }

  .item-row.top {
    border-top: none;
    user-select: none;
    background-color: var(--primary-background-color);
    color: var(--secondary-text-color);
  }
  .top .cell {
    font-weight: var(--ha-font-weight-medium);
  }

  .cell {
    font-family: var(--ha-font-family-body);
    -webkit-font-smoothing: var(--ha-font-smoothing);
    line-height: var(--ha-line-height-condensed);
    font-weight: var(--ha-font-weight-normal);
    letter-spacing: 0.0178571em;
    text-decoration: inherit;
    text-transform: inherit;
    padding-right: 16px;
    padding-left: 16px;
    min-width: 150px;
    align-self: center;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 0;
    box-sizing: border-box;
    flex: 1;
  }
  .cell.icon {
    min-width: 56px;
    flex: 0 0 56px !important;
    display: flex;
    justify-content: center;
    color: var(--secondary-text-color);
    text-align: center;
  }

  .grows {
    flex-grow: 1;
    flex-shrink: 1;
  }
  .cell[square] {
    min-width: 80px;
    flex: 0 0 80px !important;
    display: flex;
    justify-content: center;
    color: var(--secondary-text-color);
    text-align: center;
  }
`;class ig extends mt{constructor(e){super(),this._utils=mf,this._getPanelNotification=e=>{const t=this._config?.notification?.[e];return t},this._getPanelInfo=e=>{const t=this.hass,i=t.panels||{},n=this._getPanelNotification(e);return this._dialog?._newItemMap?.has(e)?{...this._dialog._newItemMap.get(e),component_name:"new-item"}:{...i[e],icon:i[e]?.icon||"mdi:help-circle-outline",title:this._utils.PANEL.getPanelTitleFromUrlPath(t,e)||i[e]?.title||e,notification:n}},this._computePanelInfoList=e=>(e||this._dialog._initCombiPanels).map(e=>({...this._getPanelInfo(e),group:this._dialog._getGroupOfPanel(e)||void 0,show_in_sidebar:!this._config?.hidden_items?.includes(e)})),e&&(this._configArea=e),this._styleManager=new Cp({namespace:"sidebar-dialog",throwWarnings:!1})}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return tg}get _dialog(){return this._store.editorDialog}get _config(){return this._store.sidebarConfig}get narrow(){return this._dialog._narrow}get _panelsWithoutNewItems(){const e=this._config?.new_items?.map(e=>e.title)||[];return this._dialog._initCombiPanels.filter(t=>!e.includes(t))}_renderSpacerDiv(){return Xe`<div style="flex: 1;"></div>`}_computeSelectorOptions(e,t="list",i=!0,n=!0){const o=this._utils.PANEL.getDefaultPanelUrlPath(this.hass);return{select:{multiple:!0,mode:t,options:e.map(e=>{const t=e===o,i=!(!t||n);return{value:e,label:(this._utils.PANEL.getPanelTitleFromUrlPath(this.hass,e)||e)+(t?" (default)":""),disabled:i}}),sort:!0,reorder:i}}}_createHaSelector(e,t,i,n){return Xe`<ha-selector
      .hass=${this.hass}
      .value=${t}
      .selector=${e}
      .required=${!1}
      .key=${i}
      .subKey=${n}
      id=${yt(void 0!==i?`selector-${i}`:void 0)}
      @value-changed=${this._handleSelectorChange}
    ></ha-selector>`}_handleSelectorChange(e){console.debug("selector change from BaseEditor",e),e.stopPropagation();const{key:t,subKey:i}=e.target,n=e.detail.value;console.debug("value changed:",n,"key:",t,"subKey:",i)}_configChanged(e){console.debug("incoming change from:",this._configArea);const t={...this._config,...e};lu(this,"sidebar-config-changed",{config:t})}}ih([lh({attribute:!1})],ig.prototype,"hass",void 0),ih([lh({attribute:!1})],ig.prototype,"_store",void 0),ih([lh({attribute:!1})],ig.prototype,"_utils",void 0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{I:ng}=ft,og=()=>document.createComment(""),sg=(e,t,i)=>{const n=e._$AA.parentNode,o=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=n.insertBefore(og(),o),s=n.insertBefore(og(),o);i=new ng(t,s,e,e.options)}else{const t=i._$AB.nextSibling,s=i._$AM,r=s!==e;if(r){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==s._$AU&&i._$AP(t)}if(t!==o||r){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;n.insertBefore(e,o),e=t}}}return i},rg=(e,t,i=e)=>(e._$AI(t,i),e),ag={},lg=(e,t=ag)=>e._$AH=t,cg=e=>e._$AH,dg=e=>{e._$AR(),e._$AA.remove()},hg=(e,t,i)=>{const n=new Map;for(let o=t;o<=i;o++)n.set(e[o],o);return n},ug=Jp(class extends Xp{constructor(e){if(super(e),e.type!==Yp.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let n;void 0===i?i=t:void 0!==t&&(n=t);const o=[],s=[];let r=0;for(const t of e)o[r]=n?n(t,r):r,s[r]=i(t,r),r++;return{values:s,keys:o}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,n]){const o=cg(e),{values:s,keys:r}=this.dt(t,i,n);if(!Array.isArray(o))return this.ut=r,s;const a=this.ut??=[],l=[];let c,d,h=0,u=o.length-1,f=0,p=s.length-1;for(;h<=u&&f<=p;)if(null===o[h])h++;else if(null===o[u])u--;else if(a[h]===r[f])l[f]=rg(o[h],s[f]),h++,f++;else if(a[u]===r[p])l[p]=rg(o[u],s[p]),u--,p--;else if(a[h]===r[p])l[p]=rg(o[h],s[p]),sg(e,l[p+1],o[h]),h++,p--;else if(a[u]===r[f])l[f]=rg(o[u],s[f]),sg(e,o[h],o[u]),u--,f++;else if(void 0===c&&(c=hg(r,f,p),d=hg(a,h,u)),c.has(a[h]))if(c.has(a[u])){const t=d.get(r[f]),i=void 0!==t?o[t]:null;if(null===i){const t=sg(e,o[h]);rg(t,s[f]),l[f]=t}else l[f]=rg(i,s[f]),sg(e,o[h],i),o[t]=null;f++}else dg(o[u]),u--;else dg(o[h]),h++;for(;f<=p;){const t=sg(e,l[p+1]);rg(t,s[f]),l[f++]=t}for(;h<=u;){const e=o[h++];null!==e&&dg(e)}return this.ut=r,lg(e,l),Ze}}),fg=[{name:"hide_header_toggle",label:"Hide expand/collapse button",helper:"Remove the header button that opens or closes every sidebar group."},{name:"animation_off",label:"Disable group animation",helper:"Open and close groups immediately instead of animating each panel."},{name:"move_settings_from_fixed",label:"Make Settings movable",helper:"Allow Settings to be placed in a group instead of always staying fixed at the bottom.",default:!1},{name:"force_transparent_background",label:"Transparent sidebar background",helper:"Let the dashboard background show through the sidebar."},{name:"accordion_mode",label:"Keep only one group open",helper:"Opening a group automatically closes the other groups."}],pg=e=>{e||(e=fg.map(e=>e.name));const t=[];return e.forEach(e=>{const i=fg.find(t=>t.name===e);i&&t.push({name:i.name,label:i.label,helper:i.helper,default:i.default||!1,type:"boolean"})}),t},gg=To(e=>{const t=!0===e?.animation_off;return[{title:"Appearance Settings",type:"expandable",expanded:!0,flatten:!0,icon:"mdi:format-text",schema:[{type:"grid",schema:[{name:"header_title",label:"Sidebar title",helper:"Text shown at the top of the sidebar.",type:"string"},...pg(["hide_header_toggle","animation_off"]),...t?[]:[{name:"animation_delay",label:"Animation Delay (ms)",selector:{number:{min:0,max:100,step:10,mode:"slider",unit_of_measurement:"ms"}},helper:"Time between each panel appearing when a group opens. Lower is faster.",default:50,disabled:t}],...pg(["move_settings_from_fixed","force_transparent_background","accordion_mode"]),{name:"text_transformation",label:"Text Transformation",default:"capitalize",helper:"Choose how group names are capitalized.",selector:{select:{mode:"dropdown",options:[...K.map(e=>({value:e,label:e.charAt(0).toUpperCase()+e.slice(1)}))]}}},{name:"width",label:"Custom Width",helper:"Optional sidebar width, for example 300px or 20%. Leave blank to use Home Assistant’s default.",type:"string"}]}]}]}),_g=["light","dark"],mg=(e=!1)=>[{name:"custom_theme",title:"Custom Theme & Force Mode",icon:"mdi:palette",type:"expandable",expanded:!0,flatten:!1,schema:[{name:"",type:"grid",flatten:!1,schema:[{name:"theme",label:"Custom Theme",required:!1,selector:{theme:{include_default:!1}}},{name:"mode",label:"Force Mode",required:!1,disabled:e,selector:{select:{mode:"dropdown",options:_g.map(e=>({value:e,label:e.charAt(0).toUpperCase()+e.slice(1)}))}}}]}]}],bg=["more-info","toggle","navigate","url","perform-action","assist","none"],yg={tap_action:"Tap behavior",hold_action:"Hold behavior",double_tap_action:"Double tap behavior",icon_tap_action:"Icon tap behavior",icon_hold_action:"Icon hold behavior",icon_double_tap_action:"Icon double tap behavior"},vg=(e=!1)=>[{name:"",type:"optional_actions",flatten:!0,schema:(e?["hold_action","double_tap_action"]:["tap_action","hold_action","double_tap_action"]).map(e=>({name:e,label:yg[e],selector:{ui_action:{actions:bg,default_action:"none"}}}))}],wg={items:"Individual Items Configuration",groups:"Groups Configuration"},Ag={items:"Select an item",groups:"Select a group"},Cg={groups:"A group entry applies to all panels in the group.",items:"If a panel is included in a group with a visibility setting, the individual panel setting will be ignored in favor of the group setting."};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Qn((e,t)=>[{title:wg[e]||e,type:"expandable",expanded:!0,flatten:!1,required:!1,name:e,helper:Cg[e]||"",schema:[{name:"",selector:{object:{label_field:"name",description_field:"value",multiple:!0,fields:{name:{label:Ag[e]||"Name",selector:t,required:!1},value:{label:"Visibility Template",selector:{template:{preview:!0}},required:!1}}}}}]}]);const Eg=e=>e?vo(e.trim()):"Ungrouped";let Sg=class extends ig{constructor(){super(d.NEW_ITEMS),this._selectedItemIndex=null,this._selectedItem=null,this._yamlMode=!1,this._actionsSchema=[{title:"Interaction",type:"expandable",flatten:!0,iconPath:jp,schema:[{name:"entity",selector:{entity:{}},helper:"Entity to control when the button is pressed"},...vg()]}],this._notificationSchema=[{type:"expandable",title:"Notification badge template",iconPath:zp,expanded:!1,schema:[{name:"notification",selector:{template:{}}}]}],this._iconTemplateSchema=[{type:"expandable",title:"Icon template",iconPath:Mp,expanded:!1,schema:[{name:"icon_template",selector:{template:{}}}]}],this._configSchema=To(e=>[{type:"grid",schema:[{name:"icon",label:"Item Icon",selector:{icon:{}}},{name:"group",label:"Item Group",required:!1,selector:{select:{mode:"dropdown",options:e.length?e:[{value:"",label:"Ungrouped"}]}}}]}]),this._computeLabel=e=>{if("entity"===e.name&&!e.context?.group_entity)return;return vo((e.label||e.name||e.title||"").replace(/_/g," "))},this._computeHelper=e=>e.helper||void 0,this._handleDeleteItem=async e=>{const t=this._sidebarConfig.new_items[e].title;if(!await du(this,`Are you sure you want to delete the item "${t}"?`,"Delete"))return;const i=[...this._sidebarConfig.new_items||[]];i.splice(e,1),this._sidebarConfig={...this._sidebarConfig,new_items:i},this._handleRemoveItem(t),this._dispatchConfig(this._sidebarConfig),this.requestUpdate()},this._handleRemoveItem=e=>{const t=this.getGroupKey(e);if(t){const i=t=>{const i=t.indexOf(e);-1!==i&&t.splice(i,1)},n={...this._sidebarConfig},o={...n};if("bottom_items"===t){const e=[...n.bottom_items||[]];i(e),o.bottom_items=e}else{const e={...n.custom_groups},s=e[t]||[];i(s),e[t]=s,o.custom_groups=e}this._sidebarConfig=o}},this._toggleRenameItem=async e=>{const t=this._sidebarConfig.new_items[e].title;let i=await hu(this,"Enter new item title","Rename Item","Rename","Cancel");if(!i||""===i)return;if(i=i.trim(),this._sidebarConfig.new_items?.some(e=>e.title===i))return void await du(this,"Item with this name already exists. Do you want to edit it?","Edit","Cancel");const n=this.getGroupKey(t);if(n){const e={...this._sidebarConfig};if("bottom_items"===n){const n=[...this._sidebarConfig.bottom_items||[]],o=n.indexOf(t);-1!==o&&(n[o]=i),e.bottom_items=n}else{const o={...this._sidebarConfig.custom_groups},s=o[n]||[],r=s.indexOf(t);-1!==r&&(s[r]=i),o[n]=s,e.custom_groups=o}this._sidebarConfig=e}const o=[...this._sidebarConfig.new_items||[]];o[e]={...o[e],title:i},this._sidebarConfig={...this._sidebarConfig,new_items:o},this._dispatchConfig(this._sidebarConfig),this._selectedItemIndex=e,this.requestUpdate()},this._togglePromptNewItem=async()=>{let e=await hu(this,"Enter new item title","New Item","Add","Cancel");if(!e||""===e)return;if(e=e.trim(),this._sidebarConfig.new_items?.some(t=>t.title===e))return void await du(this,"Item with this name already exists. Do you want to edit it?","Edit","Cancel");const t={title:e,icon:`mdi:alpha-${e.charAt(0).toLowerCase()}-circle`},i=[...this._sidebarConfig.new_items||[]];i.push(t),this._sidebarConfig={...this._sidebarConfig,new_items:i},this._dispatchConfig(this._sidebarConfig),this._selectedItemIndex=i.length-1,this.requestUpdate()}}firstUpdated(e){super.firstUpdated(e)}updated(e){super.updated(e),e.has("_selectedItemIndex")&&(null!==this._selectedItemIndex?(this._selectedItem=this._sidebarConfig.new_items[this._selectedItemIndex],this._toggleItemInPreview(this._selectedItem.title)):(this._selectedItem=null,this._yamlMode=!1,this._dialog._dialogPreview._hightlightItem(null)))}get groupKeys(){const e=this._sidebarConfig?.custom_groups||{};return[{value:"bottom_items",label:"BOTTOM"},...Object.keys(e).map(e=>({value:e,label:e.replace(/_/g," ").toUpperCase()}))]}render(){if(!this.hass||!this._sidebarConfig)return Xe`<div>Loading...</div>`;const e=this._renderNewItemsList(),t=this._renderSelectedItem();return Xe` <div class="config-content">${null===this._selectedItemIndex?e:t}</div> `}_renderNewItemsList(){if(null!==this._selectedItemIndex)return Qe;const e=Xe` <ha-button size="s" @click=${this._togglePromptNewItem}>Add new item </ha-button> `,t=this._sidebarConfig?.new_items||[],i=Xe`
      ${t.length?Xe`
            <div class="group-list">
              ${ug(t,e=>e.title,(e,t)=>{const{icon:i,title:n}=e;return Xe`
                    <div class="group-item-row" style="padding-inline-start: 1rem">
                      <div class="group-name" @click=${()=>this._selectedItemIndex=t}>
                        <ha-icon .icon=${i}></ha-icon>
                        <div class="group-name-items">
                          ${n}
                          <span>${Eg(this.getGroupKey(n))}</span>
                        </div>
                      </div>
                      <div class="group-actions">
                        <ha-icon-button .label=${"Edit item"} @click=${()=>this._selectedItemIndex=t}>
                          <ha-icon icon="mdi:pencil"></ha-icon
                        ></ha-icon-button>
                        <ha-icon-button .label=${"Delete item"} @click=${this._handleDeleteItem.bind(this,t)}>
                          <ha-icon icon="mdi:trash-can-outline"></ha-icon
                        ></ha-icon-button>
                      </div>
                    </div>
                  `})}
            </div>
          `:Xe`<div>No new items added yet</div>`}
    `;return Xe`
      <div class="config-content">
        ${i}
        <div class="header-row flex-end">${e}</div>
      </div>
    `}_renderSelectedItem(){if(null===this._selectedItemIndex)return Qe;const e=vu.BTN_LABEL,t=this._sidebarConfig.new_items[this._selectedItemIndex],i=Xe` <div class="header-row">
      <ha-icon-button .path=${Lp} @click=${()=>this._selectedItemIndex=null}> </ha-icon-button>
    </div>`,n={...t},o=this.getGroupKey(t.title),s=Eg(o),r={icon:n?.icon,group:o},a=mo(n,["entity","tap_action","hold_action","double_tap_action"]),l={notification:n.notification},c={icon_template:n.icon_template},d=this.groupKeys,h=this._configSchema(d),u=this._actionsSchema,f=this._notificationSchema,p=this._iconTemplateSchema;return Xe`
      ${i}
      <div class="config-content">
        ${this._yamlMode?Xe`
              <ha-yaml-editor
                .hass=${this.hass}
                .defaultValue=${n}
                .copyToClipboard=${!0}
                .required=${!0}
                @value-changed=${e=>{const{isValid:t,value:i}=e.detail;t&&(this._sidebarConfig.new_items[this._selectedItemIndex]=i,this._dispatchConfig(this._sidebarConfig))}}
              ></ha-yaml-editor>
            `:Xe`
              <div class="group-item-row item-name-row">
                <div class="group-name">
                  <ha-icon .icon=${t.icon}></ha-icon>
                  <div class="group-name-items">
                    ${t.title}
                    <span>${s}</span>
                  </div>
                </div>
                <div class="group-actions">
                  <ha-button
                    appearance="plain"
                    size="s"
                    @click=${this._toggleRenameItem.bind(this,this._selectedItemIndex)}
                    >Rename</ha-button
                  >
                </div>
              </div>

              ${this._createHaForm(r,h,"base")}
              ${this._createHaForm(a,u,"actions")}
              ${this._createHaForm(l,f,"notification","notification-form")}
              ${this._createHaForm(c,p,"icon_template","icon-template-form")}
            `}
        <div class="header-row flex-end">
          <ha-button
            appearance="plain"
            size="s"
            @click=${()=>{this._yamlMode=!this._yamlMode}}
            >${this._yamlMode?e.SHOW_VISUAL_EDITOR:e.SHOW_CODE_EDITOR}</ha-button
          >
        </div>
      </div>
    `}getGroupKey(e){const{custom_groups:t={},bottom_items:i=[],bottom_grid_items:n=[]}=this._sidebarConfig;return ho({...t,bottom_items:i,bottom_grid_items:n},t=>t.includes(e))}_toggleItemInPreview(e){const t=this._dialog._getGroupOfPanel(e);t&&null!==t&&["bottom_items","bottom_grid_items"].includes(t)?this._dialog._dialogPreview._toggleBottomPanel(t):this._dialog._dialogPreview._toggleGroup(t),this._dialog._dialogPreview._hightlightItem(e)}_createHaForm(e,t,i,n){return Xe`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${t}
        .configKey=${i}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
        id=${yt(n||void 0)}
      >
      </ha-form>
    `}_valueChanged(e){if(e.stopPropagation(),null===this._selectedItemIndex)return;const t=this._selectedItemIndex,i={...this._sidebarConfig.new_items[t]},n=e.detail.value,o=e.target.configKey;let s={};if("base"===o){const e=n?.group,t=i.title;s={...n},this._handleGroupChange(t,e)}else if("actions"===o){const e=mo(i,["entity","tap_action","hold_action","double_tap_action"]);JSON.stringify(e)!==JSON.stringify(n)&&(s={...n})}else"notification"===o?JSON.stringify(i.notification)!==JSON.stringify(n.notification)&&(s={notification:n.notification}):"icon_template"===o&&JSON.stringify(i.icon_template)!==JSON.stringify(n.icon_template)&&(s={icon_template:n.icon_template});if(Object.keys(s).length>0){const e={...i,...s},n=[...this._sidebarConfig.new_items||[]];n[t]=e,this._sidebarConfig={...this._sidebarConfig,new_items:n},this._selectedItem={...e},this._dispatchConfig(this._sidebarConfig)}}_handleGroupChange(e,t){const i=this.getGroupKey(e);if(!(i===t||""===i&&!t||!i&&!t||"bottom_items"===i&&"bottom"===t))if(t&&""!==t){if(i!==t){if(this._handleRemoveItem(e),"bottom"===t){const t=[...this._sidebarConfig.bottom_items||[]];return void(t.includes(e)||(t.push(e),this._sidebarConfig={...this._sidebarConfig,bottom_items:t}))}const i={...this._sidebarConfig.custom_groups};return i[t]||(i[t]=[]),i[t].push(e),void(this._sidebarConfig={...this._sidebarConfig,custom_groups:i})}}else this._handleRemoveItem(e)}_dispatchConfig(e){const t=new CustomEvent("sidebar-changed",{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(t)}static get styles(){return[super.styles,ue`
        .item-name-row {
          padding: 0.5em;
          border: 1px solid var(--divider-color);
          border-radius: 4px;
          background-color: var(--secondary-background-color);
        }
      `]}};ih([lh({attribute:!1})],Sg.prototype,"_sidebarConfig",void 0),ih([ch()],Sg.prototype,"_selectedItemIndex",void 0),ih([ch()],Sg.prototype,"_selectedItem",void 0),ih([ch()],Sg.prototype,"_yamlMode",void 0),Sg=ih([sh("sidebar-dialog-new-items")],Sg);
/*!
 * iro.js v5.5.2
 * 2016-2021 James Daniel
 * Licensed under MPL 2.0
 * github.com/jaames/iro.js
 */
var Og,Ig,xg,Tg,kg,Ng={},$g=[],Lg=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function Dg(e,t){for(var i in t)e[i]=t[i];return e}function Pg(e){var t=e.parentNode;t&&t.removeChild(e)}function Rg(e,t,i){var n,o,s,r,a=arguments;if(t=Dg({},t),arguments.length>3)for(i=[i],n=3;n<arguments.length;n++)i.push(a[n]);if(null!=i&&(t.children=i),null!=e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===t[o]&&(t[o]=e.defaultProps[o]);return r=t.key,null!=(s=t.ref)&&delete t.ref,null!=r&&delete t.key,Mg(e,t,r,s)}function Mg(e,t,i,n){var o={type:e,props:t,key:i,ref:n,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return Og.vnode&&Og.vnode(o),o}function Hg(e){return e.children}function Gg(e){if(null==e||"boolean"==typeof e)return null;if("string"==typeof e||"number"==typeof e)return Mg(null,e,null,null);if(null!=e.__e||null!=e.__c){var t=Mg(e.type,e.props,e.key,null);return t.__e=e.__e,t}return e}function Bg(e,t){this.props=e,this.context=t}function jg(e,t){if(null==t)return e.__p?jg(e.__p,e.__p.__k.indexOf(e)+1):null;for(var i;t<e.__k.length;t++)if(null!=(i=e.__k[t])&&null!=i.__e)return i.__e;return"function"==typeof e.type?jg(e):null}function Ug(e){var t,i;if(null!=(e=e.__p)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(i=e.__k[t])&&null!=i.__e){e.__e=e.__c.base=i.__e;break}return Ug(e)}}function Fg(e){(!e.__d&&(e.__d=!0)&&1===Ig.push(e)||Tg!==Og.debounceRendering)&&(Tg=Og.debounceRendering,(Og.debounceRendering||xg)(Vg))}function Vg(){var e,t,i,n,o,s,r,a;for(Ig.sort(function(e,t){return t.__v.__b-e.__v.__b});e=Ig.pop();)e.__d&&(i=void 0,n=void 0,s=(o=(t=e).__v).__e,r=t.__P,a=t.u,t.u=!1,r&&(i=[],n=Xg(r,o,Dg({},o),t.__n,void 0!==r.ownerSVGElement,null,i,a,null==s?jg(o):s),Zg(i,o),n!=s&&Ug(o)))}function zg(e,t,i,n,o,s,r,a,l){var c,d,h,u,f,p,g,_=i&&i.__k||$g,m=_.length;if(a==Ng&&(a=null!=s?s[0]:m?jg(i,0):null),c=0,t.__k=qg(t.__k,function(i){if(null!=i){if(i.__p=t,i.__b=t.__b+1,null===(h=_[c])||h&&i.key==h.key&&i.type===h.type)_[c]=void 0;else for(d=0;d<m;d++){if((h=_[d])&&i.key==h.key&&i.type===h.type){_[d]=void 0;break}h=null}if(u=Xg(e,i,h=h||Ng,n,o,s,r,null,a,l),(d=i.ref)&&h.ref!=d&&(g||(g=[])).push(d,i.__c||u,i),null!=u){if(null==p&&(p=u),null!=i.l)u=i.l,i.l=null;else if(s==h||u!=a||null==u.parentNode){e:if(null==a||a.parentNode!==e)e.appendChild(u);else{for(f=a,d=0;(f=f.nextSibling)&&d<m;d+=2)if(f==u)break e;e.insertBefore(u,a)}"option"==t.type&&(e.value="")}a=u.nextSibling,"function"==typeof t.type&&(t.l=u)}}return c++,i}),t.__e=p,null!=s&&"function"!=typeof t.type)for(c=s.length;c--;)null!=s[c]&&Pg(s[c]);for(c=m;c--;)null!=_[c]&&t_(_[c],_[c]);if(g)for(c=0;c<g.length;c++)e_(g[c],g[++c],g[++c])}function qg(e,t,i){if(null==i&&(i=[]),null==e||"boolean"==typeof e)t&&i.push(t(null));else if(Array.isArray(e))for(var n=0;n<e.length;n++)qg(e[n],t,i);else i.push(t?t(Gg(e)):e);return i}function Wg(e,t,i,n,o){var s;for(s in i)s in t||Yg(e,s,null,i[s],n);for(s in t)o&&"function"!=typeof t[s]||"value"===s||"checked"===s||i[s]===t[s]||Yg(e,s,t[s],i[s],n)}function Kg(e,t,i){"-"===t[0]?e.setProperty(t,i):e[t]="number"==typeof i&&!1===Lg.test(t)?i+"px":null==i?"":i}function Yg(e,t,i,n,o){var s,r,a,l,c;if("key"===(t=o?"className"===t?"class":t:"class"===t?"className":t)||"children"===t);else if("style"===t)if(s=e.style,"string"==typeof i)s.cssText=i;else{if("string"==typeof n&&(s.cssText="",n=null),n)for(r in n)i&&r in i||Kg(s,r,"");if(i)for(a in i)n&&i[a]===n[a]||Kg(s,a,i[a])}else"o"===t[0]&&"n"===t[1]?(l=t!==(t=t.replace(/Capture$/,"")),c=t.toLowerCase(),t=(c in e?c:t).slice(2),i?(n||e.addEventListener(t,Jg,l),(e.t||(e.t={}))[t]=i):e.removeEventListener(t,Jg,l)):"list"!==t&&"tagName"!==t&&"form"!==t&&!o&&t in e?e[t]=null==i?"":i:"function"!=typeof i&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==i||!1===i?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),i):null==i||!1===i?e.removeAttribute(t):e.setAttribute(t,i))}function Jg(e){return this.t[e.type](Og.event?Og.event(e):e)}function Xg(e,t,i,n,o,s,r,a,l,c){var d,h,u,f,p,g,_,m,b,y,v=t.type;if(void 0!==t.constructor)return null;(d=Og.__b)&&d(t);try{e:if("function"==typeof v){if(m=t.props,b=(d=v.contextType)&&n[d.__c],y=d?b?b.props.value:d.__p:n,i.__c?_=(h=t.__c=i.__c).__p=h.__E:("prototype"in v&&v.prototype.render?t.__c=h=new v(m,y):(t.__c=h=new Bg(m,y),h.constructor=v,h.render=i_),b&&b.sub(h),h.props=m,h.state||(h.state={}),h.context=y,h.__n=n,u=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=v.getDerivedStateFromProps&&Dg(h.__s==h.state?h.__s=Dg({},h.__s):h.__s,v.getDerivedStateFromProps(m,h.__s)),u)null==v.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&r.push(h);else{if(null==v.getDerivedStateFromProps&&null==a&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,y),!a&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,y)){for(h.props=m,h.state=h.__s,h.__d=!1,h.__v=t,t.__e=null!=l?l!==i.__e?l:i.__e:null,t.__k=i.__k,d=0;d<t.__k.length;d++)t.__k[d]&&(t.__k[d].__p=t);break e}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,y)}for(f=h.props,p=h.state,h.context=y,h.props=m,h.state=h.__s,(d=Og.__r)&&d(t),h.__d=!1,h.__v=t,h.__P=e,d=h.render(h.props,h.state,h.context),t.__k=qg(null!=d&&d.type==Hg&&null==d.key?d.props.children:d),null!=h.getChildContext&&(n=Dg(Dg({},n),h.getChildContext())),u||null==h.getSnapshotBeforeUpdate||(g=h.getSnapshotBeforeUpdate(f,p)),zg(e,t,i,n,o,s,r,l,c),h.base=t.__e;d=h.__h.pop();)h.__s&&(h.state=h.__s),d.call(h);u||null==f||null==h.componentDidUpdate||h.componentDidUpdate(f,p,g),_&&(h.__E=h.__p=null)}else t.__e=Qg(i.__e,t,i,n,o,s,r,c);(d=Og.diffed)&&d(t)}catch(e){Og.__e(e,t,i)}return t.__e}function Zg(e,t){for(var i;i=e.pop();)try{i.componentDidMount()}catch(e){Og.__e(e,i.__v)}Og.__c&&Og.__c(t)}function Qg(e,t,i,n,o,s,r,a){var l,c,d,h,u=i.props,f=t.props;if(o="svg"===t.type||o,null==e&&null!=s)for(l=0;l<s.length;l++)if(null!=(c=s[l])&&(null===t.type?3===c.nodeType:c.localName===t.type)){e=c,s[l]=null;break}if(null==e){if(null===t.type)return document.createTextNode(f);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type),s=null}return null===t.type?u!==f&&(null!=s&&(s[s.indexOf(e)]=null),e.data=f):t!==i&&(null!=s&&(s=$g.slice.call(e.childNodes)),d=(u=i.props||Ng).dangerouslySetInnerHTML,h=f.dangerouslySetInnerHTML,a||(h||d)&&(h&&d&&h.__html==d.__html||(e.innerHTML=h&&h.__html||"")),Wg(e,f,u,o,a),t.__k=t.props.children,h||zg(e,t,i,n,"foreignObject"!==t.type&&o,s,r,Ng,a),a||("value"in f&&void 0!==f.value&&f.value!==e.value&&(e.value=null==f.value?"":f.value),"checked"in f&&void 0!==f.checked&&f.checked!==e.checked&&(e.checked=f.checked))),e}function e_(e,t,i){try{"function"==typeof e?e(t):e.current=t}catch(e){Og.__e(e,i)}}function t_(e,t,i){var n,o,s;if(Og.unmount&&Og.unmount(e),(n=e.ref)&&e_(n,null,t),i||"function"==typeof e.type||(i=null!=(o=e.__e)),e.__e=e.l=null,null!=(n=e.__c)){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(e){Og.__e(e,t)}n.base=n.__P=null}if(n=e.__k)for(s=0;s<n.length;s++)n[s]&&t_(n[s],t,i);null!=o&&Pg(o)}function i_(e,t,i){return this.constructor(e,i)}function n_(e,t,i){var n,o,s;Og.__p&&Og.__p(e,t),o=(n=i===kg)?null:t.__k,e=Rg(Hg,null,[e]),s=[],Xg(t,t.__k=e,o||Ng,Ng,void 0!==t.ownerSVGElement,o?null:$g.slice.call(t.childNodes),s,!1,Ng,n),Zg(s,e)}function o_(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s_(e,t,i){return t&&o_(e.prototype,t),e}function r_(){return r_=Object.assign||function(e){for(var t=arguments,i=1;i<arguments.length;i++){var n=t[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r_.apply(this,arguments)}Og={},Bg.prototype.setState=function(e,t){var i=this.__s!==this.state&&this.__s||(this.__s=Dg({},this.state));("function"!=typeof e||(e=e(i,this.props)))&&Dg(i,e),null!=e&&this.__v&&(this.u=!1,t&&this.__h.push(t),Fg(this))},Bg.prototype.forceUpdate=function(e){this.__v&&(e&&this.__h.push(e),this.u=!0,Fg(this))},Bg.prototype.render=Hg,Ig=[],xg="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Tg=Og.debounceRendering,Og.__e=function(e,t,i){for(var n;t=t.__p;)if((n=t.__c)&&!n.__p)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError)n.setState(n.constructor.getDerivedStateFromError(e));else{if(null==n.componentDidCatch)continue;n.componentDidCatch(e)}return Fg(n.__E=n)}catch(t){e=t}throw e},kg=Ng;var a_="[-\\+]?\\d+%?",l_="[-\\+]?\\d*\\.\\d+%?",c_="(?:"+l_+")|(?:"+a_+")",d_="[\\s|\\(]+("+c_+")[,|\\s]+("+c_+")[,|\\s]+("+c_+")\\s*\\)?",h_="[\\s|\\(]+("+c_+")[,|\\s]+("+c_+")[,|\\s]+("+c_+")[,|\\s]+("+c_+")\\s*\\)?",u_=new RegExp("rgb"+d_),f_=new RegExp("rgba"+h_),p_=new RegExp("hsl"+d_),g_=new RegExp("hsla"+h_),__="^(?:#?|0x?)",m_="([0-9a-fA-F]{1})",b_="([0-9a-fA-F]{2})",y_=new RegExp(__+m_+m_+m_+"$"),v_=new RegExp(__+m_+m_+m_+m_+"$"),w_=new RegExp(__+b_+b_+b_+"$"),A_=new RegExp(__+b_+b_+b_+b_+"$"),C_=2e3,E_=4e4,S_=Math.log,O_=Math.round,I_=Math.floor;function x_(e,t,i){return Math.min(Math.max(e,t),i)}function T_(e,t){var i=e.indexOf("%")>-1,n=parseFloat(e);return i?t/100*n:n}function k_(e){return parseInt(e,16)}function N_(e){return e.toString(16).padStart(2,"0")}var $_=function(){function e(e,t){this.$={h:0,s:0,v:0,a:1},e&&this.set(e),this.onChange=t,this.initialValue=r_({},this.$)}var t=e.prototype;return t.set=function(t){if("string"==typeof t)/^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(t)?this.hexString=t:/^rgba?/.test(t)?this.rgbString=t:/^hsla?/.test(t)&&(this.hslString=t);else{if("object"!=typeof t)throw new Error("Invalid color value");t instanceof e?this.hsva=t.hsva:"r"in t&&"g"in t&&"b"in t?this.rgb=t:"h"in t&&"s"in t&&"v"in t?this.hsv=t:"h"in t&&"s"in t&&"l"in t?this.hsl=t:"kelvin"in t&&(this.kelvin=t.kelvin)}},t.setChannel=function(e,t,i){var n;this[e]=r_({},this[e],((n={})[t]=i,n))},t.reset=function(){this.hsva=this.initialValue},t.clone=function(){return new e(this)},t.unbind=function(){this.onChange=void 0},e.hsvToRgb=function(e){var t=e.h/60,i=e.s/100,n=e.v/100,o=I_(t),s=t-o,r=n*(1-i),a=n*(1-s*i),l=n*(1-(1-s)*i),c=o%6,d=[l,n,n,a,r,r][c],h=[r,r,l,n,n,a][c];return{r:x_(255*[n,a,r,r,l,n][c],0,255),g:x_(255*d,0,255),b:x_(255*h,0,255)}},e.rgbToHsv=function(e){var t=e.r/255,i=e.g/255,n=e.b/255,o=Math.max(t,i,n),s=Math.min(t,i,n),r=o-s,a=0,l=o,c=0===o?0:r/o;switch(o){case s:a=0;break;case t:a=(i-n)/r+(i<n?6:0);break;case i:a=(n-t)/r+2;break;case n:a=(t-i)/r+4}return{h:60*a%360,s:x_(100*c,0,100),v:x_(100*l,0,100)}},e.hsvToHsl=function(e){var t=e.s/100,i=e.v/100,n=(2-t)*i,o=n<=1?n:2-n,s=o<1e-9?0:t*i/o;return{h:e.h,s:x_(100*s,0,100),l:x_(50*n,0,100)}},e.hslToHsv=function(e){var t=2*e.l,i=e.s*(t<=100?t:200-t)/100,n=t+i<1e-9?0:2*i/(t+i);return{h:e.h,s:x_(100*n,0,100),v:x_((t+i)/2,0,100)}},e.kelvinToRgb=function(e){var t,i,n,o=e/100;return o<66?(t=255,i=-155.25485562709179-.44596950469579133*(i=o-2)+104.49216199393888*S_(i),n=o<20?0:.8274096064007395*(n=o-10)-254.76935184120902+115.67994401066147*S_(n)):(t=351.97690566805693+.114206453784165*(t=o-55)-40.25366309332127*S_(t),i=325.4494125711974+.07943456536662342*(i=o-50)-28.0852963507957*S_(i),n=255),{r:x_(I_(t),0,255),g:x_(I_(i),0,255),b:x_(I_(n),0,255)}},e.rgbToKelvin=function(t){for(var i,n=t.r,o=t.b,s=C_,r=E_;r-s>.4;){i=.5*(r+s);var a=e.kelvinToRgb(i);a.b/a.r>=o/n?r=i:s=i}return i},s_(e,[{key:"hsv",get:function(){var e=this.$;return{h:e.h,s:e.s,v:e.v}},set:function(e){var t=this.$;if(e=r_({},t,e),this.onChange){var i={h:!1,v:!1,s:!1,a:!1};for(var n in t)i[n]=e[n]!=t[n];this.$=e,(i.h||i.s||i.v||i.a)&&this.onChange(this,i)}else this.$=e}},{key:"hsva",get:function(){return r_({},this.$)},set:function(e){this.hsv=e}},{key:"hue",get:function(){return this.$.h},set:function(e){this.hsv={h:e}}},{key:"saturation",get:function(){return this.$.s},set:function(e){this.hsv={s:e}}},{key:"value",get:function(){return this.$.v},set:function(e){this.hsv={v:e}}},{key:"alpha",get:function(){return this.$.a},set:function(e){this.hsv=r_({},this.hsv,{a:e})}},{key:"kelvin",get:function(){return e.rgbToKelvin(this.rgb)},set:function(t){this.rgb=e.kelvinToRgb(t)}},{key:"red",get:function(){return this.rgb.r},set:function(e){this.rgb=r_({},this.rgb,{r:e})}},{key:"green",get:function(){return this.rgb.g},set:function(e){this.rgb=r_({},this.rgb,{g:e})}},{key:"blue",get:function(){return this.rgb.b},set:function(e){this.rgb=r_({},this.rgb,{b:e})}},{key:"rgb",get:function(){var t=e.hsvToRgb(this.$),i=t.r,n=t.g,o=t.b;return{r:O_(i),g:O_(n),b:O_(o)}},set:function(t){this.hsv=r_({},e.rgbToHsv(t),{a:void 0===t.a?1:t.a})}},{key:"rgba",get:function(){return r_({},this.rgb,{a:this.alpha})},set:function(e){this.rgb=e}},{key:"hsl",get:function(){var t=e.hsvToHsl(this.$),i=t.h,n=t.s,o=t.l;return{h:O_(i),s:O_(n),l:O_(o)}},set:function(t){this.hsv=r_({},e.hslToHsv(t),{a:void 0===t.a?1:t.a})}},{key:"hsla",get:function(){return r_({},this.hsl,{a:this.alpha})},set:function(e){this.hsl=e}},{key:"rgbString",get:function(){var e=this.rgb;return"rgb("+e.r+", "+e.g+", "+e.b+")"},set:function(e){var t,i,n,o,s=1;if((t=u_.exec(e))?(i=T_(t[1],255),n=T_(t[2],255),o=T_(t[3],255)):(t=f_.exec(e))&&(i=T_(t[1],255),n=T_(t[2],255),o=T_(t[3],255),s=T_(t[4],1)),!t)throw new Error("Invalid rgb string");this.rgb={r:i,g:n,b:o,a:s}}},{key:"rgbaString",get:function(){var e=this.rgba;return"rgba("+e.r+", "+e.g+", "+e.b+", "+e.a+")"},set:function(e){this.rgbString=e}},{key:"hexString",get:function(){var e=this.rgb;return"#"+N_(e.r)+N_(e.g)+N_(e.b)},set:function(e){var t,i,n,o,s=255;if((t=y_.exec(e))?(i=17*k_(t[1]),n=17*k_(t[2]),o=17*k_(t[3])):(t=v_.exec(e))?(i=17*k_(t[1]),n=17*k_(t[2]),o=17*k_(t[3]),s=17*k_(t[4])):(t=w_.exec(e))?(i=k_(t[1]),n=k_(t[2]),o=k_(t[3])):(t=A_.exec(e))&&(i=k_(t[1]),n=k_(t[2]),o=k_(t[3]),s=k_(t[4])),!t)throw new Error("Invalid hex string");this.rgb={r:i,g:n,b:o,a:s/255}}},{key:"hex8String",get:function(){var e=this.rgba;return"#"+N_(e.r)+N_(e.g)+N_(e.b)+N_(I_(255*e.a))},set:function(e){this.hexString=e}},{key:"hslString",get:function(){var e=this.hsl;return"hsl("+e.h+", "+e.s+"%, "+e.l+"%)"},set:function(e){var t,i,n,o,s=1;if((t=p_.exec(e))?(i=T_(t[1],360),n=T_(t[2],100),o=T_(t[3],100)):(t=g_.exec(e))&&(i=T_(t[1],360),n=T_(t[2],100),o=T_(t[3],100),s=T_(t[4],1)),!t)throw new Error("Invalid hsl string");this.hsl={h:i,s:n,l:o,a:s}}},{key:"hslaString",get:function(){var e=this.hsla;return"hsla("+e.h+", "+e.s+"%, "+e.l+"%, "+e.a+")"},set:function(e){this.hslString=e}}]),e}(),L_={sliderShape:"bar",sliderType:"value",minTemperature:2200,maxTemperature:11e3};function D_(e){var t,i=e.width,n=e.sliderSize,o=e.borderWidth,s=e.handleRadius,r=e.padding,a=e.sliderShape,l="horizontal"===e.layoutDirection;return n=null!=(t=n)?t:2*r+2*s,"circle"===a?{handleStart:e.padding+e.handleRadius,handleRange:i-2*r-2*s,width:i,height:i,cx:i/2,cy:i/2,radius:i/2-o/2}:{handleStart:n/2,handleRange:i-n,radius:n/2,x:0,y:0,width:l?n:i,height:l?i:n}}function P_(e,t){var i=t.hsva,n=t.rgb;switch(e.sliderType){case"red":return n.r/2.55;case"green":return n.g/2.55;case"blue":return n.b/2.55;case"alpha":return 100*i.a;case"kelvin":var o=e.minTemperature,s=e.maxTemperature-o,r=(t.kelvin-o)/s*100;return Math.max(0,Math.min(r,100));case"hue":return i.h/=3.6;case"saturation":return i.s;default:return i.v}}function R_(e,t,i){var n,o=D_(e),s=o.handleRange,r=o.handleStart;n="horizontal"===e.layoutDirection?-1*i+s+r:t-r,n=Math.max(Math.min(n,s),0);var a=Math.round(100/s*n);switch(e.sliderType){case"kelvin":var l=e.minTemperature;return l+(e.maxTemperature-l)*(a/100);case"alpha":return a/100;case"hue":return 3.6*a;case"red":case"blue":case"green":return 2.55*a;default:return a}}function M_(e,t){var i=D_(e),n=i.width,o=i.height,s=i.handleRange,r=i.handleStart,a="horizontal"===e.layoutDirection,l=a?n/2:o/2,c=r+P_(e,t)/100*s;return a&&(c=-1*c+s+2*r),{x:a?l:c,y:a?c:l}}function H_(e,t){var i=t.hsv,n=t.rgb;switch(e.sliderType){case"red":return[[0,"rgb(0,"+n.g+","+n.b+")"],[100,"rgb(255,"+n.g+","+n.b+")"]];case"green":return[[0,"rgb("+n.r+",0,"+n.b+")"],[100,"rgb("+n.r+",255,"+n.b+")"]];case"blue":return[[0,"rgb("+n.r+","+n.g+",0)"],[100,"rgb("+n.r+","+n.g+",255)"]];case"alpha":return[[0,"rgba("+n.r+","+n.g+","+n.b+",0)"],[100,"rgb("+n.r+","+n.g+","+n.b+")"]];case"kelvin":for(var o=[],s=e.minTemperature,r=e.maxTemperature,a=r-s,l=s,c=0;l<r;l+=a/8,c+=1){var d=$_.kelvinToRgb(l),h=d.r,u=d.g,f=d.b;o.push([12.5*c,"rgb("+h+","+u+","+f+")"])}return o;case"hue":return[[0,"#f00"],[16.666,"#ff0"],[33.333,"#0f0"],[50,"#0ff"],[66.666,"#00f"],[83.333,"#f0f"],[100,"#f00"]];case"saturation":var p=$_.hsvToHsl({h:i.h,s:0,v:i.v}),g=$_.hsvToHsl({h:i.h,s:100,v:i.v});return[[0,"hsl("+p.h+","+p.s+"%,"+p.l+"%)"],[100,"hsl("+g.h+","+g.s+"%,"+g.l+"%)"]];default:var _=$_.hsvToHsl({h:i.h,s:i.s,v:100});return[[0,"#000"],[100,"hsl("+_.h+","+_.s+"%,"+_.l+"%)"]]}}var G_,B_=2*Math.PI,j_=function(e,t){return(e%t+t)%t},U_=function(e,t){return Math.sqrt(e*e+t*t)};function F_(e){return e.width/2-e.padding-e.handleRadius-e.borderWidth}function V_(e,t,i){var n=z_(e),o=n.cx,s=n.cy,r=e.width/2;return U_(o-t,s-i)<r}function z_(e){var t=e.width/2;return{width:e.width,radius:t-e.borderWidth,cx:t,cy:t}}function q_(e,t,i){var n=e.wheelAngle,o=e.wheelDirection;return i&&"clockwise"===o?t=n+t:"clockwise"===o?t=360-n+t:i&&"anticlockwise"===o?t=n+180-t:"anticlockwise"===o&&(t=n-t),j_(t,360)}function W_(e,t){var i=t.hsv,n=z_(e),o=n.cx,s=n.cy,r=F_(e),a=(180+q_(e,i.h,!0))*(B_/360),l=i.s/100*r,c="clockwise"===e.wheelDirection?-1:1;return{x:o+l*Math.cos(a)*c,y:s+l*Math.sin(a)*c}}function K_(e,t,i){var n=z_(e),o=n.cx,s=n.cy,r=F_(e);t=o-t,i=s-i;var a=q_(e,Math.atan2(-i,-t)*(360/B_)),l=Math.min(U_(t,i),r);return{h:Math.round(a),s:Math.round(100/r*l)}}function Y_(e){var t=e.width,i=e.boxHeight;return{width:t,height:null!=i?i:t,radius:e.padding+e.handleRadius}}function J_(e,t,i){var n=Y_(e),o=n.width,s=n.height,r=n.radius,a=(t-r)/(o-2*r)*100,l=(i-r)/(s-2*r)*100;return{s:Math.max(0,Math.min(a,100)),v:Math.max(0,Math.min(100-l,100))}}function X_(e,t){var i=Y_(e),n=i.width,o=i.height,s=i.radius,r=t.hsv,a=s,l=n-2*s,c=o-2*s;return{x:a+r.s/100*l,y:a+(c-r.v/100*c)}}function Z_(e,t){return[[[0,"#fff"],[100,"hsl("+t.hue+",100%,50%)"]],[[0,"rgba(0,0,0,0)"],[100,"#000"]]]}function Q_(e){G_||(G_=document.getElementsByTagName("base"));var t=window.navigator.userAgent,i=/^((?!chrome|android).)*safari/i.test(t),n=/iPhone|iPod|iPad/i.test(t),o=window.location;return(i||n)&&G_.length>0?o.protocol+"//"+o.host+o.pathname+o.search+e:e}function em(e,t,i,n){for(var o=0;o<n.length;o++){var s=n[o].x-t,r=n[o].y-i;if(Math.sqrt(s*s+r*r)<e.handleRadius)return o}return null}function tm(e){return{boxSizing:"border-box",border:e.borderWidth+"px solid "+e.borderColor}}function im(e,t,i){return e+"-gradient("+t+", "+i.map(function(e){var t=e[0];return e[1]+" "+t+"%"}).join(",")+")"}function nm(e){return"string"==typeof e?e:e+"px"}var om={width:300,height:300,color:"#fff",colors:[],padding:6,layoutDirection:"vertical",borderColor:"#fff",borderWidth:0,handleRadius:8,activeHandleRadius:null,handleSvg:null,handleProps:{x:0,y:0},wheelLightness:!0,wheelAngle:0,wheelDirection:"anticlockwise",sliderSize:null,sliderMargin:12,boxHeight:null},sm=["mousemove","touchmove","mouseup","touchend"],rm=function(e){function t(t){e.call(this,t),this.uid=(Math.random()+1).toString(36).substring(5)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(e){var t=this.handleEvent.bind(this),i={onMouseDown:t,ontouchstart:t},n="horizontal"===e.layoutDirection,o=null===e.margin?e.sliderMargin:e.margin,s={overflow:"visible",display:n?"inline-block":"block"};return e.index>0&&(s[n?"marginLeft":"marginTop"]=o),Rg(Hg,null,e.children(this.uid,i,s))},t.prototype.handleEvent=function(e){var t=this,i=this.props.onInput,n=this.base.getBoundingClientRect();e.preventDefault();var o=e.touches?e.changedTouches[0]:e,s=o.clientX-n.left,r=o.clientY-n.top;switch(e.type){case"mousedown":case"touchstart":!1!==i(s,r,0)&&sm.forEach(function(e){document.addEventListener(e,t,{passive:!1})});break;case"mousemove":case"touchmove":i(s,r,1);break;case"mouseup":case"touchend":i(s,r,2),sm.forEach(function(e){document.removeEventListener(e,t,{passive:!1})})}},t}(Bg);function am(e){var t=e.r,i=e.url,n=t,o=t;return Rg("svg",{className:"IroHandle IroHandle--"+e.index+" "+(e.isActive?"IroHandle--isActive":""),style:{"-webkit-tap-highlight-color":"rgba(0, 0, 0, 0);",transform:"translate("+nm(e.x)+", "+nm(e.y)+")",willChange:"transform",top:nm(-t),left:nm(-t),width:nm(2*t),height:nm(2*t),position:"absolute",overflow:"visible"}},i&&Rg("use",Object.assign({xlinkHref:Q_(i)},e.props)),!i&&Rg("circle",{cx:n,cy:o,r:t,fill:"none","stroke-width":2,stroke:"#000"}),!i&&Rg("circle",{cx:n,cy:o,r:t-2,fill:e.fill,"stroke-width":2,stroke:"#fff"}))}function lm(e){var t=e.activeIndex,i=void 0!==t&&t<e.colors.length?e.colors[t]:e.color,n=D_(e),o=n.width,s=n.height,r=n.radius,a=M_(e,i),l=H_(e,i);return Rg(rm,Object.assign({},e,{onInput:function(t,n,o){var s=R_(e,t,n);e.parent.inputActive=!0,i[e.sliderType]=s,e.onInput(o,e.id)}}),function(t,n,c){return Rg("div",Object.assign({},n,{className:"IroSlider",style:Object.assign({},{position:"relative",width:nm(o),height:nm(s),borderRadius:nm(r),background:"conic-gradient(#ccc 25%, #fff 0 50%, #ccc 0 75%, #fff 0)",backgroundSize:"8px 8px"},c)}),Rg("div",{className:"IroSliderGradient",style:Object.assign({},{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:nm(r),background:im("linear","horizontal"===e.layoutDirection?"to top":"to right",l)},tm(e))}),Rg(am,{isActive:!0,index:i.index,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:a.x,y:a.y}))})}function cm(e){var t=Y_(e),i=t.width,n=t.height,o=t.radius,s=e.colors,r=e.parent,a=e.activeIndex,l=void 0!==a&&a<e.colors.length?e.colors[a]:e.color,c=Z_(e,l),d=s.map(function(t){return X_(e,t)});return Rg(rm,Object.assign({},e,{onInput:function(t,i,n){if(0===n){var o=em(e,t,i,d);null!==o?r.setActiveColor(o):(r.inputActive=!0,l.hsv=J_(e,t,i),e.onInput(n,e.id))}else 1===n&&(r.inputActive=!0,l.hsv=J_(e,t,i));e.onInput(n,e.id)}}),function(t,r,a){return Rg("div",Object.assign({},r,{className:"IroBox",style:Object.assign({},{width:nm(i),height:nm(n),position:"relative"},a)}),Rg("div",{className:"IroBox",style:Object.assign({},{width:"100%",height:"100%",borderRadius:nm(o)},tm(e),{background:im("linear","to bottom",c[1])+","+im("linear","to right",c[0])})}),s.filter(function(e){return e!==l}).map(function(t){return Rg(am,{isActive:!1,index:t.index,fill:t.hslString,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:d[t.index].x,y:d[t.index].y})}),Rg(am,{isActive:!0,index:l.index,fill:l.hslString,r:e.activeHandleRadius||e.handleRadius,url:e.handleSvg,props:e.handleProps,x:d[l.index].x,y:d[l.index].y}))})}am.defaultProps={fill:"none",x:0,y:0,r:8,url:null,props:{x:0,y:0}},lm.defaultProps=Object.assign({},L_);var dm="conic-gradient(red, yellow, lime, aqua, blue, magenta, red)",hm="conic-gradient(red, magenta, blue, aqua, lime, yellow, red)";function um(e){var t=z_(e).width,i=e.colors;e.borderWidth;var n=e.parent,o=e.color,s=o.hsv,r=i.map(function(t){return W_(e,t)}),a={position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",boxSizing:"border-box"};return Rg(rm,Object.assign({},e,{onInput:function(t,i,s){if(0===s){if(!V_(e,t,i))return!1;var a=em(e,t,i,r);null!==a?n.setActiveColor(a):(n.inputActive=!0,o.hsv=K_(e,t,i),e.onInput(s,e.id))}else 1===s&&(n.inputActive=!0,o.hsv=K_(e,t,i));e.onInput(s,e.id)}}),function(n,l,c){return Rg("div",Object.assign({},l,{className:"IroWheel",style:Object.assign({},{width:nm(t),height:nm(t),position:"relative"},c)}),Rg("div",{className:"IroWheelHue",style:Object.assign({},a,{transform:"rotateZ("+(e.wheelAngle+90)+"deg)",background:"clockwise"===e.wheelDirection?dm:hm})}),Rg("div",{className:"IroWheelSaturation",style:Object.assign({},a,{background:"radial-gradient(circle closest-side, #fff, transparent)"})}),e.wheelLightness&&Rg("div",{className:"IroWheelLightness",style:Object.assign({},a,{background:"#000",opacity:1-s.v/100})}),Rg("div",{className:"IroWheelBorder",style:Object.assign({},a,tm(e))}),i.filter(function(e){return e!==o}).map(function(t){return Rg(am,{isActive:!1,index:t.index,fill:t.hslString,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:r[t.index].x,y:r[t.index].y})}),Rg(am,{isActive:!0,index:o.index,fill:o.hslString,r:e.activeHandleRadius||e.handleRadius,url:e.handleSvg,props:e.handleProps,x:r[o.index].x,y:r[o.index].y}))})}function fm(e){var t=function(t,i){var n,o=document.createElement("div");function s(){var e=t instanceof Element?t:document.querySelector(t);e.appendChild(n.base),n.onMount(e)}return n_(Rg(e,Object.assign({},{ref:function(e){return n=e}},i)),o),"loading"!==document.readyState?s():document.addEventListener("DOMContentLoaded",s),n};return t.prototype=e.prototype,Object.assign(t,e),t.__component=e,t}var pm=function(e){function t(t){var i=this;e.call(this,t),this.colors=[],this.inputActive=!1,this.events={},this.activeEvents={},this.deferredEvents={},this.id=t.id,(t.colors.length>0?t.colors:[t.color]).forEach(function(e){return i.addColor(e)}),this.setActiveColor(0),this.state=Object.assign({},t,{color:this.color,colors:this.colors,layout:t.layout})}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.addColor=function(e,t){void 0===t&&(t=this.colors.length);var i=new $_(e,this.onColorChange.bind(this));this.colors.splice(t,0,i),this.colors.forEach(function(e,t){return e.index=t}),this.state&&this.setState({colors:this.colors}),this.deferredEmit("color:init",i)},t.prototype.removeColor=function(e){var t=this.colors.splice(e,1)[0];t.unbind(),this.colors.forEach(function(e,t){return e.index=t}),this.state&&this.setState({colors:this.colors}),t.index===this.color.index&&this.setActiveColor(0),this.emit("color:remove",t)},t.prototype.setActiveColor=function(e){this.color=this.colors[e],this.state&&this.setState({color:this.color}),this.emit("color:setActive",this.color)},t.prototype.setColors=function(e,t){var i=this;void 0===t&&(t=0),this.colors.forEach(function(e){return e.unbind()}),this.colors=[],e.forEach(function(e){return i.addColor(e)}),this.setActiveColor(t),this.emit("color:setAll",this.colors)},t.prototype.on=function(e,t){var i=this,n=this.events;(Array.isArray(e)?e:[e]).forEach(function(e){(n[e]||(n[e]=[])).push(t),i.deferredEvents[e]&&(i.deferredEvents[e].forEach(function(e){t.apply(null,e)}),i.deferredEvents[e]=[])})},t.prototype.off=function(e,t){var i=this;(Array.isArray(e)?e:[e]).forEach(function(e){var n=i.events[e];n&&n.splice(n.indexOf(t),1)})},t.prototype.emit=function(e){for(var t=this,i=[],n=arguments.length-1;n-- >0;)i[n]=arguments[n+1];var o=this.activeEvents;!!o.hasOwnProperty(e)&&o[e]||(o[e]=!0,(this.events[e]||[]).forEach(function(e){return e.apply(t,i)}),o[e]=!1)},t.prototype.deferredEmit=function(e){for(var t,i=[],n=arguments.length-1;n-- >0;)i[n]=arguments[n+1];var o=this.deferredEvents;(t=this).emit.apply(t,[e].concat(i)),(o[e]||(o[e]=[])).push(i)},t.prototype.setOptions=function(e){this.setState(e)},t.prototype.resize=function(e){this.setOptions({width:e})},t.prototype.reset=function(){this.colors.forEach(function(e){return e.reset()}),this.setState({colors:this.colors})},t.prototype.onMount=function(e){this.el=e,this.deferredEmit("mount",this)},t.prototype.onColorChange=function(e,t){this.setState({color:this.color}),this.inputActive&&(this.inputActive=!1,this.emit("input:change",e,t)),this.emit("color:change",e,t)},t.prototype.emitInputEvent=function(e,t){0===e?this.emit("input:start",this.color,t):1===e?this.emit("input:move",this.color,t):2===e&&this.emit("input:end",this.color,t)},t.prototype.render=function(e,t){var i=this,n=t.layout;return Array.isArray(n)||(n=[{component:um},{component:lm}],t.transparency&&n.push({component:lm,options:{sliderType:"alpha"}})),Rg("div",{class:"IroColorPicker",id:t.id,style:{display:t.display}},n.map(function(e,n){var o=e.component,s=e.options;return Rg(o,Object.assign({},t,s,{ref:void 0,onInput:i.emitInputEvent.bind(i),parent:i,index:n}))}))},t}(Bg);pm.defaultProps=Object.assign({},om,{colors:[],display:"block",id:null,layout:"default",margin:null});var gm,_m=fm(pm);!function(e){var t;e.version="5.5.2",e.Color=$_,e.ColorPicker=_m,(t=e.ui||(e.ui={})).h=Rg,t.ComponentBase=rm,t.Handle=am,t.Slider=lm,t.Wheel=um,t.Box=cm}(gm||(gm={}));var mm,bm=gm;!function(e){e[e.LOADING=1]="LOADING",e[e.READY=2]="READY",e[e.ERROR=3]="ERROR"}(mm||(mm={}));let ym=class extends ig{constructor(){super(d.APPEARANCE),this._picker=null,this._baseColorFromTheme={},this._state=mm.LOADING,this._initColor="",this._initCustomStyles={},this._supportedModes=[]}connectedCallback(){super.connectedCallback()}firstUpdated(e){if(super.firstUpdated(e),!this._sidebarConfig)return;const t=ie(this._sidebarConfig.color_config,this.hass);this._colorConfigMode=t?"dark":"light"}shouldUpdate(e){return!e.has("_colorConfigMode")||void 0===this._colorConfigMode||(this._setTheme(this._colorConfigMode),this._state=mm.LOADING,this._initCustomStyles={...this._sidebarConfig.color_config?.[this._colorConfigMode]?.custom_styles||{}},setTimeout(()=>{this._state=mm.READY},200),!0)}updated(e){if(super.updated(e),e.has("_currentConfigValue")&&void 0!==this._currentConfigValue?setTimeout(()=>{this._initColorPicker()},50):e.has("_currentConfigValue")&&void 0===this._currentConfigValue&&this._destroyColorPicker(),e.has("_state")&&this._state===mm.READY&&this._getYamlEditor(),e.has("_sidebarConfig")&&this._sidebarConfig){const t=e.get("_sidebarConfig")?.color_config?.custom_theme,i=this._sidebarConfig.color_config?.custom_theme;if(t&&i&&t.theme&&t.theme!==i.theme)if(this._supportsMode(i.theme)){const e=this._getSupportedModes(i.theme);this._supportedModes=e,1===e.length?this._colorConfigMode=e[0]:this._colorConfigMode=i.mode||(this.hass.themes.darkMode?"dark":"light")}else{const e=/dark/i,t=/light/i.test(i.theme),n=e.test(i.theme);this._colorConfigMode=t?"light":n||this.hass.themes.darkMode?"dark":"light",this._supportedModes=[]}t&&i&&t.mode!==i.mode&&(this._colorConfigMode=i.mode||(this.hass.themes.darkMode?"dark":"light"))}}_supportsMode(e){return e in this.hass.themes.themes&&(void 0!==this.hass.themes.themes[e].modes&&("modes"in this.hass.themes.themes[e]&&this.hass.themes.themes[e].modes&&Object.keys(this.hass.themes.themes[e].modes).length>0))}_getSupportedModes(e){return this._supportsMode(e)?Object.keys(this.hass.themes.themes[e].modes):[]}_getYamlEditor(){const e=this.shadowRoot?.querySelector("ha-yaml-editor");e&&(this._yamlEditor=e)}_getDefaultColors(){const e=this.shadowRoot?.getElementById("theme-container");if(!e)return;const t=au(e);this._baseColorFromTheme=t}_destroyColorPicker(){this._picker=null;const e=this.shadowRoot?.querySelector(".picker-wrapper"),t=this.shadowRoot?.getElementById("picker");e&&t&&(e.setAttribute("hidden",""),t.innerHTML="")}_initColorPicker(){const e=void 0!==this._currentConfigValue,t=this.shadowRoot?.querySelector(".picker-wrapper"),i=this.shadowRoot?.getElementById("picker");if(!t||!i)return;t.toggleAttribute("hidden",!e);const n=this._colorConfigMode,o=this._sidebarConfig.color_config?.[n]||{},s=this._currentConfigValue,r=bh(o[s]||this._baseColorFromTheme[s]),a="hex"===r.getFormat()?r.toHex8String():r.toRgbString();this._initColor=o[s]??void 0,this._picker=bm.ColorPicker(i,{width:150,color:a,borderWidth:1,borderColor:"#fff",layoutDirection:"horizontal",layout:[{component:bm.ui.Wheel,options:{}},{component:bm.ui.Slider,options:{sliderType:"hue"}},{component:bm.ui.Slider,options:{sliderType:"saturation"}},{component:bm.ui.Slider,options:{sliderType:"value"}},{component:bm.ui.Slider,options:{sliderType:"alpha"}}]}),this._picker.on(["color:init","color:change"],e=>{this._currentConfigValue=s;const t=this._picker?.props.color,i="hex"===bh(t).getFormat()?e.hex8String:e.rgbaString;this._handleConfigChange(this._currentConfigValue,i)})}_handleConfigChange(e,t){const i=this._colorConfigMode,n={...this._sidebarConfig.color_config||{}},o={...n[i]||{}};o[e]=t,this._sidebarConfig={...this._sidebarConfig,color_config:{...n,[i]:o}},this._dispatchConfig(this._sidebarConfig)}_setTheme(e){const t=this._sidebarConfig?.color_config?.custom_theme?.theme||this.hass.themes.theme,i=this.shadowRoot?.getElementById("theme-container");Z(i,this.hass,t,e),setTimeout(()=>{this._getDefaultColors(),this._initCustomStyles=this._sidebarConfig.color_config?.[e]?.custom_styles||[]},0),this._dialog._dialogPreview&&this._dialog._dialogPreview._colorConfigMode!==e&&(this._dialog._dialogPreview._colorConfigMode=e)}render(){const e=mo({...this._sidebarConfig||{}},[...Y]);return Xe`
      <div id="theme-container" style="display: none;"></div>
      ${wu(this,gg(e),e,{configKey:"appearance"})}
      <div class="color-container">${this._renderColorConfigFields()}</div>
    `}_renderBorderRadiusField(){return Xe`
      <div class="color-item">
        <div class="header-row">
          <ha-icon
            ?hidden=${void 0===this._sidebarConfig?.color_config?.border_radius}
            icon="mdi:refresh"
            @click=${()=>this._resetColorConfig("border_radius")}
          ></ha-icon>
          ${this._createPicker({label:"Border Radius (px)",value:this._sidebarConfig?.color_config?.border_radius||"",placeHolder:0,configValue:"border_radius",pickerType:"border_radius",modeConfig:"light"})}
        </div>
      </div>
    `}_renderColorConfigFields(){const e=void 0!==this._currentConfigValue,t=this._renderThemePickerRow(),i=this._colorConfigMode,n=this._sidebarConfig?.color_config?.[i],o=n&&Object.keys(n).some(e=>!bo(n[e])),s=Xe`<div class="header-row" ?hidden=${e}>
      <div class="title">
        Theme: ${this._sidebarConfig?.color_config?.custom_theme?.theme||this.hass.themes.theme}
      </div>
      <ha-button
        appearance="plain"
        size="s"
        variant="warning"
        .disabled=${!o}
        @click=${()=>this._resetColorConfig("currentMode")}
        >RESET ALL</ha-button
      >
    </div> `,r=Xe` <div class="header-row">
      <ha-button appearance="plain" size="s" variant="warning" @click=${()=>this._picker?.color.reset()}
        >Reset</ha-button
      >
      <ha-button appearance="plain" size="s" @click=${()=>this._handleColorPicker("cancel")}>Cancel</ha-button>
      <ha-button appearance="outlined" size="s" @click=${()=>this._handleColorPicker("save")}>Save</ha-button>
    </div>`,a=Xe`
      <div class="config-colors grid">
        ${R.map(e=>this._renderDividerColor(e.value,e.label))}
        ${this._renderBorderRadiusField()} ${this._renderCustomStylesField()}
      </div>
      <div class="picker-wrapper" hidden>
        <div id="picker"></div>
        ${r}
      </div>
    `,l=At({content:a,options:{expanded:!1,header:"Custom colors and styles",darkBg:!0}}),c=Xe`
      <div>${t} ${s}</div>
      ${l}
    `;return At({content:c,options:{expanded:!0,header:"Color Configuration",icon:"mdi:palette",secondary:"Customize the colors of the sidebar"}})}_renderThemePickerRow(){const e={...this._sidebarConfig?.color_config?.custom_theme||{}},t=this._colorConfigMode,i={custom_theme:{...e}},n=this._supportedModes,o=e=>n.length>0&&!n.includes(e),s=Xe` <div class="header-row">
      <div class="title">Select mode to edit:</div>
      <div class="inputs">
        <ha-formfield .label=${"Light Mode"} .disabled=${o("light")}>
          <ha-radio
            @change=${e=>{this._colorConfigMode=e.target.value}}
            name="light_mode"
            value="light"
            .checked=${"light"===t}
            .disabled=${o("light")}
          >
          </ha-radio>
        </ha-formfield>
        <ha-formfield .label=${"Dark Mode"} .disabled=${o("dark")}>
          <ha-radio
            @change=${e=>{this._colorConfigMode=e.target.value}}
            name="dark_mode"
            value="dark"
            .checked=${"dark"===t}
            .disabled=${o("dark")}
          >
          </ha-radio>
        </ha-formfield>
      </div>
    </div>`;return Xe`${wu(this,mg(2!==n.length),i,{configKey:"custom_theme"})}
    ${n.length?s:Qe}`}_handleColorPicker(e){const t=this._picker?.color;if(!t)return;const i=this._currentConfigValue;switch(e){case"cancel":const e=this._initColor;this._toggleColorPicker(i),this._handleConfigChange(i,e),this._initColor="";break;case"save":this._toggleColorPicker(i),this._initColor="";break;case"hex":const n=t.hex8String;this._handleConfigChange(i,n),this._picker?.color.set(n);break;case"rgb":const o=t.rgbaString;this._picker?.color.set(o),this._handleConfigChange(i,o)}}_renderDividerColor(e,t){if(!this._sidebarConfig)return Xe``;const i=this._colorConfigMode,n=(this._sidebarConfig?.color_config||{})[i]||{},o=this._baseColorFromTheme,s=n[e]??o[e],r=n[e]||"",a=void 0===n[e]||n[e]===o[e],l=e=>{if(!e)return;let t=bh(e);const i=t.getAlpha()<=.5,s=n.custom_sidebar_background_color||o.custom_sidebar_background_color;return i&&(t=bh(s)),t.isLight()?"#000":"#fff"},c={backgroundColor:s,color:l(s),borderColor:bh(l(s)).setAlpha(.2).toString()};return Xe`
      <div class="color-item" id=${e}>
        <div class="header-row config-item">
          <ha-icon-button
            ?hidden=${a||void 0!==this._currentConfigValue}
            .path=${Wp}
            color="var(--sidebar-text-color)"
            @click=${()=>this._resetColorConfig(e)}
          ></ha-icon-button>

          ${this._createPicker({label:t,value:r,configValue:e,placeHolder:o[e],modeConfig:i,pickerType:"text"})}
          ${this._currentConfigValue===e?Xe` <div class="change-format">
                <ha-button appearance="plain" size="s" @click=${()=>this._handleColorPicker("hex")}
                  >HEX</ha-button
                >
                <ha-button appearance="plain" size="s" @click=${()=>this._handleColorPicker("rgb")}
                  >RGBA</ha-button
                >
              </div>`:Xe` <a
                class="color-picker-box"
                style=${eg(c)}
                @click=${()=>this._toggleColorPicker(e)}
              >
                <ha-icon icon="mdi:format-color-fill"></ha-icon>
              </a>`}
        </div>
      </div>
    `}_renderCustomStylesField(){if(!this._sidebarConfig||!this._colorConfigMode)return Xe``;if(this._state===mm.LOADING)return Xe`<ha-fade-in .delay=${500}><ha-spinner size="large"></ha-spinner></ha-fade-in>`;const e=this._colorConfigMode,t=this._sidebarConfig?.color_config?.[e]?.custom_styles,i=!bo(t),n={custom_styles:this._initCustomStyles};return Xe`
      <div class="color-item" id="custom_styles">
        ${wu(this,[{name:"custom_styles",helper:"Define custom CSS styles for the sidebar.",selector:{object:{}}}],n,{configKey:"custom_styles"})}
        <ha-button
          appearance="plain"
          size="s"
          slot="extra-actions"
          .disabled=${!i}
          style="float: inline-end;"
          @click=${()=>this._resetColorConfig("custom_styles")}
          >Reset</ha-button
        >
      </div>
    `}_toggleColorPicker(e){const t=this.shadowRoot?.querySelectorAll(".color-item");t&&(t.forEach(t=>{const i=t.getAttribute("id"),n=t.hasAttribute("selected");i===e?(t.toggleAttribute("selected",!n),this._currentConfigValue=n?void 0:e):t.toggleAttribute("hidden",!n)}),[...t].some(e=>e.hasAttribute("selected"))||t.forEach(e=>e.removeAttribute("hidden")))}_createPicker({label:e,value:t,configValue:i,placeHolder:n,pickerType:o,modeConfig:s}){const r=`${i}_${o}`;return Xe`
      <ha-selector
        style="width: 100%;"
        .hass=${this.hass}
        .label=${e}
        .placeholder=${n}
        .selector=${{text:{selector:{text:{selector:{text:{}}}},flexStyle:!0,required:!0},border_radius:{selector:{number:{min:0,max:100,step:1,mode:"box"}},flexStyle:!0,required:!1,classList:"color-picker",helper:"Enter a value for border radius (px)"},boolean:{selector:{boolean:{}}}}[o].selector}
        .required=${!1}
        .value=${t}
        .configValue=${i}
        .modeConfig=${s}
        .configType=${r}
        @value-changed=${this._handleColorChange}
      >
      </ha-selector>
    `}_resetColorConfig(e){if(!this._sidebarConfig.color_config)return;const t=this._colorConfigMode,i={...this._sidebarConfig.color_config||{}},n={...i[t]||{}};"border_radius"===e?delete i.border_radius:"currentMode"===e?delete i[t]:"custom_styles"===e?(this._initCustomStyles={},delete n.custom_styles,i[t]=n):(delete n[e],i[t]=n),this._sidebarConfig={...this._sidebarConfig,color_config:i},this._dispatchConfig(this._sidebarConfig)}_dispatchConfig(e){const t=new CustomEvent("sidebar-changed",{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(t)}_handleColorChange(e){e.stopPropagation();const t=e.target.configValue,i=e.target.configType,n=e.target.modeConfig,o=e.detail.value,s={};let r={...this._sidebarConfig.color_config||{}},a={...r[n]||{}};i.includes("_text")?o&&""!==o&&void 0!==o?(a[t]=o,s[n]=a):(delete a[t],s[n]=a):"border_radius"===t&&(o&&""!==o&&void 0!==o?(r[t]=o,s.border_radius=o):delete r[t]),Object.keys(s).length>0&&(this._sidebarConfig={...this._sidebarConfig,color_config:{...r,...s}}),this._dispatchConfig(this._sidebarConfig)}_valueChanged(e){if(e.stopPropagation(),!this._sidebarConfig)return;const t={...this._sidebarConfig||{}},i=e.target.configKey,n={...e.detail.value};let o={};if(i&&"appearance"===i){const e=Eu(mo(t,Y),n);bo(e)||Object.keys(e).forEach(e=>{o[e]=n[e]})}else if(i&&"custom_theme"===i){const e={...t.color_config?.custom_theme||{}};if(JSON.stringify(e)!==JSON.stringify(n.custom_theme)){const e={...this._sidebarConfig.color_config||{}};e.custom_theme={...e.custom_theme,...n.custom_theme},o.color_config=e}}else if(i&&"custom_styles"===i){const e=n.custom_styles;return this._initCustomStyles=e||{},void this._handleCustomStylesChange()}Object.keys(o).length>0&&(this._sidebarConfig={...this._sidebarConfig,...o},this._dispatchConfig(this._sidebarConfig))}_handleCustomStylesChange(){const e=this._colorConfigMode,t={...this._sidebarConfig.color_config||{}};let i={...t[e]||{}};i.custom_styles={...this._initCustomStyles||{}},t[e]=i,this._sidebarConfig={...this._sidebarConfig,color_config:{...t}},lu(this,"sidebar-config-changed",{config:this._sidebarConfig})}static get styles(){return[ue`
        :host *[hidden] {
          display: none !important;
        }
        :host {
          display: flex;
          flex-direction: column;
          gap: 0.5em;
          --form-grid-column-count: 2;
        }
        @media (max-width: 600px) {
          :host {
            --form-grid-column-count: unset;
          }
        }
        /* .color-container {
          display: flex;
          flex: auto;
          height: 100%;
          flex-direction: column;
          gap: 1em;
        } */

        /* .color-container {
          display: block;
          border: 1px solid var(--divider-color);
          flex: auto;
          height: 100%;
        } */

        .header-row {
          display: inline-flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          --mdc-icon-button-size: 42px;
          /* padding-block: 0.5rem; */
        }
        .header-row.center {
          justify-content: center;
        }

        .header-row.config-item {
          place-items: anchor-center;
          color: var(--secondary-text-color);
        }
        .header-row.config-item ha-icon:hover {
          cursor: pointer;
          color: var(--primary-color);
        }
        .primary {
          font-size: 1.2rem;
          font-weight: 500;
          background: var(--app-header-background-color);
          padding-block: 0.5rem;
          text-transform: uppercase;
        }
        .title {
          font-size: 1.05rem;
          margin-block: 0.5rem;
          line-height: 100%;
        }

        .config-colors {
          display: grid;
          gap: var(--side-dialog-gutter);
          padding-block: var(--side-dialog-gutter);
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }

        .config-colors.grid > *:nth-last-child(1) {
          grid-column: 1 / -1; /* Spans all columns */
        }

        .config-colors .color-item {
          display: flex;
        }
        #custom_styles.color-item {
          display: block;
        }
        .change-format {
          display: inline-block;
          flex: 0;
          width: fit-content;
        }

        a.color-picker-box {
          width: fit-content;
          position: relative;
          display: inline-block;
          box-sizing: border-box;
          padding: 0.5rem 0.5rem;
          min-height: 2em;
          border: 1px solid;
          outline: none;
          overflow: visible;
          color: var(--sidebar-text-color);
          background-color: var(--divider-bg-color);
          text-align: center;
          cursor: pointer;
          text-decoration: none;
          margin-inline: 0.5rem;
          border-radius: inherit;
          transition: all 0.3s ease;
        }

        .picker-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: var(--side-dialog-padding);
          flex-direction: column;
          gap: var(--side-dialog-padding);
        }

        .picker-buttons {
          display: flex;
          width: 100%;
          justify-content: space-around;
          align-items: center;
        }
        .inputs {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 0 12px;
          flex: 1;
        }
      `]}};ih([lh({attribute:!1})],ym.prototype,"_sidebarConfig",void 0),ih([ch()],ym.prototype,"_colorConfigMode",void 0),ih([ch()],ym.prototype,"_picker",void 0),ih([ch()],ym.prototype,"_currentConfigValue",void 0),ih([ch()],ym.prototype,"_baseColorFromTheme",void 0),ih([ch()],ym.prototype,"_state",void 0),ih([ch()],ym.prototype,"_initCustomStyles",void 0),ih([ch()],ym.prototype,"_yamlEditor",void 0),ih([ch()],ym.prototype,"_colorConfigByMode",void 0),ih([ch()],ym.prototype,"_supportedModes",void 0),ym=ih([sh("sidebar-dialog-colors")],ym);let vm=class extends ig{constructor(){super(d.PANELS),this._selectedTab=h.ALL_ITEMS,this._selectedBottom=_.BOTTOM_ITEMS,this._selectedGroup=null,this._selectedNotification=null,this._reloadPanelItems=!1,this._prevTab=null,this._handleNavigateSection=e=>{e.stopPropagation();const t=e.detail.section;this._dialog._currSection=t},this._handleGroupActionEvent=async e=>{e.stopPropagation();const{action:t,key:i,type:n}=e.detail;this._handleGroupAction(t,i,n)},this._handleGroupAction=async(e,t,i)=>{const n=[...this._sidebarConfig?.default_collapsed||[]],o={...this._sidebarConfig.custom_groups||{}},s={...this._sidebarConfig.pinned_groups||{}},r=e=>{this._sidebarConfig={...this._sidebarConfig,...e},this._dispatchConfig(this._sidebarConfig),this.requestUpdate()},a=async(e,t)=>{const i=this._selectedTab;i!==this._prevTab&&i===e&&(this._prevTab=i),e===h.CUSTOM_GROUPS?(this._selectedTab!==h.CUSTOM_GROUPS&&(this._selectedTab=h.CUSTOM_GROUPS,await kt()),this._selectedGroup=t,this._dialog._dialogPreview._toggleGroup(t,"show")):e===h.BOTTOM_PANELS&&(this._selectedTab!==h.BOTTOM_PANELS&&(this._selectedTab=h.BOTTOM_PANELS,await kt()),this._selectedBottom=t,this._dialog._dialogPreview._toggleBottomPanel(t))},l={};switch(e){case"edit-items":!i||i!==h.BOTTOM_PANELS&&i!==h.CUSTOM_GROUPS||await a(i,t);break;case"rename":let e=await hu(this,"Enter new group name",t,"Rename");if(null===e||""===e)return;if(Object.keys(o).includes(e))return void await uu(this,`${H.NAME_EXISTS}`);if(n.includes(t)){const i=n.filter(e=>e!==t);i.push(e),l.default_collapsed=i}const c=Object.fromEntries(Object.entries(o).map(([i,n])=>[i===t?e:i,n]));l.custom_groups=c,r(l);break;case"collapsed-group":n.includes(t)?l.default_collapsed=n.filter(e=>e!==t):l.default_collapsed=[...n,t],r(l);break;case"delete":if(!await du(this,`Are you sure you want to delete this group? ${t}`,"Delete"))return;n.includes(t)&&(l.default_collapsed=n.filter(e=>e!==t)),delete o[t],l.custom_groups=o,r(l);break;case"pinned-group":s.hasOwnProperty(t)?delete s[t]:s[t]=!0,l.pinned_groups=s,r(l);break;case"preview":this._dialog._dialogPreview._toggleGroup(t,"show");break;case"preview-item":this._dialog._dialogPreview._toggleGroup(t);break;case"uncategorized-as-group":const d=this._sidebarConfig?.uncategorized_items??!1;if("boolean"==typeof d&&!0===d||!bo(o[J.UNCATEGORIZED_ITEMS]))l.uncategorized_items=void 0,o.hasOwnProperty(J.UNCATEGORIZED_ITEMS)&&delete o[J.UNCATEGORIZED_ITEMS],l.custom_groups=o;else{const e=[...this._dialog.ungroupedItems||[]];l.custom_groups={...o,[J.UNCATEGORIZED_ITEMS]:e}}r(l)}},this._selectedBottomGroup=null,this._itemMoved=e=>{if(e.stopPropagation(),!this._sidebarConfig)return;const{oldIndex:t,newIndex:i}=e.detail,n=e=>{this._sidebarConfig={...this._sidebarConfig,...e},this._dispatchConfig(this._sidebarConfig)};switch(this._selectedTab){case h.BOTTOM_PANELS:{const e=this._selectedBottom;if(e===_.BOTTOM_GROUPS){const e=this._selectedBottomGroup;if(!e)break;const o={...this._sidebarConfig.bottom_groups||{}},s=[...o[e]||[]];s.splice(i,0,s.splice(t,1)[0]),o[e]=s,n({bottom_groups:o})}else{const o=[...this._sidebarConfig[e]||[]];o.splice(i,0,o.splice(t,1)[0]),n({[e]:o})}break}case h.CUSTOM_GROUPS:const e={...this._sidebarConfig.custom_groups||{}},o=this._selectedGroup;if(o){const s=[...e[o]||[]].concat();s.splice(i,0,s.splice(t,1)[0]),e[o]=s,n({custom_groups:e})}}},this._togglePromptNewGroup=async()=>{const e={...this._sidebarConfig.custom_groups||{}},t=await hu(this,"Enter new group name","Some Group Name","Create");var i;null!==t&&(i=(i=t).trim().toLowerCase(),Object.keys(e).map(e=>e.trim().toLowerCase()).includes(i)?await uu(this,"Group name already exists. Please choose a different one."):(e[t]=[],this._sidebarConfig={...this._sidebarConfig,custom_groups:e},this._dispatchConfig(this._sidebarConfig),this.requestUpdate()))},this._handlePinGroupChange=e=>{e.stopPropagation();const t=e.target.groupName,i=e.detail.value,n={...this._sidebarConfig?.pinned_groups||{}};i.is_pinned?i.icon?n[t]={icon:i.icon}:n[t]=!0:delete n[t],this._sidebarConfig={...this._sidebarConfig,pinned_groups:n},this._dispatchConfig(this._sidebarConfig)}}willUpdate(e){if(e.has("_selectedTab")){const t=e.get("_selectedTab");t!==this._selectedTab&&(this._prevTab=t||null)}}updated(e){if(e.has("_selectedTab")&&void 0!==this._selectedTab){this._selectedTab!==h.CUSTOM_GROUPS&&(this._selectedGroup=null)}if(e.has("_selectedBottom")&&void 0!==this._selectedBottom&&this._selectedTab===h.BOTTOM_PANELS){const e=this._selectedBottom;this._dialog._dialogPreview._toggleBottomPanel(e)}if(e.has("_selectedGroup")&&this._dialog._dialogPreview._toggleGroup(this._selectedGroup),e.has("_selectedNotification")){const e=this._selectedNotification||"";e||this._dialog._dialogPreview._toggleGroup(e);const t=this._sidebarConfig.custom_groups||{},i=this._sidebarConfig.bottom_items||[];let n="";const o=Object.keys(t).find(i=>t[i].includes(e)),s=i.includes(e);o?n=o:s&&(n=_.BOTTOM_ITEMS),this._dialog._dialogPreview._toggleGroup(n)}}render(){const e=Xe` <ha-control-select
      .value=${this._selectedTab}
      .options=${A}
      @value-changed=${e=>{this._selectedTab=e.detail.value}}
    ></ha-control-select>`,t={[h.ALL_ITEMS]:this._renderAllItems(),[h.BOTTOM_PANELS]:this._renderBottomItems(),[h.CUSTOM_GROUPS]:null===this._selectedGroup?this._renderCustomGroupList():this._renderEditGroup(),[h.VISIBILITY]:this._renderHiddenItems(),[h.NOTIFICATIONS]:this._renderNotificationConfig()};return Xe`
      <div class="groups-menu-header">${e}</div>
      <div class="config-content">${t[this._selectedTab]}</div>
    `}_renderAllItems(){return Xe`
      <so-panel-all
        .hass=${this.hass}
        ._store=${this._store}
        ._sidebarConfig=${this._sidebarConfig}
        @group-action=${this._handleGroupActionEvent}
        @navigate-section=${this._handleNavigateSection}
        @item-moved=${this._groupMoved}
      ></so-panel-all>
    `}_renderHiddenItems(){return Xe`<so-panel-visibility
      .hass=${this.hass}
      ._store=${this._store}
      ._sidebarConfig=${this._sidebarConfig}
    ></so-panel-visibility>`}_renderNotificationConfig(){const e=this.hass?.panels,t=this._sidebarConfig?.new_items?.map(e=>e.title)||[],i=this._dialog._initCombiPanels.filter(e=>!t.includes(e)).map(t=>({value:t,label:rs(this.hass,t),icon:e[t]?.icon||"mdi:view-dashboard"})),n=this._sidebarConfig.notification||{},o=Object.keys(n),s={select:{multiple:!1,custom_value:!1,mode:"dropdown",options:i.filter(e=>!o.includes(e.value)),sort:!0,required:!1}},r=this._sidebarConfig.notification||{},a=i.filter(e=>Object.keys(r).includes(e.value)),l=Xe`
      <div class="group-list">
        ${ug(a,e=>e,e=>Xe`
              <div class="group-item-row" style="padding-inline-start: 1rem">
                <div class="group-name" @click=${()=>this._selectedNotification=e.value}>
                  <ha-icon icon=${e.icon}></ha-icon>
                  <div class="group-name-items">
                    ${e.label}
                    <span>${e.value}</span>
                  </div>
                </div>
                <div class="group-actions">
                  <ha-icon-button .label=${"Edit item"} @click=${()=>this._selectedNotification=e.value}
                    ><ha-icon icon="mdi:pencil"></ha-icon
                  ></ha-icon-button>
                  <wa-divider orientation="vertical"></wa-divider>
                  <ha-icon-button
                    .label=${"Delete item"}
                    @click=${async()=>{if(!await du(this,`Are you sure you want to delete this notification? ${e.label}`,"Delete"))return;const t={...this._sidebarConfig.notification||{}};delete t[e.value],this._sidebarConfig={...this._sidebarConfig,notification:t},this._dispatchConfig(this._sidebarConfig)}}
                    ><ha-icon icon="mdi:trash-can-outline"></ha-icon
                  ></ha-icon-button>
                </div>
              </div>
            `)}
      </div>
    `;return null===this._selectedNotification?Xe`
          <ha-selector
            .hass=${this.hass}
            .selector=${s}
            .value=${this._selectedNotification??""}
            .required=${!1}
            .label=${"Select panel for configuration"}
            .placeholder=${"Select panel"}
            @value-changed=${e=>{this._selectedNotification=e.detail.value}}
          ></ha-selector>
          ${l}
        `:this._renderNotifyConfig()}_renderNotifyConfig(){if(!this._selectedNotification)return Qe;const e=this._selectedNotification,t=rs(this.hass,e)||e,i=(this._sidebarConfig.notification||{})[e]||"",n=Xe`<div class="header-row ">
      <ha-icon-button .path=${Lp} @click=${()=>this._selectedNotification=null}> </ha-icon-button>
      ${t.toUpperCase()}
      <ha-button
        appearance="plain"
        size="s"
        @click=${()=>{this._selectedNotification=null}}
        >Done</ha-button
      >
    </div>`;return Xe`
      ${n}
      <ha-selector
        .hass=${this.hass}
        .value=${i}
        .configValue=${e}
        .helper=${"Use Jinja template to configure the notification. Result can be icon or text."}
        .selector=${{template:{preview:!0}}}
        .required=${!1}
        @value-changed=${this._handleNotifyConfigChange}
      ></ha-selector>
    `}_isGroupCollapsed(e){return this._sidebarConfig?.default_collapsed?.includes(e)??!1}_isGroupPinned(e){return this._sidebarConfig?.pinned_groups?.hasOwnProperty(e)??!1}_renderGroupActions(e,t){if(t){const t=this._sidebarConfig?.uncategorized_items??!1,i="boolean"==typeof t&&!0===t||!bo(this._sidebarConfig.custom_groups?.[J.UNCATEGORIZED_ITEMS]),n=[{title:"Show in preview",action:"preview-item",icon:"mdi:information-outline"},{title:"Include in group orders",action:"uncategorized-as-group",icon:"mdi:format-list-bulleted"}];return Xe`<ha-dropdown @wa-select=${this._handleSubItemAction}>
        <ha-icon-button slot="trigger" .path=${Pp} hide-title></ha-icon-button>

        ${n.map(t=>Xe`
            <ha-dropdown-item
              .value=${e}
              .data=${t}
              .type=${"uncategorized-as-group"===t.action?"checkbox":void 0}
              .checked=${"uncategorized-as-group"===t.action?i:void 0}
            >
              <ha-icon slot="icon" icon=${t.icon}></ha-icon>
              ${t.title}
            </ha-dropdown-item>
          `)}
      </ha-dropdown>`}const i=window.matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches,n=this._isGroupCollapsed(e),o=this._isGroupPinned(e);return Xe`
      ${i?null:Xe`
            <ha-icon-button
              class="action-btn"
              .path=${Hp}
              ?is-selected=${n}
              @click=${()=>this._handleGroupAction("collapsed-group",e)}
            ></ha-icon-button>

            <wa-divider orientation="vertical"></wa-divider>

            <ha-icon-button
              class="action-btn"
              .path=${qp}
              ?is-selected=${o}
              @click=${()=>this._handleGroupAction("pinned-group",e)}
            ></ha-icon-button>

            <wa-divider orientation="vertical"></wa-divider>
          `}

      <ha-dropdown @wa-select=${this._handleSubItemAction}>
        <ha-icon-button slot="trigger" .path=${Pp} hide-title></ha-icon-button>

        ${[{title:"Edit items",action:"edit-items",icon:"mdi:pencil"},{title:"Rename",action:"rename",icon:"mdi:alphabetical"},{title:"Show in preview",action:"preview-item",icon:"mdi:information-outline"},{title:"Collapse by default",action:"collapsed-group",icon:"mdi:eye-minus-outline"},{title:"Add to pinned groups",action:"pinned-group",icon:"mdi:pin-outline"},{title:"Delete",action:"delete",icon:"mdi:trash-can-outline"}].map(t=>Xe`
            ${"delete"===t.action?Xe`<wa-divider></wa-divider>`:Qe}
            <ha-dropdown-item
              .value=${e}
              .data=${t}
              .type=${"collapsed-group"===t.action||"pinned-group"===t.action?"checkbox":void 0}
              .checked=${"collapsed-group"===t.action?n:"pinned-group"===t.action?o:void 0}
              .variant=${"delete"===t.action?"danger":void 0}
            >
              <ha-icon slot="icon" icon=${t.icon}></ha-icon>
              ${t.title}
            </ha-dropdown-item>
          `)}
      </ha-dropdown>
    `}_renderCustomGroupRow(e,t,i){const n=e,o=n===J.UNCATEGORIZED_ITEMS,s=this._sidebarConfig.custom_groups[n].length;return Xe`
      <div class="group-item-row" data-group=${n} data-index=${t}>
        <div class="handle">
          <ha-icon-button .path=${Rp}></ha-icon-button>
        </div>

        <div class="group-name" @click=${()=>this._handleGroupAction("edit-items",n,h.CUSTOM_GROUPS)}>
          <ha-icon icon=${`mdi:numeric-${t+1}-box`}></ha-icon>

          <div class="group-name-items" style="text-transform: ${i}">
            ${n}
            <span>${s} ${s>1?"items":"item"}</span>
          </div>
        </div>

        <div class="group-actions">${this._renderGroupActions(n,o)}</div>
      </div>
    `}_renderCustomGroupList(){const e=Object.keys(this._sidebarConfig.custom_groups||{}),t=this._sidebarConfig?.text_transformation??"capitalize";return Xe`
      ${e.length?Xe`
            <ha-sortable handle-selector=".handle" @item-moved=${this._groupMoved}>
              <div class="group-list" id="group-list">
                ${ug(e,e=>e,(e,i)=>this._renderCustomGroupRow(e,i,t))}
              </div>
              ${this._renderSpacer()}
            </ha-sortable>
          `:Xe`<div>No custom groups found</div>`}

      <div class="header-row flex-end">
        <ha-button appearance="plain" size="s" @click=${this._togglePromptNewGroup}> Add New Group </ha-button>
      </div>
    `}_handleSubItemAction(e){e.stopPropagation();const t=e.detail?.item?.data,i=e.detail?.item?.value;this._handleGroupAction(t.action,i,h.CUSTOM_GROUPS)}_groupMoved(e){if(e.stopPropagation(),!this._sidebarConfig)return;const{oldIndex:t,newIndex:i}=e.detail,n=Object.entries(this._sidebarConfig.custom_groups||{}).concat([]),o=n.splice(t,1)[0];n.splice(i,0,o);(e=>{this._sidebarConfig={...this._sidebarConfig,...e},this._dispatchConfig(this._sidebarConfig)})({custom_groups:Object.fromEntries(n)})}_handleNotifyConfigChange(e){const t=e.target.configValue,i=e.detail.value,n={...this._sidebarConfig.notification||{}};i&&""!==i||delete n[t],i&&""!==i&&(n[t]=i),this._sidebarConfig={...this._sidebarConfig,notification:n},this._dispatchConfig(this._sidebarConfig)}_renderEditGroup(){if(!this._selectedGroup)return Qe;const e=Xe`<div class="header-row ">
      <ha-icon-button
        .path=${Lp}
        @click=${()=>(this._selectedGroup=null,this._selectedTab=this._prevTab||h.ALL_ITEMS)}
      >
      </ha-icon-button>
      ${this._selectedGroup.toLocaleUpperCase()}
      <ha-button
        appearance="plain"
        size="s"
        @click=${()=>this._handleGroupAction("preview",this._selectedGroup)}
      >
        PREVIEW
      </ha-button>
    </div>`,t=this._renderPanelSelector(h.CUSTOM_GROUPS,this._selectedGroup);return Xe` ${e} ${t}`}_renderBottomItems(){if(this._selectedTab!==h.BOTTOM_PANELS)return Qe;const e=m.map(e=>({value:e,label:v[e]})),t=Xe` <ha-control-select
      .value=${this._selectedBottom}
      .options=${e}
      @value-changed=${e=>{this._selectedBottom=e.detail.value}}
    ></ha-control-select>`,i={[_.BOTTOM_ITEMS]:this._renderPanelSelector(_.BOTTOM_ITEMS),[_.BOTTOM_GRID_ITEMS]:this._renderPanelSelector(_.BOTTOM_GRID_ITEMS),[_.BOTTOM_GROUPS]:this._renderBottomGroupsList()};return Xe`
      ${t}
      <div class="config-content">${i[this._selectedBottom]}</div>
    `}_renderBottomGroupsList(){const e=Object.keys(this._sidebarConfig.bottom_groups||{}),t=this._sidebarConfig?.text_transformation??"capitalize";return Xe`
      ${e.length?Xe`
            <div class="group-list">
              ${ug(e,e=>e,e=>{const i=this._sidebarConfig.bottom_groups?.[e]||[];return Xe`
                    <div class="group-item-row">
                      <div class="group-name" @click=${()=>this._editBottomGroup(e)}>
                        <ha-icon icon="mdi:folder-outline"></ha-icon>
                        <div class="group-name-items">
                          <span style="text-transform: ${t}">${e}</span>
                          <span>${i.length} items</span>
                        </div>
                      </div>
                      <div class="group-actions">
                        <ha-icon-button
                          .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
                          @click=${()=>this._deleteBottomGroup(e)}
                        ></ha-icon-button>
                      </div>
                    </div>
                  `})}
            </div>
          `:Xe`<div>No bottom groups defined</div>`}
      <div class="header-row flex-end">
        <ha-button appearance="plain" size="s" @click=${this._addBottomGroup}> Add New Group </ha-button>
      </div>
      ${this._selectedBottomGroup?Xe`
            <div style="margin-top: 1rem;">
              ${this._renderPanelSelector(_.BOTTOM_GROUPS,this._selectedBottomGroup)}
            </div>
          `:Qe}
    `}_editBottomGroup(e){this._selectedBottomGroup=this._selectedBottomGroup===e?null:e}async _addBottomGroup(){const e={...this._sidebarConfig.bottom_groups||{}},t=await hu(this,"Enter new group name","System","Create");null!==t&&""!==t&&(Object.keys(e).includes(t)?await uu(this,"Group name already exists."):(e[t]=[],this._sidebarConfig={...this._sidebarConfig,bottom_groups:e},this._dispatchConfig(this._sidebarConfig),this._selectedBottomGroup=t,this.requestUpdate()))}async _deleteBottomGroup(e){if(!await du(this,`Delete group "${e}"?`,"Delete"))return;const t={...this._sidebarConfig.bottom_groups||{}};delete t[e],this._sidebarConfig={...this._sidebarConfig,bottom_groups:Object.keys(t).length>0?t:void 0},this._dispatchConfig(this._sidebarConfig),this._selectedBottomGroup===e&&(this._selectedBottomGroup=null),this.requestUpdate()}_renderPanelSelector(e,t){const i=!0===this._dialog._uncategorizedIsActive,n=t===J.UNCATEGORIZED_ITEMS,o=is(this.hass),s=this._sidebarConfig?.hidden_items||[],r=this._dialog._initCombiPanels.filter(e=>!s.includes(e)&&e!==o),a=i?this._dialog.pickedWithoutUncategorizedFromCustom:this._dialog.pickedItems,l=t||e,c=e===_.BOTTOM_GROUPS,d=t?c?this._sidebarConfig.bottom_groups?.[t]||[]:this._sidebarConfig.custom_groups[t]||[]:this._sidebarConfig[e]||[],h=Object.entries(d).map(([,e])=>e),u=a.filter(e=>!h.includes(e)),f=r.filter(e=>!u.includes(e)),p=this._createSelectorOptions(f),g=this._renderSelectedItems(l,h),m=t?this._renderPinGroupForms(t):Qe;return Xe`
      ${n?Rt(H.UNCATEGORIZED_GROUP_INFO):m}
      <div id="items-preview-wrapper">
        <div class="items-container" ?hidden=${n}>
          <div class="header-row flex-icon">
            <span>SELECT ITEMS</span>
          </div>
          <div class="selector-container">
            <ha-selector
              .hass=${this.hass}
              .selector=${p}
              .value=${h}
              .label=${"Add item"}
              .configValue=${e}
              .customGroup=${t}
              .required=${!1}
              id="customSelector"
              @value-changed=${this._handleValueChange}
            >
            </ha-selector>
          </div>
          ${this._renderSpacer()}
        </div>
        <div
          class="preview-container"
          ?grid=${e===J.BOTTOM_GRID_ITEMS}
          ?hidden=${!h.length}
        >
          ${g}
        </div>
      </div>
    `}_renderPinGroupForms(e){const t=this._sidebarConfig?.pinned_groups||{},i={is_pinned:t.hasOwnProperty(e),icon:"object"==typeof t[e]?t[e].icon:""},n=[{name:"",type:"grid",schema:[{name:"is_pinned",label:"Pin this group",type:"boolean",default:!1},{name:"icon",label:"Icon (optional)",disabled:!i.is_pinned,selector:{icon:{}}}]}];return Xe`
      <ha-form
        .hass=${this.hass}
        .schema=${n}
        .data=${i}
        .groupName=${e}
        .computeLabel=${e=>e.label}
        @value-changed=${this._handlePinGroupChange}
      ></ha-form>
    `}_renderSelectedItems(e,t){const i=this.hass?.panels,n=e=>this._dialog._newItemMap.get(e)?.icon||i[e]?.icon||"",o=t.map(e=>({key:e,title:this.hass.localize(`panel.${i[e]?.title}`)||i[e]?.title||i[e]?.url_path||e,icon:n(e)})),s=e.replace(/_/g," ").toUpperCase();return Xe`
      <div class="header-row flex-icon">
        <span>GROUP: ${s} - ORDER </span>
        <ha-icon-button .path=${Kp} @click=${()=>this._sortItems(e)}>
        </ha-icon-button>
      </div>

      ${this._reloadPanelItems?Xe`<ha-spinner .size=${"small"}></ha-spinner> `:Xe` <ha-sortable handle-selector=".handle" @item-moved=${this._itemMoved}>
            <div
              class="selected-items-preview"
              id="selected-items"
              ?grid=${e===J.BOTTOM_GRID_ITEMS}
            >
              ${ug(o,e=>e.key,(t,i)=>((t,i)=>Xe`
        <a data-panel=${t.key} data-index=${i}>
          <div class="icon-item handle" ?grid-item=${e===J.BOTTOM_GRID_ITEMS}>
            <ha-icon .icon=${t.icon}></ha-icon><span class="item-text">${t.title}</span>
          </div>
        </a>
      `)(t,i))}
            </div></ha-sortable
          >`}
    `}_renderSpacer(){return Xe`<div style="flex: 1"></div>`}_sortItems(e){const t=this.hass?.panels,i=(e===_.BOTTOM_ITEMS||e===_.BOTTOM_GRID_ITEMS?this._sidebarConfig[e]||[]:this._sidebarConfig.custom_groups?.[e]||[]).map(e=>({key:e,title:this.hass.localize(`panel.${t[e]?.title}`)||t[e]?.title||t[e]?.url_path||e})),n=[...i].sort((e,t)=>{const i=e.title.toUpperCase(),n=t.title.toUpperCase();return i.localeCompare(n)});let o;o=i.every((e,t)=>e.key===n[t].key)?[...i].sort((e,t)=>{const i=e.title.toUpperCase();return t.title.toUpperCase().localeCompare(i)}):n;const s=o.map(e=>e.key),r={};if(e===_.BOTTOM_ITEMS||e===_.BOTTOM_GRID_ITEMS){const t=e;let i=[...this._sidebarConfig[t]||[]];i=s,r[t]=i}else{let t={...this._sidebarConfig.custom_groups||{}},i=[...t[e]||[]];i=s,t[e]=i,r.custom_groups=t}Object.keys(r).length>0&&(this._sidebarConfig={...this._sidebarConfig,...r},this._dispatchConfig(this._sidebarConfig))}_createSelectorOptions(e,t="list"){const i=is(this.hass);return{select:{multiple:!0,mode:t,options:e.map(e=>{const t=e===i;return{value:e,label:(rs(this.hass,e)||e)+(t?" (default)":"")}}),sort:!0,reorder:!0}}}_handleValueChange(e){e.stopPropagation();const t=e.target.configValue,i=e.target.customGroup,n=e.detail.value,o=!0===this._dialog._uncategorizedIsActive,s={...this._sidebarConfig||{}},r={};if([_.BOTTOM_ITEMS,_.BOTTOM_GRID_ITEMS].includes(t)){const e=t,i=[...s[e]||[]],a=n.filter(e=>!i.includes(e));let l=[...this._sidebarConfig[e]||[]];if(o&&a.length>0){let e=[...s.custom_groups?.[J.UNCATEGORIZED_ITEMS]||[]];e=e.filter(e=>!a.includes(e)),r.custom_groups={...this._sidebarConfig.custom_groups||{},[J.UNCATEGORIZED_ITEMS]:e}}l=n,r[e]=l}else if(t===_.BOTTOM_GROUPS){const e=i,t={...this._sidebarConfig.bottom_groups||{}};t[e]=n,r.bottom_groups=t}else if(t===h.CUSTOM_GROUPS){const e=i,t=[...s.custom_groups?.[e]||[]],a=n.filter(e=>!t.includes(e));let l={...this._sidebarConfig.custom_groups||{}},c=[...l[e]||[]];if(o&&a.length>0){let e=[...l[J.UNCATEGORIZED_ITEMS]||[]];e=e.filter(e=>!a.includes(e)),l[J.UNCATEGORIZED_ITEMS]=e}c=n,l[e]=c,r.custom_groups=l}Object.keys(r).length>0&&(this._sidebarConfig={...this._sidebarConfig,...r}),this._dispatchConfig(this._sidebarConfig),this.requestUpdate()}_dispatchConfig(e){const t=new CustomEvent("sidebar-changed",{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(t)}clickedPanelInPreview(e,t){t&&(t===_.BOTTOM_GRID_ITEMS||t===_.BOTTOM_ITEMS?(this._selectedTab=h.BOTTOM_PANELS,this._selectedGroup=null,this._selectedBottom=t===_.BOTTOM_GRID_ITEMS?_.BOTTOM_GRID_ITEMS:_.BOTTOM_ITEMS):(this._selectedTab=h.CUSTOM_GROUPS,this._selectedGroup=t))}static get styles(){return[super.styles,ue`
        :host {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
        }
        .groups-menu-header {
          top: 0;
          z-index: 10;
          background-color: var(--mdc-theme-surface);
          /* height: 48px; */
          position: sticky;
          display: block;
        }

        .selected-items-preview {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          overflow-y: auto;
          scrollbar-color: var(--scrollbar-thumb-color) transparent;
          scrollbar-width: thin;
        }
        .selected-items-preview[grid] {
          display: grid;
          grid-template-columns: repeat(auto-fit, 25%);
          /* gap: 8px; */
          align-items: center;
          /* justify-content: center; */
          /* align-content: center; */
          overflow: hidden;
        }
        .selected-items-preview[grid] a {
          width: inherit;
        }

        a {
          text-decoration: none;
          color: var(--sidebar-text-color);
          font-weight: 500;
          font-size: 14px;
          position: relative;
          display: block;
          outline: 0;
          border-radius: 4px;
          /* width: 248px; */
          cursor: pointer;
        }
        a:hover > .icon-item {
          background-color: var(--secondary-background-color);
        }
        .icon-item {
          box-sizing: border-box;
          margin: 4px;
          padding-left: 12px;
          padding-inline-start: 12px;
          padding-inline-end: initial;
          border-radius: 4px;
          display: flex;
          min-height: 40px;
          align-items: center;
          padding: 0 16px;
        }
        .icon-item > ha-icon {
          width: 56px;
          color: var(--sidebar-icon-color);
        }
        .icon-item span.item-text {
          display: block;
          max-width: calc(100% - 56px);
        }
        .icon-item[grid-item] {
          /* text-align: center; */
          display: flex;
          width: 100%;
          margin: 8px auto;
          padding: 0;
          max-height: 80px;
          flex-direction: column;
        }
        .icon-item[grid-item] ha-icon {
          /* width: 40px; */
          height: 40px;
          /* margin-bottom: 4px; */
          flex: 0 1 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .icon-item[grid-item] span.item-text {
          display: block;
          white-space: nowrap;
          flex: 1 1 auto;
          text-overflow: ellipsis;
          overflow: clip;
          max-width: 100%;
        }
        ha-icon-button.action-btn {
          opacity: 0.3;
          color: var(--disabled-text-color);
        }
        ha-icon-button.action-btn:hover {
          opacity: 1;
          color: var(--sidebar-text-color);
        }
        ha-icon-button.action-btn[is-selected] {
          color: var(--ha-color-on-primary-normal, var(--primary-color)) !important;
          opacity: 1 !important;
        }
      `]}};ih([lh({attribute:!1})],vm.prototype,"_sidebarConfig",void 0),ih([ch()],vm.prototype,"_selectedTab",void 0),ih([ch()],vm.prototype,"_selectedBottom",void 0),ih([ch()],vm.prototype,"_selectedGroup",void 0),ih([ch()],vm.prototype,"_selectedNotification",void 0),ih([ch()],vm.prototype,"_reloadPanelItems",void 0),ih([ch()],vm.prototype,"_prevTab",void 0),ih([hh("so-panel-all")],vm.prototype,"_panelAll",void 0),ih([ch()],vm.prototype,"_selectedBottomGroup",void 0),vm=ih([sh("sidebar-dialog-panels")],vm);let wm=class extends ig{constructor(){super(d.PREVIEW),this._sidebarConfig={},this.invalidConfig=!1,this._colorConfigMode="",this._baseColorFromTheme={},this._previewPanels={},this._collapsedGroups=new Set,this._ready=!1,this._toggleColapsed=e=>{const t=this._collapsedGroups.has(e);if(this._sidebarConfig?.accordion_mode&&t){const t=[...Object.keys(this._previewPanels?.custom_groups||{}),...Object.keys(this._previewPanels?.bottom_groups||{})].filter(e=>e!==J.UNCATEGORIZED_ITEMS);this._collapsedGroups=new Set(t.filter(t=>t!==e))}else t?this._collapsedGroups.delete(e):this._collapsedGroups.add(e);this.requestUpdate()},this._toggleGroup=(e,t)=>{const i=[...Object.keys(this._previewPanels?.custom_groups||{}),...Object.keys(this._previewPanels?.bottom_groups||{})];this._collapsedGroups=new Set(i.filter(t=>t!==e)),this.requestUpdate(),this.updateComplete.then(()=>{const i=this._groupsContainer.children,n=this._groupsContainer.querySelectorAll("div.divider-container"),o=Array.from(n).find(t=>t.getAttribute("group")===e);if(o){o.querySelector("div.added-content").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}const s=this._groupsContainer.querySelectorAll("div.group-items"),r=Array.from(s).find(t=>t.getAttribute("group")===e);if(r&&!t&&(r.classList.add("hight-light"),r.addEventListener("animationend",()=>{r.classList.remove("hight-light")})),t){(()=>{const t=Array.from(i).filter(t=>t.getAttribute("group")!==e),n=this._groupsContainer.querySelector(`div.group-items[group="${e}"]`),o=n.hasAttribute("selected");n.toggleAttribute("selected",!o),t.forEach(e=>e.toggleAttribute("dimmed",!o))})()}null===e&&(this._groupsContainer.querySelectorAll("div.group-items").forEach(e=>e.removeAttribute("selected")),Array.from(i).forEach(e=>e.removeAttribute("dimmed")))})},window.SoDialogPreview=this}willUpdate(e){e.has("_sidebarConfig")&&this._sidebarConfig&&bo(this._previewPanels)&&(this._previewPanels=this._computePreviewPanels(),bo(this._previewPanels))}firstUpdated(){if(this._sidebarConfig){this._collapsedGroups=new Set(this._sidebarConfig.default_collapsed||[]);const e=ie(this._sidebarConfig.color_config,this.hass);this._colorConfigMode=e?"dark":"light",setTimeout(()=>{this._setTheme(this._colorConfigMode)},0)}this._addNotification()}shouldUpdate(e){return e.has("invalidConfig")&&!0===this.invalidConfig&&(this.invalidConfig=!0),e.has("_sidebarConfig")&&this._sidebarConfig,!0}updated(e){if(super.updated(e),e.has("_previewPanels")&&this._previewPanels&&(this._ready=!0),e.has("_sidebarConfig")&&this._sidebarConfig){const t=e.get("_sidebarConfig"),i=this._sidebarConfig;t&&i&&(this._updatePanelConfig(t,i),this._updateThemeChange(t,i),this._updateNotificationChange(t,i))}if(e.has("_colorConfigMode")&&this._colorConfigMode){const t=e.get("_colorConfigMode"),i=this._colorConfigMode;t&&i&&t!==i&&this._setTheme(i)}e.has("_ready")&&this._ready&&this._handleNotifyChange()}_updatePanelConfig(e,t){const i=["custom_groups","bottom_groups","bottom_items","bottom_grid_items","hidden_items","new_items"].reduce((i,n)=>(i[n]=!Ef(e[n],t[n]),i),{}),n=!Ef(Object.keys(e.custom_groups||{}),Object.keys(t.custom_groups||{})),o=!Ef(Object.keys(e.bottom_groups||{}),Object.keys(t.bottom_groups||{})),s=e.move_settings_from_fixed!==t.move_settings_from_fixed;Object.values(i).some(e=>e)||n||o?this._updateListbox(t):s&&this.requestUpdate()}_updateThemeChange(e,t){const i=e.color_config?.custom_theme?.theme,n=t.color_config?.custom_theme?.theme;if(!Ef(i,n))return void 0===n?(this.style="",void setTimeout(()=>this._setTheme("default"),200)):void this._setTheme(this._colorConfigMode)}_updateNotificationChange(e,t){const i=!Ef(e.notification,t.notification),n=JSON.parse(JSON.stringify(e.new_items?.every(e=>e.notification)!==t.new_items?.every(e=>e.notification)));(i||n)&&this._handleNotifyChange()}_addNotification(){if(!this._ready)return;const e=this._panelsList.querySelectorAll("a"),{new_items:t,notification:i}=this._sidebarConfig||{},n={...i||{},...Array.from(t||[]).filter(e=>void 0!==e.notification).reduce((e,t)=>(e[t.title]=t.notification,e),{})};n&&Object.keys(n).length>0&&Object.entries(n).forEach(([t,i])=>{const n=Array.from(e).find(e=>e.getAttribute("data-panel")===t);n&&this._subscribeNotification(n,i)})}_subscribeNotification(e,t){let i=e.querySelector("span.notification-badge"),n=e.querySelector("ha-icon.notification-badge");i||n||(i=document.createElement("span"),i.classList.add("notification-badge"),e.querySelector("div.icon-item")?.appendChild(i),n=document.createElement("ha-icon"),n.classList.add("notification-badge"),e.querySelector("div.icon-item")?.appendChild(n));this._subscribeTemplate(t,e=>{e?"string"==typeof e&&Kd(e)?(i.remove(),n.setAttribute("icon",e)):(n.remove(),i.innerHTML=e):(i.remove(),n.remove())})}_subscribeTemplate(e,t){this.hass&&bu(e)&&gu(this.hass.connection,e=>{t(e.result)},{template:e??"",variables:{config:e,user:this.hass.user.name},strict:!0})}_handleNotifyChange(){const e=this._panelsList?.querySelectorAll(".notification-badge");e&&(e.forEach(e=>e.remove()),setTimeout(()=>{this._addNotification()},0))}_updateListbox(e){e||(e=this._sidebarConfig),this._ready=!1,this._previewPanels=this._computePreviewPanels()}_computePreviewPanels(){const e={},{custom_groups:t,bottom_groups:i,bottom_items:n,bottom_grid_items:o}=this._sidebarConfig||{};return t&&(e.custom_groups={},Object.entries(t).forEach(([t,i])=>{e.custom_groups[t]=i.map(e=>this._getPanelInfo(e))})),i&&(e.bottom_groups={},Object.entries(i).forEach(([t,i])=>{e.bottom_groups[t]=i.map(e=>this._getPanelInfo(e))})),n&&(e.bottom_items=n.map(e=>this._getPanelInfo(e))),o&&(e.bottom_grid_items=o.map(e=>this._getPanelInfo(e))),e}_setTheme(e){let t=this.hass.themes.theme;const i=this._sidebarConfig?.color_config?.custom_theme?.theme||void 0;i&&(t=i),Z(this,this.hass,t,e),setTimeout(()=>{this._getDefaultColors()},200)}_getDefaultColors(){const e=au(this);this._baseColorFromTheme=e}render(){const e=is(this.hass);return Xe` <div class="divider-preview" style=${this._computePreviewStyle()}>
      ${this._renderHeader()}
      <div class="panels-list">
        <div class="wrapper">
          <div class="groups-container before-spacer">
            ${(()=>{const t=this._getPanelInfo(e);return this._renderPanel(t)})()} ${this._renderCustomGroups()} ${this._renderUngroupedPanels()}
          </div>
        </div>
        <div class="spacer"></div>
        <div class="after-spacer">
          ${bo(this._previewPanels?.bottom_groups)?Qe:Xe`
                <div class="divider"></div>
                <div class="bottom-groups-panel">${this._renderBottomGroups()}</div>
              `}
          ${bo(this._previewPanels?.bottom_items)?Qe:Xe`
                <div class="divider"></div>
                <div class="bottom-panel">${this._renderBottomPanels()}</div>
              `}
          ${bo(this._previewPanels?.bottom_grid_items)?Qe:Xe`
                <div class="divider"></div>
                <div class="bottom-grid-panel">${this._renderBottomGridPanels()}</div>
              `}
          ${this._dialog._settingItemMoved?Qe:Xe`<div class="divider"></div>
                ${this._renderPanel(this._getPanelInfo("config"))}`}
        </div>
      </div>
    </div>`}_renderCustomGroups(){const e=this._previewPanels?.custom_groups;return e?Object.entries(e).map(([e,t])=>{const i=e===J.UNCATEGORIZED_ITEMS,n=this._collapsedGroups.has(e);return Xe`${i?Qe:Xe`<div class="divider-container" group=${e} @click=${()=>this._toggleColapsed(e)}>
              <div class="added-content" group=${e} ?collapsed=${n}>
                <ha-icon icon="mdi:chevron-down"></ha-icon>
                <span>${e.trim()}</span>
              </div>
            </div>`}
        <div class="group-items" ?collapsed=${!i&&n} group=${e}>
          ${t.map(e=>this._renderPanel(e))}
        </div>`}):[]}_renderBottomGroups(){const e=this._previewPanels?.bottom_groups;return e?Object.entries(e).map(([e,t])=>{const i=this._collapsedGroups.has(e);return Xe`<div class="divider-container" group=${e} @click=${()=>this._toggleColapsed(e)}>
          <div class="added-content" group=${e} ?collapsed=${i}>
            <ha-icon icon="mdi:chevron-down"></ha-icon>
            <span>${e.trim()}</span>
          </div>
        </div>
        <div class="group-items" ?collapsed=${i} group=${e}>
          ${t.map(e=>this._renderPanel(e))}
        </div>`}):[]}_renderBottomPanels(){const e=this._previewPanels?.bottom_items;return e?e.map(e=>this._renderPanel(e)):[]}_renderUngroupedPanels(){const e=this._dialog.ungroupedItems||[];if(0===e.length)return[];return e.map(e=>this._getPanelInfo(e)).map(e=>this._renderPanel(e))}_renderBottomGridPanels(){const e=this._previewPanels?.bottom_grid_items;return e?e.map(e=>this._renderPanel(e,!0)):[]}_renderPanel(e,t=!1){const{icon:i,title:n,url_path:o}=e;return Xe`<a data-panel=${o??n} @click=${()=>{this._dispatchEvent("item-clicked",e.url_path??e.title)}}>
      <div class="icon-item" ?grid-item=${t}>
        <ha-icon .icon=${i}> </ha-icon><span class="item-text">${n}</span>
      </div>
    </a>`}_renderHeader(){const{header_title:e,hide_header_toggle:t,custom_groups:i}=this._sidebarConfig||{},n=i?Object.keys(i):[],o=this._collapsedGroups.size===n.length;return Xe`<div class="menu-title">
      ${e||"Home Assistant"}
      ${t||0===n.length?Qe:Xe`<ha-icon
            .icon=${o?"mdi:plus":"mdi:minus"}
            class="collapse-toggle"
            @click=${()=>this._handleCollapsedToggle()}
          ></ha-icon>`}
    </div>`}_handleCollapsedToggle(){const e=this._sidebarConfig?.custom_groups;if(!e)return;const t=Object.keys(e);this._collapsedGroups.size===t.length?this._collapsedGroups=new Set:this._collapsedGroups=new Set(t),this.requestUpdate()}_toggleBottomPanel(e,t=!0){this._collapsedGroups=new Set(Object.keys(this._previewPanels?.custom_groups||{})),this.requestUpdate(),this.updateComplete.then(()=>{const i={[_.BOTTOM_ITEMS]:"div.bottom-panel",[_.BOTTOM_GRID_ITEMS]:"div.bottom-grid-panel",[_.BOTTOM_GROUPS]:"div.bottom-groups-panel"},n=this.shadowRoot?.querySelector(i[e]);n&&(this._groupsContainer.scrollTo(0,this._groupsContainer.scrollHeight-n.scrollHeight),n.scrollIntoView({behavior:"smooth",block:"nearest"}),n.toggleAttribute("selected",e&&!t),e&&t&&(n.classList.add("hight-light"),n.addEventListener("animationend",()=>{n.classList.remove("hight-light")})))})}_hightlightItem(e){if(!e)return void Array.from(this._itemAnchorList).forEach(e=>e.removeAttribute("highlight"));const t=Array.from(this._itemAnchorList).find(t=>t.getAttribute("data-panel")===e);t&&(Array.from(this._itemAnchorList).forEach(e=>e.removeAttribute("highlight")),t.setAttribute("highlight",""))}_dispatchEvent(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}_computePreviewStyle(){const e=this._sidebarConfig?.text_transformation||"capitalize",t=this._colorConfigMode,i=this._sidebarConfig?.color_config||{},n=i?.border_radius||0,o=i?.[t]||{},s=ru(o?.custom_styles||{}),r=e=>o?.[e]?`${o[e]} !important`:this._baseColorFromTheme[e],a=!0===this._sidebarConfig?.force_transparent_background,l={"--divider-color":r("divider_color"),"--divider-bg-color":r("background_color"),"--divider-border-top-color":r("border_top_color"),"--scrollbar-thumb-color":r("scrollbar_thumb_color"),"--sidebar-background-color":a?"transparent":r("custom_sidebar_background_color"),"--divider-border-radius":`${n}px`,"--sidebar-text-color":r("divider_text_color"),"--sidebar-icon-color":r("sidebar_icon_color"),"--sidebar-text-transform":e,...s};return eg(l)}_setCustomTheme(e,t){this.style="",Z(this,this.hass,e,t),setTimeout(()=>{this._getDefaultColors()},200)}static get styles(){return[ue`
        :host([invalid-config]) {
          filter: blur(5px) grayscale(1);
          pointer-events: none;
        }

        :host *[hidden] {
          display: none !important;
        }
        :host *[dimmed] {
          opacity: 0.1;
          pointer-events: none;
        }

        :host {
          --preview-header-height: 56px;
          --selected-container-color: rgb(from var(--primary-color) r g b / 0.4);
          /* background-color: var(--clear-background-color, rgba(0, 0, 0, 0.2)); */
          min-height: 100%;
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          box-sizing: border-box;
          /* max-height: calc(var(--mdc-dialog-min-height, 700px) - 40px); */
        }

        :host ha-spinner {
          display: flex;
          place-self: center;
        }
        .menu-title {
          display: flex;
          height: var(--preview-header-height);
          width: 100%;
          color: var(--sidebar-text-color);
          border-bottom: 1px solid var(--divider-color);
          font-size: 20px;
          align-items: center;
          padding-inline-start: 0.5em;
          justify-content: space-between;
          box-sizing: border-box;
        }

        .panels-list {
          display: flex;
          flex-direction: column;
          height: calc(
            var(--config-section-height, var(--mdc-dialog-min-height, 700px)) - var(--preview-header-height)
          );
          max-height: calc(100% - var(--preview-header-height));
        }
        .wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 0;
          flex: 1;
        }
        .groups-container {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          scrollbar-color: var(--scrollbar-thumb-color) transparent;
          scrollbar-width: thin;
        }
        .groups-container.before-spacer {
          padding-bottom: 0;
        }
        .after-spacer {
          padding-top: 0;
          flex-shrink: 0;
          min-height: 0;
          /* Cap the bottom area so the top section stays visible; scroll internally when it overflows */
          max-height: 60%;
          overflow-y: auto;
          overflow-x: hidden;
          scrollbar-color: var(--scrollbar-thumb-color) transparent;
          scrollbar-width: thin;
        }

        .divider-preview {
          display: block;
          position: relative;
          align-items: center;
          max-width: 260px;
          height: auto;
          width: 100%;
          background-color: var(--sidebar-background-color);
          overflow: hidden;
          margin: 0.5rem auto;
          /* border: 1px solid var(--theme-border-color); */
        }
        .divider-preview::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 1px solid var(--theme-border-color);
          pointer-events: none;
          background-color: var(--drawer-background-color);
          z-index: -1;
        }

        @media all and (max-width: 800px), all and (max-height: 500px) {
          .divider-preview {
            margin: 10px auto 0;
            max-height: 580px;
          }
        }

        .divider-container {
          padding: 0;
          margin-top: 1px;
          box-sizing: border-box;
        }

        .added-content {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          color: var(--sidebar-text-color);
          background-color: var(--divider-bg-color);
          letter-spacing: 1px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border-top: 1px solid var(--divider-border-top-color);
          border-radius: var(--divider-border-radius, none);
          box-sizing: border-box;
          padding-left: 12px;
          padding-inline-end: initial;
          min-height: 40px;
          text-transform: var(--sidebar-text-transform, capitalize);
          &:hover {
            color: var(--primary-color);
            background-color: rgb(from var(--primary-color) r g b / 0.1);
          }
        }

        .added-content > span,
        .added-content > ha-icon {
          pointer-events: none;
          transition: all 150ms ease;
        }

        .divider-container:hover .added-content > span {
          transform: translateX(30px);
          transition: all 150ms ease;
        }

        .added-content > span {
          transform: translateX(30px);
        }
        .added-content[collapsed] > span,
        .added-content.collapsed > span {
          transform: translateX(10px);
        }
        .added-content[collapsed] > ha-icon,
        .added-content.collapsed > ha-icon {
          transform: rotate(-90deg);
        }

        .group-items {
          max-height: 1000px;
          display: block;
          /* transition: all 0.3s ease; */
        }
        .bottom-panel,
        .bottom-groups-panel {
          display: block;
        }
        .bottom-panel[selected],
        .bottom-groups-panel[selected],
        .group-items[selected] {
          border: 1px solid var(--selected-container-color);
        }
        .group-items[collapsed],
        .group-items.collapsed {
          max-height: 0px;
          overflow: hidden;
        }

        .divider {
          /* padding: 10px 0; */
          display: block;
        }

        .divider::before {
          content: '';
          display: block;
          height: 1px;
          background-color: var(--divider-color);
        }
        .spacer {
          margin-top: auto;
          pointer-events: none;
          /* flex: 1; */
        }
        a {
          text-decoration: none;
          color: var(--sidebar-text-color);
          font-weight: 500;
          font-size: 14px;
          position: relative;
          display: block;
          outline: 0;
          border-radius: 4px;
          /* width: 248px; */
          cursor: pointer;
        }
        a:hover > .icon-item {
          background-color: var(--secondary-background-color);
        }
        a[highlight] {
          background-color: rgb(from var(--primary-color) r g b / 0.1);
          border: 1px solid var(--selected-container-color);
        }

        .icon-item {
          box-sizing: border-box;
          margin: 4px;
          padding-inline-start: 12px;
          border-radius: 4px;
          display: flex;
          min-height: 40px;
          align-items: center;
          flex: 1 1 0%;
          overflow: var(--md-item-overflow, hidden);
          /* align-items: var(--md-item-align-items,center); */
          gap: var(--ha-md-list-item-gap, 16px);
          padding-inline-end: 12px;
        }
        .icon-item > ha-icon {
          width: 24px;
          color: var(--sidebar-icon-color);
        }
        .icon-item span.item-text {
          /* display: block;
          max-width: 100%; */
          text-transform: capitalize;
          max-width: 100%;
          opacity: 1;
          transition-delay: 0s, 80ms;
          display: flex;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          height: 100%;
          align-items: center;
          width: 100%;
        }

        .hight-light {
          animation: highLight 1s ease-in-out infinite;
          animation-iteration-count: 3;
          animation-fill-mode: forwards;
        }

        @keyframes highLight {
          0% {
            box-shadow: 0 0 10px 0 var(--selected-container-color);
          }

          50% {
            box-shadow: 0 0 20px 0 var(--selected-container-color);
          }

          100% {
            box-shadow: 0 0 10px 0 var(--selected-container-color);
          }
        }
        .collapse-toggle {
          color: var(--primary-color);
          transition: transform 0.3s ease;
          cursor: pointer;
          opacity: 0.5;
          margin-right: 4px;
        }
        .collapse-toggle.active {
          color: var(--sidebar-icon-color);
          transform: rotate(90deg);
          transition: transform 0.3s ease;
        }
        .collapse-toggle:hover {
          color: var(--primary-color);
          opacity: 1;
        }

        .bottom-grid-panel {
          display: grid;
          grid-template-columns: repeat(auto-fit, calc(25% - 0px));
          padding: 0;
          max-height: fit-content;
        }
        .bottom-grid-panel a {
          width: calc(249px / 4 - 0px);
          display: flex;
        }
        .icon-item[grid-item] {
          padding: 0;
          padding-inline-start: 0;
          /* margin: auto auto; */
          width: 100%;
          display: flex;
          height: 48px;
        }
        .icon-item[grid-item] > ha-icon {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .icon-item[grid-item] > span.item-text {
          display: none !important;
        }

        .icon-item[grid-item] > .notification-badge {
          left: 32px;
          top: 8px;
          width: fit-content;
          min-width: 8px;
          max-width: 28px;
        }

        .notification-badge {
          position: absolute;
          left: calc(var(--app-drawer-width, 248px) - 26px);
          inset-inline-start: calc(var(--app-drawer-width, 248px) - 26px);
          inset-inline-end: initial;
          min-width: 20px;
          box-sizing: border-box;
          border-radius: 20px;
          font-weight: 400;
          background-color: var(--accent-color);
          line-height: 20px;
          text-align: center;
          padding: 0px 4px;
          color: var(--text-accent-color, var(--text-primary-color));
        }
        ha-icon.notification-badge {
          padding: 0 !important;
          color: var(--accent-color);
          background-color: transparent;
          width: auto;
        }
      `]}};ih([lh({attribute:!1})],wm.prototype,"_sidebarConfig",void 0),ih([lh({type:Boolean,reflect:!0,attribute:"invalid-config"})],wm.prototype,"invalidConfig",void 0),ih([ch()],wm.prototype,"_colorConfigMode",void 0),ih([ch()],wm.prototype,"_baseColorFromTheme",void 0),ih([ch()],wm.prototype,"_previewPanels",void 0),ih([ch()],wm.prototype,"_collapsedGroups",void 0),ih([ch()],wm.prototype,"_ready",void 0),ih([hh(".divider-preview")],wm.prototype,"_previewContainer",void 0),ih([hh(".panels-list")],wm.prototype,"_panelsList",void 0),ih([hh(".groups-container")],wm.prototype,"_groupsContainer",void 0),ih([fh("a")],wm.prototype,"_itemAnchorList",void 0),wm=ih([sh("sidebar-dialog-preview")],wm);let Am=class extends ig{constructor(){super(),this._sidebarConfig={},this._configSource="browser_storage",this._rawYaml="",this._handleBtnAction=async e=>{switch(e){case"download":let e=await hu(this,"Enter the filename","sidebar-organizer","Download","Cancel");if(null===e)return;""===e&&(e=""+(T+"_"+(new Date).toISOString().replace(/:/g,"-").split(".",1).join()));const t=this._yamlText(),i=new Blob([t],{type:"application/x-yaml"}),n=URL.createObjectURL(i);It(n,`${e}.yaml`),setTimeout(()=>URL.revokeObjectURL(n),0);break;case"copy":navigator.clipboard.writeText(this._yamlText()).then(()=>{});break;case"delete":const o="Delete";await du(this,H.CONFIRM_DELETE,o)&&([D.UI_CONFIG,D.PANEL_ORDER,D.COLLAPSE,D.HIDDEN_PANELS].forEach(e=>{ks(e)}),setTimeout(()=>{window.location.reload()},200))}}}updated(e){super.updated(e)}static get styles(){return ue`
      :host {
        --code-mirror-max-height: calc(var(--mdc-dialog-min-height) / 1.4);
      }
      :host *[hidden] {
        display: none;
      }
      .header-row {
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        --mdc-icon-button-size: 42px;
      }
      .header-row.center {
        justify-content: center;
      }
      .raw-yaml-editor {
        background: var(--code-editor-background-color, var(--card-background-color));
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        box-sizing: border-box;
        color: var(--primary-text-color);
        font-family: var(--ha-font-family-code, monospace);
        font-size: 0.9rem;
        line-height: 1.45;
        min-height: 320px;
        padding: 12px;
        resize: vertical;
        width: 100%;
      }
    `}render(){const e=vu.BTN_LABEL,t=this._sidebarConfig,i=0===Object.keys(t).length,n=Xe`<ha-alert alertType="info">${H.CONFIG_EMPTY}</ha-alert>`,o=this._editorValue(),s=this._yamlText();if("home_assistant_config"===this._configSource)return Xe`
        ${i?n:Qe}
        <textarea class="raw-yaml-editor" spellcheck="false" .value=${s} @input=${this._handleRawYamlInput}>
        </textarea>
        <div class="header-row" ?hidden=${i}>
          <div>
            <ha-button appearance="plain" size="s" @click=${()=>this._handleBtnAction("download")}
              >${e.DOWNLOAD}</ha-button
            >
            <ha-button appearance="plain" size="s" @click=${()=>this._handleBtnAction("copy")}
              >${e.COPY_TO_CLIPBOARD}</ha-button
            >
          </div>
          <ha-button appearance="plain" size="s" variant="warning" @click=${()=>this._handleBtnAction("delete")}
            >${e.DELETE}</ha-button
          >
        </div>
      `;return Xe` ${i?n:Qe}
      <ha-yaml-editor
        .hass=${this.hass}
        .defaultValue=${o}
        .copyToClipboard=${!0}
        .hasExtraActions=${!0}
        .required=${!0}
        in-dialog
        @value-changed=${this._handleConfigChange}
      >
        <div class="header-row" slot="extra-actions" ?hidden=${i}>
          <div>
            <ha-button appearance="plain" size="s" @click=${()=>this._handleBtnAction("download")}
              >${e.DOWNLOAD}</ha-button
            >
            <ha-button appearance="plain" size="s" @click=${()=>this._handleBtnAction("copy")}
              >${e.COPY_TO_CLIPBOARD}</ha-button
            >
          </div>
          <ha-button appearance="plain" size="s" variant="warning" @click=${()=>this._handleBtnAction("delete")}
            >${e.DELETE}</ha-button
          >
        </div>
      </ha-yaml-editor>`}_handleConfigChange(e){const{isValid:t,value:i}=e.detail;t&&(this._sidebarConfig=i,"home_assistant_config"===this._configSource&&this.dispatchEvent(new CustomEvent("raw-yaml-changed",{bubbles:!0,composed:!0,detail:{yaml:Ld.stringify(i)}})),this._dispatchConfig(this._sidebarConfig))}_handleRawYamlInput(e){const t=e.target.value;this.dispatchEvent(new CustomEvent("raw-yaml-changed",{bubbles:!0,composed:!0,detail:{yaml:t}}));try{const e=Ld.parse(t)||{};this._sidebarConfig=e,this._dispatchConfig(e)}catch(e){console.warn("Raw YAML is not valid yet",e)}}_yamlText(){return"home_assistant_config"===this._configSource&&this._rawYaml.trim()?this._rawYaml:Ld.stringify(this._sidebarConfig)}_editorValue(){if("home_assistant_config"!==this._configSource||!this._rawYaml.trim())return this._sidebarConfig;try{return Ld.parse(this._rawYaml)||{}}catch{return this._sidebarConfig}}_dispatchConfig(e){const t=new CustomEvent("sidebar-changed",{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(t)}};ih([lh({attribute:!1})],Am.prototype,"_sidebarConfig",void 0),ih([lh({attribute:!1})],Am.prototype,"_configSource",void 0),ih([lh({attribute:!1})],Am.prototype,"_rawYaml",void 0),ih([hh("ha-yaml-editor")],Am.prototype,"_yamlEditor",void 0),Am=ih([sh("sidebar-dialog-code-editor")],Am);let Cm=class extends ig{constructor(){super(...arguments),this._open=!1}render(){const e=this.value,t=fo(w,[d.GENERAL]),i=e===d.GENERAL||!e,n=w[e];return Xe`
      <div class="config-menu-wrapper">
        <div class="menu-info-icon-wrapper">
          <div class="move-sec">
            ${i?Qe:Xe`
                  <ha-icon-button .path=${Up} @click=${()=>this._handleItemClick(d.GENERAL)}>
                  </ha-icon-button>
                `}

            <ha-dropdown
              size="l"
              placement="bottom-start"
              @wa-hide=${e=>{e.stopPropagation(),this._open=!1}}
              @wa-show=${e=>{e.stopPropagation(),this._open=!0}}
              @wa-select=${this._handleItemClick}
              @click=${e=>e.stopPropagation()}
            >
              <ha-icon-button slot="trigger" .path=${this._open?Dp:Vp}> </ha-icon-button>

              ${Object.entries(t).map(([t,i])=>Xe`
                  <ha-dropdown-item .value=${t} .selected=${t===e}> ${i.label} </ha-dropdown-item>
                `)}
            </ha-dropdown>
          </div>
        </div>
        <div class="menu-label">
          <span class="primary">${n.label}</span>
          ${i?Xe`<span class="secondary">${n.description}</span>`:Qe}
        </div>
      </div>
      ${i?this._renderMenuContent():Qe}
    `}_renderMenuContent(){const e=fo(w,[d.GENERAL]);return Xe`<div class="tip-content">
        ${Object.entries(e).map(([e,{label:t,description:i}])=>Xe`<div class="tip-item" @click="${()=>this._handleItemClick(e)}" role="button" tabindex="0">
              <div class="tip-title">${t}</div>
              <span class="secondary">${i}</span>
            </div>`)}
      </div>
      <div class="version-footer">Version: ${I}</div> `}_handleItemClick(e){e instanceof CustomEvent&&e.stopPropagation();const t="string"==typeof e?e:e.detail.item.value,i=t!==d.GENERAL?t:"";lu(this,"menu-value-changed",{value:i})}static get styles(){return[super.styles,ue`
        :host {
          display: block;
          width: 100%;
          box-sizing: border-box;
          margin-bottom: var(--vic-gutter-gap);
          --ha-button-height: 40px !important;
          --wa-form-control-height: var(--ha-button-height);
          --vic-gutter-gap: 8px;
          --vsc-gutter-gap: 12px;
          --vic-card-padding: 12px;
          --vic-icon-size: 36px;
          --vic-icon-border-radius: 50%;
          --vic-icon-shape-color: rgba(var(--rgb-primary-text-color), 0.05);
        }
        .config-menu-wrapper {
          display: inline-flex;
          box-sizing: border-box;
          align-items: center;
          margin-inline: 4px 8px;
          width: 100%;
        }

        .config-menu-wrapper .menu-info-icon-wrapper {
          display: inline-flex;
          /* gap: var(--vic-card-padding); */
          height: inherit;
          flex: 0;
        }
        .menu-info-icon-wrapper > .move-sec {
          display: inline-flex;
          align-items: center;
        }
        ha-icon-button {
          color: var(--secondary-text-color);
          display: inline-flex;
          height: 100%;
          align-items: center;
          justify-content: center;
          outline: none;
        }

        ha-icon-button[disabled] {
          color: var(--disabled-text-color);
        }
        .menu-content-wrapper .menu-info-icon,
        .config-menu-wrapper .menu-icon {
          width: 36px;
          height: 36px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          cursor: pointer;
          color: var(--secondary-text-color);
          padding-inline-end: var(--vic-card-padding, 8px);
          /* transition: color 400ms cubic-bezier(0.075, 0.82, 0.165, 1); */
          pointer-events: auto;
        }
        .config-menu-wrapper .menu-icon.active,
        .config-menu-wrapper .menu-icon:hover {
          color: var(--primary-color);
        }

        .config-menu-wrapper .menu-icon-inner {
          position: relative;
          width: var(--vic-icon-size);
          height: var(--vic-icon-size);
          font-size: var(--vic-icon-size);
          border-radius: var(--vic-icon-border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--vic-icon-shape-color);
          transition-property: background-color, box-shadow;
          transition-duration: 280ms;
          transition-timing-function: ease-out;
        }

        .config-menu-wrapper .menu-content-wrapper {
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: center;
          height: auto;
        }

        .menu-content-wrapper .menu-info-icon {
          padding-inline-end: 0;
        }

        .menu-content-wrapper .menu-info-icon:hover {
          color: var(--primary-color);
          background-color: rgba(var(--rgb-secondary-text-color), 0.1);
          transition: all 200ms ease-in-out;
        }

        ha-icon-button.add-btn {
          background-color: var(--app-header-edit-background-color, #455a64);
          border-radius: 50%;
          height: 24px;
          width: 24px;
        }
        .position-badge {
          display: block;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          line-height: var(--ha-line-height-normal);
          box-sizing: border-box;
          font-weight: var(--ha-font-weight-medium);
          text-align: center;
          font-size: var(--ha-font-size-m);
          background-color: var(--app-header-edit-background-color, #455a64);
          color: var(--app-header-edit-text-color, white);
          &:hover {
            background-color: var(--primary-color);
            color: white;
          }
        }

        .menu-content-wrapper.hidden {
          max-width: 0px;
          overflow: hidden;
          opacity: 0;
          transition: all 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
          max-height: 0px;
        }

        .menu-label {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-evenly;
          flex: 1;
        }

        .menu-label .primary {
          font-weight: 500;
          font-size: 1rem;
          white-space: nowrap;
          position: relative;
          text-overflow: ellipsis;
          overflow: hidden;
          text-transform: uppercase;
          line-height: 1;
        }

        .menu-label .secondary {
          color: var(--secondary-text-color);
          /* text-transform: capitalize; */
          letter-spacing: 0.5px;
          font-size: smaller;
          line-height: 150%;
        }

        .menu-selector.hidden {
          max-width: 0;
          overflow: hidden;
          opacity: 0;
        }

        .menu-selector {
          max-width: 100%;
          width: 100%;
          opacity: 1;
          display: flex;
          transition: all 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        .tip-content {
          display: flex;
          flex-direction: column;
          margin-top: var(--vic-gutter-gap);
          gap: var(--vic-gutter-gap);
        }

        [role='button'] {
          cursor: pointer;
          pointer-events: auto;
        }
        [role='button']:focus {
          outline: none;
        }
        [role='button']:hover {
          background-color: var(--secondary-background-color);
        }

        .tip-item {
          /* background-color: #ffffff; */
          padding: var(--ha-space-2, 8px) var(--ha-space-3, 12px);
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          transition: background-color 0.3s ease;
          /* pointer-events: all; */
        }

        /* .tip-item:hover {
        background-color: var(--secondary-background-color);
      } */

        .tip-title {
          text-transform: capitalize;
          color: var(--primary-text-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          font-size: var(--ha-font-size-l);
          line-height: 2;
        }

        .tip-item span.secondary {
          color: var(--secondary-text-color);
          font-size: var(--ha-font-size-m);
        }

        .click-shrink {
          transition: transform 0.1s;
        }

        .click-shrink:active {
          transform: scale(0.9);
        }

        .version-footer {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0.5rem;
          margin-top: var(--vic-card-padding);
          color: var(--secondary-text-color);
        }
      `]}};ih([lh()],Cm.prototype,"value",void 0),ih([ch()],Cm.prototype,"_open",void 0),Cm=ih([sh("sidebar-dialog-menu")],Cm);const Em={title:"Title",url_path:"URL Path",component_name:"Component Name",group:"Group",show_in_sidebar:"Hidden",notification:"Notification"};let Sm=class extends mt{constructor(){super(...arguments),this.items=[],this.columns=[],this.hideHeader=!1,this.narrow=!1}createRenderRoot(){return this}render(){const e=Xe`
      <div class="item-row top">
        <div class="cell icon"></div>
        <div class="cell grows">${Em.title}</div>
        ${this.columns.length>0&&!this.narrow?this.columns.map(e=>Xe`<div class="cell" ?square=${["show_in_sidebar","notification"].includes(e)}>
                  ${Em[e]||e}
                </div>`):Qe}
        <div class="cell icon"></div>
      </div>
    `;return Xe` <div class="data-table">
      ${this.hideHeader?Qe:e}
      ${this.items.map(e=>{const t=!1===e.show_in_sidebar?Xe`<ha-icon icon="mdi:eye-off"></ha-icon>`:Qe,i=e.notification?Xe`<ha-icon icon="mdi:check"></ha-icon>`:Qe;return Xe`
          <div class="item-row">
            <div class="cell icon">
              <ha-icon icon=${e.icon??"mdi:help-circle-outline"}></ha-icon>
            </div>
            <div class="cell grows">${e.title}</div>
            ${this.columns.length>0&&!this.narrow?this.columns.map(n=>Xe`<div class="cell" ?square=${["show_in_sidebar","notification"].includes(n)}>
                      ${"show_in_sidebar"===n?t:"notification"===n?i:e[n]??"-"}
                    </div>`):Qe}
            <div class="cell icon">${this.itemActionRenderer?this.itemActionRenderer(e):Qe}</div>
          </div>
        `})}
    </div>`}};ih([lh({type:Array})],Sm.prototype,"items",void 0),ih([lh({attribute:!1})],Sm.prototype,"columns",void 0),ih([lh({attribute:!1})],Sm.prototype,"itemActionRenderer",void 0),ih([lh({type:Boolean,attribute:"hide-header"})],Sm.prototype,"hideHeader",void 0),ih([lh({type:Boolean,reflect:!0})],Sm.prototype,"narrow",void 0),Sm=ih([sh("so-data-item-table")],Sm);const Om=ue`
  :host {
    --ha-card-border-radius: var(--ha-border-radius-md);
    --expansion-panel-content-padding: 0;
  }
  :host .top {
    background-color: var(--secondary-background-color) !important;
    color: var(--secondary-text-color);
  }
  :host(.uncategorized) .top {
    background-color: transparent !important;
    border: 0.5px solid var(--divider-color);
  }
`.toString();let Im=class extends ig{constructor(){super(h.ALL_ITEMS),this._showByGroup=!1,this._renderGroupActionDropdown=(e,t)=>{let i=["edit-items","preview-item"];e===h.CUSTOM_GROUPS&&t!==J.UNCATEGORIZED_ITEMS?i.push("divider","delete"):t===J.UNCATEGORIZED_ITEMS&&i.push("divider","uncategorized-as-group");const n=Nu(i);return Xe`
      <ha-dropdown
        slot="icons"
        @click=${Pt}
        @wa-select=${this._handleActionGroupClick}
        .section=${e}
        .groupName=${t}
      >
        <ha-button size="s" variant="neutral" appearance="filled" with-caret slot="trigger">more</ha-button>
        ${n.map(i=>$u({item:i,option:{groupName:t,section:e,checked:this._dialog._uncategorizedIsActive}}))}
      </ha-dropdown>
    `},this._computeExpansionOptions=e=>({...e,noStyle:!0,outlined:!1,class:`group-data-wrapper ${e.class??""}`}),this._toggleUncategorizedItemsActive=()=>{lu(this,"group-action",{action:"uncategorized-as-group",key:J.UNCATEGORIZED_ITEMS})},window.SoPanelAll=this}connectedCallback(){super.connectedCallback(),this._showByGroup="true"===xs(D.SHOW_BY_GROUP)}updated(e){super.updated(e),(e.has("_showByGroup")||e.has("_sidebarConfig"))&&this._expansionPanels.forEach(e=>{this._styleManager.addStyle(Om,e.shadowRoot)})}render(){return Xe`
      <div class="all-panels-wrapper">
        <div class="group-title">
          <div></div>
          <ha-dropdown @wa-select=${this._handleGroupByPanelType}>
            <ha-button with-caret size="s" slot="trigger" appearance="outline"
              >Display by: ${this._showByGroup?"Groups":"Type"}</ha-button
            >
            <ha-dropdown-item .value=${"groups"} ?selected=${this._showByGroup}>Groups</ha-dropdown-item>
            <ha-dropdown-item .value=${"type"} ?selected=${!this._showByGroup}>Type</ha-dropdown-item>
            <wa-divider></wa-divider>
            <ha-dropdown-item @click=${()=>this._toggleExpansionPanels()}>Expand/Collapse All</ha-dropdown-item>
          </ha-dropdown>
        </div>
        ${this._showByGroup?this._renderByGroupType():this._renderPanelsByType()}
      </div>
    `}_renderPanelsByType(){const e=this._dialog._newItems,t={data:{items:this._dialog._initCombiPanels.filter(t=>!e.includes(t)),columns:["url_path","group","notification","show_in_sidebar"]},expansionOptions:this._computeExpansionOptions({id:"system-panels",header:"System Panels"})};return Xe`
      ${this._renderTableGrouped(t)}
      ${e.length>0?this._renderTableGrouped({data:{items:e,columns:["group","notification"]},expansionOptions:this._computeExpansionOptions({id:"new-items",header:"User Created",iconSlot:Xe`<ha-button
                size="s"
                variant="brand"
                appearance="filled"
                slot="icons"
                @click=${()=>lu(this,"navigate-section",{section:d.NEW_ITEMS})}
                >Edit items</ha-button
              >`})}):Qe}
    `}_computeGroupData(e,t,i,n,o,s){if(!i||"object"==typeof i&&bo(i)||Array.isArray(i)&&!i.length)return null;!s&&g.includes(e)&&(s=this._renderGroupActionDropdown(e,t));return{data:{items:Array.isArray(i)?i:Object.values(i).flat(),columns:o,itemActionRenderer:n},expansionOptions:this._computeExpansionOptions({id:e,header:t,iconSlot:s,class:t===J.UNCATEGORIZED_ITEMS?"uncategorized":void 0})}}_renderByGroupType(){const{custom_groups:e={},bottom_items:t=[],bottom_grid_items:i=[]}=mo(this._sidebarConfig,[J.CUSTOM_GROUPS,J.BOTTOM_ITEMS,J.BOTTOM_GRID_ITEMS]),n=this._dialog._uncategorizedIsActive?[]:this._dialog.uncategorizedItems,o=Object.entries(e).map(([e,t])=>this._computeGroupData(h.CUSTOM_GROUPS,e,t)).filter(Boolean),s=[t.length?this._computeGroupData(h.BOTTOM_PANELS,J.BOTTOM_ITEMS,t):null,i.length?this._computeGroupData(h.BOTTOM_PANELS,J.BOTTOM_GRID_ITEMS,i):null].filter(Boolean),r=n.length?this._computeGroupData(J.UNCATEGORIZED_ITEMS,J.UNCATEGORIZED_ITEMS,n):null;return Xe`
      ${this._renderGroupSection(h.CUSTOM_GROUPS,o,!0)}
      ${r?this._renderSectionContent(J.UNCATEGORIZED_ITEMS,this._renderTableGrouped(r),{label:"Set items to grouped",onClick:this._toggleUncategorizedItemsActive,hightLight:!0}):Qe}
      ${this._renderGroupSection(h.BOTTOM_PANELS,s,!1,!1)}
    `}_renderGroupSection(e,t,i=!0,n=!0){return t.length?this._renderSectionContent(e,Xe`${t.map(e=>this._renderTableGrouped(e,i))}`,void 0,n):Qe}_renderSectionContent(e,t,i,n=!0){return!i&&g.includes(e)&&(i={label:"Expand/Collapse All",onClick:()=>this._toggleExpansionPanels(e)}),Xe`
      <div class="group-title">
        <div>${v[e]??e}</div>
        ${i?Xe`<ha-button
              size="s"
              variant=${i.hightLight?"brand":"neutral"}
              appearance="plain"
              @click=${i.onClick}
              >${i.label}</ha-button
            >`:Qe}
      </div>
      <ha-sortable handle-selector=".sortable-table" .disabled=${Dt||!n}>
        <section class="group-wrapper">${t}</section>
      </ha-sortable>
    `}_renderTableGrouped(e,t=!1){const i=e.data.columns??["url_path","component_name"],n=Xe` <so-data-item-table
      .items=${this._computePanelInfoList(e.data.items)}
      .columns=${i}
      .narrow=${this.narrow}
      .itemActionRenderer=${e.data.itemActionRenderer}
    ></so-data-item-table>`,o=e.expansionOptions?At({options:e.expansionOptions,content:n}):n,s=Xe`
      <div class="sortable-table">
        <ha-icon-button class="drag-handle" .path=${Rp} title="Drag to reorder"></ha-icon-button>
        ${o}
      </div>
    `;return e.expansionOptions?t?s:o:n}_handleActionGroupClick(e){if(e.stopPropagation(),!e.detail||void 0===e.detail.item?.value)return;const{section:t,groupName:i}=e.target,n=e.detail.item.value;lu(this,"group-action",{action:n,key:i,type:t})}_toggleExpansionPanels(e){if(!this._expansionPanels.length)return;let t=Array.from(this._expansionPanels);e&&(t=Array.from(this._expansionPanels).filter(t=>t.id===e));const i=t.some(e=>e.hasAttribute(n.EXPANDED));t.forEach(e=>{i?e.removeAttribute(n.EXPANDED):e.setAttribute(n.EXPANDED,"")})}_handleGroupByPanelType(e){if(e.stopPropagation(),!e.detail||void 0===e.detail.item?.value)return;const t=e.detail.item.value;this._showByGroup="groups"===t,Ts(D.SHOW_BY_GROUP,this._showByGroup)}static get styles(){return[super.styles,ue`
        *::-webkit-scrollbar {
          width: 0.2em;
          height: 0.2em;
        }
        *::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
        }
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
        }

        .all-panels-wrapper {
          display: block;
          position: relative;
          max-height: calc(var(--so-content-fullscreen-max-height) - 48px);
          overflow: auto;
        }
        .group-title {
          scroll-snap-align: start;
          position: sticky;
          top: 0;
          z-index: 1;
          background-color: var(--mdc-theme-surface);
          display: flex;
          align-items: center;
          height: 40px;
          flex-direction: row;
          padding-bottom: var(--side-dialog-gutter);
        }
        .group-title div {
          font-size: var(--ha-font-size-l);
          margin-inline-start: var(--ha-space-2);
          line-height: var(--ha-line-height-normal);
          color: var(--secondary-text-color);
          flex-grow: 1;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          min-width: 0;
        }
        .group-wrapper {
          overflow: auto;
          max-height: calc(var(--so-content-fullscreen-max-height) - 48px);
          scroll-snap-type: y mandatory;
        }
        .group-data-wrapper {
          scroll-snap-align: start;
          margin-bottom: var(--side-dialog-gutter);
        }
        .group-data-wrapper .uncategorized {
          background-color: var(--disabled-background-color);
        }
        .group-data-wrapper so-item-row:not(:first-child) > .item-row {
          border-top: 0.5px solid var(--divider-color);
        }
        .sortable-table {
          display: flex;
          flex-direction: row;
          width: 100%;
          align-items: center;
          margin-bottom: var(--side-dialog-gutter);
        }
        .sortable-table .drag-handle {
          align-self: start;
          cursor: grab;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sortable-table .group-data-wrapper {
          width: 100%;
          margin-bottom: 0;
        }
      `]}};ih([lh({attribute:!1})],Im.prototype,"_sidebarConfig",void 0),ih([fh("ha-expansion-panel")],Im.prototype,"_expansionPanels",void 0),ih([lh({attribute:!1})],Im.prototype,"_showByGroup",void 0),Im=ih([sh("so-panel-all")],Im);const xm=ue`
  :host > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  }
`.toString();var Tm;!function(e){e.GROUPS="groups",e.ITEMS="items"}(Tm||(Tm={}));const km={items:"Individual Items Configuration",groups:"Groups Configuration"},Nm={items:"Select an item",groups:"Select a group"},$m={groups:"A group entry applies to all panels in the group.",items:"If a panel is included in a group with a visibility setting, the individual panel setting will be ignored in favor of the group setting."};let Lm=class extends ig{constructor(){super(h.VISIBILITY),this._selectedSection=b.HIDDEN_ITEMS,window.SoPanelVisibility=this}updated(e){e.has("_selectedSection")&&this._selectedSection===b.HIDDEN_ITEMS&&this._changeSelectorGridStyle()}async _changeSelectorGridStyle(){await new Promise(e=>setTimeout(e,50));const e=this.shadowRoot?.querySelector("ha-selector#selector-hidden_items")?.shadowRoot?.querySelector("ha-selector-select");e&&this._styleManager.addStyle(xm,e.shadowRoot||e)}get _visibilityTemplatesData(){const e=this._sidebarConfig?.visibility_templates||{};return{items:[...Array.from(Object.entries(e?.items||{})).map(([e,t])=>({name:e,value:t}))],groups:[...Array.from(Object.entries(e?.groups||{})).map(([e,t])=>({name:e,value:t}))]}}render(){const e=y.map(e=>({value:e,label:v[e]})),t=Xe` <ha-control-select
      .value=${this._selectedSection}
      .options=${e}
      @value-changed=${e=>{this._selectedSection=e.detail.value}}
    ></ha-control-select>`,i={[b.HIDDEN_ITEMS]:this._renderHiddenItems(),[b.VISIBILITY_TEMPLATES]:this._renderVisibilityTemplates()};return Xe`
      ${t}
      <div class="config-content">${i[this._selectedSection]}</div>
    `}_renderHiddenItems(){const e=this._sidebarConfig?.hidden_items||[],t=this._panelsWithoutNewItems,i=this._computeSelectorOptions(t,"list",!1,!1),n=Object.entries(e).map(([,e])=>e);return Xe` <div class="items-container" style="flex: none">
      <div class="header-row flex-icon">
        <span>HIDDEN ITEMS</span>
      </div>
      ${this._createHaSelector(i,n,"hidden_items")} ${this._renderSpacerDiv()}
    </div>`}_renderVisibilityTemplates(){const e=this._visibilityTemplatesData;return Xe`
      ${Object.values(Tm).map(t=>{const i=this._computeOptionsSelector(t),n=e[t];return this._renderTemplateConfig(t,this._createHaSelectorObject(i,n,t))})}
    `}_renderTemplateConfig(e,t){return At({options:{header:km[e],noStyle:!0,expanded:!0},content:t})}_createHaSelectorObject(e,t,i,n){const o={object:{label_field:"name",description_field:"value",multiple:!0,fields:{name:{label:Nm[i]||"Name",selector:e,required:!1},value:{label:"Visibility Template",selector:{template:{preview:!0}},required:!1}}}};return Xe`<ha-selector
      .hass=${this.hass}
      .value=${t}
      .selector=${o}
      .required=${!1}
      .key=${i}
      .subKey=${n}
      .label=${$m[i]||""}
      id=${yt(void 0!==i?`selector-${i}`:void 0)}
      @value-changed=${this._valueChanged}
    ></ha-selector>`}_valueChanged(e){e.stopPropagation();const t=e.target?.key,i=e.detail.value;console.debug("Value changed for key:",t,"New value:",i);const n=Array.isArray(i)?i.reduce((e,t)=>(t.name&&(e[t.name]=t.value),e),{}):{};this._sidebarConfig={...this._sidebarConfig,visibility_templates:{...this._sidebarConfig.visibility_templates,[t||""]:n}},lu(this,"sidebar-config-changed",{config:this._sidebarConfig})}_computeOptionsSelector(e){const t=Object.keys(this._sidebarConfig?.custom_groups||{})||[],{groups:i={},items:n={}}=mo(this._sidebarConfig?.visibility_templates||{},["groups","items"]),o=(e===Tm.GROUPS?t.filter(e=>"uncategorized_items"!==e):this._panelsWithoutNewItems).map(e=>({value:e,label:this._utils.PANEL.getPanelTitleFromUrlPath(this.hass,e)||e})),s=e===Tm.GROUPS?Object.keys(i):Object.keys(n);return{select:{multiple:!1,custom_value:!1,mode:"dropdown",options:o.filter(e=>!s.includes(e.value)),sort:!0,required:!1}}}_handleSelectorChange(e){console.debug("selector change from SoPanelVisibility handler"),e.stopPropagation();const{key:t,subKey:i}=e.target,n=e.detail.value;if(console.debug("value changed:",n,"key:",t,"subKey:",i),"hidden_items"===t){this._updateInitPanels(n);const e=this._utils.CONFIG.validateConfig(this._sidebarConfig,n);return void this._configChanged({...e})}}_updateInitPanels(e){const t=this._dialog._initCombiPanels;let i=[...this._dialog._initPanelOrder||[]];i=t.filter(t=>!e.includes(t)),this._dialog._initPanelOrder=i}static get styles(){return[super.styles,ue``]}};ih([lh({attribute:!1})],Lm.prototype,"_sidebarConfig",void 0),ih([ch()],Lm.prototype,"_selectedSection",void 0),Lm=ih([sh("so-panel-visibility")],Lm);class Dm{constructor(e,t){this.editorDialog=e,this.sidebarConfig=t}}let Pm=class extends ig{constructor(){super(d.GENERAL),this.fullscreen=!1,this._connected=!1,this._sidebarConfig={},this._useConfigFile=!1,this._configSource="browser_storage",this._tabState=L.BASE,this._configLoaded=!1,this._currSection=d.GENERAL,this._initPanelOrder=[],this._initCombiPanels=[],this._newItemMap=new Map,this._newItems=[],this._panelConfigMap=new Map,this._pinnedGroupsMap=new Map,this._settingItemMoved=!1,this._uncategorizedItemsGroup=[],this._uploading=!1,this._haConfigErrors=[],this._panelWarnings=[],this._haConfigInfo={available:!1},this._profileInfo={available:!1},this._profileUsers=[],this._selectedProfile="shared",this._copySource="shared",this._rawYaml="",this._narrow=!1,this._baselineConfig={},this._setupInitConfig=async()=>{this._configLoaded=!1,this._baselineConfig=structuredClone(this._initConfig||{}),await this._refreshProfileDirectory();const e=await Bd(this.hass,$s());if(e!==this._configSource&&(this._configSource=e,this._useConfigFile="static_yaml"===e,Ls(e)),"browser_storage"!==this._configSource)if("static_yaml"!==this._configSource){if("home_assistant_profile"===this._configSource)return this._selectedProfile=this.hass.user?.id||"shared",void await this._validateHaProfile(this._selectedProfile);this._selectedProfile="shared",this._validateHaConfig()}else this._validateConfigFile();else this._validateStoragePanels()},this._validateStoragePanels=async()=>{if("browser_storage"!==this._configSource)return;const e=JSON.parse(xs(D.PANEL_ORDER)||"[]"),t=Ns(),i=this._utils.ARRAY.union(e,t),{added:n,removed:o}=await nr(this.hass,i);if(Boolean(n.length||o.length)){let i=[...e],s=[...t];if(n.length>0&&(i=[...i,...n]),o.length>0){const e=new Set(o);i=i.filter(t=>!e.has(t)),s=[...new Set([...s,...o])],Ts(D.HIDDEN_PANELS,s)}return Ts(D.PANEL_ORDER,i),this._sidebarConfig=Ds()||{},ks(D.HIDDEN_PANELS),void this._updateSidebarItems(i,s)}this._sidebarConfig=Ds()||{},ks(D.HIDDEN_PANELS),this._updateSidebarItems(e,t)},this._validateConfigFile=async()=>{if("static_yaml"!==this._configSource)return;const e=await Ud();if(!e)return;const t=await ur(e,this.hass,!0);"object"==typeof t&&null!==t&&(this._invalidConfig=t),this._configLoaded=!0},this._validateHaConfig=async()=>{if("home_assistant_config"!==this._configSource)return;if(await this._refreshHaConfigInfo(),!this._haConfigInfo.available)return this._haConfigErrors=[this._haConfigInfo.error||H.HA_CONFIG_UNAVAILABLE],this._panelWarnings=[],this._sidebarConfig=this._initConfig||{},this._baselineConfig=structuredClone(this._sidebarConfig),this._configLoaded=!0,void(this._mainDialog._configValid=!1);const e=new Hd(this.hass),t=await e.read();if(!t.valid||!t.config)return this._haConfigErrors=t.errors,this._panelWarnings=[],this._sidebarConfig=this._initConfig||{},this._baselineConfig=structuredClone(this._sidebarConfig),this._configLoaded=!0,void(this._mainDialog._configValid=!1);this._haConfigErrors=[],this._rawYaml=t.rawYaml||"",this._lastLoadedHaConfigModified=t.last_modified??void 0,this._sidebarConfig=t.config,this._baselineConfig=structuredClone(t.config);const i=await ur(t.config,this.hass,!0);"object"==typeof i&&null!==i&&this._applyHomeAssistantPanelValidation(i);const n=JSON.parse(xs(D.PANEL_ORDER)||"[]");this._updateSidebarItems(n,Ns()),this._startHaConfigPolling()},this._refreshProfileDirectory=async()=>{const e=this.hass.user;if(!e)return;const t=await new Gd(this.hass).info();if(t.available){if(e.is_admin)try{const e=await new Gd(this.hass).list();return void(this._profileUsers=[...e.users,...e.orphans.map(e=>({id:e,name:e,is_active:!1,is_admin:!1,system_generated:!1,profile_exists:!0}))])}catch(e){console.warn("Unable to list Sidebar Organizer profiles:",e)}this._profileUsers=[{id:e.id,name:e.name,is_active:!0,is_admin:e.is_admin,system_generated:!1,profile_exists:Boolean(t.profile_exists)}]}},this._handleProfileSelected=async e=>{e.stopPropagation();const t=e.detail.value;if(t&&t!==this._selectedProfile){if(this.hasUnsavedChanges){if(!await du(this,"Switch profiles and discard the unsaved changes in this editor?","Switch profile","Cancel"))return void this.requestUpdate()}this._selectedProfile=t,this._configLoaded=!1,"shared"===t?(this._configSource="home_assistant_config",await this._validateHaConfig()):(this._configSource="home_assistant_profile",await this._validateHaProfile(t)),this._mainDialog._saveDisabled=!0}},this._validateHaProfile=async e=>{const t=new Gd(this.hass,e),i=await t.read();if(!i.available||!i.valid||!i.config)return this._haConfigErrors=i.errors,this._panelWarnings=[],this._sidebarConfig=this._initConfig||{},this._baselineConfig=structuredClone(this._sidebarConfig),this._configLoaded=!0,void(this._mainDialog._configValid=!1);this._profileInfo=i,this._haConfigErrors=[],this._rawYaml=i.rawYaml||"",this._lastLoadedHaConfigModified=i.last_modified??void 0,this._sidebarConfig=i.config,this._baselineConfig=structuredClone(i.config);const n=await ur(i.config,this.hass,!0);"object"==typeof n&&null!==n&&this._applyHomeAssistantPanelValidation(n);const o=JSON.parse(xs(D.PANEL_ORDER)||"[]");this._updateSidebarItems(o,Ns()),e!==this.hass.user?.id&&(this._sidebarConfig=structuredClone(i.config),this._baselineConfig=structuredClone(i.config)),this._mainDialog._configValid=this.isValidConfig,this._startHaConfigPolling(),await this._subscribeSelectedProfile()},this._saveHomeAssistantProfile=async()=>{if("shared"===this._selectedProfile)return this._saveHomeAssistantConfig();const e=new Gd(this.hass,this._selectedProfile),t=this._rawYaml.trim()?this._rawYaml:Ld.stringify(this._sidebarConfig),i=await e.validate(t);if(!i.valid)return this._haConfigErrors=i.errors,await uu(this,`${H.CONFIG_INVALID}\n${i.errors.join("\n")}`),!1;try{this._profileInfo=await e.write(t,this._profileInfo.revision),this._rawYaml=t,this._haConfigErrors=[],this._baselineConfig=structuredClone(this._sidebarConfig);const i=this._profileUsers.find(e=>e.id===this._selectedProfile);return i&&(i.profile_exists=!0),this._selectedProfile===this.hass.user?.id&&(Ts(D.HA_CONFIG_CACHE,this._sidebarConfig),this._profileInfo.revision&&Ts(D.HA_CONFIG_REVISION,this._profileInfo.revision)),Sf(this,{message:"Saved Sidebar Organizer user profile."}),!0}catch(e){const t=e instanceof Error?e.message:String(e);return this._haConfigErrors=[t],await uu(this,t),!1}},this._createSelectedProfile=async()=>{await this._saveHomeAssistantProfile()&&(this._selectedProfile!==this.hass.user?.id?this.requestUpdate():window.location.reload())},this._deleteSelectedProfile=async()=>{if("shared"===this._selectedProfile)return;if(await du(this,"Delete this personal sidebar profile and return the user to the shared default?","Reset profile","Cancel"))try{const e=new Gd(this.hass,this._selectedProfile);this._profileInfo=await e.delete(this._profileInfo.revision);const t=this._profileUsers.find(e=>e.id===this._selectedProfile);t&&(t.profile_exists=!1),t&&!t.is_active?(this._profileUsers=this._profileUsers.filter(e=>e.id!==t.id),this._selectedProfile="shared",this._configSource="home_assistant_config",await this._validateHaConfig()):await this._reloadHomeAssistantProfile(),Sf(this,{message:"Personal profile removed. Using the shared default."}),this._selectedProfile===this.hass.user?.id&&window.location.reload()}catch(e){await uu(this,e instanceof Error?e.message:String(e))}},this._copyIntoSelectedProfile=async()=>{if("shared"===this._selectedProfile)return;if(await du(this,this._profileInfo.profile_exists?"Replace the selected user profile with the chosen configuration?":"Create this user profile from the chosen configuration?","Copy profile","Cancel"))try{this._profileInfo=await new Gd(this.hass).copy(this._copySource,this._selectedProfile,this._profileInfo.revision);const e=this._profileUsers.find(e=>e.id===this._selectedProfile);e&&(e.profile_exists=!0),await this._reloadHomeAssistantProfile(),Sf(this,{message:"Copied configuration to the selected user."}),this._selectedProfile===this.hass.user?.id&&window.location.reload()}catch(e){await uu(this,e instanceof Error?e.message:String(e))}},this._reloadHomeAssistantProfile=async()=>{"shared"!==this._selectedProfile&&(await this._validateHaProfile(this._selectedProfile),this._mainDialog._saveDisabled=!0)},this._subscribeSelectedProfile=async()=>{this._profileUnsubscribe?.(),this._profileUnsubscribe=void 0;const e=this._profileUsers.find(e=>e.id===this._selectedProfile);"shared"!==this._selectedProfile&&this._connected&&!1!==e?.is_active&&(this._profileUnsubscribe=await new Gd(this.hass,this._selectedProfile).subscribe(async e=>{if(e.profile_exists===this._profileInfo.profile_exists&&(!e.revision||e.revision===this._profileInfo.revision))return;if(this._mainDialog._saveDisabled)return void await this._reloadHomeAssistantProfile();await du(this,"This profile changed on another device while you have unsaved edits. Reload it now?","Reload","Later")&&await this._reloadHomeAssistantProfile()}))},this._handleInvalidConfig=async e=>{if(this._invalidConfig&&0!==Object.keys(this._invalidConfig).length)switch(e){case"check":const e=this._invalidConfig.config,t=await ur(e,this.hass,!0);"object"==typeof t&&null!==t&&(this._invalidConfig=t,this.requestUpdate());break;case"auto-correct":const i=await gr(this._invalidConfig.config,this.hass);this._invalidConfig={...this._invalidConfig,config:i},this._handleInvalidConfig("check"),this.requestUpdate();break;case"save":if(!await ur(this._invalidConfig.config,this.hass))return void await uu(this,H.CONFIG_INVALID);this._sidebarConfig=this._invalidConfig.config,this._invalidConfig=void 0,this._useConfigFile=!1,this._configSource="browser_storage",this._mainDialog._configValid=!0,Ls("browser_storage"),Ts(D.UI_CONFIG,this._sidebarConfig),this.requestUpdate()}else console.warn("No invalid config to handle")},this._updateSidebarItems=(e,t)=>{const i=this._utils.ARRAY;let n={...this._sidebarConfig||{}};const o=is(this.hass),s=i.uniq([...t,...n.hidden_items||[],o]);n=lr(n,s);const r=i.without(n.hidden_items||[],o);n.hidden_items=i.uniq(r),bo(n.hidden_items)&&delete n.hidden_items;const a=JSON.stringify(this._sidebarConfig)!==JSON.stringify(n),l="home_assistant_config"===this._configSource||"home_assistant_profile"===this._configSource;a&&!l?(this._sidebarConfig=n,"browser_storage"===this._configSource&&Ts(D.UI_CONFIG,this._sidebarConfig)):a&&console.info("Sidebar Organizer kept the Home Assistant configuration unchanged; user-specific hidden/default panels are applied only to this preview.");const c=i.uniq(e),d=this._sidebarConfig?.new_items||[];this._newItems=d.map(e=>e.title),this._initCombiPanels=i.union(c,r),this._initPanelOrder=[...c],this._configLoaded=!0},this._saveHomeAssistantConfig=async()=>{if(await this._refreshHaConfigInfo(),!this._haConfigInfo.available)return await uu(this,H.HA_CONFIG_UNAVAILABLE),!1;if(!this._haConfigInfo.allow_write)return await uu(this,H.HA_CONFIG_WRITE_DISABLED),!1;const e=new Hd(this.hass),t=await e.info();if(Ep(this._lastLoadedHaConfigModified,t.last_modified)&&!await du(this,"The Home Assistant config file changed after you loaded it. Overwrite it?","Overwrite","Cancel"))return!1;const i=this._rawYaml.trim()?this._rawYaml:Ld.stringify(this._sidebarConfig),n=await e.validate(i);if(!n.valid)return this._haConfigErrors=n.errors,await uu(this,`${H.CONFIG_INVALID}\n${n.errors.join("\n")}`),!1;try{return this._haConfigInfo=await e.write(i),this._haDiagnostics={...this._haDiagnostics,...this._haConfigInfo},this._lastLoadedHaConfigModified=this._haConfigInfo.last_modified??void 0,this._rawYaml=i,this._haConfigErrors=[],this._baselineConfig=structuredClone(this._sidebarConfig),Ts(D.HA_CONFIG_CACHE,this._sidebarConfig),null!=this._haConfigInfo.last_modified&&Ts(D.HA_CONFIG_LAST_MODIFIED,this._haConfigInfo.last_modified),Sf(this,{message:H.HA_CONFIG_SAVE_SUCCESS}),!0}catch(e){const t=e instanceof Error?e.message:String(e);return this._haConfigErrors=[t],await uu(this,t),!1}},this._reloadHomeAssistantConfig=async(e=!0)=>{const t=new Hd(this.hass),i=await t.read();if(!i.valid||!i.config)return this._haConfigErrors=i.errors,void await uu(this,`${H.CONFIG_INVALID}\n${i.errors.join("\n")}`);this._sidebarConfig=i.config,this._baselineConfig=structuredClone(i.config),this._rawYaml=i.rawYaml||"",this._lastLoadedHaConfigModified=i.last_modified??void 0,this._haConfigErrors=[],Ts(D.HA_CONFIG_CACHE,i.config),null!=i.last_modified&&Ts(D.HA_CONFIG_LAST_MODIFIED,i.last_modified),await this._refreshHaConfigInfo(),e&&Sf(this,{message:H.HA_CONFIG_RELOAD_SUCCESS})},this._validateHomeAssistantYaml=async()=>{const e="home_assistant_profile"===this._configSource?new Gd(this.hass,this._selectedProfile):new Hd(this.hass),t=await e.validate(this._rawYaml.trim()?this._rawYaml:Ld.stringify(this._sidebarConfig));this._haConfigErrors=t.errors,await uu(this,t.valid?H.CONFIG_VALID:`${H.CONFIG_INVALID}\n${t.errors.join("\n")}`)},this._refreshHaConfigInfo=async()=>{const e=new Hd(this.hass);this._haConfigInfo=await e.info(),"home_assistant_config"===this._configSource&&(this._haDiagnostics=await e.diagnostics())},this._cleanItemsFromGroups=(e,t)=>Ao(mo(this._sidebarConfig,[e]),t),this._getGroupOfPanel=e=>{const t=[...this._panelConfigMap.entries()].find(([,t])=>t.includes(e));return t?t[0]:null}}connectedCallback(){super.connectedCallback(),this._connected=!0,Os(this.hass.user?.id),this._configSource=$s(),this._useConfigFile="static_yaml"===this._configSource,this._tabState="static_yaml"===this._configSource?L.CODE:L.BASE,this.addEventListener("sidebar-config-changed",this._sidebarConfigChanged),this._refreshHaConfigInfo(),this._startHaConfigPolling(),window.sidebarDialog=this}disconnectedCallback(){super.disconnectedCallback(),this._connected=!1,this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=void 0),window.clearInterval(this._haConfigPollTimer),this._haConfigPollTimer=void 0,this._profileUnsubscribe?.(),this._profileUnsubscribe=void 0}get hasUnsavedChanges(){return JSON.stringify(this._baselineConfig)!==JSON.stringify(this._sidebarConfig)}get canWriteCurrentSource(){return"home_assistant_profile"===this._configSource?Boolean(this._profileInfo.allow_write):"home_assistant_config"!==this._configSource||Boolean(this.hass.user?.is_admin&&this._haConfigInfo.allow_write)}get selectedProfileUserId(){return"home_assistant_profile"===this._configSource?this._selectedProfile:void 0}get saveBlockedReason(){return this.canWriteCurrentSource?this._invalidConfig&&ar(this._invalidConfig)?"A panel is assigned more than once. Remove the duplicate assignment before saving.":this.hasUnsavedChanges?void 0:"No unsaved changes.":"This configuration is read-only for your account."}get GUImode(){return this._tabState===L.BASE}async _showDialogBox(e,t){return await pu(this,e,t)}async _alert(e,t){return await this._showDialogBox("alert",{text:e,confirmText:t})}willUpdate(e){if(e.has("_connected")&&this._connected&&this._setupInitConfig(),e.has("_configSource")&&(this._useConfigFile="static_yaml"===this._configSource,"static_yaml"===this._configSource&&(this._tabState=L.CODE),this._startHaConfigPolling()),e.has("_useConfigFile")&&(this._useConfigFile&&"static_yaml"===this._configSource?this._validateConfigFile():"browser_storage"===this._configSource&&void 0!==this._invalidConfig&&(this._invalidConfig=void 0,this._validateStoragePanels(),this._mainDialog._configValid=this.isValidConfig,this.requestUpdate())),e.has("_invalidConfig")&&this._invalidConfig){const e=this.isValidConfig;this._mainDialog._configValid=e,this.requestUpdate()}if(e.has("_settingItemMoved"))if(this._settingItemMoved&&!this._initCombiPanels.includes("config"))this._initCombiPanels.push("config");else if(!this._settingItemMoved){this._initCombiPanels=this._initCombiPanels.filter(e=>"config"!==e);const e=this._getGroupOfPanel("config");if(null!==e){const t=[J.BOTTOM_ITEMS,J.BOTTOM_GRID_ITEMS].includes(e)?e:J.CUSTOM_GROUPS,i=this._cleanItemsFromGroups(t,["config"]);this._sidebarConfig={...this._sidebarConfig,...i}}}if(e.has("_uncategorizedIsActive")&&void 0!==this._uncategorizedIsActive&&this._uncategorizedIsActive){const e={...this._sidebarConfig||{}},t={...e.custom_groups||{}},i=t?.[J.UNCATEGORIZED_ITEMS]||[],n=this.uncategorizedItems;if(JSON.stringify(i.sort())!==JSON.stringify(n.sort())){const i=[...n];t[J.UNCATEGORIZED_ITEMS]=i;const o={...e,custom_groups:t};this._sidebarConfig={...this._sidebarConfig,...o}}}e.has("_configLoaded")&&!0===this._configLoaded&&!this._resizeObserver&&setTimeout(()=>{this._measureConfigSection()},100)}shouldUpdate(e){return e.has("_sidebarConfig")&&this._sidebarConfig,!0}get isValidConfig(){let e=!this._invalidConfig||0===Object.keys(this._invalidConfig).length;return this._useConfigFile&&(e=!1!==this._invalidConfig?.valid),e}updated(e){if(this._configLoaded&&e.has("_sidebarConfig")&&this._sidebarConfig){const t=e.get("_sidebarConfig"),i=this._sidebarConfig;if(void 0!==t&&i){JSON.stringify(t.new_items)!==JSON.stringify(i.new_items)&&i.new_items&&(this._newItemMap=new Map(i.new_items.map(e=>[e.title,e])));JSON.stringify(t.pinned_groups)!==JSON.stringify(i.pinned_groups)&&i.pinned_groups&&(this._pinnedGroupsMap=new Map(Object.entries(eh(i.pinned_groups)))),this._settingItemMoved=!0===i.move_settings_from_fixed,this._uncategorizedIsActive=void 0,this._uncategorizedIsActive=!!(!0===i.uncategorized_items||i.custom_groups&&Array.isArray(i.custom_groups[J.UNCATEGORIZED_ITEMS])&&i.custom_groups[J.UNCATEGORIZED_ITEMS].length>0)}const n=[...this._newItems];JSON.stringify(n)!==JSON.stringify(i.new_items?.map(e=>e.title)||[])&&(this._newItems=i.new_items?.map(e=>e.title)||[],this._initCombiPanels=this._initCombiPanels.filter(e=>!n.includes(e)),this._initCombiPanels=[...this._initCombiPanels,...Array.from(this._newItems)]);const o={...i.custom_groups||{},...i.bottom_groups||{},bottom_items:i.bottom_items||[],bottom_grid_items:i.bottom_grid_items||[]};this._panelConfigMap=new Map(Object.entries(o));const s=JSON.stringify(this._baselineConfig)!==JSON.stringify(i);this._mainDialog._saveDisabled=!s||!this.canWriteCurrentSource,void 0!==this._store?this._store.sidebarConfig=this._sidebarConfig:this._createStore()}}_measureConfigSection(){const e=this.shadowRoot?.getElementById("sidebar-config");e&&(this._resizeObserver=new ResizeObserver(e=>{for(const t of e){const{height:e,width:i}=t.contentRect;this._narrow=i<600;e>800&&!this.fullscreen?this._dialogPreview.style.setProperty("--config-section-height",`${Math.round(e)}px`):this._dialogPreview.style.removeProperty("--config-section-height")}}),this._resizeObserver.observe(e))}render(){if(!this._configLoaded)return Xe`
        <div class="loading-content">
          <ha-fade-in .delay=${500}><ha-spinner size="large"></ha-spinner></ha-fade-in>
        </div>
      `;this._createStore();const e=this._renderMainConfig(),t=this._renderSidebarPreview();return Xe` <div id="sidebar-dialog-wrapper" class="dialog-content">${e} ${t}</div> `}_createStore(){this._store||(this._store=new Dm(this,this._sidebarConfig))}_renderMainConfig(){return this._tabState!==L.BASE?this._renderCodeEditor():Xe`
      <div id="sidebar-config">
        <div class="dialog-menu">
          <sidebar-dialog-menu
            .hass=${this.hass}
            ._store=${this._store}
            .value=${this._currSection}
            @menu-value-changed=${this._handleMenuValueChanged}
          ></sidebar-dialog-menu>
        </div>
        ${this._renderConfigSection()}
      </div>
    `}_handleMenuValueChanged(e){e.stopPropagation();const t=e.detail.value||null,i=t||d.GENERAL,n=this._currSection;this._currSection=i,n===d.NEW_ITEMS&&i!==d.NEW_ITEMS&&this._dialogPreview._hightlightItem(null)}_renderConfigSection(){const e=this._currSection;return{[d.GENERAL]:this._renderSettingsOverview(),[d.APPEARANCE]:this._renderBaseConfig(),[d.PANELS]:this._renderPanelConfig(),[d.NEW_ITEMS]:this._renderNewItemsConfig()}[e]||Xe``}_renderSettingsOverview(){const e=this._configSource,t="home_assistant_config"===e||"home_assistant_profile"===e,i=this._profileUsers.find(e=>e.id===this._selectedProfile),n="home_assistant_profile"===e?`Personal profile — ${i?.name||this.hass.user?.name||"current user"}`:"home_assistant_config"===e?"Shared default":"static_yaml"===e?"Legacy /local YAML file":"This browser only",o=t?"Saved by Home Assistant and automatically used on every device where this user signs in.":"static_yaml"===e?"Loaded from a legacy public YAML file. Changes are not managed by Home Assistant.":"Saved only in this browser. It will not follow the user to another device.",s="home_assistant_profile"===e?this._profileInfo:this._haConfigInfo;return Xe`
      <section class="settings-overview">
        <div class="settings-card">
          <div class="settings-card-heading">
            <ha-icon icon=${t?"mdi:cloud-sync-outline":"mdi:database-outline"}></ha-icon>
            <div>
              <h2>Storage and user profiles</h2>
              <p>${o}</p>
            </div>
            <span class="status-badge" data-active=${t}>${t?"Synced":"Local"}</span>
          </div>

          <div class="source-summary">
            <span>Currently editing</span>
            <strong>${n}</strong>
          </div>

          ${this._panelWarnings.map(e=>Xe`<ha-alert alert-type="warning" class="panel-warning">${e}</ha-alert>`)}
          ${this._invalidConfig&&ar(this._invalidConfig)?Xe`<ha-alert alert-type="error">
                A panel is assigned more than once. Open Panels and remove duplicate assignments before saving.
              </ha-alert>`:Qe}
          ${this._haConfigErrors.length?Xe`<ha-alert alert-type="error">${this._haConfigErrors.join(" ")}</ha-alert>`:Qe}

          ${t?this._renderProfileSelector():Xe`<ha-alert alert-type="info">
                Install and configure the Sidebar Organizer integration to sync sidebars through Home Assistant.
              </ha-alert>`}

          ${t?Xe`<details class="technical-details">
                <summary>Technical details and maintenance</summary>
                ${this._renderHaDiagnostics(s)}
              </details>`:Qe}
        </div>
      </section>
    `}_renderSidebarPreview(){const e={"--so-force-transparent-background":!0===this._sidebarConfig.force_transparent_background?"transparent":void 0};return Xe`
      <div id="sidebar-preview" style=${eg(e)}>
        <sidebar-dialog-preview
          .hass=${this.hass}
          ._store=${this._store}
          ._sidebarConfig=${this._sidebarConfig}
          .invalidConfig=${!this.isValidConfig}
          @item-clicked=${this._handleItemClicked}
        ></sidebar-dialog-preview>
      </div>
    `}_renderBaseConfig(){return Xe` <sidebar-dialog-colors
      .hass=${this.hass}
      ._store=${this._store}
      ._sidebarConfig=${this._sidebarConfig}
      @sidebar-changed=${this._handleSidebarChanged}
    ></sidebar-dialog-colors>`}_renderPanelConfig(){return Xe` <sidebar-dialog-panels
      .hass=${this.hass}
      ._store=${this._store}
      ._sidebarConfig=${this._sidebarConfig}
      @sidebar-changed=${this._handleSidebarChanged}
    ></sidebar-dialog-panels>`}_renderNewItemsConfig(){return Xe`
      <sidebar-dialog-new-items
        .hass=${this.hass}
        ._store=${this._store}
        ._sidebarConfig=${this._sidebarConfig}
        @sidebar-changed=${this._handleSidebarChanged}
        @item-clicked=${this._handleItemClicked}
      ></sidebar-dialog-new-items>
    `}_toggleCodeEditor(){this._tabState=this._tabState===L.BASE?L.CODE:L.BASE}_renderCodeEditor(){return Xe`
      <div class="config-content">
        ${this._invalidConfig&&Object.keys(this._invalidConfig).length>0?Xe``:this._uploading?Xe`<ha-spinner .size=${"large"}></ha-spinner>`:Xe`
                <sidebar-dialog-code-editor
                  .hass=${this.hass}
                  ._store=${this._store}
                  ._configSource=${this._configSource}
                  ._rawYaml=${this._rawYaml}
                  ._sidebarConfig=${this._sidebarConfig}
                  @raw-yaml-changed=${this._handleRawYamlChanged}
                  @sidebar-changed=${this._handleSidebarChanged}
                ></sidebar-dialog-code-editor>
              `}
        ${this._renderConfigSourceSettings()}
      </div>
    `}_renderInvalidConfig(){if(!this._invalidConfig||0===Object.keys(this._invalidConfig).length)return Qe;const e=vu.BTN_LABEL,t=this._invalidConfig,i=!0===this._invalidConfig.valid;return Xe`
      <div class="invalid-config" .hidden=${this._useConfigFile} style="--code-mirror-max-height: 250px;">
        <ha-alert alert-type="info">${H.INFO_EDIT_UPLOAD_CONFIG}</ha-alert>
        <ha-yaml-editor
          .label=${"EDITOR FOR INVALID CONFIG"}
          .hass=${this.hass}
          .defaultValue=${this._invalidConfig.config}
          .hasExtraActions=${!0}
          .readOnly=${i}
          @value-changed=${e=>{e.stopPropagation();const{isValid:i,value:n}=e.detail;i&&(this._invalidConfig={...t,config:n},this.requestUpdate())}}
        >
          <div slot="extra-actions" style="${"display: flex;  width: auto; justify-content: space-between;"}">
            <ha-button
              appearance="plain"
              size="s"
              .disabled=${i}
              @click=${()=>this._handleInvalidConfig("auto-correct")}
              >${e.AUTO_CORRECT}</ha-button
            >
            <ha-button
              appearance="plain"
              size="s"
              destructive
              .label=${i?e.SAVE_MIGRATE:e.CHECK_VALIDITY}
              @click=${()=>this._handleInvalidConfig(i?"save":"check")}
              >${i?e.SAVE_MIGRATE:e.CHECK_VALIDITY}</ha-button
            >
          </div>
        </ha-yaml-editor>

        <ha-alert alert-type=${t.valid?"success":"warning"}
          >${i?H.CONFIG_VALID:H.CONFIG_INVALID}</ha-alert
        >
        <div class="invalid-config-content" ?hidden=${i}>
          ${sr.map(e=>{const i=t[e];return(Array.isArray(i)?i.length>0:Boolean(i))?Xe`
                  <div>
                    <h2>${rr[e]}</h2>
                    <ul>
                      ${Array.isArray(i)?i.map(e=>Xe`<li>${e}</li>`):Xe`<li>True</li>`}
                    </ul>
                  </div>
                `:Qe})}
        </div>
      </div>
    `}_renderConfigSourceSettings(){const e=this._configSource,t="static_yaml"===e,i="home_assistant_config"===e||"home_assistant_profile"===e,n="home_assistant_profile"===e?this._profileInfo:this._haDiagnostics||this._haConfigInfo;return Xe`
      <div class="overlay">
        <ha-alert alert-type="info" .hidden=${!t}> ${H.USE_CONFIG_FILE} </ha-alert>
        <ha-alert alert-type=${n.available?"info":"warning"} .hidden=${!i}>
          ${n.available?H.HA_CONFIG_MODE:H.HA_CONFIG_UNAVAILABLE}
        </ha-alert>
        ${i&&this._haConfigErrors.length>0?Xe`<ha-alert alert-type="warning">${this._haConfigErrors.join(" ")}</ha-alert>`:Qe}
        ${i&&this._legacyFrontendResourceLoaded()?Xe`<ha-alert alert-type="warning">
              Old Dashboard resource is still loaded. Remove
              <code>/hacsfiles/sidebar-organizer/sidebar-organizer.js</code> from Dashboard resources.
            </ha-alert>`:Qe}
        ${this._renderInvalidConfig()}

        ${i?this._renderProfileSelector():Qe}
        ${this._renderSyncStatus(n,i,t)}
        ${i?this._renderHaDiagnostics(n):Qe}
      </div>
    `}_renderProfileSelector(){const e=this.hass.user?.id,t=[{value:"shared",label:"Shared default"},...this._profileUsers.filter(e=>e.is_active&&!e.system_generated||this.hass.user?.is_admin&&!e.is_active&&e.profile_exists).map(t=>({value:t.id,label:`${t.name}${t.id===e?" (you)":""}${t.is_active?t.profile_exists?"":" — inherited":" — deleted user"}`}))],i=this._profileUsers.find(e=>e.id===this._selectedProfile),n=Boolean("shared"!==this._selectedProfile&&(this.hass.user?.is_admin||this._selectedProfile===e)&&this._profileInfo.allow_write);return Xe`
      <div class="profile-selector">
        <div class="profile-selector-heading">
          <strong>Sidebar used by</strong>
          <span>Choose whose sidebar you want to view or manage.</span>
        </div>
        <ha-selector
          .hass=${this.hass}
          .selector=${{select:{mode:"dropdown",options:t}}}
          .value=${this._selectedProfile}
          @value-changed=${this._handleProfileSelected}
        ></ha-selector>
        <span>
          ${"shared"===this._selectedProfile?"The shared default is used automatically by everyone without a personal profile.":this._profileInfo.profile_exists?`${i?.name||this._selectedProfile} has a personal sidebar that overrides the shared default.`:`${i?.name||this._selectedProfile} currently inherits the shared default.`}
        </span>
        ${"shared"!==this._selectedProfile&&!this._profileInfo.profile_exists&&n?Xe`<ha-button appearance="plain" size="s" @click=${this._createSelectedProfile}
              >Create personal copy</ha-button
            >`:Qe}
        ${"shared"!==this._selectedProfile&&this._profileInfo.profile_exists&&n?Xe`<ha-button appearance="plain" size="s" @click=${this._deleteSelectedProfile}
              >Reset to shared default</ha-button
            >`:Qe}
        ${this.hass.user?.is_admin&&"shared"!==this._selectedProfile?Xe`<ha-alert alert-type="info">
              Preview uses your administrator panel access. Panels unavailable to the selected user are ignored at runtime.
            </ha-alert>`:Qe}
        ${this.hass.user?.is_admin&&n&&"shared"!==this._selectedProfile&&i?.is_active?this._renderCopyProfileControls():Qe}
      </div>
    `}_renderCopyProfileControls(){const e=[{value:"shared",label:"Shared default"},...this._profileUsers.filter(e=>e.profile_exists&&e.id!==this._selectedProfile).map(e=>({value:e.id,label:e.name}))];return Xe`
      <div class="profile-copy-controls">
        <span>Copy configuration from</span>
        <ha-selector
          .hass=${this.hass}
          .selector=${{select:{mode:"dropdown",options:e}}}
          .value=${this._copySource}
          @value-changed=${e=>this._copySource=e.detail.value}
        ></ha-selector>
        <ha-button appearance="plain" size="s" @click=${this._copyIntoSelectedProfile}>Copy to selected user</ha-button>
      </div>
    `}_renderSyncStatus(e,t,i){const n=vu.BTN_LABEL,o=t?"home_assistant_profile"===this._configSource?e.allow_write?"Personal profile synced through Home Assistant":"Personal profile is read-only":e.allow_write?"Synced to Home Assistant config":"Home Assistant config is read-only":i?"Using legacy /local YAML":"Using browser storage fallback";return Xe`
      <div class="header-row">
        <div class="sync-status">
          <ha-icon .icon=${t?"mdi:sync":i?"mdi:file-code-outline":"mdi:database"}></ha-icon>
          <span>${o}</span>
        </div>
        <ha-button appearance="plain" size="s" .label=${n.UPLOAD} @click=${()=>this._uploadConfigFile()}
          >${n.UPLOAD}</ha-button
        >
      </div>
    `}_renderHaDiagnostics(e){return Xe`
      <div class="ha-config-diagnostics">
        ${this._renderDiagnosticRow("Backend loaded",e.available||e.backend_loaded)}
        ${this._renderDiagnosticRow("Config file exists",e.exists)}
        ${this._renderDiagnosticRow("Write enabled",e.allow_write)}
        ${"home_assistant_profile"===this._configSource?this._renderDiagnosticRow("Personal profile exists",this._profileInfo.profile_exists):Qe}
        <span>Path: ${e.config_path||"not reported"}</span>
        ${"home_assistant_config"===this._configSource&&e.profiles_path?Xe`<span>Profiles: ${e.profiles_path}</span>`:Qe}
        <span>Last modified: ${this._formatLastModified(e.last_modified)}</span>
      </div>
      <div class="ha-config-actions">
        <ha-button
          appearance="plain"
          size="s"
          @click=${"home_assistant_profile"===this._configSource?this._reloadHomeAssistantProfile:this._reloadHomeAssistantConfig}
          >Reload from HA config</ha-button
        >
        <ha-button appearance="plain" size="s" @click=${this._validateHomeAssistantYaml}>Validate YAML</ha-button>
      </div>
    `}_renderDiagnosticRow(e,t){return Xe`<span>${e}: ${t?"yes":"no"}</span>`}_uploadConfigFile(){const e=document.createElement("input");e.type="file",e.accept=".yaml",e.style.display="none",e.onchange=()=>{const t=e.files?.[0];if(!t)return;this._uploading=!0;const i=new FileReader;i.onload=async e=>{try{const t=e.target?.result,i=Ld.parse(t),n=await ur(i,this.hass,!0);if("object"!=typeof n||null===n)return;if(n.valid){this._invalidConfig=void 0,this._uploading=!1;if(!await du(this,H.UPLOAD_SUCCESS_VALID_RELOAD,"OK"))return;if(this._sidebarConfig=i,"home_assistant_config"===this._configSource||"home_assistant_profile"===this._configSource)return"home_assistant_profile"===this._configSource?await this._saveHomeAssistantProfile():await this._saveHomeAssistantConfig(),void window.location.reload();const e=()=>new Promise(e=>{Ts(D.UI_CONFIG,this._sidebarConfig),ks(D.PANEL_ORDER),ks(D.HIDDEN_PANELS),e()});await e(),window.location.reload()}else this._invalidConfig=n,await uu(this,H.INVALID_UPLOADED_CONFIG),this._uploading=!1,this.requestUpdate()}catch(e){}},i.readAsText(t)},document.body.appendChild(e),e.click(),document.body.removeChild(e)}_handleSidebarChanged(e){e.stopPropagation();const t=e.detail;"home_assistant_config"!==this._configSource&&"home_assistant_profile"!==this._configSource||e.target===this._dialogCodeEditor||(this._rawYaml=""),this._sidebarConfig=t}_handleRawYamlChanged(e){e.stopPropagation(),this._rawYaml=e.detail.yaml,"home_assistant_config"!==this._configSource&&"home_assistant_profile"!==this._configSource||(this._mainDialog._saveDisabled=!this.canWriteCurrentSource)}_applyHomeAssistantPanelValidation(e){const t=is(this.hass),i=Array.from(new Set((e.invalidItems||[]).filter(e=>e!==t))),n=[];e.hasDefaultInGroupsOrBottom&&t&&n.push(`Your default dashboard (${t}) stays fixed in the sidebar for this account, so its grouped copy is ignored. The saved configuration is unchanged.`),i.length&&n.push(`These panels are not available to the account currently previewing this sidebar, so they are preserved but skipped: ${i.join(", ")}.`),this._panelWarnings=n,this._invalidConfig=ar(e)?e:void 0}_sidebarConfigChanged(e){e.stopPropagation();const t=e.detail.config;this._sidebarConfig=t}_startHaConfigPolling(){window.clearInterval(this._haConfigPollTimer),this._haConfigPollTimer=void 0,"home_assistant_config"!==this._configSource&&"home_assistant_profile"!==this._configSource||!this._connected||(this._haConfigPollTimer=window.setInterval(()=>this._checkHaConfigExternalChange(),3e4))}async _checkHaConfigExternalChange(){if("home_assistant_profile"===this._configSource){const e=await new Gd(this.hass,this._selectedProfile).info();if(e.profile_exists===this._profileInfo.profile_exists&&(!e.revision||e.revision===this._profileInfo.revision))return void(this._profileInfo=e);if(this._mainDialog._saveDisabled)return void await this._reloadHomeAssistantProfile();return void(await du(this,"This profile changed on disk while you have unsaved edits. Reload it now?","Reload","Later")&&await this._reloadHomeAssistantProfile())}if("home_assistant_config"!==this._configSource)return;const e=new Hd(this.hass),t=await e.info(),i=this._lastLoadedHaConfigModified??this._haConfigInfo.last_modified,n=t.last_modified;if(!Ep(i,n))return void(this._haConfigInfo=t);if(this._haConfigInfo=t,this._haDiagnostics={...this._haDiagnostics,...t},this._mainDialog._saveDisabled)return void await this._reloadHomeAssistantConfig();await du(this,"The Home Assistant config file changed on disk and you have unsaved edits. Reload it now?","Reload","Later")&&await this._reloadHomeAssistantConfig()}_legacyFrontendResourceLoaded(){return Array.from(document.scripts).some(e=>e.src.includes("/hacsfiles/sidebar-organizer/sidebar-organizer.js"))}_formatLastModified(e){return e?new Date(1e3*e).toLocaleString():"unknown"}get pickedItems(){return Array.from(this._panelConfigMap.values()).flat()}get ungroupedItems(){const e=is(this.hass),t=new Set([...this.pickedItems,...this._sidebarConfig?.hidden_items||[],e]);return this._initCombiPanels.filter(e=>!t.has(e))}get uncategorizedFromCustom(){if(this._sidebarConfig[J.CUSTOM_GROUPS]&&!this._sidebarConfig[J.CUSTOM_GROUPS].hasOwnProperty(J.UNCATEGORIZED_ITEMS))return this._sidebarConfig[J.CUSTOM_GROUPS][J.UNCATEGORIZED_ITEMS]}get pickedWithoutUncategorizedFromCustom(){const e=this._sidebarConfig[J.CUSTOM_GROUPS]?.[J.UNCATEGORIZED_ITEMS]||[];return Array.from(this._panelConfigMap.values()).flat().filter(t=>!e.includes(t))}get uncategorizedItems(){const e=is(this.hass),t=this.uncategorizedFromCustom||[],i=this.pickedWithoutUncategorizedFromCustom,n=this._initCombiPanels.filter(t=>!i.includes(t)&&!(this._sidebarConfig.hidden_items||[]).includes(t)&&t!==e);return Array.from(new Set([...t,...n]))}_handleItemClicked(e){e.stopPropagation();const t=e.detail,i=this._getGroupOfPanel(t);this._dialogPanels&&this._dialogPanels.clickedPanelInPreview(t,i)}static get styles(){return[ue`
        :host {
          --side-dialog-gutter: 0.5rem;
          --side-dialog-padding: 1rem;
          --scrollbar-thumb-color: rgba(0, 0, 0, 0.2);
          max-width: 1400px;
          display: flex;
          margin: 0 auto;
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
      `]}};ih([lh({type:Boolean,reflect:!0,attribute:"fullscreen"})],Pm.prototype,"fullscreen",void 0),ih([lh({attribute:!1})],Pm.prototype,"_mainDialog",void 0),ih([lh({attribute:!1})],Pm.prototype,"_initConfig",void 0),ih([ch()],Pm.prototype,"_connected",void 0),ih([ch()],Pm.prototype,"_sidebarConfig",void 0),ih([ch()],Pm.prototype,"_useConfigFile",void 0),ih([ch()],Pm.prototype,"_configSource",void 0),ih([ch()],Pm.prototype,"_tabState",void 0),ih([ch()],Pm.prototype,"_configLoaded",void 0),ih([ch()],Pm.prototype,"_currSection",void 0),ih([ch()],Pm.prototype,"_initPanelOrder",void 0),ih([ch()],Pm.prototype,"_initCombiPanels",void 0),ih([ch()],Pm.prototype,"_newItemMap",void 0),ih([ch()],Pm.prototype,"_newItems",void 0),ih([ch()],Pm.prototype,"_panelConfigMap",void 0),ih([ch()],Pm.prototype,"_pinnedGroupsMap",void 0),ih([ch()],Pm.prototype,"_settingItemMoved",void 0),ih([ch()],Pm.prototype,"_uncategorizedItemsGroup",void 0),ih([ch()],Pm.prototype,"_uncategorizedIsActive",void 0),ih([ch()],Pm.prototype,"_uploading",void 0),ih([ch()],Pm.prototype,"_invalidConfig",void 0),ih([ch()],Pm.prototype,"_haConfigErrors",void 0),ih([ch()],Pm.prototype,"_panelWarnings",void 0),ih([ch()],Pm.prototype,"_haConfigInfo",void 0),ih([ch()],Pm.prototype,"_profileInfo",void 0),ih([ch()],Pm.prototype,"_profileUsers",void 0),ih([ch()],Pm.prototype,"_selectedProfile",void 0),ih([ch()],Pm.prototype,"_copySource",void 0),ih([ch()],Pm.prototype,"_haDiagnostics",void 0),ih([ch()],Pm.prototype,"_lastLoadedHaConfigModified",void 0),ih([ch()],Pm.prototype,"_rawYaml",void 0),ih([ch()],Pm.prototype,"_narrow",void 0),ih([hh(c.COLORS)],Pm.prototype,"_dialogColors",void 0),ih([hh(c.PANELS)],Pm.prototype,"_dialogPanels",void 0),ih([hh(c.PREVIEW)],Pm.prototype,"_dialogPreview",void 0),ih([hh(c.CODE_EDITOR)],Pm.prototype,"_dialogCodeEditor",void 0),ih([hh(c.NEW_ITEMS)],Pm.prototype,"_dialogNewItems",void 0),ih([hh(c.MENU)],Pm.prototype,"_dialogMenu",void 0),ih([hh("#sidebar-config")],Pm.prototype,"_configSection",void 0),Pm=ih([sh("sidebar-organizer-config-dialog")],Pm);let Rm=window.matchMedia("(min-width: 1000px) and (max-width: 1440px)"),Mm=class extends mt{constructor(){super(...arguments),this.large=!1,this._open=!1,this._configValid=!0,this._saveDisabled=!0,this._GUImode=!0}connectedCallback(){super.connectedCallback(),window._sidebarOrganizerDialog=this}disconnectedCallback(){super.disconnectedCallback(),window._sidebarOrganizerDialog=void 0}async showDialog(e){this._open=!0,this._params=e,this._initConfig=Qi(e.config),Rm.matches&&(this.large=!0)}closeDialog(){return this._isConfigChanged?(this._handleClose(),!1):(this._open=!1,this._params=void 0,lu(this,"dialog-closed",{dialog:this.localName}),!0)}_dialogClosed(){this._params=void 0,this._open=!1,lu(this,"dialog-closed",{dialog:this.localName})}get _canSaveConfig(){return this._configDialog.canWriteCurrentSource&&(void 0===this._configDialog._invalidConfig||this._configValid&&0!==Object.keys(this._configDialog._sidebarConfig).length)}get _isConfigChanged(){return!(!this._params||!this._configDialog||this._configDialog._useConfigFile)&&this._configDialog.hasUnsavedChanges}async _handleClose(){await du(this,H.CONFIG_CHANGED,"SAVE","DISCARD")?this._handleSaveConfig():(bo(this._initConfig)&&Ds()&&Qd(),this._dialogClosed())}_showSuccessToast(){Sf(this,{message:"Sidebar Organizer config saved."})}async _handleSaveConfig(){if(!this._canSaveConfig){const e=this._configDialog.saveBlockedReason||"This configuration cannot be saved yet.";return console.warn(e),void Sf(this,{message:e,duration:5e3})}if(this._configDialog._useConfigFile&&this._configValid)await this._configDialog._handleInvalidConfig("save"),this._showSuccessToast();else if("home_assistant_config"===this._configDialog._configSource&&this._configValid){if(!await this._configDialog._saveHomeAssistantConfig())return}else if("home_assistant_profile"===this._configDialog._configSource&&this._configValid){if(!await this._configDialog._saveHomeAssistantProfile())return}const e=this._configDialog._sidebarConfig,t=this._configDialog._useConfigFile,i={config:e,configSource:this._configDialog._configSource,profileUserId:this._configDialog.selectedProfileUserId,useConfigFile:t};lu(this,P.SIDEBAR_CONFIG_SAVED,i),this._dialogClosed()}_renderContent(){return Xe`
      <sidebar-organizer-config-dialog
        .hass=${this.hass}
        ._mainDialog=${this}
        ._initConfig=${this._initConfig}
      ></sidebar-organizer-config-dialog>
    `}render(){if(!this._open)return Qe;const e=vu.BTN_LABEL,t=Xe`<div slot="actionItems">
      <ha-icon-button .label=${"Toggle large"} .path=${$p} @click=${this._enlarge}> </ha-icon-button>
      <ha-icon-button
        .label=${"Documentation"}
        .path=${Fp}
        @click=${()=>window.open(x)}
      ></ha-icon-button>
    </div>`,i=Xe`<span slot="title" .title=${S} @click=${this._enlarge}> ${O} </span>
      <span slot="subtitle">(${I})</span> `;return Xe`
      <ha-dialog
        open
        scrimClickAction
        escapeKeyAction
        @keydown=${this._ignoreKeydown}
        @closed=${this._dialogClosed}
        .hideActions=${!1}
        .flexContent=${!0}
        .heading=${O}
      >
        <ha-dialog-header slot="heading">
          <ha-icon-button
            slot="navigationIcon"
            @click=${this.closeDialog}
            .label=${this.hass.localize("ui.common.close")}
            .path=${Dp}
          ></ha-icon-button>
          ${i} ${t}
        </ha-dialog-header>

        ${this._renderContent()}

        <ha-button appearance="plain" size="s" slot=${o.SECONDARY_ACTION} @click=${this._toggleCodeUi}
          >${this._GUImode?vu.BTN_LABEL.SHOW_CODE_EDITOR:vu.BTN_LABEL.SHOW_VISUAL_EDITOR}
        </ha-button>
        <div slot=${o.PRIMARY_ACTION}>
          <ha-button appearance="plain" size="s" .label=${e.CANCEL} @click=${this.closeDialog}>
            ${e.CANCEL}
          </ha-button>
          <ha-button
            appearance="plain"
            size="s"
            .label=${e.SAVE}
            .title=${this._configDialog?.saveBlockedReason||""}
            @click=${this._handleSaveConfig}
            .disabled=${this._saveDisabled}
          >
            ${e.SAVE}
          </ha-button>
        </div>
      </ha-dialog>
    `}_toggleCodeUi(){this._configDialog._toggleCodeEditor(),this._GUImode=this._configDialog.GUImode}_enlarge(){this.large=!this.large}_ignoreKeydown(e){e.stopPropagation()}static get styles(){return ue`
      ha-dialog {
        --mdc-dialog-max-width: 90vw;
        --mdc-dialog-min-height: 700px;
        /* --mdc-dialog-min-height: calc(90vh - 72px); */
        --dialog-backdrop-filter: blur(2px);
        --justify-action-buttons: space-between;
        --dialog-content-padding: 0 1rem;
      }
      sidebar-organizer-config-dialog {
        width: calc(90vw - 48px);
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
      }
      :host([large]) ha-dialog {
        --mdc-dialog-min-width: 90vw;
        --mdc-dialog-max-width: 90vw;
      }
      :host([large]) ha-dialog sidebar-organizer-config-dialog {
        max-width: none;
        width: 100%;
      }

      @media all and (max-width: 450px), all and (max-height: 500px) {
        ha-dialog {
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
    `}};ih([lh({attribute:!1})],Mm.prototype,"hass",void 0),ih([lh({type:Boolean,reflect:!0})],Mm.prototype,"large",void 0),ih([ch()],Mm.prototype,"_params",void 0),ih([ch()],Mm.prototype,"_initConfig",void 0),ih([ch()],Mm.prototype,"_open",void 0),ih([ch()],Mm.prototype,"_configValid",void 0),ih([ch()],Mm.prototype,"_saveDisabled",void 0),ih([ch()],Mm.prototype,"_GUImode",void 0),ih([hh("ha-dialog")],Mm.prototype,"_dialog",void 0),ih([hh("sidebar-organizer-config-dialog")],Mm.prototype,"_configDialog",void 0),Mm=ih([sh("sidebar-organizer-dialog")],Mm);var Hm=Object.freeze({__proto__:null,get SidebarOrganizerDialog(){return Mm}});let Gm=class extends mt{constructor(){super(...arguments),this.large=!1,this._open=!1,this._configValid=!0,this._saveDisabled=!0,this._GUImode=!0}connectedCallback(){super.connectedCallback(),window._sidebarOrganizerDialogWA=this}disconnectedCallback(){super.disconnectedCallback(),window._sidebarOrganizerDialogWA=void 0}async showDialog(e){this._open=!0,this._params=e,this.large=!1,this._initConfig=Qi(e.config),await this._watchDialogScroll()}closeDialog(){return this._isConfigChanged?(this._handleClose(),!1):(this._open=!1,this._params=void 0,lu(this,"dialog-closed",{dialog:this.localName}),!0)}_dialogClosed(){this._params=void 0,this._open=!1,lu(this,"dialog-closed",{dialog:this.localName})}get _canSaveConfig(){return this._configDialog.canWriteCurrentSource&&(void 0===this._configDialog._invalidConfig||this._configValid&&0!==Object.keys(this._configDialog._sidebarConfig).length)}get _isConfigChanged(){return!(!this._params||!this._configDialog||this._configDialog._useConfigFile)&&this._configDialog.hasUnsavedChanges}async _handleClose(){await du(this,H.CONFIG_CHANGED,"SAVE","DISCARD")?this._handleSaveConfig():(bo(this._initConfig)&&Ds()&&Qd(),this._dialogClosed())}async _handleSaveConfig(){if(!this._canSaveConfig){const e=this._configDialog.saveBlockedReason||"This configuration cannot be saved yet.";return console.warn(e),void Sf(this,{message:e,duration:5e3})}if(this._configDialog._useConfigFile&&this._configValid)await this._configDialog._handleInvalidConfig("save");else if("home_assistant_config"===this._configDialog._configSource&&this._configValid){if(!await this._configDialog._saveHomeAssistantConfig())return}else if("home_assistant_profile"===this._configDialog._configSource&&this._configValid){if(!await this._configDialog._saveHomeAssistantProfile())return}const e=this._configDialog._sidebarConfig,t=this._configDialog._useConfigFile,i={config:e,configSource:this._configDialog._configSource,profileUserId:this._configDialog.selectedProfileUserId,useConfigFile:t};lu(this,P.SIDEBAR_CONFIG_SAVED,i),this._dialogClosed()}_renderContent(){return Xe`
      <sidebar-organizer-config-dialog
        ?fullscreen=${this.large}
        .hass=${this.hass}
        ._mainDialog=${this}
        ._initConfig=${this._initConfig}
      ></sidebar-organizer-config-dialog>
    `}render(){if(!this._open)return Qe;const e=window.matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches,t=vu.BTN_LABEL,i=Xe`<span slot="headerTitle" @click=${this._enlarge}>${O}</span>
      <ha-icon-button
        slot="headerNavigationIcon"
        @click=${this.closeDialog}
        .label=${this.hass.localize("ui.common.close")}
        .path=${Dp}
      ></ha-icon-button>
      ${e?Qe:Xe`
            <ha-icon-button
              slot="headerActionItems"
              .label=${"Toggle large"}
              .path=${this.large?Bp:Gp}
              @click=${this._enlarge}
            ></ha-icon-button>
          `}
      <ha-icon-button
        slot="headerActionItems"
        .label=${"Documentation"}
        .path=${Fp}
        @click=${()=>window.open(x)}
      ></ha-icon-button>`;return Xe`
      <ha-dialog
        .hass=${this.hass}
        .open=${this._open}
        .width=${this.large?"full":"large"}
        prevent-scrim-close
        @keydown=${this._ignoreKeydown}
        @closed=${this._dialogClosed}
        .headerSubtitlePosition=${"below"}
      >
        ${i}
        <div class="content">${this._renderContent()}</div>
        <ha-dialog-footer slot="footer">
          <ha-button
            appearance="plain"
            size="s"
            class="gui-mode-button"
            slot=${o.SECONDARY_ACTION}
            @click=${this._toggleCodeUi}
          >
            ${this._GUImode?t.SHOW_CODE_EDITOR:t.SHOW_VISUAL_EDITOR}
          </ha-button>
          <ha-button appearance="plain" size="s" slot=${o.SECONDARY_ACTION} @click=${this.closeDialog}>
            ${t.CANCEL}
          </ha-button>

          <ha-button
            appearance="plain"
            size="s"
            slot=${o.PRIMARY_ACTION}
            .label=${t.SAVE}
            .title=${this._configDialog?.saveBlockedReason||""}
            @click=${this._handleSaveConfig}
            .disabled=${this._saveDisabled}
          >
            ${t.SAVE}
          </ha-button>
        </ha-dialog-footer>
      </ha-dialog>
    `}_toggleCodeUi(){this._configDialog._toggleCodeEditor(),this._GUImode=this._configDialog.GUImode}_enlarge(){this.large=!this.large}_ignoreKeydown(e){e.stopPropagation()}async _watchDialogScroll(){await kt();const e=this.shadowRoot?.querySelector("ha-dialog")?.shadowRoot?.querySelector("wa-dialog");if(e){const t=e.querySelector(".body");t&&(t.classList.remove("ha-scrollbar"),t.style.overflow="hidden")}}static get styles(){return[ue`
        ha-dialog {
          --ha-dialog-width-full: 100vw;
          --ha-dialog-scrim-backdrop-filter: blur(4px) brightness(30%);
          --mdc-dialog-max-width: 90vw;
          --mdc-dialog-min-height: 700px;
          --ha-dialog-min-height: 700px;
          /* --mdc-dialog-min-height: calc(90vh - 72px); */
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

        @media all and (max-width: 450px), all and (max-height: 500px) {
          ha-dialog {
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
          --so-dialog-content-height: calc(var(--mdc-dialog-min-height, 700px) - 128px);
          box-sizing: border-box;
          height: var(--so-dialog-content-height);
          max-height: var(--so-dialog-content-height);
          min-height: 0;
          overflow-y: auto;
          overscroll-behavior-y: contain;
          scrollbar-color: var(--scrollbar-thumb-color, rgba(127, 127, 127, 0.55)) transparent;
          scrollbar-gutter: stable;
          scrollbar-width: thin;
          touch-action: pan-y;
          width: 100%;
          max-width: 100%;
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
        .gui-mode-button {
          margin-right: auto;
          margin-inline-end: auto;
          margin-inline-start: initial;
        }
        ha-dialog ha-icon-button[slot='headerActionItems'] {
          color: var(--secondary-text-color);
        }
      `]}};ih([lh({attribute:!1})],Gm.prototype,"hass",void 0),ih([lh({type:Boolean,reflect:!0})],Gm.prototype,"large",void 0),ih([ch()],Gm.prototype,"_params",void 0),ih([ch()],Gm.prototype,"_initConfig",void 0),ih([ch()],Gm.prototype,"_open",void 0),ih([ch()],Gm.prototype,"_configValid",void 0),ih([ch()],Gm.prototype,"_saveDisabled",void 0),ih([ch()],Gm.prototype,"_GUImode",void 0),ih([hh("sidebar-organizer-config-dialog")],Gm.prototype,"_configDialog",void 0),Gm=ih([sh("sidebar-organizer-dialog-wa")],Gm);var Bm=Object.freeze({__proto__:null,get SidebarOrganizerDialogWA(){return Gm}});
