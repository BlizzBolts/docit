import { assert, describe, it } from "vitest";
import { removeExtention } from "../src/node/utils/index.js";
import resolve from "resolve";
import path from "path";
const { sync } = resolve;

describe("skipped suite", () => {
  it("removeExtention should remove extensions", () => {
    // Suite skipped, no error
    assert.equal(removeExtention("/aaa.mdx"), "/aaa");
  });

  it("resolve correct path", () => {
    const suite = "../components/ApiTest.tsx";
    const baseDir =
      "/Users/hao/local/projj/github.com/phshy0607/docit/docs/features/API.mdx";

    assert(
      sync(suite, {
        basedir: path.dirname(baseDir),
      }),
      "/Users/hao/local/projj/github.com/phshy0607/docit/docs/components/ApiTest.tsx"
    );
  });

  it("resolve correct path for node_modules", () => {
    const suite = "antd-mobile/es/index.d.ts";
    const baseDir =
      "/Users/hao/local/projj/github.com/phshy0607/docit/docs/features/API.mdx";

    const result = sync(suite, {
      basedir: path.dirname(baseDir),
    });

    console.log(result);
    assert(
      result,
      "/Users/hao/local/projj/github.com/phshy0607/docit/docs/components/ApiTest.tsx"
    );
  });
});
