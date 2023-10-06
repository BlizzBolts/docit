import type { ProxyOptions } from "vite";
import { z } from "zod";

const zServerConfig = z
  .object({
    port: z.number().default(3000),
    host: z.string().optional(),
    https: z.boolean().optional(),
    open: z.boolean().optional(),
    cors: z.boolean().optional(),
    proxy: z.any().optional() as z.ZodOptional<z.ZodType<Record<string, string | ProxyOptions>>>,
  })
  .strict();

export { zServerConfig };
export type ServerConfig = z.input<typeof zServerConfig>;
