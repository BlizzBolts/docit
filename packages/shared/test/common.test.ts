import { describe, it, vi } from "vitest";
import type { SiteConfig } from "@/shared";
import { logger, makeHtmlHeads, safeParse } from "@/shared";

describe("common", () => {
  describe("safeParse", () => {
    it("should parse successfully", ({ expect }) => {
      const result = safeParse("{}");
      expect(result).toEqual({});
    });
    it("should return undefined when failed to parse", ({ expect }) => {
      const result = safeParse("{asdasd}");
      expect(result).toEqual(undefined);
    });
    it("should log when failed", ({ expect }) => {
      const spy = vi.spyOn(logger, "error");
      const result = safeParse("{asdasd}");
      expect(result).toEqual(undefined);
      expect(spy).toBeCalledTimes(1);
    });
  });

  describe("head", () => {
    it("should parse head structure to html tags", ({ expect }) => {
      const heads: SiteConfig["head"] = [
        [
          "link",
          {
            rel: "stylesheet",
            href: "https://static-production.npmjs.com/styles.cb65339e823461fa6d91.css",
          },
        ],
        [
          "script",
          {
            type: "module",
          },
          `console.log('user injected')`,
        ],
      ];

      expect(makeHtmlHeads(heads).trim()).toBe(
        [
          `<link rel="stylesheet" href="https://static-production.npmjs.com/styles.cb65339e823461fa6d91.css"/>`,
          `<script type="module">console.log('user injected')</script>`,
        ].join("\n"),
      );
    });
  });
});
