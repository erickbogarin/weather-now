<template>
  <header class="topBar">
    <img class="topBar--logo" src="~/assets/logo.svg" alt="Weather Now" />
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scope>
.topBar {
  position: fixed;
  top: 0;
  z-index: 5;
  margin: 0 auto;
  width: 100%;
  padding: 0.8rem 0;
  box-shadow: 0px 1px 1px 0px rgba(51, 51, 51, 0.1);
  background-color: #fff;

  &--logo {
    width: 100%;
    height: 30px;
  }
}
</style>
