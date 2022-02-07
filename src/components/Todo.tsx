import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ScreenContext } from '../context/screen/screenContext';
import { TodoContext } from '../context/todo/todoContext';

import { AppText } from './UI/AppText';

interface TodoProps {
  todo: {
    id: string;
    title: string;
  };
}

export const Todo: React.FC<TodoProps> = ({ todo }) => {
  const { removeTodo } = useContext(TodoContext);
  const { changeScreen } = useContext(ScreenContext);
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={changeScreen?.bind(null, todo.id)}
      onLongPress={removeTodo?.bind(null, todo.id)}
      delayLongPress={1000}
    >
      <View style={styles.todo}>
        <AppText>{todo.title}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
  },
});
