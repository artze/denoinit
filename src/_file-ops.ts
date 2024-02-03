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

function writeVsCodeSettings() {
  Deno.mkdirSync(`${parentPath}/.vscode`);
  Deno.copyFileSync(
    `${Deno.cwd()}/src/assets/vscode-settings.json`,
    `${parentPath}/.vscode/settings.json`
  );
}

export function fileOps() {
  writeVsCodeSettings();
}
