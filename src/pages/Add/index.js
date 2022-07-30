import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import dadosMood from '../../mocks/dadosMood';
import Moods from '../../components/Moods';
import Atv from '../../components/Atv';
import Data from '../../components/Dates';

import {addDaily, getActivities} from '../../Services/api';
import Loading from '../../components/Loading';

function Add({navigation}) {
  const [moodSelected, setMoodSelected] = useState([]);
  const [activities, setActivities] = useState([]);
  const [listDataActive, setListDataActive] = useState([]);
  const [daily, setDaily] = useState({
    daily_entry: {
      mood: '',
      activity_ids: [],
      description: '',
    },
  });

  useEffect(() => {
    async function getAtv() {
      const responseActivities = await getActivities();
      setActivities(responseActivities);
    }
    getAtv();
  }, []);

  const selectMood = moodSelecionado => {
    setMoodSelected(moodSelecionado);
    setDaily(itens => ({
      daily_entry: {
        ...itens.daily_entry,
        mood: moodSelecionado.txt,
      },
    }));
  };
  const CreateDailyEntry = () => {
    if (daily.daily_entry.mood !== '') {
      addDaily(daily);
      navigation.navigate('Home');
    } else {
      Alert.alert('Atenção!!', 'Informe seu humor');
    }
  };
  return activities ? (
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
          <View style={styles.boxMood}>
            {dadosMood.map(item => (
              <Moods
                key={item.id}
                {...item}
                selectMood={selectMood}
                moodSelected={moodSelected}
              />
            ))}
          </View>
          <View style={styles.boxAtividade}>
            {activities.map(({id, name}, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={1}
                  onPress={() => {
                    if (listDataActive.length < 3) {
                      setListDataActive([...listDataActive, id]);

                      setDaily(prevState => ({
                        daily_entry: {
                          ...prevState.daily_entry,
                          activity_ids: [
                            ...prevState.daily_entry.activity_ids,
                            id,
                          ],
                        },
                      }));
                    } else if (!listDataActive.includes(id)) {
                      Alert.alert(
                        'Atenção!!',
                        'Selecionar o máximo de 3 itens',
                      );
                    }
                    if (listDataActive.includes(id)) {
                      const fullListActives = listDataActive.filter(active => {
                        return active !== id;
                      });
                      setListDataActive([...fullListActives]);

                      setDaily(prevState => ({
                        daily_entry: {
                          ...prevState.daily_entry,
                          activity_ids: [...fullListActives],
                        },
                      }));
                    }
                  }}>
                  <Atv
                    key={index}
                    name={name}
                    style={
                      listDataActive.includes(id) && styles.activities.active
                    }
                    color={listDataActive.includes(id) ? '#eee' : '#111'}
                  />
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={styles.boxInput}>
            <TextInput
              style={styles.colorInput}
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
            style={styles.button}
            onPress={() => CreateDailyEntry()}>
            <Text style={styles.txtButton}>SALVAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Modal>
  ) : (
    <Loading />
  );
}

export default Add;
