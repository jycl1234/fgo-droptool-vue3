<template>
  <div class="changelog">
    <h2>Changelog</h2>
    <div class="item">
      <h3>Day 1</h3>
      <ul>
        <li>update node, npm</li>
        <li>setting up project via create vue@latest</li>
        <li>decisions:</li>
        <ul>
          <li>
            added all things that would be used day to day: linter, unit testing, state mgmt, router
          </li>
          <li>no jsx because unsure if needed and it was default</li>
          <li>no ts because of learning overhead; can revisit</li>
        </ul>
        <li>scaffolding with basic project structure, porting over static assets and code</li>
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
