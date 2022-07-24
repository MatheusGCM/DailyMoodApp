import axios from 'axios';
import {Alert} from 'react-native';

const api = axios.create({
  baseURL: 'https://shrouded-shelf-01513.herokuapp.com/',
});

export async function login(dados) {
  if (dados.email !== '' && dados.senha !== '') {
    try {
      const {data} = await api.post('/oauth/token', {
        grant_type: 'password',
        email: dados.email,
        password: dados.senha,
        client_id: '3mGWGtxIEKyhq_HGG4cq6hsTOd_zn1SuTD3_cafjUPc',
        client_secret: '389JLi1Nd6DQ_soCI85C57ueTlMZ_JR7pRq6SJ0GaB0',
      });
      return data.access_token;
    } catch {
      Alert.alert('Atenção!!', 'Usuário não cadastrado');
      return '';
    }
  } else {
    Alert.alert('Atenção!!', 'Email ou senha inválidos');
  }
}

export default api;
