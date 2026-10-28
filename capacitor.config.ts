import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fridge.ai',
  appName: 'Fridge AI',
  webDir: 'capacitor-web',
  android: {
    path: 'android-capacitor',
  },
  server: {
    url: 'https://fridge-inventory-one.vercel.app',
    androidScheme: 'https',
    allowNavigation: ['fridge-inventory-one.vercel.app'],
  },
};

export default config;
