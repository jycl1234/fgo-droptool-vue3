import { beforeEach, describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useStore } from '@/stores/store'
import MatSelector from '../MatSelector.vue'
import MatBox from '../MatBox.vue'

describe('MatSelector', () => {
  const pinia = createTestingPinia()

  let wrapper, store

  beforeEach(() => {
    store = useStore()
    // shallow vs full mount to stub out child MatBox and avoid scaffolding testingPinia
    wrapper = shallowMount(MatSelector, {
      global: {
        plugins: [pinia],
      },
    })
  })

  it('renders properly', () => {
    expect(wrapper.find('[data-testid="wrapper--mat-selector"]').exists()).toBe(true)
    expect(wrapper.findAllComponents(MatBox).length).toBeGreaterThan(1)
  })

  it('if isCollapsed is true, renders collapsed version', async () => {
    store.isCollapsed = true
    await wrapper.vm.$nextTick()

    expect(wrapper.find('[data-testid="wrapper--mat-selector"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="wrapper--mat-selector-collapsed"]').exists()).toBe(true)
    expect(wrapper.findAllComponents(MatBox).length).toBe(1)
  })
})
