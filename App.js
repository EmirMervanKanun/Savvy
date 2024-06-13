import React from 'react';
import Navbar from './Components/Navigation/Navbar.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Savvy from './Backend/SavvyController.js';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

let savvy;

//test test
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
          <Navbar />
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
    

  
