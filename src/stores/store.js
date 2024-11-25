import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { sheetIds } from '@/static/sheets'
import {
  BASE_URL,
  RARITY_BRONZE,
  RARITY_GOLD,
  RARITY_SILVER,
  SORT_ASC,
  SPREADSHEET_ID,
} from '@/static/constants'
import { API_KEY } from '@/static/apiKey'
import { sortMats } from '@/static/utils'

export const useStore = defineStore('store', () => {
  const selectedSheet = ref('')
  const selectedMat = ref({})
  const sortOrder = ref('')
  const rarityFilters = ref([])
  const matsArray = ref([])
  const resultsArray = ref([])
  const isLoading = ref(false)
  const isCollapsed = ref(false)

  const setSelectedMat = (mat) => {
    selectedMat.value = mat
    if (Object.keys(mat).length === 0) {
      isCollapsed.value = false
    } else {
      isCollapsed.value = true
    }
  }

  const clearResults = () => {
    isCollapsed.value = false
    selectedMat.value = {}
    resultsArray.value = []
  }

  const fetchResults = async () => {
    isLoading.value = true
    resultsArray.value = []
    const url = `${BASE_URL}${SPREADSHEET_ID}?ranges=${selectedSheet.value}!${selectedMat.value.startRange}:${selectedMat.value.endRange}&fields=sheets&key=${API_KEY}`
    axios
      .get(url)
      .then((res) => {
        isLoading.value = false
        const { data: { sheets = [] } = {} } = res
        if (sheets.length > 0 && sheets[0].data.length > 0) {
          const { rowData } = sheets[0].data[0]
          // if there's no formattedValue on first line this is a blank entry
          if (rowData[0].values[2].formattedValue) {
            resultsArray.value = rowData
          } else {
            resultsArray.value = []
          }
        }
      })
      .catch((err) => {
        isLoading.value = false
        resultsArray.value = []
        // there's an entire bunch of stuff that can be done to improve err handling here
        console.log('error', err)
      })
  }

  const initializeStore = () => {
    selectedSheet.value = sheetIds[0]?.url
    sortOrder.value = SORT_ASC
    rarityFilters.value = [RARITY_GOLD, RARITY_SILVER, RARITY_BRONZE]
    matsArray.value = sortMats({
      order: SORT_ASC,
    })
  }

  initializeStore()

  return {
    clearResults,
    isLoading,
    isCollapsed,
    matsArray,
    rarityFilters,
    resultsArray,
    selectedSheet,
    selectedMat,
    sortOrder,
    fetchResults,
    setSelectedMat,
  }
})
