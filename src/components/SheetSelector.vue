<script setup>
import { sheetIds } from '@/static/sheets'
import { useStore } from '@/stores/store'
import { storeToRefs } from 'pinia'

const { selectedSheet } = storeToRefs(useStore())
const { fetchResults } = useStore()

const handleChange = () => {
  fetchResults()
}
</script>

<template>
  <div class="wrapper--sheet-selector" data-testid="wrapper--sheet-selector">
    <select
      v-model="selectedSheet"
      class="sheet-selector"
      data-testid="sheet-selector"
      @change="handleChange"
    >
      <option
        v-for="sheet in sheetIds"
        :key="sheet.id"
        :value="sheet.url"
        class="option"
        data-testid="option"
      >
        {{ sheet.title }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss">
.wrapper--sheet-selector {
  .sheet-selector {
    line-height: 1.4;
    font-family: 'Quicksand', Arial, sans-serif;
    font-size: 0.9rem;
    min-width: 180px;
    margin-bottom: 1rem;
  }
}
</style>
