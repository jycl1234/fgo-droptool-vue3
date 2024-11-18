<script setup>
import SheetSelector from '@/components/SheetSelector.vue'
import MatSelector from '@/components/MatSelector.vue'
import ResultsDisplay from '@/components/ResultsDisplay.vue'
</script>

<template>
  <main>
    <div class="main" data-testid="main">
      <SheetSelector />
      <MatSelector />
      <ResultsDisplay />
    </div>
  </main>
</template>
