<script setup>
import { useStore } from '@/stores/store'
import { storeToRefs } from 'pinia'
import { RARITY_BRONZE, RARITY_GOLD, RARITY_SILVER, SORT_ASC, SORT_DESC } from '@/static/constants'
import { sortMats } from '@/static/utils'

const { matsArray, rarityArray, sortOrder } = storeToRefs(useStore())

const handleFilters = () => {
  matsArray.value = sortMats({ order: sortOrder.value, rarities: rarityArray.value })
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
      @change="handleFilters"
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
      @change="handleFilters"
    />
    <label class="label--sort-order" data-testid="label--sort-order" :for="SORT_DESC"
      >Descending</label
    >
    <input
      v-model="rarityArray"
      type="checkbox"
      class="checkbox--rarity gold"
      data-testid="checkbox--rarity"
      :value="RARITY_GOLD"
      @change="handleFilters"
    />
    <label class="label--rarity" data-testid="label--rarity">{{ RARITY_GOLD }}</label>
    <input
      v-model="rarityArray"
      type="checkbox"
      class="checkbox--rarity silver"
      data-testid="checkbox--rarity"
      :value="RARITY_SILVER"
      @change="handleFilters"
    />
    <label class="label--rarity" data-testid="label--rarity">{{ RARITY_SILVER }}</label>
    <input
      v-model="rarityArray"
      type="checkbox"
      class="checkbox--rarity bronze"
      data-testid="checkbox--rarity"
      :value="RARITY_BRONZE"
      @change="handleFilters"
    />
    <label class="label--rarity" data-testid="label--rarity">{{ RARITY_BRONZE }}</label>
  </div>
</template>

<style scoped lang="scss">
.wrapper--filter-selector {
  margin-left: 1rem;

  .selector--sort-order,
  .checkbox--rarity {
    margin-right: 0.3rem;
  }

  .label--sort-order,
  .label--rarity {
    margin-right: 0.8rem;
  }
}
</style>
