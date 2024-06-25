import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View, StyleSheet } from 'react-native';
import COLORS from '../Colors';
import HeaderText from '../TextComponents/Header';

const Tab = createMaterialTopTabNavigator();

const screenOptions = {
  swipeEnabled: false,
  tabBarShowLabel: true,
  tabBarIndicatorStyle: {
    display: 'none',                // remove indicator
  },
  tabBarStyle: {
    height: 80,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'flex-end',
    elevation: 0,                   // remove shadow on Android
    shadowColor: 'transparent',     // remove shadow on iOS
  },
};

function MyTabs({ tab1, tab2 }) {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={tab1.title}
        component={tab1.component}
        options={{
          tabBarLabel: ({ focused }) => (
            <View style={[
              styles.tabbarLabel, 
              { backgroundColor: focused ? "white" : COLORS.primaryLight }
            ]}>
              <Text style={styles.text}><HeaderText>{tab1.title}</HeaderText></Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={tab2.title}
        component={tab2.component}
        options={{
          tabBarLabel: ({ focused }) => (
            <View style={[
              styles.tabbarLabel, 
              { backgroundColor: focused ? "white" : COLORS.primaryLight }
            ]}>
              <Text style={styles.text}><HeaderText>{tab2.title}</HeaderText></Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Tabbar({ tab1, tab2 }) {
  return (
    <MyTabs tab1={tab1} tab2={tab2} />
  );
}

const styles = StyleSheet.create({
  tabbarLabel: {
    width: 156,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginBottom: -10, 
  },
  text: {
    color: COLORS.schriftDark,
  },
});
