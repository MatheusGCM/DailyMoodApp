import React from 'react';
import {FlatList} from 'react-native';
import Card from '../../components/Card';
import Dados from '../../components/Dados';
import styles from './style';

const Home = () => {
  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={Dados}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => <Card {...item} />}
    />
  );
};

export default Home;
