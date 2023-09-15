import { Command } from "commander";
import { start } from "@/start";
import { build } from "@/build";
import { init } from "@/init";
import { DEFAULT_DOCIT_CONFIG_FILE_LOCATION } from "@blizzbolts/docit-shared";
import pkg from "../package.json";

const program = new Command();
program.name("docit-cli").description("CLI for docit").version(pkg.version, "-v, --version");

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
  .description("build docit for production")
  .addOption(configOption)
  .action(build);

program.command("init [destination]").description("setup docit").action(init);

program.parse(process.argv);
