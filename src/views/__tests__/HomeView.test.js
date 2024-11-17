import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import HomeView from '../HomeView.vue'
import SheetSelector from '../../components/SheetSelector.vue'

describe('HomeView', () => {
  it('renders properly', () => {
    const pinia = createTestingPinia()
    const wrapper = mount(HomeView, {
      global: {
        plugins: [pinia],
      },
    })
    expect(wrapper.find('[data-testid="main"]').exists()).toBe(true)
    expect(wrapper.findComponent(SheetSelector).exists()).toBe(true)
  })
})
