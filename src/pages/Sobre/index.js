import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Sobre = () => {
  return (
    <View style={styles.container}>
      <Icon name="cogs" size={200} color="#ccc" />
      <Text style={styles.txt}>To be continued...</Text>
    </View>
  );
};

export default Sobre;
