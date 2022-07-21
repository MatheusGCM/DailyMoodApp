import React, {useState} from 'react';
import {View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const alerta = () => {
    // Alert.alert('ATENÇÃO!!', 'Preencha os campos.');
    return navigation.navigate('Home');
  };
  const entrar = () => {
    return navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="flipInY">
        <Image
          source={require('../../assets/login.png')}
          style={styles.imagemLogin}
        />
      </Animatable.View>
      <Animatable.View animation="fadeInUp" delay={500}>
        <TextInput
          placeholder="e-mail"
          placeholderTextColor="#969696"
          style={styles.inputLogin}
          maxLength={25}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="senha"
          secureTextEntry={true}
          placeholderTextColor="#969696"
          style={styles.inputLogin}
          maxLength={8}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity
          style={styles.btnEntrar}
          onPress={() => (email !== '' && senha !== '' ? entrar() : alerta())}>
          <Text style={styles.txtEntrar}>ENTRAR</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default Login;
