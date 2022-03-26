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
    locales: ['en', 'pt'],
    defaultLocale: 'en',
    localeDetection: true,
  },

  reactStrictMode: true,
}
