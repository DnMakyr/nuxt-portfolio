// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'app/',
  // future: {
  //   compatibilityVersion: 4,
  // },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: {
    sources:{
      content:{
        driver: "fs",
        base: resolve(__dirname, 'app/content')
      }
    }
  }
})