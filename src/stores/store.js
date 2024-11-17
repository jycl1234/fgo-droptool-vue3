import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const selectedMat = ref('test1')
  const selectedSheet = ref('test2')
  const sortOrder = ref('test3')

  return { selectedMat, selectedSheet, sortOrder }
})
