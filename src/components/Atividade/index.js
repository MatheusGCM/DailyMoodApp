/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Atividade = ({atividade}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 13,
      }}>
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

const styles = StyleSheet.create({
  txtIcon: {
    fontSize: 15,
    color: '#000',
    fontWeight: '600',
    lineHeight: 18,
  },
});
export default Atividade;
