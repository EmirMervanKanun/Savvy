import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../Components/TextComponents/Header';
import InputText from '../../Components/Inputfelder/InputText';
import COLORS from '../../Components/Farben';
import CategoriesDropdown from '../../Components/Dropdowns/Categories';
import CurrencySmallDropdown from '../../Components/Dropdowns/CurrencySmall';
import Button from '../../Components/Buttons/Button';
import Savvy from '../../Backend/SavvyController';
import Budget from './Budget';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const handleGoBack = (navigation) => {
  navigation.goBack();
};

function AddBudget({ navigation }) {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const savvy = new Savvy();
    const fetchedCurrencies = savvy.getCurrencies();
    setCurrencies(fetchedCurrencies);
    console.log("######################################################################");
    console.log("######################################################################");
    console.log("currencyData", fetchedCurrencies);
    console.log("######################################################################");
    console.log("######################################################################");

  }, []);

  /*
   LOG  currencyData [{"label": " ", "value": "0"}, {"label": "Euro €", "value": "1"}, {"label": "USD $", "value": "2"}]
  */

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}><Header>Budget hinzufügen</Header></Text>

        <View style={styles.containerBudgetHinzufügen}>
          <Text style={styles.itemHeader}><Header>Datum</Header></Text>

          <View style={styles.item}>
            <Text style={styles.itemHeader}><Header>Titel</Header></Text>
            <InputText placeholder="Gib einen Titel ein..." keyboardType="default" />
          </View>

          <View style={styles.item}>
            <Text style={styles.itemHeader}><Header>Kategorie</Header></Text>
            <CategoriesDropdown />
          </View>

          <View style={styles.item}>
            <Text style={styles.itemHeader}><Header style={styles.betragHeader}>Betrag</Header></Text>
            <View style={styles.betrag}>
              <InputText placeholder="Gib einen Betrag ein..." keyboardType="numeric" />

              {/* allgemein alles was aus backend kommt wird erst gerendert wenn screen schon 
              gerendert wurde und daten dann eingefügt werden 
              (dropdown auskommentieren, screen laden, entkommentieren) */}

              {/* son dreck hier */}
              {/* ich kann das alles nicht mehr */}

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
              // onPress: hier die Funktion für Speichern einfügen
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
