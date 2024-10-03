import { defineMiddleware } from "vinxi/http";

export default defineMiddleware({
  onRequest: async (event) => {
    if (import.meta.env.DEV) {
      const { getPlatformProxy } = await import("wrangler");
      const proxy = await getPlatformProxy<Env>();
      event.context.cloudflare = proxy;
    }
  },
});
