import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import HomeHeader from '../../Components/OBJHome/HomeHeader';
import HomeIE from '../../Components/OBJHome/HomeIE';
import InputText from '../../Components/Inputfelder/InputText';


export default function Home() {
  return (
    <View style={styles.container}>
      <HomeHeader props={{
        profilePicture: require('../../Icons/ProfilePictures/profilePicture1.png'),
        name: 'John',
        amount: '123.456,89'
      }} />
      <Text>Home</Text>
      <HomeIE props={{ iAmount: '1.234,56', eAmount: '7.890,12' }} />
      <InputText placeholder='Gib Input' keyboardType='numeric'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});