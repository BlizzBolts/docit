import type { PluginOption } from "vite";
import type { DocitConfig } from "@blizzbolts/docit-shared/node";

const makeExportDefault = (o: Record<string, unknown>) => {
  return `export default ${JSON.stringify(o, null, 2)}`;
};

export const virtual = async (config: DocitConfig): Promise<PluginOption> => {
  const cache = new Map<string, string>();
  cache.set("@docit/config", makeExportDefault(config));

  return {
    name: "vite-plugin-docit-virtual",
    configResolved(config) {
      cache.set("@vite/config", makeExportDefault(config));
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
