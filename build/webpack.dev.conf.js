const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
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
    new VueLoaderPlugin(),
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