const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js'

  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      title: 'My App',
      template: './src/index.html'
    }),

  ],
  module: {
    loaders: [{
      test: /.js?$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    },

    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: "file-loader?name=[name].[ext]",
    },
    {
      test: /\.css$/,
      loader: [{
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      }
      ]
    }
    ]
  },
  devServer: {
    contentBase: './dist',
     historyApiFallback: true

  },
};
