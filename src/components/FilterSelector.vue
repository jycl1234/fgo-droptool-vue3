<script setup>
import { useStore } from '@/stores/store'
import { storeToRefs } from 'pinia'
import { SORT_ASC, SORT_DESC } from '@/static/constants'
import { sortMats } from '@/static/utils'

const { matsArray, sortOrder } = storeToRefs(useStore())

const handleChange = () => {
  matsArray.value = sortMats({ order: sortOrder.value })
}
</script>

<template>
  <div class="wrapper--filter-selector" data-testid="wrapper--filter-selector">
    <input
      v-model="sortOrder"
      type="radio"
      class="selector--sort-order asc"
      data-testid="selector--sort-order"
      name="sort"
      :id="SORT_ASC"
      :value="SORT_ASC"
      @change="handleChange"
    />
    <label class="label--sort-order" data-testid="label--sort-order" :for="SORT_ASC"
      >Ascending</label
    >
    <input
      v-model="sortOrder"
      type="radio"
      class="selector--sort-order desc"
      data-testid="selector--sort-order"
      name="sort"
      :id="SORT_DESC"
      :value="SORT_DESC"
      @change="handleChange"
    />
    <label class="label--sort-order" data-testid="label--sort-order" :for="SORT_DESC"
      >Descending</label
    >
  </div>
</template>

<style scoped lang="scss">
.wrapper--filter-selector {
  margin-left: 1rem;

  .selector--sort-order {
    margin-right: 0.3rem;
  }

  .label--sort-order {
    margin-right: 0.8rem;
  }
}
</style>
