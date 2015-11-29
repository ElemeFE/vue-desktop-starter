const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './app/index.js'
  },
  output: {
    path: './dist',
    publicPath: '/dist/',
    filename: isProduction ? '[name].[chunkhash:6].js' : '[name].js'
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('style', 'css')
    }
  },
  babel: {
    presets: ['es2015']
  },
  module: {
    preLoaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader' }
    ],
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, exclude: /node_modules\/(?!vue-desktop)/, loader: 'babel' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.html$/, loader: 'html' },
      { test: /\.(ttf|svg|woff2|woff|eot)$/, loader: 'url?limit=20000&name=[path][name].[hash:6].[ext]' }
    ]
  }
};

if (isProduction) {
  module.exports.plugins = [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './app/index.html'
    }),
    new ExtractTextPlugin('[name].[contenthash:6].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ];
} else {
  module.exports.plugins = [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './app/index.html'
    }),
    new ExtractTextPlugin('[name].css')
  ];
  module.exports.devtool = '#source-map'
}
