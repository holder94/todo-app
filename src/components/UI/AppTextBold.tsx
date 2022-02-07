import React from 'react';
import {
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
  ImageStyle,
} from 'react-native';

interface AppTextBoldProps {
  style?: TextStyle | ViewStyle | ImageStyle;
}

export const AppTextBold: React.FC<AppTextBoldProps> = ({ style, children }) => (
  <Text style={{ ...styles.default, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-bold',
  },
});
