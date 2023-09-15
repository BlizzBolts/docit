import { describe, it, expect } from "vitest";
import { globSync } from "glob";
import fsx from "fs-extra";
import path from "node:path";

const tmpFolder = path.resolve(process.cwd(), "./tmp");
const r = (p: string) => path.resolve(tmpFolder, p);

describe("config", () => {
  it("should match all posible config file", async () => {
    fsx.ensureDirSync(tmpFolder);

    await fsx.outputFile(r(".docit/docit.config.js"), `export default {}`);
    await fsx.outputFile(r(".docit/docit.config.mjs"), `export default {}`);

    const matches = globSync(".docit/docit.config.{mjs,js,cjs,ts,mts,cts}", {
      cwd: tmpFolder,
    });

    expect(matches.length).toBe(2);
    expect(matches[0]).toBe(".docit/docit.config.mjs");
  });
});
