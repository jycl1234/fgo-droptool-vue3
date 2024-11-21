<script setup>
import { useStore } from '@/stores/store'
import { storeToRefs } from 'pinia'
import { convertToResultsRow } from '@/static/utils'
import ResultsRow from '@/components/ResultsRow.vue'

const { isLoading, resultsArray } = storeToRefs(useStore())
</script>

<template>
  <div class="wrapper--results-display" data-testid="wrapper--results-display">
    <div
      v-if="resultsArray.length > 0"
      class="wrapper--results-rows"
      data-testid="wrapper--results-rows"
    >
      <div class="wrapper--results-row" data-testid="wrapper--results-row">
        <div class="column header area" data-testid="column">Area</div>
        <div class="column header quest" data-testid="column">Quest</div>
        <div class="column header ap" data-testid="column">AP</div>
        <div class="column header bp-per-ap" data-testid="column">BP/AP</div>
        <div class="column header ap-per-drop" data-testid="column">AP/Drop</div>
        <div class="column header drop-chance" data-testid="column">Drop Chance%</div>
        <div class="column header runs" data-testid="column"># of Runs</div>
      </div>
      <ResultsRow v-for="row in resultsArray" :row="convertToResultsRow(row)" :key="row[0]" />
    </div>
    <div v-else class="wrapper--results-empty" data-testid="wrapper--results-empty">
      <span v-if="isLoading">loading...</span>
      <span v-else>No results</span>
    </div>
  </div>
</template>

<style lang="scss">
// unscoped css here to let child rows inherit while letting styles also apply to header in parent
.wrapper--results-rows {
  display: grid;

  .wrapper--results-row {
    display: grid;
    grid-template-columns: 144px 244px 60px 60px 60px 100px 100px;
    font-size: 0.85rem;

    .header {
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .column {
      text-align: left;
    }
  }
}
</style>
