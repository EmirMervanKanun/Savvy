import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import HomeHeader from '../../Components/OBJHome/HomeHeader';
import HomeIE from '../../Components/OBJHome/HomeIE';
import InputText from '../../Components/Inputfelder/InputText';
import InputDate from '../../Components/Inputfelder/InputDate';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonActions } from '@react-navigation/native';
import Registry from '../Onboarding/Registry';
import Button from '../../Components/Buttons/Button';

const Stack = createNativeStackNavigator();

function HomeStart({ navigation }) {
  return (
    <View style={styles.container} >

      <Button props= {{
        color: 'red',
        text: 'Registry',
        onPress: () => navigation.dispatch(
          CommonActions.navigate({
              name: 'Registry',
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
      <Stack.Screen name="Registry" component={Registry} options={{headerShown: false}} />
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

