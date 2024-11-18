<script setup>
import { useStore } from '@/stores/store'
import { storeToRefs } from 'pinia'

const { resultsArray } = storeToRefs(useStore())
</script>

<template>
  <div class="wrapper--results-display" data-testid="wrapper--results-display">
    <div>Results: {{ resultsArray }}</div>
  </div>
</template>
