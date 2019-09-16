import localforage from 'localforage'
import memoryDriver from 'localforage-memoryStorageDriver'
import { setup } from 'axios-cache-adapter'

import { REFRESH_TIME_MILLIS } from '~/constants'

async function configure() {
  // Register the custom `memoryDriver` to `localforage`
  await localforage.defineDriver(memoryDriver)

  const forageStore = localforage.createInstance({
    driver: [
      localforage.INDEXEDDB,
      localforage.LOCALSTORAGE,
      memoryDriver._driver
    ],
    name: 'app-cache'
  })

  return setup({
    baseURL: process.env.BASE_URL,

    cache: {
      maxAge: REFRESH_TIME_MILLIS,
      store: forageStore,
      exclude: {
        query: false
      }
    }
  })
}

export default configure
