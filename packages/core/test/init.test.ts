import { describe, it, beforeEach, afterEach, expect, vi } from "vitest";
import { init, defaultScaffoldOptions } from "@/init";
import fsx from "fs-extra";
import path from "node:path";
import type { ScaffoldOptions } from "@blizzbolts/docit-shared";
import { DEFAULT_DOCIT_CONFIG_FILE_LOCATION, coreLogger } from "@blizzbolts/docit-shared";

interface TmpDir {
  dir: string;
}

beforeEach<TmpDir>(async (ctx) => {
  const tmpPath = path.resolve(process.cwd(), `./${Date.now()}`);
  await fsx.ensureDir(tmpPath);
  ctx.dir = tmpPath;
});

afterEach<TmpDir>(async (ctx) => {
  await fsx.remove(ctx.dir);
});

describe("init", () => {
  it<TmpDir>("should init successfully", async (ctx) => {
    await init({
      root: ctx.dir,
    });

    expect(
      await fsx.readFile(path.resolve(ctx.dir, DEFAULT_DOCIT_CONFIG_FILE_LOCATION)),
    ).toBeTruthy();
    const mod = await import(path.resolve(ctx.dir, DEFAULT_DOCIT_CONFIG_FILE_LOCATION));
    expect(mod.default.title).toBe(defaultScaffoldOptions.title);
    expect(mod.default.theme).toBe(defaultScaffoldOptions.theme);
    expect(mod.default.description).toBe(defaultScaffoldOptions.description);
  });

  it<TmpDir>("should init correctly with option set", async (ctx) => {
    const options: ScaffoldOptions = {
      root: ctx.dir,
      theme: "my-custom-theme",
      description: "my description",
      title: "my title",
    };

    await init(options);

    expect(
      await fsx.readFile(path.resolve(ctx.dir, DEFAULT_DOCIT_CONFIG_FILE_LOCATION)),
    ).toBeTruthy();
    const mod = await import(path.resolve(ctx.dir, DEFAULT_DOCIT_CONFIG_FILE_LOCATION));

    expect(mod.default.title).toBe(options.title);
    expect(mod.default.theme).toBe(options.theme);
    expect(mod.default.description).toBe(options.description);
  });

  it<TmpDir>("should warn about a non-empty folder", async (ctx) => {
    try {
      const spy = vi.spyOn(coreLogger, "error");
      await fsx.outputFile(
        path.resolve(ctx.dir, DEFAULT_DOCIT_CONFIG_FILE_LOCATION),
        `export default {}`,
      );
      await init({
        root: ctx.dir,
      });
      expect(spy).toBeCalled();
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });
});
