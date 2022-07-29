import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Atividade from '../Atividade';
import styles from './style';
import switchMoods from '../../function/switchMoods';
import dateFormat from '../../function/dateFormat';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = ({
  id,
  mood,
  created_at,
  short_description,
  activities,
  navigation,
}) => {
  const {img, txt, color} = switchMoods(mood);
  const {dateFull, hoursFull} = dateFormat(created_at);
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Details', id)}>
      <View style={styles.cardCima}>
        <View>
          <Image source={img} style={styles.cardImg} />
        </View>
        <View>
          <Text style={styles.txtDia}>{dateFull}</Text>
          <View style={styles.cardCimaContent}>
            <Text style={[styles.txtHumor, {color: color}]}>{txt}</Text>
            <Text style={styles.txtHora}>{hoursFull}</Text>
          </View>
        </View>
      </View>

      <Atividade activities={activities} />

      <Text style={styles.txtDescricao}>{short_description}</Text>
    </TouchableOpacity>
  );
};

export default Card;
