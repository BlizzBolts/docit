import path from "node:path";
import { glob } from "glob";
import { bundleRequire } from "bundle-require";
import { coreLogger, isZodError, zDocitConfig, zPrintErr } from "@blizzbolts/docit-shared";

export interface ConfigFromFile {}

const readConfig = async () => {
  const configFromFile = await readConfigFromFile();

  return configFromFile;
};

export const findConfigFile = async (cwd: string = process.cwd()): Promise<string | null> => {
  const matches = await glob("./.docit/docit.config.{js,mjs,cjs,ts,mts,cts}", {
    cwd,
  });
  if (matches.length === 0) {
    return null;
  } else {
    return matches[0];
  }
};

export const readConfigFromFile = async (cwd: string = process.cwd()) => {
  const configFile = await findConfigFile(cwd);

  if (!configFile) {
    return {};
  }

  try {
    const { mod } = await bundleRequire({
      cwd,
      filepath: configFile,
      getOutputFile: (filePath) => {
        return path.resolve(cwd, filePath);
      },
    });
    return zDocitConfig.parse(mod.default);
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
