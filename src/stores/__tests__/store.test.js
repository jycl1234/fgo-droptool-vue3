import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import axios from 'axios'
import { useStore } from '@/stores/store'
import { sheetIds } from '@/static/sheets'
import { mats } from '@/static/mats'

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
  })

  it('setSelectedSheet works as expected', () => {
    store.setSelectedSheet('test sheet value')
    expect(store.selectedSheet).toBe('test sheet value')
  })

  it('setSelectedMat works as expected', () => {
    store.setSelectedMat({ name: 'test mat value' })
    expect(store.selectedMat).toStrictEqual({ name: 'test mat value' })
    expect(store.isCollapsed).toBe(true)

    store.setSelectedMat({})
    expect(store.selectedMat).toStrictEqual({})
    expect(store.isCollapsed).toBe(false)
  })

  it('setSortOrder works as expected', () => {
    store.setSortOrder('ASC')
    expect(store.sortOrder).toBe('ASC')
  })

  it('setResultsArray works as expected', () => {
    store.setResultsArray(['1', '2', '3'])
    expect(store.resultsArray).toStrictEqual(['1', '2', '3'])
  })

  it('setIsLoading works as expected', () => {
    store.setIsLoading(true)
    expect(store.isLoading).toBe(true)
  })

  it('setIsCollapsed works as expected', () => {
    store.setIsCollapsed(true)
    expect(store.isCollapsed).toBe(true)
  })

  it('clearResults works as expected', () => {
    store.setIsCollapsed(true)
    store.setSelectedMat({ name: 'test mat' })
    store.setResultsArray(['1', '2', '3'])
    store.clearResults()
    expect(store.isCollapsed).toBe(false)
    expect(store.selectedMat).toStrictEqual({})
    expect(store.resultsArray).toStrictEqual([])
  })

  it('fetchResults works as expected', async () => {
    // `${BASE_URL}${SPREADSHEET_ID}?ranges=${selectedSheet.value}!${selectedMat.value.startRange}:${selectedMat.value.endRange}&fields=sheets&key=${API_KEY}`
    store.setSelectedSheet(sheetIds[0].url)
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
