<template>
  <div>
    <app-current-weather
      :name="city.name"
      :country="city.sys.country"
      :temp="city.main.temp"
      :pressure="city.main.pressure"
      :humidity="city.main.humidity"
      updated-at="asds"
    />
  </div>
</template>

<script>
import AppCurrentWeather from '~/components/AppCurrentWeather'

export default {
  components: {
    AppCurrentWeather
  },
  computed: {
    city() {
      return this.$store.getters.city
    }
  }
}
</script>
