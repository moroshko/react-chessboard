var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/components/Chessboard/Chessboard.js',

  output: {
    filename: 'dist/Chessboard.js',
    library: 'Chessboard',
    libraryTarget: 'commonjs2',
    publicPath: '../pieces/'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel', 'eslint'],
      exclude: /node_modules/
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style', 'css!less'),
      exclude: /node_modules/
    }, {
      test: /\.svg$/,
      loader: 'url'
    }]
  },

  externals: {
    react: 'React'
  },

  plugins: [
    new ExtractTextPlugin('dist/Chessboard.css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    })
  ]
};
