import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import SavingGoal from '../../Components/Objects/SavingGoal';
import Button from '../../Components/Buttons/Button';

export default function Saving() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.budgets}>

          <SavingGoal props={{ img: require('../../Icons/Categories/gaming.png'), title: "Games", amount1: 1000, amount2: 2000, dateStart: "25.06.2024", dateEnd: "25.07.2024" }} />
          <SavingGoal props={{ img: require('../../Icons/Categories/gaming.png'), title: "Games", amount1: 80, amount2: 120, dateStart: "25.06.2024", dateEnd: "25.07.2024" }} />
          <SavingGoal props={{ img: require('../../Icons/Categories/gaming.png'), title: "Games", amount1: 126, amount2: 654, dateStart: "25.06.2024", dateEnd: "25.07.2024" }} />
          <SavingGoal props={{ img: require('../../Icons/Categories/gaming.png'), title: "Games", amount1: 1, amount2: 100, dateStart: "25.06.2024", dateEnd: "25.07.2024" }} />
          <SavingGoal props={{ img: require('../../Icons/Categories/gaming.png'), title: "Games", amount1: 99, amount2: 100, dateStart: "25.06.2024", dateEnd: "25.07.2024" }} />
          <SavingGoal props={{ img: require('../../Icons/Categories/gaming.png'), title: "Games", amount1: 450, amount2: 670, dateStart: "25.06.2024", dateEnd: "25.07.2024" }} />

        </View>
        <Button props={{
          color: 'blue',
          size: 'big',
          text: 'Hinzufügen',
          img: require('../../Icons/Button/add.png'),
          //onPress: () => navigation.navigate('AddSaving')
        }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    paddingBottom: 160,
    display: 'flex',
    alignItems: 'center',
    gap: 48,
    backgroundColor: 'white',
  },
  budgets: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  }
});