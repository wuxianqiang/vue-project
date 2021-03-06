const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const resolve = dir => path.resolve(__dirname, '..', dir);

module.exports = merge(baseConfig, {
  mode: 'production',
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
        test: /\.(css|less)$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: './'
          }
        }, 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.(png|svg|jpe?g)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name].[hash:7].[ext]',
              publicPath: './'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        'main*.*',
        '!vendor',
        '!vendor.manifest.json',
        '!favicon.ico'
      ]
    }),
    new htmlWebpackPlugin({
      template: resolve('index.html'),
      js: './vendor/vendor.dll.js'
    }),
    // new CopyWebpackPlugin([{
    //   from: 'src/assets',
    //   to: 'assets'
    // }]),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('production')
    }),
    new MiniCssExtractPlugin({
      filename: 'style/style.css'
    })
  ],
  optimization: {
    minimizer: [
      new uglifyJsPlugin({}),
      new OptimizeCssAssetsPlugin({})
    ]
  }
})