import {
  emptyRow,
  RARITY_BRONZE,
  RARITY_GOLD,
  RARITY_SILVER,
  SORT_ASC,
  SORT_DESC,
  TYPE_ASCENSION,
  TYPE_MAT,
  TYPE_SKILL,
} from '@/static/constants'
import { mats } from '@/static/mats'

const matsGold = mats.filter((mat) => mat.type === TYPE_MAT && mat.rarity === RARITY_GOLD)
const matsSilver = mats.filter((mat) => mat.type === TYPE_MAT && mat.rarity === RARITY_SILVER)
const matsBronze = mats.filter((mat) => mat.type === TYPE_MAT && mat.rarity === RARITY_BRONZE)
const piecesSilver = mats.filter(
  (mat) => mat.type === TYPE_ASCENSION && mat.rarity === RARITY_SILVER,
)
const piecesGold = mats.filter((mat) => mat.type === TYPE_ASCENSION && mat.rarity === RARITY_GOLD)
const gemsBronze = mats.filter((mat) => mat.type === TYPE_SKILL && mat.rarity === RARITY_BRONZE)
const gemsSilver = mats.filter((mat) => mat.type === TYPE_SKILL && mat.rarity === RARITY_SILVER)
const gemsGold = mats.filter((mat) => mat.type === TYPE_SKILL && mat.rarity === RARITY_GOLD)

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
NOTE: not an alphabetical sort. this only sorts the entire mats array by rarity order,
and will not reorder mats inside of its rarity tier
*/

const sortMats = (options) => {
  const result = []
  let { order, rarities } = options ?? {}

  // defaults to prevent breaking logic
  if (!rarities) {
    rarities = [RARITY_GOLD, RARITY_SILVER, RARITY_BRONZE]
  }

  if (!order) {
    order = SORT_ASC
  }

  if (order == SORT_ASC) {
    if (rarities.includes(RARITY_BRONZE)) {
      result.push(...matsBronze)
      result.push(...gemsBronze)
    }

    if (rarities.includes(RARITY_SILVER)) {
      result.push(...matsSilver)
      result.push(...gemsSilver)
      result.push(...piecesSilver)
    }

    if (rarities.includes(RARITY_GOLD)) {
      result.push(...matsGold)
      result.push(...gemsGold)
      result.push(...piecesGold)
    }
  }

  if (order == SORT_DESC) {
    if (rarities.includes(RARITY_GOLD)) {
      result.push(...matsGold)
      result.push(...gemsGold)
      result.push(...piecesGold)
    }

    if (rarities.includes(RARITY_SILVER)) {
      result.push(...matsSilver)
      result.push(...gemsSilver)
      result.push(...piecesSilver)
    }

    if (rarities.includes(RARITY_BRONZE)) {
      result.push(...matsBronze)
      result.push(...gemsBronze)
    }
  }

  return result
}

export { convertToResultsRow, getImgUrl, sortMats }
