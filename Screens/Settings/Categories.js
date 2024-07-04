import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../../Components/TextComponents/Header';
import ButtonBack from '../../Components/Buttons/ButtonBack';
import { CommonActions } from '@react-navigation/native';
import Button from '../../Components/Buttons/Button';


export default function CategoriesStart({ navigation }) {
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
