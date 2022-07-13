import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerChild: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '35%',
    width: '100%',
  },
  txt: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: '#ACACAC',
    marginTop: 20,
    lineHeight: 20,
    width: 318,
  },
});

export default New;
