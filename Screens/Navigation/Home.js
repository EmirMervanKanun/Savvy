import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import HomeHeader from '../../Components/OBJHome/HomeHeader';
import HomeIE from '../../Components/OBJHome/HomeIE';
import Button from '../../Components/Buttons/Buttons';
import {ButtonBack, ButtonSettings} from '../../Components/Buttons/Buttons';


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
  <ImageBackground source={require('../../assets/grid.png')} style={{flex: 1, resizeMode: "cover", justifyContent: "center"}}>
    <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
      <Text>Hauptmenü</Text>
      <Button props={{
        img:require('../../Icons/Button/save.png'),
        text:'Speichern',
        color:'blue',
        size:'big',
        onPress:()=>console.log("testspeichern")
      }}/>
      <Button props={{
        img:require('../../Icons/Button/delete.png'),
        text:'Löschen',
        color:'red',
        size:'small',
        onPress:()=>console.log("testlöschen")
      }}/>
      <Button props={{
        text:'kein text',
        color:'blue',
        size:'small',
        onPress:()=>console.log("testlöschen")
      }}/>
      <Button props={{
        img:require('../../Icons/Button/save.png'),
        color:'red',
        size:'small',
        onPress:()=>console.log("testicon")
      }}/>

      <ButtonBack/>
      <ButtonSettings/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});