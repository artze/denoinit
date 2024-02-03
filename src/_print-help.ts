export function printHelp() {
  console.log(
    "%cdenoinit%c creates the following files:",
    "font-weight: bold",
    "font-weight: normal"
  );
  console.log("  * vscode workspace settings to enable deno plugin");
  console.log("  * deps.ts file");
  console.log("  * entrypoint file");
  console.log("  * deno.json with sensible defaults");
  console.log("\nUsage: denoinit [OPTIONS...]");
  console.log("\nOptional flags:");
  console.log("  -h, --help                Display this help and exit");
  console.log(
    "  -e, --entryFile           Entrypoint filename; defaults to 'main.ts'"
  );
}
