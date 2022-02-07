import React, { useContext, useState } from 'react';
import { View, StyleSheet, TextInput, Alert, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { TodoContext } from '../context/todo/todoContext';
import { THEME } from '../theme';

export const AddTodo: React.FC = () => {
  const { addTodo } = useContext(TodoContext);
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (!value) {
      Alert.alert(`Todo's title cannot be emtpy!`);
    } else {
      addTodo?.(value);
      setValue('');
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        placeholder="Enter todo's title"
        value={value}
        autoCorrect={false}
        autoCapitalize="sentences"
        onChangeText={setValue}
      />
      <AntDesign.Button onPress={handleSubmit} name="pluscircleo">
        Add
      </AntDesign.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
  },
});
