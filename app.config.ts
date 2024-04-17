import { ExpoConfig, ConfigContext } from 'expo/config';
import 'dotenv/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  const expoProjectId = process.env.EXPO_PROJECT_ID;
  return {
    ...config,
    slug: 'expo-sample-app', // input app slug name
    name: 'expo sample app', // input app name
    version: '1.0.0', // input version
    orientation: 'portrait',
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: [
      "**/*",
    ],
    scheme: "expo-sample-app", // input app scheme name
    ios: {
      supportsTablet: true,
    },
    android: {
      package: "app.sample.expo", // input package name
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: expoProjectId,
      },
    },
    owner: "input owner", // input owner name or email
  }
};