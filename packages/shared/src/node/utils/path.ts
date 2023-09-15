import path from "node:path";
import url from "node:url";
/**
 * isomorphic __dirname getter
 *
 * @param {import.meta.url} importMetaUrl
 * @returns
 */
export const getDirname = (importMetaUrl: string) => {
  return path.dirname(url.fileURLToPath(importMetaUrl));
};
