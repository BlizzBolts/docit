import { describe, it } from "vitest";
import fsx from "fs-extra";
import type { TmpDirContext } from "@workspace/test/context/tmp-dir";
import { setupTmpDir } from "@workspace/test/context/tmp-dir";
import { isFileReadable, isWritable } from "@/node";

describe("node/utils/files", () => {
  describe("isWritable", () => {
    setupTmpDir();
    it<TmpDirContext>("should return true when a folder is empty", ({ tmp, expect }) => {
      expect(isWritable(tmp.path)).toBe(true);
    });

    it<TmpDirContext>("should return true when folder does not exists", ({ r, expect }) => {
      const folderPath = r("./does-not-exists");
      expect(isWritable(folderPath)).toBe(true);
    });

    it<TmpDirContext>("should return false when folder is not empty", ({ tmp, r, expect }) => {
      fsx.outputFileSync(
        r("./a.json"),
        "Commodo laboris officia laborum aliquip sunt irure ut aliqua.",
      );
      expect(isWritable(tmp.path)).toBe(false);
    });

    it<TmpDirContext>("should return false when folder is not a folder", ({ r, expect }) => {
      const filePath = r("./a.json");
      fsx.ensureFileSync(filePath);
      expect(isWritable(filePath)).toBe(false);
    });
  });

  describe("isFileReadable", () => {
    setupTmpDir();
    it<TmpDirContext>("should return true when a file is readabe", async ({ expect, maker }) => {
      const filePath = await maker.makePackageJson({ type: "module" });
      expect(isFileReadable(filePath)).toBe(true);
    });

    it<TmpDirContext>("should return true when a file is not exists", async ({ expect, r }) => {
      const fakeFilePath = r("./package.json");
      expect(isFileReadable(fakeFilePath)).toBe(false);
    });

    it<TmpDirContext>("should return true when a file is actually a folder", async ({
      expect,
      r,
    }) => {
      expect(isFileReadable(r())).toBe(false);
    });
  });
});
