import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(import.meta.url);
export const PKG_JSON_PATH = path.resolve(__dirname, '../../../package.json');
export const CLIENT_PATH = path.resolve(__dirname, '../../client');
export const MD_PATTERN = '**/*.md?(x)';
export const VIRTUAL_ROUTER_CONFIG_ID = 'virtual:routes';
export const VIRTUAL_APP_DATA_ID = 'virtual:appData';
export const VIRTUAL_SIDEBARS_CONFIG_ID = 'virtual:sidebars';
export const VIRTUAL_PROVIDER_PATH_ID = 'virtual:provider';
//# sourceMappingURL=constants.js.map