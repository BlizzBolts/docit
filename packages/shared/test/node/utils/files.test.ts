import { describe, it, expect } from "vitest";
import fsx from "fs-extra";
import path from "node:path";
import { isWritable } from "@/node";
describe("node/utils", () => {
  describe("files.ts", () => {
    it("should return true when a folder is empty", () => {
      const folderPath = path.resolve(process.cwd(), "./tmp");
      fsx.ensureDirSync(folderPath);
      expect(isWritable(folderPath)).toBe(true);
      fsx.removeSync(folderPath);
    });

    it("should return true when folder does not exists", () => {
      const folderPath = path.resolve(process.cwd(), "./tmp");
      expect(isWritable(folderPath)).toBe(true);
      fsx.removeSync(folderPath);
    });

    it("should return false when folder is not empty", () => {
      const folderPath = path.resolve(process.cwd(), "./tmp");
      fsx.ensureDirSync(folderPath);

      fsx.outputFileSync(
        path.resolve(folderPath, "./a.txt"),
        "Commodo laboris officia laborum aliquip sunt irure ut aliqua.",
      );

      expect(isWritable(folderPath)).toBe(false);
      fsx.removeSync(folderPath);
    });

    it("should return false when folder is not a folder", () => {
      const folderPath = path.resolve(process.cwd(), "./tmp.txt");
      fsx.ensureFileSync(folderPath);
      expect(isWritable(folderPath)).toBe(false);
      fsx.removeSync(folderPath);
    });
  });
});
