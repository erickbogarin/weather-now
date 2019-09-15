import city from '~/static/city.json'

export const state = () => ({
  city
})

export const getters = {
  city: (state) => state.city
}
