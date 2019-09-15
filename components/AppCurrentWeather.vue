<template>
  <div class="weather">
    <app-card v-if="city">
      <template v-slot:card-header>
        <h3 class="weather__title">{{ city.name }}, {{ city.sys.country }}</h3>
      </template>
      <span :class="['weather__temp', `weather__temp--${tempCondition}`]">{{
        Math.floor(city.main.temp)
      }}</span>
      <template v-slot:card-footer>
        <div v-if="featured">
          <div class="weather-featured">
            <div class="weather-featured__info">
              <h5 class="weather-featured__title">Humidity</h5>
              <span class="weather-featured__description">{{
                city.main.humidity
              }}</span>
              <span class="weather-featured__type">%</span>
            </div>
            <div class="weather-featured__info">
              <h5 class="weather-featured__title">Pressure</h5>
              <span class="weather-featured__description">{{
                city.main.pressure
              }}</span>
              <span class="weather-featured__type">hPa</span>
            </div>
          </div>
        </div>
        <span class="weather__time">Updated at 12:33:44 PM</span>
      </template>
    </app-card>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import AppCard from '~/components/AppCard'

export default {
  components: {
    AppCard
  },
  props: {
    cityId: {
      type: Number,
      required: true
    },
    featured: {
      type: Boolean,
      required: true
    }
  },
  data: () => {
    return {
      tempCondition: 'blue',
      city: null
    }
  },
  async mounted() {
    /* eslint-disable-next-line */
    const { data } = await axios.get(
      `weather?id=${this.cityId}&appid=${process.env.APP_ID}&units=metric`
    )
    this.city = data
  }
}
</script>

<style lang="scss" scoped>
.weather {
  margin: 0 auto;
  margin-top: 30px;
  width: 90%;

  @media (min-width: 520px) {
    width: 80%;
  }

  @media (min-width: 600px) {
    width: 250px;
  }

  &__title {
    font-weight: 500;
  }

  &__temp {
    position: relative;
    font-size: 6.5rem;
  }

  &__temp--red {
    color: var(--red);
  }

  &__temp--orange {
    color: var(--orange);
  }

  &__temp--blue {
    color: var(--blue);
  }

  &__temp:after {
    content: '°';
    position: absolute;
    font-size: 3rem;
    top: 15px;
  }

  &__time {
    color: #b4b4b4;
    font-size: 0.8rem;
  }
}

.weather-featured {
  display: flex;
  justify-content: space-around;

  &__info {
    font-size: 0;
    padding: 5px 0;
  }

  &__title {
    text-transform: uppercase;
    color: #b4b4b4;
    font-weight: 500;
    font-size: 0.8rem;
    margin-bottom: 3px;
  }

  &__description,
  &__type {
    color: #737c84;
  }

  &__description {
    font-size: 1rem;
  }

  &__type {
    font-size: 0.8rem;
  }
}
</style>
