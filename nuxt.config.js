const fs = require("fs");

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "sample-nuxt",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/firebase", "@nuxtjs/axios"],

  firebase: {
    config: {
      apiKey: "AIzaSyAsQpQHHcgaEhz0BeJ1lj9cuuHMcaXbGHY",
      authDomain: "test-jeanswest.firebaseapp.com",
      projectId: "test-jeanswest",
      storageBucket: "test-jeanswest.appspot.com",
      messagingSenderId: "836085134543",
      appId: "1:836085134543:web:e6babc3a0602a2a88773ba",
      measurementId: "G-HJJN0B1KKX"
    },
    onFirebaseHosting: false,
    services: {
      auth: true,
      firestore: true,
      functions: true,
      storage: true,
      database: true,
      performance: true,
      analytics: true,
      remoteConfig: true,
      messaging: {
        createServiceWorker: true,
        fcmPublicVapidKey:
          "BHiiwafrukmAaGlmIji03uKDNSYmAcKk0t4Wf814r68KQRoAnUJoFUJItfT3hP1Y7-2yv59sJNTQtmDQyJQveTs",
        inject: fs.readFileSync("./firebase-messaging-sw.js")
        // actions: [
        //   {
        //     action: "kasraAction",
        //     url: "https://www.google.com?action=kasraAction"
        //   }
        // ]
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
