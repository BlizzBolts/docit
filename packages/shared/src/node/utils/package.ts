import type { PackageJson } from "type-fest";
import { pkgUp, pkgUpSync } from "pkg-up";
import { logger } from "..";
import fsx from "fs-extra";

export const getCurrentPackageJsonPath = () => pkgUpSync()!;

export const getCurrentPackageJson = async (cwd?: string): Promise<PackageJson | undefined> => {
  try {
    const filePath = await pkgUp({ cwd });
    logger.debug("getCurrentPackageJson:", filePath);
    if (filePath) {
      const content = await fsx.readFile(filePath, { encoding: "utf-8" });
      const pkg: PackageJson = JSON.parse(content);
      return pkg;
    } else {
      return undefined;
    }
  } catch (e) {
    logger.error("PackageJson Not Found", e);
    return undefined;
  }
};

export const getCurrentPackageJsonSync = (cwd?: string) => {
  try {
    const filePath = pkgUpSync({ cwd });
    logger.debug("getCurrentPackageJson:", filePath);
    if (filePath) {
      const content = fsx.readFileSync(filePath, { encoding: "utf-8" });
      const pkg: PackageJson = JSON.parse(content);
      return pkg;
    } else {
      return undefined;
    }
  } catch (e) {
    logger.error("PackageJson Not Found", e);
    return undefined;
  }
};
