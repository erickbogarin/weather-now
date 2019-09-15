<template>
  <div>
    <app-card>
      <template v-slot:card-header>
        <h3>{{ name }}, {{ country }}</h3>
      </template>
      <span :class="['weather__temp', `weather__temp--${tempCondition}`]">
        {{ Math.floor(temp) }}
      </span>
      <template v-slot:card-footer>
        <span class="weather__time">{{ updatedAt }}</span>
      </template>
    </app-card>
  </div>
</template>

<script>
import AppCard from '~/components/AppCard'

export default {
  components: {
    AppCard
  },
  props: {
    name: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    temp: {
      required: true,
      type: Number
    },
    pressure: {
      type: Number,
      default: 0
    },
    humidity: {
      type: Number,
      default: 0
    },
    updatedAt: {
      required: true,
      type: String
    }
  },
  data: () => {
    return {
      tempCondition: 'blue'
    }
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
