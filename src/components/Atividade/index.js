import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

const Atividade = ({atividade}) => {
  return (
    <View style={styles.container}>
      <Icon name={atividade[0].icone} size={20} color="#111" />
      <Text style={styles.txtIcon}>{atividade[0].nome}</Text>

      <Icon name="circle" size={5} color="#111" />

      <Icon name={atividade[1].icone} size={20} color="#111" />
      <Text style={styles.txtIcon}>{atividade[1].nome}</Text>

      <Icon name="circle" size={5} color="#111" />

      <Icon name={atividade[2].icone} size={20} color="#111" />
      <Text style={styles.txtIcon}>{atividade[2].nome}</Text>
    </View>
  );
};

export default Atividade;
