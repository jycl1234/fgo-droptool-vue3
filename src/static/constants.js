const BASE_URL = 'https://sheets.googleapis.com/v4/spreadsheets/'
const SPREADSHEET_ID = '1_SlTjrVRTgHgfS7sRqx4CeJMqlz687HdSlYqiW-JvQA'
const MODE_OPEN = 'open'
const MODE_COLLAPSED = 'collapsed'
const SORT_ASC = 'asc'
const SORT_DESC = 'desc'
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

export { emptyRow, BASE_URL, MODE_OPEN, MODE_COLLAPSED, SORT_ASC, SORT_DESC, SPREADSHEET_ID }
