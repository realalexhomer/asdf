var webpack = require('webpack');
var path =  require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  context: __dirname,
  entry: './src/app.js',
  output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
  },
  node: {
    fs: 'empty'
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/, 
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./src/styles")]
  },
  plugins: [
    new ExtractTextPlugin('main.css', {allChunks: true}),
    new LiveReloadPlugin({})
    // remove in prod ^
  ]
}