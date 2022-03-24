import { expect, describe, it } from "vitest";
import path from "path";
import {
  parser,
  parseApi,
  tableMaker,
  parseTreeToMdx,
} from "../../src/node/utils/index.js";
import { ResolvedComponentProps } from "../../src/node/types.js";

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

  it("generates correct table", () => {
    const { t, r, c } = tableMaker;

    const heading = r([
      c("属性"),
      c("类型"),
      c("默认值"),
      c("必填"),
      c("描述"),
    ]);

    const parsed: ResolvedComponentProps[] = parseApi(componentPath);

    const tables = parsed.map((o) => {
      console.log(o.componentName, o.filePath);
      return t([
        heading,
        ...o.props?.map((p) => {
          return r([
            c(p.name || "-"),
            c(p.type || "-"),
            c(p.defaultValue || "-"),
            c(p.isRequired ? "是" : "否"),
            c(p.description || "-"),
          ]);
        }),
      ]);
    });

    expect(
      parseTreeToMdx({
        type: "root",
        children: tables,
      })
    ).toMatchSnapshot();
  });
});
