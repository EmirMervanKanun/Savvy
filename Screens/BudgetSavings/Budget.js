import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { BudgetSwipe } from '../../Components/Objects/BudgetSwipe';
import AddBudget from './AddBudget';
import Button from '../../Components/Buttons/Button';
import { CategorySwipe } from '../../Components/Objects/CategorySwipe';
import Transaction from '../../Components/Objects/TransStanOrder';
import CategoriesDropdown from '../../Components/Dropdowns/Categories';
import CurrencyBigDropdown from '../../Components/Dropdowns/CurrencyBig';
import CurrencySmallDropdown from '../../Components/Dropdowns/CurrencySmall';
import RepetitionDropdown from '../../Components/Dropdowns/Repetition';

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

export default function Budget() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.budgets}>
          <BudgetSwipe props={{ img: require('../../Icons/Categories/gaming.png'), title: "Games", amount1: 1000, amount2: 2000, dateStart: "25.06.2024", dateEnd: "25.07.2024" }} />
          <BudgetSwipe props={{ img: require('../../Icons/Categories/gaming.png'), title: "Games", amount1: 1000, amount2: 5000, dateStart: "25.06.2024", dateEnd: "25.07.2024" }} />
          <BudgetSwipe props={{ img: require('../../Icons/Categories/gaming.png'), title: "Games", amount1: 111, amount2: 111, dateStart: "25.06.2024", dateEnd: "25.07.2024" }} />
          <BudgetSwipe props={{ img: require('../../Icons/Categories/gaming.png'), title: "Games", amount1: 10, amount2: 150, dateStart: "25.06.2024", dateEnd: "25.07.2024" }} />
          <BudgetSwipe props={{ img: require('../../Icons/Categories/gaming.png'), title: "Games", amount1: 80, amount2: 612, dateStart: "25.06.2024", dateEnd: "25.07.2024" }} />
          <BudgetSwipe props={{ img: require('../../Icons/Categories/gaming.png'), title: "Games", amount1: 100, amount2: 110, dateStart: "25.06.2024", dateEnd: "25.07.2024" }} />
          <BudgetSwipe props={{ img: require('../../Icons/Categories/gaming.png'), title: "Games", amount1: 140, amount2: 450, dateStart: "25.06.2024", dateEnd: "25.07.2024" }} />
          <BudgetSwipe props={{ img: require('../../Icons/Categories/gaming.png'), title: "Games", amount1: 9, amount2: 330, dateStart: "25.06.2024", dateEnd: "25.07.2024" }} />
          <BudgetSwipe props={{ img: require('../../Icons/Categories/gaming.png'), title: "Games", amount1: 1.5, amount2: 3, dateStart: "25.06.2024", dateEnd: "25.07.2024" }} />
          <BudgetSwipe props={{ img: require('../../Icons/Categories/gaming.png'), title: "Games", amount1: 0, amount2: 500, dateStart: "25.06.2024", dateEnd: "25.07.2024" }} />
          <BudgetSwipe props={{ img: require('../../Icons/Categories/gaming.png'), title: "Games", amount1: 8, amount2: 80, dateStart: "25.06.2024", dateEnd: "25.07.2024" }} />

        </View>
        <Button props={{
          color: 'blue',
          size: 'big',
          text: 'Hinzufügen',
          img: require('../../Icons/Button/add.png'),
          //onPress: () => navigation.navigate('AddBudget')
        }} />

        <CategoriesDropdown props={categories} />
        <CurrencyBigDropdown />
        <CurrencySmallDropdown />
        <RepetitionDropdown />
      </View>
    </ScrollView>
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
  budgets: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  }
});