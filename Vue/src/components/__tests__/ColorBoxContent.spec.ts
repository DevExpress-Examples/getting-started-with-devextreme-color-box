import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import ColorBoxContent from '../ColorBoxContent.vue';

describe('ColorBoxContent', () => {
  it('renders properly', () => {
    const wrapper = mount(ColorBoxContent);
    expect(wrapper.text()).toContain('Pick a color');
  });
});
