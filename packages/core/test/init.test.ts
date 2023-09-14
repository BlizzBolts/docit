import { describe, it, beforeEach, afterEach, expect } from "vitest";
import { init, defaultScaffoldOptions } from "@/init";
import tmp from "tmp";
import fsx from "fs-extra";
import path from "node:path";
import { DEFAULT_DOCIT_CONFIG_FILE_LOCATION } from "@blizzbolts/docit-shared";

let dir: tmp.DirResult = null!;
beforeEach(() => {
  dir = tmp.dirSync();
});

afterEach(async () => {
  await fsx.emptyDir(dir.name);
  dir.removeCallback();
});

describe("init", () => {
  it("should init successfully", async () => {
    await init({
      root: dir.name,
    });

    expect(
      fsx.readFileSync(path.resolve(dir.name, DEFAULT_DOCIT_CONFIG_FILE_LOCATION)),
    ).toBeTruthy();
    import(path.resolve(dir.name, DEFAULT_DOCIT_CONFIG_FILE_LOCATION)).then((mod) => {
      expect(mod.default.title).toBe(defaultScaffoldOptions.title);
      expect(mod.default.theme).toBe(defaultScaffoldOptions.theme);
      expect(mod.default.description).toBe(defaultScaffoldOptions.description);
    });
  });
});
