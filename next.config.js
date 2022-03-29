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
    locales: ['en', 'pt'],
    defaultLocale: 'en',
    localeDetection: true,
  },

  /* async rewrites() {
    return {
      beforeFiles: [
        // if the host is `app.acme.com`,
        // this rewrite will be applied
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'brand.brstorm.design',
            },
          ],
          destination: '/brand/:path*',
        },
      ]
    }
  }, */

  reactStrictMode: true,
}
