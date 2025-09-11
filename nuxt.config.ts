// nuxt.config.ts
import tailwindcss from "@tailwindcss/vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/icon"],
  eslint: {
    config: {
      standalone: false,
    },
  },
  css: [resolve(__dirname, "assets/css/app.css")],
  vite: {
    plugins: [tailwindcss()],
  },
});
