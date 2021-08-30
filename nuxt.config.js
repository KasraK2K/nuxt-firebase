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
      apiKey: "AIzaSyAGJiFJ_MM39WSxiiDU3C-d2OuSbCygKAM",
      authDomain: "jeanswest-avakatan.firebaseapp.com",
      projectId: "jeanswest-avakatan",
      storageBucket: "jeanswest-avakatan.appspot.com",
      messagingSenderId: "765850527197",
      appId: "1:765850527197:web:e1babae636801dbef90234",
      measurementId: "G-X2KSH2B3LY"
    },
    onFirebaseHosting: false,
    services: {
      // auth: true,
      firestore: true,
      // functions: true,
      // storage: true,
      // database: true,
      // performance: true,
      analytics: true,
      // remoteConfig: true,
      messaging: {
        createServiceWorker: true,
        fcmPublicVapidKey:
          "BB7sHR0uXrXXdb7hvNUk8yroT-YJCm9KoVhLVKxRcArMtL8AQDtZjsDyT-__WVc6AaqnObTbLtVJJoS78d_Czf4",
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
