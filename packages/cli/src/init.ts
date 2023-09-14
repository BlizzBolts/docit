import { type ScaffoldOptions, colors, ThemeType } from "@blizzbolts/docit-shared";
import { getPackageJson } from "@blizzbolts/docit-shared/node";
import { intro, outro, group, text, select, cancel } from "@clack/prompts";
import { init as docitInit } from "@blizzbolts/docit-core";

export const init = async (destination: string) => {
  intro(colors.bold(colors.cyan("Welcome to VitePress!")));

  const pkg = await getPackageJson(process.cwd(), "./package.json");

  const options: ScaffoldOptions = await group(
    {
      root: () =>
        text({
          message: "Where do you want to set up Docit?",
          initialValue: destination || "./",
        }),

      title: () =>
        text({
          message: "Site title:",
          placeholder: pkg.name,
        }),

      description: () =>
        text({
          message: "Site description:",
          placeholder: `Document For ${pkg.name}`,
        }),

      theme: () =>
        select({
          message: "Theme:",
          options: [
            {
              label: "Default Theme",
              hint: "Out of the box, good-looking docs",
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              value: ThemeType.Default,
            },
          ],
        }),
    },
    {
      onCancel: () => {
        cancel("Cancelled.");
        process.exit(0);
      },
    },
  );

  outro(docitInit(options));
};
