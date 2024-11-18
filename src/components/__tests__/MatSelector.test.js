import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MatSelector from '../MatSelector.vue'

describe('MatSelector', () => {
  it('renders properly', () => {
    const wrapper = mount(MatSelector)
    expect(wrapper.find('[data-testid="wrapper--mat-selector"]').exists()).toBe(true)
    expect(wrapper.findAll('[data-testid="matbox"]').length).toBeGreaterThan(1)
  })
})
