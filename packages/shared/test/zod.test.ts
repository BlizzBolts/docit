import { describe, it, vi } from "vitest";
import { z } from "zod";
import { isZodError, validateLogger, zPrintErr } from "@/shared";

describe.concurrent("shared/zod", () => {
  describe.concurrent("zod", () => {
    it("isZodError", async ({ expect }) => {
      try {
        const schema = z.object({
          key: z.number(),
        });

        schema.parse({
          key: "a string",
        });
      } catch (e) {
        expect(isZodError(e)).toBe(true);
      }
    });

    it("zPrintErr", async ({ expect }) => {
      const spy = vi.spyOn(validateLogger, "error");
      const schema = z.object({
        key: z.number(),
      });
      try {
        schema.parse({
          key: "a string",
        });
      } catch (e) {
        zPrintErr(e);
      }

      expect(spy).toBeCalledTimes(1);
    });
  });
});
