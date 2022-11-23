import { TODOS_URL } from "../../../config.local";
import { serviceMiddleware } from "../middleware/middleware.service";
import { ITodoRes } from "./todos.service.types";

export const getTodos = () => serviceMiddleware({url: TODOS_URL, method: "GET"});

export const createTodo = (body: ITodoRes) => serviceMiddleware({url: TODOS_URL, method: "POST", body});

export const editTodo = (body: ITodoRes) => serviceMiddleware({url: `${TODOS_URL}/${body.id}`, method: "PUT", body });
