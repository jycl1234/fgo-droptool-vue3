import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { sheetIds } from '@/static/sheets'
import { BASE_URL, SPREADSHEET_ID } from '@/static/constants'
import { API_KEY } from '@/static/apiKey'

export const useStore = defineStore('store', () => {
  const selectedSheet = ref('')
  const selectedMat = ref({})
  const sortOrder = ref('')
  const resultsArray = ref([])
  const isLoading = ref(false)
  const isCollapsed = ref(false)

  const setSelectedSheet = (sheet) => {
    selectedSheet.value = sheet
  }

  const setSelectedMat = (mat) => {
    selectedMat.value = mat
    if (Object.keys(mat).length === 0) {
      setIsCollapsed(false)
    } else {
      setIsCollapsed(true)
    }
  }

  const setSortOrder = (order) => {
    sortOrder.value = order
  }

  const setResultsArray = (results) => {
    resultsArray.value = results
  }

  const setIsLoading = (loading) => {
    isLoading.value = loading
  }

  const setIsCollapsed = (collapsed) => {
    isCollapsed.value = collapsed
  }

  const fetchResults = async () => {
    setIsLoading(true)
    setResultsArray([])
    const url = `${BASE_URL}${SPREADSHEET_ID}?ranges=${selectedSheet.value}!${selectedMat.value.startRange}:${selectedMat.value.endRange}&fields=sheets&key=${API_KEY}`
    axios
      .get(url)
      .then((res) => {
        setIsLoading(false)
        const { data: { sheets = [] } = {} } = res
        if (sheets.length > 0 && sheets[0].data.length > 0) {
          const { rowData } = sheets[0].data[0]
          // if there's no formattedValue on first line this is a blank entry
          if (rowData[0].values[2].formattedValue) {
            setResultsArray(rowData)
          } else {
            setResultsArray([])
          }
        }
      })
      .catch((err) => {
        setIsLoading(false)
        setResultsArray([])
        console.log('error', err)
      })
  }

  const initializeStore = () => {
    selectedSheet.value = sheetIds[0]?.url
  }

  initializeStore()

  return {
    isLoading,
    isCollapsed,
    resultsArray,
    selectedSheet,
    selectedMat,
    sortOrder,
    fetchResults,
    setIsLoading,
    setIsCollapsed,
    setSelectedMat,
    setSelectedSheet,
    setResultsArray,
    setSortOrder,
  }
})
