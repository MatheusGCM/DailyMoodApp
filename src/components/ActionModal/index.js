/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import dadosMood from '../../mocks/dadosMood';
import dadosAtividade from '../../mocks/dadosAtividades';
import Moods from '../Moods';
import Atv from '../Atv';

function ActionModal({navigation}) {
  const [selecionado, setSelecionado] = useState(0);

  const selecionar = key => {
    setSelecionado(key);
    if (selecionado === key) {
      setSelecionado(0);
    }
  };
  return (
    <Modal animationType={'slide'}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.return}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Icon name="close" size={20} color="#657BFB" />
          </TouchableOpacity>
          <View style={styles.header}>
            <Text style={styles.txtMain}>Como você está?</Text>
            <View style={styles.flexDirection}>
              <Text style={styles.date}>HOJE, 23 DE JANEIRO</Text>
              <Text style={styles.date}>08:35</Text>
            </View>
          </View>
          <View
            style={{
              marginBottom: 50,
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '85%',
              alignSelf: 'center',
            }}>
            {dadosMood.map(item => (
              <Moods
                key={item.id}
                {...item}
                onPress={() => selecionar(item.id)}
                selecionado={selecionado}
              />
            ))}
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignSelf: 'center',
              justifyContent: 'center',
              width: '90%',
              borderWidth: 1,
              borderRadius: 15,
              paddingVertical: 20,
              marginBottom: 20,
            }}>
            {dadosAtividade.map(item => (
              <Atv key={item.id} {...item} />
            ))}
          </View>

          <View
            style={{
              width: '90%',
              height: 90,
              alignSelf: 'center',
              borderWidth: 1,
              borderRadius: 20,
              paddingHorizontal: 10,
              marginBottom: 20,
            }}>
            <TextInput
              placeholder="Escreva aqui o que aconteceu hoje..."
              multiline
              maxLength={100}
            />
          </View>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              width: '90%',
              height: 52,
              borderRadius: 6,
              marginBottom: 30,
              backgroundColor: '#304FFE',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: '900',
                lineHeight: 19,
              }}>
              SALVAR
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Modal>
  );
}

export default ActionModal;
