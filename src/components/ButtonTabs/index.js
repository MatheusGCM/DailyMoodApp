import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet, View} from 'react-native';

const ButtonTabs = ({name, color, background}) => {
  return (
    <View
      style={[
        name === 'plus' ? styles.container2 : styles.container1,
        {backgroundColor: background},
      ]}>
      <Icon
        name={name}
        size={name === 'plus' ? 35 : 22}
        color={name === 'plus' ? 'white' : color}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    width: 48,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ButtonTabs;
