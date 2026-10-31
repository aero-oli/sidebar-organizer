import{F as e,O as t,y as i,aj as s,an as n,Z as o,T as r,E as a,D as l,_ as h,R as c,C as d,U as u,a3 as f,X as p,n as g,Q as m,c as v,a2 as b,a6 as _,ab as w,ad as y,aa as x,a1 as k,b as C,d as S,q as O,ai as A,f as P,A as T,G as M,l as $,t as I,P as R,p as E,u as D,k as L,V as B,B as N,ah as z,j as H,J as V,i as G,ag as U,e as W,v as j,N as F,a9 as q,am as Q,$ as Y,L as X,M as K,S as Z,Y as J,a5 as ee,o as te,a8 as ie,x as se,s as ne,h as oe,w as re,a4 as ae,m as le,K as he,H as ce,a as de,ae as ue,r as fe,ak as pe,al as ge,g as me,a7 as ve,I as be,z as _e,ac as we,W as ye,a0 as xe}from"./sidebar-organizer-D4LRJ2Xl.js";import{g as ke,c as Ce,P as Se,B as Oe,A as Ae,q as Pe,b as Te,d as Me,r as $e,p as Ie,a as Re,s as Ee,t as De,k as Le,V as Be}from"./index-DhqPiDNu.js";function Ne(e){return Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))}const ze="[object RegExp]",He="[object String]",Ve="[object Number]",Ge="[object Boolean]",Ue="[object Arguments]",We="[object Symbol]",je="[object Date]",Fe="[object Map]",qe="[object Set]",Qe="[object Array]",Ye="[object ArrayBuffer]",Xe="[object Object]",Ke="[object DataView]",Ze="[object Uint8Array]",Je="[object Uint8ClampedArray]",et="[object Uint16Array]",tt="[object Uint32Array]",it="[object Int8Array]",st="[object Int16Array]",nt="[object Int32Array]",ot="[object Float32Array]",rt="[object Float64Array]";function at(e){return null==e||"object"!=typeof e&&"function"!=typeof e}function lt(e,t){return ht(e,void 0,e,new Map,t)}function ht(i,s,n,o=new Map,r=void 0){const a=r?.(i,s,n,o);if(void 0!==a)return a;if(at(i))return i;if(o.has(i))return o.get(i);if(Array.isArray(i)){const e=new Array(i.length);o.set(i,e);for(let t=0;t<i.length;t++)e[t]=ht(i[t],t,n,o,r);return Object.hasOwn(i,"index")&&(e.index=i.index),Object.hasOwn(i,"input")&&(e.input=i.input),e}if(i instanceof Date)return new Date(i.getTime());if(i instanceof RegExp){const e=new RegExp(i.source,i.flags);return e.lastIndex=i.lastIndex,e}if(i instanceof Map){const e=new Map;o.set(i,e);for(const[t,s]of i)e.set(t,ht(s,t,n,o,r));return e}if(i instanceof Set){const e=new Set;o.set(i,e);for(const t of i)e.add(ht(t,void 0,n,o,r));return e}if(e(i))return i.subarray();if(t(i)){const e=new(Object.getPrototypeOf(i).constructor)(i.length);o.set(i,e);for(let t=0;t<i.length;t++)e[t]=ht(i[t],t,n,o,r);return e}if(i instanceof ArrayBuffer||"undefined"!=typeof SharedArrayBuffer&&i instanceof SharedArrayBuffer)return i.slice(0);if(i instanceof DataView){const e=new DataView(i.buffer.slice(0),i.byteOffset,i.byteLength);return o.set(i,e),ct(e,i,n,o,r),e}if("undefined"!=typeof File&&i instanceof File){const e=new File([i],i.name,{type:i.type});return o.set(i,e),ct(e,i,n,o,r),e}if("undefined"!=typeof Blob&&i instanceof Blob){const e=new Blob([i],{type:i.type});return o.set(i,e),ct(e,i,n,o,r),e}if(i instanceof Error){const e=structuredClone(i);return o.set(i,e),e.message=i.message,e.name=i.name,e.stack=i.stack,e.cause=i.cause,e.constructor=i.constructor,ct(e,i,n,o,r),e}if(i instanceof Boolean){const e=new Boolean(i.valueOf());return o.set(i,e),ct(e,i,n,o,r),e}if(i instanceof Number){const e=new Number(i.valueOf());return o.set(i,e),ct(e,i,n,o,r),e}if(i instanceof String){const e=new String(i.valueOf());return o.set(i,e),ct(e,i,n,o,r),e}if("object"==typeof i&&dt(i)){const e=Object.create(Object.getPrototypeOf(i));return o.set(i,e),ct(e,i,n,o,r),e}return i}function ct(e,t,i=e,s,n){const o=[...Object.keys(t),...Ne(t)];for(let r=0;r<o.length;r++){const a=o[r],l=Object.getOwnPropertyDescriptor(e,a);(null==l||l.writable)&&(e[a]=ht(t[a],a,i,s,n))}}function dt(e){switch(i(e)){case Ue:case Qe:case Ye:case Ke:case Ge:case je:case ot:case rt:case it:case st:case nt:case Fe:case Ve:case Xe:case ze:case qe:case He:case We:case Ze:case Je:case et:case tt:return!0;default:return!1}}function ut(e,t){return lt(e,(t,s,n,o)=>{if("object"==typeof e){if("[object Object]"===i(e)&&"function"!=typeof e.constructor){const t={};return o.set(e,t),ct(t,e,n,o),t}switch(Object.prototype.toString.call(e)){case Ve:case He:case Ge:{const t=new e.constructor(e?.valueOf());return ct(t,e),t}case Ue:{const t={};return ct(t,e),t.length=e.length,t[Symbol.iterator]=e[Symbol.iterator],t}default:return}}})}function ft(e){return ut(e)}function pt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");const i=function(...s){const n=t?t.apply(this,s):s[0],o=i.cache;if(o.has(n))return o.get(n);const r=e.apply(this,s);return i.cache=o.set(n,r)||o,r};return i.cache=new(pt.Cache||Map),i}function gt(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function mt(e){return gt(s(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */pt.Cache=Map;const vt=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bt(e,t){return(t,i,s)=>vt(t,i,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _t;function wt(e){return(t,i)=>vt(t,i,{get(){return(this.renderRoot??(_t??=document.createDocumentFragment())).querySelectorAll(e)}})}const yt=(e,t,i,s)=>{const o=i??{...e._sidebarConfig},r=e.hass||e._hass;return n` <ha-form
    .hass="${r}"
    .data="${o}"
    .schema="${t}"
    .configKey="${s?.configKey}"
    .computeLabel="${xt}"
    .computeHelper="${kt}"
    @value-changed="${t=>e._valueChanged(t)}"
  ></ha-form>`};function xt(e){if("entity"===e.name&&!e.context?.group_entity)return;return mt((e.label||e.name||e.title||"").replace(/_/g," "))}function kt(e){return e.helper||void 0}var Ct="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z",St="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",Ot="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",At="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",Pt="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",Tt="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",Mt="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z",$t="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M8.88,7.82L11,9.94L9.94,11L8.88,9.94L7.82,11L6.76,9.94L8.88,7.82M12,17.5C9.67,17.5 7.69,16.04 6.89,14H17.11C16.31,16.04 14.33,17.5 12,17.5M16.18,11L15.12,9.94L14.06,11L13,9.94L15.12,7.82L17.24,9.94L16.18,11Z",It="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z",Rt="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z",Et="M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z",Dt="M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M11,5A4,4 0 0,1 15,9C15,10.5 14.2,11.77 13,12.46V11.24C13.61,10.69 14,9.89 14,9A3,3 0 0,0 11,6A3,3 0 0,0 8,9C8,9.89 8.39,10.69 9,11.24V12.46C7.8,11.77 7,10.5 7,9A4,4 0 0,1 11,5Z",Lt="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",Bt="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z",Nt="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z",zt="M9.25,5L12.5,1.75L15.75,5H9.25M15.75,19L12.5,22.25L9.25,19H15.75M8.89,14.3H6L5.28,17H2.91L6,7H9L12.13,17H9.67L8.89,14.3M6.33,12.68H8.56L7.93,10.56L7.67,9.59L7.42,8.63H7.39L7.17,9.6L6.93,10.58L6.33,12.68M13.05,17V15.74L17.8,8.97V8.91H13.5V7H20.73V8.34L16.09,15V15.08H20.8V17H13.05Z";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ht={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Vt=e=>(...t)=>({_$litDirective$:e,values:t});let Gt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ut}=o,Wt=e=>void 0===e.strings,jt=()=>document.createComment(""),Ft=(e,t,i)=>{const s=e._$AA.parentNode,n=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=s.insertBefore(jt(),n),o=s.insertBefore(jt(),n);i=new Ut(t,o,e,e.options)}else{const t=i._$AB.nextSibling,o=i._$AM,r=o!==e;if(r){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==o._$AU&&i._$AP(t)}if(t!==n||r){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;s.insertBefore(e,n),e=t}}}return i},qt=(e,t,i=e)=>(e._$AI(t,i),e),Qt={},Yt=(e,t=Qt)=>e._$AH=t,Xt=e=>e._$AH,Kt=e=>{e._$AR(),e._$AA.remove()},Zt=Vt(class extends Gt{constructor(e){if(super(e),e.type!==Ht.PROPERTY&&e.type!==Ht.ATTRIBUTE&&e.type!==Ht.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Wt(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===r||t===a)return t;const i=e.element,s=e.name;if(e.type===Ht.PROPERTY){if(t===i[s])return r}else if(e.type===Ht.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(s))return r}else if(e.type===Ht.ATTRIBUTE&&i.getAttribute(s)===t+"")return r;return Yt(e),t}}),Jt="important",ei=" !"+Jt,ti=Vt(class extends Gt{constructor(e){if(super(e),e.type!==Ht.ATTRIBUTE||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const s=e[i];return null==s?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const s=t[e];if(null!=s){this.ft.add(e);const t="string"==typeof s&&s.endsWith(ei);e.includes("-")||t?i.setProperty(e,t?s.slice(0,-11):s,t?Jt:""):i[e]=s}}return r}}),ii=l`
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
`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class si extends d{constructor(e){super(),this._utils=u,this._getPanelNotification=e=>{const t=this._config?.notification?.[e];return t},this._getPanelInfo=e=>{const t=this.hass,i=t.panels||{},s=this._getPanelNotification(e),n=this._config?.new_items?.find(t=>t.title===e);return n?{...n,component_name:"new-item"}:{...i[e],icon:i[e]?.icon||"mdi:help-circle-outline",title:this._utils.PANEL.getPanelTitleFromUrlPath(t,e)||i[e]?.title||e,notification:s}},this._computePanelInfoList=e=>(e||this._dialog._initCombiPanels).map(e=>({...this._getPanelInfo(e),group:this._dialog._getGroupOfPanel(e)||void 0,show_in_sidebar:!this._config?.hidden_items?.includes(e)})),e&&(this._configArea=e),this._styleManager=new f({namespace:"sidebar-dialog",throwWarnings:!1})}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return ii}get _dialog(){return this._store.editorDialog}get _config(){return this._store.sidebarConfig}get narrow(){return this._dialog._narrow}get _panelsWithoutNewItems(){const e=this._config?.new_items?.map(e=>e.title)||[];return this._dialog._initCombiPanels.filter(t=>!e.includes(t))}_renderSpacerDiv(){return n`<div style="flex: 1;"></div>`}_computeSelectorOptions(e,t="list",i=!0,s=!0){const n=this._utils.PANEL.getDefaultPanelUrlPath(this.hass);return{select:{multiple:!0,mode:t,options:e.map(e=>{const t=e===n,i=!(!t||s);return{value:e,label:(this._utils.PANEL.getPanelTitleFromUrlPath(this.hass,e)||e)+(t?" (default)":""),disabled:i}}),sort:!0,reorder:i}}}_createHaSelector(e,t,i,s){return n`<ha-selector
      .hass=${this.hass}
      .value=${t}
      .selector=${e}
      .required=${!1}
      .key=${i}
      .subKey=${s}
      id=${p(void 0!==i?`selector-${i}`:void 0)}
      @value-changed=${this._handleSelectorChange}
    ></ha-selector>`}_handleSelectorChange(e){e.stopPropagation();const{key:t,subKey:i}=e.target;e.detail.value}_configChanged(e){const t={...this._config,...e};g(this,"sidebar-config-changed",{config:t})}}h([c({attribute:!1})],si.prototype,"hass",void 0),h([c({attribute:!1})],si.prototype,"_store",void 0),h([c({attribute:!1})],si.prototype,"_utils",void 0);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ni=(e,t,i)=>{const s=new Map;for(let n=t;n<=i;n++)s.set(e[n],n);return s},oi=Vt(class extends Gt{constructor(e){if(super(e),e.type!==Ht.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let s;void 0===i?i=t:void 0!==t&&(s=t);const n=[],o=[];let r=0;for(const t of e)n[r]=s?s(t,r):r,o[r]=i(t,r),r++;return{values:o,keys:n}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,s]){const n=Xt(e),{values:o,keys:a}=this.dt(t,i,s);if(!Array.isArray(n))return this.ut=a,o;const l=this.ut??=[],h=[];let c,d,u=0,f=n.length-1,p=0,g=o.length-1;for(;u<=f&&p<=g;)if(null===n[u])u++;else if(null===n[f])f--;else if(l[u]===a[p])h[p]=qt(n[u],o[p]),u++,p++;else if(l[f]===a[g])h[g]=qt(n[f],o[g]),f--,g--;else if(l[u]===a[g])h[g]=qt(n[u],o[g]),Ft(e,h[g+1],n[u]),u++,g--;else if(l[f]===a[p])h[p]=qt(n[f],o[p]),Ft(e,n[u],n[f]),f--,p++;else if(void 0===c&&(c=ni(a,p,g),d=ni(l,u,f)),c.has(l[u]))if(c.has(l[f])){const t=d.get(a[p]),i=void 0!==t?n[t]:null;if(null===i){const t=Ft(e,n[u]);qt(t,o[p]),h[p]=t}else h[p]=qt(i,o[p]),Ft(e,n[u],i),n[t]=null;p++}else Kt(n[f]),f--;else Kt(n[u]),u++;for(;p<=g;){const t=Ft(e,h[g+1]);qt(t,o[p]),h[p++]=t}for(;u<=f;){const e=n[u++];null!==e&&Kt(e)}return this.ut=a,Yt(e,h),r}}),ri=[{name:"show_header_toggle",label:"Show expand/collapse button",helper:"Show a header button to open or close all sidebar groups.",default:!0},{name:"animate_groups",label:"Animate groups",helper:"Animate panels when opening and closing groups.",default:!0},{name:"move_settings_from_fixed",label:"Make Settings movable",helper:"Allow Settings to be placed in a group instead of always staying fixed at the bottom.",default:!1},{name:"force_transparent_background",label:"Transparent sidebar background",helper:"Let the dashboard background show through the sidebar."},{name:"accordion_mode",label:"Keep only one group open",helper:"Opening a group automatically closes the other groups."}],ai=e=>{e||(e=ri.map(e=>e.name));const t=[];return e.forEach(e=>{const i=ri.find(t=>t.name===e);i&&t.push({name:i.name,label:i.label,helper:i.helper,default:i.default||!1,type:"boolean"})}),t},li=e=>({...e,show_header_toggle:!e.hide_header_toggle,animate_groups:!e.animation_off}),hi=(e,t)=>{const{show_header_toggle:i,animate_groups:s,...n}=e;return"boolean"==typeof i&&i!==!t.hide_header_toggle&&(n.hide_header_toggle=!i),"boolean"==typeof s&&s!==!t.animation_off&&(n.animation_off=!s),n},ci=m(e=>[{title:"Header",icon:"mdi:format-title",schema:[{name:"header_title",label:"Sidebar title",helper:"Text shown at the top of the sidebar.",type:"string"},...ai(["show_header_toggle"])]},{title:"Group behaviour",icon:"mdi:folder-outline",schema:[...ai(["accordion_mode","animate_groups"]),...e.animation_off?[]:[{name:"animation_delay",label:"Animation delay",selector:{number:{min:0,max:100,step:10,mode:"slider",unit_of_measurement:"ms"}},helper:"Time between each panel appearing when a group opens. Lower is faster.",default:50}],...ai(["move_settings_from_fixed"]),{name:"text_transformation",label:"Group name capitalization",default:"capitalize",selector:{select:{mode:"dropdown",options:v.map(e=>({value:e,label:e.charAt(0).toUpperCase()+e.slice(1)}))}}}]},{title:"Size",icon:"mdi:arrow-expand-horizontal",schema:[{name:"width",label:"Sidebar width",helper:"Optional width, for example 300px or 20%. Leave blank to use Home Assistant’s default.",type:"string"}]}]),di=()=>ai(["force_transparent_background"]),ui=["light","dark"],fi=(e=!1)=>[{name:"custom_theme",type:"grid",flatten:!0,schema:[{name:"theme",label:"Sidebar theme",required:!1,selector:{theme:{include_default:!1}}},{name:"mode",label:"Theme mode",required:!1,disabled:e,selector:{select:{mode:"dropdown",options:ui.map(e=>({value:e,label:e.charAt(0).toUpperCase()+e.slice(1)}))}}}]}],pi=["more-info","toggle","navigate","url","perform-action","assist","none"],gi={tap_action:"Tap behavior",hold_action:"Hold behavior",double_tap_action:"Double tap behavior",icon_tap_action:"Icon tap behavior",icon_hold_action:"Icon hold behavior",icon_double_tap_action:"Icon double tap behavior"},mi=(e=!1)=>[{name:"",type:"optional_actions",flatten:!0,schema:(e?["hold_action","double_tap_action"]:["tap_action","hold_action","double_tap_action"]).map(e=>({name:e,label:gi[e],selector:{ui_action:{actions:pi,default_action:"none"}}}))}],vi={items:"Individual Items Configuration",groups:"Groups Configuration"},bi={items:"Select an item",groups:"Select a group"},_i={groups:"A group entry applies to all panels in the group.",items:"If a panel is included in a group with a visibility setting, the individual panel setting will be ignored in favor of the group setting."};pt((e,t)=>[{title:vi[e]||e,type:"expandable",expanded:!0,flatten:!1,required:!1,name:e,helper:_i[e]||"",schema:[{name:"",selector:{object:{label_field:"name",description_field:"value",multiple:!0,fields:{name:{label:bi[e]||"Name",selector:t,required:!1},value:{label:"Visibility Template",selector:{template:{preview:!0}},required:!1}}}}}]}]);const wi=e=>e?mt(e.trim()):"Ungrouped";let yi=class extends si{constructor(){super(ke.NEW_ITEMS),this.embedded=!1,this._selectedItemIndex=null,this._selectedItem=null,this._yamlMode=!1,this._actionsSchema=[{title:"Interaction",type:"expandable",flatten:!0,iconPath:Dt,schema:[{name:"entity",selector:{entity:{}},helper:"Entity to control when the button is pressed"},...mi()]}],this._iconTemplateSchema=[{type:"expandable",title:"Icon template",iconPath:$t,expanded:!1,schema:[{name:"icon_template",selector:{template:{}}}]}],this._configSchema=m(()=>[{type:"grid",schema:[{name:"icon",label:"Item Icon",selector:{icon:{}}},{name:"url_path",label:"Destination",helper:"Home Assistant path or full URL. Leave blank for an action-only item.",type:"string"},{name:"target",label:"Open in",selector:{select:{mode:"dropdown",options:[{value:"_self",label:"This window"},{value:"_blank",label:"New window"}]}}}]}]),this._computeLabel=e=>{if("entity"===e.name&&!e.context?.group_entity)return;return mt((e.label||e.name||e.title||"").replace(/_/g," "))},this._computeHelper=e=>e.helper||void 0,this._handleDeleteItem=async e=>{const t=this._sidebarConfig.new_items[e].title;if(!await w(this,`Are you sure you want to delete the item "${t}"?`,"Delete"))return;const i=[...this._sidebarConfig.new_items||[]];i.splice(e,1),this._sidebarConfig={...this._sidebarConfig,new_items:i},this._handleRemoveItem(t),this._selectedItemIndex=null,this.dispatchEvent(new CustomEvent("item-deleted",{bubbles:!0,composed:!0})),this._dispatchConfig(this._sidebarConfig),this.requestUpdate()},this._handleRemoveItem=e=>{this._updateItemAssignments(e)},this._toggleRenameItem=async e=>{const t=this._sidebarConfig.new_items[e].title;let i=await y(this,"Enter new item title","Rename Item","Rename","Cancel");if(!i||""===i)return;if(i=i.trim(),!i||i===t)return;if(Object.hasOwn(this.hass.panels||{},i)||this._sidebarConfig.new_items?.some(e=>e.title===i))return void await x(this,"An item with this name already exists. Choose a different name.");this._updateItemAssignments(t,i);const s=[...this._sidebarConfig.new_items||[]];s[e]={...s[e],title:i},this._sidebarConfig={...this._sidebarConfig,new_items:s},this._dispatchConfig(this._sidebarConfig),this._selectedItemIndex=e,this.dispatchEvent(new CustomEvent("item-renamed",{detail:{title:i},bubbles:!0,composed:!0})),this.requestUpdate()},this._togglePromptNewItem=async()=>{let e=await y(this,"Enter new item title","New Item","Add","Cancel");if(!e||""===e)return;if(e=e.trim(),!e)return;if(Object.hasOwn(this.hass.panels||{},e)||this._sidebarConfig.new_items?.some(t=>t.title===e))return void await x(this,"An item with this name already exists. Choose a different name.");const t={title:e,icon:`mdi:alpha-${e.charAt(0).toLowerCase()}-circle`},i=[...this._sidebarConfig.new_items||[]];i.push(t),this._sidebarConfig={...this._sidebarConfig,new_items:i},this._dispatchConfig(this._sidebarConfig),this._selectedItemIndex=i.length-1,this.requestUpdate()}}willUpdate(e){if(this.embedded&&(e.has("itemTitle")||e.has("_sidebarConfig"))){const e=this._sidebarConfig?.new_items?.findIndex(e=>e.title===this.itemTitle)??-1;this._selectedItemIndex=e>=0?e:null}}firstUpdated(e){super.firstUpdated(e)}updated(e){super.updated(e),e.has("_selectedItemIndex")&&(null!==this._selectedItemIndex?(this._selectedItem=this._sidebarConfig.new_items[this._selectedItemIndex],this.embedded||this._toggleItemInPreview(this._selectedItem.title)):(this._selectedItem=null,this._yamlMode=!1,this._dialog._dialogPreview._hightlightItem(null)))}render(){return this.hass&&this._sidebarConfig?null===this._selectedItemIndex?this._renderNewItemsList():this._renderSelectedItem():n`<div>Loading...</div>`}_renderNewItemsList(){if(null!==this._selectedItemIndex)return a;const e=n` <ha-button size="s" @click=${this._togglePromptNewItem}>Add new item </ha-button> `,t=this._sidebarConfig?.new_items||[],i=n`
      ${t.length?n`
            <div class="group-list">
              ${oi(t,e=>e.title,(e,t)=>{const{icon:i,title:s}=e;return n`
                    <div class="group-item-row" style="padding-inline-start: 1rem">
                      <button class="group-name" @click=${()=>this._selectedItemIndex=t}>
                        <ha-icon .icon=${i}></ha-icon>
                        <div class="group-name-items">
                          ${s}
                          <span>${wi(this.getGroupKey(s))}</span>
                        </div>
                      </button>
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
          `:n`<div>No new items added yet</div>`}
    `;return n`
      <div class="config-content">
        ${i}
        <div class="header-row flex-end">${e}</div>
      </div>
    `}_renderSelectedItem(){if(null===this._selectedItemIndex)return a;const e=C.BTN_LABEL,t=this._sidebarConfig.new_items[this._selectedItemIndex],i=n` <div class="header-row">
      <ha-icon-button
        .label=${"Back to items"}
        .path=${Ot}
        @click=${()=>this._selectedItemIndex=null}
      >
      </ha-icon-button>
    </div>`,s={...t},o=this.getGroupKey(t.title),r=wi(o),l={icon:s?.icon,url_path:s?.url_path,target:s?.target||"_self"},h=k(s,["entity","tap_action","hold_action","double_tap_action"]),c={icon_template:s.icon_template},d=this._configSchema(),u=this._actionsSchema,f=this._iconTemplateSchema;return n`
      ${this.embedded?a:i}
      <div class="config-content">
        ${this._yamlMode?n`
              <ha-yaml-editor
                .hass=${this.hass}
                .defaultValue=${s}
                .copyToClipboard=${!0}
                .required=${!0}
                @value-changed=${e=>{const{isValid:t,value:i}=e.detail;t&&(this._sidebarConfig.new_items[this._selectedItemIndex]=i,this._dispatchConfig(this._sidebarConfig))}}
              ></ha-yaml-editor>
            `:n`
              <div class="group-item-row item-name-row" ?embedded=${this.embedded}>
                ${this.embedded?a:n`<div class="group-name">
                  <ha-icon .icon=${t.icon}></ha-icon>
                  <div class="group-name-items">${t.title}<span>${r}</span></div>
                </div>`}
                <div class="group-actions">
                  <ha-button
                    appearance="plain"
                    size="s"
                    @click=${this._toggleRenameItem.bind(this,this._selectedItemIndex)}
                    >Rename</ha-button
                  >
                  ${this.embedded?n`<ha-button
                        appearance="plain"
                        destructive
                        @click=${()=>this._handleDeleteItem(this._selectedItemIndex)}
                        >Delete item</ha-button
                      >`:a}
                </div>
              </div>

              ${this._createHaForm(l,d,"base")}
              ${this._createHaForm(h,u,"actions")}
              ${this._createHaForm(c,f,"icon_template","icon-template-form")}
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
    `}getGroupKey(e){return this._dialog._getGroupOfPanel(e)||void 0}_toggleItemInPreview(e){const t=this._dialog._getGroupOfPanel(e);t&&null!==t&&["bottom_items","bottom_grid_items"].includes(t)?this._dialog._dialogPreview._toggleBottomPanel(t):this._dialog._dialogPreview._toggleGroup(t),this._dialog._dialogPreview._hightlightItem(e)}_createHaForm(e,t,i,s){return n`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${t}
        .configKey=${i}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
        id=${p(s||void 0)}
      >
      </ha-form>
    `}_valueChanged(e){if(e.stopPropagation(),null===this._selectedItemIndex)return;const t=this._selectedItemIndex,i={...this._sidebarConfig.new_items[t]},s=e.detail.value,n=e.target.configKey;let o={};if("base"===n)o={...s};else if("actions"===n){const e=k(i,["entity","tap_action","hold_action","double_tap_action"]);JSON.stringify(e)!==JSON.stringify(s)&&(o={...s})}else"icon_template"===n&&JSON.stringify(i.icon_template)!==JSON.stringify(s.icon_template)&&(o={icon_template:s.icon_template});if(Object.keys(o).length>0){const e={...i,...o},s=[...this._sidebarConfig.new_items||[]];s[t]=e,this._sidebarConfig={...this._sidebarConfig,new_items:s},this._selectedItem={...e},this._dispatchConfig(this._sidebarConfig)}}_updateItemAssignments(e,t){const i=i=>i.flatMap(i=>i===e?t?[t]:[]:[i]),s=i=>{if(!i||!Object.hasOwn(i,e))return i;const s={...i};return t&&(s[t]=s[e]),delete s[e],s};this._sidebarConfig={...this._sidebarConfig,...this._sidebarConfig.hidden_items?{hidden_items:i(this._sidebarConfig.hidden_items)}:{},...this._sidebarConfig.notification?{notification:s(this._sidebarConfig.notification)}:{},...this._sidebarConfig.visibility_templates?.items?{visibility_templates:{...this._sidebarConfig.visibility_templates,items:s(this._sidebarConfig.visibility_templates.items)}}:{},...this._sidebarConfig.custom_groups?{custom_groups:Object.fromEntries(Object.entries(this._sidebarConfig.custom_groups).map(([e,t])=>[e,i(t)]))}:{},...this._sidebarConfig.bottom_groups?{bottom_groups:Object.fromEntries(Object.entries(this._sidebarConfig.bottom_groups).map(([e,t])=>[e,i(t)]))}:{},...this._sidebarConfig.bottom_items?{bottom_items:i(this._sidebarConfig.bottom_items)}:{},...this._sidebarConfig.bottom_grid_items?{bottom_grid_items:i(this._sidebarConfig.bottom_grid_items)}:{}}}_dispatchConfig(e){const t=new CustomEvent("sidebar-changed",{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(t)}static get styles(){return[super.styles,l`
        button.group-name {
          background: transparent;
          border: 0;
          color: var(--primary-text-color);
          cursor: pointer;
          font: inherit;
          text-align: start;
        }
        button:focus-visible {
          outline: 2px solid var(--primary-color);
          outline-offset: 2px;
        }
        .config-content {
          margin-top: 0;
          min-height: 0;
        }
        .item-name-row[embedded] { background: transparent; border: 0; padding-inline: 0; justify-content: flex-end; }
        .item-name-row {
          padding: 0.5em;
          border: 1px solid var(--divider-color);
          border-radius: 4px;
          background-color: var(--secondary-background-color);
        }
      `]}};h([c({attribute:!1})],yi.prototype,"_sidebarConfig",void 0),h([c({type:Boolean})],yi.prototype,"embedded",void 0),h([c({attribute:!1})],yi.prototype,"itemTitle",void 0),h([b()],yi.prototype,"_selectedItemIndex",void 0),h([b()],yi.prototype,"_selectedItem",void 0),h([b()],yi.prototype,"_yamlMode",void 0),yi=h([_("sidebar-dialog-new-items")],yi);
/*!
 * iro.js v5.5.2
 * 2016-2021 James Daniel
 * Licensed under MPL 2.0
 * github.com/jaames/iro.js
 */
var xi,ki,Ci,Si,Oi,Ai={},Pi=[],Ti=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function Mi(e,t){for(var i in t)e[i]=t[i];return e}function $i(e){var t=e.parentNode;t&&t.removeChild(e)}function Ii(e,t,i){var s,n,o,r,a=arguments;if(t=Mi({},t),arguments.length>3)for(i=[i],s=3;s<arguments.length;s++)i.push(a[s]);if(null!=i&&(t.children=i),null!=e&&null!=e.defaultProps)for(n in e.defaultProps)void 0===t[n]&&(t[n]=e.defaultProps[n]);return r=t.key,null!=(o=t.ref)&&delete t.ref,null!=r&&delete t.key,Ri(e,t,r,o)}function Ri(e,t,i,s){var n={type:e,props:t,key:i,ref:s,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return xi.vnode&&xi.vnode(n),n}function Ei(e){return e.children}function Di(e){if(null==e||"boolean"==typeof e)return null;if("string"==typeof e||"number"==typeof e)return Ri(null,e,null,null);if(null!=e.__e||null!=e.__c){var t=Ri(e.type,e.props,e.key,null);return t.__e=e.__e,t}return e}function Li(e,t){this.props=e,this.context=t}function Bi(e,t){if(null==t)return e.__p?Bi(e.__p,e.__p.__k.indexOf(e)+1):null;for(var i;t<e.__k.length;t++)if(null!=(i=e.__k[t])&&null!=i.__e)return i.__e;return"function"==typeof e.type?Bi(e):null}function Ni(e){var t,i;if(null!=(e=e.__p)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(i=e.__k[t])&&null!=i.__e){e.__e=e.__c.base=i.__e;break}return Ni(e)}}function zi(e){(!e.__d&&(e.__d=!0)&&1===ki.push(e)||Si!==xi.debounceRendering)&&(Si=xi.debounceRendering,(xi.debounceRendering||Ci)(Hi))}function Hi(){var e,t,i,s,n,o,r,a;for(ki.sort(function(e,t){return t.__v.__b-e.__v.__b});e=ki.pop();)e.__d&&(i=void 0,s=void 0,o=(n=(t=e).__v).__e,r=t.__P,a=t.u,t.u=!1,r&&(i=[],s=qi(r,n,Mi({},n),t.__n,void 0!==r.ownerSVGElement,null,i,a,null==o?Bi(n):o),Qi(i,n),s!=o&&Ni(n)))}function Vi(e,t,i,s,n,o,r,a,l){var h,c,d,u,f,p,g,m=i&&i.__k||Pi,v=m.length;if(a==Ai&&(a=null!=o?o[0]:v?Bi(i,0):null),h=0,t.__k=Gi(t.__k,function(i){if(null!=i){if(i.__p=t,i.__b=t.__b+1,null===(d=m[h])||d&&i.key==d.key&&i.type===d.type)m[h]=void 0;else for(c=0;c<v;c++){if((d=m[c])&&i.key==d.key&&i.type===d.type){m[c]=void 0;break}d=null}if(u=qi(e,i,d=d||Ai,s,n,o,r,null,a,l),(c=i.ref)&&d.ref!=c&&(g||(g=[])).push(c,i.__c||u,i),null!=u){if(null==p&&(p=u),null!=i.l)u=i.l,i.l=null;else if(o==d||u!=a||null==u.parentNode){e:if(null==a||a.parentNode!==e)e.appendChild(u);else{for(f=a,c=0;(f=f.nextSibling)&&c<v;c+=2)if(f==u)break e;e.insertBefore(u,a)}"option"==t.type&&(e.value="")}a=u.nextSibling,"function"==typeof t.type&&(t.l=u)}}return h++,i}),t.__e=p,null!=o&&"function"!=typeof t.type)for(h=o.length;h--;)null!=o[h]&&$i(o[h]);for(h=v;h--;)null!=m[h]&&Ki(m[h],m[h]);if(g)for(h=0;h<g.length;h++)Xi(g[h],g[++h],g[++h])}function Gi(e,t,i){if(null==i&&(i=[]),null==e||"boolean"==typeof e)t&&i.push(t(null));else if(Array.isArray(e))for(var s=0;s<e.length;s++)Gi(e[s],t,i);else i.push(t?t(Di(e)):e);return i}function Ui(e,t,i,s,n){var o;for(o in i)o in t||ji(e,o,null,i[o],s);for(o in t)n&&"function"!=typeof t[o]||"value"===o||"checked"===o||i[o]===t[o]||ji(e,o,t[o],i[o],s)}function Wi(e,t,i){"-"===t[0]?e.setProperty(t,i):e[t]="number"==typeof i&&!1===Ti.test(t)?i+"px":null==i?"":i}function ji(e,t,i,s,n){var o,r,a,l,h;if("key"===(t=n?"className"===t?"class":t:"class"===t?"className":t)||"children"===t);else if("style"===t)if(o=e.style,"string"==typeof i)o.cssText=i;else{if("string"==typeof s&&(o.cssText="",s=null),s)for(r in s)i&&r in i||Wi(o,r,"");if(i)for(a in i)s&&i[a]===s[a]||Wi(o,a,i[a])}else"o"===t[0]&&"n"===t[1]?(l=t!==(t=t.replace(/Capture$/,"")),h=t.toLowerCase(),t=(h in e?h:t).slice(2),i?(s||e.addEventListener(t,Fi,l),(e.t||(e.t={}))[t]=i):e.removeEventListener(t,Fi,l)):"list"!==t&&"tagName"!==t&&"form"!==t&&!n&&t in e?e[t]=null==i?"":i:"function"!=typeof i&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==i||!1===i?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),i):null==i||!1===i?e.removeAttribute(t):e.setAttribute(t,i))}function Fi(e){return this.t[e.type](xi.event?xi.event(e):e)}function qi(e,t,i,s,n,o,r,a,l,h){var c,d,u,f,p,g,m,v,b,_,w=t.type;if(void 0!==t.constructor)return null;(c=xi.__b)&&c(t);try{e:if("function"==typeof w){if(v=t.props,b=(c=w.contextType)&&s[c.__c],_=c?b?b.props.value:c.__p:s,i.__c?m=(d=t.__c=i.__c).__p=d.__E:("prototype"in w&&w.prototype.render?t.__c=d=new w(v,_):(t.__c=d=new Li(v,_),d.constructor=w,d.render=Zi),b&&b.sub(d),d.props=v,d.state||(d.state={}),d.context=_,d.__n=s,u=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=w.getDerivedStateFromProps&&Mi(d.__s==d.state?d.__s=Mi({},d.__s):d.__s,w.getDerivedStateFromProps(v,d.__s)),u)null==w.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&r.push(d);else{if(null==w.getDerivedStateFromProps&&null==a&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(v,_),!a&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(v,d.__s,_)){for(d.props=v,d.state=d.__s,d.__d=!1,d.__v=t,t.__e=null!=l?l!==i.__e?l:i.__e:null,t.__k=i.__k,c=0;c<t.__k.length;c++)t.__k[c]&&(t.__k[c].__p=t);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(v,d.__s,_)}for(f=d.props,p=d.state,d.context=_,d.props=v,d.state=d.__s,(c=xi.__r)&&c(t),d.__d=!1,d.__v=t,d.__P=e,c=d.render(d.props,d.state,d.context),t.__k=Gi(null!=c&&c.type==Ei&&null==c.key?c.props.children:c),null!=d.getChildContext&&(s=Mi(Mi({},s),d.getChildContext())),u||null==d.getSnapshotBeforeUpdate||(g=d.getSnapshotBeforeUpdate(f,p)),Vi(e,t,i,s,n,o,r,l,h),d.base=t.__e;c=d.__h.pop();)d.__s&&(d.state=d.__s),c.call(d);u||null==f||null==d.componentDidUpdate||d.componentDidUpdate(f,p,g),m&&(d.__E=d.__p=null)}else t.__e=Yi(i.__e,t,i,s,n,o,r,h);(c=xi.diffed)&&c(t)}catch(e){xi.__e(e,t,i)}return t.__e}function Qi(e,t){for(var i;i=e.pop();)try{i.componentDidMount()}catch(e){xi.__e(e,i.__v)}xi.__c&&xi.__c(t)}function Yi(e,t,i,s,n,o,r,a){var l,h,c,d,u=i.props,f=t.props;if(n="svg"===t.type||n,null==e&&null!=o)for(l=0;l<o.length;l++)if(null!=(h=o[l])&&(null===t.type?3===h.nodeType:h.localName===t.type)){e=h,o[l]=null;break}if(null==e){if(null===t.type)return document.createTextNode(f);e=n?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type),o=null}return null===t.type?u!==f&&(null!=o&&(o[o.indexOf(e)]=null),e.data=f):t!==i&&(null!=o&&(o=Pi.slice.call(e.childNodes)),c=(u=i.props||Ai).dangerouslySetInnerHTML,d=f.dangerouslySetInnerHTML,a||(d||c)&&(d&&c&&d.__html==c.__html||(e.innerHTML=d&&d.__html||"")),Ui(e,f,u,n,a),t.__k=t.props.children,d||Vi(e,t,i,s,"foreignObject"!==t.type&&n,o,r,Ai,a),a||("value"in f&&void 0!==f.value&&f.value!==e.value&&(e.value=null==f.value?"":f.value),"checked"in f&&void 0!==f.checked&&f.checked!==e.checked&&(e.checked=f.checked))),e}function Xi(e,t,i){try{"function"==typeof e?e(t):e.current=t}catch(e){xi.__e(e,i)}}function Ki(e,t,i){var s,n,o;if(xi.unmount&&xi.unmount(e),(s=e.ref)&&Xi(s,null,t),i||"function"==typeof e.type||(i=null!=(n=e.__e)),e.__e=e.l=null,null!=(s=e.__c)){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(e){xi.__e(e,t)}s.base=s.__P=null}if(s=e.__k)for(o=0;o<s.length;o++)s[o]&&Ki(s[o],t,i);null!=n&&$i(n)}function Zi(e,t,i){return this.constructor(e,i)}function Ji(e,t,i){var s,n,o;xi.__p&&xi.__p(e,t),n=(s=i===Oi)?null:t.__k,e=Ii(Ei,null,[e]),o=[],qi(t,t.__k=e,n||Ai,Ai,void 0!==t.ownerSVGElement,n?null:Pi.slice.call(t.childNodes),o,!1,Ai,s),Qi(o,e)}function es(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function ts(e,t,i){return t&&es(e.prototype,t),e}function is(){return is=Object.assign||function(e){for(var t=arguments,i=1;i<arguments.length;i++){var s=t[i];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},is.apply(this,arguments)}xi={},Li.prototype.setState=function(e,t){var i=this.__s!==this.state&&this.__s||(this.__s=Mi({},this.state));("function"!=typeof e||(e=e(i,this.props)))&&Mi(i,e),null!=e&&this.__v&&(this.u=!1,t&&this.__h.push(t),zi(this))},Li.prototype.forceUpdate=function(e){this.__v&&(e&&this.__h.push(e),this.u=!0,zi(this))},Li.prototype.render=Ei,ki=[],Ci="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Si=xi.debounceRendering,xi.__e=function(e,t,i){for(var s;t=t.__p;)if((s=t.__c)&&!s.__p)try{if(s.constructor&&null!=s.constructor.getDerivedStateFromError)s.setState(s.constructor.getDerivedStateFromError(e));else{if(null==s.componentDidCatch)continue;s.componentDidCatch(e)}return zi(s.__E=s)}catch(t){e=t}throw e},Oi=Ai;var ss="[-\\+]?\\d+%?",ns="[-\\+]?\\d*\\.\\d+%?",os="(?:"+ns+")|(?:"+ss+")",rs="[\\s|\\(]+("+os+")[,|\\s]+("+os+")[,|\\s]+("+os+")\\s*\\)?",as="[\\s|\\(]+("+os+")[,|\\s]+("+os+")[,|\\s]+("+os+")[,|\\s]+("+os+")\\s*\\)?",ls=new RegExp("rgb"+rs),hs=new RegExp("rgba"+as),cs=new RegExp("hsl"+rs),ds=new RegExp("hsla"+as),us="^(?:#?|0x?)",fs="([0-9a-fA-F]{1})",ps="([0-9a-fA-F]{2})",gs=new RegExp(us+fs+fs+fs+"$"),ms=new RegExp(us+fs+fs+fs+fs+"$"),vs=new RegExp(us+ps+ps+ps+"$"),bs=new RegExp(us+ps+ps+ps+ps+"$"),_s=2e3,ws=4e4,ys=Math.log,xs=Math.round,ks=Math.floor;function Cs(e,t,i){return Math.min(Math.max(e,t),i)}function Ss(e,t){var i=e.indexOf("%")>-1,s=parseFloat(e);return i?t/100*s:s}function Os(e){return parseInt(e,16)}function As(e){return e.toString(16).padStart(2,"0")}var Ps=function(){function e(e,t){this.$={h:0,s:0,v:0,a:1},e&&this.set(e),this.onChange=t,this.initialValue=is({},this.$)}var t=e.prototype;return t.set=function(t){if("string"==typeof t)/^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(t)?this.hexString=t:/^rgba?/.test(t)?this.rgbString=t:/^hsla?/.test(t)&&(this.hslString=t);else{if("object"!=typeof t)throw new Error("Invalid color value");t instanceof e?this.hsva=t.hsva:"r"in t&&"g"in t&&"b"in t?this.rgb=t:"h"in t&&"s"in t&&"v"in t?this.hsv=t:"h"in t&&"s"in t&&"l"in t?this.hsl=t:"kelvin"in t&&(this.kelvin=t.kelvin)}},t.setChannel=function(e,t,i){var s;this[e]=is({},this[e],((s={})[t]=i,s))},t.reset=function(){this.hsva=this.initialValue},t.clone=function(){return new e(this)},t.unbind=function(){this.onChange=void 0},e.hsvToRgb=function(e){var t=e.h/60,i=e.s/100,s=e.v/100,n=ks(t),o=t-n,r=s*(1-i),a=s*(1-o*i),l=s*(1-(1-o)*i),h=n%6,c=[l,s,s,a,r,r][h],d=[r,r,l,s,s,a][h];return{r:Cs(255*[s,a,r,r,l,s][h],0,255),g:Cs(255*c,0,255),b:Cs(255*d,0,255)}},e.rgbToHsv=function(e){var t=e.r/255,i=e.g/255,s=e.b/255,n=Math.max(t,i,s),o=Math.min(t,i,s),r=n-o,a=0,l=n,h=0===n?0:r/n;switch(n){case o:a=0;break;case t:a=(i-s)/r+(i<s?6:0);break;case i:a=(s-t)/r+2;break;case s:a=(t-i)/r+4}return{h:60*a%360,s:Cs(100*h,0,100),v:Cs(100*l,0,100)}},e.hsvToHsl=function(e){var t=e.s/100,i=e.v/100,s=(2-t)*i,n=s<=1?s:2-s,o=n<1e-9?0:t*i/n;return{h:e.h,s:Cs(100*o,0,100),l:Cs(50*s,0,100)}},e.hslToHsv=function(e){var t=2*e.l,i=e.s*(t<=100?t:200-t)/100,s=t+i<1e-9?0:2*i/(t+i);return{h:e.h,s:Cs(100*s,0,100),v:Cs((t+i)/2,0,100)}},e.kelvinToRgb=function(e){var t,i,s,n=e/100;return n<66?(t=255,i=-155.25485562709179-.44596950469579133*(i=n-2)+104.49216199393888*ys(i),s=n<20?0:.8274096064007395*(s=n-10)-254.76935184120902+115.67994401066147*ys(s)):(t=351.97690566805693+.114206453784165*(t=n-55)-40.25366309332127*ys(t),i=325.4494125711974+.07943456536662342*(i=n-50)-28.0852963507957*ys(i),s=255),{r:Cs(ks(t),0,255),g:Cs(ks(i),0,255),b:Cs(ks(s),0,255)}},e.rgbToKelvin=function(t){for(var i,s=t.r,n=t.b,o=_s,r=ws;r-o>.4;){i=.5*(r+o);var a=e.kelvinToRgb(i);a.b/a.r>=n/s?r=i:o=i}return i},ts(e,[{key:"hsv",get:function(){var e=this.$;return{h:e.h,s:e.s,v:e.v}},set:function(e){var t=this.$;if(e=is({},t,e),this.onChange){var i={h:!1,v:!1,s:!1,a:!1};for(var s in t)i[s]=e[s]!=t[s];this.$=e,(i.h||i.s||i.v||i.a)&&this.onChange(this,i)}else this.$=e}},{key:"hsva",get:function(){return is({},this.$)},set:function(e){this.hsv=e}},{key:"hue",get:function(){return this.$.h},set:function(e){this.hsv={h:e}}},{key:"saturation",get:function(){return this.$.s},set:function(e){this.hsv={s:e}}},{key:"value",get:function(){return this.$.v},set:function(e){this.hsv={v:e}}},{key:"alpha",get:function(){return this.$.a},set:function(e){this.hsv=is({},this.hsv,{a:e})}},{key:"kelvin",get:function(){return e.rgbToKelvin(this.rgb)},set:function(t){this.rgb=e.kelvinToRgb(t)}},{key:"red",get:function(){return this.rgb.r},set:function(e){this.rgb=is({},this.rgb,{r:e})}},{key:"green",get:function(){return this.rgb.g},set:function(e){this.rgb=is({},this.rgb,{g:e})}},{key:"blue",get:function(){return this.rgb.b},set:function(e){this.rgb=is({},this.rgb,{b:e})}},{key:"rgb",get:function(){var t=e.hsvToRgb(this.$),i=t.r,s=t.g,n=t.b;return{r:xs(i),g:xs(s),b:xs(n)}},set:function(t){this.hsv=is({},e.rgbToHsv(t),{a:void 0===t.a?1:t.a})}},{key:"rgba",get:function(){return is({},this.rgb,{a:this.alpha})},set:function(e){this.rgb=e}},{key:"hsl",get:function(){var t=e.hsvToHsl(this.$),i=t.h,s=t.s,n=t.l;return{h:xs(i),s:xs(s),l:xs(n)}},set:function(t){this.hsv=is({},e.hslToHsv(t),{a:void 0===t.a?1:t.a})}},{key:"hsla",get:function(){return is({},this.hsl,{a:this.alpha})},set:function(e){this.hsl=e}},{key:"rgbString",get:function(){var e=this.rgb;return"rgb("+e.r+", "+e.g+", "+e.b+")"},set:function(e){var t,i,s,n,o=1;if((t=ls.exec(e))?(i=Ss(t[1],255),s=Ss(t[2],255),n=Ss(t[3],255)):(t=hs.exec(e))&&(i=Ss(t[1],255),s=Ss(t[2],255),n=Ss(t[3],255),o=Ss(t[4],1)),!t)throw new Error("Invalid rgb string");this.rgb={r:i,g:s,b:n,a:o}}},{key:"rgbaString",get:function(){var e=this.rgba;return"rgba("+e.r+", "+e.g+", "+e.b+", "+e.a+")"},set:function(e){this.rgbString=e}},{key:"hexString",get:function(){var e=this.rgb;return"#"+As(e.r)+As(e.g)+As(e.b)},set:function(e){var t,i,s,n,o=255;if((t=gs.exec(e))?(i=17*Os(t[1]),s=17*Os(t[2]),n=17*Os(t[3])):(t=ms.exec(e))?(i=17*Os(t[1]),s=17*Os(t[2]),n=17*Os(t[3]),o=17*Os(t[4])):(t=vs.exec(e))?(i=Os(t[1]),s=Os(t[2]),n=Os(t[3])):(t=bs.exec(e))&&(i=Os(t[1]),s=Os(t[2]),n=Os(t[3]),o=Os(t[4])),!t)throw new Error("Invalid hex string");this.rgb={r:i,g:s,b:n,a:o/255}}},{key:"hex8String",get:function(){var e=this.rgba;return"#"+As(e.r)+As(e.g)+As(e.b)+As(ks(255*e.a))},set:function(e){this.hexString=e}},{key:"hslString",get:function(){var e=this.hsl;return"hsl("+e.h+", "+e.s+"%, "+e.l+"%)"},set:function(e){var t,i,s,n,o=1;if((t=cs.exec(e))?(i=Ss(t[1],360),s=Ss(t[2],100),n=Ss(t[3],100)):(t=ds.exec(e))&&(i=Ss(t[1],360),s=Ss(t[2],100),n=Ss(t[3],100),o=Ss(t[4],1)),!t)throw new Error("Invalid hsl string");this.hsl={h:i,s:s,l:n,a:o}}},{key:"hslaString",get:function(){var e=this.hsla;return"hsla("+e.h+", "+e.s+"%, "+e.l+"%, "+e.a+")"},set:function(e){this.hslString=e}}]),e}(),Ts={sliderShape:"bar",sliderType:"value",minTemperature:2200,maxTemperature:11e3};function Ms(e){var t,i=e.width,s=e.sliderSize,n=e.borderWidth,o=e.handleRadius,r=e.padding,a=e.sliderShape,l="horizontal"===e.layoutDirection;return s=null!=(t=s)?t:2*r+2*o,"circle"===a?{handleStart:e.padding+e.handleRadius,handleRange:i-2*r-2*o,width:i,height:i,cx:i/2,cy:i/2,radius:i/2-n/2}:{handleStart:s/2,handleRange:i-s,radius:s/2,x:0,y:0,width:l?s:i,height:l?i:s}}function $s(e,t){var i=t.hsva,s=t.rgb;switch(e.sliderType){case"red":return s.r/2.55;case"green":return s.g/2.55;case"blue":return s.b/2.55;case"alpha":return 100*i.a;case"kelvin":var n=e.minTemperature,o=e.maxTemperature-n,r=(t.kelvin-n)/o*100;return Math.max(0,Math.min(r,100));case"hue":return i.h/=3.6;case"saturation":return i.s;default:return i.v}}function Is(e,t,i){var s,n=Ms(e),o=n.handleRange,r=n.handleStart;s="horizontal"===e.layoutDirection?-1*i+o+r:t-r,s=Math.max(Math.min(s,o),0);var a=Math.round(100/o*s);switch(e.sliderType){case"kelvin":var l=e.minTemperature;return l+(e.maxTemperature-l)*(a/100);case"alpha":return a/100;case"hue":return 3.6*a;case"red":case"blue":case"green":return 2.55*a;default:return a}}function Rs(e,t){var i=Ms(e),s=i.width,n=i.height,o=i.handleRange,r=i.handleStart,a="horizontal"===e.layoutDirection,l=a?s/2:n/2,h=r+$s(e,t)/100*o;return a&&(h=-1*h+o+2*r),{x:a?l:h,y:a?h:l}}function Es(e,t){var i=t.hsv,s=t.rgb;switch(e.sliderType){case"red":return[[0,"rgb(0,"+s.g+","+s.b+")"],[100,"rgb(255,"+s.g+","+s.b+")"]];case"green":return[[0,"rgb("+s.r+",0,"+s.b+")"],[100,"rgb("+s.r+",255,"+s.b+")"]];case"blue":return[[0,"rgb("+s.r+","+s.g+",0)"],[100,"rgb("+s.r+","+s.g+",255)"]];case"alpha":return[[0,"rgba("+s.r+","+s.g+","+s.b+",0)"],[100,"rgb("+s.r+","+s.g+","+s.b+")"]];case"kelvin":for(var n=[],o=e.minTemperature,r=e.maxTemperature,a=r-o,l=o,h=0;l<r;l+=a/8,h+=1){var c=Ps.kelvinToRgb(l),d=c.r,u=c.g,f=c.b;n.push([12.5*h,"rgb("+d+","+u+","+f+")"])}return n;case"hue":return[[0,"#f00"],[16.666,"#ff0"],[33.333,"#0f0"],[50,"#0ff"],[66.666,"#00f"],[83.333,"#f0f"],[100,"#f00"]];case"saturation":var p=Ps.hsvToHsl({h:i.h,s:0,v:i.v}),g=Ps.hsvToHsl({h:i.h,s:100,v:i.v});return[[0,"hsl("+p.h+","+p.s+"%,"+p.l+"%)"],[100,"hsl("+g.h+","+g.s+"%,"+g.l+"%)"]];default:var m=Ps.hsvToHsl({h:i.h,s:i.s,v:100});return[[0,"#000"],[100,"hsl("+m.h+","+m.s+"%,"+m.l+"%)"]]}}var Ds,Ls=2*Math.PI,Bs=function(e,t){return(e%t+t)%t},Ns=function(e,t){return Math.sqrt(e*e+t*t)};function zs(e){return e.width/2-e.padding-e.handleRadius-e.borderWidth}function Hs(e,t,i){var s=Vs(e),n=s.cx,o=s.cy,r=e.width/2;return Ns(n-t,o-i)<r}function Vs(e){var t=e.width/2;return{width:e.width,radius:t-e.borderWidth,cx:t,cy:t}}function Gs(e,t,i){var s=e.wheelAngle,n=e.wheelDirection;return i&&"clockwise"===n?t=s+t:"clockwise"===n?t=360-s+t:i&&"anticlockwise"===n?t=s+180-t:"anticlockwise"===n&&(t=s-t),Bs(t,360)}function Us(e,t){var i=t.hsv,s=Vs(e),n=s.cx,o=s.cy,r=zs(e),a=(180+Gs(e,i.h,!0))*(Ls/360),l=i.s/100*r,h="clockwise"===e.wheelDirection?-1:1;return{x:n+l*Math.cos(a)*h,y:o+l*Math.sin(a)*h}}function Ws(e,t,i){var s=Vs(e),n=s.cx,o=s.cy,r=zs(e);t=n-t,i=o-i;var a=Gs(e,Math.atan2(-i,-t)*(360/Ls)),l=Math.min(Ns(t,i),r);return{h:Math.round(a),s:Math.round(100/r*l)}}function js(e){var t=e.width,i=e.boxHeight;return{width:t,height:null!=i?i:t,radius:e.padding+e.handleRadius}}function Fs(e,t,i){var s=js(e),n=s.width,o=s.height,r=s.radius,a=(t-r)/(n-2*r)*100,l=(i-r)/(o-2*r)*100;return{s:Math.max(0,Math.min(a,100)),v:Math.max(0,Math.min(100-l,100))}}function qs(e,t){var i=js(e),s=i.width,n=i.height,o=i.radius,r=t.hsv,a=o,l=s-2*o,h=n-2*o;return{x:a+r.s/100*l,y:a+(h-r.v/100*h)}}function Qs(e,t){return[[[0,"#fff"],[100,"hsl("+t.hue+",100%,50%)"]],[[0,"rgba(0,0,0,0)"],[100,"#000"]]]}function Ys(e){Ds||(Ds=document.getElementsByTagName("base"));var t=window.navigator.userAgent,i=/^((?!chrome|android).)*safari/i.test(t),s=/iPhone|iPod|iPad/i.test(t),n=window.location;return(i||s)&&Ds.length>0?n.protocol+"//"+n.host+n.pathname+n.search+e:e}function Xs(e,t,i,s){for(var n=0;n<s.length;n++){var o=s[n].x-t,r=s[n].y-i;if(Math.sqrt(o*o+r*r)<e.handleRadius)return n}return null}function Ks(e){return{boxSizing:"border-box",border:e.borderWidth+"px solid "+e.borderColor}}function Zs(e,t,i){return e+"-gradient("+t+", "+i.map(function(e){var t=e[0];return e[1]+" "+t+"%"}).join(",")+")"}function Js(e){return"string"==typeof e?e:e+"px"}var en={width:300,height:300,color:"#fff",colors:[],padding:6,layoutDirection:"vertical",borderColor:"#fff",borderWidth:0,handleRadius:8,activeHandleRadius:null,handleSvg:null,handleProps:{x:0,y:0},wheelLightness:!0,wheelAngle:0,wheelDirection:"anticlockwise",sliderSize:null,sliderMargin:12,boxHeight:null},tn=["mousemove","touchmove","mouseup","touchend"],sn=function(e){function t(t){e.call(this,t),this.uid=(Math.random()+1).toString(36).substring(5)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(e){var t=this.handleEvent.bind(this),i={onMouseDown:t,ontouchstart:t},s="horizontal"===e.layoutDirection,n=null===e.margin?e.sliderMargin:e.margin,o={overflow:"visible",display:s?"inline-block":"block"};return e.index>0&&(o[s?"marginLeft":"marginTop"]=n),Ii(Ei,null,e.children(this.uid,i,o))},t.prototype.handleEvent=function(e){var t=this,i=this.props.onInput,s=this.base.getBoundingClientRect();e.preventDefault();var n=e.touches?e.changedTouches[0]:e,o=n.clientX-s.left,r=n.clientY-s.top;switch(e.type){case"mousedown":case"touchstart":!1!==i(o,r,0)&&tn.forEach(function(e){document.addEventListener(e,t,{passive:!1})});break;case"mousemove":case"touchmove":i(o,r,1);break;case"mouseup":case"touchend":i(o,r,2),tn.forEach(function(e){document.removeEventListener(e,t,{passive:!1})})}},t}(Li);function nn(e){var t=e.r,i=e.url,s=t,n=t;return Ii("svg",{className:"IroHandle IroHandle--"+e.index+" "+(e.isActive?"IroHandle--isActive":""),style:{"-webkit-tap-highlight-color":"rgba(0, 0, 0, 0);",transform:"translate("+Js(e.x)+", "+Js(e.y)+")",willChange:"transform",top:Js(-t),left:Js(-t),width:Js(2*t),height:Js(2*t),position:"absolute",overflow:"visible"}},i&&Ii("use",Object.assign({xlinkHref:Ys(i)},e.props)),!i&&Ii("circle",{cx:s,cy:n,r:t,fill:"none","stroke-width":2,stroke:"#000"}),!i&&Ii("circle",{cx:s,cy:n,r:t-2,fill:e.fill,"stroke-width":2,stroke:"#fff"}))}function on(e){var t=e.activeIndex,i=void 0!==t&&t<e.colors.length?e.colors[t]:e.color,s=Ms(e),n=s.width,o=s.height,r=s.radius,a=Rs(e,i),l=Es(e,i);return Ii(sn,Object.assign({},e,{onInput:function(t,s,n){var o=Is(e,t,s);e.parent.inputActive=!0,i[e.sliderType]=o,e.onInput(n,e.id)}}),function(t,s,h){return Ii("div",Object.assign({},s,{className:"IroSlider",style:Object.assign({},{position:"relative",width:Js(n),height:Js(o),borderRadius:Js(r),background:"conic-gradient(#ccc 25%, #fff 0 50%, #ccc 0 75%, #fff 0)",backgroundSize:"8px 8px"},h)}),Ii("div",{className:"IroSliderGradient",style:Object.assign({},{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:Js(r),background:Zs("linear","horizontal"===e.layoutDirection?"to top":"to right",l)},Ks(e))}),Ii(nn,{isActive:!0,index:i.index,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:a.x,y:a.y}))})}function rn(e){var t=js(e),i=t.width,s=t.height,n=t.radius,o=e.colors,r=e.parent,a=e.activeIndex,l=void 0!==a&&a<e.colors.length?e.colors[a]:e.color,h=Qs(e,l),c=o.map(function(t){return qs(e,t)});return Ii(sn,Object.assign({},e,{onInput:function(t,i,s){if(0===s){var n=Xs(e,t,i,c);null!==n?r.setActiveColor(n):(r.inputActive=!0,l.hsv=Fs(e,t,i),e.onInput(s,e.id))}else 1===s&&(r.inputActive=!0,l.hsv=Fs(e,t,i));e.onInput(s,e.id)}}),function(t,r,a){return Ii("div",Object.assign({},r,{className:"IroBox",style:Object.assign({},{width:Js(i),height:Js(s),position:"relative"},a)}),Ii("div",{className:"IroBox",style:Object.assign({},{width:"100%",height:"100%",borderRadius:Js(n)},Ks(e),{background:Zs("linear","to bottom",h[1])+","+Zs("linear","to right",h[0])})}),o.filter(function(e){return e!==l}).map(function(t){return Ii(nn,{isActive:!1,index:t.index,fill:t.hslString,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:c[t.index].x,y:c[t.index].y})}),Ii(nn,{isActive:!0,index:l.index,fill:l.hslString,r:e.activeHandleRadius||e.handleRadius,url:e.handleSvg,props:e.handleProps,x:c[l.index].x,y:c[l.index].y}))})}nn.defaultProps={fill:"none",x:0,y:0,r:8,url:null,props:{x:0,y:0}},on.defaultProps=Object.assign({},Ts);var an="conic-gradient(red, yellow, lime, aqua, blue, magenta, red)",ln="conic-gradient(red, magenta, blue, aqua, lime, yellow, red)";function hn(e){var t=Vs(e).width,i=e.colors;e.borderWidth;var s=e.parent,n=e.color,o=n.hsv,r=i.map(function(t){return Us(e,t)}),a={position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",boxSizing:"border-box"};return Ii(sn,Object.assign({},e,{onInput:function(t,i,o){if(0===o){if(!Hs(e,t,i))return!1;var a=Xs(e,t,i,r);null!==a?s.setActiveColor(a):(s.inputActive=!0,n.hsv=Ws(e,t,i),e.onInput(o,e.id))}else 1===o&&(s.inputActive=!0,n.hsv=Ws(e,t,i));e.onInput(o,e.id)}}),function(s,l,h){return Ii("div",Object.assign({},l,{className:"IroWheel",style:Object.assign({},{width:Js(t),height:Js(t),position:"relative"},h)}),Ii("div",{className:"IroWheelHue",style:Object.assign({},a,{transform:"rotateZ("+(e.wheelAngle+90)+"deg)",background:"clockwise"===e.wheelDirection?an:ln})}),Ii("div",{className:"IroWheelSaturation",style:Object.assign({},a,{background:"radial-gradient(circle closest-side, #fff, transparent)"})}),e.wheelLightness&&Ii("div",{className:"IroWheelLightness",style:Object.assign({},a,{background:"#000",opacity:1-o.v/100})}),Ii("div",{className:"IroWheelBorder",style:Object.assign({},a,Ks(e))}),i.filter(function(e){return e!==n}).map(function(t){return Ii(nn,{isActive:!1,index:t.index,fill:t.hslString,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:r[t.index].x,y:r[t.index].y})}),Ii(nn,{isActive:!0,index:n.index,fill:n.hslString,r:e.activeHandleRadius||e.handleRadius,url:e.handleSvg,props:e.handleProps,x:r[n.index].x,y:r[n.index].y}))})}function cn(e){var t=function(t,i){var s,n=document.createElement("div");function o(){var e=t instanceof Element?t:document.querySelector(t);e.appendChild(s.base),s.onMount(e)}return Ji(Ii(e,Object.assign({},{ref:function(e){return s=e}},i)),n),"loading"!==document.readyState?o():document.addEventListener("DOMContentLoaded",o),s};return t.prototype=e.prototype,Object.assign(t,e),t.__component=e,t}var dn=function(e){function t(t){var i=this;e.call(this,t),this.colors=[],this.inputActive=!1,this.events={},this.activeEvents={},this.deferredEvents={},this.id=t.id,(t.colors.length>0?t.colors:[t.color]).forEach(function(e){return i.addColor(e)}),this.setActiveColor(0),this.state=Object.assign({},t,{color:this.color,colors:this.colors,layout:t.layout})}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.addColor=function(e,t){void 0===t&&(t=this.colors.length);var i=new Ps(e,this.onColorChange.bind(this));this.colors.splice(t,0,i),this.colors.forEach(function(e,t){return e.index=t}),this.state&&this.setState({colors:this.colors}),this.deferredEmit("color:init",i)},t.prototype.removeColor=function(e){var t=this.colors.splice(e,1)[0];t.unbind(),this.colors.forEach(function(e,t){return e.index=t}),this.state&&this.setState({colors:this.colors}),t.index===this.color.index&&this.setActiveColor(0),this.emit("color:remove",t)},t.prototype.setActiveColor=function(e){this.color=this.colors[e],this.state&&this.setState({color:this.color}),this.emit("color:setActive",this.color)},t.prototype.setColors=function(e,t){var i=this;void 0===t&&(t=0),this.colors.forEach(function(e){return e.unbind()}),this.colors=[],e.forEach(function(e){return i.addColor(e)}),this.setActiveColor(t),this.emit("color:setAll",this.colors)},t.prototype.on=function(e,t){var i=this,s=this.events;(Array.isArray(e)?e:[e]).forEach(function(e){(s[e]||(s[e]=[])).push(t),i.deferredEvents[e]&&(i.deferredEvents[e].forEach(function(e){t.apply(null,e)}),i.deferredEvents[e]=[])})},t.prototype.off=function(e,t){var i=this;(Array.isArray(e)?e:[e]).forEach(function(e){var s=i.events[e];s&&s.splice(s.indexOf(t),1)})},t.prototype.emit=function(e){for(var t=this,i=[],s=arguments.length-1;s-- >0;)i[s]=arguments[s+1];var n=this.activeEvents;!!n.hasOwnProperty(e)&&n[e]||(n[e]=!0,(this.events[e]||[]).forEach(function(e){return e.apply(t,i)}),n[e]=!1)},t.prototype.deferredEmit=function(e){for(var t,i=[],s=arguments.length-1;s-- >0;)i[s]=arguments[s+1];var n=this.deferredEvents;(t=this).emit.apply(t,[e].concat(i)),(n[e]||(n[e]=[])).push(i)},t.prototype.setOptions=function(e){this.setState(e)},t.prototype.resize=function(e){this.setOptions({width:e})},t.prototype.reset=function(){this.colors.forEach(function(e){return e.reset()}),this.setState({colors:this.colors})},t.prototype.onMount=function(e){this.el=e,this.deferredEmit("mount",this)},t.prototype.onColorChange=function(e,t){this.setState({color:this.color}),this.inputActive&&(this.inputActive=!1,this.emit("input:change",e,t)),this.emit("color:change",e,t)},t.prototype.emitInputEvent=function(e,t){0===e?this.emit("input:start",this.color,t):1===e?this.emit("input:move",this.color,t):2===e&&this.emit("input:end",this.color,t)},t.prototype.render=function(e,t){var i=this,s=t.layout;return Array.isArray(s)||(s=[{component:hn},{component:on}],t.transparency&&s.push({component:on,options:{sliderType:"alpha"}})),Ii("div",{class:"IroColorPicker",id:t.id,style:{display:t.display}},s.map(function(e,s){var n=e.component,o=e.options;return Ii(n,Object.assign({},t,o,{ref:void 0,onInput:i.emitInputEvent.bind(i),parent:i,index:s}))}))},t}(Li);dn.defaultProps=Object.assign({},en,{colors:[],display:"block",id:null,layout:"default",margin:null});var un,fn=cn(dn);!function(e){var t;e.version="5.5.2",e.Color=Ps,e.ColorPicker=fn,(t=e.ui||(e.ui={})).h=Ii,t.ComponentBase=sn,t.Handle=nn,t.Slider=on,t.Wheel=hn,t.Box=rn}(un||(un={}));var pn,gn=un;!function(e){e[e.LOADING=1]="LOADING",e[e.READY=2]="READY",e[e.ERROR=3]="ERROR"}(pn||(pn={}));let mn=class extends si{constructor(){super(ke.APPEARANCE),this._picker=null,this._baseColorFromTheme={},this._state=pn.LOADING,this._initColor="",this._initCustomStyles={},this._supportedModes=[]}connectedCallback(){super.connectedCallback()}firstUpdated(e){if(super.firstUpdated(e),!this._sidebarConfig)return;const t=S(this._sidebarConfig.color_config,this.hass);this._colorConfigMode=t?"dark":"light"}shouldUpdate(e){return!e.has("_colorConfigMode")||void 0===this._colorConfigMode||(this._setTheme(this._colorConfigMode),this._state=pn.LOADING,this._initCustomStyles={...this._sidebarConfig.color_config?.[this._colorConfigMode]?.custom_styles||{}},setTimeout(()=>{this._state=pn.READY},200),!0)}updated(e){if(super.updated(e),e.has("_currentConfigValue")&&void 0!==this._currentConfigValue?setTimeout(()=>{this._initColorPicker()},50):e.has("_currentConfigValue")&&void 0===this._currentConfigValue&&this._destroyColorPicker(),e.has("_state")&&this._state===pn.READY&&this._getYamlEditor(),e.has("_sidebarConfig")&&this._sidebarConfig){const t=e.get("_sidebarConfig")?.color_config?.custom_theme,i=this._sidebarConfig.color_config?.custom_theme;if(t&&i&&t.theme&&t.theme!==i.theme)if(this._supportsMode(i.theme)){const e=this._getSupportedModes(i.theme);this._supportedModes=e,1===e.length?this._colorConfigMode=e[0]:this._colorConfigMode=i.mode||(this.hass.themes.darkMode?"dark":"light")}else{const e=/dark/i,t=/light/i.test(i.theme),s=e.test(i.theme);this._colorConfigMode=t?"light":s||this.hass.themes.darkMode?"dark":"light",this._supportedModes=[]}t&&i&&t.mode!==i.mode&&(this._colorConfigMode=i.mode||(this.hass.themes.darkMode?"dark":"light"))}}_supportsMode(e){return e in this.hass.themes.themes&&(void 0!==this.hass.themes.themes[e].modes&&("modes"in this.hass.themes.themes[e]&&this.hass.themes.themes[e].modes&&Object.keys(this.hass.themes.themes[e].modes).length>0))}_getSupportedModes(e){return this._supportsMode(e)?Object.keys(this.hass.themes.themes[e].modes):[]}_getYamlEditor(){const e=this.shadowRoot?.querySelector("ha-yaml-editor");e&&(this._yamlEditor=e)}_getDefaultColors(){const e=this.shadowRoot?.getElementById("theme-container");if(!e)return;const t=O(e);this._baseColorFromTheme=t}_destroyColorPicker(){this._picker=null;const e=this.shadowRoot?.querySelector(".picker-wrapper"),t=this.shadowRoot?.getElementById("picker");e&&t&&(e.setAttribute("hidden",""),t.innerHTML="")}_initColorPicker(){const e=void 0!==this._currentConfigValue,t=this.shadowRoot?.querySelector(".picker-wrapper"),i=this.shadowRoot?.getElementById("picker");if(!t||!i)return;t.toggleAttribute("hidden",!e);const s=this._colorConfigMode,n=this._sidebarConfig.color_config?.[s]||{},o=this._currentConfigValue,r=n[o]||this._baseColorFromTheme[o],a=A(r),l="hex"===a.getFormat()?a.toHex8String():a.toRgbString();this._initColor=n[o]??void 0,this._picker=gn.ColorPicker(i,{width:150,color:l,borderWidth:1,borderColor:"#fff",layoutDirection:"horizontal",layout:[{component:gn.ui.Wheel,options:{}},{component:gn.ui.Slider,options:{sliderType:"hue"}},{component:gn.ui.Slider,options:{sliderType:"saturation"}},{component:gn.ui.Slider,options:{sliderType:"value"}},{component:gn.ui.Slider,options:{sliderType:"alpha"}}]}),this._picker.on(["color:init","color:change"],e=>{this._currentConfigValue=o;const t=this._picker?.props.color,i="hex"===A(t).getFormat()?e.hex8String:e.rgbaString;this._handleConfigChange(this._currentConfigValue,i)})}_handleConfigChange(e,t){const i=this._colorConfigMode,s={...this._sidebarConfig.color_config||{}},n={...s[i]||{}};n[e]=t,this._sidebarConfig={...this._sidebarConfig,color_config:{...s,[i]:n}},this._dispatchConfig(this._sidebarConfig)}_setTheme(e){const t=this._sidebarConfig?.color_config?.custom_theme?.theme||this.hass.themes.theme,i=this.shadowRoot?.getElementById("theme-container");P(i,this.hass,t,e),setTimeout(()=>{this._getDefaultColors(),this._initCustomStyles=this._sidebarConfig.color_config?.[e]?.custom_styles||[]},0),this._dialog._dialogPreview&&this._dialog._dialogPreview._colorConfigMode!==e&&(this._dialog._dialogPreview._colorConfigMode=e)}render(){const e={...this._sidebarConfig||{}},t=k(e,[...T]);return n`
      <div id="theme-container" style="display: none;"></div>
      ${ci(t).map((e,i)=>n`
          <section class="appearance-section ${0===i?"general-section":""}">
            <div class="section-heading">
              <ha-icon .icon=${e.icon}></ha-icon>
              <h2>${e.title}</h2>
            </div>
            ${yt(this,e.schema,li(t),{configKey:"appearance"})}
          </section>
        `)}
      <div class="color-container">${this._renderColorConfigFields()}</div>
    `}_renderBorderRadiusField(){return n`
      <div class="color-item">
        <div class="header-row">
          <ha-icon-button
            ?hidden=${void 0===this._sidebarConfig?.color_config?.border_radius}
            .path=${Nt}
            .label=${"Reset border radius"}
            aria-label="Reset border radius"
            @click=${()=>this._resetColorConfig("border_radius")}
          ></ha-icon-button>
          ${this._createPicker({label:"Border radius (px)",value:this._sidebarConfig?.color_config?.border_radius||"",placeHolder:0,configValue:"border_radius",pickerType:"border_radius",modeConfig:"light"})}
        </div>
      </div>
    `}_renderColorConfigFields(){const e=void 0!==this._currentConfigValue,t=this._renderThemePickerRow(),i=this._colorConfigMode,s=this._sidebarConfig?.color_config?.[i],o=s&&Object.keys(s).some(e=>!M(s[e])),r=n`<div class="header-row" ?hidden=${e}>
      <div class="title">
        Theme: ${this._sidebarConfig?.color_config?.custom_theme?.theme||this.hass.themes.theme}
      </div>
      <ha-button
        appearance="plain"
        size="s"
        variant="warning"
        .disabled=${!o}
        @click=${()=>this._resetColorConfig("currentMode")}
        >Reset mode overrides</ha-button
      >
    </div> `,a=n` <div class="header-row">
      <ha-button appearance="plain" size="s" variant="warning" @click=${()=>this._picker?.color.reset()}
        >Reset</ha-button
      >
      <ha-button appearance="plain" size="s" @click=${()=>this._handleColorPicker("cancel")}>Cancel</ha-button>
      <ha-button appearance="outlined" size="s" @click=${()=>this._handleColorPicker("done")}>Done</ha-button>
    </div>`,l=n`
      <div class="config-colors grid">
        ${Ce.map(e=>this._renderDividerColor(e.value,e.label))}
        ${this._renderBorderRadiusField()}
      </div>
      <div class="picker-wrapper" hidden>
        <div id="picker"></div>
        ${a}
      </div>
    `,h=$({content:l,options:{expanded:!1,header:"Custom colours",darkBg:!0}}),c=n`
      <div>${t} ${r}</div>
      ${yt(this,di(),li(k(this._sidebarConfig,T)),{configKey:"appearance"})}
      ${h}
      ${$({content:this._renderCustomStylesField(),options:{expanded:!1,header:"Advanced CSS styles",darkBg:!0}})}
    `;return n`
      <section class="appearance-section theme-section">
        <div class="section-heading">
          <ha-icon icon="mdi:palette-outline"></ha-icon>
          <div>
            <h2>Theme</h2>
            <p>Choose a theme and mode, or customize colours.</p>
          </div>
        </div>
        ${c}
      </section>
    `}_renderThemePickerRow(){const e={...this._sidebarConfig?.color_config?.custom_theme||{}},t=this._colorConfigMode,i={custom_theme:{...e}},s=this._supportedModes,o=e=>s.length>0&&!s.includes(e),r=n` <div class="header-row">
      <div class="title">Select mode to edit:</div>
      <div class="inputs">
        <ha-formfield .label=${"Light mode"} .disabled=${o("light")}>
          <ha-radio
            @change=${e=>{this._colorConfigMode=e.target.value}}
            name="light_mode"
            value="light"
            .checked=${"light"===t}
            .disabled=${o("light")}
          >
          </ha-radio>
        </ha-formfield>
        <ha-formfield .label=${"Dark mode"} .disabled=${o("dark")}>
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
    </div>`;return n`${yt(this,fi(2!==s.length),i,{configKey:"custom_theme"})}
    ${s.length?r:a}`}_handleColorPicker(e){const t=this._picker?.color;if(!t)return;const i=this._currentConfigValue;switch(e){case"cancel":const e=this._initColor;this._toggleColorPicker(i),this._handleConfigChange(i,e),this._initColor="";break;case"done":this._toggleColorPicker(i),this._initColor="";break;case"hex":const s=t.hex8String;this._handleConfigChange(i,s),this._picker?.color.set(s);break;case"rgb":const n=t.rgbaString;this._picker?.color.set(n),this._handleConfigChange(i,n)}}_renderDividerColor(e,t){if(!this._sidebarConfig)return n``;const i=this._colorConfigMode,s=(this._sidebarConfig?.color_config||{})[i]||{},o=this._baseColorFromTheme,r=s[e]??o[e],a=s[e]||"",l=void 0===s[e]||s[e]===o[e],h=e=>{if(!e)return;let t=A(e);const i=t.getAlpha()<=.5,n=s.custom_sidebar_background_color||o.custom_sidebar_background_color;return i&&(t=A(n)),t.isLight()?"#000":"#fff"},c={backgroundColor:r,color:h(r),borderColor:A(h(r)).setAlpha(.2).toString()};return n`
      <div class="color-item" id=${e}>
        <div class="header-row config-item">
          <ha-icon-button
            ?hidden=${l||void 0!==this._currentConfigValue}
            .path=${Nt}
            .label=${`Reset ${t.toLowerCase()}`}
            aria-label=${`Reset ${t.toLowerCase()}`}
            color="var(--sidebar-text-color)"
            @click=${()=>this._resetColorConfig(e)}
          ></ha-icon-button>

          ${this._createPicker({label:t,value:a,configValue:e,placeHolder:o[e],modeConfig:i,pickerType:"text"})}
          ${this._currentConfigValue===e?n` <div class="change-format">
                <ha-button appearance="plain" size="s" @click=${()=>this._handleColorPicker("hex")}>HEX</ha-button>
                <ha-button appearance="plain" size="s" @click=${()=>this._handleColorPicker("rgb")}>RGBA</ha-button>
              </div>`:n` <button
                type="button"
                aria-label=${`Choose ${t.toLowerCase()}`}
                class="color-picker-box"
                style=${ti(c)}
                @click=${()=>this._toggleColorPicker(e)}
              >
                <ha-icon icon="mdi:format-color-fill"></ha-icon>
              </button>`}
        </div>
      </div>
    `}_renderCustomStylesField(){if(!this._sidebarConfig||!this._colorConfigMode)return n``;if(this._state===pn.LOADING)return n`<ha-fade-in .delay=${500}><ha-spinner size="large"></ha-spinner></ha-fade-in>`;const e=this._colorConfigMode,t=this._sidebarConfig?.color_config?.[e]?.custom_styles,i=!M(t),s={custom_styles:this._initCustomStyles};return n`
      <div class="color-item" id="custom_styles">
        ${yt(this,[{name:"custom_styles",helper:"Define custom CSS styles for the sidebar.",selector:{object:{}}}],s,{configKey:"custom_styles"})}
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
    `}_toggleColorPicker(e){const t=this.shadowRoot?.querySelectorAll(".color-item");t&&(t.forEach(t=>{const i=t.getAttribute("id"),s=t.hasAttribute("selected");i===e?(t.toggleAttribute("selected",!s),this._currentConfigValue=s?void 0:e):t.toggleAttribute("hidden",!s)}),[...t].some(e=>e.hasAttribute("selected"))||t.forEach(e=>e.removeAttribute("hidden")))}_createPicker({label:e,value:t,configValue:i,placeHolder:s,pickerType:o,modeConfig:r}){const a=`${i}_${o}`;return n`
      <ha-selector
        style="width: 100%;"
        .hass=${this.hass}
        .label=${e}
        .placeholder=${s}
        .selector=${{text:{selector:{text:{selector:{text:{}}}},flexStyle:!0,required:!0},border_radius:{selector:{number:{min:0,max:100,step:1,mode:"box"}},flexStyle:!0,required:!1,classList:"color-picker",helper:"Enter a value for border radius (px)"},boolean:{selector:{boolean:{}}}}[o].selector}
        .required=${!1}
        .value=${t}
        .configValue=${i}
        .modeConfig=${r}
        .configType=${a}
        @value-changed=${this._handleColorChange}
      >
      </ha-selector>
    `}_resetColorConfig(e){if(!this._sidebarConfig.color_config)return;const t=this._colorConfigMode,i={...this._sidebarConfig.color_config||{}},s={...i[t]||{}};"border_radius"===e?delete i.border_radius:"currentMode"===e?delete i[t]:"custom_styles"===e?(this._initCustomStyles={},delete s.custom_styles,i[t]=s):(delete s[e],i[t]=s),this._sidebarConfig={...this._sidebarConfig,color_config:i},this._dispatchConfig(this._sidebarConfig)}_dispatchConfig(e){const t=new CustomEvent("sidebar-changed",{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(t)}_handleColorChange(e){e.stopPropagation();const t=e.target.configValue,i=e.target.configType,s=e.target.modeConfig,n=e.detail.value,o={};let r={...this._sidebarConfig.color_config||{}},a={...r[s]||{}};i.includes("_text")?n&&""!==n&&void 0!==n?(a[t]=n,o[s]=a):(delete a[t],o[s]=a):"border_radius"===t&&(n&&""!==n&&void 0!==n?(r[t]=n,o.border_radius=n):delete r[t]),Object.keys(o).length>0&&(this._sidebarConfig={...this._sidebarConfig,color_config:{...r,...o}}),this._dispatchConfig(this._sidebarConfig)}_valueChanged(e){if(e.stopPropagation(),!this._sidebarConfig)return;const t={...this._sidebarConfig||{}},i=e.target.configKey,s={...e.detail.value};let n={};if(i&&"appearance"===i){const e=k(t,T),i=hi(s,e),o=I(e,i);M(o)||Object.keys(o).forEach(e=>{n[e]=i[e]})}else if(i&&"custom_theme"===i){const e={...t.color_config?.custom_theme||{}};if(JSON.stringify(e)!==JSON.stringify(s.custom_theme)){const e={...this._sidebarConfig.color_config||{}};e.custom_theme={...e.custom_theme,...s.custom_theme},n.color_config=e}}else if(i&&"custom_styles"===i){const e=s.custom_styles;return this._initCustomStyles=e||{},void this._handleCustomStylesChange()}Object.keys(n).length>0&&(this._sidebarConfig={...this._sidebarConfig,...n},this._dispatchConfig(this._sidebarConfig))}_handleCustomStylesChange(){const e=this._colorConfigMode,t={...this._sidebarConfig.color_config||{}};let i={...t[e]||{}};i.custom_styles={...this._initCustomStyles||{}},t[e]=i,this._sidebarConfig={...this._sidebarConfig,color_config:{...t}},g(this,"sidebar-config-changed",{config:this._sidebarConfig})}static get styles(){return[l`
        :host *[hidden] {
          display: none !important;
        }
        :host {
          display: flex;
          flex-direction: column;
          gap: 28px;
          --form-grid-column-count: 2;
        }
        .appearance-section {
          border-block-start: 1px solid var(--divider-color);
          display: grid;
          gap: 18px;
          padding-block-start: 22px;
        }
        .general-section {
          border-block-start: 0;
          padding-block-start: 0;
        }
        .section-heading {
          align-items: flex-start;
          display: grid;
          gap: 12px;
          grid-template-columns: 28px minmax(0, 1fr);
        }
        .section-heading ha-icon {
          color: var(--primary-color);
        }
        .section-heading h2 {
          font-size: 1.05rem;
          margin: 0;
        }
        .section-heading p {
          color: var(--secondary-text-color);
          font-size: 0.9rem;
          line-height: 1.4;
          margin: 4px 0 0;
        }
        @media (max-width: 1499px) {
          :host {
            --form-grid-column-count: 1;
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

        .color-picker-box {
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

        .color-picker-box:focus-visible {
          outline: 2px solid var(--primary-color);
          outline-offset: 2px;
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
      `]}};h([c({attribute:!1})],mn.prototype,"_sidebarConfig",void 0),h([b()],mn.prototype,"_colorConfigMode",void 0),h([b()],mn.prototype,"_picker",void 0),h([b()],mn.prototype,"_currentConfigValue",void 0),h([b()],mn.prototype,"_baseColorFromTheme",void 0),h([b()],mn.prototype,"_state",void 0),h([b()],mn.prototype,"_initCustomStyles",void 0),h([b()],mn.prototype,"_yamlEditor",void 0),h([b()],mn.prototype,"_colorConfigByMode",void 0),h([b()],mn.prototype,"_supportedModes",void 0),mn=h([_("sidebar-dialog-colors")],mn);const vn=e=>{const t=Object.fromEntries((e.new_items||[]).filter(e=>e.title&&e.notification).map(e=>[e.title,e.notification]));return{...e.notification||{},...t}},bn=(e,t,i)=>{const s=(e.new_items||[]).findIndex(e=>e.title===t);if(s>=0){const t=[...e.new_items||[]],n={...t[s]};return i?n.notification=i:delete n.notification,t[s]=n,{...e,new_items:t}}const n={...e.notification||{}};return i?n[t]=i:delete n[t],{...e,notification:n}},_n=["custom_groups","bottom_groups"],wn=["bottom_items","bottom_grid_items"],yn="uncategorized_items",xn=(e,t)=>{for(const i of _n)for(const[s,n]of Object.entries(e[i]||{}))if(Array.isArray(n)&&n.includes(t))return"custom_groups"===i&&s===yn?{section:"ungrouped"}:{section:i,group:s};for(const i of wn)if(e[i]?.includes(t))return{section:i};return{section:"ungrouped"}},kn=(e,t,i)=>{const{section:s,group:n}=i;if("custom_groups"===s||"bottom_groups"===s){if(void 0===n||!Object.prototype.hasOwnProperty.call(e[s]||{},n)||!Array.isArray(e[s]?.[n]))return e}else if("ungrouped"!==s&&"bottom_items"!==s&&"bottom_grid_items"!==s)return e;const o={...e};for(const i of _n){const s=e[i];if(!s)continue;const n={...s};let r=!1;for(const[e,i]of Object.entries(s))Array.isArray(i)&&i.includes(t)&&(n[e]=i.filter(e=>e!==t),r=!0);r&&(o[i]=n)}for(const i of wn){const s=e[i];Array.isArray(s)&&s.includes(t)&&(o[i]=s.filter(e=>e!==t))}return"custom_groups"===s||"bottom_groups"===s?o[s]={...o[s],[n]:[...o[s][n],t]}:"bottom_items"===s||"bottom_grid_items"===s?o[s]=[...o[s]||[],t]:Array.isArray(o.custom_groups?.[yn])&&(o.custom_groups={...o.custom_groups,[yn]:[...o.custom_groups[yn],t]}),o};let Cn=class extends si{constructor(){super(ke.PANELS),this._selectedTab=Se.ALL_ITEMS,this._selectedBottom=Oe.BOTTOM_ITEMS,this._selectedGroup=null,this._selectedNotification=null,this._reloadPanelItems=!1,this._selectedItemId=null,this._search="",this._showHidden=!1,this._creatingItem=!1,this._newTitle="",this._newDestination="",this._newPlacement={section:"ungrouped"},this._listScroll=0,this._prevTab=null,this._createItem=()=>{const e=this._newTitle.trim();if(!e||this._sidebarConfig.new_items?.some(t=>t.title===e)||Object.hasOwn(this.hass.panels||{},e))return;const t={...this._sidebarConfig,new_items:[...this._sidebarConfig.new_items||[],{title:e,icon:"mdi:link",...this._newDestination.trim()?{url_path:this._newDestination.trim()}:{}}]};this._sidebarConfig=kn(t,e,this._newPlacement),this._dispatchConfig(this._sidebarConfig),this._creatingItem=!1,this.selectItem(e)},this._backToList=()=>{this._selectedItemId=null,this._selectedGroup=null,this._selectedBottomGroup=null,this._creatingItem=!1,this._dialog._dialogPreview?._hightlightItem(null),this.updateComplete.then(()=>{const e=this._dialog.shadowRoot?.querySelector(".editor-canvas");e&&(e.scrollTop=this._listScroll),this.shadowRoot?.querySelector("ha-textfield")?.focus()})},this._handleNavigateSection=e=>{e.stopPropagation(),this._dialog.navigateWorkbench("items")},this._handleGroupActionEvent=async e=>{e.stopPropagation();const{action:t,key:i,type:s}=e.detail;this._handleGroupAction(t,i,s)},this._handleGroupAction=async(e,t,i)=>{const s=[...this._sidebarConfig?.default_collapsed||[]],n={...this._sidebarConfig.custom_groups||{}},o={...this._sidebarConfig.pinned_groups||{}},r=e=>{this._sidebarConfig={...this._sidebarConfig,...e},this._dispatchConfig(this._sidebarConfig),this.requestUpdate()},a=async(e,t)=>{const i=this._selectedTab;i!==this._prevTab&&i===e&&(this._prevTab=i),e===Se.CUSTOM_GROUPS?(this._selectedTab!==Se.CUSTOM_GROUPS&&(this._selectedTab=Se.CUSTOM_GROUPS,await B()),this._selectedGroup=t,this._dialog._dialogPreview._toggleGroup(t,"show")):e===Se.BOTTOM_PANELS&&(this._selectedTab!==Se.BOTTOM_PANELS&&(this._selectedTab=Se.BOTTOM_PANELS,await B()),this._selectedBottom=t,this._dialog._dialogPreview._toggleBottomPanel(t))},l={};switch(e){case"edit-items":!i||i!==Se.BOTTOM_PANELS&&i!==Se.CUSTOM_GROUPS||await a(i,t);break;case"rename":let e=await y(this,"Enter new group name",t,"Rename");if(null===e||""===e)return;if(Object.keys(n).includes(e))return void await x(this,`${Ae.NAME_EXISTS}`);if(s.includes(t)){const i=s.filter(e=>e!==t);i.push(e),l.default_collapsed=i}const h=Object.fromEntries(Object.entries(n).map(([i,s])=>[i===t?e:i,s]));l.custom_groups=h,Object.hasOwn(o,t)&&(o[e]=o[t],delete o[t],l.pinned_groups=o);const c={...this._sidebarConfig.visibility_templates?.groups||{}};Object.hasOwn(c,t)&&(c[e]=c[t],delete c[t],l.visibility_templates={...this._sidebarConfig.visibility_templates,groups:c}),r(l),this._selectedGroup===t&&(this._selectedGroup=e);break;case"collapsed-group":s.includes(t)?l.default_collapsed=s.filter(e=>e!==t):l.default_collapsed=[...s,t],r(l);break;case"delete":if(!await w(this,`Are you sure you want to delete this group? ${t}`,"Delete"))return;s.includes(t)&&(l.default_collapsed=s.filter(e=>e!==t)),delete n[t],l.custom_groups=n,r(l);break;case"pinned-group":o.hasOwnProperty(t)?delete o[t]:o[t]=!0,l.pinned_groups=o,r(l);break;case"preview":case"preview-item":this._dialog.showPreview(t);break;case"uncategorized-as-group":const d=this._sidebarConfig?.uncategorized_items??!1;if("boolean"==typeof d&&!0===d||!M(n[R.UNCATEGORIZED_ITEMS]))l.uncategorized_items=void 0,n.hasOwnProperty(R.UNCATEGORIZED_ITEMS)&&delete n[R.UNCATEGORIZED_ITEMS],l.custom_groups=n;else{const e=[...this._dialog.ungroupedItems||[]];l.custom_groups={...n,[R.UNCATEGORIZED_ITEMS]:e}}r(l)}},this._selectedBottomGroup=null,this._itemMoved=e=>{if(e.stopPropagation(),!this._sidebarConfig)return;const{oldIndex:t,newIndex:i}=e.detail,s=e.currentTarget.configValue,n=e.currentTarget.customGroup,o=e=>{this._sidebarConfig={...this._sidebarConfig,...e},this._dispatchConfig(this._sidebarConfig)};switch(s){case Oe.BOTTOM_GROUPS:{const e=n;if(!e)return;const s={...this._sidebarConfig.bottom_groups||{}},r=[...s[e]||[]];r.splice(i,0,r.splice(t,1)[0]),s[e]=r,o({bottom_groups:s});break}case Oe.BOTTOM_ITEMS:case Oe.BOTTOM_GRID_ITEMS:{const e=s,n=[...this._sidebarConfig[e]||[]];n.splice(i,0,n.splice(t,1)[0]),o({[e]:n});break}case Se.CUSTOM_GROUPS:{const e={...this._sidebarConfig.custom_groups||{}},s=n;if(s){const n=[...e[s]||[]].concat();n.splice(i,0,n.splice(t,1)[0]),e[s]=n,o({custom_groups:e})}break}}},this._togglePromptNewGroup=async()=>{const e={...this._sidebarConfig.custom_groups||{}},t=await y(this,"Enter new group name","Some Group Name","Create");var i;null!==t&&(i=(i=t).trim().toLowerCase(),Object.keys(e).map(e=>e.trim().toLowerCase()).includes(i)?await x(this,"Group name already exists. Please choose a different one."):(e[t]=[],this._sidebarConfig={...this._sidebarConfig,custom_groups:e},this._dispatchConfig(this._sidebarConfig),this.requestUpdate()))},this._handlePinGroupChange=e=>{e.stopPropagation();const t=e.target.groupName,i=e.detail.value,s={...this._sidebarConfig?.pinned_groups||{}};i.is_pinned?i.icon?s[t]={icon:i.icon}:s[t]=!0:delete s[t],this._sidebarConfig={...this._sidebarConfig,pinned_groups:s},this._dispatchConfig(this._sidebarConfig)}}willUpdate(e){if(e.has("workbenchMode")&&(this._selectedTab="items"===this.workbenchMode?Se.VISIBILITY:Se.CUSTOM_GROUPS,this._selectedGroup=null,this._selectedBottomGroup=null),e.has("_selectedTab")){const t=e.get("_selectedTab");t!==this._selectedTab&&(this._prevTab=t||null)}}updated(e){if(e.has("_selectedTab")&&void 0!==this._selectedTab){this._selectedTab!==Se.CUSTOM_GROUPS&&(this._selectedGroup=null)}if(e.has("_selectedBottom")&&void 0!==this._selectedBottom&&this._selectedTab===Se.BOTTOM_PANELS){const e=this._selectedBottom;this._dialog._dialogPreview._toggleBottomPanel(e)}if(e.has("_selectedGroup")&&this._dialog._dialogPreview._toggleGroup(this._selectedGroup),e.has("_selectedNotification")){const e=this._selectedNotification||"";e||this._dialog._dialogPreview._toggleGroup(e);const t=this._sidebarConfig.custom_groups||{},i=this._sidebarConfig.bottom_items||[];let s="";const n=Object.keys(t).find(i=>t[i].includes(e)),o=i.includes(e);n?s=n:o&&(s=Oe.BOTTOM_ITEMS),this._dialog._dialogPreview._toggleGroup(s)}}render(){if("items"===this.workbenchMode)return n`
        <div class="rules-layout">
          <so-panel-visibility
            flattened
            .hass=${this.hass}
            ._store=${this._store}
            ._sidebarConfig=${this._sidebarConfig}
          ></so-panel-visibility>
          <section class="rule-section">
            <div class="rule-heading">
              <h2>Notification badges</h2>
              <p>Show a template result beside any sidebar item.</p>
            </div>
            ${this._renderNotificationConfig()}
          </section>
        </div>
      `;if("layout"===this.workbenchMode)return this._renderLayoutWorkbench();const e=Pe,t=n` <ha-control-select
      .value=${this._selectedTab}
      .options=${e}
      @value-changed=${e=>{this._selectedTab=e.detail.value}}
    ></ha-control-select>`,i={[Se.ALL_ITEMS]:this._renderAllItems(),[Se.BOTTOM_PANELS]:this._renderBottomItems(),[Se.CUSTOM_GROUPS]:null===this._selectedGroup?this._renderCustomGroupList():this._renderEditGroup(),[Se.VISIBILITY]:this._renderHiddenItems(),[Se.NOTIFICATIONS]:this._renderNotificationConfig()};return n`
      ${this.workbenchMode?a:n`<div class="groups-menu-header">${t}</div>`}
      <div class="config-content">${i[this._selectedTab]}</div>
    `}_renderLayoutWorkbench(){if(this._creatingItem)return this._renderItemCreation();if(this._selectedItemId)return this._renderItemEditor(this._selectedItemId);if(null!==this._selectedGroup)return this._renderGroupEditor("custom_groups",this._selectedGroup);if(null!==this._selectedBottomGroup)return this._renderGroupEditor("bottom_groups",this._selectedBottomGroup);const e=this._sidebarConfig,t=E(this.hass),i=Object.entries(e.custom_groups||{}),s=new Set(this._dialog.pickedItems),o=[...new Set([...this._dialog._initCombiPanels,...e.move_settings_from_fixed&&this.hass.panels.config?["config"]:[]])].filter(i=>!s.has(i)&&i!==t&&(e.move_settings_from_fixed||"config"!==i)),r=i.filter(([e,t])=>e.toLocaleLowerCase().includes(this._search.toLocaleLowerCase())||this._visibleItems(t).length),l=n`<div class="organizer-groups">
      ${r.map(([e,t])=>this._renderOrganizerGroup("custom_groups",e,t,i.findIndex(([t])=>t===e)))}
    </div>`;return n`
      <div class="organizer-toolbar">
        <ha-textfield
          label="Search items and groups"
          .value=${this._search}
          @input=${e=>{this._search=e.target.value}}
        ></ha-textfield>
        <ha-formfield label="Show hidden items"
          ><ha-checkbox
            .checked=${this._showHidden}
            @change=${e=>{this._showHidden=e.target.checked}}
          ></ha-checkbox
        ></ha-formfield>
      </div>
      <div class="organizer-add-actions">
        <ha-button appearance="accent" @click=${()=>this._startItemCreation()}>Add item</ha-button>
        <ha-button appearance="plain" @click=${this._togglePromptNewGroup}>Add group</ha-button>
      </div>
      <div class="organizer-list" aria-label="Sidebar items in display order">
        ${this._visibleItems([t]).map(e=>this._renderOrganizerItem(e))}
        ${this._search?l:n`<ha-sortable handle-selector=".group-drag" @item-moved=${this._groupMoved}>${l}</ha-sortable>`}
        ${this._visibleItems(o).map(e=>this._renderOrganizerItem(e))}
        ${Object.entries(e.bottom_groups||{}).map(([e,t],i)=>this._renderOrganizerGroup("bottom_groups",e,t,i))}
        ${this._renderFlatSection("bottom_items","Bottom items")}
        ${this._renderFlatSection("bottom_grid_items","Bottom grid")}
        ${e.move_settings_from_fixed?a:this._visibleItems(["config"]).map(e=>this._renderOrganizerItem(e))}
      </div>
      ${!this._search||this._dialog._initCombiPanels.some(e=>this._matchesItem(e))||r.length?a:n`<p class="empty-state">No matching items. Try another name or destination.</p>`}
      <details class="organizer-extra">
        <summary>Bottom groups</summary>
        <p>Keep utility groups above the fixed Settings item.</p>
        <ha-button appearance="plain" @click=${this._addBottomGroup}>Add bottom group</ha-button>
      </details>
    `}_visibleItems(e){return e.filter(e=>(this._showHidden||!this._isItemHidden(e))&&this._matchesItem(e))}_matchesItem(e){const t=this._getPanelInfo(e);return[e,t.title,t.url_path].some(e=>String(e||"").toLocaleLowerCase().includes(this._search.trim().toLocaleLowerCase()))}_isItemHidden(e){return Boolean(this._sidebarConfig.hidden_items?.includes(e)||this._sidebarConfig.new_items?.some(t=>t.title===e&&!1===t.show_in_sidebar))}_renderOrganizerGroup(e,t,i,s){if("custom_groups"===e&&t===R.UNCATEGORIZED_ITEMS)return n`${this._visibleItems(i).map(e=>this._renderOrganizerItem(e))}`;const o=Object.keys(this._sidebarConfig[e]||{});return n`<section class="organizer-group" data-group=${t}>
      <div class="organizer-group-heading">
        ${"custom_groups"!==e||this._search?a:n`<ha-icon-button class="group-drag" .label=${`Drag ${t} group`} .path=${Mt}></ha-icon-button>`}
        <button class="group-open" @click=${()=>this._selectGroup(e,t)}>
          <strong>${t}</strong
          ><small
            >${i.length}
            ${1===i.length?"item":"items"}${"bottom_groups"===e?" · Bottom group":""}${this._isGroupCollapsed(t)?" · Starts collapsed":""}${this._isGroupPinned(t)?" · Pinned":""}</small
          >
        </button>
        <ha-icon-button
          .label=${`Move ${t} group up`}
          .path=${At}
          .disabled=${0===s}
          @click=${()=>this._moveOrganizerGroup(e,s,s-1)}
        ></ha-icon-button>
        <ha-icon-button
          .label=${`Move ${t} group down`}
          .path=${St}
          .disabled=${s===o.length-1}
          @click=${()=>this._moveOrganizerGroup(e,s,s+1)}
        ></ha-icon-button>
      </div>
      <div class="organizer-group-items">
        ${this._visibleItems(i).map(e=>this._renderOrganizerItem(e))}${i.length?a:n`<button class="empty-group" @click=${()=>this._selectGroup(e,t)}>
              Add items to this group
            </button>`}
      </div>
    </section>`}_renderFlatSection(e,t){const i=this._visibleItems(this._sidebarConfig[e]||[]);return i.length?n`<section class="organizer-group">
          <h2 class="flat-heading">${t}</h2>
          ${i.map(e=>this._renderOrganizerItem(e))}
        </section>`:a}_renderOrganizerItem(e,t,i){const s=this._getPanelInfo(e),o=this._isItemHidden(e),r=vn(this._sidebarConfig)[e],l=this._sidebarConfig.visibility_templates?.items?.[e],h=i?this._placementItems(i):[];return n`<div class="organizer-item" data-item=${e}>
      ${i?n`<ha-icon-button class="item-drag" .label=${`Drag ${s.title}`} .path=${Mt}></ha-icon-button>`:a}
      <button class="item-open" @click=${()=>this.selectItem(e)}>
        <ha-icon icon=${s.icon||"mdi:view-dashboard-outline"}></ha-icon
        ><span
          ><strong>${s.title||e}</strong
          ><small
            >${s.url_path||e}${o?" · Hidden":""}${r?" · Badge":""}${l?" · Conditional":""}</small
          ></span
        >
      </button>
      ${i?n`<ha-icon-button
              .label=${`Move ${s.title} up`}
              .path=${At}
              .disabled=${0===t}
              @click=${()=>this._moveOrganizerItem(i,t,t-1)}
            ></ha-icon-button
            ><ha-icon-button
              .label=${`Move ${s.title} down`}
              .path=${St}
              .disabled=${t===h.length-1}
              @click=${()=>this._moveOrganizerItem(i,t,t+1)}
            ></ha-icon-button>`:a}
    </div>`}_placementOptions(){return[{label:"Main area · Ungrouped",placement:{section:"ungrouped"}},...Object.keys(this._sidebarConfig.custom_groups||{}).filter(e=>e!==R.UNCATEGORIZED_ITEMS).map(e=>({label:e,placement:{section:"custom_groups",group:e}})),...Object.keys(this._sidebarConfig.bottom_groups||{}).map(e=>({label:`${e} · Bottom group`,placement:{section:"bottom_groups",group:e}})),{label:"Bottom items",placement:{section:"bottom_items"}},{label:"Bottom grid",placement:{section:"bottom_grid_items"}}]}_renderPlacementSelect(e,t){return n`<label class="placement-field"
      ><span>Placement</span
      ><select
        aria-label="Item placement"
        @change=${e=>t(JSON.parse(e.target.value))}
      >
        ${this._placementOptions().map(t=>n`<option
              value=${JSON.stringify(t.placement)}
              ?selected=${JSON.stringify(t.placement)===JSON.stringify(e)}
            >
              ${t.label}
            </option>`)}
      </select></label
    >`}_renderItemEditor(e){const t=this._getPanelInfo(e),i=this._sidebarConfig.new_items?.some(t=>t.title===e),s=xn(this._sidebarConfig,e),o=e===E(this.hass)||"config"===e&&!this._sidebarConfig.move_settings_from_fixed,r=s.group&&this._sidebarConfig.visibility_templates?.groups?.[s.group],l=vn(this._sidebarConfig)[e]||"";return n`
      ${this._renderBackButton()}
      <div class="detail-heading">
        <h2 tabindex="-1">${t.title||e}</h2>
        <ha-button appearance="plain" @click=${()=>this._dialog.showPreview(s.group,e)}
          >Show in preview</ha-button
        >
      </div>
      ${o?n`<p class="field-help">Home Assistant keeps this item fixed.</p>`:this._renderPlacementSelect(s,t=>this._moveTo(e,t))}
      <ha-formfield label="Show in sidebar"
        ><ha-switch
          .checked=${!this._isItemHidden(e)}
          .disabled=${e===E(this.hass)}
          @change=${t=>this._setItemVisible(e,t.target.checked)}
        ></ha-switch
      ></ha-formfield>
      ${o||"ungrouped"===s.section?a:n`<div class="item-order-actions">
            <span
              >Order in
              ${s.group||("bottom_items"===s.section?"bottom items":"bottom grid")}</span
            ><ha-button
              appearance="plain"
              .disabled=${this._placementItems(s).indexOf(e)<=0}
              @click=${()=>this._moveOrganizerItem(s,this._placementItems(s).indexOf(e),this._placementItems(s).indexOf(e)-1)}
              >Move up</ha-button
            ><ha-button
              appearance="plain"
              .disabled=${this._placementItems(s).indexOf(e)>=this._placementItems(s).length-1}
              @click=${()=>this._moveOrganizerItem(s,this._placementItems(s).indexOf(e),this._placementItems(s).indexOf(e)+1)}
              >Move down</ha-button
            >
          </div>`}
      ${i?n`<sidebar-dialog-new-items
            embedded
            .itemTitle=${e}
            .hass=${this.hass}
            ._store=${this._store}
            ._sidebarConfig=${this._sidebarConfig}
            @item-renamed=${e=>{this._selectedItemId=e.detail.title}}
            @item-deleted=${this._backToList}
          ></sidebar-dialog-new-items>`:n`<p class="field-help">Destination: ${t.url_path||e}</p>`}
      <details class="organizer-extra">
        <summary>Badge and conditional visibility</summary>
        <ha-selector
          label="Notification badge"
          .hass=${this.hass}
          .selector=${{template:{preview:!0}}}
          .value=${l}
          @value-changed=${t=>{t.stopPropagation(),this._setNotificationSetting(e,t.detail.value||void 0)}}
        ></ha-selector>
        ${r?n`<p class="field-help">
              This group has a visibility rule. The group rule takes priority over the item rule.
            </p>`:a}
        <ha-selector
          label="Show when"
          .hass=${this.hass}
          .selector=${{template:{preview:!0}}}
          .value=${this._sidebarConfig.visibility_templates?.items?.[e]||""}
          @value-changed=${t=>{t.stopPropagation(),this._setVisibilityRule("items",e,t.detail.value)}}
        ></ha-selector>
      </details>
    `}_renderGroupEditor(e,t){const i={section:e,group:t},s=this._placementItems(i),o=E(this.hass),r=this._dialog._initCombiPanels.filter(e=>!s.includes(e)&&e!==o&&(this._sidebarConfig.move_settings_from_fixed||"config"!==e));return n`
      ${this._renderBackButton()}
      <div class="detail-heading">
        <h2 tabindex="-1">${t}</h2>
        <ha-button appearance="plain" @click=${()=>this._dialog.showPreview(t)}>Show in preview</ha-button>
      </div>
      <div class="group-settings">
        <ha-formfield label="Start collapsed"
          ><ha-checkbox
            .checked=${this._isGroupCollapsed(t)}
            @change=${()=>this._handleGroupAction("collapsed-group",t)}
          ></ha-checkbox
        ></ha-formfield>
        ${"custom_groups"===e?this._renderPinGroupForms(t):a}
      </div>
      <ha-sortable
        handle-selector=".item-drag"
        .configValue=${e}
        .customGroup=${t}
        @item-moved=${this._itemMoved}
        ><div class="group-editor-items">
          ${s.map((e,t)=>this._renderOrganizerItem(e,t,i))}
        </div></ha-sortable
      >
      ${s.length?a:n`<p class="empty-state">This group is empty. Add an existing item or create a link.</p>`}
      <ha-selector
        label="Add or move an item"
        .hass=${this.hass}
        .selector=${{select:{mode:"dropdown",options:r.map(e=>({value:e,label:`${this._getPanelInfo(e).title||e} · ${this._getPanelInfo(e).url_path||e}`}))}}}
        .value=${""}
        @value-changed=${e=>{e.stopPropagation(),e.detail.value&&this._moveTo(e.detail.value,i)}}
      ></ha-selector>
      <ha-button appearance="plain" @click=${()=>this._startItemCreation(i)}
        >Create new item in this group</ha-button
      >
      <details class="organizer-extra">
        <summary>Group options</summary>
        <ha-selector
          label="Show group when"
          .hass=${this.hass}
          .selector=${{template:{preview:!0}}}
          .value=${this._sidebarConfig.visibility_templates?.groups?.[t]||""}
          @value-changed=${e=>{e.stopPropagation(),this._setVisibilityRule("groups",t,e.detail.value)}}
        ></ha-selector>
        ${"custom_groups"===e?n`<ha-button appearance="plain" @click=${()=>this._handleGroupAction("rename",t)}
                >Rename group</ha-button
              ><ha-button
                appearance="plain"
                destructive
                @click=${async()=>{await this._handleGroupAction("delete",t),Object.hasOwn(this._sidebarConfig.custom_groups||{},t)||this._backToList()}}
                >Delete group</ha-button
              >`:n`<ha-button appearance="plain" destructive @click=${()=>this._deleteBottomGroup(t)}
              >Delete group</ha-button
            >`}
      </details>
    `}_renderItemCreation(){return n`${this._renderBackButton()}
      <h2 tabindex="-1">Add item</h2>
      <ha-textfield
        label="Item name"
        .value=${this._newTitle}
        @input=${e=>{this._newTitle=e.target.value}}
      ></ha-textfield>
      <ha-textfield
        label="Destination"
        .value=${this._newDestination}
        helper="Home Assistant path or full URL. Leave blank for an action."
        @input=${e=>{this._newDestination=e.target.value}}
      ></ha-textfield>
      ${this._renderPlacementSelect(this._newPlacement,e=>{this._newPlacement=e})}
      ${this._sidebarConfig.new_items?.some(e=>e.title===this._newTitle.trim())||Object.hasOwn(this.hass.panels||{},this._newTitle.trim())?n`<p role="alert">An item with this name already exists.</p>`:a}
      <ha-button
        appearance="accent"
        .disabled=${!this._newTitle.trim()||this._sidebarConfig.new_items?.some(e=>e.title===this._newTitle.trim())||Object.hasOwn(this.hass.panels||{},this._newTitle.trim())}
        @click=${this._createItem}
        >Add to sidebar</ha-button
      >`}_placementItems(e){return"custom_groups"===e.section||"bottom_groups"===e.section?this._sidebarConfig[e.section]?.[e.group]||[]:"ungrouped"===e.section?[]:this._sidebarConfig[e.section]||[]}_moveTo(e,t){this._sidebarConfig=kn(this._sidebarConfig,e,t),this._dispatchConfig(this._sidebarConfig),this._dialog.updateComplete.then(()=>this._dialog._dialogPreview?.revealItem(e))}_moveOrganizerItem(e,t,i){const s=this._placementItems(e);if(i<0||i>=s.length)return;const n=[...s];n.splice(i,0,n.splice(t,1)[0]),this._sidebarConfig="custom_groups"===e.section||"bottom_groups"===e.section?{...this._sidebarConfig,[e.section]:{...this._sidebarConfig[e.section],[e.group]:n}}:{...this._sidebarConfig,[e.section]:n},this._dispatchConfig(this._sidebarConfig)}_moveOrganizerGroup(e,t,i){const s=Object.entries(this._sidebarConfig[e]||{});i<0||i>=s.length||(s.splice(i,0,s.splice(t,1)[0]),this._sidebarConfig={...this._sidebarConfig,[e]:Object.fromEntries(s)},this._dispatchConfig(this._sidebarConfig))}_setItemVisible(e,t){const i=(this._sidebarConfig.hidden_items||[]).filter(t=>t!==e),s=this._sidebarConfig.new_items?.findIndex(t=>t.title===e)??-1;this._sidebarConfig={...this._sidebarConfig,hidden_items:t||s>=0?i:[...i,e]},s>=0&&(this._sidebarConfig={...this._sidebarConfig,new_items:this._sidebarConfig.new_items.map((e,i)=>i===s?{...e,show_in_sidebar:t}:e)}),this._dispatchConfig(this._sidebarConfig)}_setVisibilityRule(e,t,i){const s={...this._sidebarConfig.visibility_templates?.[e]};i?s[t]=i:delete s[t],this._sidebarConfig={...this._sidebarConfig,visibility_templates:{...this._sidebarConfig.visibility_templates,[e]:s}},this._dispatchConfig(this._sidebarConfig)}selectItem(e){this._rememberListPosition(),this._selectedItemId=e,this._selectedGroup=null,this._selectedBottomGroup=null,this._dialog._dialogPreview?.revealItem(e),this._focusDetail()}revealIssue(e){const[t,i,s]=e;if("new_items"===t&&"number"==typeof i){const e=this._sidebarConfig.new_items?.[i]?.title;e&&this.selectItem(e)}else if("custom_groups"!==t&&"bottom_groups"!==t||"string"!=typeof i){if(("bottom_items"===t||"bottom_grid_items"===t||"hidden_items"===t)&&"number"==typeof i){const e=this._sidebarConfig[t]?.[i];e&&this.selectItem(e)}}else{const e="number"==typeof s?this._sidebarConfig[t]?.[i]?.[s]:void 0;e?this.selectItem(e):this._selectGroup(t,i)}}_selectGroup(e,t){this._rememberListPosition(),this._selectedItemId=null,this._selectedGroup="custom_groups"===e?t:null,this._selectedBottomGroup="bottom_groups"===e?t:null,this._focusDetail()}_startItemCreation(e={section:"ungrouped"}){this._rememberListPosition(),this._newPlacement=e,this._creatingItem=!0,this._newTitle="",this._newDestination="",this._focusDetail()}_renderBackButton(){return n`<ha-button appearance="plain" class="back-to-list" @click=${this._backToList}
      ><ha-icon slot="start" icon="mdi:arrow-left"></ha-icon>Back to sidebar</ha-button
    >`}_rememberListPosition(){this._selectedItemId||null!==this._selectedGroup||null!==this._selectedBottomGroup||this._creatingItem||(this._listScroll=this._dialog.shadowRoot?.querySelector(".editor-canvas")?.scrollTop||0)}_focusDetail(){this.updateComplete.then(()=>{const e=this._dialog.shadowRoot?.querySelector(".editor-canvas");e&&(e.scrollTop=0),this.shadowRoot?.querySelector("h2[tabindex]")?.focus()})}_renderAllItems(){return n`
      <so-panel-all
        .hass=${this.hass}
        ._store=${this._store}
        ._sidebarConfig=${this._sidebarConfig}
        .singleScroll=${Boolean(this.workbenchMode)}
        @group-action=${this._handleGroupActionEvent}
        @navigate-section=${this._handleNavigateSection}
        @item-moved=${this._groupMoved}
      ></so-panel-all>
    `}_renderHiddenItems(){return n`<so-panel-visibility
      .hass=${this.hass}
      ._store=${this._store}
      ._sidebarConfig=${this._sidebarConfig}
    ></so-panel-visibility>`}_renderNotificationConfig(){const e=this.hass?.panels,t=this._dialog._initCombiPanels.map(t=>({value:t,label:D(this.hass,t),icon:e[t]?.icon||"mdi:view-dashboard"})),i=vn(this._sidebarConfig),s=Object.keys(i),o={select:{multiple:!1,custom_value:!1,mode:"dropdown",options:t.filter(e=>!s.includes(e.value)),sort:!0,required:!1}},r=this._sidebarConfig.notification||{},a=t.filter(e=>Object.keys(r).includes(e.value)),l=n`
      <div class="group-list">
        ${oi(a,e=>e,e=>n`
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
                    @click=${async()=>{await w(this,`Are you sure you want to delete this notification? ${e.label}`,"Delete")&&this._setNotificationSetting(e.value,void 0)}}
                    ><ha-icon icon="mdi:trash-can-outline"></ha-icon
                  ></ha-icon-button>
                </div>
              </div>
            `)}
      </div>
    `;return null===this._selectedNotification?n`
          <ha-selector
            .hass=${this.hass}
            .selector=${o}
            .value=${this._selectedNotification??""}
            .required=${!1}
            .label=${"Select panel for configuration"}
            .placeholder=${"Select panel"}
            @value-changed=${e=>{this._selectedNotification=e.detail.value}}
          ></ha-selector>
          ${l}
        `:this._renderNotifyConfig()}_renderNotifyConfig(){if(!this._selectedNotification)return a;const e=this._selectedNotification,t=D(this.hass,e)||e,i=vn(this._sidebarConfig)[e]||"",s=n`<div class="header-row ">
      <ha-icon-button .path=${Ot} @click=${()=>this._selectedNotification=null}> </ha-icon-button>
      ${t.toUpperCase()}
      <ha-button
        appearance="plain"
        size="s"
        @click=${()=>{this._selectedNotification=null}}
        >Done</ha-button
      >
    </div>`;return n`
      ${s}
      <ha-selector
        .hass=${this.hass}
        .value=${i}
        .configValue=${e}
        .helper=${"Use Jinja template to configure the notification. Result can be icon or text."}
        .selector=${{template:{preview:!0}}}
        .required=${!1}
        @value-changed=${this._handleNotifyConfigChange}
      ></ha-selector>
    `}_isGroupCollapsed(e){return this._sidebarConfig?.default_collapsed?.includes(e)??!1}_isGroupPinned(e){return this._sidebarConfig?.pinned_groups?.hasOwnProperty(e)??!1}_renderGroupActions(e,t){if(t){const t=this._sidebarConfig?.uncategorized_items??!1,i="boolean"==typeof t&&!0===t||!M(this._sidebarConfig.custom_groups?.[R.UNCATEGORIZED_ITEMS]),s=[{title:"Show in preview",action:"preview-item",icon:"mdi:information-outline"},{title:"Include in group orders",action:"uncategorized-as-group",icon:"mdi:format-list-bulleted"}];return n`<ha-dropdown @wa-select=${this._handleSubItemAction}>
        <ha-icon-button slot="trigger" .label=${`Actions for ${e}`} .path=${Tt}></ha-icon-button>

        ${s.map(t=>n`
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
      </ha-dropdown>`}const i=window.matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches,s=this._isGroupCollapsed(e),o=this._isGroupPinned(e);return n`
      ${i||this.workbenchMode?null:n`
            <ha-icon-button
              class="action-btn"
              .path=${It}
              ?is-selected=${s}
              @click=${()=>this._handleGroupAction("collapsed-group",e)}
            ></ha-icon-button>

            <wa-divider orientation="vertical"></wa-divider>

            <ha-icon-button
              class="action-btn"
              .path=${Bt}
              ?is-selected=${o}
              @click=${()=>this._handleGroupAction("pinned-group",e)}
            ></ha-icon-button>

            <wa-divider orientation="vertical"></wa-divider>
          `}

      <ha-dropdown @wa-select=${this._handleSubItemAction}>
        <ha-icon-button slot="trigger" .label=${`Actions for ${e}`} .path=${Tt}></ha-icon-button>

        ${[{title:"Edit items",action:"edit-items",icon:"mdi:pencil"},{title:"Rename",action:"rename",icon:"mdi:alphabetical"},{title:"Show in preview",action:"preview-item",icon:"mdi:information-outline"},{title:"Collapse by default",action:"collapsed-group",icon:"mdi:eye-minus-outline"},{title:"Add to pinned groups",action:"pinned-group",icon:"mdi:pin-outline"},{title:"Delete",action:"delete",icon:"mdi:trash-can-outline"}].map(t=>n`
            ${"delete"===t.action?n`<wa-divider></wa-divider>`:a}
            <ha-dropdown-item
              .value=${e}
              .data=${t}
              .type=${"collapsed-group"===t.action||"pinned-group"===t.action?"checkbox":void 0}
              .checked=${"collapsed-group"===t.action?s:"pinned-group"===t.action?o:void 0}
              .variant=${"delete"===t.action?"danger":void 0}
            >
              <ha-icon slot="icon" icon=${t.icon}></ha-icon>
              ${t.title}
            </ha-dropdown-item>
          `)}
      </ha-dropdown>
    `}_renderCustomGroupRow(e,t,i){const s=e,o=s===R.UNCATEGORIZED_ITEMS,r=this._sidebarConfig.custom_groups[s].length;return n`
      <div class="group-item-row" data-group=${s} data-index=${t}>
        <div class="handle">
          <ha-icon-button .label=${`Drag ${s} group`} .path=${Mt}></ha-icon-button>
        </div>

        <button class="group-name" @click=${()=>this._handleGroupAction("edit-items",s,Se.CUSTOM_GROUPS)}>
          <ha-icon icon=${`mdi:numeric-${t+1}-box`}></ha-icon>

          <div class="group-name-items" style="text-transform: ${i}">
            ${s}
            <span>${r} ${r>1?"items":"item"}</span>
          </div>
        </button>

        <div class="group-actions">${this._renderGroupActions(s,o)}</div>
        <ha-icon-button
          .label=${`Move ${s} up`}
          .path=${At}
          .disabled=${0===t}
          @click=${()=>this._moveGroup(t,t-1)}
        ></ha-icon-button>
        <ha-icon-button
          .label=${`Move ${s} down`}
          .path=${St}
          .disabled=${t===Object.keys(this._sidebarConfig.custom_groups||{}).length-1}
          @click=${()=>this._moveGroup(t,t+1)}
        ></ha-icon-button>
      </div>
    `}_renderCustomGroupList(){const e=Object.keys(this._sidebarConfig.custom_groups||{}),t=this._sidebarConfig?.text_transformation??"capitalize";return n`
      ${e.length?n`
            <ha-sortable handle-selector=".handle" @item-moved=${this._groupMoved}>
              <div class="group-list" id="group-list">
                ${oi(e,e=>e,(e,i)=>this._renderCustomGroupRow(e,i,t))}
              </div>
              ${this._renderSpacer()}
            </ha-sortable>
          `:n`<div>No custom groups found</div>`}

      <div class="header-row flex-end">
        <ha-button appearance="plain" size="s" @click=${this._togglePromptNewGroup}> Add New Group </ha-button>
      </div>
    `}_handleSubItemAction(e){e.stopPropagation();const t=e.detail?.item?.data,i=e.detail?.item?.value;this._handleGroupAction(t.action,i,Se.CUSTOM_GROUPS)}_groupMoved(e){if(e.stopPropagation(),!this._sidebarConfig)return;const{oldIndex:t,newIndex:i}=e.detail,s=Object.entries(this._sidebarConfig.custom_groups||{}).concat([]),n=s.splice(t,1)[0];s.splice(i,0,n);(e=>{this._sidebarConfig={...this._sidebarConfig,...e},this._dispatchConfig(this._sidebarConfig)})({custom_groups:Object.fromEntries(s)})}_moveGroup(e,t){t<0||this._groupMoved(new CustomEvent("item-moved",{detail:{oldIndex:e,newIndex:t}}))}_handleNotifyConfigChange(e){const t=e.target.configValue,i=e.detail.value;this._setNotificationSetting(t,i||void 0)}_setNotificationSetting(e,t){this._sidebarConfig=bn(this._sidebarConfig,e,t),this._dispatchConfig(this._sidebarConfig)}_renderEditGroup(){if(!this._selectedGroup)return a;const e=n`<div class="header-row ">
      <ha-icon-button
        .label=${"Back to groups"}
        .path=${Ot}
        @click=${()=>(this._selectedGroup=null,this._selectedTab=this._prevTab||Se.ALL_ITEMS)}
      >
      </ha-icon-button>
      ${this._selectedGroup.toLocaleUpperCase()}
      <ha-button appearance="plain" size="s" @click=${()=>this._handleGroupAction("preview",this._selectedGroup)}>
        PREVIEW
      </ha-button>
    </div>`,t=this._renderPanelSelector(Se.CUSTOM_GROUPS,this._selectedGroup);return n` ${e} ${t}`}_renderBottomItems(){if(this._selectedTab!==Se.BOTTOM_PANELS)return a;const e=Te.map(e=>({value:e,label:Me[e]})),t=n` <ha-control-select
      .value=${this._selectedBottom}
      .options=${e}
      @value-changed=${e=>{this._selectedBottom=e.detail.value}}
    ></ha-control-select>`,i={[Oe.BOTTOM_ITEMS]:this._renderPanelSelector(Oe.BOTTOM_ITEMS),[Oe.BOTTOM_GRID_ITEMS]:this._renderPanelSelector(Oe.BOTTOM_GRID_ITEMS),[Oe.BOTTOM_GROUPS]:this._renderBottomGroupsList()};return n`
      ${t}
      <div class="config-content">${i[this._selectedBottom]}</div>
    `}_renderBottomGroupsList(){const e=Object.keys(this._sidebarConfig.bottom_groups||{}),t=this._sidebarConfig?.text_transformation??"capitalize";return n`
      ${e.length?n`
            <div class="group-list">
              ${oi(e,e=>e,e=>{const i=this._sidebarConfig.bottom_groups?.[e]||[];return n`
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
          `:n`<div>No bottom groups defined</div>`}
      <div class="header-row flex-end">
        <ha-button appearance="plain" size="s" @click=${this._addBottomGroup}> Add New Group </ha-button>
      </div>
      ${this._selectedBottomGroup?n`
            <div style="margin-top: 1rem;">
              ${this._renderPanelSelector(Oe.BOTTOM_GROUPS,this._selectedBottomGroup)}
            </div>
          `:a}
    `}_editBottomGroup(e){this._selectedBottomGroup=this._selectedBottomGroup===e?null:e}async _addBottomGroup(){const e={...this._sidebarConfig.bottom_groups||{}},t=await y(this,"Enter new group name","System","Create");null!==t&&""!==t&&(Object.keys(e).includes(t)?await x(this,"Group name already exists."):(e[t]=[],this._sidebarConfig={...this._sidebarConfig,bottom_groups:e},this._dispatchConfig(this._sidebarConfig),this._selectedBottomGroup=t,this.requestUpdate()))}async _deleteBottomGroup(e){if(!await w(this,`Delete group "${e}"?`,"Delete"))return;const t={...this._sidebarConfig.bottom_groups||{}};delete t[e],this._sidebarConfig={...this._sidebarConfig,bottom_groups:Object.keys(t).length>0?t:void 0},this._dispatchConfig(this._sidebarConfig),this._selectedBottomGroup===e&&(this._selectedBottomGroup=null),this.requestUpdate()}_renderPanelSelector(e,t){const i=!0===this._dialog._uncategorizedIsActive,s=t===R.UNCATEGORIZED_ITEMS,o=E(this.hass),r=this._dialog._initCombiPanels.filter(e=>e!==o),l=i?this._dialog.pickedWithoutUncategorizedFromCustom:this._dialog.pickedItems,h=t||e,c=e===Oe.BOTTOM_GROUPS,d=t?c?this._sidebarConfig.bottom_groups?.[t]||[]:this._sidebarConfig.custom_groups[t]||[]:this._sidebarConfig[e]||[],u=Object.entries(d).map(([,e])=>e),f=l.filter(e=>!u.includes(e)),p=r.filter(e=>!f.includes(e)),g=this._createSelectorOptions(p),m=this._renderSelectedItems(e,t,h,u),v=t?this._renderPinGroupForms(t):a;return n`
      ${s?L(Ae.UNCATEGORIZED_GROUP_INFO):v}
      <div id="items-preview-wrapper">
        <div class="items-container" ?hidden=${s}>
          <div class="header-row flex-icon">
            <span>SELECT ITEMS</span>
          </div>
          <div class="selector-container">
            <ha-selector
              .hass=${this.hass}
              .selector=${g}
              .value=${u}
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
          ?grid=${e===R.BOTTOM_GRID_ITEMS}
          ?hidden=${!u.length}
        >
          ${m}
        </div>
      </div>
    `}_renderPinGroupForms(e){const t=this._sidebarConfig?.pinned_groups||{},i={is_pinned:t.hasOwnProperty(e),icon:"object"==typeof t[e]?t[e].icon:""},s=[{name:"",type:"grid",schema:[{name:"is_pinned",label:"Pin this group",type:"boolean",default:!1},{name:"icon",label:"Icon (optional)",disabled:!i.is_pinned,selector:{icon:{}}}]}];return n`
      <ha-form
        .hass=${this.hass}
        .schema=${s}
        .data=${i}
        .groupName=${e}
        .computeLabel=${e=>e.label}
        @value-changed=${this._handlePinGroupChange}
      ></ha-form>
    `}_renderSelectedItems(e,t,i,s){const o=this.hass?.panels,r=e=>this._dialog._newItemMap.get(e)?.icon||o[e]?.icon||"",a=s.map(e=>({key:e,title:this.hass.localize(`panel.${o[e]?.title}`)||o[e]?.title||o[e]?.url_path||e,icon:r(e)})),l=i.replace(/_/g," ").toUpperCase();return n`
      <div class="header-row flex-icon">
        <span>GROUP: ${l} - ORDER </span>
        <ha-icon-button
          .label=${"Sort items alphabetically"}
          .path=${zt}
          @click=${()=>this._sortItems(i,e)}
        >
        </ha-icon-button>
      </div>

      ${this._reloadPanelItems?n`<ha-spinner .size=${"small"}></ha-spinner> `:n` <ha-sortable
            handle-selector=".handle"
            .configValue=${e}
            .customGroup=${t}
            @item-moved=${this._itemMoved}
          >
            <div
              class="selected-items-preview"
              id="selected-items"
              ?grid=${i===R.BOTTOM_GRID_ITEMS}
            >
              ${oi(a,e=>e.key,(e,t)=>((e,t)=>n`
        <a data-panel=${e.key} data-index=${t}>
          <div class="icon-item handle" ?grid-item=${i===R.BOTTOM_GRID_ITEMS}>
            <ha-icon .icon=${e.icon}></ha-icon><span class="item-text">${e.title}</span>
          </div>
        </a>
      `)(e,t))}
            </div></ha-sortable
          >`}
    `}_renderSpacer(){return n`<div style="flex: 1"></div>`}_sortItems(e,t=e){const i=this.hass?.panels,s=t===Oe.BOTTOM_ITEMS||t===Oe.BOTTOM_GRID_ITEMS,n=(t===Oe.BOTTOM_GROUPS?this._sidebarConfig.bottom_groups?.[e]||[]:s?this._sidebarConfig[t]||[]:this._sidebarConfig.custom_groups?.[e]||[]).map(e=>({key:e,title:this.hass.localize(`panel.${i[e]?.title}`)||i[e]?.title||i[e]?.url_path||e})),o=[...n].sort((e,t)=>{const i=e.title.toUpperCase(),s=t.title.toUpperCase();return i.localeCompare(s)});let r;r=n.every((e,t)=>e.key===o[t].key)?[...n].sort((e,t)=>{const i=e.title.toUpperCase();return t.title.toUpperCase().localeCompare(i)}):o;const a=r.map(e=>e.key),l={};if(s){const e=t;let i=[...this._sidebarConfig[e]||[]];i=a,l[e]=i}else if(t===Oe.BOTTOM_GROUPS)l.bottom_groups={...this._sidebarConfig.bottom_groups,[e]:a};else{let t={...this._sidebarConfig.custom_groups||{}},i=[...t[e]||[]];i=a,t[e]=i,l.custom_groups=t}Object.keys(l).length>0&&(this._sidebarConfig={...this._sidebarConfig,...l},this._dispatchConfig(this._sidebarConfig))}_createSelectorOptions(e,t="list"){const i=E(this.hass);return{select:{multiple:!0,mode:t,options:e.map(e=>{const t=e===i;return{value:e,label:(D(this.hass,e)||e)+(t?" (default)":"")}}),sort:!0,reorder:!0}}}_handleValueChange(e){e.stopPropagation();const t=e.target.configValue,i=e.target.customGroup,s=e.detail.value,n=!0===this._dialog._uncategorizedIsActive,o={...this._sidebarConfig||{}},r={};if([Oe.BOTTOM_ITEMS,Oe.BOTTOM_GRID_ITEMS].includes(t)){const e=t,i=[...o[e]||[]],a=s.filter(e=>!i.includes(e));let l=[...this._sidebarConfig[e]||[]];if(n&&a.length>0){let e=[...o.custom_groups?.[R.UNCATEGORIZED_ITEMS]||[]];e=e.filter(e=>!a.includes(e)),r.custom_groups={...this._sidebarConfig.custom_groups||{},[R.UNCATEGORIZED_ITEMS]:e}}l=s,r[e]=l}else if(t===Oe.BOTTOM_GROUPS){const e=i,t={...this._sidebarConfig.bottom_groups||{}};t[e]=s,r.bottom_groups=t}else if(t===Se.CUSTOM_GROUPS){const e=i,t=[...o.custom_groups?.[e]||[]],a=s.filter(e=>!t.includes(e));let l={...this._sidebarConfig.custom_groups||{}},h=[...l[e]||[]];if(n&&a.length>0){let e=[...l[R.UNCATEGORIZED_ITEMS]||[]];e=e.filter(e=>!a.includes(e)),l[R.UNCATEGORIZED_ITEMS]=e}h=s,l[e]=h,r.custom_groups=l}Object.keys(r).length>0&&(this._sidebarConfig={...this._sidebarConfig,...r}),this._dispatchConfig(this._sidebarConfig),this.requestUpdate()}_dispatchConfig(e){const t=new CustomEvent("sidebar-changed",{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(t)}clickedPanelInPreview(e,t){"layout"!==this.workbenchMode?t&&(t===Oe.BOTTOM_GRID_ITEMS||t===Oe.BOTTOM_ITEMS?(this._selectedTab=Se.BOTTOM_PANELS,this._selectedGroup=null,this._selectedBottom=t===Oe.BOTTOM_GRID_ITEMS?Oe.BOTTOM_GRID_ITEMS:Oe.BOTTOM_ITEMS):Object.hasOwn(this._sidebarConfig.bottom_groups||{},t)?(this._selectedTab=Se.BOTTOM_PANELS,this._selectedGroup=null,this._selectedBottom=Oe.BOTTOM_GROUPS,this._selectedBottomGroup=t):(this._selectedTab=Se.CUSTOM_GROUPS,this._selectedGroup=t)):this.selectItem(e)}static get styles(){return[super.styles,l`
        :host {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
        }
        :host([workbench-mode]) .config-content {
          gap: 0;
          margin-top: 0;
          min-height: 0;
        }
        :host([workbench-mode]) .selected-items-preview,
        :host([workbench-mode]) .selector-container {
          height: auto;
          max-height: none;
          overflow: visible;
        }

        button {
          font: inherit;
          color: var(--primary-text-color);
          background: transparent;
          border: 0;
          cursor: pointer;
          text-align: start;
        }
        button:focus-visible,
        select:focus-visible {
          outline: 2px solid var(--primary-color);
          outline-offset: 2px;
        }
        h2[tabindex]:focus {
          outline: none;
        }
        .organizer-toolbar {
          display: grid;
          gap: 8px;
        }
        .organizer-toolbar ha-textfield {
          width: 100%;
        }
        .organizer-add-actions {
          display: flex;
          gap: 8px;
          margin: 12px 0;
        }
        .organizer-group {
          border-block: 1px solid var(--divider-color);
          margin-block: 8px;
        }
        .organizer-group-heading,
        .organizer-item {
          align-items: center;
          display: flex;
          min-width: 0;
          --mdc-icon-button-size: 40px;
        }
        .organizer-group-heading {
          background: var(--secondary-background-color);
        }
        .group-open {
          display: grid;
          flex: 1;
          gap: 3px;
          min-height: 56px;
          padding: 8px 10px;
          min-width: 0;
        }
        .group-open small,
        .item-open small,
        .field-help,
        .organizer-extra p {
          color: var(--secondary-text-color);
          font-size: 0.8rem;
          line-height: 1.4;
        }
        .organizer-group-items {
          padding-inline-start: 12px;
        }
        .organizer-item + .organizer-item {
          border-block-start: 1px solid var(--divider-color);
        }
        .item-open {
          display: flex;
          align-items: center;
          flex: 1;
          gap: 12px;
          min-height: 58px;
          min-width: 0;
          padding: 8px 10px;
        }
        .item-open > span {
          display: grid;
          gap: 3px;
          min-width: 0;
        }
        .item-open strong {
          font-weight: 400;
        }
        .item-open small,
        .group-open strong {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .item-open ha-icon {
          flex-shrink: 0;
          color: var(--secondary-text-color);
        }
        .item-open:hover,
        .group-open:hover,
        .empty-group:hover {
          background: var(--secondary-background-color);
        }
        .flat-heading {
          font-size: 0.9rem;
          margin: 0;
          padding: 12px;
        }
        .empty-group {
          min-height: 48px;
          padding: 12px;
          color: var(--primary-color);
          width: 100%;
        }
        .detail-heading {
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: space-between;
        }
        .detail-heading h2 {
          font-size: 1.2rem;
          margin: 12px 0;
        }
        .placement-field {
          display: grid;
          gap: 6px;
          margin: 12px 0;
        }
        .placement-field span {
          font-size: 0.85rem;
          color: var(--secondary-text-color);
        }
        .placement-field select {
          appearance: auto;
          width: 100%;
          box-sizing: border-box;
          background: var(--secondary-background-color);
          color: var(--primary-text-color);
          border: 0;
          border-bottom: 1px solid var(--secondary-text-color);
          border-radius: 4px 4px 0 0;
          font: inherit;
          min-height: 48px;
          padding: 10px;
        }
        .item-order-actions {
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-block: 14px;
        }
        .item-order-actions > span {
          flex-basis: 100%;
          color: var(--secondary-text-color);
          font-size: 0.85rem;
        }
        .organizer-extra {
          border-block-start: 1px solid var(--divider-color);
          margin-block: 18px;
          padding-block-start: 8px;
        }
        .organizer-extra summary {
          cursor: pointer;
          min-height: 44px;
          display: flex;
          align-items: center;
          color: var(--primary-color);
        }
        .organizer-extra summary::before {
          content: '▸';
          margin-inline-end: 8px;
        }
        .organizer-extra[open] summary::before {
          content: '▾';
        }
        .organizer-extra ha-selector {
          display: block;
          margin-block: 12px;
        }
        .group-editor-items {
          margin-block: 14px;
        }
        .back-to-list {
          margin-inline-start: -10px;
        }
        :host([workbench-mode='layout']) > ha-textfield {
          width: 100%;
          display: block;
          margin-block: 16px;
        }
        @media (max-width: 600px) {
          .organizer-item,
          .organizer-group-heading {
            --mdc-icon-button-size: 44px;
          }
          .organizer-group-items {
            padding-inline-start: 0;
          }
          .group-editor-items .item-open {
            gap: 6px;
            padding-inline: 0;
          }
        }
        .rules-layout {
          display: grid;
          gap: 28px;
        }
        .layout-workbench,
        .layout-section {
          display: grid;
          gap: 18px;
        }
        .layout-workbench {
          gap: 28px;
        }
        .layout-section + .layout-section {
          border-block-start: 1px solid var(--divider-color);
          padding-block-start: 22px;
        }
        .layout-heading h2,
        .layout-heading p {
          margin: 0;
        }
        .layout-heading h2 {
          font-size: 1.05rem;
        }
        .layout-heading p {
          color: var(--secondary-text-color);
          font-size: 0.9rem;
          line-height: 1.4;
          margin-top: 4px;
        }
        .layout-detail {
          border-block-start: 1px solid var(--divider-color);
          padding-block-start: 8px;
        }
        .layout-detail summary {
          align-items: center;
          cursor: pointer;
          display: flex;
          min-height: 52px;
        }
        .layout-detail summary span {
          display: grid;
          gap: 3px;
        }
        .layout-detail summary small {
          color: var(--secondary-text-color);
          font-size: 0.82rem;
          font-weight: 400;
        }
        .layout-detail[open] summary {
          margin-block-end: 12px;
        }
        .rule-section {
          border-block-start: 1px solid var(--divider-color);
          display: grid;
          gap: 16px;
          padding-block-start: 22px;
        }
        .rule-heading h2,
        .rule-heading p {
          margin: 0;
        }
        .rule-heading h2 {
          font-size: 1.05rem;
        }
        .rule-heading p {
          color: var(--secondary-text-color);
          font-size: 0.9rem;
          line-height: 1.4;
          margin-top: 4px;
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
      `]}};h([c({attribute:!1})],Cn.prototype,"_sidebarConfig",void 0),h([c({type:String,attribute:"workbench-mode",reflect:!0})],Cn.prototype,"workbenchMode",void 0),h([b()],Cn.prototype,"_selectedTab",void 0),h([b()],Cn.prototype,"_selectedBottom",void 0),h([b()],Cn.prototype,"_selectedGroup",void 0),h([b()],Cn.prototype,"_selectedNotification",void 0),h([b()],Cn.prototype,"_reloadPanelItems",void 0),h([b()],Cn.prototype,"_selectedItemId",void 0),h([b()],Cn.prototype,"_search",void 0),h([b()],Cn.prototype,"_showHidden",void 0),h([b()],Cn.prototype,"_creatingItem",void 0),h([b()],Cn.prototype,"_newTitle",void 0),h([b()],Cn.prototype,"_newDestination",void 0),h([b()],Cn.prototype,"_newPlacement",void 0),h([b()],Cn.prototype,"_prevTab",void 0),h([bt("so-panel-all")],Cn.prototype,"_panelAll",void 0),h([b()],Cn.prototype,"_selectedBottomGroup",void 0),Cn=h([_("sidebar-dialog-panels")],Cn);const Sn=(e,t)=>{if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;let i,s;if(Array.isArray(e)){if(s=e.length,s!==t.length)return!1;for(i=s;0!==i--;)if(e[i]!==t[i])return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i of e.entries())if(!t.has(i[0]))return!1;for(i of e.entries())if(i[1]!==t.get(i[0]))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i of e.entries())if(!t.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(s=e.length,s!==t.length)return!1;for(i=s;0!==i--;)if(e[i]!==t[i])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const n=Object.keys(e);if(s=n.length,s!==Object.keys(t).length)return!1;for(i=s;0!==i--;)if(!Object.prototype.hasOwnProperty.call(t,n[i]))return!1;for(i=s;0!==i--;){const s=n[i];if(e[s]!==t[s])return!1}return!0}return e!=e&&t!=t};let On=class extends si{constructor(){super(ke.PREVIEW),this._sidebarConfig={},this.invalidConfig=!1,this._colorConfigMode="",this._baseColorFromTheme={},this._previewPanels={},this._collapsedGroups=new Set,this._ready=!1,this._highlightedItem=null,this._templateUnsubscribers=new Set,this._subscriptionGeneration=0,this._toggleColapsed=e=>{const t=this._collapsedGroups.has(e);if(this._sidebarConfig?.accordion_mode&&t){const t=[...Object.keys(this._previewPanels?.custom_groups||{}),...Object.keys(this._previewPanels?.bottom_groups||{})].filter(e=>e!==R.UNCATEGORIZED_ITEMS);this._collapsedGroups=new Set(t.filter(t=>t!==e))}else t?this._collapsedGroups.delete(e):this._collapsedGroups.add(e);this.requestUpdate()},this._toggleGroup=(e,t)=>{const i=[...Object.keys(this._sidebarConfig.custom_groups||{}),...Object.keys(this._sidebarConfig.bottom_groups||{})].filter(e=>e!==R.UNCATEGORIZED_ITEMS);return this._collapsedGroups=new Set(i.filter(t=>t!==e)),this.requestUpdate(),this.updateComplete.then(()=>{const i=this.shadowRoot;if(!i)return;const s=Array.from(i.querySelectorAll("div.group-items")),n=s.find(t=>t.getAttribute("group")===e),o=n?.hasAttribute("selected");if(s.forEach(e=>e.removeAttribute("selected")),i.querySelectorAll("[dimmed]").forEach(e=>e.removeAttribute("dimmed")),n)if(n.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"}),t){const i="show"===t||!o;n.toggleAttribute("selected",i),Array.from(n.parentElement?.children||[]).forEach(t=>{const s=t.getAttribute("group")===e;t.toggleAttribute("dimmed",i&&!s)})}else n.classList.add("hight-light"),n.addEventListener("animationend",()=>n.classList.remove("hight-light"),{once:!0})})},window.SoDialogPreview=this}disconnectedCallback(){super.disconnectedCallback(),this._disposeTemplateSubscriptions(),window.SoDialogPreview===this&&(window.SoDialogPreview=void 0)}willUpdate(e){if(!e.has("_sidebarConfig")||!this._sidebarConfig)return;const t=e.get("_sidebarConfig");t?this._updatePanelConfig(t,this._sidebarConfig):this._previewPanels=this._computePreviewPanels()}firstUpdated(){if(this._sidebarConfig){this._collapsedGroups=new Set(this._sidebarConfig.default_collapsed||[]);const e=S(this._sidebarConfig.color_config,this.hass);this._colorConfigMode=e?"dark":"light",setTimeout(()=>{this._setTheme(this._colorConfigMode)},0)}this._addNotification()}shouldUpdate(e){return e.has("invalidConfig")&&!0===this.invalidConfig&&(this.invalidConfig=!0),e.has("_sidebarConfig")&&this._sidebarConfig,!0}updated(e){if(super.updated(e),e.has("_previewPanels")&&this._previewPanels&&(this._ready=!0),e.has("_sidebarConfig")&&this._sidebarConfig){const t=e.get("_sidebarConfig"),i=this._sidebarConfig;t&&i&&(this._updateThemeChange(t,i),this._updateNotificationChange(t,i))}if(e.has("_colorConfigMode")&&this._colorConfigMode){const t=e.get("_colorConfigMode"),i=this._colorConfigMode;t&&i&&t!==i&&this._setTheme(i)}e.has("_ready")&&this._ready&&this._handleNotifyChange()}_updatePanelConfig(e,t){const i=["custom_groups","bottom_groups","bottom_items","bottom_grid_items","hidden_items","new_items"].reduce((i,s)=>(i[s]=!Sn(e[s],t[s]),i),{}),s=!Sn(Object.keys(e.custom_groups||{}),Object.keys(t.custom_groups||{})),n=!Sn(Object.keys(e.bottom_groups||{}),Object.keys(t.bottom_groups||{})),o=e.move_settings_from_fixed!==t.move_settings_from_fixed;(Object.values(i).some(e=>e)||s||n||o)&&this._updateListbox(t)}_updateThemeChange(e,t){const i=e.color_config?.custom_theme?.theme,s=t.color_config?.custom_theme?.theme;if(!Sn(i,s))return void 0===s?(this.style="",void setTimeout(()=>this._setTheme("default"),200)):void this._setTheme(this._colorConfigMode)}_updateNotificationChange(e,t){const i=!Sn(e.notification,t.notification),s=JSON.parse(JSON.stringify(e.new_items?.every(e=>e.notification)!==t.new_items?.every(e=>e.notification)));(i||s)&&this._handleNotifyChange()}_addNotification(){if(!this._ready)return;const e=this._panelsList.querySelectorAll("a"),{new_items:t,notification:i}=this._sidebarConfig||{},s={...i||{},...Array.from(t||[]).filter(e=>void 0!==e.notification).reduce((e,t)=>(e[t.title]=t.notification,e),{})};s&&Object.keys(s).length>0&&Object.entries(s).forEach(([t,i])=>{const s=Array.from(e).find(e=>e.getAttribute("data-panel")===t);s&&this._subscribeNotification(s,i)})}_subscribeNotification(e,t){let i=e.querySelector("span.notification-badge"),s=e.querySelector("ha-icon.notification-badge");i||(i=document.createElement("span"),i.classList.add("notification-badge"),e.querySelector("div.icon-item")?.appendChild(i)),s||(s=document.createElement("ha-icon"),s.classList.add("notification-badge"),e.querySelector("div.icon-item")?.appendChild(s));this._subscribeTemplate(t,e=>{const t=Boolean(e)&&"string"==typeof e&&V(e);i.hidden=!e||t,s.hidden=!t,t?s.setAttribute("icon",e):e&&(i.textContent=String(e))})}_subscribeTemplate(e,t){if(!this.hass||!N(e))return;const i=this._subscriptionGeneration;z(this.hass.connection,e=>{t(e.result)},{template:e??"",variables:{config:e,user:this.hass.user.name},strict:!0}).then(e=>{i===this._subscriptionGeneration&&this.isConnected?this._templateUnsubscribers.add(e):e()}).catch(e=>console.warn("Preview template subscription failed.",e))}_handleNotifyChange(){this._disposeTemplateSubscriptions();const e=this._panelsList?.querySelectorAll(".notification-badge");e&&(e.forEach(e=>e.remove()),setTimeout(()=>{this._addNotification()},0))}_disposeTemplateSubscriptions(){this._subscriptionGeneration+=1;for(const e of this._templateUnsubscribers)try{e()}catch(e){console.warn("Could not dispose a preview template subscription.",e)}this._templateUnsubscribers.clear()}_updateListbox(e){e||(e=this._sidebarConfig),this._ready=!1,this._previewPanels=this._computePreviewPanels()}_computePreviewPanels(){const e=this._sidebarConfig||{},t=E(this.hass),i=new Set([t]);e.move_settings_from_fixed||i.add("config");const s=new Set(e.hidden_items||[]),n=new Map((e.new_items||[]).map(e=>[e.title,e])),o=e=>e.filter(e=>!(i.has(e)||!(e=>!s.has(e)&&!1!==n.get(e)?.show_in_sidebar)(e))&&(i.add(e),!0)).map(e=>this._getPreviewPanelInfo(e)),r=(e={})=>Object.fromEntries(Object.entries(e).map(([e,t])=>[e,o(t)])),a={custom_groups:r(e.custom_groups),bottom_groups:r(e.bottom_groups),bottom_items:o(e.bottom_items||[]),bottom_grid_items:o(e.bottom_grid_items||[])},l=[...(this._dialog._initCombiPanels||[]).filter(e=>e in this.hass.panels),...n.keys(),...e.move_settings_from_fixed&&this.hass.panels.config?["config"]:[]];return a.ungrouped_items=o(l),a}_getPreviewPanelInfo(e){const t=this._sidebarConfig.new_items?.find(t=>t.title===e);return{...t?{...t,component_name:"new-item"}:this._getPanelInfo(e),previewId:e}}_setTheme(e){let t=this.hass.themes.theme;const i=this._sidebarConfig?.color_config?.custom_theme?.theme||void 0;i&&(t=i),P(this,this.hass,t,e),setTimeout(()=>{this._getDefaultColors()},200)}_getDefaultColors(){const e=O(this);this._baseColorFromTheme=e}render(){const e=E(this.hass);return n` <div class="divider-preview" style=${this._computePreviewStyle()}>
      ${this._renderHeader()}
      <div class="panels-list">
        <div class="wrapper">
          <div class="groups-container before-spacer">
            ${(()=>{const t=this._getPreviewPanelInfo(e);return this._renderPanel(t)})()} ${this._renderCustomGroups()} ${this._renderUngroupedPanels()}
          </div>
        </div>
        <div class="spacer"></div>
        <div class="after-spacer">
          ${M(this._previewPanels?.bottom_groups)?a:n`
                <div class="divider"></div>
                <div class="bottom-groups-panel">${this._renderBottomGroups()}</div>
              `}
          ${M(this._previewPanels?.bottom_items)?a:n`
                <div class="divider"></div>
                <div class="bottom-panel">${this._renderBottomPanels()}</div>
              `}
          ${M(this._previewPanels?.bottom_grid_items)?a:n`
                <div class="divider"></div>
                <div class="bottom-grid-panel">${this._renderBottomGridPanels()}</div>
              `}
          ${this._sidebarConfig.move_settings_from_fixed||this._sidebarConfig.hidden_items?.includes("config")?a:n`<div class="divider"></div>
                ${this._renderPanel(this._getPreviewPanelInfo("config"))}`}
        </div>
      </div>
    </div>`}_renderCustomGroups(){const e=this._previewPanels?.custom_groups;return e?Object.entries(e).map(([e,t])=>{const i=e===R.UNCATEGORIZED_ITEMS,s=this._collapsedGroups.has(e);return n`${i?a:n`<div
              class="divider-container"
              group=${e}
              role="button"
              tabindex="0"
              aria-label=${`Toggle ${e}`}
              aria-expanded=${!s}
              @keydown=${t=>this._activateOnKey(t,()=>this._toggleColapsed(e))}
              @click=${()=>this._toggleColapsed(e)}
            >
              <div class="added-content" group=${e} ?collapsed=${s}>
                <ha-icon icon="mdi:chevron-down"></ha-icon>
                <span>${e.trim()}</span>
              </div>
            </div>`}
        <div
          class="group-items"
          ?inert=${!i&&s}
          ?collapsed=${!i&&s}
          group=${e}
        >
          ${t.map(e=>this._renderPanel(e))}
        </div>`}):[]}_renderBottomGroups(){const e=this._previewPanels?.bottom_groups;return e?Object.entries(e).map(([e,t])=>{const i=this._collapsedGroups.has(e);return n`<div
          class="divider-container"
          group=${e}
          role="button"
          tabindex="0"
          aria-label=${`Toggle ${e}`}
          aria-expanded=${!i}
          @keydown=${t=>this._activateOnKey(t,()=>this._toggleColapsed(e))}
          @click=${()=>this._toggleColapsed(e)}
        >
          <div class="added-content" group=${e} ?collapsed=${i}>
            <ha-icon icon="mdi:chevron-down"></ha-icon>
            <span>${e.trim()}</span>
          </div>
        </div>
        <div class="group-items" ?inert=${i} ?collapsed=${i} group=${e}>
          ${t.map(e=>this._renderPanel(e))}
        </div>`}):[]}_renderBottomPanels(){const e=this._previewPanels?.bottom_items;return e?e.map(e=>this._renderPanel(e)):[]}_renderUngroupedPanels(){return(this._previewPanels.ungrouped_items||[]).map(e=>this._renderPanel(e))}_renderBottomGridPanels(){const e=this._previewPanels?.bottom_grid_items;return e?e.map(e=>this._renderPanel(e,!0)):[]}_renderPanel(e,t=!1){const i=()=>{this._dispatchEvent("item-clicked",e.previewId??("new-item"===e.component_name?e.title:e.url_path??e.title))},{icon:s,title:o,url_path:r}=e,a=e.previewId??("new-item"===e.component_name?o:r??o);return n`<a
      data-panel=${a}
      ?highlight=${this._highlightedItem===a}
      role="button"
      tabindex="0"
      aria-label=${`Edit ${o}`}
      @click=${i}
      @keydown=${e=>this._activateOnKey(e,i)}
    >
      <div class="icon-item" ?grid-item=${t}>
        <ha-icon .icon=${s}> </ha-icon><span class="item-text">${o}</span>
      </div>
    </a>`}_renderHeader(){const{header_title:e,hide_header_toggle:t,custom_groups:i,bottom_groups:s}=this._sidebarConfig||{},o=[...Object.keys(i||{}),...Object.keys(s||{})].filter(e=>e!==R.UNCATEGORIZED_ITEMS),r=o.every(e=>this._collapsedGroups.has(e));return n`<div class="menu-title">
      ${e||"Home Assistant"}
      ${t||0===o.length?a:n`<button
            type="button"
            class="collapse-toggle"
            aria-label=${r?"Expand all groups":"Collapse all groups"}
            @click=${()=>this._handleCollapsedToggle()}
          >
            <ha-icon .icon=${r?"mdi:plus":"mdi:minus"}></ha-icon>
          </button>`}
    </div>`}_activateOnKey(e,t){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),t())}_handleCollapsedToggle(){const e=[...Object.keys(this._sidebarConfig.custom_groups||{}),...Object.keys(this._sidebarConfig.bottom_groups||{})].filter(e=>e!==R.UNCATEGORIZED_ITEMS),t=e.every(e=>this._collapsedGroups.has(e));this._collapsedGroups=t?new Set:new Set(e),this.requestUpdate()}async revealItem(e){this._highlightedItem=e;const t=this._sidebarConfig,i=[...Object.entries(t.custom_groups||{}),...Object.entries(t.bottom_groups||{})].find(([,t])=>t.includes(e))?.[0];i&&this._collapsedGroups.delete(i),this.requestUpdate(),await this.updateComplete;const s=this.shadowRoot;if(!s)return;s.querySelectorAll("[dimmed]").forEach(e=>e.removeAttribute("dimmed"));const n=Array.from(s.querySelectorAll("[data-panel]"));n.forEach(t=>t.toggleAttribute("highlight",t.getAttribute("data-panel")===e)),n.find(t=>t.getAttribute("data-panel")===e)?.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}_toggleBottomPanel(e,t=!0){this._collapsedGroups=new Set(Object.keys(this._previewPanels?.custom_groups||{})),this.requestUpdate(),this.updateComplete.then(()=>{const i={[Oe.BOTTOM_ITEMS]:"div.bottom-panel",[Oe.BOTTOM_GRID_ITEMS]:"div.bottom-grid-panel",[Oe.BOTTOM_GROUPS]:"div.bottom-groups-panel"},s=this.shadowRoot?.querySelector(i[e]);s&&(this._groupsContainer.scrollTo(0,this._groupsContainer.scrollHeight-s.scrollHeight),s.scrollIntoView({behavior:"smooth",block:"nearest"}),s.toggleAttribute("selected",e&&!t),e&&t&&(s.classList.add("hight-light"),s.addEventListener("animationend",()=>{s.classList.remove("hight-light")})))})}_hightlightItem(e){this._highlightedItem=e,Array.from(this._itemAnchorList||[]).forEach(t=>{t.toggleAttribute("highlight",null!==e&&t.getAttribute("data-panel")===e)})}_dispatchEvent(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}_computePreviewStyle(){const e=this._sidebarConfig?.text_transformation||"capitalize",t=this._colorConfigMode,i=this._sidebarConfig?.color_config||{},s=i?.border_radius||0,n=i?.[t]||{},o=H(n?.custom_styles||{}),r=e=>n?.[e]?`${n[e]} !important`:this._baseColorFromTheme[e],a=!0===this._sidebarConfig?.force_transparent_background,l={"--divider-color":r("divider_color"),"--divider-bg-color":r("background_color"),"--divider-border-top-color":r("border_top_color"),"--scrollbar-thumb-color":r("scrollbar_thumb_color"),"--sidebar-background-color":a?"transparent":r("custom_sidebar_background_color"),"--divider-border-radius":`${s}px`,"--sidebar-text-color":r("divider_text_color"),"--sidebar-icon-color":r("sidebar_icon_color"),"--sidebar-text-transform":e,...o};return ti(l)}_setCustomTheme(e,t){this.style="",P(this,this.hass,e,t),setTimeout(()=>{this._getDefaultColors()},200)}static get styles(){return[l`
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

        .collapse-toggle {
          border: 0;
          background: transparent;
          color: inherit;
          cursor: pointer;
          min-width: 44px;
          min-height: 44px;
        }
        .collapse-toggle:focus-visible,
        .divider-container:focus-visible,
        a:focus-visible {
          outline: 2px solid var(--primary-color);
          outline-offset: -2px;
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

        .notification-badge[hidden] {
          display: none !important;
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
      `]}};h([c({attribute:!1})],On.prototype,"_sidebarConfig",void 0),h([c({type:Boolean,reflect:!0,attribute:"invalid-config"})],On.prototype,"invalidConfig",void 0),h([b()],On.prototype,"_colorConfigMode",void 0),h([b()],On.prototype,"_baseColorFromTheme",void 0),h([b()],On.prototype,"_previewPanels",void 0),h([b()],On.prototype,"_collapsedGroups",void 0),h([b()],On.prototype,"_ready",void 0),h([b()],On.prototype,"_highlightedItem",void 0),h([bt(".divider-preview")],On.prototype,"_previewContainer",void 0),h([bt(".panels-list")],On.prototype,"_panelsList",void 0),h([bt(".groups-container")],On.prototype,"_groupsContainer",void 0),h([wt("a")],On.prototype,"_itemAnchorList",void 0),On=h([_("sidebar-dialog-preview")],On);const An={title:"Title",url_path:"URL Path",component_name:"Component Name",group:"Group",show_in_sidebar:"Hidden",notification:"Notification"};let Pn=class extends d{constructor(){super(...arguments),this.items=[],this.columns=[],this.hideHeader=!1,this.narrow=!1}createRenderRoot(){return this}render(){const e=n`
      <div class="item-row top">
        <div class="cell icon"></div>
        <div class="cell grows">${An.title}</div>
        ${this.columns.length>0&&!this.narrow?this.columns.map(e=>n`<div class="cell" ?square=${["show_in_sidebar","notification"].includes(e)}>
                  ${An[e]||e}
                </div>`):a}
        <div class="cell icon"></div>
      </div>
    `;return n` <div class="data-table">
      ${this.hideHeader?a:e}
      ${this.items.map(e=>{const t=!1===e.show_in_sidebar?n`<ha-icon icon="mdi:eye-off"></ha-icon>`:a,i=e.notification?n`<ha-icon icon="mdi:check"></ha-icon>`:a;return n`
          <div class="item-row">
            <div class="cell icon">
              <ha-icon icon=${e.icon??"mdi:help-circle-outline"}></ha-icon>
            </div>
            <div class="cell grows">${e.title}</div>
            ${this.columns.length>0&&!this.narrow?this.columns.map(s=>n`<div class="cell" ?square=${["show_in_sidebar","notification"].includes(s)}>
                      ${"show_in_sidebar"===s?t:"notification"===s?i:e[s]??"-"}
                    </div>`):a}
            <div class="cell icon">${this.itemActionRenderer?this.itemActionRenderer(e):a}</div>
          </div>
        `})}
    </div>`}};h([c({type:Array})],Pn.prototype,"items",void 0),h([c({attribute:!1})],Pn.prototype,"columns",void 0),h([c({attribute:!1})],Pn.prototype,"itemActionRenderer",void 0),h([c({type:Boolean,attribute:"hide-header"})],Pn.prototype,"hideHeader",void 0),h([c({type:Boolean,reflect:!0})],Pn.prototype,"narrow",void 0),Pn=h([_("so-data-item-table")],Pn);const Tn=l`
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
`.toString();let Mn=class extends si{constructor(){super(Se.ALL_ITEMS),this.singleScroll=!1,this._showByGroup=!1,this._search="",this._renderGroupActionDropdown=(e,t)=>{let i=["edit-items","preview-item"];e===Se.CUSTOM_GROUPS&&t!==R.UNCATEGORIZED_ITEMS?i.push("divider","delete"):t===R.UNCATEGORIZED_ITEMS&&i.push("divider","uncategorized-as-group");const s=G(i);return n`
      <ha-dropdown
        slot="icons"
        @click=${U}
        @wa-select=${this._handleActionGroupClick}
        .section=${e}
        .groupName=${t}
      >
        <ha-button size="s" variant="neutral" appearance="filled" with-caret slot="trigger">more</ha-button>
        ${s.map(i=>W({item:i,option:{groupName:t,section:e,checked:this._dialog._uncategorizedIsActive}}))}
      </ha-dropdown>
    `},this._computeExpansionOptions=e=>({...e,noStyle:!0,outlined:!1,class:`group-data-wrapper ${e.class??""}`}),this._toggleUncategorizedItemsActive=()=>{g(this,"group-action",{action:"uncategorized-as-group",key:R.UNCATEGORIZED_ITEMS})},window.SoPanelAll=this}connectedCallback(){super.connectedCallback(),this._showByGroup="true"===j($e.SHOW_BY_GROUP)}updated(e){super.updated(e),(e.has("_showByGroup")||e.has("_sidebarConfig"))&&this._expansionPanels.forEach(e=>{this._styleManager.addStyle(Tn,e.shadowRoot)})}render(){return n`
      <div class="all-panels-wrapper">
        <ha-textfield
          class="panel-search"
          .label=${"Search panels and items"}
          .value=${this._search}
          clear-button-visible
          @input=${e=>this._search=e.target.value}
        ></ha-textfield>
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
    `}_renderPanelsByType(){const e=this._dialog._newItems,t=e=>{const t=this._search.trim().toLocaleLowerCase();if(!t)return!0;const i=this._getPanelInfo(e);return[e,i.title,i.url_path].some(e=>String(e||"").toLocaleLowerCase().includes(t))},i=this._dialog._initCombiPanels.filter(i=>!e.includes(i)&&t(i)),s=e.filter(t),o={data:{items:i,columns:["url_path","group"]},expansionOptions:this._computeExpansionOptions({id:"system-panels",header:"System Panels"})};return n`
      ${this._renderTableGrouped(o)}
      ${0===i.length&&0===s.length?n`<div class="panel-empty-state">No panels match “${this._search}”. Clear the search to see every item.</div>`:a}
      ${s.length>0?this._renderTableGrouped({data:{items:s,columns:["group"]},expansionOptions:this._computeExpansionOptions({id:"new-items",header:"User Created",iconSlot:n`<ha-button
                size="s"
                variant="brand"
                appearance="filled"
                slot="icons"
                @click=${()=>g(this,"navigate-section",{section:ke.NEW_ITEMS})}
                >Edit items</ha-button
              >`})}):a}
    `}_computeGroupData(e,t,i,s,n,o){if(!i||"object"==typeof i&&M(i)||Array.isArray(i)&&!i.length)return null;!o&&Ie.includes(e)&&(o=this._renderGroupActionDropdown(e,t));return{data:{items:Array.isArray(i)?i:Object.values(i).flat(),columns:n,itemActionRenderer:s},expansionOptions:this._computeExpansionOptions({id:e,header:t,iconSlot:o,class:t===R.UNCATEGORIZED_ITEMS?"uncategorized":void 0})}}_renderByGroupType(){const{custom_groups:e={},bottom_items:t=[],bottom_grid_items:i=[]}=k(this._sidebarConfig,[R.CUSTOM_GROUPS,R.BOTTOM_ITEMS,R.BOTTOM_GRID_ITEMS]),s=this._dialog._uncategorizedIsActive?[]:this._dialog.uncategorizedItems,o=Object.entries(e).map(([e,t])=>this._computeGroupData(Se.CUSTOM_GROUPS,e,t)).filter(Boolean),r=[t.length?this._computeGroupData(Se.BOTTOM_PANELS,R.BOTTOM_ITEMS,t):null,i.length?this._computeGroupData(Se.BOTTOM_PANELS,R.BOTTOM_GRID_ITEMS,i):null].filter(Boolean),l=s.length?this._computeGroupData(R.UNCATEGORIZED_ITEMS,R.UNCATEGORIZED_ITEMS,s):null;return n`
      ${this._renderGroupSection(Se.CUSTOM_GROUPS,o,!0)}
      ${l?this._renderSectionContent(R.UNCATEGORIZED_ITEMS,this._renderTableGrouped(l),{label:"Set items to grouped",onClick:this._toggleUncategorizedItemsActive,hightLight:!0}):a}
      ${this._renderGroupSection(Se.BOTTOM_PANELS,r,!1,!1)}
    `}_renderGroupSection(e,t,i=!0,s=!0){return t.length?this._renderSectionContent(e,n`${t.map(e=>this._renderTableGrouped(e,i))}`,void 0,s):a}_renderSectionContent(e,t,i,s=!0){return!i&&Ie.includes(e)&&(i={label:"Expand/Collapse All",onClick:()=>this._toggleExpansionPanels(e)}),n`
      <div class="group-title">
        <div>${Me[e]??e}</div>
        ${i?n`<ha-button
              size="s"
              variant=${i.hightLight?"brand":"neutral"}
              appearance="plain"
              @click=${i.onClick}
              >${i.label}</ha-button
            >`:a}
      </div>
      <ha-sortable handle-selector=".sortable-table" .disabled=${F||!s}>
        <section class="group-wrapper">${t}</section>
      </ha-sortable>
    `}_renderTableGrouped(e,t=!1){const i=e.data.columns??["url_path","component_name"],s=n` <so-data-item-table
      .items=${this._computePanelInfoList(e.data.items)}
      .columns=${i}
      .narrow=${this.narrow}
      .itemActionRenderer=${e.data.itemActionRenderer}
    ></so-data-item-table>`,o=e.expansionOptions?$({options:e.expansionOptions,content:s}):s,r=n`
      <div class="sortable-table">
        <ha-icon-button class="drag-handle" .path=${Mt} title="Drag to reorder"></ha-icon-button>
        ${o}
      </div>
    `;return e.expansionOptions?t?r:o:s}_handleActionGroupClick(e){if(e.stopPropagation(),!e.detail||void 0===e.detail.item?.value)return;const{section:t,groupName:i}=e.target,s=e.detail.item.value;g(this,"group-action",{action:s,key:i,type:t})}_toggleExpansionPanels(e){if(!this._expansionPanels.length)return;let t=Array.from(this._expansionPanels);e&&(t=Array.from(this._expansionPanels).filter(t=>t.id===e));const i=t.some(e=>e.hasAttribute(Re.EXPANDED));t.forEach(e=>{i?e.removeAttribute(Re.EXPANDED):e.setAttribute(Re.EXPANDED,"")})}_handleGroupByPanelType(e){if(e.stopPropagation(),!e.detail||void 0===e.detail.item?.value)return;const t=e.detail.item.value;this._showByGroup="groups"===t,q($e.SHOW_BY_GROUP,this._showByGroup)}static get styles(){return[super.styles,l`
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
        :host([single-scroll]) .all-panels-wrapper,
        :host([single-scroll]) .group-wrapper {
          max-height: none;
          overflow: visible;
        }
        :host([single-scroll]) .group-title {
          position: static;
        }
        .panel-search {
          box-sizing: border-box;
          margin-block-end: var(--side-dialog-gutter);
          width: 100%;
        }
        .panel-empty-state {
          color: var(--secondary-text-color);
          padding: 24px 12px;
          text-align: center;
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
      `]}};h([c({attribute:!1})],Mn.prototype,"_sidebarConfig",void 0),h([c({type:Boolean,attribute:"single-scroll",reflect:!0})],Mn.prototype,"singleScroll",void 0),h([wt("ha-expansion-panel")],Mn.prototype,"_expansionPanels",void 0),h([c({attribute:!1})],Mn.prototype,"_showByGroup",void 0),h([b()],Mn.prototype,"_search",void 0),Mn=h([_("so-panel-all")],Mn);const $n=l`
  :host > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  }
`.toString();var In;!function(e){e.GROUPS="groups",e.ITEMS="items"}(In||(In={}));const Rn={items:"Individual Items Configuration",groups:"Groups Configuration"},En={items:"Select an item",groups:"Select a group"},Dn={groups:"A group entry applies to all panels in the group.",items:"If a panel is included in a group with a visibility setting, the individual panel setting will be ignored in favor of the group setting."};let Ln=class extends si{constructor(){super(Se.VISIBILITY),this.flattened=!1,this._selectedSection=Ee.HIDDEN_ITEMS,window.SoPanelVisibility=this}updated(e){e.has("_selectedSection")&&this._selectedSection===Ee.HIDDEN_ITEMS&&this._changeSelectorGridStyle()}async _changeSelectorGridStyle(){await new Promise(e=>setTimeout(e,50));const e=this.shadowRoot?.querySelector("ha-selector#selector-hidden_items")?.shadowRoot?.querySelector("ha-selector-select");e&&this._styleManager.addStyle($n,e.shadowRoot||e)}get _visibilityTemplatesData(){const e=this._sidebarConfig?.visibility_templates||{};return{items:[...Array.from(Object.entries(e?.items||{})).map(([e,t])=>({name:e,value:t}))],groups:[...Array.from(Object.entries(e?.groups||{})).map(([e,t])=>({name:e,value:t}))]}}render(){if(this.flattened)return n`
        <section class="visibility-section">
          <div class="section-heading">
            <h2>Hidden items</h2>
            <p>Remove items from the sidebar without changing their layout.</p>
          </div>
          ${this._renderHiddenItems()}
        </section>
        <section class="visibility-section">
          <div class="section-heading">
            <h2>Conditional visibility</h2>
            <p>Use templates when an item or an entire group should only appear in certain conditions.</p>
          </div>
          ${this._renderVisibilityTemplates()}
        </section>
      `;const e=De.map(e=>({value:e,label:Me[e]})),t=n` <ha-control-select
      .value=${this._selectedSection}
      .options=${e}
      @value-changed=${e=>{this._selectedSection=e.detail.value}}
    ></ha-control-select>`,i={[Ee.HIDDEN_ITEMS]:this._renderHiddenItems(),[Ee.VISIBILITY_TEMPLATES]:this._renderVisibilityTemplates()};return n`
      ${t}
      <div class="config-content">${i[this._selectedSection]}</div>
    `}_renderHiddenItems(){const e=this._sidebarConfig?.hidden_items||[],t=this._panelsWithoutNewItems,i=this._computeSelectorOptions(t,"list",!1,!1),s=Object.entries(e).map(([,e])=>e);return this.flattened?this._createHaSelector(i,s,"hidden_items"):n` <div class="items-container" style="flex: none">
      <div class="header-row flex-icon"><span>HIDDEN ITEMS</span></div>
      ${this._createHaSelector(i,s,"hidden_items")} ${this._renderSpacerDiv()}
    </div>`}_renderVisibilityTemplates(){const e=this._visibilityTemplatesData;return n`
      ${Object.values(In).map(t=>{const i=this._computeOptionsSelector(t),s=e[t];return this._renderTemplateConfig(t,this._createHaSelectorObject(i,s,t))})}
    `}_renderTemplateConfig(e,t){if(this.flattened)return n`<div class="template-section"><h3>${e===In.ITEMS?"Items":"Groups"}</h3>${t}</div>`;return $({options:{header:Rn[e],noStyle:!0,expanded:!0},content:t})}_createHaSelectorObject(e,t,i,s){const o={object:{label_field:"name",description_field:"value",multiple:!0,fields:{name:{label:En[i]||"Name",selector:e,required:!1},value:{label:"Visibility Template",selector:{template:{preview:!0}},required:!1}}}};return n`<ha-selector
      .hass=${this.hass}
      .value=${t}
      .selector=${o}
      .required=${!1}
      .key=${i}
      .subKey=${s}
      .label=${Dn[i]||""}
      id=${p(void 0!==i?`selector-${i}`:void 0)}
      @value-changed=${this._valueChanged}
    ></ha-selector>`}_valueChanged(e){e.stopPropagation();const t=e.target?.key,i=e.detail.value,s=Array.isArray(i)?i.reduce((e,t)=>(t.name&&(e[t.name]=t.value),e),{}):{};this._sidebarConfig={...this._sidebarConfig,visibility_templates:{...this._sidebarConfig.visibility_templates,[t||""]:s}},g(this,"sidebar-config-changed",{config:this._sidebarConfig})}_computeOptionsSelector(e){const t=Object.keys(this._sidebarConfig?.custom_groups||{})||[],{groups:i={},items:s={}}=k(this._sidebarConfig?.visibility_templates||{},["groups","items"]),n=(e===In.GROUPS?t.filter(e=>"uncategorized_items"!==e):this._panelsWithoutNewItems).map(e=>({value:e,label:this._utils.PANEL.getPanelTitleFromUrlPath(this.hass,e)||e})),o=e===In.GROUPS?Object.keys(i):Object.keys(s);return{select:{multiple:!1,custom_value:!1,mode:"dropdown",options:n.filter(e=>!o.includes(e.value)),sort:!0,required:!1}}}_handleSelectorChange(e){e.stopPropagation();const{key:t,subKey:i}=e.target,s=e.detail.value;if("hidden_items"===t){this._updateInitPanels(s);const e=this._utils.CONFIG.validateConfig(this._sidebarConfig,s);return void this._configChanged({...e})}}_updateInitPanels(e){const t=this._dialog._initCombiPanels;let i=[...this._dialog._initPanelOrder||[]];i=t.filter(t=>!e.includes(t)),this._dialog._initPanelOrder=i}static get styles(){return[super.styles,l`
        :host([flattened]) {
          display: grid;
          gap: 28px;
        }
        .visibility-section {
          display: grid;
          gap: 16px;
        }
        .visibility-section + .visibility-section {
          border-block-start: 1px solid var(--divider-color);
          padding-block-start: 22px;
        }
        .section-heading h2,
        .section-heading p,
        .template-section h3 {
          margin: 0;
        }
        .section-heading h2 {
          font-size: 1.05rem;
        }
        .section-heading p {
          color: var(--secondary-text-color);
          font-size: .9rem;
          line-height: 1.4;
          margin-top: 4px;
        }
        .template-section {
          display: grid;
          gap: 10px;
        }
        .template-section + .template-section {
          margin-top: 8px;
        }
        .template-section h3 {
          font-size: .95rem;
        }
      `]}};h([c({attribute:!1})],Ln.prototype,"_sidebarConfig",void 0),h([c({type:Boolean,reflect:!0})],Ln.prototype,"flattened",void 0),h([b()],Ln.prototype,"_selectedSection",void 0),Ln=h([_("so-panel-visibility")],Ln);let Bn=[],Nn=[];function zn(e){if(e<768)return!1;for(let t=0,i=Bn.length;;){let s=t+i>>1;if(e<Bn[s])i=s;else{if(!(e>=Nn[s]))return!0;t=s+1}if(t==i)return!1}}function Hn(e){return e>=127462&&e<=127487}(()=>{let e="lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map(e=>e?parseInt(e,36):1);for(let t=0,i=0;t<e.length;t++)(t%2?Nn:Bn).push(i+=e[t])})();const Vn=8205;function Gn(e,t,i=!0,s=!0){return(i?Un:Wn)(e,t,s)}function Un(e,t,i){if(t==e.length)return t;t&&Fn(e.charCodeAt(t))&&qn(e.charCodeAt(t-1))&&t--;let s=jn(e,t);for(t+=Qn(s);t<e.length;){let n=jn(e,t);if(s==Vn||n==Vn||i&&zn(n))t+=Qn(n),s=n;else{if(!Hn(n))break;{let i=0,s=t-2;for(;s>=0&&Hn(jn(e,s));)i++,s-=2;if(i%2==0)break;t+=2}}}return t}function Wn(e,t,i){for(;t>1;){let s=Un(e,t-2,i);if(s<t)return s;t--}return 0}function jn(e,t){let i=e.charCodeAt(t);if(!qn(i)||t+1==e.length)return i;let s=e.charCodeAt(t+1);return Fn(s)?s-56320+(i-55296<<10)+65536:i}function Fn(e){return e>=56320&&e<57344}function qn(e){return e>=55296&&e<56320}function Qn(e){return e<65536?1:2}class Yn{lineAt(e){if(e<0||e>this.length)throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);return this.lineInner(e,!1,1,0)}line(e){if(e<1||e>this.lines)throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);return this.lineInner(e,!0,1,0)}replace(e,t,i){[e,t]=oo(this,e,t);let s=[];return this.decompose(0,e,s,2),i.length&&i.decompose(0,i.length,s,3),this.decompose(t,this.length,s,1),Kn.from(s,this.length-(t-e)+i.length)}append(e){return this.replace(this.length,this.length,e)}slice(e,t=this.length){[e,t]=oo(this,e,t);let i=[];return this.decompose(e,t,i,0),Kn.from(i,t-e)}eq(e){if(e==this)return!0;if(e.length!=this.length||e.lines!=this.lines)return!1;let t=this.scanIdentical(e,1),i=this.length-this.scanIdentical(e,-1),s=new to(this),n=new to(e);for(let e=t,o=t;;){if(s.next(e),n.next(e),e=0,s.lineBreak!=n.lineBreak||s.done!=n.done||s.value!=n.value)return!1;if(o+=s.value.length,s.done||o>=i)return!0}}iter(e=1){return new to(this,e)}iterRange(e,t=this.length){return new io(this,e,t)}iterLines(e,t){let i;if(null==e)i=this.iter();else{null==t&&(t=this.lines+1);let s=this.line(e).from;i=this.iterRange(s,Math.max(s,t==this.lines+1?this.length:t<=1?0:this.line(t-1).to))}return new so(i)}toString(){return this.sliceString(0)}toJSON(){let e=[];return this.flatten(e),e}constructor(){}static of(e){if(0==e.length)throw new RangeError("A document must have at least one line");return 1!=e.length||e[0]?e.length<=32?new Xn(e):Kn.from(Xn.split(e,[])):Yn.empty}}class Xn extends Yn{constructor(e,t=Zn(e)){super(),this.text=e,this.length=t}get lines(){return this.text.length}get children(){return null}lineInner(e,t,i,s){for(let n=0;;n++){let o=this.text[n],r=s+o.length;if((t?i:r)>=e)return new no(s,r,i,o);s=r+1,i++}}decompose(e,t,i,s){let n=e<=0&&t>=this.length?this:new Xn(eo(this.text,e,t),Math.min(t,this.length)-Math.max(0,e));if(1&s){let e=i.pop(),t=Jn(n.text,e.text.slice(),0,n.length);if(t.length<=32)i.push(new Xn(t,e.length+n.length));else{let e=t.length>>1;i.push(new Xn(t.slice(0,e)),new Xn(t.slice(e)))}}else i.push(n)}replace(e,t,i){if(!(i instanceof Xn))return super.replace(e,t,i);[e,t]=oo(this,e,t);let s=Jn(this.text,Jn(i.text,eo(this.text,0,e)),t),n=this.length+i.length-(t-e);return s.length<=32?new Xn(s,n):Kn.from(Xn.split(s,[]),n)}sliceString(e,t=this.length,i="\n"){[e,t]=oo(this,e,t);let s="";for(let n=0,o=0;n<=t&&o<this.text.length;o++){let r=this.text[o],a=n+r.length;n>e&&o&&(s+=i),e<a&&t>n&&(s+=r.slice(Math.max(0,e-n),t-n)),n=a+1}return s}flatten(e){for(let t of this.text)e.push(t)}scanIdentical(){return 0}static split(e,t){let i=[],s=-1;for(let n of e)i.push(n),s+=n.length+1,32==i.length&&(t.push(new Xn(i,s)),i=[],s=-1);return s>-1&&t.push(new Xn(i,s)),t}}class Kn extends Yn{constructor(e,t){super(),this.children=e,this.length=t,this.lines=0;for(let t of e)this.lines+=t.lines}lineInner(e,t,i,s){for(let n=0;;n++){let o=this.children[n],r=s+o.length,a=i+o.lines-1;if((t?a:r)>=e)return o.lineInner(e,t,i,s);s=r+1,i=a+1}}decompose(e,t,i,s){for(let n=0,o=0;o<=t&&n<this.children.length;n++){let r=this.children[n],a=o+r.length;if(e<=a&&t>=o){let n=s&((o<=e?1:0)|(a>=t?2:0));o>=e&&a<=t&&!n?i.push(r):r.decompose(e-o,t-o,i,n)}o=a+1}}replace(e,t,i){if([e,t]=oo(this,e,t),i.lines<this.lines)for(let s=0,n=0;s<this.children.length;s++){let o=this.children[s],r=n+o.length;if(e>=n&&t<=r){let a=o.replace(e-n,t-n,i),l=this.lines-o.lines+a.lines;if(a.lines<l>>4&&a.lines>l>>6){let n=this.children.slice();return n[s]=a,new Kn(n,this.length-(t-e)+i.length)}return super.replace(n,r,a)}n=r+1}return super.replace(e,t,i)}sliceString(e,t=this.length,i="\n"){[e,t]=oo(this,e,t);let s="";for(let n=0,o=0;n<this.children.length&&o<=t;n++){let r=this.children[n],a=o+r.length;o>e&&n&&(s+=i),e<a&&t>o&&(s+=r.sliceString(e-o,t-o,i)),o=a+1}return s}flatten(e){for(let t of this.children)t.flatten(e)}scanIdentical(e,t){if(!(e instanceof Kn))return 0;let i=0,[s,n,o,r]=t>0?[0,0,this.children.length,e.children.length]:[this.children.length-1,e.children.length-1,-1,-1];for(;;s+=t,n+=t){if(s==o||n==r)return i;let a=this.children[s],l=e.children[n];if(a!=l)return i+a.scanIdentical(l,t);i+=a.length+1}}static from(e,t=e.reduce((e,t)=>e+t.length+1,-1)){let i=0;for(let t of e)i+=t.lines;if(i<32){let i=[];for(let t of e)t.flatten(i);return new Xn(i,t)}let s=Math.max(32,i>>5),n=s<<1,o=s>>1,r=[],a=0,l=-1,h=[];function c(e){let t;if(e.lines>n&&e instanceof Kn)for(let t of e.children)c(t);else e.lines>o&&(a>o||!a)?(d(),r.push(e)):e instanceof Xn&&a&&(t=h[h.length-1])instanceof Xn&&e.lines+t.lines<=32?(a+=e.lines,l+=e.length+1,h[h.length-1]=new Xn(t.text.concat(e.text),t.length+1+e.length)):(a+e.lines>s&&d(),a+=e.lines,l+=e.length+1,h.push(e))}function d(){0!=a&&(r.push(1==h.length?h[0]:Kn.from(h,l)),l=-1,a=h.length=0)}for(let t of e)c(t);return d(),1==r.length?r[0]:new Kn(r,t)}}function Zn(e){let t=-1;for(let i of e)t+=i.length+1;return t}function Jn(e,t,i=0,s=1e9){for(let n=0,o=0,r=!0;o<e.length&&n<=s;o++){let a=e[o],l=n+a.length;l>=i&&(l>s&&(a=a.slice(0,s-n)),n<i&&(a=a.slice(i-n)),r?(t[t.length-1]+=a,r=!1):t.push(a)),n=l+1}return t}function eo(e,t,i){return Jn(e,[""],t,i)}Yn.empty=new Xn([""],0);class to{constructor(e,t=1){this.dir=t,this.done=!1,this.lineBreak=!1,this.value="",this.nodes=[e],this.offsets=[t>0?1:(e instanceof Xn?e.text.length:e.children.length)<<1]}nextInner(e,t){for(this.done=this.lineBreak=!1;;){let i=this.nodes.length-1,s=this.nodes[i],n=this.offsets[i],o=n>>1,r=s instanceof Xn?s.text.length:s.children.length;if(o==(t>0?r:0)){if(0==i)return this.done=!0,this.value="",this;t>0&&this.offsets[i-1]++,this.nodes.pop(),this.offsets.pop()}else if((1&n)==(t>0?0:1)){if(this.offsets[i]+=t,0==e)return this.lineBreak=!0,this.value="\n",this;e--}else if(s instanceof Xn){let n=s.text[o+(t<0?-1:0)];if(this.offsets[i]+=t,n.length>Math.max(0,e))return this.value=0==e?n:t>0?n.slice(e):n.slice(0,n.length-e),this;e-=n.length}else{let n=s.children[o+(t<0?-1:0)];e>n.length?(e-=n.length,this.offsets[i]+=t):(t<0&&this.offsets[i]--,this.nodes.push(n),this.offsets.push(t>0?1:(n instanceof Xn?n.text.length:n.children.length)<<1))}}}next(e=0){return e<0&&(this.nextInner(-e,-this.dir),e=this.value.length),this.nextInner(e,this.dir)}}class io{constructor(e,t,i){this.value="",this.done=!1,this.cursor=new to(e,t>i?-1:1),this.pos=t>i?e.length:0,this.from=Math.min(t,i),this.to=Math.max(t,i)}nextInner(e,t){if(t<0?this.pos<=this.from:this.pos>=this.to)return this.value="",this.done=!0,this;e+=Math.max(0,t<0?this.pos-this.to:this.from-this.pos);let i=t<0?this.pos-this.from:this.to-this.pos;e>i&&(e=i),i-=e;let{value:s}=this.cursor.next(e);return this.pos+=(s.length+e)*t,this.value=s.length<=i?s:t<0?s.slice(s.length-i):s.slice(0,i),this.done=!this.value,this}next(e=0){return e<0?e=Math.max(e,this.from-this.pos):e>0&&(e=Math.min(e,this.to-this.pos)),this.nextInner(e,this.cursor.dir)}get lineBreak(){return this.cursor.lineBreak&&""!=this.value}}class so{constructor(e){this.inner=e,this.afterBreak=!0,this.value="",this.done=!1}next(e=0){let{done:t,lineBreak:i,value:s}=this.inner.next(e);return t&&this.afterBreak?(this.value="",this.afterBreak=!1):t?(this.done=!0,this.value=""):i?this.afterBreak?this.value="":(this.afterBreak=!0,this.next()):(this.value=s,this.afterBreak=!1),this}get lineBreak(){return!1}}"undefined"!=typeof Symbol&&(Yn.prototype[Symbol.iterator]=function(){return this.iter()},to.prototype[Symbol.iterator]=io.prototype[Symbol.iterator]=so.prototype[Symbol.iterator]=function(){return this});class no{constructor(e,t,i,s){this.from=e,this.to=t,this.number=i,this.text=s}get length(){return this.to-this.from}}function oo(e,t,i){return[t=Math.max(0,Math.min(e.length,t)),Math.max(t,Math.min(e.length,i))]}function ro(e,t,i=!0,s=!0){return Gn(e,t,i,s)}function ao(e){return e>=56320&&e<57344}function lo(e){return e>=55296&&e<56320}function ho(e,t){let i=e.charCodeAt(t);if(!lo(i)||t+1==e.length)return i;let s=e.charCodeAt(t+1);return ao(s)?s-56320+(i-55296<<10)+65536:i}function co(e){return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(55296+(e>>10),56320+(1023&e)))}function uo(e){return e<65536?1:2}const fo=/\r\n?|\n/;var po=function(e){return e[e.Simple=0]="Simple",e[e.TrackDel=1]="TrackDel",e[e.TrackBefore=2]="TrackBefore",e[e.TrackAfter=3]="TrackAfter",e}(po||(po={}));class go{constructor(e){this.sections=e}get length(){let e=0;for(let t=0;t<this.sections.length;t+=2)e+=this.sections[t];return e}get newLength(){let e=0;for(let t=0;t<this.sections.length;t+=2){let i=this.sections[t+1];e+=i<0?this.sections[t]:i}return e}get empty(){return 0==this.sections.length||2==this.sections.length&&this.sections[1]<0}iterGaps(e){for(let t=0,i=0,s=0;t<this.sections.length;){let n=this.sections[t++],o=this.sections[t++];o<0?(e(i,s,n),s+=n):s+=o,i+=n}}iterChangedRanges(e,t=!1){_o(this,e,t)}get invertedDesc(){let e=[];for(let t=0;t<this.sections.length;){let i=this.sections[t++],s=this.sections[t++];s<0?e.push(i,s):e.push(s,i)}return new go(e)}composeDesc(e){return this.empty?e:e.empty?this:yo(this,e)}mapDesc(e,t=!1){return e.empty?this:wo(this,e,t)}mapPos(e,t=-1,i=po.Simple){let s=0,n=0;for(let o=0;o<this.sections.length;){let r=this.sections[o++],a=this.sections[o++],l=s+r;if(a<0){if(l>e)return n+(e-s);n+=r}else{if(i!=po.Simple&&l>=e&&(i==po.TrackDel&&s<e&&l>e||i==po.TrackBefore&&s<e||i==po.TrackAfter&&l>e))return null;if(l>e||l==e&&t<0&&!r)return e==s||t<0?n:n+a;n+=a}s=l}if(e>s)throw new RangeError(`Position ${e} is out of range for changeset of length ${s}`);return n}touchesRange(e,t=e){for(let i=0,s=0;i<this.sections.length&&s<=t;){let n=s+this.sections[i++];if(this.sections[i++]>=0&&s<=t&&n>=e)return!(s<e&&n>t)||"cover";s=n}return!1}toString(){let e="";for(let t=0;t<this.sections.length;){let i=this.sections[t++],s=this.sections[t++];e+=(e?" ":"")+i+(s>=0?":"+s:"")}return e}toJSON(){return this.sections}static fromJSON(e){if(!Array.isArray(e)||e.length%2||e.some(e=>"number"!=typeof e))throw new RangeError("Invalid JSON representation of ChangeDesc");return new go(e)}static create(e){return new go(e)}}class mo extends go{constructor(e,t){super(e),this.inserted=t}apply(e){if(this.length!=e.length)throw new RangeError("Applying change set to a document with the wrong length");return _o(this,(t,i,s,n,o)=>e=e.replace(s,s+(i-t),o),!1),e}mapDesc(e,t=!1){return wo(this,e,t,!0)}invert(e){let t=this.sections.slice(),i=[];for(let s=0,n=0;s<t.length;s+=2){let o=t[s],r=t[s+1];if(r>=0){t[s]=r,t[s+1]=o;let a=s>>1;for(;i.length<a;)i.push(Yn.empty);i.push(o?e.slice(n,n+o):Yn.empty)}n+=o}return new mo(t,i)}compose(e){return this.empty?e:e.empty?this:yo(this,e,!0)}map(e,t=!1){return e.empty?this:wo(this,e,t,!0)}iterChanges(e,t=!1){_o(this,e,t)}get desc(){return go.create(this.sections)}filter(e){let t=[],i=[],s=[],n=new xo(this);e:for(let o=0,r=0;;){let a=o==e.length?1e9:e[o++];for(;r<a||r==a&&0==n.len;){if(n.done)break e;let e=Math.min(n.len,a-r);vo(s,e,-1);let o=-1==n.ins?-1:0==n.off?n.ins:0;vo(t,e,o),o>0&&bo(i,t,n.text),n.forward(e),r+=e}let l=e[o++];for(;r<l;){if(n.done)break e;let e=Math.min(n.len,l-r);vo(t,e,-1),vo(s,e,-1==n.ins?-1:0==n.off?n.ins:0),n.forward(e),r+=e}}return{changes:new mo(t,i),filtered:go.create(s)}}toJSON(){let e=[];for(let t=0;t<this.sections.length;t+=2){let i=this.sections[t],s=this.sections[t+1];s<0?e.push(i):0==s?e.push([i]):e.push([i].concat(this.inserted[t>>1].toJSON()))}return e}static of(e,t,i){let s=[],n=[],o=0,r=null;function a(e=!1){if(!e&&!s.length)return;o<t&&vo(s,t-o,-1);let i=new mo(s,n);r=r?r.compose(i.map(r)):i,s=[],n=[],o=0}return function e(l){if(Array.isArray(l))for(let t of l)e(t);else if(l instanceof mo){if(l.length!=t)throw new RangeError(`Mismatched change set length (got ${l.length}, expected ${t})`);a(),r=r?r.compose(l.map(r)):l}else{let{from:e,to:r=e,insert:h}=l;if(e>r||e<0||r>t)throw new RangeError(`Invalid change range ${e} to ${r} (in doc of length ${t})`);let c=h?"string"==typeof h?Yn.of(h.split(i||fo)):h:Yn.empty,d=c.length;if(e==r&&0==d)return;e<o&&a(),e>o&&vo(s,e-o,-1),vo(s,r-e,d),bo(n,s,c),o=r}}(e),a(!r),r}static empty(e){return new mo(e?[e,-1]:[],[])}static fromJSON(e){if(!Array.isArray(e))throw new RangeError("Invalid JSON representation of ChangeSet");let t=[],i=[];for(let s=0;s<e.length;s++){let n=e[s];if("number"==typeof n)t.push(n,-1);else{if(!Array.isArray(n)||"number"!=typeof n[0]||n.some((e,t)=>t&&"string"!=typeof e))throw new RangeError("Invalid JSON representation of ChangeSet");if(1==n.length)t.push(n[0],0);else{for(;i.length<s;)i.push(Yn.empty);i[s]=Yn.of(n.slice(1)),t.push(n[0],i[s].length)}}}return new mo(t,i)}static createSet(e,t){return new mo(e,t)}}function vo(e,t,i,s=!1){if(0==t&&i<=0)return;let n=e.length-2;n>=0&&i<=0&&i==e[n+1]?e[n]+=t:n>=0&&0==t&&0==e[n]?e[n+1]+=i:s?(e[n]+=t,e[n+1]+=i):e.push(t,i)}function bo(e,t,i){if(0==i.length)return;let s=t.length-2>>1;if(s<e.length)e[e.length-1]=e[e.length-1].append(i);else{for(;e.length<s;)e.push(Yn.empty);e.push(i)}}function _o(e,t,i){let s=e.inserted;for(let n=0,o=0,r=0;r<e.sections.length;){let a=e.sections[r++],l=e.sections[r++];if(l<0)n+=a,o+=a;else{let h=n,c=o,d=Yn.empty;for(;h+=a,c+=l,l&&s&&(d=d.append(s[r-2>>1])),!(i||r==e.sections.length||e.sections[r+1]<0);)a=e.sections[r++],l=e.sections[r++];t(n,h,o,c,d),n=h,o=c}}}function wo(e,t,i,s=!1){let n=[],o=s?[]:null,r=new xo(e),a=new xo(t);for(let e=-1;;){if(r.done&&a.len||a.done&&r.len)throw new Error("Mismatched change set lengths");if(-1==r.ins&&-1==a.ins){let e=Math.min(r.len,a.len);vo(n,e,-1),r.forward(e),a.forward(e)}else if(a.ins>=0&&(r.ins<0||e==r.i||0==r.off&&(a.len<r.len||a.len==r.len&&!i))){let t=a.len;for(vo(n,a.ins,-1);t;){let i=Math.min(r.len,t);r.ins>=0&&e<r.i&&r.len<=i&&(vo(n,0,r.ins),o&&bo(o,n,r.text),e=r.i),r.forward(i),t-=i}a.next()}else{if(!(r.ins>=0)){if(r.done&&a.done)return o?mo.createSet(n,o):go.create(n);throw new Error("Mismatched change set lengths")}{let t=0,i=r.len;for(;i;)if(-1==a.ins){let e=Math.min(i,a.len);t+=e,i-=e,a.forward(e)}else{if(!(0==a.ins&&a.len<i))break;i-=a.len,a.next()}vo(n,t,e<r.i?r.ins:0),o&&e<r.i&&bo(o,n,r.text),e=r.i,r.forward(r.len-i)}}}}function yo(e,t,i=!1){let s=[],n=i?[]:null,o=new xo(e),r=new xo(t);for(let e=!1;;){if(o.done&&r.done)return n?mo.createSet(s,n):go.create(s);if(0==o.ins)vo(s,o.len,0,e),o.next();else if(0!=r.len||r.done){if(o.done||r.done)throw new Error("Mismatched change set lengths");{let t=Math.min(o.len2,r.len),i=s.length;if(-1==o.ins){let i=-1==r.ins?-1:r.off?0:r.ins;vo(s,t,i,e),n&&i&&bo(n,s,r.text)}else-1==r.ins?(vo(s,o.off?0:o.len,t,e),n&&bo(n,s,o.textBit(t))):(vo(s,o.off?0:o.len,r.off?0:r.ins,e),n&&!r.off&&bo(n,s,r.text));e=(o.ins>t||r.ins>=0&&r.len>t)&&(e||s.length>i),o.forward2(t),r.forward(t)}}else vo(s,0,r.ins,e),n&&bo(n,s,r.text),r.next()}}class xo{constructor(e){this.set=e,this.i=0,this.next()}next(){let{sections:e}=this.set;this.i<e.length?(this.len=e[this.i++],this.ins=e[this.i++]):(this.len=0,this.ins=-2),this.off=0}get done(){return-2==this.ins}get len2(){return this.ins<0?this.len:this.ins}get text(){let{inserted:e}=this.set,t=this.i-2>>1;return t>=e.length?Yn.empty:e[t]}textBit(e){let{inserted:t}=this.set,i=this.i-2>>1;return i>=t.length&&!e?Yn.empty:t[i].slice(this.off,null==e?void 0:this.off+e)}forward(e){e==this.len?this.next():(this.len-=e,this.off+=e)}forward2(e){-1==this.ins?this.forward(e):e==this.ins?this.next():(this.ins-=e,this.off+=e)}}class ko{constructor(e,t,i,s){this.from=e,this.to=t,this.flags=i,this.goalColumn=s}get anchor(){return 32&this.flags?this.to:this.from}get head(){return 32&this.flags?this.from:this.to}get empty(){return this.from==this.to}get assoc(){return 8&this.flags?-1:16&this.flags?1:0}get undirectional(){return(64&this.flags)>0}get bidiLevel(){let e=7&this.flags;return 7==e?null:e}map(e,t=-1){let i,s;return this.empty?i=s=e.mapPos(this.from,t):(i=e.mapPos(this.from,1),s=e.mapPos(this.to,-1)),i==this.from&&s==this.to?this:new ko(i,s,this.flags,this.goalColumn)}extend(e,t=e,i=0){if(e<=this.anchor&&t>=this.anchor)return Co.range(e,t,void 0,void 0,i);let s=Math.abs(e-this.anchor)>Math.abs(t-this.anchor)?e:t;return Co.range(this.anchor,s,void 0,void 0,i)}eq(e,t=!1){return!(this.anchor!=e.anchor||this.head!=e.head||this.goalColumn!=e.goalColumn||t&&this.empty&&this.assoc!=e.assoc)}toJSON(){return{anchor:this.anchor,head:this.head}}static fromJSON(e){if(!e||"number"!=typeof e.anchor||"number"!=typeof e.head)throw new RangeError("Invalid JSON representation for SelectionRange");return Co.range(e.anchor,e.head)}static create(e,t,i,s){return new ko(e,t,i,s)}}class Co{constructor(e,t){this.ranges=e,this.mainIndex=t}map(e,t=-1){return e.empty?this:Co.create(this.ranges.map(i=>i.map(e,t)),this.mainIndex)}eq(e,t=!1){if(this.ranges.length!=e.ranges.length||this.mainIndex!=e.mainIndex)return!1;for(let i=0;i<this.ranges.length;i++)if(!this.ranges[i].eq(e.ranges[i],t))return!1;return!0}get main(){return this.ranges[this.mainIndex]}asSingle(){return 1==this.ranges.length?this:new Co([this.main],0)}addRange(e,t=!0){return Co.create([e].concat(this.ranges),t?0:this.mainIndex+1)}replaceRange(e,t=this.mainIndex){let i=this.ranges.slice();return i[t]=e,Co.create(i,this.mainIndex)}toJSON(){return{ranges:this.ranges.map(e=>e.toJSON()),main:this.mainIndex}}static fromJSON(e){if(!e||!Array.isArray(e.ranges)||"number"!=typeof e.main||e.main>=e.ranges.length)throw new RangeError("Invalid JSON representation for EditorSelection");return new Co(e.ranges.map(e=>ko.fromJSON(e)),e.main)}static single(e,t=e){return new Co([Co.range(e,t)],0)}static create(e,t=0){if(0==e.length)throw new RangeError("A selection needs at least one range");for(let i=0,s=0;s<e.length;s++){let n=e[s];if(n.empty?n.from<=i:n.from<i)return Co.normalized(e.slice(),t);i=n.to}return new Co(e,t)}static cursor(e,t=0,i,s){return ko.create(e,e,(0==t?0:t<0?8:16)|(null==i?7:Math.min(6,i)),s)}static range(e,t,i,s,n){let o=null==s?7:Math.min(6,s);return n||e==t||(n=t<e?1:-1),n&&(o|=n<0?8:16),t<e?ko.create(t,e,32|o,i):ko.create(e,t,o,i)}static undirectionalRange(e,t){return ko.create(e,t,64,void 0)}static normalized(e,t=0){let i=e[t];e.sort((e,t)=>e.from-t.from),t=e.indexOf(i);for(let i=1;i<e.length;i++){let s=e[i],n=e[i-1];if(s.empty?s.from<=n.to:s.from<n.to){let o=n.from,r=Math.max(s.to,n.to);i<=t&&t--,e.splice(--i,2,s.anchor>s.head?Co.range(r,o):Co.range(o,r))}}return new Co(e,t)}}function So(e,t){for(let i of e.ranges)if(i.to>t)throw new RangeError("Selection points outside of document")}let Oo=0;class Ao{constructor(e,t,i,s,n){this.combine=e,this.compareInput=t,this.compare=i,this.isStatic=s,this.id=Oo++,this.default=e([]),this.extensions="function"==typeof n?n(this):n}get reader(){return this}static define(e={}){return new Ao(e.combine||(e=>e),e.compareInput||((e,t)=>e===t),e.compare||(e.combine?(e,t)=>e===t:Po),!!e.static,e.enables)}of(e){return new To([],this,0,e)}compute(e,t){if(this.isStatic)throw new Error("Can't compute a static facet");return new To(e,this,1,t)}computeN(e,t){if(this.isStatic)throw new Error("Can't compute a static facet");return new To(e,this,2,t)}from(e,t){return t||(t=e=>e),this.compute([e],i=>t(i.field(e)))}}function Po(e,t){return e==t||e.length==t.length&&e.every((e,i)=>e===t[i])}class To{constructor(e,t,i,s){this.dependencies=e,this.facet=t,this.type=i,this.value=s,this.id=Oo++}dynamicSlot(e){var t;let i=this.value,s=this.facet.compareInput,n=this.id,o=e[n]>>1,r=2==this.type,a=!1,l=!1,h=[];for(let i of this.dependencies)"doc"==i?a=!0:"selection"==i?l=!0:1&(null!==(t=e[i.id])&&void 0!==t?t:1)||h.push(e[i.id]);return{create:e=>(e.values[o]=i(e),1),update(e,t){if(a&&t.docChanged||l&&(t.docChanged||t.selection)||$o(e,h)){let t=i(e);if(r?!Mo(t,e.values[o],s):!s(t,e.values[o]))return e.values[o]=t,1}return 0},reconfigure:(e,t)=>{let a,l=t.config.address[n];if(null!=l){let n=Wo(t,l);if(this.dependencies.every(i=>i instanceof Ao?t.facet(i)===e.facet(i):!(i instanceof Eo)||t.field(i,!1)==e.field(i,!1))||(r?Mo(a=i(e),n,s):s(a=i(e),n)))return e.values[o]=n,0}else a=i(e);return e.values[o]=a,1}}}get extension(){return this}}function Mo(e,t,i){if(e.length!=t.length)return!1;for(let s=0;s<e.length;s++)if(!i(e[s],t[s]))return!1;return!0}function $o(e,t){let i=!1;for(let s of t)1&Uo(e,s)&&(i=!0);return i}function Io(e,t,i){let s=i.map(t=>e[t.id]),n=i.map(e=>e.type),o=s.filter(e=>!(1&e)),r=e[t.id]>>1;function a(e){let i=[];for(let t=0;t<s.length;t++){let o=Wo(e,s[t]);if(2==n[t])for(let e of o)i.push(e);else i.push(o)}return t.combine(i)}return{create(e){for(let t of s)Uo(e,t);return e.values[r]=a(e),1},update(e,i){if(!$o(e,o))return 0;let s=a(e);return t.compare(s,e.values[r])?0:(e.values[r]=s,1)},reconfigure(e,n){let o=$o(e,s),l=n.config.facets[t.id],h=n.facet(t);if(l&&!o&&Po(i,l))return e.values[r]=h,0;let c=a(e);return t.compare(c,h)?(e.values[r]=h,0):(e.values[r]=c,1)}}}const Ro=Ao.define({static:!0});class Eo{constructor(e,t,i,s,n){this.id=e,this.createF=t,this.updateF=i,this.compareF=s,this.spec=n,this.provides=void 0}static define(e){let t=new Eo(Oo++,e.create,e.update,e.compare||((e,t)=>e===t),e);return e.provide&&(t.provides=e.provide(t)),t}create(e){let t=e.facet(Ro).find(e=>e.field==this);return((null==t?void 0:t.create)||this.createF)(e)}slot(e){let t=e[this.id]>>1;return{create:e=>(e.values[t]=this.create(e),1),update:(e,i)=>{let s=e.values[t],n=this.updateF(s,i);return this.compareF(s,n)?0:(e.values[t]=n,1)},reconfigure:(e,i)=>{let s,n=e.facet(Ro),o=i.facet(Ro);return(s=n.find(e=>e.field==this))&&s!=o.find(e=>e.field==this)?(e.values[t]=s.create(e),1):null!=i.config.address[this.id]?(e.values[t]=i.field(this),0):(e.values[t]=this.create(e),1)}}}init(e){return[this,Ro.of({field:this,create:e})]}get extension(){return this}}const Do={lowest:4,low:3,default:2,high:1,highest:0};function Lo(e){return t=>new No(t,e)}const Bo={highest:Lo(Do.highest),high:Lo(Do.high),default:Lo(Do.default),low:Lo(Do.low),lowest:Lo(Do.lowest)};class No{constructor(e,t){this.inner=e,this.prec=t}get extension(){return this}}class zo{of(e){return new Ho(this,e)}reconfigure(e){return zo.reconfigure.of({compartment:this,extension:e})}get(e){return e.config.compartments.get(this)}}class Ho{constructor(e,t){this.compartment=e,this.inner=t}get extension(){return this}}class Vo{constructor(e,t,i,s,n,o){for(this.base=e,this.compartments=t,this.dynamicSlots=i,this.address=s,this.staticValues=n,this.facets=o,this.statusTemplate=[];this.statusTemplate.length<i.length;)this.statusTemplate.push(0)}staticFacet(e){let t=this.address[e.id];return null==t?e.default:this.staticValues[t>>1]}static resolve(e,t,i){let s=[],n=Object.create(null),o=new Map;for(let i of Go(e,t,o))i instanceof Eo?s.push(i):(n[i.facet.id]||(n[i.facet.id]=[])).push(i);let r=Object.create(null),a=[],l=[];for(let e of s)r[e.id]=l.length<<1,l.push(t=>e.slot(t));let h=null==i?void 0:i.config.facets;for(let e in n){let t=n[e],s=t[0].facet,o=h&&h[e]||[];if(t.every(e=>0==e.type))if(r[s.id]=a.length<<1|1,Po(o,t))a.push(i.facet(s));else{let e=s.combine(t.map(e=>e.value));a.push(i&&s.compare(e,i.facet(s))?i.facet(s):e)}else{for(let e of t)0==e.type?(r[e.id]=a.length<<1|1,a.push(e.value)):(r[e.id]=l.length<<1,l.push(t=>e.dynamicSlot(t)));r[s.id]=l.length<<1,l.push(e=>Io(e,s,t))}}let c=l.map(e=>e(r));return new Vo(e,o,c,r,a,n)}}function Go(e,t,i){let s=[[],[],[],[],[]],n=new Map;return function e(o,r){let a=n.get(o);if(null!=a){if(a<=r)return;let e=s[a].indexOf(o);e>-1&&s[a].splice(e,1),o instanceof Ho&&i.delete(o.compartment)}if(n.set(o,r),Array.isArray(o))for(let t of o)e(t,r);else if(o instanceof Ho){if(i.has(o.compartment))throw new RangeError("Duplicate use of compartment in extensions");let s=t.get(o.compartment)||o.inner;i.set(o.compartment,s),e(s,r)}else if(o instanceof No)e(o.inner,o.prec);else if(o instanceof Eo)s[r].push(o),o.provides&&e(o.provides,r);else if(o instanceof To)s[r].push(o),o.facet.extensions&&e(o.facet.extensions,Do.default);else{let t=o.extension;if(!t)throw new Error(`Unrecognized extension value in extension set (${o}).`);if(t==o)throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);e(t,r)}}(e,Do.default),s.reduce((e,t)=>e.concat(t))}function Uo(e,t){if(1&t)return 2;let i=t>>1,s=e.status[i];if(4==s)throw new Error("Cyclic dependency between fields and/or facets");if(2&s)return s;e.status[i]=4;let n=e.computeSlot(e,e.config.dynamicSlots[i]);return e.status[i]=2|n}function Wo(e,t){return 1&t?e.config.staticValues[t>>1]:e.values[t>>1]}const jo=Ao.define(),Fo=Ao.define({combine:e=>e.some(e=>e),static:!0}),qo=Ao.define({combine:e=>e.length?e[0]:void 0,static:!0}),Qo=Ao.define(),Yo=Ao.define(),Xo=Ao.define(),Ko=Ao.define({combine:e=>!!e.length&&e[0]});class Zo{constructor(e,t){this.type=e,this.value=t}static define(){return new Jo}}class Jo{of(e){return new Zo(this,e)}}class er{constructor(e){this.map=e}of(e){return new tr(this,e)}}class tr{constructor(e,t){this.type=e,this.value=t}map(e){let t=this.type.map(this.value,e);return void 0===t?void 0:t==this.value?this:new tr(this.type,t)}is(e){return this.type==e}static define(e={}){return new er(e.map||(e=>e))}static mapEffects(e,t){if(!e.length)return e;let i=[];for(let s of e){let e=s.map(t);e&&i.push(e)}return i}}tr.reconfigure=tr.define(),tr.appendConfig=tr.define();class ir{constructor(e,t,i,s,n,o){this.startState=e,this.changes=t,this.selection=i,this.effects=s,this.annotations=n,this.scrollIntoView=o,this._doc=null,this._state=null,i&&So(i,t.newLength),n.some(e=>e.type==ir.time)||(this.annotations=n.concat(ir.time.of(Date.now())))}static create(e,t,i,s,n,o){return new ir(e,t,i,s,n,o)}get newDoc(){return this._doc||(this._doc=this.changes.apply(this.startState.doc))}get newSelection(){return this.selection||this.startState.selection.map(this.changes)}get state(){return this._state||this.startState.applyTransaction(this),this._state}annotation(e){for(let t of this.annotations)if(t.type==e)return t.value}get docChanged(){return!this.changes.empty}get reconfigured(){return this.startState.config!=this.state.config}isUserEvent(e){let t=this.annotation(ir.userEvent);return!(!t||!(t==e||t.length>e.length&&t.slice(0,e.length)==e&&"."==t[e.length]))}}function sr(e,t){let i=[];for(let s=0,n=0;;){let o,r;if(s<e.length&&(n==t.length||t[n]>=e[s]))o=e[s++],r=e[s++];else{if(!(n<t.length))return i;o=t[n++],r=t[n++]}!i.length||i[i.length-1]<o?i.push(o,r):i[i.length-1]<r&&(i[i.length-1]=r)}}function nr(e,t,i){var s;let n,o,r;return i?(n=t.changes,o=mo.empty(t.changes.length),r=e.changes.compose(t.changes)):(n=t.changes.map(e.changes),o=e.changes.mapDesc(t.changes,!0),r=e.changes.compose(n)),{changes:r,selection:t.selection?t.selection.map(o):null===(s=e.selection)||void 0===s?void 0:s.map(n),effects:tr.mapEffects(e.effects,n).concat(tr.mapEffects(t.effects,o)),annotations:e.annotations.length?e.annotations.concat(t.annotations):t.annotations,scrollIntoView:e.scrollIntoView||t.scrollIntoView}}function or(e,t,i){let s=t.selection,n=cr(t.annotations);return t.userEvent&&(n=n.concat(ir.userEvent.of(t.userEvent))),{changes:t.changes instanceof mo?t.changes:mo.of(t.changes||[],i,e.facet(qo)),selection:s&&(s instanceof Co?s:Co.single(s.anchor,s.head)),effects:cr(t.effects),annotations:n,scrollIntoView:!!t.scrollIntoView}}function rr(e,t,i){let s=or(e,t.length?t[0]:{},e.doc.length);t.length&&!1===t[0].filter&&(i=!1);for(let n=1;n<t.length;n++){!1===t[n].filter&&(i=!1);let o=!!t[n].sequential;s=nr(s,or(e,t[n],o?s.changes.newLength:e.doc.length),o)}let n=ir.create(e,s.changes,s.selection,s.effects,s.annotations,s.scrollIntoView);return lr(i?ar(n):n)}function ar(e){let t=e.startState,i=!0;for(let s of t.facet(Qo)){let t=s(e);if(!1===t){i=!1;break}Array.isArray(t)&&(i=!0===i?t:sr(i,t))}if(!0!==i){let s,n;if(!1===i)n=e.changes.invertedDesc,s=mo.empty(t.doc.length);else{let t=e.changes.filter(i);s=t.changes,n=t.filtered.mapDesc(t.changes).invertedDesc}e=ir.create(t,s,e.selection&&e.selection.map(n),tr.mapEffects(e.effects,n),e.annotations,e.scrollIntoView)}let s=t.facet(Yo);for(let i=s.length-1;i>=0;i--){let n=s[i](e);e=n instanceof ir?n:Array.isArray(n)&&1==n.length&&n[0]instanceof ir?n[0]:rr(t,cr(n),!1)}return e}function lr(e){let t=e.startState,i=t.facet(Xo),s=e;for(let n=i.length-1;n>=0;n--){let o=i[n](e);o&&Object.keys(o).length&&(s=nr(s,or(t,o,e.changes.newLength),!0))}return s==e?e:ir.create(t,e.changes,e.selection,s.effects,s.annotations,s.scrollIntoView)}ir.time=Zo.define(),ir.userEvent=Zo.define(),ir.addToHistory=Zo.define(),ir.remote=Zo.define();const hr=[];function cr(e){return null==e?hr:Array.isArray(e)?e:[e]}var dr=function(e){return e[e.Word=0]="Word",e[e.Space=1]="Space",e[e.Other=2]="Other",e}(dr||(dr={}));const ur=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;let fr;try{fr=new RegExp("[\\p{Alphabetic}\\p{Number}_]","u")}catch(Hi){}function pr(e){if(fr)return fr.test(e);for(let t=0;t<e.length;t++){let i=e[t];if(/\w/.test(i)||i>""&&(i.toUpperCase()!=i.toLowerCase()||ur.test(i)))return!0}return!1}function gr(e){return t=>{if(!/\S/.test(t))return dr.Space;if(pr(t))return dr.Word;for(let i=0;i<e.length;i++)if(t.indexOf(e[i])>-1)return dr.Word;return dr.Other}}class mr{constructor(e,t,i,s,n,o){this.config=e,this.doc=t,this.selection=i,this.values=s,this.status=e.statusTemplate.slice(),this.computeSlot=n,o&&(o._state=this);for(let e=0;e<this.config.dynamicSlots.length;e++)Uo(this,e<<1);this.computeSlot=null}field(e,t=!0){let i=this.config.address[e.id];if(null!=i)return Uo(this,i),Wo(this,i);if(t)throw new RangeError("Field is not present in this state")}update(...e){return rr(this,e,!0)}applyTransaction(e){let t,i=this.config,{base:s,compartments:n}=i;for(let t of e.effects)t.is(zo.reconfigure)?(i&&(n=new Map,i.compartments.forEach((e,t)=>n.set(t,e)),i=null),n.set(t.value.compartment,t.value.extension)):t.is(tr.reconfigure)?(i=null,s=t.value):t.is(tr.appendConfig)&&(i=null,s=cr(s).concat(t.value));if(i)t=e.startState.values.slice();else{i=Vo.resolve(s,n,this),t=new mr(i,this.doc,this.selection,i.dynamicSlots.map(()=>null),(e,t)=>t.reconfigure(e,this),null).values}let o=e.startState.facet(Fo)?e.newSelection:e.newSelection.asSingle();new mr(i,e.newDoc,o,t,(t,i)=>i.update(t,e),e)}replaceSelection(e){return"string"==typeof e&&(e=this.toText(e)),this.changeByRange(t=>({changes:{from:t.from,to:t.to,insert:e},range:Co.cursor(t.from+e.length)}))}changeByRange(e){let t=this.selection,i=e(t.ranges[0]),s=this.changes(i.changes),n=[i.range],o=cr(i.effects);for(let i=1;i<t.ranges.length;i++){let r=e(t.ranges[i]),a=this.changes(r.changes),l=a.map(s);for(let e=0;e<i;e++)n[e]=n[e].map(l);let h=s.mapDesc(a,!0);n.push(r.range.map(h)),s=s.compose(l),o=tr.mapEffects(o,l).concat(tr.mapEffects(cr(r.effects),h))}return{changes:s,selection:Co.create(n,t.mainIndex),effects:o}}changes(e=[]){return e instanceof mo?e:mo.of(e,this.doc.length,this.facet(mr.lineSeparator))}toText(e){return Yn.of(e.split(this.facet(mr.lineSeparator)||fo))}sliceDoc(e=0,t=this.doc.length){return this.doc.sliceString(e,t,this.lineBreak)}facet(e){let t=this.config.address[e.id];return null==t?e.default:(Uo(this,t),Wo(this,t))}toJSON(e){let t={doc:this.sliceDoc(),selection:this.selection.toJSON()};if(e)for(let i in e){let s=e[i];s instanceof Eo&&null!=this.config.address[s.id]&&(t[i]=s.spec.toJSON(this.field(e[i]),this))}return t}static fromJSON(e,t={},i){if(!e||"string"!=typeof e.doc)throw new RangeError("Invalid JSON representation for EditorState");let s=[];if(i)for(let t in i)if(Object.prototype.hasOwnProperty.call(e,t)){let n=i[t],o=e[t];s.push(n.init(e=>n.spec.fromJSON(o,e)))}return mr.create({doc:e.doc,selection:Co.fromJSON(e.selection),extensions:t.extensions?s.concat([t.extensions]):s})}static create(e={}){let t=Vo.resolve(e.extensions||[],new Map),i=e.doc instanceof Yn?e.doc:Yn.of((e.doc||"").split(t.staticFacet(mr.lineSeparator)||fo)),s=e.selection?e.selection instanceof Co?e.selection:Co.single(e.selection.anchor,e.selection.head):Co.single(0);return So(s,i.length),t.staticFacet(Fo)||(s=s.asSingle()),new mr(t,i,s,t.dynamicSlots.map(()=>null),(e,t)=>t.create(e),null)}get tabSize(){return this.facet(mr.tabSize)}get lineBreak(){return this.facet(mr.lineSeparator)||"\n"}get readOnly(){return this.facet(Ko)}phrase(e,...t){for(let t of this.facet(mr.phrases))if(Object.prototype.hasOwnProperty.call(t,e)){e=t[e];break}return t.length&&(e=e.replace(/\$(\$|\d*)/g,(e,i)=>{if("$"==i)return"$";let s=+(i||1);return!s||s>t.length?e:t[s-1]})),e}languageDataAt(e,t,i=-1){let s=[];for(let n of this.facet(jo))for(let o of n(this,t,i))Object.prototype.hasOwnProperty.call(o,e)&&s.push(o[e]);return s}charCategorizer(e){let t=this.languageDataAt("wordChars",e);return gr(t.length?t[0]:"")}wordAt(e){let{text:t,from:i,length:s}=this.doc.lineAt(e),n=this.charCategorizer(e),o=e-i,r=e-i;for(;o>0;){let e=ro(t,o,!1);if(n(t.slice(e,o))!=dr.Word)break;o=e}for(;r<s;){let e=ro(t,r);if(n(t.slice(r,e))!=dr.Word)break;r=e}return o==r?null:Co.range(o+i,r+i)}}function vr(e,t,i={}){let s={};for(let t of e)for(let e of Object.keys(t)){let n=t[e],o=s[e];if(void 0===o)s[e]=n;else if(o===n||void 0===n);else{if(!Object.hasOwnProperty.call(i,e))throw new Error("Config merge conflict for field "+e);s[e]=i[e](o,n)}}for(let e in t)void 0===s[e]&&(s[e]=t[e]);return s}mr.allowMultipleSelections=Fo,mr.tabSize=Ao.define({combine:e=>e.length?e[0]:4}),mr.lineSeparator=qo,mr.readOnly=Ko,mr.phrases=Ao.define({compare(e,t){let i=Object.keys(e),s=Object.keys(t);return i.length==s.length&&i.every(i=>e[i]==t[i])}}),mr.languageData=jo,mr.changeFilter=Qo,mr.transactionFilter=Yo,mr.transactionExtender=Xo,zo.reconfigure=tr.define();class br{eq(e){return this==e}range(e,t=e){return wr.create(e,t,this)}}function _r(e,t){return e==t||e.constructor==t.constructor&&e.eq(t)}br.prototype.startSide=br.prototype.endSide=0,br.prototype.point=!1,br.prototype.mapMode=po.TrackDel;let wr=class e{constructor(e,t,i){this.from=e,this.to=t,this.value=i}static create(t,i,s){return new e(t,i,s)}};function yr(e,t){return e.from-t.from||e.value.startSide-t.value.startSide}class xr{constructor(e,t,i,s){this.from=e,this.to=t,this.value=i,this.maxPoint=s}get length(){return this.to[this.to.length-1]}findIndex(e,t,i,s=0){let n=i?this.to:this.from;for(let o=s,r=n.length;;){if(o==r)return o;let s=o+r>>1,a=n[s]-e||(i?this.value[s].endSide:this.value[s].startSide)-t;if(s==o)return a>=0?o:r;a>=0?r=s:o=s+1}}between(e,t,i,s){for(let n=this.findIndex(t,-1e9,!0),o=this.findIndex(i,1e9,!1,n);n<o;n++)if(!1===s(this.from[n]+e,this.to[n]+e,this.value[n]))return!1}map(e,t){let i=[],s=[],n=[],o=-1,r=-1;for(let a=0;a<this.value.length;a++){let l,h,c=this.value[a],d=this.from[a]+e,u=this.to[a]+e;if(d==u){let e=t.mapPos(d,c.startSide,c.mapMode);if(null==e)continue;if(l=h=e,c.startSide!=c.endSide&&(h=t.mapPos(d,c.endSide),h<l))continue}else if(l=t.mapPos(d,c.startSide),h=t.mapPos(u,c.endSide),l>h||l==h&&c.startSide>0&&c.endSide<=0)continue;(h-l||c.endSide-c.startSide)<0||(o<0&&(o=l),c.point&&(r=Math.max(r,h-l)),i.push(c),s.push(l-o),n.push(h-o))}return{mapped:i.length?new xr(s,n,i,r):null,pos:o}}}class kr{constructor(e,t,i,s){this.chunkPos=e,this.chunk=t,this.nextLayer=i,this.maxPoint=s}static create(e,t,i,s){return new kr(e,t,i,s)}get length(){let e=this.chunk.length-1;return e<0?0:Math.max(this.chunkEnd(e),this.nextLayer.length)}get size(){if(this.isEmpty)return 0;let e=this.nextLayer.size;for(let t of this.chunk)e+=t.value.length;return e}chunkEnd(e){return this.chunkPos[e]+this.chunk[e].length}update(e){let{add:t=[],sort:i=!1,filterFrom:s=0,filterTo:n=this.length}=e,o=e.filter;if(0==t.length&&!o)return this;if(i&&(t=t.slice().sort(yr)),this.isEmpty)return t.length?kr.of(t):this;let r=new Ar(this,null,-1).goto(0),a=0,l=[],h=new Sr;for(;r.value||a<t.length;)if(a<t.length&&(r.from-t[a].from||r.startSide-t[a].value.startSide)>=0){let e=t[a++];h.addInner(e.from,e.to,e.value)||l.push(e)}else 1==r.rangeIndex&&r.chunkIndex<this.chunk.length&&(a==t.length||this.chunkEnd(r.chunkIndex)<t[a].from)&&(!o||s>this.chunkEnd(r.chunkIndex)||n<this.chunkPos[r.chunkIndex])&&h.addChunk(this.chunkPos[r.chunkIndex],this.chunk[r.chunkIndex])?r.nextChunk():((!o||s>r.to||n<r.from||o(r.from,r.to,r.value))&&(h.addInner(r.from,r.to,r.value)||l.push(wr.create(r.from,r.to,r.value))),r.next());return h.finishInner(this.nextLayer.isEmpty&&!l.length?kr.empty:this.nextLayer.update({add:l,filter:o,filterFrom:s,filterTo:n}))}map(e){if(e.empty||this.isEmpty)return this;let t=[],i=[],s=-1;for(let n=0;n<this.chunk.length;n++){let o=this.chunkPos[n],r=this.chunk[n],a=e.touchesRange(o,o+r.length);if(!1===a)s=Math.max(s,r.maxPoint),t.push(r),i.push(e.mapPos(o));else if(!0===a){let{mapped:n,pos:a}=r.map(o,e);n&&(s=Math.max(s,n.maxPoint),t.push(n),i.push(a))}}let n=this.nextLayer.map(e);return 0==t.length?n:new kr(i,t,n||kr.empty,s)}between(e,t,i){if(!this.isEmpty){for(let s=0;s<this.chunk.length;s++){let n=this.chunkPos[s],o=this.chunk[s];if(t>=n&&e<=n+o.length&&!1===o.between(n,e-n,t-n,i))return}this.nextLayer.between(e,t,i)}}iter(e=0){return Pr.from([this]).goto(e)}get isEmpty(){return this.nextLayer==this}static iter(e,t=0){return Pr.from(e).goto(t)}static compare(e,t,i,s,n=-1){let o=e.filter(e=>e.maxPoint>0||!e.isEmpty&&e.maxPoint>=n),r=t.filter(e=>e.maxPoint>0||!e.isEmpty&&e.maxPoint>=n),a=Or(o,r,i),l=new Mr(o,a,n),h=new Mr(r,a,n);i.iterGaps((e,t,i)=>$r(l,e,h,t,i,s)),i.empty&&0==i.length&&$r(l,0,h,0,0,s)}static eq(e,t,i=0,s){null==s&&(s=999999999);let n=e.filter(e=>!e.isEmpty&&t.indexOf(e)<0),o=t.filter(t=>!t.isEmpty&&e.indexOf(t)<0);if(n.length!=o.length)return!1;if(!n.length)return!0;let r=Or(n,o),a=new Mr(n,r,0).goto(i),l=new Mr(o,r,0).goto(i);for(;;){if(a.to!=l.to||!Ir(a.active,l.active)||a.point&&(!l.point||!_r(a.point,l.point)))return!1;if(a.to>s)return!0;a.next(),l.next()}}static spans(e,t,i,s,n=-1){let o=new Mr(e,null,n).goto(t),r=t,a=o.openStart;for(;;){let e=Math.min(o.to,i);if(o.point){let i=o.activeForPoint(o.to),n=o.pointFrom<t?i.length+1:o.point.startSide<0?i.length:Math.min(i.length,a);s.point(r,e,o.point,i,n,o.pointRank),a=Math.min(o.openEnd(e),i.length)}else e>r&&(s.span(r,e,o.active,a),a=o.openEnd(e));if(o.to>i)return a+(o.point&&o.to>i?1:0);r=o.to,o.next()}}static of(e,t=!1){let i=new Sr;for(let s of e instanceof wr?[e]:t?Cr(e):e)i.add(s.from,s.to,s.value);return i.finish()}static join(e){if(!e.length)return kr.empty;let t=e[e.length-1];for(let i=e.length-2;i>=0;i--)for(let s=e[i];s!=kr.empty;s=s.nextLayer)t=new kr(s.chunkPos,s.chunk,t,Math.max(s.maxPoint,t.maxPoint));return t}}function Cr(e){if(e.length>1)for(let t=e[0],i=1;i<e.length;i++){let s=e[i];if(yr(t,s)>0)return e.slice().sort(yr);t=s}return e}kr.empty=new kr([],[],null,-1),kr.empty.nextLayer=kr.empty;class Sr{finishChunk(e){this.chunks.push(new xr(this.from,this.to,this.value,this.maxPoint)),this.chunkPos.push(this.chunkStart),this.chunkStart=-1,this.setMaxPoint=Math.max(this.setMaxPoint,this.maxPoint),this.maxPoint=-1,e&&(this.from=[],this.to=[],this.value=[])}constructor(){this.chunks=[],this.chunkPos=[],this.chunkStart=-1,this.last=null,this.lastFrom=-1e9,this.lastTo=-1e9,this.from=[],this.to=[],this.value=[],this.maxPoint=-1,this.setMaxPoint=-1,this.nextLayer=null}add(e,t,i){this.addInner(e,t,i)||(this.nextLayer||(this.nextLayer=new Sr)).add(e,t,i)}addInner(e,t,i){let s=e-this.lastTo||i.startSide-this.last.endSide;if(s<=0&&(e-this.lastFrom||i.startSide-this.last.startSide)<0)throw new Error("Ranges must be added sorted by `from` position and `startSide`");return!(s<0)&&(250==this.from.length&&this.finishChunk(!0),this.chunkStart<0&&(this.chunkStart=e),this.from.push(e-this.chunkStart),this.to.push(t-this.chunkStart),this.last=i,this.lastFrom=e,this.lastTo=t,this.value.push(i),i.point&&(this.maxPoint=Math.max(this.maxPoint,t-e)),!0)}addChunk(e,t){if((e-this.lastTo||t.value[0].startSide-this.last.endSide)<0)return!1;this.from.length&&this.finishChunk(!0),this.setMaxPoint=Math.max(this.setMaxPoint,t.maxPoint),this.chunks.push(t),this.chunkPos.push(e);let i=t.value.length-1;return this.last=t.value[i],this.lastFrom=t.from[i]+e,this.lastTo=t.to[i]+e,!0}finish(){return this.finishInner(kr.empty)}finishInner(e){if(this.from.length&&this.finishChunk(!1),0==this.chunks.length)return e;let t=kr.create(this.chunkPos,this.chunks,this.nextLayer?this.nextLayer.finishInner(e):e,this.setMaxPoint);return this.from=null,t}}function Or(e,t,i){let s=new Map;for(let t of e)for(let e=0;e<t.chunk.length;e++)t.chunk[e].maxPoint<=0&&s.set(t.chunk[e],t.chunkPos[e]);let n=new Set;for(let e of t)for(let t=0;t<e.chunk.length;t++){let o=s.get(e.chunk[t]);null==o||(i?i.mapPos(o):o)!=e.chunkPos[t]||(null==i?void 0:i.touchesRange(o,o+e.chunk[t].length))||n.add(e.chunk[t])}return n}class Ar{constructor(e,t,i,s=0){this.layer=e,this.skip=t,this.minPoint=i,this.rank=s}get startSide(){return this.value?this.value.startSide:0}get endSide(){return this.value?this.value.endSide:0}goto(e,t=-1e9){return this.chunkIndex=this.rangeIndex=0,this.gotoInner(e,t,!1),this}gotoInner(e,t,i){for(;this.chunkIndex<this.layer.chunk.length;){let t=this.layer.chunk[this.chunkIndex];if(!(this.skip&&this.skip.has(t)||this.layer.chunkEnd(this.chunkIndex)<e||t.maxPoint<this.minPoint))break;this.chunkIndex++,i=!1}if(this.chunkIndex<this.layer.chunk.length){let s=this.layer.chunk[this.chunkIndex].findIndex(e-this.layer.chunkPos[this.chunkIndex],t,!0);(!i||this.rangeIndex<s)&&this.setRangeIndex(s)}this.next()}forward(e,t){(this.to-e||this.endSide-t)<0&&this.gotoInner(e,t,!0)}next(){for(;;){if(this.chunkIndex==this.layer.chunk.length){this.from=this.to=1e9,this.value=null;break}{let e=this.layer.chunkPos[this.chunkIndex],t=this.layer.chunk[this.chunkIndex],i=e+t.from[this.rangeIndex];if(this.from=i,this.to=e+t.to[this.rangeIndex],this.value=t.value[this.rangeIndex],this.setRangeIndex(this.rangeIndex+1),this.minPoint<0||this.value.point&&this.to-this.from>=this.minPoint)break}}}setRangeIndex(e){if(e==this.layer.chunk[this.chunkIndex].value.length){if(this.chunkIndex++,this.skip)for(;this.chunkIndex<this.layer.chunk.length&&this.skip.has(this.layer.chunk[this.chunkIndex]);)this.chunkIndex++;this.rangeIndex=0}else this.rangeIndex=e}nextChunk(){this.chunkIndex++,this.rangeIndex=0,this.next()}compare(e){return this.from-e.from||this.startSide-e.startSide||this.rank-e.rank||this.to-e.to||this.endSide-e.endSide}}class Pr{constructor(e){this.heap=e}static from(e,t=null,i=-1){let s=[];for(let n=0;n<e.length;n++)for(let o=e[n];!o.isEmpty;o=o.nextLayer)o.maxPoint>=i&&s.push(new Ar(o,t,i,n));return 1==s.length?s[0]:new Pr(s)}get startSide(){return this.value?this.value.startSide:0}goto(e,t=-1e9){for(let i of this.heap)i.goto(e,t);for(let e=this.heap.length>>1;e>=0;e--)Tr(this.heap,e);return this.next(),this}forward(e,t){for(let i of this.heap)i.forward(e,t);for(let e=this.heap.length>>1;e>=0;e--)Tr(this.heap,e);(this.to-e||this.value.endSide-t)<0&&this.next()}next(){if(0==this.heap.length)this.from=this.to=1e9,this.value=null,this.rank=-1;else{let e=this.heap[0];this.from=e.from,this.to=e.to,this.value=e.value,this.rank=e.rank,e.value&&e.next(),Tr(this.heap,0)}}}function Tr(e,t){for(let i=e[t];;){let s=1+(t<<1);if(s>=e.length)break;let n=e[s];if(s+1<e.length&&n.compare(e[s+1])>=0&&(n=e[s+1],s++),i.compare(n)<0)break;e[s]=i,e[t]=n,t=s}}class Mr{constructor(e,t,i){this.minPoint=i,this.active=[],this.activeTo=[],this.activeRank=[],this.minActive=-1,this.point=null,this.pointFrom=0,this.pointRank=0,this.to=-1e9,this.endSide=0,this.openStart=-1,this.cursor=Pr.from(e,t,i)}goto(e,t=-1e9){return this.cursor.goto(e,t),this.active.length=this.activeTo.length=this.activeRank.length=0,this.minActive=-1,this.to=e,this.endSide=t,this.openStart=-1,this.next(),this}forward(e,t){for(;this.minActive>-1&&(this.activeTo[this.minActive]-e||this.active[this.minActive].endSide-t)<0;)this.removeActive(this.minActive);this.cursor.forward(e,t)}removeActive(e){Rr(this.active,e),Rr(this.activeTo,e),Rr(this.activeRank,e),this.minActive=Dr(this.active,this.activeTo)}addActive(e){let t=0,{value:i,to:s,rank:n}=this.cursor;for(;t<this.activeRank.length&&(n-this.activeRank[t]||s-this.activeTo[t])>0;)t++;Er(this.active,t,i),Er(this.activeTo,t,s),Er(this.activeRank,t,n),e&&Er(e,t,this.cursor.from),this.minActive=Dr(this.active,this.activeTo)}next(){let e=this.to,t=this.point;this.point=null;let i=this.openStart<0?[]:null;for(;;){let s=this.minActive;if(s>-1&&(this.activeTo[s]-this.cursor.from||this.active[s].endSide-this.cursor.startSide)<0){if(this.activeTo[s]>e){this.to=this.activeTo[s],this.endSide=this.active[s].endSide;break}this.removeActive(s),i&&Rr(i,s)}else{if(!this.cursor.value){this.to=this.endSide=1e9;break}if(this.cursor.from>e){this.to=this.cursor.from,this.endSide=this.cursor.startSide;break}{let e=this.cursor.value;if(e.point){if(!(t&&this.cursor.to==this.to&&this.cursor.from<this.cursor.to)){this.point=e,this.pointFrom=this.cursor.from,this.pointRank=this.cursor.rank,this.to=this.cursor.to,this.endSide=e.endSide,this.cursor.next(),this.forward(this.to,this.endSide);break}this.cursor.next()}else this.addActive(i),this.cursor.next()}}}if(i){this.openStart=0;for(let t=i.length-1;t>=0&&i[t]<e;t--)this.openStart++}}activeForPoint(e){if(!this.active.length)return this.active;let t=[];for(let i=this.active.length-1;i>=0&&!(this.activeRank[i]<this.pointRank);i--)(this.activeTo[i]>e||this.activeTo[i]==e&&this.active[i].endSide>=this.point.endSide)&&t.push(this.active[i]);return t.reverse()}openEnd(e){let t=0;for(let i=this.activeTo.length-1;i>=0&&this.activeTo[i]>e;i--)t++;return t}}function $r(e,t,i,s,n,o){e.goto(t),i.goto(s);let r=s+n,a=s,l=s-t,h=!!o.boundChange;for(let t=!1;;){let s=e.to+l-i.to,n=s||e.endSide-i.endSide,c=n<0?e.to+l:i.to,d=Math.min(c,r);if(e.point||i.point?(e.point&&i.point&&_r(e.point,i.point)&&Ir(e.activeForPoint(e.to),i.activeForPoint(i.to))||o.comparePoint(a,d,e.point,i.point),t=!1):(t&&o.boundChange(a),d>a&&!Ir(e.active,i.active)&&o.compareRange(a,d,e.active,i.active),h&&d<r&&(s||e.openEnd(c)!=i.openEnd(c))&&(t=!0)),c>r)break;a=c,n<=0&&e.next(),n>=0&&i.next()}}function Ir(e,t){if(e.length!=t.length)return!1;for(let i=0;i<e.length;i++)if(e[i]!=t[i]&&!_r(e[i],t[i]))return!1;return!0}function Rr(e,t){for(let i=t,s=e.length-1;i<s;i++)e[i]=e[i+1];e.pop()}function Er(e,t,i){for(let i=e.length-1;i>=t;i--)e[i+1]=e[i];e[t]=i}function Dr(e,t){let i=-1,s=1e9;for(let n=0;n<t.length;n++)(t[n]-s||e[n].endSide-e[i].endSide)<0&&(i=n,s=t[n]);return i}function Lr(e,t,i=e.length){let s=0;for(let n=0;n<i&&n<e.length;)9==e.charCodeAt(n)?(s+=t-s%t,n++):(s++,n=ro(e,n));return s}function Br(e,t,i,s){for(let s=0,n=0;;){if(n>=t)return s;if(s==e.length)break;n+=9==e.charCodeAt(s)?i-n%i:1,s=ro(e,s)}return e.length}const Nr="ͼ",zr="undefined"==typeof Symbol?"__ͼ":Symbol.for(Nr),Hr="undefined"==typeof Symbol?"__styleSet"+Math.floor(1e8*Math.random()):Symbol("styleSet"),Vr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:{};class Gr{constructor(e,t){this.rules=[];let{finish:i}=t||{};function s(e){return/^@/.test(e)?[e]:e.split(/,\s*/)}function n(e,t,o,r){let a=[],l=/^@(\w+)\b/.exec(e[0]),h=l&&"keyframes"==l[1];if(l&&null==t)return o.push(e[0]+";");for(let i in t){let r=t[i];if(/&/.test(i))n(i.split(/,\s*/).map(t=>e.map(e=>t.replace(/&/,e))).reduce((e,t)=>e.concat(t)),r,o);else if(r&&"object"==typeof r){if(!l)throw new RangeError("The value of a property ("+i+") should be a primitive value.");n(s(i),r,a,h)}else null!=r&&a.push(i.replace(/_.*/,"").replace(/[A-Z]/g,e=>"-"+e.toLowerCase())+": "+r+";")}(a.length||h)&&o.push((!i||l||r?e:e.map(i)).join(", ")+" {"+a.join(" ")+"}")}for(let t in e)n(s(t),e[t],this.rules)}getRules(){return this.rules.join("\n")}static newName(){let e=Vr[zr]||1;return Vr[zr]=e+1,Nr+e.toString(36)}static mount(e,t,i){let s=e[Hr],n=i&&i.nonce;s?n&&s.setNonce(n):s=new Wr(e,n),s.mount(Array.isArray(t)?t:[t],e)}}let Ur=new Map;class Wr{constructor(e,t){let i=e.ownerDocument||e,s=i.defaultView;if(!e.head&&e.adoptedStyleSheets&&s.CSSStyleSheet){let t=Ur.get(i);if(t)return e[Hr]=t;this.sheet=new s.CSSStyleSheet,Ur.set(i,this)}else this.styleTag=i.createElement("style"),t&&this.styleTag.setAttribute("nonce",t);this.modules=[],e[Hr]=this}mount(e,t){let i=this.sheet,s=0,n=0;for(let t=0;t<e.length;t++){let o=e[t],r=this.modules.indexOf(o);if(r<n&&r>-1&&(this.modules.splice(r,1),n--,r=-1),-1==r){if(this.modules.splice(n++,0,o),i)for(let e=0;e<o.rules.length;e++)i.insertRule(o.rules[e],s++)}else{for(;n<r;)s+=this.modules[n++].rules.length;s+=o.rules.length,n++}}if(i)t.adoptedStyleSheets.indexOf(this.sheet)<0&&(t.adoptedStyleSheets=[this.sheet,...t.adoptedStyleSheets]);else{let e="";for(let t=0;t<this.modules.length;t++)e+=this.modules[t].getRules()+"\n";this.styleTag.textContent=e;let i=t.head||t;this.styleTag.parentNode!=i&&i.insertBefore(this.styleTag,i.firstChild)}}setNonce(e){this.styleTag&&this.styleTag.getAttribute("nonce")!=e&&this.styleTag.setAttribute("nonce",e)}}for(var jr={8:"Backspace",9:"Tab",10:"Enter",12:"NumLock",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",59:";",61:"=",91:"Meta",92:"Meta",106:"*",107:"+",108:",",109:"-",110:".",111:"/",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Control",163:"Control",164:"Alt",165:"Alt",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},Fr={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",59:":",61:"+",173:"_",186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"~",219:"{",220:"|",221:"}",222:'"'},qr="undefined"!=typeof navigator&&/Mac/.test(navigator.platform),Qr="undefined"!=typeof navigator&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),Yr=0;Yr<10;Yr++)jr[48+Yr]=jr[96+Yr]=String(Yr);for(Yr=1;Yr<=24;Yr++)jr[Yr+111]="F"+Yr;for(Yr=65;Yr<=90;Yr++)jr[Yr]=String.fromCharCode(Yr+32),Fr[Yr]=String.fromCharCode(Yr);for(var Xr in jr)Fr.hasOwnProperty(Xr)||(Fr[Xr]=jr[Xr]);function Kr(e){var t=!(qr&&e.metaKey&&e.shiftKey&&!e.ctrlKey&&!e.altKey||Qr&&e.shiftKey&&e.key&&1==e.key.length||"Unidentified"==e.key)&&e.key||(e.shiftKey?Fr:jr)[e.keyCode]||e.key||"Unidentified";return"Esc"==t&&(t="Escape"),"Del"==t&&(t="Delete"),"Left"==t&&(t="ArrowLeft"),"Up"==t&&(t="ArrowUp"),"Right"==t&&(t="ArrowRight"),"Down"==t&&(t="ArrowDown"),t}function Zr(){var e=arguments[0];"string"==typeof e&&(e=document.createElement(e));var t=1,i=arguments[1];if(i&&"object"==typeof i&&null==i.nodeType&&!Array.isArray(i)){for(var s in i)if(Object.prototype.hasOwnProperty.call(i,s)){var n=i[s];"string"==typeof n?e.setAttribute(s,n):null!=n&&(e[s]=n)}t++}for(;t<arguments.length;t++)Jr(e,arguments[t]);return e}function Jr(e,t){if("string"==typeof t)e.appendChild(document.createTextNode(t));else if(null==t);else if(null!=t.nodeType)e.appendChild(t);else{if(!Array.isArray(t))throw new RangeError("Unsupported child node: "+t);for(var i=0;i<t.length;i++)Jr(e,t[i])}}let ea="undefined"!=typeof navigator?navigator:{userAgent:"",vendor:"",platform:""},ta="undefined"!=typeof document?document:{documentElement:{style:{}}};const ia=/Edge\/(\d+)/.exec(ea.userAgent),sa=/MSIE \d/.test(ea.userAgent),na=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ea.userAgent),oa=!!(sa||na||ia),ra=!oa&&/gecko\/(\d+)/i.test(ea.userAgent),aa=!oa&&/Chrome\/(\d+)/.exec(ea.userAgent),la="webkitFontSmoothing"in ta.documentElement.style,ha=!oa&&/Apple Computer/.test(ea.vendor),ca=ha&&(/Mobile\/\w+/.test(ea.userAgent)||ea.maxTouchPoints>2);var da={mac:ca||/Mac/.test(ea.platform),windows:/Win/.test(ea.platform),linux:/Linux|X11/.test(ea.platform),ie:oa,ie_version:sa?ta.documentMode||6:na?+na[1]:ia?+ia[1]:0,gecko:ra,gecko_version:ra?+(/Firefox\/(\d+)/.exec(ea.userAgent)||[0,0])[1]:0,chrome:!!aa,chrome_version:aa?+aa[1]:0,ios:ca,android:/Android\b/.test(ea.userAgent),webkit:la,webkit_version:la?+(/\bAppleWebKit\/(\d+)/.exec(ea.userAgent)||[0,0])[1]:0,safari:ha,safari_version:ha?+(/\bVersion\/(\d+(\.\d+)?)/.exec(ea.userAgent)||[0,0])[1]:0,tabSize:null!=ta.documentElement.style.tabSize?"tab-size":"-moz-tab-size"};function ua(e,t){for(let i in e)"class"==i&&t.class?t.class+=" "+e.class:"style"==i&&t.style?t.style+=";"+e.style:t[i]=e[i];return t}const fa=Object.create(null);function pa(e,t,i){if(e==t)return!0;e||(e=fa),t||(t=fa);let s=Object.keys(e),n=Object.keys(t);if(s.length-0!=n.length-0)return!1;for(let o of s)if(o!=i&&(-1==n.indexOf(o)||e[o]!==t[o]))return!1;return!0}function ga(e,t){for(let i=e.attributes.length-1;i>=0;i--){let s=e.attributes[i].name;null==t[s]&&e.removeAttribute(s)}for(let i in t){let s=t[i];"style"==i?e.style.cssText=s:e.getAttribute(i)!=s&&e.setAttribute(i,s)}}function ma(e,t,i){let s=!1;if(t)for(let n in t)i&&n in i||(s=!0,"style"==n?e.style.cssText="":e.removeAttribute(n));if(i)for(let n in i)t&&t[n]==i[n]||(s=!0,"style"==n?e.style.cssText=i[n]:e.setAttribute(n,i[n]));return s}function va(e){let t=Object.create(null);for(let i=0;i<e.attributes.length;i++){let s=e.attributes[i];t[s.name]=s.value}return t}class ba{eq(e){return!1}updateDOM(e,t,i){return!1}compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}get estimatedHeight(){return-1}get lineBreaks(){return 0}ignoreEvent(e){return!0}coordsAt(e,t,i){return null}get isHidden(){return!1}get editable(){return!1}destroy(e){}}var _a=function(e){return e[e.Text=0]="Text",e[e.WidgetBefore=1]="WidgetBefore",e[e.WidgetAfter=2]="WidgetAfter",e[e.WidgetRange=3]="WidgetRange",e}(_a||(_a={}));class wa extends br{constructor(e,t,i,s){super(),this.startSide=e,this.endSide=t,this.widget=i,this.spec=s}get heightRelevant(){return!1}static mark(e){return new ya(e)}static widget(e){let t=Math.max(-1e4,Math.min(1e4,e.side||0)),i=!!e.block;return t+=i&&!e.inlineOrder?t>0?3e8:-4e8:t>0?1e8:-1e8,new ka(e,t,t,i,e.widget||null,!1)}static replace(e){let t,i,s=!!e.block;if(e.isBlockGap)t=-5e8,i=4e8;else{let{start:n,end:o}=Ca(e,s);t=(n?s?-3e8:-1:5e8)-1,i=1+(o?s?2e8:1:-6e8)}return new ka(e,t,i,s,e.widget||null,!0)}static line(e){return new xa(e)}static set(e,t=!1){return kr.of(e,t)}hasHeight(){return!!this.widget&&this.widget.estimatedHeight>-1}}wa.none=kr.empty;class ya extends wa{constructor(e){let{start:t,end:i}=Ca(e);super(t?-1:5e8,i?1:-6e8,null,e),this.tagName=e.tagName||"span",this.attrs=e.class&&e.attributes?ua(e.attributes,{class:e.class}):e.class?{class:e.class}:e.attributes||fa}eq(e){return this==e||e instanceof ya&&this.tagName==e.tagName&&pa(this.attrs,e.attrs)}range(e,t=e){if(e>=t)throw new RangeError("Mark decorations may not be empty");return super.range(e,t)}}ya.prototype.point=!1;class xa extends wa{constructor(e){super(-2e8,-2e8,null,e)}eq(e){return e instanceof xa&&this.spec.class==e.spec.class&&pa(this.spec.attributes,e.spec.attributes)}range(e,t=e){if(t!=e)throw new RangeError("Line decoration ranges must be zero-length");return super.range(e,t)}}xa.prototype.mapMode=po.TrackBefore,xa.prototype.point=!0;class ka extends wa{constructor(e,t,i,s,n,o){super(t,i,n,e),this.block=s,this.isReplace=o,this.mapMode=s?t<=0?po.TrackBefore:po.TrackAfter:po.TrackDel}get type(){return this.startSide!=this.endSide?_a.WidgetRange:this.startSide<=0?_a.WidgetBefore:_a.WidgetAfter}get heightRelevant(){return this.block||!!this.widget&&(this.widget.estimatedHeight>=5||this.widget.lineBreaks>0)}eq(e){return e instanceof ka&&Sa(this.widget,e.widget)&&this.block==e.block&&this.startSide==e.startSide&&this.endSide==e.endSide}range(e,t=e){if(this.isReplace&&(e>t||e==t&&this.startSide>0&&this.endSide<=0))throw new RangeError("Invalid range for replacement decoration");if(!this.isReplace&&t!=e)throw new RangeError("Widget decorations can only have zero-length ranges");return super.range(e,t)}}function Ca(e,t=!1){let{inclusiveStart:i,inclusiveEnd:s}=e;return null==i&&(i=e.inclusive),null==s&&(s=e.inclusive),{start:null!=i?i:t,end:null!=s?s:t}}function Sa(e,t){return e==t||!!(e&&t&&e.compare(t))}function Oa(e,t,i,s=0){let n=i.length-1;n>=0&&i[n]+s>=e?i[n]=Math.max(i[n],t):i.push(e,t)}ka.prototype.point=!0;class Aa extends br{constructor(e,t,i){super(),this.tagName=e,this.attributes=t,this.rank=i}eq(e){return e==this||e instanceof Aa&&this.tagName==e.tagName&&pa(this.attributes,e.attributes)}static create(e){return new Aa(e.tagName,e.attributes||fa,null==e.rank?50:Math.max(0,Math.min(e.rank,100)))}static set(e,t=!1){return kr.of(e,t)}}function Pa(e){let t;return t=11==e.nodeType?e.getSelection?e:e.ownerDocument:e,t.getSelection()}function Ta(e,t){return!!t&&(e==t||e.contains(1!=t.nodeType?t.parentNode:t))}function Ma(e,t){if(!t.anchorNode)return!1;try{return Ta(e,t.anchorNode)}catch(e){return!1}}function $a(e){return 3==e.nodeType?Qa(e,0,e.nodeValue.length).getClientRects():1==e.nodeType?e.getClientRects():[]}function Ia(e,t,i,s){return!!i&&(Da(e,t,i,s,-1)||Da(e,t,i,s,1))}function Ra(e){for(var t=0;;t++)if(!(e=e.previousSibling))return t}function Ea(e){return 1==e.nodeType&&/^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(e.nodeName)}function Da(e,t,i,s,n){for(;;){if(e==i&&t==s)return!0;if(t==(n<0?0:La(e))){if("DIV"==e.nodeName)return!1;let i=e.parentNode;if(!i||1!=i.nodeType)return!1;t=Ra(e)+(n<0?0:1),e=i}else{if(1!=e.nodeType)return!1;if(1==(e=e.childNodes[t+(n<0?-1:0)]).nodeType&&"false"==e.contentEditable)return!1;t=n<0?La(e):0}}}function La(e){return 3==e.nodeType?e.nodeValue.length:e.childNodes.length}function Ba(e,t){let{left:i,right:s}=e;if(i==s)return e;let n=t?i:s;return{left:n,right:n,top:e.top,bottom:e.bottom}}function Na(e){let t=e.visualViewport;return t?{left:0,right:t.width,top:0,bottom:t.height}:{left:0,right:e.innerWidth,top:0,bottom:e.innerHeight}}function za(e,t){let i=t.width/e.offsetWidth,s=t.height/e.offsetHeight;return(i>.995&&i<1.005||!isFinite(i)||Math.abs(t.width-e.offsetWidth)<1)&&(i=1),(s>.995&&s<1.005||!isFinite(s)||Math.abs(t.height-e.offsetHeight)<1)&&(s=1),{scaleX:i,scaleY:s}}function Ha(e,t,i,s,n,o,r,a){let l=e.ownerDocument,h=l.defaultView||window;for(let c=e,d=!1;c&&!d;)if(1==c.nodeType){let e,u=c==l.body,f=1,p=1;if(u)e=Na(h);else{if(/^(fixed|sticky)$/.test(getComputedStyle(c).position)&&(d=!0),c.scrollHeight<=c.clientHeight&&c.scrollWidth<=c.clientWidth){c=c.assignedSlot||c.parentNode;continue}let t=c.getBoundingClientRect();({scaleX:f,scaleY:p}=za(c,t)),e={left:t.left,right:t.left+c.clientWidth*f,top:t.top,bottom:t.top+c.clientHeight*p}}let g=0,m=0;if("nearest"==n)t.top<e.top+r?(m=t.top-(e.top+r),i>0&&t.bottom>e.bottom+m&&(m=t.bottom-e.bottom+r)):t.bottom>e.bottom-r&&(m=t.bottom-e.bottom+r,i<0&&t.top-m<e.top&&(m=t.top-(e.top+r)));else{let s=t.bottom-t.top,o=e.bottom-e.top;m=("center"==n&&s<=o?t.top+s/2-o/2:"start"==n||"center"==n&&i<0?t.top-r:t.bottom-o+r)-e.top}if("nearest"==s)t.left<e.left+o?(g=t.left-(e.left+o),i>0&&t.right>e.right+g&&(g=t.right-e.right+o)):t.right>e.right-o&&(g=t.right-e.right+o,i<0&&t.left<e.left+g&&(g=t.left-(e.left+o)));else{g=("center"==s?t.left+(t.right-t.left)/2-(e.right-e.left)/2:"start"==s==a?t.left-o:t.right-(e.right-e.left)+o)-e.left}if(g||m)if(u)h.scrollBy(g,m);else{let e=0,i=0;if(m){let e=c.scrollTop;c.scrollTop+=m/p,i=(c.scrollTop-e)*p}if(g){let t=c.scrollLeft;c.scrollLeft+=g/f,e=(c.scrollLeft-t)*f}t={left:t.left-e,top:t.top-i,right:t.right-e,bottom:t.bottom-i},e&&Math.abs(e-g)<1&&(s="nearest"),i&&Math.abs(i-m)<1&&(n="nearest")}if(u)break;(t.top<e.top||t.bottom>e.bottom||t.left<e.left||t.right>e.right)&&(t={left:Math.max(t.left,e.left),right:Math.min(t.right,e.right),top:Math.max(t.top,e.top),bottom:Math.min(t.bottom,e.bottom)}),c=c.assignedSlot||c.parentNode}else{if(11!=c.nodeType)break;c=c.host}}function Va(e,t=!0){let i=e.ownerDocument,s=null,n=null;for(let o=e.parentNode;o&&(o!=i.body&&(t&&!s||!n));)if(1==o.nodeType)!n&&o.scrollHeight>o.clientHeight&&(n=o),t&&!s&&o.scrollWidth>o.clientWidth&&(s=o),o=o.assignedSlot||o.parentNode;else{if(11!=o.nodeType)break;o=o.host}return{x:s,y:n}}Aa.prototype.startSide=Aa.prototype.endSide=-1;class Ga{constructor(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0}eq(e){return this.anchorNode==e.anchorNode&&this.anchorOffset==e.anchorOffset&&this.focusNode==e.focusNode&&this.focusOffset==e.focusOffset}setRange(e){let{anchorNode:t,focusNode:i}=e;this.set(t,Math.min(e.anchorOffset,t?La(t):0),i,Math.min(e.focusOffset,i?La(i):0))}set(e,t,i,s){this.anchorNode=e,this.anchorOffset=t,this.focusNode=i,this.focusOffset=s}}function Ua(e){let t=[];for(let i=e;i;i=11==i.nodeType?i.host:i.parentNode)1==i.nodeType&&t.push({node:i,left:i.scrollLeft,top:i.scrollTop});return t}function Wa(e,t=!0){for(let{node:i,left:s,top:n}of e)t&&i.scrollTop!=n&&(i.scrollTop=n),i.scrollLeft!=s&&(i.scrollLeft=s)}let ja,Fa=null;function qa(e){if(e.setActive)return e.setActive();if(Fa)return e.focus(Fa);let t=Ua(e);e.focus(null==Fa?{get preventScroll(){return Fa={preventScroll:!0},!0}}:void 0),Fa||(Fa=!1,Wa(t))}function Qa(e,t,i=t){let s=ja||(ja=document.createRange());return s.setEnd(e,i),s.setStart(e,t),s}function Ya(e,t,i,s){let n={key:t,code:t,keyCode:i,which:i,cancelable:!0};s&&({altKey:n.altKey,ctrlKey:n.ctrlKey,shiftKey:n.shiftKey,metaKey:n.metaKey}=s);let o=new KeyboardEvent("keydown",n);o.synthetic=!0,e.dispatchEvent(o);let r=new KeyboardEvent("keyup",n);return r.synthetic=!0,e.dispatchEvent(r),o.defaultPrevented||r.defaultPrevented}function Xa(e){for(;e;){if(e&&(9==e.nodeType||11==e.nodeType&&e.host))return e;e=e.assignedSlot||e.parentNode}return null}function Ka(e,t){let i=t.focusNode,s=t.focusOffset;if(!i||t.anchorNode!=i||t.anchorOffset!=s)return!1;for(s=Math.min(s,La(i));;)if(s){if(1!=i.nodeType)return!1;let e=i.childNodes[s-1];"false"==e.contentEditable?s--:(i=e,s=La(i))}else{if(i==e)return!0;s=Ra(i),i=i.parentNode}}function Za(e){return e instanceof Window?e.pageYOffset>Math.max(0,e.document.documentElement.scrollHeight-e.innerHeight-4):e.scrollTop>Math.max(1,e.scrollHeight-e.clientHeight-4)}function Ja(e,t){for(let i=e,s=t;;){if(3==i.nodeType&&s>0)return{node:i,offset:s};if(1==i.nodeType&&s>0){if("false"==i.contentEditable)return null;i=i.childNodes[s-1],s=La(i)}else{if(!i.parentNode||Ea(i))return null;s=Ra(i),i=i.parentNode}}}function el(e,t){for(let i=e,s=t;;){if(3==i.nodeType&&s<i.nodeValue.length)return{node:i,offset:s};if(1==i.nodeType&&s<i.childNodes.length){if("false"==i.contentEditable)return null;i=i.childNodes[s],s=0}else{if(!i.parentNode||Ea(i))return null;s=Ra(i)+1,i=i.parentNode}}}da.safari&&da.safari_version>=26&&(Fa=!1);class tl{constructor(e,t,i=!0){this.node=e,this.offset=t,this.precise=i}static before(e,t){return new tl(e.parentNode,Ra(e),t)}static after(e,t){return new tl(e.parentNode,Ra(e)+1,t)}}var il=function(e){return e[e.LTR=0]="LTR",e[e.RTL=1]="RTL",e}(il||(il={}));const sl=il.LTR,nl=il.RTL;function ol(e){let t=[];for(let i=0;i<e.length;i++)t.push(1<<+e[i]);return t}const rl=ol("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),al=ol("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),ll=Object.create(null),hl=[];for(let e of["()","[]","{}"]){let t=e.charCodeAt(0),i=e.charCodeAt(1);ll[t]=i,ll[i]=-t}function cl(e){return e<=247?rl[e]:1424<=e&&e<=1524?2:1536<=e&&e<=1785?al[e-1536]:1774<=e&&e<=2220?4:8192<=e&&e<=8204?256:64336<=e&&e<=65023?4:1}const dl=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;class ul{get dir(){return this.level%2?nl:sl}constructor(e,t,i){this.from=e,this.to=t,this.level=i}side(e,t){return this.dir==t==e?this.to:this.from}forward(e,t){return e==(this.dir==t)}static find(e,t,i,s){let n=-1;for(let o=0;o<e.length;o++){let r=e[o];if(r.from<=t&&r.to>=t){if(r.level==i)return o;(n<0||(0!=s?s<0?r.from<t:r.to>t:e[n].level>r.level))&&(n=o)}}if(n<0)throw new RangeError("Index out of range");return n}}function fl(e,t){if(e.length!=t.length)return!1;for(let i=0;i<e.length;i++){let s=e[i],n=t[i];if(s.from!=n.from||s.to!=n.to||s.direction!=n.direction||!fl(s.inner,n.inner))return!1}return!0}const pl=[];function gl(e,t,i,s,n){for(let o=0;o<=s.length;o++){let r=o?s[o-1].to:t,a=o<s.length?s[o].from:i,l=o?256:n;for(let t=r,i=l,s=l;t<a;t++){let n=cl(e.charCodeAt(t));512==n?n=i:8==n&&4==s&&(n=16),pl[t]=4==n?2:n,7&n&&(s=n),i=n}for(let e=r,t=l,s=l;e<a;e++){let n=pl[e];if(128==n)e<a-1&&t==pl[e+1]&&24&t?n=pl[e]=t:pl[e]=256;else if(64==n){let n=e+1;for(;n<a&&64==pl[n];)n++;let o=e&&8==t||n<i&&8==pl[n]?1==s?1:8:256;for(let t=e;t<n;t++)pl[t]=o;e=n-1}else 8==n&&1==s&&(pl[e]=1);t=n,7&n&&(s=n)}}}function ml(e,t,i,s,n){let o=1==n?2:1;for(let r=0,a=0,l=0;r<=s.length;r++){let h=r?s[r-1].to:t,c=r<s.length?s[r].from:i;for(let t,i,s,r=h;r<c;r++)if(i=ll[t=e.charCodeAt(r)])if(i<0){for(let e=a-3;e>=0;e-=3)if(hl[e+1]==-i){let t=hl[e+2],i=2&t?n:4&t?1&t?o:n:0;i&&(pl[r]=pl[hl[e]]=i),a=e;break}}else{if(189==hl.length)break;hl[a++]=r,hl[a++]=t,hl[a++]=l}else if(2==(s=pl[r])||1==s){let e=s==n;l=e?0:1;for(let t=a-3;t>=0;t-=3){let i=hl[t+2];if(2&i)break;if(e)hl[t+2]|=2;else{if(4&i)break;hl[t+2]|=4}}}}}function vl(e,t,i,s){for(let n=0,o=s;n<=i.length;n++){let r=n?i[n-1].to:e,a=n<i.length?i[n].from:t;for(let l=r;l<a;){let r=pl[l];if(256==r){let r=l+1;for(;;)if(r==a){if(n==i.length)break;r=i[n++].to,a=n<i.length?i[n].from:t}else{if(256!=pl[r])break;r++}let h=1==o,c=h==(1==(r<t?pl[r]:s))?h?1:2:s;for(let t=r,s=n,o=s?i[s-1].to:e;t>l;)t==o&&(t=i[--s].from,o=s?i[s-1].to:e),pl[--t]=c;l=r}else o=r,l++}}}function bl(e,t,i,s,n,o,r){let a=s%2?2:1;if(s%2==n%2)for(let l=t,h=0;l<i;){let t=!0,c=!1;if(h==o.length||l<o[h].from){let e=pl[l];e!=a&&(t=!1,c=16==e)}let d=t||1!=a?null:[],u=t?s:s+1,f=l;e:for(;;)if(h<o.length&&f==o[h].from){if(c)break e;let p=o[h];if(!t)for(let e=p.to,t=h+1;;){if(e==i)break e;if(!(t<o.length&&o[t].from==e)){if(pl[e]==a)break e;break}e=o[t++].to}if(h++,d)d.push(p);else{p.from>l&&r.push(new ul(l,p.from,u)),_l(e,p.direction==sl!=!(u%2)?s+1:s,n,p.inner,p.from,p.to,r),l=p.to}f=p.to}else{if(f==i||(t?pl[f]!=a:pl[f]==a))break;f++}d?bl(e,l,f,s+1,n,d,r):l<f&&r.push(new ul(l,f,u)),l=f}else for(let l=i,h=o.length;l>t;){let i=!0,c=!1;if(!h||l>o[h-1].to){let e=pl[l-1];e!=a&&(i=!1,c=16==e)}let d=i||1!=a?null:[],u=i?s:s+1,f=l;e:for(;;)if(h&&f==o[h-1].to){if(c)break e;let p=o[--h];if(!i)for(let e=p.from,i=h;;){if(e==t)break e;if(!i||o[i-1].to!=e){if(pl[e-1]==a)break e;break}e=o[--i].from}if(d)d.push(p);else{p.to<l&&r.push(new ul(p.to,l,u)),_l(e,p.direction==sl!=!(u%2)?s+1:s,n,p.inner,p.from,p.to,r),l=p.from}f=p.from}else{if(f==t||(i?pl[f-1]!=a:pl[f-1]==a))break;f--}d?bl(e,f,l,s+1,n,d,r):f<l&&r.push(new ul(f,l,u)),l=f}}function _l(e,t,i,s,n,o,r){let a=t%2?2:1;gl(e,n,o,s,a),ml(e,n,o,s,a),vl(n,o,s,a),bl(e,n,o,t,i,s,r)}function wl(e,t,i){if(!e)return[new ul(0,0,t==nl?1:0)];if(t==sl&&!i.length&&!dl.test(e))return yl(e.length);if(i.length)for(;e.length>pl.length;)pl[pl.length]=256;let s=[],n=t==sl?0:1;return _l(e,n,n,i,0,e.length,s),s}function yl(e){return[new ul(0,e,0)]}let xl="";function kl(e,t,i,s,n){var o;let r=s.head-e.from,a=ul.find(t,r,null!==(o=s.bidiLevel)&&void 0!==o?o:-1,s.assoc),l=t[a],h=l.side(n,i);if(r==h){let e=a+=n?1:-1;if(e<0||e>=t.length)return null;l=t[a=e],r=l.side(!n,i),h=l.side(n,i)}let c=ro(e.text,r,l.forward(n,i));(c<l.from||c>l.to)&&(c=h),xl=e.text.slice(Math.min(r,c),Math.max(r,c));let d=a==(n?t.length-1:0)?null:t[a+(n?1:-1)];return d&&c==h&&d.level+(n?0:1)<l.level?Co.cursor(d.side(!n,i)+e.from,d.forward(n,i)?1:-1,d.level):Co.cursor(c+e.from,l.forward(n,i)?-1:1,l.level)}function Cl(e,t,i){for(let s=t;s<i;s++){let t=cl(e.charCodeAt(s));if(1==t)return sl;if(2==t||4==t)return nl}return sl}const Sl=Ao.define(),Ol=Ao.define(),Al=Ao.define(),Pl=Ao.define(),Tl=Ao.define(),Ml=Ao.define(),$l=Ao.define(),Il=Ao.define(),Rl=Ao.define(),El=Ao.define({combine:e=>e.some(e=>e)}),Dl=Ao.define({combine:e=>e.some(e=>e)}),Ll=Ao.define();class Bl{constructor(e,t,i,s,n,o=!1){this.range=e,this.y=t,this.x=i,this.yMargin=s,this.xMargin=n,this.isSnapshot=o}map(e){return e.empty?this:new Bl(this.range.map(e),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}clip(e){return this.range.to<=e.doc.length?this:new Bl(Co.cursor(e.doc.length),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}}const Nl=tr.define({map:(e,t)=>e.map(t)}),zl=tr.define();function Hl(e,t,i){let s=e.facet(Pl);s.length?s[0](t):window.onerror&&window.onerror(String(t),i,void 0,void 0,t)||(i?console.error(i+":",t):console.error(t))}const Vl=Ao.define({combine:e=>!e.length||e[0]});let Gl=0;const Ul=Ao.define({combine:e=>e.filter((t,i)=>{for(let s=0;s<i;s++)if(e[s].plugin==t.plugin)return!1;return!0})});class Wl{constructor(e,t,i,s,n){this.id=e,this.create=t,this.domEventHandlers=i,this.domEventObservers=s,this.baseExtensions=n(this),this.extension=this.baseExtensions.concat(Ul.of({plugin:this,arg:void 0}))}of(e){return this.baseExtensions.concat(Ul.of({plugin:this,arg:e}))}static define(e,t){const{eventHandlers:i,eventObservers:s,provide:n,decorations:o}=t||{};return new Wl(Gl++,e,i,s,e=>{let t=[];return o&&t.push(Ql.of(t=>{let i=t.plugin(e);return i?o(i):wa.none})),n&&t.push(n(e)),t})}static fromClass(e,t){return Wl.define((t,i)=>new e(t,i),t)}}class jl{constructor(e){this.spec=e,this.mustUpdate=null,this.value=null}get plugin(){return this.spec&&this.spec.plugin}update(e){if(this.value){if(this.mustUpdate){let e=this.mustUpdate;if(this.mustUpdate=null,this.value.update)try{this.value.update(e)}catch(t){if(Hl(e.state,t,"CodeMirror plugin crashed"),this.value.destroy)try{this.value.destroy()}catch(e){}this.deactivate()}}}else if(this.spec)try{this.value=this.spec.plugin.create(e,this.spec.arg)}catch(t){Hl(e.state,t,"CodeMirror plugin crashed"),this.deactivate()}return this}destroy(e){var t;if(null===(t=this.value)||void 0===t?void 0:t.destroy)try{this.value.destroy()}catch(t){Hl(e.state,t,"CodeMirror plugin crashed")}}deactivate(){this.spec=this.value=null}}const Fl=Ao.define(),ql=Ao.define(),Ql=Ao.define(),Yl=Ao.define(),Xl=Ao.define(),Kl=Ao.define(),Zl=Ao.define();function Jl(e,t){let i=e.state.facet(Zl);if(!i.length)return i;let s=i.map(t=>t instanceof Function?t(e):t),n=[];return kr.spans(s,t.from,t.to,{point(){},span(e,i,s,o){let r=e-t.from,a=i-t.from,l=n;for(let e=s.length-1;e>=0;e--,o--){let i,n=s[e].spec.bidiIsolate;if(null==n&&(n=Cl(t.text,r,a)),o>0&&l.length&&(i=l[l.length-1]).to==r&&i.direction==n)i.to=a,l=i.inner;else{let e={from:r,to:a,direction:n,inner:[]};l.push(e),l=e.inner}}}}),n}const eh=Ao.define();function th(e){let t=0,i=0,s=0,n=0;for(let o of e.state.facet(eh)){let r=o(e);r&&(null!=r.left&&(t=Math.max(t,r.left)),null!=r.right&&(i=Math.max(i,r.right)),null!=r.top&&(s=Math.max(s,r.top)),null!=r.bottom&&(n=Math.max(n,r.bottom)))}return{left:t,right:i,top:s,bottom:n}}const ih=Ao.define();class sh{constructor(e,t,i,s){this.fromA=e,this.toA=t,this.fromB=i,this.toB=s}join(e){return new sh(Math.min(this.fromA,e.fromA),Math.max(this.toA,e.toA),Math.min(this.fromB,e.fromB),Math.max(this.toB,e.toB))}addToSet(e){let t=e.length,i=this;for(;t>0;t--){let s=e[t-1];if(!(s.fromA>i.toA)){if(s.toA<i.fromA)break;i=i.join(s),e.splice(t-1,1)}}return e.splice(t,0,i),e}static extendWithRanges(e,t){if(0==t.length)return e;let i=[];for(let s=0,n=0,o=0;;){let r=s<e.length?e[s].fromB:1e9,a=n<t.length?t[n]:1e9,l=Math.min(r,a);if(1e9==l)break;let h=l+o,c=l,d=h;for(;;)if(n<t.length&&t[n]<=c){let i=t[n+1];n+=2,c=Math.max(c,i);for(let t=s;t<e.length&&e[t].fromB<=c;t++)o=e[t].toA-e[t].toB;d=Math.max(d,i+o)}else{if(!(s<e.length&&e[s].fromB<=c))break;{let t=e[s++];c=Math.max(c,t.toB),d=Math.max(d,t.toA),o=t.toA-t.toB}}i.push(new sh(h,d,l,c))}return i}}class nh{constructor(e,t,i){this.view=e,this.state=t,this.transactions=i,this.flags=0,this.startState=e.state,this.changes=mo.empty(this.startState.doc.length);for(let e of i)this.changes=this.changes.compose(e.changes);let s=[];this.changes.iterChangedRanges((e,t,i,n)=>s.push(new sh(e,t,i,n))),this.changedRanges=s}static create(e,t,i){return new nh(e,t,i)}get viewportChanged(){return(4&this.flags)>0}get viewportMoved(){return(8&this.flags)>0}get heightChanged(){return(2&this.flags)>0}get geometryChanged(){return this.docChanged||(18&this.flags)>0}get focusChanged(){return(1&this.flags)>0}get docChanged(){return!this.changes.empty}get selectionSet(){return this.transactions.some(e=>e.selection)}get empty(){return 0==this.flags&&0==this.transactions.length}}const oh=[];class rh{constructor(e,t,i=0){this.dom=e,this.length=t,this.flags=i,this.parent=null,e.cmTile=this}get breakAfter(){return 1&this.flags}get children(){return oh}isWidget(){return!1}get isHidden(){return!1}isComposite(){return!1}isLine(){return!1}isText(){return!1}isBlock(){return!1}get domAttrs(){return null}sync(e){if(this.flags|=2,4&this.flags){this.flags&=-5;let e=this.domAttrs;e&&ga(this.dom,e)}}toString(){return this.constructor.name+(this.children.length?`(${this.children})`:"")+(this.breakAfter?"#":"")}destroy(){this.parent=null}setDOM(e){this.dom=e,e.cmTile=this}get posAtStart(){return this.parent?this.parent.posBefore(this):0}get posAtEnd(){return this.posAtStart+this.length}posBefore(e,t=this.posAtStart){let i=t;for(let t of this.children){if(t==e)return i;i+=t.length+t.breakAfter}throw new RangeError("Invalid child in posBefore")}posAfter(e){return this.posBefore(e)+e.length}covers(e){return!0}coordsIn(e,t,i){return null}domPosFor(e,t){let i=Ra(this.dom),s=this.length?e>0:t>0;return new tl(this.parent.dom,i+(s?1:0),0==e||e==this.length)}markDirty(e){this.flags&=-3,e&&(this.flags|=4),this.parent&&2&this.parent.flags&&this.parent.markDirty(!1)}get overrideDOMText(){return null}get root(){for(let e=this;e;e=e.parent)if(e instanceof hh)return e;return null}static get(e){return e.cmTile}}class ah extends rh{constructor(e){super(e,0),this._children=[]}isComposite(){return!0}get children(){return this._children}get lastChild(){return this.children.length?this.children[this.children.length-1]:null}append(e){this.children.push(e),e.parent=this}sync(e){if(2&this.flags)return;super.sync(e);let t,i=this.dom,s=null,n=(null==e?void 0:e.node)==i?e:null,o=0;for(let r of this.children){if(r.sync(e),o+=r.length+r.breakAfter,t=s?s.nextSibling:i.firstChild,n&&t!=r.dom&&(n.written=!0),r.dom.parentNode==i)for(;t&&t!=r.dom;)t=lh(t);else i.insertBefore(r.dom,t);s=r.dom}for(t=s?s.nextSibling:i.firstChild,n&&t&&(n.written=!0);t;)t=lh(t);this.length=o}}function lh(e){let t=e.nextSibling;return e.parentNode.removeChild(e),t}class hh extends ah{constructor(e,t){super(t),this.view=e}owns(e){for(;e;e=e.parent)if(e==this)return!0;return!1}isBlock(){return!0}nearest(e){for(;;){if(!e)return null;let t=rh.get(e);if(t&&this.owns(t))return t;e=e.parentNode}}blockTiles(e){for(let t=[],i=this,s=0,n=0;;)if(s==i.children.length){if(!t.length)return;i=i.parent,i.breakAfter&&n++,s=t.pop()}else{let o=i.children[s++];if(o instanceof ch)t.push(s),i=o,s=0;else{let t=n+o.length,i=e(o,n);if(void 0!==i)return i;n=t+o.breakAfter}}}resolveBlock(e,t){let i,s,n=-1,o=-1;if(this.blockTiles((r,a)=>{let l=a+r.length;if(e>=a&&e<=l){if(r.isWidget()&&t>=-1&&t<=1){if(32&r.flags)return!0;16&r.flags&&(i=void 0)}(a<e||e==l&&(t<-1?r.length:r.covers(1)))&&(!i||!r.isWidget()&&i.isWidget())&&(i=r,n=e-a),(l>e||e==a&&(t>1?r.length:r.covers(-1)))&&(!s||!r.isWidget()&&s.isWidget())&&(s=r,o=e-a)}}),!i&&!s)throw new Error("No tile at position "+e);return i&&t<0||!s?{tile:i,offset:n}:{tile:s,offset:o}}}class ch extends ah{constructor(e,t){super(e),this.wrapper=t}isBlock(){return!0}covers(e){return!!this.children.length&&(e<0?this.children[0].covers(-1):this.lastChild.covers(1))}get domAttrs(){return this.wrapper.attributes}static of(e,t){let i=new ch(t||document.createElement(e.tagName),e);return t||(i.flags|=4),i}}class dh extends ah{constructor(e,t){super(e),this.attrs=t}isLine(){return!0}static start(e,t,i){let s=new dh(t||document.createElement("div"),e);return t&&i||(s.flags|=4),s}get domAttrs(){return this.attrs}resolveInline(e,t,i){let s=null,n=-1,o=null,r=-1;!function e(a,l){for(let h=0,c=0;h<a.children.length&&c<=l;h++){let d=a.children[h],u=c+d.length;u>=l&&(d.isComposite()?e(d,l-c):(!o||o.isHidden&&(t>0&&!(32&o.flags)||i&&fh(o,d)))&&(u>l||32&d.flags&&t<=1)?(o=d,r=l-c):(c<l||16&d.flags&&!d.isHidden&&t>=-1)&&(s=d,n=l-c)),c=u}}(this,e);let a=(t<0?s:o)||s||o;return a?{tile:a,offset:a==s?n:r}:null}coordsIn(e,t,i){let s=this.resolveInline(e,t,!0);return s?s.tile.coordsIn(Math.max(0,s.offset),t,i):uh(this)}domIn(e,t){let i=this.resolveInline(e,t);if(i){let{tile:e,offset:s}=i;if(this.dom.contains(e.dom))return e.isText()?new tl(e.dom,Math.min(e.dom.nodeValue.length,s)):e.domPosFor(s,16&e.flags?1:32&e.flags?-1:t);let n=i.tile.parent,o=!1;for(let e of n.children){if(o)return new tl(e.dom,0);e==i.tile&&(o=!0)}}return new tl(this.dom,0)}}function uh(e){let t=e.dom.lastChild;if(!t)return e.dom.getBoundingClientRect();let i=$a(t);return i[i.length-1]||null}function fh(e,t){let i=e.coordsIn(0,1),s=t.coordsIn(0,1);return i&&s&&s.top<i.bottom}class ph extends ah{constructor(e,t){super(e),this.mark=t}get domAttrs(){return this.mark.attrs}static of(e,t){let i=new ph(t||document.createElement(e.tagName),e);return t||(i.flags|=4),i}}class gh extends rh{constructor(e,t){super(e,t.length),this.text=t}sync(e){2&this.flags||(super.sync(e),this.dom.nodeValue!=this.text&&(e&&e.node==this.dom&&(e.written=!0),this.dom.nodeValue=this.text))}isText(){return!0}toString(){return JSON.stringify(this.text)}coordsIn(e,t,i){let s=this.dom.nodeValue.length;e>s&&(e=s);let n=e,o=e,r=0;0==e&&t<0||e==s&&t>=0?da.chrome||da.gecko||(e?(n--,r=1):o<s&&(o++,r=-1)):t<0?n--:o<s&&o++;let a=Qa(this.dom,n,o).getClientRects();if(!a.length)return null;let l=a[(r?r<0:t>=0)?0:a.length-1];return da.safari&&!r&&0==l.width&&(l=Array.prototype.find.call(a,e=>e.width)||l),null==i?l:Ba(l,(r?r>0:t<0)==i)}static of(e,t){let i=new gh(t||document.createTextNode(e),e);return t||(i.flags|=2),i}}class mh extends rh{constructor(e,t,i,s){super(e,t,s),this.widget=i}isWidget(){return!0}get isHidden(){return this.widget.isHidden}covers(e){return!(48&this.flags)&&(this.flags&(e<0?64:128))>0}coordsIn(e,t){return this.coordsInWidget(e,t,!1)}coordsInWidget(e,t,i){let s=this.widget.coordsAt(this.dom,e,t);if(s)return s;if(i)return Ba(this.dom.getBoundingClientRect(),this.length?0==e:t<=0);{let t=this.dom.getClientRects(),i=null;if(!t.length)return null;let s=!!(16&this.flags)||!(32&this.flags)&&e>0;for(let n=s?t.length-1:0;i=t[n],!(e>0?0==n:n==t.length-1||i.top<i.bottom);n+=s?-1:1);return Ba(i,!s)}}get overrideDOMText(){if(!this.length)return Yn.empty;let{root:e}=this;if(!e)return Yn.empty;let t=this.posAtStart;return e.view.state.doc.slice(t,t+this.length)}destroy(){super.destroy(),this.widget.destroy(this.dom)}static of(e,t,i,s,n){return n||(n=e.toDOM(t),e.editable||(n.contentEditable="false")),new mh(n,i,e,s)}}class vh extends rh{constructor(e){let t=document.createElement("img");t.className="cm-widgetBuffer",t.setAttribute("aria-hidden","true"),super(t,0,e)}get isHidden(){return!0}get overrideDOMText(){return Yn.empty}coordsIn(e,t,i){let s=this.dom.getBoundingClientRect();return null==i?s:Ba(s,t>0==i)}}class bh{constructor(e){this.index=0,this.beforeBreak=!1,this.parents=[],this.tile=e}advance(e,t,i){let{tile:s,index:n,beforeBreak:o,parents:r}=this;for(;e||t>0;)if(s.isComposite())if(o){if(!e)break;i&&i.break(),e--,o=!1}else if(n==s.children.length){if(!e&&!r.length)break;i&&i.leave(s),o=!!s.breakAfter,({tile:s,index:n}=r.pop()),n++}else{let a=s.children[n],l=a.breakAfter;!(t>0?a.length<=e:a.length<e)||i&&!1===i.skip(a,0,a.length)&&a.isComposite?(r.push({tile:s,index:n}),s=a,n=0,i&&a.isComposite()&&i.enter(a)):(o=!!l,n++,e-=a.length)}else{let t=s.length;if(n<t&&e){let o=Math.min(e,t-n);i&&i.skip(s,n,n+o),e-=o,n+=o}if(n==t)o=!!s.breakAfter,({tile:s,index:n}=r.pop()),n++;else if(!e)break}return this.tile=s,this.index=n,this.beforeBreak=o,this}get root(){return this.parents.length?this.parents[0].tile:this.tile}}class _h{constructor(e,t,i,s){this.from=e,this.to=t,this.wrapper=i,this.rank=s}}class wh{constructor(e,t,i){this.cache=e,this.root=t,this.blockWrappers=i,this.curLine=null,this.lastBlock=null,this.afterWidget=null,this.pos=0,this.wrappers=[],this.wrapperPos=0}addText(e,t,i,s){var n;this.flushBuffer();let o=this.ensureMarks(t,i),r=o.lastChild;if(r&&r.isText()&&!(8&r.flags)&&r.length+e.length<512){this.cache.reused.set(r,2),(o.children[o.children.length-1]=new gh(r.dom,r.text+e)).parent=o}else o.append(s||gh.of(e,null===(n=this.cache.find(gh))||void 0===n?void 0:n.dom));this.pos+=e.length,this.afterWidget=null}addComposition(e,t){let i=this.curLine;i.dom!=t.line.dom&&(i.setDOM(this.cache.reused.has(t.line)?Mh(t.line.dom):t.line.dom),this.cache.reused.set(t.line,2));let s=i;for(let e=t.marks.length-1;e>=0;e--){let i=t.marks[e],n=s.lastChild;if(n instanceof ph&&n.mark.eq(i.mark))n.dom!=i.dom&&n.setDOM(Mh(i.dom)),s=n;else{if(this.cache.reused.get(i)){let e=rh.get(i.dom);e&&e.setDOM(Mh(i.dom))}let e=ph.of(i.mark,i.dom);s.append(e),s=e}this.cache.reused.set(i,2)}let n=rh.get(e.text);n&&this.cache.reused.set(n,2);let o=new gh(e.text,e.text.nodeValue);o.flags|=8,this.pos=e.range.toB,s.append(o)}addInlineWidget(e,t,i){let s=this.afterWidget&&48&e.flags&&(48&this.afterWidget.flags)==(48&e.flags);s||this.flushBuffer();let n=this.ensureMarks(t,i);s||16&e.flags||n.append(this.getBuffer(1)),n.append(e),this.pos+=e.length,this.afterWidget=e}addMark(e,t,i){this.flushBuffer(),this.ensureMarks(t,i).append(e),this.pos+=e.length,this.afterWidget=null}addBlockWidget(e){this.getBlockPos().append(e),this.pos+=e.length,this.lastBlock=e,this.endLine()}continueWidget(e){(this.afterWidget||this.lastBlock).length+=e,this.pos+=e}addLineStart(e,t){var i;e||(e=Ah);let s=dh.start(e,t||(null===(i=this.cache.find(dh))||void 0===i?void 0:i.dom),!!t);this.getBlockPos().append(this.lastBlock=this.curLine=s)}addLine(e){this.getBlockPos().append(e),this.pos+=e.length,this.lastBlock=e,this.endLine()}addBreak(){this.lastBlock.flags|=1,this.endLine(),this.pos++}addLineStartIfNotCovered(e){this.blockPosCovered()||this.addLineStart(e)}ensureLine(e){this.curLine||this.addLineStart(e)}ensureMarks(e,t){var i;let s=this.curLine;for(let n=e.length-1;n>=0;n--){let o,r=e[n];if(t>0&&(o=s.lastChild)&&o instanceof ph&&o.mark.eq(r))s=o,t--;else{let e=ph.of(r,null===(i=this.cache.find(ph,e=>e.mark.eq(r)))||void 0===i?void 0:i.dom);s.append(e),s=e,t=0}}return s}endLine(){if(this.curLine){this.flushBuffer();let e=this.curLine.lastChild;e&&Sh(this.curLine,!1)&&("BR"==e.dom.nodeName||!e.isWidget()||da.ios&&Sh(this.curLine,!0))||this.curLine.append(this.cache.findWidget(Ih,0,32)||new mh(Ih.toDOM(),0,Ih,32)),this.curLine=this.afterWidget=null}}updateBlockWrappers(){this.wrapperPos>this.pos+1e4&&(this.blockWrappers.goto(this.pos),this.wrappers.length=0);for(let e=this.wrappers.length-1;e>=0;e--)this.wrappers[e].to<this.pos&&this.wrappers.splice(e,1);for(let e=this.blockWrappers;e.value&&e.from<=this.pos;e.next())if(e.to>=this.pos){let t=102*e.rank+e.value.rank,i=new _h(e.from,e.to,e.value,t),s=this.wrappers.length;for(;s>0&&(this.wrappers[s-1].rank-i.rank||this.wrappers[s-1].to-i.to)<0;)s--;this.wrappers.splice(s,0,i)}this.wrapperPos=this.pos}getBlockPos(){var e;this.updateBlockWrappers();let t=this.root;for(let i of this.wrappers){let s=t.lastChild;if(i.from<this.pos&&s instanceof ch&&s.wrapper.eq(i.wrapper))t=s;else{let s=ch.of(i.wrapper,null===(e=this.cache.find(ch,e=>e.wrapper.eq(i.wrapper)))||void 0===e?void 0:e.dom);t.append(s),t=s}}return t}blockPosCovered(){let e=this.lastBlock;return null!=e&&!e.breakAfter&&(!e.isWidget()||(160&e.flags)>0)}getBuffer(e){let t=2|(e<0?16:32),i=this.cache.find(vh,void 0,1);return i&&(i.flags=t),i||new vh(t)}flushBuffer(){!this.afterWidget||32&this.afterWidget.flags||(this.afterWidget.parent.append(this.getBuffer(-1)),this.afterWidget=null)}}class yh{constructor(e){this.skipCount=0,this.text="",this.textOff=0,this.cursor=e.iter()}skip(e){this.textOff+e<=this.text.length?this.textOff+=e:(this.skipCount+=e-(this.text.length-this.textOff),this.text="",this.textOff=0)}next(e){if(this.textOff==this.text.length){let{value:t,lineBreak:i,done:s}=this.cursor.next(this.skipCount);if(this.skipCount=0,s)throw new Error("Ran out of text content when drawing inline views");this.text=t;let n=this.textOff=Math.min(e,t.length);return i?null:t.slice(0,n)}let t=Math.min(this.text.length,this.textOff+e),i=this.text.slice(this.textOff,t);return this.textOff=t,i}}const xh=[mh,dh,gh,ph,vh,ch,hh];for(let e=0;e<xh.length;e++)xh[e].bucket=e;class kh{constructor(e){this.view=e,this.buckets=xh.map(()=>[]),this.index=xh.map(()=>0),this.reused=new Map}add(e){let t=e.constructor.bucket,i=this.buckets[t];i.length<6?i.push(e):i[this.index[t]=(this.index[t]+1)%6]=e}find(e,t,i=2){let s=e.bucket,n=this.buckets[s],o=this.index[s];for(let e=0;e<n.length;e++){let r=(e+o)%n.length,a=n[r];if((!t||t(a))&&!this.reused.has(a))return n.splice(r,1),r<o&&this.index[s]--,this.reused.set(a,i),a}return null}findWidget(e,t,i){let s=this.buckets[0];if(s.length)for(let n=0,o=0;;n++){if(n==s.length){if(o)return null;o=1,n=0}let r=s[n];if(!this.reused.has(r)&&(0==o?r.widget.compare(e):r.widget.constructor==e.constructor&&e.updateDOM(r.dom,this.view,r.widget)))return s.splice(n,1),n<this.index[0]&&this.index[0]--,r.widget==e&&r.length==t&&(497&r.flags)==i?(this.reused.set(r,1),r):(this.reused.set(r,2),new mh(r.dom,t,e,-498&r.flags|i))}}reuse(e){return this.reused.set(e,1),e}maybeReuse(e,t=2){if(!this.reused.has(e))return this.reused.set(e,t),e.dom}clear(){for(let e=0;e<this.buckets.length;e++)this.buckets[e].length=this.index[e]=0}}class Ch{constructor(e,t,i,s,n){this.view=e,this.decorations=s,this.disallowBlockEffectsFor=n,this.openWidget=!1,this.openMarks=0,this.cache=new kh(e),this.text=new yh(e.state.doc),this.builder=new wh(this.cache,new hh(e,e.contentDOM),kr.iter(i)),this.cache.reused.set(t,2),this.old=new bh(t),this.reuseWalker={skip:(e,t,i)=>{if(this.cache.add(e),e.isComposite())return!1},enter:e=>this.cache.add(e),leave:()=>{},break:()=>{}}}run(e,t){let i=t&&this.getCompositionContext(t.text);for(let s=0,n=0,o=0;;){let r=o<e.length?e[o++]:null,a=r?r.fromA:this.old.root.length;if(a>s){let e=a-s;this.preserve(e,!o,!r),s=a,n+=e}if(!r)break;t&&r.fromA<=t.range.fromA&&r.toA>=t.range.toA?(this.forward(r.fromA,t.range.fromA,t.range.fromA<t.range.toA?1:-1),this.emit(n,t.range.fromB),this.builder.flushBuffer(),this.cache.clear(),this.builder.addComposition(t,i),this.text.skip(t.range.toB-t.range.fromB),this.forward(t.range.fromA,r.toA),this.emit(t.range.toB,r.toB)):(this.forward(r.fromA,r.toA),this.emit(n,r.toB)),n=r.toB,s=r.toA}return this.builder.curLine&&this.builder.endLine(),this.builder.root}preserve(e,t,i){let s=Th(this.old),n=this.openMarks;this.old.advance(e,i?1:-1,{skip:(e,t,i)=>{if(e.isWidget())if(this.openWidget)this.builder.continueWidget(i-t);else{let o=i>0||t<e.length?mh.of(e.widget,this.view,i-t,496&e.flags,this.cache.maybeReuse(e)):this.cache.reuse(e);256&o.flags?(o.flags&=-2,this.builder.addBlockWidget(o)):(this.builder.ensureLine(null),this.builder.addInlineWidget(o,s,n),n=s.length)}else if(e.isText())this.builder.ensureLine(null),t||i!=e.length||this.cache.reused.has(e)?(this.cache.add(e),this.builder.addText(e.text.slice(t,i),s,n)):this.builder.addText(e.text,s,n,this.cache.reuse(e)),n=s.length;else if(e.isLine())e.flags&=-2,this.cache.reused.set(e,1),this.builder.addLine(e);else if(e instanceof vh)this.cache.add(e);else{if(!(e instanceof ph))return!1;this.builder.ensureLine(null),this.builder.addMark(e,s,n),this.cache.reused.set(e,1),n=s.length}this.openWidget=!1},enter:e=>{e.isLine()?this.builder.addLineStart(e.attrs,this.cache.maybeReuse(e)):(this.cache.add(e),e instanceof ph&&s.unshift(e.mark)),this.openWidget=!1},leave:e=>{e.isLine()?s.length&&(s.length=n=0):e instanceof ph&&(s.shift(),n=Math.min(n,s.length))},break:()=>{this.builder.addBreak(),this.openWidget=!1}}),this.text.skip(e)}emit(e,t){let i=null,s=this.builder,n=-1,o=kr.spans(this.decorations,e,t,{point:(e,t,o,r,a,l)=>{if(o instanceof ka){if(this.disallowBlockEffectsFor[l]){if(o.block)throw new RangeError("Block decorations may not be specified via plugins");if(t>this.view.state.doc.lineAt(e).to)throw new RangeError("Decorations that replace line breaks may not be specified via plugins")}if(n=r.length,a>r.length)s.continueWidget(t-e);else{let n=o.widget||(o.block?$h.block:$h.inline),l=Oh(o),h=this.cache.findWidget(n,t-e,l)||mh.of(n,this.view,t-e,l);o.block?(o.startSide>0&&s.addLineStartIfNotCovered(i),s.addBlockWidget(h)):(s.ensureLine(i),s.addInlineWidget(h,r,a))}i=null}else i=Ph(i,o);t>e&&this.text.skip(t-e)},span:(e,t,o,r)=>{for(let n=e;n<t;){let a=this.text.next(Math.min(512,t-n));null==a?(s.addLineStartIfNotCovered(i),s.addBreak(),n++):(s.ensureLine(i),s.addText(a,o,n==e?r:o.length),n+=a.length),i=null}n=o.length}});n>-1&&(this.openWidget=o>n),this.openWidget||s.addLineStartIfNotCovered(i),this.openMarks=o}forward(e,t,i=1){t-e<=10?this.old.advance(t-e,i,this.reuseWalker):(this.old.advance(5,-1,this.reuseWalker),this.old.advance(t-e-10,-1),this.old.advance(5,i,this.reuseWalker))}getCompositionContext(e){let t=[],i=null;for(let s=e.parentNode;;s=s.parentNode){let e=rh.get(s);if(s==this.view.contentDOM)break;e instanceof ph?t.push(e):(null==e?void 0:e.isLine())?i=e:e instanceof ch||("DIV"!=s.nodeName||i||s==this.view.contentDOM?i||t.push(ph.of(new ya({tagName:s.nodeName.toLowerCase(),attributes:va(s)}),s)):i=new dh(s,Ah))}return{line:i,marks:t}}}function Sh(e,t){let i=e=>{for(let s of e.children)if((t?s.isText():s.length)||i(s))return!0;return!1};return i(e)}function Oh(e){let t=e.isReplace?(e.startSide<0?64:0)|(e.endSide>0?128:0):e.startSide>0?32:16;return e.block&&(t|=256),t}const Ah={class:"cm-line"};function Ph(e,t){let i=t.spec.attributes,s=t.spec.class;return i||s?(e||(e={class:"cm-line"}),i&&ua(i,e),s&&(e.class+=" "+s),e):e}function Th(e){let t=[];for(let i=e.parents.length;i>1;i--){let s=i==e.parents.length?e.tile:e.parents[i].tile;s instanceof ph&&t.push(s.mark)}return t}function Mh(e){let t=rh.get(e);return t&&t.setDOM(e.cloneNode()),e}class $h extends ba{constructor(e){super(),this.tag=e}eq(e){return e.tag==this.tag}toDOM(){return document.createElement(this.tag)}updateDOM(e){return e.nodeName.toLowerCase()==this.tag}get isHidden(){return!0}}$h.inline=new $h("span"),$h.block=new $h("div");const Ih=new class extends ba{toDOM(){return document.createElement("br")}get isHidden(){return!0}get editable(){return!0}};class Rh{constructor(e){this.view=e,this.decorations=[],this.blockWrappers=[],this.dynamicDecorationMap=[!1],this.domChanged=null,this.hasComposition=null,this.editContextFormatting=wa.none,this.lastCompositionAfterCursor=!1,this.minWidth=0,this.minWidthFrom=0,this.minWidthTo=0,this.impreciseAnchor=null,this.impreciseHead=null,this.forceSelection=!1,this.lastUpdate=Date.now(),this.updateDeco(),this.tile=new hh(e,e.contentDOM),this.updateInner([new sh(0,0,0,e.state.doc.length)],null)}update(e){var t;let i=e.changedRanges;this.minWidth>0&&i.length&&(i.every(({fromA:e,toA:t})=>t<this.minWidthFrom||e>this.minWidthTo)?(this.minWidthFrom=e.changes.mapPos(this.minWidthFrom,1),this.minWidthTo=e.changes.mapPos(this.minWidthTo,1)):this.minWidth=this.minWidthFrom=this.minWidthTo=0),this.updateEditContextFormatting(e);let s=-1;this.view.inputState.composing>=0&&!this.view.observer.editContext&&((null===(t=this.domChanged)||void 0===t?void 0:t.newSel)?s=this.domChanged.newSel.head:Wh(e.changes,this.hasComposition)||e.selectionSet||(s=e.state.selection.main.head));let n=s>-1?Bh(this.view,e.changes,s):null;if(this.domChanged=null,this.hasComposition){let{from:t,to:s}=this.hasComposition;i=new sh(t,s,e.changes.mapPos(t,-1),e.changes.mapPos(s,1)).addToSet(i.slice())}this.hasComposition=n?{from:n.range.fromB,to:n.range.toB}:null,(da.ie||da.chrome)&&!n&&e&&e.state.doc.lines!=e.startState.doc.lines&&(this.forceSelection=!0);let o=this.decorations,r=this.blockWrappers;this.updateDeco();let a=Hh(o,this.decorations,e.changes);a.length&&(i=sh.extendWithRanges(i,a));let l=Gh(r,this.blockWrappers,e.changes);return l.length&&(i=sh.extendWithRanges(i,l)),n&&!i.some(e=>e.fromA<=n.range.fromA&&e.toA>=n.range.toA)&&(i=n.range.addToSet(i.slice())),!(2&this.tile.flags&&0==i.length)&&(this.updateInner(i,n),e.transactions.length&&(this.lastUpdate=Date.now()),!0)}updateInner(e,t){this.view.viewState.mustMeasureContent=!0;let{observer:i}=this.view;i.ignore(()=>{if(t||e.length){let i=this.tile,s=new Ch(this.view,i,this.blockWrappers,this.decorations,this.dynamicDecorationMap);t&&rh.get(t.text)&&s.cache.reused.set(rh.get(t.text),2),this.tile=s.run(e,t),Eh(i,s.cache.reused)}this.tile.dom.style.height=this.view.viewState.contentHeight/this.view.scaleY+"px",this.tile.dom.style.flexBasis=this.minWidth?this.minWidth+"px":"";let s=da.chrome||da.ios?{node:i.selectionRange.focusNode,written:!1}:void 0;this.tile.sync(s),!s||!s.written&&i.selectionRange.focusNode==s.node&&this.tile.dom.contains(s.node)||(this.forceSelection=!0),this.tile.dom.style.height=""});let s=[];if(this.view.viewport.from||this.view.viewport.to<this.view.state.doc.length)for(let e of this.tile.children)e.isWidget()&&e.widget instanceof jh&&s.push(e.dom);i.updateGaps(s)}updateEditContextFormatting(e){this.editContextFormatting=this.editContextFormatting.map(e.changes);for(let t of e.transactions)for(let e of t.effects)e.is(zl)&&(this.editContextFormatting=e.value)}updateSelection(e=!1,t=!1){!e&&this.view.observer.selectionRange.focusNode||this.view.observer.readSelectionRange();let{dom:i}=this.tile,s=this.view.root.activeElement,n=s==i,o=!n&&!(this.view.state.facet(Vl)||i.tabIndex>-1)&&Ma(i,this.view.observer.selectionRange)&&!(s&&i.contains(s));if(!(n||t||o))return;let r=this.forceSelection;this.forceSelection=!1;let a,l,h=this.view.state.selection.main;if(h.empty?l=a=this.inlineDOMNearPos(h.anchor,h.assoc||1):(l=this.inlineDOMNearPos(h.head,h.head==h.from?1:-1),a=this.inlineDOMNearPos(h.anchor,h.anchor==h.from?1:-1)),da.gecko&&h.empty&&!this.hasComposition&&Dh(a)){let e=document.createTextNode("");this.view.observer.ignore(()=>a.node.insertBefore(e,a.node.childNodes[a.offset]||null)),a=l=new tl(e,0),r=!0}let c=this.view.observer.selectionRange;!r&&c.focusNode&&(Ia(a.node,a.offset,c.anchorNode,c.anchorOffset)&&Ia(l.node,l.offset,c.focusNode,c.focusOffset)||this.suppressWidgetCursorChange(c,h))||(this.view.observer.ignore(()=>{da.android&&da.chrome&&i.contains(c.focusNode)&&Uh(c.focusNode,i)&&(i.blur(),i.focus({preventScroll:!0}));let e=Pa(this.view.root);if(e)if(h.empty){if(da.gecko){let e=Nh(a.node,a.offset);if(e&&3!=e){let t=(1==e?Ja:el)(a.node,a.offset);t&&(a=new tl(t.node,t.offset))}}e.collapse(a.node,a.offset),null!=h.bidiLevel&&void 0!==e.caretBidiLevel&&(e.caretBidiLevel=h.bidiLevel)}else if(e.extend){e.collapse(a.node,a.offset);try{e.extend(l.node,l.offset)}catch(e){}}else{let t=document.createRange();h.anchor>h.head&&([a,l]=[l,a]),t.setEnd(l.node,l.offset),t.setStart(a.node,a.offset),e.removeAllRanges(),e.addRange(t)}else;o&&this.view.root.activeElement==i&&(i.blur(),s&&s.focus())}),this.view.observer.setSelectionRange(a,l)),this.impreciseAnchor=a.precise?null:new tl(c.anchorNode,c.anchorOffset),this.impreciseHead=l.precise?null:new tl(c.focusNode,c.focusOffset)}suppressWidgetCursorChange(e,t){return this.hasComposition&&t.empty&&Ia(e.focusNode,e.focusOffset,e.anchorNode,e.anchorOffset)&&this.posFromDOM(e.focusNode,e.focusOffset)==t.head}enforceCursorAssoc(){if(this.hasComposition)return;let{view:e}=this,t=e.state.selection.main,i=Pa(e.root),{anchorNode:s,anchorOffset:n}=e.observer.selectionRange;if(!(i&&t.empty&&t.assoc&&i.modify))return;let o=this.lineAt(t.head,t.assoc);if(!o)return;let r=o.posAtStart;if(t.head==r||t.head==r+o.length)return;let a=this.coordsAt(t.head,-1),l=this.coordsAt(t.head,1);if(!a||!l||a.bottom>l.top)return;let h=this.domAtPos(t.head+t.assoc,t.assoc);i.collapse(h.node,h.offset),i.modify("move",t.assoc<0?"forward":"backward","lineboundary"),e.observer.readSelectionRange();let c=e.observer.selectionRange;e.docView.posFromDOM(c.anchorNode,c.anchorOffset)!=t.from&&i.collapse(s,n)}posFromDOM(e,t){let i=this.tile.nearest(e);if(!i)return 2&this.tile.dom.compareDocumentPosition(e)?0:this.view.state.doc.length;let s=i.posAtStart;if(!i.isComposite())return i.isText()?e==i.dom?s+t:s+(t?i.length:0):s;{let n;if(e==i.dom)n=i.dom.childNodes[t];else{let s=0==La(e)?0:0==t?-1:1;for(;;){let t=e.parentNode;if(t==i.dom)break;0==s&&t.firstChild!=t.lastChild&&(s=e==t.firstChild?-1:1),e=t}n=s<0?e:e.nextSibling}if(n==i.dom.firstChild)return s;for(;n&&!rh.get(n);)n=n.nextSibling;if(!n)return s+i.length;for(let e=0,t=s;;e++){let s=i.children[e];if(s.dom==n)return t;t+=s.length+s.breakAfter}}}domAtPos(e,t){let{tile:i,offset:s}=this.tile.resolveBlock(e,t);return i.isWidget()?i.domPosFor(s,t):i.domIn(s,t)}inlineDOMNearPos(e,t){let i,s,n=-1,o=!1,r=-1,a=!1;return this.tile.blockTiles((t,l)=>{if(t.isWidget()){if(32&t.flags&&l>=e)return!0;16&t.flags&&(o=!0)}else{let h=l+t.length;if(l<=e&&(i=t,n=e-l,o=h<e),h>=e&&!s&&(s=t,r=e-l,a=l>e),l>e&&s)return!0}}),i||s?(o&&s?i=null:a&&i&&(s=null),i&&t<0||!s?i.domIn(n,t):s.domIn(r,t)):this.domAtPos(e,t)}coordsAt(e,t,i){let{tile:s,offset:n}=this.tile.resolveBlock(e,t);return s.isWidget()?s.widget instanceof jh?null:s.coordsInWidget(n,t,!0):s.coordsIn(n,t,i)}lineAt(e,t){let{tile:i}=this.tile.resolveBlock(e,t);return i.isLine()?i:null}coordsForChar(e){let{tile:t,offset:i}=this.tile.resolveBlock(e,1);if(!t.isLine())return null;return function e(t,i){if(t.isComposite())for(let s of t.children){if(s.length>=i){let t=e(s,i);if(t)return t}if((i-=s.length)<0)break}else if(t.isText()&&i<t.length){let e=ro(t.text,i);if(e==i)return null;let s=Qa(t.dom,i,e).getClientRects();for(let e=0;e<s.length;e++){let t=s[e];if(e==s.length-1||t.top<t.bottom&&t.left<t.right)return t}}return null}(t,i)}measureVisibleLineHeights(e){let t=[],{from:i,to:s}=e,n=this.view.contentDOM.clientWidth,o=n>Math.max(this.view.scrollDOM.clientWidth,this.minWidth)+1,r=-1,a=this.view.textDirection==il.LTR,l=0,h=(e,c,d)=>{for(let u=0;u<e.children.length&&!(c>s);u++){let s=e.children[u],f=c+s.length,p=s.dom.getBoundingClientRect(),{height:g}=p;if(d&&!u&&(l+=p.top-d.top),s instanceof ch)f>i&&h(s,c,p);else if(c>=i&&(l>0&&t.push(-l),t.push(g+l),l=0,o)){let e=s.dom.lastChild,t=e?$a(e):[];if(t.length){let e=t[t.length-1],i=a?e.right-p.left:p.right-e.left;i>r&&(r=i,this.minWidth=n,this.minWidthFrom=c,this.minWidthTo=f)}}d&&u==e.children.length-1&&(l+=d.bottom-p.bottom),c=f+s.breakAfter}};return h(this.tile,0,null),t}textDirectionAt(e){let{tile:t}=this.tile.resolveBlock(e,1);return"rtl"==getComputedStyle(t.dom).direction?il.RTL:il.LTR}measureTextSize(){let e=this.tile.blockTiles(e=>{if(e.isLine()&&e.children.length&&e.length<=20){let t,i=0;for(let s of e.children){if(!s.isText()||/[^ -~]/.test(s.text))return;let e=$a(s.dom);if(1!=e.length)return;i+=e[0].width,t=e[0].height}if(i)return{lineHeight:e.dom.getBoundingClientRect().height,charWidth:i/e.length,textHeight:t}}});if(e)return e;let t,i,s,n=document.createElement("div");return n.className="cm-line",n.style.width="99999px",n.style.position="absolute",n.textContent="abc def ghi jkl mno pqr stu",this.view.observer.ignore(()=>{this.tile.dom.appendChild(n);let e=$a(n.firstChild)[0];t=n.getBoundingClientRect().height,i=e&&e.width?e.width/27:7,s=e&&e.height?e.height:t,n.remove()}),{lineHeight:t,charWidth:i,textHeight:s}}computeBlockGapDeco(){let e=[],t=this.view.viewState;for(let i=0,s=0;;s++){let n=s==t.viewports.length?null:t.viewports[s],o=n?n.from-1:this.view.state.doc.length;if(o>i){let s=(t.lineBlockAt(o).bottom-t.lineBlockAt(i).top)/this.view.scaleY;e.push(wa.replace({widget:new jh(s),block:!0,inclusive:!0,isBlockGap:!0}).range(i,o))}if(!n)break;i=n.to+1}return wa.set(e)}updateDeco(){let e=1,t=this.view.state.facet(Ql).map(t=>(this.dynamicDecorationMap[e++]="function"==typeof t)?t(this.view):t),i=!1,s=this.view.state.facet(Xl).map((e,t)=>{let s="function"==typeof e;return s&&(i=!0),s?e(this.view):e});for(s.length&&(this.dynamicDecorationMap[e++]=i,t.push(kr.join(s))),this.decorations=[this.editContextFormatting,...t,this.computeBlockGapDeco(),this.view.viewState.lineGapDeco];e<this.decorations.length;)this.dynamicDecorationMap[e++]=!1;this.blockWrappers=this.view.state.facet(Yl).map(e=>"function"==typeof e?e(this.view):e)}scrollIntoView(e){if(e.isSnapshot){let t=this.view.viewState.lineBlockAt(e.range.head);return this.view.scrollDOM.scrollTop=t.top-e.yMargin,void(this.view.scrollDOM.scrollLeft=e.xMargin)}for(let t of this.view.state.facet(Ll))try{if(t(this.view,e.range,e))return!0}catch(e){Hl(this.view.state,e,"scroll handler")}let t,{range:i}=e,s=this.coordsAt(i.head,i.assoc||(i.head>i.anchor?-1:1));if(!s)return;!i.empty&&(t=this.coordsAt(i.anchor,i.anchor>i.head?-1:1))&&(s={left:Math.min(s.left,t.left),top:Math.min(s.top,t.top),right:Math.max(s.right,t.right),bottom:Math.max(s.bottom,t.bottom)});let n=th(this.view),o={left:s.left-n.left,top:s.top-n.top,right:s.right+n.right,bottom:s.bottom+n.bottom},{offsetWidth:r,offsetHeight:a}=this.view.scrollDOM;if(Ha(this.view.scrollDOM,o,i.head<i.anchor?-1:1,e.x,e.y,Math.max(Math.min(e.xMargin,r),-r),Math.max(Math.min(e.yMargin,a),-a),this.view.textDirection==il.LTR),window.visualViewport&&window.innerHeight-window.visualViewport.height>1&&(s.top>window.visualViewport.offsetTop+window.visualViewport.height||s.bottom<window.visualViewport.offsetTop)){let e=this.view.docView.lineAt(i.head,1);if(e){let t=Ua(e.dom);e.dom.scrollIntoView({block:"nearest"}),Wa(t,!1)}}}lineHasWidget(e){let t=e=>e.isWidget()||e.children.some(t);return t(this.tile.resolveBlock(e,1).tile)}destroy(){Eh(this.tile)}}function Eh(e,t){let i=null==t?void 0:t.get(e);if(1!=i){null==i&&e.destroy();for(let i of e.children)Eh(i,t)}}function Dh(e){return 1==e.node.nodeType&&e.node.firstChild&&(0==e.offset||"false"==e.node.childNodes[e.offset-1].contentEditable)&&(e.offset==e.node.childNodes.length||"false"==e.node.childNodes[e.offset].contentEditable)}function Lh(e,t){let i=e.observer.selectionRange;if(!i.focusNode)return null;let s=Ja(i.focusNode,i.focusOffset),n=el(i.focusNode,i.focusOffset),o=s||n;if(n&&s&&n.node!=s.node){let t=rh.get(n.node);if(!t||t.isText()&&t.text!=n.node.nodeValue)o=n;else if(e.docView.lastCompositionAfterCursor){let e=rh.get(s.node);!e||e.isText()&&e.text!=s.node.nodeValue||(o=n)}}if(e.docView.lastCompositionAfterCursor=o!=s,!o)return null;let r=t-o.offset;return{from:r,to:r+o.node.nodeValue.length,node:o.node}}function Bh(e,t,i){let s=Lh(e,i);if(!s)return null;let{node:n,from:o,to:r}=s,a=n.nodeValue;if(/[\n\r]/.test(a))return null;if(e.state.doc.sliceString(s.from,s.to)!=a)return null;let l=t.invertedDesc;return{range:new sh(l.mapPos(o),l.mapPos(r),o,r),text:n}}function Nh(e,t){return 1!=e.nodeType?0:(t&&"false"==e.childNodes[t-1].contentEditable?1:0)|(t<e.childNodes.length&&"false"==e.childNodes[t].contentEditable?2:0)}let zh=class{constructor(){this.changes=[]}compareRange(e,t){Oa(e,t,this.changes)}comparePoint(e,t){Oa(e,t,this.changes)}boundChange(e){Oa(e,e,this.changes)}};function Hh(e,t,i){let s=new zh;return kr.compare(e,t,i,s),s.changes}class Vh{constructor(){this.changes=[]}compareRange(e,t){Oa(e,t,this.changes)}comparePoint(){}boundChange(e){Oa(e,e,this.changes)}}function Gh(e,t,i){let s=new Vh;return kr.compare(e,t,i,s),s.changes}function Uh(e,t){for(let i=e;i&&i!=t;i=i.assignedSlot||i.parentNode)if(1==i.nodeType&&"false"==i.contentEditable)return!0;return!1}function Wh(e,t){let i=!1;return t&&e.iterChangedRanges((e,s)=>{e<t.to&&s>t.from&&(i=!0)}),i}class jh extends ba{constructor(e){super(),this.height=e}toDOM(){let e=document.createElement("div");return e.className="cm-gap",this.updateDOM(e),e}eq(e){return e.height==this.height}updateDOM(e){return e.style.height=this.height+"px",!0}get editable(){return!0}get estimatedHeight(){return this.height}ignoreEvent(){return!1}}function Fh(e,t,i=1){let s=e.charCategorizer(t),n=e.doc.lineAt(t),o=t-n.from;if(0==n.length)return Co.cursor(t);0==o?i=1:o==n.length&&(i=-1);let r=o,a=o;i<0?r=ro(n.text,o,!1):a=ro(n.text,o);let l=s(n.text.slice(r,a));for(;r>0;){let e=ro(n.text,r,!1);if(s(n.text.slice(e,r))!=l)break;r=e}for(;a<n.length;){let e=ro(n.text,a);if(s(n.text.slice(a,e))!=l)break;a=e}return Co.undirectionalRange(r+n.from,a+n.from)}function qh(e,t,i,s,n){let o=Math.round((s-t.left)*e.defaultCharacterWidth);if(e.lineWrapping&&i.height>1.5*e.defaultLineHeight){let t=e.viewState.heightOracle.textHeight;o+=Math.floor((n-i.top-.5*(e.defaultLineHeight-t))/t)*e.viewState.heightOracle.lineLength}let r=e.state.sliceDoc(i.from,i.to);return i.from+Br(r,o,e.state.tabSize)}function Qh(e,t,i){let s=e.lineBlockAt(t);if(Array.isArray(s.type)){let e;for(let n of s.type){if(n.from>t)break;if(!(n.to<t)){if(n.from<t&&n.to>t)return n;e&&(n.type!=_a.Text||e.type==n.type&&!(i<0?n.from<t:n.to>t))||(e=n)}}return e||s}return s}function Yh(e,t,i,s){let n=Qh(e,t.head,t.assoc||-1),o=s&&n.type==_a.Text&&(e.lineWrapping||n.widgetLineBreaks)?e.coordsAtPos(t.assoc<0&&t.head>n.from?t.head-1:t.head):null;if(o){let t=e.dom.getBoundingClientRect(),s=e.textDirectionAt(n.from),r=e.posAtCoords({x:i==(s==il.LTR)?t.right-1:t.left+1,y:(o.top+o.bottom)/2});if(null!=r)return Co.cursor(r,i?-1:1)}return Co.cursor(i?n.to:n.from,i?-1:1)}function Xh(e,t,i,s){let n=e.state.doc.lineAt(t.head),o=e.bidiSpans(n),r=e.textDirectionAt(n.from);for(let a=t,l=null;;){let t=kl(n,o,r,a,i),h=xl;if(!t){if(n.number==(i?e.state.doc.lines:1))return a;h="\n",n=e.state.doc.line(n.number+(i?1:-1)),o=e.bidiSpans(n),t=e.visualLineSide(n,!i)}if(l){if(!l(h))return a}else{if(!s)return t;l=s(h)}a=t}}function Kh(e,t,i){let s=e.state.charCategorizer(t),n=s(i);return e=>{let t=s(e);return n==dr.Space&&(n=t),n==t}}function Zh(e,t,i,s){let n=t.head,o=i?1:-1;if(n==(i?e.state.doc.length:0))return Co.cursor(n,t.assoc);let r,a=t.goalColumn,l=e.contentDOM.getBoundingClientRect(),h=e.coordsAtPos(n,t.assoc||((t.empty?i:t.head==t.from)?1:-1)),c=e.documentTop;if(h)null==a&&(a=h.left-l.left),r=o<0?h.top:h.bottom;else{let t=e.viewState.lineBlockAt(n);null==a&&(a=Math.min(l.right-l.left,e.defaultCharacterWidth*(n-t.from))),r=(o<0?t.top:t.bottom)+c}let d=l.left+a,u=e.viewState.heightOracle.textHeight>>1,f=null!=s?s:u;for(let t=0;;t+=u){let s=r+(f+t)*o,n=sc(e,{x:d,y:s},!1,o);if(i?s>l.bottom:s<l.top)return Co.cursor(n.pos,n.assoc);let h=e.coordsAtPos(n.pos,n.assoc),c=h?(h.top+h.bottom)/2:0;if(!h||(i?c>r:c<r))return Co.cursor(n.pos,n.assoc,void 0,a)}}function Jh(e,t,i){for(;;){let s=0;for(let n of e)n.between(t-1,t+1,(e,n,o)=>{if(t>e&&t<n){let o=s||i||(t-e<n-t?-1:1);t=o<0?e:n,s=o}});if(!s)return t}}function ec(e,t){let i=null;for(let s=0;s<t.ranges.length;s++){let n=t.ranges[s],o=null;if(n.empty){let t=Jh(e,n.from,0);t!=n.from&&(o=Co.cursor(t,-1))}else{let t=Jh(e,n.from,-1),i=Jh(e,n.to,1);t==n.from&&i==n.to||(o=n.undirectional?Co.undirectionalRange(n.from,n.to):Co.range(n.from==n.anchor?t:i,n.from==n.head?t:i))}o&&(i||(i=t.ranges.slice()),i[s]=o)}return i?Co.create(i,t.mainIndex):t}function tc(e,t,i){let s=Jh(e.state.facet(Kl).map(t=>t(e)),i.from,t.head>i.from?-1:1);return s==i.from?i:Co.cursor(s,s<i.from?1:-1)}class ic{constructor(e,t){this.pos=e,this.assoc=t}}function sc(e,t,i,s){let n,o=e.contentDOM.getBoundingClientRect(),r=o.top+e.viewState.paddingTop,{x:a,y:l}=t,h=l-r;for(;;){if(h<0)return new ic(0,1);if(h>e.viewState.docHeight)return new ic(e.state.doc.length,-1);if(n=e.elementAtHeight(h),null==s)break;if(n.type==_a.Text){if(s<0?n.to<e.viewport.from:n.from>e.viewport.to)break;let t=e.docView.coordsAt(s<0?n.from:n.to,s>0?-1:1);if(t&&(s<0?t.top<=h+r:t.bottom>=h+r))break}let t=e.viewState.heightOracle.textHeight/2;h=s>0?n.bottom+t:n.top-t}if(e.viewport.from>=n.to||e.viewport.to<=n.from){if(i)return null;if(n.type==_a.Text){let t=qh(e,o,n,a,l);return new ic(t,t==n.from?1:-1)}}if(n.type!=_a.Text)return h<(n.top+n.bottom)/2?new ic(n.from,1):new ic(n.to,-1);let c=e.docView.lineAt(n.from,2);return c&&c.length==n.length||(c=e.docView.lineAt(n.from,-2)),new nc(e,a,l,e.textDirectionAt(n.from)).scanTile(c,n.from)}class nc{constructor(e,t,i,s){this.view=e,this.x=t,this.y=i,this.baseDir=s,this.line=null,this.spans=null}bidiSpansAt(e){return(!this.line||this.line.from>e||this.line.to<e)&&(this.line=this.view.state.doc.lineAt(e),this.spans=this.view.bidiSpans(this.line)),this}baseDirAt(e,t){let{line:i,spans:s}=this.bidiSpansAt(e);return s[ul.find(s,e-i.from,-1,t)].level==this.baseDir}dirAt(e,t){let{line:i,spans:s}=this.bidiSpansAt(e);return s[ul.find(s,e-i.from,-1,t)].dir}bidiIn(e,t){let{spans:i,line:s}=this.bidiSpansAt(e);return i.length>1||i.length&&(i[0].level!=this.baseDir||i[0].to+s.from<t)}scan(e,t,i=!1){let s,n,o,r=0,a=e.length-1,l=new Set,h=this.bidiIn(e[0],e[a]),c=-1,d=1e9;e:for(;r<a;){let i=a-r,u=r+a>>1;t:if(l.has(u)){for(let e=1;e<i;e++){let t=u+e;if(t>=a&&(t-=i),!l.has(t)){u=t;break t}}break e}l.add(u);let f=t(u),p=0;if(f)for(let e=0;e<f.length;e++){let t=f[e];if(!(0==t.width&&f.length>1))if(t.bottom<this.y)(!s||s.bottom<t.bottom)&&(s=t),p=1;else if(t.top>this.y)(!n||n.top>t.top)&&(n=t),p=-1;else{let e=t.left>this.x?this.x-t.left:t.right<this.x?this.x-t.right:0,i=Math.abs(e);i<d&&(c=u,d=i,o=t),e&&(p=e<0==(this.baseDir==il.LTR)?-1:1)}}-1!=p||h&&!this.baseDirAt(e[u],1)?1!=p||h&&!this.baseDirAt(e[u+1],-1)||(r=u+1):a=u}if(!o){if(!n&&!s)return{i:e[0],after:!1};let i=s&&(!n||this.y-s.bottom<n.top-this.y)?s:n;return this.y=(i.top+i.bottom)/2,this.scan(e,t,!0)}if(d&&!i){let{top:i,bottom:r}=o;if(s&&s.bottom>(i+i+r)/3)return this.y=s.bottom-1,this.scan(e,t,!0);if(n&&n.top<(i+r+r)/3)return this.y=n.top+1,this.scan(e,t,!0)}let u=(h?this.dirAt(e[c],1):this.baseDir)==il.LTR;return{i:c,after:this.x>(o.left+o.right)/2==u}}scanText(e,t){let i=[];for(let s=0;s<e.length;s=ro(e.text,s))i.push(t+s);i.push(t+e.length);let s=this.scan(i,s=>{let n=i[s]-t,o=i[s+1]-t;return Qa(e.dom,n,o).getClientRects()});return s.after?new ic(i[s.i+1],-1):new ic(i[s.i],1)}scanTile(e,t){if(!e.length)return new ic(t,1);if(1==e.children.length){let i=e.children[0];if(i.isText())return this.scanText(i,t);if(i.isComposite())return this.scanTile(i,t)}let i=[t];for(let s=0,n=t;s<e.children.length;s++)i.push(n+=e.children[s].length);let s=this.scan(i,t=>{let i=e.children[t];return 48&i.flags?null:(1==i.dom.nodeType?i.dom:Qa(i.dom,0,i.length)).getClientRects()}),n=e.children[s.i],o=i[s.i];return n.isText()?this.scanText(n,o):n.isComposite()?this.scanTile(n,o):s.after?new ic(i[s.i+1],-1):new ic(o,1)}}const oc="￿";class rc{constructor(e,t){this.points=e,this.view=t,this.text="",this.lineSeparator=t.state.facet(mr.lineSeparator)}append(e){this.text+=e}lineBreak(){this.text+=oc}readRange(e,t){if(!e)return this;let i=e.parentNode;for(let s=e;;){this.findPointBefore(i,s);let e=this.text.length;this.readNode(s);let n=rh.get(s),o=s.nextSibling;if(o==t){(null==n?void 0:n.breakAfter)&&!o&&i!=this.view.contentDOM&&this.lineBreak();break}let r=rh.get(o);(n&&r?n.breakAfter:(n?n.breakAfter:Ea(s))||Ea(o)&&("BR"!=s.nodeName||(null==n?void 0:n.isWidget()))&&this.text.length>e)&&!lc(o,t)&&this.lineBreak(),s=o}return this.findPointBefore(i,t),this}readTextNode(e){let t=e.nodeValue;for(let i of this.points)i.node==e&&(i.pos=this.text.length+Math.min(i.offset,t.length));for(let i=0,s=this.lineSeparator?null:/\r\n?|\n/g;;){let n,o=-1,r=1;if(this.lineSeparator?(o=t.indexOf(this.lineSeparator,i),r=this.lineSeparator.length):(n=s.exec(t))&&(o=n.index,r=n[0].length),this.append(t.slice(i,o<0?t.length:o)),o<0)break;if(this.lineBreak(),r>1)for(let t of this.points)t.node==e&&t.pos>this.text.length&&(t.pos-=r-1);i=o+r}}readNode(e){let t=rh.get(e),i=t&&t.overrideDOMText;if(null!=i){this.findPointInside(e,i.length);for(let e=i.iter();!e.next().done;)e.lineBreak?this.lineBreak():this.append(e.value)}else 3==e.nodeType?this.readTextNode(e):"BR"==e.nodeName?e.nextSibling&&this.lineBreak():1==e.nodeType&&this.readRange(e.firstChild,null)}findPointBefore(e,t){for(let i of this.points)i.node==e&&e.childNodes[i.offset]==t&&(i.pos=this.text.length)}findPointInside(e,t){for(let i of this.points)(3==e.nodeType?i.node==e:e.contains(i.node))&&(i.pos=this.text.length+(ac(e,i.node,i.offset)?t:0))}}function ac(e,t,i){for(;;){if(!t||i<La(t))return!1;if(t==e)return!0;i=Ra(t)+1,t=t.parentNode}}function lc(e,t){let i;for(;e!=t&&e;e=e.nextSibling){let t=rh.get(e);if(!(null==t?void 0:t.isWidget()))return!1;t&&(i||(i=[])).push(t)}if(i)for(let e of i){let t=e.overrideDOMText;if(null==t?void 0:t.length)return!1}return!0}class hc{constructor(e,t){this.node=e,this.offset=t,this.pos=-1}}class cc{constructor(e,t,i,s){this.typeOver=s,this.bounds=null,this.text="",this.domChanged=t>-1;let{impreciseHead:n,impreciseAnchor:o}=e.docView,r=e.state.selection;if(e.state.readOnly&&t>-1)this.newSel=null;else if(t>-1&&(this.bounds=dc(e.docView.tile,t,i,0))){let t=n||o?[]:mc(e),i=new rc(t,e);i.readRange(this.bounds.startDOM,this.bounds.endDOM),this.text=i.text,this.newSel=vc(t,this.bounds.from)}else{let t=e.observer.selectionRange,i=n&&n.node==t.focusNode&&n.offset==t.focusOffset||!Ta(e.contentDOM,t.focusNode)?r.main.head:e.docView.posFromDOM(t.focusNode,t.focusOffset),s=o&&o.node==t.anchorNode&&o.offset==t.anchorOffset||!Ta(e.contentDOM,t.anchorNode)?r.main.anchor:e.docView.posFromDOM(t.anchorNode,t.anchorOffset),a=e.viewport;if((da.ios||da.chrome)&&i!=s&&Math.min(i,s)<=r.main.from&&Math.max(i,s)>=r.main.to&&(a.from>0||a.to<e.state.doc.length)){let t=Math.min(i,s),n=Math.max(i,s),o=a.from-t,r=a.to-n;0!=o&&1!=o&&0!=t||0!=r&&-1!=r&&n!=e.state.doc.length||(i=0,s=e.state.doc.length)}if(e.inputState.composing>-1&&r.ranges.length>1)this.newSel=r.replaceRange(Co.range(s,i));else if(e.lineWrapping&&s==i&&(!r.main.empty||r.main.head!=i)&&e.inputState.lastTouchTime>Date.now()-100){let t=e.coordsAtPos(i,-1),s=0;t&&(s=e.inputState.lastTouchY<=t.bottom?-1:1),this.newSel=Co.create([Co.cursor(i,s)])}else this.newSel=Co.single(s,i)}}}function dc(e,t,i,s){if(e.isComposite()){let n=-1,o=-1,r=-1,a=-1;for(let l=0,h=s,c=s;l<e.children.length;l++){let s=e.children[l],d=h+s.length;if(h<t&&d>i)return dc(s,t,i,h);if(d>=t&&-1==n&&(n=l,o=h),h>i&&s.dom.parentNode==e.dom){r=l,a=c;break}c=d,h=d+s.breakAfter}return{from:o,to:a<0?s+e.length:a,startDOM:(n?e.children[n-1].dom.nextSibling:null)||e.dom.firstChild,endDOM:r<e.children.length&&r>=0?e.children[r].dom:null}}return e.isText()?{from:s,to:s+e.length,startDOM:e.dom,endDOM:e.dom.nextSibling}:null}function uc(e,t){let i,{newSel:s}=t,{state:n}=e,o=n.selection.main,r=e.inputState.lastKeyTime>Date.now()-100?e.inputState.lastKeyCode:-1;if(t.bounds){let{from:e,to:s}=t.bounds,a=o.from,l=null;(8===r||da.android&&t.text.length<s-e)&&(a=o.to,l="end");let h,c,d=n.doc.sliceString(e,s,oc);!o.empty&&o.from>=e&&o.to<=s&&(t.typeOver||d!=t.text)&&d.slice(0,o.from-e)==t.text.slice(0,o.from-e)&&d.slice(o.to-e)==t.text.slice(h=t.text.length-(d.length-(o.to-e)))?i={from:o.from,to:o.to,insert:Yn.of(t.text.slice(o.from-e,h).split(oc))}:(c=gc(d,t.text,a-e,l))&&(da.chrome&&13==r&&c.toB==c.from+2&&t.text.slice(c.from,c.toB)==oc+oc&&c.toB--,i={from:e+c.from,to:e+c.toA,insert:Yn.of(t.text.slice(c.from,c.toB).split(oc))})}else s&&(!e.hasFocus&&n.facet(Vl)||bc(s,o))&&(s=null);if(!i&&!s)return!1;if((da.mac||da.android)&&i&&i.from==i.to&&i.from==o.head-1&&/^\. ?$/.test(i.insert.toString())&&"off"==e.contentDOM.getAttribute("autocorrect")?(s&&2==i.insert.length&&(s=Co.single(s.main.anchor-1,s.main.head-1)),i={from:i.from,to:i.to,insert:Yn.of([i.insert.toString().replace("."," ")])}):n.doc.lineAt(o.from).to<o.to&&e.docView.lineHasWidget(o.to)&&e.inputState.insertingTextAt>Date.now()-50?i={from:o.from,to:o.to,insert:n.toText(e.inputState.insertingText)}:da.chrome&&i&&i.from==i.to&&i.from==o.head&&"\n "==i.insert.toString()&&e.lineWrapping&&(s&&(s=Co.single(s.main.anchor-1,s.main.head-1)),i={from:o.from,to:o.to,insert:Yn.of([" "])}),i)return fc(e,i,s,r);if(s&&!bc(s,o)){let t=!1,i="select";return e.inputState.lastSelectionTime>Date.now()-50&&("select"==e.inputState.lastSelectionOrigin&&(t=!0),i=e.inputState.lastSelectionOrigin,"select.pointer"==i&&(s=ec(n.facet(Kl).map(t=>t(e)),s))),e.dispatch({selection:s,scrollIntoView:t,userEvent:i}),!0}return!1}function fc(e,t,i,s=-1){if(da.ios&&e.inputState.flushIOSKey(t))return!0;let n=e.state.selection.main;if(da.android&&(t.to==n.to&&(t.from==n.from||t.from==n.from-1&&" "==e.state.sliceDoc(t.from,n.from))&&1==t.insert.length&&2==t.insert.lines&&Ya(e.contentDOM,"Enter",13)||(t.from==n.from-1&&t.to==n.to&&0==t.insert.length||8==s&&t.insert.length<t.to-t.from&&t.to>n.head)&&Ya(e.contentDOM,"Backspace",8)||t.from==n.from&&t.to==n.to+1&&0==t.insert.length&&Ya(e.contentDOM,"Delete",46)))return!0;let o,r=t.insert.toString();e.inputState.composing>=0&&e.inputState.composing++;let a=()=>o||(o=pc(e,t,i));return e.state.facet(Ml).some(i=>i(e,t.from,t.to,r,a))||e.dispatch(a()),!0}function pc(e,t,i){let s,n=e.state,o=n.selection.main,r=-1;if(t.from==t.to&&t.from<o.from||t.from>o.to){let i=t.from<o.from?-1:1,s=i<0?o.from:o.to,a=Jh(n.facet(Kl).map(t=>t(e)),s,i);t.from==a&&(r=a)}if(r>-1)s={changes:t,selection:Co.cursor(t.from+t.insert.length,-1)};else if(t.from>=o.from&&t.to<=o.to&&t.to-t.from>=(o.to-o.from)/3&&(!i||i.main.empty&&i.main.from==t.from+t.insert.length)&&e.inputState.composing<0){let i=o.from<t.from?n.sliceDoc(o.from,t.from):"",r=o.to>t.to?n.sliceDoc(t.to,o.to):"";s=n.replaceSelection(e.state.toText(i+t.insert.sliceString(0,void 0,e.state.lineBreak)+r))}else{let r=n.changes(t),a=i&&i.main.to<=r.newLength?i.main:void 0;if(n.selection.ranges.length>1&&(e.inputState.composing>=0||e.inputState.compositionPendingChange)&&t.to<=o.to+10&&t.to>=o.to-10){let l,h=e.state.sliceDoc(t.from,t.to),c=i&&Lh(e,i.main.head);if(c){let e=t.insert.length-(t.to-t.from);l={from:c.from,to:c.to-e}}else l=e.state.doc.lineAt(o.head);let d=o.to-t.to;s=n.changeByRange(i=>{if(i.from==o.from&&i.to==o.to)return{changes:r,range:a||i.map(r)};let s=i.to-d,c=s-h.length;if(e.state.sliceDoc(c,s)!=h||s>=l.from&&c<=l.to)return{range:i};let u=n.changes({from:c,to:s,insert:t.insert}),f=i.to-o.to;return{changes:u,range:a?Co.range(Math.max(0,a.anchor+f),Math.max(0,a.head+f)):i.map(u)}})}else s={changes:r,selection:a&&n.selection.replaceRange(a)}}let a="input.type";return(e.composing||e.inputState.compositionPendingChange&&e.inputState.compositionEndedAt>Date.now()-50)&&(e.inputState.compositionPendingChange=!1,a+=".compose",e.inputState.compositionFirstChange&&(a+=".start",e.inputState.compositionFirstChange=!1)),n.update(s,{userEvent:a,scrollIntoView:!0})}function gc(e,t,i,s){let n=Math.min(e.length,t.length),o=0;for(;o<n&&e.charCodeAt(o)==t.charCodeAt(o);)o++;if(o==n&&e.length==t.length)return null;let r=e.length,a=t.length;for(;r>0&&a>0&&e.charCodeAt(r-1)==t.charCodeAt(a-1);)r--,a--;if("end"==s){i-=r+Math.max(0,o-Math.min(r,a))-o}if(r<o&&e.length<t.length){o-=i<=o&&i>=r?o-i:0,a=o+(a-r),r=o}else if(a<o){o-=i<=o&&i>=a?o-i:0,r=o+(r-a),a=o}return{from:o,toA:r,toB:a}}function mc(e){let t=[];if(e.root.activeElement!=e.contentDOM)return t;let{anchorNode:i,anchorOffset:s,focusNode:n,focusOffset:o}=e.observer.selectionRange;return i&&(t.push(new hc(i,s)),n==i&&o==s||t.push(new hc(n,o))),t}function vc(e,t){if(0==e.length)return null;let i=e[0].pos,s=2==e.length?e[1].pos:i;return i>-1&&s>-1?Co.single(i+t,s+t):null}function bc(e,t){return t.head==e.main.head&&t.anchor==e.main.anchor}class _c{setSelectionOrigin(e){this.lastSelectionOrigin=e,this.lastSelectionTime=Date.now()}constructor(e){this.view=e,this.lastKeyCode=0,this.lastKeyTime=0,this.touchActive=!1,this.lastTouchTime=0,this.lastTouchX=0,this.lastTouchY=0,this.lastFocusTime=0,this.lastScrollTop=0,this.lastScrollLeft=0,this.lastWheelEvent=0,this.pendingIOSKey=void 0,this.lastIOSMomentumScroll=0,this.tabFocusMode=-1,this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastContextMenu=0,this.scrollHandlers=[],this.handlers=Object.create(null),this.composing=-1,this.compositionFirstChange=null,this.compositionEndedAt=0,this.compositionPendingKey=!1,this.compositionPendingChange=!1,this.insertingText="",this.insertingTextAt=0,this.mouseSelection=null,this.draggedContent=null,this.handleEvent=this.handleEvent.bind(this),this.notifiedFocused=e.hasFocus,da.safari&&e.contentDOM.addEventListener("input",()=>null),da.gecko&&id(e.contentDOM.ownerDocument)}handleEvent(e){Rc(this.view,e)&&!this.ignoreDuringComposition(e)&&("keydown"==e.type&&this.keydown(e)||(0!=this.view.updateState?Promise.resolve().then(()=>this.runHandlers(e.type,e)):this.runHandlers(e.type,e)))}runHandlers(e,t){let i=this.handlers[e];if(i){for(let e of i.observers)e(this.view,t);for(let e of i.handlers){if(t.defaultPrevented)break;if(e(this.view,t)){t.preventDefault();break}}}}ensureHandlers(e){let t=xc(e),i=this.handlers,s=this.view.contentDOM;for(let e in t)if("scroll"!=e){let n=!t[e].handlers.length,o=i[e];o&&n!=!o.handlers.length&&(s.removeEventListener(e,this.handleEvent),o=null),o||s.addEventListener(e,this.handleEvent,{passive:n})}for(let e in i)"scroll"==e||t[e]||s.removeEventListener(e,this.handleEvent);this.handlers=t}keydown(e){if(this.lastKeyCode=e.keyCode,this.lastKeyTime=Date.now(),9==e.keyCode&&this.tabFocusMode>-1&&(!this.tabFocusMode||Date.now()<=this.tabFocusMode))return!0;if(this.tabFocusMode>0&&27!=e.keyCode&&Sc.indexOf(e.keyCode)<0&&(this.tabFocusMode=-1),da.android&&da.chrome&&!e.synthetic&&(13==e.keyCode||8==e.keyCode))return this.view.observer.delayAndroidKey(e.key,e.keyCode),!0;if(da.ios&&!e.synthetic&&!e.altKey&&!e.metaKey&&(kc.some(t=>t.keyCode==e.keyCode)&&!e.ctrlKey||Cc.indexOf(e.key)>-1&&e.ctrlKey)){let t={ctrlKey:e.ctrlKey,altKey:e.altKey,metaKey:e.metaKey,shiftKey:e.shiftKey};return t.shiftKey&&da.ios&&!/^(off|none)$/.test(this.view.contentDOM.autocapitalize)&&wc(this.view.win)&&(t.shiftKey=!1),this.pendingIOSKey={key:e.key,keyCode:e.keyCode,mods:t},setTimeout(()=>this.flushIOSKey(),250),!0}return 229!=e.keyCode&&this.view.observer.forceFlush(),!1}flushIOSKey(e){let t=this.pendingIOSKey;return!!t&&(!("Enter"==t.key&&e&&e.from<e.to&&/^\S+$/.test(e.insert.toString()))&&(this.pendingIOSKey=void 0,Ya(this.view.contentDOM,t.key,t.keyCode,t.mods)))}ignoreDuringComposition(e){return!(!/^key/.test(e.type)||e.synthetic)&&(this.composing>0||!!(da.safari&&!da.ios&&this.compositionPendingKey&&Date.now()-this.compositionEndedAt<100)&&(this.compositionPendingKey=!1,!0))}startMouseSelection(e){this.mouseSelection&&this.mouseSelection.destroy(),this.mouseSelection=e}update(e){this.view.observer.update(e),this.mouseSelection&&this.mouseSelection.update(e),this.draggedContent&&e.docChanged&&(this.draggedContent=this.draggedContent.map(e.changes)),e.transactions.length&&(this.lastKeyCode=this.lastSelectionTime=0)}destroy(){this.mouseSelection&&this.mouseSelection.destroy()}}function wc(e){return!!e.visualViewport&&e.visualViewport.height*e.visualViewport.scale/e.document.documentElement.clientHeight<.85}function yc(e,t){return(i,s)=>{try{return t.call(e,s,i)}catch(e){Hl(i.state,e)}}}function xc(e){let t=Object.create(null);function i(e){return t[e]||(t[e]={observers:[],handlers:[]})}for(let t of e){let e=t.spec,s=e&&e.plugin.domEventHandlers,n=e&&e.plugin.domEventObservers;if(s)for(let e in s){let n=s[e];n&&i(e).handlers.push(yc(t.value,n))}if(n)for(let e in n){let s=n[e];s&&i(e).observers.push(yc(t.value,s))}}for(let e in Ec)i(e).handlers.push(Ec[e]);for(let e in Dc)i(e).observers.push(Dc[e]);return t}const kc=[{key:"Backspace",keyCode:8,inputType:"deleteContentBackward"},{key:"Enter",keyCode:13,inputType:"insertParagraph"},{key:"Enter",keyCode:13,inputType:"insertLineBreak"},{key:"Delete",keyCode:46,inputType:"deleteContentForward"}],Cc="dthko",Sc=[16,17,18,20,91,92,224,225],Oc=6;function Ac(e){return.7*Math.max(0,e)+8}function Pc(e,t){return Math.max(Math.abs(e.clientX-t.clientX),Math.abs(e.clientY-t.clientY))}class Tc{constructor(e,t,i,s){this.view=e,this.startEvent=t,this.style=i,this.mustSelect=s,this.scrollSpeed={x:0,y:0},this.scrolling=-1,this.lastEvent=t,this.scrollParents=Va(e.contentDOM),this.atoms=e.state.facet(Kl).map(t=>t(e));let n=e.contentDOM.ownerDocument;n.addEventListener("mousemove",this.move=this.move.bind(this)),n.addEventListener("mouseup",this.up=this.up.bind(this)),this.extend=t.shiftKey,this.multiple=e.state.facet(mr.allowMultipleSelections)&&Mc(e,t),this.dragging=!(!Ic(e,t)||1!=jc(t))&&null}start(e){!1===this.dragging&&this.select(e)}move(e){if(0==e.buttons)return this.destroy();if(this.dragging||null==this.dragging&&Pc(this.startEvent,e)<10)return;this.select(this.lastEvent=e);let t=0,i=0,s=0,n=0,o=this.view.win.innerWidth,r=this.view.win.innerHeight;this.scrollParents.x&&({left:s,right:o}=this.scrollParents.x.getBoundingClientRect()),this.scrollParents.y&&({top:n,bottom:r}=this.scrollParents.y.getBoundingClientRect());let a=th(this.view);e.clientX-a.left<=s+6?t=-Ac(s-e.clientX):e.clientX+a.right>=o-6&&(t=Ac(e.clientX-o)),e.clientY-a.top<=n+6?i=-Ac(n-e.clientY):e.clientY+a.bottom>=r-6&&(i=Ac(e.clientY-r)),this.setScrollSpeed(t,i)}up(e){null==this.dragging&&this.select(this.lastEvent),this.dragging||e.preventDefault(),this.destroy()}destroy(){this.setScrollSpeed(0,0);let e=this.view.contentDOM.ownerDocument;e.removeEventListener("mousemove",this.move),e.removeEventListener("mouseup",this.up),this.view.inputState.mouseSelection=this.view.inputState.draggedContent=null}setScrollSpeed(e,t){this.scrollSpeed={x:e,y:t},e||t?this.scrolling<0&&(this.scrolling=setInterval(()=>this.scroll(),50)):this.scrolling>-1&&(clearInterval(this.scrolling),this.scrolling=-1)}scroll(){let{x:e,y:t}=this.scrollSpeed;e&&this.scrollParents.x&&(this.scrollParents.x.scrollLeft+=e,e=0),t&&this.scrollParents.y&&(this.scrollParents.y.scrollTop+=t,t=0),(e||t)&&this.view.win.scrollBy(e,t),!1===this.dragging&&this.select(this.lastEvent)}select(e){let{view:t}=this,i=ec(this.atoms,this.style.get(e,this.extend,this.multiple));!this.mustSelect&&i.eq(t.state.selection,!1===this.dragging)||this.view.dispatch({selection:i,userEvent:"select.pointer"}),this.mustSelect=!1}update(e){e.transactions.some(e=>e.isUserEvent("input.type"))?this.destroy():this.style.update(e)&&setTimeout(()=>this.select(this.lastEvent),20)}}function Mc(e,t){let i=e.state.facet(Sl);return i.length?i[0](t):da.mac?t.metaKey:t.ctrlKey}function $c(e,t){let i=e.state.facet(Ol);return i.length?i[0](t):da.mac?!t.altKey:!t.ctrlKey}function Ic(e,t){let{main:i}=e.state.selection;if(i.empty)return!1;let s=Pa(e.root);if(!s||0==s.rangeCount)return!0;let n=s.getRangeAt(0).getClientRects();for(let e=0;e<n.length;e++){let i=n[e];if(i.left<=t.clientX&&i.right>=t.clientX&&i.top<=t.clientY&&i.bottom>=t.clientY)return!0}return!1}function Rc(e,t){if(!t.bubbles)return!0;if(t.defaultPrevented)return!1;for(let i,s=t.target;s!=e.contentDOM;s=s.parentNode)if(!s||11==s.nodeType||(i=rh.get(s))&&i.isWidget()&&!i.isHidden&&i.widget.ignoreEvent(t))return!1;return!0}const Ec=Object.create(null),Dc=Object.create(null),Lc=da.ie&&da.ie_version<15||da.ios&&da.webkit_version<604;function Bc(e){let t=e.dom.parentNode;if(!t)return;let i=t.appendChild(document.createElement("textarea"));i.style.cssText="position: fixed; left: -10000px; top: 10px",i.focus(),setTimeout(()=>{e.focus(),i.remove(),zc(e,i.value)},50)}function Nc(e,t,i){for(let s of e.facet(t))i=s(i,e);return i}function zc(e,t){t=Nc(e.state,Il,t);let i,{state:s}=e,n=1,o=s.toText(t),r=o.lines==s.selection.ranges.length,a=null!=Kc&&s.selection.ranges.every(e=>e.empty)&&Kc==o.toString();if(a){let e=-1;i=s.changeByRange(i=>{let a=s.doc.lineAt(i.from);if(a.from==e)return{range:i};e=a.from;let l=s.toText((r?o.line(n++).text:t)+s.lineBreak);return{changes:{from:a.from,insert:l},range:Co.cursor(i.from+l.length)}})}else i=r?s.changeByRange(e=>{let t=o.line(n++);return{changes:{from:e.from,to:e.to,insert:t.text},range:Co.cursor(e.from+t.length)}}):s.replaceSelection(o);e.dispatch(i,{userEvent:"input.paste",scrollIntoView:!0})}function Hc(e,t,i,s){if(1==s)return Co.cursor(t,i);if(2==s)return Fh(e.state,t,i);{let s=e.docView.lineAt(t,i),n=e.state.doc.lineAt(s?s.posAtEnd:t),o=s?s.posAtStart:n.from,r=s?s.posAtEnd:n.to;return r<e.state.doc.length&&r==n.to&&r++,Co.undirectionalRange(o,r)}}Dc.scroll=e=>{let t=e.inputState;t.lastScrollTop=e.scrollDOM.scrollTop,t.lastScrollLeft=e.scrollDOM.scrollLeft,da.ios&&!t.touchActive&&(t.lastIOSMomentumScroll=Date.now())},Dc.wheel=Dc.mousewheel=e=>{e.inputState.lastWheelEvent=Date.now()},Ec.keydown=(e,t)=>(e.inputState.setSelectionOrigin("select"),27==t.keyCode&&0!=e.inputState.tabFocusMode&&(e.inputState.tabFocusMode=Date.now()+2e3),!1),Dc.touchstart=(e,t)=>{let i=e.inputState,s=t.targetTouches[0];i.touchActive=!0,i.lastTouchTime=Date.now(),s&&(i.lastTouchX=s.clientX,i.lastTouchY=s.clientY),i.setSelectionOrigin("select.pointer")},Dc.touchmove=e=>{e.inputState.setSelectionOrigin("select.pointer")},Dc.touchend=(e,t)=>{e.inputState.touchActive=!1},Ec.mousedown=(e,t)=>{if(e.observer.flush(),e.inputState.lastTouchTime>Date.now()-2e3)return!1;let i=null;for(let s of e.state.facet(Al))if(i=s(e,t),i)break;if(i||0!=t.button||(i=Fc(e,t)),i){let s=!e.hasFocus;e.inputState.startMouseSelection(new Tc(e,t,i,s)),s&&e.observer.ignore(()=>{qa(e.contentDOM);let t=e.root.activeElement;t&&!t.contains(e.contentDOM)&&t.blur()});let n=e.inputState.mouseSelection;if(n)return n.start(t),!1===n.dragging}else e.inputState.setSelectionOrigin("select.pointer");return!1};const Vc=da.ie&&da.ie_version<=11;let Gc=null,Uc=0,Wc=0;function jc(e){if(!Vc)return e.detail;let t=Gc,i=Wc;return Gc=e,Wc=Date.now(),Uc=!t||i>Date.now()-400&&Math.abs(t.clientX-e.clientX)<2&&Math.abs(t.clientY-e.clientY)<2?(Uc+1)%3:1}function Fc(e,t){let i=e.posAndSideAtCoords({x:t.clientX,y:t.clientY},!1),s=jc(t),n=e.state.selection;return{update(e){e.docChanged&&(i.pos=e.changes.mapPos(i.pos),n=n.map(e.changes))},get(t,o,r){let a,l=e.posAndSideAtCoords({x:t.clientX,y:t.clientY},!1),h=Hc(e,l.pos,l.assoc,s);if(i.pos!=l.pos&&!o){let t=Hc(e,i.pos,i.assoc,s),n=Math.min(t.from,h.from),o=Math.max(t.to,h.to);h=n<h.from?Co.range(n,o,h.assoc):Co.range(o,n,h.assoc)}return o?n.replaceRange(n.main.extend(h.from,h.to,h.assoc)):r&&1==s&&n.ranges.length>1&&(a=qc(n,l.pos))?a:r?n.addRange(h):Co.create([h])}}}function qc(e,t){for(let i=0;i<e.ranges.length;i++){let{from:s,to:n}=e.ranges[i];if(s<=t&&n>=t)return Co.create(e.ranges.slice(0,i).concat(e.ranges.slice(i+1)),e.mainIndex==i?0:e.mainIndex-(e.mainIndex>i?1:0))}return null}function Qc(e,t,i,s){if(!(i=Nc(e.state,Il,i)))return;let n=e.posAtCoords({x:t.clientX,y:t.clientY},!1),{draggedContent:o}=e.inputState,r=s&&o&&$c(e,t)?{from:o.from,to:o.to}:null,a={from:n,insert:i},l=e.state.changes(r?[r,a]:a);e.focus(),e.dispatch({changes:l,selection:{anchor:l.mapPos(n,-1),head:l.mapPos(n,1)},userEvent:r?"move.drop":"input.drop"}),e.inputState.draggedContent=null}function Yc(e,t){let i=e.dom.parentNode;if(!i)return;let s=i.appendChild(document.createElement("textarea"));s.style.cssText="position: fixed; left: -10000px; top: 10px",s.value=t,s.focus(),s.selectionEnd=t.length,s.selectionStart=0,setTimeout(()=>{s.remove(),e.focus()},50)}function Xc(e){let t=[],i=[],s=!1;for(let s of e.selection.ranges)s.empty||(t.push(e.sliceDoc(s.from,s.to)),i.push(s));if(!t.length){let n=-1;for(let{from:s}of e.selection.ranges){let o=e.doc.lineAt(s);o.number>n&&(t.push(o.text),i.push({from:o.from,to:Math.min(e.doc.length,o.to+1)})),n=o.number}s=!0}return{text:Nc(e,Rl,t.join(e.lineBreak)),ranges:i,linewise:s}}Ec.dragstart=(e,t)=>{let{selection:{main:i}}=e.state;if(t.target.draggable){let s=e.docView.tile.nearest(t.target);if(s&&s.isWidget()){let e=s.posAtStart,t=e+s.length;(e>=i.to||t<=i.from)&&(i=Co.undirectionalRange(e,t))}}let{inputState:s}=e;return s.mouseSelection&&(s.mouseSelection.dragging=!0),s.draggedContent=i,t.dataTransfer&&(t.dataTransfer.setData("Text",Nc(e.state,Rl,e.state.sliceDoc(i.from,i.to))),t.dataTransfer.effectAllowed="copyMove"),!1},Ec.dragend=e=>(e.inputState.draggedContent=null,!1),Ec.drop=(e,t)=>{if(!t.dataTransfer)return!1;if(e.state.readOnly)return!0;let i=t.dataTransfer.files;if(i&&i.length){let s=Array(i.length),n=0,o=()=>{++n==i.length&&Qc(e,t,s.filter(e=>null!=e).join(e.state.lineBreak),!1)};for(let e=0;e<i.length;e++){let t=new FileReader;t.onerror=o,t.onload=()=>{/[\x00-\x08\x0e-\x1f]{2}/.test(t.result)||(s[e]=t.result),o()},t.readAsText(i[e])}return!0}{let i=t.dataTransfer.getData("Text");if(i)return Qc(e,t,i,!0),!0}return!1},Ec.paste=(e,t)=>{if(e.state.readOnly)return!0;e.observer.flush();let i=Lc?null:t.clipboardData;return i?(zc(e,i.getData("text/plain")||i.getData("text/uri-list")),!0):(Bc(e),!1)};let Kc=null;Ec.copy=Ec.cut=(e,t)=>{if(!Ma(e.contentDOM,e.observer.selectionRange))return!1;let{text:i,ranges:s,linewise:n}=Xc(e.state);if(!i&&!n)return!1;Kc=n?i:null,"cut"!=t.type||e.state.readOnly||e.dispatch({changes:s,scrollIntoView:!0,userEvent:"delete.cut"});let o=Lc?null:t.clipboardData;return o?(o.clearData(),o.setData("text/plain",i),!0):(Yc(e,i),!1)};const Zc=Zo.define();function Jc(e,t){let i=[];for(let s of e.facet($l)){let n=s(e,t);n&&i.push(n)}return i.length?e.update({effects:i,annotations:Zc.of(!0)}):null}function ed(e){setTimeout(()=>{let t=e.hasFocus;if(t!=e.inputState.notifiedFocused){let i=Jc(e.state,t);i?e.dispatch(i):e.update([])}},10)}Dc.focus=e=>{e.inputState.lastFocusTime=Date.now(),e.scrollDOM.scrollTop||!e.inputState.lastScrollTop&&!e.inputState.lastScrollLeft||(e.scrollDOM.scrollTop=e.inputState.lastScrollTop,e.scrollDOM.scrollLeft=e.inputState.lastScrollLeft),ed(e)},Dc.blur=e=>{e.observer.clearSelectionRange(),ed(e)},Dc.compositionstart=Dc.compositionupdate=e=>{e.observer.editContext||(null==e.inputState.compositionFirstChange&&(e.inputState.compositionFirstChange=!0),e.inputState.composing<0&&(e.inputState.composing=0))},Dc.compositionend=e=>{e.observer.editContext||(e.inputState.composing=-1,e.inputState.compositionEndedAt=Date.now(),e.inputState.compositionPendingKey=!0,e.inputState.compositionPendingChange=e.observer.pendingRecords().length>0,e.inputState.compositionFirstChange=null,da.chrome&&da.android?e.observer.flushSoon():e.inputState.compositionPendingChange?Promise.resolve().then(()=>e.observer.flush()):setTimeout(()=>{e.inputState.composing<0&&e.docView.hasComposition&&e.update([])},50))},Dc.contextmenu=e=>{e.inputState.lastContextMenu=Date.now()},Ec.beforeinput=(e,t)=>{var i,s;if("insertText"!=t.inputType&&"insertCompositionText"!=t.inputType||(e.inputState.insertingText=t.data,e.inputState.insertingTextAt=Date.now()),"insertReplacementText"==t.inputType&&e.observer.editContext){let s=null===(i=t.dataTransfer)||void 0===i?void 0:i.getData("text/plain"),n=t.getTargetRanges();if(s&&n.length){let t=n[0],i=e.posAtDOM(t.startContainer,t.startOffset),o=e.posAtDOM(t.endContainer,t.endOffset);return fc(e,{from:i,to:o,insert:e.state.toText(s)},null),!0}}let n;if(da.chrome&&da.android&&(n=kc.find(e=>e.inputType==t.inputType))&&(e.observer.delayAndroidKey(n.key,n.keyCode),"Backspace"==n.key||"Delete"==n.key)){let t=(null===(s=window.visualViewport)||void 0===s?void 0:s.height)||0;setTimeout(()=>{var i;((null===(i=window.visualViewport)||void 0===i?void 0:i.height)||0)>t+10&&e.hasFocus&&(e.contentDOM.blur(),e.focus())},100)}return da.ios&&"deleteContentForward"==t.inputType&&e.observer.flushSoon(),da.safari&&"insertText"==t.inputType&&e.inputState.composing>=0&&setTimeout(()=>Dc.compositionend(e,t),20),!1};const td=new Set;function id(e){td.has(e)||(td.add(e),e.addEventListener("copy",()=>{}),e.addEventListener("cut",()=>{}))}const sd=["pre-wrap","normal","pre-line","break-spaces"];let nd=!1;function od(){nd=!1}class rd{constructor(e){this.lineWrapping=e,this.doc=Yn.empty,this.heightSamples={},this.lineHeight=14,this.charWidth=7,this.textHeight=14,this.lineLength=30}heightForGap(e,t){let i=this.doc.lineAt(t).number-this.doc.lineAt(e).number+1;return this.lineWrapping&&(i+=Math.max(0,Math.ceil((t-e-i*this.lineLength*.5)/this.lineLength))),this.lineHeight*i}heightForLine(e){if(!this.lineWrapping)return this.lineHeight;return(1+Math.max(0,Math.ceil((e-this.lineLength)/Math.max(1,this.lineLength-5))))*this.lineHeight}setDoc(e){return this.doc=e,this}mustRefreshForWrapping(e){return sd.indexOf(e)>-1!=this.lineWrapping}mustRefreshForHeights(e){let t=!1;for(let i=0;i<e.length;i++){let s=e[i];s<0?i++:this.heightSamples[Math.floor(10*s)]||(t=!0,this.heightSamples[Math.floor(10*s)]=!0)}return t}refresh(e,t,i,s,n,o){let r=sd.indexOf(e)>-1,a=Math.abs(t-this.lineHeight)>.3||this.lineWrapping!=r;if(this.lineWrapping=r,this.lineHeight=t,this.charWidth=i,this.textHeight=s,this.lineLength=n,a){this.heightSamples={};for(let e=0;e<o.length;e++){let t=o[e];t<0?e++:this.heightSamples[Math.floor(10*t)]=!0}}return a}}class ad{constructor(e,t){this.from=e,this.heights=t,this.index=0}get more(){return this.index<this.heights.length}}class ld{constructor(e,t,i,s,n){this.from=e,this.length=t,this.top=i,this.height=s,this._content=n}get type(){return"number"==typeof this._content?_a.Text:Array.isArray(this._content)?this._content:this._content.type}get to(){return this.from+this.length}get bottom(){return this.top+this.height}get widget(){return this._content instanceof ka?this._content.widget:null}get widgetLineBreaks(){return"number"==typeof this._content?this._content:0}join(e){let t=(Array.isArray(this._content)?this._content:[this]).concat(Array.isArray(e._content)?e._content:[e]);return new ld(this.from,this.length+e.length,this.top,this.height+e.height,t)}}var hd=function(e){return e[e.ByPos=0]="ByPos",e[e.ByHeight=1]="ByHeight",e[e.ByPosNoHeight=2]="ByPosNoHeight",e}(hd||(hd={}));const cd=.001;class dd{constructor(e,t,i=2){this.length=e,this.height=t,this.flags=i}get outdated(){return(2&this.flags)>0}set outdated(e){this.flags=(e?2:0)|-3&this.flags}setHeight(e){this.height!=e&&(Math.abs(this.height-e)>cd&&(nd=!0),this.height=e)}replace(e,t,i){return dd.of(i)}decomposeLeft(e,t){t.push(this)}decomposeRight(e,t){t.push(this)}applyChanges(e,t,i,s){let n=this,o=i.doc;for(let r=s.length-1;r>=0;r--){let{fromA:a,toA:l,fromB:h,toB:c}=s[r],d=n.lineAt(a,hd.ByPosNoHeight,i.setDoc(t),0,0),u=d.to>=l?d:n.lineAt(l,hd.ByPosNoHeight,i,0,0);for(c+=u.to-l,l=u.to;r>0&&d.from<=s[r-1].toA;)a=s[r-1].fromA,h=s[r-1].fromB,r--,a<d.from&&(d=n.lineAt(a,hd.ByPosNoHeight,i,0,0));h+=d.from-a,a=d.from;let f=wd.build(i.setDoc(o),e,h,c);n=ud(n,n.replace(a,l,f))}return n.updateHeight(i,0)}static empty(){return new gd(0,0,0)}static of(e){if(1==e.length)return e[0];let t=0,i=e.length,s=0,n=0;for(;;)if(t==i)if(s>2*n){let n=e[t-1];n.break?e.splice(--t,1,n.left,null,n.right):e.splice(--t,1,n.left,n.right),i+=1+n.break,s-=n.size}else{if(!(n>2*s))break;{let t=e[i];t.break?e.splice(i,1,t.left,null,t.right):e.splice(i,1,t.left,t.right),i+=2+t.break,n-=t.size}}else if(s<n){let i=e[t++];i&&(s+=i.size)}else{let t=e[--i];t&&(n+=t.size)}let o=0;return null==e[t-1]?(o=1,t--):null==e[t]&&(o=1,i++),new vd(dd.of(e.slice(0,t)),o,dd.of(e.slice(i)))}}function ud(e,t){return e==t?e:(e.constructor!=t.constructor&&(nd=!0),t)}dd.prototype.size=1;const fd=wa.replace({});class pd extends dd{constructor(e,t,i){super(e,t),this.deco=i,this.spaceAbove=0}mainBlock(e,t){return new ld(t,this.length,e+this.spaceAbove,this.height-this.spaceAbove,this.deco||0)}blockAt(e,t,i,s){return this.spaceAbove&&e<i+this.spaceAbove?new ld(s,0,i,this.spaceAbove,fd):this.mainBlock(i,s)}lineAt(e,t,i,s,n){let o=this.mainBlock(s,n);return this.spaceAbove?this.blockAt(0,i,s,n).join(o):o}forEachLine(e,t,i,s,n,o){e<=n+this.length&&t>=n&&o(this.lineAt(0,hd.ByPos,i,s,n))}setMeasuredHeight(e){let t=e.heights[e.index++];t<0?(this.spaceAbove=-t,t=e.heights[e.index++]):this.spaceAbove=0,this.setHeight(t)}updateHeight(e,t=0,i=!1,s){return s&&s.from<=t&&s.more&&this.setMeasuredHeight(s),this.outdated=!1,this}toString(){return`block(${this.length})`}}class gd extends pd{constructor(e,t,i){super(e,t,null),this.collapsed=0,this.widgetHeight=0,this.breaks=0,this.spaceAbove=i}mainBlock(e,t){return new ld(t,this.length,e+this.spaceAbove,this.height-this.spaceAbove,this.breaks)}replace(e,t,i){let s=i[0];return 1==i.length&&(s instanceof gd||s instanceof md&&4&s.flags)&&Math.abs(this.length-s.length)<10?(s instanceof md?s=new gd(s.length,this.height,this.spaceAbove):s.height=this.height,this.outdated||(s.outdated=!1),s):dd.of(i)}updateHeight(e,t=0,i=!1,s){return s&&s.from<=t&&s.more?this.setMeasuredHeight(s):(i||this.outdated)&&(this.spaceAbove=0,this.setHeight(Math.max(this.widgetHeight,e.heightForLine(this.length-this.collapsed))+this.breaks*e.lineHeight)),this.outdated=!1,this}toString(){return`line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`}}class md extends dd{constructor(e){super(e,0)}heightMetrics(e,t){let i,s=e.doc.lineAt(t).number,n=e.doc.lineAt(t+this.length).number,o=n-s+1,r=0;if(e.lineWrapping){let t=Math.min(this.height,e.lineHeight*o);i=t/o,this.length>o+1&&(r=(this.height-t)/(this.length-o-1))}else i=this.height/o;return{firstLine:s,lastLine:n,perLine:i,perChar:r}}blockAt(e,t,i,s){let{firstLine:n,lastLine:o,perLine:r,perChar:a}=this.heightMetrics(t,s);if(t.lineWrapping){let n=s+(e<t.lineHeight?0:Math.round(Math.max(0,Math.min(1,(e-i)/this.height))*this.length)),o=t.doc.lineAt(n),l=r+o.length*a,h=Math.max(i,e-l/2);return new ld(o.from,o.length,h,l,0)}{let s=Math.max(0,Math.min(o-n,Math.floor((e-i)/r))),{from:a,length:l}=t.doc.line(n+s);return new ld(a,l,i+r*s,r,0)}}lineAt(e,t,i,s,n){if(t==hd.ByHeight)return this.blockAt(e,i,s,n);if(t==hd.ByPosNoHeight){let{from:t,to:s}=i.doc.lineAt(e);return new ld(t,s-t,0,0,0)}let{firstLine:o,perLine:r,perChar:a}=this.heightMetrics(i,n),l=i.doc.lineAt(e),h=r+l.length*a,c=l.number-o,d=s+r*c+a*(l.from-n-c);return new ld(l.from,l.length,Math.max(s,Math.min(d,s+this.height-h)),h,0)}forEachLine(e,t,i,s,n,o){e=Math.max(e,n),t=Math.min(t,n+this.length);let{firstLine:r,perLine:a,perChar:l}=this.heightMetrics(i,n);for(let h=e,c=s;h<=t;){let t=i.doc.lineAt(h);if(h==e){let i=t.number-r;c+=a*i+l*(e-n-i)}let s=a+l*t.length;o(new ld(t.from,t.length,c,s,0)),c+=s,h=t.to+1}}replace(e,t,i){let s=this.length-t;if(s>0){let e=i[i.length-1];e instanceof md?i[i.length-1]=new md(e.length+s):i.push(null,new md(s-1))}if(e>0){let t=i[0];t instanceof md?i[0]=new md(e+t.length):i.unshift(new md(e-1),null)}return dd.of(i)}decomposeLeft(e,t){t.push(new md(e-1),null)}decomposeRight(e,t){t.push(null,new md(this.length-e-1))}updateHeight(e,t=0,i=!1,s){let n=t+this.length;if(s&&s.from<=t+this.length&&s.more){let i=[],o=Math.max(t,s.from),r=-1;for(s.from>t&&i.push(new md(s.from-t-1).updateHeight(e,t));o<=n&&s.more;){let t=e.doc.lineAt(o).length;i.length&&i.push(null);let n=s.heights[s.index++],a=0;n<0&&(a=-n,n=s.heights[s.index++]),-1==r?r=n:Math.abs(n-r)>=cd&&(r=-2);let l=new gd(t,n,a);l.outdated=!1,i.push(l),o+=t+1}o<=n&&i.push(null,new md(n-o).updateHeight(e,o));let a=dd.of(i);return(r<0||Math.abs(a.height-this.height)>=cd||Math.abs(r-this.heightMetrics(e,t).perLine)>=cd)&&(nd=!0),ud(this,a)}return(i||this.outdated)&&(this.setHeight(e.heightForGap(t,t+this.length)),this.outdated=!1),this}toString(){return`gap(${this.length})`}}class vd extends dd{constructor(e,t,i){super(e.length+t+i.length,e.height+i.height,t|(e.outdated||i.outdated?2:0)),this.left=e,this.right=i,this.size=e.size+i.size}get break(){return 1&this.flags}blockAt(e,t,i,s){let n=i+this.left.height;return e<n?this.left.blockAt(e,t,i,s):this.right.blockAt(e,t,n,s+this.left.length+this.break)}lineAt(e,t,i,s,n){let o=s+this.left.height,r=n+this.left.length+this.break,a=t==hd.ByHeight?e<o:e<r,l=a?this.left.lineAt(e,t,i,s,n):this.right.lineAt(e,t,i,o,r);if(this.break||(a?l.to<r:l.from>r))return l;let h=t==hd.ByPosNoHeight?hd.ByPosNoHeight:hd.ByPos;return a?l.join(this.right.lineAt(r,h,i,o,r)):this.left.lineAt(r,h,i,s,n).join(l)}forEachLine(e,t,i,s,n,o){let r=s+this.left.height,a=n+this.left.length+this.break;if(this.break)e<a&&this.left.forEachLine(e,t,i,s,n,o),t>=a&&this.right.forEachLine(e,t,i,r,a,o);else{let l=this.lineAt(a,hd.ByPos,i,s,n);e<l.from&&this.left.forEachLine(e,l.from-1,i,s,n,o),l.to>=e&&l.from<=t&&o(l),t>l.to&&this.right.forEachLine(l.to+1,t,i,r,a,o)}}replace(e,t,i){let s=this.left.length+this.break;if(t<s)return this.balanced(this.left.replace(e,t,i),this.right);if(e>this.left.length)return this.balanced(this.left,this.right.replace(e-s,t-s,i));let n=[];e>0&&this.decomposeLeft(e,n);let o=n.length;for(let e of i)n.push(e);if(e>0&&bd(n,o-1),t<this.length){let e=n.length;this.decomposeRight(t,n),bd(n,e)}return dd.of(n)}decomposeLeft(e,t){let i=this.left.length;if(e<=i)return this.left.decomposeLeft(e,t);t.push(this.left),this.break&&(i++,e>=i&&t.push(null)),e>i&&this.right.decomposeLeft(e-i,t)}decomposeRight(e,t){let i=this.left.length,s=i+this.break;if(e>=s)return this.right.decomposeRight(e-s,t);e<i&&this.left.decomposeRight(e,t),this.break&&e<s&&t.push(null),t.push(this.right)}balanced(e,t){return e.size>2*t.size||t.size>2*e.size?dd.of(this.break?[e,null,t]:[e,t]):(this.left=ud(this.left,e),this.right=ud(this.right,t),this.setHeight(e.height+t.height),this.outdated=e.outdated||t.outdated,this.size=e.size+t.size,this.length=e.length+this.break+t.length,this)}updateHeight(e,t=0,i=!1,s){let{left:n,right:o}=this,r=t+n.length+this.break,a=null;return s&&s.from<=t+n.length&&s.more?a=n=n.updateHeight(e,t,i,s):n.updateHeight(e,t,i),s&&s.from<=r+o.length&&s.more?a=o=o.updateHeight(e,r,i,s):o.updateHeight(e,r,i),a?this.balanced(n,o):(this.height=this.left.height+this.right.height,this.outdated=!1,this)}toString(){return this.left+(this.break?" ":"-")+this.right}}function bd(e,t){let i,s;null==e[t]&&(i=e[t-1])instanceof md&&(s=e[t+1])instanceof md&&e.splice(t-1,3,new md(i.length+1+s.length))}const _d=5;class wd{constructor(e,t){this.pos=e,this.oracle=t,this.nodes=[],this.lineStart=-1,this.lineEnd=-1,this.covering=null,this.writtenTo=e}get isCovered(){return this.covering&&this.nodes[this.nodes.length-1]==this.covering}span(e,t){if(this.lineStart>-1){let e=Math.min(t,this.lineEnd),i=this.nodes[this.nodes.length-1];i instanceof gd?i.length+=e-this.pos:(e>this.pos||!this.isCovered)&&this.nodes.push(new gd(e-this.pos,-1,0)),this.writtenTo=e,t>e&&(this.nodes.push(null),this.writtenTo++,this.lineStart=-1)}this.pos=t}point(e,t,i){if(e<t||i.heightRelevant){let s=i.widget?i.widget.estimatedHeight:0,n=i.widget?i.widget.lineBreaks:0;s<0&&(s=this.oracle.lineHeight);let o=t-e;i.block?this.addBlock(new pd(o,s,i)):(o||n||s>=5)&&this.addLineDeco(s,n,o)}else t>e&&this.span(e,t);this.lineEnd>-1&&this.lineEnd<this.pos&&(this.lineEnd=this.oracle.doc.lineAt(this.pos).to)}enterLine(){if(this.lineStart>-1)return;let{from:e,to:t}=this.oracle.doc.lineAt(this.pos);this.lineStart=e,this.lineEnd=t,this.writtenTo<e&&((this.writtenTo<e-1||null==this.nodes[this.nodes.length-1])&&this.nodes.push(this.blankContent(this.writtenTo,e-1)),this.nodes.push(null)),this.pos>e&&this.nodes.push(new gd(this.pos-e,-1,0)),this.writtenTo=this.pos}blankContent(e,t){let i=new md(t-e);return this.oracle.doc.lineAt(e).to==t&&(i.flags|=4),i}ensureLine(){this.enterLine();let e=this.nodes.length?this.nodes[this.nodes.length-1]:null;if(e instanceof gd)return e;let t=new gd(0,-1,0);return this.nodes.push(t),t}addBlock(e){this.enterLine();let t=e.deco;t&&t.startSide>0&&!this.isCovered&&this.ensureLine(),this.nodes.push(e),this.writtenTo=this.pos=this.pos+e.length,t&&t.endSide>0&&(this.covering=e)}addLineDeco(e,t,i){let s=this.ensureLine();s.length+=i,s.collapsed+=i,s.widgetHeight=Math.max(s.widgetHeight,e),s.breaks+=t,this.writtenTo=this.pos=this.pos+i}finish(e){let t=0==this.nodes.length?null:this.nodes[this.nodes.length-1];!(this.lineStart>-1)||t instanceof gd||this.isCovered?(this.writtenTo<this.pos||null==t)&&this.nodes.push(this.blankContent(this.writtenTo,this.pos)):this.nodes.push(new gd(0,-1,0));let i=e;for(let e of this.nodes)e instanceof gd&&e.updateHeight(this.oracle,i),i+=e?e.length:1;return this.nodes}static build(e,t,i,s){let n=new wd(i,e);return kr.spans(t,i,s,n,0),n.finish(i)}}function yd(e,t,i){let s=new xd;return kr.compare(e,t,i,s,0),s.changes}class xd{constructor(){this.changes=[]}compareRange(){}comparePoint(e,t,i,s){(e<t||i&&i.heightRelevant||s&&s.heightRelevant)&&Oa(e,t,this.changes,5)}}function kd(e,t){let i=e.getBoundingClientRect(),s=e.ownerDocument,n=s.defaultView||window,o=Math.max(0,i.left),r=Math.min(n.innerWidth,i.right),a=Math.max(0,i.top),l=Math.min(n.innerHeight,i.bottom);for(let t=e.parentNode;t&&t!=s.body;)if(1==t.nodeType){let i=t,s=window.getComputedStyle(i);if((i.scrollHeight>i.clientHeight||i.scrollWidth>i.clientWidth)&&"visible"!=s.overflow){let s=i.getBoundingClientRect();o=Math.max(o,s.left),r=Math.min(r,s.right),a=Math.max(a,s.top),l=Math.min(t==e.parentNode?n.innerHeight:l,s.bottom)}t="absolute"==s.position||"fixed"==s.position?i.offsetParent:i.parentNode}else{if(11!=t.nodeType)break;t=t.host}return{left:o-i.left,right:Math.max(o,r)-i.left,top:a-(i.top+t),bottom:Math.max(a,l)-(i.top+t)}}function Cd(e){let t=e.getBoundingClientRect(),i=e.ownerDocument.defaultView||window;return t.left<i.innerWidth&&t.right>0&&t.top<i.innerHeight&&t.bottom>0}function Sd(e,t){let i=e.getBoundingClientRect();return{left:0,right:i.right-i.left,top:t,bottom:i.bottom-(i.top+t)}}class Od{constructor(e,t,i,s){this.from=e,this.to=t,this.size=i,this.displaySize=s}static same(e,t){if(e.length!=t.length)return!1;for(let i=0;i<e.length;i++){let s=e[i],n=t[i];if(s.from!=n.from||s.to!=n.to||s.size!=n.size)return!1}return!0}draw(e,t){return wa.replace({widget:new Ad(this.displaySize*(t?e.scaleY:e.scaleX),t)}).range(this.from,this.to)}}class Ad extends ba{constructor(e,t){super(),this.size=e,this.vertical=t}eq(e){return e.size==this.size&&e.vertical==this.vertical}toDOM(){let e=document.createElement("div");return this.vertical?e.style.height=this.size+"px":(e.style.width=this.size+"px",e.style.height="2px",e.style.display="inline-block"),e}get estimatedHeight(){return this.vertical?this.size:-1}}class Pd{constructor(e,t){this.view=e,this.state=t,this.pixelViewport={left:0,right:window.innerWidth,top:0,bottom:0},this.inView=!0,this.paddingTop=0,this.paddingBottom=0,this.contentDOMWidth=0,this.contentDOMHeight=0,this.editorHeight=0,this.editorWidth=0,this.scaleX=1,this.scaleY=1,this.scrollOffset=0,this.scrolledToBottom=!1,this.scrollAnchorPos=0,this.scrollAnchorHeight=-1,this.scaler=Ed,this.scrollTarget=null,this.printing=!1,this.mustMeasureContent=!0,this.defaultTextDirection=il.LTR,this.visibleRanges=[],this.mustEnforceCursorAssoc=!1;let i=t.facet(ql).some(e=>"function"!=typeof e&&"cm-lineWrapping"==e.class);this.heightOracle=new rd(i),this.stateDeco=Dd(t),this.heightMap=dd.empty().applyChanges(this.stateDeco,Yn.empty,this.heightOracle.setDoc(t.doc),[new sh(0,0,0,t.doc.length)]);for(let e=0;e<2&&(this.viewport=this.getViewport(0,null),this.updateForViewport());e++);this.updateViewportLines(),this.lineGaps=this.ensureLineGaps([]),this.lineGapDeco=wa.set(this.lineGaps.map(e=>e.draw(this,!1))),this.scrollParent=e.scrollDOM,this.computeVisibleRanges()}updateForViewport(){let e=[this.viewport],{main:t}=this.state.selection;for(let i=0;i<=1;i++){let s=i?t.head:t.anchor;if(!e.some(({from:e,to:t})=>s>=e&&s<=t)){let{from:t,to:i}=this.lineBlockAt(s);e.push(new Td(t,i))}}return this.viewports=e.sort((e,t)=>e.from-t.from),this.updateScaler()}updateScaler(){let e=this.scaler;return this.scaler=this.heightMap.height<=7e6?Ed:new Ld(this.heightOracle,this.heightMap,this.viewports),e.eq(this.scaler)?0:2}updateViewportLines(){this.viewportLines=[],this.heightMap.forEachLine(this.viewport.from,this.viewport.to,this.heightOracle.setDoc(this.state.doc),0,0,e=>{this.viewportLines.push(Bd(e,this.scaler))})}update(e,t=null){this.state=e.state;let i=this.stateDeco;this.stateDeco=Dd(this.state);let s=e.changedRanges,n=sh.extendWithRanges(s,yd(i,this.stateDeco,e?e.changes:mo.empty(this.state.doc.length))),o=this.heightMap.height,r=this.scrolledToBottom?null:this.scrollAnchorAt(this.scrollOffset);od(),this.heightMap=this.heightMap.applyChanges(this.stateDeco,e.startState.doc,this.heightOracle.setDoc(this.state.doc),n),(this.heightMap.height!=o||nd)&&(e.flags|=2),r?(this.scrollAnchorPos=e.changes.mapPos(r.from,-1),this.scrollAnchorHeight=r.top):(this.scrollAnchorPos=-1,this.scrollAnchorHeight=o);let a=n.length?this.mapViewport(this.viewport,e.changes):this.viewport;(t&&(t.range.head<a.from||t.range.head>a.to)||!this.viewportIsAppropriate(a))&&(a=this.getViewport(0,t));let l=a.from!=this.viewport.from||a.to!=this.viewport.to;this.viewport=a,e.flags|=this.updateForViewport(),(l||!e.changes.empty||2&e.flags)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps,e.changes))),e.flags|=this.computeVisibleRanges(e.changes),t&&(this.scrollTarget=t),!this.mustEnforceCursorAssoc&&(e.selectionSet||e.focusChanged)&&e.view.lineWrapping&&e.state.selection.main.empty&&e.state.selection.main.assoc&&!e.state.facet(Dl)&&(this.mustEnforceCursorAssoc=!0)}measure(){let{view:e}=this,t=e.contentDOM,i=window.getComputedStyle(t),s=this.heightOracle,n=i.whiteSpace;this.defaultTextDirection="rtl"==i.direction?il.RTL:il.LTR;let o=this.heightOracle.mustRefreshForWrapping(n)||"refresh"===this.mustMeasureContent,r=t.getBoundingClientRect(),a=o||this.mustMeasureContent||this.contentDOMHeight!=r.height;this.contentDOMHeight=r.height,this.mustMeasureContent=!1;let l=0,h=0;if(r.width&&r.height){let{scaleX:e,scaleY:i}=za(t,r);(e>.005&&Math.abs(this.scaleX-e)>.005||i>.005&&Math.abs(this.scaleY-i)>.005)&&(this.scaleX=e,this.scaleY=i,l|=16,o=a=!0)}let c=(parseInt(i.paddingTop)||0)*this.scaleY,d=(parseInt(i.paddingBottom)||0)*this.scaleY;this.paddingTop==c&&this.paddingBottom==d||(this.paddingTop=c,this.paddingBottom=d,l|=18),this.editorWidth!=e.scrollDOM.clientWidth&&(s.lineWrapping&&(a=!0),this.editorWidth=e.scrollDOM.clientWidth,l|=16);let u=Va(this.view.contentDOM,!1).y;u!=this.scrollParent&&(this.scrollParent=u,this.scrollAnchorHeight=-1,this.scrollOffset=0);let f=this.getScrollOffset();this.scrollOffset!=f&&(this.scrollAnchorHeight=-1,this.scrollOffset=f),this.scrolledToBottom=Za(this.scrollParent||e.win);let p=(this.printing?Sd:kd)(t,this.paddingTop),g=p.top-this.pixelViewport.top,m=p.bottom-this.pixelViewport.bottom;this.pixelViewport=p;let v=this.pixelViewport.bottom>this.pixelViewport.top&&this.pixelViewport.right>this.pixelViewport.left;if(v!=this.inView&&(this.inView=v,v&&(a=!0)),!this.inView&&!this.scrollTarget&&!Cd(e.dom))return 0;let b=r.width;if(this.contentDOMWidth==b&&this.editorHeight==e.scrollDOM.clientHeight||(this.contentDOMWidth=r.width,this.editorHeight=e.scrollDOM.clientHeight,l|=16),a){let t=e.docView.measureVisibleLineHeights(this.viewport);if(s.mustRefreshForHeights(t)&&(o=!0),o||s.lineWrapping&&Math.abs(b-this.contentDOMWidth)>s.charWidth){let{lineHeight:i,charWidth:r,textHeight:a}=e.docView.measureTextSize();o=i>0&&s.refresh(n,i,r,a,Math.max(5,b/r),t),o&&(e.docView.minWidth=0,l|=16)}g>0&&m>0?h=Math.max(g,m):g<0&&m<0&&(h=Math.min(g,m)),od();for(let i of this.viewports){let n=i.from==this.viewport.from?t:e.docView.measureVisibleLineHeights(i);this.heightMap=(o?dd.empty().applyChanges(this.stateDeco,Yn.empty,this.heightOracle,[new sh(0,0,0,e.state.doc.length)]):this.heightMap).updateHeight(s,0,o,new ad(i.from,n))}nd&&(l|=2)}let _=!this.viewportIsAppropriate(this.viewport,h)||this.scrollTarget&&(this.scrollTarget.range.head<this.viewport.from||this.scrollTarget.range.head>this.viewport.to);return _&&(2&l&&(l|=this.updateScaler()),this.viewport=this.getViewport(h,this.scrollTarget),l|=this.updateForViewport()),(2&l||_)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(o?[]:this.lineGaps,e)),l|=this.computeVisibleRanges(),this.mustEnforceCursorAssoc&&(this.mustEnforceCursorAssoc=!1,e.docView.enforceCursorAssoc()),l}get visibleTop(){return this.scaler.fromDOM(this.pixelViewport.top)}get visibleBottom(){return this.scaler.fromDOM(this.pixelViewport.bottom)}getViewport(e,t){let i=.5-Math.max(-.5,Math.min(.5,e/1e3/2)),s=this.heightMap,n=this.heightOracle,{visibleTop:o,visibleBottom:r}=this,a=new Td(s.lineAt(o-1e3*i,hd.ByHeight,n,0,0).from,s.lineAt(r+1e3*(1-i),hd.ByHeight,n,0,0).to);if(t){let{head:e}=t.range;if(e<a.from||e>a.to){let i,o=Math.min(this.editorHeight,this.pixelViewport.bottom-this.pixelViewport.top),r=s.lineAt(e,hd.ByPos,n,0,0);i="center"==t.y?(r.top+r.bottom)/2-o/2:"start"==t.y||"nearest"==t.y&&e<a.from?r.top:r.bottom-o,a=new Td(s.lineAt(i-500,hd.ByHeight,n,0,0).from,s.lineAt(i+o+500,hd.ByHeight,n,0,0).to)}}return a}mapViewport(e,t){let i=t.mapPos(e.from,-1),s=t.mapPos(e.to,1);return new Td(this.heightMap.lineAt(i,hd.ByPos,this.heightOracle,0,0).from,this.heightMap.lineAt(s,hd.ByPos,this.heightOracle,0,0).to)}viewportIsAppropriate({from:e,to:t},i=0){if(!this.inView)return!0;let{top:s}=this.heightMap.lineAt(e,hd.ByPos,this.heightOracle,0,0),{bottom:n}=this.heightMap.lineAt(t,hd.ByPos,this.heightOracle,0,0),{visibleTop:o,visibleBottom:r}=this;return(0==e||s<=o-Math.max(10,Math.min(-i,250)))&&(t==this.state.doc.length||n>=r+Math.max(10,Math.min(i,250)))&&s>o-2e3&&n<r+2e3}mapLineGaps(e,t){if(!e.length||t.empty)return e;let i=[];for(let s of e)t.touchesRange(s.from,s.to)||i.push(new Od(t.mapPos(s.from),t.mapPos(s.to),s.size,s.displaySize));return i}ensureLineGaps(e,t){let i=this.heightOracle.lineWrapping,s=i?1e4:2e3,n=s>>1,o=s<<1;if(this.defaultTextDirection!=il.LTR&&!i)return[];let r=[],a=(s,o,l,h)=>{if(o-s<n)return;let c=this.state.selection.main,d=[c.from];c.empty||d.push(c.to);for(let e of d)if(e>s&&e<o)return a(s,e-10,l,h),void a(e+10,o,l,h);let u=Rd(e,e=>e.from>=l.from&&e.to<=l.to&&Math.abs(e.from-s)<n&&Math.abs(e.to-o)<n&&!d.some(t=>e.from<t&&e.to>t));if(!u){if(o<l.to&&t&&i&&t.visibleRanges.some(e=>e.from<=o&&e.to>=o)){let e=t.moveToLineBoundary(Co.cursor(o),!1,!0).head;e>s&&(o=e)}let e=this.gapSize(l,s,o,h);u=new Od(s,o,e,i||e<2e6?e:2e6)}r.push(u)},l=t=>{if(t.length<o||t.type!=_a.Text)return;let n=Md(t.from,t.to,this.stateDeco);if(n.total<o)return;let r,l,h=this.scrollTarget?this.scrollTarget.range.head:null;if(i){let e,i,o=s/this.heightOracle.lineLength*this.heightOracle.lineHeight;if(null!=h){let s=Id(n,h),r=((this.visibleBottom-this.visibleTop)/2+o)/t.height;e=s-r,i=s+r}else e=(this.visibleTop-t.top-o)/t.height,i=(this.visibleBottom-t.top+o)/t.height;r=$d(n,e),l=$d(n,i)}else{let i=n.total*this.heightOracle.charWidth,o=s*this.heightOracle.charWidth,a=0;if(i>2e6)for(let i of e)i.from>=t.from&&i.from<t.to&&i.size!=i.displaySize&&i.from*this.heightOracle.charWidth+a<this.pixelViewport.left&&(a=i.size-i.displaySize);let c,d,u=this.pixelViewport.left+a,f=this.pixelViewport.right+a;if(null!=h){let e=Id(n,h),t=((f-u)/2+o)/i;c=e-t,d=e+t}else c=(u-o)/i,d=(f+o)/i;r=$d(n,c),l=$d(n,d)}r>t.from&&a(t.from,r,t,n),l<t.to&&a(l,t.to,t,n)};for(let e of this.viewportLines)Array.isArray(e.type)?e.type.forEach(l):l(e);return r}gapSize(e,t,i,s){let n=Id(s,i)-Id(s,t);return this.heightOracle.lineWrapping?e.height*n:s.total*this.heightOracle.charWidth*n}updateLineGaps(e){Od.same(e,this.lineGaps)||(this.lineGaps=e,this.lineGapDeco=wa.set(e.map(e=>e.draw(this,this.heightOracle.lineWrapping))))}computeVisibleRanges(e){let t=this.stateDeco;this.lineGaps.length&&(t=t.concat(this.lineGapDeco));let i=[];kr.spans(t,this.viewport.from,this.viewport.to,{span(e,t){i.push({from:e,to:t})},point(){}},20);let s=0;if(i.length!=this.visibleRanges.length)s=12;else for(let t=0;t<i.length&&!(8&s);t++){let n=this.visibleRanges[t],o=i[t];n.from==o.from&&n.to==o.to||(s|=4,e&&e.mapPos(n.from,-1)==o.from&&e.mapPos(n.to,1)==o.to||(s|=8))}return this.visibleRanges=i,s}lineBlockAt(e){return e>=this.viewport.from&&e<=this.viewport.to&&this.viewportLines.find(t=>t.from<=e&&t.to>=e)||Bd(this.heightMap.lineAt(e,hd.ByPos,this.heightOracle,0,0),this.scaler)}lineBlockAtHeight(e){return e>=this.viewportLines[0].top&&e<=this.viewportLines[this.viewportLines.length-1].bottom&&this.viewportLines.find(t=>t.top<=e&&t.bottom>=e)||Bd(this.heightMap.lineAt(this.scaler.fromDOM(e),hd.ByHeight,this.heightOracle,0,0),this.scaler)}getScrollOffset(){return(this.scrollParent==this.view.scrollDOM?this.scrollParent.scrollTop:(this.scrollParent?this.scrollParent.getBoundingClientRect().top:0)-this.view.contentDOM.getBoundingClientRect().top)*this.scaleY}scrollAnchorAt(e){let t=this.lineBlockAtHeight(e+8);return t.from>=this.viewport.from||this.viewportLines[0].top-e>200?t:this.viewportLines[0]}elementAtHeight(e){return Bd(this.heightMap.blockAt(this.scaler.fromDOM(e),this.heightOracle,0,0),this.scaler)}get docHeight(){return this.scaler.toDOM(this.heightMap.height)}get contentHeight(){return this.docHeight+this.paddingTop+this.paddingBottom}}class Td{constructor(e,t){this.from=e,this.to=t}}function Md(e,t,i){let s=[],n=e,o=0;return kr.spans(i,e,t,{span(){},point(e,t){e>n&&(s.push({from:n,to:e}),o+=e-n),n=t}},20),n<t&&(s.push({from:n,to:t}),o+=t-n),{total:o,ranges:s}}function $d({total:e,ranges:t},i){if(i<=0)return t[0].from;if(i>=1)return t[t.length-1].to;let s=Math.floor(e*i);for(let e=0;;e++){let{from:i,to:n}=t[e],o=n-i;if(s<=o)return i+s;s-=o}}function Id(e,t){let i=0;for(let{from:s,to:n}of e.ranges){if(t<=n){i+=t-s;break}i+=n-s}return i/e.total}function Rd(e,t){for(let i of e)if(t(i))return i}const Ed={toDOM:e=>e,fromDOM:e=>e,scale:1,eq(e){return e==this}};function Dd(e){let t=e.facet(Ql).filter(e=>"function"!=typeof e),i=e.facet(Xl).filter(e=>"function"!=typeof e);return i.length&&t.push(kr.join(i)),t}class Ld{constructor(e,t,i){let s=0,n=0,o=0;this.viewports=i.map(({from:i,to:n})=>{let o=t.lineAt(i,hd.ByPos,e,0,0).top,r=t.lineAt(n,hd.ByPos,e,0,0).bottom;return s+=r-o,{from:i,to:n,top:o,bottom:r,domTop:0,domBottom:0}}),this.scale=(7e6-s)/(t.height-s);for(let e of this.viewports)e.domTop=o+(e.top-n)*this.scale,o=e.domBottom=e.domTop+(e.bottom-e.top),n=e.bottom}toDOM(e){for(let t=0,i=0,s=0;;t++){let n=t<this.viewports.length?this.viewports[t]:null;if(!n||e<n.top)return s+(e-i)*this.scale;if(e<=n.bottom)return n.domTop+(e-n.top);i=n.bottom,s=n.domBottom}}fromDOM(e){for(let t=0,i=0,s=0;;t++){let n=t<this.viewports.length?this.viewports[t]:null;if(!n||e<n.domTop)return i+(e-s)/this.scale;if(e<=n.domBottom)return n.top+(e-n.domTop);i=n.bottom,s=n.domBottom}}eq(e){return e instanceof Ld&&(this.scale==e.scale&&this.viewports.length==e.viewports.length&&this.viewports.every((t,i)=>t.from==e.viewports[i].from&&t.to==e.viewports[i].to))}}function Bd(e,t){if(1==t.scale)return e;let i=t.toDOM(e.top),s=t.toDOM(e.bottom);return new ld(e.from,e.length,i,s-i,Array.isArray(e._content)?e._content.map(e=>Bd(e,t)):e._content)}const Nd=Ao.define({combine:e=>e.join(" ")}),zd=Ao.define({combine:e=>e.indexOf(!0)>-1}),Hd=Gr.newName(),Vd=Gr.newName(),Gd=Gr.newName(),Ud={"&light":"."+Vd,"&dark":"."+Gd};function Wd(e,t,i){return new Gr(t,{finish:t=>/&/.test(t)?t.replace(/&\w*/,t=>{if("&"==t)return e;if(!i||!i[t])throw new RangeError(`Unsupported selector: ${t}`);return i[t]}):e+" "+t})}const jd=Wd("."+Hd,{"&":{position:"relative !important",boxSizing:"border-box","&.cm-focused":{outline:"1px dotted #212121"},display:"flex !important",flexDirection:"column"},".cm-scroller":{display:"flex !important",alignItems:"flex-start !important",fontFamily:"monospace",lineHeight:1.4,height:"100%",overflowX:"auto",position:"relative",zIndex:0,overflowAnchor:"none"},".cm-content":{margin:0,flexGrow:2,flexShrink:0,display:"block",whiteSpace:"pre",wordWrap:"normal",boxSizing:"border-box",minHeight:"100%",padding:"4px 0",outline:"none","&[contenteditable=true]":{WebkitUserModify:"read-write-plaintext-only"}},".cm-lineWrapping":{whiteSpace_fallback:"pre-wrap",whiteSpace:"break-spaces",wordBreak:"break-word",overflowWrap:"anywhere",flexShrink:1},"&light .cm-content":{caretColor:"black"},"&dark .cm-content":{caretColor:"white"},".cm-line":{display:"block",padding:"0 2px 0 6px"},".cm-layer":{userSelect:"none",position:"absolute",left:0,top:0,contain:"size style","& > *":{position:"absolute"}},"&light .cm-selectionBackground":{background:"#d9d9d9"},"&dark .cm-selectionBackground":{background:"#222"},"&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#d7d4f0"},"&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#233"},".cm-cursorLayer":{pointerEvents:"none"},"&.cm-focused > .cm-scroller > .cm-cursorLayer":{animation:"steps(1) cm-blink 1.2s infinite"},"@keyframes cm-blink":{"0%":{},"50%":{opacity:0},"100%":{}},"@keyframes cm-blink2":{"0%":{},"50%":{opacity:0},"100%":{}},".cm-cursor, .cm-dropCursor":{borderLeft:"1.2px solid black",marginLeft:"-0.6px",pointerEvents:"none"},".cm-cursor":{display:"none"},"&dark .cm-cursor":{borderLeftColor:"#ddd"},".cm-selectionHandle":{backgroundColor:"currentColor",width:"1.5px"},".cm-selectionHandle-start::before, .cm-selectionHandle-end::before":{content:'""',backgroundColor:"inherit",borderRadius:"50%",width:"8px",height:"8px",position:"absolute",left:"-3.25px"},".cm-selectionHandle-start::before":{top:"-8px"},".cm-selectionHandle-end::before":{bottom:"-8px"},".cm-dropCursor":{position:"absolute"},"&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor":{display:"block"},".cm-iso":{unicodeBidi:"isolate"},".cm-announced":{position:"fixed",top:"-10000px"},"@media print":{".cm-announced":{display:"none"}},"&light .cm-activeLine":{backgroundColor:"#cceeff44"},"&dark .cm-activeLine":{backgroundColor:"#99eeff33"},"&light .cm-specialChar":{color:"red"},"&dark .cm-specialChar":{color:"#f78"},".cm-gutters":{flexShrink:0,display:"flex",height:"100%",boxSizing:"border-box",zIndex:200},".cm-gutters-before":{insetInlineStart:0},".cm-gutters-after":{insetInlineEnd:0},"&light .cm-gutters":{backgroundColor:"#f5f5f5",color:"#6c6c6c",border:"0px solid #ddd","&.cm-gutters-before":{borderRightWidth:"1px"},"&.cm-gutters-after":{borderLeftWidth:"1px"}},"&dark .cm-gutters":{backgroundColor:"#333338",color:"#ccc"},".cm-gutter":{display:"flex !important",flexDirection:"column",flexShrink:0,boxSizing:"border-box",minHeight:"100%",overflow:"hidden"},".cm-gutterElement":{boxSizing:"border-box"},".cm-lineNumbers .cm-gutterElement":{padding:"0 3px 0 5px",minWidth:"20px",textAlign:"right",whiteSpace:"nowrap"},"&light .cm-activeLineGutter":{backgroundColor:"#e2f2ff"},"&dark .cm-activeLineGutter":{backgroundColor:"#222227"},".cm-panels":{boxSizing:"border-box",position:"sticky",left:0,right:0,zIndex:300},"&light .cm-panels":{backgroundColor:"#f5f5f5",color:"black"},".cm-panels-top":{top:"0"},".cm-panels-bottom":{bottom:"0"},"&light .cm-panels-top":{borderBottom:"1px solid #ddd"},"&light .cm-panels-bottom":{borderTop:"1px solid #ddd"},"&dark .cm-panels":{backgroundColor:"#333338",color:"white"},".cm-dialog":{padding:"2px 19px 4px 6px",position:"relative","& label":{fontSize:"80%"}},".cm-dialog-close":{position:"absolute",top:"3px",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",fontSize:"14px",padding:"0"},".cm-tab":{display:"inline-block",overflow:"hidden",verticalAlign:"bottom"},".cm-widgetBuffer":{verticalAlign:"text-top",height:"1em",width:0,display:"inline"},".cm-placeholder":{color:"#888",display:"inline-block",verticalAlign:"top",userSelect:"none"},".cm-highlightSpace":{backgroundImage:"radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",backgroundPosition:"center"},".cm-highlightTab":{backgroundImage:'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>\')',backgroundSize:"auto 100%",backgroundPosition:"right 90%",backgroundRepeat:"no-repeat"},".cm-trailingSpace":{backgroundColor:"#ff332255"},".cm-button":{verticalAlign:"middle",color:"inherit",fontSize:"70%",padding:".2em 1em",borderRadius:"1px"},"&light .cm-button":{backgroundImage:"linear-gradient(#eff1f5, #d9d9df)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#b4b4b4, #d0d3d6)"}},"&dark .cm-button":{backgroundImage:"linear-gradient(#393939, #111)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#111, #333)"}},".cm-textfield":{verticalAlign:"middle",color:"inherit",fontSize:"70%",border:"1px solid silver",padding:".2em .5em"},"&light .cm-textfield":{backgroundColor:"white"},"&dark .cm-textfield":{border:"1px solid #555",backgroundColor:"inherit"}},Ud),Fd={childList:!0,characterData:!0,subtree:!0,attributes:!0,characterDataOldValue:!0},qd=da.ie&&da.ie_version<=11;class Qd{constructor(e){this.view=e,this.active=!1,this.editContext=null,this.selectionRange=new Ga,this.selectionChanged=!1,this.delayedFlush=-1,this.resizeTimeout=-1,this.queue=[],this.delayedAndroidKey=null,this.flushingAndroidKey=-1,this.lastChange=0,this.scrollTargets=[],this.intersection=null,this.resizeScroll=null,this.intersecting=!1,this.gapIntersection=null,this.gaps=[],this.printQuery=null,this.parentCheck=-1,this.dom=e.contentDOM,this.observer=new MutationObserver(t=>{for(let e of t)this.queue.push(e);(da.ie&&da.ie_version<=11||da.ios&&e.composing)&&t.some(e=>"childList"==e.type&&e.removedNodes.length||"characterData"==e.type&&e.oldValue.length>e.target.nodeValue.length)?this.flushSoon():this.flush()}),!window.EditContext||!da.android||!1===e.constructor.EDIT_CONTEXT||da.chrome&&da.chrome_version<126||(this.editContext=new Zd(e),e.state.facet(Vl)&&(e.contentDOM.editContext=this.editContext.editContext)),qd&&(this.onCharData=e=>{this.queue.push({target:e.target,type:"characterData",oldValue:e.prevValue}),this.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this),this.onResize=this.onResize.bind(this),this.onPrint=this.onPrint.bind(this),this.onScroll=this.onScroll.bind(this),window.matchMedia&&(this.printQuery=window.matchMedia("print")),"function"==typeof ResizeObserver&&(this.resizeScroll=new ResizeObserver(()=>{var e;(null===(e=this.view.docView)||void 0===e?void 0:e.lastUpdate)<Date.now()-75&&this.onResize()}),this.resizeScroll.observe(e.scrollDOM)),this.addWindowListeners(this.win=e.win),this.start(),"function"==typeof IntersectionObserver&&(this.intersection=new IntersectionObserver(e=>{this.parentCheck<0&&(this.parentCheck=setTimeout(this.listenForScroll.bind(this),1e3)),e.length>0&&e[e.length-1].intersectionRatio>0!=this.intersecting&&(this.intersecting=!this.intersecting,this.intersecting!=this.view.inView&&this.onScrollChanged(document.createEvent("Event")))},{threshold:[0,.001]}),this.intersection.observe(this.dom),this.gapIntersection=new IntersectionObserver(e=>{e.length>0&&e[e.length-1].intersectionRatio>0&&this.onScrollChanged(document.createEvent("Event"))},{})),this.listenForScroll(),this.readSelectionRange()}onScrollChanged(e){this.view.inputState.runHandlers("scroll",e),this.intersecting&&this.view.measure()}onScroll(e){this.intersecting&&this.flush(!1),this.editContext&&this.view.requestMeasure(this.editContext.measureReq),this.onScrollChanged(e)}onResize(){this.resizeTimeout<0&&(this.resizeTimeout=setTimeout(()=>{this.resizeTimeout=-1,this.view.requestMeasure()},50))}onPrint(e){("change"!=e.type&&e.type||e.matches)&&(this.view.viewState.printing=!0,this.view.measure(),setTimeout(()=>{this.view.viewState.printing=!1,this.view.requestMeasure()},500))}updateGaps(e){if(this.gapIntersection&&(e.length!=this.gaps.length||this.gaps.some((t,i)=>t!=e[i]))){this.gapIntersection.disconnect();for(let t of e)this.gapIntersection.observe(t);this.gaps=e}}onSelectionChange(e){let t=this.selectionChanged;if(!this.readSelectionRange()||this.delayedAndroidKey)return;let{view:i}=this,s=this.selectionRange;if(i.state.facet(Vl)?i.root.activeElement!=this.dom:!Ma(this.dom,s))return;let n=s.anchorNode&&i.docView.tile.nearest(s.anchorNode);n&&n.isWidget()&&n.widget.ignoreEvent(e)?t||(this.selectionChanged=!1):(da.ie&&da.ie_version<=11||da.android&&da.chrome)&&!i.state.selection.main.empty&&s.focusNode&&Ia(s.focusNode,s.focusOffset,s.anchorNode,s.anchorOffset)?this.flushSoon():this.flush(!1)}readSelectionRange(){let{view:e}=this,t=Pa(e.root);if(!t)return!1;let i=da.safari&&11==e.root.nodeType&&e.root.activeElement==this.dom&&Kd(this.view,t)||t;if(!i||this.selectionRange.eq(i))return!1;let s=Ma(this.dom,i);return s&&!this.selectionChanged&&e.inputState.lastFocusTime>Date.now()-200&&e.inputState.lastTouchTime<Date.now()-300&&Ka(this.dom,i)?(this.view.inputState.lastFocusTime=0,e.docView.updateSelection(),!1):(this.selectionRange.setRange(i),s&&(this.selectionChanged=!0),!0)}setSelectionRange(e,t){this.selectionRange.set(e.node,e.offset,t.node,t.offset),this.selectionChanged=!1}clearSelectionRange(){this.selectionRange.set(null,0,null,0)}listenForScroll(){this.parentCheck=-1;let e=0,t=null;for(let i=this.dom;i;)if(1==i.nodeType)!t&&e<this.scrollTargets.length&&this.scrollTargets[e]==i?e++:t||(t=this.scrollTargets.slice(0,e)),t&&t.push(i),i=i.assignedSlot||i.parentNode;else{if(11!=i.nodeType)break;i=i.host}if(e<this.scrollTargets.length&&!t&&(t=this.scrollTargets.slice(0,e)),t){for(let e of this.scrollTargets)e.removeEventListener("scroll",this.onScroll);for(let e of this.scrollTargets=t)e.addEventListener("scroll",this.onScroll)}}ignore(e){if(!this.active)return e();try{return this.stop(),e()}finally{this.start(),this.clear()}}start(){this.active||(this.observer.observe(this.dom,Fd),qd&&this.dom.addEventListener("DOMCharacterDataModified",this.onCharData),this.active=!0)}stop(){this.active&&(this.active=!1,this.observer.disconnect(),qd&&this.dom.removeEventListener("DOMCharacterDataModified",this.onCharData))}clear(){this.processRecords(),this.queue.length=0,this.selectionChanged=!1}delayAndroidKey(e,t){var i;if(!this.delayedAndroidKey){let e=()=>{let e=this.delayedAndroidKey;if(e){this.clearDelayedAndroidKey(),this.view.inputState.lastKeyCode=e.keyCode,this.view.inputState.lastKeyTime=Date.now(),!this.flush()&&e.force&&Ya(this.dom,e.key,e.keyCode)}};this.flushingAndroidKey=this.view.win.requestAnimationFrame(e)}this.delayedAndroidKey&&"Enter"!=e||(this.delayedAndroidKey={key:e,keyCode:t,force:this.lastChange<Date.now()-50||!!(null===(i=this.delayedAndroidKey)||void 0===i?void 0:i.force)})}clearDelayedAndroidKey(){this.win.cancelAnimationFrame(this.flushingAndroidKey),this.delayedAndroidKey=null,this.flushingAndroidKey=-1}flushSoon(){this.delayedFlush<0&&(this.delayedFlush=this.view.win.requestAnimationFrame(()=>{this.delayedFlush=-1,this.flush()}))}forceFlush(){this.delayedFlush>=0&&(this.view.win.cancelAnimationFrame(this.delayedFlush),this.delayedFlush=-1),this.flush()}pendingRecords(){for(let e of this.observer.takeRecords())this.queue.push(e);return this.queue}processRecords(){let e=this.pendingRecords();e.length&&(this.queue=[]);let t=-1,i=-1,s=!1;for(let n of e){let e=this.readMutation(n);e&&(e.typeOver&&(s=!0),-1==t?({from:t,to:i}=e):(t=Math.min(e.from,t),i=Math.max(e.to,i)))}return{from:t,to:i,typeOver:s}}readChange(){let{from:e,to:t,typeOver:i}=this.processRecords(),s=this.selectionChanged&&Ma(this.dom,this.selectionRange);if(e<0&&!s)return null;e>-1&&(this.lastChange=Date.now()),this.view.inputState.lastFocusTime=0,this.selectionChanged=!1;let n=new cc(this.view,e,t,i);return this.view.docView.domChanged={newSel:n.newSel?n.newSel.main:null},n}flush(e=!0){if(this.delayedFlush>=0||this.delayedAndroidKey)return!1;e&&this.readSelectionRange();let t=this.readChange();if(!t)return this.view.requestMeasure(),!1;let i=this.view.state,s=uc(this.view,t);return this.view.state==i&&(t.domChanged||t.newSel&&!bc(this.view.state.selection,t.newSel.main))&&this.view.update([]),s}readMutation(e){let t=this.view.docView.tile.nearest(e.target);if(!t||t.isWidget())return null;if(t.markDirty("attributes"==e.type),"childList"==e.type){let i=Yd(t,e.previousSibling||e.target.previousSibling,-1),s=Yd(t,e.nextSibling||e.target.nextSibling,1);return{from:i?t.posAfter(i):t.posAtStart,to:s?t.posBefore(s):t.posAtEnd,typeOver:!1}}return"characterData"==e.type?{from:t.posAtStart,to:t.posAtEnd,typeOver:e.target.nodeValue==e.oldValue}:null}setWindow(e){e!=this.win&&(this.removeWindowListeners(this.win),this.win=e,this.addWindowListeners(this.win))}addWindowListeners(e){e.addEventListener("resize",this.onResize),this.printQuery?this.printQuery.addEventListener?this.printQuery.addEventListener("change",this.onPrint):this.printQuery.addListener(this.onPrint):e.addEventListener("beforeprint",this.onPrint),e.addEventListener("scroll",this.onScroll),e.document.addEventListener("selectionchange",this.onSelectionChange)}removeWindowListeners(e){e.removeEventListener("scroll",this.onScroll),e.removeEventListener("resize",this.onResize),this.printQuery?this.printQuery.removeEventListener?this.printQuery.removeEventListener("change",this.onPrint):this.printQuery.removeListener(this.onPrint):e.removeEventListener("beforeprint",this.onPrint),e.document.removeEventListener("selectionchange",this.onSelectionChange)}update(e){this.editContext&&(this.editContext.update(e),e.startState.facet(Vl)!=e.state.facet(Vl)&&(e.view.contentDOM.editContext=e.state.facet(Vl)?this.editContext.editContext:null))}destroy(){var e,t,i;this.stop(),null===(e=this.intersection)||void 0===e||e.disconnect(),null===(t=this.gapIntersection)||void 0===t||t.disconnect(),null===(i=this.resizeScroll)||void 0===i||i.disconnect();for(let e of this.scrollTargets)e.removeEventListener("scroll",this.onScroll);this.removeWindowListeners(this.win),clearTimeout(this.parentCheck),clearTimeout(this.resizeTimeout),this.win.cancelAnimationFrame(this.delayedFlush),this.win.cancelAnimationFrame(this.flushingAndroidKey),this.editContext&&(this.view.contentDOM.editContext=null,this.editContext.destroy())}}function Yd(e,t,i){for(;t;){let s=rh.get(t);if(s&&s.parent==e)return s;let n=t.parentNode;t=n!=e.dom?n:i>0?t.nextSibling:t.previousSibling}return null}function Xd(e,t){let i=t.startContainer,s=t.startOffset,n=t.endContainer,o=t.endOffset,r=e.docView.domAtPos(e.state.selection.main.anchor,1);return Ia(r.node,r.offset,n,o)&&([i,s,n,o]=[n,o,i,s]),{anchorNode:i,anchorOffset:s,focusNode:n,focusOffset:o}}function Kd(e,t){if(t.getComposedRanges){let i=t.getComposedRanges(e.root)[0];if(i)return Xd(e,i)}let i=null;function s(e){e.preventDefault(),e.stopImmediatePropagation(),i=e.getTargetRanges()[0]}return e.contentDOM.addEventListener("beforeinput",s,!0),e.dom.ownerDocument.execCommand("indent"),e.contentDOM.removeEventListener("beforeinput",s,!0),i?Xd(e,i):null}class Zd{constructor(e){this.from=0,this.to=0,this.pendingContextChange=null,this.handlers=Object.create(null),this.composing=null,this.resetRange(e.state);let t=this.editContext=new window.EditContext({text:e.state.doc.sliceString(this.from,this.to),selectionStart:this.toContextPos(Math.max(this.from,Math.min(this.to,e.state.selection.main.anchor))),selectionEnd:this.toContextPos(e.state.selection.main.head)});this.handlers.textupdate=i=>{let s=e.state.selection.main,{anchor:n,head:o}=s,r=this.toEditorPos(i.updateRangeStart),a=this.toEditorPos(i.updateRangeEnd);e.inputState.composing>=0&&!this.composing&&(this.composing={contextBase:i.updateRangeStart,editorBase:r,drifted:!1});let l=a-r>i.text.length;r==this.from&&n<this.from?r=n:a==this.to&&n>this.to&&(a=n);let h=gc(e.state.sliceDoc(r,a),i.text,(l?s.from:s.to)-r,l?"end":null);if(!h){let t=Co.single(this.toEditorPos(i.selectionStart),this.toEditorPos(i.selectionEnd));return void(bc(t,s)||e.dispatch({selection:t,userEvent:"select"}))}let c={from:h.from+r,to:h.toA+r,insert:Yn.of(i.text.slice(h.from,h.toB).split("\n"))};if((da.mac||da.android)&&c.from==o-1&&/^\. ?$/.test(i.text)&&"off"==e.contentDOM.getAttribute("autocorrect")&&(c={from:r,to:a,insert:Yn.of([i.text.replace("."," ")])}),this.pendingContextChange=c,!e.state.readOnly){let t=this.to-this.from+(c.to-c.from+c.insert.length);fc(e,c,Co.single(this.toEditorPos(i.selectionStart,t),this.toEditorPos(i.selectionEnd,t)))}this.pendingContextChange&&(this.revertPending(e.state),this.setSelection(e.state)),c.from<c.to&&!c.insert.length&&e.inputState.composing>=0&&!/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0,i.updateRangeStart-1),Math.min(t.text.length,i.updateRangeStart+1)))&&this.handlers.compositionend(i)},this.handlers.characterboundsupdate=i=>{let s=[],n=null;for(let t=this.toEditorPos(i.rangeStart),o=this.toEditorPos(i.rangeEnd);t<o;t++){let i=e.coordsForChar(t);n=i&&new DOMRect(i.left,i.top,i.right-i.left,i.bottom-i.top)||n||new DOMRect,s.push(n)}t.updateCharacterBounds(i.rangeStart,s)},this.handlers.textformatupdate=t=>{let i=[];for(let e of t.getTextFormats()){let t=e.underlineStyle,s=e.underlineThickness;if(!/none/i.test(t)&&!/none/i.test(s)){let n=this.toEditorPos(e.rangeStart),o=this.toEditorPos(e.rangeEnd);if(n<o){let e=`text-decoration: underline ${/^[a-z]/.test(t)?t+" ":"Dashed"==t?"dashed ":"Squiggle"==t?"wavy ":""}${/thin/i.test(s)?1:2}px`;i.push(wa.mark({attributes:{style:e}}).range(n,o))}}}e.dispatch({effects:zl.of(wa.set(i))})},this.handlers.compositionstart=()=>{e.inputState.composing<0&&(e.inputState.composing=0,e.inputState.compositionFirstChange=!0)},this.handlers.compositionend=()=>{if(e.inputState.composing=-1,e.inputState.compositionFirstChange=null,this.composing){let{drifted:t}=this.composing;this.composing=null,t&&this.reset(e.state)}};for(let e in this.handlers)t.addEventListener(e,this.handlers[e]);this.measureReq={read:e=>{let t=Pa(e.root);t&&t.rangeCount&&this.editContext.updateSelectionBounds(t.getRangeAt(0).getBoundingClientRect())}}}applyEdits(e){let t=0,i=!1,s=this.pendingContextChange;return e.changes.iterChanges((n,o,r,a,l)=>{if(i)return;let h=l.length-(o-n);if(s&&o>=s.to){if(s.from==n&&s.to==o&&s.insert.eq(l))return s=this.pendingContextChange=null,t+=h,void(this.to+=h);s=null,this.revertPending(e.state)}if(n+=t,(o+=t)<=this.from)this.from+=h,this.to+=h;else if(n<this.to){if(n<this.from||o>this.to||this.to-this.from+l.length>3e4)return void(i=!0);this.editContext.updateText(this.toContextPos(n),this.toContextPos(o),l.toString()),this.to+=h}t+=h}),s&&!i&&this.revertPending(e.state),!i}update(e){let t=this.pendingContextChange,i=e.startState.selection.main;this.composing&&(this.composing.drifted||!e.changes.touchesRange(i.from,i.to)&&e.transactions.some(e=>!e.isUserEvent("input.type")&&e.changes.touchesRange(this.from,this.to)))?(this.composing.drifted=!0,this.composing.editorBase=e.changes.mapPos(this.composing.editorBase)):this.applyEdits(e)&&this.rangeIsValid(e.state)?(e.docChanged||e.selectionSet||t)&&this.setSelection(e.state):(this.pendingContextChange=null,this.reset(e.state)),(e.geometryChanged||e.docChanged||e.selectionSet)&&e.view.requestMeasure(this.measureReq)}resetRange(e){let{head:t}=e.selection.main;this.from=Math.max(0,t-1e4),this.to=Math.min(e.doc.length,t+1e4)}reset(e){this.resetRange(e),this.editContext.updateText(0,this.editContext.text.length,e.doc.sliceString(this.from,this.to)),this.setSelection(e)}revertPending(e){let t=this.pendingContextChange;this.pendingContextChange=null,this.editContext.updateText(this.toContextPos(t.from),this.toContextPos(t.from+t.insert.length),e.doc.sliceString(t.from,t.to))}setSelection(e){let{main:t}=e.selection,i=this.toContextPos(Math.max(this.from,Math.min(this.to,t.anchor))),s=this.toContextPos(t.head);this.editContext.selectionStart==i&&this.editContext.selectionEnd==s||this.editContext.updateSelection(i,s)}rangeIsValid(e){let{head:t}=e.selection.main;return!(this.from>0&&t-this.from<500||this.to<e.doc.length&&this.to-t<500||this.to-this.from>3e4)}toEditorPos(e,t=this.to-this.from){e=Math.min(e,t);let i=this.composing;return i&&i.drifted?i.editorBase+(e-i.contextBase):e+this.from}toContextPos(e){let t=this.composing;return t&&t.drifted?t.contextBase+(e-t.editorBase):e-this.from}destroy(){for(let e in this.handlers)this.editContext.removeEventListener(e,this.handlers[e])}}class Jd{get state(){return this.viewState.state}get viewport(){return this.viewState.viewport}get visibleRanges(){return this.viewState.visibleRanges}get inView(){return this.viewState.inView}get composing(){return!!this.inputState&&this.inputState.composing>0}get compositionStarted(){return!!this.inputState&&this.inputState.composing>=0}get root(){return this._root}get win(){return this.dom.ownerDocument.defaultView||window}constructor(e={}){var t;this.plugins=[],this.pluginMap=new Map,this.editorAttrs={},this.contentAttrs={},this.bidiCache=[],this.destroyed=!1,this.updateState=2,this.measureScheduled=-1,this.measureRequests=[],this.contentDOM=document.createElement("div"),this.scrollDOM=document.createElement("div"),this.scrollDOM.tabIndex=-1,this.scrollDOM.className="cm-scroller",this.scrollDOM.appendChild(this.contentDOM),this.announceDOM=document.createElement("div"),this.announceDOM.className="cm-announced",this.announceDOM.setAttribute("aria-live","polite"),this.dom=document.createElement("div"),this.dom.appendChild(this.announceDOM),this.dom.appendChild(this.scrollDOM),e.parent&&e.parent.appendChild(this.dom);let{dispatch:i}=e;this.dispatchTransactions=e.dispatchTransactions||i&&(e=>e.forEach(e=>i(e,this)))||(e=>this.update(e)),this.dispatch=this.dispatch.bind(this),this._root=e.root||Xa(e.parent)||document,this.viewState=new Pd(this,e.state||mr.create(e)),e.scrollTo&&e.scrollTo.is(Nl)&&(this.viewState.scrollTarget=e.scrollTo.value.clip(this.viewState.state)),this.plugins=this.state.facet(Ul).map(e=>new jl(e));for(let e of this.plugins)e.update(this);this.observer=new Qd(this),this.inputState=new _c(this),this.inputState.ensureHandlers(this.plugins),this.docView=new Rh(this),this.mountStyles(),this.updateAttrs(),this.updateState=0,this.requestMeasure(),(null===(t=document.fonts)||void 0===t?void 0:t.ready)&&document.fonts.ready.then(()=>{this.viewState.mustMeasureContent="refresh",this.requestMeasure()})}dispatch(...e){let t=1==e.length&&e[0]instanceof ir?e:1==e.length&&Array.isArray(e[0])?e[0]:[this.state.update(...e)];this.dispatchTransactions(t,this)}update(e){if(0!=this.updateState)throw new Error("Calls to EditorView.update are not allowed while an update is in progress");let t,i=!1,s=!1,n=this.state;for(let t of e){if(t.startState!=n)throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");n=t.state}if(this.destroyed)return void(this.viewState.state=n);let o=this.hasFocus,r=0,a=null;e.some(e=>e.annotation(Zc))?(this.inputState.notifiedFocused=o,r=1):o!=this.inputState.notifiedFocused&&(this.inputState.notifiedFocused=o,a=Jc(n,o),a||(r=1));let l=this.observer.delayedAndroidKey,h=null;if(l?(this.observer.clearDelayedAndroidKey(),h=this.observer.readChange(),(h&&!this.state.doc.eq(n.doc)||!this.state.selection.eq(n.selection))&&(h=null)):this.observer.clear(),n.facet(mr.phrases)!=this.state.facet(mr.phrases))return this.setState(n);t=nh.create(this,n,e),t.flags|=r;let c=this.viewState.scrollTarget;try{this.updateState=2;for(let t of e){if(c&&(c=c.map(t.changes)),t.scrollIntoView){let{main:e}=t.state.selection,{x:i,y:s}=this.state.facet(Jd.cursorScrollMargin);c=new Bl(e.empty?e:Co.cursor(e.head,e.head>e.anchor?-1:1),"nearest","nearest",s,i)}for(let e of t.effects)e.is(Nl)&&(c=e.value.clip(this.state))}this.viewState.update(t,c),this.bidiCache=iu.update(this.bidiCache,t.changes),t.empty||(this.updatePlugins(t),this.inputState.update(t)),i=this.docView.update(t),this.state.facet(ih)!=this.styleModules&&this.mountStyles(),s=this.updateAttrs(),this.showAnnouncements(e),this.docView.updateSelection(i,e.some(e=>e.isUserEvent("select.pointer")))}finally{this.updateState=0}if(t.startState.facet(Nd)!=t.state.facet(Nd)&&(this.viewState.mustMeasureContent=!0),(i||s||c||this.viewState.mustEnforceCursorAssoc||this.viewState.mustMeasureContent)&&this.requestMeasure(),i&&this.docViewUpdate(),!t.empty)for(let e of this.state.facet(Tl))try{e(t)}catch(e){Hl(this.state,e,"update listener")}(a||h)&&Promise.resolve().then(()=>{a&&this.state==a.startState&&this.dispatch(a),h&&!uc(this,h)&&l.force&&Ya(this.contentDOM,l.key,l.keyCode)})}setState(e){if(0!=this.updateState)throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");if(this.destroyed)return void(this.viewState.state=e);this.updateState=2;let t=this.hasFocus;try{for(let e of this.plugins)e.destroy(this);this.viewState=new Pd(this,e),this.plugins=e.facet(Ul).map(e=>new jl(e)),this.pluginMap.clear();for(let e of this.plugins)e.update(this);this.docView.destroy(),this.docView=new Rh(this),this.inputState.ensureHandlers(this.plugins),this.mountStyles(),this.updateAttrs(),this.bidiCache=[]}finally{this.updateState=0}t&&this.focus(),this.requestMeasure()}updatePlugins(e){let t=e.startState.facet(Ul),i=e.state.facet(Ul);if(t!=i){let s=[];for(let n of i){let i=t.indexOf(n);if(i<0)s.push(new jl(n));else{let t=this.plugins[i];t.mustUpdate=e,s.push(t)}}for(let t of this.plugins)t.mustUpdate!=e&&t.destroy(this);this.plugins=s,this.pluginMap.clear()}else for(let t of this.plugins)t.mustUpdate=e;for(let e=0;e<this.plugins.length;e++)this.plugins[e].update(this);t!=i&&this.inputState.ensureHandlers(this.plugins)}docViewUpdate(){for(let e of this.plugins){let t=e.value;if(t&&t.docViewUpdate)try{t.docViewUpdate(this)}catch(e){Hl(this.state,e,"doc view update listener")}}}measure(e=!0){if(this.destroyed)return;if(this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.observer.delayedAndroidKey)return this.measureScheduled=-1,void this.requestMeasure();this.measureScheduled=0,e&&this.observer.forceFlush();let t=null,i=this.viewState.scrollParent,s=this.viewState.getScrollOffset(),{scrollAnchorPos:n,scrollAnchorHeight:o}=this.viewState;Math.abs(s-this.viewState.scrollOffset)>1&&(o=-1),this.viewState.scrollAnchorHeight=-1;try{for(let e=0;;e++){if(o<0)if(Za(i||this.win))n=-1,o=this.viewState.heightMap.height;else{let e=this.viewState.scrollAnchorAt(s);n=e.from,o=e.top}this.updateState=1;let r=this.viewState.measure();if(!r&&!this.measureRequests.length&&null==this.viewState.scrollTarget)break;if(e>5){console.warn(this.measureRequests.length?"Measure loop restarted more than 5 times":"Viewport failed to stabilize");break}let a=[];4&r||([this.measureRequests,a]=[a,this.measureRequests]);let l=a.map(e=>{try{return e.read(this)}catch(e){return Hl(this.state,e),tu}}),h=nh.create(this,this.state,[]),c=!1;h.flags|=r,t?t.flags|=r:t=h,this.updateState=2,h.empty||(this.updatePlugins(h),this.inputState.update(h),this.updateAttrs(),c=this.docView.update(h),c&&this.docViewUpdate());for(let e=0;e<a.length;e++)if(l[e]!=tu)try{let t=a[e];t.write&&t.write(l[e],this)}catch(e){Hl(this.state,e)}if(c&&this.docView.updateSelection(!0),!h.viewportChanged&&0==this.measureRequests.length){if(this.viewState.editorHeight){if(this.viewState.scrollTarget){this.docView.scrollIntoView(this.viewState.scrollTarget),this.viewState.scrollTarget=null,o=-1;continue}{let e=((n<0?this.viewState.heightMap.height:this.viewState.lineBlockAt(n).top)-o)/this.scaleY;if((e>1||e<-1)&&!(da.ios&&this.inputState.lastIOSMomentumScroll>Date.now()-100)&&(i==this.scrollDOM||this.hasFocus||Math.max(this.inputState.lastWheelEvent,this.inputState.lastTouchTime)>Date.now()-100)){s+=e,i?i.scrollTop+=e:this.win.scrollBy(0,e),o=-1;continue}}}break}}}finally{this.updateState=0,this.measureScheduled=-1}if(t&&!t.empty)for(let e of this.state.facet(Tl))e(t)}get themeClasses(){return Hd+" "+(this.state.facet(zd)?Gd:Vd)+" "+this.state.facet(Nd)}updateAttrs(){let e=su(this,Fl,{class:"cm-editor"+(this.hasFocus?" cm-focused ":" ")+this.themeClasses}),t={spellcheck:"false",autocorrect:"off",autocapitalize:"off",writingsuggestions:"false",translate:"no",contenteditable:this.state.facet(Vl)?"true":"false",class:"cm-content",style:`${da.tabSize}: ${this.state.tabSize}`,role:"textbox","aria-multiline":"true"};this.state.readOnly&&(t["aria-readonly"]="true"),su(this,ql,t);let i=this.observer.ignore(()=>{let i=ma(this.contentDOM,this.contentAttrs,t),s=ma(this.dom,this.editorAttrs,e);return i||s});return this.editorAttrs=e,this.contentAttrs=t,i}showAnnouncements(e){let t=!0;for(let i of e)for(let e of i.effects)if(e.is(Jd.announce)){t&&(this.announceDOM.textContent=""),t=!1,this.announceDOM.appendChild(document.createElement("div")).textContent=e.value}}mountStyles(){this.styleModules=this.state.facet(ih);let e=this.state.facet(Jd.cspNonce);Gr.mount(this.root,this.styleModules.concat(jd).reverse(),e?{nonce:e}:void 0)}readMeasured(){if(2==this.updateState)throw new Error("Reading the editor layout isn't allowed during an update");0==this.updateState&&this.measureScheduled>-1&&this.measure(!1)}requestMeasure(e){if(this.measureScheduled<0&&(this.measureScheduled=this.win.requestAnimationFrame(()=>this.measure())),e){if(this.measureRequests.indexOf(e)>-1)return;if(null!=e.key)for(let t=0;t<this.measureRequests.length;t++)if(this.measureRequests[t].key===e.key)return void(this.measureRequests[t]=e);this.measureRequests.push(e)}}plugin(e){let t=this.pluginMap.get(e);return(void 0===t||t&&t.plugin!=e)&&this.pluginMap.set(e,t=this.plugins.find(t=>t.plugin==e)||null),t&&t.update(this).value}get documentTop(){return this.contentDOM.getBoundingClientRect().top+this.viewState.paddingTop}get documentPadding(){return{top:this.viewState.paddingTop,bottom:this.viewState.paddingBottom}}get scaleX(){return this.viewState.scaleX}get scaleY(){return this.viewState.scaleY}elementAtHeight(e){return this.readMeasured(),this.viewState.elementAtHeight(e)}lineBlockAtHeight(e){return this.readMeasured(),this.viewState.lineBlockAtHeight(e)}get viewportLineBlocks(){return this.viewState.viewportLines}lineBlockAt(e){return this.viewState.lineBlockAt(e)}get contentHeight(){return this.viewState.contentHeight}moveByChar(e,t,i){return tc(this,e,Xh(this,e,t,i))}moveByGroup(e,t){return tc(this,e,Xh(this,e,t,t=>Kh(this,e.head,t)))}visualLineSide(e,t){let i=this.bidiSpans(e),s=this.textDirectionAt(e.from),n=i[t?i.length-1:0];return Co.cursor(n.side(t,s)+e.from,n.forward(!t,s)?1:-1)}moveToLineBoundary(e,t,i=!0){return Yh(this,e,t,i)}moveVertically(e,t,i){return tc(this,e,Zh(this,e,t,i))}domAtPos(e,t=1){return this.docView.domAtPos(e,t)}posAtDOM(e,t=0){return this.docView.posFromDOM(e,t)}posAtCoords(e,t=!0){this.readMeasured();let i=sc(this,e,t);return i&&i.pos}posAndSideAtCoords(e,t=!0){return this.readMeasured(),sc(this,e,t)}coordsAtPos(e,t=1){this.readMeasured();let i=this.state.doc.lineAt(e),s=this.bidiSpans(i),n=s[ul.find(s,e-i.from,-1,t)];return this.docView.coordsAt(e,t,n.dir==il.RTL)}coordsForChar(e){return this.readMeasured(),this.docView.coordsForChar(e)}get defaultCharacterWidth(){return this.viewState.heightOracle.charWidth}get defaultLineHeight(){return this.viewState.heightOracle.lineHeight}get textDirection(){return this.viewState.defaultTextDirection}textDirectionAt(e){return!this.state.facet(El)||e<this.viewport.from||e>this.viewport.to?this.textDirection:(this.readMeasured(),this.docView.textDirectionAt(e))}get lineWrapping(){return this.viewState.heightOracle.lineWrapping}bidiSpans(e){if(e.length>eu)return yl(e.length);let t,i=this.textDirectionAt(e.from);for(let s of this.bidiCache)if(s.from==e.from&&s.dir==i&&(s.fresh||fl(s.isolates,t=Jl(this,e))))return s.order;t||(t=Jl(this,e));let s=wl(e.text,i,t);return this.bidiCache.push(new iu(e.from,e.to,i,t,!0,s)),s}get hasFocus(){var e;return(this.dom.ownerDocument.hasFocus()||da.safari&&(null===(e=this.inputState)||void 0===e?void 0:e.lastContextMenu)>Date.now()-3e4)&&this.root.activeElement==this.contentDOM}focus(){this.observer.ignore(()=>{qa(this.contentDOM),this.docView.updateSelection()})}setRoot(e){this._root!=e&&(this._root=e,this.observer.setWindow((9==e.nodeType?e:e.ownerDocument).defaultView||window),this.mountStyles())}destroy(){this.root.activeElement==this.contentDOM&&this.contentDOM.blur();for(let e of this.plugins)e.destroy(this);this.plugins=[],this.inputState.destroy(),this.docView.destroy(),this.dom.remove(),this.observer.destroy(),this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.destroyed=!0}static scrollIntoView(e,t={}){var i,s,n,o;return Nl.of(new Bl("number"==typeof e?Co.cursor(e):e,null!==(i=t.y)&&void 0!==i?i:"nearest",null!==(s=t.x)&&void 0!==s?s:"nearest",null!==(n=t.yMargin)&&void 0!==n?n:5,null!==(o=t.xMargin)&&void 0!==o?o:5))}scrollSnapshot(){let{scrollTop:e,scrollLeft:t}=this.scrollDOM,i=this.viewState.scrollAnchorAt(e);return Nl.of(new Bl(Co.cursor(i.from),"start","start",i.top-e,t,!0))}setTabFocusMode(e){null==e?this.inputState.tabFocusMode=this.inputState.tabFocusMode<0?0:-1:"boolean"==typeof e?this.inputState.tabFocusMode=e?0:-1:0!=this.inputState.tabFocusMode&&(this.inputState.tabFocusMode=Date.now()+e)}static domEventHandlers(e){return Wl.define(()=>({}),{eventHandlers:e})}static domEventObservers(e){return Wl.define(()=>({}),{eventObservers:e})}static theme(e,t){let i=Gr.newName(),s=[Nd.of(i),ih.of(Wd(`.${i}`,e))];return t&&t.dark&&s.push(zd.of(!0)),s}static baseTheme(e){return Bo.lowest(ih.of(Wd("."+Hd,e,Ud)))}static findFromDOM(e){var t;let i=e.querySelector(".cm-content"),s=i&&rh.get(i)||rh.get(e);return(null===(t=null==s?void 0:s.root)||void 0===t?void 0:t.view)||null}}Jd.styleModule=ih,Jd.inputHandler=Ml,Jd.clipboardInputFilter=Il,Jd.clipboardOutputFilter=Rl,Jd.scrollHandler=Ll,Jd.focusChangeEffect=$l,Jd.perLineTextDirection=El,Jd.exceptionSink=Pl,Jd.updateListener=Tl,Jd.editable=Vl,Jd.mouseSelectionStyle=Al,Jd.dragMovesSelection=Ol,Jd.clickAddsSelectionRange=Sl,Jd.decorations=Ql,Jd.blockWrappers=Yl,Jd.outerDecorations=Xl,Jd.atomicRanges=Kl,Jd.bidiIsolatedRanges=Zl,Jd.cursorScrollMargin=Ao.define({combine:e=>{let t=5,i=5;for(let s of e)"number"==typeof s?t=i=s:({x:t,y:i}=s);return{x:t,y:i}}}),Jd.scrollMargins=eh,Jd.darkTheme=zd,Jd.cspNonce=Ao.define({combine:e=>e.length?e[0]:""}),Jd.contentAttributes=ql,Jd.editorAttributes=Fl,Jd.lineWrapping=Jd.contentAttributes.of({class:"cm-lineWrapping"}),Jd.announce=tr.define();const eu=4096,tu={};class iu{constructor(e,t,i,s,n,o){this.from=e,this.to=t,this.dir=i,this.isolates=s,this.fresh=n,this.order=o}static update(e,t){if(t.empty&&!e.some(e=>e.fresh))return e;let i=[],s=e.length?e[e.length-1].dir:il.LTR;for(let n=Math.max(0,e.length-10);n<e.length;n++){let o=e[n];o.dir!=s||t.touchesRange(o.from,o.to)||i.push(new iu(t.mapPos(o.from,1),t.mapPos(o.to,-1),o.dir,o.isolates,!1,o.order))}return i}}function su(e,t,i){for(let s=e.state.facet(t),n=s.length-1;n>=0;n--){let t=s[n],o="function"==typeof t?t(e):t;o&&ua(o,i)}return i}const nu=da.mac?"mac":da.windows?"win":da.linux?"linux":"key";function ou(e,t){const i=e.split(/-(?!$)/);let s,n,o,r,a=i[i.length-1];"Space"==a&&(a=" ");for(let e=0;e<i.length-1;++e){const a=i[e];if(/^(cmd|meta|m)$/i.test(a))r=!0;else if(/^a(lt)?$/i.test(a))s=!0;else if(/^(c|ctrl|control)$/i.test(a))n=!0;else if(/^s(hift)?$/i.test(a))o=!0;else{if(!/^mod$/i.test(a))throw new Error("Unrecognized modifier name: "+a);"mac"==t?r=!0:n=!0}}return s&&(a="Alt-"+a),n&&(a="Ctrl-"+a),r&&(a="Meta-"+a),o&&(a="Shift-"+a),a}function ru(e,t,i){return t.altKey&&(e="Alt-"+e),t.ctrlKey&&(e="Ctrl-"+e),t.metaKey&&(e="Meta-"+e),!1!==i&&t.shiftKey&&(e="Shift-"+e),e}const au=Bo.default(Jd.domEventHandlers({keydown:(e,t)=>mu(cu(t.state),e,t,"editor")})),lu=Ao.define({enables:au}),hu=new WeakMap;function cu(e){let t=e.facet(lu),i=hu.get(t);return i||hu.set(t,i=pu(t.reduce((e,t)=>e.concat(t),[]))),i}function du(e,t,i){return mu(cu(e.state),t,e,i)}let uu=null;const fu=4e3;function pu(e,t=nu){let i=Object.create(null),s=Object.create(null),n=(e,t)=>{let i=s[e];if(null==i)s[e]=t;else if(i!=t)throw new Error("Key binding "+e+" is used both as a regular binding and as a multi-stroke prefix")},o=(e,s,o,r,a)=>{var l,h;let c=i[e]||(i[e]=Object.create(null)),d=s.split(/ (?!$)/).map(e=>ou(e,t));for(let t=1;t<d.length;t++){let i=d.slice(0,t).join(" ");n(i,!0),c[i]||(c[i]={preventDefault:!0,stopPropagation:!1,run:[t=>{let s=uu={view:t,prefix:i,scope:e};return setTimeout(()=>{uu==s&&(uu=null)},fu),!0}]})}let u=d.join(" ");n(u,!1);let f=c[u]||(c[u]={preventDefault:!1,stopPropagation:!1,run:(null===(h=null===(l=c._any)||void 0===l?void 0:l.run)||void 0===h?void 0:h.slice())||[]});o&&f.run.push(o),r&&(f.preventDefault=!0),a&&(f.stopPropagation=!0)};for(let s of e){let e=s.scope?s.scope.split(" "):["editor"];if(s.any)for(let t of e){let e=i[t]||(i[t]=Object.create(null));e._any||(e._any={preventDefault:!1,stopPropagation:!1,run:[]});let{any:n}=s;for(let t in e)e[t].run.push(e=>n(e,gu))}let n=s[t]||s.key;if(n)for(let t of e)o(t,n,s.run,s.preventDefault,s.stopPropagation),s.shift&&o(t,"Shift-"+n,s.shift,s.preventDefault,s.stopPropagation)}return i}let gu=null;function mu(e,t,i,s){gu=t;let n=Kr(t),o=uo(ho(n,0))==n.length&&" "!=n,r="",a=!1,l=!1,h=!1;uu&&uu.view==i&&uu.scope==s&&(r=uu.prefix+" ",Sc.indexOf(t.keyCode)<0&&(l=!0,uu=null));let c,d,u=new Set,f=e=>{if(e){for(let t of e.run)if(!u.has(t)&&(u.add(t),t(i)))return e.stopPropagation&&(h=!0),!0;e.preventDefault&&(e.stopPropagation&&(h=!0),l=!0)}return!1},p=e[s];return p&&(f(p[r+ru(n,t,!o)])?a=!0:!o||!(t.altKey||t.metaKey||t.ctrlKey)||da.windows&&t.ctrlKey&&t.altKey||da.mac&&t.altKey&&!t.ctrlKey&&!t.metaKey||!(c=jr[t.keyCode])||c==n?o&&t.shiftKey&&f(p[r+ru(n,t,!0)])&&(a=!0):(f(p[r+ru(c,t,!0)])||t.shiftKey&&(d=Fr[t.keyCode])!=n&&d!=c&&f(p[r+ru(d,t,!1)]))&&(a=!0),!a&&f(p._any)&&(a=!0)),l&&(a=!0),a&&h&&t.stopPropagation(),gu=null,a}const vu="-10000px";class bu{constructor(e,t,i,s){this.facet=t,this.createTooltipView=i,this.removeTooltipView=s,this.input=e.state.facet(t),this.tooltips=this.input.filter(e=>e);let n=null;this.tooltipViews=this.tooltips.map(e=>n=i(e,n))}update(e,t){var i;let s=e.state.facet(this.facet),n=s.filter(e=>e);if(s===this.input){for(let t of this.tooltipViews)t.update&&t.update(e);return!1}let o=[],r=t?[]:null;for(let i=0;i<n.length;i++){let s=n[i],a=-1;if(s){for(let e=0;e<this.tooltips.length;e++){let t=this.tooltips[e];t&&t.create==s.create&&(a=e)}if(a<0)o[i]=this.createTooltipView(s,i?o[i-1]:null),r&&(r[i]=!!s.above);else{let s=o[i]=this.tooltipViews[a];r&&(r[i]=t[a]),s.update&&s.update(e)}}}for(let e of this.tooltipViews)o.indexOf(e)<0&&(this.removeTooltipView(e),null===(i=e.destroy)||void 0===i||i.call(e));return t&&(r.forEach((e,i)=>t[i]=e),t.length=r.length),this.input=s,this.tooltips=n,this.tooltipViews=o,!0}}function _u(e){let t=e.dom.ownerDocument.documentElement;return{top:0,left:0,bottom:t.clientHeight,right:t.clientWidth}}const wu=Ao.define({combine:e=>{var t,i,s;return{position:da.ios?"absolute":(null===(t=e.find(e=>e.position))||void 0===t?void 0:t.position)||"fixed",parent:(null===(i=e.find(e=>e.parent))||void 0===i?void 0:i.parent)||null,tooltipSpace:(null===(s=e.find(e=>e.tooltipSpace))||void 0===s?void 0:s.tooltipSpace)||_u}}}),yu=new WeakMap,xu=Wl.fromClass(class{constructor(e){this.view=e,this.above=[],this.inView=!0,this.madeAbsolute=!1,this.lastTransaction=0,this.measureTimeout=-1;let t=e.state.facet(wu);this.position=t.position,this.parent=t.parent,this.classes=e.themeClasses,this.createContainer(),this.measureReq={read:this.readMeasure.bind(this),write:this.writeMeasure.bind(this),key:this},this.resizeObserver="function"==typeof ResizeObserver?new ResizeObserver(()=>this.measureSoon()):null,this.manager=new bu(e,Ou,(e,t)=>this.createTooltip(e,t),e=>{this.resizeObserver&&this.resizeObserver.unobserve(e.dom),e.dom.remove()}),this.above=this.manager.tooltips.map(e=>!!e.above),this.intersectionObserver="function"==typeof IntersectionObserver?new IntersectionObserver(e=>{Date.now()>this.lastTransaction-50&&e.length>0&&e[e.length-1].intersectionRatio<1&&this.measureSoon()},{threshold:[1]}):null,this.observeIntersection(),e.win.addEventListener("resize",this.measureSoon=this.measureSoon.bind(this)),this.maybeMeasure()}createContainer(){this.parent?(this.container=document.createElement("div"),this.container.style.position="relative",this.container.className=this.view.themeClasses,this.parent.appendChild(this.container)):this.container=this.view.dom}observeIntersection(){if(this.intersectionObserver){this.intersectionObserver.disconnect();for(let e of this.manager.tooltipViews)this.intersectionObserver.observe(e.dom)}}measureSoon(){this.measureTimeout<0&&(this.measureTimeout=setTimeout(()=>{this.measureTimeout=-1,this.maybeMeasure()},50))}update(e){e.transactions.length&&(this.lastTransaction=Date.now());let t=this.manager.update(e,this.above);t&&this.observeIntersection();let i=t||e.geometryChanged,s=e.state.facet(wu);if(s.position!=this.position&&!this.madeAbsolute){this.position=s.position;for(let e of this.manager.tooltipViews)e.dom.style.position=this.position;i=!0}if(s.parent!=this.parent){this.parent&&this.container.remove(),this.parent=s.parent,this.createContainer();for(let e of this.manager.tooltipViews)this.container.appendChild(e.dom);i=!0}else this.parent&&this.view.themeClasses!=this.classes&&(this.classes=this.container.className=this.view.themeClasses);i&&this.maybeMeasure()}createTooltip(e,t){let i=e.create(this.view),s=t?t.dom:null;if(i.dom.classList.add("cm-tooltip"),e.arrow&&!i.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")){let e=document.createElement("div");e.className="cm-tooltip-arrow",i.dom.appendChild(e)}return i.dom.style.position=this.position,i.dom.style.top=vu,i.dom.style.left="0px",this.container.insertBefore(i.dom,s),i.mount&&i.mount(this.view),this.resizeObserver&&this.resizeObserver.observe(i.dom),i}destroy(){var e,t,i;this.view.win.removeEventListener("resize",this.measureSoon);for(let t of this.manager.tooltipViews)t.dom.remove(),null===(e=t.destroy)||void 0===e||e.call(t);this.parent&&this.container.remove(),null===(t=this.resizeObserver)||void 0===t||t.disconnect(),null===(i=this.intersectionObserver)||void 0===i||i.disconnect(),clearTimeout(this.measureTimeout)}readMeasure(){let e=1,t=1,i=!1;if("fixed"==this.position&&this.manager.tooltipViews.length){let{dom:e}=this.manager.tooltipViews[0];if(da.safari){let t=e.getBoundingClientRect();i=Math.abs(t.top+1e4)>1||Math.abs(t.left)>1}else i=!!e.offsetParent&&e.offsetParent!=this.container.ownerDocument.body}if(i||"absolute"==this.position)if(this.parent){let i=this.parent.getBoundingClientRect();i.width&&i.height&&(e=i.width/this.parent.offsetWidth,t=i.height/this.parent.offsetHeight)}else({scaleX:e,scaleY:t}=this.view.viewState);let s=this.view.scrollDOM.getBoundingClientRect(),n=th(this.view);return{visible:{left:s.left+n.left,top:s.top+n.top,right:s.right-n.right,bottom:s.bottom-n.bottom},parent:this.parent?this.container.getBoundingClientRect():this.view.dom.getBoundingClientRect(),pos:this.manager.tooltips.map((e,t)=>{let i=this.manager.tooltipViews[t];return i.getCoords?i.getCoords(e.pos):this.view.coordsAtPos(e.pos)}),size:this.manager.tooltipViews.map(({dom:e})=>e.getBoundingClientRect()),space:this.view.state.facet(wu).tooltipSpace(this.view),scaleX:e,scaleY:t,makeAbsolute:i}}writeMeasure(e){var t;if(e.makeAbsolute){this.madeAbsolute=!0,this.position="absolute";for(let e of this.manager.tooltipViews)e.dom.style.position="absolute"}let{visible:i,space:s,scaleX:n,scaleY:o}=e,r=[];for(let a=0;a<this.manager.tooltips.length;a++){let l=this.manager.tooltips[a],h=this.manager.tooltipViews[a],{dom:c}=h,d=e.pos[a],u=e.size[a];if(!d||!1!==l.clip&&(d.bottom<=Math.max(i.top,s.top)||d.top>=Math.min(i.bottom,s.bottom)||d.right<Math.max(i.left,s.left)-.1||d.left>Math.min(i.right,s.right)+.1)){c.style.top=vu;continue}let f=l.arrow?h.dom.querySelector(".cm-tooltip-arrow"):null,p=f?7:0,g=u.right-u.left,m=null!==(t=yu.get(h))&&void 0!==t?t:u.bottom-u.top,v=h.offset||Su,b=this.view.textDirection==il.LTR,_=u.width>s.right-s.left?b?s.left:s.right-u.width:b?Math.max(s.left,Math.min(d.left-(f?14:0)+v.x,s.right-g)):Math.min(Math.max(s.left,d.left-g+(f?14:0)-v.x),s.right-g),w=this.above[a];!l.strictSide&&(w?d.top-m-p-v.y<s.top:d.bottom+m+p+v.y>s.bottom)&&w==s.bottom-d.bottom>d.top-s.top&&(w=this.above[a]=!w);let y=(w?d.top-s.top:s.bottom-d.bottom)-p;if(y<m&&!1!==h.resize){if(y<this.view.defaultLineHeight){c.style.top=vu;continue}yu.set(h,m),c.style.height=(m=y)/o+"px"}else c.style.height&&(c.style.height="");let x=w?d.top-m-p-v.y:d.bottom+p+v.y,k=_+g;if(!0!==h.overlap)for(let e of r)e.left<k&&e.right>_&&e.top<x+m&&e.bottom>x&&(x=w?e.top-m-2-p:e.bottom+p+2);if("absolute"==this.position?(c.style.top=(x-e.parent.top)/o+"px",ku(c,(_-e.parent.left)/n)):(c.style.top=x/o+"px",ku(c,_/n)),f){let e=d.left+(b?v.x:-v.x)-(_+14-7);f.style.left=e/n+"px"}!0!==h.overlap&&r.push({left:_,top:x,right:k,bottom:x+m}),c.classList.toggle("cm-tooltip-above",w),c.classList.toggle("cm-tooltip-below",!w),h.positioned&&h.positioned(e.space)}}maybeMeasure(){if(this.manager.tooltips.length&&(this.view.inView&&this.view.requestMeasure(this.measureReq),this.inView!=this.view.inView&&(this.inView=this.view.inView,!this.inView)))for(let e of this.manager.tooltipViews)e.dom.style.top=vu}},{eventObservers:{scroll(){this.maybeMeasure()}}});function ku(e,t){let i=parseInt(e.style.left,10);(isNaN(i)||Math.abs(t-i)>1)&&(e.style.left=t+"px")}const Cu=Jd.baseTheme({".cm-tooltip":{zIndex:500,boxSizing:"border-box"},"&light .cm-tooltip":{border:"1px solid #bbb",backgroundColor:"#f5f5f5"},"&light .cm-tooltip-section:not(:first-child)":{borderTop:"1px solid #bbb"},"&dark .cm-tooltip":{backgroundColor:"#333338",color:"white"},".cm-tooltip-arrow":{height:"7px",width:"14px",position:"absolute",zIndex:-1,overflow:"hidden","&:before, &:after":{content:"''",position:"absolute",width:0,height:0,borderLeft:"7px solid transparent",borderRight:"7px solid transparent"},".cm-tooltip-above &":{bottom:"-7px","&:before":{borderTop:"7px solid #bbb"},"&:after":{borderTop:"7px solid #f5f5f5",bottom:"1px"}},".cm-tooltip-below &":{top:"-7px","&:before":{borderBottom:"7px solid #bbb"},"&:after":{borderBottom:"7px solid #f5f5f5",top:"1px"}}},"&dark .cm-tooltip .cm-tooltip-arrow":{"&:before":{borderTopColor:"#333338",borderBottomColor:"#333338"},"&:after":{borderTopColor:"transparent",borderBottomColor:"transparent"}}}),Su={x:0,y:0},Ou=Ao.define({enables:[xu,Cu]}),Au=Ao.define({combine:e=>e.reduce((e,t)=>e.concat(t),[])});class Pu{static create(e){return new Pu(e)}constructor(e){this.view=e,this.mounted=!1,this.dom=document.createElement("div"),this.dom.classList.add("cm-tooltip-hover"),this.manager=new bu(e,Au,(e,t)=>this.createHostedView(e,t),e=>e.dom.remove())}createHostedView(e,t){let i=e.create(this.view);return i.dom.classList.add("cm-tooltip-section"),this.dom.insertBefore(i.dom,t?t.dom.nextSibling:this.dom.firstChild),this.mounted&&i.mount&&i.mount(this.view),i}mount(e){for(let t of this.manager.tooltipViews)t.mount&&t.mount(e);this.mounted=!0}positioned(e){for(let t of this.manager.tooltipViews)t.positioned&&t.positioned(e)}update(e){this.manager.update(e)}destroy(){var e;for(let t of this.manager.tooltipViews)null===(e=t.destroy)||void 0===e||e.call(t)}passProp(e){let t;for(let i of this.manager.tooltipViews){let s=i[e];if(void 0!==s)if(void 0===t)t=s;else if(t!==s)return}return t}get offset(){return this.passProp("offset")}get getCoords(){return this.passProp("getCoords")}get overlap(){return this.passProp("overlap")}get resize(){return this.passProp("resize")}}const Tu=Ou.compute([Au],e=>{let t=e.facet(Au);return 0===t.length?null:{pos:Math.min(...t.map(e=>e.pos)),end:Math.max(...t.map(e=>{var t;return null!==(t=e.end)&&void 0!==t?t:e.pos})),create:Pu.create,above:t[0].above,arrow:t.some(e=>e.arrow)}}),Mu=Ao.define();class $u{constructor(e,t,i,s,n,o){this.view=e,this.source=t,this.field=i,this.locked=s,this.setHover=n,this.hoverTime=o,this.hoverTimeout=-1,this.restartTimeout=-1,this.pending=null,this.lastMove={x:0,y:0,target:e.dom,time:0},this.checkHover=this.checkHover.bind(this),e.dom.addEventListener("mouseleave",this.mouseleave=this.mouseleave.bind(this)),e.dom.addEventListener("mousemove",this.mousemove=this.mousemove.bind(this))}update(e){this.pending&&(this.pending=null,clearTimeout(this.restartTimeout),this.restartTimeout=setTimeout(()=>this.startHover(),20))}get active(){return this.view.state.field(this.field)}checkHover(){if(this.hoverTimeout=-1,this.active.length)return;let e=Date.now()-this.lastMove.time;e<this.hoverTime?this.hoverTimeout=setTimeout(this.checkHover,this.hoverTime-e):this.startHover()}startHover(){clearTimeout(this.restartTimeout);let{view:e,lastMove:t}=this,i=e.docView.tile.nearest(t.target);if(!i)return;let s,n=1;if(i.isWidget())s=i.posAtStart;else{if(s=e.posAtCoords(t),null==s)return;let i=e.coordsAtPos(s);if(!i||t.y<i.top||t.y>i.bottom||t.x<i.left-e.defaultCharacterWidth||t.x>i.right+e.defaultCharacterWidth)return;let o=e.bidiSpans(e.state.doc.lineAt(s)).find(e=>e.from<=s&&e.to>=s),r=o&&o.dir==il.RTL?-1:1;n=t.x<i.left?-r:r}this.activateHover(e,s,n)}activateHover(e,t,i,s){let n=this.source(e,t,i),o=t=>{if(t&&(!Array.isArray(t)||t.length)){let i=Array.isArray(t)?t:[t];s&&this.locked.set(i,s),e.dispatch({effects:this.setHover.of(i)})}};if(n&&"then"in n){let i=this.pending={pos:t};n.then(e=>{this.pending==i&&(this.pending=null,o(e))},t=>Hl(e.state,t,"hover tooltip"))}else o(n)}get tooltip(){let e=this.view.plugin(xu),t=e?e.manager.tooltips.findIndex(e=>e.create==Pu.create):-1;return t>-1?e.manager.tooltipViews[t]:null}mousemove(e){var t,i;this.lastMove={x:e.clientX,y:e.clientY,target:e.target,time:Date.now()},this.hoverTimeout<0&&(this.hoverTimeout=setTimeout(this.checkHover,this.hoverTime));let{active:s,tooltip:n}=this;if(s.length&&!this.locked.has(s)&&n&&!Ru(n.dom,e)||this.pending){let{pos:n}=s[0]||this.pending,o=null!==(i=null===(t=s[0])||void 0===t?void 0:t.end)&&void 0!==i?i:n;(n==o?this.view.posAtCoords(this.lastMove)==n:Eu(this.view,n,o,e.clientX,e.clientY))||(this.view.dispatch({effects:this.setHover.of([])}),this.pending=null)}}mouseleave(e){clearTimeout(this.hoverTimeout),this.hoverTimeout=-1;let{active:t}=this;if(t.length&&!this.locked.has(t)){let{tooltip:t}=this;t&&t.dom.contains(e.relatedTarget)?this.watchTooltipLeave(t.dom):this.view.dispatch({effects:this.setHover.of([])})}}watchTooltipLeave(e){let t=i=>{e.removeEventListener("mouseleave",t);let{active:s}=this;!s.length||this.locked.has(s)||this.view.dom.contains(i.relatedTarget)||this.view.dispatch({effects:this.setHover.of([])})};e.addEventListener("mouseleave",t)}destroy(){clearTimeout(this.hoverTimeout),clearTimeout(this.restartTimeout),this.view.dom.removeEventListener("mouseleave",this.mouseleave),this.view.dom.removeEventListener("mousemove",this.mousemove)}}const Iu=4;function Ru(e,t){let i,{left:s,right:n,top:o,bottom:r}=e.getBoundingClientRect();if(i=e.querySelector(".cm-tooltip-arrow")){let e=i.getBoundingClientRect();o=Math.min(e.top,o),r=Math.max(e.bottom,r)}return t.clientX>=s-Iu&&t.clientX<=n+Iu&&t.clientY>=o-Iu&&t.clientY<=r+Iu}function Eu(e,t,i,s,n,o){let r=e.scrollDOM.getBoundingClientRect(),a=e.documentTop+e.documentPadding.top+e.contentHeight;if(r.left>s||r.right<s||r.top>n||Math.min(r.bottom,a)<n)return!1;let l=e.posAtCoords({x:s,y:n},!1);return l>=t&&l<=i}function Du(e,t={}){let i=tr.define(),s=new WeakMap,n=Eo.define({create:()=>[],update(e,o){let r=s.get(e);if(e.length&&(t.hideOnChange&&(o.docChanged||o.selection)||r&&r(o)?e=[]:t.hideOn&&(e=e.filter(e=>!t.hideOn(o,e)))),o.docChanged&&e.length){let t=[];for(let i of e){let e=o.changes.mapPos(i.pos,-1,po.TrackDel);if(null!=e){let s=Object.assign(Object.create(null),i);s.pos=e,null!=s.end&&(s.end=o.changes.mapPos(s.end)),t.push(s)}}e=t}for(let t of o.effects)t.is(i)&&(e=t.value,r=void 0),(t.is(Lu)&&!t.value||t.value==n)&&(e=[]);return e.length&&r&&s.set(e,r),e},provide:e=>Au.from(e)});const o=Wl.define(o=>new $u(o,e,n,s,i,t.hoverTime||300));return{active:n,extension:[n,o,Mu.of(o),Tu]}}const Lu=tr.define(),Bu=Ao.define({combine(e){let t,i;for(let s of e)t=t||s.topContainer,i=i||s.bottomContainer;return{topContainer:t,bottomContainer:i}}});function Nu(e,t){let i=e.plugin(zu),s=i?i.specs.indexOf(t):-1;return s>-1?i.panels[s]:null}const zu=Wl.fromClass(class{constructor(e){this.input=e.state.facet(Gu),this.specs=this.input.filter(e=>e),this.panels=this.specs.map(t=>t(e));let t=e.state.facet(Bu);this.top=new Hu(e,!0,t.topContainer),this.bottom=new Hu(e,!1,t.bottomContainer),this.top.sync(this.panels.filter(e=>e.top)),this.bottom.sync(this.panels.filter(e=>!e.top));for(let e of this.panels)e.dom.classList.add("cm-panel"),e.mount&&e.mount()}update(e){let t=e.state.facet(Bu);this.top.container!=t.topContainer&&(this.top.sync([]),this.top=new Hu(e.view,!0,t.topContainer)),this.bottom.container!=t.bottomContainer&&(this.bottom.sync([]),this.bottom=new Hu(e.view,!1,t.bottomContainer)),this.top.syncClasses(),this.bottom.syncClasses();let i=e.state.facet(Gu);if(i!=this.input){let t=i.filter(e=>e),s=[],n=[],o=[],r=[];for(let i of t){let t,a=this.specs.indexOf(i);a<0?(t=i(e.view),r.push(t)):(t=this.panels[a],t.update&&t.update(e)),s.push(t),(t.top?n:o).push(t)}this.specs=t,this.panels=s,this.top.sync(n),this.bottom.sync(o);for(let e of r)e.dom.classList.add("cm-panel"),e.mount&&e.mount()}else for(let t of this.panels)t.update&&t.update(e)}destroy(){this.top.sync([]),this.bottom.sync([])}},{provide:e=>Jd.scrollMargins.of(t=>{let i=t.plugin(e);return i&&{top:i.top.scrollMargin(),bottom:i.bottom.scrollMargin()}})});class Hu{constructor(e,t,i){this.view=e,this.top=t,this.container=i,this.dom=void 0,this.classes="",this.panels=[],this.syncClasses()}sync(e){for(let t of this.panels)t.destroy&&e.indexOf(t)<0&&t.destroy();this.panels=e,this.syncDOM()}syncDOM(){if(0==this.panels.length)return void(this.dom&&(this.dom.remove(),this.dom=void 0));if(!this.dom){this.dom=document.createElement("div"),this.dom.className=this.top?"cm-panels cm-panels-top":"cm-panels cm-panels-bottom";let e=this.container||this.view.dom;e.insertBefore(this.dom,this.top?e.firstChild:null)}let e=this.dom.firstChild;for(let t of this.panels)if(t.dom.parentNode==this.dom){for(;e!=t.dom;)e=Vu(e);e=e.nextSibling}else this.dom.insertBefore(t.dom,e);for(;e;)e=Vu(e)}scrollMargin(){return!this.dom||this.container?0:Math.max(0,this.top?this.dom.getBoundingClientRect().bottom-Math.max(0,this.view.scrollDOM.getBoundingClientRect().top):Math.min(innerHeight,this.view.scrollDOM.getBoundingClientRect().bottom)-this.dom.getBoundingClientRect().top)}syncClasses(){if(this.container&&this.classes!=this.view.themeClasses){for(let e of this.classes.split(" "))e&&this.container.classList.remove(e);for(let e of(this.classes=this.view.themeClasses).split(" "))e&&this.container.classList.add(e)}}}function Vu(e){let t=e.nextSibling;return e.remove(),t}const Gu=Ao.define({enables:zu});function Uu(e,t){let i,s=new Promise(e=>i=e),n=e=>qu(e,t,i);e.state.field(Wu,!1)?e.dispatch({effects:ju.of(n)}):e.dispatch({effects:tr.appendConfig.of(Wu.init(()=>[n]))});let o=Fu.of(n);return{close:o,result:s.then(t=>{let i=e.win.queueMicrotask||(t=>e.win.setTimeout(t,10));return i(()=>{e.state.field(Wu).indexOf(n)>-1&&e.dispatch({effects:o})}),t})}}const Wu=Eo.define({create:()=>[],update(e,t){for(let i of t.effects)i.is(ju)?e=[i.value].concat(e):i.is(Fu)&&(e=e.filter(e=>e!=i.value));return e},provide:e=>Gu.computeN([e],t=>t.field(e))}),ju=tr.define(),Fu=tr.define();function qu(e,t,i){let s=t.content?t.content(e,()=>r(null)):null;if(!s){if(s=Zr("form"),t.input){let e=Zr("input",t.input);/^(text|password|number|email|tel|url)$/.test(e.type)&&e.classList.add("cm-textfield"),e.name||(e.name="input"),s.appendChild(Zr("label",(t.label||"")+": ",e))}else s.appendChild(document.createTextNode(t.label||""));s.appendChild(document.createTextNode(" ")),s.appendChild(Zr("button",{class:"cm-button",type:"submit"},t.submitLabel||"OK"))}let n="FORM"==s.nodeName?[s]:s.querySelectorAll("form");for(let e=0;e<n.length;e++){let t=n[e];t.addEventListener("keydown",e=>{27==e.keyCode?(e.preventDefault(),r(null)):13==e.keyCode&&(e.preventDefault(),r(t))}),t.addEventListener("submit",e=>{e.preventDefault(),r(t)})}let o=Zr("div",s,Zr("button",{onclick:()=>r(null),"aria-label":e.state.phrase("close"),class:"cm-dialog-close",type:"button"},["×"]));function r(t){o.contains(o.ownerDocument.activeElement)&&e.focus(),i(t)}return t.class&&(o.className=t.class),o.classList.add("cm-dialog"),{dom:o,top:t.top,mount:()=>{if(t.focus){let e;e="string"==typeof t.focus?s.querySelector(t.focus):s.querySelector("input")||s.querySelector("button"),e&&"select"in e?e.select():e&&"focus"in e&&e.focus()}}}}class Qu extends br{compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}eq(e){return!1}destroy(e){}}Qu.prototype.elementClass="",Qu.prototype.toDOM=void 0,Qu.prototype.mapMode=po.TrackBefore,Qu.prototype.startSide=Qu.prototype.endSide=-1,Qu.prototype.point=!0;const Yu=Ao.define(),Xu=Ao.define(),Ku={class:"",renderEmptyElements:!1,elementStyle:"",markers:()=>kr.empty,lineMarker:()=>null,widgetMarker:()=>null,lineMarkerChange:null,initialSpacer:null,updateSpacer:null,domEventHandlers:{},side:"before"},Zu=Ao.define();function Ju(e){return[tf(),Zu.of({...Ku,...e})]}const ef=Ao.define({combine:e=>e.some(e=>e)});function tf(e){return[sf]}const sf=Wl.fromClass(class{constructor(e){this.view=e,this.domAfter=null,this.prevViewport=e.viewport,this.dom=document.createElement("div"),this.dom.className="cm-gutters cm-gutters-before",this.dom.setAttribute("aria-hidden","true"),this.dom.style.minHeight=this.view.contentHeight/this.view.scaleY+"px",this.gutters=e.state.facet(Zu).map(t=>new af(e,t)),this.fixed=!e.state.facet(ef);for(let e of this.gutters)"after"==e.config.side?this.getDOMAfter().appendChild(e.dom):this.dom.appendChild(e.dom);this.fixed&&(this.dom.style.position="sticky"),this.syncGutters(!1),e.scrollDOM.insertBefore(this.dom,e.contentDOM)}getDOMAfter(){return this.domAfter||(this.domAfter=document.createElement("div"),this.domAfter.className="cm-gutters cm-gutters-after",this.domAfter.setAttribute("aria-hidden","true"),this.domAfter.style.minHeight=this.view.contentHeight/this.view.scaleY+"px",this.domAfter.style.position=this.fixed?"sticky":"",this.view.scrollDOM.appendChild(this.domAfter)),this.domAfter}update(e){if(this.updateGutters(e)){let t=this.prevViewport,i=e.view.viewport,s=Math.min(t.to,i.to)-Math.max(t.from,i.from);this.syncGutters(s<.8*(i.to-i.from))}if(e.geometryChanged){let e=this.view.contentHeight/this.view.scaleY+"px";this.dom.style.minHeight=e,this.domAfter&&(this.domAfter.style.minHeight=e)}this.view.state.facet(ef)!=!this.fixed&&(this.fixed=!this.fixed,this.dom.style.position=this.fixed?"sticky":"",this.domAfter&&(this.domAfter.style.position=this.fixed?"sticky":"")),this.prevViewport=e.view.viewport}syncGutters(e){let t=this.dom.nextSibling;e&&(this.dom.remove(),this.domAfter&&this.domAfter.remove());let i=kr.iter(this.view.state.facet(Yu),this.view.viewport.from),s=[],n=this.gutters.map(e=>new rf(e,this.view.viewport,-this.view.documentPadding.top));for(let e of this.view.viewportLineBlocks)if(s.length&&(s=[]),Array.isArray(e.type)){let t=!0;for(let o of e.type)if(o.type==_a.Text&&t){of(i,s,o.from);for(let e of n)e.line(this.view,o,s);t=!1}else if(o.widget)for(let e of n)e.widget(this.view,o)}else if(e.type==_a.Text){of(i,s,e.from);for(let t of n)t.line(this.view,e,s)}else if(e.widget)for(let t of n)t.widget(this.view,e);for(let e of n)e.finish();e&&(this.view.scrollDOM.insertBefore(this.dom,t),this.domAfter&&this.view.scrollDOM.appendChild(this.domAfter))}updateGutters(e){let t=e.startState.facet(Zu),i=e.state.facet(Zu),s=e.docChanged||e.heightChanged||e.viewportChanged||!kr.eq(e.startState.facet(Yu),e.state.facet(Yu),e.view.viewport.from,e.view.viewport.to);if(t==i)for(let t of this.gutters)t.update(e)&&(s=!0);else{s=!0;let n=[];for(let s of i){let i=t.indexOf(s);i<0?n.push(new af(this.view,s)):(this.gutters[i].update(e),n.push(this.gutters[i]))}for(let e of this.gutters)e.dom.remove(),n.indexOf(e)<0&&e.destroy();for(let e of n)"after"==e.config.side?this.getDOMAfter().appendChild(e.dom):this.dom.appendChild(e.dom);this.gutters=n}return s}destroy(){for(let e of this.gutters)e.destroy();this.dom.remove(),this.domAfter&&this.domAfter.remove()}},{provide:e=>Jd.scrollMargins.of(t=>{let i=t.plugin(e);if(!i||0==i.gutters.length||!i.fixed)return null;let s=i.dom.offsetWidth*t.scaleX,n=i.domAfter?i.domAfter.offsetWidth*t.scaleX:0;return t.textDirection==il.LTR?{left:s,right:n}:{right:s,left:n}})});function nf(e){return Array.isArray(e)?e:[e]}function of(e,t,i){for(;e.value&&e.from<=i;)e.from==i&&t.push(e.value),e.next()}class rf{constructor(e,t,i){this.gutter=e,this.height=i,this.i=0,this.cursor=kr.iter(e.markers,t.from)}addElement(e,t,i){let{gutter:s}=this,n=(t.top-this.height)/e.scaleY,o=t.height/e.scaleY;if(this.i==s.elements.length){let t=new lf(e,o,n,i);s.elements.push(t),s.dom.appendChild(t.dom)}else s.elements[this.i].update(e,o,n,i);this.height=t.bottom,this.i++}line(e,t,i){let s=[];of(this.cursor,s,t.from),i.length&&(s=s.concat(i));let n=this.gutter.config.lineMarker(e,t,s);n&&s.unshift(n);let o=this.gutter;(0!=s.length||o.config.renderEmptyElements)&&this.addElement(e,t,s)}widget(e,t){let i=this.gutter.config.widgetMarker(e,t.widget,t),s=i?[i]:null;for(let i of e.state.facet(Xu)){let n=i(e,t.widget,t);n&&(s||(s=[])).push(n)}s&&this.addElement(e,t,s)}finish(){let e=this.gutter;for(;e.elements.length>this.i;){let t=e.elements.pop();e.dom.removeChild(t.dom),t.destroy()}}}class af{constructor(e,t){this.view=e,this.config=t,this.elements=[],this.spacer=null,this.dom=document.createElement("div"),this.dom.className="cm-gutter"+(this.config.class?" "+this.config.class:"");for(let i in t.domEventHandlers)this.dom.addEventListener(i,s=>{let n,o=s.target;if(o!=this.dom&&this.dom.contains(o)){for(;o.parentNode!=this.dom;)o=o.parentNode;let e=o.getBoundingClientRect();n=(e.top+e.bottom)/2}else n=s.clientY;let r=e.lineBlockAtHeight(n-e.documentTop);t.domEventHandlers[i](e,r,s)&&s.preventDefault()});this.markers=nf(t.markers(e)),t.initialSpacer&&(this.spacer=new lf(e,0,0,[t.initialSpacer(e)]),this.dom.appendChild(this.spacer.dom),this.spacer.dom.style.cssText+="visibility: hidden; pointer-events: none")}update(e){let t=this.markers;if(this.markers=nf(this.config.markers(e.view)),this.spacer&&this.config.updateSpacer){let t=this.config.updateSpacer(this.spacer.markers[0],e);t!=this.spacer.markers[0]&&this.spacer.update(e.view,0,0,[t])}let i=e.view.viewport;return!kr.eq(this.markers,t,i.from,i.to)||!!this.config.lineMarkerChange&&this.config.lineMarkerChange(e)}destroy(){for(let e of this.elements)e.destroy()}}class lf{constructor(e,t,i,s){this.height=-1,this.above=0,this.markers=[],this.dom=document.createElement("div"),this.dom.className="cm-gutterElement",this.update(e,t,i,s)}update(e,t,i,s){this.height!=t&&(this.height=t,this.dom.style.height=t+"px"),this.above!=i&&(this.dom.style.marginTop=(this.above=i)?i+"px":""),hf(this.markers,s)||this.setMarkers(e,s)}setMarkers(e,t){let i="cm-gutterElement",s=this.dom.firstChild;for(let n=0,o=0;;){let r=o,a=n<t.length?t[n++]:null,l=!1;if(a){let e=a.elementClass;e&&(i+=" "+e);for(let e=o;e<this.markers.length;e++)if(this.markers[e].compare(a)){r=e,l=!0;break}}else r=this.markers.length;for(;o<r;){let e=this.markers[o++];if(e.toDOM){e.destroy(s);let t=s.nextSibling;s.remove(),s=t}}if(!a)break;a.toDOM&&(l?s=s.nextSibling:this.dom.insertBefore(a.toDOM(e),s)),l&&o++}this.dom.className=i,this.markers=t}destroy(){this.setMarkers(null,[])}}function hf(e,t){if(e.length!=t.length)return!1;for(let i=0;i<e.length;i++)if(!e[i].compare(t[i]))return!1;return!0}const cf=Ao.define(),df=Ao.define(),uf=Ao.define({combine:e=>vr(e,{formatNumber:String,domEventHandlers:{}},{domEventHandlers(e,t){let i=Object.assign({},e);for(let e in t){let s=i[e],n=t[e];i[e]=s?(e,t,i)=>s(e,t,i)||n(e,t,i):n}return i}})});class ff extends Qu{constructor(e){super(),this.number=e}eq(e){return this.number==e.number}toDOM(){return document.createTextNode(this.number)}}function pf(e,t){return e.state.facet(uf).formatNumber(t,e.state)}const gf=Zu.compute([uf],e=>({class:"cm-lineNumbers",renderEmptyElements:!1,markers:e=>e.state.facet(cf),lineMarker:(e,t,i)=>i.some(e=>e.toDOM)?null:new ff(pf(e,e.state.doc.lineAt(t.from).number)),widgetMarker:(e,t,i)=>{for(let s of e.state.facet(df)){let n=s(e,t,i);if(n)return n}return null},lineMarkerChange:e=>e.startState.facet(uf)!=e.state.facet(uf),initialSpacer:e=>new ff(pf(e,vf(e.state.doc.lines))),updateSpacer(e,t){let i=pf(t.view,vf(t.view.state.doc.lines));return i==e.number?e:new ff(i)},domEventHandlers:e.facet(uf).domEventHandlers,side:"before"}));function mf(e={}){return[uf.of(e),tf(),gf]}function vf(e){let t=9;for(;t<e;)t=10*t+9;return t}const bf=1024;let _f=0;class wf{constructor(e,t){this.from=e,this.to=t}}class yf{constructor(e={}){this.id=_f++,this.perNode=!!e.perNode,this.deserialize=e.deserialize||(()=>{throw new Error("This node type doesn't define a deserialize function")}),this.combine=e.combine||null}add(e){if(this.perNode)throw new RangeError("Can't add per-node props to node types");return"function"!=typeof e&&(e=Cf.match(e)),t=>{let i=e(t);return void 0===i?null:[this,i]}}}yf.closedBy=new yf({deserialize:e=>e.split(" ")}),yf.openedBy=new yf({deserialize:e=>e.split(" ")}),yf.group=new yf({deserialize:e=>e.split(" ")}),yf.isolate=new yf({deserialize:e=>{if(e&&"rtl"!=e&&"ltr"!=e&&"auto"!=e)throw new RangeError("Invalid value for isolate: "+e);return e||"auto"}}),yf.contextHash=new yf({perNode:!0}),yf.lookAhead=new yf({perNode:!0}),yf.mounted=new yf({perNode:!0});class xf{constructor(e,t,i,s=!1){this.tree=e,this.overlay=t,this.parser=i,this.bracketed=s}static get(e){return e&&e.props&&e.props[yf.mounted.id]}}const kf=Object.create(null);class Cf{constructor(e,t,i,s=0){this.name=e,this.props=t,this.id=i,this.flags=s}static define(e){let t=e.props&&e.props.length?Object.create(null):kf,i=(e.top?1:0)|(e.skipped?2:0)|(e.error?4:0)|(null==e.name?8:0),s=new Cf(e.name||"",t,e.id,i);if(e.props)for(let i of e.props)if(Array.isArray(i)||(i=i(s)),i){if(i[0].perNode)throw new RangeError("Can't store a per-node prop on a node type");t[i[0].id]=i[1]}return s}prop(e){return this.props[e.id]}get isTop(){return(1&this.flags)>0}get isSkipped(){return(2&this.flags)>0}get isError(){return(4&this.flags)>0}get isAnonymous(){return(8&this.flags)>0}is(e){if("string"==typeof e){if(this.name==e)return!0;let t=this.prop(yf.group);return!!t&&t.indexOf(e)>-1}return this.id==e}static match(e){let t=Object.create(null);for(let i in e)for(let s of i.split(" "))t[s]=e[i];return e=>{for(let i=e.prop(yf.group),s=-1;s<(i?i.length:0);s++){let n=t[s<0?e.name:i[s]];if(n)return n}}}}Cf.none=new Cf("",Object.create(null),0,8);class Sf{constructor(e){this.types=e;for(let t=0;t<e.length;t++)if(e[t].id!=t)throw new RangeError("Node type ids should correspond to array positions when creating a node set")}extend(...e){let t=[];for(let i of this.types){let s=null;for(let t of e){let e=t(i);if(e){s||(s=Object.assign({},i.props));let t=e[1],n=e[0];n.combine&&n.id in s&&(t=n.combine(s[n.id],t)),s[n.id]=t}}t.push(s?new Cf(i.name,s,i.id,i.flags):i)}return new Sf(t)}}const Of=new WeakMap,Af=new WeakMap;var Pf;!function(e){e[e.ExcludeBuffers=1]="ExcludeBuffers",e[e.IncludeAnonymous=2]="IncludeAnonymous",e[e.IgnoreMounts=4]="IgnoreMounts",e[e.IgnoreOverlays=8]="IgnoreOverlays",e[e.EnterBracketed=16]="EnterBracketed"}(Pf||(Pf={}));class Tf{constructor(e,t,i,s,n){if(this.type=e,this.children=t,this.positions=i,this.length=s,this.props=null,n&&n.length){this.props=Object.create(null);for(let[e,t]of n)this.props["number"==typeof e?e:e.id]=t}}toString(){let e=xf.get(this);if(e&&!e.overlay)return e.tree.toString();let t="";for(let e of this.children){let i=e.toString();i&&(t&&(t+=","),t+=i)}return this.type.name?(/\W/.test(this.type.name)&&!this.type.isError?JSON.stringify(this.type.name):this.type.name)+(t.length?"("+t+")":""):t}cursor(e=0){return new Uf(this.topNode,e)}cursorAt(e,t=0,i=0){let s=Of.get(this)||this.topNode,n=new Uf(s);return n.moveTo(e,t),Of.set(this,n._tree),n}get topNode(){return new Df(this,0,0,null)}resolve(e,t=0){let i=Rf(Of.get(this)||this.topNode,e,t,!1);return Of.set(this,i),i}resolveInner(e,t=0){let i=Rf(Af.get(this)||this.topNode,e,t,!0);return Af.set(this,i),i}resolveStack(e,t=0){return Gf(this,e,t)}iterate(e){let{enter:t,leave:i,from:s=0,to:n=this.length}=e,o=e.mode||0,r=(o&Pf.IncludeAnonymous)>0;for(let e=this.cursor(o|Pf.IncludeAnonymous);;){let o=!1;if(e.from<=n&&e.to>=s&&(!r&&e.type.isAnonymous||!1!==t(e))){if(e.firstChild())continue;o=!0}for(;o&&i&&(r||!e.type.isAnonymous)&&i(e),!e.nextSibling();){if(!e.parent())return;o=!0}}}prop(e){return e.perNode?this.props?this.props[e.id]:void 0:this.type.prop(e)}get propValues(){let e=[];if(this.props)for(let t in this.props)e.push([+t,this.props[t]]);return e}balance(e={}){return this.children.length<=8?this:Qf(Cf.none,this.children,this.positions,0,this.children.length,0,this.length,(e,t,i)=>new Tf(this.type,e,t,i,this.propValues),e.makeTree||((e,t,i)=>new Tf(Cf.none,e,t,i)))}static build(e){return jf(e)}}Tf.empty=new Tf(Cf.none,[],[],0);class Mf{constructor(e,t){this.buffer=e,this.index=t}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}get pos(){return this.index}next(){this.index-=4}fork(){return new Mf(this.buffer,this.index)}}class $f{constructor(e,t,i){this.buffer=e,this.length=t,this.set=i}get type(){return Cf.none}toString(){let e=[];for(let t=0;t<this.buffer.length;)e.push(this.childString(t)),t=this.buffer[t+3];return e.join(",")}childString(e){let t=this.buffer[e],i=this.buffer[e+3],s=this.set.types[t],n=s.name;if(/\W/.test(n)&&!s.isError&&(n=JSON.stringify(n)),i==(e+=4))return n;let o=[];for(;e<i;)o.push(this.childString(e)),e=this.buffer[e+3];return n+"("+o.join(",")+")"}findChild(e,t,i,s,n){let{buffer:o}=this,r=-1;for(let a=e;a!=t&&!(If(n,s,o[a+1],o[a+2])&&(r=a,i>0));a=o[a+3]);return r}slice(e,t,i){let s=this.buffer,n=new Uint16Array(t-e),o=0;for(let r=e,a=0;r<t;){n[a++]=s[r++],n[a++]=s[r++]-i;let t=n[a++]=s[r++]-i;n[a++]=s[r++]-e,o=Math.max(o,t)}return new $f(n,o,this.set)}}function If(e,t,i,s){switch(e){case-2:return i<t;case-1:return s>=t&&i<t;case 0:return i<t&&s>t;case 1:return i<=t&&s>t;case 2:return s>t;case 4:return!0}}function Rf(e,t,i,s){for(var n;e.from==e.to||(i<1?e.from>=t:e.from>t)||(i>-1?e.to<=t:e.to<t);){let t=!s&&e instanceof Df&&e.index<0?null:e.parent;if(!t)return e;e=t}let o=s?0:Pf.IgnoreOverlays;if(s)for(let s=e,r=s.parent;r;s=r,r=s.parent)s instanceof Df&&s.index<0&&(null===(n=r.enter(t,i,o))||void 0===n?void 0:n.from)!=s.from&&(e=r);for(;;){let s=e.enter(t,i,o);if(!s)return e;e=s}}class Ef{cursor(e=0){return new Uf(this,e)}getChild(e,t=null,i=null){let s=Lf(this,e,t,i);return s.length?s[0]:null}getChildren(e,t=null,i=null){return Lf(this,e,t,i)}resolve(e,t=0){return Rf(this,e,t,!1)}resolveInner(e,t=0){return Rf(this,e,t,!0)}matchContext(e){return Bf(this.parent,e)}enterUnfinishedNodesBefore(e){let t=this.childBefore(e),i=this;for(;t;){let e=t.lastChild;if(!e||e.to!=t.to)break;e.type.isError&&e.from==e.to?(i=t,t=e.prevSibling):t=e}return i}get node(){return this}get next(){return this.parent}}class Df extends Ef{constructor(e,t,i,s){super(),this._tree=e,this.from=t,this.index=i,this._parent=s}get type(){return this._tree.type}get name(){return this._tree.type.name}get to(){return this.from+this._tree.length}nextChild(e,t,i,s,n=0){for(let o=this;;){for(let{children:r,positions:a}=o._tree,l=t>0?r.length:-1;e!=l;e+=t){let l,h=r[e],c=a[e]+o.from;if(n&Pf.EnterBracketed&&h instanceof Tf&&(l=xf.get(h))&&!l.overlay&&l.bracketed&&i>=c&&i<=c+h.length||If(s,i,c,c+h.length))if(h instanceof $f){if(n&Pf.ExcludeBuffers)continue;let r=h.findChild(0,h.buffer.length,t,i-c,s);if(r>-1)return new zf(new Nf(o,h,e,c),null,r)}else if(n&Pf.IncludeAnonymous||!h.type.isAnonymous||Wf(h)){let r;if(!(n&Pf.IgnoreMounts)&&(r=xf.get(h))&&!r.overlay)return new Df(r.tree,c,e,o);let a=new Df(h,c,e,o);return n&Pf.IncludeAnonymous||!a.type.isAnonymous?a:a.nextChild(t<0?h.children.length-1:0,t,i,s,n)}}if(n&Pf.IncludeAnonymous||!o.type.isAnonymous)return null;if(e=o.index>=0?o.index+t:t<0?-1:o._parent._tree.children.length,o=o._parent,!o)return null}}get firstChild(){return this.nextChild(0,1,0,4)}get lastChild(){return this.nextChild(this._tree.children.length-1,-1,0,4)}childAfter(e){return this.nextChild(0,1,e,2)}childBefore(e){return this.nextChild(this._tree.children.length-1,-1,e,-2)}prop(e){return this._tree.prop(e)}enter(e,t,i=0){let s;if(!(i&Pf.IgnoreOverlays)&&(s=xf.get(this._tree))&&s.overlay){let n=e-this.from,o=i&Pf.EnterBracketed&&s.bracketed;for(let{from:e,to:i}of s.overlay)if((t>0||o?e<=n:e<n)&&(t<0||o?i>=n:i>n))return new Df(s.tree,s.overlay[0].from+this.from,-1,this)}return this.nextChild(0,1,e,t,i)}nextSignificantParent(){let e=this;for(;e.type.isAnonymous&&e._parent;)e=e._parent;return e}get parent(){return this._parent?this._parent.nextSignificantParent():null}get nextSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index+1,1,0,4):null}get prevSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index-1,-1,0,4):null}get tree(){return this._tree}toTree(){return this._tree}toString(){return this._tree.toString()}}function Lf(e,t,i,s){let n=e.cursor(),o=[];if(!n.firstChild())return o;if(null!=i)for(let e=!1;!e;)if(e=n.type.is(i),!n.nextSibling())return o;for(;;){if(null!=s&&n.type.is(s))return o;if(n.type.is(t)&&o.push(n.node),!n.nextSibling())return null==s?o:[]}}function Bf(e,t,i=t.length-1){for(let s=e;i>=0;s=s.parent){if(!s)return!1;if(!s.type.isAnonymous){if(t[i]&&t[i]!=s.name)return!1;i--}}return!0}class Nf{constructor(e,t,i,s){this.parent=e,this.buffer=t,this.index=i,this.start=s}}class zf extends Ef{get name(){return this.type.name}get from(){return this.context.start+this.context.buffer.buffer[this.index+1]}get to(){return this.context.start+this.context.buffer.buffer[this.index+2]}constructor(e,t,i){super(),this.context=e,this._parent=t,this.index=i,this.type=e.buffer.set.types[e.buffer.buffer[i]]}child(e,t,i){let{buffer:s}=this.context,n=s.findChild(this.index+4,s.buffer[this.index+3],e,t-this.context.start,i);return n<0?null:new zf(this.context,this,n)}get firstChild(){return this.child(1,0,4)}get lastChild(){return this.child(-1,0,4)}childAfter(e){return this.child(1,e,2)}childBefore(e){return this.child(-1,e,-2)}prop(e){return this.type.prop(e)}enter(e,t,i=0){if(i&Pf.ExcludeBuffers)return null;let{buffer:s}=this.context,n=s.findChild(this.index+4,s.buffer[this.index+3],t>0?1:-1,e-this.context.start,t);return n<0?null:new zf(this.context,this,n)}get parent(){return this._parent||this.context.parent.nextSignificantParent()}externalSibling(e){return this._parent?null:this.context.parent.nextChild(this.context.index+e,e,0,4)}get nextSibling(){let{buffer:e}=this.context,t=e.buffer[this.index+3];return t<(this._parent?e.buffer[this._parent.index+3]:e.buffer.length)?new zf(this.context,this._parent,t):this.externalSibling(1)}get prevSibling(){let{buffer:e}=this.context,t=this._parent?this._parent.index+4:0;return this.index==t?this.externalSibling(-1):new zf(this.context,this._parent,e.findChild(t,this.index,-1,0,4))}get tree(){return null}toTree(){let e=[],t=[],{buffer:i}=this.context,s=this.index+4,n=i.buffer[this.index+3];if(n>s){let o=i.buffer[this.index+1];e.push(i.slice(s,n,o)),t.push(0)}return new Tf(this.type,e,t,this.to-this.from)}toString(){return this.context.buffer.childString(this.index)}}function Hf(e){if(!e.length)return null;let t=0,i=e[0];for(let s=1;s<e.length;s++){let n=e[s];(n.from>i.from||n.to<i.to)&&(i=n,t=s)}let s=i instanceof Df&&i.index<0?null:i.parent,n=e.slice();return s?n[t]=s:n.splice(t,1),new Vf(n,i)}class Vf{constructor(e,t){this.heads=e,this.node=t}get next(){return Hf(this.heads)}}function Gf(e,t,i){let s=e.resolveInner(t,i),n=null;for(let e=s instanceof Df?s:s.context.parent;e;e=e.parent)if(e.index<0){let o=e.parent;(n||(n=[s])).push(o.resolve(t,i)),e=o}else{let o=xf.get(e.tree);if(o&&o.overlay&&o.overlay[0].from<=t&&o.overlay[o.overlay.length-1].to>=t){let r=new Df(o.tree,o.overlay[0].from+e.from,-1,e);(n||(n=[s])).push(Rf(r,t,i,!1))}}return n?Hf(n):s}class Uf{get name(){return this.type.name}constructor(e,t=0){if(this.buffer=null,this.stack=[],this.index=0,this.bufferNode=null,this.mode=t&~Pf.EnterBracketed,e instanceof Df)this.yieldNode(e);else{this._tree=e.context.parent,this.buffer=e.context;for(let t=e._parent;t;t=t._parent)this.stack.unshift(t.index);this.bufferNode=e,this.yieldBuf(e.index)}}yieldNode(e){return!!e&&(this._tree=e,this.type=e.type,this.from=e.from,this.to=e.to,!0)}yieldBuf(e,t){this.index=e;let{start:i,buffer:s}=this.buffer;return this.type=t||s.set.types[s.buffer[e]],this.from=i+s.buffer[e+1],this.to=i+s.buffer[e+2],!0}yield(e){return!!e&&(e instanceof Df?(this.buffer=null,this.yieldNode(e)):(this.buffer=e.context,this.yieldBuf(e.index,e.type)))}toString(){return this.buffer?this.buffer.buffer.childString(this.index):this._tree.toString()}enterChild(e,t,i){if(!this.buffer)return this.yield(this._tree.nextChild(e<0?this._tree._tree.children.length-1:0,e,t,i,this.mode));let{buffer:s}=this.buffer,n=s.findChild(this.index+4,s.buffer[this.index+3],e,t-this.buffer.start,i);return!(n<0)&&(this.stack.push(this.index),this.yieldBuf(n))}firstChild(){return this.enterChild(1,0,4)}lastChild(){return this.enterChild(-1,0,4)}childAfter(e){return this.enterChild(1,e,2)}childBefore(e){return this.enterChild(-1,e,-2)}enter(e,t,i=this.mode){return this.buffer?!(i&Pf.ExcludeBuffers)&&this.enterChild(1,e,t):this.yield(this._tree.enter(e,t,i))}parent(){if(!this.buffer)return this.yieldNode(this.mode&Pf.IncludeAnonymous?this._tree._parent:this._tree.parent);if(this.stack.length)return this.yieldBuf(this.stack.pop());let e=this.mode&Pf.IncludeAnonymous?this.buffer.parent:this.buffer.parent.nextSignificantParent();return this.buffer=null,this.yieldNode(e)}sibling(e){if(!this.buffer)return!!this._tree._parent&&this.yield(this._tree.index<0?null:this._tree._parent.nextChild(this._tree.index+e,e,0,4,this.mode));let{buffer:t}=this.buffer,i=this.stack.length-1;if(e<0){let e=i<0?0:this.stack[i]+4;if(this.index!=e)return this.yieldBuf(t.findChild(e,this.index,-1,0,4))}else{let e=t.buffer[this.index+3];if(e<(i<0?t.buffer.length:t.buffer[this.stack[i]+3]))return this.yieldBuf(e)}return i<0&&this.yield(this.buffer.parent.nextChild(this.buffer.index+e,e,0,4,this.mode))}nextSibling(){return this.sibling(1)}prevSibling(){return this.sibling(-1)}atLastNode(e){let t,i,{buffer:s}=this;if(s){if(e>0){if(this.index<s.buffer.buffer.length)return!1}else for(let e=0;e<this.index;e++)if(s.buffer.buffer[e+3]<this.index)return!1;({index:t,parent:i}=s)}else({index:t,_parent:i}=this._tree);for(;i;({index:t,_parent:i}=i))if(t>-1)for(let s=t+e,n=e<0?-1:i._tree.children.length;s!=n;s+=e){let e=i._tree.children[s];if(this.mode&Pf.IncludeAnonymous||e instanceof $f||!e.type.isAnonymous||Wf(e))return!1}return!0}move(e,t){if(t&&this.enterChild(e,0,4))return!0;for(;;){if(this.sibling(e))return!0;if(this.atLastNode(e)||!this.parent())return!1}}next(e=!0){return this.move(1,e)}prev(e=!0){return this.move(-1,e)}moveTo(e,t=0){for(;(this.from==this.to||(t<1?this.from>=e:this.from>e)||(t>-1?this.to<=e:this.to<e))&&this.parent(););for(;this.enterChild(1,e,t););return this}get node(){if(!this.buffer)return this._tree;let e=this.bufferNode,t=null,i=0;if(e&&e.context==this.buffer)e:for(let s=this.index,n=this.stack.length;n>=0;){for(let o=e;o;o=o._parent)if(o.index==s){if(s==this.index)return o;t=o,i=n+1;break e}s=this.stack[--n]}for(let e=i;e<this.stack.length;e++)t=new zf(this.buffer,t,this.stack[e]);return this.bufferNode=new zf(this.buffer,t,this.index)}get tree(){return this.buffer?null:this._tree._tree}iterate(e,t){for(let i=0;;){let s=!1;if(this.type.isAnonymous||!1!==e(this)){if(this.firstChild()){i++;continue}this.type.isAnonymous||(s=!0)}for(;;){if(s&&t&&t(this),s=this.type.isAnonymous,!i)return;if(this.nextSibling())break;this.parent(),i--,s=!0}}}matchContext(e){if(!this.buffer)return Bf(this.node.parent,e);let{buffer:t}=this.buffer,{types:i}=t.set;for(let s=e.length-1,n=this.stack.length-1;s>=0;n--){if(n<0)return Bf(this._tree,e,s);let o=i[t.buffer[this.stack[n]]];if(!o.isAnonymous){if(e[s]&&e[s]!=o.name)return!1;s--}}return!0}}function Wf(e){return e.children.some(e=>e instanceof $f||!e.type.isAnonymous||Wf(e))}function jf(e){var t;let{buffer:i,nodeSet:s,maxBufferLength:n=bf,reused:o=[],minRepeatType:r=s.types.length}=e,a=Array.isArray(i)?new Mf(i,i.length):i,l=s.types,h=0,c=0;function d(e,t,i,m,v,b){let{id:_,start:w,end:y,size:x}=a,k=c,C=h;if(x<0){if(a.next(),-1==x){let t=o[_];return i.push(t),void m.push(w-e)}if(-3==x)return void(h=_);if(-4==x)return void(c=_);throw new RangeError(`Unrecognized record size: ${x}`)}let S,O,A=l[_],P=w-e;if(y-w<=n&&(O=function(e,t){let i=a.fork(),s=0,o=0,l=0,h=i.end-n,c={size:0,start:0,skip:0};e:for(let n=i.pos-e;i.pos>n;){let e=i.size;if(i.id==t&&e>=0){c.size=s,c.start=o,c.skip=l,l+=4,s+=4,i.next();continue}let a=i.pos-e;if(e<0||a<n||i.start<h)break;let d=i.id>=r?4:0,u=i.start;for(i.next();i.pos>a;){if(i.size<0){if(-3!=i.size&&-4!=i.size)break e;d+=4}else i.id>=r&&(d+=4);i.next()}o=u,s+=e,l+=d}(t<0||s==e)&&(c.size=s,c.start=o,c.skip=l);return c.size>4?c:void 0}(a.pos-t,v))){let t=new Uint16Array(O.size-O.skip),i=a.pos-O.size,n=t.length;for(;a.pos>i;)n=g(O.start,t,n);S=new $f(t,y-O.start,s),P=O.start-e}else{let e=a.pos-x;a.next();let t=[],i=[],s=_>=r?_:-1,o=0,l=y;for(;a.pos>e;)s>=0&&a.id==s&&a.size>=0?(a.end<=l-n&&(f(t,i,w,o,a.end,l,s,k,C),o=t.length,l=a.end),a.next()):b>2500?u(w,e,t,i):d(w,e,t,i,s,b+1);if(s>=0&&o>0&&o<t.length&&f(t,i,w,o,w,l,s,k,C),t.reverse(),i.reverse(),s>-1&&o>0){let e=function(e,t){return(i,s,n)=>{let o,r,a=0,l=i.length-1;if(l>=0&&(o=i[l])instanceof Tf){if(!l&&o.type==e&&o.length==n)return o;(r=o.prop(yf.lookAhead))&&(a=s[l]+o.length+r)}return p(e,i,s,n,a,t)}}(A,C);S=Qf(A,t,i,0,t.length,0,y-w,e,e)}else S=p(A,t,i,y-w,k-y,C)}i.push(S),m.push(P)}function u(e,t,i,o){let r=[],l=0,h=-1;for(;a.pos>t;){let{id:e,start:t,end:i,size:s}=a;if(s>4)a.next();else{if(h>-1&&t<h)break;h<0&&(h=i-n),r.push(e,t,i),l++,a.next()}}if(l){let t=new Uint16Array(4*l),n=r[r.length-2];for(let e=r.length-3,i=0;e>=0;e-=3)t[i++]=r[e],t[i++]=r[e+1]-n,t[i++]=r[e+2]-n,t[i++]=i;i.push(new $f(t,r[2]-n,s)),o.push(n-e)}}function f(e,t,i,n,o,r,a,l,h){let c=[],d=[];for(;e.length>n;)c.push(e.pop()),d.push(t.pop()+i-o);e.push(p(s.types[a],c,d,r-o,l-r,h)),t.push(o-i)}function p(e,t,i,s,n,o,r){if(o){let e=[yf.contextHash,o];r=r?[e].concat(r):[e]}if(n>25){let e=[yf.lookAhead,n];r=r?[e].concat(r):[e]}return new Tf(e,t,i,s,r)}function g(e,t,i){let{id:s,start:n,end:o,size:l}=a;if(a.next(),l>=0&&s<r){let r=i;if(l>4){let s=a.pos-(l-4);for(;a.pos>s;)i=g(e,t,i)}t[--i]=r,t[--i]=o-e,t[--i]=n-e,t[--i]=s}else-3==l?h=s:-4==l&&(c=s);return i}let m=[],v=[];for(;a.pos>0;)d(e.start||0,e.bufferStart||0,m,v,-1,0);let b=null!==(t=e.length)&&void 0!==t?t:m.length?v[0]+m[0].length:0;return new Tf(l[e.topID],m.reverse(),v.reverse(),b)}const Ff=new WeakMap;function qf(e,t){if(!e.isAnonymous||t instanceof $f||t.type!=e)return 1;let i=Ff.get(t);if(null==i){i=1;for(let s of t.children){if(s.type!=e||!(s instanceof Tf)){i=1;break}i+=qf(e,s)}Ff.set(t,i)}return i}function Qf(e,t,i,s,n,o,r,a,l){let h=0;for(let i=s;i<n;i++)h+=qf(e,t[i]);let c=Math.ceil(1.5*h/8),d=[],u=[];return function t(i,s,n,r,a){for(let h=n;h<r;){let n=h,f=s[h],p=qf(e,i[h]);for(h++;h<r;h++){let t=qf(e,i[h]);if(p+t>=c)break;p+=t}if(h==n+1){if(p>c){let e=i[n];t(e.children,e.positions,0,e.children.length,s[n]+a);continue}d.push(i[n])}else{let t=s[h-1]+i[h-1].length-f;d.push(Qf(e,i,s,n,h,f,t,null,l))}u.push(f+a-o)}}(t,i,s,n,0),(a||l)(d,u,r)}class Yf{constructor(e,t,i,s,n=!1,o=!1){this.from=e,this.to=t,this.tree=i,this.offset=s,this.open=(n?1:0)|(o?2:0)}get openStart(){return(1&this.open)>0}get openEnd(){return(2&this.open)>0}static addTree(e,t=[],i=!1){let s=[new Yf(0,e.length,e,0,!1,i)];for(let i of t)i.to>e.length&&s.push(i);return s}static applyChanges(e,t,i=128){if(!t.length)return e;let s=[],n=1,o=e.length?e[0]:null;for(let r=0,a=0,l=0;;r++){let h=r<t.length?t[r]:null,c=h?h.fromA:1e9;if(c-a>=i)for(;o&&o.from<c;){let t=o;if(a>=t.from||c<=t.to||l){let e=Math.max(t.from,a)-l,i=Math.min(t.to,c)-l;t=e>=i?null:new Yf(e,i,t.tree,t.offset+l,r>0,!!h)}if(t&&s.push(t),o.to>c)break;o=n<e.length?e[n++]:null}if(!h)break;a=h.toA,l=h.toA-h.toB}return s}}class Xf{startParse(e,t,i){return"string"==typeof e&&(e=new Kf(e)),i=i?i.length?i.map(e=>new wf(e.from,e.to)):[new wf(0,0)]:[new wf(0,e.length)],this.createParse(e,t||[],i)}parse(e,t,i){let s=this.startParse(e,t,i);for(;;){let e=s.advance();if(e)return e}}}class Kf{constructor(e){this.string=e}get length(){return this.string.length}chunk(e){return this.string.slice(e)}get lineChunks(){return!1}read(e,t){return this.string.slice(e,t)}}new yf({perNode:!0});let Zf=0,Jf=class e{constructor(e,t,i,s){this.name=e,this.set=t,this.base=i,this.modified=s,this.id=Zf++}toString(){let{name:e}=this;for(let t of this.modified)t.name&&(e=`${t.name}(${e})`);return e}static define(t,i){let s="string"==typeof t?t:"?";if(t instanceof e&&(i=t),null==i?void 0:i.base)throw new Error("Can not derive from a modified tag");let n=new e(s,[],null,[]);if(n.set.push(n),i)for(let e of i.set)n.set.push(e);return n}static defineModifier(e){let t=new tp(e);return e=>e.modified.indexOf(t)>-1?e:tp.get(e.base||e,e.modified.concat(t).sort((e,t)=>e.id-t.id))}},ep=0;class tp{constructor(e){this.name=e,this.instances=[],this.id=ep++}static get(e,t){if(!t.length)return e;let i=t[0].instances.find(i=>i.base==e&&ip(t,i.modified));if(i)return i;let s=[],n=new Jf(e.name,s,e,t);for(let e of t)e.instances.push(n);let o=sp(t);for(let t of e.set)if(!t.modified.length)for(let e of o)s.push(tp.get(t,e));return n}}function ip(e,t){return e.length==t.length&&e.every((e,i)=>e==t[i])}function sp(e){let t=[[]];for(let i=0;i<e.length;i++)for(let s=0,n=t.length;s<n;s++)t.push(t[s].concat(e[i]));return t.sort((e,t)=>t.length-e.length)}function np(e){let t=Object.create(null);for(let i in e){let s=e[i];Array.isArray(s)||(s=[s]);for(let e of i.split(" "))if(e){let i=[],n=2,o=e;for(let t=0;;){if("..."==o&&t>0&&t+3==e.length){n=1;break}let s=/^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(o);if(!s)throw new RangeError("Invalid path: "+e);if(i.push("*"==s[0]?"":'"'==s[0][0]?JSON.parse(s[0]):s[0]),t+=s[0].length,t==e.length)break;let r=e[t++];if(t==e.length&&"!"==r){n=0;break}if("/"!=r)throw new RangeError("Invalid path: "+e);o=e.slice(t)}let r=i.length-1,a=i[r];if(!a)throw new RangeError("Invalid path: "+e);let l=new rp(s,n,r>0?i.slice(0,r):null);t[a]=l.sort(t[a])}}return op.add(t)}const op=new yf({combine(e,t){let i,s,n;for(;e||t;){if(!e||t&&e.depth>=t.depth?(n=t,t=t.next):(n=e,e=e.next),i&&i.mode==n.mode&&!n.context&&!i.context)continue;let o=new rp(n.tags,n.mode,n.context);i?i.next=o:s=o,i=o}return s}});class rp{constructor(e,t,i,s){this.tags=e,this.mode=t,this.context=i,this.next=s}get opaque(){return 0==this.mode}get inherit(){return 1==this.mode}sort(e){return!e||e.depth<this.depth?(this.next=e,this):(e.next=this.sort(e.next),e)}get depth(){return this.context?this.context.length:0}}function ap(e,t){let i=Object.create(null);for(let t of e)if(Array.isArray(t.tag))for(let e of t.tag)i[e.id]=t.class;else i[t.tag.id]=t.class;let{scope:s,all:n=null}=t||{};return{style:e=>{let t=n;for(let s of e)for(let e of s.set){let s=i[e.id];if(s){t=t?t+" "+s:s;break}}return t},scope:s}}function lp(e,t){let i=null;for(let s of e){let e=s.style(t);e&&(i=i?i+" "+e:e)}return i}function hp(e,t,i,s=0,n=e.length){let o=new cp(s,Array.isArray(t)?t:[t],i);o.highlightRange(e.cursor(),s,n,"",o.highlighters),o.flush(n)}rp.empty=new rp([],2,null);class cp{constructor(e,t,i){this.at=e,this.highlighters=t,this.span=i,this.class=""}startSpan(e,t){t!=this.class&&(this.flush(e),e>this.at&&(this.at=e),this.class=t)}flush(e){e>this.at&&this.class&&this.span(this.at,e,this.class)}highlightRange(e,t,i,s,n){let{type:o,from:r,to:a}=e;if(r>=i||a<=t)return;o.isTop&&(n=this.highlighters.filter(e=>!e.scope||e.scope(o)));let l=s,h=dp(e)||rp.empty,c=lp(n,h.tags);if(c&&(l&&(l+=" "),l+=c,1==h.mode&&(s+=(s?" ":"")+c)),this.startSpan(Math.max(t,r),l),h.opaque)return;let d=e.tree&&e.tree.prop(yf.mounted);if(d&&d.overlay){let o=e.node.enter(d.overlay[0].from+r,1),h=this.highlighters.filter(e=>!e.scope||e.scope(d.tree.type)),c=e.firstChild();for(let u=0,f=r;;u++){let p=u<d.overlay.length?d.overlay[u]:null,g=p?p.from+r:a,m=Math.max(t,f),v=Math.min(i,g);if(m<v&&c)for(;e.from<v&&(this.highlightRange(e,m,v,s,n),this.startSpan(Math.min(v,e.to),l),!(e.to>=g)&&e.nextSibling()););if(!p||g>i)break;f=p.to+r,f>t&&(this.highlightRange(o.cursor(),Math.max(t,p.from+r),Math.min(i,f),"",h),this.startSpan(Math.min(i,f),l))}c&&e.parent()}else if(e.firstChild()){d&&(s="");do{if(!(e.to<=t)){if(e.from>=i)break;this.highlightRange(e,t,i,s,n),this.startSpan(Math.min(i,e.to),l)}}while(e.nextSibling());e.parent()}}}function dp(e){let t=e.type.prop(op);for(;t&&t.context&&!e.matchContext(t.context);)t=t.next;return t||null}const up=Jf.define,fp=up(),pp=up(),gp=up(pp),mp=up(pp),vp=up(),bp=up(vp),_p=up(vp),wp=up(),yp=up(wp),xp=up(),kp=up(),Cp=up(),Sp=up(Cp),Op=up(),Ap={comment:fp,lineComment:up(fp),blockComment:up(fp),docComment:up(fp),name:pp,variableName:up(pp),typeName:gp,tagName:up(gp),propertyName:mp,attributeName:up(mp),className:up(pp),labelName:up(pp),namespace:up(pp),macroName:up(pp),literal:vp,string:bp,docString:up(bp),character:up(bp),attributeValue:up(bp),number:_p,integer:up(_p),float:up(_p),bool:up(vp),regexp:up(vp),escape:up(vp),color:up(vp),url:up(vp),keyword:xp,self:up(xp),null:up(xp),atom:up(xp),unit:up(xp),modifier:up(xp),operatorKeyword:up(xp),controlKeyword:up(xp),definitionKeyword:up(xp),moduleKeyword:up(xp),operator:kp,derefOperator:up(kp),arithmeticOperator:up(kp),logicOperator:up(kp),bitwiseOperator:up(kp),compareOperator:up(kp),updateOperator:up(kp),definitionOperator:up(kp),typeOperator:up(kp),controlOperator:up(kp),punctuation:Cp,separator:up(Cp),bracket:Sp,angleBracket:up(Sp),squareBracket:up(Sp),paren:up(Sp),brace:up(Sp),content:wp,heading:yp,heading1:up(yp),heading2:up(yp),heading3:up(yp),heading4:up(yp),heading5:up(yp),heading6:up(yp),contentSeparator:up(wp),list:up(wp),quote:up(wp),emphasis:up(wp),strong:up(wp),link:up(wp),monospace:up(wp),strikethrough:up(wp),inserted:up(),deleted:up(),changed:up(),invalid:up(),meta:Op,documentMeta:up(Op),annotation:up(Op),processingInstruction:up(Op),definition:Jf.defineModifier("definition"),constant:Jf.defineModifier("constant"),function:Jf.defineModifier("function"),standard:Jf.defineModifier("standard"),local:Jf.defineModifier("local"),special:Jf.defineModifier("special")};for(let e in Ap){let t=Ap[e];t instanceof Jf&&(t.name=e)}var Pp;ap([{tag:Ap.link,class:"tok-link"},{tag:Ap.heading,class:"tok-heading"},{tag:Ap.emphasis,class:"tok-emphasis"},{tag:Ap.strong,class:"tok-strong"},{tag:Ap.keyword,class:"tok-keyword"},{tag:Ap.atom,class:"tok-atom"},{tag:Ap.bool,class:"tok-bool"},{tag:Ap.url,class:"tok-url"},{tag:Ap.labelName,class:"tok-labelName"},{tag:Ap.inserted,class:"tok-inserted"},{tag:Ap.deleted,class:"tok-deleted"},{tag:Ap.literal,class:"tok-literal"},{tag:Ap.string,class:"tok-string"},{tag:Ap.number,class:"tok-number"},{tag:[Ap.regexp,Ap.escape,Ap.special(Ap.string)],class:"tok-string2"},{tag:Ap.variableName,class:"tok-variableName"},{tag:Ap.local(Ap.variableName),class:"tok-variableName tok-local"},{tag:Ap.definition(Ap.variableName),class:"tok-variableName tok-definition"},{tag:Ap.special(Ap.variableName),class:"tok-variableName2"},{tag:Ap.definition(Ap.propertyName),class:"tok-propertyName tok-definition"},{tag:Ap.typeName,class:"tok-typeName"},{tag:Ap.namespace,class:"tok-namespace"},{tag:Ap.className,class:"tok-className"},{tag:Ap.macroName,class:"tok-macroName"},{tag:Ap.propertyName,class:"tok-propertyName"},{tag:Ap.operator,class:"tok-operator"},{tag:Ap.comment,class:"tok-comment"},{tag:Ap.meta,class:"tok-meta"},{tag:Ap.invalid,class:"tok-invalid"},{tag:Ap.punctuation,class:"tok-punctuation"}]);const Tp=new yf;function Mp(e){return Ao.define({combine:e?t=>t.concat(e):void 0})}const $p=new yf;class Ip{constructor(e,t,i=[],s=""){this.data=e,this.name=s,mr.prototype.hasOwnProperty("tree")||Object.defineProperty(mr.prototype,"tree",{get(){return Dp(this)}}),this.parser=t,this.extension=[Wp.of(this),mr.languageData.of((e,t,i)=>{let s=Rp(e,t,i),n=s.type.prop(Tp);if(!n)return[];let o=e.facet(n),r=s.type.prop($p);if(r){let n=s.resolve(t-s.from,i);for(let t of r)if(t.test(n,e)){let i=e.facet(t.facet);return"replace"==t.type?i:i.concat(o)}}return o})].concat(i)}isActiveAt(e,t,i=-1){return Rp(e,t,i).type.prop(Tp)==this.data}findRegions(e){let t=e.facet(Wp);if((null==t?void 0:t.data)==this.data)return[{from:0,to:e.doc.length}];if(!t||!t.allowsNesting)return[];let i=[],s=(e,t)=>{if(e.prop(Tp)==this.data)return void i.push({from:t,to:t+e.length});let n=e.prop(yf.mounted);if(n){if(n.tree.prop(Tp)==this.data){if(n.overlay)for(let e of n.overlay)i.push({from:e.from+t,to:e.to+t});else i.push({from:t,to:t+e.length});return}if(n.overlay){let e=i.length;if(s(n.tree,n.overlay[0].from+t),i.length>e)return}}for(let i=0;i<e.children.length;i++){let n=e.children[i];n instanceof Tf&&s(n,e.positions[i]+t)}};return s(Dp(e),0),i}get allowsNesting(){return!0}}function Rp(e,t,i){let s=e.facet(Wp),n=Dp(e).topNode;if(!s||s.allowsNesting)for(let e=n;e;e=e.enter(t,i,Pf.ExcludeBuffers|Pf.EnterBracketed))e.type.isTop&&(n=e);return n}Ip.setState=tr.define();class Ep extends Ip{constructor(e,t,i){super(e,t,[],i),this.parser=t}static define(e){let t=Mp(e.languageData);return new Ep(t,e.parser.configure({props:[Tp.add(e=>e.isTop?t:void 0)]}),e.name)}configure(e,t){return new Ep(this.data,this.parser.configure(e),t||this.name)}get allowsNesting(){return this.parser.hasWrappers()}}function Dp(e){let t=e.field(Ip.state,!1);return t?t.tree:Tf.empty}class Lp{constructor(e){this.doc=e,this.cursorPos=0,this.string="",this.cursor=e.iter()}get length(){return this.doc.length}syncTo(e){return this.string=this.cursor.next(e-this.cursorPos).value,this.cursorPos=e+this.string.length,this.cursorPos-this.string.length}chunk(e){return this.syncTo(e),this.string}get lineChunks(){return!0}read(e,t){let i=this.cursorPos-this.string.length;return e<i||t>=this.cursorPos?this.doc.sliceString(e,t):this.string.slice(e-i,t-i)}}let Bp=null;class Np{constructor(e,t,i=[],s,n,o,r,a){this.parser=e,this.state=t,this.fragments=i,this.tree=s,this.treeLen=n,this.viewport=o,this.skipped=r,this.scheduleOn=a,this.parse=null,this.tempSkipped=[]}static create(e,t,i){return new Np(e,t,[],Tf.empty,0,i,[],null)}startParse(){return this.parser.startParse(new Lp(this.state.doc),this.fragments)}work(e,t){return null!=t&&t>=this.state.doc.length&&(t=void 0),this.tree!=Tf.empty&&this.isDone(null!=t?t:this.state.doc.length)?(this.takeTree(),!0):this.withContext(()=>{var i;if("number"==typeof e){let t=Date.now()+e;e=()=>Date.now()>t}for(this.parse||(this.parse=this.startParse()),null!=t&&(null==this.parse.stoppedAt||this.parse.stoppedAt>t)&&t<this.state.doc.length&&this.parse.stopAt(t);;){let s=this.parse.advance();if(s){if(this.fragments=this.withoutTempSkipped(Yf.addTree(s,this.fragments,null!=this.parse.stoppedAt)),this.treeLen=null!==(i=this.parse.stoppedAt)&&void 0!==i?i:this.state.doc.length,this.tree=s,this.parse=null,!(this.treeLen<(null!=t?t:this.state.doc.length)))return!0;this.parse=this.startParse()}if(e())return!1}})}takeTree(){let e,t;this.parse&&(e=this.parse.parsedPos)>=this.treeLen&&((null==this.parse.stoppedAt||this.parse.stoppedAt>e)&&this.parse.stopAt(e),this.withContext(()=>{for(;!(t=this.parse.advance()););}),this.treeLen=e,this.tree=t,this.fragments=this.withoutTempSkipped(Yf.addTree(this.tree,this.fragments,!0)),this.parse=null)}withContext(e){let t=Bp;Bp=this;try{return e()}finally{Bp=t}}withoutTempSkipped(e){for(let t;t=this.tempSkipped.pop();)e=zp(e,t.from,t.to);return e}changes(e,t){let{fragments:i,tree:s,treeLen:n,viewport:o,skipped:r}=this;if(this.takeTree(),!e.empty){let t=[];if(e.iterChangedRanges((e,i,s,n)=>t.push({fromA:e,toA:i,fromB:s,toB:n})),i=Yf.applyChanges(i,t),s=Tf.empty,n=0,o={from:e.mapPos(o.from,-1),to:e.mapPos(o.to,1)},this.skipped.length){r=[];for(let t of this.skipped){let i=e.mapPos(t.from,1),s=e.mapPos(t.to,-1);i<s&&r.push({from:i,to:s})}}}return new Np(this.parser,t,i,s,n,o,r,this.scheduleOn)}updateViewport(e){if(this.viewport.from==e.from&&this.viewport.to==e.to)return!1;this.viewport=e;let t=this.skipped.length;for(let t=0;t<this.skipped.length;t++){let{from:i,to:s}=this.skipped[t];i<e.to&&s>e.from&&(this.fragments=zp(this.fragments,i,s),this.skipped.splice(t--,1))}return!(this.skipped.length>=t)&&(this.reset(),!0)}reset(){this.parse&&(this.takeTree(),this.parse=null)}skipUntilInView(e,t){this.skipped.push({from:e,to:t})}static getSkippingParser(e){return new class extends Xf{createParse(t,i,s){let n=s[0].from,o=s[s.length-1].to,r={parsedPos:n,advance(){let t=Bp;if(t){for(let e of s)t.tempSkipped.push(e);e&&(t.scheduleOn=t.scheduleOn?Promise.all([t.scheduleOn,e]):e)}return this.parsedPos=o,new Tf(Cf.none,[],[],o-n)},stoppedAt:null,stopAt(){}};return r}}}isDone(e){e=Math.min(e,this.state.doc.length);let t=this.fragments;return this.treeLen>=e&&t.length&&0==t[0].from&&t[0].to>=e}static get(){return Bp}}function zp(e,t,i){return Yf.applyChanges(e,[{fromA:t,toA:i,fromB:t,toB:i}])}class Hp{constructor(e){this.context=e,this.tree=e.tree}apply(e){if(!e.docChanged&&this.tree==this.context.tree)return this;let t=this.context.changes(e.changes,e.state),i=this.context.treeLen==e.startState.doc.length?void 0:Math.max(e.changes.mapPos(this.context.treeLen),t.viewport.to);return t.work(20,i)||t.takeTree(),new Hp(t)}static init(e){let t=Math.min(3e3,e.doc.length),i=Np.create(e.facet(Wp).parser,e,{from:0,to:t});return i.work(20,t)||i.takeTree(),new Hp(i)}}Ip.state=Eo.define({create:Hp.init,update(e,t){for(let e of t.effects)if(e.is(Ip.setState))return e.value;return t.startState.facet(Wp)!=t.state.facet(Wp)?Hp.init(t.state):e.apply(t)}});let Vp=e=>{let t=setTimeout(()=>e(),500);return()=>clearTimeout(t)};"undefined"!=typeof requestIdleCallback&&(Vp=e=>{let t=-1,i=setTimeout(()=>{t=requestIdleCallback(e,{timeout:400})},100);return()=>t<0?clearTimeout(i):cancelIdleCallback(t)});const Gp="undefined"!=typeof navigator&&(null===(Pp=navigator.scheduling)||void 0===Pp?void 0:Pp.isInputPending)?()=>navigator.scheduling.isInputPending():null,Up=Wl.fromClass(class{constructor(e){this.view=e,this.working=null,this.workScheduled=0,this.chunkEnd=-1,this.chunkBudget=-1,this.work=this.work.bind(this),this.scheduleWork()}update(e){let t=this.view.state.field(Ip.state).context;(t.updateViewport(e.view.viewport)||this.view.viewport.to>t.treeLen)&&this.scheduleWork(),(e.docChanged||e.selectionSet)&&(this.view.hasFocus&&(this.chunkBudget+=50),this.scheduleWork()),this.checkAsyncSchedule(t)}scheduleWork(){if(this.working)return;let{state:e}=this.view,t=e.field(Ip.state);t.tree==t.context.tree&&t.context.isDone(e.doc.length)||(this.working=Vp(this.work))}work(e){this.working=null;let t=Date.now();if(this.chunkEnd<t&&(this.chunkEnd<0||this.view.hasFocus)&&(this.chunkEnd=t+3e4,this.chunkBudget=3e3),this.chunkBudget<=0)return;let{state:i,viewport:{to:s}}=this.view,n=i.field(Ip.state);if(n.tree==n.context.tree&&n.context.isDone(s+1e5))return;let o=Date.now()+Math.min(this.chunkBudget,100,e&&!Gp?Math.max(25,e.timeRemaining()-5):1e9),r=n.context.treeLen<s&&i.doc.length>s+1e3,a=n.context.work(()=>Gp&&Gp()||Date.now()>o,s+(r?0:1e5));this.chunkBudget-=Date.now()-t,(a||this.chunkBudget<=0)&&(n.context.takeTree(),this.view.dispatch({effects:Ip.setState.of(new Hp(n.context))})),this.chunkBudget>0&&(!a||r)&&this.scheduleWork(),this.checkAsyncSchedule(n.context)}checkAsyncSchedule(e){e.scheduleOn&&(this.workScheduled++,e.scheduleOn.then(()=>this.scheduleWork()).catch(e=>Hl(this.view.state,e)).then(()=>this.workScheduled--),e.scheduleOn=null)}destroy(){this.working&&this.working()}isWorking(){return!!(this.working||this.workScheduled>0)}},{eventHandlers:{focus(){this.scheduleWork()}}}),Wp=Ao.define({combine:e=>e.length?e[0]:null,enables:e=>[Ip.state,Up,Jd.contentAttributes.compute([e],t=>{let i=t.facet(e);return i&&i.name?{"data-language":i.name}:{}})]});class jp{constructor(e,t=[]){this.language=e,this.support=t,this.extension=[e,t]}}const Fp=Ao.define(),qp=Ao.define({combine:e=>{if(!e.length)return"  ";let t=e[0];if(!t||/\S/.test(t)||Array.from(t).some(e=>e!=t[0]))throw new Error("Invalid indent unit: "+JSON.stringify(e[0]));return t}});function Qp(e){let t=e.facet(qp);return 9==t.charCodeAt(0)?e.tabSize*t.length:t.length}function Yp(e,t){let i="",s=e.tabSize,n=e.facet(qp)[0];if("\t"==n){for(;t>=s;)i+="\t",t-=s;n=" "}for(let e=0;e<t;e++)i+=n;return i}function Xp(e,t){e instanceof mr&&(e=new Kp(e));for(let i of e.state.facet(Fp)){let s=i(e,t);if(void 0!==s)return s}let i=Dp(e.state);return i.length>=t?Jp(e,i,t):null}class Kp{constructor(e,t={}){this.state=e,this.options=t,this.unit=Qp(e)}lineAt(e,t=1){let i=this.state.doc.lineAt(e),{simulateBreak:s,simulateDoubleBreak:n}=this.options;return null!=s&&s>=i.from&&s<=i.to?n&&s==e?{text:"",from:e}:(t<0?s<e:s<=e)?{text:i.text.slice(s-i.from),from:s}:{text:i.text.slice(0,s-i.from),from:i.from}:i}textAfterPos(e,t=1){if(this.options.simulateDoubleBreak&&e==this.options.simulateBreak)return"";let{text:i,from:s}=this.lineAt(e,t);return i.slice(e-s,Math.min(i.length,e+100-s))}column(e,t=1){let{text:i,from:s}=this.lineAt(e,t),n=this.countColumn(i,e-s),o=this.options.overrideIndentation?this.options.overrideIndentation(s):-1;return o>-1&&(n+=o-this.countColumn(i,i.search(/\S|$/))),n}countColumn(e,t=e.length){return Lr(e,this.state.tabSize,t)}lineIndent(e,t=1){let{text:i,from:s}=this.lineAt(e,t),n=this.options.overrideIndentation;if(n){let e=n(s);if(e>-1)return e}return this.countColumn(i,i.search(/\S|$/))}get simulatedBreak(){return this.options.simulateBreak||null}}const Zp=new yf;function Jp(e,t,i){let s=t.resolveStack(i),n=t.resolveInner(i,-1).resolve(i,0).enterUnfinishedNodesBefore(i);if(n!=s.node){let e=[];for(let t=n;t&&!(t.from<s.node.from||t.to>s.node.to||t.from==s.node.from&&t.type==s.node.type);t=t.parent)e.push(t);for(let t=e.length-1;t>=0;t--)s={node:e[t],next:s}}return eg(s,e,i)}function eg(e,t,i){for(let s=e;s;s=s.next){let e=ig(s.node);if(e)return e(ng.create(t,i,s))}return 0}function tg(e){return e.pos==e.options.simulateBreak&&e.options.simulateDoubleBreak}function ig(e){let t=e.type.prop(Zp);if(t)return t;let i,s=e.firstChild;if(s&&(i=s.type.prop(yf.closedBy))){let t=e.lastChild,s=t&&i.indexOf(t.name)>-1;return e=>lg(e,!0,1,void 0,s&&!tg(e)?t.from:void 0)}return null==e.parent?sg:null}function sg(){return 0}class ng extends Kp{constructor(e,t,i){super(e.state,e.options),this.base=e,this.pos=t,this.context=i}get node(){return this.context.node}static create(e,t,i){return new ng(e,t,i)}get textAfter(){return this.textAfterPos(this.pos)}get baseIndent(){return this.baseIndentFor(this.node)}baseIndentFor(e){let t=this.state.doc.lineAt(e.from);for(;;){let i=e.resolve(t.from);for(;i.parent&&i.parent.from==i.from;)i=i.parent;if(og(i,e))break;t=this.state.doc.lineAt(i.from)}return this.lineIndent(t.from)}continue(){return eg(this.context.next,this.base,this.pos)}}function og(e,t){for(let i=t;i;i=i.parent)if(e==i)return!0;return!1}function rg(e){let t=e.node,i=t.childAfter(t.from),s=t.lastChild;if(!i)return null;let n=e.options.simulateBreak,o=e.state.doc.lineAt(i.from),r=null==n||n<=o.from?o.to:Math.min(o.to,n);for(let e=i.to;;){let n=t.childAfter(e);if(!n||n==s)return null;if(!n.type.isSkipped){if(n.from>=r)return null;let e=/^ */.exec(o.text.slice(i.to-o.from))[0].length;return{from:i.from,to:i.to+e}}e=n.to}}function ag({closing:e,align:t=!0,units:i=1}){return s=>lg(s,t,i,e)}function lg(e,t,i,s,n){let o=e.textAfter,r=o.match(/^\s*/)[0].length,a=s&&o.slice(r,r+s.length)==s||n==e.pos+r,l=t?rg(e):null;return l?a?e.column(l.from):e.column(l.to):e.baseIndent+(a?0:e.unit*i)}const hg=new yf;function cg(e){let t=e.firstChild,i=e.lastChild;return t&&t.to<i.from?{from:t.to,to:i.type.isError?e.to:i.from}:null}class dg{constructor(e,t){let i;function s(e){let t=Gr.newName();return(i||(i=Object.create(null)))["."+t]=e,t}this.specs=e;const n="string"==typeof t.all?t.all:t.all?s(t.all):void 0,o=t.scope;this.scope=o instanceof Ip?e=>e.prop(Tp)==o.data:o?e=>e==o:void 0,this.style=ap(e.map(e=>({tag:e.tag,class:e.class||s(Object.assign({},e,{tag:null}))})),{all:n}).style,this.module=i?new Gr(i):null,this.themeType=t.themeType}static define(e,t){return new dg(e,t||{})}}const ug=Ao.define(),fg=Ao.define({combine:e=>e.length?[e[0]]:null});function pg(e){let t=e.facet(ug);return t.length?t:e.facet(fg)}function gg(e,t){let i,s=[vg];return e instanceof dg&&(e.module&&s.push(Jd.styleModule.of(e.module)),i=e.themeType),(null==t?void 0:t.fallback)?s.push(fg.of(e)):i?s.push(ug.computeN([Jd.darkTheme],t=>t.facet(Jd.darkTheme)==("dark"==i)?[e]:[])):s.push(ug.of(e)),s}class mg{constructor(e){this.markCache=Object.create(null),this.tree=Dp(e.state),this.decorations=this.buildDeco(e,pg(e.state)),this.decoratedTo=e.viewport.to}update(e){let t=Dp(e.state),i=pg(e.state),s=i!=pg(e.startState),{viewport:n}=e.view,o=e.changes.mapPos(this.decoratedTo,1);t.length<n.to&&!s&&t.type==this.tree.type&&o>=n.to?(this.decorations=this.decorations.map(e.changes),this.decoratedTo=o):(t!=this.tree||e.viewportChanged||s)&&(this.tree=t,this.decorations=this.buildDeco(e.view,i),this.decoratedTo=n.to)}buildDeco(e,t){if(!t||!this.tree.length)return wa.none;let i=new Sr;for(let{from:s,to:n}of e.visibleRanges)hp(this.tree,t,(e,t,s)=>{i.add(e,t,this.markCache[s]||(this.markCache[s]=wa.mark({class:s})))},s,n);return i.finish()}}const vg=Bo.high(Wl.fromClass(mg,{decorations:e=>e.decorations})),bg=dg.define([{tag:Ap.meta,color:"#404740"},{tag:Ap.link,textDecoration:"underline"},{tag:Ap.heading,textDecoration:"underline",fontWeight:"bold"},{tag:Ap.emphasis,fontStyle:"italic"},{tag:Ap.strong,fontWeight:"bold"},{tag:Ap.strikethrough,textDecoration:"line-through"},{tag:Ap.keyword,color:"#708"},{tag:[Ap.atom,Ap.bool,Ap.url,Ap.contentSeparator,Ap.labelName],color:"#219"},{tag:[Ap.literal,Ap.inserted],color:"#164"},{tag:[Ap.string,Ap.deleted],color:"#a11"},{tag:[Ap.regexp,Ap.escape,Ap.special(Ap.string)],color:"#e40"},{tag:Ap.definition(Ap.variableName),color:"#00f"},{tag:Ap.local(Ap.variableName),color:"#30a"},{tag:[Ap.typeName,Ap.namespace],color:"#085"},{tag:Ap.className,color:"#167"},{tag:[Ap.special(Ap.variableName),Ap.macroName],color:"#256"},{tag:Ap.definition(Ap.propertyName),color:"#00c"},{tag:Ap.comment,color:"#940"},{tag:Ap.invalid,color:"#f00"}]),_g=Jd.baseTheme({"&.cm-focused .cm-matchingBracket":{backgroundColor:"#328c8252"},"&.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bb555544"}}),wg=1e4,yg="()[]{}",xg=Ao.define({combine:e=>vr(e,{afterCursor:!0,brackets:yg,maxScanDistance:wg,renderMatch:Sg})}),kg=wa.mark({class:"cm-matchingBracket"}),Cg=wa.mark({class:"cm-nonmatchingBracket"});function Sg(e){let t=[],i=e.matched?kg:Cg;return t.push(i.range(e.start.from,e.start.to)),e.end&&t.push(i.range(e.end.from,e.end.to)),t}function Og(e){let t=[],i=e.facet(xg);for(let s of e.selection.ranges){if(!s.empty)continue;let n=Rg(e,s.head,-1,i)||s.head>0&&Rg(e,s.head-1,1,i)||i.afterCursor&&(Rg(e,s.head,1,i)||s.head<e.doc.length&&Rg(e,s.head+1,-1,i));n&&(t=t.concat(i.renderMatch(n,e)))}return wa.set(t,!0)}const Ag=Wl.fromClass(class{constructor(e){this.paused=!1,this.decorations=Og(e.state)}update(e){(e.docChanged||e.selectionSet||this.paused)&&(e.view.composing?(this.decorations=this.decorations.map(e.changes),this.paused=!0):(this.decorations=Og(e.state),this.paused=!1))}},{decorations:e=>e.decorations}),Pg=[Ag,_g];function Tg(e={}){return[xg.of(e),Pg]}const Mg=new yf;function $g(e,t,i){let s=e.prop(t<0?yf.openedBy:yf.closedBy);if(s)return s;if(1==e.name.length){let s=i.indexOf(e.name);if(s>-1&&s%2==(t<0?1:0))return[i[s+t]]}return null}function Ig(e){let t=e.type.prop(Mg);return t?t(e.node):e}function Rg(e,t,i,s={}){let n=s.maxScanDistance||wg,o=s.brackets||yg,r=Dp(e),a=r.resolveInner(t,i);for(let s=a;s;s=s.parent){let n=$g(s.type,i,o);if(n&&s.from<s.to){let r=Ig(s);if(r&&(i>0?t>=r.from&&t<r.to:t>r.from&&t<=r.to))return Eg(e,t,i,s,r,n,o)}}return Dg(e,t,i,r,a.type,n,o)}function Eg(e,t,i,s,n,o,r){let a=s.parent,l={from:n.from,to:n.to},h=0,c=null==a?void 0:a.cursor();if(c&&(i<0?c.childBefore(s.from):c.childAfter(s.to)))do{if(i<0?c.to<=s.from:c.from>=s.to){if(0==h&&o.indexOf(c.type.name)>-1&&c.from<c.to){let e=Ig(c);return{start:l,end:e?{from:e.from,to:e.to}:void 0,matched:!0}}if($g(c.type,i,r))h++;else if($g(c.type,-i,r)){if(0==h){let e=Ig(c);return{start:l,end:e&&e.from<e.to?{from:e.from,to:e.to}:void 0,matched:!1}}h--}}}while(i<0?c.prevSibling():c.nextSibling());return{start:l,matched:!1}}function Dg(e,t,i,s,n,o,r){if(i<0?!t:t==e.doc.length)return null;let a=i<0?e.sliceDoc(t-1,t):e.sliceDoc(t,t+1),l=r.indexOf(a);if(l<0||l%2==0!=i>0)return null;let h={from:i<0?t-1:t,to:i>0?t+1:t},c=e.doc.iterRange(t,i>0?e.doc.length:0),d=0;for(let e=0;!c.next().done&&e<=o;){let o=c.value;i<0&&(e+=o.length);let a=t+e*i;for(let e=i>0?0:o.length-1,t=i>0?o.length:-1;e!=t;e+=i){let t=r.indexOf(o[e]);if(!(t<0||s.resolveInner(a+e,1).type!=n))if(t%2==0==i>0)d++;else{if(1==d)return{start:h,end:{from:a+e,to:a+e+1},matched:t>>1==l>>1};d--}}i>0&&(e+=o.length)}return c.done?{start:h,matched:!1}:null}const Lg=Object.create(null),Bg=[Cf.none],Ng=[],zg=Object.create(null),Hg=Object.create(null);for(let[e,t]of[["variable","variableName"],["variable-2","variableName.special"],["string-2","string.special"],["def","variableName.definition"],["tag","tagName"],["attribute","attributeName"],["type","typeName"],["builtin","variableName.standard"],["qualifier","modifier"],["error","invalid"],["header","heading"],["property","propertyName"]])Hg[e]=Gg(Lg,t);function Vg(e,t){Ng.indexOf(e)>-1||(Ng.push(e),console.warn(t))}function Gg(e,t){let i=[];for(let s of t.split(" ")){let t=[];for(let i of s.split(".")){let s=e[i]||Ap[i];s?"function"==typeof s?t.length?t=t.map(s):Vg(i,`Modifier ${i} used at start of tag`):t.length?Vg(i,`Tag ${i} used as modifier`):t=Array.isArray(s)?s:[s]:Vg(i,`Unknown highlighting tag ${i}`)}for(let e of t)i.push(e)}if(!i.length)return 0;let s=t.replace(/ /g,"_"),n=s+" "+i.map(e=>e.id),o=zg[n];if(o)return o.id;let r=zg[n]=Cf.define({id:Bg.length,name:s,props:[np({[s]:i})]});return Bg.push(r),r.id}il.RTL,il.LTR;const Ug=e=>{let{state:t}=e,i=t.doc.lineAt(t.selection.main.from),s=Qg(e.state,i.from);return s.line?jg(e):!!s.block&&qg(e)};function Wg(e,t){return({state:i,dispatch:s})=>{if(i.readOnly)return!1;let n=e(t,i);return!!n&&(s(i.update(n)),!0)}}const jg=Wg(Jg,0),Fg=Wg(Zg,0),qg=Wg((e,t)=>Zg(e,t,Kg(t)),0);function Qg(e,t){let i=e.languageDataAt("commentTokens",t,1);return i.length?i[0]:{}}const Yg=50;function Xg(e,{open:t,close:i},s,n){let o,r,a=e.sliceDoc(s-Yg,s),l=e.sliceDoc(n,n+Yg),h=/\s*$/.exec(a)[0].length,c=/^\s*/.exec(l)[0].length,d=a.length-h;if(a.slice(d-t.length,d)==t&&l.slice(c,c+i.length)==i)return{open:{pos:s-h,margin:h&&1},close:{pos:n+c,margin:c&&1}};n-s<=100?o=r=e.sliceDoc(s,n):(o=e.sliceDoc(s,s+Yg),r=e.sliceDoc(n-Yg,n));let u=/^\s*/.exec(o)[0].length,f=/\s*$/.exec(r)[0].length,p=r.length-f-i.length;return o.slice(u,u+t.length)==t&&r.slice(p,p+i.length)==i?{open:{pos:s+u+t.length,margin:/\s/.test(o.charAt(u+t.length))?1:0},close:{pos:n-f-i.length,margin:/\s/.test(r.charAt(p-1))?1:0}}:null}function Kg(e){let t=[];for(let i of e.selection.ranges){let s=e.doc.lineAt(i.from),n=i.to<=s.to?s:e.doc.lineAt(i.to);n.from>s.from&&n.from==i.to&&(n=i.to==s.to+1?s:e.doc.lineAt(i.to-1));let o=t.length-1;o>=0&&t[o].to>s.from?t[o].to=n.to:t.push({from:s.from+/^\s*/.exec(s.text)[0].length,to:n.to})}return t}function Zg(e,t,i=t.selection.ranges){let s=i.map(e=>Qg(t,e.from).block);if(!s.every(e=>e))return null;let n=i.map((e,i)=>Xg(t,s[i],e.from,e.to));if(2!=e&&!n.every(e=>e))return{changes:t.changes(i.map((e,t)=>n[t]?[]:[{from:e.from,insert:s[t].open+" "},{from:e.to,insert:" "+s[t].close}]))};if(1!=e&&n.some(e=>e)){let e=[];for(let t,i=0;i<n.length;i++)if(t=n[i]){let n=s[i],{open:o,close:r}=t;e.push({from:o.pos-n.open.length,to:o.pos+o.margin},{from:r.pos-r.margin,to:r.pos+n.close.length})}return{changes:e}}return null}function Jg(e,t,i=t.selection.ranges){let s=[],n=-1;e:for(let{from:e,to:o}of i){let i,r=s.length,a=1e9;for(let r=e;r<=o;){let l=t.doc.lineAt(r);if(null==i&&(i=Qg(t,l.from).line,!i))continue e;if(l.from>n&&(e==o||o>l.from)){n=l.from;let e=/^\s*/.exec(l.text)[0].length,t=e==l.length,o=l.text.slice(e,e+i.length)==i?e:-1;e<l.text.length&&e<a&&(a=e),s.push({line:l,comment:o,token:i,indent:e,empty:t,single:!1})}r=l.to+1}if(a<1e9)for(let e=r;e<s.length;e++)s[e].indent<s[e].line.text.length&&(s[e].indent=a);s.length==r+1&&(s[r].single=!0)}if(2!=e&&s.some(e=>e.comment<0&&(!e.empty||e.single))){let e=[];for(let{line:t,token:i,indent:n,empty:o,single:r}of s)!r&&o||e.push({from:t.from+n,insert:i+" "});let i=t.changes(e);return{changes:i,selection:t.selection.map(i,1)}}if(1!=e&&s.some(e=>e.comment>=0)){let e=[];for(let{line:t,comment:i,token:n}of s)if(i>=0){let s=t.from+i,o=s+n.length;" "==t.text[o-t.from]&&o++,e.push({from:s,to:o})}return{changes:e}}return null}const em=Zo.define(),tm=Zo.define(),im=Ao.define(),sm=Ao.define({combine:e=>vr(e,{minDepth:100,newGroupDelay:500,joinToEvent:(e,t)=>t},{minDepth:Math.max,newGroupDelay:Math.min,joinToEvent:(e,t)=>(i,s)=>e(i,s)||t(i,s)})}),nm=Eo.define({create:()=>km.empty,update(e,t){let i=t.state.facet(sm),s=t.annotation(em);if(s){let n=dm.fromTransaction(t,s.selection),o=s.side,r=0==o?e.undone:e.done;return r=n?um(r,r.length,i.minDepth,n):bm(r,t.startState.selection),new km(0==o?s.rest:r,0==o?r:s.rest)}let n=t.annotation(tm);if("full"!=n&&"before"!=n||(e=e.isolate()),!1===t.annotation(ir.addToHistory))return t.changes.empty?e:e.addMapping(t.changes.desc);let o=dm.fromTransaction(t),r=t.annotation(ir.time),a=t.annotation(ir.userEvent);return o?e=e.addChanges(o,r,a,i,t):t.selection&&(e=e.addSelection(t.startState.selection,r,a,i.newGroupDelay)),"full"!=n&&"after"!=n||(e=e.isolate()),e},toJSON:e=>({done:e.done.map(e=>e.toJSON()),undone:e.undone.map(e=>e.toJSON())}),fromJSON:e=>new km(e.done.map(dm.fromJSON),e.undone.map(dm.fromJSON))});function om(e={}){return[nm,sm.of(e),Jd.domEventHandlers({beforeinput(e,t){let i="historyUndo"==e.inputType?am:"historyRedo"==e.inputType?lm:null;return!!i&&(e.preventDefault(),i(t))}})]}function rm(e,t){return function({state:i,dispatch:s}){if(!t&&i.readOnly)return!1;let n=i.field(nm,!1);if(!n)return!1;let o=n.pop(e,i,t);return!!o&&(s(o),!0)}}const am=rm(0,!1),lm=rm(1,!1),hm=rm(0,!0),cm=rm(1,!0);class dm{constructor(e,t,i,s,n){this.changes=e,this.effects=t,this.mapped=i,this.startSelection=s,this.selectionsAfter=n}setSelAfter(e){return new dm(this.changes,this.effects,this.mapped,this.startSelection,e)}toJSON(){var e,t,i;return{changes:null===(e=this.changes)||void 0===e?void 0:e.toJSON(),mapped:null===(t=this.mapped)||void 0===t?void 0:t.toJSON(),startSelection:null===(i=this.startSelection)||void 0===i?void 0:i.toJSON(),selectionsAfter:this.selectionsAfter.map(e=>e.toJSON())}}static fromJSON(e){return new dm(e.changes&&mo.fromJSON(e.changes),[],e.mapped&&go.fromJSON(e.mapped),e.startSelection&&Co.fromJSON(e.startSelection),e.selectionsAfter.map(Co.fromJSON))}static fromTransaction(e,t){let i=mm;for(let t of e.startState.facet(im)){let s=t(e);s.length&&(i=i.concat(s))}return!i.length&&e.changes.empty?null:new dm(e.changes.invert(e.startState.doc),i,void 0,t||e.startState.selection,mm)}static selection(e){return new dm(void 0,mm,void 0,void 0,e)}}function um(e,t,i,s){let n=t+1>i+20?t-i-1:0,o=e.slice(n,t);return o.push(s),o}function fm(e,t){let i=[],s=!1;return e.iterChangedRanges((e,t)=>i.push(e,t)),t.iterChangedRanges((e,t,n,o)=>{for(let e=0;e<i.length;){let t=i[e++],r=i[e++];o>=t&&n<=r&&(s=!0)}}),s}function pm(e,t){return e.ranges.length==t.ranges.length&&0===e.ranges.filter((e,i)=>e.empty!=t.ranges[i].empty).length}function gm(e,t){return e.length?t.length?e.concat(t):e:t}const mm=[],vm=200;function bm(e,t){if(e.length){let i=e[e.length-1],s=i.selectionsAfter.slice(Math.max(0,i.selectionsAfter.length-vm));return s.length&&s[s.length-1].eq(t)?e:(s.push(t),um(e,e.length-1,1e9,i.setSelAfter(s)))}return[dm.selection([t])]}function _m(e){let t=e[e.length-1],i=e.slice();return i[e.length-1]=t.setSelAfter(t.selectionsAfter.slice(0,t.selectionsAfter.length-1)),i}function wm(e,t){if(!e.length)return e;let i=e.length,s=mm;for(;i;){let n=ym(e[i-1],t,s);if(n.changes&&!n.changes.empty||n.effects.length){let t=e.slice(0,i);return t[i-1]=n,t}t=n.mapped,i--,s=n.selectionsAfter}return s.length?[dm.selection(s)]:mm}function ym(e,t,i){let s=gm(e.selectionsAfter.length?e.selectionsAfter.map(e=>e.map(t)):mm,i);if(!e.changes)return dm.selection(s);let n=e.changes.map(t),o=t.mapDesc(e.changes,!0),r=e.mapped?e.mapped.composeDesc(o):o;return new dm(n,tr.mapEffects(e.effects,t),r,e.startSelection.map(o),s)}const xm=/^(input\.type|delete)($|\.)/;class km{constructor(e,t,i=0,s=void 0){this.done=e,this.undone=t,this.prevTime=i,this.prevUserEvent=s}isolate(){return this.prevTime?new km(this.done,this.undone):this}addChanges(e,t,i,s,n){let o=this.done,r=o[o.length-1];return o=r&&r.changes&&!r.changes.empty&&e.changes&&(!i||xm.test(i))&&(!r.selectionsAfter.length&&t-this.prevTime<s.newGroupDelay&&s.joinToEvent(n,fm(r.changes,e.changes))||"input.type.compose"==i)?um(o,o.length-1,s.minDepth,new dm(e.changes.compose(r.changes),gm(tr.mapEffects(e.effects,r.changes),r.effects),r.mapped,r.startSelection,mm)):um(o,o.length,s.minDepth,e),new km(o,mm,t,i)}addSelection(e,t,i,s){let n=this.done.length?this.done[this.done.length-1].selectionsAfter:mm;return n.length>0&&t-this.prevTime<s&&i==this.prevUserEvent&&i&&/^select($|\.)/.test(i)&&pm(n[n.length-1],e)?this:new km(bm(this.done,e),this.undone,t,i)}addMapping(e){return new km(wm(this.done,e),wm(this.undone,e),this.prevTime,this.prevUserEvent)}pop(e,t,i){let s=0==e?this.done:this.undone;if(0==s.length)return null;let n=s[s.length-1],o=n.selectionsAfter[0]||(n.startSelection?n.startSelection.map(n.changes.invertedDesc,1):t.selection);if(i&&n.selectionsAfter.length)return t.update({selection:n.selectionsAfter[n.selectionsAfter.length-1],annotations:em.of({side:e,rest:_m(s),selection:o}),userEvent:0==e?"select.undo":"select.redo",scrollIntoView:!0});if(n.changes){let i=1==s.length?mm:s.slice(0,s.length-1);return n.mapped&&(i=wm(i,n.mapped)),t.update({changes:n.changes,selection:n.startSelection,effects:n.effects,annotations:em.of({side:e,rest:i,selection:o}),filter:!1,userEvent:0==e?"undo":"redo",scrollIntoView:!0})}return null}}km.empty=new km(mm,mm);const Cm=[{key:"Mod-z",run:am,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:lm,preventDefault:!0},{linux:"Ctrl-Shift-z",run:lm,preventDefault:!0},{key:"Mod-u",run:hm,preventDefault:!0},{key:"Alt-u",mac:"Mod-Shift-u",run:cm,preventDefault:!0}];function Sm(e,t){return Co.create(e.ranges.map(t),e.mainIndex)}function Om(e,t){return e.update({selection:t,scrollIntoView:!0,userEvent:"select"})}function Am({state:e,dispatch:t},i){let s=Sm(e.selection,i);return!s.eq(e.selection,!0)&&(t(Om(e,s)),!0)}function Pm(e,t){return Co.cursor(t?e.to:e.from)}function Tm(e,t){return Am(e,i=>i.empty?e.moveByChar(i,t):Pm(i,t))}function Mm(e){return e.textDirectionAt(e.state.selection.main.head)==il.LTR}const $m=e=>Tm(e,!Mm(e)),Im=e=>Tm(e,Mm(e));function Rm(e,t){return Am(e,i=>i.empty?e.moveByGroup(i,t):Pm(i,t))}const Em=e=>Rm(e,!Mm(e)),Dm=e=>Rm(e,Mm(e));function Lm(e,t,i){if(t.type.prop(i))return!0;let s=t.to-t.from;return s&&(s>2||/[^\s,.;:]/.test(e.sliceDoc(t.from,t.to)))||t.firstChild}function Bm(e,t,i){let s,n,o=Dp(e).resolveInner(t.head),r=i?yf.closedBy:yf.openedBy;for(let s=t.head;;){let t=i?o.childAfter(s):o.childBefore(s);if(!t)break;Lm(e,t,r)?o=t:s=i?t.to:t.from}return n=o.type.prop(r)&&(s=i?Rg(e,o.from,1):Rg(e,o.to,-1))&&s.matched?i?s.end.to:s.end.from:i?o.to:o.from,Co.cursor(n,i?-1:1)}const Nm=e=>Am(e,t=>Bm(e.state,t,!Mm(e))),zm=e=>Am(e,t=>Bm(e.state,t,Mm(e)));function Hm(e,t){return Am(e,i=>{if(!i.empty)return Pm(i,t);let s=e.moveVertically(i,t);return s.head!=i.head?s:e.moveToLineBoundary(i,t)})}const Vm=e=>Hm(e,!1),Gm=e=>Hm(e,!0);function Um(e){let t,i=e.scrollDOM.clientHeight<e.scrollDOM.scrollHeight-2,s=0,n=0;if(i){for(let t of e.state.facet(Jd.scrollMargins)){let i=t(e);(null==i?void 0:i.top)&&(s=Math.max(null==i?void 0:i.top,s)),(null==i?void 0:i.bottom)&&(n=Math.max(null==i?void 0:i.bottom,n))}t=e.scrollDOM.clientHeight-s-n}else t=(e.dom.ownerDocument.defaultView||window).innerHeight;return{marginTop:s,marginBottom:n,selfScroll:i,height:Math.max(e.defaultLineHeight,t-5)}}function Wm(e,t){let i,s=Um(e),{state:n}=e,o=Sm(n.selection,i=>i.empty?e.moveVertically(i,t,s.height):Pm(i,t));if(o.eq(n.selection))return!1;if(s.selfScroll){let t=e.coordsAtPos(n.selection.main.head),r=e.scrollDOM.getBoundingClientRect(),a=r.top+s.marginTop,l=r.bottom-s.marginBottom;t&&t.top>a&&t.bottom<l&&(i=Jd.scrollIntoView(o.main.head,{y:"start",yMargin:t.top-a}))}return e.dispatch(Om(n,o),{effects:i}),!0}const jm=e=>Wm(e,!1),Fm=e=>Wm(e,!0);function qm(e,t,i){let s=e.lineBlockAt(t.head),n=e.moveToLineBoundary(t,i);if(n.head==t.head&&n.head!=(i?s.to:s.from)&&(n=e.moveToLineBoundary(t,i,!1)),!i&&n.head==s.from&&s.length){let i=/^\s*/.exec(e.state.sliceDoc(s.from,Math.min(s.from+100,s.to)))[0].length;i&&t.head!=s.from+i&&(n=Co.cursor(s.from+i))}return n}const Qm=e=>Am(e,t=>qm(e,t,!0)),Ym=e=>Am(e,t=>qm(e,t,!1)),Xm=e=>Am(e,t=>qm(e,t,!Mm(e))),Km=e=>Am(e,t=>qm(e,t,Mm(e))),Zm=e=>Am(e,t=>Co.cursor(e.lineBlockAt(t.head).from,1)),Jm=e=>Am(e,t=>Co.cursor(e.lineBlockAt(t.head).to,-1));function ev(e,t,i){let s=!1,n=Sm(e.selection,t=>{let i=Rg(e,t.head,-1)||Rg(e,t.head,1)||t.head>0&&Rg(e,t.head-1,1)||t.head<e.doc.length&&Rg(e,t.head+1,-1);if(!i||!i.end)return t;s=!0;let n=i.start.from==t.head?i.end.to:i.end.from;return Co.cursor(n)});return!!s&&(t(Om(e,n)),!0)}const tv=({state:e,dispatch:t})=>ev(e,t);function iv(e,t,i){let s=Sm(e.state.selection,e=>{e.undirectional&&e.head>=e.anchor!=t&&(e=Co.range(e.head,e.anchor));let s=i(e);return Co.range(e.anchor,s.head,s.goalColumn,s.bidiLevel||void 0,s.assoc)});return!s.eq(e.state.selection)&&(e.dispatch(Om(e.state,s)),!0)}function sv(e,t){return iv(e,t,i=>e.moveByChar(i,t))}const nv=e=>sv(e,!Mm(e)),ov=e=>sv(e,Mm(e));function rv(e,t){return iv(e,t,i=>e.moveByGroup(i,t))}const av=e=>rv(e,!Mm(e)),lv=e=>rv(e,Mm(e)),hv=e=>{let t=!Mm(e);return iv(e,t,i=>Bm(e.state,i,t))},cv=e=>{let t=Mm(e);return iv(e,t,i=>Bm(e.state,i,t))};function dv(e,t){return iv(e,t,i=>e.moveVertically(i,t))}const uv=e=>dv(e,!1),fv=e=>dv(e,!0);function pv(e,t){return iv(e,t,i=>e.moveVertically(i,t,Um(e).height))}const gv=e=>pv(e,!1),mv=e=>pv(e,!0),vv=e=>iv(e,!0,t=>qm(e,t,!0)),bv=e=>iv(e,!1,t=>qm(e,t,!1)),_v=e=>{let t=!Mm(e);return iv(e,t,i=>qm(e,i,t))},wv=e=>{let t=Mm(e);return iv(e,t,i=>qm(e,i,t))},yv=e=>iv(e,!1,t=>Co.cursor(e.lineBlockAt(t.head).from)),xv=e=>iv(e,!0,t=>Co.cursor(e.lineBlockAt(t.head).to)),kv=({state:e,dispatch:t})=>(t(Om(e,{anchor:0})),!0),Cv=({state:e,dispatch:t})=>(t(Om(e,{anchor:e.doc.length})),!0),Sv=({state:e,dispatch:t})=>(t(Om(e,{anchor:e.selection.main.anchor,head:0})),!0),Ov=({state:e,dispatch:t})=>(t(Om(e,{anchor:e.selection.main.anchor,head:e.doc.length})),!0),Av=({state:e,dispatch:t})=>(t(e.update({selection:{anchor:0,head:e.doc.length},userEvent:"select"})),!0),Pv=({state:e,dispatch:t})=>{let i=qv(e).map(({from:t,to:i})=>Co.range(t,Math.min(i+1,e.doc.length)));return t(e.update({selection:Co.create(i),userEvent:"select"})),!0},Tv=({state:e,dispatch:t})=>{let i=Sm(e.selection,t=>{let i=Dp(e),s=i.resolveStack(t.from,1);if(t.empty){let e=i.resolveStack(t.from,-1);e.node.from>=s.node.from&&e.node.to<=s.node.to&&(s=e)}for(let e=s;e;e=e.next){let{node:i}=e;if((i.from<t.from&&i.to>=t.to||i.to>t.to&&i.from<=t.from)&&e.next)return Co.range(i.to,i.from)}return t});return!i.eq(e.selection)&&(t(Om(e,i)),!0)};function Mv(e,t){let{state:i}=e,s=i.selection,n=i.selection.ranges.slice();for(let s of i.selection.ranges){let o=i.doc.lineAt(s.head);if(t?o.to<e.state.doc.length:o.from>0)for(let i=s;;){let s=e.moveVertically(i,t);if(s.head<o.from||s.head>o.to){n.some(e=>e.head==s.head)||n.push(s);break}if(s.head==i.head)break;i=s}}return n.length!=s.ranges.length&&(e.dispatch(Om(i,Co.create(n,n.length-1))),!0)}const $v=e=>Mv(e,!1),Iv=e=>Mv(e,!0),Rv=({state:e,dispatch:t})=>{let i=e.selection,s=null;return i.ranges.length>1?s=Co.create([i.main]):i.main.empty||(s=Co.create([Co.cursor(i.main.head)])),!!s&&(t(Om(e,s)),!0)};function Ev(e,t){if(e.state.readOnly)return!1;let i="delete.selection",{state:s}=e,n=s.changeByRange(s=>{let{from:n,to:o}=s;if(n==o){let r=t(s);r<n?(i="delete.backward",r=Dv(e,r,!1)):r>n&&(i="delete.forward",r=Dv(e,r,!0)),n=Math.min(n,r),o=Math.max(o,r)}else n=Dv(e,n,!1),o=Dv(e,o,!0);return n==o?{range:s}:{changes:{from:n,to:o},range:Co.cursor(n,n<s.head?-1:1)}});return!n.changes.empty&&(e.dispatch(s.update(n,{scrollIntoView:!0,userEvent:i,effects:"delete.selection"==i?Jd.announce.of(s.phrase("Selection deleted")):void 0})),!0)}function Dv(e,t,i){if(e instanceof Jd)for(let s of e.state.facet(Jd.atomicRanges).map(t=>t(e)))s.between(t,t,(e,s)=>{e<t&&s>t&&(t=i?s:e)});return t}const Lv=(e,t,i)=>Ev(e,s=>{let n,o,r=s.from,{state:a}=e,l=a.doc.lineAt(r);if(i&&!t&&r>l.from&&r<l.from+200&&!/[^ \t]/.test(n=l.text.slice(0,r-l.from))){if("\t"==n[n.length-1])return r-1;let e=Lr(n,a.tabSize)%Qp(a)||Qp(a);for(let t=0;t<e&&" "==n[n.length-1-t];t++)r--;o=r}else o=ro(l.text,r-l.from,t,t)+l.from,o==r&&l.number!=(t?a.doc.lines:1)?o+=t?1:-1:!t&&/[\ufe00-\ufe0f]/.test(l.text.slice(o-l.from,r-l.from))&&(o=ro(l.text,o-l.from,!1,!1)+l.from);return o}),Bv=e=>Lv(e,!1,!0),Nv=e=>Lv(e,!0,!1),zv=(e,t)=>Ev(e,i=>{let s=i.head,{state:n}=e,o=n.doc.lineAt(s),r=n.charCategorizer(s);for(let e=null;;){if(s==(t?o.to:o.from)){s==i.head&&o.number!=(t?n.doc.lines:1)&&(s+=t?1:-1);break}let a=ro(o.text,s-o.from,t)+o.from,l=o.text.slice(Math.min(s,a)-o.from,Math.max(s,a)-o.from),h=r(l);if(null!=e&&h!=e)break;" "==l&&s==i.head||(e=h),s=a}return s}),Hv=e=>zv(e,!1),Vv=e=>zv(e,!0),Gv=e=>Ev(e,t=>{let i=e.lineBlockAt(t.head).to;return t.head<i?i:Math.min(e.state.doc.length,t.head+1)}),Uv=e=>Ev(e,t=>{let i=e.moveToLineBoundary(t,!1).head;return t.head>i?i:Math.max(0,t.head-1)}),Wv=e=>Ev(e,t=>{let i=e.moveToLineBoundary(t,!0).head;return t.head<i?i:Math.min(e.state.doc.length,t.head+1)}),jv=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let i=e.changeByRange(e=>({changes:{from:e.from,to:e.to,insert:Yn.of(["",""])},range:Co.cursor(e.from)}));return t(e.update(i,{scrollIntoView:!0,userEvent:"input"})),!0},Fv=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let i=e.changeByRange(t=>{if(!t.empty||0==t.from||t.from==e.doc.length)return{range:t};let i=t.from,s=e.doc.lineAt(i),n=i==s.from?i-1:ro(s.text,i-s.from,!1)+s.from,o=i==s.to?i+1:ro(s.text,i-s.from,!0)+s.from;return{changes:{from:n,to:o,insert:e.doc.slice(i,o).append(e.doc.slice(n,i))},range:Co.cursor(o)}});return!i.changes.empty&&(t(e.update(i,{scrollIntoView:!0,userEvent:"move.character"})),!0)};function qv(e){let t=[],i=-1;for(let s of e.selection.ranges){let n=e.doc.lineAt(s.from),o=e.doc.lineAt(s.to);if(s.empty||s.to!=o.from||(o=e.doc.lineAt(s.to-1)),i>=n.number){let e=t[t.length-1];e.to=o.to,e.ranges.push(s)}else t.push({from:n.from,to:o.to,ranges:[s]});i=o.number+1}return t}function Qv(e,t,i){if(e.readOnly)return!1;let s=[],n=[];for(let t of qv(e)){if(i?t.to==e.doc.length:0==t.from)continue;let o=e.doc.lineAt(i?t.to+1:t.from-1),r=o.length+1;if(i){s.push({from:t.to,to:o.to},{from:t.from,insert:o.text+e.lineBreak});for(let i of t.ranges)n.push(Co.range(Math.min(e.doc.length,i.anchor+r),Math.min(e.doc.length,i.head+r)))}else{s.push({from:o.from,to:t.from},{from:t.to,insert:e.lineBreak+o.text});for(let e of t.ranges)n.push(Co.range(e.anchor-r,e.head-r))}}return!!s.length&&(t(e.update({changes:s,scrollIntoView:!0,selection:Co.create(n,e.selection.mainIndex),userEvent:"move.line"})),!0)}const Yv=({state:e,dispatch:t})=>Qv(e,t,!1),Xv=({state:e,dispatch:t})=>Qv(e,t,!0);function Kv(e,t,i){if(e.readOnly)return!1;let s=[];for(let t of qv(e))i?s.push({from:t.from,insert:e.doc.slice(t.from,t.to)+e.lineBreak}):s.push({from:t.to,insert:e.lineBreak+e.doc.slice(t.from,t.to)});let n=e.changes(s);return t(e.update({changes:n,selection:e.selection.map(n,i?1:-1),scrollIntoView:!0,userEvent:"input.copyline"})),!0}const Zv=({state:e,dispatch:t})=>Kv(e,t,!1),Jv=({state:e,dispatch:t})=>Kv(e,t,!0),eb=e=>{if(e.state.readOnly)return!1;let{state:t}=e,i=t.changes(qv(t).map(({from:e,to:i})=>(e>0?e--:i<t.doc.length&&i++,{from:e,to:i}))),s=Sm(t.selection,t=>{let i;if(e.lineWrapping){let s=e.lineBlockAt(t.head),n=e.coordsAtPos(t.head,t.assoc||1);n&&(i=s.bottom+e.documentTop-n.bottom+e.defaultLineHeight/2)}return e.moveVertically(t,!0,i)}).map(i);return e.dispatch({changes:i,selection:s,scrollIntoView:!0,userEvent:"delete.line"}),!0};function tb(e,t){if(/\(\)|\[\]|\{\}/.test(e.sliceDoc(t-1,t+1)))return{from:t,to:t};let i,s=Dp(e).resolveInner(t),n=s.childBefore(t),o=s.childAfter(t);return n&&o&&n.to<=t&&o.from>=t&&(i=n.type.prop(yf.closedBy))&&i.indexOf(o.name)>-1&&e.doc.lineAt(n.to).from==e.doc.lineAt(o.from).from&&!/\S/.test(e.sliceDoc(n.to,o.from))?{from:n.to,to:o.from}:null}const ib=nb(!1),sb=nb(!0);function nb(e){return({state:t,dispatch:i})=>{if(t.readOnly)return!1;let s=t.changeByRange(i=>{let{from:s,to:n}=i,o=t.doc.lineAt(s),r=!e&&s==n&&tb(t,s);e&&(s=n=(n<=o.to?o:t.doc.lineAt(n)).to);let a=new Kp(t,{simulateBreak:s,simulateDoubleBreak:!!r}),l=Xp(a,s);for(null==l&&(l=Lr(/^\s*/.exec(t.doc.lineAt(s).text)[0],t.tabSize));n<o.to&&/\s/.test(o.text[n-o.from]);)n++;r?({from:s,to:n}=r):s>o.from&&s<o.from+100&&!/\S/.test(o.text.slice(0,s))&&(s=o.from);let h=["",Yp(t,l)];return r&&h.push(Yp(t,a.lineIndent(o.from,-1))),{changes:{from:s,to:n,insert:Yn.of(h)},range:Co.cursor(s+1+h[1].length)}});return i(t.update(s,{scrollIntoView:!0,userEvent:"input"})),!0}}function ob(e,t){let i=-1;return e.changeByRange(s=>{let n=[];for(let o=s.from;o<=s.to;){let r=e.doc.lineAt(o);r.number>i&&(s.empty||s.to>r.from)&&(t(r,n,s),i=r.number),o=r.to+1}let o=e.changes(n);return{changes:n,range:Co.range(o.mapPos(s.anchor,1),o.mapPos(s.head,1))}})}const rb=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let i=Object.create(null),s=new Kp(e,{overrideIndentation:e=>{let t=i[e];return null==t?-1:t}}),n=ob(e,(t,n,o)=>{let r=Xp(s,t.from);if(null==r)return;/\S/.test(t.text)||(r=0);let a=/^\s*/.exec(t.text)[0],l=Yp(e,r);(a!=l||o.from<t.from+a.length)&&(i[t.from]=r,n.push({from:t.from,to:t.from+a.length,insert:l}))});return n.changes.empty||t(e.update(n,{userEvent:"indent"})),!0},ab=({state:e,dispatch:t})=>!e.readOnly&&(t(e.update(ob(e,(t,i)=>{i.push({from:t.from,insert:e.facet(qp)})}),{userEvent:"input.indent"})),!0),lb=({state:e,dispatch:t})=>!e.readOnly&&(t(e.update(ob(e,(t,i)=>{let s=/^\s*/.exec(t.text)[0];if(!s)return;let n=Lr(s,e.tabSize),o=0,r=Yp(e,Math.max(0,n-Qp(e)));for(;o<s.length&&o<r.length&&s.charCodeAt(o)==r.charCodeAt(o);)o++;i.push({from:t.from+o,to:t.from+s.length,insert:r.slice(o)})}),{userEvent:"delete.dedent"})),!0),hb=e=>(e.setTabFocusMode(),!0),cb=[{key:"Ctrl-b",run:$m,shift:nv,preventDefault:!0},{key:"Ctrl-f",run:Im,shift:ov},{key:"Ctrl-p",run:Vm,shift:uv},{key:"Ctrl-n",run:Gm,shift:fv},{key:"Ctrl-a",run:Zm,shift:yv},{key:"Ctrl-e",run:Jm,shift:xv},{key:"Ctrl-d",run:Nv},{key:"Ctrl-h",run:Bv},{key:"Ctrl-k",run:Gv},{key:"Ctrl-Alt-h",run:Hv},{key:"Ctrl-o",run:jv},{key:"Ctrl-t",run:Fv},{key:"Ctrl-v",run:Fm}],db=[{key:"ArrowLeft",run:$m,shift:nv,preventDefault:!0},{key:"Mod-ArrowLeft",mac:"Alt-ArrowLeft",run:Em,shift:av,preventDefault:!0},{mac:"Cmd-ArrowLeft",run:Xm,shift:_v,preventDefault:!0},{key:"ArrowRight",run:Im,shift:ov,preventDefault:!0},{key:"Mod-ArrowRight",mac:"Alt-ArrowRight",run:Dm,shift:lv,preventDefault:!0},{mac:"Cmd-ArrowRight",run:Km,shift:wv,preventDefault:!0},{key:"ArrowUp",run:Vm,shift:uv,preventDefault:!0},{mac:"Cmd-ArrowUp",run:kv,shift:Sv},{mac:"Ctrl-ArrowUp",run:jm,shift:gv},{key:"ArrowDown",run:Gm,shift:fv,preventDefault:!0},{mac:"Cmd-ArrowDown",run:Cv,shift:Ov},{mac:"Ctrl-ArrowDown",run:Fm,shift:mv},{key:"PageUp",run:jm,shift:gv},{key:"PageDown",run:Fm,shift:mv},{key:"Home",run:Ym,shift:bv,preventDefault:!0},{key:"Mod-Home",run:kv,shift:Sv},{key:"End",run:Qm,shift:vv,preventDefault:!0},{key:"Mod-End",run:Cv,shift:Ov},{key:"Enter",run:ib,shift:ib},{key:"Mod-a",run:Av},{key:"Backspace",run:Bv,shift:Bv,preventDefault:!0},{key:"Delete",run:Nv,preventDefault:!0},{key:"Mod-Backspace",mac:"Alt-Backspace",run:Hv,preventDefault:!0},{key:"Mod-Delete",mac:"Alt-Delete",run:Vv,preventDefault:!0},{mac:"Mod-Backspace",run:Uv,preventDefault:!0},{mac:"Mod-Delete",run:Wv,preventDefault:!0}].concat(cb.map(e=>({mac:e.key,run:e.run,shift:e.shift}))),ub=[{key:"Alt-ArrowLeft",mac:"Ctrl-ArrowLeft",run:Nm,shift:hv},{key:"Alt-ArrowRight",mac:"Ctrl-ArrowRight",run:zm,shift:cv},{key:"Alt-ArrowUp",run:Yv},{key:"Shift-Alt-ArrowUp",run:Zv},{key:"Alt-ArrowDown",run:Xv},{key:"Shift-Alt-ArrowDown",run:Jv},{key:"Mod-Alt-ArrowUp",run:$v},{key:"Mod-Alt-ArrowDown",run:Iv},{key:"Escape",run:Rv},{key:"Mod-Enter",run:sb},{key:"Alt-l",mac:"Ctrl-l",run:Pv},{key:"Mod-i",run:Tv,preventDefault:!0},{key:"Mod-[",run:lb},{key:"Mod-]",run:ab},{key:"Mod-Alt-\\",run:rb},{key:"Shift-Mod-k",run:eb},{key:"Shift-Mod-\\",run:tv},{key:"Mod-/",run:Ug},{key:"Alt-A",run:Fg},{key:"Ctrl-m",mac:"Shift-Alt-m",run:hb}].concat(db),fb={key:"Tab",run:ab,shift:lb};class pb{constructor(e,t,i,s,n,o,r,a,l,h=0,c){this.p=e,this.stack=t,this.state=i,this.reducePos=s,this.pos=n,this.score=o,this.buffer=r,this.bufferBase=a,this.curContext=l,this.lookAhead=h,this.parent=c}toString(){return`[${this.stack.filter((e,t)=>t%3==0).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`}static start(e,t,i=0){let s=e.parser.context;return new pb(e,[],t,i,i,0,[],0,s?new gb(s,s.start):null,0,null)}get context(){return this.curContext?this.curContext.context:null}pushState(e,t){this.stack.push(this.state,t,this.bufferBase+this.buffer.length),this.state=e}reduce(e){var t;let i=e>>19,s=65535&e,{parser:n}=this.p,o=this.reducePos<this.pos-25&&this.setLookAhead(this.pos),r=n.dynamicPrecedence(s);if(r&&(this.score+=r),0==i)return s<n.minRepeatTerm&&this.reducePos<this.pos&&(this.reducePos=this.pos),this.pushState(n.getGoto(this.state,s,!0),this.reducePos),s<n.minRepeatTerm&&this.storeNode(s,this.reducePos,this.reducePos,o?8:4,!0),void this.reduceContext(s,this.reducePos);let a=this.stack.length-3*(i-1)-(262144&e?6:0),l=a?this.stack[a-2]:this.p.ranges[0].from;s<n.minRepeatTerm&&l==this.reducePos&&this.reducePos<this.pos&&(this.reducePos=this.pos);let h=this.reducePos-l;h>=2e3&&!(null===(t=this.p.parser.nodeSet.types[s])||void 0===t?void 0:t.isAnonymous)&&(l==this.p.lastBigReductionStart?(this.p.bigReductionCount++,this.p.lastBigReductionSize=h):this.p.lastBigReductionSize<h&&(this.p.bigReductionCount=1,this.p.lastBigReductionStart=l,this.p.lastBigReductionSize=h));let c=a?this.stack[a-1]:0,d=this.bufferBase+this.buffer.length-c;if(s<n.minRepeatTerm||131072&e){let e=n.stateFlag(this.state,1)?this.pos:this.reducePos;this.storeNode(s,l,e,d+4,!0)}if(262144&e)this.state=this.stack[a];else{let e=this.stack[a-3];this.state=n.getGoto(e,s,!0)}for(;this.stack.length>a;)this.stack.pop();this.reduceContext(s,l)}storeNode(e,t,i,s=4,n=!1){if(0==e&&(!this.stack.length||this.stack[this.stack.length-1]<this.buffer.length+this.bufferBase)){let e=this.buffer.length;if(e>0&&0==this.buffer[e-4]&&this.buffer[e-1]>-1){if(t==i)return;if(this.buffer[e-2]>=t)return void(this.buffer[e-2]=i)}}if(n&&this.pos!=i){let n=this.buffer.length;if(n>0&&(0!=this.buffer[n-4]||this.buffer[n-1]<0)){let e=!1;for(let t=n;t>0&&this.buffer[t-2]>i;t-=4)if(this.buffer[t-1]>=0){e=!0;break}if(e)for(;n>0&&this.buffer[n-2]>i;)this.buffer[n]=this.buffer[n-4],this.buffer[n+1]=this.buffer[n-3],this.buffer[n+2]=this.buffer[n-2],this.buffer[n+3]=this.buffer[n-1],n-=4,s>4&&(s-=4)}this.buffer[n]=e,this.buffer[n+1]=t,this.buffer[n+2]=i,this.buffer[n+3]=s}else this.buffer.push(e,t,i,s)}shift(e,t,i,s){if(131072&e)this.pushState(65535&e,this.pos);else if(262144&e)this.pos=s,this.shiftContext(t,i),t<=this.p.parser.maxNode&&this.buffer.push(t,i,s,4);else{let n=e,{parser:o}=this.p;this.pos=s;let r=o.stateFlag(n,1);!r&&(s>i||t<=o.maxNode)&&(this.reducePos=s),this.pushState(n,r?i:Math.min(i,this.reducePos)),this.shiftContext(t,i),t<=o.maxNode&&this.buffer.push(t,i,s,4)}}apply(e,t,i,s){65536&e?this.reduce(e):this.shift(e,t,i,s)}useNode(e,t){let i=this.p.reused.length-1;(i<0||this.p.reused[i]!=e)&&(this.p.reused.push(e),i++);let s=this.pos;this.reducePos=this.pos=s+e.length,this.pushState(t,s),this.buffer.push(i,s,this.reducePos,-1),this.curContext&&this.updateContext(this.curContext.tracker.reuse(this.curContext.context,e,this,this.p.stream.reset(this.pos-e.length)))}split(){let e=this,t=e.buffer.length;for(t&&0==e.buffer[t-4]&&(t-=4);t>0&&e.buffer[t-2]>e.reducePos;)t-=4;let i=e.buffer.slice(t),s=e.bufferBase+t;for(;e&&s==e.bufferBase;)e=e.parent;return new pb(this.p,this.stack.slice(),this.state,this.reducePos,this.pos,this.score,i,s,this.curContext,this.lookAhead,e)}recoverByDelete(e,t){let i=e<=this.p.parser.maxNode;i&&this.storeNode(e,this.pos,t,4),this.storeNode(0,this.pos,t,i?8:4),this.pos=this.reducePos=t,this.score-=190}canShift(e){for(let t=new mb(this);;){let i=this.p.parser.stateSlot(t.state,4)||this.p.parser.hasAction(t.state,e);if(0==i)return!1;if(!(65536&i))return!0;t.reduce(i)}}recoverByInsert(e){if(this.stack.length>=300)return[];let t=this.p.parser.nextStates(this.state);if(t.length>8||this.stack.length>=120){let i=[];for(let s,n=0;n<t.length;n+=2)(s=t[n+1])!=this.state&&this.p.parser.hasAction(s,e)&&i.push(t[n],s);if(this.stack.length<120)for(let e=0;i.length<8&&e<t.length;e+=2){let s=t[e+1];i.some((e,t)=>1&t&&e==s)||i.push(t[e],s)}t=i}let i=[];for(let e=0;e<t.length&&i.length<4;e+=2){let s=t[e+1];if(s==this.state)continue;let n=this.split();n.pushState(s,this.pos),n.storeNode(0,n.pos,n.pos,4,!0),n.shiftContext(t[e],this.pos),n.reducePos=this.pos,n.score-=200,i.push(n)}return i}forceReduce(){let{parser:e}=this.p,t=e.stateSlot(this.state,5);if(!(65536&t))return!1;if(!e.validAction(this.state,t)){let i=t>>19,s=65535&t,n=this.stack.length-3*i;if(n<0||e.getGoto(this.stack[n],s,!1)<0){let e=this.findForcedReduction();if(null==e)return!1;t=e}this.storeNode(0,this.pos,this.pos,4,!0),this.score-=100}return this.reducePos=this.pos,this.reduce(t),!0}findForcedReduction(){let{parser:e}=this.p,t=[],i=(s,n)=>{if(!t.includes(s))return t.push(s),e.allActions(s,t=>{if(393216&t);else if(65536&t){let i=(t>>19)-n;if(i>1){let s=65535&t,n=this.stack.length-3*i;if(n>=0&&e.getGoto(this.stack[n],s,!1)>=0)return i<<19|65536|s}}else{let e=i(t,n+1);if(null!=e)return e}})};return i(this.state,0)}forceAll(){for(;!this.p.parser.stateFlag(this.state,2);)if(!this.forceReduce()){this.storeNode(0,this.pos,this.pos,4,!0);break}return this}get deadEnd(){if(3!=this.stack.length)return!1;let{parser:e}=this.p;return 65535==e.data[e.stateSlot(this.state,1)]&&!e.stateSlot(this.state,4)}restart(){this.storeNode(0,this.pos,this.pos,4,!0),this.state=this.stack[0],this.stack.length=0}sameState(e){if(this.state!=e.state||this.stack.length!=e.stack.length)return!1;for(let t=0;t<this.stack.length;t+=3)if(this.stack[t]!=e.stack[t])return!1;return!0}get parser(){return this.p.parser}dialectEnabled(e){return this.p.parser.dialect.flags[e]}shiftContext(e,t){this.curContext&&this.updateContext(this.curContext.tracker.shift(this.curContext.context,e,this,this.p.stream.reset(t)))}reduceContext(e,t){this.curContext&&this.updateContext(this.curContext.tracker.reduce(this.curContext.context,e,this,this.p.stream.reset(t)))}emitContext(){let e=this.buffer.length-1;(e<0||-3!=this.buffer[e])&&this.buffer.push(this.curContext.hash,this.pos,this.pos,-3)}emitLookAhead(){let e=this.buffer.length-1;(e<0||-4!=this.buffer[e])&&this.buffer.push(this.lookAhead,this.pos,this.pos,-4)}updateContext(e){if(e!=this.curContext.context){let t=new gb(this.curContext.tracker,e);t.hash!=this.curContext.hash&&this.emitContext(),this.curContext=t}}setLookAhead(e){return!(e<=this.lookAhead)&&(this.emitLookAhead(),this.lookAhead=e,!0)}close(){this.curContext&&this.curContext.tracker.strict&&this.emitContext(),this.lookAhead>0&&this.emitLookAhead()}}class gb{constructor(e,t){this.tracker=e,this.context=t,this.hash=e.strict?e.hash(t):0}}class mb{constructor(e){this.start=e,this.state=e.state,this.stack=e.stack,this.base=this.stack.length}reduce(e){let t=65535&e,i=e>>19;0==i?(this.stack==this.start.stack&&(this.stack=this.stack.slice()),this.stack.push(this.state,0,0),this.base+=3):this.base-=3*(i-1);let s=this.start.p.parser.getGoto(this.stack[this.base-3],t,!0);this.state=s}}class vb{constructor(e,t,i){this.stack=e,this.pos=t,this.index=i,this.buffer=e.buffer,0==this.index&&this.maybeNext()}static create(e,t=e.bufferBase+e.buffer.length){return new vb(e,t,t-e.bufferBase)}maybeNext(){let e=this.stack.parent;null!=e&&(this.index=this.stack.bufferBase-e.bufferBase,this.stack=e,this.buffer=e.buffer)}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}next(){this.index-=4,this.pos-=4,0==this.index&&this.maybeNext()}fork(){return new vb(this.stack,this.pos,this.index)}}function bb(e,t=Uint16Array){if("string"!=typeof e)return e;let i=null;for(let s=0,n=0;s<e.length;){let o=0;for(;;){let t=e.charCodeAt(s++),i=!1;if(126==t){o=65535;break}t>=92&&t--,t>=34&&t--;let n=t-32;if(n>=46&&(n-=46,i=!0),o+=n,i)break;o*=46}i?i[n++]=o:i=new t(o)}return i}class _b{constructor(){this.start=-1,this.value=-1,this.end=-1,this.extended=-1,this.lookAhead=0,this.mask=0,this.context=0}}const wb=new _b;class yb{constructor(e,t){this.input=e,this.ranges=t,this.chunk="",this.chunkOff=0,this.chunk2="",this.chunk2Pos=0,this.next=-1,this.token=wb,this.rangeIndex=0,this.pos=this.chunkPos=t[0].from,this.range=t[0],this.end=t[t.length-1].to,this.readNext()}resolveOffset(e,t){let i=this.range,s=this.rangeIndex,n=this.pos+e;for(;n<i.from;){if(!s)return null;let e=this.ranges[--s];n-=i.from-e.to,i=e}for(;t<0?n>i.to:n>=i.to;){if(s==this.ranges.length-1)return null;let e=this.ranges[++s];n+=e.from-i.to,i=e}return n}clipPos(e){if(e>=this.range.from&&e<this.range.to)return e;for(let t of this.ranges)if(t.to>e)return Math.max(e,t.from);return this.end}peek(e){let t,i,s=this.chunkOff+e;if(s>=0&&s<this.chunk.length)t=this.pos+e,i=this.chunk.charCodeAt(s);else{let s=this.resolveOffset(e,1);if(null==s)return-1;if(t=s,t>=this.chunk2Pos&&t<this.chunk2Pos+this.chunk2.length)i=this.chunk2.charCodeAt(t-this.chunk2Pos);else{let e=this.rangeIndex,s=this.range;for(;s.to<=t;)s=this.ranges[++e];this.chunk2=this.input.chunk(this.chunk2Pos=t),t+this.chunk2.length>s.to&&(this.chunk2=this.chunk2.slice(0,s.to-t)),i=this.chunk2.charCodeAt(0)}}return t>=this.token.lookAhead&&(this.token.lookAhead=t+1),i}acceptToken(e,t=0){let i=t?this.resolveOffset(t,-1):this.pos;if(null==i||i<this.token.start)throw new RangeError("Token end out of bounds");this.token.value=e,this.token.end=i}acceptTokenTo(e,t){this.token.value=e,this.token.end=t}getChunk(){if(this.pos>=this.chunk2Pos&&this.pos<this.chunk2Pos+this.chunk2.length){let{chunk:e,chunkPos:t}=this;this.chunk=this.chunk2,this.chunkPos=this.chunk2Pos,this.chunk2=e,this.chunk2Pos=t,this.chunkOff=this.pos-this.chunkPos}else{this.chunk2=this.chunk,this.chunk2Pos=this.chunkPos;let e=this.input.chunk(this.pos),t=this.pos+e.length;this.chunk=t>this.range.to?e.slice(0,this.range.to-this.pos):e,this.chunkPos=this.pos,this.chunkOff=0}}readNext(){return this.chunkOff>=this.chunk.length&&(this.getChunk(),this.chunkOff==this.chunk.length)?this.next=-1:this.next=this.chunk.charCodeAt(this.chunkOff)}advance(e=1){for(this.chunkOff+=e;this.pos+e>=this.range.to;){if(this.rangeIndex==this.ranges.length-1)return this.setDone();e-=this.range.to-this.pos,this.range=this.ranges[++this.rangeIndex],this.pos=this.range.from}return this.pos+=e,this.pos>=this.token.lookAhead&&(this.token.lookAhead=this.pos+1),this.readNext()}setDone(){return this.pos=this.chunkPos=this.end,this.range=this.ranges[this.rangeIndex=this.ranges.length-1],this.chunk="",this.next=-1}reset(e,t){if(t?(this.token=t,t.start=e,t.lookAhead=e+1,t.value=t.extended=-1):this.token=wb,this.pos!=e){if(this.pos=e,e==this.end)return this.setDone(),this;for(;e<this.range.from;)this.range=this.ranges[--this.rangeIndex];for(;e>=this.range.to;)this.range=this.ranges[++this.rangeIndex];e>=this.chunkPos&&e<this.chunkPos+this.chunk.length?this.chunkOff=e-this.chunkPos:(this.chunk="",this.chunkOff=0),this.readNext()}return this}read(e,t){if(e>=this.chunkPos&&t<=this.chunkPos+this.chunk.length)return this.chunk.slice(e-this.chunkPos,t-this.chunkPos);if(e>=this.chunk2Pos&&t<=this.chunk2Pos+this.chunk2.length)return this.chunk2.slice(e-this.chunk2Pos,t-this.chunk2Pos);if(e>=this.range.from&&t<=this.range.to)return this.input.read(e,t);let i="";for(let s of this.ranges){if(s.from>=t)break;s.to>e&&(i+=this.input.read(Math.max(s.from,e),Math.min(s.to,t)))}return i}}class xb{constructor(e,t){this.data=e,this.id=t}token(e,t){let{parser:i}=t.p;Cb(this.data,e,t,this.id,i.data,i.tokenPrecTable)}}xb.prototype.contextual=xb.prototype.fallback=xb.prototype.extend=!1,xb.prototype.fallback=xb.prototype.extend=!1;class kb{constructor(e,t={}){this.token=e,this.contextual=!!t.contextual,this.fallback=!!t.fallback,this.extend=!!t.extend}}function Cb(e,t,i,s,n,o){let r=0,a=1<<s,{dialect:l}=i.p.parser;e:for(;0!=(a&e[r]);){let i=e[r+1];for(let s=r+3;s<i;s+=2)if((e[s+1]&a)>0){let i=e[s];if(l.allows(i)&&(-1==t.token.value||t.token.value==i||Ob(i,t.token.value,n,o))){t.acceptToken(i);break}}let s=t.next,h=0,c=e[r+2];if(!(t.next<0&&c>h&&65535==e[i+3*c-3])){for(;h<c;){let n=h+c>>1,o=i+n+(n<<1),a=e[o],l=e[o+1]||65536;if(s<a)c=n;else{if(!(s>=l)){r=e[o+2],t.advance();continue e}h=n+1}}break}r=e[i+3*c-1]}}function Sb(e,t,i){for(let s,n=t;65535!=(s=e[n]);n++)if(s==i)return n-t;return-1}function Ob(e,t,i,s){let n=Sb(i,s,t);return n<0||Sb(i,s,e)<n}const Ab="undefined"!=typeof process&&process.env&&/\bparse\b/.test(process.env.LOG);let Pb=null;function Tb(e,t,i){let s=e.cursor(Pf.IncludeAnonymous);for(s.moveTo(t);;)if(!(i<0?s.childBefore(t):s.childAfter(t)))for(;;){if((i<0?s.to<t:s.from>t)&&!s.type.isError)return i<0?Math.max(0,Math.min(s.to-1,t-25)):Math.min(e.length,Math.max(s.from+1,t+25));if(i<0?s.prevSibling():s.nextSibling())break;if(!s.parent())return i<0?0:e.length}}class Mb{constructor(e,t){this.fragments=e,this.nodeSet=t,this.i=0,this.fragment=null,this.safeFrom=-1,this.safeTo=-1,this.trees=[],this.start=[],this.index=[],this.nextFragment()}nextFragment(){let e=this.fragment=this.i==this.fragments.length?null:this.fragments[this.i++];if(e){for(this.safeFrom=e.openStart?Tb(e.tree,e.from+e.offset,1)-e.offset:e.from,this.safeTo=e.openEnd?Tb(e.tree,e.to+e.offset,-1)-e.offset:e.to;this.trees.length;)this.trees.pop(),this.start.pop(),this.index.pop();this.trees.push(e.tree),this.start.push(-e.offset),this.index.push(0),this.nextStart=this.safeFrom}else this.nextStart=1e9}nodeAt(e){if(e<this.nextStart)return null;for(;this.fragment&&this.safeTo<=e;)this.nextFragment();if(!this.fragment)return null;for(;;){let t=this.trees.length-1;if(t<0)return this.nextFragment(),null;let i=this.trees[t],s=this.index[t];if(s==i.children.length){this.trees.pop(),this.start.pop(),this.index.pop();continue}let n=i.children[s],o=this.start[t]+i.positions[s];if(o>e)return this.nextStart=o,null;if(n instanceof Tf){if(o==e){if(o<this.safeFrom)return null;let e=o+n.length;if(e<=this.safeTo){let t=n.prop(yf.lookAhead);if(!t||e+t<this.fragment.to)return n}}this.index[t]++,o+n.length>=Math.max(this.safeFrom,e)&&(this.trees.push(n),this.start.push(o),this.index.push(0))}else this.index[t]++,this.nextStart=o+n.length}}}class $b{constructor(e,t){this.stream=t,this.tokens=[],this.mainToken=null,this.actions=[],this.tokens=e.tokenizers.map(e=>new _b)}getActions(e){let t=0,i=null,{parser:s}=e.p,{tokenizers:n}=s,o=s.stateSlot(e.state,3),r=e.curContext?e.curContext.hash:0,a=0;for(let s=0;s<n.length;s++){if(!(1<<s&o))continue;let l=n[s],h=this.tokens[s];if((!i||l.fallback)&&((l.contextual||h.start!=e.pos||h.mask!=o||h.context!=r)&&(this.updateCachedToken(h,l,e),h.mask=o,h.context=r),h.lookAhead>h.end+25&&(a=Math.max(h.lookAhead,a)),0!=h.value)){let s=t;if(h.extended>-1&&(t=this.addActions(e,h.extended,h.end,t)),t=this.addActions(e,h.value,h.end,t),!l.extend&&(i=h,t>s))break}}for(;this.actions.length>t;)this.actions.pop();return a&&e.setLookAhead(a),i||e.pos!=this.stream.end||(i=new _b,i.value=e.p.parser.eofTerm,i.start=i.end=e.pos,t=this.addActions(e,i.value,i.end,t)),this.mainToken=i,this.actions}getMainToken(e){if(this.mainToken)return this.mainToken;let t=new _b,{pos:i,p:s}=e;return t.start=i,t.end=Math.min(i+1,s.stream.end),t.value=i==s.stream.end?s.parser.eofTerm:0,t}updateCachedToken(e,t,i){let s=this.stream.clipPos(i.pos);if(t.token(this.stream.reset(s,e),i),e.value>-1){let{parser:t}=i.p;for(let s=0;s<t.specialized.length;s++)if(t.specialized[s]==e.value){let n=t.specializers[s](this.stream.read(e.start,e.end),i);if(n>=0&&i.p.parser.dialect.allows(n>>1)){1&n?e.extended=n>>1:e.value=n>>1;break}}}else e.value=0,e.end=this.stream.clipPos(s+1)}putAction(e,t,i,s){for(let t=0;t<s;t+=3)if(this.actions[t]==e)return s;return this.actions[s++]=e,this.actions[s++]=t,this.actions[s++]=i,s}addActions(e,t,i,s){let{state:n}=e,{parser:o}=e.p,{data:r}=o;for(let e=0;e<2;e++)for(let a=o.stateSlot(n,e?2:1);;a+=3){if(65535==r[a]){if(1!=r[a+1]){0==s&&2==r[a+1]&&(s=this.putAction(Nb(r,a+2),t,i,s));break}a=Nb(r,a+2)}r[a]==t&&(s=this.putAction(Nb(r,a+1),t,i,s))}return s}}class Ib{constructor(e,t,i,s){this.parser=e,this.input=t,this.ranges=s,this.recovering=0,this.nextStackID=9812,this.minStackPos=0,this.reused=[],this.stoppedAt=null,this.lastBigReductionStart=-1,this.lastBigReductionSize=0,this.bigReductionCount=0,this.stream=new yb(t,s),this.tokens=new $b(e,this.stream),this.topTerm=e.top[1];let{from:n}=s[0];this.stacks=[pb.start(this,e.top[0],n)],this.fragments=i.length&&this.stream.end-n>4*e.bufferLength?new Mb(i,e.nodeSet):null}get parsedPos(){return this.minStackPos}advance(){let e,t,i=this.stacks,s=this.minStackPos,n=this.stacks=[];if(this.bigReductionCount>300&&1==i.length){let[e]=i;for(;e.forceReduce()&&e.stack.length&&e.stack[e.stack.length-2]>=this.lastBigReductionStart;);this.bigReductionCount=this.lastBigReductionSize=0}for(let o=0;o<i.length;o++){let r=i[o];for(;;){if(this.tokens.mainToken=null,r.pos>s)n.push(r);else{if(this.advanceStack(r,n,i))continue;{e||(e=[],t=[]),e.push(r);let i=this.tokens.getMainToken(r);t.push(i.value,i.end)}}break}}if(!n.length){let t=e&&zb(e);if(t)return this.stackToTree(t);if(this.parser.strict)throw new SyntaxError("No parse at "+s);this.recovering||(this.recovering=5)}if(this.recovering&&e){let i=null!=this.stoppedAt&&e[0].pos>this.stoppedAt?e[0]:this.runRecovery(e,t,n);if(i)return this.stackToTree(i.forceAll())}if(this.recovering){let e=1==this.recovering?1:3*this.recovering;if(n.length>e)for(n.sort((e,t)=>t.score-e.score);n.length>e;)n.pop();n.some(e=>e.reducePos>s)&&this.recovering--}else if(n.length>1){e:for(let e=0;e<n.length-1;e++){let t=n[e];for(let i=e+1;i<n.length;i++){let s=n[i];if(t.sameState(s)||t.buffer.length>500&&s.buffer.length>500){if(!((t.score-s.score||t.buffer.length-s.buffer.length)>0)){n.splice(e--,1);continue e}n.splice(i--,1)}}}n.length>12&&(n.sort((e,t)=>t.score-e.score),n.splice(12,n.length-12))}this.minStackPos=n[0].pos;for(let e=1;e<n.length;e++)n[e].pos<this.minStackPos&&(this.minStackPos=n[e].pos);return null}stopAt(e){if(null!=this.stoppedAt&&this.stoppedAt<e)throw new RangeError("Can't move stoppedAt forward");this.stoppedAt=e}advanceStack(e,t,i){let s=e.pos,{parser:n}=this;Ab&&this.stackID(e);if(null!=this.stoppedAt&&s>this.stoppedAt)return e.forceReduce()?e:null;if(this.fragments){let t=e.curContext&&e.curContext.tracker.strict,i=t?e.curContext.hash:0;for(let o=this.fragments.nodeAt(s);o;){let s=this.parser.nodeSet.types[o.type.id]==o.type?n.getGoto(e.state,o.type.id):-1;if(s>-1&&o.length&&(!t||(o.prop(yf.contextHash)||0)==i))return e.useNode(o,s),!0;if(!(o instanceof Tf)||0==o.children.length||o.positions[0]>0)break;let r=o.children[0];if(!(r instanceof Tf&&0==o.positions[0]))break;o=r}}let o=n.stateSlot(e.state,4);if(o>0)return e.reduce(o),!0;if(e.stack.length>=8400)for(;e.stack.length>6e3&&e.forceReduce(););let r=this.tokens.getActions(e);for(let n=0;n<r.length;){let o=r[n++],a=r[n++],l=r[n++],h=n==r.length||!i,c=h?e:e.split(),d=this.tokens.mainToken;if(c.apply(o,a,d?d.start:c.pos,l),h)return!0;c.pos>s?t.push(c):i.push(c)}return!1}advanceFully(e,t){let i=e.pos;for(;;){if(!this.advanceStack(e,null,null))return!1;if(e.pos>i)return Rb(e,t),!0}}runRecovery(e,t,i){let s=null,n=!1;for(let o=0;o<e.length;o++){let r=e[o],a=t[o<<1],l=t[1+(o<<1)],h=Ab?this.stackID(r)+" -> ":"";if(r.deadEnd){if(n)continue;if(n=!0,r.restart(),this.advanceFully(r,i))continue}let c=r.split(),d=h;for(let e=0;e<10&&c.forceReduce();e++){if(this.advanceFully(c,i))break;Ab&&(d=this.stackID(c)+" -> ")}for(let e of r.recoverByInsert(a))this.advanceFully(e,i);this.stream.end>r.pos?(l==r.pos&&(l++,a=0),r.recoverByDelete(a,l),Rb(r,i)):(!s||s.score<c.score)&&(s=c)}return s}stackToTree(e){return e.close(),Tf.build({buffer:vb.create(e),nodeSet:this.parser.nodeSet,topID:this.topTerm,maxBufferLength:this.parser.bufferLength,reused:this.reused,start:this.ranges[0].from,length:e.pos-this.ranges[0].from,minRepeatType:this.parser.minRepeatTerm})}stackID(e){let t=(Pb||(Pb=new WeakMap)).get(e);return t||Pb.set(e,t=String.fromCodePoint(this.nextStackID++)),t+e}}function Rb(e,t){for(let i=0;i<t.length;i++){let s=t[i];if(s.pos==e.pos&&s.sameState(e))return void(t[i].score<e.score&&(t[i]=e))}t.push(e)}class Eb{constructor(e,t,i){this.source=e,this.flags=t,this.disabled=i}allows(e){return!this.disabled||0==this.disabled[e]}}const Db=e=>e;class Lb{constructor(e){this.start=e.start,this.shift=e.shift||Db,this.reduce=e.reduce||Db,this.reuse=e.reuse||Db,this.hash=e.hash||(()=>0),this.strict=!1!==e.strict}}class Bb extends Xf{constructor(e){if(super(),this.wrappers=[],14!=e.version)throw new RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`);let t=e.nodeNames.split(" ");this.minRepeatTerm=t.length;for(let i=0;i<e.repeatNodeCount;i++)t.push("");let i=Object.keys(e.topRules).map(t=>e.topRules[t][1]),s=[];for(let e=0;e<t.length;e++)s.push([]);function n(e,t,i){s[e].push([t,t.deserialize(String(i))])}if(e.nodeProps)for(let t of e.nodeProps){let e=t[0];"string"==typeof e&&(e=yf[e]);for(let i=1;i<t.length;){let s=t[i++];if(s>=0)n(s,e,t[i++]);else{let o=t[i+-s];for(let r=-s;r>0;r--)n(t[i++],e,o);i++}}}this.nodeSet=new Sf(t.map((t,n)=>Cf.define({name:n>=this.minRepeatTerm?void 0:t,id:n,props:s[n],top:i.indexOf(n)>-1,error:0==n,skipped:e.skippedNodes&&e.skippedNodes.indexOf(n)>-1}))),e.propSources&&(this.nodeSet=this.nodeSet.extend(...e.propSources)),this.strict=!1,this.bufferLength=bf;let o=bb(e.tokenData);this.context=e.context,this.specializerSpecs=e.specialized||[],this.specialized=new Uint16Array(this.specializerSpecs.length);for(let e=0;e<this.specializerSpecs.length;e++)this.specialized[e]=this.specializerSpecs[e].term;this.specializers=this.specializerSpecs.map(Hb),this.states=bb(e.states,Uint32Array),this.data=bb(e.stateData),this.goto=bb(e.goto),this.maxTerm=e.maxTerm,this.tokenizers=e.tokenizers.map(e=>"number"==typeof e?new xb(o,e):e),this.topRules=e.topRules,this.dialects=e.dialects||{},this.dynamicPrecedences=e.dynamicPrecedences||null,this.tokenPrecTable=e.tokenPrec,this.termNames=e.termNames||null,this.maxNode=this.nodeSet.types.length-1,this.dialect=this.parseDialect(),this.top=this.topRules[Object.keys(this.topRules)[0]]}createParse(e,t,i){let s=new Ib(this,e,t,i);for(let n of this.wrappers)s=n(s,e,t,i);return s}getGoto(e,t,i=!1){let s=this.goto;if(t>=s[0])return-1;for(let n=s[t+1];;){let t=s[n++],o=1&t,r=s[n++];if(o&&i)return r;for(let i=n+(t>>1);n<i;n++)if(s[n]==e)return r;if(o)return-1}}hasAction(e,t){let i=this.data;for(let s=0;s<2;s++)for(let n,o=this.stateSlot(e,s?2:1);;o+=3){if(65535==(n=i[o])){if(1!=i[o+1]){if(2==i[o+1])return Nb(i,o+2);break}n=i[o=Nb(i,o+2)]}if(n==t||0==n)return Nb(i,o+1)}return 0}stateSlot(e,t){return this.states[6*e+t]}stateFlag(e,t){return(this.stateSlot(e,0)&t)>0}validAction(e,t){return!!this.allActions(e,e=>e==t||null)}allActions(e,t){let i=this.stateSlot(e,4),s=i?t(i):void 0;for(let i=this.stateSlot(e,1);null==s;i+=3){if(65535==this.data[i]){if(1!=this.data[i+1])break;i=Nb(this.data,i+2)}s=t(Nb(this.data,i+1))}return s}nextStates(e){let t=[];for(let i=this.stateSlot(e,1);;i+=3){if(65535==this.data[i]){if(1!=this.data[i+1])break;i=Nb(this.data,i+2)}if(!(1&this.data[i+2])){let e=this.data[i+1];t.some((t,i)=>1&i&&t==e)||t.push(this.data[i],e)}}return t}configure(e){let t=Object.assign(Object.create(Bb.prototype),this);if(e.props&&(t.nodeSet=this.nodeSet.extend(...e.props)),e.top){let i=this.topRules[e.top];if(!i)throw new RangeError(`Invalid top rule name ${e.top}`);t.top=i}return e.tokenizers&&(t.tokenizers=this.tokenizers.map(t=>{let i=e.tokenizers.find(e=>e.from==t);return i?i.to:t})),e.specializers&&(t.specializers=this.specializers.slice(),t.specializerSpecs=this.specializerSpecs.map((i,s)=>{let n=e.specializers.find(e=>e.from==i.external);if(!n)return i;let o=Object.assign(Object.assign({},i),{external:n.to});return t.specializers[s]=Hb(o),o})),e.contextTracker&&(t.context=e.contextTracker),e.dialect&&(t.dialect=this.parseDialect(e.dialect)),null!=e.strict&&(t.strict=e.strict),e.wrap&&(t.wrappers=t.wrappers.concat(e.wrap)),null!=e.bufferLength&&(t.bufferLength=e.bufferLength),t}hasWrappers(){return this.wrappers.length>0}getName(e){return this.termNames?this.termNames[e]:String(e<=this.maxNode&&this.nodeSet.types[e].name||e)}get eofTerm(){return this.maxNode+1}get topNode(){return this.nodeSet.types[this.top[1]]}dynamicPrecedence(e){let t=this.dynamicPrecedences;return null==t?0:t[e]||0}parseDialect(e){let t=Object.keys(this.dialects),i=t.map(()=>!1);if(e)for(let s of e.split(" ")){let e=t.indexOf(s);e>=0&&(i[e]=!0)}let s=null;for(let e=0;e<t.length;e++)if(!i[e])for(let i,n=this.dialects[t[e]];65535!=(i=this.data[n++]);)(s||(s=new Uint8Array(this.maxTerm+1)))[i]=1;return new Eb(e,i,s)}static deserialize(e){return new Bb(e)}}function Nb(e,t){return e[t]|e[t+1]<<16}function zb(e){let t=null;for(let i of e){let e=i.p.stoppedAt;(i.pos==i.p.stream.end||null!=e&&i.pos>e)&&i.p.parser.stateFlag(i.state,2)&&(!t||t.score<i.score)&&(t=i)}return t}function Hb(e){if(e.external){let t=e.extend?1:0;return(i,s)=>e.external(i,s)<<1|t}return e.get}const Vb=63,Gb=64,Ub=1,Wb=2,jb=3,Fb=4,qb=5,Qb=6,Yb=7,Xb=65,Kb=66,Zb=8,Jb=9,e_=10,t_=11,i_=12,s_=13,n_=19,o_=20,r_=29,a_=33,l_=34,h_=47,c_=0,d_=1,u_=2,f_=3,p_=4;class g_{constructor(e,t,i){this.parent=e,this.depth=t,this.type=i,this.hash=(e?e.hash+e.hash<<8:0)+t+(t<<4)+i}}function m_(e,t){for(let i=0,s=t-e.pos-1;;s--,i++){let t=e.peek(s);if(b_(t)||-1==t)return i}}function v_(e){return 32==e||9==e}function b_(e){return 10==e||13==e}function __(e){return v_(e)||b_(e)}function w_(e){return e<0||__(e)}g_.top=new g_(null,-1,0);const y_=new Lb({start:g_.top,reduce:(e,t)=>3!=e.type||t!=o_&&t!=l_?e:e.parent,shift(e,t,i,s){if(3==t)return new g_(e,m_(s,s.pos),1);if(t==Xb||5==t)return new g_(e,m_(s,s.pos),2);if(t==Vb)return e.parent;if(t==n_||t==a_)return new g_(e,0,3);if(t==s_&&4==e.type)return e.parent;if(t==h_){let t=/[1-9]/.exec(s.read(s.pos,i.pos));if(t)return new g_(e,e.depth+ +t[0],4)}return e},hash:e=>e.hash});function x_(e,t,i=0){return e.peek(i)==t&&e.peek(i+1)==t&&e.peek(i+2)==t&&w_(e.peek(i+3))}const k_=new kb((e,t)=>{if(-1==e.next&&t.canShift(Gb))return e.acceptToken(Gb);let i=e.peek(-1);if((b_(i)||i<0)&&3!=t.context.type){if(x_(e,45)){if(!t.canShift(Vb))return e.acceptToken(1,3);e.acceptToken(Vb)}if(x_(e,46)){if(!t.canShift(Vb))return e.acceptToken(2,3);e.acceptToken(Vb)}let i=0;for(;32==e.next;)i++,e.advance();!(i<t.context.depth)&&(i!=t.context.depth||1!=t.context.type||45==e.next&&w_(e.peek(1)))||-1==e.next||b_(e.next)||35==e.next||e.acceptToken(Vb,-i)}},{contextual:!0}),C_=new kb((e,t)=>{if(3!=t.context.type)if(45==e.next)e.advance(),w_(e.next)&&e.acceptToken(1==t.context.type&&t.context.depth==m_(e,e.pos-1)?4:3);else if(63==e.next)e.advance(),w_(e.next)&&e.acceptToken(2==t.context.type&&t.context.depth==m_(e,e.pos-1)?6:5);else{let i=e.pos;for(;;)if(v_(e.next)){if(e.pos==i)return;e.advance()}else if(33==e.next)P_(e);else{if(38!=e.next){if(42==e.next){T_(e);break}if(39==e.next||34==e.next){if(M_(e,!0))break;return}if(91==e.next||123==e.next){if(!$_(e))return;break}D_(e,!0,!1,0);break}T_(e)}for(;v_(e.next);)e.advance();if(58==e.next){if(e.pos==i&&t.canShift(r_))return;w_(e.peek(1))&&e.acceptTokenTo(2==t.context.type&&t.context.depth==m_(e,i)?Kb:Xb,i)}}else 63==e.next&&(e.advance(),w_(e.next)&&e.acceptToken(7))},{contextual:!0});function S_(e){return e>32&&e<127&&34!=e&&37!=e&&44!=e&&60!=e&&62!=e&&92!=e&&94!=e&&96!=e&&123!=e&&124!=e&&125!=e}function O_(e){return e>=48&&e<=57||e>=97&&e<=102||e>=65&&e<=70}function A_(e,t){return 37==e.next?(e.advance(),O_(e.next)&&e.advance(),O_(e.next)&&e.advance(),!0):!!(S_(e.next)||t&&44==e.next)&&(e.advance(),!0)}function P_(e){if(e.advance(),60==e.next){for(e.advance();;)if(!A_(e,!0)){62==e.next&&e.advance();break}}else for(;A_(e,!1););}function T_(e){for(e.advance();!w_(e.next)&&"f"!=R_(e.next);)e.advance()}function M_(e,t){let i=e.next,s=!1,n=e.pos;for(e.advance();;){let o=e.next;if(o<0)break;if(e.advance(),o==i){if(39!=o)break;if(39!=e.next)break;e.advance()}else if(92==o&&34==i)e.next>=0&&e.advance();else if(b_(o)){if(t)return!1;s=!0}else if(t&&e.pos>=n+1024)return!1}return!s}function $_(e){for(let t=[],i=e.pos+1024;;)if(91==e.next||123==e.next)t.push(e.next),e.advance();else if(39==e.next||34==e.next){if(!M_(e,!0))return!1}else if(93==e.next||125==e.next){if(t[t.length-1]!=e.next-2)return!1;if(t.pop(),e.advance(),!t.length)return!0}else{if(e.next<0||e.pos>i||b_(e.next))return!1;e.advance()}}const I_="iiisiiissisfissssssssssssisssiiissssssssssssssssssssssssssfsfssissssssssssssssssssssssssssfif";function R_(e){return e<33?"u":e>125?"s":I_[e-33]}function E_(e,t){let i=R_(e);return"u"!=i&&!(t&&"f"==i)}function D_(e,t,i,s){if("s"!=R_(e.next)&&(63!=e.next&&58!=e.next&&45!=e.next||!E_(e.peek(1),i)))return!1;e.advance();let n=e.pos;for(;;){let o=e.next,r=0,a=s+1;for(;__(o);){if(b_(o)){if(t)return!1;a=0}else a++;o=e.peek(++r)}if(!(o>=0&&(58==o?E_(e.peek(r+1),i):35==o?32!=e.peek(r-1):E_(o,i)))||!i&&a<=s||0==a&&!i&&(x_(e,45,r)||x_(e,46,r)))break;if(t&&"f"==R_(o))return!1;for(let t=r;t>=0;t--)e.advance();if(t&&e.pos>n+1024)return!1}return!0}const L_=new kb((e,t)=>{if(33==e.next)P_(e),e.acceptToken(i_);else if(38==e.next||42==e.next){let t=38==e.next?e_:t_;T_(e),e.acceptToken(t)}else 39==e.next||34==e.next?(M_(e,!1),e.acceptToken(9)):D_(e,!1,3==t.context.type,t.context.depth)&&e.acceptToken(8)}),B_=new kb((e,t)=>{let i=4==t.context.type?t.context.depth:-1,s=e.pos;e:for(;;){let n=0,o=e.next;for(;32==o;)o=e.peek(++n);if(!n&&(x_(e,45,n)||x_(e,46,n)))break;if(!b_(o)&&(i<0&&(i=Math.max(t.context.depth+1,n)),n<i))break;for(;;){if(e.next<0)break e;let t=b_(e.next);if(e.advance(),t)continue e;s=e.pos}}e.acceptTokenTo(s_,s)}),N_=np({DirectiveName:Ap.keyword,DirectiveContent:Ap.attributeValue,"DirectiveEnd DocEnd":Ap.meta,QuotedLiteral:Ap.string,BlockLiteralHeader:Ap.special(Ap.string),BlockLiteralContent:Ap.content,Literal:Ap.content,"Key/Literal Key/QuotedLiteral":Ap.definition(Ap.propertyName),"Anchor Alias":Ap.labelName,Tag:Ap.typeName,Comment:Ap.lineComment,": , -":Ap.separator,"?":Ap.punctuation,"[ ]":Ap.squareBracket,"{ }":Ap.brace}),z_=Bb.deserialize({version:14,states:"5lQ!ZQgOOO#PQfO'#CpO#uQfO'#DOOOQR'#Dv'#DvO$qQgO'#DRO%gQdO'#DUO%nQgO'#DUO&ROaO'#D[OOQR'#Du'#DuO&{QgO'#D^O'rQgO'#D`OOQR'#Dt'#DtO(iOqO'#DbOOQP'#Dj'#DjO(zQaO'#CmO)YQgO'#CmOOQP'#Cm'#CmQ)jQaOOQ)uQgOOQ]QgOOO*PQdO'#CrO*nQdO'#CtOOQO'#Dw'#DwO+]Q`O'#CxO+hQdO'#CwO+rQ`O'#CwOOQO'#Cv'#CvO+wQdO'#CvOOQO'#Cq'#CqO,UQ`O,59[O,^QfO,59[OOQR,59[,59[OOQO'#Cx'#CxO,eQ`O'#DPO,pQdO'#DPOOQO'#Dx'#DxO,zQdO'#DxO-XQ`O,59jO-aQfO,59jOOQR,59j,59jOOQR'#DS'#DSO-hQcO,59mO-sQgO'#DVO.TQ`O'#DVO.YQcO,59pOOQR'#DX'#DXO#|QfO'#DWO.hQcO'#DWOOQR,59v,59vO.yOWO,59vO/OOaO,59vO/WOaO,59vO/cQgO'#D_OOQR,59x,59xO0VQgO'#DaOOQR,59z,59zOOQP,59|,59|O0yOaO,59|O1ROaO,59|O1aOqO,59|OOQP-E7h-E7hO1oQgO,59XOOQP,59X,59XO2PQaO'#DeO2_QgO'#DeO2oQgO'#DkOOQP'#Dk'#DkQ)jQaOOO3PQdO'#CsOOQO,59^,59^O3kQdO'#CuOOQO,59`,59`OOQO,59c,59cO4VQdO,59cO4aQdO'#CzO4kQ`O'#CzOOQO,59b,59bOOQU,5:Q,5:QOOQR1G.v1G.vO4pQ`O1G.vOOQU-E7d-E7dO4xQdO,59kOOQO,59k,59kO5SQdO'#DQO5^Q`O'#DQOOQO,5:d,5:dOOQU,5:R,5:ROOQR1G/U1G/UO5cQ`O1G/UOOQU-E7e-E7eO5kQgO'#DhO5xQcO1G/XOOQR1G/X1G/XOOQR,59q,59qO6TQgO,59qO6eQdO'#DiO6lQgO'#DiO7PQcO1G/[OOQR1G/[1G/[OOQR,59r,59rO#|QfO,59rOOQR1G/b1G/bO7_OWO1G/bO7dOaO1G/bOOQR,59y,59yOOQR,59{,59{OOQP1G/h1G/hO7lOaO1G/hO7tOaO1G/hO8POaO1G/hOOQP1G.s1G.sO8_QgO,5:POOQP,5:P,5:POOQP,5:V,5:VOOQP-E7i-E7iOOQO,59_,59_OOQO,59a,59aOOQO1G.}1G.}OOQO,59f,59fO8oQdO,59fOOQR7+$b7+$bP,XQ`O'#DfOOQO1G/V1G/VOOQO,59l,59lO8yQdO,59lOOQR7+$p7+$pP9TQ`O'#DgOOQR'#DT'#DTOOQR,5:S,5:SOOQR-E7f-E7fOOQR7+$s7+$sOOQR1G/]1G/]O9YQgO'#DYO9jQ`O'#DYOOQR,5:T,5:TO#|QfO'#DZO9oQcO'#DZOOQR-E7g-E7gOOQR7+$v7+$vOOQR1G/^1G/^OOQR7+$|7+$|O:QOWO7+$|OOQP7+%S7+%SO:VOaO7+%SO:_OaO7+%SOOQP1G/k1G/kOOQO1G/Q1G/QOOQO1G/W1G/WOOQR,59t,59tO:jQgO,59tOOQR,59u,59uO#|QfO,59uOOQR<<Hh<<HhOOQP<<Hn<<HnO:zOaO<<HnOOQR1G/`1G/`OOQR1G/a1G/aOOQPAN>YAN>Y",stateData:";S~O!fOS!gOS^OS~OP_OQbORSOTUOWROXROYYOZZO[XOcPOqQO!PVO!V[O!cTO~O`cO~P]OVkOWROXROYeOZfO[dOcPOmhOqQO~OboO~P!bOVtOWROXROYeOZfO[dOcPOmrOqQO~OpwO~P#WORSOTUOWROXROYYOZZO[XOcPOqQO!PVO!cTO~OSvP!avP!bvP~P#|OWROXROYeOZfO[dOcPOqQO~OmzO~P%OOm!OOUzP!azP!bzP!dzP~P#|O^!SO!b!QO!f!TO!g!RO~ORSOTUOWROXROcPOqQO!PVO!cTO~OY!UOP!QXQ!QX!V!QX!`!QXS!QX!a!QX!b!QXU!QXm!QX!d!QX~P&aO[!WOP!SXQ!SX!V!SX!`!SXS!SX!a!SX!b!SXU!SXm!SX!d!SX~P&aO^!ZO!W![O!b!YO!f!]O!g!YO~OP!_O!V[OQaX!`aX~OPaXQaX!VaX!`aX~P#|OP!bOQ!cO!V[O~OP_O!V[O~P#|OWROXROY!fOcPOqQObfXmfXofXpfX~OWROXRO[!hOcPOqQObhXmhXohXphX~ObeXmlXoeX~ObkXokX~P%OOm!kO~Om!lObnPonP~P%OOb!pOo!oO~Ob!pO~P!bOm!sOosXpsX~OosXpsX~P%OOm!uOotPptP~P%OOo!xOp!yO~Op!yO~P#WOS!|O!a#OO!b#OO~OUyX!ayX!byX!dyX~P#|Om#QO~OU#SO!a#UO!b#UO!d#RO~Om#WOUzX!azX!bzX!dzX~O]#XO~O!b#XO!g#YO~O^#ZO!b#XO!g#YO~OP!RXQ!RX!V!RX!`!RXS!RX!a!RX!b!RXU!RXm!RX!d!RX~P&aOP!TXQ!TX!V!TX!`!TXS!TX!a!TX!b!TXU!TXm!TX!d!TX~P&aO!b#^O!g#^O~O^#_O!b#^O!f#`O!g#^O~O^#_O!W#aO!b#^O!g#^O~OPaaQaa!Vaa!`aa~P#|OP#cO!V[OQ!XX!`!XX~OP!XXQ!XX!V!XX!`!XX~P#|OP_O!V[OQ!_X!`!_X~P#|OWROXROcPOqQObgXmgXogXpgX~OWROXROcPOqQObiXmiXoiXpiX~Obkaoka~P%OObnXonX~P%OOm#kO~Ob#lOo!oO~Oosapsa~P%OOotXptX~P%OOm#pO~Oo!xOp#qO~OSwP!awP!bwP~P#|OS!|O!a#vO!b#vO~OUya!aya!bya!dya~P#|Om#xO~P%OOm#{OU}P!a}P!b}P!d}P~P#|OU#SO!a$OO!b$OO!d#RO~O]$QO~O!b$QO!g$RO~O!b$SO!g$SO~O^$TO!b$SO!g$SO~O^$TO!b$SO!f$UO!g$SO~OP!XaQ!Xa!V!Xa!`!Xa~P#|Obnaona~P%OOotapta~P%OOo!xO~OU|X!a|X!b|X!d|X~P#|Om$ZO~Om$]OU}X!a}X!b}X!d}X~O]$^O~O!b$_O!g$_O~O^$`O!b$_O!g$_O~OU|a!a|a!b|a!d|a~P#|O!b$cO!g$cO~O",goto:",]!mPPPPPPPPPPPPPPPPP!nPP!v#v#|$`#|$c$f$j$nP%VPPP!v%Y%^%a%{&O%a&R&U&X&_&b%aP&e&{&e'O'RPP']'a'g'm's'y(XPPPPPPPP(_)e*X+c,VUaObcR#e!c!{ROPQSTUXY_bcdehknrtvz!O!U!W!_!b!c!f!h!k!l!s!u!|#Q#R#S#W#c#k#p#x#{$Z$]QmPR!qnqfPQThknrtv!k!l!s!u#R#k#pR!gdR!ieTlPnTjPnSiPnSqQvQ{TQ!mkQ!trQ!vtR#y#RR!nkTsQvR!wt!RWOSUXY_bcz!O!U!W!_!b!c!|#Q#S#W#c#x#{$Z$]RySR#t!|R|TR|UQ!PUR#|#SR#z#RR#z#SyZOSU_bcz!O!_!b!c!|#Q#S#W#c#x#{$Z$]R!VXR!XYa]O^abc!a!c!eT!da!eQnPR!rnQvQR!{vQ!}yR#u!}Q#T|R#}#TW^Obc!cS!^^!aT!aa!eQ!eaR#f!eW`Obc!cQxSS}U#SQ!`_Q#PzQ#V!OQ#b!_Q#d!bQ#s!|Q#w#QQ$P#WQ$V#cQ$Y#xQ$[#{Q$a$ZR$b$]xZOSU_bcz!O!_!b!c!|#Q#S#W#c#x#{$Z$]Q!VXQ!XYQ#[!UR#]!W!QWOSUXY_bcz!O!U!W!_!b!c!|#Q#S#W#c#x#{$Z$]pfPQThknrtv!k!l!s!u#R#k#pQ!gdQ!ieQ#g!fR#h!hSgPn^pQTkrtv#RQ!jhQ#i!kQ#j!lQ#n!sQ#o!uQ$W#kR$X#pQuQR!zv",nodeNames:"⚠ DirectiveEnd DocEnd - - ? ? ? Literal QuotedLiteral Anchor Alias Tag BlockLiteralContent Comment Stream BOM Document ] [ FlowSequence Item Tagged Anchored Anchored Tagged FlowMapping Pair Key : Pair , } { FlowMapping Pair Pair BlockSequence Item Item BlockMapping Pair Pair Key Pair Pair BlockLiteral BlockLiteralHeader Tagged Anchored Anchored Tagged Directive DirectiveName DirectiveContent Document",maxTerm:74,context:y_,nodeProps:[["isolate",-3,8,9,14,""],["openedBy",18,"[",32,"{"],["closedBy",19,"]",33,"}"]],propSources:[N_],skippedNodes:[0],repeatNodeCount:6,tokenData:"-Y~RnOX#PXY$QYZ$]Z]#P]^$]^p#Ppq$Qqs#Pst$btu#Puv$yv|#P|}&e}![#P![!]'O!]!`#P!`!a'i!a!}#P!}#O*g#O#P#P#P#Q+Q#Q#o#P#o#p+k#p#q'i#q#r,U#r;'S#P;'S;=`#z<%l?HT#P?HT?HU,o?HUO#PQ#UU!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PQ#kTOY#PZs#Pt;'S#P;'S;=`#z<%lO#PQ#}P;=`<%l#P~$VQ!f~XY$Qpq$Q~$bO!g~~$gS^~OY$bZ;'S$b;'S;=`$s<%lO$b~$vP;=`<%l$bR%OX!WQOX%kXY#PZ]%k]^#P^p%kpq#hq;'S%k;'S;=`&_<%lO%kR%rX!WQ!VPOX%kXY#PZ]%k]^#P^p%kpq#hq;'S%k;'S;=`&_<%lO%kR&bP;=`<%l%kR&lUoP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR'VUmP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR'p[!PP!WQOY#PZp#Ppq#hq{#P{|(f|}#P}!O(f!O!R#P!R![)p![;'S#P;'S;=`#z<%lO#PR(mW!PP!WQOY#PZp#Ppq#hq!R#P!R![)V![;'S#P;'S;=`#z<%lO#PR)^U!PP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR)wY!PP!WQOY#PZp#Ppq#hq{#P{|)V|}#P}!O)V!O;'S#P;'S;=`#z<%lO#PR*nUcP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR+XUbP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR+rUqP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR,]UpP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR,vU`P!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#P",tokenizers:[k_,C_,L_,B_,0,1],topRules:{Stream:[0,15]},tokenPrec:0}),H_=Ep.define({name:"yaml",parser:z_.configure({props:[Zp.add({Stream:e=>{for(let t=e.node.resolve(e.pos,-1);t&&t.to>=e.pos;t=t.parent){if("BlockLiteralContent"==t.name&&t.from<t.to)return e.baseIndentFor(t);if("BlockLiteral"==t.name)return e.baseIndentFor(t)+e.unit;if("BlockSequence"==t.name||"BlockMapping"==t.name)return e.column(t.firstChild.from,1);if("QuotedLiteral"==t.name)return null;if("Literal"==t.name){let i=e.column(t.from,1);if(i==e.lineIndent(t.from,1))return i;if(t.to>e.pos)return null}}return null},FlowMapping:ag({closing:"}"}),FlowSequence:ag({closing:"]"})}),hg.add({"FlowMapping FlowSequence":cg,"Item Pair BlockLiteral":(e,t)=>({from:t.doc.lineAt(e.from).to,to:e.to})})]}),languageData:{commentTokens:{line:"#"},indentOnInput:/^\s*[\]\}]$/}});function V_(){return new jp(H_)}class G_{constructor(e,t,i){this.from=e,this.to=t,this.diagnostic=i}}class U_{constructor(e,t,i){this.diagnostics=e,this.panel=t,this.selected=i}static init(e,t,i){let s=i.facet(iw).markerFilter;s&&(e=s(e,i));let n=e.slice().sort((e,t)=>e.from-t.from||e.to-t.to),o=new Sr,r=[],a=0,l=i.doc.iter(),h=0,c=i.doc.length;for(let e=0;;){let t,i,s=e==n.length?null:n[e];if(!s&&!r.length)break;if(r.length)t=a,i=r.reduce((e,t)=>Math.min(e,t.to),s&&s.from>t?s.from:1e8);else{if(t=s.from,t>c)break;i=s.to,r.push(s),e++}for(;e<n.length;){let s=n[e];if(s.from!=t||!(s.to>s.from||s.to==t)){i=Math.min(s.from,i);break}r.push(s),e++,i=Math.min(s.to,i)}i=Math.min(i,c);let d=!1;if(r.some(e=>e.from==t&&(e.to==i||i==c))&&(d=t==i,!d&&i-t<10)){let e=t-(h+l.value.length);e>0&&(l.next(e),h=t);for(let e=t;;){if(e>=i){d=!0;break}if(!l.lineBreak&&h+l.value.length>e)break;e=h+l.value.length,h+=l.value.length,l.next()}}let u=fw(r);if(d)o.add(t,t,wa.widget({widget:new rw(u),diagnostics:r.slice()}));else{let e=r.reduce((e,t)=>t.markClass?e+" "+t.markClass:e,"");o.add(t,i,wa.mark({class:"cm-lintRange cm-lintRange-"+u+e,diagnostics:r.slice(),inclusiveEnd:r.some(e=>e.to>i)}))}if(a=i,a==c)break;for(let e=0;e<r.length;e++)r[e].to<=a&&r.splice(e--,1)}let d=o.finish();return new U_(d,t,W_(d))}}function W_(e,t=null,i=0){let s=null;return e.between(i,1e9,(e,i,{spec:n})=>{if(!(t&&n.diagnostics.indexOf(t)<0))if(s){if(n.diagnostics.indexOf(s.diagnostic)<0)return!1;s=new G_(s.from,i,s.diagnostic)}else s=new G_(e,i,t||n.diagnostics[0])}),s}function j_(e,t){let i=t.pos,s=t.end||i,n=e.state.facet(iw).hideOn(e,i,s);if(null!=n)return n;let o=e.startState.doc.lineAt(t.pos);return!(!e.effects.some(e=>e.is(Q_))&&!e.changes.touchesRange(o.from,Math.max(o.to,s)))}function F_(e,t){return e.field(K_,!1)?t:t.concat(tr.appendConfig.of(Cw))}function q_(e,t){return{effects:F_(e,[Q_.of(t)])}}const Q_=tr.define(),Y_=tr.define(),X_=tr.define(),K_=Eo.define({create:()=>new U_(wa.none,null,null),update(e,t){if(t.docChanged&&e.diagnostics.size){let i=e.diagnostics.map(t.changes),s=null,n=e.panel;if(e.selected){let n=t.changes.mapPos(e.selected.from,1);s=W_(i,e.selected.diagnostic,n)||W_(i,null,n)}!i.size&&n&&t.state.facet(iw).autoPanel&&(n=null),e=new U_(i,n,s)}for(let i of t.effects)if(i.is(Q_)){let s=t.state.facet(iw).autoPanel?i.value.length?lw.open:null:e.panel;e=U_.init(i.value,s,t.state)}else i.is(Y_)?e=new U_(e.diagnostics,i.value?lw.open:null,e.selected):i.is(X_)&&(e=new U_(e.diagnostics,e.panel,i.value));return e},provide:e=>[Gu.from(e,e=>e.panel),Jd.decorations.from(e,e=>e.diagnostics)]}),Z_=wa.mark({class:"cm-lintRange cm-lintRange-active"});function J_(e,t,i){let s,{diagnostics:n}=e.state.field(K_),o=-1,r=-1;n.between(t-(i<0?1:0),t+(i>0?1:0),(e,n,{spec:a})=>{if(t>=e&&t<=n&&(e==n||(t>e||i>0)&&(t<n||i<0)))return s=a.diagnostics,o=e,r=n,!1});let a=e.state.facet(iw).tooltipFilter;return s&&a&&(s=a(s,e.state)),s?{pos:o,end:r,above:!0,create:()=>({dom:ew(e,s)})}:null}function ew(e,t){return Zr("ul",{class:"cm-tooltip-lint"},t.map(t=>ow(e,t,!1)))}const tw=e=>{let t=e.state.field(K_,!1);return!(!t||!t.panel)&&(e.dispatch({effects:Y_.of(!1)}),!0)},iw=Ao.define({combine:e=>({sources:e.map(e=>e.source).filter(e=>null!=e),...vr(e.map(e=>e.config),{delay:750,markerFilter:null,tooltipFilter:null,needsRefresh:null,hideOn:()=>null},{delay:Math.max,markerFilter:sw,tooltipFilter:sw,needsRefresh:(e,t)=>e?t?i=>e(i)||t(i):e:t,hideOn:(e,t)=>e?t?(i,s,n)=>e(i,s,n)||t(i,s,n):e:t,autoPanel:(e,t)=>e||t})})});function sw(e,t){return e?t?(i,s)=>t(e(i,s),s):e:t}function nw(e){let t=[];if(e)e:for(let{name:i}of e){for(let e=0;e<i.length;e++){let s=i[e];if(/[a-zA-Z]/.test(s)&&!t.some(e=>e.toLowerCase()==s.toLowerCase())){t.push(s);continue e}}t.push("")}return t}function ow(e,t,i){var s;let n=i?nw(t.actions):[];return Zr("li",{class:"cm-diagnostic cm-diagnostic-"+t.severity},Zr("span",{class:"cm-diagnosticText"},t.renderMessage?t.renderMessage(e):t.message),null===(s=t.actions)||void 0===s?void 0:s.map((i,s)=>{let o=!1,r=s=>{if(s.preventDefault(),o)return;o=!0;let n=W_(e.state.field(K_).diagnostics,t);n&&i.apply(e,n.from,n.to)},{name:a}=i,l=n[s]?a.indexOf(n[s]):-1,h=l<0?a:[a.slice(0,l),Zr("u",a.slice(l,l+1)),a.slice(l+1)];return Zr("button",{type:"button",class:"cm-diagnosticAction"+(i.markClass?" "+i.markClass:""),onclick:r,onmousedown:r,"aria-label":` Action: ${a}${l<0?"":` (access key "${n[s]})"`}.`},h)}),t.source&&Zr("div",{class:"cm-diagnosticSource"},t.source))}class rw extends ba{constructor(e){super(),this.sev=e}eq(e){return e.sev==this.sev}toDOM(){return Zr("span",{class:"cm-lintPoint cm-lintPoint-"+this.sev})}}class aw{constructor(e,t){this.diagnostic=t,this.id="item_"+Math.floor(4294967295*Math.random()).toString(16),this.dom=ow(e,t,!0),this.dom.id=this.id,this.dom.setAttribute("role","option")}}class lw{constructor(e){this.view=e,this.items=[];this.list=Zr("ul",{tabIndex:0,role:"listbox","aria-label":this.view.state.phrase("Diagnostics"),onkeydown:t=>{if(!(t.ctrlKey||t.altKey||t.metaKey)){if(27==t.keyCode)tw(this.view),this.view.focus();else if(38==t.keyCode||33==t.keyCode)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length);else if(40==t.keyCode||34==t.keyCode)this.moveSelection((this.selectedIndex+1)%this.items.length);else if(36==t.keyCode)this.moveSelection(0);else if(35==t.keyCode)this.moveSelection(this.items.length-1);else if(13==t.keyCode)this.view.focus();else{if(!(t.keyCode>=65&&t.keyCode<=90&&this.selectedIndex>=0))return;{let{diagnostic:i}=this.items[this.selectedIndex],s=nw(i.actions);for(let n=0;n<s.length;n++)if(s[n].toUpperCase().charCodeAt(0)==t.keyCode){let t=W_(this.view.state.field(K_).diagnostics,i);t&&i.actions[n].apply(e,t.from,t.to)}}}t.preventDefault()}},onclick:e=>{for(let t=0;t<this.items.length;t++)this.items[t].dom.contains(e.target)&&this.moveSelection(t)}}),this.dom=Zr("div",{class:"cm-panel-lint"},this.list,Zr("button",{type:"button",name:"close","aria-label":this.view.state.phrase("close"),onclick:()=>tw(this.view)},"×")),this.update()}get selectedIndex(){let e=this.view.state.field(K_).selected;if(!e)return-1;for(let t=0;t<this.items.length;t++)if(this.items[t].diagnostic==e.diagnostic)return t;return-1}update(){let{diagnostics:e,selected:t}=this.view.state.field(K_),i=0,s=!1,n=null,o=new Set;for(e.between(0,this.view.state.doc.length,(e,r,{spec:a})=>{for(let e of a.diagnostics){if(o.has(e))continue;o.add(e);let r,a=-1;for(let t=i;t<this.items.length;t++)if(this.items[t].diagnostic==e){a=t;break}a<0?(r=new aw(this.view,e),this.items.splice(i,0,r),s=!0):(r=this.items[a],a>i&&(this.items.splice(i,a-i),s=!0)),t&&r.diagnostic==t.diagnostic?r.dom.hasAttribute("aria-selected")||(r.dom.setAttribute("aria-selected","true"),n=r):r.dom.hasAttribute("aria-selected")&&r.dom.removeAttribute("aria-selected"),i++}});i<this.items.length&&!(1==this.items.length&&this.items[0].diagnostic.from<0);)s=!0,this.items.pop();0==this.items.length&&(this.items.push(new aw(this.view,{from:-1,to:-1,severity:"info",message:this.view.state.phrase("No diagnostics")})),s=!0),n?(this.list.setAttribute("aria-activedescendant",n.id),this.view.requestMeasure({key:this,read:()=>({sel:n.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:e,panel:t})=>{let i=t.height/this.list.offsetHeight;e.top<t.top?this.list.scrollTop-=(t.top-e.top)/i:e.bottom>t.bottom&&(this.list.scrollTop+=(e.bottom-t.bottom)/i)}})):this.selectedIndex<0&&this.list.removeAttribute("aria-activedescendant"),s&&this.sync()}sync(){let e=this.list.firstChild;function t(){let t=e;e=t.nextSibling,t.remove()}for(let i of this.items)if(i.dom.parentNode==this.list){for(;e!=i.dom;)t();e=i.dom.nextSibling}else this.list.insertBefore(i.dom,e);for(;e;)t()}moveSelection(e){if(this.selectedIndex<0)return;let t=W_(this.view.state.field(K_).diagnostics,this.items[e].diagnostic);t&&this.view.dispatch({selection:{anchor:t.from,head:t.to},scrollIntoView:!0,effects:X_.of(t)})}static open(e){return new lw(e)}}function hw(e,t='viewBox="0 0 40 40"'){return`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(e)}</svg>')`}function cw(e){return hw(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>`,'width="6" height="3"')}const dw=Jd.baseTheme({".cm-diagnostic":{padding:"3px 6px 3px 8px",marginLeft:"-1px",display:"block",whiteSpace:"pre-wrap"},".cm-diagnostic-error":{borderLeft:"5px solid #d11"},".cm-diagnostic-warning":{borderLeft:"5px solid orange"},".cm-diagnostic-info":{borderLeft:"5px solid #999"},".cm-diagnostic-hint":{borderLeft:"5px solid #66d"},".cm-diagnosticAction":{font:"inherit",border:"none",padding:"2px 4px",backgroundColor:"#444",color:"white",borderRadius:"3px",marginLeft:"8px",cursor:"pointer"},".cm-diagnosticSource":{fontSize:"70%",opacity:.7},".cm-lintRange":{backgroundPosition:"left bottom",backgroundRepeat:"repeat-x",paddingBottom:"0.7px"},".cm-lintRange-error":{backgroundImage:cw("#f11")},".cm-lintRange-warning":{backgroundImage:cw("orange")},".cm-lintRange-info":{backgroundImage:cw("#999")},".cm-lintRange-hint":{backgroundImage:cw("#66d")},".cm-lintRange-active":{backgroundColor:"#ffdd9980"},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:"relative","&:after":{content:'""',position:"absolute",bottom:0,left:"-2px",borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderBottom:"4px solid #d11"}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:"orange"}},".cm-lintPoint-info":{"&:after":{borderBottomColor:"#999"}},".cm-lintPoint-hint":{"&:after":{borderBottomColor:"#66d"}},".cm-panel.cm-panel-lint":{position:"relative","& ul":{maxHeight:"100px",overflowY:"auto","& [aria-selected]":{backgroundColor:"#ddd","& u":{textDecoration:"underline"}},"&:focus [aria-selected]":{background_fallback:"#bdf",backgroundColor:"Highlight",color_fallback:"white",color:"HighlightText"},"& u":{textDecoration:"none"},padding:0,margin:0},"& [name=close]":{position:"absolute",top:"0",right:"2px",background:"inherit",border:"none",font:"inherit",padding:0,margin:0}},"&dark .cm-lintRange-active":{backgroundColor:"#86714a80"},"&dark .cm-panel.cm-panel-lint ul":{"& [aria-selected]":{backgroundColor:"#2e343e"}}});function uw(e){return"error"==e?4:"warning"==e?3:"info"==e?2:1}function fw(e){let t="hint",i=1;for(let s of e){let e=uw(s.severity);e>i&&(i=e,t=s.severity)}return t}class pw extends Qu{constructor(e){super(),this.diagnostics=e,this.severity=fw(e)}toDOM(e){let t=document.createElement("div");t.className="cm-lint-marker cm-lint-marker-"+this.severity;let i=this.diagnostics,s=e.state.facet(Sw).tooltipFilter;return s&&(i=s(i,e.state)),i.length&&(t.onmouseover=()=>mw(e,t,i)),t}}function gw(e,t){let i=s=>{let n=t.getBoundingClientRect();if(!(s.clientX>n.left-10&&s.clientX<n.right+10&&s.clientY>n.top-10&&s.clientY<n.bottom+10)){for(let e=s.target;e;e=e.parentNode)if(1==e.nodeType&&e.classList.contains("cm-tooltip-lint"))return;window.removeEventListener("mousemove",i),e.state.field(yw)&&e.dispatch({effects:ww.of(null)})}};window.addEventListener("mousemove",i)}function mw(e,t,i){function s(){let s=e.elementAtHeight(t.getBoundingClientRect().top+5-e.documentTop);e.coordsAtPos(s.from)&&e.dispatch({effects:ww.of({pos:s.from,above:!1,clip:!1,create:()=>({dom:ew(e,i),getCoords:()=>t.getBoundingClientRect()})})}),t.onmouseout=t.onmousemove=null,gw(e,t)}let{hoverTime:n}=e.state.facet(Sw),o=setTimeout(s,n);t.onmouseout=()=>{clearTimeout(o),t.onmouseout=t.onmousemove=null},t.onmousemove=()=>{clearTimeout(o),o=setTimeout(s,n)}}function vw(e,t){let i=Object.create(null);for(let s of t){let t=e.lineAt(s.from);(i[t.from]||(i[t.from]=[])).push(s)}let s=[];for(let e in i)s.push(new pw(i[e]).range(+e));return kr.of(s,!0)}const bw=Ju({class:"cm-gutter-lint",markers:e=>e.state.field(_w),widgetMarker:(e,t,i)=>{let s=[];return e.state.field(_w).between(i.from,i.to,(e,t,n)=>{e>i.from&&e<i.to&&s.push(...n.diagnostics)}),s.length?new pw(s):null}}),_w=Eo.define({create:()=>kr.empty,update(e,t){e=e.map(t.changes);let i=t.state.facet(Sw).markerFilter;for(let s of t.effects)if(s.is(Q_)){let n=s.value;i&&(n=i(n||[],t.state)),e=vw(t.state.doc,n.slice(0))}return e}}),ww=tr.define(),yw=Eo.define({create:()=>null,update:(e,t)=>(e&&t.docChanged&&(e=j_(t,e)?null:{...e,pos:t.changes.mapPos(e.pos)}),t.effects.reduce((e,t)=>t.is(ww)?t.value:e,e)),provide:e=>Ou.from(e)}),xw=Jd.baseTheme({".cm-gutter-lint":{width:"1.4em","& .cm-gutterElement":{padding:".2em"}},".cm-lint-marker":{width:"1em",height:"1em"},".cm-lint-marker-info":{content:hw('<path fill="#aaf" stroke="#77e" stroke-width="6" stroke-linejoin="round" d="M5 5L35 5L35 35L5 35Z"/>')},".cm-lint-marker-warning":{content:hw('<path fill="#fe8" stroke="#fd7" stroke-width="6" stroke-linejoin="round" d="M20 6L37 35L3 35Z"/>')},".cm-lint-marker-error":{content:hw('<circle cx="20" cy="20" r="15" fill="#f87" stroke="#f43" stroke-width="6"/>')}}),kw=Du(J_,{hideOn:j_}),Cw=[K_,Jd.decorations.compute([K_],e=>{let{selected:t,panel:i}=e.field(K_);return t&&i&&t.from!=t.to?wa.set([Z_.range(t.from,t.to)]):wa.none}),kw,dw],Sw=Ao.define({combine:e=>vr(e,{hoverTime:300,markerFilter:null,tooltipFilter:null})});function Ow(e={}){return[Sw.of(e),_w,bw,xw,yw]}const Aw="function"==typeof String.prototype.normalize?e=>e.normalize("NFKD"):e=>e;class Pw{constructor(e,t,i=0,s=e.length,n,o){this.test=o,this.value={from:0,to:0,precise:!1},this.done=!1,this.matches=[],this.buffer="",this.bufferPos=0,this.iter=e.iterRange(i,s),this.bufferStart=i,this.normalize=n?e=>n(Aw(e)):Aw,this.query=this.normalize(t)}peek(){if(this.bufferPos==this.buffer.length){if(this.bufferStart+=this.buffer.length,this.iter.next(),this.iter.done)return-1;this.bufferPos=0,this.buffer=this.iter.value}return ho(this.buffer,this.bufferPos)}next(){for(;this.matches.length;)this.matches.pop();return this.nextOverlapping()}nextOverlapping(){for(;;){let e=this.peek();if(e<0)return this.done=!0,this;let t=co(e),i=this.bufferStart+this.bufferPos;this.bufferPos+=uo(e);let s=this.normalize(t);if(s.length)for(let e=0,n=i,o=!0;;e++){let i=s.charCodeAt(e),r=this.match(i,n,o,this.bufferPos+this.bufferStart,e==s.length-1);if(r)return this.value=r,this;if(e==s.length-1)break;o&&e<t.length&&t.charCodeAt(e)==i?n++:o=!1}}}match(e,t,i,s,n){let o=null;for(let t=0;t<this.matches.length;){let i=this.matches[t],r=!1;this.query.charCodeAt(i.index)==e&&(i.index==this.query.length-1?o={from:i.from,to:s,precise:n&&i.precise}:(i.index++,r=!0)),r?t++:this.matches.splice(t,1)}return this.query.charCodeAt(0)==e&&(1==this.query.length?o={from:t,to:s,precise:i&&n}:this.matches.push({from:t,index:1,precise:i})),o&&this.test&&!this.test(o.from,o.to,this.buffer,this.bufferStart)&&(o=null),o}}"undefined"!=typeof Symbol&&(Pw.prototype[Symbol.iterator]=function(){return this});const Tw={from:-1,to:-1,match:/.*/.exec(""),precise:!0},Mw="gm"+(null==/x/.unicode?"":"u");class $w{constructor(e,t,i,s=0,n=e.length){if(this.text=e,this.to=n,this.curLine="",this.done=!1,this.value=Tw,/\\[sWDnr]|\n|\r|\[\^/.test(t))return new Ew(e,t,i,s,n);this.re=new RegExp(t,Mw+((null==i?void 0:i.ignoreCase)?"i":"")),this.test=null==i?void 0:i.test,this.iter=e.iter();let o=e.lineAt(s);this.curLineStart=o.from,this.matchPos=Lw(e,s),this.getLine(this.curLineStart)}getLine(e){this.iter.next(e),this.iter.lineBreak?this.curLine="":(this.curLine=this.iter.value,this.curLineStart+this.curLine.length>this.to&&(this.curLine=this.curLine.slice(0,this.to-this.curLineStart)),this.iter.next())}nextLine(){this.curLineStart=this.curLineStart+this.curLine.length+1,this.curLineStart>this.to?this.curLine="":this.getLine(0)}next(){for(let e=this.matchPos-this.curLineStart;;){this.re.lastIndex=e;let t=this.matchPos<=this.to&&this.re.exec(this.curLine);if(t){let i=this.curLineStart+t.index,s=i+t[0].length;if(this.matchPos=Lw(this.text,s+(i==s?1:0)),i==this.curLineStart+this.curLine.length&&this.nextLine(),(i<s||i>this.value.to)&&(!this.test||this.test(i,s,t)))return this.value={from:i,to:s,precise:!0,match:t},this;e=this.matchPos-this.curLineStart}else{if(!(this.curLineStart+this.curLine.length<this.to))return this.done=!0,this;this.nextLine(),e=0}}}}const Iw=new WeakMap;class Rw{constructor(e,t){this.from=e,this.text=t}get to(){return this.from+this.text.length}static get(e,t,i){let s=Iw.get(e);if(!s||s.from>=i||s.to<=t){let s=new Rw(t,e.sliceString(t,i));return Iw.set(e,s),s}if(s.from==t&&s.to==i)return s;let{text:n,from:o}=s;return o>t&&(n=e.sliceString(t,o)+n,o=t),s.to<i&&(n+=e.sliceString(s.to,i)),Iw.set(e,new Rw(o,n)),new Rw(t,n.slice(t-o,i-o))}}class Ew{constructor(e,t,i,s,n){this.text=e,this.to=n,this.done=!1,this.value=Tw,this.matchPos=Lw(e,s),this.re=new RegExp(t,Mw+((null==i?void 0:i.ignoreCase)?"i":"")),this.test=null==i?void 0:i.test,this.flat=Rw.get(e,s,this.chunkEnd(s+5e3))}chunkEnd(e){return e>=this.to?this.to:this.text.lineAt(e).to}next(){for(;;){let e=this.re.lastIndex=this.matchPos-this.flat.from,t=this.re.exec(this.flat.text);if(t&&!t[0]&&t.index==e&&(this.re.lastIndex=e+1,t=this.re.exec(this.flat.text)),t){let e=this.flat.from+t.index,i=e+t[0].length;if((this.flat.to>=this.to||t.index+t[0].length<=this.flat.text.length-10)&&(!this.test||this.test(e,i,t)))return this.value={from:e,to:i,precise:!0,match:t},this.matchPos=Lw(this.text,i+(e==i?1:0)),this}if(this.flat.to==this.to)return this.done=!0,this;this.flat=Rw.get(this.text,this.flat.from,this.chunkEnd(this.flat.from+2*this.flat.text.length))}}}function Dw(e){try{return new RegExp(e,Mw),!0}catch(e){return!1}}function Lw(e,t){if(t>=e.length)return t;let i,s=e.lineAt(t);for(;t<s.to&&(i=s.text.charCodeAt(t-s.from))>=56320&&i<57344;)t++;return t}"undefined"!=typeof Symbol&&($w.prototype[Symbol.iterator]=Ew.prototype[Symbol.iterator]=function(){return this});const Bw=e=>{let{state:t}=e,i=String(t.doc.lineAt(e.state.selection.main.head).number),{close:s,result:n}=Uu(e,{label:t.phrase("Go to line"),input:{type:"text",name:"line",value:i},focus:!0,submitLabel:t.phrase("go")});return n.then(i=>{let n=i&&/^([+-])?(\d+)?(:\d+)?(%)?$/.exec(i.elements.line.value);if(!n)return void e.dispatch({effects:s});let o=t.doc.lineAt(t.selection.main.head),[,r,a,l,h]=n,c=l?+l.slice(1):0,d=a?+a:o.number;if(a&&h){let e=d/100;r&&(e=e*("-"==r?-1:1)+o.number/t.doc.lines),d=Math.round(t.doc.lines*e)}else a&&r&&(d=d*("-"==r?-1:1)+o.number);let u=t.doc.line(Math.max(1,Math.min(t.doc.lines,d))),f=Co.cursor(u.from+Math.max(0,Math.min(c,u.length)));e.dispatch({effects:[s,Jd.scrollIntoView(f.from,{y:"center"})],selection:f})}),!0},Nw=({state:e,dispatch:t})=>{let{selection:i}=e,s=Co.create(i.ranges.map(t=>e.wordAt(t.head)||Co.cursor(t.head)),i.mainIndex);return!s.eq(i)&&(t(e.update({selection:s})),!0)};function zw(e,t){let{main:i,ranges:s}=e.selection,n=e.wordAt(i.head),o=n&&n.from==i.from&&n.to==i.to;for(let i=!1,n=new Pw(e.doc,t,s[s.length-1].to);;){if(n.next(),!n.done){if(i&&s.some(e=>e.from==n.value.from))continue;if(o){let t=e.wordAt(n.value.from);if(!t||t.from!=n.value.from||t.to!=n.value.to)continue}return n.value}if(i)return null;n=new Pw(e.doc,t,0,Math.max(0,s[s.length-1].from-1)),i=!0}}const Hw=({state:e,dispatch:t})=>{let{ranges:i}=e.selection;if(i.some(e=>e.from===e.to))return Nw({state:e,dispatch:t});let s=e.sliceDoc(i[0].from,i[0].to);if(e.selection.ranges.some(t=>e.sliceDoc(t.from,t.to)!=s))return!1;let n=zw(e,s);return!!n&&(t(e.update({selection:e.selection.addRange(Co.range(n.from,n.to),!1),effects:Jd.scrollIntoView(n.to)})),!0)},Vw=Ao.define({combine:e=>vr(e,{top:!1,caseSensitive:!1,literal:!1,regexp:!1,wholeWord:!1,createPanel:e=>new yy(e),scrollToMatch:e=>Jd.scrollIntoView(e)})});class Gw{constructor(e){this.search=e.search,this.caseSensitive=!!e.caseSensitive,this.literal=!!e.literal,this.regexp=!!e.regexp,this.replace=e.replace||"",this.valid=!!this.search&&(!this.regexp||Dw(this.search)),this.unquoted=this.unquote(this.search),this.wholeWord=!!e.wholeWord,this.test=e.test}unquote(e){return this.literal?e:e.replace(/\\([nrt\\])/g,(e,t)=>"n"==t?"\n":"r"==t?"\r":"t"==t?"\t":"\\")}eq(e){return this.search==e.search&&this.replace==e.replace&&this.caseSensitive==e.caseSensitive&&this.regexp==e.regexp&&this.wholeWord==e.wholeWord&&this.test==e.test}create(){return this.regexp?new Jw(this):new qw(this)}getCursor(e,t=0,i){let s=e.doc?e:mr.create({doc:e});return null==i&&(i=s.doc.length),this.regexp?Yw(this,s,t,i):jw(this,s,t,i)}}class Uw{constructor(e){this.spec=e}}function Ww(e,t,i){return(s,n,o,r)=>{if(i&&!i(s,n,o,r))return!1;let a=s>=r&&n<=r+o.length?o.slice(s-r,n-r):t.doc.sliceString(s,n);return e(a,t,s,n)}}function jw(e,t,i,s){let n;return e.wholeWord&&(n=Fw(t.doc,t.charCategorizer(t.selection.main.head))),e.test&&(n=Ww(e.test,t,n)),new Pw(t.doc,e.unquoted,i,s,e.caseSensitive?void 0:e=>e.toLowerCase(),n)}function Fw(e,t){return(i,s,n,o)=>((o>i||o+n.length<s)&&(o=Math.max(0,i-2),n=e.sliceString(o,Math.min(e.length,s+2))),!(t(Xw(n,i-o))==dr.Word&&t(Kw(n,i-o))==dr.Word||t(Kw(n,s-o))==dr.Word&&t(Xw(n,s-o))==dr.Word))}class qw extends Uw{constructor(e){super(e)}nextMatch(e,t,i){let s=jw(this.spec,e,i,e.doc.length).nextOverlapping();if(s.done){let i=Math.min(e.doc.length,t+this.spec.unquoted.length);s=jw(this.spec,e,0,i).nextOverlapping()}return s.done||s.value.from==t&&s.value.to==i?null:s.value}prevMatchInRange(e,t,i){for(let s=i;;){let i=Math.max(t,s-1e4-this.spec.unquoted.length),n=jw(this.spec,e,i,s),o=null;for(;!n.nextOverlapping().done;)o=n.value;if(o)return o;if(i==t)return null;s-=1e4}}prevMatch(e,t,i){let s=this.prevMatchInRange(e,0,t);return s||(s=this.prevMatchInRange(e,Math.max(0,i-this.spec.unquoted.length),e.doc.length)),!s||s.from==t&&s.to==i?null:s}getReplacement(e){return this.spec.unquote(this.spec.replace)}matchAll(e,t){let i=jw(this.spec,e,0,e.doc.length),s=[];for(;!i.next().done;){if(s.length>=t)return null;s.push(i.value)}return s}highlight(e,t,i,s){let n=jw(this.spec,e,Math.max(0,t-this.spec.unquoted.length),Math.min(i+this.spec.unquoted.length,e.doc.length));for(;!n.next().done;)s(n.value.from,n.value.to)}}function Qw(e,t,i){return(s,n,o)=>(!i||i(s,n,o))&&e(o[0],t,s,n)}function Yw(e,t,i,s){let n;return e.wholeWord&&(n=Zw(t.charCategorizer(t.selection.main.head))),e.test&&(n=Qw(e.test,t,n)),new $w(t.doc,e.search,{ignoreCase:!e.caseSensitive,test:n},i,s)}function Xw(e,t){return e.slice(ro(e,t,!1),t)}function Kw(e,t){return e.slice(t,ro(e,t))}function Zw(e){return(t,i,s)=>!s[0].length||(e(Xw(s.input,s.index))!=dr.Word||e(Kw(s.input,s.index))!=dr.Word)&&(e(Kw(s.input,s.index+s[0].length))!=dr.Word||e(Xw(s.input,s.index+s[0].length))!=dr.Word)}class Jw extends Uw{nextMatch(e,t,i){let s=Yw(this.spec,e,i,e.doc.length).next();return s.done&&(s=Yw(this.spec,e,0,t).next()),s.done?null:s.value}prevMatchInRange(e,t,i){for(let s=1;;s++){let n=Math.max(t,i-1e4*s),o=Yw(this.spec,e,n,i),r=null;for(;!o.next().done;)r=o.value;if(r&&(n==t||r.from>n+10))return r;if(n==t)return null}}prevMatch(e,t,i){return this.prevMatchInRange(e,0,t)||this.prevMatchInRange(e,i,e.doc.length)}getReplacement(e){return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g,(t,i)=>{if("&"==i)return e.match[0];if("$"==i)return"$";for(let t=i.length;t>0;t--){let s=+i.slice(0,t);if(s>0&&s<e.match.length)return e.match[s]+i.slice(t)}return t})}matchAll(e,t){let i=Yw(this.spec,e,0,e.doc.length),s=[];for(;!i.next().done;){if(s.length>=t)return null;s.push(i.value)}return s}highlight(e,t,i,s){let n=Yw(this.spec,e,Math.max(0,t-250),Math.min(i+250,e.doc.length));for(;!n.next().done;)s(n.value.from,n.value.to)}}const ey=tr.define(),ty=tr.define(),iy=Eo.define({create:e=>new sy(gy(e).create(),null),update(e,t){for(let i of t.effects)i.is(ey)?e=new sy(i.value.create(),e.panel):i.is(ty)&&(e=new sy(e.query,i.value?py:null));return e},provide:e=>Gu.from(e,e=>e.panel)});class sy{constructor(e,t){this.query=e,this.panel=t}}const ny=wa.mark({class:"cm-searchMatch"}),oy=wa.mark({class:"cm-searchMatch cm-searchMatch-selected"}),ry=Wl.fromClass(class{constructor(e){this.view=e,this.decorations=this.highlight(e.state.field(iy))}update(e){let t=e.state.field(iy);(t!=e.startState.field(iy)||e.docChanged||e.selectionSet||e.viewportChanged)&&(this.decorations=this.highlight(t))}highlight({query:e,panel:t}){if(!t||!e.spec.valid)return wa.none;let{view:i}=this,s=new Sr;for(let t=0,n=i.visibleRanges,o=n.length;t<o;t++){let{from:r,to:a}=n[t];for(;t<o-1&&a>n[t+1].from-500;)a=n[++t].to;e.highlight(i.state,r,a,(e,t)=>{let n=i.state.selection.ranges.some(i=>i.from==e&&i.to==t);s.add(e,t,n?oy:ny)})}return s.finish()}},{decorations:e=>e.decorations});function ay(e){return t=>{let i=t.state.field(iy,!1);return i&&i.query.spec.valid?e(t,i):by(t)}}const ly=ay((e,{query:t})=>{let{to:i}=e.state.selection.main,s=t.nextMatch(e.state,i,i);if(!s)return!1;let n=Co.single(s.from,s.to),o=e.state.facet(Vw);return e.dispatch({selection:n,effects:[Sy(e,s),o.scrollToMatch(n.main,e)],userEvent:"select.search"}),vy(e),!0}),hy=ay((e,{query:t})=>{let{state:i}=e,{from:s}=i.selection.main,n=t.prevMatch(i,s,s);if(!n)return!1;let o=Co.single(n.from,n.to),r=e.state.facet(Vw);return e.dispatch({selection:o,effects:[Sy(e,n),r.scrollToMatch(o.main,e)],userEvent:"select.search"}),vy(e),!0}),cy=ay((e,{query:t})=>{let i=t.matchAll(e.state,1e3);return!(!i||!i.length)&&(e.dispatch({selection:Co.create(i.map(e=>Co.range(e.from,e.to))),userEvent:"select.search.matches"}),!0)}),dy=({state:e,dispatch:t})=>{let i=e.selection;if(i.ranges.length>1||i.main.empty)return!1;let{from:s,to:n}=i.main,o=[],r=0;for(let t=new Pw(e.doc,e.sliceDoc(s,n));!t.next().done;){if(o.length>1e3)return!1;t.value.from==s&&(r=o.length),o.push(Co.range(t.value.from,t.value.to))}return t(e.update({selection:Co.create(o,r),userEvent:"select.search.matches"})),!0},uy=ay((e,{query:t})=>{let{state:i}=e,{from:s,to:n}=i.selection.main;if(i.readOnly)return!1;let o=t.nextMatch(i,s,s);if(!o)return!1;let r,a,l=o,h=[],c=[];l.precise?l.from==s&&l.to==n&&(a=i.toText(t.getReplacement(l)),h.push({from:l.from,to:l.to,insert:a}),l=t.nextMatch(i,l.from,l.to),c.push(Jd.announce.of(i.phrase("replaced match on line $",i.doc.lineAt(s).number)+"."))):l=t.nextMatch(i,l.from,l.to);let d=e.state.changes(h);return l&&(r=Co.single(l.from,l.to).map(d),c.push(Sy(e,l)),c.push(i.facet(Vw).scrollToMatch(r.main,e))),e.dispatch({changes:d,selection:r,effects:c,userEvent:"input.replace"}),!0}),fy=ay((e,{query:t})=>{if(e.state.readOnly)return!1;let i=[];for(let s of t.matchAll(e.state,1e9)){let{from:e,to:n,precise:o}=s;o&&i.push({from:e,to:n,insert:t.getReplacement(s)})}if(!i.length)return!1;let s=e.state.phrase("replaced $ matches",i.length)+".";return e.dispatch({changes:i,effects:Jd.announce.of(s),userEvent:"input.replace.all"}),!0});function py(e){return e.state.facet(Vw).createPanel(e)}function gy(e,t){var i,s,n,o,r;let a=e.selection.main,l=a.empty||a.to>a.from+100?"":e.sliceDoc(a.from,a.to);if(t&&!l)return t;let h=e.facet(Vw);return new Gw({search:(null!==(i=null==t?void 0:t.literal)&&void 0!==i?i:h.literal)?l:l.replace(/\n/g,"\\n"),caseSensitive:null!==(s=null==t?void 0:t.caseSensitive)&&void 0!==s?s:h.caseSensitive,literal:null!==(n=null==t?void 0:t.literal)&&void 0!==n?n:h.literal,regexp:null!==(o=null==t?void 0:t.regexp)&&void 0!==o?o:h.regexp,wholeWord:null!==(r=null==t?void 0:t.wholeWord)&&void 0!==r?r:h.wholeWord})}function my(e){let t=Nu(e,py);return t&&t.dom.querySelector("[main-field]")}function vy(e){let t=my(e);t&&t==e.root.activeElement&&t.select()}const by=e=>{let t=e.state.field(iy,!1);if(t&&t.panel){let i=my(e);if(i&&i!=e.root.activeElement){let s=gy(e.state,t.query.spec);s.valid&&e.dispatch({effects:ey.of(s)}),i.focus(),i.select()}}else e.dispatch({effects:[ty.of(!0),t?ey.of(gy(e.state,t.query.spec)):tr.appendConfig.of(Ay)]});return!0},_y=e=>{let t=e.state.field(iy,!1);if(!t||!t.panel)return!1;let i=Nu(e,py);return i&&i.dom.contains(e.root.activeElement)&&e.focus(),e.dispatch({effects:ty.of(!1)}),!0},wy=[{key:"Mod-f",run:by,scope:"editor search-panel"},{key:"F3",run:ly,shift:hy,scope:"editor search-panel",preventDefault:!0},{key:"Mod-g",run:ly,shift:hy,scope:"editor search-panel",preventDefault:!0},{key:"Escape",run:_y,scope:"editor search-panel"},{key:"Mod-Shift-l",run:dy},{key:"Mod-Alt-g",run:Bw},{key:"Mod-d",run:Hw,preventDefault:!0}];class yy{constructor(e){this.view=e;let t=this.query=e.state.field(iy).query.spec;function i(e,t,i){return Zr("button",{class:"cm-button",name:e,onclick:t,type:"button"},i)}this.commit=this.commit.bind(this),this.searchField=Zr("input",{value:t.search,placeholder:xy(e,"Find"),"aria-label":xy(e,"Find"),class:"cm-textfield",name:"search",form:"","main-field":"true",onchange:this.commit,onkeyup:this.commit}),this.replaceField=Zr("input",{value:t.replace,placeholder:xy(e,"Replace"),"aria-label":xy(e,"Replace"),class:"cm-textfield",name:"replace",form:"",onchange:this.commit,onkeyup:this.commit}),this.caseField=Zr("input",{type:"checkbox",name:"case",form:"",checked:t.caseSensitive,onchange:this.commit}),this.reField=Zr("input",{type:"checkbox",name:"re",form:"",checked:t.regexp,onchange:this.commit}),this.wordField=Zr("input",{type:"checkbox",name:"word",form:"",checked:t.wholeWord,onchange:this.commit}),this.dom=Zr("div",{onkeydown:e=>this.keydown(e),class:"cm-search"},[this.searchField,i("next",()=>ly(e),[xy(e,"next")]),i("prev",()=>hy(e),[xy(e,"previous")]),i("select",()=>cy(e),[xy(e,"all")]),Zr("label",null,[this.caseField,xy(e,"match case")]),Zr("label",null,[this.reField,xy(e,"regexp")]),Zr("label",null,[this.wordField,xy(e,"by word")]),...e.state.readOnly?[]:[Zr("br"),this.replaceField,i("replace",()=>uy(e),[xy(e,"replace")]),i("replaceAll",()=>fy(e),[xy(e,"replace all")])],Zr("button",{name:"close",onclick:()=>_y(e),"aria-label":xy(e,"close"),type:"button"},["×"])])}commit(){let e=new Gw({search:this.searchField.value,caseSensitive:this.caseField.checked,regexp:this.reField.checked,wholeWord:this.wordField.checked,replace:this.replaceField.value});e.eq(this.query)||(this.query=e,this.view.dispatch({effects:ey.of(e)}))}keydown(e){du(this.view,e,"search-panel")?e.preventDefault():13==e.keyCode&&e.target==this.searchField?(e.preventDefault(),(e.shiftKey?hy:ly)(this.view)):13==e.keyCode&&e.target==this.replaceField&&(e.preventDefault(),uy(this.view))}update(e){for(let t of e.transactions)for(let e of t.effects)e.is(ey)&&!e.value.eq(this.query)&&this.setQuery(e.value)}setQuery(e){this.query=e,this.searchField.value=e.search,this.replaceField.value=e.replace,this.caseField.checked=e.caseSensitive,this.reField.checked=e.regexp,this.wordField.checked=e.wholeWord}mount(){this.searchField.select()}get pos(){return 80}get top(){return this.view.state.facet(Vw).top}}function xy(e,t){return e.state.phrase(t)}const ky=30,Cy=/[\s\.,:;?!]/;function Sy(e,{from:t,to:i}){let s=e.state.doc.lineAt(t),n=e.state.doc.lineAt(i).to,o=Math.max(s.from,t-ky),r=Math.min(n,i+ky),a=e.state.sliceDoc(o,r);if(o!=s.from)for(let e=0;e<ky;e++)if(!Cy.test(a[e+1])&&Cy.test(a[e])){a=a.slice(e);break}if(r!=n)for(let e=a.length-1;e>a.length-ky;e--)if(!Cy.test(a[e-1])&&Cy.test(a[e])){a=a.slice(0,e);break}return Jd.announce.of(`${e.state.phrase("current match")}. ${a} ${e.state.phrase("on line")} ${s.number}.`)}const Oy=Jd.baseTheme({".cm-panel.cm-search":{padding:"2px 6px 4px",position:"relative","& [name=close]":{position:"absolute",top:"0",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",padding:0,margin:0},"& input, & button, & label":{margin:".2em .6em .2em 0"},"& input[type=checkbox]":{marginRight:".2em"},"& label":{fontSize:"80%",whiteSpace:"pre"}},"&light .cm-searchMatch":{backgroundColor:"#ffff0054"},"&dark .cm-searchMatch":{backgroundColor:"#00ffff8a"},"&light .cm-searchMatch-selected":{backgroundColor:"#ff6a0054"},"&dark .cm-searchMatch-selected":{backgroundColor:"#ff00ff8a"}}),Ay=[iy,Bo.low(ry),Oy];let Py=class extends d{constructor(){super(...arguments),this.value="",this.issues=[],this.applyingExternalValue=!1}firstUpdated(){this.editor=new Jd({parent:this.editorHost,state:mr.create({doc:this.value,extensions:[mf(),om(),V_(),Tg(),Ow(),gg(bg,{fallback:!0}),lu.of([...ub,...Cm,...wy,fb,{key:"Shift-Alt-f",run:()=>(this.dispatchEvent(new CustomEvent("format-yaml",{bubbles:!0,composed:!0})),!0)}]),Jd.lineWrapping,Jd.updateListener.of(e=>{e.docChanged&&!this.applyingExternalValue&&this.dispatchEvent(new CustomEvent("yaml-changed",{bubbles:!0,composed:!0,detail:{yaml:e.state.doc.toString()}}))}),Jd.theme({"&":{height:"100%",background:"var(--code-editor-background-color, var(--card-background-color))"},".cm-content":{minHeight:"360px",caretColor:"var(--primary-text-color)"},".cm-content, .cm-gutterElement":{fontFamily:"var(--ha-font-family-code, monospace)"},".cm-gutters":{background:"var(--secondary-background-color)",color:"var(--secondary-text-color)",borderRight:"1px solid var(--divider-color)"},".cm-activeLine, .cm-activeLineGutter":{background:"rgba(var(--rgb-primary-color), 0.08)"},".cm-scroller":{color:"var(--primary-text-color)",overflow:"auto"},"&.cm-focused":{outline:"2px solid var(--primary-color)",outlineOffset:"-2px"}})]})}),this.updateDiagnostics()}updated(e){e.has("value")&&this.editor&&this.editor.state.doc.toString()!==this.value&&(this.applyingExternalValue=!0,this.editor.dispatch({changes:{from:0,to:this.editor.state.doc.length,insert:this.value}}),this.applyingExternalValue=!1),e.has("issues")&&this.updateDiagnostics()}revealIssue(e){if(!this.editor||!e.line)return;const t=this.editor.state.doc.line(Math.min(e.line,this.editor.state.doc.lines)),i=Math.min(Math.max((e.column||1)-1,0),t.length);this.editor.dispatch({selection:{anchor:t.from+i},scrollIntoView:!0}),this.editor.focus()}disconnectedCallback(){this.editor?.destroy(),this.editor=void 0,super.disconnectedCallback()}render(){return n`<div class="editor-host" aria-label="YAML configuration editor"></div>`}updateDiagnostics(){if(!this.editor)return;const e=this.issues.map(e=>{let t=0;if(e.line){const i=this.editor.state.doc.line(Math.min(e.line,this.editor.state.doc.lines));t=i.from+Math.min(Math.max((e.column||1)-1,0),i.length)}return{from:t,to:Math.min(t+1,this.editor.state.doc.length),severity:e.severity,message:e.message}});this.editor.dispatch(q_(this.editor.state,e))}};Py.styles=l`
    :host {
      border: 1px solid var(--divider-color);
      border-radius: 10px;
      display: block;
      min-height: 360px;
      overflow: hidden;
    }
    .editor-host {
      height: min(58vh, 680px);
      min-height: 360px;
    }
  `,h([c({attribute:!1})],Py.prototype,"value",void 0),h([c({attribute:!1})],Py.prototype,"issues",void 0),h([bt(".editor-host")],Py.prototype,"editorHost",void 0),Py=h([_("sidebar-workbench-yaml-editor")],Py);const Ty=(e,t)=>null!=e&&null!=t&&t>e,My=e=>Array.isArray(e)?e.map(My):e&&"object"==typeof e?Object.fromEntries(Object.entries(e).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>[e,My(t)])):e,$y=e=>JSON.stringify(My(e)),Iy=(e,t,i,s,n)=>$y(e)!==$y(t)||n&&i!==s;class Ry{constructor(){this._generation=0}begin(){return this._generation+=1,this._unsubscribe?.(),this._unsubscribe=void 0,this._generation}accept(e,t){return e!==this._generation?(t(),!1):(this._unsubscribe=t,!0)}dispose(){this.begin()}}class Ey{constructor(e){this.editorDialog=e}get sidebarConfig(){return this.editorDialog._sidebarConfig}}const Dy={header_title:"Sidebar title",hide_header_toggle:"Hide header toggle",animation_off:"Disable animations",animation_delay:"Animation delay",accordion_mode:"Accordion mode",text_transformation:"Text style",move_settings_from_fixed:"Move Settings into the sidebar",force_transparent_background:"Transparent background",width:"Sidebar width",default_collapsed:"Initially collapsed groups",pinned_groups:"Pinned groups",uncategorized_items:"Ungrouped items",scroll_hide_header:"Hide header on scroll",notification:"Notification badges",visibility_templates:"Visibility rules",color_config:"Colours and theme"},Ly=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),By=(e,t)=>{if(Object.is(e,t))return!0;if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every((e,i)=>By(e,t[i]));if(Ny(e)&&Ny(t)){const i=Object.keys(e);return i.length===Object.keys(t).length&&i.every(i=>Ly(t,i)&&By(e[i],t[i]))}return!1},Ny=e=>null!==e&&"object"==typeof e&&!Array.isArray(e),zy=e=>Array.isArray(e)&&e.every(e=>"string"==typeof e),Hy=e=>`“${e}”`,Vy=e=>void 0===e?"default":"boolean"==typeof e?e?"On":"Off":Hy(String(e)),Gy=e=>null==e||["string","number","boolean"].includes(typeof e),Uy=(e,t)=>{const i=[],s=new Set,n=(e,t,s="changed")=>i.push({key:e,label:t,kind:s}),o=(e,t,i,s,o,r)=>{for(const o of new Set(i))t.includes(o)||n(e,s(o),"added");for(const s of new Set(t))i.includes(s)||n(e,o(s),"removed");r&&!By(t.filter(e=>i.includes(e)),i.filter(e=>t.includes(e)))&&n(e,r)};for(const i of["hidden_items","bottom_items","bottom_grid_items"]){const n=e[i]??[],r=t[i]??[];if(zy(n)&&zy(r))if(s.add(i),"hidden_items"===i)o(i,n,r,e=>`Hide ${Hy(e)}`,e=>`Show ${Hy(e)}`);else{const e="bottom_items"===i?"the bottom":"the bottom grid";o(i,n,r,t=>`Place ${Hy(t)} at ${e}`,t=>`Remove ${Hy(t)} from ${e}`,`Reorder items at ${e}`)}}const r=["custom_groups","bottom_groups"],a=e=>Ny(e)&&Object.values(e).every(zy);for(const i of r){const r=e[i]??{},l=t[i]??{};if(!a(r)||!a(l))continue;s.add(i);const h="bottom_groups"===i?" at the bottom":"";for(const e of new Set([...Object.keys(r),...Object.keys(l)]))Ly(r,e)?Ly(l,e)?o(i,r[e],l[e],t=>`Add ${Hy(t)} to group ${Hy(e)}`,t=>`Remove ${Hy(t)} from group ${Hy(e)}`,`Reorder items in group ${Hy(e)}`):n(i,`Remove group ${Hy(e)}${h}`,"removed"):n(i,`Add group ${Hy(e)}${h}${l[e].length?` with ${l[e].map(Hy).join(", ")}`:""}`,"added");const c=Object.keys(r).filter(e=>Ly(l,e)),d=Object.keys(l).filter(e=>Ly(r,e));By(c,d)||n(i,`Reorder ${"bottom_groups"===i?"bottom groups":"groups"}: ${d.map(Hy).join(" → ")}`)}const l=e.new_items??[],h=t.new_items??[];if(Array.isArray(l)&&Array.isArray(h)&&[...l,...h].every(Ny)){const e=e=>e.url_path||e.title,t=l.map(e),i=h.map(e);if([...t,...i].every(e=>"string"==typeof e)&&new Set(t).size===t.length&&new Set(i).size===i.length){s.add("new_items");for(const[i,s]of l.entries()){const o=h.find(s=>e(s)===t[i]),r=Hy(s.title||String(t[i]));o?By(s,o)||n("new_items",s.title!==o.title?`Rename custom item ${r} to ${Hy(o.title||"")}`:`Update custom item ${r}`):n("new_items",`Remove custom item ${r}`,"removed")}for(const[e,s]of h.entries())t.includes(i[e])||n("new_items",`Add custom item ${Hy(s.title||String(i[e]))}`,"added");By(t.filter(e=>i.includes(e)),i.filter(e=>t.includes(e)))||n("new_items","Reorder custom items")}}for(const i of new Set([...Object.keys(e),...Object.keys(t)])){if(s.has(i))continue;const o=e[i],r=t[i];if(By(o,r))continue;const a=Dy[i]||i.replaceAll("_"," ").replace(/^./,e=>e.toUpperCase()),l=Ly(e,i)?Ly(t,i)?"changed":"removed":"added";n(i,Gy(o)&&Gy(r)?`${a}: ${Vy(o)} → ${Vy(r)}`:`${a} ${l}`,l)}return i},Wy="sidebar-organizer-editor-draft:v1",jy=(e,t,i)=>`${Wy}:${encodeURIComponent(e)}:${t}:${encodeURIComponent(i)}`;class Fy{constructor(e){this.storage=e||qy()}read(e,t,i){let s;try{s=this.storage?.getItem(jy(e,t,i))??null}catch{return}if(s)try{const n=JSON.parse(s);if(1!==n.version||n.userId!==e||n.source!==t||n.target!==i||"string"!=typeof n.rawYaml||"number"!=typeof n.timestamp)return;return n}catch{return}}write(e){try{this.storage?.setItem(jy(e.userId,e.source,e.target),JSON.stringify(e))}catch(e){console.warn("Sidebar Organizer could not persist the editor draft.",e)}}clear(e,t,i){try{this.storage?.removeItem(jy(e,t,i))}catch(e){console.warn("Sidebar Organizer could not clear the editor draft.",e)}}}const qy=()=>{try{return globalThis.localStorage}catch{return}},Qy={color_config:"appearance",notification:"items",visibility_templates:"items",new_items:"items",custom_groups:"organize",bottom_groups:"organize",bottom_items:"organize",bottom_grid_items:"organize",hidden_items:"items"},Yy=e=>{const t=Q(e).map(e=>{const t=e.split(" must ")[0],i=Xy(t);return{severity:"error",code:"schema.invalid_value",message:e,path:i,route:Qy[String(i[0])]||"appearance"}});return 0===t.length&&t.push(...Ky(e)),t},Xy=e=>{const t=[];for(const i of e.replace(/\[(\d+)\]/g,".$1").split("."))i&&t.push(/^\d+$/.test(i)?Number(i):i);return t},Ky=e=>{const t=new Map,i=[],s=(e,s)=>{e?.forEach((e,n)=>{const o=[...s,n],r=t.get(e);r?i.push({severity:"error",code:"config.duplicate_assignment",message:`${e} is assigned more than once (${r.join(".")} and ${o.join(".")}).`,path:o,route:"organize"}):t.set(e,o)})};for(const[t,i]of Object.entries(e.custom_groups||{}))s(i,["custom_groups",t]);for(const[t,i]of Object.entries(e.bottom_groups||{}))s(i,["bottom_groups",t]);return s(e.bottom_items,["bottom_items"]),s(e.bottom_grid_items,["bottom_grid_items"]),i},Zy=["header_title","hide_header_toggle","animation_off","animation_delay","accordion_mode","text_transformation","move_settings_from_fixed","force_transparent_background","width","custom_groups","bottom_groups","bottom_items","bottom_grid_items","hidden_items","default_collapsed","pinned_groups","uncategorized_items","new_items","visibility_templates","notification","color_config","scroll_hide_header"];class Jy{constructor(e,t){this.document=e,this.lineCounter=t}static parse(e){const t=new X,i=Y(e||"{}\n",{keepSourceTokens:!0,lineCounter:t,prettyErrors:!1,strict:!0});return new Jy(i,t)}get valid(){return 0===this.document.errors.length}toConfig(){if(!this.valid)return;const e=this.document.toJS();return"object"!=typeof e||null===e||Array.isArray(e)?void 0:e}syntaxIssues(){return this.document.errors.map(e=>{const t=void 0===e.pos?.[0]?void 0:this.lineCounter.linePos(e.pos[0]);return{severity:"error",code:`yaml.${e.code||"syntax"}`,message:e.message,path:[],line:t?.line,column:t?.col,route:"yaml"}})}positionForPath(e){const t=this.document.getIn(e,!0),i=t?.range?.[0];if(void 0===i)return;const s=this.lineCounter.linePos(i);return{line:s.line,column:s.col}}patchConfig(e){if(!this.valid)throw new Error("Cannot patch an invalid YAML document.");const t=this.toConfig()||{};this.patchValue([],t,e),this.orderKnownTopLevelKeys()}format(){if(!this.valid)throw new Error("Cannot format invalid YAML.");return this.document.toString({indent:2,lineWidth:0})}toString(){return this.document.toString({indent:2,lineWidth:0})}patchValue(e,t,i){if(ix(t,i))return;if(tx(t)&&tx(i)){for(const s of Object.keys(t))s in i||this.document.deleteIn([...e,s]);for(const[s,n]of Object.entries(i))s in t?this.patchValue([...e,s],t[s],n):this.document.setIn([...e,s],n);return}const s=this.document.getIn(e,!0),n=s&&"comment"in s?s.comment:void 0,o=s&&"commentBefore"in s?s.commentBefore:void 0;this.document.setIn(e,i);const r=this.document.getIn(e,!0);r&&(void 0!==n&&(r.comment=n),void 0!==o&&(r.commentBefore=o))}orderKnownTopLevelKeys(){if(!K(this.document.contents))return;const e=this.document.contents,t=new Map(Zy.map((e,t)=>[e,t]));e.items.sort((e,i)=>{const s=ex(e.key),n=ex(i.key),o=t.get(s),r=t.get(n);return void 0===o||void 0===r?0:o-r})}}const ex=e=>String(e instanceof Z?e.value:e),tx=e=>"object"==typeof e&&null!==e&&!Array.isArray(e),ix=(e,t)=>JSON.stringify(e)===JSON.stringify(t);class sx{constructor(e){this.issues=[],this.yamlValid=!0,this.draftSuppressed=!1,this.userId=e.userId,this.source=e.source,this.target=e.target,this.baselineRevision=e.baselineRevision??null,this.config=structuredClone(e.config),this.baselineConfig=structuredClone(e.config),this.rawYaml=e.rawYaml?.trim()?e.rawYaml:J.stringify(e.config),this.baselineRawYaml=this.rawYaml,this.activeRoute=e.activeRoute||"organize",this.document=Jy.parse(this.rawYaml),this.drafts=e.draftStorage||new Fy,this.draftDebounceMs=e.draftDebounceMs??500,this.onChange=e.onChange,this.revalidate()}get dirty(){return this.rawYaml!==this.baselineRawYaml||JSON.stringify(this.config)!==JSON.stringify(this.baselineConfig)}get snapshot(){return{source:this.source,target:this.target,baselineRevision:this.baselineRevision,baselineRawYaml:this.baselineRawYaml,rawYaml:this.rawYaml,config:structuredClone(this.config),issues:[...this.issues],dirty:this.dirty,activeRoute:this.activeRoute,yamlValid:this.yamlValid}}get changes(){return Uy(this.baselineConfig,this.config)}setRoute(e){this.activeRoute=e,this.changed()}setRawYaml(e){this.rawYaml=e,this.document=Jy.parse(e),this.revalidate();const t=this.document.toConfig();t&&this.yamlValid&&(this.config=t),this.changed()}setConfig(e){this.yamlValid&&(this.document.patchConfig(e),this.rawYaml=this.document.toString(),this.config=structuredClone(e),this.revalidate(),this.changed())}formatYaml(){this.rawYaml=this.document.format(),this.document=Jy.parse(this.rawYaml),this.revalidate(),this.changed()}draftState(){const e=this.drafts.read(this.userId,this.source,this.target);return e?e.baselineRevision!==this.baselineRevision?{state:"stale",draft:e}:{state:"matching",draft:e}:{state:"none"}}resumeDraft(e){if(e.userId!==this.userId||e.source!==this.source||e.target!==this.target)throw new Error("Draft does not belong to this editing target.");this.activeRoute=e.activeRoute,this.setRawYaml(e.rawYaml)}discardDraft(){clearTimeout(this.draftTimer),this.draftTimer=void 0,this.drafts.clear(this.userId,this.source,this.target),this.draftSuppressed=!0}markApplied(e,t,i){this.rawYaml=e,this.baselineRawYaml=e,this.config=structuredClone(t),this.baselineConfig=structuredClone(t),this.baselineRevision=i??this.baselineRevision,this.document=Jy.parse(e),this.revalidate(),this.discardDraft(),this.onChange?.(this.snapshot)}acknowledgePublished(e,t,i){this.baselineRawYaml=e,this.baselineConfig=structuredClone(t),this.baselineRevision=i??this.baselineRevision,this.dirty?(this.draftSuppressed=!1,clearTimeout(this.draftTimer),this.draftTimer=void 0,this.writeDraft()):this.discardDraft(),this.onChange?.(this.snapshot)}destroy(){clearTimeout(this.draftTimer),this.dirty&&!this.draftSuppressed&&this.writeDraft()}revalidate(){this.yamlValid=this.document.valid&&void 0!==this.document.toConfig(),this.issues=this.document.syntaxIssues();const e=this.document.toConfig();!e&&this.document.valid?this.issues.push({severity:"error",code:"yaml.root_type",message:"YAML must parse to an object/dictionary.",path:[],route:"yaml"}):e&&this.issues.push(...Yy(e).map(e=>({...e,...this.document.positionForPath(e.path)}))),this.issues.some(e=>"schema.invalid_value"===e.code)&&(this.yamlValid=!1)}changed(){this.draftSuppressed=!1,this.scheduleDraft(),this.onChange?.(this.snapshot)}scheduleDraft(){clearTimeout(this.draftTimer),this.dirty&&(this.draftTimer=setTimeout(()=>{this.draftTimer=void 0,this.writeDraft()},this.draftDebounceMs))}writeDraft(){this.drafts.write({version:1,userId:this.userId,source:this.source,target:this.target,rawYaml:this.rawYaml,baselineRevision:this.baselineRevision,activeRoute:this.activeRoute,timestamp:Date.now()})}}const nx=["organize","appearance"];let ox=class extends si{constructor(){super(ke.GENERAL),this.fullscreen=!1,this._connected=!1,this._sidebarConfig={},this._useConfigFile=!1,this._configSource="browser_storage",this._configLoaded=!1,this._initPanelOrder=[],this._initCombiPanels=[],this._newItemMap=new Map,this._newItems=[],this._panelConfigMap=new Map,this._pinnedGroupsMap=new Map,this._settingItemMoved=!1,this._uncategorizedItemsGroup=[],this._uploading=!1,this._saving=!1,this._haConfigErrors=[],this._panelWarnings=[],this._haConfigInfo={available:!1},this._profileInfo={available:!1},this._profileUsers=[],this._selectedProfile="shared",this._copySource="shared",this._syncCollapsedGroups=!0,this._rawYaml="",this._narrow=!1,this._workbenchRoute="organize",this._previewOpen=!1,this._desktopPreview=!1,this._routeScroll=new Map,this._previewMediaChanged=e=>{this._desktopPreview=e.matches,e.matches&&(this._previewOpen=!1)},this._configSubscription=new Ry,this._profileSubscription=new Ry,this._profileLoadGeneration=0,this._baselineConfig={},this._baselineRawYaml="",this._preferenceCollapsedGroups=[],this._setupInitConfig=async()=>{this._configLoaded=!1,this._baselineConfig=structuredClone(this._initConfig||{}),await this._refreshProfileDirectory();const e=await ee(this.hass,te());if(e!==this._configSource&&(this._configSource=e,this._useConfigFile="static_yaml"===e,ie(e)),"browser_storage"!==this._configSource)if("static_yaml"!==this._configSource){if("home_assistant_profile"===this._configSource)return this._selectedProfile=this.hass.user?.id||"shared",void await this._validateHaProfile(this._selectedProfile);this._selectedProfile="shared",this._validateHaConfig()}else this._validateConfigFile();else this._validateStoragePanels()},this._openPreview=()=>{this._desktopPreview||(this._previewOpen=!0,this.updateComplete.then(()=>this.shadowRoot?.querySelector(".preview-drawer ha-icon-button")?.focus()))},this._closePreview=()=>{this._previewOpen=!1,this.updateComplete.then(()=>this.shadowRoot?.querySelector(".preview-toggle")?.focus())},this._downloadCurrentDraft=()=>{this._downloadDraft({version:1,userId:this.hass.user?.id||"anonymous",source:this._configSource,target:"home_assistant_profile"===this._configSource?this._selectedProfile:"shared",rawYaml:this._session.rawYaml,baselineRevision:this._baselineRevision||null,activeRoute:this._workbenchRoute,timestamp:Date.now()})},this._reloadLatestForRecovery=async()=>{if(this._saving)return;await w(this,"Reload the latest Home Assistant version? Your current draft will remain available as a recovery copy.","Reload latest","Keep editing")&&!this._saving&&(this._session?.destroy(),this._session=void 0,this._sessionIdentity=void 0,"home_assistant_profile"===this._configSource?await this._reloadHomeAssistantProfile():await this._reloadHomeAssistantConfig(!1),this._workbenchRoute="review",this.requestUpdate())},this._discardDraft=async()=>{if(this._saving)return;await w(this,"Discard this local draft and restore the published configuration?","Discard","Keep editing")&&!this._saving&&(this._session.discardDraft(),this._rawYaml=this._baselineRawYaml,this._sidebarConfig=structuredClone(this._baselineConfig),this._sessionIdentity=void 0,this.requestUpdate())},this._downloadDiagnostics=()=>{const e=e=>{if(!e)return;const t={...e};return delete t.config_path,delete t.profiles_path,delete t.user_id,t},t={generated_at:(new Date).toISOString(),sidebar_organizer_version:Be,home_assistant_version:this.hass.config.version,user_is_admin:Boolean(this.hass.user?.is_admin),source:this._configSource,selected_profile:"shared"===this._selectedProfile?"shared":"user",config_info:e("home_assistant_profile"===this._configSource?this._profileInfo:this._haConfigInfo),diagnostics:e(this._haDiagnostics),runtime:window.SidebarOrganizer?.diagnostics,validation_errors:this._haConfigErrors,panel_warnings:this._panelWarnings,dirty:this.hasUnsavedChanges},i=URL.createObjectURL(new Blob([JSON.stringify(t,null,2)],{type:"application/json"})),s=document.createElement("a");s.href=i,s.download=`sidebar-organizer-diagnostics-${(new Date).toISOString().replaceAll(":","-")}.json`,s.click(),setTimeout(()=>URL.revokeObjectURL(i),0)},this._validateStoragePanels=async()=>{if("browser_storage"!==this._configSource)return;const e=se($e.PANEL_ORDER),t=ne(),i=this._utils.ARRAY.union(e,t),{added:s,removed:n}=await oe(this.hass,i);if(Boolean(s.length||n.length)){let i=[...e],o=[...t];if(s.length>0&&(i=[...i,...s]),n.length>0){const e=new Set(n);i=i.filter(t=>!e.has(t)),o=[...new Set([...o,...n])],q($e.HIDDEN_PANELS,o)}return q($e.PANEL_ORDER,i),this._sidebarConfig=re()||{},ae($e.HIDDEN_PANELS),void this._updateSidebarItems(i,o)}this._sidebarConfig=re()||{},ae($e.HIDDEN_PANELS),this._updateSidebarItems(e,t)},this._validateConfigFile=async()=>{if("static_yaml"!==this._configSource)return;const e=await le();if(!e)return;const t=await he(e,this.hass,!0);"object"==typeof t&&null!==t&&(this._invalidConfig=t,this._sidebarConfig=structuredClone(t.config),this._baselineConfig=structuredClone(t.config),this._rawYaml=J.stringify(t.config),this._baselineRawYaml=this._rawYaml),this._configLoaded=!0},this._validateHaConfig=async()=>{if("home_assistant_config"!==this._configSource)return;if(await this._refreshHaConfigInfo(),!this._haConfigInfo.available)return this._clearServerYamlDraft(),this._haConfigErrors=[this._haConfigInfo.error||Ae.HA_CONFIG_UNAVAILABLE],this._panelWarnings=[],this._sidebarConfig={},this._baselineConfig=structuredClone(this._sidebarConfig),this._baselineRevision=void 0,this._configLoaded=!0,void(this._mainDialog._configValid=!1);const e=new ce(this.hass),t=await e.read();if(!t.valid||!t.config)return this._rawYaml=t.rawYaml||"",this._baselineRawYaml=this._rawYaml,this._haConfigErrors=t.errors,this._panelWarnings=[],this._sidebarConfig={},this._baselineConfig=structuredClone(this._sidebarConfig),this._baselineRevision=t.revision,this._lastLoadedHaConfigModified=void 0,this._configLoaded=!0,void(this._mainDialog._configValid=!1);this._haConfigErrors=[],this._rawYaml=t.rawYaml||"",this._baselineRawYaml=this._rawYaml,this._baselineRevision=t.revision,this._lastLoadedHaConfigModified=t.last_modified??void 0,this._sidebarConfig=t.config,this._baselineConfig=structuredClone(t.config);const i=await he(t.config,this.hass,!0);"object"==typeof i&&null!==i&&this._applyHomeAssistantPanelValidation(i);const s=se($e.PANEL_ORDER);this._updateSidebarItems(s,ne()),this._startHaConfigSubscription()},this._refreshProfileDirectory=async()=>{const e=this.hass.user;if(!e)return;const t=await new de(this.hass).info();if(!t.available)return this._preferencesRevision=void 0,this._preferenceCollapsedGroups=[],this._preferenceKnownGroups=void 0,void(this._syncCollapsedGroups=!1);try{const e=await new de(this.hass).readPreferences();this._preferencesRevision=e.revision,this._preferenceCollapsedGroups=e.preferences.collapsed_groups,this._preferenceKnownGroups=e.preferences.known_groups,this._syncCollapsedGroups=!1!==e.preferences.sync_collapsed_groups}catch(e){this._preferencesRevision=void 0,this._preferenceCollapsedGroups=[],this._preferenceKnownGroups=void 0,this._syncCollapsedGroups=!1,console.warn("Unable to read Sidebar Organizer preference settings:",e)}if(e.is_admin)try{const e=await new de(this.hass).list();return void(this._profileUsers=[...e.users,...e.orphans.map(e=>({id:e,name:e,is_active:!1,is_admin:!1,system_generated:!1,profile_exists:!0}))])}catch(e){console.warn("Unable to list Sidebar Organizer profiles:",e)}this._profileUsers=[{id:e.id,name:e.name,is_active:!0,is_admin:e.is_admin,system_generated:!1,profile_exists:Boolean(t.profile_exists)}]},this._handlePreferenceSyncChanged=async e=>{const t=e.target.checked;try{const e=await new de(this.hass).writePreferences(this._preferenceCollapsedGroups,this._preferencesRevision,this._preferenceKnownGroups,t);this._preferencesRevision=e.revision,this._syncCollapsedGroups=!1!==e.preferences.sync_collapsed_groups,ue(this,{message:this._syncCollapsedGroups?"Collapsed groups will sync across devices.":"Collapsed groups will remain local to each device."}),window.SidebarOrganizer.run()}catch(e){await x(this,this._formatSaveError(e)),this.requestUpdate()}},this._handleProfileSelected=async e=>{e.stopPropagation();const t=e.detail.value;if(!this._saving&&t&&t!==this._selectedProfile){if(this.hasUnsavedChanges){if(!await w(this,"Switch profiles? Your current draft will stay saved on this device.","Switch profile","Stay here"))return void this.requestUpdate()}this._saving||(this._selectedProfile=t,this._clearServerYamlDraft(),this._configLoaded=!1,"shared"===t?(this._profileLoadGeneration+=1,this._profileSubscription.dispose(),this._configSource="home_assistant_config",await this._validateHaConfig()):(this._configSource="home_assistant_profile",await this._validateHaProfile(t)),this._mainDialog._saveDisabled=!0)}},this._validateHaProfile=async e=>{const t=++this._profileLoadGeneration,i=this._profileSubscription.begin(),s=new de(this.hass,e),n=await s.read();if(!this._connected||t!==this._profileLoadGeneration||this._selectedProfile!==e||"home_assistant_profile"!==this._configSource)return;if(!n.available||!n.valid||!n.config)return n.available?(this._rawYaml=n.rawYaml||"",this._baselineRawYaml=this._rawYaml):this._clearServerYamlDraft(),this._profileInfo=n,this._haConfigErrors=n.errors,this._panelWarnings=[],this._sidebarConfig={},this._baselineConfig=structuredClone(this._sidebarConfig),this._baselineRevision=n.revision,this._configLoaded=!0,void(this._mainDialog._configValid=!1);this._profileInfo=n,this._haConfigErrors=[],this._rawYaml=n.rawYaml||"",this._baselineRawYaml=this._rawYaml,this._baselineRevision=n.revision,this._lastLoadedHaConfigModified=n.last_modified??void 0,this._sidebarConfig=n.config,this._baselineConfig=structuredClone(n.config);const o=await he(n.config,this.hass,!0);"object"==typeof o&&null!==o&&this._applyHomeAssistantPanelValidation(o);const r=se($e.PANEL_ORDER);this._updateSidebarItems(r,ne()),e!==this.hass.user?.id&&(this._sidebarConfig=structuredClone(n.config),this._baselineConfig=structuredClone(n.config)),this._mainDialog._configValid=this.isValidConfig,this._startHaConfigSubscription(),await this._subscribeSelectedProfile(e,t,i)},this._saveHomeAssistantProfile=async()=>await this._withSaveLock(this._saveHomeAssistantProfileUnlocked),this._saveHomeAssistantProfileUnlocked=async()=>{if("shared"===this._selectedProfile)return this._saveHomeAssistantConfigUnlocked();const e=this._capturePublishedSave(),t=e.detail.profileUserId,i=this._baselineRevision,s=this._profileInfo.revision,n=new de(this.hass,t),o=await n.info(),r=Boolean(i&&o.revision!==i);if(r&&!await w(this,"This profile changed after you opened it. Review or download your draft before explicitly overwriting the latest version.","Overwrite latest","Cancel"))return this._workbenchRoute="review",!1;const a=e.yaml,l=await n.validate(a);if(!l.valid)return this._haConfigErrors=l.errors,await x(this,`${Ae.CONFIG_INVALID}\n${l.errors.join("\n")}`),!1;try{const i=await n.write(a,r?o.revision:s);this._isPublishedTargetCurrent(e.detail)&&(this._profileInfo=i,this._acceptPublishedSave(e,i.revision));const l=this._profileUsers.find(e=>e.id===t);return l&&(l.profile_exists=!0),t===this.hass.user?.id&&(q(fe("home_assistant_profile",t),e.detail.config),i.revision&&q($e.HA_CONFIG_REVISION,i.revision)),ue(this,{message:"Saved Sidebar Organizer user profile."}),e.detail}catch(e){const t=this._formatSaveError(e);return this._haConfigErrors=[t],await x(this,t),!1}},this._createSelectedProfile=async()=>{await this._saveHomeAssistantProfile()&&(this._selectedProfile!==this.hass.user?.id?this.requestUpdate():window.SidebarOrganizer.run())},this._deleteSelectedProfile=async()=>{if(this._saving)return;if("shared"===this._selectedProfile)return;if(await w(this,"Delete this personal sidebar profile and return the user to the shared default?","Reset profile","Cancel")&&!this._saving)try{const e=new de(this.hass,this._selectedProfile);this._profileInfo=await e.delete(this._profileInfo.revision);const t=this._profileUsers.find(e=>e.id===this._selectedProfile);t&&(t.profile_exists=!1),t&&!t.is_active?(this._profileUsers=this._profileUsers.filter(e=>e.id!==t.id),this._selectedProfile="shared",this._configSource="home_assistant_config",await this._validateHaConfig()):await this._reloadHomeAssistantProfile(),ue(this,{message:"Personal profile removed. Using the shared default."}),this._selectedProfile===this.hass.user?.id&&window.SidebarOrganizer.run()}catch(e){await x(this,e instanceof Error?e.message:String(e))}},this._copyIntoSelectedProfile=async()=>{if(this._saving)return;if("shared"===this._selectedProfile)return;if(await w(this,this._profileInfo.profile_exists?"Replace the selected user profile with the chosen configuration?":"Create this user profile from the chosen configuration?","Copy profile","Cancel")&&!this._saving)try{this._profileInfo=await new de(this.hass).copy(this._copySource,this._selectedProfile,this._profileInfo.revision);const e=this._profileUsers.find(e=>e.id===this._selectedProfile);e&&(e.profile_exists=!0),await this._reloadHomeAssistantProfile(),ue(this,{message:"Copied configuration to the selected user."}),this._selectedProfile===this.hass.user?.id&&window.SidebarOrganizer.run()}catch(e){await x(this,e instanceof Error?e.message:String(e))}},this._reloadHomeAssistantProfile=async()=>{"shared"!==this._selectedProfile&&(await this._validateHaProfile(this._selectedProfile),this._mainDialog._saveDisabled=!0)},this._subscribeSelectedProfile=async(e,t,i)=>{const s=this._profileUsers.find(t=>t.id===e);if(!this._connected||!1===s?.is_active)return;const n=await new de(this.hass,e).subscribe(async i=>{if(!this._connected||t!==this._profileLoadGeneration||this._selectedProfile!==e)return;if(this._saving||i.profile_exists===this._profileInfo.profile_exists&&(!i.revision||i.revision===this._profileInfo.revision))return;if(!this.hasUnsavedChanges)return void await this._reloadHomeAssistantProfile();await w(this,"This profile changed on another device while you have unsaved edits. Reload it now?","Reload","Later")&&!this._saving&&await this._reloadHomeAssistantProfile()});this._connected&&t===this._profileLoadGeneration&&this._selectedProfile===e?this._profileSubscription.accept(i,n):n()},this._handleInvalidConfig=async e=>{if(this._invalidConfig&&0!==Object.keys(this._invalidConfig).length)switch(e){case"check":const e=this._invalidConfig.config,t=await he(e,this.hass,!0);"object"==typeof t&&null!==t&&(this._invalidConfig=t,this.requestUpdate());break;case"auto-correct":const i=await pe(this._invalidConfig.config,this.hass);this._invalidConfig={...this._invalidConfig,config:i},this._handleInvalidConfig("check"),this.requestUpdate();break;case"save":if(!await he(this._invalidConfig.config,this.hass))return void await x(this,Ae.CONFIG_INVALID);this._sidebarConfig=this._invalidConfig.config,this._invalidConfig=void 0,this._useConfigFile=!1,this._configSource="browser_storage",this._mainDialog._configValid=!0,ie("browser_storage"),q($e.UI_CONFIG,this._sidebarConfig),this.requestUpdate()}else console.warn("No invalid config to handle")},this._updateSidebarItems=(e,t)=>{const i=this._utils.ARRAY;let s={...this._sidebarConfig||{}};const n=E(this.hass),o=i.uniq([...t,...s.hidden_items||[],n]);s=ge(s,o);const r=i.without(s.hidden_items||[],n);s.hidden_items=i.uniq(r),M(s.hidden_items)&&delete s.hidden_items;const a=JSON.stringify(this._sidebarConfig)!==JSON.stringify(s),l="home_assistant_config"===this._configSource||"home_assistant_profile"===this._configSource;a&&!l?(this._sidebarConfig=s,"browser_storage"===this._configSource&&q($e.UI_CONFIG,this._sidebarConfig)):a&&console.info("Sidebar Organizer kept the Home Assistant configuration unchanged; user-specific hidden/default panels are applied only to this preview.");const h=i.uniq(e),c=this._sidebarConfig?.new_items||[];this._newItems=c.map(e=>e.title),this._initCombiPanels=i.union(h,r),this._initPanelOrder=[...h],this._configLoaded=!0},this._saveHomeAssistantConfig=async()=>await this._withSaveLock(this._saveHomeAssistantConfigUnlocked),this._saveHomeAssistantConfigUnlocked=async()=>{const e=this._capturePublishedSave(),t=this._baselineRevision,i=this._lastLoadedHaConfigModified;if(await this._refreshHaConfigInfo(),!this._haConfigInfo.available)return await x(this,Ae.HA_CONFIG_UNAVAILABLE),!1;if(!this._haConfigInfo.allow_write)return await x(this,Ae.HA_CONFIG_WRITE_DISABLED),!1;const s=new ce(this.hass),n=await s.info(),o=t?n.revision!==t:Ty(i,n.last_modified);if(o&&!await w(this,"The Home Assistant config file changed after you loaded it. Overwrite it?","Overwrite","Cancel"))return!1;const r=e.yaml,a=await s.validate(r);if(!a.valid)return this._haConfigErrors=a.errors,await x(this,`${Ae.CONFIG_INVALID}\n${a.errors.join("\n")}`),!1;try{const i=o?n.revision:t,a=await s.write(r,i);return this._isPublishedTargetCurrent(e.detail)&&(this._haConfigInfo=a,this._haDiagnostics={...this._haDiagnostics,...a},this._lastLoadedHaConfigModified=a.last_modified??void 0,this._acceptPublishedSave(e,a.revision)),q(fe("home_assistant_config",this.hass.user?.id),e.detail.config),null!=a.last_modified&&q($e.HA_CONFIG_LAST_MODIFIED,a.last_modified),ue(this,{message:Ae.HA_CONFIG_SAVE_SUCCESS}),e.detail}catch(e){const t=this._formatSaveError(e);return this._haConfigErrors=[t],await x(this,t),!1}},this._restorePreviousVersion=async()=>{const e="home_assistant_profile"===this._configSource;if(!await w(this,`Restore the previous ${e?"personal profile":"shared configuration"}? The current version will remain available as the next backup.`,"Restore","Cancel"))return;await this._withSaveLock(async()=>{try{if(e){const e=new de(this.hass,this._selectedProfile),t=this._profileInfo.profile_exists?this._profileInfo.revision:null;this._profileInfo=await e.restore(t),await this._reloadHomeAssistantProfile()}else{const e=new ce(this.hass);this._haConfigInfo=await e.restore(this._haConfigInfo.revision),await this._reloadHomeAssistantConfig(!1)}return!0}catch(e){return await x(this,this._formatSaveError(e)),!1}})&&ue(this,{message:"Restored the previous Sidebar Organizer configuration."})},this._reloadHomeAssistantConfig=async(e=!0)=>{const t=new ce(this.hass),i=await t.read();if(!i.valid||!i.config)return this._haConfigErrors=i.errors,void await x(this,`${Ae.CONFIG_INVALID}\n${i.errors.join("\n")}`);this._sidebarConfig=i.config,this._baselineConfig=structuredClone(i.config),this._rawYaml=i.rawYaml||"",this._baselineRawYaml=this._rawYaml,this._baselineRevision=i.revision,this._lastLoadedHaConfigModified=i.last_modified??void 0,this._haConfigErrors=[],q(fe("home_assistant_config",this.hass.user?.id),i.config),null!=i.last_modified&&q($e.HA_CONFIG_LAST_MODIFIED,i.last_modified),await this._refreshHaConfigInfo(),e&&ue(this,{message:Ae.HA_CONFIG_RELOAD_SUCCESS})},this._validateHomeAssistantYaml=async()=>{const e="home_assistant_profile"===this._configSource?new de(this.hass,this._selectedProfile):new ce(this.hass),t=await e.validate(this._rawYaml.trim()?this._rawYaml:J.stringify(this._sidebarConfig));this._haConfigErrors=t.errors,await x(this,t.valid?Ae.CONFIG_VALID:`${Ae.CONFIG_INVALID}\n${t.errors.join("\n")}`)},this._refreshHaConfigInfo=async()=>{const e=new ce(this.hass);this._haConfigInfo=await e.info(),"home_assistant_config"===this._configSource&&(this._haDiagnostics=await e.diagnostics())},this._handleSharedConfigChanged=async e=>{if(this._saving||!e.revision||e.revision===this._haConfigInfo.revision)return;if(this._haConfigInfo={...this._haConfigInfo,...e},!this.hasUnsavedChanges)return void await this._reloadHomeAssistantConfig();await w(this,"The shared sidebar changed while you have unsaved edits. Reload it now?","Reload","Keep editing")&&!this._saving&&await this._reloadHomeAssistantConfig()},this._cleanItemsFromGroups=(e,t)=>{const i=k(this._sidebarConfig,[e]);return me(i,t)},this._getGroupOfPanel=e=>{const t=[...Object.entries(this._sidebarConfig.custom_groups||{}),...Object.entries(this._sidebarConfig.bottom_groups||{}),["bottom_items",this._sidebarConfig.bottom_items||[]],["bottom_grid_items",this._sidebarConfig.bottom_grid_items||[]]].find(([,t])=>t.includes(e));return t?t[0]:null}}connectedCallback(){super.connectedCallback(),this._connected=!0,this._previewMedia=window.matchMedia("(min-width: 1100px)"),this._desktopPreview=this._previewMedia.matches,this._previewMedia.addEventListener("change",this._previewMediaChanged),ve(this.hass.user?.id),this._configSource=te(),this._useConfigFile="static_yaml"===this._configSource,this.addEventListener("sidebar-config-changed",this._sidebarConfigChanged),this._refreshHaConfigInfo(),this._startHaConfigSubscription(),window.sidebarDialog=this}disconnectedCallback(){super.disconnectedCallback(),this._connected=!1,this._previewMedia?.removeEventListener("change",this._previewMediaChanged),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=void 0),window.clearTimeout(this._resizeMeasureTimer),this._resizeMeasureTimer=void 0,this._profileLoadGeneration+=1,this._profileSubscription.dispose(),this._configSubscription.dispose(),this._session?.destroy(),this._session=void 0,this._sessionIdentity=void 0}get hasUnsavedChanges(){return Iy(this._baselineConfig,this._sidebarConfig,this._baselineRawYaml,this._rawYaml,be(this._configSource))}get canWriteCurrentSource(){return!this._saving&&("home_assistant_profile"===this._configSource?Boolean(this._profileInfo.allow_write):"home_assistant_config"!==this._configSource||Boolean(this.hass.user?.is_admin&&this._haConfigInfo.allow_write))}get selectedProfileUserId(){return"home_assistant_profile"===this._configSource?this._selectedProfile:void 0}get saveBlockedReason(){return this._saving?"A configuration save is already in progress.":this.canWriteCurrentSource?this._session?.issues.some(e=>"error"===e.severity)?this._session.yamlValid?"Resolve the validation errors before applying.":"Fix the YAML errors before applying.":this._invalidConfig&&_e(this._invalidConfig)?"A panel is assigned more than once. Remove the duplicate assignment before saving.":this.hasUnsavedChanges?void 0:"No unsaved changes.":"This configuration is read-only for your account."}async _showDialogBox(e,t){return await we(this,e,t)}async _alert(e,t){return await this._showDialogBox("alert",{text:e,confirmText:t})}willUpdate(e){if(e.has("_connected")&&this._connected&&this._setupInitConfig(),e.has("_configSource")&&(this._useConfigFile="static_yaml"===this._configSource,this._startHaConfigSubscription()),e.has("_useConfigFile")&&(this._useConfigFile&&"static_yaml"===this._configSource?this._validateConfigFile():"browser_storage"===this._configSource&&void 0!==this._invalidConfig&&(this._invalidConfig=void 0,this._validateStoragePanels(),this._mainDialog._configValid=this.isValidConfig,this.requestUpdate())),e.has("_invalidConfig")&&this._invalidConfig){const e=this.isValidConfig;this._mainDialog._configValid=e,this.requestUpdate()}if(e.has("_settingItemMoved"))if(this._settingItemMoved&&!this._initCombiPanels.includes("config"))this._initCombiPanels.push("config");else if(!this._settingItemMoved){this._initCombiPanels=this._initCombiPanels.filter(e=>"config"!==e);const e=this._getGroupOfPanel("config");if(null!==e){const t=[R.BOTTOM_ITEMS,R.BOTTOM_GRID_ITEMS].includes(e)?e:R.CUSTOM_GROUPS,i=this._cleanItemsFromGroups(t,["config"]);this._sidebarConfig={...this._sidebarConfig,...i}}}if(e.has("_uncategorizedIsActive")&&void 0!==this._uncategorizedIsActive&&this._uncategorizedIsActive){const e={...this._sidebarConfig||{}},t={...e.custom_groups||{}},i=t?.[R.UNCATEGORIZED_ITEMS]||[],s=this.uncategorizedItems;if(JSON.stringify(i.sort())!==JSON.stringify(s.sort())){const i=[...s];t[R.UNCATEGORIZED_ITEMS]=i;const n={...e,custom_groups:t};this._sidebarConfig={...this._sidebarConfig,...n}}}e.has("_configLoaded")&&!0===this._configLoaded&&!this._resizeObserver&&(window.clearTimeout(this._resizeMeasureTimer),this._resizeMeasureTimer=window.setTimeout(()=>{this._resizeMeasureTimer=void 0,this.isConnected&&this._measureConfigSection()},100))}shouldUpdate(e){return e.has("_sidebarConfig")&&this._sidebarConfig,!0}get isValidConfig(){let e=!this._invalidConfig||0===Object.keys(this._invalidConfig).length;return this._useConfigFile&&(e=!1!==this._invalidConfig?.valid),e}updated(e){if(this._configLoaded&&e.has("_sidebarConfig")&&this._sidebarConfig){const t=e.get("_sidebarConfig"),i=this._sidebarConfig;if(void 0!==t&&i){JSON.stringify(t.new_items)!==JSON.stringify(i.new_items)&&i.new_items&&(this._newItemMap=new Map(i.new_items.map(e=>[e.title,e])));JSON.stringify(t.pinned_groups)!==JSON.stringify(i.pinned_groups)&&i.pinned_groups&&(this._pinnedGroupsMap=new Map(Object.entries(ye(i.pinned_groups)))),this._settingItemMoved=!0===i.move_settings_from_fixed,this._uncategorizedIsActive=void 0,this._uncategorizedIsActive=!!(!0===i.uncategorized_items||i.custom_groups&&Array.isArray(i.custom_groups[R.UNCATEGORIZED_ITEMS])&&i.custom_groups[R.UNCATEGORIZED_ITEMS].length>0)}const s=[...this._newItems];JSON.stringify(s)!==JSON.stringify(i.new_items?.map(e=>e.title)||[])&&(this._newItems=i.new_items?.map(e=>e.title)||[],this._initCombiPanels=this._initCombiPanels.filter(e=>!s.includes(e)),this._initCombiPanels=[...this._initCombiPanels,...Array.from(this._newItems)]);const n={...i.custom_groups||{},...i.bottom_groups||{},bottom_items:i.bottom_items||[],bottom_grid_items:i.bottom_grid_items||[]};this._panelConfigMap=new Map(Object.entries(n));const o=JSON.stringify(this._baselineConfig)!==JSON.stringify(i);this._mainDialog._saveDisabled=!o||!this.canWriteCurrentSource,void 0===this._store&&this._createStore()}}_measureConfigSection(){if(!this.isConnected||this._resizeObserver)return;const e=this.shadowRoot?.getElementById("sidebar-config");e&&(this._resizeObserver=new ResizeObserver(e=>{if(!this.isConnected)return;const t=this.shadowRoot?.querySelector(Le.PREVIEW);if(t)for(const i of e){const{height:e,width:s}=i.contentRect;this._narrow=s<600;e>800&&!this.fullscreen?t.style.setProperty("--config-section-height",`${Math.round(e)}px`):t.style.removeProperty("--config-section-height")}}),this._resizeObserver.observe(e))}render(){return this._configLoaded?(this._createStore(),this._ensureSession(),this._renderWorkbench()):n`
        <div class="loading-content">
          <ha-fade-in .delay=${500}><ha-spinner size="large"></ha-spinner></ha-fade-in>
        </div>
      `}_currentSessionIdentity(){const e="home_assistant_profile"===this._configSource?this._selectedProfile:"shared";return`${this.hass.user?.id||"anonymous"}:${this._configSource}:${e}:${this._baselineRevision||""}`}_ensureSession(){const e="home_assistant_profile"===this._configSource?this._selectedProfile:"shared",t=this._currentSessionIdentity();if(this._session&&this._sessionIdentity===t)return;this._session?.destroy(),this._sessionIdentity=t,this._session=new sx({userId:this.hass.user?.id||"anonymous",source:this._configSource,target:e,baselineRevision:this._baselineRevision,rawYaml:this._baselineRawYaml||this._rawYaml,config:this._sidebarConfig,activeRoute:this._workbenchRoute,onChange:e=>{this._workbenchRoute=e.activeRoute,this._mainDialog._configValid=!e.issues.some(e=>"error"===e.severity),this._mainDialog._saveDisabled=Boolean(this.saveBlockedReason),this.requestUpdate()}});const i=this._session.draftState();this._draftOffer="none"===i.state?void 0:i}_renderWorkbench(){const e=this._session,t=e.issues.filter(e=>"error"===e.severity).length,i=this._activeTargetName(),s={organize:{route:"organize",label:"Organize",icon:"mdi:format-list-group"},appearance:{route:"appearance",label:"Appearance",icon:"mdi:palette-outline"}},o=nx.map(e=>s[e]);return n`
      <div class="workbench">
        <header class="workbench-header" ?inert=${this._previewOpen&&!this._desktopPreview}>
          <label class="target-picker">
            <span>Editing sidebar</span>
            <select
              aria-label="Sidebar to edit"
              .value=${Zt(be(this._configSource)?this._selectedProfile:this._configSource)}
              ?disabled=${this._saving||!be(this._configSource)}
              @change=${e=>this._handleProfileSelected(new CustomEvent("profile-selected",{detail:{value:e.target.value}}))}
            >
              ${be(this._configSource)?n`<option value="shared" ?selected=${"shared"===this._selectedProfile}>Shared sidebar</option>
                    ${this._profileUsers.filter(e=>e.is_active&&!e.system_generated||this.hass.user?.is_admin&&e.profile_exists).map(e=>n`<option value=${e.id} ?selected=${this._selectedProfile===e.id}>
                            ${e.name}${e.id===this.hass.user?.id?" (you)":""}
                          </option>`)}`:n`<option value=${this._configSource} selected>${i}</option>`}
            </select>
          </label>
          <p class="target-audience">${this._targetAudience()}</p>
          ${t?n`<button class="issues-link" @click=${()=>this._goToRoute("review")}>
                ${t} issue${1===t?"":"s"}
              </button>`:a}
          <ha-button appearance="plain" class="preview-toggle" @click=${this._openPreview}>
            <ha-icon slot="start" icon="mdi:eye-outline"></ha-icon>Preview
          </ha-button>
        </header>

        <nav class="workspace-nav" aria-label="Sidebar settings" ?inert=${this._previewOpen&&!this._desktopPreview}>
          ${o.map(({route:t,label:i,icon:s})=>n`<button
                class="task-link"
                data-active=${t===this._workbenchRoute||"organize"===t&&"items"===this._workbenchRoute}
                aria-current=${p(t===this._workbenchRoute?"page":void 0)}
                @click=${()=>this._goToRoute(t)}
              >
                <ha-icon icon=${s}></ha-icon>${i}
                ${e.issues.some(e=>e.route===t||"organize"===t&&"items"===e.route)?n`<ha-icon class="stage-error" icon="mdi:alert-circle"></ha-icon>`:a}
              </button>`)}
          <ha-dropdown
            class="advanced-menu"
            @wa-select=${e=>{const t=e.detail.item?.value;"yaml"!==t&&"sidebar"!==t||this._goToRoute(t)}}
          >
            <ha-button slot="trigger" appearance="plain" with-caret>Advanced</ha-button>
            <ha-dropdown-item value="yaml">YAML editor</ha-dropdown-item>
            <ha-dropdown-item value="sidebar">Profiles, sync and maintenance</ha-dropdown-item>
          </ha-dropdown>
        </nav>
        <div class="workbench-notice" ?inert=${this._previewOpen&&!this._desktopPreview}>
          ${this._draftOffer?this._renderDraftRecovery(this._draftOffer):a}
        </div>
        <div class="workbench-body">
          <main class="editor-canvas" ?inert=${this._previewOpen&&!this._desktopPreview}>
            ${e.yamlValid||"yaml"===this._workbenchRoute?a:n`<ha-alert alert-type="warning" class="stale-preview-alert">
                  YAML contains errors. Visual controls and preview show the last valid version.
                  <ha-button appearance="plain" size="s" @click=${()=>this._goToRoute("yaml")}>Fix YAML</ha-button>
                </ha-alert>`}
            <div
              ?hidden=${"organize"!==this._workbenchRoute&&"items"!==this._workbenchRoute}
              ?inert=${!e.yamlValid}
            >
              ${this._renderStage("Organize","",n`<section class="settings-section">${this._renderPanelConfig("layout")}</section>`)}
            </div>
            <div ?hidden=${"appearance"!==this._workbenchRoute} ?inert=${!e.yamlValid}>
              ${this._renderStage("Appearance","",this._renderBaseConfig())}
            </div>
            ${this._renderWorkbenchRoute()}
          </main>

          <aside
            class=${this._desktopPreview?"desktop-preview":"preview-drawer"}
            ?open=${this._previewOpen}
            ?hidden=${!this._desktopPreview&&!this._previewOpen}
            ?inert=${!this._desktopPreview&&!this._previewOpen}
            aria-label="Live sidebar preview"
            role=${p(this._desktopPreview?void 0:"dialog")}
            aria-modal=${p(this._desktopPreview?void 0:"true")}
            @keydown=${this._previewKeydown}
          >
            ${this._desktopPreview?n`<div class="preview-heading"><span>Live preview</span><small>Updates as you edit</small></div>`:n`<div class="drawer-header">
                  <strong>Sidebar preview</strong>
                  <ha-icon-button
                    .label=${"Close preview"}
                    .path=${"M19,6.41 17.59,5 12,10.59 6.41,5 5,6.41 10.59,12 5,17.59 6.41,19 12,13.41 17.59,19 19,17.59 13.41,12z"}
                    @click=${this._closePreview}
                  ></ha-icon-button>
                </div>`}
            ${this._renderSidebarPreview()}
          </aside>
        </div>

        <footer class="workbench-actions" ?inert=${this._previewOpen&&!this._desktopPreview}>
          <div class="apply-state">
            ${n`<span
              >${e.dirty?"Draft on this device · Not applied":"No unapplied changes"}${this.saveBlockedReason&&e.dirty?n`<small>${this.saveBlockedReason}</small>`:a}</span
            >`}
          </div>
          <div class="action-buttons">
            ${e.dirty?n`<ha-button appearance="plain" destructive @click=${this._discardDraft}>Discard draft</ha-button>`:a}
            <ha-button appearance="plain" @click=${()=>this._mainDialog.closeDialog()}>Close</ha-button>
            <ha-button
              appearance="accent"
              .disabled=${"review"===this._workbenchRoute&&Boolean(this.saveBlockedReason)}
              @click=${()=>"review"===this._workbenchRoute?this._requestApply():this._goToRoute("review")}
            >
              ${"review"===this._workbenchRoute?`Apply to ${i}`:"Review changes"}
            </ha-button>
          </div>
        </footer>

        <div class="preview-scrim" ?open=${this._previewOpen} @click=${this._closePreview}></div>
      </div>
    `}_renderWorkbenchRoute(){return"sidebar"===this._workbenchRoute?this._renderStage("Profiles and sync","",this._renderSettingsOverview()):"yaml"===this._workbenchRoute?this._renderYamlWorkbench():"review"===this._workbenchRoute?this._renderReview():a}_renderStage(e,t,i){return n`<section class="stage">
      <div class="stage-heading">
        <h1 tabindex="-1">${e}</h1>
        ${t?n`<p>${t}</p>`:a}
      </div>
      ${i}
    </section>`}_renderYamlWorkbench(){const e=this._session;return this._renderStage("YAML","Edit the same configuration directly. Formatting runs only when you ask for it.",n`
        <div class="yaml-toolbar">
          <ha-button appearance="plain" @click=${this._formatYaml}
            ><ha-icon slot="start" icon="mdi:format-align-left"></ha-icon>Format YAML</ha-button
          >
          <span>Shortcut: Shift + Alt + F</span>
        </div>
        <sidebar-workbench-yaml-editor
          .value=${e.rawYaml}
          .issues=${e.issues.filter(e=>"yaml"===e.route)}
          @yaml-changed=${this._yamlChanged}
          @format-yaml=${this._formatYaml}
        ></sidebar-workbench-yaml-editor>
        ${this._renderProblems(e.issues)}
      `)}_renderReview(){const e=this._session,t="home_assistant_profile"===this._configSource?this._profileInfo:this._haConfigInfo;return this._renderStage("Review changes","Check your changes, then apply them to the selected sidebar.",n`
        <div class="review-grid">
          <section class="workbench-card review-summary">
            <h2>Apply to ${this._activeTargetName()}</h2>
            <p>${this._targetAudience()}</p>
            <dl>
              <div>
                <dt>Target</dt>
                <dd>${this._activeTargetName()}</dd>
              </div>
              <div>
                <dt>Backup</dt>
                <dd>
                  ${t.backup_exists||"profile_backup_exists"in t&&t.profile_backup_exists?"Available":"Created when you apply"}
                </dd>
              </div>
            </dl>
            <div class="review-actions">
              <ha-button appearance="plain" @click=${this._downloadCurrentDraft}>Download draft</ha-button>
              ${be(this._configSource)?n`<ha-button appearance="plain" @click=${this._reloadLatestForRecovery}>Reload latest</ha-button>`:a}
            </div>
          </section>
          <section class="workbench-card">
            <h2>Changes</h2>
            ${e.changes.length?n`<ul class="change-list">
                  ${e.changes.map(e=>n`<li><span data-kind=${e.kind}>${e.kind}</span>${e.label}</li>`)}
                </ul>`:n`<p class="empty-state">
                  ${e.yamlValid?e.dirty?"YAML comments or formatting changed.":"No changes to apply.":"Repair the YAML before applying."}
                </p>`}
          </section>
        </div>
        ${this._renderProblems(e.issues)}
        <details class="workbench-card raw-diff">
          <summary><strong>Raw YAML comparison</strong><small>Baseline and current draft</small></summary>
          <div class="diff-columns">
            <div>
              <h3>Published</h3>
              <pre>${e.baselineRawYaml}</pre>
            </div>
            <div>
              <h3>Draft</h3>
              <pre>${e.rawYaml}</pre>
            </div>
          </div>
        </details>
      `)}_renderProblems(e){return n`<section class="workbench-card problems">
      <h2>Problems <span>${e.length}</span></h2>
      ${e.length?n`<ul>
            ${e.map(e=>n`<li>
                  <button @click=${()=>this._openIssue(e)}>
                    <ha-icon icon=${"error"===e.severity?"mdi:alert-circle":"mdi:alert-outline"}></ha-icon
                    ><span
                      ><strong>${e.message}</strong
                      ><small
                        >${e.line?`Line ${e.line}, column ${e.column||1}`:e.path.join(".")||e.route}</small
                      ></span
                    >
                  </button>
                </li>`)}
          </ul>`:n`<p class="empty-state">
            <ha-icon icon="mdi:check-circle-outline"></ha-icon>No validation problems found.
          </p>`}
    </section>`}_renderDraftRecovery(e){const t="stale"===e.state;return n`<ha-alert alert-type=${t?"warning":"info"} class="draft-recovery">
      <div>
        <strong
          >${t?"A draft was created from an older published revision.":"A recoverable draft is available."}</strong
        >
        <span
          >${t?"Compare or download it before choosing whether to recover it.":`Last edited ${new Date(e.draft.timestamp).toLocaleString()}.`}</span
        >
      </div>
      <div class="draft-actions">
        ${t?n`<ha-button appearance="plain" @click=${()=>this._downloadDraft(e.draft)}>Download</ha-button>`:a}
        <ha-button appearance="plain" @click=${this._discardOfferedDraft}>Discard</ha-button>
        <ha-button appearance="accent" @click=${()=>this._resumeDraft(e.draft)}
          >${t?"Open recovery copy":"Resume"}</ha-button
        >
      </div>
    </ha-alert>`}_goToRoute(e){const t="items"===e?"organize":e,i=this.shadowRoot?.querySelector(".editor-canvas");this._routeScroll.set(this._workbenchRoute,i?.scrollTop||0),this._workbenchRoute=t,this._session?.setRoute(t),this.updateComplete.then(()=>{i&&(i.scrollTop=this._routeScroll.get(t)||0),this.shadowRoot?.querySelector(".editor-canvas > :not([hidden]) h1")?.focus({preventScroll:!0})})}_targetAudience(){return"home_assistant_config"===this._configSource?"Used by everyone without a personal sidebar.":"home_assistant_profile"===this._configSource?"Personal sidebar, available on this user’s devices.":"browser_storage"===this._configSource?"Used only in this browser.":"Loaded from your legacy YAML file."}showPreview(e,t){this._openPreview(),this.updateComplete.then(()=>{t?this._dialogPreview?.revealItem(t):e&&this._dialogPreview?._toggleGroup(e,"show")})}navigateWorkbench(e){this._goToRoute(e)}_activeTargetName(){return"home_assistant_profile"===this._configSource?"shared"===this._selectedProfile?"shared sidebar":this._profileUsers.find(e=>e.id===this._selectedProfile)?.name||"Personal profile":"home_assistant_config"===this._configSource?"shared sidebar":"static_yaml"===this._configSource?"Legacy YAML file":"This browser"}_yamlChanged(e){e.stopPropagation(),this._session.setRawYaml(e.detail.yaml),this._rawYaml=e.detail.yaml,this._session.yamlValid&&(this._sidebarConfig=structuredClone(this._session.config),"static_yaml"===this._configSource&&this._invalidConfig&&(this._invalidConfig={...this._invalidConfig,config:this._sidebarConfig,valid:!0}))}_formatYaml(){try{this._session.formatYaml(),this._rawYaml=this._session.rawYaml,this._sidebarConfig=structuredClone(this._session.config)}catch{ue(this,{message:"Fix YAML errors before formatting."})}}_openIssue(e){const t=this._session?.yamlValid?e.route:"yaml";this._goToRoute(t),this.updateComplete.then(()=>{"yaml"===t?this.shadowRoot?.querySelector("sidebar-workbench-yaml-editor")?.revealIssue(e):"organize"!==t&&"items"!==t||this._dialogPanels?.revealIssue(e.path)})}_requestApply(){this.dispatchEvent(new CustomEvent("workbench-apply",{bubbles:!0,composed:!0}))}_previewKeydown(e){if(this._previewOpen&&!this._desktopPreview){if("Escape"===e.key)return e.preventDefault(),void this._closePreview();if("Tab"===e.key){const t=this.shadowRoot?.querySelector(".preview-drawer"),i=[],s=e=>{for(const t of e.children)t instanceof HTMLElement&&!t.hidden&&!t.inert&&!t.hasAttribute("disabled")&&t.getClientRects().length&&(t.tabIndex>=0?i.push(t):t.shadowRoot&&s(t.shadowRoot),s(t))};if(t&&s(t),!i.length)return;const n=i[0],o=i.at(-1);e.shiftKey&&e.composedPath().includes(n)?(e.preventDefault(),o.focus()):!e.shiftKey&&e.composedPath().includes(o)&&(e.preventDefault(),n.focus())}}}_resumeDraft(e){this._session.resumeDraft(e),this._rawYaml=e.rawYaml,this._session.yamlValid&&(this._sidebarConfig=structuredClone(this._session.config)),this._draftOffer=void 0,this._workbenchRoute=e.baselineRevision===this._baselineRevision?e.activeRoute:"review"}_discardOfferedDraft(){this._session.discardDraft(),this._draftOffer=void 0}_downloadDraft(e){const t=URL.createObjectURL(new Blob([e.rawYaml],{type:"application/x-yaml"})),i=document.createElement("a");i.href=t,i.download="sidebar-organizer-recovered-draft.yaml",i.click(),URL.revokeObjectURL(t)}_markSessionApplied(){const e=this._rawYaml.trim()?this._rawYaml:J.stringify(this._sidebarConfig);this._session?.markApplied(e,this._sidebarConfig,this._baselineRevision)}_createStore(){this._store||(this._store=new Ey(this))}_renderSettingsOverview(){const e=this._configSource,t="home_assistant_config"===e||"home_assistant_profile"===e,i=this._profileUsers.find(e=>e.id===this._selectedProfile),s="home_assistant_profile"===e?`Personal profile — ${i?.name||this.hass.user?.name||"current user"}`:"home_assistant_config"===e?"Shared default":"static_yaml"===e?"Legacy /local YAML file":"This browser only",o=t?"Saved by Home Assistant and automatically used on every device where this user signs in.":"static_yaml"===e?"Loaded from a legacy public YAML file. Changes are not managed by Home Assistant.":"Saved only in this browser. It will not follow the user to another device.",r="home_assistant_profile"===e?this._profileInfo:this._haConfigInfo;return n`
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
            <strong>${s}</strong>
          </div>

          ${this._panelWarnings.map(e=>n`<ha-alert alert-type="warning" class="panel-warning">${e}</ha-alert>`)}
          ${this._invalidConfig&&_e(this._invalidConfig)?n`<ha-alert alert-type="error">
                A panel is assigned more than once. Open Organize and remove duplicate assignments before saving.
              </ha-alert>`:a}
          ${this._haConfigErrors.length?n`<ha-alert alert-type="error">${this._haConfigErrors.join(" ")}</ha-alert>`:a}
          ${t?this._renderProfileSelector():n`<ha-alert alert-type="info">
                Install and configure the Sidebar Organizer integration to sync sidebars through Home Assistant.
              </ha-alert>`}
          ${t?n`<details class="technical-details">
                <summary>Technical details and maintenance</summary>
                ${this._renderHaDiagnostics(r)}
              </details>`:a}
        </div>
      </section>
    `}_renderSidebarPreview(){const e={"--so-force-transparent-background":!0===this._sidebarConfig.force_transparent_background?"transparent":void 0};return n`
      <div id="sidebar-preview" style=${ti(e)}>
        <sidebar-dialog-preview
          .hass=${this.hass}
          ._store=${this._store}
          ._sidebarConfig=${this._sidebarConfig}
          .invalidConfig=${!this.isValidConfig}
          @item-clicked=${this._handleItemClicked}
        ></sidebar-dialog-preview>
      </div>
    `}_renderBaseConfig(){return n` <sidebar-dialog-colors
      .hass=${this.hass}
      ._store=${this._store}
      ._sidebarConfig=${this._sidebarConfig}
      @sidebar-changed=${this._handleSidebarChanged}
    ></sidebar-dialog-colors>`}_renderPanelConfig(e){return n` <sidebar-dialog-panels
      .hass=${this.hass}
      ._store=${this._store}
      ._sidebarConfig=${this._sidebarConfig}
      .workbenchMode=${e}
      @sidebar-changed=${this._handleSidebarChanged}
    ></sidebar-dialog-panels>`}_renderNewItemsConfig(){return n`
      <sidebar-dialog-new-items
        .hass=${this.hass}
        ._store=${this._store}
        ._sidebarConfig=${this._sidebarConfig}
        @sidebar-changed=${this._handleSidebarChanged}
        @item-clicked=${this._handleItemClicked}
      ></sidebar-dialog-new-items>
    `}_renderProfileSelector(){const e=this.hass.user?.id,t=[{value:"shared",label:"Shared default"},...this._profileUsers.filter(e=>e.is_active&&!e.system_generated||this.hass.user?.is_admin&&!e.is_active&&e.profile_exists).map(t=>({value:t.id,label:`${t.name}${t.id===e?" (you)":""}${t.is_active?t.profile_exists?"":" — inherited":" — deleted user"}`}))],i=this._profileUsers.find(e=>e.id===this._selectedProfile),s=Boolean("shared"!==this._selectedProfile&&(this.hass.user?.is_admin||this._selectedProfile===e)&&this._profileInfo.allow_write&&!this._saving);return n`
      <div class="profile-selector">
        <div class="profile-selector-heading">
          <strong>Sidebar used by</strong>
          <span>Choose whose sidebar you want to view or manage.</span>
        </div>
        <ha-selector
          .hass=${this.hass}
          .selector=${{select:{mode:"dropdown",options:t}}}
          .value=${this._selectedProfile}
          .disabled=${this._saving}
          @value-changed=${this._handleProfileSelected}
        ></ha-selector>
        <span>
          ${"shared"===this._selectedProfile?"The shared default is used automatically by everyone without a personal profile.":this._profileInfo.profile_exists?`${i?.name||this._selectedProfile} has a personal sidebar that overrides the shared default.`:`${i?.name||this._selectedProfile} currently inherits the shared default.`}
        </span>
        ${"shared"!==this._selectedProfile&&!this._profileInfo.profile_exists&&s?n`<ha-button appearance="plain" size="s" @click=${this._createSelectedProfile}
              >Create personal copy</ha-button
            >`:a}
        ${"shared"!==this._selectedProfile&&this._profileInfo.profile_exists&&s?n`<ha-button appearance="plain" size="s" @click=${this._deleteSelectedProfile}
              >Reset to shared default</ha-button
            >`:a}
        ${this.hass.user?.is_admin&&"shared"!==this._selectedProfile?n`<ha-alert alert-type="info">
              Preview uses your administrator panel access. Panels unavailable to the selected user are ignored at
              runtime.
            </ha-alert>`:a}
        ${this.hass.user?.is_admin&&s&&"shared"!==this._selectedProfile&&i?.is_active?this._renderCopyProfileControls():a}
        ${"shared"!==this._selectedProfile&&this._selectedProfile!==e||"home_assistant_config"!==this._configSource&&"home_assistant_profile"!==this._configSource?a:n`<ha-formfield label="Sync collapsed groups across devices">
              <ha-switch
                .checked=${this._syncCollapsedGroups}
                ?disabled=${!("home_assistant_profile"===this._configSource?this._profileInfo.allow_preference_write:this._haConfigInfo.allow_preference_write)}
                @change=${this._handlePreferenceSyncChanged}
              ></ha-switch>
            </ha-formfield>`}
      </div>
    `}_renderCopyProfileControls(){const e=[{value:"shared",label:"Shared default"},...this._profileUsers.filter(e=>e.profile_exists&&e.id!==this._selectedProfile).map(e=>({value:e.id,label:e.name}))];return n`
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
    `}_renderSyncStatus(e,t,i){const s=C.BTN_LABEL,o=t?"home_assistant_profile"===this._configSource?e.allow_write?"Personal profile synced through Home Assistant":"Personal profile is read-only":e.allow_write?"Synced to Home Assistant config":"Home Assistant config is read-only":i?"Using legacy /local YAML":"Using browser storage fallback";return n`
      <div class="header-row">
        <div class="sync-status">
          <ha-icon .icon=${t?"mdi:sync":i?"mdi:file-code-outline":"mdi:database"}></ha-icon>
          <span>${o}</span>
        </div>
        <ha-button appearance="plain" size="s" .label=${s.UPLOAD} @click=${()=>this._uploadConfigFile()}
          >${s.UPLOAD}</ha-button
        >
      </div>
    `}_renderHaDiagnostics(e){return n`
      <div class="ha-config-diagnostics">
        ${this._renderDiagnosticRow("Backend loaded",e.available||e.backend_loaded)}
        ${this._renderDiagnosticRow("Config file exists",e.exists)}
        ${this._renderDiagnosticRow("Write enabled",e.allow_write)}
        ${"home_assistant_profile"===this._configSource?this._renderDiagnosticRow("Personal profile exists",this._profileInfo.profile_exists):a}
        <span>Path: ${e.config_path||"not reported"}</span>
        ${"home_assistant_config"===this._configSource&&e.profiles_path?n`<span>Profiles: ${e.profiles_path}</span>`:a}
        ${e.storage_health?n`
              <span>Profile storage owned: ${e.storage_health.profile_directory_owned?"yes":"no"}</span>
              <span>Filesystem watcher active: ${e.storage_health.watcher_active?"yes":"no"}</span>
              ${void 0===e.storage_health.profile_count?a:n`<span>Personal profiles: ${e.storage_health.profile_count}</span>`}
            `:a}
        <span>Last modified: ${this._formatLastModified(e.last_modified)}</span>
        <span>Schema: v${e.schema_version||1}</span>
        <span>Revision: ${e.revision?e.revision.slice(0,12):"not created"}</span>
        <span>
          Previous version:
          ${"home_assistant_profile"===this._configSource?this._profileInfo.profile_backup_exists?"available":"not available":e.backup_exists?"available":"not available"}
        </span>
      </div>
      <div class="ha-config-actions">
        <ha-button
          appearance="plain"
          size="s"
          .disabled=${this._saving}
          @click=${"home_assistant_profile"===this._configSource?this._reloadHomeAssistantProfile:this._reloadHomeAssistantConfig}
          >Reload from HA config</ha-button
        >
        <ha-button appearance="plain" size="s" @click=${this._validateHomeAssistantYaml}>Validate YAML</ha-button>
        ${("home_assistant_profile"===this._configSource?this._profileInfo.profile_backup_exists:e.backup_exists)&&this.canWriteCurrentSource?n`<ha-button appearance="plain" size="s" @click=${this._restorePreviousVersion}
              >Restore previous version</ha-button
            >`:a}
        <ha-button appearance="plain" size="s" @click=${this._downloadDiagnostics}>Download diagnostics</ha-button>
      </div>
    `}_renderDiagnosticRow(e,t){return n`<span>${e}: ${t?"yes":"no"}</span>`}_uploadConfigFile(){const e=document.createElement("input");e.type="file",e.accept=".yaml",e.style.display="none",e.onchange=()=>{const t=e.files?.[0];if(!t)return;this._uploading=!0;const i=new FileReader;i.onload=async e=>{try{const t=e.target?.result,i=xe(t);if(!i.valid||!i.config)return void await x(this,`${Ae.CONFIG_INVALID}\n${i.errors.join("\n")}`);const s=i.config,n=await he(s,this.hass,!0);if("object"!=typeof n||null===n)return;if(n.valid){this._invalidConfig=void 0;if(!await w(this,Ae.UPLOAD_SUCCESS_VALID_RELOAD,"OK"))return;if(this._sidebarConfig=s,"home_assistant_config"!==this._configSource&&"home_assistant_profile"!==this._configSource||(this._rawYaml=t,this._session?.setRawYaml(t)),"home_assistant_config"===this._configSource||"home_assistant_profile"===this._configSource){if(!("home_assistant_profile"===this._configSource?await this._saveHomeAssistantProfile():await this._saveHomeAssistantConfig()))return;return void window.SidebarOrganizer.run()}const e=()=>new Promise(e=>{this._configSource="browser_storage",this._useConfigFile=!1,ie("browser_storage"),q($e.UI_CONFIG,this._sidebarConfig),ae($e.PANEL_ORDER),ae($e.HIDDEN_PANELS),e()});await e(),window.SidebarOrganizer.run()}else this._invalidConfig=n,await x(this,Ae.INVALID_UPLOADED_CONFIG),this.requestUpdate()}catch(e){console.error("Error parsing YAML file",e),await x(this,e instanceof Error?e.message:String(e))}finally{this._uploading=!1}},i.onerror=()=>{this._uploading=!1,x(this,"Could not read the selected YAML file.")},i.readAsText(t)},document.body.appendChild(e),e.click(),document.body.removeChild(e)}_handleSidebarChanged(e){e.stopPropagation();const t=e.detail;this._session&&!this._session.yamlValid||(this._sidebarConfig=t,"static_yaml"===this._configSource&&this._invalidConfig&&(this._invalidConfig={...this._invalidConfig,config:t,valid:!0}),this._session&&(this._session.setConfig(t),this._rawYaml=this._session.rawYaml))}_applyHomeAssistantPanelValidation(e){const t=E(this.hass),i=Array.from(new Set((e.invalidItems||[]).filter(e=>e!==t))),s=[];e.hasDefaultInGroupsOrBottom&&t&&s.push(`Your default dashboard (${t}) stays fixed in the sidebar for this account, so its grouped copy is ignored. The saved configuration is unchanged.`),i.length&&s.push(`These panels are not available to the account currently previewing this sidebar, so they are preserved but skipped: ${i.join(", ")}.`),this._panelWarnings=s,this._invalidConfig=_e(e)?e:void 0}_sidebarConfigChanged(e){e.stopPropagation();const t=e.detail.config;this._session&&!this._session.yamlValid||(this._sidebarConfig=t,"static_yaml"===this._configSource&&this._invalidConfig&&(this._invalidConfig={...this._invalidConfig,config:t,valid:!0}),this._session&&(this._session.setConfig(t),this._rawYaml=this._session.rawYaml))}_capturePublishedSave(){return{detail:{config:structuredClone(this._sidebarConfig),configSource:this._configSource,profileUserId:this.selectedProfileUserId,useConfigFile:this._useConfigFile},yaml:this._rawYaml.trim()?this._rawYaml:J.stringify(this._sidebarConfig),draftRawYaml:this._rawYaml,session:this._session}}_isPublishedTargetCurrent(e){return this._configSource===e.configSource&&this.selectedProfileUserId===e.profileUserId}_acceptPublishedSave(e,t){this._rawYaml===e.draftRawYaml&&(this._rawYaml=e.yaml),this._baselineRawYaml=e.yaml,this._baselineConfig=structuredClone(e.detail.config),this._baselineRevision=t,this._haConfigErrors=[],this._session===e.session&&(this._session?.acknowledgePublished(e.yaml,e.detail.config,t),this._sessionIdentity=this._currentSessionIdentity()),this.requestUpdate()}async _withSaveLock(e){if(this._saving)return!1;this._saving=!0,this.requestUpdate();try{return await e()}finally{this._saving=!1,this.requestUpdate()}}_clearServerYamlDraft(){this._rawYaml="",this._baselineRawYaml=""}_startHaConfigSubscription(){const e=this._configSubscription.begin();if("home_assistant_config"!==this._configSource||!this._connected)return;new ce(this.hass).subscribe(this._handleSharedConfigChanged).then(t=>{this._connected&&"home_assistant_config"===this._configSource?this._configSubscription.accept(e,t):t()}).catch(e=>console.warn("Could not subscribe to shared sidebar changes.",e))}_legacyFrontendResourceLoaded(){return Array.from(document.scripts).some(e=>e.src.includes("/hacsfiles/sidebar-organizer/sidebar-organizer.js"))}_formatLastModified(e){return e?new Date(1e3*e).toLocaleString():"unknown"}_formatSaveError(e){const t=e instanceof Error?e.message:String(e);return t.includes("revision_conflict")||t.toLowerCase().includes("changed after")?"This sidebar changed on another device after you opened it. Reload the latest version, then apply your changes again.":t}get pickedItems(){return[...Object.values(this._sidebarConfig.custom_groups||{}).flat(),...Object.values(this._sidebarConfig.bottom_groups||{}).flat(),...this._sidebarConfig.bottom_items||[],...this._sidebarConfig.bottom_grid_items||[]]}get ungroupedItems(){const e=E(this.hass),t=new Set([...this.pickedItems,...this._sidebarConfig?.hidden_items||[],e,...this._sidebarConfig.move_settings_from_fixed?[]:["config"]]);return this._initCombiPanels.filter(e=>!t.has(e))}get uncategorizedFromCustom(){if(this._sidebarConfig[R.CUSTOM_GROUPS]&&!this._sidebarConfig[R.CUSTOM_GROUPS].hasOwnProperty(R.UNCATEGORIZED_ITEMS))return this._sidebarConfig[R.CUSTOM_GROUPS][R.UNCATEGORIZED_ITEMS]}get pickedWithoutUncategorizedFromCustom(){const e=this._sidebarConfig[R.CUSTOM_GROUPS]?.[R.UNCATEGORIZED_ITEMS]||[];return this.pickedItems.filter(t=>!e.includes(t))}get uncategorizedItems(){const e=E(this.hass),t=this.uncategorizedFromCustom||[],i=this.pickedWithoutUncategorizedFromCustom,s=this._initCombiPanels.filter(t=>!i.includes(t)&&!(this._sidebarConfig.hidden_items||[]).includes(t)&&t!==e);return Array.from(new Set([...t,...s]))}_handleItemClicked(e){e.stopPropagation();const t=e.detail;this._goToRoute("organize"),this._dialogPanels?.selectItem(t),this._desktopPreview||this._closePreview()}static get styles(){return[l`
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
          grid-template-rows: auto auto auto minmax(0, 1fr) auto;
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
        .change-target {
          color: var(--primary-color);
          font-size: .82rem;
          font-weight: 600;
          margin-inline-start: 4px;
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
        .preview-toggle { display: inline-flex; min-height: 44px; }
        .workbench-body {
          align-items: stretch;
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          min-height: 0;
          overflow: auto;
          overscroll-behavior: contain;
        }
        .task-rail {
          align-self: start;
          background: color-mix(in srgb, var(--secondary-background-color) 46%, transparent);
          border-inline-end: 1px solid var(--divider-color);
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 18px 12px;
          position: sticky;
          top: 0;
        }
        .rail-label {
          color: var(--secondary-text-color);
          font-size: .72rem;
          font-weight: 700;
          letter-spacing: .08em;
          padding: 0 10px 4px;
          text-transform: uppercase;
        }
        .rail-label-spaced { margin-top: 14px; }
        .task-link {
          align-items: center;
          border-radius: 10px;
          display: grid;
          gap: 8px;
          grid-template-columns: 28px minmax(0, 1fr) auto;
          min-height: 54px;
          padding: 7px 10px;
          text-align: start;
          width: 100%;
        }
        .task-link[data-active='true'] {
          background: color-mix(in srgb, var(--primary-color) 14%, transparent);
          color: var(--primary-color);
          box-shadow: inset 3px 0 var(--primary-color);
        }
        .stage-error { color: var(--error-color); }
        .editor-canvas {
          min-width: 0;
          overflow: auto;
          height: 100%;
          box-sizing: border-box;
          padding: 24px 24px 36px;
        }
        .desktop-preview {
          background: var(--primary-background-color);
          border-inline-start: 1px solid var(--divider-color);
          min-width: 0;
          overflow: auto;
          display: none;
          padding: 20px;
        }
        .preview-heading { display: grid; gap: 2px; margin: 0 auto 14px; max-width: 340px; }
        .preview-heading span { font-weight: 600; }
        .preview-heading small { color: var(--secondary-text-color); }
        .desktop-preview #sidebar-preview {
          margin-inline: auto;
          max-width: 340px;
          position: sticky;
          top: 0;
        }
        .stage { display: grid; gap: 24px; margin: 0 auto; max-width: 920px; }
        .stage-heading h1 { font-size: 1.55rem; margin: 0; }
        .stage-heading p { color: var(--secondary-text-color); line-height: 1.45; margin: 5px 0 0; }
        .settings-section {
          border-block-start: 1px solid var(--divider-color);
          display: grid;
          gap: 18px;
          min-width: 0;
          padding-block-start: 22px;
        }
        .settings-section:first-of-type { border-block-start: 0; padding-block-start: 0; }
        .section-heading h2, .section-heading p { margin: 0; }
        .section-heading h2 { font-size: 1.05rem; }
        .section-heading p { color: var(--secondary-text-color); font-size: .9rem; line-height: 1.4; margin-top: 4px; }
        .workbench-card {
          background: transparent;
          border: 0;
          border-block-start: 1px solid var(--divider-color);
          border-radius: 0;
          box-sizing: border-box;
          display: grid;
          gap: 14px;
          min-width: 0;
          padding: 22px 0 0;
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
        .workbench-notice:empty { display: none; }
        .draft-recovery > div { display: flex; flex-wrap: wrap; gap: 8px; justify-content: space-between; }
        .draft-recovery div > div:first-child { display: grid; gap: 3px; }
        .draft-recovery span { color: var(--secondary-text-color); }
        .draft-actions { display: flex; gap: 6px; }
        .preview-drawer, .preview-scrim { display: none; }
        .preview-drawer[hidden] { display: none !important; }
        .mobile-stage-select { display: none; }
        .stale-preview-alert { margin-bottom: 16px; }
        .editor-canvas[data-yaml-invalid='true'] .stage > :not(.stage-heading) {
          opacity: .68;
          pointer-events: none;
        }

        @media (min-width: 1100px) {
          .workbench-body { grid-template-columns: minmax(0, 1fr) 300px; }
          .desktop-preview { display: block; }
          .preview-toggle { display: none; }
        }

        @media (max-width: 1099px) {
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

        @media (min-width: 1100px) and (max-width: 1199px) {
          .workbench-body { grid-template-columns: minmax(0, 1fr) 280px; }
        }

        @media (max-width: 767px) {
          .workbench-header { padding-inline: 6px; }
          .header-status { display: none; }
          .target-control { flex: 1; overflow: hidden; }
          .target-control strong { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
          .preview-toggle { min-width: 44px; }
          .preview-toggle ha-icon { font-size: initial; }
          .workbench-body { display: block; overflow: hidden; }
          .task-rail { display: none; }
          .mobile-stage-select { display: block; margin-bottom: 16px; }
          .editor-canvas { overflow: auto; padding: 18px 12px 28px; }
          .review-grid, .diff-columns { grid-template-columns: 1fr; }
          .diff-columns pre { max-width: calc(100vw - 58px); }
          .workbench-actions { align-items: stretch; flex-direction: column; gap: 6px; padding: 8px; }
          .apply-state { padding-inline: 6px; }
          .action-buttons { display: flex; flex-wrap: wrap; width: 100%; }
          .action-buttons ha-button:last-child { flex: 1 1 150px; min-width: 0; }
          .preview-drawer { box-sizing: border-box; max-width: none; padding: 8px; width: 100vw; }
          .yaml-toolbar span { display: none; }
        }
        :host [hidden] {
          display: none !important;
        }
        .target-picker {
          display: grid;
          gap: 2px;
          min-width: 130px;
        }
        .target-picker > span {
          color: var(--secondary-text-color);
          font-size: 0.75rem;
        }
        .target-picker select {
          background: transparent;
          border: 0;
          border-radius: 4px;
          color: var(--primary-text-color);
          cursor: pointer;
          font: inherit;
          font-weight: 600;
          min-height: 30px;
          max-width: 260px;
        }
        select option {
          background: var(--card-background-color, #fff);
          color: var(--primary-text-color);
        }
        .target-audience {
          color: var(--secondary-text-color);
          flex: 1;
          font-size: 0.82rem;
          margin: 0;
        }
        .issues-link {
          background: transparent;
          border: 0;
          color: var(--error-color);
          cursor: pointer;
          min-height: 44px;
        }
        .workspace-nav {
          align-items: center;
          border-bottom: 1px solid var(--divider-color);
          display: flex;
          gap: 6px;
          padding: 4px 12px;
        }
        .workspace-nav .task-link {
          display: inline-flex;
          width: auto;
          min-height: 44px;
          padding: 8px 12px;
        }
        .advanced-menu {
          margin-inline-start: auto;
        }
        .apply-state small {
          display: block;
          margin-top: 3px;
        }
        button:focus-visible,
        select:focus-visible {
          outline: 2px solid var(--primary-color);
          outline-offset: 2px;
        }
        h1:focus {
          outline: none;
        }
        .desktop-preview {
          height: 100%;
          box-sizing: border-box;
        }
        @media (max-width: 767px) {
          .target-audience {
            display: none;
          }
          .target-picker {
            flex: 1;
            min-width: 0;
          }
          .target-picker select {
            max-width: 100%;
          }
          .workspace-nav {
            padding: 4px 6px;
            gap: 0;
          }
          .workspace-nav .task-link {
            padding: 8px;
            font-size: 0.9rem;
            gap: 5px;
          }
          .workspace-nav .task-link ha-icon {
            width: 20px;
          }
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

        sidebar-dialog-panels[workbench-mode],
        :host([fullscreen]) sidebar-dialog-panels[workbench-mode] {
          max-height: none;
          overflow: visible;
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
          gap: 20px;
        }
        .settings-card {
          background: transparent;
          border: 0;
          display: grid;
          gap: 14px;
          padding: 0;
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
      `]}};h([c({type:Boolean,reflect:!0,attribute:"fullscreen"})],ox.prototype,"fullscreen",void 0),h([c({attribute:!1})],ox.prototype,"_mainDialog",void 0),h([c({attribute:!1})],ox.prototype,"_initConfig",void 0),h([b()],ox.prototype,"_connected",void 0),h([b()],ox.prototype,"_sidebarConfig",void 0),h([b()],ox.prototype,"_useConfigFile",void 0),h([b()],ox.prototype,"_configSource",void 0),h([b()],ox.prototype,"_configLoaded",void 0),h([b()],ox.prototype,"_initPanelOrder",void 0),h([b()],ox.prototype,"_initCombiPanels",void 0),h([b()],ox.prototype,"_newItemMap",void 0),h([b()],ox.prototype,"_newItems",void 0),h([b()],ox.prototype,"_panelConfigMap",void 0),h([b()],ox.prototype,"_pinnedGroupsMap",void 0),h([b()],ox.prototype,"_settingItemMoved",void 0),h([b()],ox.prototype,"_uncategorizedItemsGroup",void 0),h([b()],ox.prototype,"_uncategorizedIsActive",void 0),h([b()],ox.prototype,"_uploading",void 0),h([b()],ox.prototype,"_saving",void 0),h([b()],ox.prototype,"_invalidConfig",void 0),h([b()],ox.prototype,"_haConfigErrors",void 0),h([b()],ox.prototype,"_panelWarnings",void 0),h([b()],ox.prototype,"_haConfigInfo",void 0),h([b()],ox.prototype,"_profileInfo",void 0),h([b()],ox.prototype,"_profileUsers",void 0),h([b()],ox.prototype,"_selectedProfile",void 0),h([b()],ox.prototype,"_copySource",void 0),h([b()],ox.prototype,"_syncCollapsedGroups",void 0),h([b()],ox.prototype,"_haDiagnostics",void 0),h([b()],ox.prototype,"_lastLoadedHaConfigModified",void 0),h([b()],ox.prototype,"_rawYaml",void 0),h([b()],ox.prototype,"_narrow",void 0),h([b()],ox.prototype,"_workbenchRoute",void 0),h([b()],ox.prototype,"_previewOpen",void 0),h([b()],ox.prototype,"_desktopPreview",void 0),h([b()],ox.prototype,"_draftOffer",void 0),h([bt(Le.COLORS)],ox.prototype,"_dialogColors",void 0),h([bt(Le.PANELS)],ox.prototype,"_dialogPanels",void 0),h([bt(Le.PREVIEW)],ox.prototype,"_dialogPreview",void 0),h([bt(Le.NEW_ITEMS)],ox.prototype,"_dialogNewItems",void 0),h([bt("#sidebar-config")],ox.prototype,"_configSection",void 0),ox=h([_("sidebar-organizer-config-dialog")],ox);export{Pt as a,Rt as b,ft as c,Et as d,bt as e,Lt as f,Ct as m};
