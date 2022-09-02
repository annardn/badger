import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import GeneralStyles from './GeneralStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }) {
    return (
        <View style={GeneralStyles.backDrop}>
            <Image source={require('./logo-pink.png')} style={styles.logo}/>
            <View style={styles.banner}>
                <Text style={styles.subtitle}>Stay connected.</Text>
            </View>
            <TouchableOpacity style={GeneralStyles.primaryButton} title='SignUp'
                onPress={() => navigation.navigate('Signup')}>
                <Text style={{color: 'white', fontSize: 15}}>Create an account</Text>
            </TouchableOpacity>
            <Text onPress={() => navigation.navigate('Login')} style={{textDecorationLine: true}}>Already have an account? Login</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 350,
        height: 350,
        margin: 20
    },
    banner: {
        backgroundColor: '#B7245C',
        width: '100%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subtitle: {
        color: 'white',
        fontSize: 30
    }
});
