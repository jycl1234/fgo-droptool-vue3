<script setup>
import { useStore } from '@/stores/store'
import { storeToRefs } from 'pinia'
import { mats } from '@/static/mats'
import MatBox from './MatBox.vue'

const filteredMats = mats

const { isCollapsed } = storeToRefs(useStore())
</script>

<template>
  <div v-if="!isCollapsed" class="wrapper--mat-selector" data-testid="wrapper--mat-selector">
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
