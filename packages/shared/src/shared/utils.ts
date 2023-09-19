import { logger } from "./logger";

export const safeParse = <T = Record<string, unknown>>(json: string): T | undefined => {
  try {
    const content = JSON.parse(json);
    return content as T;
  } catch (e) {
    logger.debug(e);
    return undefined;
  }
};

export const markdownPathToRoutePath = (p: string) => {
  const pattern = /^(?:\.\.\/)+|\/?docs\/?|\.mdx?$/g;
  const parsed = p.replace(pattern, "").toLowerCase();
  if (parsed === "index" || parsed === "readme") {
    return "/";
  } else {
    return "/" + parsed;
  }
};
