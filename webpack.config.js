var webpack = require('webpack');
var path =  require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
        test: /\.scss$/, 
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./src/styles")]
  },
  plugins: [
    new ExtractTextPlugin('main.css', {allChunks: true})
  ]
}
