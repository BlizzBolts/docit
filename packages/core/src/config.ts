import { glob } from "glob";

export interface Config {}

export interface ConfigFromFile {}

const readConfig = () => {};

const readConfigFromFile = async (cwd: string = process.cwd()) => {
  const matches = await glob(".docit/docit.config.{js,mjs,cjs,ts,mts,cts}", {
    cwd,
  });
  if (matches.length === 0) {
    return;
  }
  matches[0];
};

const readConfigFromPackageJson = () => {};

const mergeConfig = () => {};

export const defaultConfig = {};

export const resolveConfig = () => {};
