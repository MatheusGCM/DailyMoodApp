import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';
import styles from './style';

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
export default ButtonTabs;
