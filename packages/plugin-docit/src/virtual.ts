import type { PluginOption } from "vite";
import { resolveConfig } from "@blizzbolts/docit-shared/node";

const makeExportDefault = (o: Record<string, unknown>) => {
  return `export default ${JSON.stringify(o, null, 2)}`;
};

export const virtual = async (cwd: string): Promise<PluginOption> => {
  const cache = new Map<string, string>();
  const config = await resolveConfig(cwd);

  cache.set("@docit/config", makeExportDefault(config));

  return {
    name: "vite-plugin-docit-virtual",
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
