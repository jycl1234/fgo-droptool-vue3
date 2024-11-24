import { beforeEach, describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useStore } from '@/stores/store'
import { sortMats } from '../../static/utils'
import FilterSelector from '../FilterSelector.vue'
import { SORT_ASC, SORT_DESC } from '@/static/constants'

vi.mock('../../static/utils', () => ({
  sortMats: vi.fn(),
}))

describe('FilterSelector', () => {
  const pinia = createTestingPinia()

  // eslint-disable-next-line no-unused-vars
  let wrapper, store

  beforeEach(() => {
    store = useStore()
    wrapper = mount(FilterSelector, {
      global: {
        plugins: [pinia],
      },
    })
  })

  it('renders properly', () => {
    expect(wrapper.find('[data-testid="wrapper--filter-selector"]').exists()).toBe(true)
    expect(wrapper.findAll('[data-testid="selector--sort-order"]').length).toBe(2)
    expect(wrapper.findAll('[data-testid="label--sort-order"]').length).toBe(2)
  })

  it('fires change event', async () => {
    await wrapper.find('.selector--sort-order.asc').trigger('change')
    expect(sortMats).toHaveBeenCalledWith({ order: SORT_ASC })

    await wrapper.find('.selector--sort-order.desc').trigger('change')
    expect(sortMats).toHaveBeenCalledWith({ order: SORT_DESC })
  })
})
