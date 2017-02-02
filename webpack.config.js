const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './src/index.tsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },

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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true, 
    contentBase: './src',
  }
}
