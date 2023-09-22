import { describe, it, vi } from "vitest";
import { logger, safeParse } from "@/shared";

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
});
