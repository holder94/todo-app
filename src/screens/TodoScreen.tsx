import React, { useContext, useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import { EditModal } from '../components/EditModal';
import { AppButton } from '../components/UI/AppButton';
import { AppCard } from '../components/UI/AppCard';
import { AppTextBold } from '../components/UI/AppTextBold';

import { TodoContext } from '../context/todo/todoContext';
import { THEME } from '../theme';
import { ScreenContext } from '../context/screen/screenContext';

interface ITodo {
  id: string;
  title: string;
}

interface TodoScreenProps {
  todo: ITodo;
}

export const TodoScreen: React.FC<TodoScreenProps> = ({ todo }) => {
  const { updateTodo, removeTodo } = useContext(TodoContext);
  const { changeScreen } = useContext(ScreenContext);
  const [modal, setModal] = useState(false);

  const onSave = (title: string) => {
    const editedTodo = {
      id: todo.id,
      title,
    };
    updateTodo?.(editedTodo);
    setModal(false);
  };

  return (
    <View>
      <EditModal visible={modal} value={todo.title} onSave={onSave} />
      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}>{todo?.title}</AppTextBold>
        <AppButton
          onPress={() => {
            setModal(true);
          }}
        >
          <FontAwesome name="edit" size={20} />
        </AppButton>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton
            color={THEME.GREY_COLOR}
            onPress={() => changeScreen?.(null)}
          >
            <AntDesign name="back" size={20} color="#fff" />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton
            color={THEME.DANGER_COLOR}
            onPress={() => removeTodo?.(todo.id)}
          >
            <FontAwesome name="remove" size={20} color="#fff" />
          </AppButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: Dimensions.get('window').width > 400 ? 150 : 100,
  },
  title: {
    fontSize: 20,
  },
  card: {
    marginBottom: 20,
    marginTop: 20,
    padding: 15,
  },
});
