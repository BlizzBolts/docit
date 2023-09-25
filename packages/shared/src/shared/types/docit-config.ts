import { z } from "zod";
import type { AliasOptions } from "vite";
import { zSiteConfig } from "./site-config";
import { zServerConfig } from "./server-config";
import { zThemeConfig } from "./theme-config";

const zDocitConfig = z
  .object({
    root: z.string().default("./"),
    docRoot: z.string().default("./docs"),
    outDir: z.string().default("./docs/dist"),
    base: z.string().default("/"),
    site: zSiteConfig.partial().default(zSiteConfig.parse({})),
    alias: z.any().optional() as z.ZodOptional<z.ZodType<AliasOptions>>,
    server: zServerConfig.partial().optional(),
    themeConfig: zThemeConfig.partial().optional(),
  })
  .strict()
  .strip();

export { zDocitConfig };
export type DocitConfig = z.input<typeof zDocitConfig>;
export const defineConfig = (config: DocitConfig): DocitConfig => {
  return zDocitConfig.parse(config);
};
