import path from "node:path";
import { preflightLogger, getUserPackageJson } from "@blizzbolts/docit-shared/node";
import type { TsConfigJson, PackageJson } from "type-fest";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { loadTsConfig } from "load-tsconfig";

let preflightConfig: PreflightCache = {} as PreflightCache;

export interface PreflightCache {
  "package.json": PackageJson;
  "tsconfig.json": {
    data: TsConfigJson;
    files: string[];
    path: string;
  };
  isEsm: boolean;

  update: typeof preflight;
}

export const preflight = async (cwd = process.cwd()): Promise<PreflightCache> => {
  const pkg = await getUserPackageJson(path.resolve(cwd));
  if (!pkg) {
    preflightLogger.debug("Failed to read user package.json file");
  }

  preflightConfig["package.json"] = pkg!;
  preflightConfig.isEsm = pkg?.type === "module";
  const tsconfig = loadTsConfig(cwd);

  if (!tsconfig) {
    preflightLogger.debug("Failed to read user tsconfig.json file");
  }

  preflightConfig["tsconfig.json"] = loadTsConfig(cwd);

  preflightConfig.update = () => preflight(cwd);
  return preflightConfig;
};

export const getPreflightConfig = async (cwd = process.cwd()): Promise<PreflightCache> => {
  if (Object.keys(preflightConfig).length === 0) {
    return await preflight(cwd);
  }
  return preflightConfig;
};

export const resetpreflightConfig = () => {
  preflightConfig = {} as PreflightCache;
};
