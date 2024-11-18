<script setup>
import { useStore } from '@/stores/store'
import { storeToRefs } from 'pinia'

const { isLoading, resultsArray } = storeToRefs(useStore())
</script>

<template>
  <div class="wrapper--results-display" data-testid="wrapper--results-display">
    <!-- selectedMat toggle to uncollapse -->
    <div
      v-if="resultsArray.length > 0"
      class="wrapper--results-rows"
      data-testid="wrapper--results-rows"
    >
      <!-- resultsRow component with v-for -->
      {{ resultsArray }}
    </div>
    <div v-else class="wrapper--results-empty" data-testid="wrapper--results-empty">
      <span v-if="isLoading">loading...</span>
      <span v-else>No results</span>
    </div>
  </div>
</template>
