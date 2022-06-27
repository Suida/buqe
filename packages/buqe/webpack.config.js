const path = require('path');

const { ESBuildMinifyPlugin } = require('esbuild-loader');
const { ProvidePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.BUQE_MODE === 'production'? 'production': 'development';
const publicPath = path.join(__dirname, 'public');

module.exports = {
  mode,
  entry: './index.tsx',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          tsconfigRaw: require('../../tsconfig.json'),
        }
      }
    ]
  },
  optimization: { 
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015',
      }),
    ]
  },
  plugins: [
    new ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      title: 'buqe',
      template: path.join(publicPath, 'index.html'),
    }),
  ],
  devServer: {
    compress: true,
    port: 9000,
  },
}
