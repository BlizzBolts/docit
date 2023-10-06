import { z } from "zod";

enum SocialEnum {
  github = "github",
  twitter = "twitter",
}

enum ThemeType {
  default = "default",
}

const zSiteConfig = z
  .object({
    title: z.string().default("Docit"),
    description: z.string().default("Site Description"),
    socials: z
      .array(
        z.object({
          icon: z.string(),
          link: z.string().url(),
        }),
      )
      .optional(),
    head: z
      .array(
        z
          .tuple([z.string(), z.record(z.string(), z.string()), z.string()])
          .or(z.tuple([z.string(), z.record(z.string(), z.string())])),
      )
      .optional(),
    theme: z.nativeEnum(ThemeType).default(ThemeType.default).or(z.string()),
  })
  .strict();

export { zSiteConfig, SocialEnum, ThemeType };
export type SiteConfig = z.input<typeof zSiteConfig>;
