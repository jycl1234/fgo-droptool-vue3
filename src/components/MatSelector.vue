<script setup>
import { useStore } from '@/stores/store'
import { storeToRefs } from 'pinia'
import { MODE_OPEN, MODE_COLLAPSED } from '@/static/constants'
import MatBox from './MatBox.vue'

const { isCollapsed, matsArray, selectedMat } = storeToRefs(useStore())
</script>

<template>
  <div v-if="!isCollapsed" class="wrapper--mat-selector" data-testid="wrapper--mat-selector">
    <MatBox
      class="matbox"
      data-testid="matbox"
      v-for="mat in matsArray"
      :mat="mat"
      :mode="MODE_OPEN"
      :key="mat.filename"
    />
  </div>
  <div v-else class="wrapper--mat-selector-collapsed" data-testid="wrapper--mat-selector-collapsed">
    <MatBox
      class="matbox"
      data-testid="matbox"
      :mat="selectedMat"
      :mode="MODE_COLLAPSED"
      :key="selectedMat.filename"
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
