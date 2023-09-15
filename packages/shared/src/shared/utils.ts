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
