export type { PackageJson } from "type-fest";
export * from "./config";

type Link = `http://${string}` | `https://${string}`;

enum SocialEnum {
  github = "github",
  twitter = "twitter",
}
export interface SocialConfig {
  type: SocialEnum | keyof typeof SocialEnum | string;
  link: Link;
}
