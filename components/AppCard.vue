<template>
  <section class="card">
    <header class="card--header">
      <slot name="header" />
    </header>
    <div class="card--body">
      <slot />
    </div>
    <footer class="card--footer">
      <slot name="footer" />
    </footer>
  </section>
</template>

<style lang="scss" scoped>
.card {
  background-color: white;
  box-shadow: 1px 2px 4px 0px rgba(#333333, 0.1);
  border-radius: 5px;
  text-align: center;

  &--header {
    padding: 0.75rem 0;
    border-bottom: 1px solid #ebebeb;
    color: #737c84;
  }

  &--body {
    padding: 1.2rem 0;
  }

  &--footer {
    background-color: rgba(#f1f1f1, 0.5);
    padding: 1rem 0;
  }
}
</style>
