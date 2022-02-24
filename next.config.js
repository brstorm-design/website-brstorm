module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: {svgo: false} }],
    })

    return config
  },
  
  i18n: {
    locales: ['en', 'pt', 'it'],
    defaultLocale: 'en',
    localeDetection: false,
  },

  reactStrictMode: true,
}
