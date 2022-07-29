import createContext from './createContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../Services/api';

import {useNavigation} from '@react-navigation/native';

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
      await AsyncStorage.setItem('token', data.access_token);
    } catch (e) {
      console.log('Deu pau', e);
    }
  };
};
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
