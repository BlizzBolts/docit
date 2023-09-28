import { describe, it } from "vitest";
import { markdownPathToRoutePath } from "@/index";

const paths = [
  "/@fs/Users/hao/spaces/projj/github.com/BlizzBolts/docit/docs/config/cli-commands.mdx",
  "/@fs/Users/hao/spaces/projj/github.com/BlizzBolts/docit/docs/index.md",
  "/@fs/Users/hao/spaces/projj/github.com/BlizzBolts/docit/docs/config/index.md",
  "/@fs/Users/hao/spaces/projj/github.com/BlizzBolts/docit/docs/ReadMe.md",
];
const docRoot = "/Users/hao/spaces/projj/github.com/BlizzBolts/docit/docs";

describe.concurrent("node/utils", () => {
  describe.concurrent("markdownPathToRoutePath", () => {
    it("parse successfully", async ({ expect }) => {
      const r1 = paths.map((o) => markdownPathToRoutePath(o, docRoot));
      expect(r1).toEqual(["/config/cli-commands", "/", "/config/", "/readme"]);
    });
  });
});
