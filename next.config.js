require('dotenv').config();

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    CF_DELIVERY_ACCESS_TOKEN: process.env.CF_DELIVERY_ACCESS_TOKEN,
    CF_SPACE_ID: process.env.CF_SPACE_ID,
  },
  webpack: (config) => {
    config.experiments = {
      topLevelAwait: true,
      layers: true
    },
    config.resolve.fallback = {
      fs: false
    };
    return config
  },
}