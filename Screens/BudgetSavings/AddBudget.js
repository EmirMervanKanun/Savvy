import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

import Header from '../../Components/TextComponents/Header';
import InputText from '../../Components/Inputfelder/InputText';
import COLORS from '../../Components/Farben';
import CategoriesDropdown from '../../Components/Dropdowns/Categories';
import CurrencySmallDropdown from '../../Components/Dropdowns/CurrencySmall';
import Button from '../../Components/Buttons/Button';

import Budget from './Budget';

import { CommonActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import App from '../../App';

const Stack = createNativeStackNavigator();

//const categoriesBackend = App.

/*

const categories = categoriesBackend.map((category, index) => {
  return {
    label: category.label,
    value: index.toString(), // Konvertieren des Index in einen String
    icon: iconMapping[category.icon] || null, // Verwenden der Zuordnung, um das Icon zu erhalten
  };
});

*/


const categoriesResult = [{
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

const handleGoBack = (navigation) => {

  console.log(categoriesBackend);

  //console.log(categories);

  //navigation.goBack();
};

function AddBudget({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}><Header>Budget hinzufügen</Header></Text>

        <View style={styles.containerBudgetHinzufügen} >

          <Text style={styles.itemHeader}><Header>Datum</Header></Text>

          <View style={styles.item}>
            <Text style={styles.itemHeader}><Header>Titel</Header></Text>
            <InputText placeholder={`Gib einen Titel ein...`} keyboardType="default" />
          </View>

          <View style={styles.item}>
            <Text style={styles.itemHeader}><Header>Kategorie</Header></Text>
            <CategoriesDropdown props={categories} />
          </View>

          <View style={styles.item}>
            <Text style={styles.itemHeader}><Header style={styles.betragHeader}>Betrag</Header></Text>
            <View style={styles.betrag}>
              <InputText placeholder={`Gib einen Betrag ein...`} keyboardType="numeric" />
              <CurrencySmallDropdown />
            </View>
          </View>

          <View style={styles.buttons}>
            <Button props={{
              color: 'blue',
              size: 'mid',
              text: 'Abbrechen',
              img: require('../../Icons/Button/cancel.png'),
              onPress: () => handleGoBack(navigation)
            }} />
            <Button props={{
              color: 'blue',
              size: 'mid',
              text: 'Speichern',
              img: require('../../Icons/Button/save.png'),
              //onPress: 
            }} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddBudget" component={AddBudget} options={{ headerShown: false }} />
      <Stack.Screen name="Budget" component={Budget} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function BudgetScreen() {
  return (
    <MyStack />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    paddingBottom: 160,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  header: {
    color: COLORS.schriftDark,
    marginBottom: 48,
  },
  itemHeader: {
    color: COLORS.schriftDark,
  },

  containerBudgetHinzufügen: {
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