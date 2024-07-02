import 'react-native-gesture-handler';
// Verwendung von useSavvyStorage Hook
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Savvy from './Backend/SavvyController.js';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import OnboardingScreen from './Screens/Onboarding/Onboarding.js';
import Settings from './Screens/Settings/Settings.js';
import AddBudget from './Screens/BudgetSavings/AddBudget.js';
import EditTransaction from './Screens/AddTransaction/EditTransaction.js';
import AddSaving from './Screens/BudgetSavings/AddSaving.js';
import AddCategory from './Screens/Settings/AddCategory.js';
import Registry from './Screens/Onboarding/Registry.js';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from './Components/Navigation/Navbar.js';

const Stack = createNativeStackNavigator();

// Hook für Lade- und Speicherlogik
function useSavvyStorage() {
  const [savvy, setSavvy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // AsyncStorage.clear();
        const storedSavvyJson = await getData();
        if (storedSavvyJson === null) {
          console.log("No data found, initializing new Savvy instance.");
          const newSavvy = new Savvy();
          // newSavvy.initTest();
          await storeData(newSavvy);
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
        await storeData(savvy);
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
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack.Navigator>
            <Stack.Screen
              name="Onboarding"
              component={OnboardingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Registry"
              component={Registry}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainTabs"
              component={Navbar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddBudget"
              component={AddBudget}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditTransaction"
              component={EditTransaction}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddSaving"
              component={AddSaving}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddCategory"
              component={AddCategory}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </GestureHandlerRootView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const storeData = async (savvy) => {
  try {
    const jsonValue = JSON.stringify(savvy.toJSON());
    await AsyncStorage.setItem('AppData', jsonValue);
    console.log("Data successfully saved.");
  } catch (e) {
    console.error("Error saving data:", e);
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('AppData');
    console.log("Data successfully loaded:", jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Error loading data:", e);
  }
};
