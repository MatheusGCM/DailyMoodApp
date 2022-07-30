import React, {useEffect, useState} from 'react';

import Photos from '../../components/Photos';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {getPhotos, updateUser} from '../../Services/api';
import Loading from '../Loading';

const ModalChageImg = ({onPress, gender, navigation}) => {
  const [dataPhotos, setDataPhotos] = useState([]);
  const [photo, setPhoto] = useState();
  const [upUser, setUpUser] = useState({
    user: {
      gender: gender,
      photo_id: 0,
    },
  });
  const photoSelected = dados => {
    setPhoto(dados);
    setUpUser(item => ({
      user: {
        ...item.user,
        photo_id: dados.id,
      },
    }));
  };
  useEffect(() => {
    const getResponsePhotos = async () => {
      const dataResponsePhotos = await getPhotos();
      setDataPhotos(dataResponsePhotos);
    };
    getResponsePhotos();
  }, []);

  const renderItem = ({item}) => {
    return <Photos {...item} photo={photo} photoSelected={photoSelected} />;
  };

  return dataPhotos ? (
    <View>
      <TouchableOpacity style={styles.close} onPress={onPress}>
        <Icon name="close" size={20} color="#657BFB" />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.txt}>Selecione a foto de perfil</Text>
        <FlatList
          keyExtractor={item => String(item.id)}
          data={dataPhotos}
          renderItem={renderItem}
          horizontal={false}
          numColumns={3}
        />
      </View>
      <View style={styles.boxBtn}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.4}
          onPress={() => {
            updateUser(upUser);
          }}>
          <Text style={styles.txtButton}>CONFIRMAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <Loading />
  );
};

export default ModalChageImg;
