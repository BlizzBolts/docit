import { z } from "zod";
import type { AliasOptions } from "vite";
import { zSiteConfig } from "./site-config";
import { zServerConfig } from "./server-config";
import { zThemeConfig } from "./theme-config";

const zDocitConfig = z
  .object({
    /**
     * current working directory
     */
    root: z.string().default("./"),
    /**
     * a relative path to root or an absolute path
     */
    docRoot: z.string().default("./docs"),
    /**
     * a relative path to root or an absolute path
     */
    outDir: z.string().default("./docs/dist"),
    /**
     * public path
     */
    base: z.string().default("/"),
    site: zSiteConfig.partial().optional(),
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
