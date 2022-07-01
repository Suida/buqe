import path from 'path';
import { spawn } from 'child_process';
import {
  Configuration,
  ProvidePlugin,
} from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import baseConfig from './webpack.config';
import * as pathConfig from './webpack.paths';

export const port = process.env.BUQE_PORT || 4399;

const mixinConfig: Configuration = {
  entry: {
    renderer: path.join(pathConfig.rendererPath, 'index'),
  },
  target: ['web', 'electron-renderer'],
  plugins: [
    new ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      title: 'buqe',
      template: path.join(pathConfig.rendererPath, 'index.ejs'),
    }),
  ],
  devServer: {
    port,
    compress: true,
    setupMiddlewares(middlewares) {
      console.info('Starting Main process...');
      spawn('pnpm', ['start:main'], {
        shell: true,
        stdio: 'inherit',
      })
        .on('close', (code) => process.exit(code!))
        .on('error', (err) => console.error(err));

      return middlewares;
    },
  } as WebpackDevServerConfiguration,
};

const rendererConfig: Configuration = merge(baseConfig, mixinConfig);

export default rendererConfig;
