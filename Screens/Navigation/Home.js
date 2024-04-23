import { StyleSheet, ImageBackground, View, Text } from 'react-native';
import React from 'react';
import ButtonBig from '../../Components/Buttons/Buttons.js';
import {ButtonMid} from '../../Components/Buttons/Buttons.js';
import {ButtonSmall} from '../../Components/Buttons/Buttons.js';

export default function Home() {
  return (
  <ImageBackground source={require('../../assets/grid.png')} style={{flex: 1, resizeMode: "cover", justifyContent: "center"}}>
    <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
      <Text>Hauptmenü</Text>
      <ButtonBig text="Los geht's!" />
      <ButtonMid text="Los geht's!" img={require('../../Icons/NavBar/PlusUnfocused.png')}/>
      <ButtonSmall text="Los geht's!" img={require('../../Icons/NavBar/PlusUnfocused.png')} isRed='1'/>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buttoncolor: {
    backgroundColor: COLORS.redMid,
  },
});