import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import TransactionsSwipeList from '../../Components/Objects/TransactionSwipeList';
import ButtonFilter from '../../Components/Buttons/ButtonFilter';
import Transactions from '../../Components/Objects/Transactions';

let filterSelected;
function TransactionsList() {
  return (
    <ScrollView >
      <View style={styles.container}>
        {//Monatsswitcher
        }
        <ButtonFilter options={["Gesamt", "Einnahmen", "Ausgaben"]} chnagedilter={filterSelected} selectedAtStart={"Gesamt"}/>
        <View style={styles.budgets}>
          <TransactionsSwipeList transactions={Transactions} />
        </View>
      </View>
    </ScrollView>
  );
}


export default function TransactionScreen() {
  return (
    <TransactionsList/>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 24,
    paddingBottom: 220,
    gap: 32,
  },
  budgets: {
    paddingTop: 8,
    display: 'flex',
    flexDirection: 'column',
  },
});