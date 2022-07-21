/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Atv = ({icone, nome}) => {
  return (
    <View>
      <View style={{alignItems: 'center', margin: 25}}>
        <View
          style={{
            width: 60,
            height: 60,
            borderWidth: 1,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <Icon name={icone} size={35} color={'black'} />
        </View>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '600',
            lineHeight: 15,
            color: '#000',
          }}>
          {nome}
        </Text>
      </View>
    </View>
  );
};

export default Atv;
