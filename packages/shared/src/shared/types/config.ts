import type { z } from "zod";
import type { zScaffoldOptions } from "../schema/config";
import { zThemeType } from "../schema/config";
import { type zDocitConfig } from "../schema/config";

export type DocitConfig = z.infer<typeof zDocitConfig>;
export const ThemeType = zThemeType.Enum;
export type ScaffoldOptions = z.infer<typeof zScaffoldOptions>;
