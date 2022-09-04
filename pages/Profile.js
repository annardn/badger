import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { auth } from '../firebase';
import GeneralStyles from './GeneralStyles';

export default function Profile({ navigation }) {
  const handleSignout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Home")
      })
      .catch(error => alert(error.message))
  }
  return (
    <View style={GeneralStyles.backDrop}>
      <TouchableOpacity style={[GeneralStyles.primaryButton, {
            width: 200,
            height: 60
          }]}
            onPress={handleSignout}
      >
        <Text style={{color: 'white', fontSize:17}}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}