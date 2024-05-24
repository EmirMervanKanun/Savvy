import React from 'react';
import  Navbar  from './Components/Navigation/Navbar.js';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Sora-Regular': require('./assets/Fonts/Sora-Regular.ttf'),
    'Sora-Bold': require('./assets/Fonts/Sora-Bold.ttf'),
    'Sora-SemiBold': require('./assets/Fonts/Sora-SemiBold.ttf')
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <Navbar />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

    
  
