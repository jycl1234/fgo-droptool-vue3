import { emptyRow } from '@/static/constants'

/*
convertToResultsRow()
input: {Object}
response: {Object}

accepts an unformatted response from Google Sheets API and converts into a flat
row object for ResultsRow
*/

const convertToResultsRow = (rowData) => {
  if (rowData.values?.length > 0) {
    return {
      area: rowData.values[2].formattedValue,
      quest: rowData.values[3].formattedValue,
      hyperlink: rowData.values[3].hyperlink ? rowData.values[3].hyperlink : null,
      ap: rowData.values[4].formattedValue,
      bpPerAp: rowData.values[5].formattedValue,
      apPerDrop: rowData.values[6].formattedValue,
      dropChance: rowData.values[8].formattedValue,
      runs: rowData.values[10].formattedValue,
    }
  }

  return emptyRow
}

/* getImgUrl()
input: {Object}
response: {String}

accepts a mat object from mats.js and returns a formatted url to be used
for MatBox's img src
*/

const getImgUrl = (mat) => {
  return `https://static.atlasacademy.io/JP/Items/${mat.filename}_bordered.png`
}

export { convertToResultsRow, getImgUrl }
