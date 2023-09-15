import { isEmpty } from "lodash-es";
import type { ResolvedUserConfig, SidebarNode } from "../types.js";
import type { Markdown } from "./Markdown.js";

export const resolveSidebars = async (
  config: ResolvedUserConfig,
  markdowns: Markdown[]
) => {
  let result: SidebarNode[] = [];
  if (!isEmpty(config.sidebars)) {
    result = config.sidebars;
  } else {
    const resolveSidebarConfig = async () => {
      const parsed = markdowns.map((o) => {
        return {
          markdown: o,
          transformedPaths: o.relativePath.split("/").filter((o) => o !== ""),
        };
      });
      const root: SidebarNode = {
        title: "ROOT",
        children: [],
      };

      function parse(
        markdowns: { markdown: Markdown; transformedPaths: string[] }[],
        node: SidebarNode
      ): SidebarNode[] {
        const mapper: {
          [key: string]: {
            markdown: Markdown;
            transformedPaths: string[];
          }[];
        } = {};

        markdowns.forEach(({ markdown, transformedPaths }) => {
          if (!transformedPaths[0]) {
            return;
          }
          if (mapper[transformedPaths[0]]) {
            mapper[transformedPaths[0]].push({
              markdown,
              transformedPaths: transformedPaths.slice(1),
            });
          } else {
            mapper[transformedPaths[0]] = [
              {
                markdown,
                transformedPaths: transformedPaths.slice(1),
              },
            ];
          }
        });

        const tmp = Object.entries(mapper).map(([key, value]) => {
          if (value.length === 1 && value[0].transformedPaths.length === 0) {
            return {
              title: value[0].markdown.title,
              path: value[0].markdown.routePath,
            };
          }

          const tmp: SidebarNode = {
            title: key,
            children: [],
          };
          tmp.children = parse(value, tmp);
          return tmp;
        });

        node.children = tmp;
        return tmp;
      }

      return parse(parsed, root);
    };

    result = await resolveSidebarConfig();
  }
  return result;
};
