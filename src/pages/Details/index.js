import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import styles from './style';

const Details = ({route, navigation}) => {
  const {emoji, dia, humor, hora, atividade, descricao, color} = route.params;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.return}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="chevron-left" size={30} color="#657BFB" />
      </TouchableOpacity>

      <View style={styles.header}>
        <View style={styles.direction}>
          <IconFeather name="clock" size={15} color="#969696" />
          <Text style={styles.txtHeader}>{hora}</Text>
        </View>
        <View style={styles.direction}>
          <IconFeather name="calendar" size={15} color="#969696" />
          <Text style={styles.txtHeader}>{dia}</Text>
        </View>
      </View>

      <Image source={emoji} style={styles.img} />
      <Text style={[styles.txtHumor, {color: color}]}>{humor}</Text>

      <View style={styles.mid}>
        <View style={styles.midContent}>
          <View style={styles.icon}>
            <Icon name={atividade[0].icone} size={27} color="white" />
          </View>
          <Text style={styles.txtIcon}>{atividade[0].nome}</Text>
        </View>

        <View style={styles.midContent}>
          <View style={styles.icon}>
            <Icon name={atividade[1].icone} size={27} color="white" />
          </View>
          <Text style={styles.txtIcon}>{atividade[1].nome}</Text>
        </View>

        <View style={styles.midContent}>
          <View style={styles.icon}>
            <Icon name={atividade[2].icone} size={27} color="white" />
          </View>
          <Text style={styles.txtIcon}>{atividade[2].nome}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.txtDescricao}>{descricao}</Text>
      </View>
    </View>
  );
};

export default Details;
