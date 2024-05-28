import { StyleSheet, ImageBackground, View, Text } from 'react-native';
import React from 'react';
import Button from '../../Components/Buttons/Buttons';
import {ButtonBack, ButtonSettings} from '../../Components/Buttons/Buttons';


export default function Home() {
  return (
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  
});

//<HomeHeader img={require('../../Icons/ProfilePictures/profilePicture1.png')}/>