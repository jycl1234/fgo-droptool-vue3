<script setup>
import { useStore } from '@/stores/store'

const { setCurrentMat } = useStore()

const handleClick = (mat) => {
  setCurrentMat(mat.name)
}

const getUrl = (mat) => {
  return `https://static.atlasacademy.io/JP/Items/${mat.filename}_bordered.png`
}

defineProps({
  mat: Object,
})
</script>

<template>
  <div class="wrapper--mat-box" data-testid="wrapper--mat-box" @click="handleClick(mat)">
    <img class="image--mat" data-testid="image--mat" :src="getUrl(mat)" />
  </div>
</template>

<style scoped lang="scss">
.wrapper--mat-box {
  display: flex;

  .image--mat {
    width: 3.5rem;
    margin: 0.05rem;
    border: 2px solid transparent;
    cursor: pointer;

    &.selected {
      border: 2px solid red;
    }
  }
}
</style>
