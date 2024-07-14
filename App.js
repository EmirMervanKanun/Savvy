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
import Registry from './Screens/Onboarding/Registry.js';
import EditProfile from './Screens/Settings/EditProfile.js';
import Categories from './Screens/Settings/Categories.js';
import Notifications from './Screens/Settings/Notifications.js';
import AGB from './Screens/Settings/Agb.js';
import DataProtection from './Screens/Settings/DataProtection.js';
import Imprint from './Screens/Settings/Imprint.js';
import Budget from './Screens/BudgetSavings/Budget.js';
import Saving from './Screens/BudgetSavings/Saving.js';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from './Components/Navigation/Navbar.js';

const Stack = createNativeStackNavigator();


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
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
            <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
            <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
            <Stack.Screen name="AGB" component={AGB} options={{ headerShown: false }} />
            <Stack.Screen name="DataProtection" component={DataProtection} options={{ headerShown: false }} />
            <Stack.Screen name="Imprint" component={Imprint} options={{ headerShown: false }} />
            <Stack.Screen name="Budget" component={Budget} options={{ headerShown: false }} />
            <Stack.Screen name="Saving" component={Saving} options={{ headerShown: false }} />
          </Stack.Navigator>
        </GestureHandlerRootView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
