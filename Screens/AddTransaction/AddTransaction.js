import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import InputDate from '../../Components/Inputfelder/InputDate';
import Dropdown from '../../Components/Dropdowns/Repetition';
import RadioButton from '../../Components/Buttons/ButtonRadio';
import InputText from '../../Components/Inputfelder/InputText';


export default function AddTransaction() {
  return (
    <View style={styles.container}>
      <InputDate />
      <InputText placeholder='Gib einen Betrag ein...' keyboardType='numeric'/>
      <Dropdown />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});