import { ref } from 'vue'
import { defineStore } from 'pinia'
// import axios from 'axios'
import { sheetIds } from '@/static/sheets'
import { apiKey, baseUrl, spreadsheetId } from '@/static/constants'

export const useStore = defineStore('store', () => {
  const selectedSheet = ref('')
  const selectedMat = ref('')
  const sortOrder = ref('')
  const resultsArray = ref([])

  const setSelectedMat = (mat) => {
    selectedMat.value = mat
  }

  const setResultsArray = (results) => {
    resultsArray.value = results
  }

  const setSortOrder = (order) => {
    sortOrder.value = order
  }

  const fetchResults = () => {
    const url = `${baseUrl}${spreadsheetId}?ranges=${this.sheetUrl}!${this.matRanges}&fields=sheets&key=${apiKey}`
    console.log('fetchResults', url)

    // axios
    // .get(url)
    // .then(res => {
    //   this.isLoading = false;
    //   const { rowData } = res.data.sheets[0].data[0]; // lol
    //   if (rowData) {
    //     // if there's no formattedValue on first line this is a blank entry
    //     if (rowData[0].values[2].formattedValue) {
    //       this.results = rowData;
    //     } else {
    //       this.results = [];
    //     }
    //   }
    // })
    // .catch(err => {
    //   this.isLoading = false;
    //   this.errorMsg = "Error loading data.";
    //   console.log(err);
    // });
  }

  const initializeStore = () => {
    selectedSheet.value = sheetIds[0]?.url
  }

  initializeStore()

  return {
    fetchResults,
    resultsArray,
    selectedSheet,
    selectedMat,
    setSelectedMat,
    setResultsArray,
    setSortOrder,
    sortOrder,
  }
})
