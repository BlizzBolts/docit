import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { Core } from "../../src/node/core/index.js";
import { resolveConfig } from "../../src/node/config.js";
import path from "path";
import { ResolvedUserConfig } from "../../src/node/types.js";

const makeFakeResolvedConfig = (): Promise<ResolvedUserConfig> => {
  return resolveConfig(
    {
      root: path.resolve(process.cwd(), "./docs"),
    },
    "start"
  );
};

describe("core test suite", () => {
  let instance: Core;

  beforeEach(async () => {
    instance = Core.getInstance(await makeFakeResolvedConfig());
    await instance.prepare();
  });

  afterEach(() => {
    instance = null;
  });

  it("Core prepared", async (complete) => {
    console.log(instance.getMarkdowns().length);
    expect(instance.getMarkdowns().length).not.toBe(0);
    complete();
  });

  // it("makes routes correctly", async (complete) => {
  //   expect(instance.makeRoutes()).toMatchSnapshot();
  //   complete();
  // });

  // it("makes sidebars correctly", async (complete) => {
  //   expect(await instance.makeSidebars()).toMatchSnapshot();
  //   complete();
  // });
});
