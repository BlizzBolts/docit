import { type ScaffoldOptions, colors, ThemeType } from "@blizzbolts/docit-shared";
import { intro, outro, group, text, select, cancel } from "@clack/prompts";
import { init as docitInit } from "@blizzbolts/docit-core";

export const init = async (destination: string) => {
  intro(colors.bold(colors.cyan("Glad you used Docit!")));

  // FIXME: if destination has conflict, read package.json for title and description
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
          placeholder: "Docit",
          defaultValue: "Docit",
        }),

      description: () =>
        text({
          message: "Site description:",
          placeholder: "Docit",
          defaultValue: "Docit",
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

  outro(await docitInit(options));
};
