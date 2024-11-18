<script setup>
import { mats } from '@/static/mats'
import MatBox from './MatBox.vue'

const filteredMats = mats
</script>

<template>
  <div class="wrapper--mat-selector" data-testid="wrapper--mat-selector">
    <MatBox
      class="matbox"
      data-testid="matbox"
      v-for="mat in filteredMats"
      :mat="mat"
      :key="mat.filename"
    />
  </div>
</template>

<style scoped lang="scss">
.wrapper--mat-selector {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>
