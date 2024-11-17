<script>
import { sheetIds } from '@/static/sheets'

export default {
  data() {
    return {
      sheetIds: sheetIds,
    }
  },
}
</script>

<template>
  <div>
    <select>
      <option v-for="sheet in sheetIds" v-bind:key="sheet.id" v-bind:value="sheet.url">
        {{ sheet.title }}
      </option>
    </select>
  </div>
</template>
