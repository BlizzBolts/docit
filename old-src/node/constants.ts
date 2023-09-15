import path from "path";
import { fileURLToPath } from "url";
import fsx from "fs-extra";
export const isProduction = process.env.NODE_ENV === "production";

const filename__ = fileURLToPath(import.meta.url);
const dirname__ = path.dirname(filename__);

export const PKG_JSON_PATH = path.resolve(dirname__, "../../package.json");
export const BUILD_DIST_PATH = path.resolve(dirname__, "../");
export const pkg = fsx.readJSONSync(PKG_JSON_PATH);

export const MD_PATTERN = "**/*.md?(x)";

export const VIRTUAL_ROUTER_CONFIG_ID = "virtual:routes";
export const VIRTUAL_APP_DATA_ID = "virtual:appData";
export const VIRTUAL_SIDEBARS_CONFIG_ID = "virtual:sidebars";
export const VIRTUAL_PROVIDER_PATH_ID = "virtual:provider";
export const VIRTUAL_SANDBOXES_ID = "virtual:sandboxes";
