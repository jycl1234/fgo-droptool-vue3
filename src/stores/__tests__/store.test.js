import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import axios from 'axios'
import { useStore } from '@/stores/store'
import { sheetIds } from '@/static/sheets'
import { mats } from '@/static/mats'
import { RARITY_BRONZE, RARITY_GOLD, RARITY_SILVER, SORT_ASC } from '@/static/constants'

vi.mock('axios')

const mockRowData = [
  {
    values: [
      {
        test1: 'test1',
      },
      {
        test2: 'test2',
      },
      {
        formattedValue: 'test formatted value',
        test3: 'test3',
      },
    ],
  },
]

describe('Store test', () => {
  let store = null

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useStore()
  })

  it('initializes with correct values', () => {
    const { selectedSheet } = store
    expect(store).toBeTruthy()
    expect(selectedSheet).toBe(sheetIds[0].url)
    expect(store.matsArray.length).toBeGreaterThan(1)
    expect(store.sortOrder).toEqual(SORT_ASC)
    expect(store.rarityArray).toContain(RARITY_BRONZE)
    expect(store.rarityArray).toContain(RARITY_SILVER)
    expect(store.rarityArray).toContain(RARITY_GOLD)
  })

  it('setSelectedMat works as expected', () => {
    store.setSelectedMat({ name: 'test mat value' })
    expect(store.selectedMat).toStrictEqual({ name: 'test mat value' })
    expect(store.isCollapsed).toBe(true)

    store.setSelectedMat({})
    expect(store.selectedMat).toStrictEqual({})
    expect(store.isCollapsed).toBe(false)
  })

  it('clearResults works as expected', () => {
    store.isCollapsed = true
    store.resultsArray = ['1', '2', '3']
    store.setSelectedMat({ name: 'test mat' })

    store.clearResults()

    expect(store.isCollapsed).toBe(false)
    expect(store.selectedMat).toStrictEqual({})
    expect(store.resultsArray).toStrictEqual([])
  })

  it('fetchResults works as expected', async () => {
    store.selectedSheet = sheetIds[0].url
    store.setSelectedMat(mats[0])

    axios.get.mockResolvedValueOnce({
      data: 'invalid response',
    })
    await store.fetchResults()
    expect(store.isLoading).toBe(false)
    expect(store.resultsArray).toStrictEqual([])

    axios.get.mockResolvedValueOnce({
      data: {
        sheets: [
          {
            data: [
              {
                rowData: mockRowData,
              },
            ],
          },
        ],
      },
    })
    await store.fetchResults()
    expect(store.isLoading).toBe(false)
    expect(store.resultsArray).toStrictEqual(mockRowData)
  })
})
