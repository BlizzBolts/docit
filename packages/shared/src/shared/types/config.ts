import type { z } from "zod";
import type { zScaffoldOptions, zSiteConfig } from "../schema/config";
import { zThemeType } from "../schema/config";

import { type zDocitConfig } from "../schema/config";
export type DocitConfig = z.infer<typeof zDocitConfig>;
export const ThemeType = zThemeType.Enum;
export type ScaffoldOptions = z.infer<typeof zScaffoldOptions>;
export type SiteConfig = z.infer<typeof zSiteConfig>;
