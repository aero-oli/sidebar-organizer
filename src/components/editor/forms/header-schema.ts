import { SidebarAppearanceConfig, TextTransformations } from '@types';
import memoizeOne from 'memoize-one';

interface BooleanItem<T = string> {
  type: 'boolean';
  name: T;
  label?: string;
  helper?: string;
  default?: boolean;
}

const BOOLEAN_OPTIONS = [
  {
    name: 'show_header_toggle',
    label: 'Show expand/collapse button',
    helper: 'Show a header button to open or close all sidebar groups.',
    default: true,
  },
  {
    name: 'animate_groups',
    label: 'Animate groups',
    helper: 'Animate panels when opening and closing groups.',
    default: true,
  },
  {
    name: 'move_settings_from_fixed',
    label: 'Make Settings movable',
    helper: 'Allow Settings to be placed in a group instead of always staying fixed at the bottom.',
    default: false,
  },
  {
    name: 'force_transparent_background',
    label: 'Transparent sidebar background',
    helper: 'Let the dashboard background show through the sidebar.',
  },
  {
    name: 'accordion_mode',
    label: 'Keep only one group open',
    helper: 'Opening a group automatically closes the other groups.',
  },
];

const commonBooleanSchema = (name?: BooleanItem['name'][]) => {
  if (!name) {
    name = BOOLEAN_OPTIONS.map((b) => b.name);
  }
  const list: BooleanItem[] = [];
  name.forEach((n) => {
    const b = BOOLEAN_OPTIONS.find((bb) => bb.name === n);
    if (b) {
      list.push({
        name: b.name,
        label: b.label,
        helper: b.helper,
        default: b.default || false,
        type: 'boolean',
      });
    }
  });
  return list;
};

// Positive controls are local form values; persisted configuration keeps its existing keys.
export const appearanceFormData = (data: SidebarAppearanceConfig) => ({
  ...data,
  show_header_toggle: !data.hide_header_toggle,
  animate_groups: !data.animation_off,
});

export const appearanceConfigData = (data: Record<string, any>, current: SidebarAppearanceConfig) => {
  const { show_header_toggle, animate_groups, ...config } = data;
  if (typeof show_header_toggle === 'boolean' && show_header_toggle !== !current.hide_header_toggle) {
    config.hide_header_toggle = !show_header_toggle;
  }
  if (typeof animate_groups === 'boolean' && animate_groups !== !current.animation_off) {
    config.animation_off = !animate_groups;
  }
  return config;
};

export const APPEARANCE_SECTIONS = memoizeOne((data: SidebarAppearanceConfig) => [
  {
    title: 'Header',
    icon: 'mdi:format-title',
    schema: [
      { name: 'header_title', label: 'Sidebar title', helper: 'Text shown at the top of the sidebar.', type: 'string' },
      ...commonBooleanSchema(['show_header_toggle']),
    ],
  },
  {
    title: 'Group behaviour',
    icon: 'mdi:folder-outline',
    schema: [
      ...commonBooleanSchema(['accordion_mode', 'animate_groups']),
      ...(!data.animation_off
        ? [
            {
              name: 'animation_delay',
              label: 'Animation delay',
              selector: { number: { min: 0, max: 100, step: 10, mode: 'slider', unit_of_measurement: 'ms' } },
              helper: 'Time between each panel appearing when a group opens. Lower is faster.',
              default: 50,
            },
          ]
        : []),
      ...commonBooleanSchema(['move_settings_from_fixed']),
      {
        name: 'text_transformation',
        label: 'Group name capitalization',
        default: 'capitalize',
        selector: {
          select: {
            mode: 'dropdown',
            options: TextTransformations.map((mode) => ({
              value: mode,
              label: mode.charAt(0).toUpperCase() + mode.slice(1),
            })),
          },
        },
      },
    ],
  },
  {
    title: 'Size',
    icon: 'mdi:arrow-expand-horizontal',
    schema: [
      {
        name: 'width',
        label: 'Sidebar width',
        helper: 'Optional width, for example 300px or 20%. Leave blank to use Home Assistant’s default.',
        type: 'string',
      },
    ],
  },
]);

export const THEME_APPEARANCE_SCHEMA = () => commonBooleanSchema(['force_transparent_background']);
