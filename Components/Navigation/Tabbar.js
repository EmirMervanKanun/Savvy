import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Budget, Saving } from './index';
import { Text, View } from 'react-native';
import HeaderText from '../TextComponents/Header';

const Tab = createBottomTabNavigator();
const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      top: 50,
      right: 0,
      left: 0,
      elevation: 0,
      height: 56,
      backgroundColor: "#d5dff4",
      borderTopWidth: 0,
    }
  };

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
                name="Budget" 
                component={Budget} 
                options={{
                    tabBarIcon: ({focused}) => {
                      return (
                        <View style={{
                            width: '75%', 
                            height: '100%', 
                            alignItems: "center", 
                            justifyContent: "center", 
                            backgroundColor: focused ? "white" : "#d5dff4", 
                            borderTopLeftRadius: 25, 
                            borderTopRightRadius: 25
                        }}>
                            <Text><HeaderText>Budget</HeaderText></Text>
                        </View>
                      )
                    },
                }}
            />
            <Tab.Screen 
                name="Sparziele" 
                component={Saving}
                options={{
                    tabBarIcon: ({focused}) => {
                      return (
                        <View style={{
                            width: '75%', 
                            height: '100%',
                            alignItems: "center", 
                            justifyContent: "center", 
                            backgroundColor: focused ? "white" : "#d5dff4", 
                            borderTopLeftRadius: 25, 
                            borderTopRightRadius: 25,
                        }}>
                            <Text><HeaderText>Sparziele</HeaderText></Text>
                        </View>
                      )
                    },
                }}
            />
        </Tab.Navigator>
    )
}

export default function Tabbar() {
    return (
        <MyTabs />
    );
}