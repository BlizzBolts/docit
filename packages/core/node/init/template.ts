import path from "node:path";
import type { DocitConfig } from "@blizzbolts/docit-shared";
import {
  zScaffoldOptions,
  type ScaffoldOptions,
  zDocitConfig,
  retrieveUserEnv,
} from "@blizzbolts/docit-shared/node";

export interface TemplateFile {
  content: string;
  location: string;
}

export const makeDocitConfigFile = async (
  scaffoldOptions: ScaffoldOptions,
): Promise<TemplateFile> => {
  const options = zScaffoldOptions.parse(scaffoldOptions);

  const config = await retrieveUserEnv(scaffoldOptions.root);
  const fileExtension = config.isEsm ? ".js" : config["tsconfig.json"] ? ".ts" : ".mjs";
  const filename = `docit.config${fileExtension}`;
  const fileLocation = path.resolve(scaffoldOptions.root, "./", filename);

  const docitConfig: DocitConfig = zDocitConfig.parse({
    site: {
      title: options.title,
      description: options.description,
    },
  });

  return {
    content: `export default ${JSON.stringify(docitConfig, null, 2)}`,
    location: fileLocation,
  };
};
