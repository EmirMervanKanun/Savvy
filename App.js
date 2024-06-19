import 'react-native-gesture-handler';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Savvy from './Backend/SavvyController.js';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navbar from './Components/Navigation/Navbar.js';

import OnboardingScreen from './Screens/Onboarding/Onboarding.js';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './Components/Navigation/MyTabs.js';

let savvy;

const Stack = createNativeStackNavigator();

export default function App() {
  // Load Data from AsyncStorage
  savvy = getData();
  if(savvy == null){
    savvy = new Savvy();
    storeData(savvy);
  }

  const [fontsLoaded, fontError] = useFonts({
    'Sora-Regular': require('./assets/Fonts/Sora-Regular.ttf'),
    'Sora-Bold': require('./assets/Fonts/Sora-Bold.ttf'),
    'Sora-SemiBold': require('./assets/Fonts/Sora-SemiBold.ttf')
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack.Navigator>
              <Stack.Screen
                name="Onboarding"
                component={OnboardingScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MainTabs"
                component={MyTabs}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </GestureHandlerRootView>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}

// Save and Load Data from AsyncStorage
const storeData = async (savvy) => {
  try {
    const jsonValue = JSON.stringify(savvy);
    await AsyncStorage.setItem('AppData', jsonValue);
  } catch (e) {
    console.log("Ein Fehler beim Speichern den Daten ist Passiert! \n" + e);
  }
};
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('AppData');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("Ein Fehler beim Laden den Daten ist Passiert! \n" + e);
  }
};