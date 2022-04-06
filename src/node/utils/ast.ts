import { Root, Table, TableRow, TableCell } from "mdast";
import { Node } from "unist";
import { DepsMapper, DepsItem } from "../types.js";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toMarkdown } from "mdast-util-to-markdown";
import { mdxjs } from "micromark-extension-mdxjs";
import { mdxFromMarkdown, mdxToMarkdown } from "mdast-util-mdx";
import { gfmTableFromMarkdown, gfmTableToMarkdown } from "mdast-util-gfm-table";
import {
  Program,
  ImportDefaultSpecifier,
  ImportNamespaceSpecifier,
  ImportSpecifier,
  ImportDeclaration,
} from "estree";
import { walk } from "estree-walker";
import { visit } from "unist-util-visit";

export const parseMdxToTree = (s: string) => {
  const tree = fromMarkdown(s, {
    extensions: [mdxjs()],
    mdastExtensions: [mdxFromMarkdown, gfmTableFromMarkdown],
  });
  return tree;
};

export const parseTreeToMdx = (ast: Root) => {
  const out = toMarkdown(ast, {
    extensions: [mdxToMarkdown, gfmTableToMarkdown()],
  });
  return out;
};

export const codeBlockAnalyze = (code: string) => {
  const ast = parseMdxToTree(code);
  const depsMapper = getImportMap(ast);
  const executable = getExecutable(ast);

  return {
    depsMapper,
    executable,
  };
};

export const getImportStatements = (ast: Root): string => {
  const out = toMarkdown(
    {
      ...ast,
      children: ast.children.filter((o) => (o as Node).type === "mdxjsEsm"),
    },
    { extensions: [mdxToMarkdown] }
  );

  return out;
};

export const getExecutable = (ast: Root): string => {
  const out = toMarkdown(
    {
      ...ast,
      children: ast.children.filter((o) => (o as Node).type !== "mdxjsEsm"),
    },
    { extensions: [mdxToMarkdown] }
  );

  return `${out.replace(/;/g, "")}`;
};

export const getImportMap = (ast: Root): DepsMapper => {
  let importDeclarations = [];
  let depsMapper: DepsMapper = new Map();
  ast.children
    .filter((o) => (o as Node).type === "mdxjsEsm")
    .map((o) => o.data.estree)
    .forEach((o: Program) =>
      walk(o, {
        enter: (node: ImportDeclaration) => {
          if (node.type === "ImportDeclaration") {
            const path = node.source.value as string;
            const result: DepsItem = new Map();
            result.set("default", result.get("default") || null);
            result.set("nonDefault", result.get("nonDefault") || new Set());
            result.set("namespace", result.get("namespace") || null);
            depsMapper.set(path, result);

            importDeclarations.push(node);
          }
        },
      })
    );

  importDeclarations.forEach((o) => {
    walk(o, {
      enter: (
        node:
          | ImportDefaultSpecifier
          | ImportNamespaceSpecifier
          | ImportSpecifier,
        parent: ImportDeclaration
      ) => {
        if (node?.type === "ImportDefaultSpecifier") {
          const path = parent.source.value as string;
          const name = node.local.name;

          const target = depsMapper.get(path);
          target.set("default", name);
        }

        if (node?.type === "ImportSpecifier") {
          const path = parent.source.value as string;
          const name = node.local.name;
          const target = depsMapper.get(path);
          (target.get("nonDefault") as Set<string>).add(name);
        }

        if (node?.type === "ImportNamespaceSpecifier") {
          const path = parent.source.value as string;
          const name = node.local.name;

          const target = depsMapper.get(path);
          target.set("namespace", name);
        }
      },
    });
  });

  return depsMapper;
};

export const tableMaker = {
  t: (rows: TableRow[]): Table => {
    return {
      type: "table",
      children: rows,
    };
  },
  r: (cells: TableCell[]): TableRow => {
    return {
      type: "tableRow",
      children: cells,
    };
  },
  c: (value: string): TableCell => {
    return {
      type: "tableCell",
      children: [{ type: "text", value: value }],
    };
  },
};

export const parseToc = (node, current) => {
  if (!node) {
    return {};
  } else if (node.type === `paragraph`) {
    visit(node, (item) => {
      if (item.type === `link`) {
        current.url = item.url;
      }
      if (item.type === `text`) {
        current.title = item.value;
      }
    });
    return current;
  } else {
    if (node.type === `list`) {
      current.items = node.children.map((i) => parseToc(i, {}));
      return current;
    } else if (node.type === `listItem`) {
      const heading = parseToc(node.children[0], {});
      if (node.children.length > 1) {
        parseToc(node.children[1], heading);
      }
      return heading;
    }
  }
  return {};
};
