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
      apiKey: "AIzaSyAsouuLftlGcBKG4k8QYY87tGuc7uwYE-g",
      authDomain: "fcm-web-demo-67273.firebaseapp.com",
      projectId: "fcm-web-demo-67273",
      storageBucket: "fcm-web-demo-67273.appspot.com",
      messagingSenderId: "885727063733",
      appId: "1:885727063733:web:217947bc31410aa9f918fc"
      // measurementId: "<measurementId>"
    },
    services: {
      auth: true,
      firestore: true,
      functions: true,
      storage: true,
      database: true,
      performance: true,
      analytics: true,
      remoteConfig: true,
      messaging: true
    },
    messaging: {
      createServiceWorker: true,
      fcmPublicVapidKey:
        "BDFpsBW57B9ecMUwTP1xFG8MN50ioyQea36J-pWoCjQN2pQWnwP5Ps_jZ5WvyiiWJBbwM-Tzcc3KhKypnw1GDkk",
      inject: "./firebase-messaging-sw.js"
      // actions: [
      //   {
      //     action: "kasraAction",
      //     url: "https://www.google.com?action=kasraAction"
      //   }
      // ]
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
