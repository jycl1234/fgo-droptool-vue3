import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useStore } from '@/stores/store'
import { mats } from '@/static/mats'
import MatBox from '../MatBox.vue'

describe('MatBox', () => {
  const mat = [mats[0]]
  const pinia = createTestingPinia()
  let wrapper, store

  beforeEach(() => {
    store = useStore()
    wrapper = mount(MatBox, {
      global: {
        plugins: [pinia],
      },
      propsData: {
        mat: mat,
      },
    })
  })

  it('renders properly', () => {
    expect(wrapper.find('[data-testid="wrapper--mat-box"]').exists()).toBe(true)

    const img = wrapper.find('[data-testid="image--mat"]')

    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe(
      `https://static.atlasacademy.io/JP/Items/${mat.filename}_bordered.png`,
    )
  })

  // found a lot of stuff about browser mode in vitest which looked like a ton of
  // overhead and configuration; opted for a simpler method first

  it('fires store method on click', async () => {
    await wrapper.find('[data-testid="wrapper--mat-box"]').trigger('click')
    expect(store.setCurrentMat).toHaveBeenCalledTimes(1)
  })
})
