const webpack = require('webpack');
const Copy = require('copy-webpack-plugin');
const Clean = require('clean-webpack-plugin');
const HTML = require('html-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const path = require('path');

// detect production
const env = process.env.NODE_ENV || 'development';
const isProd = (env === 'production');
const ROOT = __dirname;
const root = path.join.bind(path, ROOT);

const METADATA = {
  title: 'Nightshell',
  baseUrl: '/',
};

const entry = isProd
  ? {
    main:  './src/index.tsx',
  }
  : [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './src/index.tsx'
  ];

const output = isProd
  ? {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.min.js'
  }
  : {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  };

  // const output = isProd
  // ? {
  // path: root('dist'),
  // filename: '[name].[chunkhash].bundle.js',
  // sourceMapFilename: '[name].[chunkhash].bundle.map',
  // chunkFilename: '[id].[chunkhash].chunk.js'
  // }
  // : {
  // path: root('dist'),
  // filename: '[name].bundle.js',
  // sourceMapFilename: '[file].map',
  // chunkFilename: '[id].chunk.js'
  // }

  // plugins
  const plugins = [
    new Clean(['dist'], {ROOT: ROOT}),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(env)}),
    new webpack.NamedModulesPlugin(),
    new CheckerPlugin()
  ];

if (isProd) {
  plugins.push(
    new webpack.LoaderOptionsPlugin({minimize: true, debug: false}),
    // new webpack.optimize.CommonsChunkPlugin({
    // name: 'vendor',
    // chunks: ['main'],
    // minChunks: module => /node_modules/.test(module.resource)
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    // name: 'app',
    // chunks: ['app'],
    // filename: 'app.js'
    // }),
    new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    chunks: ['vendor'],
    filename: 'vendor.bundle.js'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),
    new HTML({template: 'src/indexTemplate.html'}),
    new Copy([
      { from: 'src/assets', to: 'assets' },
    ])
  );
} else {
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new HTML({template: 'src/index.html'})
  );
}

exports.plugins = plugins;
exports.entry = entry;
exports.output = output;
// exports.DEV = DEV;
// exports.isProd = isProd;
// exports.METADATA = METADATA;
// exports.root = root;
