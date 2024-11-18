import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { mats } from '@/static/mats'
import MatBox from '../MatBox.vue'

describe('MatBox', () => {
  it('renders properly', () => {
    const mat = [mats[0]]
    const wrapper = mount(MatBox, {
      propsData: {
        mat: mat,
      },
    })
    expect(wrapper.find('[data-testid="wrapper--mat-box"]').exists()).toBe(true)

    const img = wrapper.find('[data-testid="image--mat"]')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe(
      `https://static.atlasacademy.io/JP/Items/${mat.filename}_bordered.png`,
    )
  })
})
