import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/tailwind.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  plausible: {
    // Prevent tracking on localhost
    ignoredHostnames: ['localhost'],
    domain: 'funnel.jmse.cloud',
    apiHost: 'https://tracking.jmse.cloud'
  },

  modules: ["@nuxtjs/plausible"],
});