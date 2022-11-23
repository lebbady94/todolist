import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import {Status} from './components/Status/Status';
import { createTodo, editTodo, getTodos } from './core/services/todos/todos.service';
import { ITodo } from './core/models/todos/todos.model';
import { ITodoRes } from './core/services/todos/todos.service.types';
import { adaptTodoModelToRes, adaptTodoResToModel } from './core/adapter/todos/todos.adapter';
import { addDoneTodos } from './utils/functions';
import ListItem from './components/ListItem/ListItem';

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isRefreshed, setIsRefreshed] = useState(true);

  useEffect(() => {
    isRefreshed && getTodos().then((todos: ITodoRes[]) => setTodos(todos.map(todo => adaptTodoResToModel(todo)))).catch((error:Error) => error)
    setIsRefreshed(false);
  }, [isRefreshed]);

  const handleOnClickToogle = (todo: ITodo) => {
    editTodo(adaptTodoModelToRes({ ...todo, done: !todo.done })).then(() => {
      setIsRefreshed(true);
    }).catch((error:Error) => error)
  };

  const handleOnClickCreate = () => {
    createTodo(adaptTodoModelToRes({id: nanoid(), value: value, done: false, createdAt: Date.now()})).then(() => {
      setIsRefreshed(true);
    }).catch((error:Error) => error)
    setValue("");
  };

  return (
    <div className="app">
      <Status status={addDoneTodos(todos)} />
      <input
        className="app__input"
        type="text" 
        placeholder="Introduce a task to do..."
        value={value}
        onChange={(event: React.FormEvent<HTMLInputElement>) => { setValue(event.currentTarget.value) }} 
        onKeyDown={(event: React.KeyboardEvent) => { if (event.key === "Enter") {
          handleOnClickCreate()
        }}}
      />
      <ul className="app__list">
        {todos.map((todo: ITodo) =>
            <ListItem key={todo.id} item={todo} onClickItem={() => { handleOnClickToogle(todo) }}/>
          )}
      </ul>
      <button
        className="app__button"
        onClick={() => { handleOnClickCreate() }}
      >
        {"add todo".toUpperCase()}
      </button>
      <Status status={addDoneTodos(todos)} />
    </div>
  );

}

export default App;
