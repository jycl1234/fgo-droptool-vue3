import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { sheetIds } from '@/static/sheets'
import { API_KEY, BASE_URL, SPREADSHEET_ID } from '@/static/constants'

export const useStore = defineStore('store', () => {
  const selectedSheet = ref('')
  const selectedMat = ref({})
  const sortOrder = ref('')
  const resultsArray = ref([])
  const isLoading = ref(false)

  const setSelectedSheet = (sheet) => {
    selectedSheet.value = sheet
  }

  const setSelectedMat = (mat) => {
    selectedMat.value = mat
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

  const fetchResults = async () => {
    setIsLoading(true)
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
    fetchResults,
    isLoading,
    resultsArray,
    selectedSheet,
    selectedMat,
    sortOrder,
    setIsLoading,
    setSelectedMat,
    setSelectedSheet,
    setResultsArray,
    setSortOrder,
  }
})
