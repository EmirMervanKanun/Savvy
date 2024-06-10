import 'react-native-gesture-handler';
import React from 'react';

import Navbar from './Components/Navigation/Navbar.js';

import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

// import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
import Onboarding from './Screens/Onboarding/Onboarding';


import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'Sora-Regular': require('./assets/Fonts/Sora-Regular.ttf'),
    'Sora-Bold': require('./assets/Fonts/Sora-Bold.ttf'),
    'Sora-SemiBold': require('./assets/Fonts/Sora-SemiBold.ttf')
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  React.useEffect(async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(false);
    }
  }, []);

  return (
    isAppFirstLaunched !== null && (
      <SafeAreaProvider>
        <NavigationContainer>
          {/*}
          <Stack.Navigator>
            {isAppFirstLaunched && (
              <Stack.Screen
                name="Onboarding"
                component={Onboarding}
              />
            )}
          </Stack.Navigator>
          */}
          <Navbar />
        </NavigationContainer>
      </SafeAreaProvider>
    )
  );
};



