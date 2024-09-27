import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { useState } from "react";
import { setContext, getContext, getWebRequest } from "vinxi/http";

async function readCount() {
  return 1;
}

const updateMessage = createServerFn("POST", () => {
  return "New message";
});

const initialMessage = createServerFn("GET", () => {
  return "Initial message";
});

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => await initialMessage(),
});

function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();
  const [message, setMessage] = useState(state);

  return (
    <button
      onClick={() => {
        updateMessage().then((val) => {
          setMessage(val);
        });
      }}
    >
      {message}
    </button>
  );
}
