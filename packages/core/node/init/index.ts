import path from "node:path";
import { zScaffoldOptions, type ScaffoldOptions, coreLogger } from "@blizzbolts/docit-shared";
import fsx from "fs-extra";
import { isWritable } from "@blizzbolts/docit-shared/node";
import { preflight } from "../preflight";
import { makeDocitConfigFile } from "./template";

export const init = async (scaffoldOptions?: ScaffoldOptions): Promise<boolean> => {
  await preflight();
  scaffoldOptions = scaffoldOptions ?? zScaffoldOptions.parse({});
  const configFileTemplate = await makeDocitConfigFile(scaffoldOptions);
  await fsx.outputFile(configFileTemplate.location, configFileTemplate.content);

  const markdown = `
    # Hello Docit
    Dolore ullamco ea proident pariatur magna.
    Duis excepteur proident enim irure laboris consequat velit consequat est elit occaecat.
  `;
  const docsFolderLocation = path.resolve(scaffoldOptions.root, "./docs");
  await fsx.outputFile(path.resolve(docsFolderLocation, "./index.mdx"), markdown);

  if (!isWritable(docsFolderLocation)) {
    const message = `${docsFolderLocation} is not empty. Please remove the folder or choose another one.`;
    coreLogger.error(message);
    return false;
  }
  coreLogger.debug(`copying template to ${scaffoldOptions.root}`);
  return true;
};
