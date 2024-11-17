<template>
  <header>
    <h1>FGO Droptool for Vue 3</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/changelog">Changelog</RouterLink>
    </nav>
  </header>

  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
nav {
  display: grid;
  grid-auto-flow: column;
  margin-bottom: 1rem;

  a {
    text-align: center;
  }
}
</style>
