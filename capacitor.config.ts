import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.326988bfbc2f43a4aac82c298218a341',
  appName: 'gilded-haven-market',
  webDir: 'dist',
  server: {
    url: 'https://326988bf-bc2f-43a4-aac8-2c298218a341.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#ffffff',
      showSpinner: false
    }
  }
};

export default config;