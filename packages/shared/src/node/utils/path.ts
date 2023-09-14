import path from "node:path";
import url from "node:url";
/**
 * isomorphic __dirname getter
 * usage:
 *   const dirname__ = typeof __dirname === "undefined" ? getDirname(import.meta.url) : __dirname;
 *
 * @param {import.meta.url} importMetaUrl
 * @returns
 */
export const getDirname = (importMetaUrl: string) => {
  return path.dirname(url.fileURLToPath(importMetaUrl));
};
