let env = process.env.NODE_ENV;
let extensions;

console.log(env);

env === 'development' ? (
  extensions = ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts']
) : (
  extensions = ['mdx', 'md', 'js', 'tsx', 'ts']
)

module.exports = {
  pageExtensions: extensions,
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

  reactStrictMode: false,
}
