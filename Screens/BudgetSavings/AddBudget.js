import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import SavingGoal from '../../Components/Objects/SavingGoal';
import Button from '../../Components/Buttons/Buttons';
import Header from '../../Components/TextComponents/Header';
import InputText from '../../Components/Inputfelder/InputText';
import COLORS from '../../Components/Farben';
import CategoriesDropdown from '../../Components/Dropdowns/Categories';

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

export default function AddBudget() {
  return (

      <View style={styles.container}>
        <Text style={styles.text}><Header>Budget hinzufügen</Header></Text>

        <View style={styles.inputs}>
          <View style={styles.inputfeld}>
            <Text style={styles.text}><Header>Titel</Header></Text>
            <InputText placeholder="Gib einen Titel ein..." keyboardType="default" />
          </View>

          <View style={styles.inputfeld}>
            <Text style={styles.text}><Header>Kategorie</Header></Text>
            <CategoriesDropdown props={categories} />
          </View>
          // versteckt das untere Inputfeld
          
          <View style={styles.inputfeld}>
            <Text style={styles.text}><Header>Betrag</Header></Text>
            <InputText placeholder="Gib einen Betrag ein..." keyboardType="decimal-pad" />
          </View>
        </View>
      </View>
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
  text: {
    color: COLORS.schriftDark,
  },
  inputs: {
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
  },
  inputfeld: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  }
});