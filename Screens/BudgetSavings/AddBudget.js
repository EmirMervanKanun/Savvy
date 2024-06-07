import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import Header from '../../Components/TextComponents/Header';
import InputText from '../../Components/Inputfelder/InputText';
import COLORS from '../../Components/Farben';
import CategoriesDropdown from '../../Components/Dropdowns/Categories';
import CurrencySmallDropdown from '../../Components/Dropdowns/CurrencySmall';
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

export default function AddBudget() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}><Header>Budget hinzufügen</Header></Text>

      <FlatList
        contentContainerStyle={styles.inputs}
        data={[{ key: 'Titel' }, { key: 'Kategorie' }, { key: 'Betrag' }, { key: 'Buttons' }]}
        renderItem={({ item }) => (
          <View style={styles.inputfelder}>

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

            ) : item.key === 'Buttons' ? (
              <View style={styles.buttons}>
                <Button props={{
                  color: 'blue',
                  size: 'mid',
                  text: 'Abbrechen',
                  img: require('../../Icons/Button/add.png'),
                  //onPress: 
                }} />
                <Button props={{
                  color: 'blue',
                  size: 'mid',
                  text: 'Speichern',
                  img: require('../../Icons/Button/add.png'),
                  //onPress: 
                }} />
              </View>

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
  inputfelder: {
    flexDirection: 'column',
    gap: 8,
  },
  inputfeldDropdown: {
    width: '100%',
    flexDirection: 'column',
    gap: 8,
    zIndex: 1,
  },
  labelText: {
    color: COLORS.schriftDark,
  },
  betrag: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 8,
    zIndex: 1,
  },
  betragInput: {
    width: '100%',
  },
  betragDropdown: {
    alignSelf: 'flex-end',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 2,
  },
});
