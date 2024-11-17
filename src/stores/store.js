import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import { sheetIds } from '@/static/sheets'

export const useStore = defineStore('store', () => {
  const selectedSheet = ref('')
  const selectedMat = ref('')
  const sortOrder = ref('')

  // initialize to default (first) values

  onMounted(() => {
    selectedSheet.value = sheetIds[0]?.url
  })

  return { selectedSheet, selectedMat, sortOrder }
})
