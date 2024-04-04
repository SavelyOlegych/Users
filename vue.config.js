const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/Users/" : "/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: "@import '@/assets/scss/vars';",
      },
    },
  },
});