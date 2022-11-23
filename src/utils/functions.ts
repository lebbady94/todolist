import { ITodo } from "../core/models/todos/todos.model";

export const addDoneTodos = (todos: ITodo[]) => {
  const doneTodos = todos.reduce((prev, curr) => curr.done ? prev + 1 : prev + 0, 0)
  return { done: doneTodos, undone: todos.length - doneTodos}
};
