const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const resolve = dir => path.resolve(__dirname, '..', dir);

module.exports = {
  entry: resolve('src/app.js'),
  resolve: {
    extensions: ['.js', '.vue', '.less', '.css'],
    modules: [resolve('node_modules')],
    alias: {
      'components': resolve('src/components'),
      'assets': resolve('src/assets')
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      template: resolve('index.html'),
      js: '/dist/vendor/vendor.dll.js'
    }),
    new webpack.DllReferencePlugin({
      manifest: require(resolve('dist/vendor.manifest.json'))
    })
  ]
}
