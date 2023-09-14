import type { ScaffoldOptions } from "@blizzbolts/docit-shared";

export const init = (scaffoldOptions: ScaffoldOptions): string => {
  console.log(scaffoldOptions);
  return `Done!`;
};
