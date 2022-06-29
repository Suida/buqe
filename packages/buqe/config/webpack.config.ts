import path from 'path';

import { ESBuildMinifyPlugin } from 'esbuild-loader';
import { Configuration, ProvidePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import * as pathConfig from './webpack.paths';

const mode = process.env.BUQE_MODE === 'production' ? 'production' : 'development';

const webpackConfig: Configuration = {
  mode,
  output: {
    filename: '[name].js',
    path: pathConfig.outputPath,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015',
      }),
    ],
  },
  plugins: [
    new ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      title: 'buqe',
      template: path.join(pathConfig.rendererPath, 'index.ejs'),
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.sass', '.json'],
    alias: {
      '@': pathConfig.srcPath,
      '@config': pathConfig.configPath,
      '@main': pathConfig.mainPath,
      '@renderer': pathConfig.rendererPath,
    },
  },
};

export default webpackConfig;
