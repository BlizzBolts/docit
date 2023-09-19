/**
 * FIXME:
 * @examples
 * const paths = [
 *   '../docs/123123/ggg/ssss.mdx',
 *   '../../docs/index.md',
 *   '../../docs/test/aaa.mdx',
 *   '../../docs/test/bbb.mdx',
 *   "../../../../../../vitejs/vite-plugin-react/docs/index.md",
 * ];
 * @param p
 * @returns
 */
export const markdownPathToRoutePath = (p: string) => {
  const pattern = /^(?:\.\.\/)+|\/?docs\/?|\.mdx?$/g;
  const parsed = p.replace(pattern, "").toLowerCase();
  if (parsed === "index" || parsed === "readme") {
    return "/";
  } else {
    return "/" + parsed;
  }
};
