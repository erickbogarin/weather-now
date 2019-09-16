<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  background: transparent;
  border: 2px solid #737c84;
  color: #737c84;
  border-radius: 20px;
  padding: 12px 20px;
}
.button:focus {
  outline: 0;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
}
</style>
