let env = process.env.NODE_ENV;
let extensions;

console.log('Current environment set to', env);

env === 'development' ? (
  extensions = ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts']
) : (
  extensions = ['mdx', 'md', 'js', 'tsx', 'ts']
)

module.exports = {
  pageExtensions: extensions,
  swcMinify: true,

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

  reactStrictMode: false,
}
