import { coreLogger, getUserPackageJson } from "@blizzbolts/docit-shared/node";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { loadTsConfig } from "load-tsconfig";
import type { TsConfigJson, PackageJson } from "type-fest";

const preflightConfig: Partial<PreflightCache> = {};

interface PreflightCache {
  "package.json": PackageJson;
  "tsconfig.json": {
    data: TsConfigJson;
    files: string[];
    path: string;
  };
  esm: boolean;
}

const preflightLogger = coreLogger.withTag("preflight");

export const preFlight = async (cwd = process.cwd()) => {
  const pkg = await getUserPackageJson(cwd);
  if (!pkg) {
    preflightLogger.debug("Failed to read user package.json file");
  }

  preflightConfig["package.json"] = pkg;
  preflightConfig.esm = pkg?.type === "module";
  const tsconfig = loadTsConfig(cwd);

  if (!tsconfig) {
    preflightLogger.debug("Failed to read user tsconfig.json file");
  }

  preflightConfig["tsconfig.json"] = loadTsConfig(cwd);

  return getPreflightConfig();
};

export const getPreflightConfig = () => {
  return preflightConfig;
};
