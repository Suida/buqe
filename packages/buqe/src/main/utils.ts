import path from 'path';
import { URL } from 'url';
import { outputPath } from '@config/webpack.paths';

export { outputPath as string };

export const isProd = process.env.BUQE_MODE === 'production';
export const port = process.env.BUQE_PORT || 4399;
export let resolveHtmlURL: (name: string) => string;

if (isProd) {
  resolveHtmlURL = (name) => `file://${path.join(outputPath, name)}`;
} else {
  resolveHtmlURL = (name) => {
    const url = new URL(`http://localhost:${port}`);
    url.pathname = name;
    return url.href;
  };
}

