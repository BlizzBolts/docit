import type { PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import { virtual } from "./virtual";
import type { DocitPluginOption } from "./types";

export const createDocitPlugin = (option: DocitPluginOption): PluginOption[] => {
  const docitPlugin: PluginOption = {
    name: "vite-plugin-docit",
  };

  return [docitPlugin, mdx(), react(), virtual(option)];
};
