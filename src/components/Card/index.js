import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Atividade from '../Atividade';
import styles from './style';

import {useNavigation} from '@react-navigation/native';

const Card = ({emoji, dia, humor, hora, atividade, descricao}) => {
  const navigation = useNavigation();

  let color = '';
  if (humor === 'BEM') {
    color = '#E24B4B';
  } else if (humor === 'MAL') {
    color = '#4B75E2';
  } else {
    color = '#4BE263';
  }
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('Details', {
          emoji: emoji,
          dia: dia,
          humor: humor,
          hora: hora,
          atividade: atividade,
          descricao: descricao,
          color: color,
        })
      }>
      <View style={styles.cardCima}>
        <View>
          <Image source={emoji} style={styles.cardImg} />
        </View>
        <View>
          <Text style={styles.txtDia}>{dia}</Text>
          <View style={styles.cardCimaContent}>
            <Text style={[styles.txtHumor, {color: color}]}>{humor}</Text>
            <Text style={styles.txtHora}>{hora}</Text>
          </View>
        </View>
      </View>
      <Atividade atividade={atividade} />

      <Text numberOfLines={1} style={styles.txtDescricao}>
        {descricao}
      </Text>
    </TouchableOpacity>
  );
};

export default Card;
