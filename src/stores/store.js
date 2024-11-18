import { ref } from 'vue'
import { defineStore } from 'pinia'
import { sheetIds } from '@/static/sheets'

export const useStore = defineStore('store', () => {
  const selectedSheet = ref('')
  const selectedMat = ref('')
  const sortOrder = ref('')

  const initializeStore = () => {
    selectedSheet.value = sheetIds[0]?.url
  }

  const setCurrentMat = (mat) => {
    selectedMat.value = mat
  }

  initializeStore()

  return { selectedSheet, selectedMat, setCurrentMat, sortOrder }
})
