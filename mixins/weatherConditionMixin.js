export const WEATHER = {
  COLD: 'cold',
  CHILLY: 'chilly',
  HOT: 'hot'
}

export const weatherConditionMixin = {
  methods: {
    condition(temperature) {
      if (temperature <= 5) {
        return WEATHER.COLD
      }
      if (temperature > 5 && temperature < 25) {
        return WEATHER.CHILLY
      }
      return WEATHER.HOT
    }
  }
}
