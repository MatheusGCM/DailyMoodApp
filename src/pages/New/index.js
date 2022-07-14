import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const New = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerChild}>
        <Icon name="emoticon-neutral-outline" size={55} color="#ACACAC" />
        <Text style={styles.txt}>
          Você ainda não tem nenhum registro diário. Para começar, toque no
          ícone de adicionar na tela.
        </Text>
      </View>
    </View>
  );
};

export default New;
