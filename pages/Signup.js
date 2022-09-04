import { React, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import GeneralStyles from './GeneralStyles';
import BadgerText from './BadgerText';
import { auth, updateProfile } from '../firebase';

export default function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Landing Page")
      }
    })

    return unsubscribe;
  }, [])

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(
        userCredentials => {
        const user = userCredentials.user;
        console.log('Registed with:', user.email);
      })
      .catch(error => alert(error.message));

    //  auth
    //   .currentUser?.updateProfile({
    //     displayName: username
    //   }).then(currentUser => {
    //     console.log(currentUser.displayName)
    //   })

  }

  return (
    <View style={GeneralStyles.backDrop}>
    <View>

      <View style={{margin: 50}}>
        <Text style={{fontSize:30, textAlign: 'center'}}>Welcome to B@dger!</Text>
      </View>

      <View>
        <Text style={{fontSize:20}}>Username</Text>
        <TextInput style={GeneralStyles.inputBox}
            value={username}
            onChangeText={text => setUsername(text)}/>
      </View>

      <View style={{marginTop: 40}}>
        <Text style={{fontSize:20}}>Email</Text>
        <TextInput style={GeneralStyles.inputBox}
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={{marginTop: 40}}>
        <Text style={{fontSize:20}}>Password</Text>
        <TextInput 
            secureTextEntry={true} 
            style={GeneralStyles.inputBox}
            value={password}
            onChangeText={text => setPassword(text)}
          />
      </View>

      <View style={{flexDirection: 'row', direction: 'rtl', justifyContent: 'space-between'}}>
          <TouchableOpacity style={[GeneralStyles.primaryButton, {
            width: 200,
            height: 60
          }]}
            // onPress={() => navigation.navigate("Landing Page")}
            onPress={handleSignup}
            >
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