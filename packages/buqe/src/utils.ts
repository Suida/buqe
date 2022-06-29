import path from 'path';
import { outputPath } from '../config/webpack.paths';

export { outputPath as string };

export const resolveHtmlURL = (name: string) => {
  return `file://${path.join(outputPath, name)}`;
}
