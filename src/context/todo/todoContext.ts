import { createContext } from 'react';

interface ITodo {
  id: string;
  title: string;
}

export type ITodoContext = {
  todos: ITodo[];
  addTodo?: (title: string) => void;
  removeTodo?: (id: string) => void;
  updateTodo?: (value: ITodo) => void;
};

export const TodoContext = createContext<ITodoContext>({
  todos: [],
});
