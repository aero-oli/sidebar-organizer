import { createRuntimeGroupDivider } from 'fixture-runtime-helpers';
import { HomeAssistantStylesManager } from 'home-assistant-styles-manager';
import { SidebarConfigDialog } from '../../src/components/sidebar-dialog';

const result = { passed: [] as string[], failed: [] as string[], errors: [] as string[] };
const output = document.getElementById('results')!;
const show = () => { output.textContent = JSON.stringify(result); };
addEventListener('error', event => { result.errors.push(event.message); show(); });
addEventListener('unhandledrejection', event => { result.errors.push(String(event.reason?.stack || event.reason)); show(); });
const check = (name: string, condition: unknown) => { (condition ? result.passed : result.failed).push(name); };
const settle = async (element: any) => {
  await element.updateComplete;
  await new Promise(resolve => setTimeout(resolve, 30));
  await element.updateComplete;
};

// Minimal HA controls expose focusable hosts, matching the component contract.
for (const tag of ['ha-button', 'ha-icon-button']) {
  customElements.define(tag, class extends HTMLElement {
    connectedCallback() { this.tabIndex = 0; this.setAttribute('role', 'button'); }
  });
}

try {
  const dialog = new SidebarConfigDialog() as any;
  const hass = {
    user: { id: 'fixture', name: 'Fixture', is_admin: true },
    panels: { lovelace: { title: 'Overview', url_path: 'lovelace', component_name: 'lovelace' } },
    localize: (key: string) => key,
    themes: { theme: 'default', default_theme: 'default', themes: {}, darkMode: false },
    states: {}, config: { components: [] },
    connection: { subscribeMessage: async () => () => {} },
    callWS: async () => ({ available: false }),
  };
  dialog.hass = hass;
  dialog._mainDialog = { closeDialog() {} };
  dialog._setupInitConfig = async () => {};
  dialog._refreshHaConfigInfo = async () => {};
  dialog._startHaConfigSubscription = () => {};
  dialog._sidebarConfig = { header_title: 'Fixture', custom_groups: { Test: ['lovelace'] }, bottom_items: [], default_collapsed: [] };
  dialog._baselineConfig = structuredClone(dialog._sidebarConfig);
  dialog._initCombiPanels = ['lovelace'];
  dialog._initPanelOrder = ['lovelace'];
  dialog._configLoaded = true;
  document.body.append(dialog);
  await settle(dialog);
  const root = dialog.shadowRoot!;
  const preview = root.querySelector('sidebar-dialog-preview');
  check('one preview exists', root.querySelectorAll('sidebar-dialog-preview').length === 1);
  check('global preview references live preview', (window as any).SoDialogPreview === preview);
  const wide = matchMedia('(min-width: 1500px)').matches;
  const aside = root.querySelector('aside')!;
  check('native viewport matches responsive state', dialog._desktopPreview === wide);
  if (!wide) {
    check('closed drawer is hidden and inert', aside.hidden && aside.inert && getComputedStyle(aside).display === 'none');
    const close = root.querySelector('.preview-drawer ha-icon-button') as HTMLElement;
    close.focus();
    check('closed drawer rejects focus', root.activeElement !== close);
    (root.querySelector('.preview-toggle') as HTMLElement).click();
    await settle(dialog);
    check('open drawer is visible and interactive', !aside.hidden && !aside.inert && aside.getBoundingClientRect().width > 0);
    check('opening focuses close control', root.activeElement === close);
    check('background editor is inert while preview open', root.querySelector('main')!.inert && root.querySelector('header')!.inert);
    for (const shiftKey of [false, true]) {
      const tab = new KeyboardEvent('keydown', { key: 'Tab', shiftKey, bubbles: true, composed: true, cancelable: true });
      close.dispatchEvent(tab);
      check(`${shiftKey ? 'Shift+Tab' : 'Tab'} stays inside open drawer`, tab.defaultPrevented && root.activeElement === close);
    }
    close.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, composed: true, cancelable: true }));
    await settle(dialog);
    check('Escape hides drawer and restores toggle focus', aside.hidden && aside.inert && root.activeElement === root.querySelector('.preview-toggle'));
  } else {
    check('desktop preview visible', !aside.hidden && !aside.inert && aside.getBoundingClientRect().width > 0);
  }
  // Exercise the same production breakpoint event callback, preserving the live
  // preview instance rather than creating separate desktop and drawer elements.
  dialog._previewMediaChanged({ matches: !wide });
  await settle(dialog);
  check('breakpoint change retains single preview instance', root.querySelector('sidebar-dialog-preview') === preview && root.querySelectorAll('sidebar-dialog-preview').length === 1);
  check('global preview stays attached after responsive transition', (window as any).SoDialogPreview === preview && preview.isConnected);
  dialog.remove();
  await new Promise(resolve => setTimeout(resolve, 250));
  check('preview teardown clears global reference', (window as any).SoDialogPreview === undefined);

  // Suppress runtime auto-start: methods below operate on native DOM fixtures.
  (window as any).SidebarOrganizer = {};
  const { SidebarOrganizer } = await import('../../src/sidebar-organizer');
  const runtime = Object.create(SidebarOrganizer.prototype) as any;
  const sidebar = document.createElement('div');
  sidebar.style.setProperty('--primary-color', 'green', 'important');
  const sidebarRoot = sidebar.attachShadow({ mode: 'open' });
  sidebarRoot.innerHTML = '<div class="menu"><div class="title"><span>Original title</span></div></div><div class="panels-list"><ha-list-nav class="before-spacer"><ha-list-item-button group="Test">Overview</ha-list-item-button></ha-list-nav></div>';
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
  runtime._ha = { hass: { ...hass, themes: {
    default_theme: 'default', theme: 'default', themes: { Fixture: { 'primary-color': 'red' } },
  } } };
  runtime._haDrawer = drawer;
  runtime._haMain = { element: Promise.resolve(main) };
  runtime._store = { _utils: { CONFIG: { _computeWidth: (width: number) => `${width}px` } } };
  runtime._styleManager = new HomeAssistantStylesManager({ prefix: 'sidebar-organizer-fixture', throwWarnings: false });
  runtime._templateUnsubscribers = new Set();
  runtime._templateSubscriptionGeneration = 0;
  runtime._config = { header_title: 'Custom title', width: 333, custom_groups: { Test: ['lovelace'] }, animation_off: true, force_transparent_background: true };
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
  check('header toggle exposes button semantics', allToggle.getAttribute('role') === 'button' && allToggle.tabIndex === 0);
  // Apply header state through production logic; DOM grouping remains minimal.
  runtime._handleCollapsed = () => runtime._handleCollapsedChange();
  allToggle.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }));
  check('header Enter collapses groups with updated aria', runtime.collapsedItems.has('Test') && allToggle.getAttribute('aria-expanded') === 'false');
  allToggle.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true, cancelable: true }));
  check('header Space expands groups with updated aria', !runtime.collapsedItems.has('Test') && allToggle.getAttribute('aria-expanded') === 'true');
  const divider = createRuntimeGroupDivider.call(runtime, 'Test');
  sidebarRoot.querySelector('.panels-list')!.prepend(divider);
  const item = sidebarRoot.querySelector('ha-list-item-button')!;
  divider.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }));
  check('group Enter collapses native items and updates aria', item.classList.contains('collapsed') && divider.getAttribute('aria-expanded') === 'false');
  divider.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true, cancelable: true }));
  check('group Space expands native items and updates aria', !item.classList.contains('collapsed') && divider.getAttribute('aria-expanded') === 'true');
  await runtime._addCustomWidthStyle();
  runtime._addAdditionalStyles({ custom_theme: { theme: 'Fixture', mode: 'light' } }, 'light');
  check('runtime appearance applies external width', main.style.getPropertyValue('--custom-sidebar-width') === '333px');
  check('runtime appearance applies external theme', sidebar.style.getPropertyValue('--primary-color') === 'red');
  check('runtime transparent drawer injects style', Boolean(drawer.shadowRoot!.querySelector('style')));
  runtime._restoreSidebarSnapshot();
  check('runtime restore returns original header node', title.firstChild === originalTitleNode && title.textContent === 'Original title');
  check('runtime restore returns original nested badge content', nativeBadge.textContent === '7');
  check('runtime restore returns original width and priority', main.style.getPropertyValue('--custom-sidebar-width') === '222px' && main.style.getPropertyPriority('--custom-sidebar-width') === 'important');
  check('runtime restore returns original theme and priority', sidebar.style.getPropertyValue('--primary-color') === 'green' && sidebar.style.getPropertyPriority('--primary-color') === 'important');
  check('runtime restore removes drawer and width injected styles', !drawer.shadowRoot!.querySelector('style') && !main.shadowRoot!.querySelector('style'));
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
  check('disabling scroll-hide restores toolbar styling', toolbar.style.transform === 'translateY(2px)' && toolbar.style.getPropertyPriority('transform') === 'important' && toolbar.style.opacity === '0.8');
  check('disabling scroll-hide removes owned header state and styles', !header.classList.contains('scroll-hide') && !header.style.getPropertyValue('--header-hide-progress') && !hui.shadowRoot!.querySelector('style'));
  hui.remove();
  sidebar.remove(); main.remove(); drawer.remove();
} catch (error) {
  result.errors.push(String((error as Error).stack || error));
}
show();
