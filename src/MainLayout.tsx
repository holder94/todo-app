import React, { useState, useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import { Navbar } from './components/Navbar';
import { TodoScreen } from './screens/TodoScreen';
import { MainScreen } from './screens/MainScreen';

import { TodoContext } from './context/todo/todoContext';
import { THEME } from './theme';
import { ScreenContext } from './context/screen/screenContext';

interface ITodo {
  id: string;
  title: string;
}

export const MainLayout: React.FC = () => {
  const { todos } = useContext(TodoContext);
  const { id } = useContext(ScreenContext);

  let content = <MainScreen />;

  if (id) {
    const selectedTodo = todos.find(todo => todo.id === id);

    content = (
      <>
        {selectedTodo && (
          <TodoScreen todo={selectedTodo} />
        )}
      </>
    );
  }
  return (
    <View>
      <Navbar title="Todo App!" />
      <View style={styles.container}>{content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
  },
});
