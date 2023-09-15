import type { Plugin } from "unified";
import type { ResolvedUserConfig } from "../../types.js";

export const debug = (config: ResolvedUserConfig): Plugin => {
  return (ast) => {};
};
