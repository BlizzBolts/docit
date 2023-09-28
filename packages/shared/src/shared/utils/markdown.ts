export const markdownPathToRoutePath = (absFilePath: string, absDocRoot: string) => {
  let result = absFilePath.replace("/@fs", "").replace(absDocRoot, "");

  if (result.endsWith(".mdx")) {
    result = result.substring(0, result.length - ".mdx".length);
  }
  if (result.endsWith(".md")) {
    result = result.substring(0, result.length - ".md".length);
  }
  if (result.endsWith("/index")) {
    result = result.substring(0, result.length - "index".length);
  }

  return result.toLowerCase();
};
