import { describe, it, vi } from "vitest";
import fsx from "fs-extra";
import { coreLogger } from "@blizzbolts/docit-shared";
import type { TmpDirContext } from "@workspace/test/context/tmp-dir";
import { setupTmpDir } from "@workspace/test/context/tmp-dir";
import { findConfigFile, readConfigFromFile } from "../node/config";

describe.concurrent("config", () => {
  describe.concurrent("readConfigFromFile", async () => {
    setupTmpDir();
    it<TmpDirContext>("should read file successfully by order", async ({ tmp, r, expect }) => {
      await fsx.outputFile(r(".docit/docit.config.js"), `export default {from: "js"}`);
      await fsx.outputFile(r(".docit/docit.config.mjs"), `export default {from: "mjs"}`);

      const config = await findConfigFile(tmp.path);
      expect(config).toEqual(".docit/docit.config.js");
    });

    it<TmpDirContext>("should return empty object when no config file", async ({ tmp, expect }) => {
      const config = await readConfigFromFile(tmp.path);
      const spy = vi.spyOn(coreLogger, "warn");

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
});
