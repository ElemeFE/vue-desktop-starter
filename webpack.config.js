const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var plugins = [
  new HtmlWebpackPlugin({
    filename: './index.html',
    template: './app/index.html'
  })
];

module.exports = {
  entry: {
    vendor: [
      'vue', 'vue-router', 'vue-resource'
    ],
    app: './app/index.js'
  },
  output: {
    path: './dist',
    publicPath: '/dist/',
    filename: isProduction ? '[name].[chunkhash:6].js' : '[name].js'
  },
  stats: {
    children: false
  },
  devServer: {
    stats: 'errors-only'
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
      { test: /\.(ttf|woff2|woff|eot|jpe?g|png|gif|svg)$/, loader: 'url?limit=20000&name=[path][name].[hash:6].[ext]' }
    ]
  },
  plugins: plugins
};

if (isProduction) {
  plugins.push.apply(plugins, [
    new ExtractTextPlugin('[name].[contenthash:6].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new CommonsChunkPlugin("vendor", "[name].[hash:6].js")
  ]);
} else {
  plugins.push.apply(plugins, [
    new ExtractTextPlugin('[name].css'),
    new CommonsChunkPlugin("vendor", "[name].js")
  ]);
  module.exports.devtool = '#source-map'
}
