import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import dateFormat from '../../function/dateFormat';
import styles from './style';

const Dates = () => {
  const {dateFull, hoursFull} = dateFormat(new Date());
  return (
    <>
      <View style={styles.box}>
        <Icon name="clock" size={15} color="#969696" />
        <Text style={styles.txt}>{hoursFull}</Text>
      </View>
      <View style={styles.box}>
        <Icon name="calendar" size={15} color="#969696" />
        <Text style={styles.txt}>{dateFull}</Text>
      </View>
    </>
  );
};

export default Dates;
