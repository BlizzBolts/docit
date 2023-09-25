import path from "node:path";
import type { TmpDirContext } from "@workspace/test/context/tmp-dir";
import { setupTmpDir } from "@workspace/test/context/tmp-dir";
import { describe, it } from "vitest";
import fsx from "fs-extra";
import { readConfigFromFile } from "node/config";
import { init } from "../node/init";

describe.concurrent("init", () => {
  setupTmpDir();

  it<TmpDirContext>("should init successfully", async ({ r, expect, maker }) => {
    await maker.makePackageJson({ type: "module", name: "my-package" });
    await init({
      root: r(),
      title: "My Blog Title",
      description: "My description title",
    });

    const config = await readConfigFromFile(r());
    expect(config.site?.title).toBe("My Blog Title");
    expect(config.site?.description).toBe("My description title");

    const content = await fsx.readFile(r("./docs/index.mdx"), "utf-8");
    expect(content).toBeTruthy();
  });

  // it<TmpDirContext>("should init correctly with option set", async ({ tmp, expect }) => {
  //   const options: ScaffoldOptions = {
  //     root: tmp.path,
  //     description: "my description",
  //     title: "my title",
  //   };

  //   await init(options);

  //   const mod = await import(path.resolve(tmp.path, DEFAULT_DOCIT_CONFIG_FILE_LOCATION));

  //   expect(mod.default.title).toBe(options.title);
  //   expect(mod.default.description).toBe(options.description);
  // });

  // it<TmpDirContext>("should warn about a non-empty folder", async ({ tmp, expect }) => {
  //   try {
  //     const spy = vi.spyOn(coreLogger, "error");
  //     await fsx.outputFile(
  //       path.resolve(tmp.path, DEFAULT_DOCIT_CONFIG_FILE_LOCATION),
  //       `export default {}`,
  //     );
  //     await init({
  //       root: tmp.path,
  //     });
  //     expect(spy).toBeCalled();
  //   } catch (e) {
  //     expect(e).toBeTruthy();
  //   }
  // });

  // it<TmpDirContext>("should init correctly with option set", async ({ tmp, expect }) => {
  //   await fsx.outputFile(path.resolve(tmp.path, "./package.json"), `{ "type": "module"}`);
  //   await init({ root: tmp.path });
  //   const files = fsx.readdirSync(path.resolve(tmp.path, ".docit"));
  //   expect(files).toContain("docit.config.js");
  // });
});
