import assert from 'node:assert/strict';
import test from 'node:test';
import {
  APPEARANCE_SECTIONS,
  appearanceConfigData,
  appearanceFormData,
} from '../../src/components/editor/forms/header-schema';

test('positive appearance controls preserve existing persisted semantics', () => {
  for (const hide_header_toggle of [undefined, false, true]) {
    for (const animation_off of [undefined, false, true]) {
      const current = { hide_header_toggle, animation_off, width: '300px' };
      const form = appearanceFormData(current);
      assert.equal(form.show_header_toggle, !hide_header_toggle);
      assert.equal(form.animate_groups, !animation_off);
      assert.deepEqual(appearanceConfigData(form, current), current);
      assert.deepEqual(
        appearanceConfigData(
          { ...form, show_header_toggle: !form.show_header_toggle, animate_groups: !form.animate_groups },
          current
        ),
        {
          ...current,
          hide_header_toggle: !hide_header_toggle,
          animation_off: !animation_off,
        }
      );
    }
  }
});

test('unrelated appearance edits do not persist visual-only controls or add default flags', () => {
  const current = { header_title: 'Home' };
  assert.deepEqual(appearanceConfigData({ ...appearanceFormData(current), width: '320px' }, current), {
    header_title: 'Home',
    width: '320px',
  });
});

test('appearance groups controls and hides animation delay when animation is off', () => {
  assert.deepEqual(
    APPEARANCE_SECTIONS({}).map((section) => section.title),
    ['Header', 'Group behaviour', 'Size']
  );
  const names = (animation_off: boolean) =>
    APPEARANCE_SECTIONS({ animation_off }).flatMap((section) => section.schema.map((field) => field.name));
  assert.equal(names(false).includes('animation_delay'), true);
  assert.equal(names(true).includes('animation_delay'), false);
});
