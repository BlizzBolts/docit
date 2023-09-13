import { Command } from "commander";
import { start } from "./start";
import { build } from "./build";

const program = new Command();

program
  .command("start [source]")
  .description("start docit dev server")
  .action(start);

program
  .command("build [source]")
  .description("build a production docit build")
  .action(build);

program.parse(process.argv);
