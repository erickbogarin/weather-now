<template>
  <div>
    <app-top-bar />
    <nuxt />
  </div>
</template>

<script>
import AppTopBar from '~/components/AppTopBar'

export default {
  components: {
    AppTopBar
  }
}
</script>

<style>
:root {
  --appBackground: #f1f1f1;
  --orange: #ff9632;
  --red: #ed1946;
  --blue: #69a3ff;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: var(--appBackground);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
