import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import GeneralStyles from './GeneralStyles';

export default function Header() {
  return (
    <View style={{backgroundColor: 'white', width:'100%', alignItems: 'center'}}>
      <Image source={require('./logo-only.png')} style={styles.logo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  logo:{
    width: 60,
    height: 60,
    margin: 10
  }
});