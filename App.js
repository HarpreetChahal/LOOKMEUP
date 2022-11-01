import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Button } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
     <AuthStack/>
     {/* <AppStack/> */}
    </NavigationContainer>
  );
}
export default App;
