import configure from '~/plugins/axios'

async function weatherByCity(cityID) {
  const api = await configure()

  try {
    const response = await api.get(
      `weather?id=${cityID}&appid=${process.env.APP_ID}&units=metric`
    )

    const data = { ...response.data }

    data.updatedAt = Date.now()

    return {
      ...response,
      data
    }
  } catch (e) {
    return e
  }
}

export { weatherByCity }
