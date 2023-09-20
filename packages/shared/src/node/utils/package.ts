import path from "node:path";
import type { PackageJson } from "type-fest";
import fsx from "fs-extra";
import { safeParse } from "../../shared/utils";
import { logger } from "../../shared/logger";

export const getUserPackageJson = async (
  cwd: string = process.cwd(),
): Promise<PackageJson | undefined> => {
  const userPkgPath = path.resolve(cwd, "./package.json");
  try {
    const content = await fsx.readFile(userPkgPath, { encoding: "utf-8" });
    return safeParse<PackageJson>(content);
  } catch (e) {
    logger.debug("Failed to get package.json from", userPkgPath);
    return undefined;
  }
};
