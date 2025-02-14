import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  modules: [
    "@nuxt/icon",
    "@nuxt/fonts",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/color-mode",
    "dayjs-nuxt",
  ],
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: false },
  devServer: {
    host: "127.0.0.1",
    port: 3000,
  },
  dayjs: {
    locales: ["ru", "en"],
    plugins: ["utc", "timezone"],
    defaultLocale: "ru",
    defaultTimezone: "Asia/Yekaterinburg",
  },
  runtimeConfig: {
    API_KEY: import.meta.env.API_KEY,
    public: {
      API_URL: import.meta.env.API_URL,
    },
  },
  nitro: {
    preset: "node_server",
    devProxy: {
      "/api/v1": {
        target: import.meta.env.API_URL, // Адрес API
        changeOrigin: true,
        headers: {
          host: "127.0.0.1",
          "X-Api-Key": import.meta.env.API_KEY,
        },
      },
    },
    routeRules: {
      "/api/v1/**": { cors: true },
    },
  },
  css: ["~/assets/css/main.css"],
  fonts: {
    experimental: {
      processCSSVariables: true,
    },
    devtools: false,
    defaults: {
      weights: [400],
      styles: ["normal"],
      subsets: ["cyrillic", "latin"],
    },
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false,
    },
  },
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "dark", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storage: "localStorage", // or 'sessionStorage' or 'cookie'
    storageKey: "nuxt-color-mode",
  },
});
