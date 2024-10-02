> [!WARNING]
> 3rd Oct 2024 - THERE IS CURRENTLY A BREAKING CHANGE WITH HOW WRANGLER GENERATES TYPES - WORKING ON A FIX

A minimal example of Tanstack Start running on Cloudflare Workers with SSR (not cloudflare pages)

1. `bun install`
2. `bun run dev`
2. `bun deploy` -- to deploy to a cloudflare worker

To generate types for bindings / env vars: `bun run cf-typegen`

Demo here: https://tanstack-start-workers.tim-oconnell-australia.workers.dev/
