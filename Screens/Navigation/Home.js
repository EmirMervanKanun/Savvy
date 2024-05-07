import { StyleSheet, ImageBackground, View, Text } from 'react-native';
import React from 'react';
import ButtonBig from '../../Components/Buttons/Buttons.js';
import {ButtonMid,ButtonSmall, ButtonIcon} from '../../Components/Buttons/Buttons.js';


export default function Home() {
  return (
  <ImageBackground source={require('../../assets/grid.png')} style={{flex: 1, resizeMode: "cover", justifyContent: "center"}}>
    <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
      <Text>Hauptmenü</Text>
      <ButtonBig text="Los geht's!" onPress={()=>console.log("test")}/>
      <ButtonMid text="Bearbeiten" img={require('../../Icons/Button/edit.png')}/>
      <ButtonSmall text="Löschen" img={require('../../Icons/Button/delete.png')} isRed='1'/>
      <ButtonIcon img={require('../../Icons/Button/delete.png')} isRed='1'/>
      <ButtonIcon img={require('../../Icons/Button/save.png')}/>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
});