import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import styles from './style';
import {getDaily} from '../../Services/api';
import dateFormat from '../../function/dateFormat';
import switchMoods from '../../function/switchMoods';
import switchActivities from '../../function/switchActivities';

const Details = ({route, navigation}) => {
  const [daily, setDaily] = useState([]);
  const {hoursFull, dateFull} = dateFormat(daily && daily.created_at);
  const {img, txt, color} = switchMoods(daily && daily.mood);

  const id = route.params;

  useEffect(() => {
    async function componentDidMount() {
      const responseDataDaily = await getDaily(id);
      setDaily(responseDataDaily);
    }
    componentDidMount();
  }, [id]);
  console.log(daily.activities);

  return daily.activities ? (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.return}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="chevron-left" size={30} color="#657BFB" />
      </TouchableOpacity>

      <View style={styles.header}>
        <View style={styles.direction}>
          <IconFeather name="clock" size={15} color="#969696" />
          <Text style={styles.txtHeader}>{hoursFull}</Text>
        </View>
        <View style={styles.direction}>
          <IconFeather name="calendar" size={15} color="#969696" />
          <Text style={styles.txtHeader}>{dateFull}</Text>
        </View>
      </View>

      <Image source={img} style={styles.img} />
      <Text style={[styles.txtHumor, {color: color}]}>{txt}</Text>

      <View style={styles.mid}>
        {daily.activities.map(({key, name}, i) => {
          const {nameIcon, nameActivities} = switchActivities(name);
          return (
            <View key={String(i)} style={styles.midContent}>
              <View style={styles.icon}>
                <Icon name={nameIcon} size={27} color="white" />
              </View>
              <Text style={styles.txtIcon}>{nameActivities}</Text>
            </View>
          );
        })}
      </View>

      <View style={styles.footer}>
        <Text style={styles.txtDescricao}>{daily.description}</Text>
      </View>
    </View>
  ) : (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator color="#304FFE" size={50} />
      <Text
        style={{
          fontSize: 20,
          color: 'rgba(0,0,0,0.6)',
          fontWeight: '400',
          marginTop: 10,
        }}>
        Carregando
      </Text>
    </View>
  );
};

export default Details;
