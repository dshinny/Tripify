const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  mode: 'development',
  entry: './client/src/index.jsx',
  output: {
    // [path] is where to output
    path: path.join(__dirname, 'client/public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  plugins: [
    // fix "process is not defined" error:
    // (do "npm install process" before running the build)
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
   }),
  ]
};