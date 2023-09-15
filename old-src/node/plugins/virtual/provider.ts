import type { PluginOption } from "vite";
import type { ResolvedUserConfig } from "../../types.js";

const virtualProvider = (config: ResolvedUserConfig): PluginOption => {
  return {
    name: "virtual:vite-plugin-virtual/virtual:provider",
    resolveId(id) {
      if (id === "virtual:provider") {
        return config.providerPath;
      }
    },
  };
};

export { virtualProvider };
