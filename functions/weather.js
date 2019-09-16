import axios from '~/plugins/axios'

async function weatherByCity(cityID) {
  try {
    const response = await axios.get(
      `weather?id=${cityID}&appid=${process.env.APP_ID}&units=metric`
    )

    const data = { ...response.data }
    data.updatedAt = new Date()

    return {
      ...response,
      data
    }
  } catch (e) {
    return e
  }
}

export { weatherByCity }
