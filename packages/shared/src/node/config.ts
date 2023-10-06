import path from "node:path";
import { glob } from "glob";
import { bundleRequire } from "bundle-require";
import type { DocitConfig } from "../shared/zod";
import { zDocitConfig } from "../shared/zod";
import { zPrintErr } from "../shared/zod";
import { coreLogger } from "../shared/logger";
import { isFileReadable } from "../node/utils/files";

export const findConfigFile = async (cwd: string = process.cwd()): Promise<string | null> => {
  // FIXME: ts config file support
  const globString = "./docit.config.{mjs,cjs,js}";

  const matches = await glob(globString, {
    cwd,
    nodir: true,
  });
  if (matches.length === 0) {
    coreLogger.info("Docit config not found, fallback to default");
    return null;
  } else {
    return matches[0];
  }
};

export const readConfigFromFile = async (
  cwd: string = process.cwd(),
): Promise<DocitConfig | null> => {
  const configFile = await findConfigFile(cwd);

  if (!configFile) {
    return null;
  }

  const isValidFile = isFileReadable(path.resolve(cwd, "./", configFile));

  if (!isValidFile) {
    return null;
  }
  try {
    const { mod } = await bundleRequire({
      filepath: path.resolve(cwd, "./", configFile),
    });
    // I mean ... it works in both .cjs and .mjs situations
    return mod.default ? mod.default : mod;
  } catch (e) {
    coreLogger.warn(`Failed to load config at ${configFile}, resolved as default\n`, e);
    zPrintErr(e);
    return null;
  }
};

const readConfigFromPackageJson = async (cwd: string = process.cwd()) => {
  return null;
};

const readConfig = async (cwd: string = process.cwd()) => {
  let config = null;
  const hasConfigFile = await findConfigFile(cwd);

  if (hasConfigFile) {
    config = await readConfigFromFile(cwd);
  } else {
    config = await readConfigFromPackageJson(cwd);
  }
  return config;
};

export const resolveConfig = async (cwd: string = process.cwd()): Promise<DocitConfig> => {
  cwd = path.resolve(cwd);
  const config = await readConfig(cwd);
  const resolvedConfig: DocitConfig = zDocitConfig.parse(config || {});

  if (resolvedConfig?.docRoot) {
    resolvedConfig.docRoot = path.resolve(cwd, resolvedConfig?.docRoot);
  }

  if (resolvedConfig?.outDir) {
    resolvedConfig.outDir = path.resolve(cwd, resolvedConfig?.outDir);
  }

  if (resolvedConfig?.root) {
    resolvedConfig.root = path.resolve(cwd, resolvedConfig.root);
  }

  resolvedConfig.server = {
    port: 3000,
    ...(resolvedConfig.server || {}),
  };

  return resolvedConfig;
};
