import { logger } from "../logger";
import type { SiteConfig } from "../zod";

export const safeParse = <T = Record<string, unknown>>(json: string): T | undefined => {
  try {
    const content = JSON.parse(json);
    return content as T;
  } catch (e) {
    logger.error(e);
    return undefined;
  }
};

export const makeHtmlHeads = (heads?: SiteConfig["head"]): string => {
  if (!heads) {
    return "";
  }

  const makeAttributes = (props: Record<string, unknown>) => {
    const attributes = Object.entries(props)
      .map(([k, v]) => {
        return `${k}="${v}"`;
      })
      .join(" ");
    return attributes;
  };

  return heads
    .map((o) => {
      if (o.length === 2) {
        const [tagName, props] = o;
        return `<${tagName} ${makeAttributes(props)}/>`;
      } else {
        const [tagName, props, content] = o;
        return `<${tagName} ${makeAttributes(props)}>${content}</${tagName}>`;
      }
    })
    .join("\n");
};
