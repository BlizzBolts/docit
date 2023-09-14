import { Command } from "commander";
import { start } from "@/start";
import { build } from "@/build";
import { init } from "@/init";
import { getDirname, getPackageJsonSync } from "@blizzbolts/docit-shared/node";
import { DEFAULT_DOCIT_CONFIG_FILE_LOCATION } from "@/defaults";

const dirname__ = typeof __dirname === "undefined" ? getDirname(import.meta.url) : __dirname;
const pkg = getPackageJsonSync(dirname__);
const program = new Command();

program
  .name("docit-cli")
  .description("CLI for docit")
  .version(
    pkg.version ?? "unknown version",
    "-v, --version",
    `${pkg.name} version is ${pkg.version}`,
  );

const configOption = program
  .createOption("-c, --config <config>", "specify config file location")
  .default(DEFAULT_DOCIT_CONFIG_FILE_LOCATION);

program
  .command("start [source]")
  .description("start docit dev server")
  .addOption(configOption)
  .action(start);

program
  .command("build [source]")
  .description("build a production docit build")
  .addOption(configOption)
  .action(build);

program.command("init [destination]").description("setup docit").action(init);

program.parse(process.argv);
