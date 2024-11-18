<template>
  <div class="changelog" data-testid="changelog">
    <h2>Changelog</h2>
    <div class="item" data-testid="item">
      <h3>Day 1 (11/16/2024)</h3>
      <ul>
        <li>update node, npm</li>
        <li>setting up project via create vue@latest</li>
        <li>scaffolding with basic project structure, porting over static assets and code</li>
        <li>started sheet selector dropdown with state mgmt</li>
        <li>decisions:</li>
        <ul>
          <li>
            added all things that would be used day to day: linter, unit testing, state mgmt, router
          </li>
          <li>no jsx because unsure if needed and it was default</li>
          <li>no ts because of learning overhead; can revisit</li>
          <li>installed sass-embedded for scss support but didn't bring in bootstrap</li>
          <li>merge to main instead of feat branches</li>
        </ul>
      </ul>
    </div>
    <div class="item" data-testid="item">
      <h3>Day 2 (11/17/2024)</h3>
      <ul>
        <li>read up on vue and pinia docs, added two-way v-model binding</li>
        <li>read up on vue testing utils and added basic unit testing</li>
        <li>added matselector parent component w/matboxes to homeview</li>
        <li>updated mats.js to latest from sheet</li>
        <li>decisions:</li>
        <ul>
          <li>did not go with TDD as i find it slows down early greenfielding</li>
          <li>decided not to look into browser mode for vitest due to config complications</li>
          <li>found updated method for generating mats.js, but kept it at manual update for now</li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
h3 {
  margin-bottom: 0.8rem;
}

.item {
  margin-bottom: 1rem;

  ul {
    margin-left: 1rem;
  }
}
</style>
