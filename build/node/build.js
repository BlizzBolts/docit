import { build as viteBuild } from 'vite';
import { resolveConfig } from './config.js';
import { docit } from './plugins/index.js';
export const build = async (userConfig) => {
    const config = await resolveConfig(userConfig, 'build');
    return viteBuild({
        base: '/',
        plugins: [await docit(config)],
    }).then(() => {
        process.exit(0);
    });
};
//# sourceMappingURL=build.js.map