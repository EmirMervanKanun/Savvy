import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import SavingGoal from '../../Components/Objects/SavingGoal';
import Button from '../../Components/Buttons/Buttons';

export default function Saving() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.budgets}>
          <SavingGoal img={require('../../Icons/Categories/gaming.png')} title="Games" amount1="1000" amount2="2000" date="25.06.2024 - 25.07.2024" />
          <SavingGoal img={require('../../Icons/Categories/gaming.png')} title="Games" amount1="1000" amount2="2000" date="25.06.2024 - 25.07.2024" />
          <SavingGoal img={require('../../Icons/Categories/gaming.png')} title="Games" amount1="1000" amount2="2000" date="25.06.2024 - 25.07.2024" />
          <SavingGoal img={require('../../Icons/Categories/gaming.png')} title="Games" amount1="1000" amount2="2000" date="25.06.2024 - 25.07.2024" />
          <SavingGoal img={require('../../Icons/Categories/gaming.png')} title="Games" amount1="1000" amount2="2000" date="25.06.2024 - 25.07.2024" />
          <SavingGoal img={require('../../Icons/Categories/gaming.png')} title="Games" amount1="1000" amount2="2000" date="25.06.2024 - 25.07.2024" />
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