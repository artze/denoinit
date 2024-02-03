export const denoJsonContent = {
  imports: {
    "@src/": "./src/",
  },
  tasks: {
    dev: "deno run --lock=deno.lock --watch",
    "dl-deps:update-lock":
      "deno cache --lock=deno.lock --lock-write src/deps.ts",
    "dl-deps:reload": "deno cache --reload --lock=deno.lock src/deps.ts",
  },
};
