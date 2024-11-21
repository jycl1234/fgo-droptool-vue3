import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ResultsRow from '../ResultsRow.vue'

const mockRowData = {
  area: 'area formattedValue',
  quest: 'quest formattedValue',
  hyperlink: 'hyperlink formattedValue',
  ap: 'ap formattedValue',
  bpPerAp: 'bpPerAp formattedValue',
  apPerDrop: 'apPerDrop formattedValue',
  dropChance: 'dropChance formattedValue',
  runs: 'runs formattedValue',
}

describe('ResultsRow', () => {
  it('renders properly', async () => {
    const wrapper = mount(ResultsRow, {
      propsData: {
        row: mockRowData,
      },
    })

    expect(wrapper.find('[data-testid="wrapper--results-row"]').exists()).toBe(true)
    expect(wrapper.findAll('[data-testid="column"]').length).toBe(7)
    expect(wrapper.find('.column.area').text()).toContain(mockRowData.area)
    expect(wrapper.find('.column.quest').text()).toContain(mockRowData.quest)
    expect(wrapper.find('.column.quest a').html()).toContain(mockRowData.hyperlink)
    expect(wrapper.find('.column.ap').text()).toContain(mockRowData.ap)
    expect(wrapper.find('.column.bp-per-ap').text()).toContain(mockRowData.bpPerAp)
    expect(wrapper.find('.column.ap-per-drop').text()).toContain(mockRowData.apPerDrop)
    expect(wrapper.find('.column.drop-chance').text()).toContain(mockRowData.dropChance)
    expect(wrapper.find('.column.runs').text()).toContain(mockRowData.runs)
  })
})
