import { Plugin } from 'vite';
import { ResolvedUserConfig } from '../../types.js';

const virtualProvider = async (config: ResolvedUserConfig): Promise<Plugin> => {
  return Promise.resolve({
    name: 'virtual:vite-plugin-virtual/virtual:provider',
    resolveId(id) {
      if (id === 'virtual:provider') {
        return config.providerPath;
      }
    },
  });
};

export { virtualProvider };
