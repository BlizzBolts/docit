export * from "./zod";
export * from "./logger";
export * from "./utils";
export * from "./compat-resolve";

export const isInBrowser = () => {
  return typeof document !== "undefined";
};

export const isInNode = () => {
  return !isInBrowser();
};
