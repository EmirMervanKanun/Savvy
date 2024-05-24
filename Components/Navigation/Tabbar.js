import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';
import Budget from '../../Screens/Navigation/Budget';
import Saving from '../../Screens/Navigation/Saving';
import COLORS from '../Farben'

const Tab = createMaterialTopTabNavigator();
const screenOptions ={
    swipeEnabled: false,
    tabBarShowLabel: true,
    tabBarIndicatorStyle: { 
        backgroundColor: COLORS.primaryLight,
    },
    tabBarStyle: {
        height: 96,
        backgroundColor: COLORS.primaryLight,
        justifyContent: 'center',
    },
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen 
        name="Home" 
        component={Budget} 
      />
      <Tab.Screen 
        name="Settings" 
        component={Saving}
      />
    </Tab.Navigator>
  );
}

export default function Tabbar() {
  return (
    <MyTabs />
  );
}