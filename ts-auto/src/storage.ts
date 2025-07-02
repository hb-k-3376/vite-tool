import { StorageKey, type TodoList } from './type';

// todos 데이터를 로컬 스토리지에 저장해주세요.
const localStorageUtil = {
  setData(todos: TodoList): void {
    localStorage.setItem(StorageKey.TODOS, JSON.stringify(todos));
  },

  loadStorage(): TodoList {
    const data = localStorage.getItem(StorageKey.TODOS);

    return data ? JSON.parse(data) : [];
  },
};

export const saveStorage = (todos: TodoList): void => {
  localStorageUtil.setData(todos);
};

export const loadStorage = (): TodoList => {
  return localStorageUtil.loadStorage();
};
