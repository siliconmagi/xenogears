const webpack = require('webpack');
const path = require('path');
const { entry, output, plugins } = require('./pylon');

module.exports = {
  entry,
  plugins,
  output,
  module: {
    rules: [
      {
        test: /tsx?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [['es2015', { "modules": false }], 'stage-3'],
            plugins: [['inferno', { "imports": true}]],
          },
        }, {
          loader: 'awesome-typescript-loader',
          options: {
            configFileName: 'tsconfig.webpack.json'
          }
        }],
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
}
