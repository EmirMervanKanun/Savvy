import { View, Image, Text, Platform} from 'react-native';
import { Home, Budget, FixedTransactions, TransactionsList, AddTransaction } from './Screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#d5dff4",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  }
};


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
          name="Hauptmenü" 
          component={Home}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}>
                  <Image source={ focused ? require('./Icons/HauptmenüFocused.png'): require('./Icons/HauptmenüUnfocused.png')}
                    style={{ width: 30, height: 30, }} 
                  />
                  <Text style={{fontSize: 12, color: focused ? "#424874": "#a1a6cc" }}>Hauptmenü</Text>
                </View>
              )
            },
          }} />
        <Tab.Screen 
          name="Sparziele" 
          component={Budget}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}>
                  <Image source={ focused ? require('./Icons/SparzieleFocused.png'): require('./Icons/SparzieleUnfocused.png')}
                    style={{ width: 30, height: 30, }} 
                  />
                  <Text style={{fontSize: 12, color: focused ? "#424874": "#a1a6cc" }}>Sparziele</Text>
                </View>
              )
            },
          }} />
        <Tab.Screen 
          name="Plus" 
          component={AddTransaction}
          options={{
            tabBarIcon : ({focused}) => {
              return (
                <View 
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused ? "#424874": "#a1a6cc",
                  border: 100,
                  width: 40,
                  height: 40,
                  top: -30,
                  borderRadius: 20,
                }}
                >
                  <Image source={ focused ? require('./Icons/PlusFocused.png'): require('./Icons/PlusUnfocused.png')}
                    style={{ width: 20.8, height: 20.8, }} 
                  />
                </View>
              )
            },
          }} />
        <Tab.Screen 
          name="Dauerauftrag" 
          component={FixedTransactions}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}>
                  <Image source={ focused ? require('./Icons/DauerauftragFocused.png'): require('./Icons/DauerauftragUnfocused.png')}
                    style={{ width: 33, height: 30, }} 
                  />
                  <Text style={{fontSize: 12, color: focused ? "#424874": "#a1a6cc" }}>Dauerauftrag</Text>
                </View>
              )
            },
          }} />
        <Tab.Screen 
          name="Transaktionen" 
          component={TransactionsList}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}>
                  <Image source={ focused ? require('./Icons/AusgabenFocused.png'): require('./Icons/AusgabenUnfocused.png')}
                    style={{ width: 30, height: 30, }} 
                  />
                  <Text style={{fontSize: 11, color: focused ? "#424874": "#a1a6cc" }}>Transaktionen</Text>
                </View>
              )
            },
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}