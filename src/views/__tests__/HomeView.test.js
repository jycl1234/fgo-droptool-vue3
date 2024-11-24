import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import SheetSelector from '@/components/SheetSelector.vue'
import FilterSelector from '@/components/FilterSelector.vue'

describe('HomeView', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(HomeView)
    expect(wrapper.find('[data-testid="main"]').exists()).toBe(true)
    expect(wrapper.findComponent(SheetSelector).exists()).toBe(true)
    expect(wrapper.findComponent(FilterSelector).exists()).toBe(true)
  })
})
