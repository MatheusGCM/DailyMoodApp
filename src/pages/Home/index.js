import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import Card from '../../components/Card';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {getDailyEntries} from '../../Services/api';

const Home = ({navigation}) => {
  const [dadosDaily, setDadosDaily] = useState([]);

  useEffect(() => {
    async function componentDidMount() {
      const responseDaily = await getDailyEntries();
      setDadosDaily(responseDaily);
    }
    componentDidMount();
  }, [dadosDaily]);

  const renderItem = ({item}) => {
    return <Card {...item} navigation={navigation} />;
  };
  return dadosDaily ? (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={dadosDaily}
      keyExtractor={item => String(item.id)}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListHeaderComponent={() => <View style={styles.separator} />}
      ListFooterComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={() => (
        <View style={styles.container}>
          <View style={styles.containerChild}>
            <Icon name="emoticon-neutral-outline" size={55} color="#ACACAC" />
            <Text style={styles.txt}>
              Você ainda não tem nenhum registro diário. Para começar, toque no
              ícone de adicionar na tela.
            </Text>
          </View>
        </View>
      )}
    />
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

export default Home;
