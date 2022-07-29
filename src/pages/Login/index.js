import React, {useContext, useState} from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import {Context} from '../../context/authContext';

const Login = ({navigation}) => {
  const {loginUser, setIsLogged} = useContext(Context);
  const {state} = useContext(Context);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      touchSoundDisabled>
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <Animatable.View animation="flipInY" style={styles.boxImg}>
          <Image
            source={require('../../assets/login.png')}
            style={styles.imagemLogin}
          />
        </Animatable.View>
        <Animatable.View
          animation="fadeInUp"
          delay={500}
          style={styles.boxFlex}>
          <View style={styles.boxInputs}>
            <TextInput
              placeholder="e-mail"
              placeholderTextColor="#969696"
              style={styles.input}
              maxLength={25}
              value={email}
              onChangeText={value => setEmail(value)}
              keyboardType="email-address"
              autoComplete="email"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <TextInput
              placeholder="senha"
              secureTextEntry={true}
              placeholderTextColor="#969696"
              style={styles.input}
              value={senha}
              onChangeText={value => setSenha(value)}
              autoCapitalize="none"
            />
          </View>
          <TouchableOpacity
            style={styles.btnEntrar}
            onPress={() => {
              if (
                email === '' ||
                senha === '' ||
                email.length < 4 ||
                senha.length < 4
              ) {
                Alert.alert('Atenção!!', 'Email ou senha inválidos');
                return;
              }
              loginUser(email, senha);
              setIsLogged(true);
              setEmail('');
              setSenha('');
            }}>
            <Text style={styles.txtEntrar}>ENTRAR</Text>
          </TouchableOpacity>
        </Animatable.View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
