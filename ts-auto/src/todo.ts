import { loadStorage, saveStorage } from './storage';
import { type TodoList } from './type';

export let todos: TodoList = loadStorage();

// addTodo 실행
export const addTodo = (content: string): void => {
  todos.push({
    id: Date.now(),
    content,
    completed: false,
  });

  saveStorage(todos);
};

export const deleteTodo = (id: number): void => {
  todos = todos.filter((todo) => todo.id !== id);
  saveStorage(todos);
};

export const toggleTodo = (id: number): void => {
  todos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  saveStorage(todos);
};

export const updateTodo = ({ id, content }: { id: number; content: string }): void => {
  todos = todos.map((todo) => (todo.id === id ? { ...todo, content: content } : todo));
  saveStorage(todos);
};
