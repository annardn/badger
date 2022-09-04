import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import GeneralStyles from './GeneralStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './Header';
import Profile from './Profile';


import DatePicker from 'react-native-date-picker'
import { auth } from '../firebase';

const Tab = createBottomTabNavigator();

// const [date, setDate] = useState(new Date())

export default function LandingPage({ navigation }) {
  return(
    <View style={GeneralStyles.backDrop}>
      <Header/>

      <View style={{flexDirection: 'row', direction: 'ltr', justifyContent: 'space-between'}}>
        
        <View style={{margin:30}}>
          <Image source={require('./icon-placeholder.png')} style={styles.icon}/>
        </View>
        
        <View style={{justifyContent: 'center', margin: 20}}>
          <Text style={{fontSize: 30}}>Welcome,</Text>
          <Text style={{textDecorationLine: true, fontSize: 30}}>{auth.currentUser?.displayName}!</Text>
        </View>

      </View>


      <View style={{justifyContent: 'center', width: '75%'}}>
          <Text style={[styles.defaultText, {textAlign: 'center'}]}>Are you currently free?</Text>
          <View style={{borderBottomColor: 'black',
           borderBottomWidth:1,
           }}></View>

           <View style={{flexDirection: 'row', margin: 10}}>
            <Text style={styles.defaultText}>I am free until</Text>
            <TouchableOpacity style={styles.selector}></TouchableOpacity>
            {/* <DatePicker date={date} onDateChange={setDate} /> */}
           </View>

           <View style={{flexDirection: 'row', margin: 10}}>
            <Text style={styles.defaultText}>to</Text>
            <TouchableOpacity style={styles.selector}></TouchableOpacity>
           </View>

           <View style={{flexDirection: 'row', margin: 10}}>
            <Text style={styles.defaultText}>at</Text>
            <TouchableOpacity style={styles.selector}></TouchableOpacity>
           </View>
           
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  defaultText: {
    fontSize: 20,
    margin: 10
  },
  selector: {
    width: 100,
    height: 30,
    backgroundColor: '#e5d3d3',
  }
});