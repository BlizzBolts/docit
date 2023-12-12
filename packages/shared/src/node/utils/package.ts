import path from "node:path";
import fsx from "fs-extra";
import type { PackageJson } from "type-fest";
import { logger } from "../../shared/logger";
import { safeParse } from "../../shared/utils";

export const getUserPackageJson = async (cwd: string = process.cwd()): Promise<PackageJson | undefined> => {
  const userPkgPath = path.resolve(cwd, "./package.json");
  let content = "";
  try {
    content = await fsx.readFile(userPkgPath, { encoding: "utf-8" });
  } catch (e) {
    logger.debug("Failed to get package.json from", userPkgPath);
    return undefined;
  }

  return safeParse<PackageJson>(content);
};
