import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

const InputsEditProfile = ({label, value, icone, editable, select}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.boxInput}>
          <TextInput value={value} style={styles.input} editable={editable} />

          {icone && (
            <TouchableOpacity style={styles.btnSelect} onPress={select}>
              <Icon name={icone} size={40} color="#000" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default InputsEditProfile;
