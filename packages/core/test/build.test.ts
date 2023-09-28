import type { TmpDirContext } from "@workspace/test/context/tmp-dir";
import { setupTmpDir } from "@workspace/test/context/tmp-dir";
import { describe, it } from "vitest";
import fsx from "fs-extra";
import { init } from "../node/init";
import { build } from "../node/build";

describe("build", () => {
  setupTmpDir();
  // Rollup failed to resolve import "react/jsx-runtime" from "/private/var/folders/75/tx2cn3_j62gc2h8hmbg9b84w0000gp/T/tmp-72917-3YOM0QtCU3aq/docs/index.mdx".
  it.todo<TmpDirContext>("should build", async ({ r, maker, expect }) => {
    await maker.makePackageJson({ type: "module" });
    const result = await init({
      root: r(),
      docRoot: r("./docs"),
    });
    expect(result).toBe(true);

    await build(r());

    const contents = await fsx.readdir(r("./docs/dist"));
    console.log(contents);
    expect(contents).toBeTruthy();
  });
  // it<TmpDirContext>("should build", async ({ r, maker, expect }) => {
  //   await maker.makePackageJson({ type: "commonjs" });
  //   const result = await init({
  //     root: r(),
  //   });
  //   expect(result).toBe(true);

  //   await build(r());

  //   const contents = await fsx.readdir(r("./docs/dist"));
  //   expect(contents).toBeTruthy();
  // });
});
