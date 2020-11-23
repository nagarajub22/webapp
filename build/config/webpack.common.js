const htmlWebpackPlugin = require('html-webpack-plugin');
const minifyCssPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: ['./src/index.ts', './src/scss/style.scss'],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: minifyCssPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../../dist'),
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new minifyCssPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
