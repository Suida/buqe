import path from 'path';

import { ESBuildMinifyPlugin } from 'esbuild-loader';
import { Configuration, ProvidePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { rootPath, outputPath } from './webpack.paths';

const mode = process.env.BUQE_MODE === 'production'? 'production': 'development';
const publicPath = path.join(rootPath, 'public');

const webpackConfig: Configuration = {
  mode,
  output: {
    filename: '[name].js',
    path: outputPath,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          tsconfigRaw: require('../../../tsconfig.json'),
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
  resolve: {
    extensions: ['.ts', '.tsx', '...'],
  },
}

export default webpackConfig;
