<script setup>
import { sheetIds } from '@/static/sheets'
import { useStore } from '@/stores/store'
import { storeToRefs } from 'pinia'

const { selectedSheet } = storeToRefs(useStore())
</script>

<template>
  <div class="wrapper--sheet-selector" data-testid="wrapper--sheet-selector">
    <select v-model="selectedSheet" class="sheet-selector" data-testid="sheet-selector">
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
