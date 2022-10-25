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
  async headers() {
    return [
      {
        source: '/api/client',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: 'https://real-estate-two-phi.vercel.app' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' }
        ]
      }
    ]
  },
  webpack: (config) => {
    config.experiments = {
      topLevelAwait: true,
      layers: true
    },
    config.resolve.fallback = {
      fs: false
    },
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  }
}