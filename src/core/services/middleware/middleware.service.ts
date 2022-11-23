import { BASE_URL } from "../../../config.local";
import { ITodoRes } from "../todos/todos.service.types";
import { IMiddlewareParams } from "./middleware.service.types";

export const serviceMiddleware = (params: IMiddlewareParams<ITodoRes>) => {
  const { url, method, body } = params;
  return fetch(`${BASE_URL}${url}`,
    { method, ...(body && { body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' } }) }
  ).then(r => r.json());
}
