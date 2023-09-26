import path from "node:path";
import { glob } from "glob";
import { bundleRequire } from "bundle-require";
import type { DocitConfig } from "../shared/types";
import { zDocitConfig } from "../shared/types";
import { zPrintErr } from "../shared/zod";
import { coreLogger } from "../shared/logger";
import { isFileReadable } from "../node/utils/files";

export const findConfigFile = async (
  cwd: string = process.cwd(),
  options?: {
    isEsm?: boolean;
  },
): Promise<string | null> => {
  const globString = options?.isEsm ? "./docit.config.{js,cjs,ts}" : "./docit.config.{mjs,js,ts}";

  const matches = await glob(globString, {
    cwd,
    nodir: true,
  });
  if (matches.length === 0) {
    return null;
  } else {
    return matches[0];
  }
};

export const readConfigFromFile = async (
  cwd: string = process.cwd(),
  options?: {
    isEsm?: boolean;
  },
): Promise<DocitConfig | null> => {
  const configFile = await findConfigFile(cwd, options);
  coreLogger.info("Locate docit.config file at", configFile);
  if (!configFile) {
    return null;
  }

  const isValidFile = isFileReadable(path.resolve(cwd, "./", configFile));

  if (!isValidFile) {
    return null;
  }

  try {
    const { mod } = await bundleRequire({
      filepath: path.resolve(cwd, "./", configFile),
      getOutputFile: (filePath) => {
        return path.resolve(cwd, filePath);
      },
      tsconfig: "./tsconfig.json",
    });
    // I mean ... it works in both .cjs and .mjs situations
    return zDocitConfig.parse(mod.default ? mod.default : mod);
  } catch (e) {
    coreLogger.warn(`Failed to load config at ${configFile}, resolved as default\n`, e);
    zPrintErr(e);
    return null;
  }
};

const readConfigFromPackageJson = async (
  cwd: string = process.cwd(),
  options?: {
    isEsm?: boolean;
  },
) => {
  return null;
};

const readConfig = async (
  cwd: string = process.cwd(),
  options?: {
    isEsm?: boolean;
  },
) => {
  let config = null;
  const hasConfigFile = await findConfigFile(cwd, options);

  if (hasConfigFile) {
    config = await readConfigFromFile(cwd, options);
  } else {
    config = await readConfigFromPackageJson(cwd, options);
  }
  return config;
};

export const resolveConfig = () => {
  const config = readConfig();

  return config;
};
