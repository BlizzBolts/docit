import fsx from "fs-extra";

/**
 * check if
 * 1. folder exists and it's empty
 * 2. folder does not exists
 *
 * @param folderPath path fo a desired folder
 * @returns
 */
export const isWritable = (folderPath: string): boolean => {
  try {
    const stat = fsx.statSync(folderPath);
    if (stat.isDirectory()) {
      const files = fsx.readdirSync(folderPath);
      return files.length === 0;
    }
    return false;
  } catch (e) {
    if (e instanceof Error) {
      return (e as unknown as Record<string, string>).code === "ENOENT";
    }
    return false;
  }
};

export const isFileReadable = (filePath: string): boolean => {
  try {
    const stat = fsx.statSync(filePath);
    return stat.isFile();
  } catch (e) {
    return false;
  }
};
