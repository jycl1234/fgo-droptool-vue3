import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import MatSelector from '../MatSelector.vue'
import MatBox from '../MatBox.vue'

describe('MatSelector', () => {
  it('renders properly', () => {
    // shallow vs full mount to stub out child MatBox and avoid scaffolding testingPinia
    const wrapper = shallowMount(MatSelector)
    expect(wrapper.find('[data-testid="wrapper--mat-selector"]').exists()).toBe(true)
    expect(wrapper.findAllComponents(MatBox).length).toBeGreaterThan(1)
  })
})
