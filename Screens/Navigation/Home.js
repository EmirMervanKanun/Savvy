import { StyleSheet, ImageBackground, View, Text } from 'react-native';
import React from 'react';
import ButtonBig from '../../Components/Buttons/Buttons';
import {ButtonMid, ButtonSmall, ButtonIcon, ButtonBack, ButtonSettings} from '../../Components/Buttons/Buttons';


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
      <ButtonBack/>
      <ButtonSettings/>

    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  
});

//<HomeHeader img={require('../../Icons/ProfilePictures/profilePicture1.png')}/>