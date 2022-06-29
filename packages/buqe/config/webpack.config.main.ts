import path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import baseConfig from './webpack.config';
import * as pathConfig from './webpack.paths';

const mainConfig: Configuration =  merge(baseConfig, {
  entry: {
    main: path.join(pathConfig.mainPath, 'main'),
    preload: path.join(pathConfig.mainPath, 'preload'),
  },
  target: 'electron-main',
})

export default mainConfig;
