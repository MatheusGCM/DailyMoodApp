import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

const ModalExit = ({modalVisible, setModalVisible}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.areaExit}
          onPress={setModalVisible}
        />
        <View style={styles.modalView}>
          <Text style={styles.modalTxtHeader}>Atenção</Text>
          <Text style={styles.modalTxtMid}>Deseja mesmo sair?</Text>
          <View style={styles.modalContainerFooter}>
            <View style={styles.modalContentFooter}>
              <TouchableOpacity onPress={setModalVisible}>
                <Text style={styles.modalTxtFooter}>CANCELAR</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.modalTxtFooter}>SIM</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.areaExit}
          onPress={setModalVisible}
        />
      </View>
    </Modal>
  );
};

export default ModalExit;
