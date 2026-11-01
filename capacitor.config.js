const backendUrl = process.env.SAFEHER_SERVER_URL || 'https://example.invalid/SafeHer/';

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
