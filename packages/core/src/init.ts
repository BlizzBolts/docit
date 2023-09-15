import {
  coreLogger,
  ThemeType,
  type ScaffoldOptions,
  DEFAULT_DOCIT_CONFIG_FILE_LOCATION,
} from "@blizzbolts/docit-shared";
import { isWritable } from "@blizzbolts/docit-shared/node";
import defaultsDeep from "lodash.defaultsdeep";
import template from "lodash.template";
import path from "node:path";
import fsx from "fs-extra";

export const defaultScaffoldOptions: ScaffoldOptions = {
  description: "Docit",
  root: "./",
  theme: ThemeType.Default,
  title: "Docit",
};

export const init = async (scaffoldOptions?: ScaffoldOptions): Promise<string> => {
  const templateDir = path.resolve(__dirname, "../template");
  const { root, title, description, theme } = defaultsDeep(scaffoldOptions, defaultScaffoldOptions);
  const destination = path.resolve(root!);

  const docitFolder = path.resolve(destination, "./.docit");
  const docsFolder = path.resolve(destination, "./docs");

  if (!isWritable(docitFolder)) {
    const message = `${docitFolder} is not empty. Please remove the folder or choose another one.`;
    coreLogger.error(message);
    throw new Error(message);
  }

  if (!isWritable(docsFolder)) {
    const message = `${docsFolder} is not empty. Please remove the folder or choose another one.`;
    coreLogger.error(message);
    throw new Error(message);
  }

  coreLogger.debug(`init template to ${destination}`);

  const writeFile = async (from: string) => {
    const _from = path.resolve(templateDir, from);
    const _to = path.resolve(root!, from);

    let content = await fsx.readFile(_from, { encoding: "utf-8" });
    if (from === DEFAULT_DOCIT_CONFIG_FILE_LOCATION) {
      content = template(content)({ title, description, theme });
    }

    await fsx.outputFile(_to, content);
  };

  const files = [DEFAULT_DOCIT_CONFIG_FILE_LOCATION, "docs/index.md"];

  await Promise.all(files.map((o) => writeFile(o)));

  return destination;
};
