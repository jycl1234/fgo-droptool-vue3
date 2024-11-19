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

  // stub('fetchResults works as expected', () => {})
})
