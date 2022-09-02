import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import GeneralStyles from './GeneralStyles';
import BadgerText from './BadgerText';

export default function Signup({ navigation }) {
  return (
    <View style={GeneralStyles.backDrop}>
    <View>

      <View style={{margin: 50}}>
        <Text style={{fontSize:30, textAlign: 'center'}}>Welcome to B@dger!</Text>
      </View>

      <View>
        <Text style={{fontSize:20}}>Username</Text>
        <TextInput style={GeneralStyles.inputBox}></TextInput>
      </View>

      <View style={{marginTop: 40}}>
        <Text style={{fontSize:20}}>Email</Text>
        <TextInput style={GeneralStyles.inputBox}></TextInput>
      </View>

      <View style={{marginTop: 40}}>
        <Text style={{fontSize:20}}>Password</Text>
        <TextInput secureTextEntry={true} style={GeneralStyles.inputBox}></TextInput>
      </View>

      <View style={{flexDirection: 'row', direction: 'rtl', justifyContent: 'space-between'}}>
          <TouchableOpacity style={[GeneralStyles.primaryButton, {
            width: 200,
            height: 60
          }]}
            onPress={() => navigation.navigate("Landing Page")}>
            <Text style={{color: 'white', fontSize:17}}>Sign Up</Text></TouchableOpacity>

          <TouchableOpacity style={[GeneralStyles.secondaryButton, {
            width: 100,
            height: 60
          }]}
            onPress={() => navigation.navigate('Home')}>
              <Text style={{color: 'white', fontSize:17}}>Back</Text></TouchableOpacity>

        </View>
    </View>
  </View>
  );
}