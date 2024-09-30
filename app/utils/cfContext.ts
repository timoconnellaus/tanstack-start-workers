import { type HTTPEvent } from "vinxi/http";

export async function getCloudflareContext(event: HTTPEvent) {
  if (import.meta.env.DEV) {
    // Attach the cloudflare context
    const cf = await import("wrangler");
    const proxy = await cf.getPlatformProxy<Env>({ persist: true });
    return proxy;
  } else {
    return event.context.cloudflare;
  }
}
