import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './screens/Signup';
import LoginScreen from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/home';

import * as firebase from 'firebase';
import {firebaseConfig} from './config';
firebase.initializeApp(firebaseConfig);


const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Sign In',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    <AuthStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Dashboard',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <AuthStack.Screen
        name="Loading"
        component={LoadingScreen}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignupScreen}
        options={{
          title: 'Sign Up',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      
      
    </AuthStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <AuthStackScreen/>
  </NavigationContainer>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
