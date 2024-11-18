<script setup>
import { useStore } from '@/stores/store'
import { storeToRefs } from 'pinia'

const { selectedMat } = storeToRefs(useStore())

defineProps({
  results: Array,
})
</script>

<template>
  <div class="wrapper--results-display" data-testid="wrapper--results-display">
    <div>Selected Mat: {{ selectedMat }}</div>
  </div>
</template>
