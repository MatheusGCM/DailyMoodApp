/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Atv = ({id, icone, nome, selecionado, selectActivity}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() =>
        selectActivity({
          id,
          icone,
          nome,
          selecionado,
        })
      }>
      <View
        style={{
          alignItems: 'center',
          margin: 25,
          width: 60,
        }}>
        <View
          style={[
            styles.boxIcone,
            {
              backgroundColor: selecionado ? '#304FFE' : null,
              borderWidth: selecionado ? 0 : 1,
            },
          ]}>
          <Icon
            name={icone}
            size={35}
            color={selecionado ? 'white' : 'black'}
          />
        </View>
        <View style={{width: 60, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              lineHeight: 15,
              color: '#000',
              textAlign: 'center',
            }}>
            {nome}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boxIcone: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default Atv;
