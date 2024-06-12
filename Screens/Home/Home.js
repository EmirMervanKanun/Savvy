import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonActions } from '@react-navigation/native';
import OnboardingScreen from '../Onboarding/Onboarding';
import Button from '../../Components/Buttons/Button';

const Stack = createNativeStackNavigator();

function HomeStart({ navigation }) {
  return (
    <View style={styles.container} >

      <Button props= {{
        size: 'mid',
        color: 'red',
        text: 'Onboarding',
        onPress: () => navigation.dispatch(
          CommonActions.navigate({
              name: 'Onboarding',
            },
          )
        )
      }}
      />
      
    </View>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeStart} options={{headerShown: false}} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default function Home() {
  return (
    <MyStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

