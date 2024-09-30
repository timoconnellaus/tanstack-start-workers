import { defineMiddleware } from "vinxi/http";

export default defineMiddleware({
  onRequest: async (event) => {
    if (import.meta.env.DEV) {
      const cf = await import("wrangler");
      const proxy = await cf.getPlatformProxy<Env>({ persist: true });
      event.context.cloudflare = proxy;
    }
  },
});
