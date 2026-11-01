const backendUrl = 'https://safeher.ifree.page/';

/** @type {import('@capacitor/cli').CapacitorConfig} */
module.exports = {
  appId: 'com.safeher.app',
  appName: 'SafeHer',
  webDir: 'www',
  server: {
    // This must be the public HTTPS address of the hosted PHP app, ending in /.
    url: backendUrl,
    cleartext: false,
    allowNavigation: ['*']
  },
  plugins: {
    Geolocation: {
      permissions: ['location', 'coarseLocation']
    }
  }
};
