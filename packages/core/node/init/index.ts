import path from "node:path";
import { zScaffoldOptions, type ScaffoldOptions, coreLogger } from "@blizzbolts/docit-shared";
import fsx from "fs-extra";
import { isWritable, resolveConfig } from "@blizzbolts/docit-shared/node";
import { makeDocitConfigFile } from "./template";

export const init = async (scaffoldOptions?: ScaffoldOptions): Promise<boolean> => {
  scaffoldOptions = zScaffoldOptions.parse(scaffoldOptions || {});

  const configFileTemplate = await makeDocitConfigFile(scaffoldOptions);
  await fsx.outputFile(configFileTemplate.location, configFileTemplate.content);

  const config = await resolveConfig(scaffoldOptions.root);
  if (!isWritable(config.docRoot!)) {
    const message = `${config.docRoot} is not empty. Please remove the folder or choose another one.`;
    coreLogger.error(message);
    return false;
  }

  const markdown = (s: string) => `# ${s}

Dolore ullamco ea proident pariatur magna.
Duis excepteur proident enim irure laboris consequat velit consequat est elit occaecat.
  `;

  await fsx.outputFile(path.resolve(config.docRoot!, "./index.mdx"), markdown("Docit"));
  await fsx.outputFile(
    path.resolve(config.docRoot!, "./folder/another.mdx"),
    markdown("Another Doc"),
  );

  coreLogger.debug(`Writing template to ${config.root}`);
  return true;
};
