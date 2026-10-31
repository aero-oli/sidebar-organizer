const THEME_MODE_OPTIONS = ['light', 'dark'] as const;

export const CUSTOM_THEME_SCHEMA = (modeDisabled = false) =>
  [
    {
      name: 'custom_theme',
      type: 'grid',
      flatten: true,
      schema: [
        {
          name: 'theme',
          label: 'Sidebar theme',
          required: false,
          selector: { theme: { include_default: false } },
        },
        {
          name: 'mode',
          label: 'Theme mode',
          required: false,
          disabled: modeDisabled,
          selector: {
            select: {
              mode: 'dropdown',
              options: THEME_MODE_OPTIONS.map((mode) => ({
                value: mode,
                label: mode.charAt(0).toUpperCase() + mode.slice(1),
              })),
            },
          },
        },
      ] as const,
    },
  ] as const;
