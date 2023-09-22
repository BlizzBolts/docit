import path from "node:path";
import {
  coreLogger,
  type ScaffoldOptions,
  DEFAULT_DOCIT_CONFIG_FILE_LOCATION,
  DEFAULT_CONFIG_FILE_NAME,
} from "@blizzbolts/docit-shared";
import { getDirname, getUserPackageJson, isWritable } from "@blizzbolts/docit-shared/node";
import defaultsDeep from "lodash.defaultsdeep";
import template from "lodash.template";
import fsx from "fs-extra";
import { preflight } from "./preflight";

export const defaultScaffoldOptions: ScaffoldOptions = {
  description: "Docit",
  root: "./",
  title: "Docit",
};

export const init = async (scaffoldOptions?: ScaffoldOptions): Promise<string> => {
  // zScaffoldOptions.parse(scaffoldOptions);
  // FIXME:
  const templateDir = path.resolve(getDirname(import.meta.url), "../../template");
  const { root, title, description, theme } = defaultsDeep(scaffoldOptions, defaultScaffoldOptions);
  const destination = path.resolve(root!);
  const docitFolder = path.resolve(destination, "./.docit");
  const docsFolder = path.resolve(destination, "./docs");

  await preflight(destination);

  if (!isWritable(docitFolder)) {
    const message = `${docitFolder} is not empty. Please remove the folder or choose another one.`;
    coreLogger.error(message);
    return "";
  }

  if (!isWritable(docsFolder)) {
    const message = `${docsFolder} is not empty. Please remove the folder or choose another one.`;
    coreLogger.error(message);
    return "";
  }

  coreLogger.debug(`copying template to ${destination}`);

  const userPkg = await getUserPackageJson(root);
  const isESM = userPkg?.type === "module";

  const writeFile = async (from: string) => {
    const _from = path.resolve(templateDir, from);
    const _to = path.resolve(root!, from);

    let content = await fsx.readFile(_from, { encoding: "utf-8" });

    if (from === DEFAULT_DOCIT_CONFIG_FILE_LOCATION) {
      content = template(content)({ title, description, theme });
    }
    if (from === DEFAULT_DOCIT_CONFIG_FILE_LOCATION && isESM) {
      const newTo = _to.replace(
        DEFAULT_CONFIG_FILE_NAME,
        DEFAULT_CONFIG_FILE_NAME.replace(".mjs", ".js"),
      );
      await fsx.outputFile(path.resolve(root!, newTo), content);
    } else {
      await fsx.outputFile(_to, content);
    }
  };

  const files = [DEFAULT_DOCIT_CONFIG_FILE_LOCATION, "docs/index.md"];

  await Promise.all(files.map((o) => writeFile(o)));

  return destination;
};
