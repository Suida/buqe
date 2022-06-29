import path from 'path';
import { Configuration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';
import baseConfig from './webpack.config';
import * as pathConfig from './webpack.paths';

const mixinConfig: Configuration = {
  entry: {
    renderer: path.join(pathConfig.rendererPath, 'index'),
  },
  target: 'electron-renderer',
  devServer: {
    compress: true,
    port: 9000,
  } as WebpackDevServerConfiguration,
};

const rendererConfig: Configuration = merge(baseConfig, mixinConfig);

export default rendererConfig;
