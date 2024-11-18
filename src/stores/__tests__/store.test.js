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

  it('setCurrentMat works as expected', () => {
    store.setCurrentMat('test mat value')
    expect(store.selectedMat).toBe('test mat value')
  })
})
