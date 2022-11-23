// interface of the data model used in the view

export interface ITodo {
  id: string; 
  value: string; 
  done: boolean;
  createdAt: number;
}
