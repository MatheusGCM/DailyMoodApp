import createContext from './createContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../Services/api';

import {Alert} from 'react-native';

const initialState = {
  isLogged: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'isLogged':
      return {...state, isLogged: action.payload};
    default:
      return state;
  }
};
const loginUser = dispatch => {
  return async (email, senha) => {
    try {
      const {data} = await api.post('/oauth/token', {
        grant_type: 'password',
        email: email,
        password: senha,
        client_id: '3mGWGtxIEKyhq_HGG4cq6hsTOd_zn1SuTD3_cafjUPc',
        client_secret: '389JLi1Nd6DQ_soCI85C57ueTlMZ_JR7pRq6SJ0GaB0',
      });
      api.defaults.headers.Authorization = `Bearer ${data.access_token}`;
      await AsyncStorage.setItem('token', data.access_token);
    } catch (e) {
      Alert.alert('Atenção!!', 'Email ou senha inválidos');
    }
  };
};
// const logoutUser = dispatch => {
//   return async token => {
//     try {
//       await api.post('/oauth/revoke', {
//         token: token,
//       });
//       api.defaults.headers.Authorization = `Basic ${token}`;
//     } catch (e) {
//       console.warn(e);
//     }
//   };
// };
const setIsLogged = dispatch => {
  return boolean => {
    dispatch({type: 'isLogged', payload: boolean});
  };
};

export const {Context, Provider} = createContext(
  reducer,
  {loginUser, setIsLogged},
  initialState,
);
