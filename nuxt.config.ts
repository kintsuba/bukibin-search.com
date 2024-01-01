// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  colorMode: {
    preference: "light",
  },
  modules: ["@nuxt/ui", "@vite-pwa/nuxt"],
  pwa: {
    registerType: "autoUpdate",
    includeAssets: ["favicon.ico"],
    client: {
      installPrompt: true,
    },
    manifest: {
      name: "武器瓶のセリフから第何回か検索するやつ",
      description:
        "不器用ビンボーダンス（武器瓶）のセリフが第何回のセリフかを検索できる非公式のファンサイトです。",
      theme_color: "#ffffff",
      lang: "ja",
      short_name: "武器瓶セリフ検索",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      icons: [
        {
          src: "mstile-70x70.png",
          sizes: "70x70",
          type: "image/png",
        },
        {
          src: "mstile-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "mstile-150x150.png",
          sizes: "150x150",
          type: "image/png",
        },
        {
          src: "apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
        {
          src: "android-chrome-192x192",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "mstile-310x150.png",
          sizes: "310x150",
          type: "image/png",
        },
        {
          src: "mstile-310x310.png",
          sizes: "310x310",
          type: "image/png",
        },
        {
          src: "android-chrome-512x512",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: null,
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
});
