import path from 'path';
import { isFileExists } from './utils/index.js';
import { UserConfig, ResolvedUserConfig } from './types.js';
import { CLIENT_PATH } from './constants.js';

export const resolveConfig = async (
  config: UserConfig,
  command: 'build' | 'start'
): Promise<ResolvedUserConfig> => {
  return {
    base: CLIENT_PATH,
    docs: path.resolve(process.cwd(), config.root),
    title: config.title || 'Docit',
    sidebars: config.sidebars || [],
    providerPath: isFileExists(config.providerPath)
      ? config.providerPath
      : path.resolve(CLIENT_PATH, './components/DefaultProvider/index.js'),
    publicPath: command === 'build' ? config.publicPath : '/',
  };
};
