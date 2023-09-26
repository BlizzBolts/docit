import path from "node:path";
import type { TmpDirContext } from "@workspace/test/context/tmp-dir";
import { setupTmpDir } from "@workspace/test/context/tmp-dir";
import { describe, it, vi } from "vitest";
import fsx from "fs-extra";
import { readConfigFromFile } from "node/config";
import { coreLogger } from "@blizzbolts/docit-shared";
import { init } from "../node/init";

describe.concurrent("init", () => {
  setupTmpDir();

  it<TmpDirContext>("should init successfully", async ({ r, expect, maker }) => {
    await maker.makePackageJson({ type: "module", name: "my-package" });

    const result = await init({
      root: r(),
      title: "My Blog Title",
      description: "My description title",
    });

    expect(result).toBe(true);
    const config = await readConfigFromFile(r());
    expect(config.site?.title).toBe("My Blog Title");
    expect(config.site?.description).toBe("My description title");

    const content = await fsx.readFile(r("./docs/index.mdx"), "utf-8");
    expect(content).toBeTruthy();
  });

  it<TmpDirContext>("should warn about a non-empty folder", async ({ r, expect, maker }) => {
    await maker.makePackageJson({ type: "module", name: "my-package" });
    await fsx.outputFile(r("./docs/test.md"), `# Test Markdown`);

    let result = true;
    try {
      const spy = vi.spyOn(coreLogger, "error");
      result = await init({
        root: r(),
      });
      expect(spy).toBeCalled();
    } catch (e) {
      expect(e).toBeTruthy();
    } finally {
      expect(result).toBe(false);
    }
  });
});
