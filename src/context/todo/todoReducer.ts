import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';
import { ITodoContext } from './TodoContext';

interface IAction<T> {
  type: string;
  value?: T;
}

interface ITodo {
  id: string;
  title: string;
}

const handlers: Record<string, Function> = {
  [ADD_TODO]: (state: ITodoContext, title: any) => ({
    ...state,
    todos: [...state.todos, { id: Date.now().toString(), title }],
  }),
  [REMOVE_TODO]: (state: ITodoContext, id: string) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id),
  }),
  [UPDATE_TODO]: (state: ITodoContext, value: ITodo) => ({
    ...state,
    todos: state.todos.map(todo => (todo.id === value.id ? value : todo)),
  }),
  DEFAULT: (state: ITodoContext) => state,
};

export const todoReducer = <T>(
  state: ITodoContext,
  action: IAction<T>
): ITodoContext => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.value);
};
