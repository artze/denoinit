export function printHelp() {
  console.log(`Usage: denoinit [OPTIONS...]`);
  console.log("\nOptional flags:");
  console.log("  -h, --help                Display this help and exit");
  console.log(
    "  -e, --entryFile           Entrypoint filename; defaults to 'main.ts'"
  );
}
