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
    name: 'hide_header_toggle',
    label: 'Hide expand/collapse button',
    helper: 'Remove the header button that opens or closes every sidebar group.',
  },
  {
    name: 'animation_off',
    label: 'Disable group animation',
    helper: 'Open and close groups immediately instead of animating each panel.',
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

export const BASE_APPEARANCE_SCHEMA = memoizeOne((data: SidebarAppearanceConfig) => {
  const delayDisabled = data?.animation_off === true;
  return [
    {
      type: 'grid',
      schema: [
        {
          name: 'header_title',
          label: 'Sidebar title',
          helper: 'Text shown at the top of the sidebar.',
          type: 'string',
        },
        ...commonBooleanSchema(['hide_header_toggle', 'animation_off']),
        ...(!delayDisabled
          ? [
              {
                name: 'animation_delay',
                label: 'Animation Delay (ms)',
                selector: {
                  number: {
                    min: 0,
                    max: 100,
                    step: 10,
                    mode: 'slider',
                    unit_of_measurement: 'ms',
                  },
                },
                helper: 'Time between each panel appearing when a group opens. Lower is faster.',
                default: 50,
                disabled: delayDisabled,
              },
            ]
          : []),
        ...commonBooleanSchema(['move_settings_from_fixed', 'force_transparent_background', 'accordion_mode']),
        {
          name: 'text_transformation',
          label: 'Text Transformation',
          default: 'capitalize',
          helper: 'Choose how group names are capitalized.',
          selector: {
            select: {
              mode: 'dropdown',
              options: [
                ...TextTransformations.map((mode) => ({
                  value: mode,
                  label: mode.charAt(0).toUpperCase() + mode.slice(1),
                })),
              ],
            },
          },
        },
        {
          name: 'width',
          label: 'Custom Width',
          helper:
            'Optional sidebar width, for example 300px or 20%. Leave blank to use Home Assistant’s default.',
          type: 'string',
        },
      ] as const,
    },
  ] as const;
});
