<template>
  <div class="changelog">
    <h2>Changelog</h2>
    <div class="item">
      <h3>Day 1</h3>
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
        </ul>
      </ul>
    </div>
    <div class="item">
      <h3>Day 2</h3>
      <ul>
        <li>read up on vue and pinia docs, added two-way v-model binding</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
h3 {
  margin-bottom: 0.8rem;
}

.item {
  ul {
    margin-left: 1rem;
  }
}
</style>
