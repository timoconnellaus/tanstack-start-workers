import { defineConfig } from "@tanstack/start/config";
import { App } from "vinxi";

const tanstackApp = defineConfig({
  server: {
    preset: "cloudflare-pages",

    output: {
      dir: "{{ rootDir }}/dist",
      publicDir: "{{ output.dir }}/public",
      serverDir: "{{ output.dir }}/worker",
    },

    rollupConfig: {
      external: ["node:async_hooks"],
    },

    hooks: {
      compiled() {},
    },
  },
});

const routers = tanstackApp.config.routers.map((r) => {
  return {
    ...r,
    middleware: r.target === "server" ? "./app/middleware.tsx" : undefined,
  };
});

const app: App = {
  ...tanstackApp,
  config: {
    ...tanstackApp.config,
    routers: routers,
  },
};

export default app;
