import React from 'react';
import { ITodo } from '../../core/models/todos/todos.model';
import { IListItemProps } from './ListItem.types';

const ListItem: React.FC<IListItemProps<ITodo>> = (props: IListItemProps<ITodo>) => {
  const { item, onClickItem = () => null } = props;
  return (
    <li className="list-item">
      <button 
        className={`list-item__button ${item.done && "list-item__button--done"}`}
        onClick={() => { onClickItem(item) }} >
        <input className="list-item__button__checkbox" type="checkbox" checked={item.done} readOnly />
        {item.value}
      </button>
    </li>
  );
};

export default ListItem;
