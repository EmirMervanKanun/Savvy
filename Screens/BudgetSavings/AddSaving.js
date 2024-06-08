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

export default function AddSavings() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}><Header>Sparziel hinzufügen</Header></Text>
      <FlatList
        contentContainerStyle={styles.containerSavingHinzufügen}
        showsVerticalScrollIndicator={false}
        data={[{ key: 'Datum' }, { key: 'Titel' }, { key: 'Kategorie' }, { key: 'Betrag' }, { key: 'Buttons' }]}
        renderItem={({ item }) => (
          <View style={styles.content}>
            {item.key === 'Datum' ? (
              <Text style={styles.itemHeader}><Header>{item.key}</Header></Text>
            ) : item.key === 'Titel' ? (
              <View style={styles.item}>
                <Text style={styles.itemHeader}><Header>{item.key}</Header></Text>
                <InputText placeholder={`Gib einen ${item.key} ein...`} keyboardType="default" />
              </View>

            ) : item.key === 'Kategorie' ? (
              <View style={styles.item}>
                <Text style={styles.itemHeader}><Header>{item.key}</Header></Text>
                <CategoriesDropdown props={categories} />
              </View>

            ) : item.key === 'Betrag' ? (
              <View style={styles.item}>
                <Text style={styles.itemHeader}><Header style={styles.betragHeader}>{item.key}</Header></Text>
                <View style={styles.betrag}>
                  <InputText placeholder={`Gib einen ${item.key} ein...`} keyboardType="default" />
                  <CurrencySmallDropdown />
                </View>
              </View>

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
        ListFooterComponent={<View style={{ height: 200 }} />}  // Add extra space at the bottom
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 32,
  },

  header: {
    color: COLORS.schriftDark,
    marginBottom: 48,
  },
  itemHeader: {
    color: COLORS.schriftDark,
  },

  containerSavingHinzufügen: {
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
  },
  content: {
    flexDirection: 'column',
    gap: 8,
  },

  item: {
    flexDirection: 'column',
    gap: 8,
  },

  betrag: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 8,
  },

  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});