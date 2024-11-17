<script setup>
import { sheetIds } from '@/static/sheets'
import { useStore } from '@/stores/store'
import { storeToRefs } from 'pinia'

const { selectedSheet } = storeToRefs(useStore())
</script>

<template>
  <div>
    <select v-model="selectedSheet">
      <option v-for="sheet in sheetIds" :key="sheet.id" :value="sheet.url">
        {{ sheet.title }}
      </option>
    </select>
  </div>
</template>
