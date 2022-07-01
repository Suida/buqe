import path from 'path';
import { Configuration, EnvironmentPlugin } from 'webpack';
import { merge } from 'webpack-merge';
import baseConfig, { mode } from './webpack.config';
import { port } from './webpack.config.renderer';
import * as pathConfig from './webpack.paths';

const mainConfig: Configuration = merge(baseConfig, {
  entry: {
    main: path.join(pathConfig.mainPath, 'main'),
    preload: path.join(pathConfig.mainPath, 'preload'),
  },
  target: 'electron-main',
  plugins: [
    new EnvironmentPlugin({
      BUQE_MODE: mode,
      BUQE_PORT: port,
    }),
  ],
});

export default mainConfig;
