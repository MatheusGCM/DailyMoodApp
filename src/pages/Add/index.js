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
import dadosAtividade from '../../mocks/dadosAtividade';
import Moods from '../../components/Moods';
import Atv from '../../components/Atv';
import Data from '../../components/Dates';

import {addDaily} from '../../Services/api';

function Add({navigation}) {
  const [moodSelected, setMoodSelected] = useState([]);

  const [atividades, setAtividades] = useState([...dadosAtividade]);
  const [activitySelected, setActivitySelected] = useState([]);
  const [cont, setCont] = useState(0);
  const [daily, setDaily] = useState({
    daily_entry: {
      mood: '',
      activity_ids: [],
      description: '',
    },
  });

  const selectMood = moodSelecionado => {
    setMoodSelected(moodSelecionado);
    setDaily(itens => ({
      daily_entry: {
        ...itens.daily_entry,
        mood: moodSelecionado.txt,
      },
    }));
  };
  const selectActivity = atividadeSelecionada => {
    if (atividadeSelecionada.selecionado) {
      //Mudar o valor da atividade já selecionada para false
      setAtividades(atividadesAnteriores =>
        atividadesAnteriores.map(atividade => ({
          ...atividade,
          selecionado: !(
            atividade.id === atividadeSelecionada.id || !atividade.selecionado
          ),
        })),
      );
      const lista = activitySelected.filter(item => {
        return item !== atividadeSelecionada.id;
      });
      setActivitySelected([...lista]);
      setDaily(itens => ({
        daily_entry: {
          ...itens.daily_entry,
          activity_ids: [...lista],
        },
      }));
      setCont(cont - 1);
    } else {
      if (cont < 3) {
        //Selecionar até 3 atividades
        setActivitySelected([...activitySelected, atividadeSelecionada.id]);
        setDaily(itens => ({
          daily_entry: {
            ...itens.daily_entry,
            activity_ids: [
              ...itens.daily_entry.activity_ids,
              atividadeSelecionada.id,
            ],
          },
        }));
        setAtividades(atividadesAnteriores =>
          atividadesAnteriores.map(atividade => ({
            ...atividade,
            selecionado:
              atividade.id === atividadeSelecionada.id || atividade.selecionado,
          })),
        );
        setCont(cont + 1);
      }
    }
  };
  const CreateDailyEntry = () => {
    addDaily(daily);
    navigation.navigate('Home');
  };
  return (
    <Modal
      animationType={'fade'}
      onRequestClose={() => {
        navigation.goBack();
      }}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.close}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="close" size={20} color="#657BFB" />
          </TouchableOpacity>
          <View style={styles.header}>
            <Text style={styles.txtMain}>Como você está?</Text>
            <View style={styles.flexDirection}>
              <Data />
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
                selectMood={selectMood}
                moodSelected={moodSelected}
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
            {atividades.map(item => (
              <Atv key={item.id} {...item} selectActivity={selectActivity} />
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
              style={{color: 'black'}}
              placeholder="Escreva aqui o que aconteceu hoje..."
              placeholderTextColor="#969696"
              multiline
              maxLength={100}
              onChangeText={value => {
                setDaily(itens => ({
                  daily_entry: {
                    ...itens.daily_entry,
                    description: value,
                  },
                }));
              }}
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
            }}
            onPress={() => CreateDailyEntry()}>
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

export default Add;
