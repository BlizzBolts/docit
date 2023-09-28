import path from "node:path";
import type { DirectoryResult } from "tmp-promise";
import type { TestContext } from "vitest";
import { beforeEach, afterEach } from "vitest";
import { dir } from "tmp-promise";
import fsx from "fs-extra";
import type { PackageJson, TsConfigJson } from "type-fest";

export interface TmpDirContext {
  tmp: DirectoryResult;
  r: (p?: string) => string;
  maker: {
    makePackageJson: (options: PackageJson) => Promise<string>;
    makeTsConfig: (options: TsConfigJson) => Promise<string>;
  };
}

export const setupTmpDir = (options?: {
  before?: (ctx: TestContext & TmpDirContext) => Promise<void>;
  after?: (ctx: TestContext & TmpDirContext) => Promise<void>;
}) => {
  beforeEach<TmpDirContext>(async (context) => {
    const result = await dir();
    context.tmp = result;
    context.r = (p?: string) => (p ? path.resolve(result.path, p) : result.path);
    context.maker = {} as TmpDirContext["maker"];
    context.maker.makePackageJson = async (options) => {
      const filename = context.r("./package.json");
      await fsx.outputJSON(filename, options);
      return filename;
    };
    context.maker.makeTsConfig = async (
      options: TsConfigJson = {
        compilerOptions: {
          module: "ESNext",
          target: "ESNext",
          moduleResolution: "Node",
        },
      },
    ) => {
      const filename = context.r("./tsconfig.json");
      await fsx.outputJSON(filename, options);
      return filename;
    };
    await options?.before?.(context);
  });

  afterEach<TmpDirContext>(async (context) => {
    await fsx.emptyDir(context.tmp.path);
    context.tmp.cleanup();
    context.r = () => "";
    await options?.after?.(context);
  });
};
