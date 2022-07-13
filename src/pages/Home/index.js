/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList} from 'react-native';
import Card from '../../components/Card';
import Dados from '../../components/Dados';

const Home = () => {
  return (
    <FlatList
      contentContainerStyle={{
        marginStart: 27,
        marginEnd: 21,
        paddingBottom: 20,
      }}
      data={Dados}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => <Card {...item} />}
    />
  );
};

export default Home;
