import { StyleSheet, View, Text, ScrollView } from 'react-native';
import React from 'react';
import HomeHeader from '../../Components/OBJHome/HomeHeader';
import HomeIE from '../../Components/OBJHome/HomeIE';
import Header from '../../Components/TextComponents/Header.js';
import TransactionSwipeList from '../../Components/Objects/TransactionSwipeList.js';
import Transactions from '../../Components/Objects/Transactions.js';

export default function HomeStart() {
  return (
    <View style={styles.container} >

      <HomeHeader props={{
        profilePicture: require('../../Icons/ProfilePictures/profilePicture1.png'),
        name: 'John',
        amount: '123.456,89'
      }} />

      <HomeIE props={{ iAmount: '1.234,56', eAmount: '7.890,12' }} />

      <View style={styles.containerTrans}>
        <Header>Transaktionen</Header>
          <TransactionSwipeList transactions={Transactions} height={264}/>
      </View>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    backgroundColor: 'white',
    height: '100%',
  },
});
