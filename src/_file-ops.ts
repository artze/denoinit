import { denoJsonContent } from "@src/assets/deno-json.ts";
import { vscodeSettingsContent } from "@src/assets/vscode-settings.ts";

const ENV = Deno.env.get("ENV");

let parentPath: string;
if (ENV === "dev") {
  parentPath = "./sandbox";
} else {
  parentPath = ".";
}

export function fileOps(entryFilename: string) {
  /** vscode settings */
  Deno.mkdirSync(`${parentPath}/.vscode`);
  Deno.writeTextFileSync(
    `${parentPath}/.vscode/settings.json`,
    JSON.stringify(vscodeSettingsContent, null, 2)
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
