/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
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
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#304FFE',
      }}>
      <Animatable.View
        animation="flipInY"
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../assets/login.png')}
          style={{width: 228, height: 228, marginBottom: 100}}
        />
        <ActivityIndicator color="#fff" size={40} />
      </Animatable.View>
    </View>
  );
};

export default Preload;
