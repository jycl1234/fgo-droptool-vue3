import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import MatSelector from '../MatSelector.vue'
import MatBox from '../MatBox.vue'

describe('MatSelector', () => {
  const pinia = createTestingPinia()
  let wrapper

  beforeEach(() => {
    wrapper = mount(MatSelector, {
      global: {
        plugins: [pinia],
      },
    })
  })

  it('renders properly', () => {
    expect(wrapper.find('[data-testid="wrapper--mat-selector"]').exists()).toBe(true)
    expect(wrapper.findAllComponents(MatBox).length).toBeGreaterThan(1)
  })
})
