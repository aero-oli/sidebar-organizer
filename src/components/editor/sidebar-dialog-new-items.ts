import { mdiChevronLeft, mdiEmoticonExcited, mdiGestureTap } from '@mdi/js';
import { SidebarConfig, NewItemConfig } from '@types';
import { TRANSLATED_LABEL } from '@utilities/localize';
import { safeCustomElement } from '@utilities/safe-custom-element';
import { showConfirmDialog, showPromptDialog } from '@utilities/show-dialog-box';
import { BaseEditor } from 'components/base-editor';
import { BOTTOM_SECTION, CONFIG_SECTION } from 'constants/config-area';
import { capitalize, pick } from 'es-toolkit/compat';
import { html, TemplateResult, nothing, PropertyValues, CSSResultGroup, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { repeat } from 'lit/directives/repeat.js';
import memoizeOne from 'memoize-one';

import { computeOptionalActionSchemaFull } from './forms';

const convertTitle = (title: string | undefined): string => {
  return title ? capitalize(title.trim()) : 'Ungrouped';
};

@safeCustomElement('sidebar-dialog-new-items')
export class SidebarDialogNewItems extends BaseEditor {
  constructor() {
    super(CONFIG_SECTION.NEW_ITEMS);
  }
  @property({ attribute: false }) _sidebarConfig!: SidebarConfig;

  @state() _selectedItemIndex: number | null = null;
  @state() _selectedItem: NewItemConfig | null = null;
  @state() _yamlMode: boolean = false;

  protected firstUpdated(changedProperties: PropertyValues): void {
    super.firstUpdated(changedProperties);
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    if (changedProperties.has('_selectedItemIndex')) {
      if (this._selectedItemIndex !== null) {
        this._selectedItem = this._sidebarConfig.new_items![this._selectedItemIndex];
        this._toggleItemInPreview(this._selectedItem.title!);
      } else {
        this._selectedItem = null;
        this._yamlMode = false;
        this._dialog._dialogPreview._hightlightItem(null);
      }
    }
  }

  private _actionsSchema = [
    {
      title: 'Interaction',
      type: 'expandable',
      flatten: true,
      iconPath: mdiGestureTap,
      schema: [
        {
          name: 'entity',
          selector: { entity: {} },
          helper: 'Entity to control when the button is pressed',
        },
        ...computeOptionalActionSchemaFull(),
      ],
    },
  ] as const;

  private _iconTemplateSchema = [
    {
      type: 'expandable',
      title: 'Icon template',
      iconPath: mdiEmoticonExcited,
      expanded: false,
      schema: [
        {
          name: 'icon_template',
          selector: {
            template: {},
          },
        },
      ],
    },
  ] as const;

  private _configSchema = memoizeOne(() =>
    [
      {
        type: 'grid',
        schema: [
          {
            name: 'icon',
            label: 'Item Icon',
            selector: { icon: {} },
          },
          {
            name: 'url_path',
            label: 'Destination',
            helper: 'Home Assistant path or full URL. Leave blank for an action-only item.',
            type: 'string',
          },
          {
            name: 'target',
            label: 'Open in',
            selector: {
              select: {
                mode: 'dropdown',
                options: [
                  { value: '_self', label: 'This window' },
                  { value: '_blank', label: 'New window' },
                ],
              },
            },
          },
        ],
      },
    ] as const
  );

  protected render(): TemplateResult | typeof nothing {
    if (!this.hass || !this._sidebarConfig) {
      return html`<div>Loading...</div>`;
    }
    return this._selectedItemIndex === null ? this._renderNewItemsList() : this._renderSelectedItem();
  }

  private _renderNewItemsList(): TemplateResult | typeof nothing {
    if (this._selectedItemIndex !== null) return nothing;
    const addBtn = html` <ha-button size="s" @click=${this._togglePromptNewItem}>Add new item </ha-button> `;
    const newItems = this._sidebarConfig?.new_items || [];

    const newItemsList = html`
      ${!newItems.length
        ? html`<div>No new items added yet</div>`
        : html`
            <div class="group-list">
              ${repeat(
                newItems,
                (item) => item.title,
                (item, index) => {
                  const { icon, title } = item;
                  return html`
                    <div class="group-item-row" style="padding-inline-start: 1rem">
                      <div class="group-name" @click=${() => (this._selectedItemIndex = index)}>
                        <ha-icon .icon=${icon}></ha-icon>
                        <div class="group-name-items">
                          ${title}
                          <span>${convertTitle(this.getGroupKey(title!))}</span>
                        </div>
                      </div>
                      <div class="group-actions">
                        <ha-icon-button .label=${'Edit item'} @click=${() => (this._selectedItemIndex = index)}>
                          <ha-icon icon="mdi:pencil"></ha-icon
                        ></ha-icon-button>
                        <ha-icon-button .label=${'Delete item'} @click=${this._handleDeleteItem.bind(this, index)}>
                          <ha-icon icon="mdi:trash-can-outline"></ha-icon
                        ></ha-icon-button>
                      </div>
                    </div>
                  `;
                }
              )}
            </div>
          `}
    `;

    return html`
      <div class="config-content">
        ${newItemsList}
        <div class="header-row flex-end">${addBtn}</div>
      </div>
    `;
  }

  private _renderSelectedItem(): TemplateResult | typeof nothing {
    if (this._selectedItemIndex === null) return nothing;
    const BTN_LABEL = TRANSLATED_LABEL.BTN_LABEL;
    const newItems = this._sidebarConfig.new_items![this._selectedItemIndex!];
    const headerBack = html` <div class="header-row">
      <ha-icon-button .path=${mdiChevronLeft} @click=${() => (this._selectedItemIndex = null)}> </ha-icon-button>
    </div>`;

    const baseData = { ...newItems };
    // console.log('Editing item:', baseData);
    const groupKey = this.getGroupKey(newItems.title!);
    const groupName = convertTitle(groupKey);

    // console.log('Item is in group:', inGroup);
    const dataWithoutActions = {
      icon: baseData?.icon,
      url_path: baseData?.url_path,
      target: baseData?.target || '_self',
    };

    const actionData = pick(baseData, ['entity', 'tap_action', 'hold_action', 'double_tap_action']);

    const iconTemplateData = {
      icon_template: baseData.icon_template,
    };
    const baseSchema = this._configSchema();
    const actionSchema = this._actionsSchema;
    const iconTemplateSchema = this._iconTemplateSchema;

    return html`
      ${headerBack}
      <div class="config-content">
        ${!this._yamlMode
          ? html`
              <div class="group-item-row item-name-row">
                <div class="group-name">
                  <ha-icon .icon=${newItems.icon}></ha-icon>
                  <div class="group-name-items">
                    ${newItems.title}
                    <span>${groupName}</span>
                  </div>
                </div>
                <div class="group-actions">
                  <ha-button
                    appearance="plain"
                    size="s"
                    @click=${this._toggleRenameItem.bind(this, this._selectedItemIndex!)}
                    >Rename</ha-button
                  >
                </div>
              </div>

              ${this._createHaForm(dataWithoutActions, baseSchema, 'base')}
              ${this._createHaForm(actionData, actionSchema, 'actions')}
              ${this._createHaForm(iconTemplateData, iconTemplateSchema, 'icon_template', 'icon-template-form')}
            `
          : html`
              <ha-yaml-editor
                .hass=${this.hass}
                .defaultValue=${baseData}
                .copyToClipboard=${true}
                .required=${true}
                @value-changed=${(ev: CustomEvent) => {
                  const { isValid, value } = ev.detail;
                  if (isValid) {
                    this._sidebarConfig.new_items![this._selectedItemIndex!] = value;
                    this._dispatchConfig(this._sidebarConfig);
                  }
                }}
              ></ha-yaml-editor>
            `}
        <div class="header-row flex-end">
          <ha-button
            appearance="plain"
            size="s"
            @click=${() => {
              this._yamlMode = !this._yamlMode;
            }}
            >${this._yamlMode ? BTN_LABEL.SHOW_VISUAL_EDITOR : BTN_LABEL.SHOW_CODE_EDITOR}</ha-button
          >
        </div>
      </div>
    `;
  }

  private getGroupKey(item: string): string | undefined {
    return this._dialog._getGroupOfPanel(item) || undefined;
  }

  private _toggleItemInPreview(itemTitle: string): void {
    const inGroups = this._dialog._getGroupOfPanel(itemTitle);
    console.log('%cSIDEBAR-DIALOG-NEW-ITEMS:', 'color: #40c057;', '_toggleItemInPreview', itemTitle, inGroups);
    if (inGroups && inGroups !== null) {
      if (['bottom_items', 'bottom_grid_items'].includes(inGroups)) {
        this._dialog._dialogPreview._toggleBottomPanel(inGroups as BOTTOM_SECTION);
      } else {
        this._dialog._dialogPreview._toggleGroup(inGroups);
      }
    } else {
      this._dialog._dialogPreview._toggleGroup(inGroups);
    }
    this._dialog._dialogPreview._hightlightItem(itemTitle);
  }

  private _createHaForm(data: any, schema: any, configKey?: string | number | undefined, id?: string): TemplateResult {
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${schema}
        .configKey=${configKey}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
        id=${ifDefined(id ? id : undefined)}
      >
      </ha-form>
    `;
  }
  private _computeLabel = (schema: any): string | undefined => {
    if (schema.name === 'entity' && !schema.context?.group_entity) {
      return undefined;
    }
    const label = schema.label || schema.name || schema.title || '';
    return capitalize(label.replace(/_/g, ' '));
  };
  private _computeHelper = (schema: any): string | TemplateResult | undefined => {
    return schema.helper || undefined;
  };

  private _valueChanged(ev: CustomEvent): void {
    ev.stopPropagation();
    if (this._selectedItemIndex === null) return;
    const index = this._selectedItemIndex;
    const currentItem = { ...this._sidebarConfig.new_items![index] };

    const incoming = ev.detail.value as Partial<NewItemConfig>;
    const configKey = (ev.target as any).configKey;
    console.log('Value changed for key:', configKey, incoming);

    let updates: Partial<NewItemConfig> = {};
    if (configKey === 'base') {
      updates = {
        ...incoming,
      };
    } else if (configKey === 'actions') {
      const currentActions = pick(currentItem, ['entity', 'tap_action', 'hold_action', 'double_tap_action']);
      if (JSON.stringify(currentActions) !== JSON.stringify(incoming)) {
        updates = {
          ...incoming,
        };
      }
    } else if (configKey === 'icon_template') {
      if (JSON.stringify(currentItem.icon_template) !== JSON.stringify(incoming.icon_template)) {
        updates = {
          icon_template: incoming.icon_template,
        };
      }
    }
    if (Object.keys(updates).length > 0) {
      const updatedItem: NewItemConfig = {
        ...currentItem,
        ...updates,
      };

      const newItems = [...(this._sidebarConfig.new_items || [])];
      newItems[index] = updatedItem;
      console.log('Updated item:', updatedItem);
      this._sidebarConfig = {
        ...this._sidebarConfig,
        new_items: newItems,
      };

      this._selectedItem = { ...updatedItem };
      this._dispatchConfig(this._sidebarConfig);
    }
  }

  private _handleDeleteItem = async (index: number) => {
    const title = this._sidebarConfig.new_items![index].title;
    const confirmDelete = await showConfirmDialog(
      this,
      `Are you sure you want to delete the item "${title}"?`,
      'Delete'
    );
    if (!confirmDelete) return;

    const newItems = [...(this._sidebarConfig.new_items || [])];
    newItems.splice(index, 1);
    this._sidebarConfig = {
      ...this._sidebarConfig,
      new_items: newItems,
    };

    this._handleRemoveItem(title!);

    this._dispatchConfig(this._sidebarConfig);
    this.requestUpdate();
  };

  private _handleRemoveItem = (title: string) => {
    this._updateItemAssignments(title);
  };

  private _updateItemAssignments(title: string, replacement?: string): void {
    const replace = (items: string[]) =>
      items.flatMap((item) => (item === title ? (replacement ? [replacement] : []) : [item]));
    this._sidebarConfig = {
      ...this._sidebarConfig,
      ...(this._sidebarConfig.custom_groups
        ? {
            custom_groups: Object.fromEntries(
              Object.entries(this._sidebarConfig.custom_groups).map(([group, items]) => [group, replace(items)])
            ),
          }
        : {}),
      ...(this._sidebarConfig.bottom_groups
        ? {
            bottom_groups: Object.fromEntries(
              Object.entries(this._sidebarConfig.bottom_groups).map(([group, items]) => [group, replace(items)])
            ),
          }
        : {}),
      ...(this._sidebarConfig.bottom_items ? { bottom_items: replace(this._sidebarConfig.bottom_items) } : {}),
      ...(this._sidebarConfig.bottom_grid_items
        ? { bottom_grid_items: replace(this._sidebarConfig.bottom_grid_items) }
        : {}),
    };
  }

  private _toggleRenameItem = async (index: number) => {
    const currentTitle = this._sidebarConfig.new_items![index].title!;
    let newItemTitle = await showPromptDialog(this, 'Enter new item title', 'Rename Item', 'Rename', 'Cancel');
    if (!newItemTitle || newItemTitle === '') return;
    newItemTitle = newItemTitle.trim();

    if (this._sidebarConfig.new_items?.some((item) => item.title === newItemTitle)) {
      await showConfirmDialog(this, `Item with this name already exists. Do you want to edit it?`, 'Edit', 'Cancel');
      return;
    }

    this._updateItemAssignments(currentTitle, newItemTitle);
    // Update the new item title
    const newItems = [...(this._sidebarConfig.new_items || [])];
    newItems[index] = {
      ...newItems[index],
      title: newItemTitle,
    };
    this._sidebarConfig = {
      ...this._sidebarConfig,
      new_items: newItems,
    };
    this._dispatchConfig(this._sidebarConfig);
    this._selectedItemIndex = index;
    this.requestUpdate();
  };

  private _togglePromptNewItem = async () => {
    let newItemTitle = await showPromptDialog(this, 'Enter new item title', 'New Item', 'Add', 'Cancel');
    if (!newItemTitle || newItemTitle === '') return;
    newItemTitle = newItemTitle.trim();
    if (this._sidebarConfig.new_items?.some((item) => item.title === newItemTitle)) {
      await showConfirmDialog(this, `Item with this name already exists. Do you want to edit it?`, 'Edit', 'Cancel');
      return;
    }
    const newItemConfig = {
      title: newItemTitle,
      icon: `mdi:alpha-${newItemTitle.charAt(0).toLowerCase()}-circle`,
    };

    const newItems = [...(this._sidebarConfig.new_items || [])];
    newItems.push(newItemConfig);
    this._sidebarConfig = {
      ...this._sidebarConfig,
      new_items: newItems,
    };
    this._dispatchConfig(this._sidebarConfig);
    this._selectedItemIndex = newItems.length - 1;
    this.requestUpdate();
  };

  private _dispatchConfig(config: SidebarConfig) {
    const event = new CustomEvent('sidebar-changed', { detail: config, bubbles: true, composed: true });
    this.dispatchEvent(event);
  }

  static get styles(): CSSResultGroup {
    return [
      super.styles,
      css`
        .config-content {
          margin-top: 0;
          min-height: 0;
        }
        .item-name-row {
          padding: 0.5em;
          border: 1px solid var(--divider-color);
          border-radius: 4px;
          background-color: var(--secondary-background-color);
        }
      `,
    ];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sidebar-dialog-new-items': SidebarDialogNewItems;
  }
}
