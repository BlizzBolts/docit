import path from "node:path";
import { describe, it, expect, vi } from "vitest";
import fsx from "fs-extra";
import { coreLogger } from "@blizzbolts/docit-shared";
import { readConfigFromFile } from "@/config";

const tmpFolder = path.resolve(process.cwd(), "./tmp");
const r = (p: string) => path.resolve(tmpFolder, p);

describe("config", () => {
  describe("readConfigFromFile", async () => {
    it("should read file successfully by order", async () => {
      await fsx.ensureDir(tmpFolder);

      await fsx.outputFile(r(".docit/docit.config.js"), `export default {from: "js"}`);
      await fsx.outputFile(r(".docit/docit.config.mjs"), `export default {from: "mjs"}`);

      const config = await readConfigFromFile(tmpFolder);
      expect(config).toEqual({ from: "js" });

      await fsx.remove(tmpFolder);
    });

    it("should return empty object when no config file", async () => {
      await fsx.ensureDir(tmpFolder);
      const config = await readConfigFromFile(tmpFolder);
      const spy = vi.spyOn(coreLogger, "warn");

      expect(config).toEqual({});
      expect(spy).toBeCalledTimes(0);
    });

    it("should return empty object and log when failed to parse config file", async () => {
      await fsx.ensureDir(tmpFolder);
      await fsx.outputFile(r(".docit/docit.config.mjs"), `export default {from: `);
      const spy = vi.spyOn(coreLogger, "warn");
      const config = await readConfigFromFile(tmpFolder);

      expect(config).toEqual({});
      expect(spy).toBeCalledTimes(1);
    });
  });
});
