// nuxt.config.ts
import tailwindcss from "@tailwindcss/vite";

import "./app/lib/env";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/app.css"],
  colorMode: {
    dataValue: "theme",
  },
});
