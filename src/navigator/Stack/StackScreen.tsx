import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../modules/Home/Home';
import SignupScreen from '../../modules/signUp/SignupScreen';

export default function StackScreen() {
    const Stack=createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Signup' component={SignupScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
