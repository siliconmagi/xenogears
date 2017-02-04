const webpack = require('webpack');
const path = require('path');
const { entry, output, plugins } = require('./pylon');

module.exports = {
  entry: {
		main:  './src/index.tsx',
	},
  plugins,
  output,
  module: {
    rules: [
      {
        test: /tsx?$/,
        use: [{
          loader: 'babel-loader?optional=runtime&stage=0&cacheDirectory',
          options: {
            presets: [['es2015', { "modules": false }], 'stage-0'],
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
  devServer: {
    port: 3000,
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
}
