import { emptyRow } from '@/static/constants'
import { mats } from '@/static/mats'

const matsGold = mats.filter((mat) => mat.type === 'mat' && mat.rarity === 'gold')
const matsSilver = mats.filter((mat) => mat.type === 'mat' && mat.rarity === 'silver')
const matsBronze = mats.filter((mat) => mat.type === 'mat' && mat.rarity === 'bronze')
const piecesSilver = mats.filter((mat) => mat.type === 'ascension' && mat.rarity === 'silver')
const piecesGold = mats.filter((mat) => mat.type === 'ascension' && mat.rarity === 'gold')
const gemsBronze = mats.filter((mat) => mat.type === 'skill' && mat.rarity === 'bronze')
const gemsSilver = mats.filter((mat) => mat.type === 'skill' && mat.rarity === 'silver')
const gemsGold = mats.filter((mat) => mat.type === 'skill' && mat.rarity === 'gold')

/*
convertToResultsRow()
param: {Object} rowData
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
param: {Object} mat
response: {String}

accepts a mat object from mats.js and returns a formatted url to be used
for MatBox's img src
*/

const getImgUrl = (mat) => {
  return `https://static.atlasacademy.io/JP/Items/${mat.filename}_bordered.png`
}

/* sortMats()
output: {Array}

accepts sorting/filtering options, and returns an array based on the options passed
*/

const sortMats = () => {
  const result = []
  result.push(...matsBronze)
  result.push(...matsSilver)
  result.push(...matsGold)
  result.push(...gemsBronze)
  result.push(...gemsSilver)
  result.push(...gemsGold)
  result.push(...piecesSilver)
  result.push(...piecesGold)
  return result
}

export { convertToResultsRow, getImgUrl, sortMats }
