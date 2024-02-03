import { parseArgs } from "@src/deps.ts";

import { fileOps } from "@src/_file-ops.ts";
import { printHelp } from "@src/_print-help.ts";

function main(input: string[]) {
  const parsedArgs = parseArgs(input, {
    boolean: ["help"],
    string: ["entryFile"],
    alias: {
      entryFile: "e",
      help: "h",
    },
    default: {
      entryFile: "main.ts",
    },
  });

  if (parsedArgs.help) {
    printHelp();
    Deno.exit(0);
  }

  fileOps(parsedArgs.entryFile);
}

main(Deno.args);
