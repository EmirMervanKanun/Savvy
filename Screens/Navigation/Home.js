import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import HomeHeader from '../../Components/OBJHome/HomeHeader';
import HomeIE from '../../Components/OBJHome/HomeIE';

import { BudgetSwipe } from '../../Components/swipe/BudgetSwipe';
import { DeleteOverlay } from '../../Components/Overlay/DeleteOverlay';

import { CategorySwipe } from '../../Components/swipe/CategorySwipe'; 
import { SavingGoal } from '../../Components/swipe/SavingGoal';
import Transaction from '../../Components/swipe/TransStanOrder';

export default function Home() {

  return (
    <View style={styles.container}>
      <HomeHeader props={{
        profilePicture: require('../../Icons/ProfilePictures/profilePicture1.png'),
        name: 'John',
        amount: '123.456,89'
      }} />
      <Text>Home</Text>
      <HomeIE props={{ iAmount: '1.234,56', eAmount: '7.890,12' }} />
      <Transaction props={{
        title: 'Miete',
        amount: '500,00',
        date: '01.01.2021',
        isIncome: false,
        categoryIcon: require('../../Icons/Categories/rent.png')
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

