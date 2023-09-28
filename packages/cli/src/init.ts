import { type ScaffoldOptions, colors } from "@blizzbolts/docit-shared";
import { intro, outro, group, text, cancel } from "@clack/prompts";
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

      docRoot: () =>
        text({
          message: "Where do you want to place your markdowns?",
          placeholder: "./docs",
          initialValue: "./docs",
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

      // FIXME: implement later
      // theme: () =>
      //   select({
      //     message: "Theme:",
      //     options: [
      //       {
      //         label: "Default Theme",
      //         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //         // @ts-ignore
      //         value: ThemeType.default,
      //       },
      //     ],
      //   }),
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
