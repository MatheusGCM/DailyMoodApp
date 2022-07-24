import React from 'react';
import {FlatList, View} from 'react-native';
import Card from '../../components/Card';
import Dados from '../../components/Dados';
import styles from './style';

const Home = ({navigation}) => {
  const renderItem = ({item}) => {
    return <Card {...item} navigation={navigation} />;
  };
  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={Dados}
      keyExtractor={item => String(item.id)}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListHeaderComponent={() => <View style={styles.separator} />}
      ListFooterComponent={() => <View style={styles.separator} />}
    />
  );
};

export default Home;
