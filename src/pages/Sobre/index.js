import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Sobre = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Continua...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#111',
  },
});

export default Sobre;
