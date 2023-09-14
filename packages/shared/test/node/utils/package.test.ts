import { describe, it, beforeEach, afterEach, expect } from "vitest";
import fs from "fs-extra";
import path from "node:path";
import { getPackageJson, getPackageJsonSync } from "@/node";

const mockedPackageJson = {
  name: "@blizzbolts/docit-shared",
  version: "1.0.0",
  description: "",
  main: "dist/index.js",
  module: "dist/index.mjs",
  types: "dist/index.d.ts",
};

beforeEach(() => {
  fs.ensureFileSync("./tmp/dist/index.mjs");
  fs.writeFileSync("./tmp/package.json", JSON.stringify(mockedPackageJson));
});

afterEach(() => {
  fs.removeSync("./tmp");
});

describe("node/utils/packages.ts", () => {
  it("gets correct package.json in dist folder", async () => {
    const mockDirname = path.resolve("./tmp/dist");
    const pkg = await getPackageJson(mockDirname, "../package.json");
    expect(mockedPackageJson).toEqual(pkg);
  });

  it("gets correct package.json sync in dist folder", async () => {
    const mockDirname = path.resolve("./tmp/dist");
    const pkg = getPackageJsonSync(mockDirname, "../package.json");
    expect(mockedPackageJson).toEqual(pkg);
  });
});
