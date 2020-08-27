const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const src = path.resolve(__dirname, 'private', 'src');

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  entry: path.resolve(src, 'ts', 'index.ts'),
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      Components: path.resolve(src, 'ts', 'components'),
    },
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
  devServer: {
    port: 3000,
  },

  plugins: [
    new FaviconsWebpackPlugin({
      logo: path.resolve(src, 'img', 'favicon.png'),
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false,
      },
    }),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'Tjørnebakken 8',
      meta: {
        viewport: 'width=device-width,initial-scale=1',
        description: 'Tjørnebakken 8',
      },
    }),
  ],
};
