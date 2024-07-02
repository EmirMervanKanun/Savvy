import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Button from '../../Components/Buttons/Button';
import BudgetSwipeList from '../../Components/Objects/BudgetSwipeList';


import Budgets from "./Budgets";

import { CommonActions } from '@react-navigation/native';

export default function Budget({ navigation }) {
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