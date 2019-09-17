<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  background: transparent;
  border: 2px solid var(--darkGray);
  color: var(--darkGray);
  border-radius: 20px;
  padding: 12px 20px;
}
.button:focus {
  outline: 0;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
}
</style>
