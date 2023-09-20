import type { z } from "zod";
import { zDocitConfig } from "./docit-config";
import { zSiteConfig } from "./site-config";

const zScaffoldOptions = zSiteConfig.merge(zDocitConfig.pick({ root: true }));

export { zScaffoldOptions };
export type ScaffoldOptions = z.infer<typeof zScaffoldOptions>;
export const defineScaffoldOptions = (config: ScaffoldOptions): ScaffoldOptions => {
  return zScaffoldOptions.parse(config);
};
