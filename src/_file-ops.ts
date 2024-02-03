import { denoJsonContent } from "@src/assets/deno-json.ts";

const ENV = Deno.env.get("ENV");

let parentPath: string;
if (ENV === "dev") {
  parentPath = `${Deno.cwd()}/sandbox`;
} else {
  parentPath = `${Deno.cwd()}`;
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

  /** create deno.json */
  denoJsonContent.tasks.dev = denoJsonContent.tasks.dev.concat(
    ` src/${entryFilename}`
  );
  Deno.writeTextFileSync(
    `${parentPath}/deno.json`,
    JSON.stringify(denoJsonContent, null, 2)
  );
}
