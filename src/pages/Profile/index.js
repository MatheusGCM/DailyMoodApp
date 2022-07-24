import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ModalExit from '../../components/modalExit';
import styles from './style';

const Profile = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../assets/happy.png')} style={styles.img} />
      </View>
      <View>
        <Text style={styles.txtMain}>Olá, Fulana</Text>
      </View>
      <View style={styles.boxDados}>
        <Text>
          <Text style={styles.txtDadosBold}>E-MAIL: </Text>
          <Text style={styles.txtDados}>FULANA@GMAIL.COM</Text>
        </Text>
        <Text>
          <Text style={styles.txtDadosBold}>GÊNERO: </Text>
          <Text style={styles.txtDados}>FEMININO</Text>
        </Text>
        <Text>
          <Text style={styles.txtDadosBold}>DATA DE NASCIMENTO: </Text>
          <Text style={styles.txtDados}>15/12/1998</Text>
        </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonEditar}
        activeOpacity={0.4}
        onPress={() => navigation.navigate('EditProfile')}>
        <Text style={styles.txtButtonEditar}>EDITAR PERFIL</Text>
      </TouchableOpacity>

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
  );
};

export default Profile;
