import { describe, it } from "vitest";
import { markdownPathToRoutePath } from "@/index";

describe.concurrent("node/utils", () => {
  describe.concurrent("markdownPathToRoutePath", () => {
    it("parse successfully", async ({ expect }) => {
      const paths = [
        "../docs/123123/ggg/ssss.mdx",
        "../../docs/index.md",
        "../../docs/test/aaa.mdx",
        "../../docs/test/bbb.mdx",
        "../../../../../../vitejs/vite-plugin-react/docs/index.md",
        "../../../../../../vitejs/vite-plugin-react/docs/ddd/index.md",
      ];

      const results = paths.map((o) => markdownPathToRoutePath(o));

      expect(results).toEqual([
        "/123123/ggg/ssss",
        "/",
        "/test/aaa",
        "/test/bbb",
        "/",
        "/ddd/index",
      ]);
    });
  });
});
