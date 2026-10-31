import { createRuntimeGroupDivider } from 'fixture-runtime-helpers';
import { HomeAssistantStylesManager } from 'home-assistant-styles-manager';

import { SidebarConfigDialog } from '../../src/components/sidebar-dialog';

const reviewMode = new URL(location.href).searchParams.has('review');
const result = { passed: [] as string[], failed: [] as string[], errors: [] as string[] };
const output = document.getElementById('results')!;
const show = () => {
  output.textContent = JSON.stringify(result);
};
addEventListener('error', (event) => {
  result.errors.push(event.message);
  show();
});
addEventListener('unhandledrejection', (event) => {
  result.errors.push(String(event.reason?.stack || event.reason));
  show();
});
const check = (name: string, condition: unknown) => {
  (condition ? result.passed : result.failed).push(name);
};
const settle = async (element: any) => {
  await element.updateComplete;
  await new Promise((resolve) => setTimeout(resolve, 30));
  await element.updateComplete;
};

// Minimal synthetic HA controls use native inputs and buttons. The production
// dialog host is normally height-constrained by HA; mirror that boundary here.
const fixtureStyles = document.createElement('style');
fixtureStyles.textContent = `body { margin:0; font:14px Arial,sans-serif; color:#212121; --primary-color:#03a9f4; --primary-background-color:#fafafa; --secondary-background-color:#f3f5f6; --card-background-color:white; --primary-text-color:#212121; --secondary-text-color:#607078; --divider-color:#dce2e5; --error-color:#c62828; --ha-color-on-primary:#fff; } #results { position:fixed;left:0;bottom:0;max-height:90px;overflow:auto;font-size:10px;z-index:1000;background:white; } sidebar-organizer-config-dialog { height:100dvh;min-height:0; }`;
document.head.append(fixtureStyles);
for (const tag of ['ha-textfield', 'ha-switch', 'ha-checkbox']) {
  customElements.define(
    tag,
    class extends HTMLElement {
      private _value = '';
      private _checked = false;
      private _disabled = false;
      get value() {
        return this._value;
      }
      set value(value: string) {
        this._value = value || '';
        this.sync();
      }
      get checked() {
        return this._checked;
      }
      set checked(value: boolean) {
        this._checked = value;
        this.sync();
      }
      get disabled() {
        return this._disabled;
      }
      set disabled(value: boolean) {
        this._disabled = value;
        this.sync();
      }
      connectedCallback() {
        if (this.shadowRoot) return;
        const root = this.attachShadow({ mode: 'open' });
        root.innerHTML = `<style>:host{display:inline-block;margin:6px 0}label{display:grid;gap:5px;font:14px Arial;color:#52616a}input{box-sizing:border-box;border:1px solid #9aabb5;border-radius:5px;padding:10px;font:inherit;max-width:100%;background:white}input[type=checkbox]{width:20px;height:20px}</style><label><span></span><input type="${tag === 'ha-textfield' ? 'text' : 'checkbox'}"></label>`;
        root.querySelector('span')!.textContent = this.getAttribute('label') || '';
        this.sync();
        root.querySelector('input')!.addEventListener('input', (event) => {
          event.stopPropagation();
          this._value = (event.target as HTMLInputElement).value;
          this._checked = (event.target as HTMLInputElement).checked;
          this.dispatchEvent(new Event(tag === 'ha-textfield' ? 'input' : 'change', { bubbles: true, composed: true }));
        });
        root.querySelector('input')!.addEventListener('change', (event) => event.stopPropagation());
      }
      private sync() {
        const input = this.shadowRoot?.querySelector('input');
        if (input) {
          input.value = this._value;
          input.checked = this._checked;
          input.disabled = this._disabled;
        }
      }
    }
  );
}
customElements.define(
  'ha-formfield',
  class extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML =
        '<style>:host{display:flex;align-items:center;gap:10px;margin:8px 0}label{display:flex;align-items:center;gap:10px;cursor:pointer}</style><label><slot></slot><span></span></label>';
      root.querySelector('span')!.textContent = this.getAttribute('label') || '';
      root.querySelector('label')!.addEventListener('click', (event) => {
        if ((event.target as HTMLElement).localName !== 'span') return;
        const control = this.querySelector('ha-switch,ha-checkbox') as any;
        control?.shadowRoot?.querySelector('input')?.click();
      });
      queueMicrotask(() => {
        const input = this.querySelector('ha-switch,ha-checkbox')?.shadowRoot?.querySelector('input');
        input?.setAttribute('aria-label', this.getAttribute('label') || '');
      });
    }
  }
);
customElements.define(
  'ha-form',
  class extends HTMLElement {
    private _data: Record<string, unknown> = {};
    private _schema: any[] = [];
    computeLabel?: (field: any) => string;
    get data() {
      return this._data;
    }
    set data(value: Record<string, unknown>) {
      this._data = value || {};
      this.render();
    }
    get schema() {
      return this._schema;
    }
    set schema(value: any[]) {
      this._schema = value || [];
      this.render();
    }
    connectedCallback() {
      if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
      this.render();
    }
    private render() {
      const root = this.shadowRoot;
      if (!root) return;
      root.replaceChildren();
      const style = document.createElement('style');
      style.textContent =
        'label{display:grid;gap:6px;margin:12px 0;color:#52616a}input,select{box-sizing:border-box;padding:10px;border:1px solid #aab7bf;border-radius:5px;font:inherit;min-width:0;max-width:100%}input[type=checkbox]{width:20px;height:20px}small{font-size:12px}';
      root.append(style);
      const visit = (fields: any[]): any[] => fields.flatMap((field) => (field.schema ? visit(field.schema) : [field]));
      for (const field of visit(this._schema)) {
        if (!field.name) continue;
        const label = document.createElement('label');
        label.textContent = field.label || this.computeLabel?.(field) || field.name.replaceAll('_', ' ');
        const boolean = field.type === 'boolean' || field.selector?.boolean;
        const options = field.selector?.select?.options;
        const input = options ? document.createElement('select') : document.createElement('input');
        input.name = field.name;
        if (input instanceof HTMLSelectElement) {
          for (const option of options) {
            const item = document.createElement('option');
            item.value = typeof option === 'string' ? option : option.value;
            item.textContent = typeof option === 'string' ? option : option.label;
            input.append(item);
          }
        } else {
          input.type = boolean
            ? 'checkbox'
            : field.type === 'integer' || field.type === 'float' || field.selector?.number
              ? 'number'
              : 'text';
          input.checked = Boolean(this._data[field.name] ?? field.default);
        }
        input.value = String(this._data[field.name] ?? field.default ?? '');
        input.addEventListener(boolean || options ? 'change' : 'input', (event) => {
          event.stopPropagation();
          const value = boolean
            ? (input as HTMLInputElement).checked
            : (input as HTMLInputElement).type === 'number' && input.value !== ''
              ? Number(input.value)
              : input.value;
          this._data = { ...this._data, [field.name]: value };
          this.dispatchEvent(
            new CustomEvent('value-changed', { detail: { value: { ...this._data } }, bubbles: true, composed: true })
          );
        });
        label.append(input);
        if (typeof field.helper === 'string') {
          const help = document.createElement('small');
          help.textContent = field.helper;
          label.append(help);
        }
        root.append(label);
      }
    }
  }
);
for (const tag of ['ha-button', 'ha-icon-button']) {
  customElements.define(
    tag,
    class extends HTMLElement {
      private _label = '';
      private _path = '';
      private _disabled = false;
      get label() {
        return this._label;
      }
      set label(value: string) {
        this._label = value || '';
        this.sync();
      }
      get path() {
        return this._path;
      }
      set path(value: string) {
        this._path = value || '';
        this.sync();
      }
      get disabled() {
        return this._disabled;
      }
      set disabled(value: boolean) {
        this._disabled = value;
        this.sync();
      }
      connectedCallback() {
        if (this.shadowRoot) return;
        this.tabIndex = 0;
        this.setAttribute('role', 'button');
        const root = this.attachShadow({ mode: 'open' });
        root.innerHTML =
          '<style>:host{display:inline-flex;align-items:center;justify-content:center;min-height:36px;border-radius:5px;color:#007cae;cursor:pointer}button{display:inline-flex;align-items:center;justify-content:center;gap:6px;box-sizing:border-box;min-height:36px;padding:0 12px;border:0;border-radius:5px;background:transparent;color:inherit;font:inherit;cursor:inherit}button:disabled{opacity:.5;cursor:default}:host([appearance="accent"]) button{background:#008abb;color:white}svg{width:24px;height:24px;fill:currentColor}</style><button tabindex="-1" type="button"><svg viewBox="0 0 24 24"><path></path></svg><slot></slot></button>';
        this.addEventListener(
          'click',
          (event) => {
            if (this._disabled) {
              event.preventDefault();
              event.stopImmediatePropagation();
            }
          },
          true
        );
        this.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            if (!this.disabled) this.click();
          }
        });
        this.sync();
      }
      private sync() {
        const button = this.shadowRoot?.querySelector('button');
        if (!button) return;
        button.disabled = this._disabled;
        button.setAttribute('aria-label', this._label || this.textContent?.trim() || '');
        button.title = this._label;
        this.setAttribute('aria-label', button.getAttribute('aria-label')!);
        this.setAttribute('aria-disabled', String(this._disabled));
        this.shadowRoot!.querySelector('path')!.setAttribute('d', this._path);
        (this.shadowRoot!.querySelector('svg') as SVGElement).style.display = this._path ? '' : 'none';
      }
    }
  );
}
customElements.define(
  'ha-dropdown',
  class extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML =
        '<style>:host{position:relative;display:inline-block}.menu{position:absolute;inset-inline-end:0;top:100%;min-width:230px;padding:6px;background:white;border:1px solid #dce2e5;box-shadow:0 4px 14px #0002;z-index:20}.menu[hidden]{display:none}</style><slot name="trigger"></slot><div class="menu" hidden><slot></slot></div>';
      this.addEventListener('click', (event) => {
        const path = event.composedPath() as HTMLElement[];
        const item = path.find((node) => node.localName === 'ha-dropdown-item');
        const menu = root.querySelector('.menu') as HTMLElement;
        if (item) {
          menu.hidden = true;
          this.dispatchEvent(
            new CustomEvent('wa-select', {
              detail: { item: { value: item.getAttribute('value') } },
              bubbles: true,
              composed: true,
            })
          );
        } else if (path.some((node) => node.getAttribute?.('slot') === 'trigger')) menu.hidden = !menu.hidden;
      });
    }
  }
);
customElements.define(
  'ha-dropdown-item',
  class extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      this.attachShadow({ mode: 'open' }).innerHTML =
        '<style>:host{display:block;padding:10px;cursor:pointer}:host(:hover){background:#f3f5f6}</style><slot></slot>';
      this.tabIndex = 0;
      this.setAttribute('role', 'menuitem');
    }
  }
);

try {
  const dialog = new SidebarConfigDialog() as any;
  const hass = {
    user: { id: 'fixture', name: 'Fixture', is_admin: true },
    panels: Object.fromEntries([
      ['lovelace', { title: 'Overview', url_path: 'lovelace', component_name: 'lovelace', icon: 'mdi:view-dashboard' }],
      ['energy', { title: 'Energy', url_path: 'energy', component_name: 'energy', icon: 'mdi:lightning-bolt' }],
      ['map', { title: 'Map', url_path: 'map', component_name: 'map', icon: 'mdi:map' }],
      ['config', { title: 'Settings', url_path: 'config', component_name: 'config', icon: 'mdi:cog' }],
      ...Array.from({ length: 18 }, (_, index) => [
        `room-${index}`,
        { title: `Room ${index + 1}`, url_path: `room-${index}`, component_name: 'panel', icon: 'mdi:home' },
      ]),
    ]),
    localize: (key: string) => key,
    themes: { theme: 'default', default_theme: 'default', themes: {}, darkMode: false },
    states: {},
    config: { components: [] },
    connection: { subscribeMessage: async () => () => {} },
    callWS: async () => ({ available: false }),
  };
  dialog.hass = hass;
  dialog._mainDialog = { closeDialog() {} };
  dialog._setupInitConfig = async () => {};
  dialog._refreshHaConfigInfo = async () => {};
  dialog._startHaConfigSubscription = () => {};
  dialog._sidebarConfig = {
    header_title: 'Home',
    custom_groups: { Main: ['energy', 'Weather link'], Utilities: ['map'] },
    bottom_items: [],
    default_collapsed: [],
    new_items: [{ title: 'Weather link', icon: 'mdi:weather-cloudy', url_path: 'https://example.com/weather' }],
  };
  dialog._configSource = 'browser_storage';
  dialog._baselineRawYaml = dialog._rawYaml =
    'header_title: Home\ncustom_groups:\n  Main: [energy, Weather link]\n  Utilities: [map]\nnew_items:\n  - title: Weather link\n    icon: mdi:weather-cloudy\n    url_path: https://example.com/weather\n';
  dialog._baselineConfig = structuredClone(dialog._sidebarConfig);
  dialog._initCombiPanels = [...Object.keys(hass.panels), 'Weather link'];
  dialog._initPanelOrder = [...dialog._initCombiPanels];
  dialog._configLoaded = true;
  dialog.style.height = '100dvh';
  dialog.style.minHeight = '0';
  document.body.append(dialog);
  await settle(dialog);
  const root = dialog.shadowRoot!;
  const preview = root.querySelector('sidebar-dialog-preview');
  (window as any).fixtureDialog = dialog;
  if (reviewMode) {
    output.hidden = true;
    document.title = 'Sidebar Organizer · synthetic visual review';
  } else {
    await settle(preview);
    const organizer = root.querySelector('sidebar-dialog-panels') as any;
    await settle(organizer);
    const organizeRoot = organizer.shadowRoot!;
    const clickText = async (scope: ParentNode, selector: string, text: string) => {
      const control = [...scope.querySelectorAll(selector)].find(
        (node) => node.textContent?.trim() === text
      ) as HTMLElement;
      if (!control) throw new Error(`Missing ${selector}: ${text}`);
      control.click();
      await settle(dialog);
      await settle(organizer);
    };
    const navigate = async (label: string) => clickText(root, '.task-link', label);
    const back = async () => {
      (organizeRoot.querySelector('.back-to-list') as HTMLElement).click();
      await settle(organizer);
    };
    const canvasBounds = (root.querySelector('.editor-canvas') as HTMLElement).getBoundingClientRect();
    const footerBounds = (root.querySelector('footer') as HTMLElement).getBoundingClientRect();
    check(
      'editor canvas and footer stay within viewport',
      canvasBounds.top >= 0 &&
        canvasBounds.bottom <= innerHeight + 1 &&
        footerBounds.top >= 0 &&
        footerBounds.bottom <= innerHeight + 1
    );
    if (innerWidth <= 390) {
      check(
        'mobile editor has no horizontal overflow',
        document.documentElement.scrollWidth <= innerWidth + 1 &&
          canvasBounds.left >= -1 &&
          canvasBounds.right <= innerWidth + 1 &&
          (root.querySelector('.editor-canvas') as HTMLElement).scrollWidth <=
            (root.querySelector('.editor-canvas') as HTMLElement).clientWidth + 1
      );
    }
    check(
      'two primary tasks are Organize and Appearance',
      [...root.querySelectorAll('.task-link')].map((node) => node.textContent?.trim()).join(',') ===
        'Organize,Appearance'
    );
    check(
      'grouped system item appears once in preview',
      preview.shadowRoot!.querySelectorAll('[data-panel="energy"]').length === 1
    );
    check(
      'custom preview identity is its canonical title',
      preview.shadowRoot!.querySelectorAll('[data-panel="Weather link"]').length === 1
    );
    (preview.shadowRoot!.querySelector('[data-panel="Weather link"]') as HTMLElement).click();
    await settle(dialog);
    await settle(organizer);
    check(
      'custom preview click opens canonical item editor',
      organizer._selectedItemId === 'Weather link' &&
        organizeRoot.querySelector('.detail-heading h2')?.textContent === 'Weather link'
    );
    await navigate('Appearance');
    const appearance = root.querySelector('sidebar-dialog-colors') as any;
    await settle(appearance);
    const appearanceControl = (name: string): HTMLInputElement | undefined =>
      [...appearance.shadowRoot.querySelectorAll('ha-form')]
        .map((form: any) => form.shadowRoot?.querySelector(`input[name="${name}"]`))
        .find(Boolean);
    const headerToggle = appearanceControl('show_header_toggle')!;
    const animation = appearanceControl('animate_groups')!;
    check('appearance controls start with positive enabled state', headerToggle?.checked && animation?.checked);
    headerToggle.checked = false;
    headerToggle.dispatchEvent(new Event('change', { bubbles: true }));
    await settle(dialog);
    await settle(appearance);
    const animateToggle = appearanceControl('animate_groups')!;
    animateToggle.checked = false;
    animateToggle.dispatchEvent(new Event('change', { bubbles: true }));
    await settle(dialog);
    await settle(appearance);
    check(
      'appearance switches merge full form data into persisted inverse settings',
      dialog._session.config.hide_header_toggle === true &&
        dialog._session.config.animation_off === true &&
        !('show_header_toggle' in dialog._session.config) &&
        !('animate_groups' in dialog._session.config)
    );
    await navigate('Organize');
    check(
      'selection and organizer instance survive navigation',
      root.querySelector('sidebar-dialog-panels') === organizer && organizer._selectedItemId === 'Weather link'
    );
    await back();
    (organizeRoot.querySelector('[data-group="Main"] .group-open') as HTMLElement).click();
    await settle(organizer);
    check(
      'group editing uses one list rather than a second organizer',
      organizeRoot.querySelectorAll('.group-editor-items').length === 1 &&
        !organizeRoot.querySelector('.organizer-list') &&
        organizeRoot.querySelectorAll('[data-item="energy"]').length === 1
    );
    await back();
    (organizeRoot.querySelector('[data-item="energy"] .item-open') as HTMLElement).click();
    await settle(organizer);
    const placement = organizeRoot.querySelector('select[aria-label="Item placement"]') as HTMLSelectElement;
    placement.value = JSON.stringify({ section: 'bottom_items' });
    placement.dispatchEvent(new Event('change', { bubbles: true }));
    await settle(dialog);
    await settle(organizer);
    await settle(preview);
    check(
      'moving item changes draft and does not duplicate preview',
      dialog._session.config.bottom_items?.includes('energy') &&
        !dialog._session.config.custom_groups.Main.includes('energy') &&
        preview.shadowRoot!.querySelectorAll('[data-panel="energy"]').length === 1
    );
    const visibility = organizeRoot.querySelector('ha-switch') as any;
    visibility.checked = false;
    visibility.dispatchEvent(new Event('change', { bubbles: true }));
    await settle(dialog);
    check('visibility edits update the shared draft', dialog._session.config.hidden_items?.includes('energy'));
    visibility.checked = true;
    visibility.dispatchEvent(new Event('change', { bubbles: true }));
    await settle(dialog);
    await back();
    await clickText(organizeRoot, 'ha-button', 'Add item');
    for (const [label, value] of [
      ['Item name', 'Garden camera'],
      ['Destination', '/lovelace/garden'],
    ]) {
      const field = organizeRoot.querySelector(`ha-textfield[label="${label}"]`) as any;
      field.value = value;
      field.dispatchEvent(new Event('input', { bubbles: true }));
      await settle(organizer);
    }
    const newPlacement = organizeRoot.querySelector('select') as HTMLSelectElement;
    newPlacement.value = JSON.stringify({ section: 'custom_groups', group: 'Utilities' });
    newPlacement.dispatchEvent(new Event('change', { bubbles: true }));
    await settle(organizer);
    await clickText(organizeRoot, 'ha-button', 'Add to sidebar');
    await settle(preview);
    check(
      'new item saves destination and selected group in draft',
      dialog._session.config.new_items.some(
        (item: any) => item.title === 'Garden camera' && item.url_path === '/lovelace/garden'
      ) && dialog._session.config.custom_groups.Utilities.includes('Garden camera')
    );
    await back();
    const canvas = root.querySelector('.editor-canvas') as HTMLElement;
    canvas.scrollTop = 180;
    const savedScroll = canvas.scrollTop;
    await navigate('Appearance');
    check('new route starts at top', canvas.scrollTop === 0);
    await navigate('Organize');
    check('returning restores prior route scroll', savedScroll > 0 && canvas.scrollTop === savedScroll);
    const advanced = root.querySelector('.advanced-menu')!;
    const advancedRoute = async (value: string) => {
      advanced.dispatchEvent(new CustomEvent('wa-select', { detail: { item: { value } } }));
      await settle(dialog);
    };
    await advancedRoute('sidebar');
    check('Advanced opens profiles and sync', dialog._workbenchRoute === 'sidebar');
    await advancedRoute('yaml');
    check(
      'Advanced opens YAML editor',
      dialog._workbenchRoute === 'yaml' && Boolean(root.querySelector('sidebar-workbench-yaml-editor'))
    );
    const validConfig = JSON.stringify(dialog._sidebarConfig);
    const yaml = root.querySelector('sidebar-workbench-yaml-editor')!;
    yaml.dispatchEvent(
      new CustomEvent('yaml-changed', { detail: { yaml: 'header_title: [invalid' }, bubbles: true, composed: true })
    );
    await settle(dialog);
    check(
      'invalid YAML retains visual config',
      !dialog._session.yamlValid && JSON.stringify(dialog._sidebarConfig) === validConfig
    );
    await clickText(root, 'footer ha-button', 'Review changes');
    check(
      'review remains reachable with invalid YAML and Apply is disabled',
      dialog._workbenchRoute === 'review' &&
        Boolean(root.querySelector('.review-summary')) &&
        (root.querySelector('footer ha-button[appearance="accent"]') as any)?.disabled === true
    );
    await new Promise((resolve) => setTimeout(resolve, 650));
    check(
      'invalid YAML is retained in a local draft',
      dialog._session.draftState().draft?.rawYaml === 'header_title: [invalid'
    );
    check('one preview exists', root.querySelectorAll('sidebar-dialog-preview').length === 1);
    check('global preview references live preview', (window as any).SoDialogPreview === preview);
    const wide = matchMedia('(min-width: 1100px)').matches;
    const aside = root.querySelector('aside')!;
    check('native viewport matches responsive state', dialog._desktopPreview === wide);
    if (!wide) {
      check(
        'closed drawer is hidden and inert',
        aside.hidden && aside.inert && getComputedStyle(aside).display === 'none'
      );
      const close = root.querySelector('.preview-drawer ha-icon-button') as HTMLElement;
      close.focus();
      check('closed drawer rejects focus', root.activeElement !== close);
      (root.querySelector('.preview-toggle') as HTMLElement).click();
      await settle(dialog);
      check(
        'open drawer is visible and interactive',
        !aside.hidden && !aside.inert && aside.getBoundingClientRect().width > 0
      );
      check('opening focuses close control', root.activeElement === close);
      check(
        'background editor is inert while preview open',
        root.querySelector('main')!.inert && root.querySelector('header')!.inert
      );
      // The live preview contains keyboard-editable items. Test wrap at the
      // actual drawer boundaries rather than assuming Close is its sole control.
      const lastPreviewItem = [...preview.shadowRoot!.querySelectorAll('[data-panel]')]
        .filter((item: any) => item.getClientRects().length && !item.closest('[inert]'))
        .at(-1) as HTMLElement;
      lastPreviewItem.focus();
      const forwardTab = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, composed: true, cancelable: true });
      lastPreviewItem.dispatchEvent(forwardTab);
      check(
        'Tab wraps from last preview item to close control',
        forwardTab.defaultPrevented && root.activeElement === close
      );
      const reverseTab = new KeyboardEvent('keydown', {
        key: 'Tab',
        shiftKey: true,
        bubbles: true,
        composed: true,
        cancelable: true,
      });
      close.dispatchEvent(reverseTab);
      check(
        'Shift+Tab wraps from close control to last preview item',
        reverseTab.defaultPrevented && preview.shadowRoot!.activeElement === lastPreviewItem
      );
      close.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, composed: true, cancelable: true })
      );
      await settle(dialog);
      check(
        'Escape hides drawer and restores toggle focus',
        aside.hidden && aside.inert && root.activeElement === root.querySelector('.preview-toggle')
      );
    } else {
      check('desktop preview visible', !aside.hidden && !aside.inert && aside.getBoundingClientRect().width > 0);
    }
    // Exercise the same production breakpoint event callback, preserving the live
    // preview instance rather than creating separate desktop and drawer elements.
    dialog._previewMediaChanged({ matches: !wide });
    await settle(dialog);
    check(
      'breakpoint change retains single preview instance',
      root.querySelector('sidebar-dialog-preview') === preview &&
        root.querySelectorAll('sidebar-dialog-preview').length === 1
    );
    dialog._previewMediaChanged({ matches: wide });
    await settle(dialog);
    check(
      'responsive round trip retains single preview',
      root.querySelectorAll('sidebar-dialog-preview').length === 1 &&
        root.querySelector('sidebar-dialog-preview') === preview
    );
    check(
      'global preview stays attached after responsive transition',
      (window as any).SoDialogPreview === preview && preview.isConnected
    );
    // A cancelled native target selection must revert the actual select value,
    // even when the selected model value is unchanged, and retain this session.
    dialog._configSource = 'home_assistant_config';
    dialog._selectedProfile = 'shared';
    dialog._haConfigInfo = { available: true, allow_write: true };
    dialog._profileUsers = [
      { id: 'fixture', name: 'Fixture', is_active: true, system_generated: false, profile_exists: true },
      { id: 'other-profile', name: 'Other person', is_active: true, system_generated: false, profile_exists: true },
    ];
    await settle(dialog);
    const originalHelpers = (window as any).loadCardHelpers;
    const originalCallWS = hass.callWS;
    let confirmations = 0;
    let backendCalls = 0;
    (window as any).loadCardHelpers = async () => ({
      showConfirmationDialog: async () => {
        confirmations += 1;
        return false;
      },
    });
    hass.callWS = async () => {
      backendCalls += 1;
      return { available: false };
    };
    try {
      dialog._yamlChanged(new CustomEvent('yaml-changed', { detail: { yaml: 'header_title: Profile draft\n' } }));
      await settle(dialog);
      const originalSession = dialog._session;
      const originalDraft = originalSession.rawYaml;
      const profilePicker = root.querySelector('select[aria-label="Sidebar to edit"]') as HTMLSelectElement;
      profilePicker.value = 'other-profile';
      profilePicker.dispatchEvent(new Event('change', { bubbles: true }));
      await settle(dialog);
      check(
        'cancelled profile switch restores displayed target and preserves dirty draft',
        confirmations === 1 &&
          profilePicker.value === 'shared' &&
          dialog._selectedProfile === 'shared' &&
          dialog._configSource === 'home_assistant_config' &&
          dialog._session === originalSession &&
          dialog._session.dirty &&
          dialog._session.rawYaml === originalDraft
      );
      check('cancelled profile switch makes no backend request', backendCalls === 0);
    } finally {
      hass.callWS = originalCallWS;
      if (originalHelpers === undefined) delete (window as any).loadCardHelpers;
      else (window as any).loadCardHelpers = originalHelpers;
    }
    dialog.remove();
    await new Promise((resolve) => setTimeout(resolve, 250));
    check('preview teardown clears global reference', (window as any).SoDialogPreview === undefined);

    // Suppress runtime auto-start: methods below operate on native DOM fixtures.
    (window as any).SidebarOrganizer = {};
    const { SidebarOrganizer } = await import('../../src/sidebar-organizer');
    const runtime = Object.create(SidebarOrganizer.prototype) as any;
    const sidebar = document.createElement('div');
    sidebar.style.setProperty('--primary-color', 'green', 'important');
    const sidebarRoot = sidebar.attachShadow({ mode: 'open' });
    sidebarRoot.innerHTML =
      '<div class="menu"><div class="title"><span>Original title</span></div></div><div class="panels-list"><ha-list-nav class="before-spacer"><ha-list-item-button group="Test">Overview</ha-list-item-button></ha-list-nav></div>';
    const title = sidebarRoot.querySelector('.title')!;
    const originalTitleNode = title.firstChild;
    const main = document.createElement('div');
    main.attachShadow({ mode: 'open' });
    main.style.setProperty('--custom-sidebar-width', '222px', 'important');
    const drawer = document.createElement('div');
    drawer.attachShadow({ mode: 'open' });
    document.body.append(sidebar, main, drawer);
    runtime.sideBarRoot = sidebarRoot;
    runtime.HaSidebar = sidebar;
    runtime._ha = {
      hass: {
        ...hass,
        themes: {
          default_theme: 'default',
          theme: 'default',
          themes: { Fixture: { 'primary-color': 'red' } },
        },
      },
    };
    runtime._haDrawer = drawer;
    runtime._haMain = { element: Promise.resolve(main) };
    runtime._store = { _utils: { CONFIG: { _computeWidth: (width: number) => `${width}px` } } };
    runtime._styleManager = new HomeAssistantStylesManager({
      prefix: 'sidebar-organizer-fixture',
      throwWarnings: false,
    });
    runtime._templateUnsubscribers = new Set();
    runtime._templateSubscriptionGeneration = 0;
    runtime._config = {
      header_title: 'Custom title',
      width: 333,
      custom_groups: { Test: ['lovelace'] },
      animation_off: true,
      force_transparent_background: true,
    };
    runtime.collapsedItems = new Set();
    runtime._pinnedGroups = {};
    runtime._schedulePreferencesSave = () => {};
    runtime._createDivider = () => document.createElement('div');
    runtime._createAddedGroupContent = () => document.createElement('div');
    const nativeBadge = document.createElement('span');
    nativeBadge.className = 'badge';
    nativeBadge.textContent = '7';
    sidebarRoot.querySelector('ha-list-item-button')!.append(nativeBadge);
    runtime._captureSidebarSnapshot();
    nativeBadge.textContent = '3';
    runtime._handleSidebarHeader();
    check('runtime header applies custom title', title.textContent?.includes('Custom title'));
    let allToggle = title.querySelector('ha-icon')! as HTMLElement;
    check(
      'header toggle exposes button semantics',
      allToggle.getAttribute('role') === 'button' && allToggle.tabIndex === 0
    );
    // Apply header state through production logic; DOM grouping remains minimal.
    runtime._handleCollapsed = () => runtime._handleCollapsedChange();
    allToggle.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }));
    check(
      'header Enter collapses groups with updated aria',
      runtime.collapsedItems.has('Test') && allToggle.getAttribute('aria-expanded') === 'false'
    );
    allToggle.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true, cancelable: true }));
    check(
      'header Space expands groups with updated aria',
      !runtime.collapsedItems.has('Test') && allToggle.getAttribute('aria-expanded') === 'true'
    );
    const divider = createRuntimeGroupDivider.call(runtime, 'Test');
    sidebarRoot.querySelector('.panels-list')!.prepend(divider);
    const item = sidebarRoot.querySelector('ha-list-item-button')!;
    divider.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }));
    check(
      'group Enter collapses native items and updates aria',
      item.classList.contains('collapsed') && divider.getAttribute('aria-expanded') === 'false'
    );
    divider.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true, cancelable: true }));
    check(
      'group Space expands native items and updates aria',
      !item.classList.contains('collapsed') && divider.getAttribute('aria-expanded') === 'true'
    );
    await runtime._addCustomWidthStyle();
    runtime._addAdditionalStyles({ custom_theme: { theme: 'Fixture', mode: 'light' } }, 'light');
    check(
      'runtime appearance applies external width',
      main.style.getPropertyValue('--custom-sidebar-width') === '333px'
    );
    check('runtime appearance applies external theme', sidebar.style.getPropertyValue('--primary-color') === 'red');
    check('runtime transparent drawer injects style', Boolean(drawer.shadowRoot!.querySelector('style')));
    runtime._restoreSidebarSnapshot();
    check(
      'runtime restore returns original header node',
      title.firstChild === originalTitleNode && title.textContent === 'Original title'
    );
    check('runtime restore returns original nested badge content', nativeBadge.textContent === '7');
    check(
      'runtime restore returns original width and priority',
      main.style.getPropertyValue('--custom-sidebar-width') === '222px' &&
        main.style.getPropertyPriority('--custom-sidebar-width') === 'important'
    );
    check(
      'runtime restore returns original theme and priority',
      sidebar.style.getPropertyValue('--primary-color') === 'green' &&
        sidebar.style.getPropertyPriority('--primary-color') === 'important'
    );
    check(
      'runtime restore removes drawer and width injected styles',
      !drawer.shadowRoot!.querySelector('style') && !main.shadowRoot!.querySelector('style')
    );
    const hui = document.createElement('div');
    hui.attachShadow({ mode: 'open' }).innerHTML = '<div class="header"><div class="toolbar"></div></div>';
    const header = hui.shadowRoot!.querySelector('.header') as HTMLElement;
    const toolbar = header.querySelector('.toolbar') as HTMLElement;
    toolbar.style.setProperty('transform', 'translateY(2px)', 'important');
    toolbar.style.opacity = '0.8';
    document.body.append(hui);
    runtime._panelLovelace = { selector: { $: { query: () => ({ element: Promise.resolve(hui) }) } } };
    runtime._config = { scroll_hide_header: true };
    await runtime._watchScrollHideHeader();
    toolbar.style.transform = 'translateY(-50px)';
    toolbar.style.opacity = '0';
    header.classList.add('scroll-hide');
    header.style.setProperty('--header-hide-progress', '1');
    runtime._config = {};
    await runtime._watchScrollHideHeader();
    check(
      'disabling scroll-hide restores toolbar styling',
      toolbar.style.transform === 'translateY(2px)' &&
        toolbar.style.getPropertyPriority('transform') === 'important' &&
        toolbar.style.opacity === '0.8'
    );
    check(
      'disabling scroll-hide removes owned header state and styles',
      !header.classList.contains('scroll-hide') &&
        !header.style.getPropertyValue('--header-hide-progress') &&
        !hui.shadowRoot!.querySelector('style')
    );
    hui.remove();
    sidebar.remove();
    main.remove();
    drawer.remove();
  }
} catch (error) {
  result.errors.push(String((error as Error).stack || error));
}
show();
