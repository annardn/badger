import { React, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { auth } from '../firebase';
import GeneralStyles from './GeneralStyles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Landing Page")
      }
    })

    return unsubscribe;
  }, [])

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message));
  }

  return (
    <View style={GeneralStyles.backDrop}>
      <View>

        <View style={{margin: 50, justifyContent: 'center'}}>
          <Text style={{fontSize:30, textAlign: 'center'}}>Good to see you again!</Text>
        </View>

        <View>
          <Text style={{fontSize:20}}>Username</Text>
          <TextInput 
            style={GeneralStyles.inputBox}
            value={email}
            onChangeText={text => setEmail(text)}/>
        </View>

        <View style={{marginTop: 40}}>
          <Text style={{fontSize:20}}>Password</Text>
          <TextInput 
            secureTextEntry={true} 
            style={GeneralStyles.inputBox}
            value={password}
            onChangeText={text => setPassword(text)}/>
        </View>

        <View style={{flexDirection: 'row', direction: 'rtl', justifyContent: 'space-between'}}>
          <TouchableOpacity style={[GeneralStyles.primaryButton, {
            width: 200,
            height: 60
          }]}
            onPress={handleLogin}
            >
            <Text style={{color: 'white', fontSize:17}}>Login</Text></TouchableOpacity>

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
};

const styles = StyleSheet.create({
});