import { describe, it, vi } from "vitest";
import fsx from "fs-extra";
import { coreLogger } from "@blizzbolts/docit-shared";
import type { TmpDirContext } from "@workspace/test/context/tmp-dir";
import { setupTmpDir } from "@workspace/test/context/tmp-dir";
import { findConfigFile, readConfigFromFile } from "../node/config";

describe.concurrent("findConfigFile", () => {
  describe.sequential("ESM env", () => {
    setupTmpDir({
      before: async ({ r }) => {
        await fsx.outputJson(r("./package.json"), { type: "module" });
      },
      after: async ({ r }) => {
        await fsx.remove(r("./package.json"));
      },
      preflight: true,
    });

    it<TmpDirContext>("find js", async ({ tmp, r, expect, preflight }) => {
      await fsx.outputFile(r(".docit/docit.config.js"), `export default {from: "js"}`);
      const config = await findConfigFile(tmp.path, { isEsm: preflight.isEsm });
      expect(config).toBe(".docit/docit.config.js");
    });

    it<TmpDirContext>("find ts", async ({ tmp, r, expect, preflight }) => {
      await fsx.outputFile(r(".docit/docit.config.ts"), `export default {from: "js"}`);
      const config = await findConfigFile(tmp.path, { isEsm: preflight.isEsm });
      expect(config).toBe(".docit/docit.config.ts");
    });

    it<TmpDirContext>("find cjs", async ({ tmp, r, expect, preflight }) => {
      await fsx.outputFile(r(".docit/docit.config.cjs"), `export default {from: "js"}`);
      const config = await findConfigFile(tmp.path, { isEsm: preflight.isEsm });
      expect(config).toBe(".docit/docit.config.cjs");
    });

    it<TmpDirContext>("should not find mjs", async ({ tmp, r, expect, preflight }) => {
      await fsx.outputFile(r(".docit/docit.config.mjs"), `export default {from: "js"}`);
      const config = await findConfigFile(tmp.path, { isEsm: preflight.isEsm });
      expect(config).toBe(null);
    });
  });
  describe.sequential("CJS env", () => {
    setupTmpDir({
      before: async ({ r }) => {
        await fsx.outputJson(r("./package.json"), { type: "commonjs" });
      },
      after: async ({ r }) => {
        await fsx.remove(r("./package.json"));
      },
      preflight: true,
    });

    it<TmpDirContext>("find js", async ({ tmp, r, expect, preflight }) => {
      await fsx.outputFile(r(".docit/docit.config.js"), `module.exports = {from: "js"}`);
      const config = await findConfigFile(tmp.path, { isEsm: preflight.isEsm });
      expect(config).toBe(".docit/docit.config.js");
    });

    it<TmpDirContext>("find ts", async ({ tmp, r, expect, preflight }) => {
      await fsx.outputFile(r(".docit/docit.config.ts"), `export default {from: "js"}`);
      const config = await findConfigFile(tmp.path, { isEsm: preflight.isEsm });
      expect(config).toBe(".docit/docit.config.ts");
    });

    it<TmpDirContext>("find mjs", async ({ tmp, r, expect, preflight }) => {
      await fsx.outputFile(r(".docit/docit.config.mjs"), `export default {from: "js"}`);
      const config = await findConfigFile(tmp.path, { isEsm: preflight.isEsm });
      expect(config).toBe(".docit/docit.config.mjs");
    });

    it<TmpDirContext>("should not find cjs", async ({ tmp, r, expect, preflight }) => {
      await fsx.outputFile(r(".docit/docit.config.cjs"), `export default {from: "js"}`);
      const config = await findConfigFile(tmp.path, { isEsm: preflight.isEsm });
      expect(config).toBe(null);
    });
  });
});

describe.concurrent("readConfigFromFile", async () => {
  describe.concurrent("general", () => {
    setupTmpDir();
    it<TmpDirContext>("should return empty object when no config file", async ({ tmp, expect }) => {
      const spy = vi.spyOn(coreLogger, "warn");
      const config = await readConfigFromFile(tmp.path);
      expect(config).toEqual({});
      expect(spy).toBeCalledTimes(0);
    });
    it<TmpDirContext>("should return empty object and log when failed to parse config file", async ({
      tmp,
      r,
      expect,
    }) => {
      await fsx.outputFile(r(".docit/docit.config.mjs"), `export default {from: `);
      const spy = vi.spyOn(coreLogger, "warn");
      const config = await readConfigFromFile(tmp.path);
      expect(config).toEqual({});
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
        preflight: true,
      });
      it<TmpDirContext>("parse js", async ({ tmp, r, expect, preflight }) => {
        await fsx.outputFile(
          r(".docit/docit.config.js"),
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
        const config = await readConfigFromFile(tmp.path, { isEsm: preflight.isEsm });
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
      it<TmpDirContext>("parse cjs", async ({ tmp, r, expect, preflight }) => {
        await fsx.outputFile(
          r(".docit/docit.config.cjs"),
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
        const config = await readConfigFromFile(tmp.path, { isEsm: preflight.isEsm });
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

      // it<TmpDirContext>("parse ts", async ({ tmp, r, expect, preflight }) => {
      //   // FIXME:
      //   // await fsx.outputJson(r("./tsconfig.json"), {
      //   //   compilerOptions: {
      //   //     module: "ESNext",
      //   //     target: "ESNext",
      //   //     moduleResolution: "Node",
      //   //     resolveJsonModule: true,
      //   //     esModuleInterop: true,
      //   //     // stricts
      //   //     strict: true,
      //   //     strictNullChecks: true,
      //   //     skipLibCheck: true,
      //   //   },
      //   // });
      //   await fsx.outputFile(
      //     r(".docit/docit.config.ts"),
      //     `module.exports = {
      //       "base": "/",
      //       "docRoot": "./docs",
      //       "outDir": "./docit/build",
      //       "root": "./",
      //       "site": {
      //         "description": "Site Description",
      //         "theme": "default",
      //         "title": "Vitest",
      //       },
      //     }`,
      //   );
      //   const config = await readConfigFromFile(tmp.path, { isEsm: preflight.isEsm });
      //   expect(config).toEqual({
      //     base: "/",
      //     docRoot: "./docs",
      //     outDir: "./docit/build",
      //     root: "./",
      //     site: {
      //       description: "Site Description",
      //       theme: "default",
      //       title: "Vitest",
      //     },
      //   });
      // });
    });
  });
});
