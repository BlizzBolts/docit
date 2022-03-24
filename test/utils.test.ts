import { assert, describe, it } from "vitest";
import { removeExtention } from "../src/node/utils/index.js";

describe("skipped suite", () => {
  it("removeExtention should remove extensions", () => {
    // Suite skipped, no error
    assert.equal(removeExtention("/aaa.mdx"), "/aaa");
  });
});
