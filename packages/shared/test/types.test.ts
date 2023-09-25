import { describe, it } from "vitest";
import { ZodError } from "zod";
import type { SiteConfig } from "@/shared";
import {
  zSiteConfig,
  type DocitConfig,
  ThemeType,
  zDocitConfig,
  defineConfig,
  defineSiteConfig,
  defineScaffoldOptions,
  zScaffoldOptions,
} from "@/shared";

describe.concurrent("zSiteConfig", () => {
  it("should defineSiteConfig", ({ expect }) => {
    expect(defineSiteConfig({})).toEqual(zSiteConfig.parse({}));
  });
  it("should fill the optional value with default", async ({ expect }) => {
    const initialValue = {
      description: "site description",
      theme: "default",
    };

    const result: SiteConfig = zSiteConfig.parse(initialValue);

    expect(result).toEqual({
      title: "Docit",
      ...initialValue,
    });
  });

  it("should fill everything with default", async ({ expect }) => {
    const initialValue = {};

    const result: SiteConfig = zSiteConfig.parse(initialValue);

    expect(result).toEqual({
      title: "Docit",
      description: "Site Description",
      theme: ThemeType.default,
    });
  });
});

describe.concurrent("zDocitConfig", () => {
  it("should defineConfig", ({ expect }) => {
    expect(defineConfig({})).toEqual(zDocitConfig.parse({}));
  });

  it("full list of docit config", ({ expect }) => {
    const docitConfig: DocitConfig = {
      alias: [{ find: "@", replacement: "src/*" }],
      base: "/",
      docRoot: "./documents",
      outDir: "./docs-dist",
      root: "./",
      site: {
        description: "my description",
        theme: "default",
        title: "Docit",
        head: [["link", { rel: "icon", href: "/favicon.ico" }]],
        socials: [
          {
            icon: "github",
            link: "https://github.com/citrus327",
          },
          {
            icon: "twitter",
            link: "https://twitter.com/_citrus327",
          },
        ],
      },
    };

    expect(zDocitConfig.parse(docitConfig)).toEqual(docitConfig);
  });

  it("should fill everything with default", ({ expect }) => {
    const initialValue = {};

    const result: DocitConfig = zDocitConfig.parse(initialValue);

    expect(result).toEqual({
      root: "./",
      base: "/",
      outDir: "./docs/dist",
      docRoot: "./docs",
      site: {
        title: "Docit",
        description: "Site Description",
        theme: ThemeType.default,
      },
    });
  });

  it("should fill optional with default", ({ expect }) => {
    const initialValue: DocitConfig = {
      docRoot: "./docs",
      site: {
        description: "Site Description",
      },
    };

    const result: DocitConfig = zDocitConfig.parse(initialValue);

    expect(result).toEqual({
      root: "./",
      base: "/",
      outDir: "./docs/dist",
      docRoot: "./docs",
      site: {
        description: "Site Description",
      },
    } as DocitConfig);
  });

  it("should throw error when value is incorrect type", ({ expect }) => {
    try {
      const initialValue = {
        docRoot: 123,
        siteConfig: {
          description: "Site Description",
        },
      };

      zDocitConfig.parse(initialValue);
    } catch (e) {
      expect(e instanceof ZodError).toBe(true);
      if (e instanceof ZodError) {
        expect(e.issues[0].path).toEqual(["docRoot"]);
        expect(e.issues[0].code).toEqual("invalid_type");
      }
    }
  });
});

describe.concurrent("zScaffoldOptions", () => {
  it("should defineScaffoldOptions", ({ expect }) => {
    const expected = zScaffoldOptions.parse({});
    expect(
      defineScaffoldOptions({
        root: "./",
      }),
    ).toEqual(expected);
  });
});
