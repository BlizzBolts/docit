import { describe, it } from "vitest";
import fsx from "fs-extra";
import type { TmpDirContext } from "../../../../../test/context/tmp-dir";
import { setupTmpDir } from "../../../../../test/context/tmp-dir";
import { isWritable } from "@/node";

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
});
