import path from "node:path";
import type { DirectoryResult } from "tmp-promise";
import type { TestContext } from "vitest";
import { beforeEach, afterEach } from "vitest";
import { dir } from "tmp-promise";
import fsx from "fs-extra";
import type { PreflightCache } from "../../packages/core/node/pre-flight";
import { preFlight, resetPreflightConfig } from "../../packages/core/node/pre-flight";

export interface TmpDirContext {
  tmp: DirectoryResult;
  r: (p: string) => string;
  preflight: PreflightCache;
}

export const setupTmpDir = (options?: {
  before?: (ctx: TestContext & TmpDirContext) => Promise<void>;
  after?: (ctx: TestContext & TmpDirContext) => Promise<void>;
  preflight?: boolean;
}) => {
  beforeEach<TmpDirContext>(async (context) => {
    const result = await dir();
    context.tmp = result;
    context.r = (p: string) => path.resolve(result.path, p);
    await options?.before?.(context);
    if (options?.preflight) {
      context.preflight = await preFlight(result.path);
    }
  });

  afterEach<TmpDirContext>(async (context) => {
    await fsx.emptyDir(context.tmp.path);
    context.tmp.cleanup();
    context.r = () => "";
    await options?.after?.(context);
    if (options?.preflight) {
      resetPreflightConfig();
    }
  });
};
