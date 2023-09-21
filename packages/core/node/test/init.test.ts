import path from "node:path";
import fsx from "fs-extra";
import { describe, it, vi } from "vitest";
import type { ScaffoldOptions } from "@blizzbolts/docit-shared";
import { DEFAULT_DOCIT_CONFIG_FILE_LOCATION, coreLogger } from "@blizzbolts/docit-shared";
import type { TmpDirContext } from "@workspace/test/context/tmp-dir";
import { setupTmpDir } from "@workspace/test/context/tmp-dir";
import { init, defaultScaffoldOptions } from "../../build/node";

describe.concurrent("init", () => {
  setupTmpDir();
  it<TmpDirContext>("should init successfully", async ({ tmp, expect }) => {
    await init({
      root: tmp.path,
    });

    expect(
      await fsx.readFile(path.resolve(tmp.path, DEFAULT_DOCIT_CONFIG_FILE_LOCATION)),
    ).toBeTruthy();
    const mod = await import(path.resolve(tmp.path, DEFAULT_DOCIT_CONFIG_FILE_LOCATION));
    expect(mod.default.title).toBe(defaultScaffoldOptions.title);
    expect(mod.default.description).toBe(defaultScaffoldOptions.description);
  });

  it<TmpDirContext>("should init correctly with option set", async ({ tmp, expect }) => {
    const options: ScaffoldOptions = {
      root: tmp.path,
      description: "my description",
      title: "my title",
    };

    await init(options);

    expect(
      await fsx.readFile(path.resolve(tmp.path, DEFAULT_DOCIT_CONFIG_FILE_LOCATION)),
    ).toBeTruthy();
    const mod = await import(path.resolve(tmp.path, DEFAULT_DOCIT_CONFIG_FILE_LOCATION));

    expect(mod.default.title).toBe(options.title);
    expect(mod.default.description).toBe(options.description);
  });

  it<TmpDirContext>("should warn about a non-empty folder", async ({ tmp, expect }) => {
    try {
      const spy = vi.spyOn(coreLogger, "error");
      await fsx.outputFile(
        path.resolve(tmp.path, DEFAULT_DOCIT_CONFIG_FILE_LOCATION),
        `export default {}`,
      );
      await init({
        root: tmp.path,
      });
      expect(spy).toBeCalled();
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });

  it<TmpDirContext>("should init correctly with option set", async ({ tmp, expect }) => {
    await fsx.outputFile(path.resolve(tmp.path, "./package.json"), `{ "type": "module"}`);
    await init({ root: tmp.path });
    const files = fsx.readdirSync(path.resolve(tmp.path, ".docit"));
    expect(files).toContain("docit.config.js");
  });
});
