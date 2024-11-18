import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useStore } from '@/stores/store'
import { sheetIds } from '@/static/sheets'

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
    store.setSelectedMat('test mat value')
    expect(store.selectedMat).toBe('test mat value')
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

  // stub('fetchResults works as expected', () => {})
})
