const path = require('path')
const withImages = require('next-images')

module.exports = withImages( {
 
  images: {
    domains: ['drcutthebarbershow.web.app'],
      //  loader: 'imgix',
      //  path: 'https://assets.coingecko.com/',
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  
  module: {
    rules: [
      //...
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
})
