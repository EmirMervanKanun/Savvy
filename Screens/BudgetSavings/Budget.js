import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Button from '../../Components/Buttons/Button';
import BudgetSwipeList from '../../Components/Objects/BudgetSwipeList';

import AddBudget from './AddBudget';

import Budgets from "./Budgets";

import { CommonActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Budget({ navigation }) {
  return (
    <ScrollView >
      <View style={styles.container}>
        <View style={styles.budgets}>
          <BudgetSwipeList budgets={Budgets} />
        </View>
        <Button props={{
          color: 'blue',
          size: 'big',
          text: 'Hinzufügen',
          img: require('../../Icons/Button/add.png'),
          onPress: () => navigation.dispatch(
            CommonActions.navigate({
              name: 'AddBudget'
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
      <Stack.Screen name="Budget" component={Budget} options={{ headerShown: false }} />
      <Stack.Screen name="AddBudget" component={AddBudget} options={{ headerShown: false }} />
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
  },
});