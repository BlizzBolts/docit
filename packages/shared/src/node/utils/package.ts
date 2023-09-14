import fs from "node:fs";
import { promisify } from "node:util";
import path from "node:path";
import type { PackageJson } from "type-fest";

/**
 * __dirname comes from getDirname
 * get package.json file content from __dirname
 * @param {string} __dirname
 * @returns
 */
export const getPackageJsonSync = (__dirname: string): PackageJson => {
  const pkg = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../package.json"), {
      encoding: "utf-8",
    }),
  );

  return pkg;
};

export const getPackageJson = (
  __dirname: string,
  relativePath: string = "./package.json",
): Promise<PackageJson> => {
  return promisify(fs.readFile)(path.resolve(__dirname, relativePath), { encoding: "utf-8" })
    .then((content) => {
      return JSON.parse(content);
    })
    .catch((e) => {
      console.error("cannot find package.json", e);
    });
};
