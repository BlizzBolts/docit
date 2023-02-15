import { createLogger } from "vite";
import { bundleRequire } from "bundle-require";
import fsx from "fs-extra";
import { UserFileConfig } from "../types.js";

export const logger = createLogger("info", {
  prefix: "[docit]",
});

export const isFileExists = (p: string) => {
  try {
    fsx.accessSync(p);
    return true;
  } catch (e) {
    return false;
  }
};

export const readUserConfigFile = async (
  p: string
): Promise<UserFileConfig> => {
  try {
    if (!isFileExists(p)) {
      return {};
    }

    logger.info(`Config File Detected: ${p}`);

    const { mod } = await bundleRequire({
      filepath: p,
    });

    return mod.default;
  } catch (e) {
    logger.error("Something wrong happens while reading config file.");
    console.error(e);
    return {};
  }
};

export * from "./paths.js";
export * from "./ast.js";
export * from "./api.js";
