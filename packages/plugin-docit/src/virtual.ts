import type { PluginOption } from "vite";
import { scanMarkdowns, type DocitConfig } from "@blizzbolts/docit-shared/node";

const makeExportDefault = (o: Record<string, unknown> | Array<any>) => {
  return `export default ${JSON.stringify(o, null, 2)}`;
};

export const virtual = async (config: DocitConfig): Promise<PluginOption> => {
  const cache = new Map<string, string>();
  cache.set("@docit/config", makeExportDefault(config));
  cache.set(
    "@docit/sidebar",
    makeExportDefault(
      (await scanMarkdowns(config.docRoot!)).map((o) => ({ routePath: o.routePath, name: o.name })),
    ),
  );

  return {
    name: "vite-plugin-docit-virtual",
    configResolved(viteConfig) {
      cache.set("@docit/vite-config", makeExportDefault(viteConfig));
    },
    resolveId(id) {
      if (cache.has(id)) {
        return "\0" + id;
      }
    },

    load(id) {
      if (id.startsWith("\0")) {
        const virtualId = id.replace("\0", "");
        if (cache.has(virtualId)) {
          return cache.get(virtualId);
        }
      }
    },
  };
};
