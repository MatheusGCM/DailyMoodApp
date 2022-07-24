import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';

const EditProfile = () => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          alignSelf: 'center',
          width: '85%',
        }}>
        <View>
          <Image
            source={require('../../assets/happy.png')}
            style={{width: 128, height: 128, marginTop: 50, marginBottom: 47}}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              width: 182,
              height: 44,
              backgroundColor: 'rgba(48, 79, 254, 0.14)',
              borderRadius: 6,
              borderWidth: 2,
              borderColor: '#BFC6F5',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '900',
                lineHeight: 19,
                color: '#304FFE',
              }}>
              ALTERAR FOTO
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
