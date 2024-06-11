import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import Header from '../../Components/TextComponents/Header';
import PlaceholderText from '../../Components/TextComponents/PlaceholderText';
import ButtonBack from '../../Components/Buttons/ButtonBack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonActions } from '@react-navigation/native';
import Settings from '../Settings/Settings';


const Stack = createNativeStackNavigator();

function DataProtectionStart({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.buttonContainer}>
          <ButtonBack
            onPress={() => navigation.dispatch(
              CommonActions.navigate(
                { name: 'Settings' }
              ))} />
        </View>

        <View style={styles.headerContainer}>
          <Header>Datenschutz</Header>
        </View>

        <View style={styles.placeholderWrapper}>
          <View style={styles.placeholderContainer}>
            <PlaceholderText>Hier könnte ein Text zu den
              Datenschutzerklärungen stehen</PlaceholderText>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Datenschutz" component={DataProtectionStart} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function DataProtection() {
  return (
    <MyStack />
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    paddingBottom: 160,
    backgroundColor: 'white',
  },
  buttonContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  headerContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  placeholderWrapper: {
    display: 'flex',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
