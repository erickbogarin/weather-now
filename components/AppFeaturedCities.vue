<template>
  <div>
    <app-current-weather :city-id="nuuk" />
    <app-current-weather :city-id="urubici" />
    <app-current-weather :city-id="nairobi" />
  </div>
</template>

<script>
import AppCurrentWeather from '~/components/AppCurrentWeather'

export default {
  components: {
    AppCurrentWeather
  },
  data() {
    return {
      nuuk: 3421319,
      urubici: 3445709,
      nairobi: 184745
    }
  }
}
</script>
