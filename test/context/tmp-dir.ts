import type { DirectoryResult } from "tmp-promise";
import { beforeEach, afterEach } from "vitest";
import { dir } from "tmp-promise";
import fsx from "fs-extra";

export interface TmpDirContext {
  tmp: DirectoryResult;
}

export const setupTmpDir = () => {
  beforeEach<TmpDirContext>(async (context) => {
    const result = await dir();
    context.tmp = result;
  });

  afterEach<TmpDirContext>(async (context) => {
    await fsx.emptyDir(context.tmp.path);
    context.tmp.cleanup();
  });
};
