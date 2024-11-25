const BASE_URL = 'https://sheets.googleapis.com/v4/spreadsheets/'
const SPREADSHEET_ID = '1_SlTjrVRTgHgfS7sRqx4CeJMqlz687HdSlYqiW-JvQA'
const MODE_OPEN = 'open'
const MODE_COLLAPSED = 'collapsed'
const SORT_ASC = 'asc'
const SORT_DESC = 'desc'
const TYPE_MAT = 'mat'
const TYPE_ASCENSION = 'ascension'
const TYPE_SKILL = 'skill'
const RARITY_GOLD = 'gold'
const RARITY_SILVER = 'silver'
const RARITY_BRONZE = 'bronze'
const emptyRow = {
  area: '',
  quest: '',
  hyperlink: null,
  ap: '',
  bpPerAp: '',
  apPerDrop: '',
  dropChance: '',
  runs: '',
}

export {
  emptyRow,
  BASE_URL,
  MODE_OPEN,
  MODE_COLLAPSED,
  RARITY_BRONZE,
  RARITY_GOLD,
  RARITY_SILVER,
  SORT_ASC,
  SORT_DESC,
  SPREADSHEET_ID,
  TYPE_ASCENSION,
  TYPE_MAT,
  TYPE_SKILL,
}
