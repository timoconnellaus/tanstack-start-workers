import type { H3EventContext } from "vinxi/http";
import type { PlatformProxy } from "wrangler";

declare module "vinxi/http" {
  interface H3EventContext {
    cf: CfProperties;
    cloudflare: Omit<PlatformProxy<Env>, "dispose">;
  }
}
