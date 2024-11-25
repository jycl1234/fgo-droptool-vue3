import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChangelogView from '../ChangelogView.vue'

describe('ChangelogView', () => {
  it('renders properly', () => {
    const wrapper = mount(ChangelogView)
    expect(wrapper.text()).toContain('Changelog')

    expect(wrapper.find('[data-testid="changelog"]').exists()).toBe(true)

    // https://github.com/vuejs/vue-test-utils/issues/1594#issuecomment-650052713
    // was concerned about findAll deprecation warning
    expect(wrapper.findAll('[data-testid="item"]')).toHaveLength(8)
  })
})
