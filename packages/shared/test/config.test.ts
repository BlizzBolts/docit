import { describe, it, vi } from "vitest";
import fsx from "fs-extra";
import type { TmpDirContext } from "@workspace/test/context/tmp-dir";
import { setupTmpDir } from "@workspace/test/context/tmp-dir";
import { coreLogger } from "../src/shared/logger";
import { findConfigFile, readConfigFromFile, resolveConfig } from "../src/node/config";
import { init } from "../../core/node/init";
import type { DocitConfig } from "@/shared";

describe.concurrent("findConfigFile", () => {
  describe.concurrent("ESM env", () => {
    setupTmpDir({
      before: async ({ r }) => {
        await fsx.outputJson(r("./package.json"), { type: "module" });
      },
      after: async ({ r }) => {
        await fsx.remove(r("./package.json"));
      },
    });

    it<TmpDirContext>("find js", async ({ tmp, r, expect, maker }) => {
      await maker.makeDocitConfigFile(r("./docit.config.js"), {}, "esm");
      const config = await findConfigFile(tmp.path);
      expect(config).toBe("docit.config.js");
    });

    it<TmpDirContext>("find cjs", async ({ tmp, r, expect, maker }) => {
      await maker.makeDocitConfigFile(r("./docit.config.cjs"), {}, "cjs");
      const config = await findConfigFile(tmp.path);
      expect(config).toBe("docit.config.cjs");
    });

    it<TmpDirContext>("find ts", async ({ tmp, r, expect, maker }) => {
      await maker.makeDocitConfigFile(r("./docit.config.ts"), {}, "esm");
      const config = await findConfigFile(tmp.path);
      expect(config).toBe("docit.config.ts");
    });
  });
  describe.concurrent("CJS env", () => {
    setupTmpDir({
      before: async ({ r }) => {
        await fsx.outputJson(r("./package.json"), { type: "commonjs" });
      },
      after: async ({ r }) => {
        await fsx.remove(r("./package.json"));
      },
    });

    it<TmpDirContext>("find js", async ({ tmp, r, expect, maker }) => {
      await maker.makeDocitConfigFile(r("./docit.config.js"), {}, "cjs");
      const config = await findConfigFile(tmp.path);
      expect(config).toBe("docit.config.js");
    });

    it<TmpDirContext>("find mjs", async ({ tmp, r, expect, maker }) => {
      await maker.makeDocitConfigFile(r("./docit.config.mjs"), {}, "esm");
      const config = await findConfigFile(tmp.path);
      expect(config).toBe("docit.config.mjs");
    });

    it<TmpDirContext>("find ts", async ({ tmp, r, expect, maker }) => {
      await maker.makeDocitConfigFile(r("./docit.config.ts"), {}, "esm");
      const config = await findConfigFile(tmp.path);
      expect(config).toBe("docit.config.ts");
    });
  });
});

describe.concurrent("readConfigFromFile", async () => {
  describe.concurrent("general", () => {
    setupTmpDir();
    it<TmpDirContext>("should return null when no config file", async ({ tmp, expect }) => {
      const spy = vi.spyOn(coreLogger, "warn");
      const config = await readConfigFromFile(tmp.path);
      expect(config).toStrictEqual(null);
      expect(spy).toBeCalledTimes(0);
    });
    it<TmpDirContext>("should return null and log when failed to parse config file", async ({
      tmp,
      r,
      expect,
    }) => {
      await fsx.outputFile(r("./docit.config.mjs"), `export default {from: `);
      const spy = vi.spyOn(coreLogger, "warn");
      const config = await readConfigFromFile(tmp.path);
      expect(config).toStrictEqual(null);
      expect(spy).toBeCalledTimes(1);
    });
  });

  describe("parse various format of files", () => {
    describe("ESM env", () => {
      setupTmpDir({
        before: async ({ r }) => {
          await fsx.outputJson(r("./package.json"), { type: "module" });
        },
        after: async ({ r }) => {
          await fsx.remove(r("./package.json"));
        },
      });
      it<TmpDirContext>("parse js", async ({ tmp, r, expect, maker }) => {
        await maker.makeDocitConfigFile(r("./docit.config.js"), { base: "./js" }, "esm");
        const config = await readConfigFromFile(tmp.path);
        expect(config).toStrictEqual({ base: "./js" });
      });
      it<TmpDirContext>("parse cjs", async ({ tmp, r, expect, maker }) => {
        await maker.makeDocitConfigFile(r("./docit.config.cjs"), { base: "./cjs" }, "cjs");
        const config = await readConfigFromFile(tmp.path);
        expect(config).toStrictEqual({ base: "./cjs" });
      });
      it<TmpDirContext>("parse ts", async ({ tmp, r, expect, maker }) => {
        await maker.makeDocitConfigFile(r("./docit.config.ts"), { base: "./ts" }, "esm");
        const config = await readConfigFromFile(tmp.path);
        expect(config).toStrictEqual({ base: "./ts" });
      });
    });
    describe("CJS env", () => {
      setupTmpDir({
        before: async ({ r }) => {
          await fsx.outputJson(r("./package.json"), { type: "commonjs" });
        },
        after: async ({ r }) => {
          await fsx.remove(r("./package.json"));
        },
      });
      it<TmpDirContext>("parse js", async ({ tmp, r, expect, maker }) => {
        await maker.makeDocitConfigFile(r("./docit.config.js"), { base: "./js" }, "cjs");
        const config = await readConfigFromFile(tmp.path);
        expect(config).toStrictEqual({ base: "./js" });
      });
      it<TmpDirContext>("parse mjs", async ({ tmp, r, expect, maker }) => {
        await maker.makeDocitConfigFile(r("./docit.config.cjs"), { base: "./mjs" }, "esm");
        const config = await readConfigFromFile(tmp.path);
        expect(config).toStrictEqual({ base: "./mjs" });
      });
      it<TmpDirContext>("parse ts", async ({ tmp, r, expect, maker }) => {
        await maker.makeDocitConfigFile(r("./docit.config.ts"), { base: "./ts" }, "esm");
        const config = await readConfigFromFile(tmp.path);
        expect(config).toStrictEqual({ base: "./ts" });
      });
    });
  });
});

describe.concurrent("resolveConfig", () => {
  setupTmpDir();
  it<TmpDirContext>("should resolve all path related path", async ({ expect, r }) => {
    await init({
      root: r(),
      docRoot: r("./docs"),
    });

    const config = await resolveConfig(r());

    expect(config).toStrictEqual({
      docRoot: r("./docs"),
      root: r(),
      outDir: r("./docs/dist"),
      server: {
        port: 3000,
      },
    } as DocitConfig);
  });
});
