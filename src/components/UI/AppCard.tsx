import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';

interface AppCard {
  style: ViewStyle | ImageStyle | TextStyle;
}

export const AppCard: React.FC<AppCard> = ({ style, children }) => {
  return <View style={{ ...styles.default, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  default: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 8,
  },
});
