import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import GeneralStyles from './GeneralStyles';

export default function Login() {
  return (
    <View style={GeneralStyles.backDrop}>
      <View>

        <View style={{margin: 50, justifyContent: 'center'}}>
          <Text style={{fontSize:30, textAlign: 'center'}}>Good to see you again!</Text>
        </View>

        <View>
          <Text style={{fontSize:20}}>Username</Text>
          <TextInput style={GeneralStyles.inputBox}></TextInput>
        </View>

        <View style={{marginTop: 40}}>
          <Text style={{fontSize:20}}>Password</Text>
          <TextInput secureTextEntry={true} style={GeneralStyles.inputBox}></TextInput>
        </View>

        <TouchableOpacity style={[GeneralStyles.primaryButton, {
          width: 100,
          height: 60,
          alignSelf: 'flex-end'
        }]}><Text style={{color: 'white', fontSize:17}}>Login</Text></TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
});