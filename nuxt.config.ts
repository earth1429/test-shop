// https://nuxt.com/docs/api/configuration/nuxt-config
// Header & Meta tag Default
export default defineNuxtConfig({
  app: {
    head: {
      title: "MYShop",
      meta: [
        { name: "description", content: "Website Information" }
      ]
    }
  },
  css: [
    '~/styles/tailwind.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
 