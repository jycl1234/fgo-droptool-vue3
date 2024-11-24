<script setup>
import SheetSelector from '@/components/SheetSelector.vue'
import FilterSelector from '@/components/FilterSelector.vue'
import MatSelector from '@/components/MatSelector.vue'
import ResultsDisplay from '@/components/ResultsDisplay.vue'
</script>

<template>
  <main>
    <div class="main" data-testid="main">
      <div class="wrapper--selectors">
        <SheetSelector />
        <FilterSelector />
      </div>
      <MatSelector />
      <ResultsDisplay />
    </div>
  </main>
</template>

<style scoped lang="scss">
.wrapper--selectors {
  display: flex;
  flex-direction: row;
}
</style>
