import { createServer as createViteServer } from 'vite';
import { resolveConfig } from './config.js';
import { docit } from './plugins/index.js';
export const start = async (userConfig) => {
    const config = await resolveConfig(userConfig, 'start');
    return createViteServer({
        base: '/',
        plugins: [await docit(config)],
    });
};
//# sourceMappingURL=start.js.map