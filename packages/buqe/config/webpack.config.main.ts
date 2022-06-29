import path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import baseConfig from './webpack.config';
import * as pathConfig from './webpack.paths';

const mainConfig: Configuration =  merge(baseConfig, {
  entry: {
    main: path.join(pathConfig.srcPath, 'main.ts'),
    preload: path.join(pathConfig.srcPath, 'preload.ts'),
  },
  target: 'electron-main',
})

export default mainConfig;
