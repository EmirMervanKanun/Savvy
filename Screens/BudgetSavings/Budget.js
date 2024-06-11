import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { BudgetSwipe } from '../../Components/Objects/BudgetSwipe';
import AddBudget from './AddBudget';
import Button from '../../Components/Buttons/Button';
import { CommonActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BudgetSwipeList from './BudgetSwipeList';

const Stack = createNativeStackNavigator();

const categories = [{
  label: 'Wähle eine Kategorie aus...',
  value: '0',
  icon: null,
}, {
  label: 'Lebensmittel',
  value: '1',
  icon: require('../../Icons/Categories/groceries.png'),
}, {
  label: 'Miete',
  value: '2',
  icon: require('../../Icons/Categories/rent.png'),
}, {
  label: 'Klamotten',
  value: '3',
  icon: require('../../Icons/Categories/clothes.png'),
}, {
  label: 'Technik',
  value: '4',
  icon: require('../../Icons/Categories/devices.png'),
}, {
  label: 'Transportmittel',
  value: '5',
  icon: require('../../Icons/Categories/transportation.png'),
}, {
  label: 'Medikamente',
  value: '6',
  icon: require('../../Icons/Categories/medication.png'),
}, {
  label: 'Haustier',
  value: '7',
  icon: require('../../Icons/Categories/pets.png'),
}];

function Budget({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.budgets}>
          <BudgetSwipeList />
        </View>
        <Button props={{
          color: 'blue',
          size: 'big',
          text: 'Hinzufügen',
          img: require('../../Icons/Button/add.png'),
          onPress: () => navigation.dispatch(
            CommonActions.navigate({
              name: 'AddBudget'
            }
            )
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
    paddingTop: 48,
    paddingBottom: 200,
    display: 'flex',
    alignItems: 'center',
    gap: 0,
    backgroundColor: 'white',
  },
  budgets: {
    display: 'flex',
    flexDirection: 'column',
  }
});