import { describe, it, expect } from 'vitest'
import { mats } from '@/static/mats'
import { convertToResultsRow, getImgUrl, sortMats } from '../utils'
import { emptyRow } from '../constants'

const mat = mats[0]
const validRowData = {
  values: [
    {
      unused: '[0]',
    },
    {
      unused: '[1]',
    },
    {
      formattedValue: 'area formattedValue',
    },
    {
      formattedValue: 'quest formattedValue',
      hyperlink: 'quest hyperlink',
    },
    {
      formattedValue: 'ap formattedValue',
    },
    {
      formattedValue: 'bpPerAp formattedValue',
    },
    {
      formattedValue: 'apPerDrop formattedValue',
    },
    {
      unused: '[7]',
    },
    {
      formattedValue: 'dropChance formattedValue',
    },
    {
      unused: '[9]',
    },
    {
      formattedValue: 'runs formattedValue',
    },
  ],
}
const invalidRowData = { invalid: 'test data' }

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
    expect(result.length).toEqual(mats.length)
  })
})
