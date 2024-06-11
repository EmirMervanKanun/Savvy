import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import Header from '../../Components/TextComponents/Header';
import ButtonBack from '../../Components/Buttons/ButtonBack';
import InputText from '../../Components/Inputfelder/InputText';
import SelectionProfile from '../../Components/Selection/SelectProfilePicture';
import CurrencyBigDropdown from '../../Components/Dropdowns/CurrencyBig';
import Button from '../../Components/Buttons/Button';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonActions } from '@react-navigation/native';
import Settings from '../Settings/Settings';

const Stack = createNativeStackNavigator();

function EditProfileStart({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
      
        <View style={styles.buttonContainer}>
          <ButtonBack 
          onPress={() => navigation.dispatch(
            CommonActions.navigate(
              {name: 'Settings'}
            ))} />
        </View>

        <View style={styles.headerContainer}>
          <Header>Profil bearbeiten</Header>
        </View>

        <View style={styles.profilpicContainer}>
          <SelectionProfile />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.headerInput}>
            <Header style={styles.headerText}>Vorname</Header>
          </View>
          <InputText placeholder="Vorname" keyboardType="default" />
          <View style={styles.inputSpacer} />
          <View style={styles.headerInput}>
            <Header style={styles.headerText}>Nachname</Header>
          </View>
          <InputText placeholder="Nachname" keyboardType="default" />
        </View>

        <View style={styles.dropdownContainer}>
          <View style={styles.headerDropdown}>
            <Header style={styles.headerText}>Währung</Header>
          </View>
          <CurrencyBigDropdown />
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
    </ScrollView>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EditProfile" component={EditProfileStart} options={{headerShown:false}}/>
      <Stack.Screen name="Settings" component={Settings} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default function EditProfile(){
  return(
    <MyStack/>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 160,
    backgroundColor: 'white',
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
  headerInput: {
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: 35,
  },
  headerText: {
    marginLeft: 30,
  },
  profilpicContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 0,
  },
  dropdownContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  headerDropdown: {
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: 35,
  },
  inputSpacer: {
    height: 35,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 30,
  },
});

