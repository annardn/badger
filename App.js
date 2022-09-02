import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen'
import Login from './pages/Login'
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage';


import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';


export default function App() {
  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>      
      <Tab.Navigator

      // Hiding specifics tabs
      // From https://github.com/react-navigation/react-navigation/issues/5230
      // Could possibly change later if fix is found
      
            screenOptions={({ route }) => ({
              tabBarButton: [
                "Home",
                "Login",
                "Signup"
              ].includes(route.name)
                ? () => {
                    return null;
                  }
                : undefined,
            })}
          >
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            tabBarStyle: { display: "none" }
          }}/>
        <Tab.Screen name="Login" component={Login} 
          options={{
            tabBarStyle: { display: "none" }
          }}/>
        <Tab.Screen name="Signup" component={Signup} 
          options={{
            tabBarStyle: { display: "none" }
          }}/>
        <Tab.Screen name="Landing Page" component={LandingPage} />
      </Tab.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
