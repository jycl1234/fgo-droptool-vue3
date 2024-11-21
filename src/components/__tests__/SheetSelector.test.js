import { beforeEach, describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useStore } from '@/stores/store'
import { sheetIds } from '@/static/sheets'
import SheetSelector from '../SheetSelector.vue'

describe('SheetSelector', () => {
  const count = sheetIds.length
  const pinia = createTestingPinia()

  let wrapper, store

  beforeEach(() => {
    store = useStore()
    wrapper = mount(SheetSelector, {
      global: {
        plugins: [pinia],
      },
    })
  })

  it('renders properly', () => {
    expect(wrapper.find('[data-testid="wrapper--sheet-selector"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="sheet-selector"]').exists()).toBe(true)
    expect(wrapper.findAll('[data-testid="option"]').length).toBe(count)
  })

  it('fires change event', async () => {
    await wrapper.find('[data-testid="sheet-selector"]').trigger('change')
    expect(store.fetchResults).toHaveBeenCalledTimes(1)
  })
})
