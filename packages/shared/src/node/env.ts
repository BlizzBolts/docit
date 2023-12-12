import path from "node:path";
import type { PackageJson, TsConfigJson } from "type-fest";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { loadTsConfig } from "load-tsconfig";
import { logger } from "../shared/logger";
import { getUserPackageJson } from "./utils";

export interface UserEnv {
	"package.json": PackageJson;
	"tsconfig.json": {
		data: TsConfigJson;
		files: string[];
		path: string;
	};
	isEsm: boolean;
}

export const retrieveUserEnv = async (cwd: string): Promise<UserEnv> => {
	const env: UserEnv = {} as UserEnv;
	const pkg = await getUserPackageJson(path.resolve(cwd));
	if (!pkg) {
		logger.debug("Failed to read user package.json file");
	}

	env["package.json"] = pkg!;
	env.isEsm = pkg?.type === "module";
	const tsconfig = loadTsConfig(cwd);

	if (!tsconfig) {
		logger.debug("Failed to read user tsconfig.json file");
	}

	env["tsconfig.json"] = loadTsConfig(cwd);
	return env;
};
