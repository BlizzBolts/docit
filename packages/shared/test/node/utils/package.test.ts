// import { getUserPackageJson } from "@/node";
import { describe, expect, it } from "vitest";
import path from "node:path";
import fsx from "fs-extra";
import { getUserPackageJson } from "@/node";

describe("node/utils/package", () => {
  describe("getUserPackage", () => {
    it("read package.json correctly", async () => {
      const tmpDir = path.resolve(process.cwd(), "./tmp");
      fsx.ensureDirSync(tmpDir);

      const userPkgPath = path.resolve(tmpDir, "./package.json");
      fsx.outputFileSync(userPkgPath, `{"name": "a package" }`);

      const pkg = await getUserPackageJson(tmpDir);
      expect(pkg!.name).toBe("a package");
      fsx.removeSync(tmpDir);
    });

    it("should be undefined when has no package.json", async () => {
      const tmpDir = path.resolve(process.cwd(), "./tmp");
      fsx.ensureDirSync(tmpDir);

      const pkg = await getUserPackageJson(tmpDir);
      expect(pkg).toBe(undefined);
      fsx.removeSync(tmpDir);
    });
  });
});
