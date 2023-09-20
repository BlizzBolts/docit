/**
 * @param p
 * @returns
 */
export const markdownPathToRoutePath = (p: string) => {
  const pattern = /.*docs\/(.*)(\.md|\.mdx)/;
  const parsed = p.match(pattern)?.[1];

  if (parsed === "index" || parsed === "readme") {
    return "/";
  } else {
    return "/" + parsed;
  }
};
