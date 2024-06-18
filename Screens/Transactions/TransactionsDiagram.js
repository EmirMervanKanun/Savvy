import { View, StyleSheet } from 'react-native';
import React from 'react';
import ButtonFilter from '../../Components/Buttons/ButtonFilter';


let filterSelected;
function TransactionsDiagramm() {
  return(
  <View style={styles.container}>
        {//Monatsswitcher
        }
        <ButtonFilter options={["Gesamt", "Einnahmen", "Ausgaben"]} chnagedFilter={filterSelected} selectedAtStart={"Gesamt"}/>
        <View style={styles.grafic}></View>
      </View>
  );
}


export default function TransactionDigrammScreen() {
  return (
    <TransactionsDiagramm/>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    gap: 32,
    paddingTop: 24,
    paddingBottom: 220,
  },
  grafic: {
    width: 292,
    height: 400,
    borderColor: 'black',
    borderWidth: 1,
  },
});