import Reaact from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text, Image, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Home from '../../Screens/Navigation/Home';
import Tabbar from '../Navigation/Tabbar';
import FixedTransactions from '../../Screens/Navigation/FixedTransactions';
import AddTransaction from '../../Screens/AddTransaction';
import TransactionsList from '../../Screens/Navigation/TransactionsList';
import NavText from '../TextComponents/NavText';
import COLORS from '../Farben';

const Tab = createBottomTabNavigator();
const screenOptions = { 
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        position: 'absolute',
        height: 95,
        backgroundColor: COLORS.primaryLight,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderTopWidth: 0,
    }
};

const styles = StyleSheet.create ({
    container: {
      lex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icons: {
      width: 30,
      height: 30,
    },
    plus: {
      justifyContent: 'center',
      alignItems: 'center',
      width: Platform.OS == 'ios' ? 55 : 40,
      height: Platform.OS == 'ios' ? 55 : 40,
      top: Platform.OS == 'ios' ? -20 : -45,
      borderRadius: Platform.OS == 'ios' ? 30 : 40,
    },
})

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
                  source={ focused ? require('../../Icons/NavBar/HauptmenüFocused.png'): require('../../Icons/NavBar/HauptmenüUnfocused.png')}
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
        component={Tabbar}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.container}>
                <Image
                  source={ focused ? require('../../Icons/NavBar/SparzieleFocused.png'): require('../../Icons/NavBar/SparzieleUnfocused.png')}
                  style={styles.icons}
                />
                <Text style={{color: focused ? COLORS.primaryDark : COLORS.primaryMid}}><NavText>Sparziele</NavText></Text>
              </View>
            )
          }
        }}
      />
      {/*Plus anschauen, evtl anders*/}
      <Tab.Screen 
        name="AddTransaction"
        component={AddTransaction}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{...styles.plus, backgroundColor: focused ? COLORS.primaryDark : COLORS.primaryMid }}>
                <Image
                  source={focused ? require('../../Icons/NavBar/PlusUnfocused.png'): require('../../Icons/NavBar/PlusFocused.png')}
                  style={styles.icons}
                />
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
                  source={ focused ? require('../../Icons/NavBar/DauerauftragFocused.png'): require('../../Icons/NavBar/DauerauftragUnfocused.png')}
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
        component={TransactionsList}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.container}>
                <Image
                  source={ focused ? require('../../Icons/NavBar/AusgabenFocused.png'): require('../../Icons/NavBar/AusgabenUnfocused.png')}
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

export default function Navbar() {
  const insets = useSafeAreaInsets();
  return (
    <View 
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        flex: 1,
      }}
    >
      <MyTabs />
    </View>
  );
}