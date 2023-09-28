import { describe, it, vi } from "vitest";
import fsx from "fs-extra";
import type { TmpDirContext } from "@workspace/test/context/tmp-dir";
import { setupTmpDir } from "@workspace/test/context/tmp-dir";
import { coreLogger } from "../src/shared/logger";
import { findConfigFile, readConfigFromFile, resolveConfig } from "../src/node/config";
import { init } from "../../core/node/init";

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

    it<TmpDirContext>("find js", async ({ tmp, r, expect }) => {
      await fsx.outputFile(r("./docit.config.js"), `export default {from: "js"}`);
      const config = await findConfigFile(tmp.path);
      expect(config).toBe("docit.config.js");
    });

    it<TmpDirContext>("find cjs", async ({ tmp, r, expect }) => {
      await fsx.outputFile(r("./docit.config.cjs"), `export default {from: "js"}`);
      const config = await findConfigFile(tmp.path);
      expect(config).toBe("docit.config.cjs");
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

    it<TmpDirContext>("find js", async ({ tmp, r, expect }) => {
      await fsx.outputFile(r("./docit.config.js"), `module.exports = {from: "js"}`);
      const config = await findConfigFile(tmp.path);
      expect(config).toBe("docit.config.js");
    });

    it<TmpDirContext>("find mjs", async ({ tmp, r, expect }) => {
      await fsx.outputFile(r("./docit.config.mjs"), `export default {from: "js"}`);
      const config = await findConfigFile(tmp.path);
      expect(config).toBe("docit.config.mjs");
    });
  });
});

describe.concurrent("readConfigFromFile", async () => {
  describe.concurrent("general", () => {
    setupTmpDir();
    it<TmpDirContext>("should return null when no config file", async ({ tmp, expect }) => {
      const spy = vi.spyOn(coreLogger, "warn");
      const config = await readConfigFromFile(tmp.path);
      expect(config).toEqual(null);
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
      expect(config).toEqual(null);
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
      it<TmpDirContext>("parse js", async ({ tmp, r, expect }) => {
        await fsx.outputFile(
          r("./docit.config.js"),
          `export default {
            "base": "/",
            "docRoot": "./docs",
            "outDir": "./docit/build",
            "root": "./",
            "site": {
              "description": "Site Description",
              "theme": "default",
              "title": "Vitest",
            },
          }`,
        );
        const config = await readConfigFromFile(tmp.path);
        expect(config).toEqual({
          base: "/",
          docRoot: "./docs",
          outDir: "./docit/build",
          root: "./",
          site: {
            description: "Site Description",
            theme: "default",
            title: "Vitest",
          },
        });
      });
      it<TmpDirContext>("parse cjs", async ({ tmp, r, expect }) => {
        await fsx.outputFile(
          r("./docit.config.cjs"),
          `module.exports = {
            "base": "/",
            "docRoot": "./docs",
            "outDir": "./docit/build",
            "root": "./",
            "site": {
              "description": "Site Description",
              "theme": "default",
              "title": "Vitest",
            },
          }`,
        );
        const config = await readConfigFromFile(tmp.path);
        expect(config).toEqual({
          base: "/",
          docRoot: "./docs",
          outDir: "./docit/build",
          root: "./",
          site: {
            description: "Site Description",
            theme: "default",
            title: "Vitest",
          },
        });
      });

      it.todo<TmpDirContext>("parse ts", async ({ tmp, r, expect }) => {
        // FIXME:
        // await fsx.outputJson(r("./tsconfig.json"), {
        //   compilerOptions: {
        //     module: "ESNext",
        //     target: "ESNext",
        //     moduleResolution: "Node",
        //     resolveJsonModule: true,
        //     esModuleInterop: true,
        //     // stricts
        //     strict: true,
        //     strictNullChecks: true,
        //     skipLibCheck: true,
        //   },
        // });
        await fsx.outputFile(
          r("./docit.config.ts"),
          `export default {
            "base": "/",
            "docRoot": "./docs",
            "outDir": "./docit/build",
            "root": "./",
            "site": {
              "description": "Site Description",
              "theme": "default",
              "title": "Vitest",
            },
          }`,
        );
        const config = await readConfigFromFile(tmp.path);
        expect(config).toEqual({
          base: "/",
          docRoot: "./docs",
          outDir: "./docit/build",
          root: "./",
          site: {
            description: "Site Description",
            theme: "default",
            title: "Vitest",
          },
        });
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

    expect(config.docRoot).toBe(r("./docs"));
    expect(config.root).toBe(r());
    expect(config.outDir).toBe(r("./docs/dist"));
  });
});
