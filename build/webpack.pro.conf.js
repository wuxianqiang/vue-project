const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const resolve = dir => path.resolve(__dirname, '..', dir);

module.exports = {
  mode: 'production',
  plugins: [
    new htmlWebpackPlugin({
      template: resolve('index.html'),
      js: '/vendor/vendor.dll.js'
    }),
    new CleanWebpackPlugin([resolve('dist')]),
    new CopyWebpackPlugin([{
      form: resolve('src/assets'),
      to: resolve('dist/assets')
    }]),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('production')
    })
  ]
}