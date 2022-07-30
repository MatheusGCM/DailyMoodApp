import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
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
            {color: moodSelected.id === id ? '#C801FA' : '#969696'},
          ]}>
          {nome}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Moods;
