const path = require('path');
const webpack = require('webpack');
const resolve = dir => path.resolve(__dirname, '..', dir);
const libraryName = '[name]_library'

module.exports = {
  entry: {
    vendor: ['vue', 'vuex', 'axios', 'vue-router']
  },
  output: {
    path: resolve('dist/vendor'),
    filename: '[name].dll.js',
    library: libraryName
  },
  plugins: [
    new webpack.DllPlugin({
      path: resolve('dist/[name].manifest.json'),
      name: libraryName
    })
  ]
}