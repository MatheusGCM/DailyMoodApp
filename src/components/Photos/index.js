import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './style';

const Photos = ({id, url, photo, photoSelected}) => {
  return (
    <TouchableOpacity
      style={styles.margin}
      activeOpacity={1}
      onPress={() => photoSelected({id, url})}>
      <Image
        source={{uri: 'https://shrouded-shelf-01513.herokuapp.com/' + url}}
        style={[styles.img, {borderColor: photo?.id === id ? '#304FFE' : null}]}
      />
    </TouchableOpacity>
  );
};

export default Photos;
