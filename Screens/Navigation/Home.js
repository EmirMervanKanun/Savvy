import { StyleSheet, ImageBackground, View, Text } from 'react-native';
import React from 'react';
import HomeHeader from '../../Components/OBJHome/HomeHeader';
import HomeIE from '../../Components/OBJHome/HomeIE';
import Kategorie from '../../Components/SonstSonstiges/Categorielist';
import Categorie from '../../Components/SonstSonstiges/Categorielist';
import ButtonBig from '../../Components/Buttons/Buttons';
import { ButtonMid, ButtonSmall, ButtonIcon } from '../../Components/Buttons/Buttons';



export default function Home() {
  return (
  
    <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
      <Text>Hauptmenü</Text>
      <HomeHeader props={{img: require('../../Icons/ProfilePictures/profilePicture1.png'), amount: 1000}}/>
      <HomeIE props={{i: {amount: 1000}, e: {amount: 500}}}/>
    </View>

  );
}

const styles = StyleSheet.create({
  
});

//<HomeHeader img={require('../../Icons/ProfilePictures/profilePicture1.png')}/>