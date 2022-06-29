module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { svgo: false } }],
    })

    return config
  },

  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    localeDetection: true,
  },

  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'brand.brstorm.design',
            },
          ],
          destination: '/services/brand/:path*',
        },
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'web.brstorm.design',
            },
          ],
          destination: '/services/web/:path*',
        },
      ]
    }
  },

  reactStrictMode: true,
}
