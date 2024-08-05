import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import EighthTask from '@/components/EighthTask.vue';

describe('EighthTask.vue', () => {
    it('renders the initial count', () => {
      const wrapper = mount(EighthTask);
      expect(wrapper.text()).toContain('0');
    });
  
    it('increments the count when the button is clicked', async () => {
      const wrapper = mount(EighthTask);
      const button = wrapper.find('button');
      await button.trigger('click');
      expect(wrapper.text()).toContain('1');
    });
  });
