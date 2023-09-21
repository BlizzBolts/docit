import path from "node:path";
import { describe, it } from "vitest";
import fsx from "fs-extra";
import type { TmpDirContext } from "@workspace/test/context/tmp-dir";
import { setupTmpDir } from "@workspace/test/context/tmp-dir";
import { isWritable } from "@/node";

describe.concurrent("node/utils/files", () => {
  describe.concurrent("isWritable", () => {
    setupTmpDir();
    it<TmpDirContext>("should return true when a folder is empty", ({ tmp, expect }) => {
      expect(isWritable(tmp.path)).toBe(true);
      fsx.removeSync(tmp.path);
    });

    it<TmpDirContext>("should return true when folder does not exists", ({ tmp, expect }) => {
      const folderPath = path.resolve(tmp.path, "./does-not-exists");
      expect(isWritable(folderPath)).toBe(true);
      fsx.removeSync(folderPath);
    });

    it<TmpDirContext>("should return false when folder is not empty", ({ tmp, expect }) => {
      fsx.outputFileSync(
        path.resolve(tmp.path, "./a.txt"),
        "Commodo laboris officia laborum aliquip sunt irure ut aliqua.",
      );

      expect(isWritable(tmp.path)).toBe(false);
    });

    it<TmpDirContext>("should return false when folder is not a folder", ({ tmp, expect }) => {
      const filePath = path.resolve(tmp.path, "./a.json");
      fsx.ensureFileSync(filePath);
      expect(isWritable(filePath)).toBe(false);
    });
  });
});
