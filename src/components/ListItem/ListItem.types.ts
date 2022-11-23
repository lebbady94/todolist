import { ITodo } from "../../core/models/todos/todos.model";

export interface IListItemProps<I> {
  item: I;
  onClickItem?: (item: I) => void;
}
