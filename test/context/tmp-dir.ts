import path from "node:path";
import type { DirectoryResult } from "tmp-promise";
import type { TestContext } from "vitest";
import { beforeEach, afterEach } from "vitest";
import { dir } from "tmp-promise";
import fsx from "fs-extra";
import type { PackageJson, TsConfigJson } from "type-fest";
import type { DocitConfig } from "../../packages/shared/src/shared/zod/docit-config";
import { zDocitConfig } from "../../packages/shared/src/shared/zod/docit-config";

export interface TmpDirContext {
  tmp: DirectoryResult;
  r: (p?: string) => string;
  maker: {
    makePackageJson: (options: PackageJson) => Promise<string>;
    makeTsConfig: (options: TsConfigJson) => Promise<string>;
    makeFile: (p: string, content: string) => Promise<string>;
    makeDocitConfigFile: (
      p: string,
      config: DocitConfig,
      format?: "esm" | "cjs",
    ) => Promise<string>;
  };
}

const makeExportDefault = (o: Record<string, unknown>, format: "esm" | "cjs" = "esm") => {
  if (format === "esm") {
    return `export default ${JSON.stringify(o, null, 2)}`;
  } else {
    return `module.exports =  ${JSON.stringify(o, null, 2)}`;
  }
};

export const setupTmpDir = (options?: {
  before?: (ctx: TestContext & TmpDirContext) => Promise<void>;
  after?: (ctx: TestContext & TmpDirContext) => Promise<void>;
}) => {
  beforeEach<TmpDirContext>(async (context) => {
    const result = await dir();
    context.tmp = result;
    context.r = (p?: string) => (p ? path.resolve(result.path, p) : result.path);
    context.maker = {
      makePackageJson: async (options) => {
        const filename = context.r("./package.json");
        await fsx.outputJSON(filename, options);
        return filename;
      },
      makeTsConfig: async (
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
      },
      makeFile: async (p, content) => {
        await fsx.outputFile(p, content, "utf-8");
        return p;
      },
      makeDocitConfigFile: async (p, config = zDocitConfig.parse({}), format = "esm") => {
        await fsx.outputFile(p, makeExportDefault(config, format));
        return p;
      },
    } as TmpDirContext["maker"];
    await options?.before?.(context);
  });

  afterEach<TmpDirContext>(async (context) => {
    await fsx.emptyDir(context.tmp.path);
    context.tmp.cleanup();
    context.r = () => "";
    await options?.after?.(context);
  });
};
