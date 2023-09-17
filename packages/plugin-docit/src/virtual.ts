import type { PluginOption } from "vite";
import { logger } from "@blizzbolts/docit-shared";
import type { DocitPluginOption } from "./types";

export const virtual = (option: DocitPluginOption): PluginOption => {
  const cache = new Map<string, string>();
  logger.withTag("virtual").info(option);
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
