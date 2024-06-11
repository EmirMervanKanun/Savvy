import React from 'react';
import {View, ScrollView, StyleSheet } from 'react-native';
import InputDate from '../../Components/Inputfelder/InputDate';
import Repition from '../../Components/Dropdowns/Repetition';
import CurrencySmall from '../../Components/Dropdowns/CurrencySmall';
import CategoriesDropdown from '../../Components/Dropdowns/Categories';
import RadioButtonGroup from '../../Components/Buttons/ButtonRadio';
import InputText from '../../Components/Inputfelder/InputText';
import TextHeader from '../../Components/TextComponents/Header';
import Button from '../../Components/Buttons/Button';

const categories = [{
  label: 'Wähle eine Kategorie aus...',
  value: '0',
  icon: null,
}, {
  label: 'Lebensmittel',
  value: '1',
  icon: require('../../Icons/Categories/groceries.png'),
}, {
  label: 'Miete',
  value: '2',
  icon: require('../../Icons/Categories/rent.png'),
}, {
  label: 'Klamotten',
  value: '3',
  icon: require('../../Icons/Categories/clothes.png'),
}, {
  label: 'Technik',
  value: '4',
  icon: require('../../Icons/Categories/devices.png'),
}, {
  label: 'Transportmittel',
  value: '5',
  icon: require('../../Icons/Categories/transportation.png'),
}, {
  label: 'Medikamente',
  value: '6',
  icon: require('../../Icons/Categories/medication.png'),
}, {
  label: 'Haustier',
  value: '7',
  icon: require('../../Icons/Categories/pets.png'),
}];

export default function AddTransaction() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TextHeader>Transaktion hinufügen</TextHeader>
        </View>
        <View style={styles.radio}>
          <RadioButtonGroup options={['Einnahme', 'Ausgabe', 'Sparen']} />
        </View>
        <View style={styles.auswahl}>
          <View>
            <InputDate />
          </View>
          <View>
            <Repition />
          </View>
          <View style={styles.smallContainer}>
            <TextHeader>Betrag</TextHeader>
            <InputText placeholder='Gib einen Betrag ein...' keyboardType='numeric'/>
            <View style={styles.currencyDrop}>
              <CurrencySmall />
            </View>
          </View>
          <View style={styles.smallContainer}> 
            <TextHeader>Kategorie</TextHeader>
            <CategoriesDropdown props={categories}/>
          </View>
          <View style={styles.smallContainer}>
            <TextHeader>Notiz</TextHeader>
            <InputText placeholder='Schreibe eine Notiz...' keyboardType='default' />
          </View>
          <View style={styles.button}>
            <Button props={{color: 'blue', size: 'mid', text: 'Abrechen', img: require("../../Icons/Button/cancel.png")}} />
            <Button props={{color: 'blue', size: 'mid', text: 'Speichern', img: require("../../Icons/Button/save.png")}} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingBottom: 160,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    paddingTop: 48,
    paddingBottom: 48,
  },
  radio: {
    paddingBottom: 32,
  },
  auswahl: {
    gap: 32,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallContainer: {
    width: 'auto',
    gap: 8,
  },
  currencyDrop: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
});