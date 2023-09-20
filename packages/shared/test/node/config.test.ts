import { describe, it, expect } from "vitest";
import { ZodError } from "zod";
import { zDocitConfig, zSiteConfig } from "@/shared/schema/config";
import type { DocitConfig } from "@/shared";
import { ThemeType, type SiteConfig } from "@/shared";

describe("shared/schema", () => {
  describe("zod", () => {
    it("should generate correcly", async () => {
      const initialValue = {
        description: "site description",
        theme: "Default",
        title: "Docit",
      };

      const result: SiteConfig = zSiteConfig.parse(initialValue);

      expect(result).toEqual(initialValue);
    });
  });

  describe("zSiteConfig", () => {
    it("should fill the optional value with default", async () => {
      const initialValue = {
        description: "site description",
        theme: "Default",
      };

      const result: SiteConfig = zSiteConfig.parse(initialValue);

      expect(result).toEqual({
        title: "Docit",
        ...initialValue,
      });
    });

    it("should fill everything with default", async () => {
      const initialValue = {};

      const result: SiteConfig = zSiteConfig.parse(initialValue);

      expect(result).toEqual({
        title: "Docit",
        description: "Site Description",
        theme: ThemeType.Default,
      });
    });
  });

  describe("zDocitConfig", () => {
    it("should fill everything with default", () => {
      const initialValue = {};

      const result: DocitConfig = zDocitConfig.parse(initialValue);

      expect(result).toEqual({
        root: "./",
        docRoot: "./docs",
        siteConfig: {
          title: "Docit",
          description: "Site Description",
          theme: ThemeType.Default,
        },
      });
    });

    it("should fill optional with default", () => {
      const initialValue = {
        docRoot: "./docs",
        siteConfig: {
          description: "Site Description",
        },
      };

      const result: DocitConfig = zDocitConfig.parse(initialValue);

      expect(result).toEqual({
        root: "./",
        docRoot: "./docs",
        siteConfig: {
          title: "Docit",
          description: "Site Description",
          theme: ThemeType.Default,
        },
      });
    });

    it("should throw error when value is incorrect type", () => {
      try {
        const initialValue = {
          docRoot: 123,
          siteConfig: {
            description: "Site Description",
          },
        };

        const result = zDocitConfig.parse(initialValue);

        expect(result).toEqual({
          root: "./",
          docRoot: 123,
          siteConfig: {
            title: "Docit",
            description: "Site Description",
            theme: ThemeType.Default,
          },
        });
      } catch (e) {
        expect(e instanceof ZodError).toBe(true);
        if (e instanceof ZodError) {
          expect(e.issues[0].path).toEqual(["docRoot"]);
          expect(e.issues[0].code).toEqual("invalid_type");
        }
      }
    });
  });
});
