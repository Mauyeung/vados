var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./app.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  output: {
    path: __dirname + "/build/",
    filename: "browser.min.js"
  }
};