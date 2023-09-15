import { fileURLToPath } from "url";
import path from "path";

export const getDirName = (importMetaUrl: string) => {
  const filename__ = fileURLToPath(importMetaUrl);
  const dirname__ = path.dirname(filename__);
  return dirname__;
};

/**
 * Remove `.md` or `.mdx` or `.html` extention from the given path. It also converts
 * `index` to slush.
 */
export const removeExtention = (path: string): string => {
  return path.replace(/(\.mdx|\.md)$/g, "");
};

export const resolveAbsPath = (p: string, base = process.cwd()) => {
  if (!p) {
    return null;
  }

  return path.isAbsolute(p) ? p : path.resolve(base, p);
};

export const toRoutePath = (p: string) => {
  const result = removeExtention(p);
  if (result.startsWith("/")) {
    return result;
  } else {
    return `/${result}`;
  }
};
