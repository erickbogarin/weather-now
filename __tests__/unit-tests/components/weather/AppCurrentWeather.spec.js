import { shallowMount, mount } from '@vue/test-utils'

import AppCurrentWeather from '~/components/weather/AppCurrentWeather'
import AppLoader from '~/components/ui/AppLoader'
import AppErrorMessage from '~/components/ui/AppErrorMessage'

const options = {
  props: {
    cityId: 1
  },
  mocks: {
    mounted: jest.fn(),
    $subscribeTo: jest.fn()
  },
  methods: {
    loadCity: jest.fn()
  }
}

describe('AppCurrentWeather', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(AppCurrentWeather, options)

    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('should show a spinner when the data is loading', () => {
    const wrapper = mount(AppCurrentWeather, {
      ...options,
      data() {
        return {
          isLoading: true
        }
      }
    })

    expect(wrapper.contains(AppLoader)).toBe(true)
  })

  test('should handle errors', () => {
    const wrapper = mount(AppCurrentWeather, {
      ...options,
      data() {
        return {
          error: true
        }
      }
    })

    expect(wrapper.contains(AppErrorMessage)).toBe(true)
  })
})
