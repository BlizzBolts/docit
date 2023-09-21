import path from "node:path";
import { describe, it } from "vitest";
import fsx from "fs-extra";
import type { TmpDirContext } from "@workspace/test/context/tmp-dir";
import { setupTmpDir } from "@workspace/test/context/tmp-dir";
import { getUserPackageJson } from "@/node";

describe.concurrent("node/utils/package", () => {
  describe.concurrent("getUserPackage", () => {
    setupTmpDir();
    it<TmpDirContext>("read package.json correctly", async ({ tmp, expect }) => {
      const userPkgPath = path.resolve(tmp.path, "./package.json");
      fsx.outputFileSync(userPkgPath, `{"name": "a package" }`);

      const pkg = await getUserPackageJson(tmp.path);
      expect(pkg!.name).toBe("a package");
    });

    it<TmpDirContext>("should be undefined when has no package.json", async ({ tmp, expect }) => {
      const pkg = await getUserPackageJson(tmp.path);
      expect(pkg).toBe(undefined);
    });
  });
});
