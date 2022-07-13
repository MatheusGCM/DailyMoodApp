import React from 'react';
import {View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './style';

import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/login.png')}
          style={styles.imagemLogin}
        />
      </View>
      <TextInput
        placeholder="e-mail"
        placeholderTextColor="#969696"
        style={styles.inputLogin}
      />
      <TextInput
        placeholder="senha"
        secureTextEntry={true}
        placeholderTextColor="#969696"
        style={styles.inputLogin}
      />
      <TouchableOpacity
        style={styles.btnEntrar}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.txtEntrar}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
