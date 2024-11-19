import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useStore } from '@/stores/store'
import { mats } from '@/static/mats'
import { MODE_OPEN, MODE_COLLAPSED } from '@/static/constants'
import MatBox from '../MatBox.vue'

describe('MatBox', () => {
  const mat = [mats[0]]
  const pinia = createTestingPinia()
  let wrapper, store

  beforeEach(() => {
    store = useStore()
  })

  it(`renders properly in ${MODE_OPEN} mode`, () => {
    wrapper = mount(MatBox, {
      global: {
        plugins: [pinia],
      },
      propsData: {
        mat: mat,
        mode: MODE_OPEN,
      },
    })
    expect(wrapper.find('[data-testid="wrapper--mat-box"]').exists()).toBe(true)

    const img = wrapper.find('[data-testid="image--mat"]')

    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe(
      `https://static.atlasacademy.io/JP/Items/${mat.filename}_bordered.png`,
    )
  })

  it(`renders properly in ${MODE_COLLAPSED} mode`, () => {
    wrapper = mount(MatBox, {
      global: {
        plugins: [pinia],
      },
      propsData: {
        mat: mat,
        mode: MODE_COLLAPSED,
      },
    })
    expect(wrapper.find('[data-testid="wrapper--mat-box-collapsed"]').exists()).toBe(true)

    const img = wrapper.find('[data-testid="image--mat"]')

    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe(
      `https://static.atlasacademy.io/JP/Items/${mat.filename}_bordered.png`,
    )
  })

  it(`fires store methods on click in ${MODE_OPEN} mode`, async () => {
    wrapper = mount(MatBox, {
      global: {
        plugins: [pinia],
      },
      propsData: {
        mat: mat,
        mode: MODE_OPEN,
      },
    })

    await wrapper.find('[data-testid="wrapper--mat-box"]').trigger('click')
    expect(store.setSelectedMat).toHaveBeenCalledTimes(1)
    expect(store.fetchResults).toHaveBeenCalledTimes(1)
  })

  it(`fires store methods on click in ${MODE_COLLAPSED} mode`, async () => {
    wrapper = mount(MatBox, {
      global: {
        plugins: [pinia],
      },
      propsData: {
        mat: mat,
        mode: MODE_COLLAPSED,
      },
    })

    await wrapper.find('[data-testid="wrapper--mat-box-collapsed"]').trigger('click')
    expect(store.clearResults).toHaveBeenCalledTimes(1)
  })
})
