import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import switchActivities from '../../function/switchActivities';

function Atv({id, name, style, color}) {
  const {nameIcon, nameActivities} = switchActivities(name);
  return (
    <View style={styles.activitiesItem}>
      <View style={[styles.boxIcon, style]}>
        <Icon
          key={id}
          name={nameIcon}
          size={35}
          style={[styles.activitiesIcon, {color: color}]}
        />
      </View>
      <View style={styles.boxActivitiesText}>
        <Text style={styles.activitiesText}>{nameActivities}</Text>
      </View>
    </View>
  );
}

export default Atv;
