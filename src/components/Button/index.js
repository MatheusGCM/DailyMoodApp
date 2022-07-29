import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = ({onPress, txt}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.4}
      onPress={onPress}>
      <Text style={styles.txtButton}>{txt}</Text>
    </TouchableOpacity>
  );
};

export default Button;
