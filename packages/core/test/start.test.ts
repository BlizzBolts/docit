import type { AddressInfo } from "net";
import type { TmpDirContext } from "@workspace/test/context/tmp-dir";
import { setupTmpDir } from "@workspace/test/context/tmp-dir";
import { describe, it } from "vitest";
import { resolveConfig } from "@blizzbolts/docit-shared/node";
import { init } from "../node/init";
import { start } from "../node/start";

describe("node/start", () => {
  setupTmpDir();
  it<TmpDirContext>("should start and shut down succesfuly", async ({ expect, r, maker }) => {
    await maker.makePackageJson({ type: "module" });
    await init({
      root: r(),
      docRoot: r("./docs"),
    });
    const config = await resolveConfig(r());

    const { server, shutDown } = await start(r(), config);

    expect(server).toBeTruthy();
    expect(server.listening).toBe(true);
    await shutDown();
    expect(server.listening).toBe(false);
  });

  it<TmpDirContext>("should start with correct port", async ({ expect, r, maker }) => {
    await maker.makePackageJson({ type: "module" });
    await init({
      root: r(),
      docRoot: r("./docs"),
    });

    const config = await resolveConfig(r());
    const { server, shutDown } = await start(r(), {
      ...config,
      server: {
        ...(config.server || {}),
        port: 3500,
      },
    });

    expect(server).toBeTruthy();
    expect(server.listening).toBe(true);
    const address = server.address() as AddressInfo;
    expect(address.port).toBe(3500);

    await shutDown();

    expect(server.listening).toBe(false);
  });
});
