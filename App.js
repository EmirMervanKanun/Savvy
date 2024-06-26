import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navigation/Navbar.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Savvy from './Backend/SavvyController.js';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';


export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log(`Data successfully saved for key: ${key}`);
  } catch (e) {
    console.error(`Error saving data for key ${key}:`, e);
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    console.log(`Data successfully loaded for key: ${key}`);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(`Error loading data for key ${key}:`, e);
    return null;
  }
};


// Hook für Lade- und Speicherlogik
export function useSavvyStorage() {
  const [savvy, setSavvy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // AsyncStorage.clear();
        const storedSavvyJson = await getData('AppData');
        if (storedSavvyJson === null) {
          console.log("No data found, initializing new Savvy instance.");
          const newSavvy = new Savvy();
          await storeData('AppData', newSavvy.toJSON());
          setSavvy(newSavvy);
        } else {
          console.log("Data found, loading Savvy instance.");
          const loadedSavvy = Savvy.fromJSON(storedSavvyJson);
          setSavvy(loadedSavvy);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error initializing app:", error);
      }
    };

    initializeApp();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      if (savvy !== null) {
        console.log("Saving data:", JSON.stringify(savvy));
        await storeData('AppData', savvy.toJSON());
      }
    };

    saveData();
  }, [savvy]);

  return { savvy, loading };
}

export default function App() {
  const { savvy, loading } = useSavvyStorage();

  const [fontsLoaded, fontError] = useFonts({
    'Sora-Regular': require('./assets/Fonts/Sora-Regular.ttf'),
    'Sora-Bold': require('./assets/Fonts/Sora-Bold.ttf'),
    'Sora-SemiBold': require('./assets/Fonts/Sora-SemiBold.ttf')
  });

  if (loading || (!fontsLoaded && !fontError)) {
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
