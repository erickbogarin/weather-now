import axios from '~/plugins/axios'

async function weatherByCity(cityID) {
  const response = await axios.get(
    `weather?id=${cityID}&appid=${process.env.APP_ID}&units=metric`
  )
  return response
}

export { weatherByCity }
