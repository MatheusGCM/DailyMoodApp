import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import styles from './style';

const Details = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.return}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Icon name="chevron-left" size={30} color="#657BFB" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.txtHeader}>
          <IconFeather name="clock" size={15} color="#969696" />
          {route.params.hora}
        </Text>
        <Text style={styles.txtHeader}>
          <IconFeather name="calendar" size={15} color="#969696" />
          {route.params.dia}
        </Text>
      </View>

      <Image source={route.params.emoji} style={styles.img} />
      <Text style={[styles.txtHumor, {color: route.params.color}]}>
        {route.params.humor}
      </Text>

      <View style={styles.mid}>
        <View style={styles.midContent}>
          <View style={styles.icon}>
            <Icon
              name={route.params.atividade[0].icone}
              size={27}
              color="white"
            />
          </View>
          <Text style={styles.txtIcon}>{route.params.atividade[0].nome}</Text>
        </View>

        <View style={styles.midContent}>
          <View style={styles.icon}>
            <Icon
              name={route.params.atividade[1].icone}
              size={27}
              color="white"
            />
          </View>
          <Text style={styles.txtIcon}>{route.params.atividade[1].nome}</Text>
        </View>

        <View style={styles.midContent}>
          <View style={styles.icon}>
            <Icon
              name={route.params.atividade[2].icone}
              size={27}
              color="white"
            />
          </View>
          <Text style={styles.txtIcon}>{route.params.atividade[2].nome}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.txtDescricao}>{route.params.descricao}</Text>
      </View>
    </View>
  );
};

export default Details;
