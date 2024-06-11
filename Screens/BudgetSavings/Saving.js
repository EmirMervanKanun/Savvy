import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Button from '../../Components/Buttons/Button';
import SavingSwipeList from '../../Components/Objects/SavingSwipeList';

import Savings from "./Savings";

import AddSaving from "./AddSaving";

import { CommonActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Saving({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.budgets}>
          <SavingSwipeList savings={Savings} />
        </View>
        <Button props={{
          color: 'blue',
          size: 'big',
          text: 'Hinzufügen',
          img: require('../../Icons/Button/add.png'),
          onPress: () => navigation.dispatch(
            CommonActions.navigate({
              name: 'AddSaving'
            })
          )
        }} />
      </View>
    </ScrollView>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Saving" component={Saving} options={{ headerShown: false }} />
      <Stack.Screen name="AddSaving" component={AddSaving} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function BudgetScreen() {
  return (
    <MyStack />
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 24,
    paddingBottom: 220,
  },
  budgets: {
    display: 'flex',
    flexDirection: 'column',
  }
});