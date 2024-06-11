import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from '../../Components/TextComponents/Header';
import SelectProfilePicture from '../../Components/Selection/SelectProfilePicture';
import InputText from '../../Components/Inputfelder/InputText'
import CurrencySmall from '../../Components/Dropdowns/CurrencySmall';
import Button from '../../Components/Buttons/Button';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonActions } from '@react-navigation/native';

import HomeStart from '../Home/Home';
import Onboarding from '../Onboarding/Onboarding';

const Stack = createNativeStackNavigator();

function RegistryOnboarding ({ navigation }) {
  return (
    <SafeAreaProvider>
      <ScrollView contentContainerStyle={styles.container} style={styles.contentContainer}>
        <View style={{ paddingBottom: 40 }}>
          <SelectProfilePicture />
        </View>

        <View style={styles.containerInput}>

          <View style={styles.input}>
            <Header>Vorname</Header>
            <InputText placeholder="Vorname" />
          </View>

          <View style={styles.input}>
            <Header>Nachname</Header>
            <InputText placeholder="Nachname" />
          </View>

          <View style={styles.input}>
            <Header>Startkapital</Header>
            <InputText placeholder="Gib dein Startkapital ein" />
            <View style={styles.currency}>
              <CurrencySmall />
            </View>
          </View>
        </View>

        <View style={styles.containerButton}>
          <Button props={{
            size: 'mid',
            color: 'blue',
            img: require('../../Icons/Button/cancel.png'),
            text: 'Abbrechen',
            onPress: () => navigation.dispatch(
              CommonActions.navigate({
                name: 'Onboarding',
              },
              )
            )
          }}
          />

          <Button props={{
            size: 'mid',
            color: 'blue',
            img: require('../../Icons/Button/save.png'),
            text: 'Speichern',
            onPress: () => navigation.dispatch(
              CommonActions.navigate({
                name: 'Home',
              },
              )
            )
          }}
          />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Registry" component={RegistryOnboarding} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={HomeStart} options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function Registry() {
  return (
    <MyStack />
  );
}

const styles = StyleSheet.create({
  contentContainer:
  {
    flex: 1,
  },
  container: {
    paddingVertical: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 150,
    backgroundColor: 'white',
  },
  containerInput: {
    gap: 32,
  },
  input: {
    gap: 8,
  },
  containerButton: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 20,
  },
  currency: {
    display: 'flex',
    flexDirection: 'row-reverse',
    gap: 8,
  }
});