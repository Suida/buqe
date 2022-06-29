import path from 'path';

const rootPath = path.join(__dirname, '..');
const configPath = path.join(__dirname, '.');
const srcPath = path.join(rootPath, 'src');
const mainPath = path.join(srcPath, 'main');
const rendererPath = path.join(srcPath, 'renderer');
const outputPath = path.join(rootPath, 'dist');

export {
  rootPath,
  configPath,
  srcPath,
  mainPath,
  rendererPath,
  outputPath,
};
