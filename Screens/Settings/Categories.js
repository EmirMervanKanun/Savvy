import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../../Components/TextComponents/Header';
import ButtonBack from '../../Components/Buttons/ButtonBack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonActions } from '@react-navigation/native';
import Settings from '../Settings/Settings';
import AddCategory from '../Settings/AddCategory';
import Button from '../../Components/Buttons/Button';

const Stack = createNativeStackNavigator();

function CategoriesStart({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.buttonContainer}>
        <ButtonBack
          onPress={() => navigation.dispatch(
            CommonActions.navigate(
              { name: 'Settings' }
            ))} />
      </View>

      <View style={styles.headerContainer}>
        <Header>Kategorien</Header>
      </View>

      <View style={styles.buttonAdd}>
        <Button props={
          {
            text: 'Hinzufügen',
            img: require('../../Icons/Button/add.png'),
            color: 'blue',
            size: 'big',
            onPress: () => navigation.dispatch(
              CommonActions.navigate(
                { name: 'AddCategory' }
              )
            )
          }
        }/>
        </View>
    </View>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesStart} options={{headerShown: false}}/>
      <Stack.Screen name="Settings" component={Settings} options={{headerShown: false}}/>
      <Stack.Screen name="AddCategory" component={AddCategory} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default function Categories() {
  return (
    <MyStack/>
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
  buttonContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  headerContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  buttonAdd: {
    marginTop: 40,
  },
});
