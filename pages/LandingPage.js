import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import GeneralStyles from './GeneralStyles';

import Profile from './Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function LandingPage({ navigation }) {
  return(
    <View style={GeneralStyles.backDrop}>
      
    </View>
  );
}