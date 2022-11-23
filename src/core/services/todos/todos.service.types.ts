// interface of the data model obtained from the database

export interface ITodoRes {
  id: string; 
  value: string; 
  done: boolean;
  createdAt: number;
}
