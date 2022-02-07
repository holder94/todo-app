import React from 'react';
import {
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
  ImageStyle,
} from 'react-native';

interface AppTextProps {
  style?: TextStyle | ViewStyle | ImageStyle;
}

export const AppText: React.FC<AppTextProps> = ({ style, children }) => (
  <Text style={{ ...styles.default, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-regular',
  },
});
