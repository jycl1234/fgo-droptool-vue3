import { describe, it, expect, vi } from 'vitest'
import { mockMats } from '../__mocks__/mockMats'
import { invalidRowData, validRowData } from '../__mocks__/mockRowData'
import { convertToResultsRow, getImgUrl, sortMats } from '../utils'
import { emptyRow } from '../constants'

vi.mock('../mats', () => ({
  mats: mockMats,
}))

const mat = mockMats[0]

describe('Utils test', () => {
  it('convertToResultsRow works as expected', () => {
    const result = convertToResultsRow(invalidRowData)
    expect(result).toStrictEqual(emptyRow)

    const { values } = validRowData
    const result2 = convertToResultsRow(validRowData)
    expect(result2).toStrictEqual({
      area: values[2].formattedValue,
      quest: values[3].formattedValue,
      hyperlink: values[3].hyperlink,
      ap: values[4].formattedValue,
      bpPerAp: values[5].formattedValue,
      apPerDrop: values[6].formattedValue,
      dropChance: values[8].formattedValue,
      runs: values[10].formattedValue,
    })
  })

  it('getImgUrl works as expected', () => {
    const result = getImgUrl(mat)
    expect(result).toBe(`https://static.atlasacademy.io/JP/Items/${mat.filename}_bordered.png`)
  })

  it('sortMats works as expected', () => {
    const result = sortMats()
    expect(result.length).toEqual(mockMats.length)
  })
})
