import { Plugin } from "unified";
import { ResolvedUserConfig } from "../../types.js";

export const debug = (config: ResolvedUserConfig): Plugin => {
  return (ast) => {};
};
