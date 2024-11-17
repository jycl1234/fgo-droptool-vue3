<script setup>
import SheetSelector from '@/components/SheetSelector.vue'
import { useStore } from '@/stores/store'
import { storeToRefs } from 'pinia'

const { selectedSheet } = storeToRefs(useStore())
</script>

<template>
  <main>
    <div class="main" data-testid="main">
      <SheetSelector />
    </div>
    <p>{{ selectedSheet }}</p>
  </main>
</template>
