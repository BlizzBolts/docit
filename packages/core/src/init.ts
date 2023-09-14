import {
  coreLogger,
  ThemeType,
  type ScaffoldOptions,
  DEFAULT_DOCIT_CONFIG_FILE_LOCATION,
} from "@blizzbolts/docit-shared";
import { getCurrentPackageJsonPath } from "@blizzbolts/docit-shared/node";

import { defaultsDeep, template } from "lodash-es";
import path from "node:path";
import fsx from "fs-extra";

export const defaultScaffoldOptions: ScaffoldOptions = {
  description: "my docit project",
  root: "./",
  theme: ThemeType.Default,
  title: "Docit",
};

const templateDir = path.resolve(path.dirname(getCurrentPackageJsonPath()), "./template");

export const init = async (scaffoldOptions?: ScaffoldOptions): Promise<string> => {
  const { root, title, description, theme } = defaultsDeep(scaffoldOptions, defaultScaffoldOptions);

  const destination = path.resolve(root!);

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

  for (let i = 0; i < files.length; i++) {
    await writeFile(files[i]);
  }

  return `Done!`;
};
