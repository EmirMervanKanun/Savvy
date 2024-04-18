import { ImageBackground, View, Image, Text } from 'react-native';
import { Home, Budget, FixedTransactions, TransactionsList, AddTransaction } from './Screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg';

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
    height: 75,
    backgroundColor: "#d5dff4",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderTopWidth: 0,
  }
};


export default function App() {
  return (
    <ImageBackground source={require('./assets/grid.png')} style={{flex: 1, resizeMode: "cover", justifyContent: "center"}}>
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
          name="Hauptmenü" 
          component={Home}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}>
                  <Image source={ focused ? require('./Icons/NavBar/HauptmenüFocused.png'): require('./Icons/NavBar/HauptmenüUnfocused.png')}
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
                  <Image source={ focused ? require('./Icons/NavBar/SparzieleFocused.png'): require('./Icons/NavBar/SparzieleUnfocused.png')}
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
            tabBarIcon: ({focused}) => {
              return (
                <View style={{ flex: 1, alignItems: "center"}}>
                  <View style={{ flexDirection: 'row', position: 'absolute', top: 0}}>
                    <View style={{ flex: 1, backgroundColor: '#d5dff4'}}></View>
                    <Svg
                      width={75}
                      height={61}
                      viewBox='0 0 75 61'
                      style={{backgroundColor: '#fff',}}
                    >
                      <Path
                        d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                        fill={'#d5dff4'}
                      />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: '#d5dff4'}}></View>
                  </View>
                  <View 
                      style={{
                        top: -22.5,
                        alignItems: "center",
                        justifyContent: "center",
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: focused ? "#424874": "#a1a6cc",
                      }}
                  >
                    <Image source={ focused ? require('./Icons/NavBar/PlusFocused.png'): require('./Icons/NavBar/PlusUnfocused.png')}
                      style={{ width: 20.8, height: 20.8, }}/>
                  </View>
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
                  <Image source={ focused ? require('./Icons/NavBar/DauerauftragFocused.png'): require('./Icons/NavBar/DauerauftragUnfocused.png')}
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
                  <Image source={ focused ? require('./Icons/NavBar/AusgabenFocused.png'): require('./Icons/NavBar/AusgabenUnfocused.png')}
                    style={{ width: 30, height: 30, }} 
                  />
                  <Text style={{fontSize: 11, color: focused ? "#424874": "#a1a6cc" }}>Transaktionen</Text>
                </View>
              )
            },
          }} />
      </Tab.Navigator>
    </NavigationContainer>
    </ImageBackground>
  );
}