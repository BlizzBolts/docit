import type { TmpDirContext } from "@workspace/test/context/tmp-dir";
import { setupTmpDir } from "@workspace/test/context/tmp-dir";
import { outputJson } from "fs-extra";
import { afterEach, describe, it, vi } from "vitest";
import { preflightLogger } from "@blizzbolts/docit-shared";
import { getPreflightConfig, preflight } from "../node/preflight";

describe.sequential("preflight", () => {
  setupTmpDir();

  afterEach(() => {
    vi.resetAllMocks();
    vi.restoreAllMocks();
  });

  it<TmpDirContext>("package.json", async ({ tmp, r, expect }) => {
    await outputJson(r("./package.json"), {
      type: "module",
    });
    const config = await preflight(tmp.path);

    expect(config["package.json"]).toEqual({
      type: "module",
    });
    expect(config.isEsm).toEqual(true);
    expect(config["tsconfig.json"]).toEqual(null);
  });

  it<TmpDirContext>("tsconfig.json", async ({ tmp, r, expect }) => {
    await outputJson(r("./tsconfig.json"), {
      baseUrl: ".",
      paths: {
        "@workspace/*": ["../../../*"],
      },
    });
    const config = await preflight(tmp.path);

    expect(config["package.json"]).toEqual(undefined);
    expect(config.isEsm).toEqual(false);
    expect(config["tsconfig.json"]?.data).toEqual({
      baseUrl: ".",
      paths: {
        "@workspace/*": ["../../../*"],
      },
    });
  });

  it.todo<TmpDirContext>(
    "should log for both missing tsconfig.json and package.json",
    async ({ tmp, expect }) => {
      const spy = vi.spyOn(preflightLogger, "debug");
      const config = await preflight(tmp.path);

      expect(config["package.json"]).toEqual(undefined);
      expect(config["tsconfig.json"]?.data).toEqual(undefined);
      expect(spy).toBeCalledTimes(2);
    },
  );

  it.todo<TmpDirContext>(
    "should re-retrieve preflight data when call update ",
    async ({ tmp, expect }) => {
      const spy = vi.fn(preflight);
      const config = await spy(tmp.path);

      await config.update();
      expect(spy.mock.calls.length).toBe(1);
    },
  );

  it<TmpDirContext>("should return cache if already have", async ({ tmp, expect }) => {
    const result = await preflight(tmp.path);
    const sameResult = await getPreflightConfig();
    expect(result === sameResult).toBe(true);
  });

  it.todo<TmpDirContext>(
    "should call preflight if it does not have cache",
    async ({ tmp, r, expect }) => {
      await outputJson(r("./package.json"), {
        type: "module",
      });

      const mod = (await vi.importMock("../node/preflight")) as any;
      const spy = vi.spyOn(mod, "preflight");
      await mod.getPreflightConfig(tmp.path);

      expect(spy).toBeCalled();
    },
  );
});
