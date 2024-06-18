import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import TransactionsSwipeList from '../../Components/Objects/TransactionSwipeList';
import Transactions from '../../Components/Objects/Transactions';
import Header from '../../Components/TextComponents/Header';

let filterSelected;
export default function FixedTransactions() {
  return (
    <ScrollView >
      <View style={styles.container}>
      
        <Header>Daueraufträge</Header>
        <View style={styles.budgets}>
          <TransactionsSwipeList transactions={Transactions} />
        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    height: '100%', 
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 48,
    gap: 48,
    paddingBottom: 220,
  },
  budgets: {
    display: 'flex',
    flexDirection: 'column',
  },
});