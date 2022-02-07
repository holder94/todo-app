import React, { useContext, useReducer } from 'react';
import { Alert } from 'react-native';

import { todoReducer } from './todoReducer';
import { ITodoContext, TodoContext } from './todoContext';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';
import { ScreenContext } from '../screen/screenContext';

interface ITodo {
  id: string;
  title: string;
}

export const TodoState: React.FC = ({ children }) => {
  const initialState: ITodoContext = {
    todos: [{ id: '1', title: 'learn react-native' }],
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { changeScreen } = useContext(ScreenContext);

  const addTodo = (title: string) =>
    dispatch({
      type: ADD_TODO,
      value: title,
    });

  const removeTodo = (id: string) => {
    const todo = state.todos.find(todo => todo.id === id);

    Alert.alert(
      'Element removal',
      `Are you sure to remove "${todo?.title}"`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Approve',
          onPress: () => {
            changeScreen?.(null);
            dispatch({
              type: REMOVE_TODO,
              value: id,
            });
          },
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  const updateTodo = (value: ITodo) =>
    dispatch({
      type: UPDATE_TODO,
      value,
    });

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        updateTodo,
        removeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
