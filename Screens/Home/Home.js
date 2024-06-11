import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../../Components/TextComponents/Header';
import PlaceholderText from '../../Components/TextComponents/PlaceholderText';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonActions } from '@react-navigation/native';
import Categories from '../Settings/Categories';
import InputText from '../../Components/Inputfelder/InputText';
import SelectCatIcon from '../../Components/Selection/SelectCatIcon';
import Button from '../../Components/Buttons/Button';

const Stack = createNativeStackNavigator();

function AddCategoryStart({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Header>Kategorien hinzufügen</Header>
      </View>

      <View style={styles.selectcatContainer}>
          <SelectCatIcon/>
        </View>

      <View style={styles.inputContainer}>
        <View style={styles.headerInput}>
          <Header style={styles.headerText}>Kategorietitel</Header>
        </View>
        <InputText placeholder="Gib einen Kategorietitel ein..." keyboardType="default" />
      </View>

      <View style={styles.buttonRow}>
          <Button props={{
            img: require('../../Icons/Button/cancel.png'),
            text: 'Abbrechen',
            color: 'blue',
            size: 'small',
            // onPress: () => onCancel()
          }} />
          <Button props={{
            img: require('../../Icons/Button/save.png'),
            text: 'Speichern',
            color: 'blue',
            size: 'small',
            // onPress: () => onSave()
          }} />
        </View>
    </View>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddCategory" component={AddCategoryStart} options={{ headerShown: false }} />
      <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function Home() {
  return (
    <MyStack />
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    backgroundColor: 'white',
    paddingBottom: 160,
  },
  selectcatContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 40,
  },
  headerInput: {
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: 35,
    marginBottom: 5,
  },
  headerText: {
    marginLeft: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 50,
    marginTop: 30,
  },
});
