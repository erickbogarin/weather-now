<template>
  <div class="wrapper">
    <div class="featured-cities">
      <app-current-weather :city-id="nuuk" />
      <app-current-weather :featured="true" :city-id="urubici" />
      <app-current-weather :city-id="nairobi" />
    </div>
  </div>
</template>

<script>
import AppCurrentWeather from './AppCurrentWeather'

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

<style lang="scss" scoped>
@media (min-width: 900px) {
  .wrapper {
    display: flex;
    align-items: flex-end;
    min-height: calc(100vh - 170px);
  }
}
.featured-cities {
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    width: 100%;
  }
}
</style>
