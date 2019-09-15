<template>
  <app-card v-if="city">
    <template v-slot:card-header>
      <h3>{{ city.name }}, {{ city.sys.country }}</h3>
    </template>
    <span :class="['weather__temp', `weather__temp--${tempCondition}`]">{{
      Math.floor(city.main.temp)
    }}</span>
    <template v-slot:card-footer>
      <span class="weather__time">asd</span>
    </template>
  </app-card>
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
  &__temp {
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
  }

  &__time {
    color: #b4b4b4;
    font-size: 0.8rem;
  }
}
</style>
