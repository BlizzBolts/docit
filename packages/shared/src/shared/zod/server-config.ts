import type { ProxyOptions } from "vite";
import { z } from "zod";

const zServerConfig = z
  .object({
    port: z.number().default(3000),
    host: z.string().optional(),
    https: z.boolean().default(false),
    open: z.boolean().default(false),
    cors: z.boolean().default(false),
    proxy: z.any().optional() as z.ZodOptional<z.ZodType<Record<string, string | ProxyOptions>>>,
  })
  .strict();

export { zServerConfig };
export type ServerConfig = z.input<typeof zServerConfig>;
export const defineDocitServerConfig = (config: ServerConfig): ServerConfig => {
  return zServerConfig.parse(config);
};
