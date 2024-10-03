import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { getEvent } from "vinxi/http";

const incrementCount = createServerFn("POST", async () => {
  const event = getEvent();
  const response =
    await event.context.cloudflare.env.tanstack_start_workers.get("count");
  if (!response) {
    await event.context.cloudflare.env.tanstack_start_workers.put(
      "count",
      JSON.stringify({ count: 1 }),
    );
  } else {
    const previousCount = JSON.parse(response).count as number;
    await event.context.cloudflare.env.tanstack_start_workers.put(
      "count",
      JSON.stringify({ count: previousCount + 1 }),
    );
  }
});

const getCount = createServerFn("GET", async () => {
  const event = getEvent();
  const response =
    await event.context.cloudflare.env.tanstack_start_workers.get("count");
  if (!response) {
    return { count: 0 };
  } else {
    return JSON.parse(response) as { count: number };
  }
});

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => await getCount(),
});

function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();

  return (
    <button
      onClick={() => {
        incrementCount().then(() => {
          router.invalidate();
        });
      }}
    >
      {state.count}
    </button>
  );
}
