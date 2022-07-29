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
