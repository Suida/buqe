import { ESBuildMinifyPlugin } from 'esbuild-loader';
import {
  Configuration,
} from 'webpack';

import * as pathConfig from './webpack.paths';

export const isProd = process.env.BUQE_MODE === 'production';
export const isDev = !isProd;

export const mode = isProd ? 'production' : 'development';

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
