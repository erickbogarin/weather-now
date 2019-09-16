import { REFRESH_TIME_MILLIS } from './constants'

export default {
  mode: 'spa',
  generate: {
    fallback: true
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon_32x32.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [{ src: '~/assets/main.scss', lang: 'sass' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-rxjs.js', '~/plugins/filters.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    BASE_URL: 'https://api.openweathermap.org/data/2.5',
    APP_ID: '62035083139661fa98de9796eebda31d'
  },
  pwa: {
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://api.openweathermap.org/data/2.5/.*',
          handler: 'staleWhileRevalidate',
          strategyOptions: {
            cacheName: 'openweather-cache',
            cacheExpiration: {
              maxEntries: 10,
              maxAgeSeconds: REFRESH_TIME_MILLIS
            }
          }
        }
      ]
    }
  }
}
