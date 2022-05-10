import { expect, describe, it } from "vitest";
import path from "path";
import { parser, parseApi } from "../../src/node/utils/index.js";

const componentPath = path.resolve(__dirname, "./Button.tsx");

describe("Props And Api Parsing", () => {
  it("matctes raw parsed result", () => {
    const parsed = parser.parse(componentPath);
    expect(parsed).toMatchSnapshot();
  });

  it("parses result", () => {
    const parsed = parseApi(componentPath);
    expect(parsed).toMatchSnapshot();
  });
});
