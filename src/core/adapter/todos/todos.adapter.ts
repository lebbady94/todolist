import { ITodo } from "../../models/todos/todos.model";
import { ITodoRes } from "../../services/todos/todos.service.types";

// adapts the response structure to the structure used in the view

export const adaptTodoResToModel = (todo: ITodoRes): ITodo => ({
  id: todo.id,
  value: todo.value,
  done: todo.done,
  createdAt: todo.createdAt,
});

// adapts the structure used in the view to the response structure 

export const adaptTodoModelToRes = (todo: ITodo): ITodoRes => ({
  id: todo.id,
  value: todo.value,
  done: todo.done,
  createdAt: todo.createdAt,
});
