import type { TmpDirContext } from "@workspace/test/context/tmp-dir";
import { setupTmpDir } from "@workspace/test/context/tmp-dir";
import { describe, it } from "vitest";
import { init } from "../node/init";
import { start } from "../node/start";

describe("node/start", () => {
  setupTmpDir();
  it<TmpDirContext>("should start succesfuly", async ({ expect, r, maker }) => {
    await maker.makePackageJson({ type: "module" });
    await init({
      root: r(),
    });

    const server = await start(r());
    expect(server).toBeTruthy();
    expect(server.listening).toBe(true);
  });
});
