import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import styles from './style';

// import { Container } from './styles';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#304FFE" size={50} />
      <Text style={styles.content}>Carregando</Text>
    </View>
  );
};

export default Loading;
