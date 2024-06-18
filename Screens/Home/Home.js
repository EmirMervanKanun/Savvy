import { StyleSheet, View } from 'react-native';
import React from 'react';
import HomeHeader from '../../Components/OBJHome/HomeHeader';
import PlaceholderText from '../../Components/TextComponents/PlaceholderText';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonActions } from '@react-navigation/native';
import Categories from '../Settings/Categories';
import InputText from '../../Components/Inputfelder/InputText';
import InputDate from '../../Components/Inputfelder/InputDate';
import HomeIE from '../../Components/OBJHome/HomeIE';

const Stack = createNativeStackNavigator();

function AddCategoryStart({ navigation }) {
  return (
    <View style={styles.container} >
      <HomeHeader props={{
        profilePicture: require('../../Icons/ProfilePictures/profilePicture1.png'),
        name: 'John',
        amount: '123.456,89'
      }} />
      <HomeIE props={{ iAmount: '1.234,56', eAmount: '7.890,12' }} />
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
