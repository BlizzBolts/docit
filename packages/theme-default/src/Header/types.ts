import type { NavItem, ThemeConfig } from "@blizzbolts/docit-shared/client";
import type { BaseProps } from "@/types";
export interface HeaderProps extends BaseProps {
  title: string;
  navs: ThemeConfig["nav"];
  onNavigate: (nav: NavItem) => void;
}
