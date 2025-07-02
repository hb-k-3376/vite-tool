export interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

export type TodoList = ITodo[];

export enum StorageKey {
  TODOS = 'todos',
}
