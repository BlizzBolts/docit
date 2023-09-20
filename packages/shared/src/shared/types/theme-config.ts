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

export const zThemeConfig = z.object({
  nav: z.array(zNavItem).optional(),
});

export type ThemeConfig = Partial<z.infer<typeof zThemeConfig>>;
