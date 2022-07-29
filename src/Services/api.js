import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const token = AsyncStorage.getItem('token');

const api = axios.create({
  baseURL: 'https://shrouded-shelf-01513.herokuapp.com/',
  headers: {Authorization: 'Bearer ' + token},
});

export async function getPhotos() {
  try {
    const {data} = await api.get('photos');
    return data;
  } catch (error) {
    console.warn(error);
  }
}
export async function loginUser(email, senha) {
  try {
    const {data} = await api.post('/oauth/token', {
      grant_type: 'password',
      email: email,
      password: senha,
      client_id: '3mGWGtxIEKyhq_HGG4cq6hsTOd_zn1SuTD3_cafjUPc',
      client_secret: '389JLi1Nd6DQ_soCI85C57ueTlMZ_JR7pRq6SJ0GaB0',
    });
    return data;
  } catch (error) {
    console.warn(error);
  }
}

export async function addDaily(newUser) {
  try {
    const {data} = await api.post('daily_entries', newUser);
    return data;
  } catch (error) {
    console.warn(error);
  }
}
export async function getDaily(id) {
  try {
    const {data} = await api.get(`daily_entries/${id}`);
    return data;
  } catch (error) {
    console.warn(error);
  }
}
export async function getDailyEntries() {
  try {
    const {data} = await api.get('daily_entries');
    return data;
  } catch (error) {
    console.warn(error);
  }
}
// export function deleteDaily(...id) {
//   if (id.length > 1) {
//     id.map(itemId =>
//       api
//         .delete(`daily_entries/${itemId}`)
//         .then()
//         .catch(error => console.warn(error)),
//     );
//   } else {
//     api
//       .delete(`daily_entries/${id}`)
//       .then()
//       .catch(error => console.warn(error));
//   }
// }
export async function getActivities() {
  try {
    const {data} = await api.get('activities');
    return data;
  } catch (error) {
    console.warn(error);
  }
}
export async function getUser() {
  try {
    const {data} = await api.get('user');
    return data;
  } catch (error) {
    console.warn(error);
  }
}
export async function updateUser(up) {
  try {
    const {data} = await api.put('user', up);
    return data;
  } catch (error) {
    console.warn(error);
  }
}

export default api;
