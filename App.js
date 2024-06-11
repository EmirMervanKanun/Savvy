import 'react-native-gesture-handler';
import React from 'react';
<<<<<<< HEAD

import Navbar from './Components/Navigation/Navbar.js';

=======
import Navbar from './Components/Navigation/Navbar.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Savvy from './Backend/SavvyController.js';
>>>>>>> 579644029c52d91699ec9ade2eb69ac3b813f50b
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';

savvy;

// import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
import Onboarding from './Screens/Onboarding/Onboarding';


import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
<<<<<<< HEAD
=======
  // Load Data from AsyncStorage
  savvy = getData();
  if(savvy == null){
    savvy = new Savvy();
    storeData(savvy);
  }
>>>>>>> 579644029c52d91699ec9ade2eb69ac3b813f50b

  const [fontsLoaded, fontError] = useFonts({
    'Sora-Regular': require('./assets/Fonts/Sora-Regular.ttf'),
    'Sora-Bold': require('./assets/Fonts/Sora-Bold.ttf'),
    'Sora-SemiBold': require('./assets/Fonts/Sora-SemiBold.ttf')
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
<<<<<<< HEAD

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



=======
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
    

  
>>>>>>> 579644029c52d91699ec9ade2eb69ac3b813f50b
