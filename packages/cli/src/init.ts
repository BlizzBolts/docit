import { type ScaffoldOptions, colors, ThemeType } from "@blizzbolts/docit-shared";
import { intro, outro, group, text, select, cancel } from "@clack/prompts";
import { init as docitInit } from "@blizzbolts/docit-core";

export const init = async (destination: string) => {
  intro(colors.bold(colors.cyan(`Welcome to Docit!`)));

  const options: ScaffoldOptions = await group(
    {
      root: () =>
        text({
          message: "Where do you want to set up Docit?",
          placeholder: "./",
          initialValue: destination || "./",
        }),

      title: () =>
        text({
          message: "Title:",
          placeholder: "Docit",
          defaultValue: "Docit",
        }),

      description: () =>
        text({
          message: "Description:",
          placeholder: "Docit",
          defaultValue: "Docit",
        }),

      theme: () =>
        select({
          message: "Theme:",
          options: [
            {
              label: "Default Theme",
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

  if (await docitInit(options)) {
    outro("Done!");
  } else {
    outro(
      colors.bold(colors.red("initialize project failed, please checkout the error messages.")),
    );
  }
};
