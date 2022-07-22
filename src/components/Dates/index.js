import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './style';

const Dates = () => {
  const meses = [
    'JANEIRO',
    'FEVEREIRO',
    'MARÇO',
    'APRIL',
    'MAIO',
    'JUNHO',
    'JULHO',
    'AGOSTO',
    'SETEMBRO',
    'OUTUBRO',
    'NOVEMBRO',
    'DEZEMBRO',
  ];
  const d = new Date();
  const horas = String(d.getHours()).padStart(2, '0');
  const minutos = d.getMinutes();
  const dia = String(d.getDate()).padStart(2, '0');
  const mes = meses[d.getMonth()];
  return (
    <>
      <View style={styles.box}>
        <Icon name="clock" size={15} color="#969696" />
        <Text style={styles.txt}>
          {horas}:{minutos}
        </Text>
      </View>
      <View style={styles.box}>
        <Icon name="calendar" size={15} color="#969696" />
        <Text style={styles.txt}>{`HOJE, ${dia} de ${mes}`}</Text>
      </View>
    </>
  );
};

export default Dates;
