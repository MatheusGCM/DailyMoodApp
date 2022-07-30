/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../Services/api';
import {useNavigation} from '@react-navigation/native';
import {Context} from '../../context/authContext';

const Preload = () => {
  const {setIsLogged} = useContext(Context);
  const navigation = useNavigation();

  useEffect(() => {
    const preloadToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        try {
          const {data} = await api.get('/daily_entries', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          api.defaults.headers.Authorization = `Bearer ${token}`;
          setIsLogged(true);
        } catch (e) {
          navigation.navigate('Login');
        }
      } else {
        navigation.navigate('Login');
      }
    };
    preloadToken();
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.View animation="flipInY" style={styles.boxImg}>
        <Image source={require('../../assets/login.png')} style={styles.img} />
        <ActivityIndicator color="#fff" size={40} />
      </Animatable.View>
    </View>
  );
};

export default Preload;
