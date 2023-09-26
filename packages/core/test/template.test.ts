import { setupTmpDir, type TmpDirContext } from "@workspace/test/context/tmp-dir";
import { describe, it } from "vitest";
import fsx from "fs-extra";
import { readConfigFromFile } from "../node/config";
import { makeDocitConfigFile } from "../node/init/template";

describe.concurrent("make correct template file", () => {
  setupTmpDir();
  it<TmpDirContext>("should make correct docit.config file without any config", async ({
    expect,
    r,
    maker,
  }) => {
    await maker.makePackageJson({ type: "module" });
    const result = await makeDocitConfigFile({
      root: r(),
    });

    await fsx.outputFile(result.location, result.content);
    const readConfig = await readConfigFromFile(r());
    expect({
      base: "/",
      docRoot: "./docs",
      outDir: "./docs/dist",
      root: "./",
      site: {},
    }).toEqual(readConfig);
    expect(result.location).toEqual(r(result.location));
  });

  it<TmpDirContext>("should make correct docit.config file", async ({ expect, r, maker }) => {
    await maker.makePackageJson({ type: "module" });
    const result = await makeDocitConfigFile({
      title: "My Site",
      description: "My Site Description",
      root: r(),
    });

    await fsx.outputFile(result.location, result.content);
    const readConfig = await readConfigFromFile(r());
    expect({
      title: "My Site",
      description: "My Site Description",
    }).toEqual(readConfig?.site);
    expect(result.location).toEqual(r(result.location));
  });
});
