import { createServer as createViteServer } from 'vite';
import { resolveConfig } from './config.js';
import { UserConfig } from './types.js';
import { docit } from './plugins/index.js';

export const start = async (userConfig: UserConfig) => {
  const config = await resolveConfig(userConfig, 'start');
  return createViteServer({
    base: '/',
    plugins: [await docit(config)],
  });
};
