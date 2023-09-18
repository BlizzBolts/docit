import type { PluginOption } from "vite";

export const virtual = (): PluginOption => {
  const cache = new Map<string, string>();
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
