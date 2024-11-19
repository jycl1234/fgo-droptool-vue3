<script setup>
import { useStore } from '@/stores/store'
import { getImgUrl } from '@/static/utils'
import { MODE_OPEN } from '@/static/constants'

const { clearResults, fetchResults, setSelectedMat } = useStore()

const handleOpen = (mat) => {
  setSelectedMat(mat)
  fetchResults()
}

const handleCollapsed = () => {
  clearResults()
}

defineProps({
  mat: Object,
  mode: String,
})
</script>

<template>
  <div
    v-if="mode == MODE_OPEN"
    class="wrapper--mat-box"
    data-testid="wrapper--mat-box"
    @click="handleOpen(mat)"
  >
    <img class="image--mat" data-testid="image--mat" :src="getImgUrl(mat)" />
  </div>
  <div
    v-else
    class="wrapper--mat-box-collapsed"
    data-testid="wrapper--mat-box-collapsed"
    @click="handleCollapsed()"
  >
    <img class="image--mat" data-testid="image--mat" :src="getImgUrl(mat)" />
  </div>
</template>

<style scoped lang="scss">
.wrapper--mat-box,
.wrapper--mat-box-collapsed {
  display: flex;

  .image--mat {
    width: 3.5rem;
    margin: 0.05rem;
    border: 2px solid transparent;
    cursor: pointer;
  }
}
</style>
