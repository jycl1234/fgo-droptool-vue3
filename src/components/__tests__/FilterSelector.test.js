import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useStore } from '@/stores/store'
import { sortMats } from '../../static/utils'
import FilterSelector from '../FilterSelector.vue'
import { RARITY_BRONZE, RARITY_GOLD, RARITY_SILVER, SORT_ASC, SORT_DESC } from '@/static/constants'

vi.mock('../../static/utils', () => ({
  sortMats: vi.fn(),
}))

const defaultRarityArray = [RARITY_GOLD, RARITY_SILVER, RARITY_BRONZE]

describe('FilterSelector', () => {
  const pinia = createTestingPinia()

  let wrapper, store

  beforeEach(() => {
    store = useStore()
    wrapper = mount(FilterSelector, {
      global: {
        plugins: [pinia],
      },
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders properly', () => {
    expect(wrapper.find('[data-testid="wrapper--filter-selector"]').exists()).toBe(true)
    expect(wrapper.findAll('[data-testid="selector--sort-order"]').length).toBe(2)
    expect(wrapper.findAll('[data-testid="label--sort-order"]').length).toBe(2)
    expect(wrapper.findAll('[data-testid="checkbox--rarity"]').length).toBe(3)
    expect(wrapper.findAll('[data-testid="label--rarity"]').length).toBe(3)
  })

  it('sort order fires change event', async () => {
    await wrapper.find('.selector--sort-order.asc').trigger('change')
    expect(sortMats).toHaveBeenCalledWith({ order: SORT_ASC, rarities: defaultRarityArray })

    await wrapper.find('.selector--sort-order.desc').trigger('change')
    expect(sortMats).toHaveBeenCalledWith({ order: SORT_DESC, rarities: defaultRarityArray })
  })

  it('rarity checkbox fires change event', async () => {
    store.$patch({
      rarityArray: defaultRarityArray,
      sortOrder: SORT_ASC,
    })

    await wrapper.find('.checkbox--rarity.gold').setChecked(false)
    expect(sortMats).toHaveBeenCalledWith({
      order: SORT_ASC,
      rarities: [RARITY_SILVER, RARITY_BRONZE],
    })

    await wrapper.find('.checkbox--rarity.gold').setChecked(true)
    expect(sortMats).toHaveBeenCalledWith({
      order: SORT_ASC,
      rarities: [RARITY_SILVER, RARITY_BRONZE, RARITY_GOLD],
    })

    await wrapper.find('.checkbox--rarity.silver').setChecked(false)
    expect(sortMats).toHaveBeenCalledWith({
      order: SORT_ASC,
      rarities: [RARITY_BRONZE, RARITY_GOLD],
    })
  })
})
