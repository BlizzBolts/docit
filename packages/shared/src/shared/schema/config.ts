import { z } from "zod";

export const zThemeType = z.enum(["Default"]);
export const zSocialEnum = z.enum(["github", "twitter"]);

export const zSiteConfig = z.object({
  title: z.string().optional().default("Docit"),
  description: z.string().optional().default("Site Description"),
  theme: z.nativeEnum(zThemeType.Enum).optional().default(zThemeType.Enum.Default),
  socials: z.array(zSocialEnum).optional(),
});

/**
 * a parsed complete DocitConfig, can be read from cli via command args and config file
 */
export const zDocitConfig = z.object({
  root: z.string().optional().default("./"),
  docRoot: z.string().optional().default("./docs"),
  siteConfig: zSiteConfig.optional().default(zSiteConfig.parse({})),
});

/**
 * ScaffoldOptions for docit init
 */
export const zScaffoldOptions = zSiteConfig.merge(zDocitConfig.pick({ root: true }));
