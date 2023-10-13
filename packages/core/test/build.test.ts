import type { TmpDirContext } from "@workspace/test/context/tmp-dir";
import { setupTmpDir } from "@workspace/test/context/tmp-dir";
import { describe, it } from "vitest";
import fsx from "fs-extra";
import { glob } from "glob";
import { resolveConfig } from "@blizzbolts/docit-shared/node";
import { init } from "../node/init";
import { build } from "../node/build";

describe("build", () => {
  setupTmpDir();
  it<TmpDirContext>("should build", async ({ r, maker, expect }) => {
    await maker.makePackageJson({ type: "module" });

    const result = await init({
      root: r(),
      docRoot: r("./docs"),
    });
    expect(result).toBe(true);

    await maker.makeFile(r("./docs/abc.mdx"), `# abc.mdx!`);
    await maker.makeFile(r("./docs/opq.mdx"), `# opq.mdx!`);
    await maker.makeFile(r("./docs/xyz.md"), `# xyz.mdx!`);

    await build(r(), await resolveConfig(r()));

    const contents = await glob("./**/*.html", {
      cwd: r("./docs/dist"),
    });
    expect(contents).toContain("index.html");
    expect(contents).toContain("folder/another.html");
    expect(contents).toContain("abc.html");
    expect(contents).toContain("opq.html");
    expect(contents).toContain("xyz.html");

    expect(await fsx.readFile(r("./docs/dist/abc.html"), "utf-8")).toContain("abc.mdx!");
    expect(await fsx.readFile(r("./docs/dist/opq.html"), "utf-8")).toContain("opq.mdx!");
    expect(await fsx.readFile(r("./docs/dist/xyz.html"), "utf-8")).toContain("xyz.mdx!");
  });
});
