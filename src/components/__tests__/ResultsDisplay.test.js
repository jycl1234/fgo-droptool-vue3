import { beforeEach, describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useStore } from '@/stores/store'
import ResultsDisplay from '../ResultsDisplay.vue'

describe('ResultsDisplay', () => {
  const pinia = createTestingPinia()

  let wrapper, store

  beforeEach(() => {
    store = useStore()
    wrapper = mount(ResultsDisplay, {
      global: {
        plugins: [pinia],
      },
      propsData: {
        results: [],
      },
    })
  })

  it('renders properly', async () => {
    store.resultsArray = [{ test: '1' }]
    await wrapper.vm.$nextTick()

    expect(wrapper.find('[data-testid="wrapper--results-display"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="wrapper--results-rows"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="wrapper--results-empty"]').exists()).toBe(false)
  })

  it('if resultsArray is empty, renders the other div', async () => {
    store.resultsArray = []
    store.isLoading = true
    await wrapper.vm.$nextTick()

    expect(wrapper.find('[data-testid="wrapper--results-display"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="wrapper--results-rows"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="wrapper--results-empty"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="wrapper--results-empty"]').text()).toContain('loading')

    store.isLoading = false
    await wrapper.vm.$nextTick()
    expect(wrapper.find('[data-testid="wrapper--results-empty"]').text()).toContain('No results')
  })
})
