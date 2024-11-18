import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { sheetIds } from '@/static/sheets'
import SheetSelector from '../SheetSelector.vue'

describe('SheetSelector', () => {
  it('renders properly', () => {
    const count = sheetIds.length
    const pinia = createTestingPinia()
    const wrapper = mount(SheetSelector, {
      global: {
        plugins: [pinia],
      },
    })
    expect(wrapper.find('[data-testid="wrapper--sheet-selector"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="sheet-selector"]').exists()).toBe(true)
    expect(wrapper.findAll('[data-testid="option"]').length).toBe(count)
  })
})
