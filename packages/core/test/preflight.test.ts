import { describe, it } from "vitest";
import type { TmpDirContext } from "@workspace/test/context/tmp-dir";
import { setupTmpDir } from "@workspace/test/context/tmp-dir";
import { outputJson } from "fs-extra";
import { preFlight } from "../pre-flight";

describe.concurrent("pre-flight", () => {
  setupTmpDir();

  it<TmpDirContext>("package.json", async ({ tmp, r, expect }) => {
    await outputJson(r("./package.json"), {
      type: "module",
    });
    const config = await preFlight(tmp.path);

    expect(config["package.json"]).toEqual({
      type: "module",
    });
    expect(config.esm).toEqual(true);
    expect(config["tsconfig.json"]).toEqual(null);
  });

  it<TmpDirContext>("tsconfig.json", async ({ tmp, r, expect }) => {
    await outputJson(r("./tsconfig.json"), {
      baseUrl: ".",
      paths: {
        "@workspace/*": ["../../../*"],
      },
    });
    const config = await preFlight(tmp.path);

    expect(config["package.json"]).toEqual(undefined);
    expect(config.esm).toEqual(false);
    expect(config["tsconfig.json"]?.data).toEqual({
      baseUrl: ".",
      paths: {
        "@workspace/*": ["../../../*"],
      },
    });
  });
});
