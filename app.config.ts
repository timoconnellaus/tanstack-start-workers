import { defineConfig } from "@tanstack/start/config";

export default defineConfig({
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
