import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import Card from '../../components/Card';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {getDailyEntries} from '../../Services/api';
import Loading from '../../components/Loading';

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
      data={dadosDaily.reverse()}
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
    <Loading />
  );
};

export default Home;
