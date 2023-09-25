import path from "node:path";
import { glob } from "glob";
import { bundleRequire } from "bundle-require";
import type { DocitConfig } from "@blizzbolts/docit-shared";
import { coreLogger, zDocitConfig, zPrintErr } from "@blizzbolts/docit-shared";

export interface ConfigFromFile {}

const readConfig = async () => {};

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
): Promise<DocitConfig> => {
  const configFile = await findConfigFile(cwd, options);
  coreLogger.info("Locate docit.config file at", configFile);
  if (!configFile) {
    return {};
  }

  try {
    const { mod } = await bundleRequire({
      cwd,
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
    return {};
  }
};

const readConfigFromPackageJson = () => {};

const mergeConfig = () => {};

export const defaultConfig = {};

export const resolveConfig = () => {
  const config = readConfig();

  return config;
};
