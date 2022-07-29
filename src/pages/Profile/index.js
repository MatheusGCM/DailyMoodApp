import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/Button';
import ModalExit from '../../components/ModalExit';
import dateFormat from '../../function/dateFormat';
import {getUser} from '../../Services/api';
import styles from './style';

const Profile = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState();
  const {birthDate} = dateFormat(user && user.birthdate);

  useEffect(() => {
    const getResponseUser = async () => {
      const responseUser = await getUser();
      setUser(responseUser);
    };
    getResponseUser();
  }, [user]);
  return user ? (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: 'https://shrouded-shelf-01513.herokuapp.com' + user.photo.url,
          }}
          style={styles.img}
        />
      </View>
      <View>
        <Text style={styles.txtMain}>Olá, {user.name}</Text>
      </View>
      <View style={styles.boxDados}>
        <Text>
          <Text style={styles.txtDadosBold}>E-MAIL: </Text>
          <Text style={styles.txtDados}>{user.email.toUpperCase()}</Text>
        </Text>
        <Text>
          <Text style={styles.txtDadosBold}>GÊNERO: </Text>
          <Text style={styles.txtDados}>
            {user.gender === 'male'
              ? 'MASCULINO'
              : user.gender === 'female'
              ? 'FEMININO'
              : 'OUTROS'}
          </Text>
        </Text>
        <Text>
          <Text style={styles.txtDadosBold}>DATA DE NASCIMENTO: </Text>
          <Text style={styles.txtDados}>{birthDate}</Text>
        </Text>
      </View>
      <Button
        txt="EDITAR PERFIL"
        onPress={() => navigation.navigate('EditProfile', user)}
      />

      <TouchableOpacity
        style={styles.buttonSair}
        activeOpacity={0.4}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.txtButtonSair}>SAIR</Text>
      </TouchableOpacity>

      <ModalExit
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
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

export default Profile;
