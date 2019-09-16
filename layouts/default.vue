<template>
  <div>
    <app-top-bar />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import AppTopBar from '~/components/header/AppTopBar'

export default {
  components: {
    AppTopBar
  }
}
</script>
>
