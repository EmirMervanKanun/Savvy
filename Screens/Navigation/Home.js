import { StyleSheet, ImageBackground, View, Text, Image, Animated, TouchableHighlight, TouchableOpacity, Touchable } from 'react-native';
import React, { useState } from 'react';


import { TransactionSwipe } from '../../Components/swipe/TransactionSwipe';
import { TransStanOrder } from '../../Components/swipe/TransStanOrder';

import { BudgetSwipe } from '../../Components/swipe/BudgetSwipe';
import { DeleteOverlay } from '../../Components/Overlay/DeleteOverlay';

import { CategorySwipe } from '../../Components/swipe/CategorySwipe'; 
import { SavingGoal } from '../../Components/swipe/SavingGoal';

export default function Home() {

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent:"center", gap: 20}}>
      {/*
      <TransactionSwipe img={require('../../Icons/Categories/clothes.png')} title="Kleidung" amount= "5,00"  date="12.12.2021" isPos={null}/>
      */}

      <BudgetSwipe img={require('../../Icons/Categories/clothes.png')} title="Kleidung" amount1="5,00" amount2="10,00" />

      <DeleteOverlay title="Objekt" />

      <CategorySwipe img={require('../../Icons/Categories/clothes.png')} text="Kleidung" />

    </View>
  );
}

const styles = StyleSheet.create({
  
});

