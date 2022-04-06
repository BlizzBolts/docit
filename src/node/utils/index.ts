import { createLogger } from "vite";
import { bundleRequire } from "bundle-require";
import fsx from "fs-extra";
import path from "path";
import { UserFileConfig } from "../types.js";

export const logger = createLogger("info", {
  prefix: "[docit]",
});

/**
 * Remove `.md` or `.mdx` or `.html` extention from the given path. It also converts
 * `index` to slush.
 */
export const removeExtention = (path: string): string => {
  return path.replace(/(\.mdx|\.md)$/g, "");
};

export const toRoutePath = (p: string) => {
  const result = removeExtention(p);
  if (result.startsWith("/")) {
    return result;
  } else {
    return `/${result}`;
  }
};

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
    return {};
  }
};

export const resolveAbsPath = (p: string, base = process.cwd()) => {
  if (!p) {
    return null;
  }

  return path.isAbsolute(p) ? p : path.resolve(base, p);
};

export * from "./ast.js";
export * from "./api.js";
