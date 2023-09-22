import { describe, it } from "vitest";
import { getDirname } from "@/node";

describe("getDirname", () => {
  it("should get correct dirname", ({ expect }) => {
    expect(getDirname(import.meta.url)).toBe(__dirname);
  });
});
