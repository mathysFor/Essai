import React, {useEffect, useState} from 'react';
import {LogBox,View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

LogBox.ignoreLogs(['Warning:...']);



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import LandingPage from './screens/LandingPage';
import MyDefault from './screens/MyDefault';
import MyVideos from './screens/MyVideos';
import Record from './screens/Record';


import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
;


const Stack = createStackNavigator();
// const Tab = createMaterialTopTabNavigator();    
const Tab = createMaterialTopTabNavigator();    



export default  function App() {

  
  const TabApp = () => {
    return (

      <Tab.Navigator
      tabBarPosition='bottom'
      initialRouteName='MyDefault'
      tabBarOptions={{
        indicatorStyle: {backgroundColor: null},  
        showLabel:false,
        activeTintColor: 'black',
        inactiveTintColor: '#525252',
        showIcon: true,
        showLabel: false,    
        style: {
          alignSelf: 'center',
          bottom :40,
          margin:-30,
          backgroundColor: 'transparent', //<== remove background color
          borderColor: 'transparent',
          display:'flex',
          width:'30%'
        }
      }}
      
    >
      <Tab.Screen
        name="Record"
        component={Record}
      
        options={{
          tabBarIcon: ({ focused }) =>
          focused ? (
          <FontAwesome name="circle" size={16} color="black" />
          ) : (
            <Feather name="circle" size={14} color="black" />
          )
        }}
      />

      <Tab.Screen
        name="MyDefault"
        component={MyDefault}
        options={{
          tabBarIcon: ({ focused }) =>
          focused ? (
          <FontAwesome name="circle"  size={16} color="black" />
          ) : (
            <Feather name="circle"  size={14} color="black" />
          )
        }}
      />

      <Tab.Screen
        name="MyVideos"
        component={MyVideos}
        options={{
          tabBarIcon: ({ focused }) =>
          focused ? (
          <FontAwesome name="circle" size={16} color="black" />
          ) : (
            <Feather name="circle" size={14} color="black" />
          )
        }}
      />
    </Tab.Navigator>

    );
      }


  return (

    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="LandingPage" component={LandingPage} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="App"  component={TabApp} />
    </Stack.Navigator>
  </NavigationContainer>

  
);
}



