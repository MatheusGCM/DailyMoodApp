/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const Moods = ({id, nome, img, onPress, selecionado}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <View style={styles.container}>
        <View
          style={[
            styles.boxImg,
            {backgroundColor: selecionado === id ? '#304FFE' : null},
          ]}>
          <Image source={img} style={styles.img} />
        </View>
        <Text
          style={[
            styles.txtMood,
            {color: selecionado === id ? '#C801FA' : null},
          ]}>
          {nome}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  boxImg: {
    width: 54,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 27,
  },
  img: {
    width: 43,
    height: 43,
    // borderColor: '#304FFE',
    // borderWidth: 5,
    // borderRadius: 20,
  },
  txtMood: {
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 18,
  },
});

export default Moods;
