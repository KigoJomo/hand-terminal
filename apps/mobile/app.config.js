const tokens = require("./src/theme/tokens.json");

module.exports = {
  expo: {
    name: "mobile",
    slug: "mobile",
    scheme: "handterminal",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: tokens.light.background
    },
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: tokens.light.background
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false
    },
    web: {
      bundler: "metro",
      favicon: "./assets/favicon.png"
    },
    plugins: ["expo-router"],
    experiments: {
      typedRoutes: true
    }
  }
};
