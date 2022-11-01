import React from 'react'
import {View, Text} from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';



const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return(
        <Stack.Navigator>
        <Stack.Screen 
        // component={LoginScreen} 
        component={OnboardingScreen} 
        name="OnboardingScreen" 
        options={{headerShown:false}}
        />
        <Stack.Screen 
        component={LoginScreen} 
        name="LoginScreen" 
        options={{headerShown:false}}
        />
        <Stack.Screen 
        component={RegisterScreen} 
        name="RegisterScreen" 
        options={{headerShown:false}}
        />
      </Stack.Navigator>
    )
}

export default AuthStack