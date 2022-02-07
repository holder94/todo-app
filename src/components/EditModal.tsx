import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Modal, Alert } from 'react-native';
import { THEME } from '../theme';
import { AppButton } from './UI/AppButton';

interface EditModalProps {
  visible: boolean;
  value: string;
  onSave: (title: string) => void;
}

export const EditModal: React.FC<EditModalProps> = ({
  visible,
  value,
  onSave,
}) => {
  const [title, setTitle] = useState(value);

  const handleSaveClick = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        'Error!',
        `Minimal title length is 3 symbols. Now it is ${title.trim().length}`
      );
    } else {
      onSave(title);
    }
  };

  const handleCancel = () => {
    onSave(value);
    setTitle(value);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Enter todo's title"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
          autoFocus
        />
        <View style={styles.buttons}>
          <AppButton color={THEME.DANGER_COLOR} onPress={handleCancel}>
            Cancel
          </AppButton>
          <AppButton onPress={handleSaveClick}>Save</AppButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: '80%',
  },
  buttons: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
