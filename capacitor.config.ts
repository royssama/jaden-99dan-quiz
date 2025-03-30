import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.multiplication.game',
  appName: '구구단 게임',
  webDir: 'src',
  server: {
    androidScheme: 'http',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystoreAlias: undefined,
      keystorePassword: undefined,
      keyPassword: undefined,
    }
  }
};

export default config; 