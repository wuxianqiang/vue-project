const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const htmlWebpackPlugin = require('html-webpack-plugin');
const resolve = dir => path.resolve(__dirname, '..', dir);

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    filename: '[name]_[hash].js',
    path: resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: resolve('index.html'),
      js: '/dist/vendor/vendor.dll.js'
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('development')
    })
  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true
  },
})