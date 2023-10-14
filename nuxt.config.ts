// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  colorMode: {
    preference: "light",
  },
  modules: ["@nuxt/ui"],
});
