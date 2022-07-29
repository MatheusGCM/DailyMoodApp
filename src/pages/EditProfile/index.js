import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './style';
import Input from '../../components/InputsEditProfile';
import Button from '../../components/Button';
import ModalChageImg from '../../components/ModalChangeImg';
import dateFormat from '../../function/dateFormat';
import {getUser, updateUser} from '../../Services/api';

const EditProfile = ({navigation, route}) => {
  const user = route.params;
  const [userPhoto, setUserPhoto] = useState();
  const [upUser, setUpUser] = useState({
    user: {
      gender: '',
      photo_id: userPhoto?.photo.id,
    },
  });
  useEffect(() => {
    const getResponseUser = async () => {
      const responseUser = await getUser();
      setUserPhoto(responseUser);
    };
    getResponseUser();
  }, [userPhoto]);
  const gender = {
    male: 'MASCULINO',
    female: 'FEMININO',
    other: 'OUTROS',
  };
  const gender2 = {
    MASCULINO: 'male',
    FEMININO: 'female',
    OUTROS: 'other',
  };
  const options = ['FEMININO', 'MASCULINO', 'OUTROS'];

  const [genero, setGenero] = useState(gender[user.gender]);
  const [modalChangeImg, setModalChangeImg] = useState(false);
  const [modalSelect, setModalSelect] = useState(false);
  const {birthDate} = dateFormat(user && user.birthdate);

  const select = () => {
    setModalSelect(true);
  };
  const selected = op => {
    setGenero(op);
    setUpUser(item => ({
      user: {
        ...item.user,
        gender: gender2[op],
      },
    }));
    setModalSelect(false);
  };
  const exitModal = () => {
    setModalChangeImg(false);
  };
  return userPhoto ? (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.boxHeader}>
          <View>
            <Image
              source={{
                uri:
                  'https://shrouded-shelf-01513.herokuapp.com/' +
                  userPhoto.photo.url,
              }}
              style={styles.img}
            />
          </View>
          <TouchableOpacity
            style={styles.btnChangeImg}
            onPress={() => setModalChangeImg(true)}>
            <Text style={styles.txtBtnChangeImg}>ALTERAR FOTO</Text>
          </TouchableOpacity>
          <Modal
            animationType="fade"
            transparent={false}
            visible={modalChangeImg}
            onRequestClose={() => {
              setModalChangeImg(!modalChangeImg);
            }}>
            <ModalChageImg
              onPress={exitModal}
              gender={user.gender}
              navigation={navigation}
            />
          </Modal>
        </View>
        <View style={styles.marginBottom}>
          <Input label="NOME" value={user.name.toUpperCase()} />
          <Input
            label="E-MAIL"
            value={user.email.toUpperCase()}
            editable={false}
          />
          <Input
            label="GÊNERO"
            value={genero}
            icone={'chevron-down'}
            editable={false}
            select={select}
          />
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalSelect}
            onRequestClose={() => {
              setModalSelect(!modalSelect);
            }}>
            <TouchableWithoutFeedback
              onPress={() => setModalSelect(false)}
              touchSoundDisabled>
              <View style={styles.centralizedModal}>
                <View style={styles.boxModal}>
                  {options.map((op, i) => (
                    <View
                      style={[
                        styles.boxBtnModal,
                        {borderBottomWidth: i < 2 ? 1 : 0},
                      ]}
                      key={i}>
                      <TouchableOpacity
                        style={styles.btnModal}
                        onPress={() => selected(op)}>
                        <Text style={styles.btnModalTxt}>{op}</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>

          <Input label="DATA DE NASCIMENTO" value={birthDate} />
        </View>
        <Button
          txt="SALVAR"
          onPress={() => {
            updateUser(upUser);
            navigation.navigate('Profile');
          }}
        />
      </View>
    </ScrollView>
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

export default EditProfile;
