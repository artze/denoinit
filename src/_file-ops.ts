const environment = ["dev", "prod"] as const;
type Environment = typeof environment[number];

const rawEnv = environment.find((env) => env === Deno.env.get("ENV"));

if (!rawEnv) {
  throw new Error("Unexpected ENV value");
}

const ENV: Environment = rawEnv;

let parentPath: string;
if (ENV === "prod") {
  parentPath = `${Deno.cwd()}`;
} else {
  parentPath = `${Deno.cwd()}/sandbox`;
}

export function fileOps(entryFilename: string) {
  /** vscode settings */
  Deno.mkdirSync(`${parentPath}/.vscode`);
  Deno.copyFileSync(
    `${Deno.cwd()}/src/assets/vscode-settings.json`,
    `${parentPath}/.vscode/settings.json`
  );

  /** create src/ */
  Deno.mkdirSync(`${parentPath}/src`);

  /** create deps.ts */
  Deno.writeTextFileSync(`${parentPath}/src/deps.ts`, "");

  /** create entrypoint file */
  Deno.writeTextFileSync(`${parentPath}/src/${entryFilename}`, "");
}
