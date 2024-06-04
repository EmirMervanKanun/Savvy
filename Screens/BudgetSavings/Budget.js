import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { BudgetSwipe } from '../../Components/Objects/BudgetSwipe';
import Button from '../../Components/Buttons/Buttons';


export default function Budget() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.budgets}>
          <BudgetSwipe img={require('../../Icons/Categories/gaming.png')} title="Games" amount1="1000" amount2="2000" />
          <BudgetSwipe img={require('../../Icons/Categories/gaming.png')} title="Games" amount1="1000" amount2="2000" />
          <BudgetSwipe img={require('../../Icons/Categories/gaming.png')} title="Games" amount1="1000" amount2="2000" />
          <BudgetSwipe img={require('../../Icons/Categories/gaming.png')} title="Games" amount1="1000" amount2="2000" />
          <BudgetSwipe img={require('../../Icons/Categories/gaming.png')} title="Games" amount1="1000" amount2="2000" />
          <BudgetSwipe img={require('../../Icons/Categories/gaming.png')} title="Games" amount1="1000" amount2="2000" />
          <BudgetSwipe img={require('../../Icons/Categories/gaming.png')} title="Games" amount1="1000" amount2="2000" />
          <BudgetSwipe img={require('../../Icons/Categories/gaming.png')} title="Games" amount1="1000" amount2="2000" />
          <BudgetSwipe img={require('../../Icons/Categories/gaming.png')} title="Games" amount1="1000" amount2="2000" />
        </View>
        <Button props={{
          color: 'blue',
          size: 'big',
          text: 'Hinzufügen',
          img: require('../../Icons/Button/add.png')
        }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 160,
    display: 'flex',
    alignItems: 'center',
    gap: 32,
    backgroundColor: 'white',
  },
  budgets: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  }
});