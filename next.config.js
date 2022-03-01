const withImages = require('next-images')

module.exports = withImages({
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/nft',
          destination: '/nft/index.html'
        },
      ],
    }
  },
  ...withImages(),
  future: {
      webpack5: true,
  },
  env: {
    // API_URL: 'https://api.deally.io',
    API_URL: 'https://deally-old.herokuapp.com',
  },
  webpack: (config, options) => {
    config.experiments = {topLevelAwait: true};
    return {...config}
  },
})