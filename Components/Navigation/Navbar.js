import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native';
import { Home, FixedTransactions, TransactionsList, AddTransaction } from './index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg';
import NavText from '../TextComponents/NavText';
import Tabbar from './Tabbar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel:false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    height: 75,
    backgroundColor: "#d5dff4",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderTopWidth: 0,
  }
};

function MyTabs() {
  return (
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
          name="Hauptmenü" 
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Image 
                  source={ focused ? require('../../Icons/NavBar/HauptmenüFocused.png'): require('../../Icons/NavBar/HauptmenüUnfocused.png')}
                  style={{ width: 30, height: 30, }} 
                />
                <Text style={{color: focused ? "#424874": "#a1a6cc" }}><NavText>Hauptmenü</NavText></Text>
              </View>
            ),
          }} 
        />
        <Tab.Screen 
          name="Sparziele_Screen" 
          component={Tabbar}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                  <Image 
                    source={ focused ? require('../../Icons/NavBar/SparzieleFocused.png'): require('../../Icons/NavBar/SparzieleUnfocused.png')}
                    style={{ width: 30, height: 30, }} 
                  />
                  <Text style={{color: focused ? "#424874": "#a1a6cc" }}><NavText>Sparziele</NavText></Text>
              </View>
            ),
          }} 
        />
        <Tab.Screen
          name="Plus" 
          component={AddTransaction}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{ flex: 1, alignItems: "center"}}>
                  <View style={{ flexDirection: 'row', position: 'absolute', top: 0}}>
                    <View style={{ flex: 1, backgroundColor: '#d5dff4'}} />
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
                    <View style={{ flex: 1, backgroundColor: '#d5dff4'}} />
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
                    <Image 
                      source={ focused ? require('../../Icons/NavBar/PlusFocused.png'): require('../../Icons/NavBar/PlusUnfocused.png')}
                      style={{ width: 20.8, height: 20.8, }}/>
                  </View>
              </View>
            ),
          }} 
        />
        <Tab.Screen 
          name="Dauerauftrag" 
          component={FixedTransactions}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: "center", justifyContent: "center"}}>
                  <Image 
                    source={ focused ? require('../../Icons/NavBar/DauerauftragFocused.png'): require('../../Icons/NavBar/DauerauftragUnfocused.png')}
                    style={{ width: 33, height: 30, }} 
                  />
                  <Text style={{color: focused ? "#424874": "#a1a6cc" }}><NavText>Dauerauftrag</NavText></Text>
              </View>
            ),
          }} 
        />
        <Tab.Screen 
          name="Transaktionen" 
          component={TransactionsList}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: "center", justifyContent: "center"}}>
                  <Image 
                    source={ focused ? require('../../Icons/NavBar/AusgabenFocused.png'): require('../../Icons/NavBar/AusgabenUnfocused.png')}
                    style={{ width: 30, height: 30, }} 
                  />
                  <Text style={{color: focused ? "#424874": "#a1a6cc" }}><NavText>Transaktionen</NavText></Text>
              </View>
            ),
          }} 
        />
      </Tab.Navigator>
  );
}

export default function NavBar() {
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

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
  },
});