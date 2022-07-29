/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const Moods = ({id, nome, txt, img, selectMood, moodSelected}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() =>
        selectMood({
          id,
          nome,
          txt,
          img,
        })
      }>
      <View style={styles.container}>
        <View
          style={[
            styles.boxImg,
            {backgroundColor: moodSelected.id === id ? '#304FFE' : null},
          ]}>
          <Image source={img} style={styles.img} />
        </View>
        <Text
          style={[
            styles.txtMood,
            {color: moodSelected.id === id ? '#C801FA' : null},
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
