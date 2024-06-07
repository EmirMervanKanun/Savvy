import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import Header from '../../Components/TextComponents/Header';
import InputText from '../../Components/Inputfelder/InputText';
import COLORS from '../../Components/Farben';
import CategoriesDropdown from '../../Components/Dropdowns/Categories';
import CurrencySmallDropdown from '../../Components/Dropdowns/CurrencySmall';

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
      <Text style={styles.headerText}><Header>Budget hinzufügen</Header></Text>

      <FlatList
        contentContainerStyle={styles.inputs}
        data={[{ key: 'Titel' }, { key: 'Kategorie' }, { key: 'Betrag' }]}
        renderItem={({ item }) => (
          <View style={styles.inputfeld}>

            <Text style={styles.labelText}><Header>{item.key}</Header></Text>

            {item.key === 'Kategorie' ? (
              <View style={styles.inputfeldDropdown}>
                <CategoriesDropdown props={categories} />
              </View>

            ) : item.key === 'Betrag' ? (
              <View style={styles.betrag}>
                <InputText style={styles.betragInput} placeholder={`Gib einen ${item.key} ein...`} keyboardType="default" />
                <CurrencySmallDropdown style={styles.betragDropdown} />
              </View>

            ) : item.key === 'Titel' ? (
              <InputText placeholder={`Gib einen ${item.key} ein...`} keyboardType="default" />

            ) : null}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    paddingBottom: 160,
    gap: 48,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerText: {
    color: COLORS.schriftDark,
  },
  inputs: {
    width: '100%',
    flexDirection: 'column',
    paddingHorizontal: 16,
    gap: 32,
  },
  inputfeld: {
    flexDirection: 'column',
    gap: 8,
  },
  inputfeldDropdown: {
    width: '100%',
    flexDirection: 'column',
    gap: 8,
    zIndex: 2,
  },
  labelText: {
    color: COLORS.schriftDark,
  },
  betrag: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 8,
  },
  betragInput: {
    width: '100%',
  },
  betragDropdown: {
    alignSelf: 'flex-end',
  },
});
