<template>
  <div class="weather">
    <app-card v-if="isLoading">
      <app-loader />
    </app-card>

    <app-card v-else-if="error">
      <div class="weather-error">
        <app-error-message class="weather-error__message">
          Something went wrong
        </app-error-message>

        <app-button class="weather-error__button" @click.native="loadCity"
          >Try Again</app-button
        >
      </div>
    </app-card>

    <app-card v-if="!isLoading && city">
      <template v-slot:header>
        <h3 class="weather__title">{{ city.name }}, {{ city.sys.country }}</h3>
      </template>

      <span
        :class="[
          'weather__temp',
          `weather__temp--${condition(city.main.temp)}`
        ]"
        >{{ city.main.temp | roundDown }}</span
      >

      <template v-slot:footer>
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
        <span class="weather__time"
          >Updated at {{ city.updatedAt | time('en-US') }}</span
        >
      </template>
    </app-card>
  </div>
</template>

<script>
import { interval } from 'rxjs'

import { REFRESH_TIME_MILLIS } from '~/constants'
import { weatherByCity } from '~/functions/weather'
import AppCard from '~/components/ui/AppCard'
import AppErrorMessage from '~/components/ui/AppErrorMessage'
import AppButton from '~/components/ui/AppButton'
import AppLoader from '~/components/ui/AppLoader'
import { weatherConditionMixin } from '~/mixins/weatherConditionMixin'

export default {
  components: {
    AppCard,
    AppErrorMessage,
    AppButton,
    AppLoader
  },
  mixins: [weatherConditionMixin],
  props: {
    cityId: {
      type: Number,
      required: true
    },
    featured: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isLoading: false,
      error: false,
      city: null
    }
  },
  mounted() {
    this.loadCity()

    this.$subscribeTo(interval(REFRESH_TIME_MILLIS), (count) => {
      this.loadCity()
    })
  },
  methods: {
    async loadCity() {
      this.isLoading = true
      try {
        const { data } = await weatherByCity(this.$props.cityId)
        this.city = data
      } catch (e) {
        this.error = true
      }
      this.isLoading = false
    }
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

  &__temp--hot {
    color: var(--red);
  }

  &__temp--chilly {
    color: var(--orange);
  }

  &__temp--cold {
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

.weather-error {
  padding: 30px 0;
  &__message {
    margin-bottom: 1rem;
  }
}
</style>
