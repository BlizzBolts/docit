export type { PackageJson } from "type-fest";

export enum ThemeType {
  Default = "Default",
}

export interface ScaffoldOptions {
  root?: string;
  title?: string;
  description?: string;
  theme?: ThemeType | string;
}
