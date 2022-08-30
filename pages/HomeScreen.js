import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
    return (
        <View className='w-100 fl' style={styles.backDrop}>
            <Image source={require('./logo-pink.png')} style={styles.logo}/>
            <View style={styles.banner}>
                <Text style={styles.subtitle}>Stay connected.</Text>
            </View>
            <TouchableOpacity style={styles.primaryButton} title='SignUp'>
                <Text style={{color: 'white', fontSize: 15}}>Create an account</Text>
            </TouchableOpacity>
            <Text style={{textDecorationLine: true}}>Already have an account? Login</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    backDrop: {
        backgroundColor: '#FCF5EF',
        alignItems: 'center',
        flex: 1
    },
    logo: {
        width: 400,
        height: 400
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
    },
    primaryButton: {
        backgroundColor: '#7C3238',
        padding: 20,
        margin: 20,
        borderRadius: 20,
    }
});
