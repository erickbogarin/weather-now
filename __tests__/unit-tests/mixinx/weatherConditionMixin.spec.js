import { shallowMount } from '@vue/test-utils'

import { weatherConditionMixin, WEATHER } from '~/mixins/weatherConditionMixin'

const Component = {
  render() {},
  mixins: [weatherConditionMixin]
}

describe('weatherConditionMixin', () => {
  describe('when is cold', () => {
    test('should be cold when is less than 5', () => {
      const wrapper = shallowMount(Component)
      const temperature = 3

      const wheater = wrapper.vm.condition(temperature)

      expect(wheater).toBe(WEATHER.COLD)
    })

    test('should be cold when is equal to 5', () => {
      const wrapper = shallowMount(Component)
      const temperature = 5

      const wheater = wrapper.vm.condition(temperature)

      expect(wheater).toBe(WEATHER.COLD)
    })

    test(`should not be cold when is more than 5`, () => {
      const wrapper = shallowMount(Component)
      const temperature = 6

      const wheater = wrapper.vm.condition(temperature)

      expect(wheater).not.toBe(WEATHER.COLD)
    })
  })

  describe('when is chilly', () => {
    test('should be chilly when is more than 5 and less than 25', () => {
      const wrapper = shallowMount(Component)

      let temperature = 6
      let wheater = wrapper.vm.condition(temperature)
      expect(wheater).toBe(WEATHER.CHILLY)

      temperature = 24
      wheater = wrapper.vm.condition(temperature)
      expect(wheater).toBe(WEATHER.CHILLY)
    })

    test('should not be chilly when is less than 6 or more than 24', () => {
      const wrapper = shallowMount(Component)

      let temperature = 5
      let wheater = wrapper.vm.condition(temperature)
      expect(wheater).not.toBe(WEATHER.CHILLY)

      temperature = 25
      wheater = wrapper.vm.condition(temperature)
      expect(wheater).not.toBe(WEATHER.CHILLY)
    })
  })

  describe('when is hot', () => {
    test('should be hot when is more or equal to 25', () => {
      const wrapper = shallowMount(Component)

      const temperature = 25

      const wheater = wrapper.vm.condition(temperature)
      expect(wheater).toBe(WEATHER.HOT)
    })

    test('should not be hot when is less than 25 ', () => {
      const wrapper = shallowMount(Component)

      const temperature = 24

      const wheater = wrapper.vm.condition(temperature)
      expect(wheater).not.toBe(WEATHER.HOT)
    })
  })
})
