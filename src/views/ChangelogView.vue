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
          <li>did not bring in a style/component library to keep things focused</li>
          <li>decided not to look into browser mode for vitest due to config complications</li>
          <li>found updated method for generating mats.js, but kept it at manual update for now</li>
        </ul>
      </ul>
    </div>
    <div class="item" data-testid="item">
      <h3>Day 3 (11/18/2024)</h3>
      <ul>
        <li>implemented results section and display toggle in state</li>
        <li>brushed up on implementing axios client</li>
        <li>implemented working api call to sheets api for results</li>
        <li>implemented selector collapse, loading indicator, and raw results view</li>
        <li>fixed api key exposure</li>
        <li>decisions:</li>
        <ul>
          <li>hardcoding api key: doing it for speed, will offload to env vars long-term</li>
          <li>stubbing the fetchResults test in store</li>
        </ul>
      </ul>
    </div>
    <div class="item" data-testid="item">
      <h3>Day 4 (11/19/2024)</h3>
      <ul>
        <li>refactored getImgUrl for reuse</li>
        <li>added selected mat box component and improved collapse toggle logic</li>
        <li>went back and added fetchResults test in store</li>
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
