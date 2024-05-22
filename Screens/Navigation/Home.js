import { StyleSheet, ImageBackground, View, Text } from 'react-native';
import React from 'react';
import HomeIncome from '../../Components/OBJHome/HomeEA';
import HomeHeader from '../../Components/OBJHome/HomeHeader';
import HomeEA from '../../Components/OBJHome/HomeEA';
import Kategorie from '../../Components/SonstSonstiges/Categorielist';
import Categorie from '../../Components/SonstSonstiges/Categorielist';


export default function Home() {
  return (
  <ImageBackground source={require('../../assets/grid.png')} style={{flex: 1, resizeMode: "cover", justifyContent: "center"}}>
    <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
      <Text>Hauptmenü</Text>
    </View>
    </ImageBackground>
  );
}

/*const styles = StyleSheet.create({
  buttoncolor: {
    backgroundColor: COLORS.redMid,
  },
});*/

//<HomeHeader img={require('../../Icons/ProfilePictures/profilePicture1.png')}/>