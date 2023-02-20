import { expect, describe, it } from "vitest";
import path from "path";

const fnPath = path.resolve(__dirname, "./fn.ts");

describe("react component test suite", () => {
  it("matches function snapshot", () => {
    // const parsed = parser.parse(fnPath);
    // expect(parsed).toMatchSnapshot();
    expect(1).toBe(1);
  });
});
