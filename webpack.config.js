const webpack = require("webpack");
const path = require("path");

module.exports = {
  devtool: "source-map",
  entry: {
    "bundle": [
      "babel-polyfill",
      "react-hot-loader/patch",
      "./src/index"
    ]
  },
  output: {
    path: path.resolve(__dirname, "/dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      }
    ]
  }
}
