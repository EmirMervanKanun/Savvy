import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import HomeHeader from '../../Components/OBJHome/HomeHeader';
import HomeIE from '../../Components/OBJHome/HomeIE';
import TransStanOrder from '../../Components/swipe/TransStanOrder';
import Header from '../../Components/TextComponents/Header.js';


export default function Home() {

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
        <TransStanOrder props={{
          title: 'Einkauf',
          amount: '-12,34',
          date: '6.06.2024',
          isIncome: false,
          isStan: false,
          stan: 'Wöchentlich',
          categoryIcon: require('../../Icons/Categories/groceries.png'),
        }} />
        <TransStanOrder props={{
          title: 'Kleidung',
          amount: '-34,99',
          date: '29.05.2024',
          isIncome: false,
          isStan: false,
          categoryIcon: require('../../Icons/Categories/clothes.png'),
        }} />
        <TransStanOrder props={{
          title: 'Miete',
          amount: '-12,34',
          date: '29.05.2024',
          isIncome: false,
          isStan: true,
          stan: 'Monatlich',
          categoryIcon: require('../../Icons/Categories/rent.png'),
        }} />
        <TransStanOrder props={{
          title: 'Geschenk',
          amount: '-12,34',
          date: '28.05.2021',
          isIncome: true,
          isStan: false,
          categoryIcon: require('../../Icons/Categories/party.png'),
        }} />
      </View>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 32,
  },
  containerTrans: {
    gap: 16,
  }
});

