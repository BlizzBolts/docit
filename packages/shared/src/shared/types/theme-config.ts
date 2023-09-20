import { z } from "zod";

type NavItem = z.infer<typeof zBaseNavItem> & {
  items?: NavItem[];
};

const zBaseNavItem = z.object({
  title: z.string(),
  path: z.string(),
});

const zNavItem: z.ZodType<NavItem> = zBaseNavItem.extend({
  items: z.lazy(() => zNavItem.array()),
});

const zThemeConfig = z.object({
  nav: z.array(zNavItem).optional(),
});

export { zThemeConfig };
export type ThemeConfig = Partial<z.infer<typeof zThemeConfig>>;
export const defineThemeConfig = (config: ThemeConfig): ThemeConfig => {
  return zThemeConfig.parse(config);
};
