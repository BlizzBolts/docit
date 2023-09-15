import path from "node:path";
import { glob } from "glob";
import { bundleRequire } from "bundle-require";
import { coreLogger } from "@blizzbolts/docit-shared";

export interface Config {}

export interface ConfigFromFile {}

const readConfig = async () => {
  const configFromFile = await readConfigFromFile();

  return configFromFile;
};

export const readConfigFromFile = async (cwd: string = process.cwd()) => {
  const matches = await glob("./.docit/docit.config.{js,mjs,cjs,ts,mts,cts}", {
    cwd,
  });
  if (matches.length === 0) {
    return {};
  }
  try {
    const { mod } = await bundleRequire({
      cwd,
      filepath: matches[0],
      getOutputFile: (filePath) => {
        return path.resolve(cwd, filePath);
      },
    });
    return mod.default;
  } catch (e) {
    coreLogger.warn(`Failed to load config at ${matches[0]}, resolve as {}\n`, e);
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
