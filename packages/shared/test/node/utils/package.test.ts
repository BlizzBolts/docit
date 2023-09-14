import { describe, it, beforeEach, afterEach, expect } from "vitest";
import fs from "fs-extra";
import path from "node:path";
import { getCurrentPackageJson, getCurrentPackageJsonSync } from "@/node";
import tmp from "tmp";

const mockedPackageJson = {
  name: "@blizzbolts/docit-shared",
  version: "1.0.0",
  description: "",
  main: "dist/index.js",
  module: "dist/index.mjs",
  types: "dist/index.d.ts",
};

let dir: tmp.DirResult = null!;
beforeEach(() => {
  dir = tmp.dirSync();
  fs.ensureFileSync(path.resolve(dir.name, "./tmp/dist/index.mjs"));
  fs.writeFileSync(path.resolve(dir.name, "./tmp/package.json"), JSON.stringify(mockedPackageJson));
});

afterEach(() => {
  fs.removeSync(path.resolve(dir.name, "./tmp"));
  dir.removeCallback();
});

describe("node/utils/packages.ts", () => {
  it("gets correct package.json in dist folder", async () => {
    const cwd = path.resolve(dir.name, "./tmp/dist");
    const pkg = await getCurrentPackageJson(cwd);
    expect(mockedPackageJson).toEqual(pkg);
  });

  it("gets correct package.json sync in dist folder", async () => {
    const cwd = path.resolve(dir.name, "./tmp/dist");
    const pkg = getCurrentPackageJsonSync(cwd);
    expect(mockedPackageJson).toEqual(pkg);
  });
});
