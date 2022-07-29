import React, {useContext} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './style';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Context} from '../../context/authContext';

const ModalExit = ({modalVisible, setModalVisible}) => {
  const navigation = useNavigation();
  const {setIsLogged} = useContext(Context);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <TouchableWithoutFeedback onPress={setModalVisible} touchSoundDisabled>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTxtHeader}>Atenção</Text>
            <Text style={styles.modalTxtMid}>Deseja mesmo sair?</Text>
            <View style={styles.modalContainerFooter}>
              <View style={styles.modalContentFooter}>
                <TouchableOpacity onPress={setModalVisible}>
                  <Text style={styles.modalTxtFooter}>CANCELAR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={async () => {
                    await AsyncStorage.removeItem('token');
                    setIsLogged(false);
                  }}>
                  <Text style={styles.modalTxtFooter}>SIM</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalExit;
