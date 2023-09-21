import { ZodError } from "zod";
import { validateLogger } from "./logger";

export const isZodError = (e: unknown | Error) => {
  if (e instanceof ZodError) {
    return true;
  }
};

export const zPrintErr = (e: unknown | Error, ...args: unknown[]) => {
  if (isZodError(e)) {
    validateLogger.error(e, args);
  }
};
