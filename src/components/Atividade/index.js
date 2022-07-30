import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import switchActivities from '../../function/switchActivities';
import styles from './style';

const Atividade = ({activities}) => {
  return (
    <View style={styles.container}>
      {activities.map((item, i) => {
        const {nameIcon, nameActivities} = switchActivities(item.name);
        return (
          <View key={String(item.id)} style={styles.box}>
            {i > 0 && (
              <Icon style={styles.icon} name="circle" color="black" size={5} />
            )}
            <View style={styles.flex}>
              <Icon name={nameIcon} size={20} color="#111" />
              <Text style={styles.txtIcon}>{nameActivities}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Atividade;
