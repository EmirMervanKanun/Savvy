import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text, Image, Platform } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Home from '../../Screens/Home/Home';
import FixedTransactions from '../../Screens/FixedTransactions/FixedTransactions';
import AddTransaction from '../../Screens/AddTransaction/AddTransaction';
import NavText from '../TextComponents/NavText';
import COLORS from '../Farben';
import BudgetSavingWrapper from './TabbarBudgetSavingWrapper';
import Transactionswrapper from './TabbarTransactionsWrapper';

const Tab = createBottomTabNavigator();
const screenOptions = { 
    tabBarShowLabel: false,
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        position: 'absolute',
        height: 95,
        backgroundColor: COLORS.primaryLight,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderTopWidth: 0,
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icons: {
      width: 30,
      height: 30,
    },
    plusContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: Platform.OS == 'ios' ? 55 : 40,
      height: Platform.OS == 'ios' ? 55 : 40,
      top: Platform.OS == 'ios' ? -20 : -17,
      borderRadius: Platform.OS == 'ios' ? 30 : 40,
    },
    plus: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    plusBack: {
      justifyContent: 'center', 
      alignItems:'center', 
      backgroundColor: COLORS.primaryMid, 
      width: 45, 
      height:45, 
      borderRadius: 25, 
      top: -21,
    },
});

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen 
        name="Hauptmenü" 
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.container}>
                <Image
                  source={focused ? require('../../Icons/NavBar/HauptmenüFocused.png') : require('../../Icons/NavBar/HauptmenüUnfocused.png')}
                  style={styles.icons}
                />
                <Text style={{color: focused ? COLORS.primaryDark : COLORS.primaryMid}}><NavText>Hauptmenü</NavText></Text>
              </View>
            )
          }
        }} 
      />
      <Tab.Screen 
        name="SparzieleScreen" 
        component={BudgetSavingWrapper}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.container}>
                <Image
                  source={focused ? require('../../Icons/NavBar/SparzieleFocused.png') : require('../../Icons/NavBar/SparzieleUnfocused.png')}
                  style={styles.icons}
                />
                <Text style={{color: focused ? COLORS.primaryDark : COLORS.primaryMid}}><NavText>Sparziele</NavText></Text>
              </View>
            )
          }
        }}
      />
      <Tab.Screen 
        name="AddTransaction"
        component={AddTransaction}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.plusContainer}>
                <Svg
                  width={75}
                  height={61}
                  viewBox='0 0 75 61'
                  style={{backgroundColor: 'white'}}
                >
                  <Path
                    d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                    fill={COLORS.primaryLight}
                  />
                  <View style={styles.plus}>
                    <View style={{...styles.plusBack, backgroundColor: focused ? COLORS.primaryDark : COLORS.primaryMid}}>
                      <Image
                        source={focused ? require('../../Icons/NavBar/PlusFocused.png') : require('../../Icons/NavBar/PlusUnfocused.png')}
                        style={styles.icons}
                      />
                    </View>
                  </View>
                </Svg>
              </View>
            )
          }
        }}
      />
      <Tab.Screen 
        name="Dauerauftrag" 
        component={FixedTransactions}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.container}>
                <Image
                  source={focused ? require('../../Icons/NavBar/DauerauftragFocused.png') : require('../../Icons/NavBar/DauerauftragUnfocused.png')}
                  style={{...styles.icons, width: 33}}
                />
                <Text style={{color: focused ? COLORS.primaryDark : COLORS.primaryMid}}><NavText>Dauerauftrag</NavText></Text>
              </View>
            )
          }
        }}
      />
      <Tab.Screen 
        name="Transaktionen" 
        component={Transactionswrapper}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.container}>
                <Image
                  source={focused ? require('../../Icons/NavBar/AusgabenFocused.png') : require('../../Icons/NavBar/AusgabenUnfocused.png')}
                  style={styles.icons}
                />
                <Text style={{color: focused ? COLORS.primaryDark : COLORS.primaryMid}}><NavText>Transaktionen</NavText></Text>
              </View>
            )
          }
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
