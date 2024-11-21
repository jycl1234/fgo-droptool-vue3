<script setup>
defineProps({
  row: Object,
})
</script>

<template>
  <div class="wrapper--results-row" data-testid="wrapper--results-row">
    <div data-testid="column" class="column area">
      {{ row.area }}
    </div>
    <div data-testid="column" class="column quest">
      <a v-if="row.hyperlink" :href="row.hyperlink" target="_blank">{{ row.quest }}</a>
      <span v-else>{{ row.quest }}</span>
    </div>
    <div data-testid="column" class="column ap">
      {{ row.ap }}
    </div>
    <div data-testid="column" class="column bp-per-ap">
      {{ row.bpPerAp }}
    </div>
    <div data-testid="column" class="column ap-per-drop">
      {{ row.apPerDrop }}
    </div>
    <div data-testid="column" class="column drop-chance">{{ row.dropChance }}%</div>
    <div data-testid="column" class="column runs">
      {{ row.runs }}
    </div>
  </div>
</template>
