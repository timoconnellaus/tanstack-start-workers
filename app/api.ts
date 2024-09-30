import { defaultAPIFileRouteHandler } from "@tanstack/start/api";
import { eventHandler, toWebRequest } from "vinxi/http";

const apiHandler = eventHandler(async (event) => {
  const request = toWebRequest(event);
  request.context = event.context;
  const res = await defaultAPIFileRouteHandler({ request });
  return res;
});

export default apiHandler;
