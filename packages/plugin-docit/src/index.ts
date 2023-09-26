import type { PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import { virtual } from "./virtual";

export const createDocitPlugin = async (cwd: string): Promise<PluginOption[]> => {
  const docitPlugin: PluginOption = {
    name: "vite-plugin-docit",
  };

  return [docitPlugin, mdx(), react(), await virtual(cwd)];
};
