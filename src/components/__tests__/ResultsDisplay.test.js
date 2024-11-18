import { beforeEach, describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useStore } from '@/stores/store'
import ResultsDisplay from '../ResultsDisplay.vue'

describe('ResultsDisplay', () => {
  const pinia = createTestingPinia()
  // eslint-disable-next-line no-unused-vars
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

  it('renders properly', () => {
    expect(wrapper.find('[data-testid="wrapper--results-display"]').exists()).toBe(true)
  })
})
